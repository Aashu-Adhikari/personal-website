import { SectionHeader } from "@/components/SectionHeader";
import { TerminalWindow } from "@/components/TerminalWindow";
import { experience } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";
import { useState } from "react";
import { ChevronRight, TerminalSquare, List } from "lucide-react";
import { ExperienceCLI } from "./ExperienceCLI";

export function Experience() {
  const [view, setView] = useState<'accordion' | 'cli'>('accordion');

  return (
    <section className="py-20 min-h-screen">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionHeader id="experience" prompt="git log --oneline ~/career" title="experience" className="mb-0" />
          
          <div className="flex items-center gap-1 bg-secondary/30 p-1 rounded-md border border-border/50">
            <button
              onClick={() => setView('accordion')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                view === 'accordion' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-bright'
              }`}
            >
              <List size={14} />
              List
            </button>
            <button
              onClick={() => setView('cli')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                view === 'cli' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-bright'
              }`}
            >
              <TerminalSquare size={14} />
              CLI
            </button>
          </div>
        </div>
        
        {view === 'accordion' ? <DefaultExperience /> : <ExperienceCLI />}
      </div>
    </section>
  );
}

function DefaultExperience() {
  return (
    <div className="space-y-4 animate-fade-in">
      {experience.map((e, i) => (
        <ExpItem key={i} e={e} defaultOpen={false} />
      ))}
    </div>
  );
}

function ExpItem({ e, defaultOpen }: { e: (typeof experience)[number]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
      <TerminalWindow title={`mission_log // ${e.company.toLowerCase().replace(/[^a-z]+/g, "_")}`}>
        <button onClick={() => setOpen((v) => !v)} className="w-full text-left group">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2">
                <ChevronRight
                  size={14}
                  className={`text-primary transition-transform ${open ? "rotate-90" : ""}`}
                />
                <h3 className="text-sm sm:text-base text-bright font-mono uppercase tracking-tight">{e.role}</h3>
              </div>
              <p className="text-xs text-muted-foreground mt-1 ml-5 font-mono uppercase tracking-widest opacity-60">
                <span className="text-primary">@</span> {e.company} // COMPLETED_DEPLOYS
              </p>
            </div>
            <span className="text-[0.65rem] text-dim sm:ml-5 ml-5 mt-1 sm:mt-0 font-mono tracking-widest uppercase">{e.period}</span>
          </div>
        </button>

        {open && (
          <div className="mt-6 ml-2 sm:ml-5 space-y-4">
            <div className="text-[0.6rem] text-primary/40 font-mono tracking-widest uppercase mb-2">
              OPERATIONAL_HIGHLIGHTS
            </div>
            <ul className="space-y-3 border-l border-border/20 pl-4 sm:pl-5">
              {e.bullets.map((b, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
                  style={{ animation: `decrypt 0.5s ease-out ${idx * 50}ms both` }}
                >
                  <span className="text-primary/60 mr-2">›</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </TerminalWindow>
    </div>
  );
}
