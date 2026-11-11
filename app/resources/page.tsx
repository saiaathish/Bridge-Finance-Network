import type { Metadata } from "next";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { ResourcesSection } from "@/components/sections/resources-section";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The BFN Resource Hub brings together internship opportunities, summer programs, scholarships, finance competitions, networking events, virtual courses, and career preparation materials in one place.",
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
