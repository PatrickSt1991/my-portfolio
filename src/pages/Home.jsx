import React from "react";
import { Link } from "react-router-dom";
import profielfoto from "../assets/patrick.jpg";
import SectionHeading from "../components/SectionHeading";
import LogosStrip from "../components/LogosStrip";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-10rem)] text-slate-200">

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Hallo, ik ben Patrick</h1>
            <p className="mt-4 text-lg text-slate-300">  Technisch applicatiebeheerder met een passie voor programmeren<br/>
            Ik maak graag praktische dingen — van webapps tot slimme tools voor thuis.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:patrick@madebypatrick.nl" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">Neem contact op</a>
              <Link
                to="/projects"
                className="inline-flex items-center rounded-md border border-slate-700 bg-slate-800/70 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700/80"
              >
                Bekijk projecten
              </Link>
              <a href="https://github.com/PatrickSt1991" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-slate-700 bg-slate-800/70 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700/80">GitHub</a>
            </div>
          </div>
          <div className="flex md:justify-end justify-center">
            <img src={profielfoto} alt="Patrick Stel" className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg ring-4 ring-white/20 object-cover" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-slate-800/70 p-6 shadow border border-slate-800/60">
            <h3 className="text-xl font-semibold text-white">Over mij</h3>
            <p className="mt-2 text-slate-300 leading-relaxed">
              Ik ben een technisch applicatiebeheerder met een passie voor programmeren en technologie.<br/>
              In mijn vrije tijd experimenteer ik graag met IoT en bouw ik slimme oplossingen die het dagelijks leven thuis makkelijker maken.
            </p>
          </div>
          <div className="rounded-xl bg-slate-800/70 p-6 shadow border border-slate-800/60">
            <h3 className="text-xl font-semibold text-white">Waar ik aan werk</h3>
            <p className="mt-2 text-slate-300 leading-relaxed">
              <li>Club Info Board</li>
              <li>Jellyfin 2 Samsung</li>
              <li>Digi Graf</li>
              <li>HA Afvalcontainer Cleaning</li>
            </p>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <LogosStrip />
      </div>
    </div>
  );
}


