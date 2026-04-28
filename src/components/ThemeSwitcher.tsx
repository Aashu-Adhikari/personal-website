import { useTheme } from "@/contexts/ThemeContext";
import { Terminal, Briefcase } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-1 p-1 border transition-colors ${
        theme === "professional" 
          ? "bg-stone-200/50 border-stone-300 rounded-full" 
          : "bg-black/50 border-emerald-900/50 rounded-sm"
      }`}
      aria-label="Toggle theme"
    >
      <div 
        className={`p-1.5 flex items-center justify-center transition-all ${
          theme === "professional"
            ? "text-stone-500 hover:text-stone-800 rounded-full" // Inactive in pro theme
            : "bg-emerald-500 text-black rounded-sm" // Active in terminal theme
        }`}
      >
        <Terminal size={14} />
      </div>
      <div 
        className={`p-1.5 flex items-center justify-center transition-all ${
          theme === "professional"
            ? "bg-white text-stone-900 shadow-sm rounded-full" // Active in pro theme
            : "text-emerald-500/50 hover:text-emerald-500 rounded-sm" // Inactive in terminal theme
        }`}
      >
        <Briefcase size={14} />
      </div>
    </button>
  );
}
