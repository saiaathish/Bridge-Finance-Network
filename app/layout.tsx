import type { Metadata } from "next";
import {
  Source_Serif_4,
  Inter,
  JetBrains_Mono,
  EB_Garamond,
  Figtree,
} from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { MeshDriftShader } from "@/components/mesh-drift-shader";

/**
 * Two type systems, per bfn-site-fixes-prompt.md §5.
 *
 * Anthropic system (Serif + Sans + Mono) is the site's default voice —
 * nav, buttons, footer, badges, card titles, body copy, and every section
 * heading. EB Garamond + Figtree are reserved for ONE signature moment
 * (the hero headline, via .signature-display / .signature-ui) and are
 * deliberately not wired to any sitewide token.
 */

// Anthropic Serif — editorial voice, body copy, display headings
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-anthropic-serif",
  display: "swap",
});

// Anthropic Sans — UI chrome + bold declarative headings
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-anthropic-sans",
  display: "swap",
});

// Anthropic Mono — code, and tabular figures in ledger/ticker components
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anthropic-mono",
  display: "swap",
});

// Signature moment only — never a sitewide token
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const fontVars = [
  sourceSerif.variable,
  inter.variable,
  jetbrainsMono.variable,
  ebGaramond.variable,
  figtree.variable,
].join(" ");

export const metadata: Metadata = {
  title: "Bridge Finance Network",
  description:
    "Student-led nonprofit expanding access to finance education, curated opportunities, competitions, chapters, and practical career preparation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <body>
        {/* Mounted once here so the WebGL context survives route changes */}
        <MeshDriftShader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
