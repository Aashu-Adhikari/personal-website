export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="container">
        <pre className="text-dim text-[0.65rem] sm:text-xs leading-tight overflow-hidden select-none">
{`     _              _           _              _     
  __ _ ___| |__  _   _| |_ ___  ___| |__    __| |__  
 / _\` / __| '_ \\| | | | __/ _ \\/ __| '_ \\  / _\` / /  
| (_| \\__ \\ | | | |_| | || (_) \\__ \\ | | || (_| \\ \\  
 \\__,_|___/_| |_|\\__,_|\\__\\___/|___/_| |_(_)__,_/_/  `}
        </pre>
        <div className="mt-6 flex items-center justify-between flex-wrap gap-3 text-xs text-dim font-mono">
          <span>
            built @ 0x{Math.floor(Date.now() / 1000).toString(16)} · © {new Date().getFullYear()}
          </span>
          <span>no cookies. no tracking. no analytics.</span>
        </div>
      </div>
    </footer>
  );
}
