import { useRepoStats } from "../hooks/useGithub";
import { StarIcon, ForkIcon } from "./GhIcons";
import { formatCount } from "../data/github";

/**
 * Live ster/fork-badge voor één repo. Rendert niets tot de cijfers binnen zijn
 * (of als de repo niet gevonden wordt), zodat de layout nooit "kapot" oogt.
 */
export default function RepoBadge({ repo, className = "" }) {
  const stats = useRepoStats(repo);
  if (!stats || stats.stars == null) return null;

  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-medium text-slate-500 dark:text-slate-400 ${className}`}
    >
      <span className="inline-flex items-center gap-1 text-amber-500 dark:text-amber-400" title={`${stats.stars} sterren op GitHub`}>
        <StarIcon /> {formatCount(stats.stars)}
      </span>
      {stats.forks > 0 && (
        <span className="inline-flex items-center gap-1" title={`${stats.forks} forks`}>
          <ForkIcon /> {formatCount(stats.forks)}
        </span>
      )}
    </span>
  );
}
