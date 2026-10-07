import type { Metadata } from "next";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/page-hero";
import { SupportDonationForm } from "./SupportDonationForm";

export const metadata: Metadata = {
  title: "Support BFN | Bridge Finance Network",
  description:
    "Be part of BFN's mission by helping high school students turn ambition into opportunity through support for finance education and career preparation.",
};

export default function SupportPage() {
  return (
    <>
      <HomeHeader />

      <main>
        <PageHero
          fullHeight
          kicker="SUPPORT BRIDGE FINANCE NETWORK"
          title="Support the next generation of finance."
          accent="finance."
          motion="words"
          aside={
            <section
              className="w-full max-w-[440px] lg:justify-self-end"
              aria-label="Donate securely through Givebutter"
            >
              <SupportDonationForm />
            </section>
          }
        >
          <div className="max-w-[34rem]">
            <p className="type-kicker mb-3 text-muted-foreground">
              Your donation helps us:
            </p>
            <ul
              className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2"
              aria-label="How donations help"
            >
              {[
                "Expand access to real-world finance education",
                "Bring industry professionals and mentors to students",
                "Provide educational resources and programming",
                "Build a stronger, more financially literate generation",
              ].map(benefit => (
                <li
                  key={benefit}
                  className="type-card flex items-start gap-2 text-muted-foreground"
                >
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-navy"
                    aria-hidden="true"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="type-card mt-6 border-t border-border pt-5 text-muted-foreground">
              <p>
                BFN is built around a simple idea: access to finance should
                not be limited by where you go to school or who you know.
              </p>
              <p className="mt-2">
                Your support helps us expand that access and give more
                students the opportunity to learn, connect, and build.
              </p>
            </div>

            <p className="type-h3 mt-5 text-foreground">
              Invest in the next generation of finance. Donate today.
            </p>
          </div>
        </PageHero>
      </main>

      <Footer />
    </>
  );
}
