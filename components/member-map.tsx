"use client"

import { useEffect, useRef } from "react"
import type { Map as LeafletMap } from "leaflet"
import type { Feature, FeatureCollection, MultiPolygon, Polygon, Position } from "geojson"
import "leaflet/dist/leaflet.css"
import locations from "@/data/bfn-member-locations.json"

interface MemberLocation {
  city: string
  region: string
  country: string
  lat: number
  lng: number
  count: number
}

// Site navy (same as the primary buttons / NEW badge).
const DOT_COLOR = "#153B63"
// Golden-angle spiral: dot i sits at angle i * 137.5° and radius ∝ √i, which
// packs a city's dots evenly without overlap — and with no randomness, so
// every dot lands in the same place on every load.
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))
const SPIRAL_STEP_DEG = 0.06

function spiralPoints({ lat, lng, count }: MemberLocation): [number, number][] {
  // Stretch longitude offsets so the spiral stays round away from the equator.
  const lngScale = 1 / Math.cos((lat * Math.PI) / 180)
  return Array.from({ length: count }, (_, i) => {
    const r = SPIRAL_STEP_DEG * Math.sqrt(i)
    const theta = i * GOLDEN_ANGLE
    return [lat + r * Math.sin(theta), lng + r * Math.cos(theta) * lngScale]
  })
}

// Land fill and borders for the built-in world map (no external tiles).
const LAND_COLOR = "#DCE3EE"
const ANTARCTICA_ID = "010"

/**
 * Natural Earth splits a few shapes (Russia, Fiji, …) at ±180°, so their rings
 * jump from 180 to -180 and a flat map would draw a band across the world.
 * Make each ring continuous, then clip it at the date line: the main part
 * stays, and only the slice past ±180° is moved to the other side.
 */
function unwrapRing(ring: Position[]): Position[] {
  let offset = 0
  return ring.map(([lng, lat], i) => {
    if (i > 0) {
      const prev = ring[i - 1][0]
      if (lng - prev > 180) offset -= 360
      else if (lng - prev < -180) offset += 360
    }
    return [lng + offset, lat]
  })
}

/** Sutherland–Hodgman clip of a ring to one side of the meridian `x`. */
function clipRing(ring: Position[], x: number, keepWest: boolean): Position[] {
  const inside = ([lng]: Position) => (keepWest ? lng <= x : lng >= x)
  const out: Position[] = []
  for (let i = 0; i < ring.length; i++) {
    const current = ring[i]
    const previous = ring[(i + ring.length - 1) % ring.length]
    if (inside(current) !== inside(previous)) {
      const t = (x - previous[0]) / (current[0] - previous[0])
      out.push([x, previous[1] + t * (current[1] - previous[1])])
    }
    if (inside(current)) out.push(current)
  }
  return out
}

function splitAtAntimeridian(polygons: Position[][][]): Position[][][] {
  const keep = (rings: Position[][]) => rings.filter((ring) => ring.length >= 3)
  return polygons.flatMap((polygon) => {
    const rings = polygon.map(unwrapRing)
    const lngs = rings[0].map(([lng]) => lng)
    const edge = Math.max(...lngs) > 180 ? 180 : Math.min(...lngs) < -180 ? -180 : 0
    if (edge === 0) return [rings]
    const inWorld = keep(rings.map((ring) => clipRing(ring, edge, edge > 0)))
    const past = keep(
      rings
        .map((ring) => clipRing(ring, edge, edge < 0))
        .map((ring) => ring.map(([lng, lat]) => [lng - Math.sign(edge) * 360, lat])),
    )
    return [inWorld, past].filter((part) => part.length > 0)
  })
}

async function loadLand(): Promise<FeatureCollection<MultiPolygon>> {
  const [{ feature }, atlas] = await Promise.all([
    import("topojson-client"),
    import("world-atlas/countries-50m.json"),
  ])
  const topology = (atlas.default ?? atlas) as unknown as Parameters<typeof feature>[0]
  const countries = feature(
    topology,
    topology.objects.countries,
  ) as unknown as FeatureCollection<Polygon | MultiPolygon>

  return {
    type: "FeatureCollection",
    features: countries.features
      .filter((country) => String(country.id) !== ANTARCTICA_ID)
      .map(
        (country): Feature<MultiPolygon> => ({
          type: "Feature",
          id: country.id,
          properties: {},
          geometry: {
            type: "MultiPolygon",
            coordinates: splitAtAntimeridian(
              country.geometry.type === "Polygon"
                ? [country.geometry.coordinates]
                : country.geometry.coordinates,
            ),
          },
        }),
      ),
  }
}

function tooltipText({ city, region, country, count }: MemberLocation) {
  return `${city}, ${region || country}: ${count} ${count === 1 ? "member" : "members"}`
}

/**
 * World map of BFN members, one dot per member, over a built-in Natural Earth
 * country layer (no tile server). Leaflet touches `window`, so it is imported
 * inside the effect — this component renders only an empty container on the
 * server. The country data (~750 KB) is also loaded on demand.
 */
export function MemberMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: LeafletMap | undefined
    let cancelled = false

    Promise.all([import("leaflet"), loadLand()]).then(([L, land]) => {
      if (cancelled || !containerRef.current) return

      // The populated world (no Antarctica / high Arctic) shows on load;
      // dragging is held to a little past it. The limits are centred on the
      // view's centre (5°E) so wide screens show the world centred.
      const view = L.latLngBounds([-55, -170], [78, 180])
      const limits = L.latLngBounds([-65, -195], [85, 205])

      map = L.map(containerRef.current, {
        zoomSnap: 0,
        maxZoom: 7,
        scrollWheelZoom: false,
        worldCopyJump: false,
        maxBounds: limits,
        maxBoundsViscosity: 1,
      })
      // Low enough that the full view fits on any screen width.
      const fitZoom = map.getBoundsZoom(view)
      map.setMinZoom(Math.min(2, fitZoom))
      map.fitBounds(view)

      map.attributionControl.setPrefix(false)
      map.attributionControl.addAttribution(
        'Map data: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener noreferrer">Natural Earth</a>',
      )

      // Land sits in its own pane under the dots and ignores the pointer, so
      // hovering or tapping a dot always reaches the dot's tooltip.
      map.createPane("land").style.zIndex = "350"
      L.geoJSON(land, {
        pane: "land",
        interactive: false,
        style: { fillColor: LAND_COLOR, fillOpacity: 1, color: "#ffffff", weight: 0.75 },
      }).addTo(map)

      for (const location of locations as MemberLocation[]) {
        const text = tooltipText(location)
        for (const point of spiralPoints(location)) {
          L.circleMarker(point, {
            radius: 3,
            stroke: false,
            fillColor: DOT_COLOR,
            fillOpacity: 0.75,
          })
            .bindTooltip(text, { direction: "top", offset: [0, -4] })
            .addTo(map)
        }
      }
    })

    return () => {
      cancelled = true
      map?.remove()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Map of BFN member locations"
      // `isolate` keeps Leaflet's internal z-indexes below the fixed nav.
      className="relative isolate z-0 h-[380px] w-full overflow-hidden rounded-xl border border-border !bg-card md:h-[520px]"
    />
  )
}
