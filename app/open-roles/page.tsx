"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { openRoles } from "@/lib/data";
import { sectionEntrance, wordReveal } from "@/lib/motion";
import { PageHero } from "@/components/page-hero";
import { useLayoutEffect, useRef } from "react";
import { Clock, Users, ExternalLink, ArrowRight, Sparkles } from "lucide-react";

export default function OpenRoles() {
  const rolesRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const rolesHeadingRef = useRef<HTMLHeadingElement>(null);
  const stepsHeadingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const tweens = [
      rolesHeadingRef.current && wordReveal(rolesHeadingRef.current),
      stepsHeadingRef.current && wordReveal(stepsHeadingRef.current),
      rolesRef.current && sectionEntrance(rolesRef.current, "[data-card]"),
      stepsRef.current && sectionEntrance(stepsRef.current, "[data-card]"),
    ];
    return () => {
      tweens.forEach((t) => t && t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground inner-page">
      <Navbar />

      <PageHero
        kicker="Join BFN"
        title="Open roles at Bridge Finance Network."
        accent="Open"
        subtitle="Apply publicly. No registration required. Approved applicants receive a member portal access code by email."
      >
        <div className="inline-flex px-2.5 py-1 rounded-full tier-senior">
          <span className="text-xs font-semibold flex items-center gap-1">
            <Sparkles size={10} /> Hiring
          </span>
        </div>
      </PageHero>

      {/* Openings — Haze band */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-4xl">
          <h2 ref={rolesHeadingRef} className="font-display text-2xl font-medium text-foreground mb-8">
            Current Openings
          </h2>

          <div ref={rolesRef} className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.title}
                data-card
                className="gsap-hidden p-8 rounded-xl bg-white border border-border hover:border-muted-foreground transition-colors duration-150"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-foreground mb-2">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-muted-foreground">
                        <Users size={13} /> {role.team}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-muted-foreground">
                        <Clock size={13} /> {role.commitment}
                      </span>
                    </div>
                  </div>
                  <a
                    href={role.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-150 whitespace-nowrap"
                  >
                    Apply Now <ExternalLink size={14} className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
                <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-sm text-muted-foreground italic flex items-start gap-2">
                    <ArrowRight size={14} className="text-signal mt-0.5 flex-shrink-0" />
                    After your application is reviewed and approved, you will receive a registration code by email to create your member portal account.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — canvas; steps are a true sequence, connected by the
          gradient track */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 ref={stepsHeadingRef} className="font-display text-2xl font-medium text-foreground mb-8">
            How the application process works
          </h2>
          <div className="relative">
            <div className="sky-band hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-[3px] rounded-full" />

            <div ref={stepsRef} className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Apply", desc: "Submit an application through the public form above. No account needed." },
                { step: "02", title: "Review", desc: "BFN reviews your application for fit, skills, and current team needs." },
                { step: "03", title: "Access", desc: "Approved members receive a registration code and full portal access." },
              ].map((item) => (
                <div
                  key={item.step}
                  data-card
                  className="gsap-hidden hover-wiggle relative card-haze p-7"
                >
                  <div className="wiggle-target w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center mb-4">
                    <span className="font-mono text-sm text-signal">{item.step}</span>
                  </div>
                  <h3 className="font-sans font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
