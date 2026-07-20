"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sectionEntrance } from "@/lib/motion";
import { PageHero } from "@/components/page-hero";
import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const teams = ["All", "Internal Affairs", "Finance", "Human Resources", "External Affairs", "Web Development"];

const members = [
  { name: "Andrew Fu", role: "Co-Founder & MD", team: "Internal Affairs", tier: "Senior Associate" },
  { name: "Steven", role: "Advisor", team: "Web Development", tier: "Senior Associate" },
  { name: "Sai", role: "Chief Technology Officer", team: "Web Development", tier: "Senior Associate" },
  { name: "Sashi", role: "VP of Web Development", team: "Web Development", tier: "Associate" },
  { name: "Ackshat", role: "Core Developer", team: "Web Development", tier: "Analyst" },
  { name: "Kev", role: "Frontend & UI", team: "Web Development", tier: "Intern" },
  { name: "Niranjana", role: "Frontend & UI", team: "Web Development", tier: "Intern" },
];

const tierClasses: Record<string, string> = {
  "Intern": "tier-intern",
  "Analyst": "tier-analyst",
  "Associate": "tier-associate",
  "Senior Associate": "tier-senior",
};

export default function Team() {
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
        kicker="Our Team"
        title="Meet the people behind BFN."
        accent="people"
        subtitle="A team of driven students building the infrastructure for the next generation of finance professionals."
      />

      {/* Directory — Haze band, white cards */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-10">
            {teams.map((team) => (
              <button
                key={team}
                className="btn-ghost px-4 py-2 text-sm font-semibold first:bg-white first:border-muted-foreground"
                onClick={() => toast("Feature coming soon")}
              >
                {team}
              </button>
            ))}
          </div>

          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <div
                key={member.name}
                data-card
                className="gsap-hidden hover-wiggle group p-6 rounded-xl bg-white border border-border hover:border-muted-foreground transition-colors duration-150"
              >
                <div className="wiggle-target w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <span className="font-mono text-primary-foreground text-sm">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${tierClasses[member.tier]}`}>
                    {member.tier}
                  </span>
                  <span className="text-xs text-muted-foreground">{member.team}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Full member directory is managed by HR and updated regularly.
            </p>
            <Link
              href="/open-roles"
              className="group inline-flex items-center gap-2 text-signal font-semibold hover:opacity-80 transition-opacity duration-150"
            >
              Want to join the team? <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
