"use client";

import { useId, useState } from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { Project } from "@/utils/data/projects-data";
import { ArrowRightIcon, CodeIcon, ExternalLinkIcon } from "@/components/ui/icons";

/** How many tech chips to show before collapsing the rest into a "+N". */
const VISIBLE_TOOLS = 6;

/** Words that shouldn't contribute a letter to a project monogram. */
const STOP_WORDS = new Set(["to", "of", "the", "and", "a", "an", "for", "in", "&"]);

function monogramFor(name: string): string {
  const words = name.split(/\s+/).filter((word) => !STOP_WORDS.has(word.toLowerCase()));
  if (words.length === 1) {
    // One word, but often a compound like "MediaIntercept" — use its capitals.
    const capitals = words[0].match(/[A-Z]/g);
    if (capitals && capitals.length >= 2) return capitals.slice(0, 2).join("");
  }
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/** Generated card artwork — a tinted mesh plus the project's monogram. */
function Artwork({ project, tall = false }: { project: Project; tall?: boolean }) {
  const [from, to] = project.accent;

  return (
    <div
      aria-hidden
      className={`relative overflow-hidden rounded-xl border border-[var(--color-line-soft)] ${
        tall ? "h-40 sm:h-48 lg:h-full lg:min-h-[16rem]" : "h-36 sm:h-40"
      }`}
      style={{
        background: `radial-gradient(120% 130% at 12% 8%, ${from}55 0%, transparent 58%), radial-gradient(110% 120% at 88% 95%, ${to}4d 0%, transparent 62%), #090d1c`,
      }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="absolute -bottom-3 left-4 font-mono text-[4.5rem] font-bold leading-none tracking-tighter text-white/[0.09] transition-transform duration-700 group-hover:translate-x-1.5 sm:text-[5.5rem]">
        {monogramFor(project.name)}
      </span>
      <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
        {project.domain}
      </span>
      <span
        className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full"
        style={{ background: to, boxShadow: `0 0 12px ${to}` }}
      />
    </div>
  );
}

function RoleBadge({ role }: { role: string }) {
  return (
    <p className="inline-flex w-fit items-center gap-1.5 rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[0.68rem] text-[var(--color-accent)]">
      <CodeIcon className="text-[0.7rem]" />
      {role}
    </p>
  );
}

function ToolList({ tools, limit }: { tools?: string[]; limit?: number }) {
  if (!tools?.length) return null;
  const shown = limit ? tools.slice(0, limit) : tools;
  const hidden = tools.length - shown.length;

  return (
    <ul className="flex flex-wrap gap-1.5">
      {shown.map((tool) => (
        <li key={tool} className="chip px-2 py-1 text-[0.7rem]">
          {tool}
        </li>
      ))}
      {hidden > 0 ? (
        <li
          className="chip px-2 py-1 text-[0.7rem] text-[var(--color-fg-faint)]"
          title={tools.slice(shown.length).join(", ")}
        >
          +{hidden} more
        </li>
      ) : null}
    </ul>
  );
}

/** Published outcome figures, where the product has them. */
function ImpactStats({ impact }: { impact?: Project["impact"] }) {
  if (!impact?.length) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {impact.map((stat) => (
        <li
          key={stat.label}
          className="rounded-lg border border-[var(--color-line-soft)] bg-white/[0.02] px-2.5 py-1.5"
        >
          <span className="block text-[0.95rem] font-bold leading-none text-[var(--color-accent)]">
            {stat.value}
          </span>
          <span className="mt-1 block text-[0.68rem] leading-none text-[var(--color-fg-muted)]">
            {stat.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Rendered only for projects with a public URL — internal products have none. */
function LiveLink({ project }: { project: Project }) {
  if (!project.demo) return null;
  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="group/cta inline-flex w-fit items-center gap-1.5 text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
    >
      Visit live site
      <ArrowRightIcon className="text-sm transition-transform duration-300 group-hover/cta:translate-x-1" />
    </a>
  );
}

/**
 * The lead project: full width, with its bullets shown in full rather than
 * hidden behind a "read more".
 */
export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <SpotlightCard as="article" className="edge-glow group p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(22,242,179,0.3)] bg-[rgba(22,242,179,0.07)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          <span className="pulse-dot h-1.5 w-1.5" />
          Latest work
        </span>
        {project.period ? (
          <span className="font-mono text-[0.72rem] text-[var(--color-fg-muted)]">{project.period}</span>
        ) : null}
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-8">
        <div className="flex flex-col gap-4">
          <Artwork project={project} tall />
          <RoleBadge role={project.role} />
          <ToolList tools={project.tools} />
          <ImpactStats impact={project.impact} />
          <LiveLink project={project} />
        </div>

        <div>
          <h3 className="text-xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-[70ch] text-[0.92rem] leading-relaxed text-[#c6cee4]">{project.summary}</p>

          {project.highlights?.length ? (
            <ul className="mt-5 space-y-2.5">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.85rem] leading-relaxed text-[var(--color-fg-muted)]"
                >
                  <span aria-hidden className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span className="max-w-[80ch]">{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();

  return (
    <SpotlightCard
      as="article"
      className={`edge-glow group h-full p-4 sm:p-5 ${
        wide ? "md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-6" : "flex flex-col"
      }`}
    >
      <Artwork project={project} tall={wide} />

      <div className={`flex flex-1 flex-col px-1 pt-5 ${wide ? "md:pt-0" : ""}`}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--color-fg)]">{project.name}</h3>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} in a new tab`}
              className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-line-soft)] text-[var(--color-fg-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <ExternalLinkIcon className="text-sm" />
            </a>
          ) : null}
        </div>

        <div className="mt-1.5">
          <RoleBadge role={project.role} />
        </div>

        <p className="mt-3 text-[0.88rem] leading-relaxed text-[#c6cee4]">{project.summary}</p>

        <div className="mt-2">
          <p
            id={detailsId}
            className={`text-[0.82rem] leading-relaxed text-[var(--color-fg-muted)] ${expanded ? "" : "clamp-3"}`}
          >
            {project.description}
          </p>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={detailsId}
            className="mt-1.5 text-[0.75rem] font-medium text-[var(--color-accent)] underline-offset-4 transition-colors hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>

        {project.impact?.length ? (
          <div className="mt-5">
            <ImpactStats impact={project.impact} />
          </div>
        ) : null}

        <div className="mt-5" aria-label={`Technologies used in ${project.name}`}>
          <ToolList tools={project.tools} limit={VISIBLE_TOOLS} />
        </div>

        <div className="mt-auto flex items-center gap-4 pt-5">
          <LiveLink project={project} />
          {project.code ? (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold uppercase tracking-wider text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              Source
              <CodeIcon className="text-sm" />
            </a>
          ) : null}
        </div>
      </div>
    </SpotlightCard>
  );
}
