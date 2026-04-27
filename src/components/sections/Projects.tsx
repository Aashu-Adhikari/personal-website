import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container">
        <SectionHeader id="projects" prompt="find ~/projects -type d" title="projects" count={`// ${projects.length} repos`} />
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Card key={p.slug} p={p} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ p, delay }: { p: (typeof projects)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"} style={{ animationDelay: `${delay}ms` }}>
      <Link to={`/projects/${p.slug}`} className="block group">
        <article className="terminal-frame scan-sweep p-5 sm:p-6 h-full transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs text-dim font-mono">~/projects/{p.slug}</div>
              <h3 className="mt-2 text-xl text-bright group-hover:text-primary transition-colors">
                {p.name}
              </h3>
            </div>
            <ArrowUpRight
              size={18}
              className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
            />
          </div>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs">
            <span className="text-dim">{p.role ?? "engineer"}</span>
            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">open file →</span>
          </div>
        </article>
      </Link>
    </div>
  );
}
