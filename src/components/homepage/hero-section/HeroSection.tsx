import CustomLink from "@/components/ui/CustomLink";
import SkillIcon from "@/components/ui/SkillIcon";
import RoleRotator from "@/components/ui/RoleRotator";
import SocialLinks from "@/components/ui/SocialLinks";
import StackTerminal from "./StackTerminal";
import { PROJECTS_DELIVERED, personalData, yearsOfExperience } from "@/utils/data/personal-data";
import { coreStack, skillsData } from "@/utils/data/skills";
import { ArrowRightIcon, DownloadIcon, MailIcon } from "@/components/ui/icons";

const quickStats = [
  { value: `${yearsOfExperience()}+`, label: "Years shipping production code" },
  { value: `${PROJECTS_DELIVERED}+`, label: "Products shipped to production" },
  { value: `${skillsData.length}`, label: "Technologies in the toolkit" },
];

/**
 * Deliberately free of scroll-reveal animation.
 *
 * Everything here is above the fold, so it paints with the server HTML. Wrapping
 * it in `Reveal` meant the headline sat at `opacity: 0` until JavaScript had
 * loaded, hydrated and run a 700ms transition — pushing LCP from ~140ms to
 * ~1100ms for no visual gain. Motion in the hero comes from the typing rotator,
 * the availability pulse and hover states instead; reveals start below the fold.
 */
export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          {/* ------------------------------ Copy ------------------------------ */}
          <div>
            {personalData.availableForWork ? (
              <p className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(22,242,179,0.3)] bg-[rgba(22,242,179,0.07)] px-3.5 py-1.5 text-xs font-medium tracking-wide text-[var(--color-accent)]">
                <span className="pulse-dot" />
                Available for new opportunities
              </p>
            ) : null}

            <h1 className="display mt-5 text-[var(--color-fg)]">{personalData.name}</h1>

            <p className="mt-3 text-lg font-semibold tracking-tight text-[var(--color-fg)] sm:text-xl md:text-2xl">
              {personalData.designation}
              <span className="mx-2.5 text-[var(--color-fg-faint)]">/</span>
              <RoleRotator roles={personalData.specialisations} />
            </p>

            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
              {personalData.tagline}
            </p>

            {/* Core stack — the fastest answer to "what do they work in?" */}
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Core technologies">
              {coreStack.map((skill) => (
                <li key={skill.name} className="chip chip-interactive">
                  <SkillIcon skill={skill} size={16} />
                  {skill.name}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <CustomLink href="#projects" className="btn btn-primary w-full sm:w-auto">
                View Projects
                <ArrowRightIcon className="text-base" />
              </CustomLink>

              {personalData.resume ? (
                <a
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nitesh-Shukla-Resume.pdf"
                  className="btn btn-ghost w-full sm:w-auto"
                >
                  Download Resume
                  <DownloadIcon className="text-base" />
                </a>
              ) : (
                <CustomLink href="#resume" className="btn btn-ghost w-full sm:w-auto">
                  View Resume
                  <DownloadIcon className="text-base" />
                </CustomLink>
              )}

              <CustomLink href="#contact" className="btn btn-ghost w-full sm:w-auto">
                Contact Me
                <MailIcon className="text-base" />
              </CustomLink>
            </div>

            <div className="mt-9">
              <SocialLinks />
            </div>
          </div>

          {/* ---------------------------- Terminal ---------------------------- */}
          <div>
            <StackTerminal />
          </div>
        </div>

        {/* ----------------------------- Quick stats ---------------------------- */}
        <dl className="mt-14 grid grid-cols-1 divide-y divide-[var(--color-line-soft)] rounded-2xl border border-[var(--color-line-soft)] bg-[rgba(255,255,255,0.02)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {quickStats.map((stat) => (
            <div key={stat.label} className="px-6 py-5 text-center sm:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-bold tracking-tight text-[var(--color-fg)] md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs tracking-wide text-[var(--color-fg-muted)] md:text-sm">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
