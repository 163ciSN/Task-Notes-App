

import { createContext, useEffect, useState, useContext } from "react";

/* =====================================================
   THEME CONTEXT
===================================================== */

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Load saved theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, []);

  // Apply theme change
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/* =====================================================
   THEME TOGGLE BUTTON
===================================================== */

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="btn btn-outline theme-toggle"
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

/* =====================================================
   HOOK (optional but useful)
===================================================== */

export function useTheme() {
  return useContext(ThemeContext);
}