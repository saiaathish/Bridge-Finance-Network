"use client";

import { ApproachSection } from "@/components/sections/approach-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { MagneticButton } from "@/components/magnetic-button";
import { HomeHeader } from "@/components/HomeHeader";
import { APPLICATION_URL } from "@/lib/constants";
import { heroIntro, heroSkyParallax, statCounter, typewriter } from "@/lib/motion";
import { DollarSign, GraduationCap, Handshake, LayoutGrid, Users } from "lucide-react";
import { useRef, useEffect, useLayoutEffect, useState } from "react";

const FEATURED_PARTNERS = [
  {
    name: "Wells Fargo",
    src: "/partners/wells-fargo.svg",
    className: "w-40 sm:w-44",
  },
  {
    name: "Goldman Sachs",
    src: "/partners/goldman-sachs.svg",
    className: "h-12 sm:h-[3.25rem]",
  },
  {
    name: "Crédit Agricole",
    src: "/partners/credit-agricole.svg",
    className: "w-44 sm:w-48",
  },
  {
    name: "Principal Financial Group",
    src: "/partners/principal-financial-group.svg",
    className: "h-10 sm:h-11",
  },
  {
    name: "Wall Street Oasis",
    src: "/partners/wall-street-oasis.svg",
    className: "h-12 sm:h-[3.25rem]",
  },
  {
    name: "StreetSmart Careers",
    src: "/partners/streetsmart-careers.svg",
    className: "w-40 sm:w-44",
  },
];

// Headline broken into char spans for the typewriter reveal; "Finance"
// keeps the italic accent treatment.
const HEADLINE_LINES: { text: string; accent?: boolean }[][] = [
  [{ text: "Bridge " }, { text: "Finance", accent: true }],
  [{ text: "Network" }],
];

