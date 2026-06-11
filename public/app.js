const applicationLink = "https://forms.gle/u12GhM5b8QyzqzgJ7";

const stats = [
  {
    value: "200+",
    label: "Student members",
    note: "Members learning, competing, and exploring finance"
  },
  {
    value: "3",
    label: "Active chapters",
    note: "School-based communities"
  },
  {
    value: "4",
    label: "Opportunity tracks",
    note: "Career, competitions, leadership, and learning"
  },
  {
    value: "Nonprofit",
    label: "Student-led",
    note: "Built by students, for students"
  }
];

const aboutStats = [
  {
    value: "200+",
    label: "Members",
    note: "Members learning, competing, and exploring finance"
  },
  {
    value: "3",
    label: "Active chapters",
    note: "School-based communities"
  },
  {
    value: "9",
    label: "Advisor seats",
    note: "Designed for mentorship and outreach"
  },
  {
    value: "Student-led",
    label: "Nonprofit",
    note: "Built by students, for students"
  }
];

const memberBenefits = [
  {
    label: "Opportunity access",
    title: "Curated Opportunities",
    body:
      "Internships, research roles, finance programs, accounting opportunities, consulting roles, startup positions, and student-friendly application notes.",
    tags: ["Internships", "Research", "Applications"]
  },
  {
    label: "Learning",
    title: "Finance Learning",
    body:
      "Lessons, templates, worksheets, calculators, resume prep, market research tools, and recruiting guidance.",
    tags: ["Lessons", "Templates", "Recruiting"]
  },
  {
    label: "Practice",
    title: "Competitions",
    body:
      "Stock pitches, case competitions, trading challenges, valuation contests, and team-based presentation practice.",
    tags: ["Stock pitches", "Valuation", "Cases"]
  },
  {
    label: "Contribution",
    title: "Leadership",
    body:
      "Chapter roles, student-run teams, research groups, operations, marketing, partnerships, and web development.",
    tags: ["Chapters", "Teams", "Operations"]
  }
];

const homeTracks = [
  {
    number: "01",
    title: "Career Opportunities",
    body:
      "Curated internships, finance roles, research positions, accounting opportunities, consulting programs, and startup roles."
  },
  {
    number: "02",
    title: "Competitions",
    body: "Stock pitches, case competitions, trading challenges, valuation contests, and presentation practice."
  },
  {
    number: "03",
    title: "Research & Leadership",
    body:
      "Student-run research, strategy work, chapter development, operations, marketing, partnerships, and internal leadership roles."
  },
  {
    number: "04",
    title: "Learning Resources",
    body:
      "Finance lessons, recruiting guides, templates, calculators, worksheets, speaker recordings, and reading lists."
  }
];

const operatingPillars = [
  {
    label: "Learning",
    title: "Finance fundamentals",
    body: "Beginner-friendly lessons, vocabulary, accounting basics, valuation practice, market literacy, and recruiting preparation.",
    metric: "Curriculum",
    tags: ["Lessons", "Guides", "Templates"]
  },
  {
    label: "Opportunities",
    title: "Curated access",
    body: "Student-friendly internships, programs, events, and application pathways organized with notes members can use.",
    metric: "Pipeline",
    tags: ["Roles", "Programs", "Deadlines"]
  },
  {
    label: "Research",
    title: "Applied work",
    body: "Research briefs, stock pitches, market notes, investment writeups, case preparation, and reviewed student output.",
    metric: "Portfolio",
    tags: ["Research", "Pitches", "Cases"]
  },
  {
    label: "Chapters",
    title: "Local execution",
    body: "School-based teams host sessions, recruit motivated students, run events, and connect local work to the wider network.",
    metric: "Chapters",
    tags: ["Events", "Leadership", "Schools"]
  }
];

const commandLibrary = [
  {
    label: "Opportunities",
    title: "Internship Radar",
    body: "Finance, accounting, consulting, research, and startup roles grouped with student-fit notes.",
    meta: "42 signals",
    tags: ["Deadlines", "Eligibility", "Notes"]
  },
  {
    label: "Resources",
    title: "Valuation Starter Pack",
    body: "Guides, worksheets, simple models, and vocabulary organized for first-pass practice.",
    meta: "18 files",
    tags: ["DCF", "Comps", "Accounting"]
  },
  {
    label: "Competitions",
    title: "Stock Pitch Lab",
    body: "Prompts, thesis structure, team workflow, judging criteria, and final submission prep.",
    meta: "Active",
    tags: ["Cases", "Pitches", "Feedback"]
  },
  {
    label: "Chapters",
    title: "Local Playbooks",
    body: "Launch steps, event formats, speaker planning, and member recruiting materials.",
    meta: "3 schools",
    tags: ["Events", "Leads", "Recaps"]
  }
];

const bentoModules = [
  {
    size: "wide",
    label: "Member command center",
    title: "One index for the work.",
    body:
      "Members should not hunt through scattered links. BFN groups opportunities, curriculum, competitions, resources, and chapter workflows in one searchable system.",
    metric: "Workspace"
  },
  {
    size: "tall",
    label: "Quality gate",
    title: "Reviewed before access.",
    body:
      "BFN keeps member-only links, deadlines, forms, recordings, and internal details behind an approval path.",
    metric: "Review"
  },
  {
    size: "",
    label: "Research studio",
    title: "Briefs, pitches, notes.",
    body: "Student work moves from rough idea to reviewed public-ready output.",
    metric: "Portfolio"
  },
  {
    size: "",
    label: "Chapter network",
    title: "Local activity, shared system.",
    body: "School teams run local sessions while staying tied to the national BFN workflow.",
    metric: "3 chapters"
  },
  {
    size: "wide",
    label: "Learning engine",
    title: "Finance fundamentals connect directly to applied work.",
    body:
      "Lessons and templates are designed to feed into applications, competitions, research, interviews, and chapter programming.",
    metric: "Education"
  }
];

const stackPipeline = [
  ["Intake", "Collect signals", "Roles, competitions, chapter notes, resources, and speaker leads enter the queue."],
  ["Review", "Filter for fit", "BFN checks student relevance, deadline urgency, quality, and member value."],
  ["Package", "Turn links into workflows", "Raw signals become guides, templates, role notes, briefs, or member records."],
  ["Ship", "Release to members", "Approved members receive the organized next step inside the private workspace."]
];

const operatingCadence = [
  ["Signal intake", "Collect opportunities, competition prompts, speaker leads, member needs, and chapter updates."],
  ["Review and prioritize", "Screen for student fit, deadline urgency, quality, and alignment with BFN programming."],
  ["Package for members", "Turn raw information into guides, templates, briefs, role notes, or member-ready records."],
  ["Run the workflow", "Members apply, compete, publish, host, or contribute through teams and chapter structures."],
  ["Publish outcomes", "Approved work, recaps, resources, and updates become public portfolio or member-library material."]
];

const programMatrix = [
  ["Education", "Finance vocabulary, accounting, valuation, markets, recruiting", "Lessons, checklists, templates"],
  ["Opportunities", "Internships, competitions, programs, leadership roles", "Curated member pipeline"],
  ["Research", "Company notes, stock pitches, market briefs, case prep", "Reviewed student work"],
  ["Chapters", "Local sessions, speakers, competitions, student recruiting", "School-based leadership"],
  ["Platform", "Resource library, directories, member operations", "Organized member experience"]
];

const trustSignals = [
  ["200+ student members", "Members use BFN for finance learning, opportunity discovery, competitions, chapter work, and practical preparation."],
  ["3 active chapters", "Founding chapters include Marquette High School, Middleton High School, and Bridgewater-Raritan High School."],
  ["Student operators", "Students help run research, chapters, web development, resources, operations, and partnerships."],
  ["Reviewed access", "Applications protect member-only links, forms, deadlines, recordings, templates, and internal workflows."]
];

const opportunityTracks = [
  {
    title: "Internships",
    label: "Track 01",
    body: "Finance, business, research, accounting, consulting, investment, and startup roles curated for students.",
    tags: ["Finance", "Consulting", "Startups"]
  },
  {
    title: "Competitions",
    label: "Track 02",
    body: "Case studies, stock pitches, trading challenges, valuation contests, and presentation formats.",
    tags: ["Stock pitches", "Valuation", "Case studies"]
  },
  {
    title: "Programs",
    label: "Track 03",
    body: "Research, strategy, leadership, chapter development, and finance education tracks run by students.",
    tags: ["Research", "Leadership", "Education"]
  },
  {
    title: "Resources",
    label: "Track 04",
    body: "Guides, templates, lessons, speaker recordings, reading lists, and practical finance tools.",
    tags: ["Templates", "Lessons", "Tools"]
  }
];

const joiningSteps = [
  ["Apply", "Submit through an open role or chapter pathway and explain where you want to contribute."],
  ["Get reviewed", "BFN reviews interest, reliability, role fit, and current team needs."],
  ["Receive access", "Approved students receive onboarding instructions for member resources and team workflows."],
  ["Start contributing", "Members use BFN resources to find opportunities, prepare for competitions, and contribute to team work."]
];

const chapters = [
  {
    school: "Marquette High School",
    location: "Chesterfield, MO",
    state: "MO",
    body: "A founding chapter helping establish BFN's local chapter model in Chesterfield."
  },
  {
    school: "Middleton High School",
    location: "Tampa, FL",
    state: "FL",
    body: "A founding chapter bringing practical finance exposure to students in Tampa."
  },
  {
    school: "Bridgewater-Raritan High School",
    location: "Bridgewater, NJ",
    state: "NJ",
    body: "A founding chapter expanding BFN programming into the Bridgewater student community."
  }
];

const chapterActivities = [
  {
    title: "Run local finance education sessions",
    body: "Host practical sessions that introduce students to markets, investing, business, and financial decision-making."
  },
  {
    title: "Host or promote competitions",
    body: "Bring BFN competitions and challenge-based learning opportunities into the school community."
  },
  {
    title: "Recruit motivated students",
    body: "Identify students interested in finance, economics, business, investing, and career development."
  },
  {
    title: "Organize speaker and career events",
    body: "Help coordinate events that expose students to professionals, college pathways, and finance careers."
  },
  {
    title: "Build chapter leadership teams",
    body: "Create a reliable student team with clear roles for programming, outreach, events, and operations."
  },
  {
    title: "Connect members to BFN resources",
    body: "Guide approved members toward BFN resources, opportunities, forms, and network activity."
  }
];

