# Nitesh Shukla — Full Stack AI Engineer Portfolio

Personal portfolio of **Nitesh Shukla**, a full stack AI engineer with 4+ years building production SaaS
applications in React.js, Next.js and TypeScript — complex dashboards, real-time interfaces and
AI-powered products, backed by Node.js, GraphQL and PostgreSQL.

🔗 **Live:** [niteshverse.vercel.app](https://niteshverse.vercel.app/)

---

## Highlights

- **15+ products shipped** to production across performance marketing, travel, fintech, careers,
  AI, CRM and education (the Projects section shows the ones that can be published)
- **MediaIntercept** — multi-tenant affiliate marketing SaaS: reporting dashboards, invoicing and
  payouts across four role-based portals (Next.js 16, React 19, Apollo Client, GraphQL, PostgreSQL)
- Reusable component libraries and shared frontend architecture across multiple client products
- Performance work: removed unnecessary polling in favour of server-driven refresh strategies
- Production hardening: API rate limiting, reCAPTCHA, IP-spoofing prevention, GitLab CI/CD

---

## Contact

- **Location:** Lucknow, India
- **Email:** [niteshshukla1696@gmail.com](mailto:niteshshukla1696@gmail.com)
- **Phone:** +91 79855 03761
- **GitHub:** [Nitesh-10-shukla](https://github.com/Nitesh-10-shukla)
- **LinkedIn:** [nitesh-shukla-32a9051b6](https://www.linkedin.com/in/nitesh-shukla-32a9051b6)
- **LeetCode:** [Shuklajiii_07](https://leetcode.com/u/Shuklajiii_07/)

---

## Tech stack

| Area      | Choice                                                        |
| --------- | ------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack)                             |
| UI        | React 19, TypeScript 5                                         |
| Styling   | Tailwind CSS 4 with a token-based design system in `globals.css` |
| Images    | `sharp` (also used to generate the icons and OG image)         |
| Analytics | `@vercel/speed-insights`                                       |

The runtime dependency list is deliberately short. Animation, marquees, icons and toasts are all
hand-rolled with CSS and small local components rather than extra packages, which keeps the
critical path light.

## Architecture

```
src/
  app/              # App Router entry, metadata, JSON-LD, sitemap, robots
  components/
    ui/             # Design-system primitives (Reveal, SpotlightCard, Counter, icons, …)
    helper/         # Page chrome (scroll progress, back-to-top, error fallback)
    homepage/       # One folder per section
  utils/data/       # All content lives here — edit these files, not the components
```

Every section is a **server component**; only genuinely interactive leaves are client components
(navigation, skill filter, counters, reveal observers). Content is kept in
`src/utils/data/*` so copy changes never require touching JSX. Those files mirror the résumé —
update them when the résumé changes, and the hero, skills, experience and impact sections follow.

Note that `PROJECTS_DELIVERED` in `personal-data.ts` is the **total** number of products shipped and
is deliberately separate from `projectsData.length`, which is the curated subset shown on the page.
Bump the constant when more ship; the hero stat, the Impact tile and the Projects lead all read from
it.

### Design system

Colour, spacing, radii and motion are defined as custom properties at the top of
`src/app/globals.css`. Component classes (`.btn`, `.chip`, `.surface`, `.section`, `.timeline`, …)
live inside `@layer components`, so Tailwind utilities always win when you need a one-off override.

### Motion & accessibility

- Scroll reveals use one shared `IntersectionObserver`; the hiding styles sit behind a `.js` class
  added in `<head>`, so content stays visible without JavaScript.
- Everything respects `prefers-reduced-motion`.
- Semantic landmarks, a skip link, visible focus rings and AA-contrast text throughout.

---

## Getting started

### Prerequisites

- Node.js 20 or later
- npm (or yarn / pnpm / bun)

### Install and run

```bash
git clone https://github.com/Nitesh-10-shukla/next_portfolio.git
cd next_portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Script              | What it does                     |
| ------------------- | -------------------------------- |
| `npm run dev`       | Dev server with Turbopack        |
| `npm run build`     | Production build                 |
| `npm run start`     | Serve the production build       |
| `npm run lint`      | ESLint (flat config)             |
| `npm run typecheck` | `tsc --noEmit`                   |

### Environment variables

Create `.env.local`:

```bash
# PDF shown in the Résumé section and linked from the hero/nav.
NEXT_PUBLIC_RESUME_URL=https://…/nitesh-resume.pdf
```

That's the only variable the site needs.

### Regenerating brand assets

The favicon, PWA icons and Open Graph image are generated from `public/icon.svg` with `sharp` —
there are no photographs anywhere in the project.

---

## Deployment

Deployed on **Vercel**. Push to the connected branch, set the environment variables above in the
project settings, and Vercel handles the rest. The home page uses `revalidate = 86400` so the
date-derived figures (tenure, years of experience) stay current without a redeploy.

---

## License

MIT.
