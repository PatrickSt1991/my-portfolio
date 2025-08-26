import { useEffect } from "react";

export default function KoFiWidget({ menuOpen }) {
  useEffect(() => {
    // Load Ko-fi script only once
    if (!document.getElementById("kofi-widget-script")) {
      const script = document.createElement("script");
      script.id = "kofi-widget-script";
      script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.kofiWidgetOverlay?.draw) {
          window.kofiWidgetOverlay.draw("patrickst", {
            type: "floating-chat",
            "floating-chat.donateButton.text": "Support me",
            "floating-chat.donateButton.background-color": "#323842",
            "floating-chat.donateButton.text-color": "#fff",
            position: "right",
          });
        }
      };
    } else {
      // If script already loaded, redraw in case React re-renders
      if (window.kofiWidgetOverlay?.draw) {
        window.kofiWidgetOverlay.draw("patrickst", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Support me",
          "floating-chat.donateButton.background-color": "#323842",
          "floating-chat.donateButton.text-color": "#fff",
          position: "right",
        });
      }
    }

    // Hide Ko-fi when mobile menu is open
    const kofiWidget = document.querySelector(
      ".ko-fi-overlay, .kofi-overlay, #ko-fi-overlay, #kofi-widget-overlay"
    );
    if (kofiWidget) {
      kofiWidget.style.display = menuOpen ? "none" : "block";
      kofiWidget.style.zIndex = 60; // Just above navbar z-50
      kofiWidget.style.right = "16px";
      kofiWidget.style.bottom = "16px";
    }

    // Keep enforcing position in case Ko-fi updates itself
    const observer = new MutationObserver(() => {
      if (kofiWidget) {
        kofiWidget.style.display = menuOpen ? "none" : "block";
        kofiWidget.style.zIndex = 60;
        kofiWidget.style.right = "16px";
        kofiWidget.style.bottom = "16px";
      }
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    }

    return () => observer.disconnect();
  }, [menuOpen]);

  return null; // widget is injected via script
}
