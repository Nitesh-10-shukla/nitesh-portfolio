import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ResumeViewer from "./ResumeViewer";
import { personalData } from "@/utils/data/personal-data";
import { DownloadIcon, ExternalLinkIcon } from "@/components/ui/icons";

export default function Resume() {
  if (!personalData.resume) return null;

  return (
    <section id="resume" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Résumé"
          title={
            <>
              The one-page <span className="text-gradient">version</span>
            </>
          }
          lead="Prefer a PDF? Read it here or take a copy."
        />

        <Reveal className="mt-10">
          <ResumeViewer src={personalData.resume} />
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={personalData.resume}
              download="Nitesh-Shukla-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download PDF
              <DownloadIcon className="text-base" />
            </a>
            <a href={personalData.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Open in new tab
              <ExternalLinkIcon className="text-base" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
