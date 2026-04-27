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
          <TerminalWindow title="writing.log — established connection">
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center gap-2 text-[0.65rem] text-primary/60 font-mono tracking-widest uppercase mb-1">
                  <span>DECODED_SIGNAL</span>
                  <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                </div>
                <a 
                  href="https://medium.com/@ashutoshadhikari141/exploring-sparse-attention-in-transformers-bigbird-longformer-and-their-applications-3e69920c2085"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm sm:text-base text-bright hover:text-primary transition-colors font-mono leading-tight"
                >
                  Exploring Sparse Attention in Transformers: BigBird, Longformer, and their applications
                </a>
                <p className="mt-2 text-xs sm:text-sm text-dim leading-relaxed">
                  Deep dive into sparse attention mechanisms to handle long sequences in transformer architectures.
                </p>
              </div>

              <div className="pt-6 border-t border-border/20">
                <div className="text-[0.65rem] text-dim font-mono tracking-widest uppercase mb-4">
                  PENDING_UPLINKS
                </div>
                <ul className="space-y-3">
                  {placeholders.map((p, i) => (
                    <li key={i} className="text-sm text-muted-foreground/30 font-mono italic">
                      <span className="mr-2 opacity-50">#</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-8 text-xs text-dim italic">
              — continuous signal exfiltration active — <span className="caret" aria-hidden />
            </p>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
