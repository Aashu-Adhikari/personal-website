import { SectionHeader } from "@/components/SectionHeader";
import { skills } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";
import { SkillsNeofetch } from "./SkillsNeofetch";

export function Skills() {
  const all = skills.flatMap((s) => s.items);

  return (
    <section className="py-20 bg-secondary/20 min-h-screen">
      <div className="container">
        <SectionHeader id="skills" prompt="ls -la ~/stack" title="stack" count={`// ${all.length} entries`} />

        <SkillsNeofetch />

        {/* marquee is always visible at the bottom of the section */}
        <div className="mt-12 overflow-hidden border-y border-border py-3 bg-background/40">
          <div className="flex gap-10 whitespace-nowrap animate-marquee text-dim text-sm font-mono">
            {[...all, ...all].map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t}
                <span className="text-primary/50">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
