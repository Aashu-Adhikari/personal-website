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
        <div className="text-scrim max-w-4xl lg:max-w-5xl">
          <div className="text-[0.7rem] sm:text-sm text-dim mb-4 flex items-center">
            <span className="inline-block w-2 h-2 bg-primary mr-2 align-middle animate-pulse shrink-0" />
            <span className="truncate">secure shell // session established // {new Date().toLocaleDateString()}</span>
          </div>

          <div className="font-mono text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl">
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

          <p className="mt-8 max-w-3xl text-sm sm:text-lg text-foreground/85 leading-relaxed">
            I build backend ML systems — FastAPI services, dockerized inference, LLM-powered search, and
            agentic execution platforms. <span className="redact hover:bg-transparent">They are watching.</span> Currently teaching browsers to think.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-8 border-l border-border/30 pl-6 py-2">
            <div>
              <h3 className="text-[0.65rem] text-primary/60 font-mono tracking-widest uppercase mb-4">
                Active Operations
              </h3>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex items-start gap-3 group">
                  <span className="text-primary mt-1">OPS_01</span>
                  <div className="flex flex-col">
                    <span className="flex items-center gap-2">
                      [TABSENSE] — AI Browser Orchestration
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-[0.55rem] font-bold animate-pulse">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        ACTIVE
                      </span>
                    </span>
                    <span className="text-[0.65rem] text-dim group-hover:text-primary/60 transition-colors">Current Personal Project</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">OPS_02</span>
                  <span>[AGENTIC_QA] — Autonomous Execution Platform</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.65rem] text-primary/60 font-mono tracking-widest uppercase mb-4">
                System Stats
              </h3>
              <ul className="space-y-3 font-mono text-sm text-dim">
                <li className="flex justify-between border-b border-border/10 pb-1">
                  <span>EXPERIENCE</span>
                  <span className="text-bright">4.5+ YEARS</span>
                </li>
                <li className="flex justify-between border-b border-border/10 pb-1">
                  <span>STATUS</span>
                  <span className="text-primary">AVAILABLE_FOR_OPS</span>
                </li>
                <li className="flex justify-between border-b border-border/10 pb-1">
                  <span>AUTH</span>
                  <span className="text-primary">LEVEL_ROOT</span>
                </li>
              </ul>
            </div>
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
