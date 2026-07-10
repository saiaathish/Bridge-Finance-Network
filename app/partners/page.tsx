"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sectionEntrance, wordReveal } from "@/lib/motion";
import { PageHero } from "@/components/page-hero";
import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";

export default function Partners() {
  const introRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const tweens = [
      headingRef.current && wordReveal(headingRef.current),
      gridRef.current && sectionEntrance(gridRef.current, "[data-card]"),
    ];
    return () => {
      tweens.forEach((t) => t && t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        kicker="Partners"
        title="Organizations we work with."
        accent="with."
        subtitle="BFN partners with firms and organizations that share our mission of expanding access to finance education for students."
      />

      {/* Intro + models — canvas */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div ref={introRef} className="text-center mb-16">
            <div className="hover-wiggle w-20 h-20 rounded-xl bg-card border border-border flex items-center justify-center mx-auto mb-6">
              <Handshake size={36} className="wiggle-target text-signal" />
            </div>
            <h2 ref={headingRef} className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
              Partnership opportunities are open
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We&apos;re actively seeking partnerships with financial institutions, educational organizations, and technology companies who want to invest in the next generation of finance talent.
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Sponsorship", desc: "Support competitions, events, and chapter operations with financial backing." },
              { title: "Mentorship", desc: "Connect your professionals with BFN members for career guidance and industry insight." },
              { title: "Opportunities", desc: "Provide internship placements, project work, or educational resources for our members." },
            ].map((item) => (
              <div key={item.title} data-card className="gsap-hidden card-haze p-8">
                <h3 className="font-sans font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA — Haze card */}
          <div className="p-10 rounded-xl bg-card border border-border text-center">
            <h3 className="font-display text-2xl font-medium text-foreground mb-4">
              Interested in partnering with BFN?
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Reach out to discuss how your organization can support the next generation of finance professionals.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-150"
            >
              Contact Us <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
