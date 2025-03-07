import AboutSection from "@/components/homepage/about/AboutSection";
import ContactSection from "@/components/homepage/contact/ContactSection";
import Education from "@/components/homepage/education/Education";
import Experience from "@/components/homepage/experience/Experience";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import Projects from "@/components/homepage/projects/Projects";
import Resume from "@/components/homepage/resume/Resume";
import Skills from "@/components/homepage/skills/Skills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Resume />
      <Education />
      <ContactSection />
    </div>
  );
}
