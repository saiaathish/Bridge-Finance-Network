"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Recalculates ScrollTrigger start/end positions after each route change (§4).
 *
 * When a new route's height differs from the last, triggers created during the
 * new page's mount can latch onto stale scroll positions and fire early or
 * never. A refresh on the next frame — once the incoming page has laid out —
 * keeps every trigger aligned to the real document. No-ops under reduced
 * motion, where scroll animations are disabled anyway.
 */
export function ScrollRefresh() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return null
}
