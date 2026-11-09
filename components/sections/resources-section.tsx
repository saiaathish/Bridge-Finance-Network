"use client"

import { useReveal } from "@/hooks/use-reveal"

const RESOURCE_HUB_URL = "https://bfnresources.zite.so/auth/login"

const RESOURCE_TAGS = [
  "Internships",
  "YouTube Videos",
  "Virtual Courses",
  "Career Prep",
  "Organization Databases",
  "And More",
]

export function ResourcesSection() {
  const { ref, isVisible } = useReveal(0.3)

  // Each block rises in with a short stagger, matching the other homepage bands.
  const revealClass = `transition-all duration-700 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
  }`
  const delay = (ms: number) => ({ transitionDelay: `${ms}ms` })

  return (
    <section
      ref={ref}
      className="w-full overflow-x-clip px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <div className={revealClass} style={delay(0)}>
          <span className="inline-block rounded-lg border border-[#153B63]/30 bg-[#153B63]/10 px-3 py-1 font-mono text-xs font-medium tracking-wider text-[#153B63]">
            NEW
          </span>
        </div>

        <h2
          style={delay(100)}
          className={`${revealClass} mt-5 font-display text-4xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl`}
        >
          The BFN Resource Hub
        </h2>

        <p
          style={delay(200)}
          className={`${revealClass} mt-6 max-w-[700px] text-base leading-relaxed text-foreground/80 md:text-lg`}
        >
          Everything you need to explore finance, gathered in one place. Our hub brings together
          internship opportunities, YouTube videos, external virtual courses, career preparation
          materials, databases from other organizations, and more.
        </p>

        <ul
          style={delay(300)}
          className={`${revealClass} mt-8 flex max-w-[700px] flex-wrap justify-center gap-2`}
        >
          {RESOURCE_TAGS.map(tag => (
            <li
              key={tag}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div style={delay(400)} className={`${revealClass} mt-10 flex flex-col items-center`}>
          {/* Same look as the site's primary MagneticButton (size lg), rendered
              as a real link so it opens the hub in a new tab. */}
          <a
            href={RESOURCE_HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-transparent bg-[#153B63] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-150 ease-out hover:bg-[#123354]"
          >
            Explore the Resource Hub
          </a>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Continuously updated by BFN.
          </p>
        </div>
      </div>
    </section>
  )
}
