import { Nav } from "@/components/Nav";
import { useTheme } from "@/contexts/ThemeContext";
import ProfessionalIndex from "./ProfessionalIndex";
import { Footer } from "@/components/Footer";
import { HorrorBackground } from "@/components/HorrorBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Blogs } from "@/components/sections/Logs";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const { theme } = useTheme();

  if (theme === "professional") {
    return <ProfessionalIndex />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <HorrorBackground />
      <div className="grain" aria-hidden />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
