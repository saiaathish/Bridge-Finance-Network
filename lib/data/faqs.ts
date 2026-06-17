export type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

export const faqs: FAQ[] = [
  {
    question: "What is Bridge Finance Network?",
    answer:
      "BFN is a student-led nonprofit that helps motivated students build finance skills, find credible opportunities, compete in case competitions, publish research, and lead local chapters.",
    category: "General",
  },
  {
    question: "How do I join BFN?",
    answer:
      "Submit a public application through an open role or chapter pathway. BFN reviews fit and current needs, then approved applicants receive a registration code via email to create their member account.",
    category: "Membership",
  },
  {
    question: "Do I need prior finance experience to apply?",
    answer:
      "No. BFN accepts motivated students at all experience levels. What matters is genuine interest in finance and a willingness to contribute to the network.",
    category: "Membership",
  },
  {
    question: "What does a member get access to?",
    answer:
      "Approved members get access to the full Opportunities Hub, Curriculum Hub, case studies, competitions, guest speaker recordings, the resource library, and internal team workflows.",
    category: "Membership",
  },
  {
    question: "What are the member tiers?",
    answer:
      "BFN has four tiers: Intern, Analyst, Associate, and Senior Associate. Tiers reflect contribution level and are reviewed and updated by the HR team.",
    category: "Membership",
  },
  {
    question: "Is BFN affiliated with any university or company?",
    answer:
      "BFN is an independent student-led nonprofit. It is not affiliated with any university or financial institution, though members are students from schools across the country.",
    category: "General",
  },
  {
    question: "What is a BFN chapter?",
    answer:
      "Chapters are local groups at high schools or universities where students host sessions, run events, support recruiting, and build finance experience while staying connected to the national network.",
    category: "Chapters",
  },
  {
    question: "How do I start a chapter at my school?",
    answer:
      "You can apply to start a chapter through the Chapters page. BFN reviews chapter applications and provides support to approved chapter leads.",
    category: "Chapters",
  },
  {
    question: "I forgot my password. How do I reset it?",
    answer:
      "On the login page, click 'Forgot password' and enter your registered email. You will receive a reset link within a few minutes.",
    category: "Account",
  },
  {
    question: "Who do I contact if I have a question not answered here?",
    answer:
      "Reach out through the Contact page and a BFN team member will follow up with you.",
    category: "General",
  },
];
