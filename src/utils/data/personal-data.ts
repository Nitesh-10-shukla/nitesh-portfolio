/**
 * Source of truth for everything personal on the site.
 * Kept in sync with the résumé — update here, not in components.
 */

/** Start of the professional run quoted in the résumé ("4+ years"). */
export const CAREER_START = "2022-05-01";

/**
 * Total products shipped across all client work.
 *
 * This is deliberately NOT `projectsData.length`: the Projects section shows a
 * curated handful, while this is everything delivered. Shown as "15+", so it
 * stays accurate whether the true figure is 15 or 17 — raise it when more ship.
 */
export const PROJECTS_DELIVERED = 15;

export const personalData = {
  name: "Nitesh Shukla",
  initials: "NS",
  designation: "Full Stack AI Engineer",
  /** Rotated under the hero headline. */
  specialisations: [
    "React.js & Next.js Specialist",
    "Full Stack Developer",
    "AI & RAG Product Builder",
    "Performance & Core Web Vitals",
  ],
  tagline:
    "I build and maintain production SaaS applications in React, Next.js and TypeScript — complex dashboards, real-time interfaces and AI-powered products, along with the Node.js, GraphQL and PostgreSQL work behind them.",
  summary:
    "Full stack engineer with 4+ years of experience building and maintaining production SaaS applications using React.js, Next.js, TypeScript and JavaScript. I work on complex dashboards, real-time interfaces, interactive applications and AI-powered products, with a strong grounding in frontend architecture, state management, API integration, Next.js rendering strategies and application performance — plus hands-on experience in Node.js, GraphQL and PostgreSQL when a feature needs work on both sides of the API.",
  philosophy:
    "I care about the parts of a product users feel but never see: predictable state, honest loading states, fast first paint, and a codebase the next engineer can read. I work close to the product, ask why before how, and ship in small, reviewable increments.",
  location: "Lucknow, India",
  email: "niteshshukla1696@gmail.com",
  phone: "+91 79855 03761",
  phoneHref: "+917985503761",
  github: "https://github.com/Nitesh-10-shukla",
  linkedIn: "https://www.linkedin.com/in/nitesh-shukla-32a9051b6",
  twitter: "https://twitter.com/NiteshS84273251?s=08",
  leetcode: "https://leetcode.com/u/Shuklajiii_07/",
  resume: process.env.NEXT_PUBLIC_RESUME_URL ?? "",
  siteUrl: "https://niteshverse.vercel.app",
  availableForWork: true,
};

/** Whole years between `CAREER_START` and now, floored. */
export function yearsOfExperience(from: string = CAREER_START): number {
  const start = new Date(from);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const monthDelta = now.getMonth() - start.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < start.getDate())) years -= 1;
  return Math.max(years, 0);
}

/** Social links rendered in the hero, contact section and footer. */
export const socialLinks = [
  { label: "GitHub", href: personalData.github, icon: "github" },
  { label: "LinkedIn", href: personalData.linkedIn, icon: "linkedin" },
  { label: "X", href: personalData.twitter, icon: "x" },
  { label: "LeetCode", href: personalData.leetcode, icon: "leetcode" },
] as const;
