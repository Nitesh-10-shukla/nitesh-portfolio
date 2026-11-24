export type Project = {
  id: number;
  name: string;
  /** Short line used on the card; the full description expands below it. */
  summary: string;
  description: string;
  /** Product domain, shown as a label on the card artwork. */
  domain: string;
  /** When the work happened, where it's known. */
  period?: string;
  /** Omitted where the stack isn't documented — the chip row is then skipped. */
  tools?: string[];
  role: string;
  /** Résumé bullets, shown on the featured card. */
  highlights?: string[];
  /** Published outcome figures, shown as stat pills. */
  impact?: { value: string; label: string }[];
  code?: string;
  /** Omitted for products without a public URL. */
  demo?: string;
  /** Exactly one project is featured; it leads the section full-width. */
  featured?: boolean;
  /** Two hex stops driving the generated card artwork. */
  accent: [string, string];
};

export const projectsData: Project[] = [
  {
    id: 1,
    name: "MediaIntercept",
    summary:
      "Multi-tenant SaaS platform for affiliate click tracking, fraud screening, reporting, invoicing and payouts across four role-based portals.",
    description:
      "Multi-tenant SaaS platform for affiliate click tracking, fraud screening, reporting, invoicing and payouts, serving Admin/Employee, Publisher, Advertiser and Public portals from one codebase.",
    domain: "Performance Marketing",
    period: "Jan 2026 – Present",
    role: "Full Stack Developer",
    demo: "https://app.mediaintercept.com",
    tools: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Apollo Client",
      "GraphQL",
      "Node.js",
      "PostgreSQL",
      "GitLab CI/CD",
    ],
    highlights: [
      "Developed reporting dashboards and major platform features across the Admin/Employee, Publisher, Advertiser and Public portals, including Flex Reporting, click adjustments, invoicing and payout workflows.",
      "Built data-driven reporting interfaces with Apollo Client and GraphQL, handling complex filters, date-range selection, reporting tables and campaign analytics.",
      "Improved dashboard and campaign data refresh workflows by reducing unnecessary polling and introducing server-driven refresh strategies.",
      "Fixed timezone and DST-related issues affecting reports, billing adjustments and invoices by improving date handling across the frontend, GraphQL resolvers and PostgreSQL.",
      "Contributed to migrating from Everflow to an in-house tracking system, including historical data reconciliation, attribution handling and resync tooling, and implemented the ConvertKit (Kit) publisher integration.",
      "Contributed to production security and reliability through API rate limiting, reCAPTCHA, client-IP spoofing prevention, authentication safeguards, database optimisation and GitLab CI/CD workflows.",
    ],
    featured: true,
    accent: ["#8b5cf6", "#ec4899"],
  },
  {
    id: 2,
    name: "CognitaZ",
    summary:
      "AI-powered SAT learning platform with a collaborative whiteboard and a voice-driven tutoring interface.",
    description:
      "Built an interactive canvas-based whiteboard with drawing tools, drawing-state management, undo/redo and real-time collaboration for tutoring sessions. Developed a voice-driven AI tutoring interface supporting speech-to-text (ASR), text-to-speech (TTS), microphone permissions and streaming audio playback with interruption mid-conversation. Also built multilingual student interfaces, progress tracking and performance analytics, plus admin tools for managing learning content, users and sessions, and integrated OpenAI APIs for personalised learning workflows across English, Spanish, Chinese and Hindi.",
    domain: "EdTech · AI",
    role: "Full Stack Developer",
    demo: "https://cognitaz.com",
    tools: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "OpenAI",
      "TTS",
      "ASR",
    ],
    accent: ["#16f2b3", "#38bdf8"],
  },
  {
    id: 3,
    name: "Elite Marketing Suite",
    summary:
      "AI marketing automation platform with a Manifest V3 Chrome Extension and GPT-4o powered engagement tools.",
    description:
      "Developed a Manifest V3 Chrome Extension using content scripts and service workers, with MutationObserver handling dynamic page changes and cross-context messaging between extension components. Implemented AI-powered Facebook marketing features including GPT-4o comment and reply generation, lead generation, broadcast messaging and audience segmentation. Built interactive campaign analytics dashboards and lead-tracking interfaces from reusable React components wired to backend APIs.",
    domain: "MarTech · AI",
    role: "Full Stack Developer",
    demo: "https://elitemarketingsuite.com",
    tools: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Chrome Extension (MV3)",
      "Node.js",
      "OpenAI",
      "GPT-4o",
    ],
    accent: ["#f472b6", "#a78bfa"],
  },
  {
    id: 4,
    name: "ShiftHarmony.AI",
    summary:
      "AI-assisted scheduling platform for emergency departments — balances provider preferences against institutional rules and enforces fairness.",
    description:
      "An AI-assisted scheduling platform that streamlines complex provider scheduling for healthcare organisations, letting providers and administrators collaborate while balancing individual preferences, institutional rules and operational constraints. It replaced manual, error-prone scheduling that was hard to scale across many providers and shift types, and gave providers visibility into how their schedules are produced.",
    domain: "Healthcare · AI",
    role: "Full Stack Developer",
    demo: "https://shiftharmony.ai/",
    highlights: [
      "Role-based dashboards for providers and admins, with global and personal schedule views and export.",
      "Structured preference, shift-target and date-request management through list and calendar interfaces.",
      "AI-powered schedule generation with institutional rule enforcement, contradiction detection and pre-assignment support.",
      "Admin review, edit, apply and publish workflow with full audit history and validation feedback.",
    ],
    impact: [
      { value: "85%", label: "less scheduling time" },
      { value: "70%", label: "fewer conflicts" },
      { value: "90%", label: "provider satisfaction" },
      { value: "75%", label: "scalability gain" },
    ],
    accent: ["#22d3ee", "#16f2b3"],
  },
  {
    id: 5,
    name: "Walead",
    summary: "Sales engagement platform with a scheduling calendar and a companion Chrome extension.",
    description:
      "Developed feature-rich web applications with Next.js, React.js, and GraphQL for efficient data retrieval, prioritizing intuitive UI design and seamless functionality. Implemented advanced features including a dynamic calendar and custom Chrome extension to enhance user experience and productivity.",
    domain: "Sales Platform",
    tools: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Redux",
      "Material UI",
      "Styled-components",
      "Stripe",
      "Chrome Extension",
      "Express",
      "PostgreSQL",
      "AWS S3",
    ],
    role: "Full Stack Developer",
    demo: "https://www.walead.ai/",
    accent: ["#a78bfa", "#22d3ee"],
  },
  {
    id: 6,
    name: "Guide to Europe",
    summary: "Travel planning product — resolved long-standing UI and functional issues, then shipped new features.",
    description:
      "Resolved existing functional/UI issues, ensuring seamless user experience. Developed and integrated new functionalities based on user feedback and requirements.",
    domain: "Travel",
    tools: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "MongoDB",
      "Redux",
      "Material UI",
      "Styled-components",
      "Express",
    ],
    role: "Full Stack Developer",
    demo: "https://guidetoeurope.com/",
    accent: ["#38bdf8", "#8b5cf6"],
  },
  {
    id: 7,
    name: "Planwell",
    summary: "Financial planning suite — investment, college, retirement and kids calculators.",
    description:
      "Integrated diverse financial calculators (kids, investment, college, retirement) into the web app, empowering users with robust tools for financial planning and informed decision-making.",
    domain: "Fintech",
    tools: ["Next.js", "TypeScript", "Redux", "React Query", "Material UI", "Python", "Django", "SQL"],
    role: "Full Stack Developer",
    demo: "https://www.planwell.io/",
    accent: ["#f59e0b", "#ec4899"],
  },
  {
    id: 8,
    name: "Times Ascent",
    summary: "Careers platform connecting job seekers with listings, resume tools and psychometric tests.",
    description:
      "At Times Ascent, I contributed to developing and enhancing a platform that connects job seekers with career opportunities. The platform offers job listings, personalized recommendations, resume-building tools, and psychometric tests. I also worked on the backend for seamless integration with job alerts, interview preparation, and mentorship programs. The platform also provides recruitment solutions for employers, enabling them to manage job postings, candidate engagement, and employer branding.",
    domain: "Careers",
    tools: ["React", "Python", "Django", "SQL", "Bootstrap"],
    role: "Full Stack Developer",
    demo: "https://timesascent.com/",
    accent: ["#34d399", "#38bdf8"],
  },
];

/*
 * Removed from the grid:
 *
 * - Nexlify Tech — the nexlifytech.in domain no longer resolves (NXDOMAIN).
 * - Promolytics SaaS (V2) — only reachable at a dev login URL
 *   (devui.promolytics.net/login), which does not resolve publicly either.
 *
 * Both are real past work; restore them as entries above if a working public
 * URL becomes available.
 */
