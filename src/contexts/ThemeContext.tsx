import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "terminal" | "professional";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return (saved as Theme) || "terminal";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    // Add/remove class to html element for global CSS targeting
    if (theme === "professional") {
      document.documentElement.classList.add("theme-professional");
    } else {
      document.documentElement.classList.remove("theme-professional");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "terminal" ? "professional" : "terminal"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
