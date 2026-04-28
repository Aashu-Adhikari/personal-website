export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-10">
      <div className="container">
        {/* <div className="overflow-hidden select-none opacity-20 hover:opacity-40 transition-opacity">
          <pre className="text-dim text-[0.5rem] sm:text-xs leading-none whitespace-pre">
{`     _              _           _              _     
  __ _ ___| |__  _   _| |_ ___  ___| |__    __| |__  
 / _\` / __| '_ \\| | | | __/ _ \\/ __| '_ \\  / _\` / /  
| (_| \\__ \\ | | | |_| | || (_) \\__ \\ | | || (_| \\ \\  
 \\__,_|___/_| |_|\\__,_|\\__\\___/|___/_| |_(_)__,_/_/  `}
          </pre>
        </div> */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs sm:text-sm text-muted-foreground font-mono">
          <div className="flex flex-col gap-1.5">
            <span className="text-muted-foreground/80">
              built @ <span className="text-primary">0x{Math.floor(Date.now() / 1000).toString(16)}</span> · © {new Date().getFullYear()}
            </span>
            <span className="text-[0.7rem] sm:text-xs text-primary/70 font-bold tracking-wider">
              ashutosh.adhikari // v1.0.4-stable
            </span>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="px-1.5 py-0.5 border border-border bg-secondary/30">no cookies</span>
            <span className="px-1.5 py-0.5 border border-border bg-secondary/30">no tracking</span>
            <span className="px-1.5 py-0.5 border border-border bg-secondary/30">no analytics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
