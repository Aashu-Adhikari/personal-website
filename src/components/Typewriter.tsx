import { useEffect, useState } from "react";

type Line = { text: string; prompt?: "$" | ">" | ""; delay?: number };

export function Typewriter({
  lines,
  speed = 28,
  startDelay = 200,
  onDone,
}: {
  lines: Line[];
  speed?: number;
  startDelay?: number;
  onDone?: () => void;
}) {
  const [shown, setShown] = useState<string[]>(lines.map(() => ""));
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (lineIdx >= lines.length) {
      onDone?.();
      return;
    }
    const current = lines[lineIdx];
    if (charIdx <= current.text.length) {
      const t = setTimeout(
        () => {
          setShown((s) => {
            const c = [...s];
            c[lineIdx] = current.text.slice(0, charIdx);
            return c;
          });
          setCharIdx((c) => c + 1);
        },
        charIdx === 0 ? current.delay ?? 120 : speed + Math.random() * 20,
      );
      return () => clearTimeout(t);
    } else {
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }
  }, [started, lineIdx, charIdx, lines, speed, onDone]);

  return (
    <div className="space-y-1">
      {lines.map((l, i) => {
        const prefix = l.prompt === "$" ? "$ " : l.prompt === ">" ? "> " : "";
        const isCurrent = i === lineIdx;
        const isDone = i < lineIdx;
        if (!isDone && !isCurrent) return null;
        return (
          <div key={i} className="leading-relaxed">
            {prefix && <span className="text-primary">{prefix}</span>}
            <span>{shown[i]}</span>
            {isCurrent && <span className="caret" aria-hidden />}
          </div>
        );
      })}
    </div>
  );
}
