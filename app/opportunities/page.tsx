"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Lock, Briefcase, Trophy, GraduationCap, Library, ArrowRight } from "lucide-react";
import { sectionEntrance } from "@/lib/motion";
import { PageHero } from "@/components/page-hero";
import { useLayoutEffect, useRef } from "react";

const categories = [
  { name: "Internships", icon: <Briefcase size={28} />, description: "Vetted finance internships at banks, funds, and startups curated for high school students.", count: "15+" },
  { name: "Competitions", icon: <Trophy size={28} />, description: "Stock pitch competitions, case studies, and research challenges with real prizes.", count: "12+" },
  { name: "Programs", icon: <GraduationCap size={28} />, description: "Structured learning programs, mentorship cohorts, and summer opportunities.", count: "8+" },
  { name: "Resources", icon: <Library size={28} />, description: "Templates, reading lists, video libraries, and tools for finance recruiting.", count: "20+" },
];

export default function Opportunities() {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tween = gridRef.current && sectionEntrance(gridRef.current, "[data-card]");
    return () => {
      tween && tween.kill();
    };
  }, []);

  return (
    <div className="min-h-screen page-surface text-foreground">
      <Navbar />

      <PageHero
        kicker="Opportunities Hub"
        title="Curated opportunities for ambitious students."
        accent="Curated"
        subtitle="Access internships, competitions, programs, and resources — all vetted by our team and organized for you."
      />

      {/* Categories — canvas, locked-state cards */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                data-card
                className="gsap-hidden hover-wiggle group relative card-locked p-8 hover:border-muted-foreground transition-colors duration-150"
              >
                <div className="absolute top-6 right-6 flex items-center gap-2 text-muted-foreground">
                  <Lock size={14} />
                  <span className="text-xs">Members Only</span>
                </div>
                <div className="wiggle-target w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center text-signal mb-5">
                  {cat.icon}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-sans text-xl font-semibold text-foreground">{cat.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-border text-signal text-xs font-mono">
                    {cat.count}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{cat.description}</p>
                <Link
                  href="/login"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-signal hover:opacity-80 transition-opacity duration-150"
                >
                  Sign in to access <ArrowRight size={14} className="transition-transform duration-150 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA — Haze band card */}
          <div className="mt-16 p-8 rounded-xl bg-card border border-border text-center">
            <h3 className="font-display text-2xl font-medium text-foreground mb-3">
              Not a member yet?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Apply through an open role. Approved members receive full access to all opportunities, resources, and portal features.
            </p>
            <Link
              href="/open-roles"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-150"
            >
              Apply to Join <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
