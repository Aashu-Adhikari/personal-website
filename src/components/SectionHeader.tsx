import { useInView } from "@/hooks/use-in-view";
import { DecryptedText } from "./DecryptedText";

export function SectionHeader({ id, prompt, title, count }: { id: string; prompt: string; title: string; count?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div id={id} ref={ref} className={`scroll-mt-24 mb-8 ${inView ? "animate-fade-up" : "opacity-0"}`}>
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-primary text-sm">$</span>
        <span className="text-dim text-sm">{prompt}</span>
      </div>
      <h2 className="mt-2 text-xl sm:text-2xl font-mono font-medium text-bright tracking-tight">
        <DecryptedText text={title} />
        {count && <span className="ml-3 text-sm text-dim font-normal">{count}</span>}
      </h2>
      <div className="ascii-divider mt-3" />
    </div>
  );
}
