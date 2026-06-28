// BFN Site Data — all content managed here

export const stats = [
  { value: 200, suffix: "+", label: "Student Members" },
  { value: 3, suffix: "", label: "Active Chapters" },
  { value: 50, suffix: "+", label: "Opportunities" },
  { value: 4, suffix: "", label: "Member Paths" },
];

export const paths = [
  {
    number: "01",
    title: "Learn",
    description: "Finance fundamentals, templates, and recruiting preparation.",
    icon: "BookOpen",
  },
  {
    number: "02",
    title: "Find",
    description: "Curated internships, programs, competitions, and deadlines.",
    icon: "Search",
  },
  {
    number: "03",
    title: "Practice",
    description: "Stock pitches, case work, research briefs, and presentations.",
    icon: "Target",
  },
  {
    number: "04",
    title: "Lead",
    description: "Chapter roles, team work, local events, and student projects.",
    icon: "Users",
  },
];

export const chapters = [
  {
    state: "MO",
    school: "Marquette High School",
    city: "Chesterfield, MO",
    founded: "2024",
  },
  {
    state: "FL",
    school: "Middleton High School",
    city: "Tampa, FL",
    founded: "2024",
  },
  {
    state: "NJ",
    school: "Bridgewater-Raritan High School",
    city: "Bridgewater, NJ",
    founded: "2025",
  },
];

export const opportunities = [
  { category: "Internships", icon: "Briefcase", count: 15 },
  { category: "Competitions", icon: "Trophy", count: 12 },
  { category: "Programs", icon: "GraduationCap", count: 8 },
  { category: "Resources", icon: "Library", count: 20 },
];

export const faqItems = [
  {
    question: "What is Bridge Finance Network?",
    answer: "BFN is a student-led nonprofit helping motivated high school students build finance skills, find credible opportunities, compete in case competitions, publish research, and lead local chapters. We provide the structure and access that most students don't get until college.",
  },
  {
    question: "Do I need finance experience to join?",
    answer: "No prior experience is required. BFN is designed for students at all levels — from those just curious about finance to those already preparing for recruiting. Our curriculum and resources meet you where you are.",
  },
  {
    question: "How do I apply?",
    answer: "Visit our Open Roles page and submit an application through the public Google Form. After your application is reviewed and approved, you'll receive a registration code by email to create your member portal account.",
  },
  {
    question: "What happens after I apply?",
    answer: "BFN reviews your application for fit and current team needs. If approved, you'll receive a registration code via email within 5-7 business days. This code gives you access to the full member portal.",
  },
  {
    question: "What is the time commitment?",
    answer: "BFN is flexible. Most members spend 2-4 hours per week engaging with opportunities, attending sessions, or contributing to their team. Chapter leads and team heads may spend slightly more time during active periods.",
  },
  {
    question: "What are the tiers and how do I advance?",
    answer: "BFN has four tiers: Intern, Analyst, Associate, and Senior Associate. You advance by consistently contributing, completing curriculum modules, participating in competitions, and demonstrating leadership within your team or chapter.",
  },
  {
    question: "Is BFN open to all grade levels?",
    answer: "Yes. BFN accepts students from all high school grade levels (9-12). We also welcome exceptional middle school students who demonstrate strong interest and maturity.",
  },
  {
    question: "How do chapters work?",
    answer: "Each chapter operates at a specific school with a local leadership team. Chapters host sessions, organize events, and connect members to the broader BFN network. You can join an existing chapter or apply to start one at your school.",
  },
  {
    question: "Who do I contact with questions?",
    answer: "Reach out to us at bridgefinancenetwork@gmail.com or through our contact form. You can also connect with us on LinkedIn and Instagram for updates.",
  },
];

export const portfolio = [
  { ticker: "AAPL", company: "Apple Inc.", entry: 178.50, current: 195.20, thesis: "Strong services growth and iPhone cycle momentum." },
  { ticker: "MSFT", company: "Microsoft Corp.", entry: 380.00, current: 425.50, thesis: "AI integration across enterprise products driving revenue expansion." },
  { ticker: "JPM", company: "JPMorgan Chase", entry: 195.00, current: 212.80, thesis: "Net interest income growth and strong capital markets activity." },
  { ticker: "V", company: "Visa Inc.", entry: 275.00, current: 298.40, thesis: "Cross-border travel recovery and digital payments secular trend." },
  { ticker: "AMZN", company: "Amazon.com", entry: 155.00, current: 185.60, thesis: "AWS margin expansion and advertising revenue acceleration." },
  { ticker: "GS", company: "Goldman Sachs", entry: 420.00, current: 465.30, thesis: "M&A advisory pipeline recovery and asset management growth." },
];

export const events = [
  {
    title: "Summer Stock Pitch Competition",
    date: "July 15, 2026",
    description: "Present your best equity research pitch to a panel of finance professionals.",
    type: "Competition",
  },
  {
    title: "Guest Speaker: Investment Banking",
    date: "July 22, 2026",
    description: "Live session with a VP from a bulge bracket bank on recruiting and day-to-day.",
    type: "Speaker",
  },
  {
    title: "Chapter Leadership Summit",
    date: "August 5, 2026",
    description: "National virtual meetup for all chapter leads to plan the fall semester.",
    type: "Meeting",
  },
];

export const blogPosts = [
  {
    title: "BFN Launches Third Chapter in New Jersey",
    date: "June 2025",
    category: "Announcement",
    excerpt: "Bridgewater-Raritan High School becomes the newest addition to the BFN chapter network.",
  },
  {
    title: "Spring Stock Pitch Competition Recap",
    date: "May 2025",
    category: "Recap",
    excerpt: "Over 40 members competed in our largest competition yet. See the winners and key takeaways.",
  },
  {
    title: "Member Spotlight: From Intern to Senior Associate",
    date: "April 2025",
    category: "Spotlight",
    excerpt: "How one member leveraged BFN resources to land a summer finance internship as a junior.",
  },
];

export const openRoles = [
  {
    title: "Founding Web Developer Intern",
    team: "Web Development",
    commitment: "5-8 hrs/week",
    description: "Help build and maintain BFN's website and member portal using Next.js, TypeScript, and Supabase.",
    formLink: "https://forms.gle/u12GhM5b8QyzqzgJ7",
  },
];

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Chapters", href: "/chapters" },
  { label: "Partners", href: "/partners" },
  { label: "Portfolio", href: "/portfolio" },
];
