import type { Metadata } from "next";
import DirectoryPage from "./DirectoryPageClient";

export const metadata: Metadata = {
  title: "Directory",
  description:
    "Meet the people building Bridge Finance Network, across the C-Suite, Programs, Curriculum, Operations, Web Dev Team, Marketing, and Members.",
};

export default function Page() {
  return <DirectoryPage />;
}
