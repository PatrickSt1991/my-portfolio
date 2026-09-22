import { useEffect } from "react";
import { useReducedMotion } from "../hooks/useMotion";

/**
 * Laat een zachte lichtvlek meelopen met de cursor over glass-cards.
 * Eén listener op document-niveau in plaats van een handler per kaart: dat
 * schaalt mee met de live opgehaalde GitHub-lijst zonder tientallen
 * event-handlers. De positie gaat als CSS-variabele naar de kaart, zodat
 * het tekenen volledig in CSS gebeurt.
 */
export default function Spotlight() {
  const reduced = useReducedMotion();

  useEffect(() => {
    // Alleen op apparaten met een echte muisaanwijzer, en niet bij reduced motion.
    if (reduced || !window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches) return;

    let current = null;
    let frame = null;
    let pending = null;

    const paint = () => {
      frame = null;
      if (!current || !pending) return;
      const rect = current.getBoundingClientRect();
      current.style.setProperty("--spot-x", `${pending.x - rect.left}px`);
      current.style.setProperty("--spot-y", `${pending.y - rect.top}px`);
    };

    const onMove = (e) => {
      const card = e.target.closest?.(".glass-card");
      if (card !== current) {
        current?.style.removeProperty("--spot-opacity");
        current = card;
        current?.style.setProperty("--spot-opacity", "1");
      }
      if (!current) return;
      pending = { x: e.clientX, y: e.clientY };
      if (frame === null) frame = requestAnimationFrame(paint);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame !== null) cancelAnimationFrame(frame);
      current?.style.removeProperty("--spot-opacity");
    };
  }, [reduced]);

  return null;
}
