import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import KoFiWidget from "./components/KoFiWidget";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-root">
          <header>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </header>
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <KoFiWidget menuOpen={menuOpen} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
