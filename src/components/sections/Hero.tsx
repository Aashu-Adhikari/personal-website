import { Typewriter } from "@/components/Typewriter";
import { SocialRow } from "@/components/SocialRow";
import { profile } from "@/data/portfolio";
import { ArrowRight, FileDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 pb-20">
      {/* faint heartbeat gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, hsl(145 35% 56% / 0.07), transparent 55%), radial-gradient(ellipse at 80% 70%, hsl(240 40% 20% / 0.4), transparent 50%)",
          animation: "pulse-soft 6s ease-in-out infinite",
        }}
      />

      <div className="container relative">
        <div className="text-scrim max-w-2xl lg:max-w-3xl">
          <div className="text-[0.7rem] sm:text-sm text-dim mb-4 flex items-center">
            <span className="inline-block w-2 h-2 bg-primary mr-2 align-middle animate-pulse shrink-0" />
            <span className="truncate">secure shell // session established // {new Date().toLocaleDateString()}</span>
          </div>

          <div className="font-mono text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl">
            <Typewriter
              lines={[
                { text: "ssh ashutosh@portfolio.local", prompt: "$" },
                { text: "authenticating ... ok", prompt: ">" },
                { text: "loading identity matrix ... done", prompt: ">" },
              ]}
              speed={22}
              startDelay={300}
            />
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-mono font-medium tracking-tight text-bright leading-[1.05] sm:leading-[1.0]">
            <span
              className="glitch text-ghost inline-block"
              data-text={profile.name}
              style={{ animation: "hard-glitch 6s steps(2) infinite, rgb-split 3.5s ease-in-out infinite" }}
            >
              {profile.name}
            </span>
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-foreground/90 font-mono">
            <span className="text-primary">{">"}</span> {profile.role.toLowerCase()}
          </p>

          <p className="mt-8 max-w-2xl text-sm sm:text-lg text-foreground/85 leading-relaxed">
            I build backend ML systems — FastAPI services, dockerized inference, LLM-powered search, and
            agentic execution platforms. <span className="redact hover:bg-transparent">Inference is inevitable.</span> Currently teaching browsers to think.
          </p>
        </div>

        <div className="mt-12 lg:mt-0 lg:absolute lg:right-4 lg:top-[45%] lg:translate-y-[-50%] flex flex-col sm:flex-row lg:flex-col justify-end items-end gap-x-12 gap-y-12 border-r-2 border-primary/20 pr-8 py-6 animate-fade-in [animation-delay:800ms] z-10">
          <div className="text-right min-w-[240px]">
            <h3 className="text-[0.7rem] text-primary/40 font-mono tracking-[0.2em] uppercase mb-6 flex items-center justify-end gap-3">
              Active Operations
              <span className="w-2 h-2 bg-primary/20 rounded-full" />
            </h3>
            <ul className="space-y-6 font-mono text-xs sm:text-sm">
              <li className="group">
                <Link to="/projects/tabsense" className="flex flex-col items-end hover:opacity-80 transition-opacity">
                  <span className="text-primary font-bold flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-[2px] bg-primary/10 text-primary text-[0.6rem] animate-pulse">ACTIVE</span>
                    [TABSENSE] — AI Browser Orchestration
                    <span className="text-primary/60">OPS_01</span>
                  </span>
                  <span className="text-xs text-dim group-hover:text-primary/40 transition-colors">Current Personal Project</span>
                </Link>
              </li>
              <li className="group">
                <Link to="/projects/agentic-qa" className="flex items-center justify-end gap-4 text-dim/80 group-hover:text-bright transition-colors">
                  <span>[AGENTIC_QA] — Autonomous Execution Platform</span>
                  <span className="text-primary font-bold">OPS_02</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-right min-w-[240px]">
            <h3 className="text-[0.7rem] text-primary/40 font-mono tracking-[0.2em] uppercase mb-6 flex items-center justify-end gap-3">
              System Stats
              <span className="w-2 h-2 bg-primary/20 rounded-full" />
            </h3>
            <ul className="space-y-3.5 font-mono text-xs sm:text-sm text-dim">
              <li className="flex justify-between gap-12 border-b border-border/10 pb-1.5">
                <span>EXPERIENCE</span>
                <span className="text-bright font-bold">4.5+ YEARS</span>
              </li>
              <li className="flex justify-between gap-12 border-b border-border/10 pb-1.5">
                <span>STATUS</span>
                <span className="text-primary font-bold">AVAILABLE_FOR_HIRE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono text-base w-full sm:w-auto justify-center"
          >
            view projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-6 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-colors font-mono text-base w-full sm:w-auto justify-center"
          >
            <FileDown size={18} />
            ~/resume
          </Link>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start mt-4 sm:mt-0">
            <SocialRow size={18} className="ml-1" />
          </div>
        </div>

        {/* <div className="absolute bottom-4 left-0 right-0 hidden sm:flex justify-center">
          <div className="text-xs text-dim font-mono animate-pulse">↓ scroll</div>
        </div> */}
      </div>
    </section>
  );
}
