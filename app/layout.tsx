import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Providers } from "@/components/Providers";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Figtree:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
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
