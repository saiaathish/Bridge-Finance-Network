"use client"

import { useCallback, useEffect, useRef, type CSSProperties } from "react"

type RevealStyle = CSSProperties & { "--reveal-from"?: string }

/** Visible-state styles plus the pose CSS uses until `data-revealed` is set. */
export function revealFrom(from: string, extra?: CSSProperties): RevealStyle {
  return { ...extra, "--reveal-from": from }
}

/**
 * Scroll reveal. The hidden pose lives in CSS under `html.js`, which a
 * blocking head script adds before first paint. This hook only marks the
 * targets revealed so their existing transition can run. With JS off there
 * is no `js` class, so the server HTML stays visible.
 */
export function useReveal(threshold = 0.3) {
  const ref = useRef<HTMLElement | null>(null)

  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node
    // Commit order is child-first, so a nested reveal root is marked before
    // its parent collects targets.
    if (node) node.setAttribute("data-reveal-root", "")
  }, [])

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = [
      ...(root.matches("[data-reveal]") ? [root] : []),
      ...root.querySelectorAll<HTMLElement>("[data-reveal]"),
    ].filter((el) => el.closest("[data-reveal-root]") === root)

    const show = () => {
      targets.forEach((el) => el.setAttribute("data-revealed", ""))
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        show()
        observer.disconnect()
      },
      { threshold, root: null },
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [threshold])

  return { ref: setRef }
}
