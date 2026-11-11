"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

/**
 * Visible in the server HTML and with JS off. With JS, the hidden pose is
 * applied before the first client paint (transitions suppressed for that
 * one update) and the same scroll reveal plays afterward.
 */
export function useReveal(threshold = 0.3) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useLayoutEffect(() => {
    document.documentElement.classList.add("reveal-instant")
    setIsVisible(false)
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove("reveal-instant")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        root: null,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}
