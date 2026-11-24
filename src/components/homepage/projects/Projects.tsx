import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard, { FeaturedProjectCard } from "./project-card";
import { projectsData } from "@/utils/data/projects-data";
import { PROJECTS_DELIVERED } from "@/utils/data/personal-data";

export default function Projects() {
  const featured = projectsData.find((project) => project.featured);
  const rest = projectsData.filter((project) => project !== featured);

  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Products running in <span className="text-gradient">production</span>
            </>
          }
          lead={`${projectsData.length} of the ${PROJECTS_DELIVERED}+ products I've shipped — the ones I can show publicly, most recent first.`}
        />

        {featured ? (
          <Reveal className="mt-12">
            <FeaturedProjectCard project={featured} />
          </Reveal>
        ) : null}

        <div className={`grid gap-5 md:grid-cols-2 ${featured ? "mt-5" : "mt-12"}`}>
          {rest.map((project, index) => {
            // A trailing odd card stretches across the row rather than
            // leaving an obvious hole next to it.
            const spansRow = index === rest.length - 1 && rest.length % 2 === 1;
            return (
              <Reveal
                key={project.id}
                delay={(index % 2) * 90}
                className={`h-full ${spansRow ? "md:col-span-2" : ""}`}
              >
                <ProjectCard project={project} wide={spansRow} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
