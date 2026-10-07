"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { fadeUp, getSiteSky, skyScrollFade, textRise, typewriter, useGsap } from "@/lib/motion"

interface PageHeroProps {
  title: string
  /** One word of the title rendered in the EB Garamond italic accent. */
  accent?: string
  /** Optional mono pill above the headline, like the homepage's. */
  kicker?: string
  subtitle?: React.ReactNode
  /** Extra hero content (lists, CTAs) revealed after the headline. */
  children?: React.ReactNode
  /** Right-hand column (e.g. a form). Rendered as-is, not animated here. */
  aside?: React.ReactNode
  /**
   * Headline motion. "type" = homepage typewriter (short titles);
   * "words" = masked word rise (long titles). Defaults by title length.
   */
  motion?: "type" | "words"
  /** Fill the viewport and center vertically (pages whose hero is the page). */
  fullHeight?: boolean
}

/**
 * Inner-page hero built from the homepage hero: optional kicker pill →
 * headline (typewriter or word rise) → subtitle and extras fade up. The
 * shared site sky sizes itself to this section (`data-sky-anchor`) and
 * fades out as it scrolls away.
 */
export function PageHero({
  title,
  accent,
  kicker,
  subtitle,
  children,
  aside,
  motion,
  fullHeight = false,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [typed, setTyped] = useState(false)
  const mode = motion ?? (title.length <= 24 ? "type" : "words")

  useGsap(sectionRef, (env, q) => {
    const heading = headingRef.current!
    const sky = getSiteSky()
    if (sky) skyScrollFade(sky, sectionRef.current!)

    fadeUp(q("[data-hero-lead]"), env)
    const revealRest = (delay = 0) => fadeUp(q("[data-hero-item]"), env, { delay })

    if (mode === "type") {
      typewriter(heading, {
        onComplete: () => {
          setTyped(true)
          revealRest()
        },
      })
    } else {
      textRise(heading, env, { by: "words", delay: 0.1 })
      revealRest(0.5)
    }
  })

  const words = title.split(" ")

  return (
    <section
      ref={sectionRef}
      data-sky-anchor="fade"
      className={cn(
        "relative w-full px-6 md:px-12",
        fullHeight
          ? "flex min-h-[100svh] items-center pb-12 pt-28 md:pt-32"
          : "pb-16 pt-32 md:pb-20 md:pt-40",
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl",
          aside && "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-10 xl:gap-16",
        )}
      >
        <div className={aside ? "max-w-[36rem]" : "max-w-3xl"}>
          {kicker && (
            <div
              data-hero-lead
              className="gsap-hidden mb-4 inline-block rounded-lg border border-border bg-card px-4 py-1.5"
            >
              <p className="type-kicker text-muted-foreground">{kicker}</p>
            </div>
          )}

          {mode === "type" ? (
            <h1
              ref={headingRef}
              className={cn("type-caret type-display text-foreground", typed && "type-done")}
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
          ) : (
            <h1 ref={headingRef} className="gsap-hidden type-display text-foreground">
              {words.map((word, wi) => (
                <span key={wi}>
                  {word === accent ? <span className="accent-word">{word}</span> : word}
                  {wi < words.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
          )}

          {subtitle && (
            <p data-hero-item className="gsap-hidden type-lead mt-6 max-w-2xl text-muted-foreground">
              {subtitle}
            </p>
          )}
          {children && (
            <div data-hero-item className="gsap-hidden mt-7">
              {children}
            </div>
          )}
        </div>

        {aside}
      </div>
    </section>
  )
}
