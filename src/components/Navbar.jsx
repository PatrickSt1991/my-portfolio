import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PatrickLogo from "../assets/patrick_logo.svg";
import { useTheme } from "../context/ThemeContext";
import { GithubIcon } from "./GhIcons";
import ScrollProgress from "./ScrollProgress";

function IconSun({ className = "h-4 w-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function IconMoon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

/**
 * Zon en maan liggen over elkaar; alleen de actieve draait en faded in.
 * Dat leest prettiger dan het icoon hard vervangen bij het omschakelen.
 */
function ThemeIcon({ dark }) {
  return (
    <span className="relative block h-4 w-4">
      <IconSun
        className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
          dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
        }`}
      />
      <IconMoon
        className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
          dark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </span>
  );
}

const toggleClass =
  "group relative flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 " +
  "text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 " +
  "hover:text-indigo-600 hover:shadow-md hover:shadow-indigo-500/15 " +
  "dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 " +
  "dark:hover:border-indigo-500 dark:hover:text-indigo-400";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Achtergrond niet laten meescrollen terwijl het mobiele menu openstaat.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [menuOpen]);

  // Escape sluit het mobiele menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, setMenuOpen]);

  const desktopLink = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors duration-200
     after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
     after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-sky-400
     after:origin-left after:transition-transform after:duration-300
     ${isActive
       ? "text-indigo-600 after:scale-x-100 dark:text-indigo-400"
       : "text-slate-600 after:scale-x-0 hover:text-slate-900 hover:after:scale-x-100 dark:text-slate-300 dark:hover:text-slate-100"
     }`;

  const mobileLink = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "border border-indigo-100 bg-indigo-50 text-indigo-600 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/75 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <Link to="/" className="flex shrink-0 items-center transition-transform duration-200 hover:scale-[1.03]">
            <img src={PatrickLogo} alt="Patrick Stel" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-7 md:flex">
            <NavLink to="/" className={desktopLink} end>Home</NavLink>
            <NavLink to="/projects" className={desktopLink}>Projecten</NavLink>
            <NavLink to="/contact" className={desktopLink}>Contact</NavLink>

            <button
              onClick={toggle}
              aria-label={dark ? "Schakel naar lichte modus" : "Schakel naar donkere modus"}
              aria-pressed={dark}
              className={`${toggleClass} h-9 w-9`}
            >
              <ThemeIcon dark={dark} />
            </button>

            <a
              href="https://github.com/PatrickSt1991"
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70
                         px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200
                         hover:-translate-y-0.5 hover:border-indigo-300 hover:text-slate-900
                         hover:shadow-md hover:shadow-indigo-500/15
                         dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200
                         dark:hover:border-indigo-500 dark:hover:text-slate-100"
            >
              <GithubIcon />
              GitHub
            </a>
          </div>

          {/* Mobiel */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              aria-label={dark ? "Schakel naar lichte modus" : "Schakel naar donkere modus"}
              aria-pressed={dark}
              className={`${toggleClass} h-10 w-10`}
            >
              <ThemeIcon dark={dark} />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600
                         transition-all hover:bg-slate-100 hover:text-slate-900
                         dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu openen of sluiten"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {/* Drie streepjes die naar een kruis vouwen. */}
              <span className="relative block h-4 w-5">
                <span className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${menuOpen ? "scale-x-0 opacity-0" : ""}`} />
                <span className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobiel menu: uitschuivend in plaats van in/uit de DOM klappen. */}
      <div
        id="mobile-menu"
        /* inert houdt de links buiten de tab-volgorde zolang het menu dicht is */
        inert={menuOpen ? undefined : ""}
        className={`overflow-hidden border-slate-200 bg-white/95 backdrop-blur-xl transition-[max-height,opacity]
                    duration-300 ease-out md:hidden dark:border-slate-800 dark:bg-slate-950/95 ${
          menuOpen ? "max-h-96 border-t opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
          <NavLink to="/" end className={mobileLink} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/projects" className={mobileLink} onClick={() => setMenuOpen(false)}>Projecten</NavLink>
          <NavLink to="/contact" className={mobileLink} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <a
            href="https://github.com/PatrickSt1991"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-600
                       transition-all hover:bg-slate-50 hover:text-slate-900
                       dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            onClick={() => setMenuOpen(false)}
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>

      <ScrollProgress />
    </nav>
  );
}
