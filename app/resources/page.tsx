"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { sectionEntrance } from "@/lib/motion";
import { PageHero } from "@/components/page-hero";
import { useLayoutEffect, useRef } from "react";
import { Lock, Wrench, BookOpen, Youtube, Rocket, Headphones, ArrowRight } from "lucide-react";

const categories = [
  { name: "Tools", icon: <Wrench size={24} />, description: "Financial modeling templates, valuation frameworks, and productivity tools." },
  { name: "Reading Lists", icon: <BookOpen size={24} />, description: "Curated books and articles on investing, banking, and career development." },
  { name: "YouTube Channels", icon: <Youtube size={24} />, description: "Educational finance content from industry professionals and educators." },
  { name: "Programs", icon: <Rocket size={24} />, description: "External programs, bootcamps, and structured learning opportunities." },
  { name: "Podcasts", icon: <Headphones size={24} />, description: "Finance and career podcasts recommended by BFN members and advisors." },
];

export default function Resources() {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tween = listRef.current && sectionEntrance(listRef.current, "[data-card]");
    return () => {
      tween && tween.kill();
    };
  }, []);

  return (
    <div className="min-h-screen page-surface text-foreground">
      <Navbar />

      <PageHero
        kicker="Resource Library"
        title="Everything you need to get ahead."
        accent="ahead."
        subtitle="Curated tools, reading lists, programs, and more — all vetted by BFN members and advisors."
      />

      {/* Library — canvas, locked-state cards */}
      <section className="py-20 md:py-24">
        <div ref={listRef} className="container max-w-4xl">
          <div className="space-y-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                data-card
                className="gsap-hidden hover-wiggle group relative card-locked p-6 hover:border-muted-foreground transition-colors duration-150"
              >
                <div className="flex items-start gap-5">
                  <div className="wiggle-target flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-border flex items-center justify-center text-signal">
                    {cat.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-semibold text-foreground text-lg">{cat.name}</h3>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Lock size={13} />
                        <span className="text-xs">Members Only</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA — Haze card */}
          <div className="mt-14 p-8 rounded-xl bg-card border border-border text-center">
            <Lock size={24} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="font-display text-xl font-medium text-foreground mb-3">
              Sign in to access the full library
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
              Approved members get direct links to all resources, tools, and curated content.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/login"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-150"
              >
                Sign In <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/open-roles"
                className="btn-ghost inline-flex items-center gap-2 px-6 py-3 font-semibold"
              >
                Apply to Join
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
