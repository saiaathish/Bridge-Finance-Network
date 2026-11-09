// Directory data. The tabs and grid on /directory render entirely from
// `teamMembers`, which merges the hand-written cards below with the member
// roster in data/bfn-members.json (name, tier, school, team).

import roster from "@/data/bfn-members.json";

export const teamCategories = [
  "C-Suite",
  "Web Dev Team",
  "Operations",
  "Marketing",
  "Programs",
  "Curriculum",
  "Resources",
  "Partnerships",
  "Members",
] as const;

export type TeamCategory = (typeof teamCategories)[number];

export interface TeamMember {
  id: string;
  name: string;
  /** Omitted for members who should show no position line (e.g. members). */
  title?: string;
  /** Public portrait path for members with a profile image. */
  photo?: string;
  category: TeamCategory;
  school?: string;
  /** Tier from the member roster (VP, Director, Manager, ...) — shown as a
   * small label above the name. */
  rank?: string;
  /** One entry per paragraph. */
  description?: string[];
  /** True for people who come only from the roster, with no hand-written
   * card — they render as a compact name / tier / school card. */
  rosterOnly?: boolean;
}

// Hand-written cards. Photos, titles, and bios live here; tier, tab, and
// order come from the roster (see the merge at the bottom of this file).
const cardMembers: TeamMember[] = [
  // C-Suite
  {
    id: "malhar-sawant",
    name: "Malhar Sawant",
    title: "Chief Executive Officer",
    photo: "/team/malhar-sawant.png",
    category: "C-Suite",
    description: [
      "Malhar founded Bridge Finance Network with a mission to build the next generation of financial talent. With a focus on high finance and financial education, he leads BFN's vision, executes on high-level strategy, and ensures students have access to the best possible experience.",
    ],
  },
  {
    id: "andrew-fu",
    name: "Andrew Fu",
    title: "Chief Operating Officer",
    photo: "/team/andrew-fu.png",
    category: "C-Suite",
    description: [
      "As Co-Founder of BFN, he has been instrumental in building the foundational system that BFN currently operates. He believes that by growing this organization, he can connect students with financial education and real-world opportunity.",
    ],
  },
  {
    id: "carol-sun",
    name: "Carol Sun",
    title: "Chief Marketing Officer",
    photo: "/team/carol-sun.png",
    category: "C-Suite",
    description: [
      "Carol is a DECA International qualifier and grew a simulated investment portfolio from $100K to $560K in just six months.",
      "At BFN, she leads all marketing and media operations, driving the organization's brand presence and growth across every platform.",
    ],
  },
  {
    id: "emily-tai",
    name: "Emily Tai",
    title: "Chief Financial Officer",
    photo: "/team/emily-tai.png",
    category: "C-Suite",
    description: [
      "Emily is a rising senior at Brooklyn Technical High School with a passion for finance and organizational management.",
      "At BFN, she oversees all fundraising and budgeting, ensuring the organization has the financial foundation to grow and serve its members.",
    ],
  },
  {
    id: "sai-karthik",
    name: "Sai Karthik",
    title: "Chief Technology Officer",
    photo: "/team/sai-karthik.png",
    category: "C-Suite",
    description: [
      "Sai is a rising senior at Marquette High School with deep experience in artificial intelligence and technical systems.",
      "At BFN, he leads platform architecture and engineering, building the technical infrastructure that gives students a seamless, powerful experience.",
    ],
  },
  {
    id: "anderson-overkamp",
    name: "Anderson Overkamp",
    title: "Chief Investment Officer",
    photo: "/team/anderson-overkamp.png",
    category: "C-Suite",
    description: [
      "Anderson began his finance journey as a self-directed stock market investor and equity researcher, documenting his analysis through his own website and blog.",
      "He brings deep knowledge in equity research and financial writing to help BFN deliver meaningful, real-world learning experiences.",
    ],
  },

  // Web Dev Team
  {
    id: "sashitej-palla",
    name: "Sashitej Palla",
    title: "Vice President, Web Development",
    category: "Web Dev Team",
    school: "Mount Olive High School",
    rank: "Lead",
  },
  {
    id: "kanav-jaitly",
    name: "Kanav Jaitly",
    title: "Web Development Manager",
    category: "Web Dev Team",
    school: "Mount Olive High School",
    rank: "Manager",
  },
  {
    id: "ackshat-tiwari",
    name: "Ackshat Tiwari",
    title: "Senior Associate",
    category: "Web Dev Team",
    school: "Rock Ridge High School",
    rank: "Senior Associate",
  },
  {
    id: "sathvik-shivam",
    name: "Sathvik Shivam",
    title: "Senior Associate",
    category: "Web Dev Team",
    school: "Metea Valley High School",
    rank: "Senior Associate",
  },
  {
    id: "arnav-srivastava",
    name: "Arnav Srivastava",
    title: "Associate",
    category: "Web Dev Team",
    school: "Marquette High School",
    rank: "Associate",
  },

  // Operations
  {
    id: "henry-harvey",
    name: "Henry Harvey",
    title: "Vice President, Operations",
    category: "Operations",
    school: "Rye Country Day School",
    rank: "Lead",
  },
  {
    id: "hrudya-pullalarevu",
    name: "Hrudya Pullalarevu",
    title: "Senior Associate",
    category: "Operations",
    school: "Northville High School",
    rank: "Senior Associate",
  },
  {
    id: "aryan-katakam",
    name: "Aryan Katakam",
    title: "Associate",
    category: "Operations",
    school: "Seminole High School",
    rank: "Associate",
  },

  // Marketing
  {
    id: "jannatul-jami",
    name: "Jannatul Jami",
    title: "Marketing Associate",
    category: "Marketing",
    school: "Baruch College",
  },
  {
    id: "abhiram-ramasahayam",
    name: "Abhiram Ramasahayam",
    title: "Marketing Associate",
    category: "Marketing",
    school: "Leadership Prep Secondary School",
  },
  {
    id: "tanvi-aegyarapu",
    name: "Tanvi Aegyarapu",
    title: "Marketing Associate",
    category: "Marketing",
    school: "Wakeland High School",
  },

  // Programs
  {
    id: "aditya-amarjeet-singh",
    name: "Aditya Amarjeet Singh",
    title: "Programs Associate",
    category: "Programs",
    school: "Allen High School",
  },
  {
    id: "saharsh-bhaskarla",
    name: "Saharsh Bhaskarla",
    title: "Programs Associate",
    category: "Programs",
    school: "Monroe Township High School",
  },
  {
    id: "sahil-mathur",
    name: "Sahil Mathur",
    title: "Programs Associate",
    category: "Programs",
    school: "Monroe Township High School",
  },
  {
    id: "yuvraj-dharmapuri",
    name: "Yuvraj Dharmapuri",
    title: "Programs Associate",
    category: "Programs",
    school: "Monroe Township High School",
  },

  // Curriculum
  {
    id: "sudheeksha-karray",
    name: "Sudheeksha Karray",
    title: "Curriculum Associate",
    category: "Curriculum",
    school: "Lake Washington High School",
  },
  {
    id: "sanat-tibrewal",
    name: "Sanat Tibrewal",
    title: "Curriculum Associate",
    category: "Curriculum",
    school: "Allen High School",
  },
  {
    id: "aneesh-thatta",
    name: "Aneesh Thatta",
    title: "Curriculum Associate",
    category: "Curriculum",
    school: "Lambert High School",
  },
  {
    id: "hardik-laddha",
    name: "Hardik Laddha",
    title: "Curriculum Associate",
    category: "Curriculum",
    school: "John P. Stevens High School",
  },
  {
    id: "hardik-vij",
    name: "Hardik Vij",
    title: "Curriculum Associate",
    category: "Curriculum",
    school: "St. Mary's School",
  },

  // Members
  { id: "abdoulkerim-abdelkerim", name: "Abdoulkerim Abdelkerim", category: "Members", school: "James Hubert Blake HS" },
  { id: "tanvi-aegyarapu", name: "Tanvi Aegyarapu", category: "Members", school: "Wakeland High School" },
  { id: "tanya-aegyarapu", name: "Tanya Aegyarapu", category: "Members", school: "Wakeland High School" },
  { id: "aarush-agarwal", name: "Aarush Agarwal", category: "Members", school: "Lebanon Trail High School" },
  { id: "kushal-anchuri", name: "Kushal Anchuri", category: "Members", school: "Lebanon Trail High School" },
  { id: "vinay-annamalai", name: "Vinay Annamalai", category: "Members", school: "Thomas Edison Charter" },
  { id: "munveer-annavaram", name: "Munveer Annavaram", category: "Members", school: "Middleton High School" },
  { id: "vidhi-arora", name: "Vidhi Arora", category: "Members", school: "Spring Dale Senior School" },
  { id: "abhinav-arul", name: "Abhinav Arul", category: "Members", school: "Montgomery HS" },
  { id: "manav-arun", name: "Manav Arun", category: "Members", school: "Birla Public School" },
  { id: "motunrayo-ayinde-tukur", name: "Motunrayo Ayinde-Tukur", category: "Members", school: "University of Lagos" },
  { id: "mubarak-azeez", name: "Mubarak Azeez", category: "Members", school: "Newark School Data Science HS" },
  { id: "nandika-baddam", name: "Nandika Baddam", category: "Members", school: "Wakeland High School" },
  { id: "hadi-baig", name: "Hadi Baig", category: "Members", school: "Aden Bowman Collegiate" },
  { id: "tanay-balabhadruni", name: "Tanay Balabhadruni", category: "Members", school: "Panther Creek High School" },
  { id: "gurunarayan-balaji", name: "Gurunarayan Balaji", category: "Members", school: "Middleton High School" },
  { id: "harshi-bandaru", name: "Harshi Bandaru", category: "Members", school: "Coppell High School" },
  { id: "raga-battu", name: "Raga Battu", category: "Members", school: "Frisco High School" },
  { id: "ameek-bhalla", name: "Ameek Bhalla", category: "Members", school: "West Forsyth HS" },
  { id: "dwij-bhargava", name: "Dwij Bhargava", category: "Members", school: "Liberty High School" },
  { id: "kritika-bhatia", name: "Kritika Bhatia", category: "Members", school: "Subodh Public School" },
  { id: "simar-bhatia", name: "Simar Bhatia", category: "Members", school: "Goodley Public School" },
  { id: "varun-bhatia", name: "Varun Bhatia", category: "Members", school: "Sri Guru Gobind Singh College" },
  { id: "kabir-bhushan", name: "Kabir Bhushan", category: "Members", school: "Marquette High School" },
  { id: "pavan-binwani", name: "Pavan Binwani", category: "Members", school: "Frisco Centennial HS" },
  { id: "manasvi-bobade", name: "Manasvi Bobade", category: "Members", school: "Alliance Academy for Innovation" },
  { id: "vaishnavi-bommireddipalli", name: "Vaishnavi Bommireddipalli", category: "Members", school: "Central Peel Secondary" },
  { id: "jahnae-brown", name: "Jahnae Brown", category: "Members", school: "Saunders Trade+Technical HS" },
  { id: "pranav-chadha", name: "Pranav Chadha", category: "Members", school: "University of Alberta" },
  { id: "abhiraj-chand", name: "Abhiraj Chand", category: "Members", school: "Rock Hill High School" },
  { id: "vivian-chao", name: "Vivian Chao", category: "Members", school: "Bridgewater Raritan HS" },
  { id: "manvik-chaudhary", name: "Manvik Chaudhary", category: "Members", school: "Nashua High School South" },
  { id: "matthew-chen", name: "Matthew Chen", category: "Members", school: "Plainview Old Bethpage JFK HS" },
  { id: "sophia-chen", name: "Sophia Chen", category: "Members", school: "Highland Park HS" },
  { id: "shreyas-choudhury", name: "Shreyas Choudhury", category: "Members", school: "Argyle High School" },
  { id: "janaiah-clark", name: "Janaiah Clark", category: "Members", school: "Miami Dade Virtual School" },
  { id: "janashia-clark", name: "Janashia Clark", category: "Members", school: "Miami-Dade Virtual School" },
  { id: "reggie-clark-jr", name: "Reggie Clark Jr.", category: "Members", school: "Miami-Dade Virtual School" },
  { id: "christian-clarke", name: "Christian Clarke", category: "Members", school: "Gonzaga College High School" },
  { id: "jordan-currin", name: "Jordan Currin", category: "Members", school: "Collin College" },
  { id: "swaraj-d", name: "Swaraj D", category: "Members", school: "Victorious Kidss Educares" },
  { id: "john-d-emic", name: "John D'Emic", category: "Members", school: "Long Beach High School" },
  { id: "muhammad-haris-daoud", name: "Muhammad Haris Daoud", category: "Members", school: "International School of Lahore" },
  { id: "akshit-dash", name: "Akshit Dash", category: "Members", school: "Global Indian International School" },
  { id: "ryan-david", name: "Ryan David", category: "Members", school: "Monroe Township HS" },
  { id: "charlotte-davidson", name: "Charlotte Davidson", category: "Members", school: "Miller Place HS" },
  { id: "romir-dedhia", name: "Romir Dedhia", category: "Members", school: "Bridgewater-Raritan HS" },
  { id: "dhairya-desai", name: "Dhairya Desai", category: "Members", school: "Cherokee High School" },
  { id: "omkar-desai", name: "Omkar Desai", category: "Members", school: "Marquette High School" },
  { id: "ruvaneka-desilva", name: "Ruvaneka DeSilva", category: "Members", school: "Rutgers Prep" },
  { id: "aayush-dhar", name: "Aayush Dhar", category: "Members", school: "Bridgewater Raritan HS" },
  { id: "khushi-dhotre", name: "Khushi Dhotre", category: "Members", school: "Livingston High School" },
  { id: "saketh-dintakurti", name: "Saketh Dintakurti", category: "Members", school: "Monroe Township HS" },
  { id: "sai-raaghav-diwakar", name: "Sai Raaghav Diwakar", category: "Members", school: "Allen High School" },
  { id: "abhinav-dubey", name: "Abhinav Dubey", category: "Members", school: "NIT Calicut" },
  { id: "sophia-duong", name: "Sophia Duong", category: "Members", school: "Frontier STEM Academy" },
  { id: "aradhay-dwivedi", name: "Aradhay Dwivedi", category: "Members", school: "Sunbeam School Laharatara" },
  { id: "garrett-ewy", name: "Garrett Ewy", category: "Members", school: "Blue Valley West HS" },
  { id: "andy-fenstermaker", name: "Andy Fenstermaker", category: "Members", school: "Seymour High School" },
  { id: "anam-fuzail", name: "Anam Fuzail", category: "Members", school: "South Brunswick High School" },
  { id: "shrija-gaba", name: "Shrija Gaba", category: "Members", school: "APA" },
  { id: "abhay-gadam", name: "Abhay Gadam", category: "Members", school: "McNeil High School" },
  { id: "om-garine", name: "Om Garine", category: "Members", school: "Marquette High School" },
  { id: "ana-gaur", name: "Ana Gaur", category: "Members", school: "GEMS New Millennium School" },
  { id: "vivan-gheewala", name: "Vivan Gheewala", category: "Members", school: "Monroe Township HS" },
  { id: "vedant-golan", name: "Vedant Golan", category: "Members", school: "Birla Divya Jyoti" },
  { id: "sara-govani", name: "Sara Govani", category: "Members", school: "Piscataway High School" },
  { id: "yena-gu", name: "Yena Gu", category: "Members", school: "Prepa Tec Eugenio Garza" },
  { id: "aarav-gupta", name: "Aarav Gupta", category: "Members", school: "Bridgewater Raritan HS" },
  { id: "aarush-gupta", name: "Aarush Gupta", category: "Members", school: "Prosper Richland HS" },
  { id: "masuda-hairulla", name: "Masuda Hairulla", category: "Members", school: "Morris Knolls" },
  { id: "kamrul-hassan", name: "Kamrul Hassan", category: "Members", school: "Fyruz Education Services" },
  { id: "john-heard", name: "John Heard", category: "Members", school: "Arkansas Connections Academy" },
  { id: "celine-huang", name: "Celine Huang", category: "Members", school: "Bukit Sion High School" },
  { id: "harden-hyde", name: "Harden Hyde", category: "Members", school: "UNC Chapel Hill" },
  { id: "dhruv-jain", name: "Dhruv Jain", category: "Members", school: "Emerson High School" },
  { id: "nitya-jain", name: "Nitya Jain", category: "Members", school: "Bridgewater-Raritan HS" },
  { id: "ronak-jain", name: "Ronak Jain", category: "Members", school: "Podar International School" },
  { id: "soham-jain", name: "Soham Jain", category: "Members", school: "McLean High School" },
  { id: "anish-janapareddi", name: "Anish Janapareddi", category: "Members", school: "Monroe Township High School" },
  { id: "navya-jha", name: "Navya Jha", category: "Members", school: "Prosper High School" },
  { id: "ved-jujjavarapu", name: "Ved Jujjavarapu", category: "Members", school: "Marquette Sr. High School" },
  { id: "neil-kaler", name: "Neil Kaler", category: "Members", school: "American School of Doha" },
  { id: "abhiram-kanteti", name: "Abhiram Kanteti", category: "Members", school: "Leadership Prep School" },
  { id: "krishnam-kapila", name: "Krishnam Kapila", category: "Members", school: "DAV" },
  { id: "sonu-karnati", name: "Sonu Karnati", category: "Members", school: "Leander High School" },
  { id: "mahathi-karthik", name: "Mahathi Karthik", category: "Members", school: "Bridgewater-Raritan HS" },
  { id: "siddharth-karthik-nithya", name: "Siddharth Karthik Nithya", category: "Members", school: "Seminole High School" },
  { id: "harshaa-karthikeyan", name: "Harshaa Karthikeyan", category: "Members", school: "Tom Glenn High School" },
  { id: "yuvan-katamaneni", name: "Yuvan Katamaneni", category: "Members", school: "Tomball Memorial HS" },
  { id: "menaj-katta", name: "Menaj Katta", category: "Members", school: "St. Mark's School" },
  { id: "mikaal-hussain-khan", name: "Mikaal Hussain Khan", category: "Members", school: "St Mary Catholic Secondary" },
  { id: "shayaan-khan", name: "Shayaan Khan", category: "Members", school: "Middleton High School" },
  { id: "nischal-konduru", name: "Nischal Konduru", category: "Members", school: "WW Plainsboro South HS" },
  { id: "keshav-kulshrestha", name: "Keshav Kulshrestha", category: "Members", school: "Redwood" },
  { id: "mohit-kumar", name: "Mohit Kumar", category: "Members", school: "University of Delhi" },
  { id: "saanvi-lamba", name: "Saanvi Lamba", category: "Members", school: "North Brunswick Township HS" },
  { id: "hellen-liu", name: "Hellen Liu", category: "Members", school: "Great Neck North HS" },
  { id: "wangshu-liu", name: "Wangshu Liu", category: "Members", school: "Marquette High School" },
  { id: "lucas-lu", name: "Lucas Lu", category: "Members", school: "Livingston High School" },
  { id: "thristan-lundy", name: "Thristan Lundy", category: "Members", school: "Abington Senior HS" },
  { id: "xi-luo", name: "Xi Luo", category: "Members", school: "Francis Lewis High School" },
  { id: "yashika-makam", name: "Yashika Makam", category: "Members", school: "Richland High School" },
  { id: "julia-malinowski", name: "Julia Malinowski", category: "Members", school: "LaGuardia High School of Arts" },
  { id: "sriteja-malladi", name: "Sriteja Malladi", category: "Members", school: "North Brunswick Township HS" },
  { id: "amrit-mann", name: "Amrit Mann", category: "Members", school: "Hightstown High School" },
  { id: "ubaid-maredia", name: "Ubaid Maredia", category: "Members", school: "Leander High School" },
  { id: "franchesca-marinez", name: "Franchesca Marinez", category: "Members", school: "Brooklyn Technical HS" },
  { id: "diego-martinez", name: "Diego Martinez", category: "Members", school: "American School Foundation Puebla" },
  { id: "sarvesh-masalkar", name: "Sarvesh Masalkar", category: "Members", school: "Troy High School" },
  { id: "ishani-mazumder", name: "Ishani Mazumder", category: "Members", school: "Rock Hill High School" },
  { id: "jash-mehta", name: "Jash Mehta", category: "Members", school: "Dubai American Academy" },
  { id: "nohamin-melesse", name: "Nohamin Melesse", category: "Members", school: "University of Warsaw" },
  { id: "ishaan-merchant", name: "Ishaan Merchant", category: "Members", school: "Robbinsville High School" },
  { id: "bavishya-meruva", name: "Bavishya Meruva", category: "Members", school: "Tom Glenn High School" },
  { id: "robston-milfort", name: "Robston Milfort", category: "Members", school: "Essex County Newark Tech" },
  { id: "kushagra-mishra", name: "Kushagra Mishra", category: "Members", school: "Heritage High School" },
  { id: "shivank-mishra", name: "Shivank Mishra", category: "Members", school: "Dubai International Academy" },
  { id: "aarush-modi", name: "Aarush Modi", category: "Members", school: "St. Mary CSS" },
  { id: "harshil-mongia", name: "Harshil Mongia", category: "Members", school: "Delhi University" },
  { id: "oliver-morton", name: "Oliver Morton", category: "Members", school: "Seton Hall Preparatory" },
  { id: "maximilian-mui", name: "Maximilian Mui", category: "Members", school: "White Plains Public HS" },
  { id: "keshab-musaddi", name: "Keshab Musaddi", category: "Members", school: "L.K. Singhania Education Centre" },
  { id: "mohit-nair", name: "Mohit Nair", category: "Members", school: "Lone Star High School" },
  { id: "suhayb-nasir", name: "Suhayb Nasir", category: "Members", school: "Sinclair Secondary School" },
  { id: "rygel-ng", name: "Rygel Ng", category: "Members", school: "Brooklyn Technical HS" },
  { id: "vy-nguyen", name: "Vy Nguyen", category: "Members", school: "Tran Dai Nghia HS" },
  { id: "shiloh-ninan", name: "Shiloh Ninan", category: "Members", school: "Birla Public School" },
  { id: "nicole-nyamgarav", name: "Nicole Nyamgarav", category: "Members", school: "Yorktown High School" },
  { id: "kevin-oneill", name: "Kevin Oneill", category: "Members", school: "Regis High School" },
  { id: "aybike-oran", name: "Aybike Oran", category: "Members", school: "Ataturk Anatolian HS" },
  { id: "leo-osorio", name: "Leo Osorio", category: "Members", school: "UNIS" },
  { id: "gyan-padoli", name: "Gyan Padoli", category: "Members", school: "Heritage High School" },
  { id: "sahan-pasnuri", name: "Sahan Pasnuri", category: "Members", school: "Hillsborough High School" },
  { id: "aayog-patel", name: "Aayog Patel", category: "Members", school: "Hebron High School" },
  { id: "drew-patel", name: "Drew Patel", category: "Members", school: "North Brunswick Township HS" },
  { id: "jay-patel", name: "Jay Patel", category: "Members", school: "Burlington Township HS" },
  { id: "krish-patel", name: "Krish Patel", category: "Members", school: "Wayne County High School" },
  { id: "moksh-patel", name: "Moksh Patel", category: "Members", school: "South Brunswick High School" },
  { id: "sophia-patel", name: "Sophia Patel", category: "Members", school: "Parkway Central" },
  { id: "tanay-patel", name: "Tanay Patel", category: "Members", school: "Monroe Township HS" },
  { id: "yash-patel", name: "Yash Patel", category: "Members", school: "Hillsborough High School" },
  { id: "monisha-pathi", name: "Monisha Pathi", category: "Members", school: "Lake Washington HS" },
  { id: "karthik-pavani", name: "Karthik Pavani", category: "Members", school: "Lebanon Trail High School" },
  { id: "karthik-pesaladinne", name: "Karthik Pesaladinne", category: "Members", school: "Independence High School" },
  { id: "shloka-reddy-pesaladinne", name: "Shloka Reddy Pesaladinne", category: "Members", school: "Independence High School" },
  { id: "karsten-pham", name: "Karsten Pham", category: "Members", school: "Cedar Ridge High School" },
  { id: "besiki-pkhakadze", name: "Besiki Pkhakadze", category: "Members", school: "Wilfrid Laurier University" },
  { id: "kharishma-prabhu", name: "Kharishma Prabhu", category: "Members", school: "Tom Glenn High School" },
  { id: "jahnavi-pullela", name: "Jahnavi Pullela", category: "Members", school: "Canton High School" },
  { id: "akhil-puvvada", name: "Akhil Puvvada", category: "Members", school: "Round Rock High School" },
  { id: "jivan-puvvada", name: "Jivan Puvvada", category: "Members", school: "North Brunswick Township High School" },
  { id: "rhea-rachala", name: "Rhea Rachala", category: "Members", school: "Middleton High School" },
  { id: "keshav-raghunath", name: "Keshav Raghunath", category: "Members", school: "Middleton High School" },
  { id: "akshita-raj", name: "Akshita Raj", category: "Members", school: "Sinclair Secondary School" },
  { id: "haresh-rajeshshanmugam", name: "Haresh RajeshShanmugam", category: "Members", school: "Mira Loma High School" },
  { id: "abhinav-ramakrishnan", name: "Abhinav Ramakrishnan", category: "Members", school: "Monroe Township High School" },
  { id: "pratham-rao", name: "Pratham Rao", category: "Members", school: "Monroe Township HS" },
  { id: "darsh-rathod", name: "Darsh Rathod", category: "Members", school: "The Windsor Boys School" },
  { id: "alexander-richardson", name: "Alexander Richardson", category: "Members", school: "Alexander Hamilton Senior HS" },
  { id: "sofi-roshe", name: "Sofi Roshe", category: "Members", school: "Westfield High School" },
  { id: "ayush-sahoo", name: "Ayush Sahoo", category: "Members", school: "Middleton High School" },
  { id: "dhriti-saireddy", name: "Dhriti Saireddy", category: "Members", school: "Novi High School" },
  { id: "arjun-sethi", name: "Arjun Sethi", category: "Members", school: "Prosper High School" },
  { id: "shritan-settipalli", name: "Shritan Settipalli", category: "Members", school: "Neuqua Valley High School" },
  { id: "kavya-setty", name: "Kavya Setty", category: "Members", school: "Frisco High School" },
  { id: "moksh-shah", name: "Moksh Shah", category: "Members", school: "Chatrabhuj Narsee School" },
  { id: "vaishvi-shah", name: "Vaishvi Shah", category: "Members", school: "Sinclair Secondary School" },
  { id: "aryan-sharma", name: "Aryan Sharma", category: "Members", school: "Green Hope High School" },
  { id: "ridhwan-sharma", name: "Ridhwan Sharma", category: "Members", school: "Bridgewater Raritan Regional HS" },
  { id: "smyan-shastri", name: "Smyan Shastri", category: "Members", school: "Felton Grove High School" },
  { id: "pahul-shelly", name: "Pahul Shelly", category: "Members", school: "Independence High School" },
  { id: "lavanya-shrivastava", name: "Lavanya Shrivastava", category: "Members", school: "Sun Valley International" },
  { id: "rishi-simhadri", name: "Rishi Simhadri", category: "Members", school: "Marquette High School" },
  { id: "armaan-singh", name: "Armaan Singh", category: "Members", school: "DAV Public School, BRS" },
  { id: "tanisha-singh", name: "Tanisha Singh", category: "Members", school: "Smt. SBVM" },
  { id: "bhupesh-sinha", name: "Bhupesh Sinha", category: "Members", school: "Pass Out" },
  { id: "viraj-sonawane", name: "Viraj Sonawane", category: "Members", school: "Middleton High School" },
  { id: "siri-sure", name: "Siri Sure", category: "Members", school: "Dwight Global" },
  { id: "niranjana-suresh-preethy", name: "Niranjana Suresh Preethy", category: "Members", school: "Sinclair Secondary School" },
  { id: "avyay-surubhotla", name: "Avyay Surubhotla", category: "Members", school: "Hillsborough High School" },
  { id: "daksh-suryadevara", name: "Daksh Suryadevara", category: "Members", school: "Kingswood Oxford School" },
  { id: "siddharth-talla", name: "Siddharth Talla", category: "Members", school: "Briar Woods High School" },
  { id: "krupesh-thakkar", name: "Krupesh Thakkar", category: "Members", school: "North Brunswick Township High School" },
  { id: "revaa-thoom", name: "Revaa Thoom", category: "Members", school: "Liberty Hill" },
  { id: "johnny-tokarz", name: "Johnny Tokarz", category: "Members", school: "Seymour High School" },
  { id: "jayden-tong", name: "Jayden Tong", category: "Members", school: "Cedar Ridge High School" },
  { id: "suraj-tripathy", name: "Suraj Tripathy", category: "Members", school: "Hillsborough High School" },
  { id: "neel-vadlamani", name: "Neel Vadlamani", category: "Members", school: "Walter Payton College Prep" },
  { id: "suryansh-varshney", name: "Suryansh Varshney", category: "Members", school: "TMS" },
  { id: "elijah-varughese", name: "Elijah Varughese", category: "Members", school: "Northeast High School" },
  { id: "nishan-vense", name: "Nishan Vense", category: "Members", school: "McNeil High School" },
  { id: "atulya-raj-verma", name: "Atulya Raj Verma", category: "Members", school: "Univ of Delhi Motilal Nehru" },
  { id: "aarush-vignesh", name: "Aarush Vignesh", category: "Members", school: "Seminole High School" },
  { id: "smruthi-vongole", name: "Smruthi Vongole", category: "Members", school: "Elkins High School" },
  { id: "saicharan-vutukuri", name: "Saicharan Vutukuri", category: "Members", school: "Middleton High School" },
  { id: "chloe-wang", name: "Chloe Wang", category: "Members", school: "Great Neck South High School" },
  { id: "clayton-wangsanata", name: "Clayton Wangsanata", category: "Members", school: "Lambert High School" },
  { id: "vaishnavi-yadav", name: "Vaishnavi Yadav", category: "Members", school: "Vidya Devi Jindal School" },
  { id: "pavit-yaduwanshi", name: "Pavit Yaduwanshi", category: "Members", school: "Liberty High School" },
  { id: "tarun-yamarthy", name: "Tarun Yamarthy", category: "Members", school: "North Brunswick Township High School" },
  { id: "junjie-yang", name: "Junjie Yang", category: "Members", school: "Cedar Ridge High School" },
  { id: "yong-yan-yong", name: "Yong Yan Yong", category: "Members", school: "Universiti Malaya" },
  { id: "ethan-zann", name: "Ethan Zann", category: "Members", school: "Grosse Pointe South" },
  { id: "neri-zhunio", name: "Neri Zhunio", category: "Members", school: "Franklin Towne Charter HS" },
];

