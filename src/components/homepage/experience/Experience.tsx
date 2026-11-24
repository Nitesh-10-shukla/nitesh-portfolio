import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { experiences, formatRange, formatTenure } from "@/utils/data/experience";
import { yearsOfExperience } from "@/utils/data/personal-data";
import { BriefcaseIcon, MapPinIcon } from "@/components/ui/icons";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve <span className="text-gradient">shipped</span>
            </>
          }
          lead={`${yearsOfExperience()}+ years of production SaaS work, owning features from design handoff through release.`}
        />

        <ol className="timeline mt-12 space-y-5">
          {experiences.map((role, index) => {
            const current = role.end === null;
            return (
              <li key={role.id} className="timeline-item relative">
                <span className="timeline-node" aria-hidden />
                <Reveal delay={index * 90}>
                  <SpotlightCard className="edge-glow p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="inline-flex items-center gap-2 rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[0.7rem] tracking-wide text-[var(--color-fg-muted)]">
                        {formatRange(role.start, role.end)}
                      </span>
                      <span className="text-[0.72rem] uppercase tracking-[0.14em] text-[var(--color-fg-faint)]">
                        {formatTenure(role.start, role.end)}
                      </span>
                      {current ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(22,242,179,0.3)] bg-[rgba(22,242,179,0.08)] px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                          <span className="pulse-dot h-1.5 w-1.5" />
                          Current
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-4 flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(139,92,246,0.12)] text-lg text-violet-300">
                        <BriefcaseIcon />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold tracking-tight text-[var(--color-fg)] sm:text-lg">
                          {role.title}
                        </h3>
                        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--color-fg-muted)]">
                          <span>{role.company}</span>
                          {role.location ? (
                            <>
                              <span aria-hidden className="text-[var(--color-fg-faint)]">
                                ·
                              </span>
                              <span className="inline-flex items-center gap-1 text-[0.82rem] text-[var(--color-fg-faint)]">
                                <MapPinIcon className="text-[0.8rem]" />
                                {role.location}
                              </span>
                            </>
                          ) : null}
                        </p>
                      </div>
                    </div>

                    {role.context ? (
                      <p className="mt-4 border-l-2 border-[var(--color-line)] pl-4 text-[0.84rem] leading-relaxed text-[var(--color-fg-faint)]">
                        {role.context}
                      </p>
                    ) : null}

                    {role.highlights?.length ? (
                      <ul className="mt-5 space-y-2.5">
                        {role.highlights.map((item) => (
                          <li key={item} className="flex gap-3 text-[0.88rem] leading-relaxed text-[var(--color-fg-muted)]">
                            <span
                              aria-hidden
                              className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                            />
                            <span className="max-w-[80ch]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </SpotlightCard>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
