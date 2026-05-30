import { LANG_COLORS, formatCount } from "../data/github";
import { StarIcon, ForkIcon, GithubIcon } from "./GhIcons";

/** Compacte kaart voor een automatisch opgehaalde GitHub-repo. */
export default function RepoCard({ repo }) {
  const dot = LANG_COLORS[repo.language] || "bg-slate-400";

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card rounded-2xl p-5 flex flex-col group hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
          {repo.name}
        </h3>
        <span className="text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors shrink-0">
          <GithubIcon className="h-4 w-4" />
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 flex-1">
        {repo.description || "Geen omschrijving."}
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
            {repo.language}
          </span>
        )}
        {repo.stars > 0 && (
          <span className="inline-flex items-center gap-1 text-amber-500 dark:text-amber-400">
            <StarIcon /> {formatCount(repo.stars)}
          </span>
        )}
        {repo.forks > 0 && (
          <span className="inline-flex items-center gap-1">
            <ForkIcon /> {formatCount(repo.forks)}
          </span>
        )}
        {repo.archived && (
          <span className="ml-auto rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-[10px] uppercase tracking-wide">
            Archief
          </span>
        )}
      </div>
    </a>
  );
}
