import type { Metadata } from "next";

/** Wordmark already in public/. Opaque RGB, used for Open Graph and Twitter. */
export const siteOgImage = {
  url: "/bridge-finance-logo.png",
  width: 1563,
  height: 1563,
  alt: "Bridge Finance Network",
} as const;

/** Shared card fields. Pages inherit these; do not set `url` here. */
export const openGraphDefaults: NonNullable<Metadata["openGraph"]> = {
  siteName: "Bridge Finance Network",
  type: "website",
  locale: "en_US",
  images: [siteOgImage],
};

/** Production origin. NEXT_PUBLIC_SITE_URL overrides this when set. */
const DEFAULT_SITE_URL = "https://www.bridgefinance.network";

/** Origin for metadataBase, canonical URLs, sitemap.xml, and robots.txt. */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const value =
    configured && configured.length > 0 ? configured : DEFAULT_SITE_URL;
  return value.replace(/\/+$/, "");
}

/** Public routes. The not-found page is intentionally excluded. */
export const publicRoutes = [
  "/",
  "/directory",
  "/partners",
  "/portal/speakers",
  "/resources",
  "/support",
] as const;

/** Absolute URL matching Next's canonical form (no trailing slash on `/`). */
export function absoluteUrl(path: string): string {
  const url = new URL(path, getSiteUrl());
  return url.pathname === "/" ? url.origin : url.href;
}
