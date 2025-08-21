import React from "react";
import SectionHeading from "../components/SectionHeading";

const skills = {
  "Technisch": ["Windows Server", "MSSQL", "TSQL", "CI/CD", "Scripting"],
  "Development": ["JavaScript", "Vue", "C#", "TypeScript", "PowerShell"],
  "Tools": ["Git", "Docker", "Home Assistant", "Jellyfin", "Raspberry Pi"],
};

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-slate-200">
      <SectionHeading
        eyebrow="Over"
        title="Over mij"
        align="left"
      />

      <section className="mt-6">
        <div className="rounded-xl border border-slate-800/60 bg-slate-800/70 p-6 shadow-sm">
          <p className="text-slate-300 leading-relaxed">
            Patrick Stel, technisch applicatiebeheerder, ik ben nieuwsgierig naar hoe dingen werken.<br/>
            Praktische oplossingen ontwikkel ik – van webapps tot smart home tools – altijd met oog voor eenvoud, gebruiksgemak en betrouwbaarheid.
            <br/><br/>
            Daarnaast vind ik het leuk om quality time te hebben met mijn gezin en speel ik graag een potje Warzone en Assassins Creed op de PlayStation met mijn vrienden.
            <br/><br/>
            Het leven is al duur genoeg met allerlei betaalde applicaties, dus ik maak graag gratis oplossingen! Mocht je een project hebben waar je mee wilt helpen of als je wilt dat ik je mee help, neem dan contactmet me op.
            <br/><br/>
            Geen enkele website is gratis dus maak je gebruik van een tool en vind je het leuk, dan wordt een kleine donatie zeer gewaardeerd!
          </p>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="rounded-xl border border-slate-800/60 bg-slate-800/70 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-sm text-slate-200">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}


