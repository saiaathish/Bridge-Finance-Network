"use client"

import { Mail, MapPin, ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { APPLICATION_URL } from "@/lib/constants"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="w-full overflow-x-clip px-4 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Apply
                <br />
                to join
              </h2>
              <p className="font-mono text-xs text-muted-foreground md:text-base">/ Start with the public application</p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a
                href="mailto:bridgefinancenetwork@gmail.com"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Mail className="h-3 w-3 text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">Email</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  bridgefinancenetwork@gmail.com
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">Reach</span>
                </div>
                <p className="text-base text-foreground md:text-2xl">Nationwide, USA</p>
              </div>

              <div
                className={`flex gap-2 pt-2 transition-all duration-700 md:pt-4 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                {["About", "Team", "Resources", "FAQ"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="border-b border-transparent font-mono text-xs text-muted-foreground transition-all hover:border-foreground/60 hover:text-foreground/90"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Application call to action */}
          <div className="flex flex-col justify-center">
            <div
              className={`rounded-xl border border-border bg-white p-6 transition-all duration-700 md:p-8 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="mb-2 font-mono text-xs text-muted-foreground">Membership Application</p>
              <h3 className="mb-4 font-sans text-2xl font-light leading-snug tracking-tight text-foreground md:text-3xl">
                Join the next cohort of analysts
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-foreground/80 md:text-base">
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
                onClick={() => window.open(APPLICATION_URL, "_blank")}
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
