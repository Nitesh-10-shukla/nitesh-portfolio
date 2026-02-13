import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import HeroSection from "@/components/homepage/hero-section/HeroSection";
import FallbackComponent from "@/components/helper/FallbackComponent";

// Lazy load ALL below-fold sections for mobile performance
const AboutSection = dynamic(() => import("@/components/homepage/about/AboutSection"), { ssr: true });
const Experience = dynamic(() => import("@/components/homepage/experience/Experience"), { ssr: true });
const Skills = dynamic(() => import("@/components/homepage/skills/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/homepage/projects/Projects"), { ssr: true });
const Resume = dynamic(() => import("@/components/homepage/resume/Resume"), { ssr: true });
const Education = dynamic(() => import("@/components/homepage/education/Education"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/homepage/contact/ContactSection"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <HeroSection />
        <Suspense fallback={null}>
          <AboutSection />
          <Experience />
          <Skills />
        </Suspense>
        <Suspense fallback={null}>
          <Projects />
          <Resume />
          <Education />
          <ContactSection />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}