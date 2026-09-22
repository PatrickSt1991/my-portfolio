import { useEffect, useRef, useState } from "react";

/**
 * True zodra de bezoeker "prefers-reduced-motion: reduce" heeft staan.
 * Elke animatie in dit project checkt dit en valt terug op een directe,
 * statische weergave in plaats van te bewegen.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  );

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * Observeert één element en zet `visible` op true zodra het in beeld komt.
 * De observer koppelt daarna los: reveals spelen bewust maar één keer af,
 * zodat heen-en-weer scrollen niet blijft flikkeren.
 */
export function useInView({ threshold = 0.15, rootMargin = "0px 0px -80px 0px" } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Zonder IntersectionObserver (of met reduced motion) tonen we alles meteen.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}

/**
 * Telt van 0 naar `target` zodra `start` true wordt. Gebruikt een ease-out
 * curve zodat het tellen snel begint en netjes uitdempt op het eindgetal.
 * Niet-numerieke waarden (zoals de placeholder tijdens het laden) worden
 * ongewijzigd doorgegeven.
 */
export function useCountUp(target, start, { duration = 1400 } = {}) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || typeof target !== "number") return;
    if (reduced || duration === 0) {
      setValue(target);
      return;
    }

    let frame;
    const begin = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - begin) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration, reduced]);

  return typeof target === "number" ? value : target;
}
