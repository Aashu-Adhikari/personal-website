import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HorrorBackground } from "@/components/HorrorBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
    document.title = "segfault // 404";
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6">
      <HorrorBackground />
      <div className="grain" aria-hidden />
      <div className="max-w-xl w-full font-mono text-sm">
        <div className="text-xs text-dim mb-4">trace —</div>
        <pre className="text-destructive text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
{`> resolving ${location.pathname} ...
> lookup failed
> segmentation fault (core dumped)`}
        </pre>

        <h1 className="mt-8 text-5xl sm:text-7xl font-mono text-bright">
          404<span className="text-primary">.</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          this route doesn't exist. or it does, and you don't have clearance.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
        >
          ← cd ~
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
