"use client"

import Link from "next/link"
import { Mail, MapPin, ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import { fadeUp, slideIn, textRise, useGsap } from "@/lib/motion"

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Programs", href: "#programs" },
  { label: "Apply", href: "#contact" },
]

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)

  useGsap(ref, (env, q) => {
    const section = ref.current!
    const [heading] = q("[data-rise]")
    if (heading) textRise(heading, env, { by: "chars", trigger: section, start: "top 75%" })
    fadeUp(q("[data-eyebrow]"), env, { trigger: section, start: "top 75%", delay: 0.3 })
    slideIn(q("[data-slide-left]"), env, { from: "left", trigger: section, start: "top 75%", delay: 0.35 })
    slideIn(q("[data-slide-right]"), env, { from: "right", trigger: section, start: "top 75%", delay: 0.3 })
  })

  return (
    <section
      ref={ref}
      className="w-full overflow-x-clip px-4 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 md:mb-12">
              <h2 data-rise className="gsap-hidden type-h2 mb-2 text-foreground md:mb-3">
                Apply
                <br />
                to join
              </h2>
              <p data-eyebrow className="gsap-hidden type-eyebrow text-muted-foreground">/ Start with the public application</p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a
                href="mailto:bridgefinancenetwork@gmail.com"
                data-slide-left
                className="gsap-hidden group block"
              >
                <div className="mb-1 flex items-center gap-2">
                  <Mail className="h-3 w-3 text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">Email</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  bridgefinancenetwork@gmail.com
                </p>
              </a>

              <div data-slide-left className="gsap-hidden">
                <div className="mb-1 flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">Reach</span>
                </div>
                <p className="text-base text-foreground md:text-2xl">Nationwide, USA</p>
              </div>

              <div data-slide-left className="gsap-hidden flex gap-2 pt-2 md:pt-4">
                {QUICK_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="border-b border-transparent font-mono text-xs text-muted-foreground transition-all hover:border-foreground/60 hover:text-foreground/90"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Application call to action */}
          <div className="flex flex-col justify-center">
            <div data-slide-right className="gsap-hidden rounded-xl border border-border bg-surface p-6 md:p-8">
              <p className="mb-2 font-mono text-xs text-muted-foreground">Membership Application</p>
              <h3 className="type-title mb-4 text-foreground">
                Join the next cohort of analysts
              </h3>
              <p className="type-card mb-6 text-foreground/80">
                Submit your application through our official form. We review every submission and follow up with
                approved members about desk placement, onboarding, and chapter roles.
              </p>

              <ul className="mb-8 space-y-3">
                {[
                  "Open to motivated high school and college students",
                  "No prior finance experience required",
                  "Choose a path: Learn, Find, Practice, or Lead",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>

              <MagneticButton
                variant="primary"
                size="lg"
                className="w-full"
                data-fillout-id="nWRnBTFVZHus"
                data-fillout-embed-type="popup"
                data-fillout-dynamic-resize
                data-fillout-inherit-parameters
                data-fillout-popup-size="medium"
              >
                <span className="group flex items-center justify-center gap-2">
                  Start Application
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
