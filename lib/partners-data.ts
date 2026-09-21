// Partners & supporters data. Add, remove, or edit organizations here; the
// grid on /partners renders entirely from this list.

export interface Partner {
  id: string;
  name: string;
  /** Public logo path. Omitted entries render a name-only card. */
  logo?: string;
  description: string;
}

export const partners: Partner[] = [
  {
    id: "moniqo",
    name: "Moniqo",
    logo: "/partners/moniqo.jpg",
    description: "Supports BFN's international chapters and provides in-person tutoring in Queens and Brooklyn.",
  },
  {
    id: "nextgen-knowledge",
    name: "Nextgen Knowledge",
    logo: "/partners/nextgen-knowledge.png",
    description: "Brings financial literacy to younger students through interactive question banks.",
  },
  {
    id: "wall-street-oasis",
    name: "Wall Street Oasis",
    logo: "/partners/wall-street-oasis.svg",
    description: "Online community and resource hub for finance careers, offering forums, guides, and interview prep.",
  },
  {
    id: "fmw-nonprofit-solutions",
    name: "FMW Nonprofit Solutions",
    logo: "/partners/fmw-nonprofit-solutions.jpg",
    description: "Provides fiscal sponsorship, financial management, and administrative services.",
  },
  {
    id: "griptape",
    name: "Griptape",
    logo: "/partners/griptape.png",
    description: "Provided BFN's foundational startup funding of $2,250.",
  },
];
