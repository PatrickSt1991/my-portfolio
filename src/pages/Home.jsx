import React from "react";
import { Link } from "react-router-dom";
import profielfoto from "../assets/patrick.jpg";
import { projects } from "../data/projects";

const skills = [
  { name: "C#",             color: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800" },
  { name: ".NET",           color: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800" },
  { name: "JavaScript",     color: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800" },
  { name: "React",          color: "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800" },
  { name: "Vue.js",         color: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800" },
  { name: "Python",         color: "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800" },
  { name: "Home Assistant", color: "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800" },
  { name: "Tailwind CSS",   color: "bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800" },
  { name: "SQL Server",     color: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800" },
  { name: "Docker",         color: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800" },
  { name: "WordPress",      color: "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800" },
  { name: "GitHub",         color: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700" },
];

const stats = [
  { value: `${projects.length}`, label: "Projecten",   color: "text-indigo-600 dark:text-indigo-400" },
  { value: "100%",               label: "Open Source", color: "text-emerald-600 dark:text-emerald-400" },
  { value: "NL",                 label: "Nederland",   color: "text-sky-600 dark:text-sky-400" },
  { value: "∞",                  label: "Koffie",      color: "text-amber-600 dark:text-amber-400" },
];

export default function Home() {
  return (
    <div className="text-slate-800 dark:text-slate-200">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/60 dark:bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-sky-100/60 dark:bg-sky-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="order-2 lg:order-1">
              <div className="fade-in inline-flex items-center gap-2 rounded-full
                              bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800
                              px-4 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                      style={{ boxShadow: "0 0 6px rgba(16,185,129,0.9)" }} />
                Cloud Application Engineer &amp; Developer
              </div>

              <h1 className="fade-in-1">
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  Hi, ik ben
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight gradient-text mt-1">
                  Patrick Stel
                </span>
              </h1>

              <p className="fade-in-2 mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                Ik bouw praktische tools en applicaties — van webapps tot slimme integraties —
                voor thuis, sportclubs en bedrijven.
              </p>

              <div className="fade-in-3 mt-8 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700
                             px-6 py-3 text-sm font-semibold text-white
                             shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35
                             transition-all duration-200"
                >
                  Bekijk projecten
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="mailto:patrick@madebypatrick.nl"
                  className="inline-flex items-center gap-2 rounded-xl
                             bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                             hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600
                             px-6 py-3 text-sm font-semibold
                             text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100
                             shadow-sm transition-all duration-200"
                >
                  Contact opnemen
                </a>
              </div>
            </div>

            {/* Profile image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative float-animation">
                <div className="absolute -inset-10 rounded-full bg-indigo-200/40 dark:bg-indigo-900/30 blur-2xl" />
                <div className="absolute -inset-16 rounded-full bg-sky-200/30 dark:bg-sky-900/20 blur-3xl" />
                <div className="relative rounded-full p-[3px]"
                     style={{ background: "linear-gradient(135deg, #6366f1, #0ea5e9, #6366f1)" }}>
                  <img
                    src={profielfoto}
                    alt="Patrick Stel"
                    className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="fade-in-4 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map(({ value, label, color }) => (
              <div key={label} className="glass-card rounded-2xl p-5 text-center">
                <div className={`text-2xl font-bold ${color}`}>{value}</div>
                <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
          <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase shrink-0">Over mij</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
              Wie ben ik
            </h3>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Cloud Application Engineer overdag, developer in de avonduren. Ik vind het leuk om
                quality time te hebben met mijn gezin en speel graag een potje op de PlayStation.
              </p>
              <p>
                Het leven is al duur genoeg met betaalde applicaties — ik maak graag gratis
                oplossingen. Heb je een idee of wil je samenwerken? Neem gerust contact op!
              </p>
              <p>
                Geen enkele server draait gratis — gebruik je een van mijn tools, dan wordt een
                kleine Ko-fi donatie zeer gewaardeerd.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-sky-500 shrink-0" />
              Actieve projecten
            </h3>
            <ul className="space-y-1">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="flex items-center justify-between group rounded-xl px-3 py-2.5
                               hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200 -mx-3"
                  >
                    <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                      {p.title}
                    </span>
                    <svg className="h-4 w-4 text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all"
                         fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
          <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase shrink-0">Tech Stack</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map(({ name, color }) => (
            <span key={name} className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium ${color}`}>
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ──────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-indigo-500" />
            <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase">Projecten</span>
          </div>
          <Link to="/projects"
            className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Alle projecten
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.slice(0, 3).map((project) => (
            <Link key={project.slug} to={`/projects/${project.slug}`}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-video bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-8">
                <img src={project.image} alt={project.title}
                  className="max-h-20 w-auto object-contain opacity-90 group-hover:opacity-100
                             group-hover:scale-110 transition-all duration-300"
                  loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-2.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center text-sm font-medium text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                  Bekijk project
                  <svg className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform"
                       fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
