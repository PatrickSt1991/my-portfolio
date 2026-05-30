import { useEffect } from "react";

const SITE = "https://madebypatrick.nl";
const DEFAULT_IMAGE = `${SITE}/og-image.png`;

/** Upsert a <meta> tag by name or property. */
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets per-route document head fields. Client-side only (this site is a SPA),
 * which keeps tab titles, canonical URLs and JS-aware crawlers correct.
 * For per-route social unfurling, see the SSG note in the README.
 */
export default function Seo({ title, description, path = "/", image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    if (title) document.title = title;
    setMeta("name", "description", description);
    setCanonical(url);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);

    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, path, image]);

  return null;
}
