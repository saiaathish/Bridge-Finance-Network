"use client"

import { useReveal } from "@/hooks/use-reveal"
import { wordReveal } from "@/lib/motion"
import { useEffect, useRef } from "react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export function TeamSection() {
  const { ref, isVisible } = useReveal(0.3)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    const tween = wordReveal(headingRef.current)
    return () => {
      tween.kill()
    }
  }, [])

  const teamMembers = [
    {
      name: "Malhar Sawant",
      designation: "Founder & Managing Partner",
      quote: "Malhar founded BFN to build the next generation of financial talent, leading its vision and strategy.",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Andrew Fu",
      designation: "MD of Internal Affairs & Operations",
      quote: "A Co-Founder of BFN, Andrew has built the systems and partnerships connecting 100+ students to financial education and real-world opportunity.",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Carol Sun",
      designation: "MD of Media, Design, & Graphics",
      quote: "A DECA International qualifier who grew a simulated portfolio from $100K to $560K in six months, Carol leads BFN's brand and marketing across every platform.",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Emily Tai",
      designation: "MD of Finance & Accounting",
      quote: "A rising senior at Brooklyn Technical High School, Emily oversees BFN's fundraising and budgeting to secure its financial foundation.",
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Sai Karthik",
      designation: "MD of Technology & AI",
      quote: "A rising senior at Marquette High School with deep AI and technical expertise, Sai leads BFN's platform architecture and engineering.",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Anderson Overkamp",
      designation: "MD of Experiential Programs and Development",
      quote: "A self-directed investor and equity researcher, Anderson brings real-world market expertise to BFN's experiential learning programs.",
      src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  return (
    <section
      ref={ref}
      className="w-full px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 ref={headingRef} className="mb-2 font-display text-5xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Our Team
          </h2>
          <p className="font-mono text-sm text-muted-foreground md:text-base">/ Students leading the desks</p>
        </div>

        <div
          className={`w-full transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <AnimatedTestimonials testimonials={teamMembers} autoplay={true} />
        </div>
      </div>
    </section>
  )
}
