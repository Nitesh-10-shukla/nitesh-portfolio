import { ErrorBoundary } from "react-error-boundary";

import FallbackComponent from "@/components/helper/FallbackComponent";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import AboutSection from "@/components/homepage/about/AboutSection";
import Achievements from "@/components/homepage/achievements/Achievements";
import Experience from "@/components/homepage/experience/Experience";
import Skills from "@/components/homepage/skills/Skills";
import Projects from "@/components/homepage/projects/Projects";
import Education from "@/components/homepage/education/Education";
import Resume from "@/components/homepage/resume/Resume";
import ContactSection from "@/components/homepage/contact/ContactSection";

/**
 * Experience lengths and "years shipping" are derived from the current date,
 * so the static page is regenerated once a day rather than freezing at the
 * moment of the last deploy.
 */
export const revalidate = 86400;

/**
 * Every section is a server component and ships as static HTML; the only
 * client code is the handful of interactive leaves (nav, filters, counters,
 * reveal observers, contact form), so there is nothing to lazy-load.
 */
export default function Home() {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <HeroSection />
      <div className="shell">
        <div className="rule" />
      </div>
      <AboutSection />
      <Achievements />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <ContactSection />
    </ErrorBoundary>
  );
}
