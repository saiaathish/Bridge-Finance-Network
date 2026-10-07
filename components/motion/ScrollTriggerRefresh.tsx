"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * Recomputes every ScrollTrigger's start/end after client-side route
 * changes (and once web fonts settle), so triggers measured against the
 * previous page's layout never fire early or late.
 */
export function ScrollTriggerRefresh() {
  const pathname = usePathname()

  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
  }, [])

  return null
}
