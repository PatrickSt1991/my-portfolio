import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

const themes = {
  "digi-graf":          { imageBg: "from-purple-50 to-slate-50 dark:from-purple-900/20 dark:to-slate-800",  topBorder: "from-purple-400 via-purple-300",  tagColor: "text-purple-600 dark:text-purple-400" },
  "club-info-board":    { imageBg: "from-emerald-50 to-slate-50 dark:from-emerald-900/20 dark:to-slate-800", topBorder: "from-emerald-400 via-emerald-300", tagColor: "text-emerald-600 dark:text-emerald-400" },
  "jellyfin-2-samsung": { imageBg: "from-amber-50 to-slate-50 dark:from-amber-900/20 dark:to-slate-800",   topBorder: "from-amber-400 via-amber-300",   tagColor: "text-amber-600 dark:text-amber-400" },
  "container-cleaning": { imageBg: "from-teal-50 to-slate-50 dark:from-teal-900/20 dark:to-slate-800",    topBorder: "from-teal-400 via-teal-300",     tagColor: "text-teal-600 dark:text-teal-400" },
};
const fallbackTheme = themes["digi-graf"];

function IconGithub() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
        0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
        -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
        .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
        -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
        c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
        0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
        0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

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

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-slate-800 dark:text-slate-200">

      {/* Header */}
      <div className="mb-10">
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
      <div className="flex flex-wrap gap-2 mb-10">
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
          Geen projecten gevonden voor "{activeTag}".
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((project) => {
            const theme = themes[project.slug] ?? fallbackTheme;
            return (
              <div key={project.slug}
                onClick={() => navigate(`/projects/${project.slug}`)}
                className="glass-card rounded-2xl overflow-hidden flex flex-col
                           hover:-translate-y-1 transition-all duration-300 group cursor-pointer">

                <div className={`h-[2px] w-full bg-gradient-to-r ${theme.topBorder} to-transparent`} />

                <div className={`h-48 flex items-center justify-center bg-gradient-to-br ${theme.imageBg}`}>
                  <img src={project.image} alt={project.title}
                    className="max-h-28 w-auto object-contain opacity-90
                               group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    loading="lazy" />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h2>
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
                          <IconGithub /> Repo
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
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
