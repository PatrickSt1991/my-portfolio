import { useEffect, useState } from "react";
import { GITHUB_USER, GITHUB_ORGS, HIDDEN_REPOS } from "../data/github";

const API = "https://api.github.com";
const CACHE_KEY = "gh-stats-v1";
const CACHE_TTL = 30 * 60 * 1000; // 30 minuten

// Eén fetch per sessie, gedeeld door alle componenten.
let memo = null;
let inflight = null;

async function getJSON(url) {
  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status} voor ${url}`);
  return res.json();
}

function normalize(r) {
  return {
    fullName: r.full_name,
    name: r.name,
    description: r.description,
    url: r.html_url,
    homepage: r.homepage || null,
    stars: r.stargazers_count,
    forks: r.forks_count,
    language: r.language,
    topics: r.topics || [],
    fork: r.fork,
    archived: r.archived,
    updatedAt: r.pushed_at,
  };
}

async function fetchFromApi() {
  const [profile, userRepos, ...orgBatches] = await Promise.all([
    getJSON(`${API}/users/${GITHUB_USER}`),
    getJSON(`${API}/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`),
    ...GITHUB_ORGS.map((o) =>
      getJSON(`${API}/orgs/${o}/repos?per_page=100&sort=pushed`)
    ),
  ]);

  // De-dup op full_name (een verhuisde repo kan in beide lijsten opduiken).
  const seen = new Set();
  const repos = [...userRepos, ...orgBatches.flat()]
    .map(normalize)
    .filter((r) => {
      const k = r.fullName.toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });

  const own = repos.filter((r) => !r.fork);

  const visible = own
    .filter((r) => !HIDDEN_REPOS.has(r.fullName.toLowerCase()))
    .sort(
      (a, b) =>
        b.stars - a.stars ||
        new Date(b.updatedAt) - new Date(a.updatedAt)
    );

  // Opzoektabel voor losse repo-badges, op full_name én bare naam.
  const byName = {};
  for (const r of repos) {
    byName[r.fullName.toLowerCase()] = r;
    if (!(r.name.toLowerCase() in byName)) byName[r.name.toLowerCase()] = r;
  }

  return {
    totals: {
      stars: own.reduce((s, r) => s + r.stars, 0),
      repos: visible.length,
      followers: profile.followers,
    },
    repos: visible,
    byName,
    fetchedAt: Date.now(),
  };
}

async function load() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (raw) {
      const { ts, data } = JSON.parse(raw);
      if (Date.now() - ts < CACHE_TTL) return data;
    }
  } catch {
    /* sessionStorage niet beschikbaar — gewoon live ophalen */
  }

  const data = await fetchFromApi();

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    /* quota/privé-modus — niet erg */
  }
  return data;
}

/** Live GitHub-statistieken + repo-lijst. Gedeeld over de hele app. */
export function useGithub() {
  const [state, setState] = useState(() => ({
    data: memo,
    loading: !memo,
    error: null,
  }));

  useEffect(() => {
    if (memo) return;
    let alive = true;
    if (!inflight) inflight = load();
    inflight
      .then((d) => {
        memo = d;
        if (alive) setState({ data: d, loading: false, error: null });
      })
      .catch((e) => {
        inflight = null; // bij fout opnieuw kunnen proberen
        if (alive) setState({ data: null, loading: false, error: e });
      });
    return () => {
      alive = false;
    };
  }, []);

  return state;
}

/** Live ster/fork-cijfers voor één repo (URL of "owner/name" of bare naam). */
export function useRepoStats(repoRef) {
  const { data } = useGithub();
  if (!data || !repoRef) return null;
  const key = repoRef
    .replace(/^https?:\/\/github\.com\//i, "")
    .replace(/\/+$/, "")
    .toLowerCase();
  return data.byName[key] || data.byName[key.split("/").pop()] || null;
}
