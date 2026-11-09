// Specialized Programs data. The homepage Programs section renders entirely
// from this list, in order — edit text, parts, counts, and totals here.

export interface ProgramPart {
  /** Small monospace label, e.g. "Part 1" or "Topic 1". */
  label: string;
  name: string;
  description: string;
  /** Rounded count tags, e.g. "4 courses". Omit for none. */
  tags?: string[];
}

export interface ProgramTotal {
  value: string;
  label: string;
}

export interface Program {
  number: string;
  name: string;
  description: string;
  /** Optional small monospace line under the description. */
  note?: string;
  /** Shows a "Coming Soon" badge and a "Course details coming soon." note in
   * place of the parts and totals. */
  comingSoon?: boolean;
  /** Everything below is optional — anything left out simply doesn't render. */
  parts?: ProgramPart[];
  totals?: ProgramTotal[];
  /** Label for the final-work field; defaults to "Final assignment". */
  finalLabel?: string;
  finalValue?: string;
  gain?: string;
}

export const programs: Program[] = [
  {
    number: "01",
    name: "Intro to Investment",
    description:
      "A four-level pathway from market basics to a complete stock pitch on a real public company.",
    parts: [
      {
        label: "Part 1",
        name: "Foundation",
        description: "How public markets work, finance roles, industries, and key company metrics.",
        tags: ["4 courses", "3 assignments"],
      },
      {
        label: "Part 2",
        name: "Application",
        description: "How to read a professional investment thesis and write your own.",
        tags: ["1 course", "2 assignments"],
      },
      {
        label: "Part 3",
        name: "Price Your Conviction",
        description: "Growth drivers, catalysts, comparable companies, and setting a price target.",
        tags: ["4 courses", "3 assignments"],
      },
      {
        label: "Part 4",
        name: "Institutional",
        description: "How to structure, build, and defend a persuasive stock pitch.",
        tags: ["1 course", "1 assignment"],
      },
    ],
    totals: [
      { value: "4", label: "Parts" },
      { value: "10", label: "Courses" },
      { value: "9", label: "Assignments" },
    ],
    finalValue: "Stock pitch on a real public company, with an optional pitch defense",
    gain: "A finished stock pitch and core equity research skills",
  },
  {
    number: "02",
    name: "Fundamentals of Financial Literacy",
    description:
      "Practical money skills for life, taught through hands-on activities instead of reading alone.",
    parts: [
      {
        label: "Part 1",
        name: "Interviews and Banking",
        description: "Interview preparation, bank accounts, interest rates, and FDIC insurance.",
        tags: ["2 courses", "4 assignments"],
      },
      {
        label: "Part 2",
        name: "Saving and Payments",
        description: "Saving strategies, credit and debit cards, credit scores, and checks.",
        tags: ["3 courses", "4 assignments"],
      },
      {
        label: "Part 3",
        name: "Budgeting, Taxes, and Inflation",
        description: "Building a budget, understanding taxes and tax forms, and measuring inflation.",
        tags: ["3 courses", "3 assignments"],
      },
      {
        label: "Part 4",
        name: "Retirement and Digital Finance",
        description:
          "Retirement accounts, online banking, digital privacy, and applying your knowledge.",
        tags: ["3 courses", "3 assignments"],
      },
    ],
    totals: [
      { value: "4", label: "Parts" },
      { value: "11", label: "Courses" },
      { value: "14", label: "Assignments" },
    ],
    finalValue: "A personal database of your 10 to 15 most important financial tips",
    gain: "Practical financial skills you can apply in everyday life",
  },
  {
    number: "03",
    name: "Basics of Accounting",
    description: "Learn how businesses record their money, then analyze the books of a real company.",
    parts: [
      {
        label: "Part 1",
        name: "Foundation",
        description:
          "What accounting is, careers in the field, debits and credits, and core vocabulary.",
        tags: ["4 courses", "1 assignment"],
      },
      {
        label: "Part 2",
        name: "Recording Transactions and Adjusting the Books",
        description:
          "Journal entries, T-accounts, inventory valuation, adjustments, and trial balances.",
        tags: ["6 courses", "1 assignment"],
      },
      {
        label: "Part 3",
        name: "Financial Statements",
        description:
          "Reading and connecting the income statement, cash flow statement, and balance sheet.",
        tags: ["5 courses"],
      },
      {
        label: "Part 4",
        name: "Capstone",
        description:
          "Finding real filings, calculating key ratios, and judging a company's financial health.",
        tags: ["4 courses", "1 assignment"],
      },
    ],
    totals: [
      { value: "4", label: "Parts" },
      { value: "19", label: "Courses" },
      { value: "3", label: "Assignments" },
    ],
    finalValue: "Financial health analysis of a real company, presented to a mock panel",
    gain: "The ability to read real financial statements and explain what they mean",
  },
  {
    number: "04",
    name: "Valuation Modeling",
    description: "Professional valuation training, valued at $197 and free for BFN members.",
    note: "Provided at no cost by Wall Street Oasis",
    parts: [
      {
        label: "Topic 1",
        name: "Trading Comparables",
        description: "Valuing companies against public peers, using real-life case studies.",
      },
      {
        label: "Topic 2",
        name: "Precedent Transactions",
        description:
          "Using past deals to value a company, with case studies such as Nike and Timberland.",
      },
      {
        label: "Topic 3",
        name: "Equity and Enterprise Value",
        description:
          "Calculating both values and adjusting for debt, cash, and minority interests.",
      },
      {
        label: "Topic 4",
        name: "Comparing Multiples",
        description: "Standardizing metrics across peers and analyzing EV/Revenue and EV/EBITDA.",
      },
    ],
    totals: [
      { value: "20", label: "Modules" },
      { value: "190+", label: "Lessons" },
      { value: "12+", label: "Hours of Video" },
    ],
    finalLabel: "Practice",
    finalValue: "Exercises throughout the course",
    gain: "Certificate of completion",
  },
  {
    number: "05",
    name: "Market Analysis and Report Writing",
    description:
      "Learn to read and digest financial news while practicing writing financial analysis and news.",
    comingSoon: true,
  },
];
