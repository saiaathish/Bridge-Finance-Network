"use client"

import Link from "next/link"
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
          <h2
            style={delay(0)}
            className={`${revealClass} font-display text-4xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl`}
          >
            A Growing Global Network
          </h2>

          <p
            style={delay(100)}
            className={`${revealClass} mt-6 max-w-[700px] text-base leading-relaxed text-foreground/80 md:text-lg`}
          >
            BFN&apos;s student community now reaches more than 140 cities across 16 countries. Each dot
            marks where our members are, and every new member brings us closer to making finance
            education and opportunity accessible to students everywhere.
          </p>
        </div>

        <div style={delay(200)} className={`${revealClass} mt-10`}>
          <MemberMap />
          <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
            Drag to explore, and zoom in to see each city.
          </p>
          <div className="mt-6 flex justify-center">
            {/* Same look as MagneticButton variant="secondary", rendered as a link. */}
            <Link
              href="/directory"
              className="inline-block rounded-lg border border-border bg-transparent px-6 py-2.5 text-sm font-semibold text-foreground transition-colors duration-150 ease-out hover:border-muted-foreground"
            >
              Meet Our Members
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
