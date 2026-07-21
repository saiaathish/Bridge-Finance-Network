"use client"

import { CountUp } from "@/components/reveal"

/**
 * Pull-figure break (§1) — the FULL-BLEED STATEMENT template.
 *
 * A single oversized figure dropped into its own full-width moment as a
 * pacing break between two denser sections. One dominant focal point: the
 * number. Everything around it stays quiet — a short mono eyebrow above, a
 * one-line caption below, generous surrounding space. The figure counts up
 * once on scroll-into-view (CountUp respects reduced motion).
 */
export function PullFigure({
  eyebrow,
  value,
  suffix = "",
  caption,
}: {
  eyebrow: string
  value: number
  suffix?: string
  caption: string
}) {
  return (
    <section className="w-full px-6 py-24 md:px-12 md:py-32 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
          {eyebrow}
        </p>
        <CountUp
          value={value}
          suffix={suffix}
          className="tabular-figures text-7xl leading-none tracking-tight text-foreground md:text-[10rem] lg:text-[13rem]"
        />
        <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
          {caption}
        </p>
      </div>
    </section>
  )
}
