import type { Metadata } from "next";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { ResourcesSection } from "@/components/sections/resources-section";

export const metadata: Metadata = {
  title: "Resources | Bridge Finance Network",
  description:
    "The BFN Resource Hub: internships, summer programs, scholarships, competitions, networking events, courses, career prep, and more in one place.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeHeader />

      {/* The section brings its own py-20/md:py-24; this extra top padding
          puts it the same distance below the nav as Partners and Directory. */}
      <main className="pt-12">
        <ResourcesSection />
      </main>

      <Footer />
    </div>
  );
}
