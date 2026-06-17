export type Member = {
  id: string;
  name: string;
  role: string;
  team: string;
  tier: "Intern" | "Analyst" | "Associate" | "Senior Associate";
  school?: string;
};

// Placeholder data — will be replaced by Airtable embed
export const members: Member[] = [
  {
    id: "1",
    name: "Member Name",
    role: "VP of Web Development",
    team: "Web Development",
    tier: "Senior Associate",
  },
  {
    id: "2",
    name: "Member Name",
    role: "CTO",
    team: "Web Development",
    tier: "Senior Associate",
  },
];

export const teams = [
  "Web Development",
  "Research & Investments",
  "Chapters",
  "Marketing",
  "Operations",
];

export const tiers = ["Intern", "Analyst", "Associate", "Senior Associate"] as const;
