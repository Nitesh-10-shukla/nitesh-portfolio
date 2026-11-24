import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * One heading treatment shared by every section: a small accented eyebrow,
 * the section title, and an optional lead paragraph.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  icon,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  icon?: ReactNode;
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className={`eyebrow ${centered ? "justify-center" : ""}`}>
          {icon ? <span className="text-sm">{icon}</span> : <span className="h-px w-6 bg-[var(--color-accent)]" />}
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="h2 mt-3 text-[var(--color-fg)]">{title}</h2>
      </Reveal>
      {lead ? (
        <Reveal delay={140}>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--color-fg-muted)] md:text-base">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
