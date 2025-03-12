
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Preload all section backgrounds
    const preloadBackgrounds = () => {
      // Implementation would go here
    };
    
    preloadBackgrounds();
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
