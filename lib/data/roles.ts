export type Role = {
  id: string;
  title: string;
  team: string;
  commitment: string;
  description: string;
  responsibilities: string[];
  applicationUrl: string;
  open: boolean;
};

export const roles: Role[] = [
  {
    id: "web-dev-intern",
    title: "Web Development Intern",
    team: "Web Development",
    commitment: "5–8 hrs/week",
    description:
      "Help build and maintain the BFN website. Work with the web dev team on frontend pages, components, and integrations using Next.js and Tailwind.",
    responsibilities: [
      "Build and iterate on public-facing pages",
      "Implement responsive layouts from Figma wireframes",
      "Contribute to shared component library",
      "Participate in weekly team meetings and code reviews",
    ],
    applicationUrl: "#",
    open: true,
  },
  {
    id: "finance-analyst",
    title: "Finance Analyst",
    team: "Research & Investments",
    commitment: "4–6 hrs/week",
    description:
      "Contribute to BFN's research pipeline and paper trading portfolio. Analysts write equity theses, participate in case competitions, and build their finance skill set.",
    responsibilities: [
      "Research and pitch equity positions for the BFN portfolio",
      "Write research briefs and investment memos",
      "Participate in case competitions and study groups",
      "Engage with the curriculum and opportunities hub",
    ],
    applicationUrl: "#",
    open: true,
  },
  {
    id: "chapter-lead",
    title: "Chapter Lead",
    team: "Chapters",
    commitment: "3–5 hrs/week",
    description:
      "Lead a BFN chapter at your school. Chapter leads organize local sessions, recruit members, and represent BFN in their community.",
    responsibilities: [
      "Host at least two sessions per month at your school",
      "Recruit and onboard local chapter members",
      "Coordinate with the national BFN team on events and programs",
      "Maintain chapter activity and report back to BFN leadership",
    ],
    applicationUrl: "#",
    open: true,
  },
  {
    id: "marketing-intern",
    title: "Marketing & Content Intern",
    team: "Marketing",
    commitment: "3–5 hrs/week",
    description:
      "Support BFN's outreach and content strategy. Help write blog posts, manage social content, and grow BFN's presence among student finance communities.",
    responsibilities: [
      "Write blog posts and member spotlights",
      "Create and schedule social media content",
      "Support email newsletters and announcements",
      "Help document BFN programs and events",
    ],
    applicationUrl: "#",
    open: true,
  },
];
