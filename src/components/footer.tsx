import Link from "next/link";
import SocialLinks from "./ui/SocialLinks";
import { personalData } from "@/utils/data/personal-data";

const SITEMAP = [
  { name: "About", id: "about" },
  { name: "Impact", id: "achievements" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-[var(--color-line-soft)] bg-[rgba(5,7,15,0.6)]">
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

      <div className="shell py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <Link href="#top" className="inline-flex items-center gap-2.5" aria-label="Back to top">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 font-mono text-sm font-bold text-white">
                {personalData.initials}
              </span>
              <span className="text-sm font-semibold tracking-tight text-[var(--color-fg)]">
                {personalData.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[0.85rem] leading-relaxed text-[var(--color-fg-muted)]">
              {personalData.designation} building production SaaS applications with React.js, Next.js and
              TypeScript — plus the Node.js, GraphQL and PostgreSQL work behind them.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-fg-faint)]">Sections</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {SITEMAP.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="text-[0.85rem] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-line-soft)] pt-6 text-center md:flex-row md:text-left">
          <p className="text-[0.8rem] text-[var(--color-fg-faint)]">
            © {new Date().getFullYear()} {personalData.name}. Built with Next.js and Tailwind CSS.
          </p>
          <a
            href={`mailto:${personalData.email}`}
            className="text-[0.8rem] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            {personalData.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
