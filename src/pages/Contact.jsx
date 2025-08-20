import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setStatus("sending");
    setMessage("");
    try {
      const resp = await fetch("https://formsubmit.co/ajax/patrick@madebypatrick.nl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
      setMessage("Er ging iets mis met verzenden. Probeer het later opnieuw of mail direct.");
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 text-slate-200">
      <div className="mb-6">
        <SectionHeading
          eyebrow="Contact"
          title="Neem contact op"
          description="Stuur me gerust een bericht. Ik reageer zo snel mogelijk."
        />
      </div>

      <form onSubmit={onSubmit} className="rounded-xl border border-slate-800/60 bg-slate-800/70 p-6 shadow-sm">
        {status !== 'idle' && message && (
          <div className={`mb-4 rounded-md px-3 py-2 text-sm ${status === 'sent' ? 'bg-emerald-600/20 text-emerald-200 border border-emerald-600/40' : status === 'error' ? 'bg-rose-700/20 text-rose-200 border border-rose-700/40' : 'bg-slate-700/30 text-slate-200 border border-slate-700/50'}`}>{message}</div>
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-300">Naam</label>
            <input name="name" type="text" required disabled={status==='sending'} className="mt-1 w-full rounded-md border border-slate-700 bg-slate-800/70 px-3 py-2 text-white shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-0 disabled:opacity-60" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300">E-mail</label>
            <input name="email" type="email" required disabled={status==='sending'} className="mt-1 w-full rounded-md border border-slate-700 bg-slate-800/70 px-3 py-2 text-white shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-0 disabled:opacity-60" />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-300">Bericht</label>
          <textarea name="message" required rows="6" disabled={status==='sending'} className="mt-1 w-full rounded-md border border-slate-700 bg-slate-800/70 px-3 py-2 text-white shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-0 disabled:opacity-60"></textarea>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <button disabled={status === 'sending'} type="submit" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-60">
            {status === 'sending' ? 'Versturen…' : status === 'sent' ? 'Verzonden' : 'Verstuur bericht'}
          </button>
        </div>
      </form>
    </div>
  );
}


