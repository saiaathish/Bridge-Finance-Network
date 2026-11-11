import type { Metadata } from "next";
import { EB_Garamond, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Providers } from "@/components/Providers";
import { getSiteUrl, openGraphDefaults, siteOgImage } from "@/lib/site";

// Same faces the previous Google stylesheet requested. Weights stay limited
// to those files so heavier weights (Figtree 700, JetBrains Mono 600) keep
// the browser's existing synthetic bold instead of a newly loaded cut.
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: "normal",
  display: "swap",
  variable: "--font-figtree",
  fallback: ["system-ui", "sans-serif"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  display: "swap",
  variable: "--font-eb-garamond",
  fallback: ["Georgia", "serif"],
});

const ebGaramondItalic = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
  variable: "--font-eb-garamond-italic",
  fallback: ["Georgia", "serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  display: "swap",
  variable: "--font-jetbrains-mono",
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Bridge Finance Network",
    template: "%s | Bridge Finance Network",
  },
  description:
    "BFN: a finance education project fiscally sponsored by FMW Nonprofit Solutions (a 501(c)(3) tax-exempt organization).",
  // "./" resolves against the current pathname, so every route gets its own canonical.
  alternates: {
    canonical: "./",
  },
  openGraph: {
    ...openGraphDefaults,
    // "./" resolves against the current pathname, same as the canonical.
    url: "./",
  },
  twitter: {
    card: "summary_large_image",
    images: [siteOgImage.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${ebGaramond.variable} ${ebGaramondItalic.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
        {/* Fillout embed — turns [data-fillout-embed-type="popup"] elements
            (e.g. the Start Application button) into popup triggers */}
        <Script
          src="https://server.fillout.com/embed/v1/"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
