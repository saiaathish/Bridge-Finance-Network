import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";

const GIVEBUTTER_CAMPAIGN_URL = "https://givebutter.com/BridgeFinanceNetwork";

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
        <section className="flex min-h-screen items-center px-6 pb-8 pt-28 md:px-12">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">
            <div>
              <div className="mb-4 inline-block rounded-lg border border-border bg-card px-4 py-1.5">
                <p className="font-mono text-xs text-muted-foreground">
                  SUPPORT BRIDGE FINANCE NETWORK
                </p>
              </div>

              <h1 className="mb-6 max-w-4xl font-display text-5xl font-medium leading-[1.08] tracking-tight text-foreground md:text-7xl lg:text-[84px]">
                Support the next generation of{" "}
                <span className="accent-word">finance.</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Bridge Finance Network is a student-led nonprofit expanding access
                to finance education, curated opportunities, and practical career
                preparation for high school students across the country.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#donate"
                  className="inline-flex w-fit items-center rounded-lg border border-transparent bg-[#153B63] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#123354]"
                >
                  Make a contribution
                </Link>
                <Link
                  href="/about"
                  className="inline-flex w-fit items-center rounded-lg border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-colors duration-150 hover:border-muted-foreground"
                >
                  Learn about BFN
                </Link>
              </div>
            </div>
            <section
              id="donate"
              className="w-full max-w-[440px] scroll-mt-24 lg:justify-self-end"
              aria-labelledby="donate-heading"
            >
              <h2
                id="donate-heading"
                className="mb-4 font-mono text-xs font-normal text-muted-foreground"
              >
                DONATE SECURELY THROUGH GIVEBUTTER
              </h2>
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
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Prefer a new tab?{" "}
                <a
                  href={GIVEBUTTER_CAMPAIGN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground underline underline-offset-4"
                >
                  Open the secure donation form
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
