"use client"

import { useEffect, useRef } from "react"
import type { Map as LeafletMap } from "leaflet"
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

function tooltipText({ city, region, country, count }: MemberLocation) {
  return `${city}, ${region || country}: ${count} ${count === 1 ? "member" : "members"}`
}

/**
 * World map of BFN members, one dot per member. Leaflet touches `window`, so
 * it is imported inside the effect — this component renders only an empty
 * container on the server.
 */
export function MemberMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: LeafletMap | undefined
    let cancelled = false

    import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return

      const world = L.latLngBounds([-85, -180], [85, 180])
      // Open with the whole world spanning the map's width (never below the
      // minimum zoom of 2), so wide screens don't show empty side strips.
      const fitWidthZoom = Math.log2(containerRef.current.clientWidth / 256)
      map = L.map(containerRef.current, {
        // On narrow screens only part of the world fits at zoom 2, so open on
        // North America, where most members are; on wide screens the whole
        // world spans the width and this centre makes no visible difference.
        center: [30, -65],
        zoom: Math.min(7, Math.max(2, fitWidthZoom)),
        zoomSnap: 0,
        minZoom: 2,
        maxZoom: 7,
        scrollWheelZoom: false,
        worldCopyJump: false,
        maxBounds: world,
        maxBoundsViscosity: 1,
      })

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        noWrap: true,
        bounds: world,
        minZoom: 2,
        maxZoom: 7,
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
      // Background matches the basemap's water so any space past the map's
      // edges (when zoomed all the way out) reads as ocean, not a gap.
      className="relative isolate z-0 h-[380px] w-full overflow-hidden rounded-xl border border-border !bg-[#d4dadc] md:h-[520px]"
    />
  )
}
