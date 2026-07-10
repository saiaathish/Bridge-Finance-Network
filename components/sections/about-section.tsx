"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import { APPLICATION_URL } from "@/lib/constants"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section ref={ref} className="w-full px-4 py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Headline */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Built locally.
              <br />
              Connected
              <br />
              <span className="text-muted-foreground">nationally.</span>
            </h2>
          </div>

          {/* Right side - Story + CTA */}
          <div
            className={`flex flex-col justify-center space-y-4 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
              BFN is a student-led nonprofit expanding access to finance education, curated opportunities,
              competitions, and practical career preparation.
            </p>
            <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
              Students apply publicly, and approved members receive organized opportunities, templates, deadlines,
              chapter materials, and internal workflows after review.
            </p>
            <div className="flex flex-wrap gap-3 pt-4 md:gap-4">
              <MagneticButton size="lg" variant="primary" onClick={() => window.open(APPLICATION_URL, "_blank")}>
                Apply to Join
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(3)}>
                Meet the Team
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
