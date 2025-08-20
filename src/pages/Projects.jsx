import React from "react";
import { projects } from "../data/projects";
import SectionHeading from "../components/SectionHeading";

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-slate-200">
      <div className="mb-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Mijn Projecten"
          description="Open-source en persoonlijke projecten waar ik trots op ben."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article key={project.name} className="group rounded-xl border border-slate-800/60 bg-slate-800/70 p-5 shadow-sm transition hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden rounded-md bg-slate-800/70">
              <img src={project.image} alt={project.name} className="h-full w-full object-contain p-4 transition-transform group-hover:scale-[1.02]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{project.name}</h3>
            <p className="mt-1 text-sm text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-500">
                  Code
                </a>
              )}
              {project.manual && (
                <a href={project.manual} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-700/80">
                  Handleiding
                </a>
              )}
              {project.download && (
                <a href={project.download} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-700/80">
                  Download
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