// ---------------------------------------------------------------------------
// Roster merge
// ---------------------------------------------------------------------------

interface RosterEntry {
  name: string;
  tier: string;
  school: string;
  team: string;
}

/** Highest to lowest; every tab except C-Suite is sorted in this order. */
export const tierOrder = [
  "VP",
  "Director",
  "Manager",
  "Senior Associate",
  "Associate",
  "Senior Analyst",
  "Analyst",
  "Intern",
] as const;

const ROSTER_TEAM_TO_CATEGORY: Record<string, TeamCategory> = {
  "Web Dev": "Web Dev Team",
  Member: "Members",
};

const normalizeName = (name: string) => name.trim().toLowerCase();

const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function rosterCategory(team: string): TeamCategory {
  const category = ROSTER_TEAM_TO_CATEGORY[team] ?? team;
  if (!(teamCategories as readonly string[]).includes(category)) {
    throw new Error(`bfn-members.json: unknown team "${team}"`);
  }
  return category as TeamCategory;
}

function tierRank(member: TeamMember): number {
  const index = tierOrder.indexOf(member.rank as (typeof tierOrder)[number]);
  // No recognised tier (only people missing from the roster): after everyone else.
  return index === -1 ? tierOrder.length : index;
}

function buildTeamMembers(): TeamMember[] {
  const entries = roster as RosterEntry[];
  const rosterByName = new Map(entries.map((entry) => [normalizeName(entry.name), entry]));

  // Existing cards, grouped by name (a person can have a card in more than one tab).
  const cardsByName = new Map<string, TeamMember[]>();
  for (const card of cardMembers) {
    const key = normalizeName(card.name);
    cardsByName.set(key, [...(cardsByName.get(key) ?? []), card]);
  }

  const usedIds = new Set(cardMembers.map((card) => card.id));

  // Roster people, in roster order, each shown once under their roster tab.
  // An existing card keeps its photo, title, school, and bio; the roster adds
  // the tier (and the school, if the card had none).
  const fromRoster: TeamMember[] = entries.map((entry) => {
    const category = rosterCategory(entry.team);
    const cards = cardsByName.get(normalizeName(entry.name));
    const card = cards?.find((c) => c.category === category) ?? cards?.[0];

    if (card) {
      return {
        ...card,
        category,
        rank: entry.tier,
        school: card.school || entry.school || undefined,
      };
    }

    let id = slugify(entry.name);
    while (usedIds.has(id)) id = `${id}-${usedIds.size}`;
    usedIds.add(id);
    return {
      id,
      name: entry.name,
      category,
      rank: entry.tier,
      school: entry.school || undefined,
      rosterOnly: true,
    };
  });

  // Anyone with a card who isn't on the roster stays in their current tab,
  // after the roster people.
  const notOnRoster = cardMembers.filter((card) => !rosterByName.has(normalizeName(card.name)));

  return teamCategories.flatMap((category) => {
    if (category === "C-Suite") {
      return cardMembers.filter((card) => card.category === "C-Suite");
    }
    const inTab = [
      ...fromRoster.filter((member) => member.category === category),
      ...notOnRoster.filter((member) => member.category === category),
    ];
    // Array.prototype.sort is stable, so roster order is kept within a tier.
    return inTab.sort((a, b) => tierRank(a) - tierRank(b));
  });
}

export const teamMembers: TeamMember[] = buildTeamMembers();
