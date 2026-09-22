import { Link } from "react-router-dom";
import PatrickLogo from "../assets/patrick_logo.svg";
import { GithubIcon } from "./GhIcons";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200/80 bg-white/70 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 items-start">

          <div>
            <img src={PatrickLogo} alt="Patrick Stel" className="h-12 w-auto mb-3" />
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Praktische open-source tools, gebouwd met passie.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
              Navigatie
            </p>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/projects", label: "Projecten" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="flex gap-2">
              <a href="https://github.com/PatrickSt1991" target="_blank" rel="noreferrer" aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center
                           text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-200 dark:hover:bg-slate-700">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/patrick-stel-810434200/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center
                           text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-all">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5
                    8.5h4V23h-4V8.5zm7 0h3.8v2h.1c.5-.9 1.8-2.1 3.7-2.1 3.9 0 4.6 2.6 4.6 6V23h-4v-5.5c0-1.3
                    0-3-1.9-3s-2.2 1.5-2.2 2.9V23h-4V8.5z" />
                </svg>
              </a>
              <a href="mailto:patrick@madebypatrick.nl" aria-label="E-mail"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center
                           text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-400 dark:text-slate-500">© {new Date().getFullYear()} Patrick Stel · madebypatrick.nl</p>
        </div>
      </div>
    </footer>
  );
}
