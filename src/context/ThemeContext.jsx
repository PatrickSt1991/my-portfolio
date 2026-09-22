import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const STORAGE_KEY = "theme";

function systemPrefersDark() {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function readStored() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "dark" || saved === "light" ? saved : null;
  } catch {
    // Privémodus of geblokkeerde storage: val terug op de systeemvoorkeur.
    return null;
  }
}

export function ThemeProvider({ children }) {
  // Geen opgeslagen keuze betekent: volg het systeem. Eerder startte de site
  // altijd in lichte modus, ook voor bezoekers met een donker OS-thema.
  const [stored, setStored] = useState(readStored);
  const [systemDark, setSystemDark] = useState(systemPrefersDark);

  const dark = stored ? stored === "dark" : systemDark;

  // Zolang de bezoeker zelf niets koos, blijven we het systeem volgen als dat
  // halverwege omschakelt (bijvoorbeeld bij zonsondergang op macOS of iOS).
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;
    const onChange = (e) => setSystemDark(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    // Houdt de browser-UI (adresbalk, formuliercontrols) in de pas.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#050c1b" : "#f6f8fc");
  }, [dark]);

  const toggle = useCallback(() => {
    setStored((prev) => {
      const next = (prev ? prev === "dark" : systemPrefersDark()) ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Kunnen we niet opslaan, dan geldt de keuze alleen deze sessie.
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