const teamMembers = [
  {
    name: "Andrew Fu",
    initials: "AF",
    title: "Co-Founder",
    department: "Leadership",
    group: "Leadership",
    tags: ["Leadership", "Strategy", "Community"],
    bio: "Helping lead BFN's mission, growth, and student finance community."
  },
  {
    name: "Sai Aathish Karthik",
    initials: "SK",
    title: "VP, Web Development",
    level: "Senior Associate",
    department: "Web Development",
    group: "Web Development",
    tags: ["Web Platform", "Engineering", "Product"],
    bio: "Supporting the development of BFN's digital platform and member-facing web experience."
  },
  {
    name: "Sashitej Palla",
    initials: "SP",
    title: "VP, Web Development",
    level: "Senior Associate",
    department: "Web Development",
    group: "Web Development",
    tags: ["Web Platform", "Engineering", "Product"],
    bio: "Helping guide BFN's web development work across platform structure, features, and implementation."
  },
  {
    name: "Ackshat Tiwari",
    initials: "AT",
    title: "Core Developer",
    level: "Senior Associate",
    department: "Web Development",
    group: "Web Development",
    tags: ["Engineering", "Platform", "Implementation"],
    bio: "Building core website features and supporting the technical foundation of BFN's platform."
  },
  {
    name: "Kev Wong",
    initials: "KW",
    title: "Frontend & UI",
    level: "Senior Associate",
    department: "Web Development",
    group: "Web Development",
    tags: ["Frontend", "UI Systems", "Experience"],
    bio: "Contributing to BFN's frontend interface, visual polish, and user experience."
  },
  {
    name: "Niranjana Suresh Preethy",
    initials: "NSP",
    title: "Frontend & UI",
    level: "Senior Associate",
    department: "Web Development",
    group: "Web Development",
    tags: ["Frontend", "UI Systems", "Experience"],
    bio: "Supporting frontend development and interface quality across the BFN website."
  }
];

const openRoles = [
  {
    title: "Financial Analyst Intern",
    team: "Finance",
    status: "Applications open",
    commitment: "Part-time, student-led analyst role",
    description:
      "Support BFN's finance work through company research, market updates, investment writeups, and internal analyst projects.",
    responsibilities: [
      "Research companies and markets",
      "Draft investment writeups and market updates",
      "Support internal analyst projects",
      "Contribute to finance education resources"
    ],
    meta: [
      ["Team", "Finance"],
      ["Commitment", "Part-time"],
      ["Level", "Student contributor"],
      ["Access", "Onboarding after approval"]
    ],
    link: applicationLink
  }
];

const resources = [
  {
    label: "Guide library",
    title: "BFN Guides",
    body: "Finance primers, recruiting guides, market explainers, resume templates, and interview preparation resources.",
    examples: ["Finance vocabulary primers", "Recruiting and interview prep", "Market and investing explainers"]
  },
  {
    label: "Templates and calculators",
    title: "Tools",
    body: "Student-friendly calculators, worksheets, valuation templates, and research utilities.",
    examples: ["DCF worksheet templates", "Market research checklists", "Application tracking tools"]
  },
  {
    label: "Video lessons",
    title: "Video Resources",
    body: "Approved video lessons covering accounting, valuation, markets, investing, and career preparation.",
    examples: ["Accounting fundamentals", "Valuation walkthroughs", "Career preparation lessons"]
  },
  {
    label: "Learning tracks",
    title: "Programs",
    body: "Structured learning tracks across finance fundamentals, research, strategy, leadership, and competitions.",
    examples: ["Finance fundamentals track", "Research and strategy track", "Competition preparation track"]
  }
];

const featuredResources = [
  {
    title: "Finance Vocabulary Starter Pack",
    type: "Guide",
    level: "Beginner",
    body: "A practical glossary for students learning core finance and market terms."
  },
  {
    title: "Resume Review Checklist",
    type: "Template",
    level: "Recruiting",
    body: "A structured checklist for improving finance resumes before applications."
  },
  {
    title: "Valuation Basics Track",
    type: "Program",
    level: "Intermediate",
    body: "A step-by-step introduction to accounting, valuation, and company analysis."
  },
  {
    title: "Competition Prep Toolkit",
    type: "Toolkit",
    level: "Applied",
    body: "Frameworks for case competitions, stock pitches, and presentation prep."
  },
  {
    title: "Market Research Worksheet",
    type: "Tool",
    level: "Research",
    body: "A repeatable template for analyzing companies, industries, and catalysts."
  },
  {
    title: "Interview Question Bank",
    type: "Guide",
    level: "Recruiting",
    body: "Common behavioral and technical prompts for finance interview practice."
  }
];

const resourceUseCases = [
  ["Learn finance vocabulary", "Build fluency in accounting, valuation, markets, investing, and career terminology."],
  ["Prepare for competitions", "Use frameworks, templates, and research tools to structure stronger submissions."],
  ["Track opportunities", "Organize internships, competitions, programs, and application deadlines."],
  ["Build stronger applications", "Improve resumes, outreach, interview preparation, and recruiting materials."],
  ["Practice technical concepts", "Work through accounting, valuation, investing, and market analysis fundamentals."],
  ["Use finance templates", "Start faster with structured worksheets, checklists, models, and presentation aids."]
];

const portfolioTracks = [
  ["Research", "Stock pitches, market notes, industry analysis, and student-written finance research.", "Opening soon"],
  ["Finance Projects", "Models, templates, calculators, tools, dashboards, and student-built finance resources.", "In development"],
  ["Web Development", "Internal tools, public website improvements, and technical projects supporting BFN operations.", "Active"],
  ["Chapter Work", "Local events, educational sessions, speaker recaps, and leadership initiatives from BFN chapters.", "Growing"],
  ["Competitions", "Case competitions, investment challenges, pitch events, and member preparation work.", "Planned"],
  ["Internal Initiatives", "Operations, recruiting, content systems, and student-led organization-building projects.", "Ongoing"]
];

const testimonials = [
  {
    quote:
      "Before BFN, I knew basic finance terms but did not know what to do next. The stock pitch workflow gave me a concrete project to build.",
    label: "Research and competitions member",
    initials: "RC"
  },
  {
    quote:
      "The opportunity notes save time because I can see what a role is, who it fits, and what deadline matters before I decide to apply.",
    label: "Opportunities track member",
    initials: "OT"
  },
  {
    quote:
      "Our chapter meetings feel more useful when the materials are already organized. We can focus on the session instead of rebuilding everything.",
    label: "Chapter growth member",
    initials: "CG"
  }
];

const faqs = [
  ["What is BFN?", "Bridge Finance Network is a student-led nonprofit helping students learn finance, find curated opportunities, join competitions, and build leadership experience."],
  ["Who can join?", "BFN is built for motivated students interested in finance, business, research, investing, accounting, consulting, web development, resources, operations, marketing, partnerships, or chapter leadership."],
  ["Is BFN student-led?", "Yes. Students lead BFN teams, chapter activity, resource development, finance projects, and member programming."],
  ["What do members get access to?", "Members can access curated opportunity lists, finance lessons, case competition preparation, stock pitch practice, speaker materials, templates, tools, and internal programs after approval."],
  ["How do I start a chapter?", "Apply to join BFN first. Approved members receive onboarding instructions and can coordinate chapter launch materials with BFN leadership."],
  ["How does member access work?", "Applicants apply publicly. Approved applicants receive follow-up instructions by email based on current team needs and program availability."],
  ["Are resources public or member-only?", "The public site previews the library. Full guides, tools, videos, speaker recordings, templates, and internal links are member-only."],
  ["How do open roles work?", "Open roles are posted publicly. Each role explains the team, expected work, and application link. BFN reviews applications and follows up by email."],
  ["Who do I contact with questions?", "Email bridgefinancenetwork@gmail.com for general questions, partnerships, chapter interest, advisor outreach, or member support."]
];

const posts = [
  ["Member access update", "June 2026", "Update", "BFN is organizing member-only opportunities, curriculum, case competition preparation, resource access, and speaker materials into a cleaner member workflow."],
  ["Financial Analyst Interns", "June 2026", "Open role", "BFN is recruiting finance-focused students to support company research, market updates, investment writeups, and internal analyst projects."],
  ["Chapter growth", "May 2026", "Spotlight", "Founding chapters are helping bring finance education sessions, competitions, and member recruiting to local student communities."]
];

const events = [
  ["BFN Info Session", "Scheduled by announcement", "Public session for prospective members covering eligibility, teams, tiers, and the application process.", "Public"],
  ["Stock Pitch Practice", "Member programming", "Member session for practicing thesis structure, market research, valuation basics, and presentation feedback.", "Approved access"],
  ["Case Competition Launch", "Member programming", "Member competition format with submission guidance, judging criteria, and team deadlines.", "Approved access"]
];

const portalLinks = [
  ["/portal/dashboard", "Dashboard"],
  ["/portal/opportunities", "Opportunities"],
  ["/portal/curriculum", "Curriculum"],
  ["/portal/competitions", "Competitions"],
  ["/portal/resources", "Resources"],
  ["/portal/speakers", "Speakers"],
  ["/portal/profile", "Profile"]
];

