import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import AboutSection from "@/components/homepage/about/AboutSection";
import Experience from "@/components/homepage/experience/Experience";
import Skills from "@/components/homepage/skills/Skills";
import FallbackComponent from "@/components/helper/FallbackComponent";

const Projects = dynamic(() => import("@/components/homepage/projects/Projects"), { ssr: true });
const Resume = dynamic(() => import("@/components/homepage/resume/Resume"), { ssr: true });
const Education = dynamic(() => import("@/components/homepage/education/Education"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/homepage/contact/ContactSection"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
          <Projects />
          <Resume />
          <Education />
          {/* <Blog /> */}
          <ContactSection />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}