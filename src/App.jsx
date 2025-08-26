import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import KoFiWidget from "./components/KoFiWidget";

export default function App() {
  // Lift menuOpen state here so KoFiWidget knows about it
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-root min-h-[calc(100vh-10rem)] text-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <header>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </header>

        <main className="page-content flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        {/* Ko-fi widget */}
        <KoFiWidget menuOpen={menuOpen} />
      </div>
    </BrowserRouter>
  );
}