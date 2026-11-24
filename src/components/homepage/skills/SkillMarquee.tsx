import SkillIcon from "@/components/ui/SkillIcon";
import { skillsData } from "@/utils/data/skills";
import type { Skill } from "@/utils/data/skills";

/**
 * Two counter-scrolling rows of the full skill list.
 *
 * Pure CSS (`transform` on a duplicated track), so there's no JavaScript, no
 * layout thrash and no extra dependency; it pauses on hover and stops entirely
 * under `prefers-reduced-motion`.
 */
function Row({ skills, duration, reverse = false }: { skills: Skill[]; duration: number; reverse?: boolean }) {
  // The track is rendered twice; the animation translates by exactly -50%.
  const track = [...skills, ...skills];

  return (
    <div className="marquee-mask overflow-hidden py-1.5">
      <ul
        className="marquee gap-3"
        style={{
          ["--marquee-duration" as string]: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {track.map((skill, index) => (
          <li
            key={`${skill.name}-${index}`}
            aria-hidden={index >= skills.length}
            className="flex shrink-0 items-center gap-2 rounded-lg border border-[var(--color-line-soft)] bg-white/[0.02] px-3 py-2 text-[0.78rem] text-[#c6cee4]"
          >
            <SkillIcon skill={skill} size={16} />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillMarquee() {
  const half = Math.ceil(skillsData.length / 2);

  return (
    <div aria-label="All technologies" className="select-none">
      <Row skills={skillsData.slice(0, half)} duration={58} />
      <Row skills={skillsData.slice(half)} duration={68} reverse />
    </div>
  );
}
