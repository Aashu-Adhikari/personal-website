import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HorrorBackground } from "@/components/HorrorBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Logs } from "@/components/sections/Logs";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <HorrorBackground />
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Logs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
