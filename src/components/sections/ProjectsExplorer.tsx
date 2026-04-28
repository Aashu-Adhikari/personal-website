import { projects } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";
import { ArrowUpRight, Folder, FileCode2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProjectsExplorer() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [activeProject, setActiveProject] = useState(projects[0]);
  const navigate = useNavigate();

  return (
    <div ref={ref} className={`grid md:grid-cols-[300px_1fr] gap-6 ${inView ? "animate-fade-up" : "opacity-0"}`}>
      {/* Sidebar - File Tree */}
      <div className="terminal-frame p-4 h-[500px] overflow-y-auto">
        <div className="flex items-center gap-2 text-dim font-mono text-sm mb-4 border-b border-border/20 pb-2">
          <Folder size={16} />
          <span>~/projects</span>
        </div>
        <ul className="space-y-1 font-mono text-sm">
          {projects.map((p) => (
            <li key={p.slug}>
              <button
                onClick={() => setActiveProject(p)}
                onDoubleClick={() => navigate(`/projects/${p.slug}`)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 text-left transition-colors ${
                  activeProject.slug === p.slug
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-bright"
                }`}
              >
                <FileCode2 size={14} className={activeProject.slug === p.slug ? "text-primary" : "text-dim"} />
                {p.slug}.md
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Panel - Project Details */}
      <div 
        className="terminal-frame p-6 h-[500px] overflow-y-auto flex flex-col relative group cursor-pointer hover:border-primary/50 transition-colors"
        onClick={() => navigate(`/projects/${activeProject.slug}`)}
      >
        <div className="absolute top-4 right-4 text-xs font-mono text-dim">
          READ-ONLY
        </div>
        
        <h3 className="text-2xl font-bold text-bright mb-2 group-hover:text-primary transition-colors">
          # {activeProject.name}
        </h3>
        <p className="text-muted-foreground italic mb-6">"{activeProject.tagline}"</p>

        <div className="space-y-6 flex-1">
          <div>
            <h4 className="text-sm font-mono text-primary mb-2">## Description</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {/* If we had a long description we'd put it here, using tagline for now */}
              This project is a demonstration of skills. {activeProject.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-mono text-primary mb-2">## Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {activeProject.stack.map((s) => (
                <span key={s} className="px-2 py-1 bg-secondary text-xs font-mono text-dim">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-primary mb-2">## Role</h4>
            <span className="font-mono text-xs uppercase tracking-widest text-dim">
              {activeProject.role || "Engineer"}
            </span>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border/20 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-dim group-hover:text-primary transition-colors">
            ./execute.sh
          </span>
          <ArrowUpRight size={18} className="text-dim group-hover:text-primary transition-colors" />
        </div>
      </div>
    </div>
  );
}
