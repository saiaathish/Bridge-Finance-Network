import type { Metadata } from "next";
import HomePage from "./HomePageClient";

export const metadata: Metadata = {
  // The layout title default is already "Bridge Finance Network". Leaving
  // title unset avoids applying the "%s | Bridge Finance Network" template
  // on top of that same name.
  description:
    "Student-led finance education, opportunities, and community. BFN operates under fiscal sponsorship of FMW Nonprofit Solutions, a 501(c)(3) tax-exempt organization.",
};

export default function Page() {
  return <HomePage />;
}
