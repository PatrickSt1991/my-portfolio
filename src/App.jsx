import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import KoFiWidget from "./components/KoFiWidget";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Spotlight from "./components/Spotlight";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Spotlight />
        <div className="app-root">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]
                       focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2
                       focus:text-sm focus:font-semibold focus:text-white"
          >
            Naar hoofdinhoud
          </a>
          <header>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </header>
          <main id="main" className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <KoFiWidget menuOpen={menuOpen} />
          <BackToTop hidden={menuOpen} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
