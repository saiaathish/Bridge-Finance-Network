// Partners data. Add, remove, or edit organizations here; the vertically
// scrolling list on /partners renders entirely from this list, in order.

export interface Partner {
  id: string;
  name: string;
  /** Short label shown above the name, e.g. "Fiscal Sponsor". */
  type: string;
  /** Public logo path. Omitted entries render a name-only row. */
  logo?: string;
  /** Logo's natural pixel dimensions, so it renders at its own aspect ratio. */
  logoWidth?: number;
  logoHeight?: number;
  /** Only rendered when provided — never fabricated when the org didn't give us this copy. */
  whatTheyDo?: string;
  howTheySupport?: string;
  /** External site the logo and button link to. Omitted entries render with no link. */
  website?: string;
}

export const partners: Partner[] = [
  {
    id: "fmw-nonprofit-solutions",
    name: "FMW Nonprofit Solutions",
    type: "Fiscal Sponsor",
    logo: "/partners/fmw-nonprofit-solutions.jpg",
    logoWidth: 863,
    logoHeight: 723,
    howTheySupport: "Provides fiscal sponsorship, financial management, and administrative services.",
    website: "https://www.fmwnonprofitsolutions.org/",
  },
  {
    id: "griptape",
    name: "Griptape",
    type: "Funding Partner",
    logo: "/partners/griptape.png",
    logoWidth: 404,
    logoHeight: 402,
    howTheySupport: "Provided BFN's foundational startup funding of $2,250.",
    website: "https://www.griptape.org/",
  },
  {
    id: "wall-street-oasis",
    name: "Wall Street Oasis",
    type: "Education Partner",
    logo: "/partners/wall-street-oasis.svg",
    logoWidth: 574,
    logoHeight: 159,
    whatTheyDo: "Online community and resource hub for finance careers, offering forums, guides, and interview prep.",
    howTheySupport: "Provides our Valuation Modeling track at zero cost.",
    website: "https://www.wallstreetoasis.com/",
  },
  {
    id: "nextgen-knowledge",
    name: "Nextgen Knowledge",
    type: "Education Partner",
    logo: "/partners/nextgen-knowledge.jpg",
    logoWidth: 997,
    logoHeight: 682,
    whatTheyDo: "Brings financial literacy to younger students through interactive question banks.",
    website: "https://nextgenknowledge.org/",
  },
  {
    id: "moniqo",
    name: "Moniqo",
    type: "Community Partner",
    logo: "/partners/moniqo.png",
    logoWidth: 500,
    logoHeight: 500,
    howTheySupport: "Supports BFN's international chapters and provides in-person tutoring in Queens and Brooklyn.",
  },
];
