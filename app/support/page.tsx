import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support BFN | Bridge Finance Network",
  description:
    "Support Bridge Finance Network's work expanding access to finance education, opportunities, and practical career preparation for high school students.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeHeader />

      <main>
        <section className="flex min-h-[100svh] items-center px-6 pb-6 pt-20 md:px-12 md:pb-8 md:pt-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-10 xl:gap-16">
            <div className="max-w-[36rem]">
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
                Bridge Finance Network is a student-led nonprofit expanding access
                to finance education, curated opportunities, and practical career
                preparation for high school students across the country.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#donate"
                  className="inline-flex w-fit items-center rounded-lg border border-transparent bg-[#153B63] px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#123354]"
                >
                  Make a contribution
                </Link>
                <Link
                  href="/about"
                  className="inline-flex w-fit items-center rounded-lg border border-border px-6 py-3 text-base font-semibold text-foreground transition-colors duration-150 hover:border-muted-foreground"
                >
                  Learn about BFN
                </Link>
              </div>
            </div>
            <section
              id="donate"
              className="w-full max-w-[440px] scroll-mt-24 lg:justify-self-end"
              aria-label="Donate securely through Givebutter"
            >
              <div
                aria-label="Givebutter donation form for Bridge Finance Network"
                dangerouslySetInnerHTML={{
                  __html:
                    '<givebutter-widget id="pEZRrA" align="center"></givebutter-widget>',
                }}
              />
              <Script
                id="givebutter-widget-library"
                src="https://widgets.givebutter.com/latest.umd.cjs?acct=oqqzGtUZxCPk9GXa&p=other"
                strategy="afterInteractive"
              />
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
