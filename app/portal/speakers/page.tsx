import type { Metadata } from "next";
import GuestSpeakersPage from "./SpeakersPageClient";

export const metadata: Metadata = {
  title: "Guest Speakers",
  description:
    "Hear from industry professionals across various fields of finance.",
};

export default function Page() {
  return <GuestSpeakersPage />;
}
