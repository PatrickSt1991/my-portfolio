import React from "react";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignClass} gap-2`}> 
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">{eyebrow}</span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">{title}</h2>
      )}
      {description && (
        <p className="max-w-2xl text-sm sm:text-base text-slate-300">{description}</p>
      )}
    </div>
  );
}


