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
    <div className="min-h-screen relative">
      <HorrorBackground />
      <div className="grain" aria-hidden />
      <Nav />
      <main className="container py-16 max-w-4xl">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft size={14} /> back to projects
        </Link>

        <div className="text-xs text-dim font-mono mb-2">
          ~/projects/<span className="text-primary">{p.slug}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-mono font-medium text-bright tracking-tight">
          {p.name}
          <span className="caret" aria-hidden />
        </h1>
        <p className="mt-3 text-muted-foreground">{p.tagline}</p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
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
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
          >
            {p.link.label} <ExternalLink size={14} />
          </a>
        )}

        <div className="ascii-divider my-10 select-none">─────────────────────────────────────────────────</div>

        <section className="space-y-10">
          <Block title="problem">
            <p className="text-foreground/90 leading-relaxed">{p.problem}</p>
          </Block>

          <Block title="approach">
            <ul className="space-y-2">
              {p.approach.map((a, i) => (
                <li key={i} className="text-foreground/90 leading-relaxed">
                  <span className="text-primary mr-2">›</span>
                  {a}
                </li>
              ))}
            </ul>
          </Block>

          {p.outcomes && (
            <Block title="outcomes">
              <ul className="space-y-2">
                {p.outcomes.map((o, i) => (
                  <li key={i} className="text-foreground/90 leading-relaxed">
                    <span className="text-primary mr-2">✓</span>
                    {o}
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </section>

        <div className="mt-16 grid sm:grid-cols-2 gap-4">
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
      <h2 className="text-xs text-dim mb-3 font-mono">
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
      className={`terminal-frame scan-sweep p-4 group flex items-center gap-3 ${dir === "right" ? "sm:flex-row-reverse text-right" : ""}`}
    >
      {dir === "left" ? (
        <ArrowLeft size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
      ) : (
        <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
      )}
      <div>
        <div className="text-xs text-dim">{label}</div>
        <div className="text-sm text-bright group-hover:text-primary transition-colors">{project.name}</div>
      </div>
    </Link>
  );
}

export default ProjectDetail;
