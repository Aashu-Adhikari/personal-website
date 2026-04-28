import React, { useState, useRef, useEffect } from "react";
import { experience } from "@/data/portfolio";
import { useInView } from "@/hooks/use-in-view";

export function ExperienceCLI() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [output, setOutput] = useState<React.ReactNode[]>([]);
  const [input, setInput] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message
  useEffect(() => {
    if (inView && output.length === 0) {
      setOutput([
        <div key="welcome" className="text-primary font-mono mb-4">
          <div>System initialized. Type 'help' for available commands or select a log entry.</div>
          <div className="mt-2 text-dim">Available logs:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pl-4">
            {experience.map((e, i) => (
              <div key={i}>[{i + 1}] {e.company}</div>
            ))}
          </div>
        </div>
      ]);
    }
  }, [inView, output.length]);

  // Scroll terminal container to bottom when output changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [output]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    // Add command to output
    const newOutput = [...output, <div key={`cmd-${Date.now()}`} className="text-bright font-mono mb-2"><span className="text-primary mr-2">❯</span>{cmd}</div>];

    if (trimmed === "help") {
      newOutput.push(
        <div key={`res-${Date.now()}`} className="text-muted-foreground font-mono mb-4 pl-4 space-y-1">
          <div>Commands:</div>
          <div><span className="text-primary w-12 inline-block">help</span> - show this message</div>
          <div><span className="text-primary w-12 inline-block">clear</span> - clear the terminal</div>
          <div><span className="text-primary w-12 inline-block">ls</span> - list available experience logs</div>
          <div><span className="text-primary w-12 inline-block">1-{experience.length}</span> - view specific log entry</div>
        </div>
      );
    } else if (trimmed === "clear") {
      setOutput([]);
      setInput("");
      return;
    } else if (trimmed === "ls") {
      newOutput.push(
        <div key={`res-${Date.now()}`} className="text-dim font-mono mb-4 pl-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {experience.map((e, i) => (
            <div key={i}>[{i + 1}] {e.company}</div>
          ))}
        </div>
      );
    } else {
      const idx = parseInt(trimmed) - 1;
      if (!isNaN(idx) && idx >= 0 && idx < experience.length) {
        const e = experience[idx];
        newOutput.push(
          <div key={`res-${Date.now()}`} className="terminal-frame p-4 mb-4 bg-background/50 animate-fade-in border-l-2 border-l-primary border-t-0 border-r-0 border-b-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-bright font-bold uppercase">{e.role}</span>
                <span className="text-dim font-mono ml-2">@ {e.company}</span>
              </div>
              <span className="text-xs text-primary font-mono">{e.period}</span>
            </div>
            <ul className="space-y-2 mt-4 pl-4 border-l border-border/30">
              {e.bullets.map((b, bIdx) => (
                <li key={bIdx} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-dim mt-0.5">-</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      } else {
        newOutput.push(
          <div key={`err-${Date.now()}`} className="text-red-500/80 font-mono mb-4 pl-4">
            Command not found: {cmd}. Type 'help' for available commands.
          </div>
        );
      }
    }

    setOutput(newOutput);
  };

  return (
    <div ref={ref} className={`terminal-frame h-[500px] flex flex-col bg-[#0a0a0a] ${inView ? "animate-fade-up" : "opacity-0"}`}>
      <div className="bg-secondary/40 px-4 py-2 border-b border-border/50 flex gap-2 items-center">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-2 text-xs font-mono text-dim">ashura@career ~</span>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex-1 p-4 overflow-y-auto font-mono text-sm"
      >
        {output}
        
        <div className="flex items-center mt-2">
          <span className="text-primary mr-2">❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && input.trim()) {
                handleCommand(input);
                setInput("");
              }
            }}
            className="flex-1 bg-transparent outline-none text-bright border-none"
            spellCheck={false}
            autoFocus
          />
        </div>
      </div>
      
      {/* Quick selection buttons for mobile/easy access */}
      <div className="border-t border-border/30 p-2 flex flex-wrap gap-2 bg-secondary/10">
        <span className="text-xs text-dim font-mono py-1 px-2">Quick logs:</span>
        {experience.map((e, i) => (
          <button
            key={i}
            onClick={() => handleCommand((i + 1).toString())}
            className="text-xs font-mono bg-secondary/50 hover:bg-primary/20 text-bright px-3 py-1 rounded transition-colors"
          >
            {e.company}
          </button>
        ))}
      </div>
    </div>
  );
}
