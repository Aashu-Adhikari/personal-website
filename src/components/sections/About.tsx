import { SectionHeader } from "@/components/SectionHeader";
import { TerminalWindow } from "@/components/TerminalWindow";
import { profile } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader id="about" prompt="cat ~/profile.md" title="about" />
        <div ref={ref} className={`grid lg:grid-cols-3 gap-6 ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="lg:col-span-2">
            <TerminalWindow title="profile.md">
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary">#</span> Ashutosh Adhikari
              </p>
              <p className="mt-4 text-foreground/90 leading-relaxed">{profile.summary}</p>
              <p className="mt-6 text-dim text-xs">— eof —</p>
            </TerminalWindow>
          </div>

          <TerminalWindow title="sysinfo">
            <dl className="space-y-3 text-sm">
              <Row k="host" v="ashutosh.local" />
              <Row k="location" v="Kathmandu, NP" />
              <Row k="status" v={<span className="text-primary">{profile.status}</span>} />
              <Row k="focus" v={profile.focus} />
              <Row k="uptime" v="~4 yrs in prod" />
              <Row k="lang" v="en / ne / ja" />
              <Row k="shell" v="zsh — vim mode" />
              <Row k="signal" v={<span className="text-primary">●</span>} />
            </dl>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3">
      <dt className="text-dim w-20 shrink-0">{k}</dt>
      <dd className="text-foreground">{v}</dd>
    </div>
  );
}
