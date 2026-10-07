"use client";

import { useRef, useState } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { TeamTabs } from "@/components/team/TeamTabs";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { teamCategories, teamMembers, type TeamCategory } from "@/lib/team-data";
import { cardsIn, useGsap } from "@/lib/motion";

const ID_PREFIX = "directory";

export default function Directory() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>(teamCategories[0]);
  const gridRef = useRef<HTMLDivElement>(null);

  const members = teamMembers.filter((member) => member.category === activeCategory);

  // Cards rise in as they scroll into view, batched so long tabs (Interns)
  // never queue a multi-second stagger. Re-runs on every tab switch.
  useGsap(gridRef, (env, q) => cardsIn(q("[data-card]"), env), [activeCategory]);

  return (
    <>
      <HomeHeader />

      <main>
        <PageHero
          title="Meet the Team"
          accent="Team"
          subtitle="Meet the people building Bridge Finance Network."
        />

        <Section tone="tint" divider className="md:pt-16">
          <TeamTabs categories={teamCategories} active={activeCategory} onChange={setActiveCategory} idPrefix={ID_PREFIX} />

          <div
            key={activeCategory}
            ref={gridRef}
            role="tabpanel"
            id={`${ID_PREFIX}-panel-${activeCategory}`}
            aria-labelledby={`${ID_PREFIX}-tab-${activeCategory}`}
            tabIndex={0}
          >
            {members.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            ) : (
              <div data-card className="gsap-hidden card-surface p-12 text-center">
                <p className="type-card text-muted-foreground">Team members will be added soon.</p>
              </div>
            )}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
