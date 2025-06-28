import React, { Suspense } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";

// Lazy load sections
const AboutSection = React.lazy(() => import("../components/AboutSection").then(module => ({ default: module.AboutSection })));
const SkillsSection = React.lazy(() => import("../components/SkillsSection").then(module => ({ default: module.SkillsSection })));
const ProjectsSection = React.lazy(() => import("../components/ProjectsSection").then(module => ({ default: module.ProjectsSection })));
const ContactSection = React.lazy(() => import("../components/ContactSection").then(module => ({ default: module.ContactSection })));

// A simple loader component
const SectionLoader = () => (
  <div className="flex justify-center items-center h-64">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <Suspense fallback={<SectionLoader />}>
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                </Suspense>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};
