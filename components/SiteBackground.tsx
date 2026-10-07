"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

/**
 * The site's one moving background: the sunrise sky, mounted once in the
 * root layout behind every page. It sits at the top of the document and
 * sizes itself to the current page's hero (the element marked
 * `data-sky-anchor`), so it covers exactly the hero area and scrolls away
 * with it. `data-sky-anchor="fade"` feathers the bottom edge into the
 * canvas; `"edge"` keeps a hard bottom edge (the homepage, where an
 * opaque band follows the hero).
 *
 * Motion is pure CSS transform drift on the inner gradient — no canvas or
 * WebGL. It pauses while the tab is hidden and is static under
 * prefers-reduced-motion. Pages animate the `[data-site-sky]` layer
 * (scroll fade / parallax) via lib/motion.
 */
export function SiteBackground() {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sky = ref.current
    if (!sky) return
    const anchor = document.querySelector<HTMLElement>("[data-sky-anchor]")
    sky.dataset.edge = anchor?.dataset.skyAnchor === "fade" ? "fade" : "edge"
    if (!anchor) {
      sky.style.removeProperty("--site-sky-height")
      return
    }
    const measure = () => {
      const bottom = anchor.getBoundingClientRect().bottom + window.scrollY
      sky.style.setProperty("--site-sky-height", `${Math.round(bottom)}px`)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(anchor)
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const sync = () => document.documentElement.toggleAttribute("data-tab-hidden", document.hidden)
    sync()
    document.addEventListener("visibilitychange", sync)
    return () => document.removeEventListener("visibilitychange", sync)
  }, [])

  return (
    <div ref={ref} className="site-sky" aria-hidden="true">
      <div className="site-sky-layer" data-site-sky>
        <div className="site-sky-gradient" />
      </div>
    </div>
  )
}
