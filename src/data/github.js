// Live-GitHub configuratie voor de statistieken en de "Meer op GitHub" sectie.
// De site haalt deze accounts client-side op via de publieke GitHub API.

export const GITHUB_USER = "PatrickSt1991";

// Organisaties waarvan publieke repos ook meetellen (bv. het Jellyfin2Samsung
// vlaggenschip dat naar de org is verhuisd).
export const GITHUB_ORGS = ["Jellyfin2Samsung"];

// Repos die NIET in de automatische "Meer op GitHub" grid of de repo-telling
// horen. Forks worden al automatisch weggelaten; dit is voor profiel-,
// packaging- en meta-repos. Vergelijking gebeurt case-insensitive op full_name.
export const HIDDEN_REPOS = new Set(
  [
    "PatrickSt1991/my-portfolio", // deze site zelf
    "PatrickSt1991/PatrickSt1991", // profiel-README
    "Jellyfin2Samsung/.github", // org-meta
    "Jellyfin2Samsung/winget-samsung-jellyfin-installer", // packaging
    "Jellyfin2Samsung/homebrew-samsung-jellyfin-installer", // packaging
  ].map((s) => s.toLowerCase())
);

// 1409 -> "1.4k". Houdt kleine getallen ongewijzigd.
export function formatCount(n) {
  if (n == null) return "";
  return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
}

// Taal → kleur voor het bolletje op een repo-kaart (Tailwind bg-*).
export const LANG_COLORS = {
  "C#": "bg-violet-500",
  ".NET": "bg-violet-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  Vue: "bg-emerald-500",
  Python: "bg-sky-500",
  "C++": "bg-pink-500",
  C: "bg-slate-500",
  HTML: "bg-orange-500",
  CSS: "bg-indigo-500",
  PHP: "bg-indigo-400",
  Ruby: "bg-red-500",
  Shell: "bg-green-500",
  Go: "bg-cyan-500",
  Java: "bg-amber-600",
  Dart: "bg-teal-500",
};
