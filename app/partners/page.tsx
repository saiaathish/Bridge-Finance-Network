"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import { MagneticButton } from "@/components/magnetic-button";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { partners } from "@/lib/partners-data";
import { cardsIn, fadeUp, useGsap } from "@/lib/motion";

const CONTACT_EMAIL = "bridgefinancenetwork@gmail.com";

export default function PartnersPage() {
  const mainRef = useRef<HTMLElement>(null);

  useGsap(mainRef, (env, q) => {
    cardsIn(q("[data-card]"), env);
    const [cta] = q("[data-cta]");
    if (cta) fadeUp(cta, env, { trigger: cta, start: "top 92%", delay: 0.4 });
  });

  return (
    <>
      <HomeHeader />

      <main ref={mainRef}>
        <PageHero
          title="Our Partners"
          accent="Partners"
          subtitle={"The organizations that help make BFN's mission possible."}
        />

        <Section tone="tint" divider>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map(partner => (
              <div
                key={partner.id}
                data-card
                className="gsap-hidden card-surface flex w-full flex-col items-center p-6 text-center transition-colors duration-150 hover:border-muted-foreground"
              >
                {partner.logo ? (
                  partner.website ? (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${partner.name}'s website`}
                      className="relative flex h-40 w-full items-center justify-center opacity-90 transition-opacity duration-150 hover:opacity-100"
                    >
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-2"
                      />
                    </a>
                  ) : (
                    <div className="relative flex h-40 w-full items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-2"
                      />
                    </div>
                  )
                ) : (
                  <div className="flex h-40 w-full items-center justify-center">
                    <span className="type-label text-muted-foreground">
                      {partner.name}
                    </span>
                  </div>
                )}

                <div className="mt-3">
                  <h3 className="type-h3 text-foreground">{partner.name}</h3>
                  <p className="type-card mt-1 text-muted-foreground">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="band" divider>
          <SectionHeading
            align="center"
            description={"Whether you're a student organization, nonprofit, company, educator, or community organization, we'd love to hear what you're working on and explore how we could collaborate."}
          >
            Want to join the <span className="accent-word">Coalition?</span>
          </SectionHeading>
          <div data-cta className="gsap-hidden mt-8 text-center">
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={() => window.open(`mailto:${CONTACT_EMAIL}`)}
            >
              <span className="group flex items-center justify-center gap-2">
                Reach Out
                <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </MagneticButton>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
