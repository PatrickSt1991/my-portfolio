import React from "react";
import { Link } from "react-router-dom";
import profielfoto from "../assets/patrick.jpg";
import SectionHeading from "../components/SectionHeading";
import LogosStrip from "../components/LogosStrip";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-10rem)] text-slate-200">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hallo, ik ben Patrick
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-lg mx-auto lg:mx-0">
              Technisch applicatiebeheerder met een passie voor programmeren
              <br className="hidden sm:block" />
              Ik maak graag praktische dingen — van webapps tot slimme tools — voor thuis, sportclubs, etc.
            </p>
            
            {/* Action Buttons - Mobile Optimized */}
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-center gap-3 max-w-lg mx-auto lg:mx-0">
              <a 
                href="mailto:patrick@madebypatrick.nl" 
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors min-h-[44px]"
              >
                Neem contact op
              </a>
              <Link
                to="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-800/70 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700/80 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors min-h-[44px]"
              >
                Bekijk projecten
              </Link>
              <a 
                href="https://github.com/PatrickSt1991" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-800/70 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700/80 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors min-h-[44px]"
              >
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img 
              src={profielfoto} 
              alt="Patrick Stel" 
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full shadow-lg ring-4 ring-white/20 object-cover" 
            />
          </div>
        </div>

        {/* Content Cards - Mobile Optimized */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-xl bg-slate-800/70 p-6 shadow border border-slate-800/60 hover:bg-slate-800/80 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">Over mij</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Ik vind het leuk om quality time te hebben met mijn gezin en speel ik graag een potje Warzone en Assassins Creed op de PlayStation met mijn vrienden.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed text-sm sm:text-base">
              Het leven is al duur genoeg met allerlei betaalde applicaties, dus ik maak graag gratis oplossingen! Mocht je een project hebben waar je mee wilt helpen of als je wilt dat ik je mee help, neem dan contact met me op.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed text-sm sm:text-base">
              Geen enkele website is gratis dus maak je gebruik van een tool en vind je het leuk, dan wordt een kleine donatie zeer gewaardeerd!
            </p>
          </div>
          
          <div className="rounded-xl bg-slate-800/70 p-6 shadow border border-slate-800/60 hover:bg-slate-800/80 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">Waar ik aan werk</h3>
            <ul className="space-y-2 text-slate-300 text-sm sm:text-base">
              <li>
                <Link 
                  to="/projects/club-info-board" 
                  className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center py-1"
                >
                  <svg className="mr-2 h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Club Info Board
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects/jellyfin-2-samsung" 
                  className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center py-1"
                >
                  <svg className="mr-2 h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Jellyfin 2 Samsung
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects/digi-graf" 
                  className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center py-1"
                >
                  <svg className="mr-2 h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Digi Graf
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects/container-cleaning" 
                  className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center py-1"
                >
                  <svg className="mr-2 h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Container Reinigingsintegratie
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Logos Strip */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <LogosStrip />
      </div>
    </div>
  );
}