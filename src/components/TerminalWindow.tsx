export function TerminalWindow({
  title = "ashutosh@portfolio: ~",
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`terminal-frame ${className}`}>
      <div className="terminal-titlebar">
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
        </span>
        <span 
          className="ml-2 text-dim truncate" 
          style={{ animation: "text-flicker 5s linear infinite" }}
        >
          {title}
        </span>
      </div>
      <div className="p-5 sm:p-8 text-sm sm:text-base leading-relaxed">{children}</div>
    </div>
  );
}
