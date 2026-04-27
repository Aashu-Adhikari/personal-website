import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const items = [
  { label: "~/about", href: "#about" },
  { label: "~/skills", href: "#skills" },
  { label: "~/experience", href: "#experience" },
  { label: "~/projects", href: "#projects" },
  { label: "~/logs", href: "#logs" },
  { label: "~/contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const ids = items.map((i) => i.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [onHome]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "py-6"
      }`}
    >
      {/* System Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary/20 overflow-hidden">
        <div className="h-full bg-primary animate-marquee" style={{ width: "20%", animationDuration: "15s" }} />
      </div>
      <div className="container flex items-center justify-between relative">
        <div className="hidden lg:flex absolute left-0 -top-5 text-[0.55rem] text-primary/80 font-mono tracking-[0.2em] uppercase bg-background/40 backdrop-blur-sm px-2 py-0.5 border-x border-primary/20">
          [USER: ASHURA | STATUS: AVAILABLE | SESSION: ROOT]
        </div>
        <Link to="/" className="font-mono text-sm text-bright hover:text-primary transition-colors flex items-center">
          <span className="text-primary">~/</span>ashutosh.adhikari
          <span className="caret ml-1" aria-hidden />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-mono">
          {onHome ? (
            items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className={`transition-colors ${active === i.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {active === i.href && <span className="text-primary">{">"} </span>}
                {i.label}
              </a>
            ))
          ) : (
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              ~/home
            </Link>
          )}
          <Link to="/resume" className="text-muted-foreground hover:text-primary transition-colors border border-border px-2 py-1">
            ~/resume
          </Link>
        </nav>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 font-mono text-muted-foreground border border-border rounded-sm hover:text-primary transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "[x]" : "[≡]"}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-14 z-50 bg-background/85 backdrop-blur-lg border-t border-border animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="container py-8 flex flex-col gap-6 text-base font-mono h-[calc(100vh-3.5rem)] overflow-y-auto">
            {onHome &&
              items.map((i) => (
                <a 
                  key={i.href} 
                  href={i.href} 
                  onClick={() => setOpen(false)} 
                  className="text-muted-foreground hover:text-primary py-2 border-b border-border/50 flex items-center justify-between group"
                >
                  <span>{i.label}</span>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">{"->"}</span>
                </a>
              ))}
            <Link 
              to="/" 
              onClick={() => setOpen(false)} 
              className="text-muted-foreground hover:text-primary py-2 border-b border-border/50 flex items-center justify-between group"
            >
              <span>~/home</span>
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">{"->"}</span>
            </Link>
            <Link 
              to="/resume" 
              onClick={() => setOpen(false)} 
              className="text-primary py-2 border-b border-border/50 flex items-center justify-between group"
            >
              <span>~/resume</span>
              <span className="text-primary opacity-100 transition-opacity">{"->"}</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
