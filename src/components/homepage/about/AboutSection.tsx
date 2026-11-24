import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { personalData } from "@/utils/data/personal-data";
import { GaugeIcon, LayersIcon, SparkIcon, UsersIcon } from "@/components/ui/icons";

const PRINCIPLES = [
  {
    icon: LayersIcon,
    title: "Architecture first",
    detail: "Component boundaries and data flow decided before the first line — it's what keeps an app fast at month twelve.",
  },
  {
    icon: GaugeIcon,
    title: "Performance as a feature",
    detail: "Bundle size, render cost and Core Web Vitals treated as acceptance criteria, not an afterthought.",
  },
  {
    icon: SparkIcon,
    title: "AI where it earns its place",
    detail: "LLM features built against real product problems, with retrieval and guardrails rather than raw prompts.",
  },
  {
    icon: UsersIcon,
    title: "Built for the next engineer",
    detail: "Typed contracts, tested paths and readable code so the handover is boring in the best way.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Full stack, <span className="text-gradient">end to end</span>
            </>
          }
          lead={personalData.tagline}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
          <div>
            <Reveal>
              <p className="max-w-[68ch] text-[0.98rem] leading-[1.8] text-[var(--color-fg-muted)] md:text-base">
                {personalData.summary}
              </p>
            </Reveal>

            <Reveal delay={90}>
              <figure className="mt-8 max-w-[68ch] border-l-2 border-[var(--color-accent)] pl-5">
                <blockquote className="text-[0.98rem] leading-[1.8] text-[#c6cee4] md:text-base">
                  {personalData.philosophy}
                </blockquote>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--color-fg-faint)]">
                  How I work
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {PRINCIPLES.map(({ icon: Icon, title, detail }, index) => (
                <Reveal key={title} delay={index * 80}>
                  <SpotlightCard className="h-full p-5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(139,92,246,0.12)] text-base text-[var(--color-accent)]">
                      <Icon />
                    </span>
                    <h3 className="mt-4 text-[0.95rem] font-semibold text-[var(--color-fg)]">{title}</h3>
                    <p className="mt-2 text-[0.85rem] leading-relaxed text-[var(--color-fg-muted)]">{detail}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Diagram replaces the old profile photograph */}
          <Reveal delay={120} className="lg:sticky lg:top-28">
            <SpotlightCard className="p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-faint)]">
                How the pieces fit
              </p>
              <div className="mt-5 flex justify-center">
                <ArchitectureDiagram />
              </div>
              <p className="mt-5 text-[0.82rem] leading-relaxed text-[var(--color-fg-muted)]">
                A typical shape of the products I work on: a typed React and Next.js front end, a Node or NestJS
                service exposing GraphQL and REST, PostgreSQL and MongoDB behind a Redis cache, and AI features wired
                in where they add real value.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
