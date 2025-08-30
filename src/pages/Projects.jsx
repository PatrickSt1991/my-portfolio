import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-12 px-4 text-slate-200">
      {/* Page Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projecten</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Ontdek de projecten waar ik aan werk om het leven een beetje makkelijker te maken
        </p>
      </div>

      {/* Projects Grid - Mobile Optimized */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="group flex flex-col rounded-lg bg-slate-800/70 border border-slate-800/60 hover:bg-slate-700/80 hover:border-slate-700/80 transition-all duration-200 overflow-hidden"
          >
            {/* Project Image */}
            <div className="aspect-video w-full bg-slate-900/40 p-4 flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </div>
            
            {/* Project Content */}
            <div className="flex-1 p-6 text-center">
              <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              
              {/* View Project Indicator */}
              <div className="mt-4 inline-flex items-center text-indigo-400 text-sm font-medium group-hover:text-indigo-300 transition-colors">
                Bekijk project
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State (if no projects) */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 48 48">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-slate-200 mb-2">Nog geen projecten</h3>
          <p className="text-slate-400">Er worden binnenkort nieuwe projecten toegevoegd.</p>
        </div>
      )}
    </div>
  );
}