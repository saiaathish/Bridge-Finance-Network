"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events } from "@/lib/data";
import { sectionEntrance, wordReveal } from "@/lib/motion";
import { PageHero } from "@/components/page-hero";
import { useLayoutEffect, useRef } from "react";
import { Calendar } from "lucide-react";

const typeClasses: Record<string, string> = {
  "Competition": "tier-senior",
  "Speaker": "tier-associate",
  "Meeting": "tier-analyst",
};

export default function Events() {
  const listRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const tweens = [
      headingRef.current && wordReveal(headingRef.current),
      listRef.current && sectionEntrance(listRef.current, "[data-card]"),
    ];
    return () => {
      tweens.forEach((t) => t && t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground inner-page">
      <Navbar />

      <PageHero
        kicker="Events"
        title="Upcoming events & sessions."
        accent="sessions."
        subtitle="Competitions, guest speakers, chapter meetups, and more. Stay connected with the BFN community."
      />

      {/* Events list — Haze band */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container max-w-4xl">
          <h2 ref={headingRef} className="font-display text-2xl font-medium text-foreground mb-8">
            Upcoming
          </h2>
          <div ref={listRef} className="space-y-5">
            {events.map((event) => (
              <div
                key={event.title}
                data-card
                className="gsap-hidden hover-wiggle group p-6 md:p-8 rounded-xl bg-white border border-border hover:border-muted-foreground transition-colors duration-150"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="wiggle-target flex-shrink-0 w-16 h-16 rounded-xl bg-primary flex flex-col items-center justify-center">
                    <span className="text-xs text-primary-foreground/70 font-mono uppercase">
                      {event.date.split(" ")[0].slice(0, 3)}
                    </span>
                    <span className="font-mono text-xl text-primary-foreground">
                      {event.date.split(" ")[1].replace(",", "")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-sans font-semibold text-foreground text-lg">{event.title}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${typeClasses[event.type] || "tier-intern"}`}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground font-mono">
                      <Calendar size={12} /> {event.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 card-haze p-8 text-center bg-white">
            <h3 className="font-display text-lg font-medium text-foreground mb-2">
              Past events
            </h3>
            <p className="text-sm text-muted-foreground">
              Archive of past competitions, speaker sessions, and chapter events coming soon.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
