import { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useMotion";

/**
 * Zwevende knop naar de bovenkant van de pagina. Staat links zodat hij niet
 * botst met de Ko-fi widget rechtsonder.
 */
export default function BackToTop({ hidden = false }) {
  const [show, setShow] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = show && !hidden;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })}
      aria-label="Terug naar boven"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 left-4 z-[60] flex h-11 w-11 items-center justify-center rounded-full
                  border border-slate-200 bg-white/90 text-slate-600 shadow-lg shadow-slate-900/10 backdrop-blur
                  transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600
                  dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-300
                  dark:shadow-black/40 dark:hover:border-indigo-600 dark:hover:text-indigo-400
                  ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
