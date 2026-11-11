"use client"

import { revealFrom, useReveal } from "@/hooks/use-reveal"
import { wordReveal } from "@/lib/motion"
import { programs, type Program } from "@/lib/programs-data"
import { useEffect, useRef } from "react"

export function ServicesSection() {
  // The section is several screens tall now, so the heading reveals as soon as
  // the section starts entering view; each card has its own trigger below.
  const { ref } = useReveal(0.05)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    const tween = wordReveal(headingRef.current)
    return () => {
      tween.kill()
    }
  }, [])

  return (
    <section
      ref={ref}
      data-reveal-root
      className="w-full overflow-x-clip px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          data-reveal
          style={revealFrom("translateY(-3rem)")}
          className="mb-12 translate-y-0 opacity-100 transition-all duration-700 md:mb-16"
        >
          <h2 ref={headingRef} className="font-display text-5xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Specialized Programs We Offer
          </h2>
        </div>

        <div className="space-y-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.number} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Same staggered, alternating-direction entrance the original cards used.
const REVEAL_FROM_TRANSFORM = [
  "translateY(-4rem)",
  "translateX(4rem)",
  "translateX(-4rem)",
  "translateY(4rem)",
]

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const { ref } = useReveal(0.15)

  return (
    <article
      ref={ref}
      data-reveal-root
      data-reveal
      style={revealFrom(REVEAL_FROM_TRANSFORM[index % REVEAL_FROM_TRANSFORM.length])}
      className="grid translate-x-0 translate-y-0 overflow-hidden rounded-xl border border-border bg-white opacity-100 transition-all duration-700 lg:grid-cols-[300px_minmax(0,1fr)]"
    >
      {/* Left: number, name, description */}
      <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-px w-8 bg-foreground/30" />
          <span className="font-mono text-xs text-muted-foreground">{program.number}</span>
          {program.comingSoon && (
            <span className="rounded-lg border border-[#153B63]/30 bg-[#153B63]/10 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-[#153B63]">
              Coming Soon
            </span>
          )}
        </div>
        <h3 className="font-display text-2xl font-medium leading-tight tracking-tight text-foreground md:text-3xl">
          {program.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">{program.description}</p>
        {program.note && <p className="mt-3 font-mono text-xs text-muted-foreground">{program.note}</p>}
      </div>

      {/* Right: four parts, then the totals strip — or a short note for a
          program whose details aren't published yet. Empty fields don't render. */}
      {program.comingSoon ? (
        <div className="flex items-center justify-center p-6 md:p-8">
          <p className="text-center text-sm text-muted-foreground">Course details coming soon.</p>
        </div>
      ) : (
        <div className="flex flex-col">
          {program.parts && program.parts.length > 0 && (
            <div className="grid flex-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
              {program.parts.map((part) => (
                <div key={part.label} className="flex flex-col p-5 sm:border-b sm:border-border lg:border-b-0">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{part.label}</p>
                  <p className="mt-1.5 text-sm font-semibold leading-snug text-foreground">{part.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{part.description}</p>
                  {part.tags && part.tags.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                      {part.tags.map((tag) => (
                        <span
                          key={tag}
                          className="whitespace-nowrap rounded-full bg-[#153B63]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#153B63]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {(program.totals?.length || program.finalValue || program.gain) && (
            <div className="flex flex-col gap-5 border-t border-border bg-signal/[0.04] px-5 py-4 md:flex-row md:flex-wrap md:items-center md:gap-x-8">
              {program.totals && program.totals.length > 0 && (
                <div className="flex gap-6">
                  {program.totals.map((total) => (
                    <div key={total.label}>
                      <p className="font-display text-2xl font-medium leading-none text-foreground">{total.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {total.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {program.finalValue && (
                <div className="min-w-0 flex-1 md:min-w-[200px]">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {program.finalLabel ?? "Final assignment"}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-foreground">{program.finalValue}</p>
                </div>
              )}
              {program.gain && (
                <div className="min-w-0 flex-1 md:min-w-[200px]">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">What you gain</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-foreground">{program.gain}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  )
}
