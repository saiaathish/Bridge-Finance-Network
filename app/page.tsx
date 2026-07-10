"use client"

import { ApproachSection } from "@/components/sections/approach-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TeamSection } from "@/components/sections/team-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { MagneticButton } from "@/components/magnetic-button"
import { APPLICATION_URL } from "@/lib/constants"
import { heroIntro, heroSkyParallax, typewriter } from "@/lib/motion"
import { useRef, useEffect, useLayoutEffect, useState } from "react"

const HERO_STATS = [
  { value: "200+", label: "Student Members" },
  { value: "4", label: "Coverage Desks" },
  { value: "4", label: "Member Paths" },
]

// Headline broken into char spans for the typewriter reveal; "Finance"
// keeps the italic accent treatment.
const HEADLINE_LINES: { text: string; accent?: boolean }[][] = [
  [{ text: "Bridge " }, { text: "Finance", accent: true }],
  [{ text: "Network" }],
]

function TypewriterHeadline({ onDone }: { onDone: () => void }) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [done, setDone] = useState(false)

  // useLayoutEffect so GSAP claims the hidden elements before first paint
  useLayoutEffect(() => {
    if (!ref.current) return
    const tween = typewriter(ref.current, {
      onComplete: () => {
        setDone(true)
        onDone()
      },
    })
    return () => {
      tween.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <h1
      ref={ref}
      className={`type-caret ${done ? "type-done" : ""} mb-6 font-display text-5xl font-medium leading-[1.08] tracking-tight text-foreground md:text-7xl lg:text-[84px]`}
      aria-label="Bridge Finance Network"
    >
      {HEADLINE_LINES.map((line, li) => (
        <span key={li} className="block">
          {line.map((part, pi) => (
            <span key={pi} className={part.accent ? "accent-word" : undefined} aria-hidden="true">
              {part.text.split("").map((char, ci) => (
                <span key={ci} data-char className="gsap-hidden">
                  {char === " " ? " " : char}
                </span>
              ))}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}

// Stat row as a continuous marquee ticker; duplicated once so the loop is
// seamless at translateX(-50%).
function StatMarquee() {
  return (
    <div className="stat-marquee border-t border-border pt-8" aria-label="200+ Student Members, 4 Coverage Desks, 4 Member Paths">
      <div className="stat-marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {HERO_STATS.map((stat) => (
              <div key={`${copy}-${stat.label}`} className="flex items-baseline gap-3 pr-16">
                <span className="font-mono text-2xl text-foreground md:text-3xl">{stat.value}</span>
                <span className="text-sm font-semibold text-muted-foreground">{stat.label}</span>
                <span className="pl-10 font-mono text-muted-foreground/50">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

// Nav order is unchanged; sections are keyed so the band order below can
// differ from nav order.
const NAV_ITEMS = [
  { label: "Home", key: "hero" },
  { label: "Approach", key: "approach" },
  { label: "Programs", key: "programs" },
  { label: "Team", key: "team" },
  { label: "About", key: "about" },
  { label: "Apply", key: "contact" },
] as const

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const skyRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const [activeKey, setActiveKey] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  // Badge fades up immediately; subhead/CTAs/stat ticker follow once the
  // typewriter headline finishes. useLayoutEffect: runs before paint so
  // there is no visible-then-hidden flash.
  useLayoutEffect(() => {
    if (!heroRef.current) return
    const tween = heroIntro(heroRef.current.querySelectorAll("[data-hero-lead]"))
    return () => {
      tween.kill()
    }
  }, [])

  const revealHeroRest = () => {
    if (!heroRef.current) return
    heroIntro(heroRef.current.querySelectorAll("[data-hero-item]"))
  }

  // Sky parallax (0.3x desktop / 0.15x mobile) + fade-out as the About band
  // enters at 80% viewport.
  useEffect(() => {
    if (!skyRef.current) return
    const aboutEl = sectionRefs.current["about"]
    if (!aboutEl) return
    const mm = heroSkyParallax(skyRef.current, aboutEl)
    return () => {
      mm?.revert()
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const marker = window.scrollY + window.innerHeight * 0.4
      let current = "hero"
      for (const key of Object.keys(sectionRefs.current)) {
        const el = sectionRefs.current[key]
        if (el && el.offsetTop <= marker) current = key
      }
      setActiveKey(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToKey = (key: string) => {
    sectionRefs.current[key]?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // Sections still call scrollToSection with the old numeric indices.
  const scrollToSection = (index: number) => {
    const keys = ["hero", "approach", "programs", "team", "about", "contact"]
    scrollToKey(keys[index] ?? "hero")
  }

  const registerSection = (key: string) => (el: HTMLElement | null) => {
    sectionRefs.current[key] = el
  }

  return (
    <main className="relative w-full bg-background text-foreground">
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex h-[72px] items-center justify-between px-6 transition-colors duration-150 md:px-12 ${
          scrolled ? "border-b border-border bg-card/95" : "bg-transparent"
        }`}
      >
        <button onClick={() => scrollToKey("hero")} className="flex items-center">
          <img
            src="/bridge-finance-logo.png"
            alt="Bridge Finance Network logo"
            className="h-10 w-auto object-contain"
          />
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToKey(item.key)}
              className={`group relative font-sans text-sm font-semibold transition-colors duration-150 ${
                activeKey === item.key ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-150 ${
                  activeKey === item.key ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        <MagneticButton variant="ghost" onClick={() => window.open(APPLICATION_URL, "_blank")}>
          Apply to Join
        </MagneticButton>
      </nav>

      {/* Hero — warm canvas on the left, full-bleed sunrise sky on the right */}
      <section
        ref={registerSection("hero")}
        className="hero-fade relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 pb-20 pt-28 md:px-12"
      >
        {/* Extends 40% above the hero so the downward parallax drift never
            exposes a blank strip along the clipped top edge */}
        <div ref={skyRef} className="sky-beam pointer-events-none absolute -top-[40%] bottom-0 right-0 w-full md:w-[62%]" />

        <div ref={heroRef} className="relative mx-auto w-full max-w-7xl">
          <div data-hero-lead className="gsap-hidden mb-4 inline-block rounded-lg border border-border bg-card px-4 py-1.5">
            <p className="font-mono text-xs text-muted-foreground">STUDENT-LED NONPROFIT FINANCE NETWORK</p>
          </div>

          <TypewriterHeadline onDone={revealHeroRest} />

          <p data-hero-item className="gsap-hidden mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            <span className="text-pretty">
              A student-led nonprofit helping motivated students build finance skills, find credible opportunities,
              compete, publish research, and lead local chapters.
            </span>
          </p>
          <div data-hero-item className="gsap-hidden mb-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MagneticButton size="lg" variant="primary" onClick={() => window.open(APPLICATION_URL, "_blank")}>
              Apply to Join
            </MagneticButton>
            <MagneticButton size="lg" variant="secondary" onClick={() => scrollToKey("programs")}>
              View Opportunities
            </MagneticButton>
          </div>

          {/* Live stat ticker inside the hero */}
          <div data-hero-item className="gsap-hidden">
            <StatMarquee />
          </div>
        </div>
      </section>

      {/* About story — Haze band */}
      <div ref={registerSection("about")} className="w-full bg-card">
        <AboutSection scrollToSection={scrollToSection} />
      </div>

      {/* Approach — canvas */}
      <div ref={registerSection("approach")} className="w-full">
        <ApproachSection />
      </div>

      {/* Programs — Haze band */}
      <div ref={registerSection("programs")} className="w-full bg-card">
        <ServicesSection />
      </div>

      {/* Team preview — canvas */}
      <div ref={registerSection("team")} className="w-full">
        <TeamSection />
      </div>

      {/* Apply CTA — Haze band */}
      <div ref={registerSection("contact")} className="w-full bg-card">
        <ContactSection />
      </div>
    </main>
  )
}
