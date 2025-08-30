import React from "react";
import { Link, NavLink } from "react-router-dom";
import PatrickLogo from "../assets/patrick_logo.svg";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const navItemClass = ({ isActive }) =>
    `block px-4 py-3 rounded-md text-base font-medium transition-colors w-full text-left ${
      isActive 
        ? "text-white bg-indigo-600" 
        : "text-slate-200 hover:text-white hover:bg-slate-700/60"
    }`;

  const desktopNavItemClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive 
        ? "text-white bg-indigo-600" 
        : "text-slate-200 hover:text-white hover:bg-slate-700/60"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-800/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Bigger sizing */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={PatrickLogo}
                alt="Patrick Stel Logo"
                className="h-16 w-auto sm:h-20 md:h-24 object-contain"
                style={{ minHeight: "4rem" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={desktopNavItemClass} end>
              Start
            </NavLink>
            <NavLink to="/projects" className={desktopNavItemClass}>
              Projecten
            </NavLink>
            <NavLink to="/contact" className={desktopNavItemClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button - Improved */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-700/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className={`h-6 w-6 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Improved Animation & Layout */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-3 space-y-1">
            <NavLink 
              to="/" 
              end 
              className={navItemClass} 
              onClick={() => setMenuOpen(false)}
            >
              Start
            </NavLink>
            <NavLink 
              to="/projects" 
              className={navItemClass} 
              onClick={() => setMenuOpen(false)}
            >
              Projecten
            </NavLink>
            <NavLink 
              to="/contact" 
              className={navItemClass} 
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}