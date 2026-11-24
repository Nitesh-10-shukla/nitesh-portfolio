export type Skill = {
  name: string;
  /** Key into `getSkillImage`. Omitted skills fall back to a monogram tile. */
  icon?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  blurb: string;
  /** Icon key rendered next to the category title. */
  glyph: "layers" | "flow" | "palette" | "flask" | "puzzle" | "server" | "database" | "spark" | "cloud";
  skills: Skill[];
};

/** Mirrors the Technical Skills section of the résumé. */
export const skillCategories: SkillCategory[] = [
  {
    id: "core",
    title: "Core",
    blurb: "The day-to-day stack: component architecture and Next.js rendering strategy.",
    glyph: "layers",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "App Router" },
      { name: "SSR / SSG / ISR" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
    ],
  },
  {
    id: "state-data",
    title: "State & Data",
    blurb: "Client state, caching and the data-fetching layer in front of an API.",
    glyph: "flow",
    skills: [
      { name: "Redux Toolkit", icon: "redux" },
      { name: "Zustand" },
      { name: "TanStack Query", icon: "tanstack" },
      { name: "Apollo Client", icon: "apollo" },
      { name: "Context API", icon: "react" },
      { name: "Axios" },
    ],
  },
  {
    id: "ui",
    title: "UI & Styling",
    blurb: "Design systems, component primitives and motion.",
    glyph: "palette",
    skills: [
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "shadcn/ui" },
      { name: "Radix UI" },
      { name: "Material UI", icon: "materialui" },
      { name: "Framer Motion" },
    ],
  },
  {
    id: "forms-testing",
    title: "Forms & Testing",
    blurb: "Typed form handling and the tests that keep it honest.",
    glyph: "flask",
    skills: [
      { name: "React Hook Form" },
      { name: "Zod" },
      { name: "Vitest", icon: "vitejs" },
      { name: "React Testing Library" },
    ],
  },
  {
    id: "extensions",
    title: "Browser & Extensions",
    blurb: "Shipping inside the browser itself, not just the page.",
    glyph: "puzzle",
    skills: [
      { name: "Chrome Extensions (MV3)" },
      { name: "Content Scripts" },
      { name: "Service Workers" },
      { name: "MutationObserver" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    blurb: "Services, contracts and the auth model around them.",
    glyph: "server",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
      { name: "REST APIs" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Apollo Server", icon: "apollo" },
      { name: "JWT" },
      { name: "OAuth", icon: "oauth" },
      { name: "RBAC" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    blurb: "Relational, document and vector stores, with the ORMs on top.",
    glyph: "database",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis" },
      { name: "TypeORM" },
      { name: "Prisma ORM" },
      { name: "pgvector" },
    ],
  },
  {
    id: "ai",
    title: "AI / LLM",
    blurb: "Retrieval, embeddings and speech, wired into real products.",
    glyph: "spark",
    skills: [
      { name: "OpenAI API" },
      { name: "GPT-4o" },
      { name: "Claude API" },
      { name: "RAG" },
      { name: "Embeddings" },
      { name: "Vector Search" },
      { name: "TTS" },
      { name: "ASR" },
    ],
  },
  {
    id: "devops",
    title: "Tools & DevOps",
    blurb: "Getting work from a branch to production predictably.",
    glyph: "cloud",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitLab" },
      { name: "GitHub Actions" },
      { name: "GitLab CI/CD", icon: "cicd" },
      { name: "Docker", icon: "docker" },
      { name: "PM2" },
      { name: "AWS S3", icon: "aws" },
      { name: "GCP Cloud Run", icon: "gcp" },
    ],
  },
];

/** Flat list used by the marquee. */
export const skillsData: Skill[] = skillCategories.flatMap((category) => category.skills);

/** The handful shown as the hero's "core stack" strip. */
export const coreStack: Skill[] = [
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Apollo Client", icon: "apollo" },
  { name: "GraphQL", icon: "graphql" },
  { name: "Node.js", icon: "nodejs" },
  { name: "NestJS", icon: "nestjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Redis" },
  { name: "OpenAI API" },
  { name: "RAG" },
];
