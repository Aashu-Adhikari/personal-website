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
          {skills.map((s) => (
            <div key={s.category} className="terminal-frame p-4">
              <div className="text-primary text-xs mb-3 font-mono">
                <span className="text-dim">drwx</span> {s.category.toLowerCase().replace(/[^a-z]+/g, "-")}/
              </div>
              <ul className="space-y-1.5 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                    <span className="text-dim">›</span> {i}
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
