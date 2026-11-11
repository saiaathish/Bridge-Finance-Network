"use client"

import { useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Mail, ArrowUpRight } from "lucide-react"
import { revealFrom, useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

const FILLOUT_EMBED_SRC = "https://server.fillout.com/embed/v1/"

const CONTACT_EMAIL = "bridgefinancenetwork@gmail.com"
const TEAM_DESCRIPTIONS_URL =
  "https://docs.google.com/document/d/1i-uLRhSGuDdjEuPKhZs7jEf2CnzdrFXcz8oATSSMwYo/edit?usp=sharing"

// Underlined so inline links read as clickable inside card copy.
const inlineLinkClass =
  "font-medium text-foreground underline underline-offset-2 transition-colors hover:text-foreground/70"

interface ApplicationCard {
  label: string
  heading: string
  body: ReactNode
  bullets: ReactNode[]
}

const APPLICATION_CARDS: ApplicationCard[] = [
  {
    label: "Membership Application",
    heading: "Join the next cohort of analysts",
    body: (
      <>
        Submit your application through our official form. We review every submission and follow up with
        approved members about desk placement, onboarding, and chapter roles.
      </>
    ),
    bullets: [
      "Open to motivated high school and college students",
      "No prior finance experience required",
      "Choose a path: Learn, Find, Practice, or Lead",
    ],
  },
  {
    label: "Upper Leadership Application",
    heading: "Join one of BFN's core teams",
    body: (
      <>
        Submit your application through our official form and email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className={inlineLinkClass}>
          {CONTACT_EMAIL}
        </a>
        . We will review your application and reach out to schedule an interview.
      </>
    ),
    bullets: [
      "Open to motivated high school and college students",
      "Experience tailored to your chosen team is preferred",
      <>
        Choose a team:{" "}
        <a href={TEAM_DESCRIPTIONS_URL} target="_blank" rel="noopener noreferrer" className={inlineLinkClass}>
          View team descriptions
        </a>
      </>,
    ],
  },
]

export function ContactSection() {
  const { ref } = useReveal(0.3)
  const pathname = usePathname()

  // The layout script boots Fillout once, so it only binds popup buttons
  // that exist on the first load. These buttons remount after a client
  // navigation. Loading the embed again picks up any that are not yet
  // marked data-fillout-initialized, and leaves ones that already are.
  useEffect(() => {
    const script = document.createElement("script")
    script.src = FILLOUT_EMBED_SRC
    script.async = true
    document.body.appendChild(script)
    return () => {
      script.remove()
    }
  }, [pathname])

  return (
    <section
      ref={ref}
      data-reveal-root
      className="w-full overflow-x-clip px-4 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          data-reveal
          style={revealFrom("translateX(-3rem)")}
          className="mb-8 translate-x-0 opacity-100 transition-all duration-700 md:mb-12"
        >
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Apply To Join
          </h2>
        </div>

        {/* Two application cards — equal width and height on desktop, with
            their buttons pinned to the bottom so they line up. */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {APPLICATION_CARDS.map((card, index) => (
            <div
              key={card.label}
              data-reveal
              className="flex translate-x-0 flex-col rounded-xl border border-border bg-white p-6 opacity-100 transition-all duration-700 md:p-8"
              style={revealFrom("translateX(4rem)", { transitionDelay: `${300 + index * 150}ms` })}
            >
              <p className="mb-2 font-mono text-xs text-muted-foreground">{card.label}</p>
              <h3 className="mb-4 font-sans text-2xl font-light leading-snug tracking-tight text-foreground md:text-3xl">
                {card.heading}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-foreground/80 md:text-base">{card.body}</p>

              <ul className="mb-8 space-y-3">
                {card.bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                variant="primary"
                size="lg"
                className="mt-auto w-full"
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
          ))}
        </div>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          data-reveal
          className="group mt-8 block w-fit translate-x-0 opacity-100 transition-all duration-700 md:mt-12"
          style={revealFrom("translateX(-4rem)", { transitionDelay: "600ms" })}
        >
          <div className="mb-1 flex items-center gap-2">
            <Mail className="h-3 w-3 text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground">Email</span>
          </div>
          <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
            {CONTACT_EMAIL}
          </p>
        </a>
      </div>
    </section>
  )
}
