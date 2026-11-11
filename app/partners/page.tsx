import type { Metadata } from "next";
import PartnersPage from "./PartnersPageClient";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The organizations that help make BFN's mission possible, including education, community, and funding partners and its fiscal sponsor.",
};

export default function Page() {
  return <PartnersPage />;
}
