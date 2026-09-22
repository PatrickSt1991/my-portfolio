import { useEffect, useState } from "react";

/**
 * Dunne voortgangsbalk onderaan de navbar die meeloopt met de scrollpositie.
 * Geeft op lange projectpagina's direct gevoel voor hoeveel er nog komt.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.min(doc.scrollTop / scrollable, 1) : 0);
    };

    // rAF-throttle: bij snel scrollen rekenen we hooguit één keer per frame.
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden" aria-hidden="true">
      <div
        className="h-full origin-left bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-500"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
