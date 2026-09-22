import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Zet de scrollpositie terug bovenaan bij elke routewissel. Zonder dit blijft
 * een SPA hangen op de oude scrollpositie, waardoor je halverwege een
 * projectpagina binnenkomt. Bij een browser-terugknop (POP) laten we de
 * positie met rust, zodat terugbladeren wel natuurlijk aanvoelt.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
