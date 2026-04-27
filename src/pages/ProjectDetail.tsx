import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HorrorBackground } from "@/components/HorrorBackground";
import { TerminalWindow } from "@/components/TerminalWindow";
import { projects } from "@/data/portfolio";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const idx = projects.findIndex((p) => p.slug === slug);
  const p = projects[idx];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (p) document.title = `~/${p.slug} // ashutosh.adhikari`;
  }, [p]);

  if (!p) return <Navigate to="/404" replace />;

  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <HorrorBackground />
      <div className="grain" aria-hidden />
      <Nav />
      <main className="container py-16 sm:py-24 max-w-5xl relative z-10">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} /> back to projects
        </Link>

        <div className="text-sm text-dim font-mono mb-4">
          ~/projects/<span className="text-primary">{p.slug}</span>
        </div>

        <h1 className="text-4xl sm:text-7xl font-mono font-medium text-bright tracking-tight leading-tight">
          {p.name}
          <span className="caret" aria-hidden />
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl">{p.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
          {p.role && <span className="chip-accent">{p.role}</span>}
          {p.timeframe && <span className="chip">{p.timeframe}</span>}
          {p.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        {p.link && (
          <a
            href={p.link.url}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-base"
          >
            {p.link.label} <ExternalLink size={18} />
          </a>
        )}

        <div className="ascii-divider my-16" />

        <section className="space-y-16">
          <Block title="problem">
            <p className="text-foreground/90 text-base sm:text-lg leading-relaxed">{p.problem}</p>
          </Block>

          <Block title="approach">
            <ul className="space-y-4">
              {p.approach.map((a, i) => (
                <li key={i} className="text-foreground/90 text-base sm:text-lg leading-relaxed">
                  <span className="text-primary mr-3">›</span>
                  {a}
                </li>
              ))}
            </ul>
          </Block>

          {p.outcomes && (
            <Block title="outcomes">
              <ul className="space-y-4">
                {p.outcomes.map((o, i) => (
                  <li key={i} className="text-foreground/90 text-base sm:text-lg leading-relaxed">
                    <span className="text-primary mr-3">✓</span>
                    {o}
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </section>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <NavCard label="prev" project={prev} dir="left" />
          <NavCard label="next" project={next} dir="right" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm text-dim mb-4 font-mono">
        <span className="text-primary">$</span> {title}
      </h2>
      <TerminalWindow title={`${title}.md`}>{children}</TerminalWindow>
    </div>
  );
}

function NavCard({ label, project, dir }: { label: string; project: (typeof projects)[number]; dir: "left" | "right" }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`terminal-frame scan-sweep p-6 group flex items-center gap-4 ${dir === "right" ? "sm:flex-row-reverse sm:text-right" : ""}`}
    >
      {dir === "left" ? (
        <ArrowLeft size={20} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
      ) : (
        <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 sm:order-last" />
      )}
      <div className="flex-1 min-w-0 text-left">
        <div className="text-sm text-dim">{label}</div>
        <div className="text-base sm:text-lg text-bright group-hover:text-primary transition-colors truncate">{project.name}</div>
      </div>
    </Link>
  );
}

export default ProjectDetail;
