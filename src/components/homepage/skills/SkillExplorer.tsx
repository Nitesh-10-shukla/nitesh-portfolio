"use client";

import { useState } from "react";
import SkillIcon from "@/components/ui/SkillIcon";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { SkillCategory } from "@/utils/data/skills";
import {
  CloudIcon,
  DatabaseIcon,
  FlaskIcon,
  FlowIcon,
  LayersIcon,
  PaletteIcon,
  PuzzleIcon,
  ServerIcon,
  SparkIcon,
} from "@/components/ui/icons";

const GLYPHS = {
  layers: LayersIcon,
  flow: FlowIcon,
  palette: PaletteIcon,
  flask: FlaskIcon,
  puzzle: PuzzleIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  spark: SparkIcon,
  cloud: CloudIcon,
} as const;

const ALL = "all";

/**
 * Category filter over the skill grid.
 *
 * Filtering happens client-side on an already-rendered list, so every skill is
 * in the HTML for crawlers and for anyone without JavaScript — the filter is an
 * enhancement, not a gate.
 */
export default function SkillExplorer({ categories }: { categories: SkillCategory[] }) {
  const [active, setActive] = useState<string>(ALL);
  const visible = active === ALL ? categories : categories.filter((category) => category.id === active);

  const filters = [{ id: ALL, title: "All" }, ...categories.map((c) => ({ id: c.id, title: c.title }))];

  return (
    <div>
      <div role="tablist" aria-label="Filter skills by area" className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const selected = active === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(filter.id)}
              className={`min-h-[2.5rem] rounded-full border px-4 text-[0.8rem] font-medium transition-all duration-300 ${
                selected
                  ? "border-transparent bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-[0_8px_24px_-12px_rgba(236,72,153,0.9)]"
                  : "border-[var(--color-line-soft)] bg-white/[0.02] text-[var(--color-fg-muted)] hover:-translate-y-0.5 hover:border-[#3b4573] hover:text-[var(--color-fg)]"
              }`}
            >
              {filter.title}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map((category, index) => {
          const Glyph = GLYPHS[category.glyph];
          // With an odd number of cards, the last one fills the row instead of
          // leaving a gap beside it.
          const spansRow = visible.length > 1 && visible.length % 2 === 1 && index === visible.length - 1;
          return (
            <SpotlightCard
              key={category.id}
              className={`edge-glow h-full p-6 ${spansRow ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(139,92,246,0.12)] text-lg text-violet-300">
                  <Glyph />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[1.02rem] font-semibold tracking-tight text-[var(--color-fg)]">
                    {category.title}
                    {/* Decorative count — kept out of the heading's accessible
                        name, which otherwise read "Core08". */}
                    <span
                      aria-hidden
                      className="ml-2 font-mono text-[0.7rem] font-normal text-[var(--color-fg-faint)]"
                    >
                      {String(category.skills.length).padStart(2, "0")}
                    </span>
                  </h3>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-[var(--color-fg-muted)]">{category.blurb}</p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={`${category.id}-${skill.name}`} className="chip chip-interactive">
                    <SkillIcon skill={skill} size={16} />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
}
