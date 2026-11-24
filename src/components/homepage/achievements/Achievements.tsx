import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { contributions, metrics } from "@/utils/data/achievements";
import { BriefcaseIcon, CheckIcon, LayersIcon, UsersIcon } from "@/components/ui/icons";

const GLYPHS = {
  briefcase: BriefcaseIcon,
  layers: LayersIcon,
  users: UsersIcon,
} as const;

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Impact"
          title={
            <>
              Measurable <span className="text-gradient">contributions</span>
            </>
          }
          lead="What the work actually looked like, and the numbers behind it."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => {
            const Icon = GLYPHS[metric.glyph];
            return (
              <Reveal key={metric.id} delay={index * 80}>
                <SpotlightCard className="edge-glow h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(22,242,179,0.1)] text-lg text-[var(--color-accent)]">
                    <Icon />
                  </span>
                  <p className="mt-5 text-4xl font-bold tracking-tight text-[var(--color-fg)]">
                    <Counter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-[var(--color-fg)]">{metric.label}</p>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-[var(--color-fg-muted)]">{metric.detail}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {contributions.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <SpotlightCard className="flex h-full gap-4 p-5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(22,242,179,0.12)] text-[0.7rem] text-[var(--color-accent)]">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="text-[0.95rem] font-semibold text-[var(--color-fg)]">{item.title}</h3>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-[var(--color-fg-muted)]">{item.detail}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
