// Partners data. Add, remove, or edit organizations here; the vertically
// scrolling list on /partners renders entirely from this list, in order.

export interface Partner {
  id: string;
  name: string;
  /** Short label shown above the name, e.g. "Fiscal Sponsor". Only rendered when provided. */
  type?: string;
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
    id: "wall-street-oasis",
    name: "Wall Street Oasis",
    type: "Education Partner",
    logo: "/partners/wall-street-oasis.svg",
    logoWidth: 574,
    logoHeight: 159,
    whatTheyDo: "Founded in 2006, Wall Street Oasis is an online community for students and professionals pursuing careers in finance. It offers discussion forums, company and salary insights, interview preparation, and financial modeling courses.",
    howTheySupport: "Wall Street Oasis provides our Valuation Modeling track at no cost and gives BFN students access to Wall Street interview materials. Through WSO, our students also gain exposure to finance recruiting and to online communities and forums covering different areas of the industry.",
    website: "https://www.wallstreetoasis.com/",
  },
  {
    id: "nextgen-knowledge",
    name: "NextGen Knowledge",
    type: "Education Partner",
    logo: "/partners/nextgen-knowledge.jpg",
    logoWidth: 997,
    logoHeight: 682,
    whatTheyDo: "NextGen Knowledge is a student-led organization that makes practical financial literacy accessible to kids and teens at no cost. Its free 3D game, Fin City, lets players ages 6 to 18 run a simulated financial life, and the organization reports reaching more than 350 students across 15+ countries.",
    howTheySupport: "NextGen Knowledge partnered with BFN to create an advanced version of its game, Fin City, for our financial literacy program. Through a connection made by BFN, Moniqo also uses Fin City in its work.",
    website: "https://nextgenknowledge.org/",
  },
  {
    id: "moniqo",
    name: "Moniqo",
    type: "Community Partner",
    logo: "/partners/moniqo.png",
    logoWidth: 500,
    logoHeight: 500,
    whatTheyDo: "Moniqo is a student-run financial literacy organization focused on reaching middle school students. Its work includes in-person tutoring in Queens and Brooklyn, along with efforts to bring financial literacy education to students internationally.",
    howTheySupport: "Moniqo assists with BFN's international financial literacy expansion using our materials and structured programs. It also offers BFN members in New York City in-person tutoring and volunteer opportunities, with volunteer hours provided.",
  },
  {
    id: "echelon-equities",
    name: "Echelon Equity",
    logo: "/partners/echelon-equities.png",
    logoWidth: 1052,
    logoHeight: 1064,
    whatTheyDo: "Echelon Equity is a student-led investment research group for high school and undergraduate students. Its analysts build valuation models, write investment memos, and publish equity research after professional review.",
    howTheySupport: "Echelon introduces our students to specialized equity research programs and competitions, led by students with real investing and equity research experience. Winners of our competitions and programs receive Bloomberg Terminal access and coffee chats with shared guest speakers and connections.",
    website: "https://echelonequity.co/",
  },
  {
    id: "griptape",
    name: "GripTape",
    type: "Funding Partner",
    logo: "/partners/griptape.png",
    logoWidth: 1052,
    logoHeight: 1054,
    whatTheyDo: "GripTape is a New York-based nonprofit dedicated to youth-driven learning. Through its signature Learning Challenge, young people ages 14 to 19 spend 10 weeks pursuing a topic they care about, with funding, a mentor, and full control over their learning.",
    howTheySupport: "GripTape provided BFN's foundational startup funding of $2,250. It also paired us with an advisor during our earliest stages, who guided our development and helped build and refine our business model.",
    website: "https://www.griptape.org/",
  },
  {
    id: "fmw-nonprofit-solutions",
    name: "FMW Nonprofit Solutions",
    type: "Fiscal Sponsor",
    logo: "/partners/fmw-nonprofit-solutions.jpg",
    logoWidth: 863,
    logoHeight: 723,
    whatTheyDo: "FMW Nonprofit Solutions is a 501(c)(3) organization that helps other nonprofits strengthen their operations and reach their goals. It offers fiscal sponsorship to groups that do not yet have tax-exempt status, as well as to small and mid-sized 501(c)(3) organizations.",
    howTheySupport: "FMW serves as BFN's fiscal sponsor, providing financial management and administrative services. Its team also supports our fundraising and technical needs, including our website, and advises our executive board on planning and decision-making.",
    website: "https://www.fmwnonprofitsolutions.org/",
  },
];
