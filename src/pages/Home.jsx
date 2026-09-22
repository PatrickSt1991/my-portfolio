import { Link } from "react-router-dom";
// De originele patrick.jpg is 4000x4000 (1,5 MB); de foto wordt hooguit 288 CSS-px
// breed getoond. Deze twee varianten dekken 2x DPR voor een fractie van het gewicht.
import profielfotoWebp from "../assets/patrick-576.webp";
import profielfotoJpg from "../assets/patrick-576.jpg";
import { projects } from "../data/projects";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import RepoBadge from "../components/RepoBadge";
import { useGithub } from "../hooks/useGithub";
import { formatCount } from "../data/github";
import { useCountUp, useInView } from "../hooks/useMotion";

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

/** Terugkerend kopje met een lijn aan weerszijden. */
function SectionDivider({ children }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
      <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
        {children}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
    </div>
  );
}

/**
 * Eén statistiektegel. Het getal telt op zodra de tegel in beeld komt.
 * Zolang de GitHub-cijfers nog binnenkomen staat er een shimmer in plaats van
 * een placeholder-teken, zodat de tegel nooit leeg of kapot oogt.
 */
function StatCard({ target, label, color, format = formatCount }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const count = useCountUp(target, inView && target != null);
  const loading = target == null;

  return (
    <div ref={ref} className="glass-card group rounded-2xl p-5 text-center transition-transform duration-300 hover:-translate-y-1">
      {loading ? (
        <div className="skeleton mx-auto h-8 w-14 rounded-lg bg-slate-200/70 dark:bg-slate-700/50" />
      ) : (
        <div className={`tabular text-2xl font-bold sm:text-3xl ${color}`}>{format(count)}</div>
      )}
      <div className="mt-1.5 text-xs text-slate-400 dark:text-slate-500">{label}</div>
    </div>
  );
}

// `target: null` betekent "nog aan het laden"; StatCard toont dan een shimmer.
function buildStats(data) {
  const t = data?.totals;
  return [
    { key: "stars",     target: t ? t.stars : null,     label: "GitHub sterren", color: "text-amber-500 dark:text-amber-400" },
    { key: "repos",     target: t ? t.repos : null,     label: "Repositories",   color: "text-indigo-600 dark:text-indigo-400" },
    { key: "followers", target: t ? t.followers : null, label: "Volgers",        color: "text-sky-600 dark:text-sky-400" },
    { key: "oss",       target: 100, label: "Open Source",   color: "text-emerald-600 dark:text-emerald-400", format: (n) => `${n}%` },
  ];
}