function TypewriterHeadline({ onDone }: { onDone: () => void }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [done, setDone] = useState(false);

  // useLayoutEffect so GSAP claims the hidden elements before first paint
  useLayoutEffect(() => {
    if (!ref.current) return;
    const tween = typewriter(ref.current, {
      onComplete: () => {
        setDone(true);
        onDone();
      },
    });
    return () => {
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1
      ref={ref}
      className={`type-caret ${done ? "type-done" : ""} mb-6 font-display text-5xl font-medium leading-[1.08] tracking-tight text-foreground md:text-7xl lg:text-[84px]`}
      aria-label="Bridge Finance Network"
    >
      {HEADLINE_LINES.map((line, li) => (
        <span key={li} className="block">
          {line.map((part, pi) => (
            <span
              key={pi}
              className={part.accent ? "accent-word" : undefined}
              aria-hidden="true"
            >
              {part.text.split("").map((char, ci) => (
                <span key={ci} data-char className="gsap-hidden">
                  {char === " " ? " " : char}
                </span>
              ))}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

// Logo row as a continuous marquee; duplicated once so the loop is seamless
// at translateX(-50%). The readable label provides the accessible context,
// while the animated duplicate stays out of the accessibility tree.
function IndustryLogoMarquee() {
  return (
    <section
      className="border-t border-border pt-6 sm:pt-8"
      aria-labelledby="industry-featured-title"
    >
      <h2
        id="industry-featured-title"
        className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-xs"
      >
        Industry Professionals Featured at BFN
      </h2>
      <p className="sr-only">
        Professionals featured at Bridge Finance Network include{" "}
        {FEATURED_PARTNERS.map(partner => partner.name).join(", ")}.
      </p>
      <div className="industry-logo-marquee mt-5">
        <div className="industry-logo-marquee-track" aria-hidden="true">
          {[0, 1].map(copy => (
            <div
              key={copy}
              className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
            >
              {FEATURED_PARTNERS.map(partner => (
                <div
                  key={`${copy}-${partner.name}`}
                  className="flex h-16 w-44 shrink-0 items-center justify-center sm:h-[4.5rem] sm:w-44"
                >
                  <img
                    src={partner.src}
                    alt=""
                    className={`max-h-full max-w-full object-contain ${partner.className}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BFN_STATS = [
  {
    value: 4,
    prefix: "",
    suffix: "",
    label: "Active Programs",
    detail: "Specialized tracks students can join and complete.",
    icon: LayoutGrid,
  },
  {
    value: 300,
    prefix: "",
    suffix: "+",
    label: "Members",
    detail: "A growing network of motivated students nationwide.",
    icon: Users,
  },
  {
    value: 50,
    prefix: "",
    suffix: "+",
    label: "Schools",
    detail: "High schools represented across our student network.",
    icon: GraduationCap,
  },
  {
    value: 4,
    prefix: "",
    suffix: "+",
    label: "Partnerships",
    detail: "Trusted organizations supporting our mission.",
    icon: Handshake,
  },
  {
    value: 2500,
    prefix: "$",
    suffix: "",
    label: "Fundraised",
    detail: "Raised to fund programs, resources, and outreach.",
    icon: DollarSign,
  },
];

function BfnByNumbers() {
  const numberRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useLayoutEffect(() => {
    const tweens = BFN_STATS.map((stat, index) => {
      const element = numberRefs.current[index];
      return element
        ? statCounter(element, stat.value)
        : null;
    });

    return () => {
      tweens.forEach(tween => tween?.kill());
    };
  }, []);

  return (
    <section
      className="border-t border-border bg-card px-6 py-12 md:px-12 md:py-14"
      aria-labelledby="bfn-by-numbers-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-border sm:w-24" aria-hidden="true" />
          <h2
            id="bfn-by-numbers-title"
            className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xs"
          >
            BFN by the numbers
          </h2>
          <span className="h-px w-16 bg-border sm:w-24" aria-hidden="true" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {BFN_STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <article
                key={stat.label}
                className="rounded-xl border border-signal/20 bg-background/80 p-6 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span
                    className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-signal/10 text-signal"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-5xl font-medium leading-none tracking-tight text-foreground sm:text-[3.5rem]">
                      <span aria-hidden="true">{stat.prefix}</span>
                      <span
                        ref={element => {
                          numberRefs.current[index] = element;
                        }}
                        aria-hidden="true"
                      >
                        0
                      </span>
                      <span aria-hidden="true">{stat.suffix}</span>
                      <span className="sr-only">
                        {stat.prefix}
                        {stat.value}
                        {stat.suffix}
                      </span>
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-foreground">
                      {stat.label}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeKey, setActiveKey] = useState("hero");

  // Badge fades up immediately; subhead/CTAs/logo carousel follow once the
  // typewriter headline finishes. useLayoutEffect: runs before paint so
  // there is no visible-then-hidden flash.
  useLayoutEffect(() => {
    if (!heroRef.current) return;
    const tween = heroIntro(
      heroRef.current.querySelectorAll("[data-hero-lead]")
    );
    return () => {
      tween.kill();
    };
  }, []);

  const revealHeroRest = () => {
    if (!heroRef.current) return;
    heroIntro(heroRef.current.querySelectorAll("[data-hero-item]"));
  };

  // Sky parallax (0.3x desktop / 0.15x mobile) + fade-out as the About band
  // enters at 80% viewport.
  useEffect(() => {
    if (!skyRef.current) return;
    const aboutEl = sectionRefs.current["about"];
    if (!aboutEl) return;
    const mm = heroSkyParallax(skyRef.current, aboutEl);
    return () => {
      mm?.revert();
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.4;
      let current = "hero";
      for (const key of Object.keys(sectionRefs.current)) {
        const el = sectionRefs.current[key];
        if (el && el.offsetTop <= marker) current = key;
      }
      setActiveKey(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToKey = (key: string) => {
    sectionRefs.current[key]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const registerSection = (key: string) => (el: HTMLElement | null) => {
    sectionRefs.current[key] = el;
  };

  return (
    <main className="relative w-full bg-background text-foreground">
      <HomeHeader activeKey={activeKey} onNavigate={scrollToKey} />

      {/* Hero — full-bleed sunrise sky across the entire viewport */}
      <section
        ref={registerSection("hero")}
        className="hero-fade relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 pb-20 pt-28 md:px-12"
      >
        {/* Extends 40% above the hero so the downward parallax drift never
            exposes a blank strip along the clipped top edge */}
        <div ref={skyRef} className="sky-beam pointer-events-none absolute -top-[40%] bottom-0 inset-x-0" />

        {/* Brand mark watermark, sitting quietly in the sunrise sky's empty span */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-full items-center justify-center md:flex md:w-1/2 md:-translate-y-[10%]"
        >
          <img
            src="/bfn-logo.png"
            alt=""
            className="h-[42%] max-h-[400px] w-auto opacity-[0.5] mix-blend-multiply [mask-image:radial-gradient(closest-side,black_55%,transparent_100%)]"
          />
        </div>

        <div ref={heroRef} className="relative mx-auto w-full max-w-7xl">
          <div
            data-hero-lead
            className="gsap-hidden mb-4 inline-block rounded-lg border border-border bg-card px-4 py-1.5"
          >
            <p className="font-mono text-xs text-muted-foreground">
              STUDENT-LED NONPROFIT FINANCE NETWORK
            </p>
          </div>

          <TypewriterHeadline onDone={revealHeroRest} />

          <p
            data-hero-item
            className="gsap-hidden mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            <span className="text-pretty">
              A student-led 501(c)(3) nonprofit helping motivated students build finance
              skills, find credible opportunities, compete, publish research,
              and lead local chapters.
            </span>
          </p>
          <div
            data-hero-item
            className="gsap-hidden mb-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => window.open(APPLICATION_URL, "_blank")}
            >
              Apply to Join
            </MagneticButton>
            <MagneticButton
              size="lg"
              variant="secondary"
              onClick={() => scrollToKey("programs")}
            >
              View Opportunities
            </MagneticButton>
          </div>

          {/* Industry-professional logo carousel inside the hero */}
          <div data-hero-item className="gsap-hidden">
            <IndustryLogoMarquee />
          </div>
        </div>
      </section>

      <BfnByNumbers />

      {/* About story — Haze band */}
      <div id="about" ref={registerSection("about")} className="w-full bg-card">
        <AboutSection />
      </div>

      {/* Approach — canvas */}
      <div id="approach" ref={registerSection("approach")} className="w-full">
        <ApproachSection />
      </div>

      {/* Programs — Haze band */}
      <div id="programs" ref={registerSection("programs")} className="w-full bg-card">
        <ServicesSection />
      </div>

      {/* Apply CTA — Haze band */}
      <div id="contact" ref={registerSection("contact")} className="w-full bg-card">
        <ContactSection />
      </div>
    </main>
  );
}
