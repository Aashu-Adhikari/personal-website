import React from "react";
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
            <TerminalWindow title="identity_matrix.prfl">
              <div className="space-y-6">
                <section>
                  <div className="text-[0.65rem] text-primary/60 font-mono tracking-widest uppercase mb-2">
                    IDX-P01 // BACKGROUND
                  </div>
                  <p className="text-foreground/90 leading-relaxed text-sm sm:text-base">
                    {profile.summary}
                  </p>
                </section>
                
                <section className="pt-4 border-t border-border/10">
                  <div className="text-[0.65rem] text-primary/60 font-mono tracking-widest uppercase mb-2">
                    IDX-P02 // CORE_FOCUS
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed italic">
                    {profile.focus} — currently specialized in high-performance inference and agentic workflow orchestration.
                  </p>
                </section>
              </div>
            </TerminalWindow>
          </div>

          <TerminalWindow title="sysinfo">
            <dl className="space-y-3 text-xs sm:text-sm">
              <Row k="HOST" v="ashutosh.local" />
              <Row k="LOC" v={profile.location.split(",").pop()?.trim() || "NP"} />
              <Row k="STATUS" v={<span className="text-primary">{profile.status}</span>} />
              <Row k="UPTIME" v="~4Y IN_PROD" />
              <Row k="SIGNAL" v={<span className="text-primary">● OK</span>} />
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
