import SectionHeading from "@/components/ui/SectionHeading";
import SkillExplorer from "./SkillExplorer";
import SkillMarquee from "./SkillMarquee";
import { skillCategories, skillsData } from "@/utils/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Technical Skills"
          title={
            <>
              The toolkit, <span className="text-gradient">organised</span>
            </>
          }
          lead={`${skillsData.length} technologies across ${skillCategories.length} areas. Filter by what you're hiring for.`}
        />

        <div className="mt-12">
          <SkillExplorer categories={skillCategories} />
        </div>
      </div>

      <div className="mt-14">
        <SkillMarquee />
      </div>
    </section>
  );
}
