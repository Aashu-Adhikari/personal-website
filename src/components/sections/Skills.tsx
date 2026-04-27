import { SectionHeader } from "@/components/SectionHeader";
import { skills } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";

export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const all = skills.flatMap((s) => s.items);
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container">
        <SectionHeader id="skills" prompt="ls -la ~/stack" title="stack" count={`// ${all.length} entries`} />

        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          {skills.map((s, idx) => (
            <div key={s.category} className="terminal-frame p-4">
              <div className="text-[0.65rem] text-primary/60 font-mono tracking-widest uppercase mb-3">
                IDX-0{idx + 1} // {s.category.toUpperCase().replace(/[^A-Z]+/g, "_")}
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                {s.items.map((i) => (
                  <li key={i} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">{i}</span>
                    </div>
                    <div className="h-[2px] w-full bg-border/20 overflow-hidden">
                      <div 
                        className="h-full bg-primary/40 group-hover:bg-primary transition-all duration-500" 
                        style={{ width: `${Math.floor(Math.random() * (95 - 70) + 70)}%` }} 
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* marquee */}
        <div className="mt-12 overflow-hidden border-y border-border py-3 bg-background/40">
          <div className="flex gap-10 whitespace-nowrap animate-marquee text-dim text-sm font-mono">
            {[...all, ...all].map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t}
                <span className="text-primary/50">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
