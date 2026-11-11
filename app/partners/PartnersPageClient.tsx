"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import { MagneticButton } from "@/components/magnetic-button";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { partners, type Partner } from "@/lib/partners-data";
import { heroIntro } from "@/lib/motion";

const CONTACT_EMAIL = "bridgefinancenetwork@gmail.com";

function PartnerRow({ partner, index }: { partner: Partner; index: number }) {
  const { ref, isVisible } = useReveal(0.2);
  const logoOnRight = index % 2 === 1;

  return (
    <section
      ref={ref}
      className={`border-t border-border py-8 transition-all duration-700 md:py-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="container">
        <div
          className={`grid items-center gap-8 md:gap-12 lg:gap-16 ${
            logoOnRight ? "md:grid-cols-[3fr_1fr]" : "md:grid-cols-[1fr_3fr]"
          }`}
        >
          <div className={`flex items-center justify-center ${logoOnRight ? "md:order-2" : ""}`}>
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.logoWidth ?? 400}
                height={partner.logoHeight ?? 400}
                className="h-auto max-h-[140px] w-auto max-w-full"
              />
            ) : (
              <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                {partner.name}
              </span>
            )}
          </div>

          <div className={`flex max-w-[800px] flex-col justify-center ${logoOnRight ? "md:order-1" : ""}`}>
            {partner.type && (
              <p className="mb-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {partner.type}
              </p>
            )}
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              {partner.name}
            </h2>

            {(partner.whatTheyDo || partner.howTheySupport) && (
              <div className="mt-3 space-y-3">
                {partner.whatTheyDo && (
                  <div>
                    <p className="font-semibold text-foreground">About {partner.name}</p>
                    <p className="text-sm leading-relaxed text-foreground/90 md:text-base">{partner.whatTheyDo}</p>
                  </div>
                )}
                {partner.howTheySupport && (
                  <div>
                    <p className="font-semibold text-foreground">How they support BFN</p>
                    <p className="text-sm leading-relaxed text-foreground/90 md:text-base">{partner.howTheySupport}</p>
                  </div>
                )}
              </div>
            )}

            {partner.website && (
              <div className="mt-4">
                <MagneticButton
                  variant="secondary"
                  size="default"
                  onClick={() => window.open(partner.website, "_blank")}
                >
                  <span className="group flex items-center justify-center gap-2">
                    Visit website
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </MagneticButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PartnersPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!headerRef.current) return;
    const tween = heroIntro(headerRef.current.querySelectorAll("[data-header-item]"));
    return () => {
      tween.kill();
    };
  }, []);

  useLayoutEffect(() => {
    if (!ctaRef.current) return;
    const tween = heroIntro(ctaRef.current.querySelectorAll("[data-header-item]"));
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeHeader />

      <main>
        <section className="pt-32 pb-20 md:pt-36 md:pb-24">
          <div className="container">
            <div ref={headerRef} className="mb-10 max-w-2xl md:mb-12">
              <h1 data-header-item className="gsap-hidden font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Our <span className="accent-word">Partners</span>
              </h1>
              <p data-header-item className="gsap-hidden mt-4 text-lg text-muted-foreground">
                The organizations that help make BFN&apos;s mission possible.
              </p>
            </div>
          </div>

          {partners.map((partner, index) => (
            <PartnerRow key={partner.id} partner={partner} index={index} />
          ))}

          <div className="container">
            <div
              ref={ctaRef}
              className="mt-16 rounded-2xl border border-border bg-card px-8 py-12 text-center md:mt-20 md:px-16 md:py-16"
            >
              <h2 data-header-item className="gsap-hidden font-display text-3xl font-medium leading-tight text-foreground md:text-4xl">
                Want to join the <span className="accent-word">Partners?</span>
              </h2>
              <p data-header-item className="gsap-hidden mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Whether you&apos;re a student organization, nonprofit, company, educator, or community organization, we&apos;d love to hear what you&apos;re working on and explore how we could collaborate.
              </p>
              <div data-header-item className="gsap-hidden mt-8">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
