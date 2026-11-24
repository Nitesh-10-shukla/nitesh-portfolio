export type Experience = {
  id: number;
  title: string;
  company: string;
  location?: string;
  /** ISO month, used to render the range and compute tenure. */
  start: string;
  /** `null` means the role is current. */
  end: string | null;
  /** One line on what the company does. */
  context?: string;
  /** Résumé bullets for the role. */
  highlights?: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Devtrust",
    location: "Lucknow, India",
    start: "2022-05-01",
    end: null,
    context:
      "Product engineering agency delivering SaaS applications across performance marketing, travel, AI, CRM and education.",
    highlights: [
      "Developed and maintained production SaaS applications using React.js, Next.js, TypeScript and Tailwind CSS, delivering features from design handoff through production release.",
      "Built reusable component libraries, shared frontend utilities and scalable application architecture across multiple client products.",
      "Implemented GraphQL and REST integrations, application state management, data-fetching strategies and responsive interfaces for complex user workflows.",
      "Optimised frontend performance, resolved production issues, reviewed code, mentored junior developers and collaborated with cross-functional teams on application architecture and releases.",
    ],
  },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatMonth(iso: string): string {
  const date = new Date(iso);
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : "Present"}`;
}

/** Human tenure, e.g. "3 yrs 6 mos". */
export function formatTenure(start: string, end: string | null): string {
  const from = new Date(start);
  const to = end ? new Date(end) : new Date();
  const totalMonths = Math.max(
    (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + 1,
    1
  );
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
}
