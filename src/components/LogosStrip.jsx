import React from "react";

export default function LogosStrip() {
  const items = [
    { name: "GitHub", href: "https://github.com/PatrickSt1991" },
    { name: "Sportlink", href: "https://clubinfoboard.madebypatrick.nl" },
    { name: "Jellyfin", href: "https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer" },
  ];

  return (
    <div className="mt-10 rounded-xl border border-slate-800/60 bg-slate-800/70 px-4 py-3 shadow-sm">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Featured in</span>
        {items.map((item) => (
          <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-200 hover:text-white">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}


