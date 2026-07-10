"use client"

import { heroIntro, typewriter } from "@/lib/motion"
import { useLayoutEffect, useRef, useState } from "react"

interface PageHeroProps {
  kicker: string
  title: string
  /** One word of the title rendered in the EB Garamond italic accent (max one per page). */
  accent?: string
  subtitle?: string
  /** Extra hero content (chips, etc.) revealed with the subtitle. */
  children?: React.ReactNode
  /** Render the sky-band divider under the hero (default true). */
  divider?: boolean
}

/**
 * Shared page hero: staged kicker fade → typewriter headline with caret →
 * subtitle/children reveal, over the sunrise sky. Same motion grammar as
 * the landing hero.
 */
export function PageHero({ kicker, title, accent, subtitle, children, divider = true }: PageHeroProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [done, setDone] = useState(false)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || !headingRef.current) return
    const tweens = [
      heroIntro(root.querySelectorAll("[data-hero-lead]")),
      typewriter(headingRef.current, {
        onComplete: () => {
          setDone(true)
          const items = root.querySelectorAll("[data-hero-item]")
          if (items.length > 0) heroIntro(items)
        },
      }),
    ]
    return () => {
      tweens.forEach((t) => t.kill())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const words = title.split(" ")

  return (
    <>
      <section className="hero-fade relative overflow-hidden pt-36 pb-20">
        <div className="sky-beam pointer-events-none absolute bottom-0 right-0 top-0 w-full md:w-[55%]" />
        <div ref={rootRef} className="container relative">
          <span data-hero-lead className="gsap-hidden inline-block font-mono text-signal text-sm font-semibold uppercase tracking-wider mb-4">
            {kicker}
          </span>
          <h1
            ref={headingRef}
            className={`type-caret ${done ? "type-done" : ""} font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight max-w-3xl ${subtitle || children ? "mb-4" : ""}`}
            aria-label={title}
          >
            {words.map((word, wi) => (
              <span key={wi} className={word === accent ? "accent-word" : undefined} aria-hidden="true">
                {word.split("").map((char, ci) => (
                  <span key={ci} data-char className="gsap-hidden">
                    {char}
                  </span>
                ))}
                {wi < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p data-hero-item className="gsap-hidden text-lg text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          )}
          {children && (
            <div data-hero-item className="gsap-hidden mt-6">
              {children}
            </div>
          )}
        </div>
      </section>
      {divider && <div className="sky-band h-1.5 w-full" />}
    </>
  )
}
