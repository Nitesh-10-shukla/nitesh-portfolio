import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { personalData, socialLinks } from "@/utils/data/personal-data";
import {
  ArrowRightIcon,
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  XIcon,
} from "@/components/ui/icons";

const CHANNELS = [
  {
    icon: MailIcon,
    label: "Email",
    value: personalData.email,
    href: `mailto:${personalData.email}`,
    action: "Write to me",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: personalData.phone,
    href: `tel:${personalData.phoneHref}`,
    action: "Give me a call",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: personalData.location,
    href: null,
    action: "Open to remote work",
  },
];

const SOCIAL_ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  leetcode: LeetCodeIcon,
} as const;

/** Social handles, so each link shows what it actually points at. */
const SOCIAL_HANDLES: Record<string, string> = {
  GitHub: "Nitesh-10-shukla",
  LinkedIn: "nitesh-shukla",
  X: "@NiteshS84273251",
  LeetCode: "Shuklajiii_07",
};

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">worth shipping</span>
            </>
          }
          lead="Hiring, contracting, or just comparing notes on an architecture problem — the fastest way to reach me is email."
        />

        {/* Primary call to action */}
        <Reveal delay={120}>
          <div className="mx-auto mt-10 flex max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            {/* The address is long, so it shrinks and may wrap on narrow phones. */}
            <a
              href={`mailto:${personalData.email}`}
              className="btn btn-primary whitespace-normal text-[0.72rem] sm:text-[0.82rem]"
            >
              {personalData.email}
              <ArrowRightIcon className="shrink-0 text-base" />
            </a>
            <a href={`tel:${personalData.phoneHref}`} className="btn btn-ghost">
              {personalData.phone}
              <PhoneIcon className="shrink-0 text-base" />
            </a>
          </div>
        </Reveal>

        {/* Direct channels */}
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {CHANNELS.map(({ icon: Icon, label, value, href, action }, index) => {
            const body = (
              <>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(22,242,179,0.1)] text-xl text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-105">
                  <Icon />
                </span>
                <span className="mt-5 block text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-fg-faint)]">
                  {label}
                </span>
                <span className="mt-1.5 block break-words text-[1.02rem] font-medium text-[var(--color-fg)]">
                  {value}
                </span>
                <span className="mt-2 block text-[0.82rem] text-[var(--color-fg-muted)]">{action}</span>
              </>
            );

            return (
              <li key={label}>
                <Reveal delay={index * 80} className="h-full">
                  <SpotlightCard className="edge-glow group h-full">
                    {href ? (
                      <a href={href} className="block h-full p-6">
                        {body}
                      </a>
                    ) : (
                      <div className="h-full p-6">{body}</div>
                    )}
                  </SpotlightCard>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Profiles */}
        <Reveal delay={120}>
          <div className="mt-4">
            <SpotlightCard className="p-6 sm:p-8">
              <p className="text-center text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-fg-faint)]">
                Find me elsewhere
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {socialLinks.map(({ label, href, icon }) => {
                  const Icon = SOCIAL_ICONS[icon];
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} profile (opens in a new tab)`}
                        className="flex min-h-[3.5rem] items-center gap-3 rounded-xl border border-[var(--color-line-soft)] bg-white/[0.02] px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(22,242,179,0.45)] hover:bg-[rgba(22,242,179,0.06)]"
                      >
                        <span className="text-lg text-[var(--color-fg-muted)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                          <Icon />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[0.9rem] font-medium text-[var(--color-fg)]">{label}</span>
                          <span className="block truncate text-[0.75rem] text-[var(--color-fg-muted)]">
                            {SOCIAL_HANDLES[label]}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </SpotlightCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
