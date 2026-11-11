import type { Metadata } from "next";
import { openGraphDefaults } from "@/lib/site";
import NotFoundPage from "./NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "Sorry, the page you are looking for doesn't exist. It may have been moved or deleted.",
  robots: {
    index: false,
  },
  // The layout canonical is relative ("./") and the static 404 pathname is
  // /_not-found. Drop it so missing URLs are not treated as that address.
  alternates: {
    canonical: null,
  },
  openGraph: openGraphDefaults,
};

export default function NotFound() {
  return <NotFoundPage />;
}
