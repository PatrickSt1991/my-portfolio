import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import RepoBadge from "../components/RepoBadge";
import RepoCard from "../components/RepoCard";
import { GithubIcon } from "../components/GhIcons";
import { useGithub } from "../hooks/useGithub";
import { GITHUB_USER } from "../data/github";

// Normaliseer een repo-URL/slug naar "owner/name" (lowercase) voor vergelijken.
function repoKey(ref) {
  return ref
    ? ref.replace(/^https?:\/\/github\.com\//i, "").replace(/\/+$/, "").toLowerCase()
    : "";
}

const themes = {
  "digi-graf":          { imageBg: "from-purple-50 to-slate-50 dark:from-purple-900/20 dark:to-slate-800",  topBorder: "from-purple-400 via-purple-300",  tagColor: "text-purple-600 dark:text-purple-400" },
  "club-info-board":    { imageBg: "from-emerald-50 to-slate-50 dark:from-emerald-900/20 dark:to-slate-800", topBorder: "from-emerald-400 via-emerald-300", tagColor: "text-emerald-600 dark:text-emerald-400" },
  "apps-2-samsung": { imageBg: "from-amber-50 to-slate-50 dark:from-amber-900/20 dark:to-slate-800",   topBorder: "from-amber-400 via-amber-300",   tagColor: "text-amber-600 dark:text-amber-400" },
  "container-cleaning": { imageBg: "from-teal-50 to-slate-50 dark:from-teal-900/20 dark:to-slate-800",    topBorder: "from-teal-400 via-teal-300",     tagColor: "text-teal-600 dark:text-teal-400" },
};
const fallbackTheme = themes["digi-graf"];

function IconDownload() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState("Alle");
  const navigate = useNavigate();

  const tagCounts = projects.reduce((acc, p) => {
    (p.tags || []).forEach((t) => { acc[t] = (acc[t] || 0) + 1; });
    return acc;
  }, {});
  const allTagsOrdered = ["Alle", ...Object.keys(tagCounts)];

  const filtered = activeTag === "Alle" ? projects : projects.filter((p) => p.tags?.includes(activeTag));

  // Live GitHub-repos die nog geen uitgelicht project zijn.
  const { data: gh, loading: ghLoading, error: ghError } = useGithub();
  const featuredKeys = new Set(projects.map((p) => repoKey(p.repo)));
  const extraRepos = (gh?.repos || []).filter(
    (r) => !featuredKeys.has(r.fullName.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-slate-800 dark:text-slate-200">
      <Seo
        title="Projecten, het werk van Patrick Stel"
        description="Open-source projecten van Patrick Stel: Samsung Jellyfin Installer, Club Info Board, Home Assistant integraties en meer."
        path="/projects"
      />

      {/* Header */}
      <div className="fade-in mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800
                        px-4 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-5">
          Portfolio
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">Mijn Projecten</h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-2xl">
          Open-source tools die ik bouw om het leven een stukje makkelijker te maken.
        </p>
      </div>

      {/* Tag filter */}
      <div className="fade-in-1 mb-10 flex flex-wrap gap-2">
        {allTagsOrdered.map((tag) => {
          const count = tag === "Alle" ? projects.length : tagCounts[tag];
          const isActive = activeTag === tag;
          return (
            <button key={tag} onClick={() => setActiveTag(tag)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs
                          font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-200 dark:shadow-indigo-900"
                  : "bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-slate-100"
              }`}>
              {tag}
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none ${
                isActive ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
              }`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 text-slate-400 dark:text-slate-500">
          Geen projecten gevonden voor &quot;{activeTag}&quot;.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => {
            const theme = themes[project.slug] ?? fallbackTheme;
            return (
              <Reveal key={project.slug} delay={(i % 2) * 90} className="h-full">
                <article
                  role="link"
                  tabIndex={0}
                  aria-label={`Bekijk ${project.title}`}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  onKeyDown={(e) => {
                    if (e.target !== e.currentTarget) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      navigate(`/projects/${project.slug}`);
                    }
                  }}
                  className="glass-card group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl
                             transition-transform duration-300 hover:-translate-y-1.5">

                  <div className={`h-[2px] w-full bg-gradient-to-r ${theme.topBorder} to-transparent`} />

                  <div className={`h-48 flex items-center justify-center bg-gradient-to-br ${theme.imageBg}`}>
                    <img src={project.image} alt={project.title}
                      className="max-h-28 w-auto object-contain opacity-90
                                 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      loading="lazy" />
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h2>
                      {project.repo && <RepoBadge repo={project.repo} className="mt-1 shrink-0" />}
                    </div>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{project.description}</p>

                    {project.tags && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <button key={tag}
                            onClick={(e) => { e.stopPropagation(); setActiveTag(tag); }}
                            className={`text-xs rounded-full border px-2.5 py-0.5 transition-colors
                                        bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600
                                        ${activeTag === tag ? theme.tagColor + " font-medium" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}>
                            {tag}
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-100 dark:border-slate-700/60">
                      <div className="flex items-center gap-2">
                        {project.repo && (
                          <a href={project.repo} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                                       hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all">
                            <GithubIcon className="h-3.5 w-3.5" /> Repo
                          </a>
                        )}
                        {project.download && (
                          <a href={project.download} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                                       hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all">
                            <IconDownload /> Download
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800
                                       hover:bg-emerald-100 dark:hover:bg-emerald-900/30 px-3 py-1.5 text-xs text-emerald-700 dark:text-emerald-400 transition-all">
                            <IconExternalLink /> Demo
                          </a>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                        Bekijk
                        <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                             fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      )}

      {/* === Meer op GitHub: live opgehaalde publieke repos ============ */}
      <section className="mt-20">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
          <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase shrink-0">Meer op GitHub</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
        </div>
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8">
          Al mijn publieke repositories, live opgehaald van GitHub.
        </p>

        {ghLoading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton glass-card h-36 rounded-2xl p-5" />
            ))}
          </div>
        )}

        {!ghLoading && ghError && (
          <p className="text-center text-sm text-slate-400 dark:text-slate-500">
            GitHub-gegevens konden even niet geladen worden.{" "}
            <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer"
               className="text-indigo-600 dark:text-indigo-400 hover:underline">
              Bekijk ze direct op GitHub →
            </a>
          </p>
        )}

        {!ghLoading && !ghError && extraRepos.length > 0 && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {extraRepos.map((r, i) => (
                <Reveal key={r.fullName} delay={(i % 3) * 90} className="h-full">
                  <RepoCard repo={r} />
                </Reveal>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Bekijk alles op GitHub
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
