import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/portfolio";
import { ProjectsExplorer } from "./ProjectsExplorer";

export function Projects() {
  return (
    <section className="py-20 bg-secondary/20 min-h-screen">
      <div className="container">
        <SectionHeader id="projects" prompt="find ~/projects -type d" title="projects" count={`// ${projects.length} repos`} />
        
        <ProjectsExplorer />
      </div>
    </section>
  );
}


