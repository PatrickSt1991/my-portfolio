import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import PatrickLogo from "../assets/patrick_logo.svg";
import { useTheme } from "../context/ThemeContext";

function IconSun() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLink = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors duration-200
     after:absolute after:bottom-0 after:left-0 after:h-px after:w-full
     after:rounded-full after:transition-transform after:duration-200
     ${isActive
       ? "text-indigo-600 dark:text-indigo-400 after:bg-indigo-500 after:scale-x-100"
       : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100"
     }`;

  const mobileLink = ({ isActive }) =>
    `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800"
        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
    }`;

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled
        ? "border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-sm"
        : "border-b border-transparent bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <Link to="/" className="flex items-center shrink-0">
            <img src={PatrickLogo} alt="Patrick Stel" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            <NavLink to="/" className={desktopLink} end>Home</NavLink>
            <NavLink to="/projects" className={desktopLink}>Projecten</NavLink>
            <NavLink to="/contact" className={desktopLink}>Contact</NavLink>

            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="w-9 h-9 flex items-center justify-center rounded-lg
                         bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                         text-slate-600 dark:text-slate-300
                         hover:bg-slate-200 dark:hover:bg-slate-700
                         hover:text-slate-900 dark:hover:text-slate-100
                         transition-all duration-200"
            >
              {dark ? <IconSun /> : <IconMoon />}
            </button>

            <a
              href="https://github.com/PatrickSt1991"
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-2 rounded-lg
                         bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                         px-4 py-2 text-sm font-medium
                         text-slate-700 dark:text-slate-200
                         hover:bg-slate-200 dark:hover:bg-slate-700
                         hover:text-slate-900 dark:hover:text-slate-100
                         transition-all duration-200"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
                  0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
                  -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
                  .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
                  -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
                  c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                  0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
                  0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Mobile right: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="flex items-center justify-center w-10 h-10 rounded-lg
                         bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                         text-slate-600 dark:text-slate-300
                         hover:bg-slate-200 dark:hover:bg-slate-700
                         transition-all"
            >
              {dark ? <IconSun /> : <IconMoon />}
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg
                         text-slate-600 dark:text-slate-300
                         hover:text-slate-900 dark:hover:text-slate-100
                         hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            <NavLink to="/" end className={mobileLink} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/projects" className={mobileLink} onClick={() => setMenuOpen(false)}>Projecten</NavLink>
            <NavLink to="/contact" className={mobileLink} onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <a href="https://github.com/PatrickSt1991" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium
                         text-slate-600 dark:text-slate-300
                         hover:text-slate-900 dark:hover:text-slate-100
                         hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              onClick={() => setMenuOpen(false)}>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
                  0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
                  -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
                  .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
                  -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
                  c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                  0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
                  0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
