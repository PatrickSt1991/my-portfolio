import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

const themes = {
  "digi-graf":          { gradient: "from-purple-50 dark:from-purple-900/20",  border: "from-purple-400 via-purple-300",  tag: "text-purple-700 bg-purple-50 border-purple-200 dark:text-purple-300 dark:bg-purple-900/30 dark:border-purple-800" },
  "club-info-board":    { gradient: "from-emerald-50 dark:from-emerald-900/20", border: "from-emerald-400 via-emerald-300", tag: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/30 dark:border-emerald-800" },
  "jellyfin-2-samsung": { gradient: "from-amber-50 dark:from-amber-900/20",   border: "from-amber-400 via-amber-300",    tag: "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-300 dark:bg-amber-900/30 dark:border-amber-800" },
  "container-cleaning": { gradient: "from-teal-50 dark:from-teal-900/20",    border: "from-teal-400 via-teal-300",      tag: "text-teal-700 bg-teal-50 border-teal-200 dark:text-teal-300 dark:bg-teal-900/30 dark:border-teal-800" },
};

function IconDownload() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}
function IconExternalLink() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
function IconGithub() {
  return (
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
  );
}
function IconBook() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const theme = themes[slug] ?? themes["digi-graf"];
  const others = projects.filter((p) => p.slug !== slug);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center py-20 px-4">
        <div className="text-7xl font-bold text-slate-200 dark:text-slate-800 mb-4">404</div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Project niet gevonden</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">Dit project bestaat niet of is verwijderd.</p>
        <Link to="/projects"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700
                     px-6 py-3 text-sm font-semibold text-white transition-all">
          ← Terug naar projecten
        </Link>
      </div>
    );
  }

  const buttons = [
    project.download && { label: "Download",    href: project.download, icon: <IconDownload />, cls: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900" },
    project.link     && { label: "Live Demo",   href: project.link,     icon: <IconExternalLink />, cls: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200 dark:shadow-emerald-900" },
    project.repo     && { label: "Source Code", href: project.repo,     icon: <IconGithub />,    cls: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100 shadow-sm" },
    project.manual   && { label: "Handleiding", href: project.manual,   icon: <IconBook />,      cls: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100 shadow-sm" },
  ].filter(Boolean);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-slate-800 dark:text-slate-200">

      {/* Back */}
      <Link to="/projects"
        className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Terug naar projecten
      </Link>

      {/* Hero card */}
      <div className="mt-6 glass-card rounded-2xl overflow-hidden">
        <div className={`h-[2px] bg-gradient-to-r ${theme.border} to-transparent`} />
        <div className={`bg-gradient-to-br ${theme.gradient} via-white dark:via-slate-900 to-white dark:to-slate-900 p-8`}>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm
                            flex items-center justify-center p-4 shrink-0">
              <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 leading-tight">{project.title}</h1>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{project.description}</p>
              {project.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`text-xs rounded-full border px-2.5 py-0.5 font-medium ${theme.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {buttons.length > 0 && (
            <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap gap-3">
              {buttons.map(({ label, href, icon, cls }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${cls}`}>
                  {icon}{label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content card */}
      <div className="mt-5 glass-card rounded-2xl p-8">
        {project.topContent && (
          <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-700/50
                         [&_blockquote]:pl-5 [&_blockquote]:border-l-2 [&_blockquote]:border-indigo-400
                         [&_blockquote]:text-lg [&_blockquote]:italic [&_blockquote]:text-slate-600
                         dark:[&_blockquote]:text-slate-400
                         [&_blockquote]:leading-relaxed [&_blockquote]:mb-4
                         [&_p]:text-slate-600 dark:[&_p]:text-slate-400 [&_p]:leading-relaxed [&_p]:mt-3"
            dangerouslySetInnerHTML={{ __html: project.topContent }} />
        )}
        <div className="[&_p]:text-slate-600 dark:[&_p]:text-slate-400 [&_p]:leading-relaxed [&_p]:mb-3
                        [&_.font-semibold]:block [&_.font-semibold]:text-slate-800 dark:[&_.font-semibold]:text-slate-200
                        [&_.font-semibold]:font-semibold [&_.font-semibold]:mb-3 [&_.font-semibold]:mt-1
                        [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-2.5 [&_ul]:mb-4
                        [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:text-slate-600 dark:[&_li]:text-slate-400
                        [&_li]:before:content-[''] [&_li]:before:mt-[7px] [&_li]:before:h-1.5
                        [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-indigo-500
                        [&_li]:before:shrink-0
                        [&_strong]:text-slate-800 dark:[&_strong]:text-slate-200 [&_strong]:font-semibold
                        [&_a]:text-indigo-600 dark:[&_a]:text-indigo-400 [&_a]:hover:text-indigo-800 dark:[&_a]:hover:text-indigo-300"
          dangerouslySetInnerHTML={{ __html: project.content }} />
      </div>

      {/* Other projects */}
      {others.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase shrink-0">Andere projecten</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((p) => {
              const t = themes[p.slug] ?? themes["digi-graf"];
              return (
                <div key={p.slug} onClick={() => navigate(`/projects/${p.slug}`)}
                  className="glass-card rounded-2xl overflow-hidden cursor-pointer
                             hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`h-[2px] bg-gradient-to-r ${t.border} to-transparent`} />
                  <div className="p-5">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm
                                    flex items-center justify-center p-2 mb-3">
                      <img src={p.image} alt={p.title} className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{p.title}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