const meta = {
  "/": ["Bridge Finance Network", "A student-led nonprofit finance network for education, curated opportunities, competitions, chapters, and reviewed member access."],
  "/about": ["About | Bridge Finance Network", "Mission, operating model, leadership, advisor structure, and access standards for Bridge Finance Network."],
  "/team": ["Team & Members | Bridge Finance Network", "Meet the student leaders and web development team building BFN's programs, platform, chapters, and member experience."],
  "/opportunities": ["Opportunities | Bridge Finance Network", "Review BFN's curated opportunity categories and member access process."],
  "/chapters": ["Chapters | Bridge Finance Network", "Active founding chapters and the reviewed path to start Bridge Finance Network at a school."],
  "/partners": ["Partners | Bridge Finance Network", "Partnership pathways for firms, schools, advisors, universities, nonprofits, and student organizations."],
  "/open-roles": ["Open Roles | Bridge Finance Network", "Apply to join Bridge Finance Network through public student contributor roles."],
  "/blog": ["Blog & News | Bridge Finance Network", "Official BFN updates, member programming notes, chapter announcements, and open-role notices."],
  "/events": ["Events | Bridge Finance Network", "Upcoming BFN information sessions, competitions, member events, and chapter activity."],
  "/resources": ["Resource Library | Bridge Finance Network", "Preview BFN's member resource library for finance learning, recruiting preparation, templates, and competitions."],
  "/portfolio": ["BFN Portfolio | Bridge Finance Network", "Reviewed student research, finance projects, chapter work, and public-ready BFN initiatives."],
  "/faq": ["FAQ | Bridge Finance Network", "Common questions about joining BFN, tiers, chapters, and membership."],
  "/contact": ["Contact | Bridge Finance Network", "Contact BFN for general, partnership, press, and chapter inquiries."],
  "/login": ["Member Access | Bridge Finance Network", "How approved students receive BFN member access after review."],
  "/register": ["Member Access | Bridge Finance Network", "How approved students receive BFN member access after review."],
  "/reset": ["Member Access | Bridge Finance Network", "How approved students receive BFN member access after review."],
  "/portal/dashboard": ["Member Workspace | Bridge Finance Network", "Review BFN's member workspace model and approved access process."],
  "/portal/opportunities": ["Member Opportunities | Bridge Finance Network", "Curated opportunity categories for approved BFN members."],
  "/portal/curriculum": ["Curriculum Hub | Bridge Finance Network", "Finance lessons organized by topic and difficulty."],
  "/portal/competitions": ["Competitions | Bridge Finance Network", "Case studies, competitions, and preparation workflows."],
  "/portal/resources": ["Member Resources | Bridge Finance Network", "BFN-created guides, tools, templates, videos, and programs."],
  "/portal/speakers": ["Guest Speakers | Bridge Finance Network", "Guest speaker materials organized by topic, industry, or speaker."],
  "/portal/profile": ["Member Profile | Bridge Finance Network", "Member contribution and profile information model."],
  "/manage-tiers": ["Restricted | Bridge Finance Network", "Restricted member operations surface."],
  "/privacy": ["Privacy | Bridge Finance Network", "How Bridge Finance Network handles public inquiries, applications, and member communications."],
  "/terms": ["Terms | Bridge Finance Network", "Terms for using Bridge Finance Network public pages and member resources."]
};

const $app = document.querySelector("#app");
const $toggle = document.querySelector("[data-menu-toggle]");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function button(href, label, variant = "primary", attrs = "") {
  return `<a class="button ${variant}" href="${href}" ${attrs}>${escapeHtml(label)}</a>`;
}

function badge(label, variant = "") {
  return `<span class="badge ${variant}">${escapeHtml(label)}</span>`;
}

function tagList(tags = []) {
  return `<div class="tag-row">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>`;
}

function bulletList(items = []) {
  return `<ul class="feature-list">${items.map((item) => `<li><span class="check" aria-hidden="true"></span><span>${escapeHtml(item)}</span></li>`).join("")}</ul>`;
}

function sectionHeader(eyebrow, title, body = "") {
  return `
    <div class="section-inner section-header">
      <div>
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h2>${escapeHtml(title)}</h2>
      </div>
      ${body ? `<p>${escapeHtml(body)}</p>` : ""}
    </div>
  `;
}

function pageHero(eyebrow, title, lead, actions = "", panel = "") {
  return `
    <section class="page-hero">
      <div class="page-hero-inner">
        <div>
          <p class="eyebrow">${escapeHtml(eyebrow)}</p>
          <h1>${escapeHtml(title)}</h1>
          <p>${escapeHtml(lead)}</p>
          ${actions ? `<div class="actions">${actions}</div>` : ""}
        </div>
        ${panel}
      </div>
    </section>
  `;
}

function compactCard(label, title, body, extra = "") {
  return `
    <article class="compact-card">
      ${label ? `<span class="card-label">${escapeHtml(label)}</span>` : ""}
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(body)}</p>
      ${extra}
    </article>
  `;
}

function iconCard({ label, title, body, tags = [] }, index) {
  return `
    <article class="feature-card">
      <div class="card-topline">
        <span class="icon-mark" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
        <span class="card-label">${escapeHtml(label)}</span>
      </div>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(body)}</p>
      ${tagList(tags)}
    </article>
  `;
}

