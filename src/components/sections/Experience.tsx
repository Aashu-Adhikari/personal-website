import { SectionHeader } from "@/components/SectionHeader";
import { TerminalWindow } from "@/components/TerminalWindow";
import { experience } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function Experience() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader id="experience" prompt="git log --oneline ~/career" title="experience" />
        <div className="space-y-4">
          {experience.map((e, i) => (
            <ExpItem key={i} e={e} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpItem({ e, defaultOpen }: { e: (typeof experience)[number]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
      <TerminalWindow title={`commit ${e.company.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
        <button onClick={() => setOpen((v) => !v)} className="w-full text-left group">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2">
                <ChevronRight
                  size={14}
                  className={`text-primary transition-transform ${open ? "rotate-90" : ""}`}
                />
                <h3 className="text-base sm:text-lg text-bright">{e.role}</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-1 ml-5">
                <span className="text-primary">@</span> {e.company}
              </p>
            </div>
            <span className="text-[0.7rem] sm:text-xs text-dim sm:ml-5 ml-5 mt-1 sm:mt-0">{e.period}</span>
          </div>
        </button>

        {open && (
          <ul className="mt-5 space-y-2 ml-2 sm:ml-5 border-l border-border pl-4 sm:pl-5">
            {e.bullets.map((b, idx) => (
              <li
                key={idx}
                className="text-sm text-muted-foreground leading-relaxed"
                style={{ animation: `decrypt 0.5s ease-out ${idx * 50}ms both` }}
              >
                <span className="text-primary mr-2">›</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </TerminalWindow>
    </div>
  );
}
