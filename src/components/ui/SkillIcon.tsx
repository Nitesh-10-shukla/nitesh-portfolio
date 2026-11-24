import Image from "next/image";
import { getSkillImage } from "@/utils/skill-image";
import type { Skill } from "@/utils/data/skills";

/** Brand-adjacent tints for monogram tiles, picked deterministically by name. */
const TINTS = [
  "from-violet-500/25 to-violet-500/5 text-violet-200",
  "from-pink-500/25 to-pink-500/5 text-pink-200",
  "from-emerald-400/25 to-emerald-400/5 text-emerald-200",
  "from-sky-400/25 to-sky-400/5 text-sky-200",
  "from-amber-400/25 to-amber-400/5 text-amber-200",
];

function hash(value: string): number {
  let total = 0;
  for (let i = 0; i < value.length; i += 1) total = (total * 31 + value.charCodeAt(i)) >>> 0;
  return total;
}

/** "OpenAI API" -> "OA", "JWT" -> "JWT", "Redis" -> "R". */
function monogram(name: string): string {
  const words = name.split(/[\s.]+/).filter(Boolean);
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
  const word = words[0] ?? "";
  if (word.length <= 3 && word === word.toUpperCase()) return word;
  return word.slice(0, 1).toUpperCase();
}

/**
 * A skill's logo, or a monogram tile when no logo exists. Keeping the fallback
 * visually distinct (rather than reusing one generic glyph) stops the grid from
 * looking like a set of broken images.
 */
export default function SkillIcon({ skill, size = 20 }: { skill: Skill; size?: number }) {
  const image = getSkillImage(skill.icon);

  if (image) {
    return (
      <Image
        src={image}
        alt=""
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
        aria-hidden
      />
    );
  }

  const tint = TINTS[hash(skill.name) % TINTS.length];

  return (
    <span
      aria-hidden
      className={`grid place-items-center rounded-[0.3rem] bg-gradient-to-br font-semibold leading-none ${tint}`}
      style={{ width: size, height: size, fontSize: Math.max(size * 0.42, 8) }}
    >
      {monogram(skill.name)}
    </span>
  );
}
