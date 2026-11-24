import { projectsData } from "./projects-data";
import { PROJECTS_DELIVERED, yearsOfExperience } from "./personal-data";

export type Metric = {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail: string;
  glyph: "briefcase" | "layers" | "users";
};

/**
 * Headline numbers, all traceable to the résumé or derived from the project
 * data so they can't drift out of sync with the rest of the page.
 */
export const metrics: Metric[] = [
  {
    id: "experience",
    value: yearsOfExperience(),
    suffix: "+",
    label: "Years in production",
    detail: "Building and maintaining SaaS applications used by real customers, not prototypes.",
    glyph: "briefcase",
  },
  {
    id: "platforms",
    value: PROJECTS_DELIVERED,
    suffix: "+",
    label: "Products shipped",
    detail: `Across performance marketing, travel, fintech, careers, AI, CRM and education — ${projectsData.length} of them featured below.`,
    glyph: "layers",
  },
  {
    id: "portals",
    value: 4,
    label: "Role-based portals",
    detail: "Admin/Employee, Publisher, Advertiser and Public, served from one multi-tenant codebase.",
    glyph: "users",
  },
];

/** Qualitative contributions, taken from the résumé's role and project bullets. */
export const contributions: { title: string; detail: string }[] = [
  {
    title: "Reusable component systems",
    detail:
      "Built shared component libraries, frontend utilities and scalable application architecture used across multiple client products.",
  },
  {
    title: "Performance engineering",
    detail:
      "Cut unnecessary polling and introduced server-driven refresh strategies, then tuned render paths and data fetching to keep dashboards responsive.",
  },
  {
    title: "Correctness under the hood",
    detail:
      "Tracked down timezone and DST bugs affecting reports, billing adjustments and invoices, fixing date handling across the frontend, GraphQL resolvers and PostgreSQL.",
  },
  {
    title: "Platform migration",
    detail:
      "Helped move tracking from Everflow to an in-house system — historical data reconciliation, attribution handling and resync tooling — plus the ConvertKit (Kit) publisher integration.",
  },
  {
    title: "Production security & reliability",
    detail:
      "API rate limiting, reCAPTCHA, client-IP spoofing prevention, authentication safeguards, database optimisation and GitLab CI/CD workflows.",
  },
  {
    title: "Review & mentoring",
    detail:
      "Reviewed code, mentored junior developers and worked with cross-functional teams on application architecture and release planning.",
  },
];
