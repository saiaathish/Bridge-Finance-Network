import type { Metadata } from "next";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { SupportDonationForm } from "./SupportDonationForm";
import styles from "./support.module.css";

export const metadata: Metadata = {
  title: "Support BFN | Bridge Finance Network",
  description:
    "Be part of BFN's mission by helping high school students turn ambition into opportunity through support for finance education and career preparation.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeHeader />

      <main>
        <section className="flex min-h-[100svh] items-center px-6 pb-6 pt-20 md:px-12 md:pb-8 md:pt-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-10 xl:gap-16">
            <div className={`${styles.enterLeft} max-w-[36rem]`}>
              <div className="mb-4 inline-block rounded-lg border border-border bg-card px-4 py-1.5">
                <p className="font-mono text-xs text-muted-foreground">
                  SUPPORT BRIDGE FINANCE NETWORK
                </p>
              </div>

              <h1 className="mb-5 font-display text-5xl font-medium leading-[1.08] tracking-tight text-foreground md:text-6xl xl:text-7xl">
                Support the next generation of{" "}
                <span className="accent-word">finance.</span>
              </h1>

              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Be part of BFN&apos;s mission—your support helps high school students
                turn ambition into opportunity through finance education and career
                preparation.
              </p>
            </div>
            <section
              className="w-full max-w-[440px] lg:justify-self-end"
              aria-label="Donate securely through Givebutter"
            >
              <SupportDonationForm />
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