function statsBand(items = stats, className = "") {
  return `
    <section class="stats-band ${className}" aria-label="Bridge Finance Network proof points">
      <div class="section-inner stat-grid">
        ${items.map((item) => `
          <div class="stat-card">
            <strong>${escapeHtml(item.value)}</strong>
            <span>${escapeHtml(item.label)}</span>
            <p>${escapeHtml(item.note)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function processSteps(steps, className = "") {
  return `
    <div class="process-grid ${className}">
      ${steps.map(([title, body], index) => `
        <article class="process-step">
          <span>${index + 1}</span>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(body)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function accessPanel(title, body, badgeText = "Approved members only") {
  return `
    <section class="section compact-section">
      <div class="section-inner access-panel">
        <div class="access-lock" aria-hidden="true"></div>
        <div>
          <span class="card-label label-blue">${escapeHtml(badgeText)}</span>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(body)}</p>
        </div>
      </div>
    </section>
  `;
}

function homeHeroPanel() {
  return `
    <aside class="hero-dashboard hero-pathway" aria-label="BFN member pathway">
      <div class="dashboard-header">
        <span>Member pathway</span>
        <strong>Public -> private</strong>
      </div>
      <div class="pathway-steps">
        <article>
          <span>01</span>
          <div>
            <h3>Apply through an open role</h3>
            <p>Students start with a public application and choose how they want to contribute.</p>
          </div>
        </article>
        <article>
          <span>02</span>
          <div>
            <h3>Get reviewed by BFN</h3>
            <p>The team checks fit, reliability, current team needs, and expected contribution area.</p>
          </div>
        </article>
        <article>
          <span>03</span>
          <div>
            <h3>Receive member access</h3>
            <p>Approved members receive private links, deadlines, resources, forms, and team workflows.</p>
          </div>
        </article>
      </div>
      <div class="portal-preview">
        <div class="portal-preview-header">
          <span>Members unlock</span>
          <strong>Member access</strong>
        </div>
        <ul class="unlock-list">
          <li>Curated opportunities and application notes</li>
          <li>Finance templates, guides, and worksheets</li>
          <li>Competition prep and research workflows</li>
          <li>Chapter launch and leadership materials</li>
        </ul>
      </div>
    </aside>
  `;
}

function applePortalShowcase() {
  return `
    <div class="apple-portal-showcase" aria-label="BFN member value preview">
      <div class="portal-window-bar">
        <span></span><span></span><span></span>
        <strong>BFN Member Value</strong>
      </div>
      <div class="portal-window-body">
        <aside>
          <span>Member preview</span>
          <strong>Clear next steps.</strong>
          <p>BFN gives students organized ways to learn finance, find opportunities, practice applied work, and lead locally.</p>
        </aside>
        <div class="portal-window-grid">
          {portalCards}
        </div>
      </div>
    </div>
  `.replace(
    "{portalCards}",
    [
      ["Opportunities", "Curated links", "Internships, programs, deadlines, and application notes."],
      ["Resources", "Member library", "Templates, guides, worksheets, videos, and recruiting prep."],
      ["Competitions", "Applied practice", "Case prompts, stock pitches, valuation prep, and submissions."],
      ["Chapters", "Local leadership", "Launch materials, event playbooks, and recruiting support."]
    ].map(([title, label, body]) => `
      <article>
        <span>${escapeHtml(label)}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(body)}</p>
      </article>
    `).join("")
  );
}

function operatingBoard() {
  return `
    <aside class="operating-board" aria-label="Bridge Finance Network operating model">
      <div class="board-header">
        <span>Operating model</span>
        <strong>Education -> Access -> Applied work</strong>
      </div>
      <div class="board-lanes">
        ${["Public site", "Application review", "Member workspace", "Chapter execution"].map((item, index) => `
          <div>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${escapeHtml(item)}</strong>
          </div>
        `).join("")}
      </div>
      <div class="board-metrics">
        ${[
          ["Public", "Mission, roles, chapters"],
          ["Private", "Links, forms, resources"],
          ["Review", "Quality and access control"]
        ].map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
      </div>
    </aside>
  `;
}

function programMatrixTable() {
  return `
    <div class="program-matrix" role="table" aria-label="BFN program architecture">
      <div class="matrix-row matrix-head" role="row">
        <span role="columnheader">Program layer</span>
        <span role="columnheader">Member workflow</span>
        <span role="columnheader">Output</span>
      </div>
      ${programMatrix.map(([layer, workflow, output]) => `
        <div class="matrix-row" role="row">
          <strong role="cell">${escapeHtml(layer)}</strong>
          <span role="cell">${escapeHtml(workflow)}</span>
          <em role="cell">${escapeHtml(output)}</em>
        </div>
      `).join("")}
    </div>
  `;
}

function stackedPanel(title, rows) {
  return `
    <aside class="visual-panel">
      <span class="card-label label-gold">${escapeHtml(title)}</span>
      <div class="panel-stack">
        ${rows.map(([label, value]) => `
          <div>
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
          </div>
        `).join("")}
      </div>
    </aside>
  `;
}

function commandLibrarySection() {
  return `
    <section class="section library-console-section">
      <div class="section-inner console-shell">
        <div class="console-copy">
          <p class="eyebrow">Member index</p>
          <h2>A clearer system for finance preparation.</h2>
          <p class="lead">BFN organizes opportunities, resources, competitions, and chapter work so students can move from interest to practical contribution.</p>
          <div class="console-chip-row">
            ${["Opportunities", "Resources", "Competitions", "Chapters", "Research", "Leadership"].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>
        <aside class="command-console" aria-label="BFN member index preview">
          <div class="command-frame-bar">
            <span></span><span></span><span></span>
            <strong>BFN Index</strong>
          </div>
          <div class="command-search">
            <span>Search</span>
            <strong>opportunities, templates, chapters, competitions...</strong>
            <em>K</em>
          </div>
          <div class="command-list">
            ${commandLibrary.map((item) => `
              <article class="command-card">
                <div>
                  <span>${escapeHtml(item.label)}</span>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.body)}</p>
                  ${tagList(item.tags)}
                </div>
                <strong>${escapeHtml(item.meta)}</strong>
              </article>
            `).join("")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function bentoWorkflowSection() {
  return `
    <section class="section bento-system-section">
      <div class="section-inner bento-heading">
        <p class="eyebrow">Workspace modules</p>
        <h2>Member workflows with clear next steps.</h2>
        <p>Each module represents a practical path students can use after approval: learn, apply, compete, publish, and lead locally.</p>
      </div>
      <div class="section-inner modern-bento-grid">
        ${bentoModules.map((module) => `
          <article class="modern-bento-card ${escapeHtml(module.size)}">
            <span class="card-label">${escapeHtml(module.label)}</span>
            <h3>${escapeHtml(module.title)}</h3>
            <p>${escapeHtml(module.body)}</p>
            <strong>${escapeHtml(module.metric)}</strong>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function operatingStackSection() {
  return `
    <section class="section stack-section">
      <div class="section-inner stack-shell">
        <div>
          <p class="eyebrow">Operating stack</p>
          <h2>Signals go in. Member-ready workflows come out.</h2>
          <p class="lead">BFN turns scattered opportunities, resources, and student ideas into reviewed materials members can act on.</p>
          <div class="inline-actions">${button("/resources", "Preview Resources", "secondary")}${button("/opportunities", "Preview Opportunities", "ghost")}</div>
        </div>
        <aside class="stack-console" aria-label="BFN operating stack">
          <div class="stack-code-bar">
            <span>workflow.js</span>
            <strong>member_release</strong>
          </div>
          <div class="stack-code">
            <code>const signal = await intake.review();</code>
            <code>const record = packageForMembers(signal);</code>
            <code>workspace.publish(record, { access: "approved" });</code>
          </div>
          <div class="stack-pipeline">
            ${stackPipeline.map(([label, title, body], index) => `
              <article>
                <span>${String(index + 1).padStart(2, "0")} / ${escapeHtml(label)}</span>
                <h3>${escapeHtml(title)}</h3>
                <p>${escapeHtml(body)}</p>
              </article>
            `).join("")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    <section class="hero home-hero apple-home-hero">
      <div class="hero-inner apple-hero-inner">
        <div class="hero-copy apple-hero-copy">
          <p class="eyebrow">Student-led nonprofit finance network</p>
          <h1>Bridge Finance Network</h1>
          <p>BFN helps motivated students enter finance through structured learning, curated opportunities, research projects, competitions, and chapter leadership.</p>
          <div class="actions centered-actions">
            ${button("/open-roles", "Apply to Join", "primary")}
            ${button("/opportunities", "Explore Programs", "secondary")}
          </div>
          <p class="hero-note">Public pages explain BFN. Approved members receive access to opportunities, templates, deadlines, recordings, forms, and team workflows.</p>
        </div>
      </div>
    </section>

    ${statsBand(stats, "overlap-stats")}

    <section class="section apple-showcase-section">
      <div class="section-inner apple-split">
        <div>
          <p class="eyebrow">What members get</p>
          <h2>Organized finance preparation students can actually use.</h2>
          <p class="lead">Members receive curated opportunities, finance templates, competition prep, research workflows, and chapter materials in one organized workspace.</p>
        </div>
        <div class="apple-benefit-list">
          ${memberBenefits.map((benefit) => `
            <article>
              <span>${escapeHtml(benefit.label)}</span>
              <h3>${escapeHtml(benefit.title)}</h3>
              <p>${escapeHtml(benefit.body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section apple-tile-section">
      <div class="section-inner apple-section-title">
        <p class="eyebrow">Four lanes</p>
        <h2>BFN is organized into four clear member paths.</h2>
        <p>Students can find opportunities, use resources, prepare for competitions, and build local chapter leadership without searching through scattered links.</p>
      </div>
      <div class="section-inner apple-tile-grid">
        ${operatingPillars.map((pillar, index) => `
          <article class="pillar-card apple-program-tile ${index === 0 ? "dark-tile" : ""}">
            <span class="card-label">${escapeHtml(pillar.label)}</span>
            <h3>${escapeHtml(pillar.title)}</h3>
            <p>${escapeHtml(pillar.body)}</p>
            <a href="${index === 3 ? "/chapters" : index === 1 ? "/opportunities" : "/resources"}">Learn more</a>
            ${tagList(pillar.tags)}
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section apple-pathway-section">
      <div class="section-inner apple-split">
        <div>
          <p class="eyebrow">How access works</p>
          <h2>Apply publicly. Receive member access after review.</h2>
          <p class="lead">Students apply through a public pathway. BFN reviews fit and current needs, then approved members receive access to opportunities, resources, competitions, chapter materials, and internal workflows.</p>
          <div class="inline-actions">${button("/open-roles", "Apply to Join", "dark")}${button("/login", "Member Login", "secondary")}</div>
        </div>
        <div class="apple-benefit-list">
          ${[
            ["Apply", "Submit an application through an open role or chapter pathway."],
            ["Review", "BFN reviews student fit, current needs, and the path where each applicant can contribute."],
            ["Access", "Approved members receive member resources, private links, deadlines, forms, and workflow instructions."]
          ].map(([title, body], index) => `
            <article>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <h3>${escapeHtml(title)}</h3>
              <p>${escapeHtml(body)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section chapter-preview-section">
      <div class="section-inner split network-section">
        <div>
          <p class="eyebrow">Chapters and leadership</p>
          <h2>Built locally. Connected nationally.</h2>
          <p class="lead">BFN chapters give students a local place to learn, lead, host sessions, and build finance experience while staying connected to the wider member network.</p>
          ${bulletList(["Local chapter sessions", "Speaker events", "Recruiting support", "Leadership teams", "Student-run projects"])}
          <div class="inline-actions">${button("/chapters", "Explore Chapters", "dark")}</div>
        </div>
        <aside class="network-map" aria-label="Active BFN chapter network">
          ${chapters.map((chapter) => `
            <div>
              <span>${escapeHtml(chapter.state)}</span>
              <strong>${escapeHtml(chapter.school)}</strong>
              <em>${escapeHtml(chapter.location)}</em>
            </div>
          `).join("")}
        </aside>
      </div>
    </section>

    <section class="section cta-section">
      <div class="section-inner cta-panel">
        <div>
          <p class="eyebrow">Apply to join</p>
          <h2>Start with the public application.</h2>
          <p>Apply through an open role or chapter pathway. Approved members receive onboarding instructions for member resources, private links, and contribution workflows.</p>
        </div>
        <div class="actions">${button("/open-roles", "Apply to Join", "primary")}${button("/contact", "Contact BFN", "ghost")}</div>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    ${pageHero(
      "About BFN",
      "A student-led network making finance easier to enter.",
      "Bridge Finance Network helps motivated students learn finance, find curated opportunities, build applied work, compete, and lead local chapters through a reviewed member model.",
      `${button("/open-roles", "Apply to Join", "primary")}${button("/team", "Meet the Team", "secondary")}`,
      stackedPanel("BFN at a glance", [["200+ members", "Growing student network"], ["3 chapters", "School-based communities"], ["4 paths", "Learning, opportunities, research, chapters"], ["Access", "Reviewed member workflow"]])
    )}
    ${statsBand(aboutStats)}
    <section class="section">
      <div class="section-inner split">
        <div class="text-stack">
          <p class="eyebrow">Mission</p>
          <h2>Give students a practical starting point in finance.</h2>
          <p>Finance can feel closed off when students do not know the vocabulary, career paths, recruiting expectations, or technical skills. BFN turns that uncertainty into a clear path: learn the fundamentals, use organized resources, find real opportunities, build research, and contribute through teams or chapters.</p>
          <p>Public pages explain the organization. Approved members receive access to member-only links, templates, deadlines, recordings, forms, competition materials, and team workflows after review.</p>
        </div>
        <article class="callout-card">
          <span class="card-label label-blue">Why it matters</span>
          ${bulletList(["Students often discover finance without a clear first step.", "Useful opportunities are scattered across firms, programs, schools, and deadlines.", "Applied work is easier to start when examples, templates, and feedback are organized."])}
          <p class="callout-footer">BFN makes the next step visible.</p>
        </article>
      </div>
    </section>

    <section class="section soft">
      ${sectionHeader("Operating model", "Public mission, reviewed access, member-ready work.", "BFN separates public information from member-only workflows so students can understand the model before applying and use organized materials after approval.")}
      <div class="section-inner process-grid connected-process">
        ${[
          ["Public discovery", "Students learn what BFN is, explore programs, review chapters, and choose how they want to contribute."],
          ["Application review", "BFN reviews interest, reliability, fit, and current team or chapter needs before granting access."],
          ["Member workspace", "Approved members receive organized opportunities, resources, templates, deadlines, forms, and workflows."],
          ["Applied contribution", "Members apply, compete, publish research, build resources, lead chapters, or support BFN operations."]
        ].map(([title, body], index) => `
          <article class="process-step">
            <span>${index + 1}</span>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(body)}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section">
      ${sectionHeader("What BFN provides", "Four paths for students who want to build finance experience.", "The network is organized around the work students actually need to do: learn, find opportunities, practice applied finance, and lead locally.")}
      <div class="section-inner grid cols-4">
        ${operatingPillars.map((pillar, index) => iconCard({ label: pillar.label, title: pillar.title, body: pillar.body, tags: pillar.tags }, index)).join("")}
      </div>
    </section>

    <section class="section soft">
      <div class="section-inner split network-section">
        <div>
          <p class="eyebrow">Chapter network</p>
          <h2>Local student leadership connected to a wider system.</h2>
          <p class="lead">BFN chapters give students a school-based place to host sessions, recruit peers, run events, and connect local work to the broader member network.</p>
          ${bulletList(["Finance education sessions", "Speaker and career events", "Competition promotion", "Chapter leadership teams", "Shared BFN resources"])}
          <div class="inline-actions">${button("/chapters", "Explore Chapters", "dark")}</div>
        </div>
        <aside class="network-map" aria-label="Active BFN chapter network">
          ${chapters.map((chapter) => `
            <div>
              <span>${escapeHtml(chapter.state)}</span>
              <strong>${escapeHtml(chapter.school)}</strong>
              <em>${escapeHtml(chapter.location)}</em>
            </div>
          `).join("")}
        </aside>
      </div>
    </section>

    <section class="section">
      ${sectionHeader("Proof", "Concrete signals behind the BFN model.", "BFN pairs a growing student network with named chapters, student operators, and reviewed member access.")}
      <div class="section-inner grid cols-4">
        ${trustSignals.map(([title, body], index) => iconCard({ label: "Trust signal", title, body }, index)).join("")}
      </div>
    </section>

    <section class="section soft">
      <div class="section-inner leadership-layout">
        <div>
          <p class="eyebrow">Leadership</p>
          <h2>Built by students, for students.</h2>
          <p class="lead">BFN is run by student operators across leadership, research, chapters, resources, web development, operations, and partnerships.</p>
        </div>
        <article class="leader-card">
          <div class="avatar large">AF</div>
          <div>
            <span class="card-label">Co-Founder</span>
            <h3>Andrew Fu</h3>
            <p>Andrew Fu is the Co-Founder of Bridge Finance Network. He helps lead BFN's development across finance education, student programming, member operations, chapter growth, and advisor outreach.</p>
            ${tagList(["Finance Education", "Student Programming", "Member Operations", "Advisor Outreach"])}
          </div>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-inner advisor-panel">
        <div>
          <p class="eyebrow">Board of Advisors</p>
          <h2>BFN is building an advisor network.</h2>
          <p>BFN is building an advisor network to support programming, career exposure, finance education, and professional outreach while keeping the core organization student-led.</p>
          <div class="advisor-metric"><strong>9 advisor seats</strong><span>Profiles will be added as mentors are confirmed and approved for public display.</span></div>
          <div class="inline-actions">${button("/contact", "Contact BFN", "dark")}</div>
        </div>
        <div class="grid cols-2">
          ${[
            ["Career Guidance", "Support for finance recruiting, role exploration, and professional development."],
            ["Program Strategy", "Feedback on lessons, competitions, events, and student programming."],
            ["Industry Access", "Connections to speakers, mentors, firms, and student-friendly opportunities."],
            ["Professional Context", "Perspective from finance, business, investing, entrepreneurship, and related fields."]
          ].map(([title, body]) => compactCard("Advisor support", title, body)).join("")}
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="section-inner cta-panel">
        <div>
          <p class="eyebrow">Get involved</p>
          <h2>Start with the public application.</h2>
          <p>Apply through an open role or chapter pathway. Approved members receive onboarding instructions for member resources, private links, and contribution workflows.</p>
        </div>
        <div class="actions">${button("/open-roles", "Apply to Join", "primary")}${button("/contact", "Contact BFN", "ghost")}</div>
      </div>
    </section>
  `;
}

function renderTeam() {
  const filters = ["All", "Leadership", "Web Development", "Operations", "Resources", "Member Programs", "General Member"];
  return `
    ${pageHero(
      "Team & Members",
      "Meet the students building Bridge Finance Network.",
      "BFN is powered by student leaders, developers, operators, and members working to make finance education, competitions, and career opportunities more accessible.",
      `${button("/open-roles", "Join BFN", "primary")}${button("/chapters", "Explore chapters", "secondary")}`,
      stackedPanel("Team snapshot", [["200+ members", "Growing network"], ["Student-led", "Nonprofit"], ["Chapter network", "Expanding"], ["Core focus", "Finance, careers, competitions, resources"]])
    )}

    <section class="section compact-section">
      <div class="section-inner stat-grid team-proof">
        ${stats.map((item) => `<div class="stat-card"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span><p>${escapeHtml(item.note)}</p></div>`).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-inner leadership-layout">
        <div>
          <p class="eyebrow">Leadership</p>
          <h2>The students coordinating BFN's programs, platform, and member experience.</h2>
        </div>
        <article class="leader-card spotlight">
          <div class="avatar large">AF</div>
          <div>
            <span class="card-label">Leadership</span>
            <h3>Andrew Fu</h3>
            <p class="role-title">Co-Founder</p>
            <p>Helping lead BFN's mission, growth, and student finance community.</p>
            ${tagList(["Leadership", "Strategy", "Community"])}
          </div>
        </article>
      </div>
    </section>

    <section class="section soft team-directory-section" data-team-directory>
      ${sectionHeader("Team Directory", "Browse the students contributing to BFN.", "Browse across product, web development, operations, resources, and member programs.")}
      <div class="section-inner directory-controls">
        <label class="search-field">
          <span class="sr-only">Search members</span>
          <input type="search" placeholder="Search members..." data-team-search aria-label="Search by name, role, or department" />
        </label>
        <div class="filters" data-filters>
          ${filters.map((filter, index) => `<button class="filter-button ${index === 0 ? "active" : ""}" type="button" data-filter="${escapeHtml(filter)}" aria-pressed="${index === 0 ? "true" : "false"}">${escapeHtml(filter)}</button>`).join("")}
        </div>
      </div>
      <div class="section-inner grid cols-3 member-grid" data-team-grid>
        ${teamMembers.map((member) => `
          <article class="member-card" data-team="${escapeHtml(member.group)}" data-search="${escapeHtml(`${member.name} ${member.title} ${member.level || ""} ${member.department} ${member.tags.join(" ")}`)}">
            <div class="member-card-header">
              <div class="avatar">${escapeHtml(member.initials)}</div>
              <div>
                <h3>${escapeHtml(member.name)}</h3>
                <p>${escapeHtml(member.title)}</p>
              </div>
            </div>
            ${member.level && member.level !== member.title ? `<p class="role-title">${escapeHtml(member.level)}</p>` : ""}
            ${badge(member.department, "team-badge")}
            <p>${escapeHtml(member.bio)}</p>
            ${tagList(member.tags)}
          </article>
        `).join("")}
      </div>
      <div class="section-inner empty-state" data-team-empty hidden>No matching members yet. This public directory will expand as approved profiles are added.</div>
    </section>

    <section class="section">
      <div class="section-inner split">
        <div>
          <p class="eyebrow">Member network</p>
          <h2>Approved profiles will expand as the network grows.</h2>
          <p class="lead">BFN's broader member directory will highlight approved members, chapter involvement, project contributions, and leadership roles as the network grows.</p>
          <div class="inline-actions">${button("/open-roles", "Apply to join", "dark")}</div>
        </div>
        <div class="grid">
          ${[
            ["Approved profiles", "Members will be able to opt into public profiles that highlight their BFN involvement."],
            ["Chapter involvement", "Future directory views can surface members by chapter, school, or program area."],
            ["Contribution history", "Profiles can showcase work across resources, competitions, operations, and web development."]
          ].map(([title, body]) => compactCard("Directory preview", title, body)).join("")}
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="section-inner cta-panel">
        <div>
          <p class="eyebrow">Join the team</p>
          <h2>Want to help build BFN?</h2>
          <p>Apply through an open role and tell BFN where you want to contribute.</p>
        </div>
        <div class="actions">${button("/open-roles", "View Open Roles", "primary")}${button("/chapters", "Explore Chapters", "ghost")}</div>
      </div>
    </section>
  `;
}

function renderOpportunities() {
  return `
    ${pageHero(
      "Member Opportunity Hub",
      "Finance opportunities, competitions, and resources built for students.",
      "BFN curates internships, case competitions, internal programs, and practical finance resources for approved members building early experience.",
      `${button("/open-roles", "View open roles", "primary")}${button("/login", "Member access", "secondary")}`,
      stackedPanel("Member access", [["200+ members", "Student network"], ["4 tracks", "Organized access"], ["Review", "Member-only"], ["Network", "Student-led"]])
    )}

    ${accessPanel("Public overview. Private member access.", "This page shows what BFN offers. Approved members receive direct links, deadlines, forms, internal programs, and curated resources after review.")}

    <section class="section">
      ${sectionHeader("Opportunity tracks", "Everything members need to build early finance experience", "The public site explains the categories. Reviewed access protects direct links, deadlines, forms, and internal program details.")}
      <div class="section-inner grid cols-4">
        ${opportunityTracks.map((track, index) => iconCard(track, index)).join("")}
      </div>
    </section>

    <section class="section soft">
      ${sectionHeader("Access process", "Apply publicly, access privately", "BFN protects member-only links, deadlines, forms, and internal program details through reviewed access.")}
      <div class="section-inner">
        ${processSteps([
          ["Apply", "Apply through an open role or chapter pathway using the public application link."],
          ["Get approved", "BFN reviews fit, interest, team needs, and expected contribution level."],
          ["Receive access", "Approved applicants receive follow-up instructions by email."],
          ["Use member links", "Members can browse opportunities, competitions, forms, resources, and internal programs."]
        ], "connected-process")}
        <p class="process-note">BFN protects member-only links, deadlines, forms, and internal program details through reviewed access.</p>
      </div>
    </section>

    <section class="section cta-section">
      <div class="section-inner cta-panel">
        <div>
          <p class="eyebrow">Apply for access</p>
          <h2>Ready to access BFN opportunities?</h2>
          <p>Apply through an open role or chapter pathway. Approved members receive access instructions after review.</p>
        </div>
        <div class="actions">${button("/open-roles", "View open roles", "primary")}${button("/login", "Member access", "ghost")}</div>
      </div>
    </section>
  `;
}

function renderChapters() {
  return `
    ${pageHero(
      "BFN Chapters",
      "Bring Bridge Finance Network to your school.",
      "Chapters help students run finance education sessions, promote competitions, build local leadership teams, and connect classmates to BFN's broader member network.",
      `${button("/open-roles", "Apply to Join", "primary")}${button("/login", "Member Access", "secondary")}`,
      `<aside class="chapter-panel"><span class="card-label label-gold">Chapter network</span>${chapters.map((chapter) => `<div><span>Active founding chapter</span><strong>${escapeHtml(chapter.school)}</strong><em>${escapeHtml(chapter.location)}</em></div>`).join("")}</aside>`
    )}

    <section class="section compact-section">
      <div class="section-inner mini-stat-row">
        <div><strong>3</strong><span>Active founding chapters</span></div>
        <div><strong>3</strong><span>States represented</span></div>
        <div><strong>1</strong><span>Shared BFN network</span></div>
      </div>
    </section>

    <section class="section">
      ${sectionHeader("Active founding chapters", "Founding chapters bringing BFN programming into schools.", "Each active chapter helps make finance education local while staying connected to BFN's broader member network.")}
      <div class="section-inner grid cols-3">
        ${chapters.map((chapter) => `
          <article class="chapter-card">
            <div class="chapter-marker">${escapeHtml(chapter.state)}</div>
            <span class="card-label">Active founding chapter</span>
            <h3>${escapeHtml(chapter.school)}</h3>
            <p class="role-title">${escapeHtml(chapter.location)}</p>
            <p>${escapeHtml(chapter.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section soft">
      ${sectionHeader("What chapters do", "Bring BFN programming into local student communities.", "Chapter teams help students learn finance locally while staying connected to BFN's broader member network and shared resources.")}
      <div class="section-inner grid cols-3">
        ${chapterActivities.map((activity, index) => iconCard({ label: "Chapter activity", title: activity.title, body: activity.body }, index)).join("")}
      </div>
    </section>

    <section class="section">
      ${sectionHeader("Chapter pathway", "Start with a student lead, a local plan, and BFN coordination.", "BFN chapters start with a motivated student lead, a clear local plan, and coordination with BFN leadership.")}
      <div class="section-inner">${processSteps([
        ["Student lead", "A motivated student takes ownership of launching the chapter locally."],
        ["Local programming plan", "The chapter defines how it will run finance sessions, events, or competition activity."],
        ["Member recruitment", "The team identifies students who would benefit from BFN resources and programming."],
        ["BFN coordination", "Chapter leaders stay aligned with BFN leadership, onboarding, and member materials."]
      ], "connected-process")}</div>
    </section>

    <section class="section cta-section">
      <div class="section-inner cta-panel">
        <div>
          <p class="eyebrow">Start a chapter</p>
          <h2>Interested in launching BFN at your school?</h2>
          <p>Apply to join BFN first. Approved members receive access instructions for chapter launch forms and onboarding materials.</p>
          <small>Chapter launch materials are available to approved members after review.</small>
        </div>
        <div class="actions">${button("/open-roles", "Apply to Join", "primary")}${button("/login", "Member Access", "ghost")}</div>
      </div>
    </section>
  `;
}

function renderPartners() {
  const partners = [
    ["Finance firms", "Guest speakers, case prompts, mentorship, and role pipelines."],
    ["Universities", "Student programming, finance education, and chapter support."],
    ["Student organizations", "Collaborative events, competitions, and resource swaps."],
    ["Nonprofit partners", "Financial literacy initiatives and community outreach."]
  ];
  const collaborationModels = [
    ["Speaker sessions", "Professionals can join member sessions, chapter events, or recorded learning formats."],
    ["Competition support", "Partners can help shape case prompts, judging criteria, feedback sessions, and award pathways."],
    ["Mentorship and advising", "Advisors can support career context, finance education, chapter leadership, and program quality."],
    ["Resource development", "Schools, firms, and student organizations can help create practical guides, templates, or learning tracks."],
    ["Opportunity sharing", "Partners can route student-friendly internships, programs, events, and applications into BFN's reviewed pipeline."],
    ["Chapter enablement", "Local partners can support school-based sessions, speaker events, and student leadership development."]
  ];
  return `
    ${pageHero(
      "Partners",
      "BFN works with organizations that expand practical finance access.",
      "The partner pathway is built for firms, schools, universities, advisors, nonprofits, and student organizations that can support education, mentorship, competitions, opportunities, or chapter programming.",
      `${button("/contact", "Start a conversation", "primary")}${button("/about", "Review the model", "secondary")}`,
      stackedPanel("Partner fit", [["Audience", "Motivated students"], ["Support", "Speakers, mentors, resources"], ["Programs", "Competitions and chapters"], ["Access", "Reviewed member pipeline"]])
    )}
    <section class="section">
      ${sectionHeader("Partner types", "Useful partners make finance more concrete for students.", "BFN prioritizes organizations that can add practical context, professional exposure, or structured access.")}
      <div class="section-inner grid cols-4">${partners.map(([name, body]) => compactCard("Partner type", name, body)).join("")}</div>
    </section>
    <section class="section soft">
      ${sectionHeader("Collaboration models", "Clear ways to contribute without adding noise.", "Each partnership should have a specific student-facing purpose and a defined next step.")}
      <div class="section-inner grid cols-3">${collaborationModels.map(([title, body], index) => iconCard({ label: "Collaboration", title, body }, index)).join("")}</div>
    </section>
    <section class="section cta-section">
      <div class="section-inner cta-panel">
        <div>
          <p class="eyebrow">Partner with BFN</p>
          <h2>Bring professional context to student finance preparation.</h2>
          <p>Contact BFN about speaker sessions, mentorship, competitions, resources, school programming, or student-friendly opportunity sharing.</p>
        </div>
        <div class="actions">${button("/contact", "Contact BFN", "primary")}</div>
      </div>
    </section>
  `;
}

function renderOpenRoles() {
  const hiringTeams = ["Finance", "Research", "Web Development", "Resources", "Operations", "Marketing", "Partnerships", "Chapter Leadership"];
  const role = openRoles[0];
  return `
    ${pageHero(
      "Applications Open",
      "Join Bridge Finance Network",
      "Apply to join a student-led finance network built around education, research, leadership, and real contribution. BFN is open to motivated students who want to learn finance, contribute to member programs, support chapters, build resources, and take on leadership responsibilities.",
      `${button(applicationLink, "Apply Now", "primary")}${button("/login", "Review Member Access", "secondary")}`,
      stackedPanel("Current Application Path", [["Open role", "Financial Analyst Intern"], ["Team", "Finance"], ["Format", "Part-time, student-led"], ["Next step", "Submit public application"], ["Approval", "Review-based"]])
    )}

    <section class="section compact-section">
      <div class="section-inner credibility-strip">
        ${["200+ members", "Student-led", "Finance education", "Research projects", "Chapter opportunities", "Reviewed member access"].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </section>

    <section class="section">
      ${sectionHeader("Why students join BFN", "A student-professional place to learn and contribute.", "BFN is organized around useful work, not passive membership.")}
      <div class="section-inner grid cols-3">
        ${[
          ["Learn finance with peers", "Build fluency in markets, accounting, valuation, investing, recruiting, and finance vocabulary through student-led programming."],
          ["Contribute to real projects", "Support research, resources, chapter events, competitions, web development, operations, marketing, and partnerships."],
          ["Access member-only programs", "Approved members receive access to opportunities, internal resources, programs, and speaker materials."]
        ].map(([title, body], index) => iconCard({ label: "Why join", title, body }, index)).join("")}
      </div>
    </section>

    <section class="section soft">
      ${sectionHeader("Current open role", "BFN is accepting public applications for student contributors.", "The current open role is focused on finance research and analyst work.")}
      <div class="section-inner">
        <article class="role-card">
          <div class="role-main">
            <div class="role-heading">
              ${badge(role.status, "status-open")}
              ${badge(role.team, "team-badge")}
              <h3>${escapeHtml(role.title)}</h3>
              <p>${escapeHtml(role.commitment)}</p>
            </div>
            <p>${escapeHtml(role.description)}</p>
            ${bulletList(role.responsibilities)}
            <div class="inline-actions">${button(role.link, "Apply for this role", "dark")}</div>
            <small>Approved applicants receive follow-up instructions by email.</small>
          </div>
          <div class="role-meta">
            ${role.meta.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
          </div>
        </article>
      </div>
    </section>

    <section class="section">
      ${sectionHeader("Teams and contribution areas", "Student-run teams across finance, operations, content, partnerships, web development, and chapters.", "Applicants can indicate the areas that best match their skills and goals.")}
      <div class="section-inner tag-grid">
        ${hiringTeams.map((team) => `<span>${escapeHtml(team)}</span>`).join("")}
      </div>
    </section>

    <section class="section soft">
      ${sectionHeader("How the application process works", "A clear review path from application to contribution.", "BFN reviews applications based on current needs, reliability, role fit, and potential contribution.")}
      <div class="section-inner">
        ${processSteps([
          ["Submit application", "Use the role link and describe your finance interests, skills, and preferred teams."],
          ["BFN review", "The team reviews applications based on current needs, reliability, role fit, and potential contribution."],
          ["Approval email", "Approved applicants receive next steps by email."],
          ["Start contributing", "Members review expectations and begin contributing to BFN projects."]
        ], "connected-process")}
      </div>
    </section>

    <section class="section cta-section">
      <div class="section-inner cta-panel">
        <div>
          <p class="eyebrow">Apply now</p>
          <h2>Ready to contribute to BFN?</h2>
          <p>Apply publicly, tell us where you want to contribute, and BFN will review your application based on current team needs and role fit.</p>
          <small>Member access is provided after application review and approval.</small>
        </div>
        <div class="actions">${button(applicationLink, "Apply Now", "primary")}${button("/login", "Review Member Access", "ghost")}</div>
      </div>
    </section>
  `;
}

function renderBlog() {
  return `
    ${pageHero(
      "Blog & News",
      "Official updates, chapter notes, and member programming announcements.",
      "BFN publishes public updates when they help prospective members, schools, parents, advisors, or partners understand what the network is building.",
      "",
      stackedPanel("Editorial standards", [["Updates", "Official announcements"], ["Audience", "Students and supporters"], ["Status", "Public-ready only"], ["Cadence", "As programming develops"]])
    )}
    <section class="section">
      ${sectionHeader("Latest updates", "A concise public record of what BFN is building.", "Limited public updates are presented clearly rather than stretched into placeholder content.")}
      <div class="section-inner grid cols-3">
        ${posts.map(([title, date, category, excerpt]) => compactCard(category, title, `${date}. ${excerpt}`, `<div class="inline-actions">${button("/contact", "Ask about this update", "secondary")}</div>`)).join("")}
      </div>
    </section>
  `;
}

function renderEvents() {
  return `
    ${pageHero(
      "Events",
      "Competitions, information sessions, and chapter activity.",
      "BFN events are organized around practical finance learning: public information sessions for prospective members and member sessions for approved students.",
      `${button("/open-roles", "Join BFN", "primary")}${button("/login", "Member Access", "secondary")}`,
      stackedPanel("Event access", [["Public", "Info sessions"], ["Members", "Workshops"], ["Chapters", "Local sessions"], ["Competitions", "Structured practice"]])
    )}
    <section class="section">
      ${sectionHeader("Upcoming formats", "Events show the next concrete step.", "Each listing identifies the audience, access level, and purpose so students know what to do next.")}
      <div class="section-inner grid cols-3">
        ${events.map(([name, date, description, access]) => compactCard(access, name, `${date}. ${description}`)).join("")}
      </div>
    </section>
  `;
}

function renderResources() {
  return `
    ${pageHero(
      "Member Resource Library",
      "Finance learning resources built for ambitious students.",
      "Access practical guides, recruiting prep, templates, videos, and structured learning tracks designed to help students learn finance, prepare for competitions, and build stronger applications.",
      `${button("/open-roles", "Join BFN", "primary")}${button("/login", "Member access", "secondary")}`,
      stackedPanel("Library preview", [["Search resources", "Member library"], ["Popular track", "Valuation Basics"], ["Template", "Resume Review Checklist"], ["Tool", "Simple DCF Worksheet"], ["Video", "Accounting Fundamentals"]])
    )}

    ${accessPanel("Public overview available.", "Full guides, templates, videos, recordings, tools, and internal links are available to approved members after review.", "Member access")}

    <section class="section">
      ${sectionHeader("Resource types", "A learning product for finance preparation.", "BFN resources are organized around the practical work students need to do: learn, apply, practice, and compete.")}
      <div class="section-inner grid cols-4">
        ${resources.map((resource, index) => iconCard({ label: resource.label, title: resource.title, body: resource.body, tags: resource.examples }, index)).join("")}
      </div>
    </section>

    <section class="section soft">
      ${sectionHeader("Featured resources", "Examples from the member library.", "These examples show the type of material approved members can use after review.")}
      <div class="section-inner grid cols-3">
        ${featuredResources.map((resource) => `
          <article class="resource-preview">
            <div class="resource-meta"><span>${escapeHtml(resource.type)}</span><span>${escapeHtml(resource.level)}</span></div>
            <h3>${escapeHtml(resource.title)}</h3>
            <p>${escapeHtml(resource.body)}</p>
            ${badge("Preview", "status-open")}
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section">
      ${sectionHeader("Built for students", "Practical material for learning, applying, and competing.", "Resources support the workflows students actually need for finance education and recruiting preparation.")}
      <div class="section-inner grid cols-3">
        ${resourceUseCases.map(([title, body], index) => iconCard({ label: "Student use case", title, body }, index)).join("")}
      </div>
    </section>

    <section class="section soft">
      ${sectionHeader("How members use the library", "Learn, apply, and prepare with a structured workflow.", "Members can move from fundamentals into practice and then into applications, presentations, and competitions.")}
      <div class="section-inner">${processSteps([
        ["Learn the fundamentals", "Start with primers, vocabulary, and beginner-friendly guides."],
        ["Apply the concepts", "Use templates, tools, and worksheets to practice finance workflows."],
        ["Prepare and compete", "Build stronger applications, presentations, stock pitches, and competition submissions."]
      ], "three-step")}</div>
    </section>

    <section class="section cta-section">
      <div class="section-inner cta-panel">
        <div>
          <p class="eyebrow">Member library</p>
          <h2>Ready to use the full library?</h2>
          <p>Approved members can access BFN guides, templates, tools, videos, speaker materials, and internal links after review.</p>
        </div>
        <div class="actions">${button("/open-roles", "Join BFN", "primary")}${button("/login", "Member access", "ghost")}</div>
      </div>
    </section>
  `;
}

function renderPortfolio() {
  return `
    ${pageHero(
      "BFN Portfolio",
      "Student research, finance projects, and chapter work, reviewed for public release.",
      "The BFN Portfolio will showcase approved student research, stock pitch writeups, market notes, finance tools, web development work, chapter initiatives, and competition recaps as the network grows.",
      `${button("/contact", "Submit work", "primary")}${button("/open-roles", "View open roles", "secondary")}`,
      stackedPanel("Publication pipeline", [["1", "Submit"], ["2", "Review"], ["3", "Polish"], ["4", "Publish"]])
    )}

    <section class="section">
      ${sectionHeader("Portfolio tracks", "Public work is being built around what students create.", "BFN's public portfolio is being built around the work students create across research, technical projects, chapters, and competitions.")}
      <div class="section-inner grid cols-3">
        ${portfolioTracks.map(([title, body, status], index) => iconCard({ label: status, title, body }, index)).join("")}
      </div>
    </section>

    <section class="section soft">
      ${sectionHeader("How work gets published", "Every public portfolio item should be clear, useful, and mission-aligned.", "BFN reviews submissions for clarity, quality, originality, and public fit before they appear on the site.")}
      <div class="section-inner">${processSteps([
        ["Submit", "Students or chapters submit work for review."],
        ["Review", "BFN checks clarity, quality, originality, and public fit."],
        ["Polish", "Work is edited for formatting, readability, and presentation."],
        ["Publish", "Approved work is added to the public portfolio."]
      ], "connected-process")}</div>
    </section>

    <section class="section">
      ${sectionHeader("What will appear here", "Upcoming categories for practical student work.", "The first portfolio entries will focus on practical student work that can help other members learn, prepare, and contribute.")}
      <div class="section-inner grid cols-3">
        ${[
          ["Research review", "Stock pitch writeups", "Student research and thesis writeups prepared for public review.", "In review"],
          ["Market notes", "Market notes and research briefs", "Short analysis briefs, industry notes, and structured research summaries.", "In review"],
          ["Chapter work", "Chapter event recaps", "Public recaps of approved chapter sessions, competitions, and student-led initiatives.", "In review"]
        ].map(([label, title, body, status]) => `
          <article class="publication-card">
            <span class="card-label">${escapeHtml(label)}</span>
            <div class="doc-lines" aria-hidden="true"><span></span><span></span><span></span></div>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(body)}</p>
            ${badge(status, "status-open")}
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section soft">
      ${sectionHeader("Publication standards", "Approved work, not unfinished drafts.", "The portfolio is for approved work. BFN reviews submissions for quality before public release.")}
      <div class="section-inner standard-grid">
        ${["Clear analysis", "Original student work", "Public-ready formatting", "Mission fit"].map((standard, index) => `<div><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(standard)}</strong></div>`).join("")}
      </div>
    </section>

    <section class="section cta-section">
      <div class="section-inner cta-panel">
        <div>
          <p class="eyebrow">Contribute work</p>
          <h2>Want your work featured?</h2>
          <p>Contribute research, build finance tools, support a chapter project, or join one of BFN's internal teams working on public resources.</p>
        </div>
        <div class="actions">${button("/open-roles", "Join BFN", "primary")}${button("/contact", "Contact us", "ghost")}</div>
      </div>
    </section>
  `;
}

function renderFaq() {
  return `
    ${pageHero("FAQ", "Common questions for prospective members.", "Answers cover joining, eligibility, time commitment, tiers, chapters, and contacts.")}
    <section class="section">
      <div class="section-inner">
        ${faqs.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("")}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    ${pageHero("Contact", "Reach Bridge Finance Network.", "Use the contact form for general questions, partnerships, advisor outreach, chapters, press, or member support.")}
    <section class="section">
      <div class="section-inner split">
        <div class="text-stack">
          <p class="eyebrow">Primary email</p>
          <h2>Direct contact</h2>
          <p><a href="mailto:bridgefinancenetwork@gmail.com">bridgefinancenetwork@gmail.com</a></p>
          <div class="grid compact-list">
            ${compactCard("General", "Questions about BFN", "Ask about membership, open roles, member access, resources, or competitions.")}
            ${compactCard("Partnerships", "Firms, advisors, and schools", "Reach out about speakers, mentorship, competitions, resources, sponsorships, or school partnerships.")}
            ${compactCard("Chapters", "Start BFN at your school", "Students interested in launching a chapter can ask about the application and onboarding path.")}
          </div>
        </div>
        <form class="card form" data-form>
          <label>Name<input name="name" autocomplete="name" required></label>
          <label>Email<input type="email" name="email" autocomplete="email" required></label>
          <label>Subject<select name="subject"><option>General Inquiry</option><option>Partnerships / Advisors</option><option>Chapter Inquiry</option><option>Member Support</option></select></label>
          <label>Message<textarea name="message" required></textarea></label>
          <button class="button dark" type="submit">Submit inquiry</button>
          <div class="form-status" role="status"></div>
        </form>
      </div>
    </section>
  `;
}

function renderMemberAccess() {
  return `
    ${pageHero(
      "Member Access",
      "Apply first. Approved students receive the next steps directly.",
      "BFN reviews public applications before sharing member-only resources, internal links, chapter materials, and contribution workflows. There is no public self-serve account creation on this site.",
      `${button("/open-roles", "Apply for access", "primary")}${button("/contact", "Contact BFN", "secondary")}`,
      stackedPanel("Access process", [["Step 1", "Apply publicly"], ["Step 2", "BFN reviews fit"], ["Step 3", "Receive instructions"], ["Step 4", "Start contributing"]])
    )}
    <section class="section">
      <div class="section-inner split">
        <div class="card">
          <span class="card-label label-gold">Reviewed access</span>
          <h3>What approved members receive</h3>
          ${bulletList(["Curated opportunities and application notes.", "Finance learning materials, templates, and tools.", "Competition preparation and research workflows.", "Chapter and leadership onboarding materials."])}
        </div>
        <div class="card">
          <span class="card-label label-blue">No public login</span>
          <h3>Why this page replaced the sign-in form</h3>
          <p>BFN shares member access through reviewed onboarding. Removing public mock login and registration forms keeps the launch site accurate, credible, and aligned with the current application process.</p>
          <div class="inline-actions">${button("/open-roles", "View open roles", "dark")}</div>
        </div>
      </div>
    </section>
  `;
}

function renderPrivacy() {
  return `
    ${pageHero("Privacy", "How BFN handles public inquiries and applications.", "Bridge Finance Network collects only the information students and partners choose to submit through public forms, email, and application links.")}
    <section class="section">
      <div class="section-inner grid cols-3">
        ${[
          ["Information submitted", "Names, emails, messages, application responses, school or chapter interest, and other details provided voluntarily."],
          ["How it is used", "BFN uses submitted information to review applications, respond to inquiries, coordinate chapters, and communicate relevant program updates."],
          ["Contact", "Questions about privacy or data handling can be sent to bridgefinancenetwork@gmail.com."]
        ].map(([title, body], index) => iconCard({ label: "Privacy", title, body }, index)).join("")}
      </div>
    </section>
  `;
}

function renderTerms() {
  return `
    ${pageHero("Terms", "Use BFN materials responsibly.", "Bridge Finance Network provides public information and member resources for student finance education, career preparation, competitions, and chapter activity.")}
    <section class="section">
      <div class="section-inner grid cols-3">
        ${[
          ["Educational use", "BFN content is for student learning and preparation. It is not financial, investment, tax, or legal advice."],
          ["Member resources", "Member-only resources, links, templates, recordings, and internal materials should not be redistributed without BFN approval."],
          ["Accuracy and updates", "BFN works to keep public information current, but opportunities, deadlines, events, and programs may change."]
        ].map(([title, body], index) => iconCard({ label: "Terms", title, body }, index)).join("")}
      </div>
    </section>
  `;
}

function portalContent(path) {
  const titleMap = {
    "/portal/dashboard": ["Member Workspace", "A clear model for member announcements, resources, and next actions."],
    "/portal/opportunities": ["Opportunities Hub", "Filter internships, competitions, programs, and resources."],
    "/portal/curriculum": ["Curriculum Hub", "Lessons by topic and difficulty with clean lesson URLs."],
    "/portal/competitions": ["Case Studies & Competitions", "Active competitions, submission flow, and past results."],
    "/portal/resources": ["Resource Library", "Unlocked BFN-created guides, tools, videos, and programs."],
    "/portal/speakers": ["Guest Speakers", "Recorded sessions organized by topic, industry, or speaker."],
    "/portal/profile": ["Profile", "Member info, current tier, and promotion history."]
  };
  const [title, lead] = titleMap[path] || titleMap["/portal/dashboard"];
  const portalCardsByPath = {
    "/portal/dashboard": [
      ["Status", "Member overview", "Tier status, announcements, team links, and next actions are grouped for a quick start."],
      ["This week", "Priority queue", "Members can review upcoming competitions, application deadlines, chapter updates, and resource releases."],
      ["Contribution", "Team workflow", "The member workspace keeps role, team, and contribution expectations visible after approval."],
      ["Access", "Reviewed membership", "Private links and internal materials stay behind the reviewed member path."]
    ],
    "/portal/opportunities": [
      ["Pipeline", "Curated member links", "Opportunities can be filtered by internships, competitions, programs, resources, and deadlines."],
      ["Application notes", "Context before applying", "Member records can include eligibility, deadline urgency, notes, and follow-up actions."],
      ["Quality control", "Reviewed access", "BFN can prioritize student-fit opportunities instead of sending members into a noisy list."],
      ["Tracking", "Member workflow", "Students can organize saved opportunities, completed applications, and next steps."]
    ],
    "/portal/curriculum": [
      ["Lessons", "Structured finance topics", "Curriculum can group accounting, valuation, markets, investing, recruiting, and vocabulary."],
      ["Difficulty", "Beginner to applied", "Members can move from foundational terms into technical practice and competition prep."],
      ["Resources", "Templates and guides", "Lesson pages can connect directly to worksheets, calculators, examples, and recordings."],
      ["Progress", "Learning path", "The member workspace supports a more organized education path than scattered documents."]
    ],
    "/portal/competitions": [
      ["Active prompts", "Case and pitch formats", "Competition pages can hold prompts, rules, deadlines, submissions, and feedback notes."],
      ["Preparation", "Research workflow", "Members can use templates for thesis structure, company research, valuation, and presentations."],
      ["Teams", "Submission support", "Team coordination, judging criteria, and final materials can live in one member workspace."],
      ["Archive", "Past results", "Reviewed outcomes and examples can help new members understand quality expectations."]
    ],
    "/portal/resources": [
      ["Library", "Unlocked member materials", "Approved members can access full guides, tools, templates, worksheets, videos, and recordings."],
      ["Search", "Organized by use case", "Resources can be grouped by recruiting, competitions, research, finance concepts, and chapter work."],
      ["Templates", "Reusable starting points", "Members can work from checklists, models, presentation aids, and research worksheets."],
      ["Standards", "Practical and reviewed", "The library should favor useful material over unfinished internal notes."]
    ],
    "/portal/speakers": [
      ["Recordings", "Guest speaker library", "Recorded sessions can be organized by topic, industry, school, speaker, or event type."],
      ["Briefs", "Context before watching", "Members can review short summaries, key terms, and follow-up resources."],
      ["Access", "Member-only sessions", "Speaker materials remain private unless approved for public release."],
      ["Outreach", "Advisor pipeline", "The speaker area can connect advisor support to member learning."]
    ],
    "/portal/profile": [
      ["Profile", "Member information", "Members can see role, team, tier, chapter, and contribution information in one place."],
      ["Tier history", "Progression context", "Leadership can communicate expectations and advancement history clearly."],
      ["Contributions", "Member record", "Profiles can connect projects, research, chapter work, and team participation."],
      ["Settings", "Account access", "Member access remains part of the reviewed-access model."]
    ]
  };
  const cards = portalCardsByPath[path] || portalCardsByPath["/portal/dashboard"];
  return `
    ${pageHero(
      "Member Workspace",
      title,
      lead,
      `${button("/open-roles", "Apply for access", "primary")}${button("/login", "Member access", "secondary")}`,
      stackedPanel("Access model", [["Public", "Program overview"], ["Private", "Approved members"], ["Review", "Application-based"], ["Content", "Links, forms, resources"]])
    )}
    <section class="section">
      <div class="section-inner portal-shell">
        <nav class="portal-nav" aria-label="Portal">
          ${portalLinks.map(([href, label]) => `<a class="${path === href ? "active" : ""}" href="${href}">${escapeHtml(label)}</a>`).join("")}
        </nav>
        <div class="grid cols-2">
          ${cards.map(([label, cardTitle, body]) => compactCard(label, cardTitle, body)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderManageTiers() {
  return `
    ${pageHero("Restricted", "Manage Tiers", "This member operations page is reserved for authorized BFN leadership.")}
    <section class="section">
      <div class="section-inner">
        <div class="card emphasis">
          <span class="card-label label-berry">HR + MD only</span>
          <h3>Tier update workflow</h3>
          <p>Search member by name or username, review current tier, select Intern, Analyst, Associate, or Senior Associate, then save a tier history entry.</p>
          <div class="inline-actions">${button("/contact", "Contact leadership", "dark")}</div>
        </div>
      </div>
    </section>
  `;
}

const routes = {
  "/": renderHome,
  "/about": renderAbout,
  "/team": renderTeam,
  "/opportunities": renderOpportunities,
  "/chapters": renderChapters,
  "/partners": renderPartners,
  "/open-roles": renderOpenRoles,
  "/blog": renderBlog,
  "/events": renderEvents,
  "/resources": renderResources,
  "/portfolio": renderPortfolio,
  "/faq": renderFaq,
  "/contact": renderContact,
  "/login": renderMemberAccess,
  "/register": renderMemberAccess,
  "/reset": renderMemberAccess,
  "/privacy": renderPrivacy,
  "/terms": renderTerms,
  "/manage-tiers": renderManageTiers
};

const isFileMode = window.location.protocol === "file:";

function normalizedPath() {
  if (isFileMode) {
    const hashPath = window.location.hash.replace(/^#/, "").replace(/\/+$/, "") || "/";
    return routes[hashPath] || hashPath.startsWith("/portal") ? hashPath : "/";
  }
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return routes[path] || path.startsWith("/portal") ? path : "/";
}

function updateMeta(path) {
  const [title, description] = meta[path] || meta["/"];
  document.title = title;
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) descriptionTag.setAttribute("content", description);
}

function setActiveNav(path) {
  document.querySelectorAll("[data-nav] a").forEach((link) => {
    const href = link.getAttribute("href");
    const isActive = href === path || (href !== "/" && path.startsWith(href));
    link.classList.toggle("active", isActive);
  });
}

function wireForms() {
  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) status.textContent = "Received. BFN will review your inquiry and follow up by email.";
      form.reset();
    });
  });
}

function wireTeamDirectory() {
  const root = document.querySelector("[data-team-directory]");
  if (!root) return;

  const buttons = Array.from(root.querySelectorAll("[data-filter]"));
  const input = root.querySelector("[data-team-search]");
  const cards = Array.from(root.querySelectorAll("[data-team]"));
  const empty = root.querySelector("[data-team-empty]");
  let activeFilter = "All";

  const update = () => {
    const term = (input?.value || "").trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((cardEl) => {
      const matchesFilter = activeFilter === "All" || cardEl.dataset.team === activeFilter;
      const matchesSearch = !term || (cardEl.dataset.search || "").toLowerCase().includes(term);
      const isVisible = matchesFilter && matchesSearch;
      cardEl.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (empty) empty.hidden = visibleCount > 0;
  };

  buttons.forEach((buttonEl) => {
    buttonEl.addEventListener("click", () => {
      activeFilter = buttonEl.dataset.filter || "All";
      buttons.forEach((btn) => {
        const isActive = btn === buttonEl;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", String(isActive));
      });
      update();
    });
  });

  input?.addEventListener("input", update);
  update();
}

function wireReveal() {
  const targets = Array.from(document.querySelectorAll(".section, .page-hero-inner, .stat-card"));
  if (!targets.length) return;
  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  targets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
}

function render() {
  const path = normalizedPath();
  const isKnown = routes[path] || path.startsWith("/portal");
  const html = path.startsWith("/portal") ? portalContent(path) : (routes[path] || routes["/"])();
  $app.innerHTML = isKnown ? html : routes["/"]();
  updateMeta(path);
  setActiveNav(path);
  wireForms();
  wireTeamDirectory();
  wireReveal();
  $app.focus({ preventScroll: true });
  document.body.classList.remove("menu-open");
  $toggle?.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link) return;
  const url = new URL(link.href);
  const rawHref = link.getAttribute("href") || "";
  const internalPath = rawHref.startsWith("/") ? rawHref : null;
  if (!isFileMode && (url.origin !== window.location.origin || link.target)) return;
  if (isFileMode && (!internalPath || link.target)) return;
  const targetPath = isFileMode ? internalPath : url.pathname;

  if (!isFileMode && url.pathname === window.location.pathname && url.hash) {
    const target = document.querySelector(url.hash);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  event.preventDefault();
  if (isFileMode) {
    const nextHash = `#${targetPath}`;
    if (window.location.hash !== nextHash) window.history.pushState({}, "", nextHash);
  } else {
    window.history.pushState({}, "", targetPath);
  }
  render();
  window.scrollTo({ top: 0, behavior: "auto" });
});

$toggle?.addEventListener("click", () => {
  const open = !document.body.classList.contains("menu-open");
  document.body.classList.toggle("menu-open", open);
  $toggle.setAttribute("aria-expanded", String(open));
});

window.addEventListener("popstate", render);
document.querySelector("[data-year]").textContent = new Date().getFullYear();
render();
