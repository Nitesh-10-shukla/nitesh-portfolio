import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { educations } from "@/utils/data/educations";
import { GraduationIcon } from "@/components/ui/icons";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Academic <span className="text-gradient">background</span>
            </>
          }
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {educations.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 90} className="h-full">
                <SpotlightCard className="edge-glow flex h-full flex-col p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(56,189,248,0.1)] text-lg text-sky-300">
                    <GraduationIcon />
                  </span>
                  <p className="mt-5 font-mono text-[0.72rem] tracking-wide text-[var(--color-accent)]">
                    {item.duration}
                  </p>
                  <h3 className="mt-2 text-[1.02rem] font-semibold leading-snug text-[var(--color-fg)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-fg-muted)]">{item.institution}</p>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
