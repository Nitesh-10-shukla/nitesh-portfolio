import AboutSection from "@/components/homepage/about/AboutSection";
import ContactSection from "@/components/homepage/contact/ContactSection";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import Projects from "@/components/homepage/projects/Projects";
import Resume from "@/components/homepage/resume/Resume";
import Skills from "@/components/homepage/skills/Skills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Resume />
      <ContactSection />
    </div>
  );
}
