import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-white font-bold">Project niet gevonden</h2>
        <Link to="/projects" className="text-indigo-400 underline">Terug naar projecten</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-slate-200">
      {/* Afbeelding links, topContent rechts */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-40 h-40 object-contain rounded-md bg-slate-900/40 flex-shrink-0"
        />
        <div className="w-full" dangerouslySetInnerHTML={{ __html: project.topContent || "" }} />
      </div>

      {/* Overige content */}
      <div dangerouslySetInnerHTML={{ __html: project.content }} />

      {/* Knoppen */}
      <div className="flex flex-wrap justify-center gap-4 my-8">
        {project.download && (
          <a
            href={project.download}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
          >
            Download
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-slate-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 transition"
          >
            Source Code
          </a>
        )}
        {project.manual && (
          <a
            href={project.manual}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-slate-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-400 transition"
          >
            Handleiding
          </a>
        )}
        {/* Alleen voor Club Info Board een Demo knop */}
        {project.slug === "club-info-board" && (
          <a
            href="https://clubinfoboard.madebypatrick.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition"
          >
            Demo
          </a>
        )}
      </div>

      <div className="mt-8">
        <Link to="/projects" className="text-slate-400 underline">← Terug naar projecten</Link>
      </div>
    </div>
  );
}