// Guest speakers data. Placeholder entries — swap in real speaker photos,
// bios, and tags once available. The grid on /portal/speakers renders
// entirely from this list.

export interface Speaker {
  id: string;
  name: string;
  title: string;
  location: string;
  /** Public headshot path. Omitted entries render a placeholder avatar. */
  photo?: string;
  bio: string;
  tags: string[];
}

export const speakers: Speaker[] = [
  {
    id: "jordan-blake",
    name: "Jordan Blake",
    title: "Investment Banking Analyst",
    location: "New York, NY",
    bio: "Jordan spent three years in leveraged finance before moving into growth equity, and now mentors students on breaking into banking, building models, and acing technical interviews.",
    tags: ["Investment Banking", "Career Advice", "Networking"],
  },
  {
    id: "morgan-lee",
    name: "Morgan Lee",
    title: "Equity Research Associate",
    location: "Chicago, IL",
    bio: "Morgan covers consumer and retail names at a bulge bracket firm and spoke with members about building an investment thesis, writing a research note, and pitching a stock with confidence.",
    tags: ["Equity Research", "Stock Pitching", "Public Speaking"],
  },
  {
    id: "avery-collins",
    name: "Avery Collins",
    title: "Private Equity Vice President",
    location: "Boston, MA",
    bio: "Avery walked members through how private equity deals get sourced and underwritten, and shared advice on positioning for buy-side recruiting straight out of undergrad.",
    tags: ["Private Equity", "Deal Sourcing", "Recruiting"],
  },
  {
    id: "sasha-nguyen",
    name: "Sasha Nguyen",
    title: "Portfolio Manager",
    location: "San Francisco, CA",
    bio: "Sasha manages a long/short equity portfolio and led a session on risk management, portfolio construction, and the habits that separate good analysts from great ones.",
    tags: ["Asset Management", "Risk Management", "Career Advice"],
  },
  {
    id: "devon-osei",
    name: "Devon Osei",
    title: "Fintech Founder & CEO",
    location: "Austin, TX",
    bio: "Devon founded a payments startup after starting his career in corporate banking, and spoke about the jump from finance to entrepreneurship and what investors look for in an early pitch.",
    tags: ["Fintech", "Entrepreneurship", "Startups"],
  },
  {
    id: "riley-thompson",
    name: "Riley Thompson",
    title: "Corporate Finance Manager",
    location: "Denver, CO",
    bio: "Riley leads FP&A for a mid-cap manufacturer and gave members a look at how finance teams operate outside of Wall Street, from budgeting to board reporting.",
    tags: ["Corporate Finance", "FP&A", "Career Advice"],
  },
];
