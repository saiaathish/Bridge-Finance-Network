"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"
import { MagneticButton } from "@/components/magnetic-button"
import { fadeUp, textRise, useGsap } from "@/lib/motion"
import { APPLICATION_URL } from "@/lib/constants"

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const router = useRouter()

  useGsap(ref, (env, q) => {
    const [heading] = q("[data-rise]")
    if (heading) textRise(heading, env, { by: "words", trigger: ref.current!, start: "top 75%" })
    fadeUp(q("[data-fade]"), env, { trigger: ref.current!, start: "top 75%", delay: 0.2 })
  })

  return (
    <section ref={ref} className="w-full px-4 py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Headline */}
          <div>
            <h2 data-rise className="gsap-hidden type-h2 text-foreground">
              Built locally.
              <br />
              Connected
              <br />
              <span className="text-muted-foreground">nationally.</span>
            </h2>
          </div>

          {/* Right side - Story + CTA */}
          <div className="flex flex-col justify-center space-y-4">
            <p data-fade className="gsap-hidden type-body max-w-md text-foreground/90">
              BFN is a student-led 501(c)(3) nonprofit expanding access to finance education, curated opportunities,
              competitions, and practical career preparation.
            </p>
            <p data-fade className="gsap-hidden type-body max-w-md text-foreground/90">
              Students apply publicly, and approved members receive organized opportunities, templates, deadlines,
              chapter materials, and internal workflows after review.
            </p>
            <div data-fade className="gsap-hidden flex flex-wrap gap-3 pt-4 md:gap-4">
              <MagneticButton size="lg" variant="primary" onClick={() => window.open(APPLICATION_URL, "_blank")}>
                Apply to Join
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => router.push("/directory")}>
                Meet the Team
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
