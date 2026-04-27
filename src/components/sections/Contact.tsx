import { SectionHeader } from "@/components/SectionHeader";
import { TerminalWindow } from "@/components/TerminalWindow";
import { SocialRow } from "@/components/SocialRow";
import { profile } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container">
        <SectionHeader id="contact" prompt="./reach-out.sh" title="contact" />
        <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
          <TerminalWindow title="secure_uplink.sh — established">
            <div className="flex items-center gap-2 text-[0.65rem] text-primary/60 font-mono tracking-widest uppercase mb-6">
              <span>ENCRYPTED_CHANNEL</span>
              <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
            </div>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              <span className="text-primary font-mono mr-2">$ ssh</span> open a persistent channel. i monitor all incoming signals.
            </p>

            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="text-lg sm:text-2xl font-mono text-bright hover:text-primary transition-colors break-all border-b border-primary/20 pb-1"
              >
                {profile.email}
              </a>
              <button
                onClick={copy}
                className="inline-flex items-center gap-1.5 text-[0.6rem] font-mono uppercase tracking-widest text-dim border border-border/20 px-3 py-1.5 hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Copy email"
              >
                {copied ? <Check size={10} /> : <Copy size={10} />}
                {copied ? "SIGNAL_COPIED" : "COPY_ADDRESS"}
              </button>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-3 text-xs sm:text-sm font-mono">
              <Row k="VOICE" v={profile.phone} />
              <Row k="COORD" v={profile.location} />
              <Row k="LNK_IN" v={<a className="link-mono" target="_blank" rel="noreferrer" href={profile.links.linkedin}>/in/ashutosh-adhikari</a>} />
              <Row k="GIT_HUB" v={<a className="link-mono" target="_blank" rel="noreferrer" href={profile.links.github}>/Aashu-Adhikari</a>} />
            </div>

            <div className="mt-12 pt-8 border-t border-border/10 flex flex-wrap items-center justify-between gap-6">
              <SocialRow />
              <Link
                to="/resume"
                className="inline-flex items-center gap-3 px-6 py-3 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all font-mono text-xs uppercase tracking-widest"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                EXTRACT_DOSSIER (CV)
              </Link>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-dim w-20 shrink-0">{k}</span>
      <span className="text-foreground">{v}</span>
    </div>
  );
}
