import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 text-slate-200">
      <h1 className="text-3xl font-bold mb-8">Projecten</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="flex flex-col rounded-lg bg-slate-800/70 p-6 border border-slate-800/60 hover:bg-slate-700/80 transition group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-contain rounded-md bg-slate-900/40 mb-4 group-hover:scale-105 transition"
            />
            <div className="flex-1 text-center">
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="mt-2 text-slate-300">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


