"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import { APPLICATION_URL } from "@/lib/constants"

/**
 * About story.
 *
 * Template: STATEMENT SPLIT (§1) — but deliberately varied from the Contact
 * statement-split so the two don't read as the same recipe. Here the headline
 * lives on the RIGHT and carries the larger share of a true 7/5 grid, and both
 * columns are baseline-anchored (items-end) so the supporting prose feeds up
 * into the headline rather than sitting beside it in matched blocks.
 */
export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section ref={ref} className="w-full px-4 py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-16">
          {/* Left / narrower — supporting prose + CTA (5 of 12) */}
          <div
            className={`flex flex-col justify-end space-y-4 transition-all duration-700 md:col-span-5 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
              BFN is a student-led nonprofit expanding access to finance education, curated
              opportunities, competitions, and practical career preparation.
            </p>
            <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
              Students apply publicly, and approved members receive organized opportunities,
              templates, deadlines, chapter materials, and internal workflows after review.
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

          {/* Right / wider — the headline is the focal point (7 of 12) */}
          <div
            className={`transition-all duration-700 md:col-span-7 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <h2 className="font-display text-4xl font-medium leading-[1.02] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Built locally.
              <br />
              Connected
              <br />
              <span className="text-muted-foreground">nationally.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
