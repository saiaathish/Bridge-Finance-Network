"use client"

import { useReveal } from "@/hooks/use-reveal"
import { MemberMap } from "@/components/member-map"

export function ExpansionSection() {
  const { ref, isVisible } = useReveal(0.2)

  const revealClass = `transition-all duration-700 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
  }`
  const delay = (ms: number) => ({ transitionDelay: `${ms}ms` })

  return (
    <section
      ref={ref}
      className="w-full overflow-x-clip px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className={`${revealClass} flex items-center justify-center gap-4`} style={delay(0)}>
            <span className="h-px w-16 bg-border sm:w-24" aria-hidden="true" />
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
              Expansion
            </p>
            <span className="h-px w-16 bg-border sm:w-24" aria-hidden="true" />
          </div>

          <h2
            style={delay(100)}
            className={`${revealClass} mt-5 font-display text-4xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl`}
          >
            A Growing Global Network
          </h2>

          <p
            style={delay(200)}
            className={`${revealClass} mt-6 max-w-[700px] text-base leading-relaxed text-foreground/80 md:text-lg`}
          >
            BFN&apos;s student community now reaches more than 140 cities across 16 countries. Each dot
            represents one BFN member, and every new member brings us closer to making finance
            education and opportunity accessible to students everywhere.
          </p>
        </div>

        <div style={delay(300)} className={`${revealClass} mt-10`}>
          <MemberMap />
          <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
            Drag to explore, and zoom in to see each city.
          </p>
        </div>
      </div>
    </section>
  )
}
