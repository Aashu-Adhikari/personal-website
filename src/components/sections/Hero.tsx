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
        <div className="text-scrim max-w-3xl">
          <div className="text-[0.65rem] sm:text-xs text-dim mb-4 flex items-center">
            <span className="inline-block w-2 h-2 bg-primary mr-2 align-middle animate-pulse shrink-0" />
            <span className="truncate">secure shell // session established // {new Date().toLocaleDateString()}</span>
          </div>

          <div className="font-mono text-xs sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-2xl">
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

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-mono font-medium tracking-tight text-bright leading-[1.1] sm:leading-[1.05]">
            <span
              className="glitch inline-block"
              data-text={profile.name}
              style={{ animation: "hard-glitch 6s steps(2) infinite, rgb-split 3.5s ease-in-out infinite" }}
            >
              {profile.name}
            </span>
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-foreground/90 font-mono">
            <span className="text-primary">{">"}</span> {profile.role.toLowerCase()}
          </p>

          <p className="mt-6 max-w-2xl text-sm sm:text-base text-foreground/85 leading-relaxed">
            I build backend ML systems — FastAPI services, dockerized inference, LLM-powered search, and
            agentic execution platforms. Currently teaching browsers to think.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-mono text-sm w-full sm:w-auto justify-center"
          >
            view projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors font-mono text-sm w-full sm:w-auto justify-center"
          >
            <FileDown size={16} />
            ~/resume
          </Link>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start mt-2 sm:mt-0">
            <SocialRow className="ml-1" />
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 hidden sm:flex justify-center">
          <div className="text-xs text-dim font-mono animate-pulse">↓ scroll</div>
        </div>
      </div>
    </section>
  );
}
