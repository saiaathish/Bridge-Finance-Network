// Guest speakers data. Bio/title/tags are placeholders pending the real
// details — swap them in once available. The grid on /portal/speakers
// renders entirely from this list.

export interface Speaker {
  id: string;
  name: string;
  title: string;
  /** Public headshot path. Omitted entries render a placeholder avatar. */
  photo?: string;
  bio: string;
  tags: string[];
}

export const speakers: Speaker[] = [
  {
    id: "brendan-hermanspan",
    name: "Brendan Hermanspan",
    title: "Guest Speaker",
    photo: "/speakers/brendan-hermanspan.webp",
    bio: "Bio coming soon.",
    tags: [],
  },
  {
    id: "lenise-miller",
    name: "Lenise Miller",
    title: "Guest Speaker",
    photo: "/speakers/lenise-miller.webp",
    bio: "Bio coming soon.",
    tags: [],
  },
  {
    id: "steven-zhang",
    name: "Steven Zhang",
    title: "Guest Speaker",
    photo: "/speakers/steven-zhang.webp",
    bio: "Bio coming soon.",
    tags: [],
  },
  {
    id: "bryce-viorst",
    name: "Bryce Viorst",
    title: "Guest Speaker",
    photo: "/speakers/bryce-viorst.webp",
    bio: "Bio coming soon.",
    tags: [],
  },
  {
    id: "jonathan-schudmak",
    name: "Jonathan Schudmak",
    title: "Guest Speaker",
    photo: "/speakers/jonathan-schudmak.webp",
    bio: "Bio coming soon.",
    tags: [],
  },
  {
    id: "patrick-curtis",
    name: "Patrick Curtis",
    title: "Guest Speaker",
    bio: "Bio coming soon.",
    tags: [],
  },
];
