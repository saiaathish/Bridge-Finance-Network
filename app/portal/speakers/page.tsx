"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { useRef } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { speakers } from "@/lib/speakers-data";
import { cardsIn, useGsap } from "@/lib/motion";

export default function GuestSpeakersPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGsap(gridRef, (env, q) => cardsIn(q("[data-card]"), env));

  return (
    <>
      <HomeHeader />

      <main>
        <PageHero
          title="Guest Speakers"
          accent="Speakers"
          subtitle="Hear from industry professionals across various fields of finance."
        />

        <Section tone="tint" divider>
          <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map(speaker => (
              <div
                key={speaker.id}
                data-card
                className="gsap-hidden card-surface flex flex-col p-6 transition-colors duration-150 hover:border-muted-foreground"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-card">
                    {speaker.photo ? (
                      <Image
                        src={speaker.photo}
                        alt={`Portrait of ${speaker.name}`}
                        width={64}
                        height={64}
                        sizes="64px"
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      <User size={22} className="text-muted-foreground" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="type-h3 text-foreground">{speaker.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-signal">{speaker.title}</p>
                    <p className="text-sm text-muted-foreground">{speaker.organization}</p>
                  </div>
                </div>

                <p className="type-card mt-4 text-muted-foreground">{speaker.bio}</p>

                {speaker.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {speaker.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full bg-signal/10 px-3 py-1 text-xs font-medium text-signal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
