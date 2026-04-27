import React, { useEffect, useState, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";

const GLYPHS = "01$#X%&?@!<>{}[]-+=*^/|\\~";

export function DecryptedText({
  text,
  className = "",
  speed = 40,
  revealDelay = 300,
}: {
  text: string;
  className?: string;
  speed?: number;
  revealDelay?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [displayText, setDisplayText] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const iterationsRef = useRef(0);

  useEffect(() => {
    if (inView && !isRevealed) {
      const timeout = setTimeout(() => {
        startDecryption();
      }, revealDelay);
      return () => clearTimeout(timeout);
    }
  }, [inView, isRevealed]);

  const startDecryption = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (index < iterationsRef.current) {
            return char;
          }
          if (char === " ") return " ";
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplayText(scrambled);

      if (iterationsRef.current >= text.length) {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsRevealed(true);
      }

      iterationsRef.current += 1/3; // Slow down the reveal relative to glyph flicker
    }, speed);
  };

  return (
    <span ref={ref} className={className}>
      {displayText || text.split("").map(c => c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join("")}
    </span>
  );
}
