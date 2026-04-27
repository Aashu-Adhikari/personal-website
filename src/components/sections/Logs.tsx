import { SectionHeader } from "@/components/SectionHeader";
import { TerminalWindow } from "@/components/TerminalWindow";
import { useInView } from "@/hooks/use-in-view";

export function Logs() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const placeholders = [
    "building agentic-qa: lessons from playwright at scale",
    "explaining transformers to your boss without cring(y)",
    "dockerizing ml inference without losing your mind",
  ];
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader id="logs" prompt="tail -f ~/logs/writing.log" title="logs" count="// soon" />
        <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
          <TerminalWindow title="writing.log — empty stream">
            <p className="text-dim text-sm">[{new Date().toISOString().slice(0, 19)}] waiting for entries...</p>
            <ul className="mt-6 space-y-2">
              {placeholders.map((p, i) => (
                <li key={i} className="text-sm text-muted-foreground/40 line-through select-none">
                  <span className="text-dim mr-2">[draft]</span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-dim">
              writing console will open soon. <span className="caret" aria-hidden />
            </p>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
