import { skills } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";

export function SkillsNeofetch() {
  const { ref, inView } = useInView<HTMLDivElement>();

  // Create a pseudo-random ascii art or use a fixed one
  const asciiArt = `
      /\\
     /  \\
    /    \\
   /______\\
  /        \\
 /          \\
/            \\
`;

  return (
    <div ref={ref} className={`terminal-frame p-6 md:p-10 ${inView ? "animate-fade-up" : "opacity-0"}`}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
        {/* ASCII Art Left */}
        {/* Travelling Heartbeat Monitor */}
        <div className="w-48 h-32 relative overflow-hidden pointer-events-none flex-shrink-0">
          <svg 
            width="200%" 
            height="100%" 
            viewBox="0 0 400 100" 
            preserveAspectRatio="none"
            className="absolute left-0 top-0 animate-[heartbeat-line_3s_linear_infinite]"
          >
            <path 
              d="M 0,50 L 35,50 L 40,45 L 45,55 L 50,20 L 55,80 L 60,50 L 100,50 L 135,50 L 140,45 L 145,55 L 150,20 L 155,80 L 160,50 L 200,50 L 235,50 L 240,45 L 245,55 L 250,20 L 255,80 L 260,50 L 300,50 L 335,50 L 340,45 L 345,55 L 350,20 L 355,80 L 360,50 L 400,50"
              fill="none"
              stroke="hsl(var(--blood))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_10px_hsl(var(--blood))]"
            />
          </svg>

          {/* Fade edges to match the terminal card background */}
          <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-card pointer-events-none" />

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes heartbeat-line {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}} />
        </div>

        {/* System Info Right */}
        <div className="flex-1 font-mono text-sm space-y-4">
          <div className="text-primary font-bold">ashura@developer</div>
          <div className="text-dim border-b border-border/30 pb-2">----------------</div>

          <div className="space-y-3">


            {skills.map((s) => (
              <div key={s.category} className="flex">
                <span className="text-primary w-24 capitalize">{s.category}</span>
                <span className="text-bright flex-1">: {s.items.join(", ")}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2 pt-4">
            <div className="w-4 h-4 bg-background border border-border"></div>
            <div className="w-4 h-4 bg-primary"></div>
            <div className="w-4 h-4 bg-bright"></div>
            <div className="w-4 h-4 bg-muted-foreground"></div>
            <div className="w-4 h-4 bg-dim"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
