// Guest speakers data. Bio/tags are placeholders pending the real
// details — swap them in once available. The grid on /portal/speakers
// renders entirely from this list.

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
    bio: "Bio coming soon.",
    tags: [],
  },
  {
    id: "lenise-miller",
    name: "Lenise Miller",
    title: "VP of Enterprise Risk Management",
    organization: "Credit Agricole CIB",
    photo: "/speakers/lenise-miller.webp",
    bio: "Bio coming soon.",
    tags: [],
  },
  {
    id: "steven-zhang",
    name: "Steven Zhang",
    title: "Software Engineer",
    organization: "PaveFinance",
    photo: "/speakers/steven-zhang.webp",
    bio: "Bio coming soon.",
    tags: [],
  },
  {
    id: "bryce-viorst",
    name: "Bryce Viorst",
    title: "CEO & Founder",
    organization: "StreetSmart",
    photo: "/speakers/bryce-viorst.webp",
    bio: "Bio coming soon.",
    tags: [],
  },
  {
    id: "jonathan-schudmak",
    name: "Jonathan Schudmak",
    title: "Former Managing Director (Energy & Power)",
    organization: "Wells Fargo",
    photo: "/speakers/jonathan-schudmak.webp",
    bio: "Bio coming soon.",
    tags: [],
  },
  {
    id: "patrick-curtis",
    name: "Patrick Curtis",
    title: "CEO & Founder",
    organization: "Wall Street Oasis",
    photo: "/speakers/patrick-curtis.webp",
    bio: "Bio coming soon.",
    tags: [],
  },
];
