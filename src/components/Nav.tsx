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
  const { pathname } = useLocation();
  const onHome = pathname === "/";

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

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="container flex items-center justify-between h-12">
        <Link to="/" className="font-mono text-sm text-bright hover:text-primary transition-colors">
          <span className="text-primary">~/</span>ashutosh.adhikari
          <span className="caret" aria-hidden />
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-xs font-mono">
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
          className="md:hidden text-xs font-mono text-muted-foreground border border-border px-2 py-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "[x]" : "[≡]"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="container py-3 flex flex-col gap-2 text-sm font-mono">
            {onHome &&
              items.map((i) => (
                <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-1">
                  {i.label}
                </a>
              ))}
            <Link to="/" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-1">
              ~/home
            </Link>
            <Link to="/resume" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-1">
              ~/resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
