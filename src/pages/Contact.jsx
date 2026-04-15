import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");
    try {
      const resp = await fetch("https://formsubmit.co/ajax/patrick@madebypatrick.nl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Contact via madebypatrick.nl: ${data.name || ""}`,
        }),
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const json = await resp.json();
      if (json.success === "true" || json.success === true) {
        setStatus("sent");
        setMessage("Bedankt! Je bericht is verzonden.");
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Er ging iets mis. Probeer het later opnieuw of mail direct.");
    }
  };

  const inputClass =
    "mt-1.5 w-full rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 " +
    "px-4 py-3 text-sm text-slate-900 dark:text-slate-100 " +
    "placeholder:text-slate-400 dark:placeholder:text-slate-500 " +
    "focus:border-indigo-400 focus:outline-none " +
    "focus:ring-2 focus:ring-indigo-400/20 disabled:opacity-50 transition-colors shadow-sm";

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-slate-800 dark:text-slate-200">

      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800
                        px-4 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-5">
          Contact
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">Neem contact op</h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">Heb je een vraag, idee of wil je samenwerken? Stuur een berichtje!</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Left: contact info */}
        <div className="lg:col-span-1 space-y-4">
          <div className="glass-card rounded-2xl p-6">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-5">Direct contact</p>
            <div className="space-y-4">
              <a href="mailto:patrick@madebypatrick.nl"
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center
                                shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                  <svg className="h-4 w-4 text-indigo-500 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                  patrick@madebypatrick.nl
                </span>
              </a>
              <a href="https://github.com/PatrickSt1991" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center
                                shrink-0 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                  <svg className="h-4 w-4 text-slate-600 dark:text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
                      0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
                      -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
                      .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
                      -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
                      c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                      0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
                      0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">PatrickSt1991</span>
              </a>
              <a href="https://www.linkedin.com/in/patrick-stel-810434200/" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 flex items-center justify-center
                                shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5
                      8.5h4V23h-4V8.5zm7 0h3.8v2h.1c.5-.9 1.8-2.1 3.7-2.1 3.9 0 4.6 2.6 4.6 6V23h-4v-5.5c0-1.3
                      0-3-1.9-3s-2.2 1.5-2.2 2.9V23h-4V8.5z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Patrick Stel</span>
              </a>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Support</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              Vind je mijn werk nuttig? Een kleine donatie helpt de servers draaiende te houden!
            </p>
            <a href="https://ko-fi.com/patrickst" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800
                         px-4 py-2.5 text-sm font-medium text-orange-700 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
              ☕ Ko-fi donatie
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-2">
          <form onSubmit={onSubmit} className="glass-card rounded-2xl p-8">
            {status !== "idle" && message && (
              <div className={`mb-6 rounded-xl px-4 py-3 text-sm border ${
                status === "sent"
                  ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                  : status === "error"
                  ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
                  : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
              }`}>{message}</div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Naam</label>
                <input name="name" type="text" required disabled={status === "sending"}
                  placeholder="Jouw naam" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">E-mail</label>
                <input name="email" type="email" required disabled={status === "sending"}
                  placeholder="jouw@email.nl" className={inputClass} />
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Bericht</label>
              <textarea name="message" required rows={6} disabled={status === "sending"}
                placeholder="Vertel me meer..."
                className={inputClass + " resize-none"} />
            </div>

            <div className="mt-6">
              <button type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700
                           disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-sm font-semibold
                           text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900 transition-all duration-200">
                {status === "sending" && (
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === "sending" ? "Versturen…" : status === "sent" ? "✓ Verzonden!" : "Verstuur bericht"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
