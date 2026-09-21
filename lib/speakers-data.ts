// Guest speakers data. The grid on /portal/speakers renders entirely from
// this list — add, remove, or edit speakers here.

export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  /** Public headshot path. Omitted entries render a placeholder avatar. */
  photo?: string;
  bio: string;
  tags: string[];
}

export const speakers: Speaker[] = [
  {
    id: "brendan-hermanspan",
    name: "Brendan Hermanspan",
    title: "Private Wealth Management",
    organization: "Goldman Sachs",
    photo: "/speakers/brendan-hermanspan.webp",
    bio: "A Private Wealth Management professional at Goldman Sachs and Boston College graduate. He previously co-founded Scholars of Finance, one of the leading student-run finance organizations in the country.",
    tags: ["Private Wealth Management", "Student Organizations", "Breaking Into Finance"],
  },
  {
    id: "lenise-miller",
    name: "Lenise Miller",
    title: "VP of Enterprise Risk Management",
    organization: "Credit Agricole CIB",
    photo: "/speakers/lenise-miller.webp",
    bio: "An enterprise risk and regulatory compliance leader with nearly a decade of experience across banking and FinTech. Previously at KPMG and Capco, she now serves as VP of Enterprise Risk Management at Crédit Agricole CIB.",
    tags: ["Enterprise Risk", "Regulatory Compliance", "Banking Careers"],
  },
  {
    id: "steven-zhang",
    name: "Steven Zhang",
    title: "Software Engineer",
    organization: "PaveFinance",
    photo: "/speakers/steven-zhang.webp",
    bio: "A Carnegie Mellon graduate in Mathematics and Machine Learning. He spent two years as a Software Engineer at Amazon before joining PaveFinance, and serves as BFN's Web Development Advisor.",
    tags: ["Software Engineering", "FinTech", "Web Development"],
  },
  {
    id: "bryce-viorst",
    name: "Bryce Viorst",
    title: "CEO & Founder",
    organization: "StreetSmart",
    photo: "/speakers/bryce-viorst.webp",
    bio: "Founder and CEO of StreetSmart, a finance recruitment platform built to level the playing field for students breaking into Wall Street. He previously worked in investment banking at Stifel and private equity at I Squared Capital.",
    tags: ["Finance Recruiting", "Investment Banking", "Career Development"],
  },
  {
    id: "jonathan-schudmak",
    name: "Jonathan Schudmak",
    title: "Former Managing Director (Energy & Power)",
    organization: "Wells Fargo",
    photo: "/speakers/jonathan-schudmak.webp",
    bio: "A former Managing Director at Wells Fargo Securities with nearly two decades in investment banking. A Harvard Business School graduate, he has recruited, managed, and coached over 100 finance professionals throughout his career.",
    tags: ["Investment Banking", "Career Coaching", "Recruiting"],
  },
  {
    id: "patrick-curtis",
    name: "Patrick Curtis",
    title: "CEO & Founder",
    organization: "Wall Street Oasis",
    photo: "/speakers/patrick-curtis.webp",
    bio: "Founder and CEO of Wall Street Oasis, the largest online community for finance careers with over 700,000 members. He previously worked in investment banking at Rothschild and private equity before earning his MBA from Wharton.",
    tags: ["Investment Banking", "Finance Careers", "Entrepreneurship"],
  },
];
