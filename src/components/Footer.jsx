import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-800/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-300">© {new Date().getFullYear()} Patrick Stel — madebypatrick.nl</div>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-slate-300 hover:text-white" href="/">Home</a>
            <a className="text-slate-300 hover:text-white" href="#/projects">Projects</a>
            <a className="text-slate-300 hover:text-white" href="#/about">About</a>
            <a className="text-slate-300 hover:text-white" href="#/contact">Contact</a>
            <a className="text-slate-300 hover:text-white" href="https://github.com/PatrickSt1991" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.27 1.87 1.27 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.3-1.23 3.3-1.23.67 1.64.25 2.85.13 3.15.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.11.81 2.24l-.01 3.32c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z" clipRule="evenodd"/></svg>
            </a>
            <a className="text-slate-300 hover:text-white" href="https://www.linkedin.com/in/patrick-stel-810434200/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.8v2h.1c.5-.9 1.8-2.1 3.7-2.1 3.9 0 4.6 2.6 4.6 6V23h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V23h-4V8.5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