export default function Home() {
  const { data } = useGithub();
  const stats = buildStats(data);

  return (
    <div className="text-slate-800 dark:text-slate-200">
      <Seo
        title="Patrick Stel, Cloud Application Engineer & Developer"
        description="Portfolio van Patrick Stel. Open-source tools voor thuis (Home Assistant), sportclubs en bedrijven, waaronder de Apps2Samsung Installer."
        path="/"
      />

      {/* === Hero ====================================================== */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Tekst */}
            <div className="order-2 lg:order-1">
              <div className="fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200
                              bg-indigo-50/80 px-4 py-1.5 text-xs font-medium text-indigo-600 backdrop-blur
                              dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Beschikbaar voor projecten
              </div>

              <h1 className="fade-in-1">
                <span className="block text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
                  Hi, ik ben
                </span>
                <span className="gradient-text mt-1 block text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Patrick Stel
                </span>
              </h1>

              <p className="fade-in-2 mt-6 max-w-lg text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                Cloud Application Engineer &amp; developer. Ik bouw praktische tools en
                applicaties, van webapps tot slimme integraties, voor thuis, sportclubs
                en bedrijven.
              </p>

              <div className="fade-in-3 mt-8 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm
                             font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200
                             hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/35"
                >
                  Bekijk projecten
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                       fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="mailto:patrick@madebypatrick.nl"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3
                             text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-200
                             hover:-translate-y-0.5 hover:border-indigo-300 hover:text-slate-900 hover:shadow-md
                             dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200
                             dark:hover:border-indigo-500 dark:hover:text-slate-100"
                >
                  Contact opnemen
                </a>
              </div>
            </div>

            {/* Profielfoto */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="float-animation relative">
                <div className="pointer-events-none absolute -inset-10 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-800/30" />
                <div className="pointer-events-none absolute -inset-16 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-900/25" />
                {/* Draaiende gradient-ring: het masker maakt er een dunne rand van. */}
                <div
                  className="ring-spin pointer-events-none absolute -inset-[3px] rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #6366f1, #0ea5e9, #a855f7, #6366f1)",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
                    WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
                  }}
                />
                <picture>
                  <source srcSet={profielfotoWebp} type="image/webp" />
                  <img
                    src={profielfotoJpg}
                    alt="Patrick Stel"
                    width={576}
                    height={576}
                    fetchPriority="high"
                    decoding="async"
                    className="relative h-48 w-48 rounded-full object-cover shadow-2xl shadow-indigo-500/20
                               sm:h-56 sm:w-56 lg:h-72 lg:w-72"
                  />
                </picture>
              </div>
            </div>
          </div>

          {/* Statistieken */}
          <div className="fade-in-4 mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ key, ...stat }) => (
              <StatCard key={key} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* === Over mij ================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionDivider>Over mij</SectionDivider>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal delay={80}>
            <div className="glass-card h-full rounded-2xl p-8">
              <h2 className="mb-4 flex items-center gap-2.5 text-base font-semibold text-slate-900 dark:text-slate-100">
                <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                Wie ben ik
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Cloud Application Engineer overdag, developer in de avonduren. Ik vind het leuk om
                  quality time te hebben met mijn gezin en speel graag een potje op de PlayStation.
                </p>
                <p>
                  Het leven is al duur genoeg met betaalde applicaties, dus maak ik graag gratis
                  oplossingen. Heb je een idee of wil je samenwerken? Neem gerust contact op!
                </p>
                <p>
                  Geen enkele server draait gratis. Gebruik je een van mijn tools, dan wordt een
                  kleine Ko-fi donatie zeer gewaardeerd.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="glass-card h-full rounded-2xl p-8">
              <h2 className="mb-4 flex items-center gap-2.5 text-base font-semibold text-slate-900 dark:text-slate-100">
                <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                Actieve projecten
              </h2>
              <ul className="space-y-1">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/projects/${p.slug}`}
                      className="group -mx-3 flex items-center justify-between rounded-xl px-3 py-2.5
                                 transition-all duration-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                    >
                      <span className="text-sm text-slate-600 transition-colors group-hover:text-slate-900
                                       dark:text-slate-300 dark:group-hover:text-slate-100">
                        {p.title}
                      </span>
                      <svg className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1
                                      group-hover:text-indigo-500 dark:text-slate-600 dark:group-hover:text-indigo-400"
                           fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === Tech stack ================================================ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionDivider>Tech stack</SectionDivider>
        </Reveal>
        <div className="flex flex-wrap gap-2">
          {skills.map(({ name, color }, i) => (
            <Reveal key={name} as="span" delay={i * 40} className="inline-block">
              <span
                className={`inline-flex cursor-default items-center rounded-full border px-4 py-1.5 text-sm
                            font-medium transition-transform duration-200 hover:-translate-y-0.5 ${color}`}
              >
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* === Uitgelichte projecten ===================================== */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-indigo-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Projecten
              </span>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors
                         hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              Alle projecten
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1"
                   fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <Reveal key={project.slug} delay={i * 110}>
              <Link
                to={`/projects/${project.slug}`}
                className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl
                           transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="flex aspect-video items-center justify-center bg-slate-100/60 p-8 dark:bg-slate-800/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-20 w-auto object-contain opacity-90 transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-indigo-600
                                 dark:text-slate-100 dark:group-hover:text-indigo-400">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {project.description}
                  </p>
                  {project.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-0.5 text-xs
                                     text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.repo && <RepoBadge repo={project.repo} className="mt-3" />}
                  <div className="mt-4 flex items-center pt-1 text-sm font-medium text-indigo-500
                                  group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-300">
                    Bekijk project
                    <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
                         fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
