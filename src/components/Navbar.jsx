import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import PatrickLogo from "../assets/patrick_logo.svg"; // Make sure this path is correct

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide Ko-fi widget when menu is open (optional, from previous fix)
  useEffect(() => {
    const kofiIframe = document.querySelector('iframe[id^="kofi-wo-container-mobi"]');
    if (kofiIframe) {
      kofiIframe.style.display = menuOpen ? "none" : "block";
    }
  }, [menuOpen]);

  const navItemClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? "text-white bg-indigo-600" : "text-slate-200 hover:text-white hover:bg-slate-700/60"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-800/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={PatrickLogo}
                alt="Patrick Stel Logo"
                className="h-56 w-56 md:h-60 md:w-60"
                style={{ minWidth: "5rem", minHeight: "5rem" }} // Optional: ensures minimum size
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navItemClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navItemClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={navItemClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={navItemClass}>
              Contact
            </NavLink>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/90">
          <div className="space-y-1 px-4 py-3">
            <NavLink to="/" end className={navItemClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={navItemClass} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/projects" className={navItemClass} onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={navItemClass} onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}


