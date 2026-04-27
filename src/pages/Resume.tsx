import { Nav } from "@/components/Nav";
import { education, experience, profile, projects, skills } from "@/data/portfolio";
import { Printer } from "lucide-react";
import { useEffect } from "react";
import { HorrorBackground } from "@/components/HorrorBackground";

const Resume = () => {
  useEffect(() => {
    document.title = "~/resume // ashutosh.adhikari";
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="print:hidden">
        <HorrorBackground />
      </div>
      <div className="grain print:hidden" aria-hidden />
      <div className="print:hidden">
        <Nav />
      </div>

      <main className="container max-w-4xl py-12 print:py-0 print:max-w-none">
        <div className="flex items-center justify-between mb-8 print:hidden">
          <div className="text-xs text-dim font-mono">~/resume.txt</div>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-mono"
          >
            <Printer size={14} /> print / save as pdf
          </button>
        </div>

        <article className="resume-doc font-mono text-sm leading-relaxed print:text-[11pt]">
          <header className="border-b border-border pb-4 print:border-black">
            <h1 className="text-2xl print:text-[18pt] font-medium text-bright print:text-black">{profile.name}</h1>
            <p className="text-muted-foreground print:text-black mt-1">{profile.role}</p>
            <p className="mt-2 text-xs print:text-[9pt] text-muted-foreground print:text-black">
              {profile.location} · {profile.phone} · {profile.email}
            </p>
            <p className="text-xs print:text-[9pt] text-muted-foreground print:text-black mt-1">
              {profile.links.linkedin} · {profile.links.github} · {profile.links.website}
            </p>
          </header>

          <Section title="profile">
            <p className="text-foreground/90 print:text-black">{profile.summary}</p>
          </Section>

          <Section title="experience">
            {experience.map((e, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <div className="flex justify-between flex-wrap">
                  <strong className="text-bright print:text-black">{e.role}</strong>
                  <span className="text-dim print:text-black text-xs">{e.period}</span>
                </div>
                <div className="text-muted-foreground print:text-black text-xs mb-2">@ {e.company}</div>
                <ul className="list-none space-y-1">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="text-foreground/90 print:text-black">
                      <span className="text-primary print:text-black mr-2">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="skills">
            <ul className="space-y-1">
              {skills.map((s) => (
                <li key={s.category} className="text-foreground/90 print:text-black">
                  <strong className="text-bright print:text-black">{s.category}:</strong> {s.items.join(", ")}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="education">
            <div className="flex justify-between flex-wrap">
              <strong className="text-bright print:text-black">{education.school}</strong>
              <span className="text-dim print:text-black text-xs">{education.period}</span>
            </div>
            <div className="text-muted-foreground print:text-black">{education.degree}</div>
            <div className="text-foreground/90 print:text-black mt-1">
              <strong>Relevant courses:</strong> {education.courses.join(", ")}
            </div>
          </Section>

          <Section title="projects">
            {projects.map((p) => (
              <div key={p.slug} className="mb-3 last:mb-0">
                <div className="flex justify-between flex-wrap gap-2">
                  <strong className="text-bright print:text-black">{p.name}</strong>
                  <span className="text-xs text-dim print:text-black">{p.stack.join(", ")}</span>
                </div>
                <p className="text-foreground/90 print:text-black">{p.tagline}</p>
              </div>
            ))}
          </Section>
        </article>
      </main>

      <style>{`
        @media print {
          @page { margin: 0.5in; }
          .resume-doc { color: black !important; }
          .resume-doc * { color: black !important; border-color: #999 !important; }
        }
      `}</style>
    </div>
  );
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="text-bright print:text-black text-xs uppercase tracking-widest border-b border-border print:border-black pb-1 mb-3">
        // {title}
      </h2>
      {children}
    </section>
  );
}

export default Resume;
