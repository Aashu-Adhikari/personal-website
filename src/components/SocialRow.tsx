import { profile } from "@/data/portfolio";
import { Github, Gitlab, Globe, Linkedin, Mail } from "lucide-react";

export function SocialRow({ size = 16, className = "" }: { size?: number; className?: string }) {
  const items = [
    { icon: Linkedin, label: "LinkedIn", href: profile.links.linkedin },
    { icon: Github, label: "GitHub", href: profile.links.github },
    { icon: Gitlab, label: "GitLab", href: profile.links.gitlab },
    { icon: Globe, label: "Website", href: profile.links.website },
    { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  ];
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map((i) => (
        <a
          key={i.label}
          href={i.href}
          target={i.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={i.label}
          title={i.label}
          className="w-9 h-9 grid place-items-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        >
          <i.icon size={size} />
        </a>
      ))}
    </div>
  );
}
