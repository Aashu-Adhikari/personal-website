import { SectionHeader } from "@/components/SectionHeader";
import { TerminalWindow } from "@/components/TerminalWindow";
import { SocialRow } from "@/components/SocialRow";
import { profile } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

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
          <TerminalWindow title="reach-out.sh — interactive">
            <p className="text-muted-foreground">
              <span className="text-primary">{">"}</span> open a channel. i read everything.
            </p>

            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="text-2xl sm:text-4xl font-mono text-bright hover:text-primary transition-colors break-all"
              >
                {profile.email}
              </a>
              <button
                onClick={copy}
                className="ml-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border px-2 py-1 hover:text-primary hover:border-primary transition-colors"
                aria-label="Copy email"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? "copied" : "copy"}
              </button>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-2 text-sm">
              <Row k="phone" v={profile.phone} />
              <Row k="location" v={profile.location} />
              <Row k="linkedin" v={<a className="link-mono" target="_blank" rel="noreferrer" href={profile.links.linkedin}>/in/ashutosh-adhikari</a>} />
              <Row k="github" v={<a className="link-mono" target="_blank" rel="noreferrer" href={profile.links.github}>/Aashu-Adhikari</a>} />
              <Row k="gitlab" v={<a className="link-mono" target="_blank" rel="noreferrer" href={profile.links.gitlab}>/ashutoshadhikari</a>} />
              <Row k="website" v={<a className="link-mono" target="_blank" rel="noreferrer" href={profile.links.website}>adhikariashutosh.com.np</a>} />
            </div>

            <div className="mt-8">
              <SocialRow />
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
