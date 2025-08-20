import React from "react";
import dglogo from "./assets/digigraf-logo.png";
import profielfoto from "./assets/patrick.jpg";
import clublogo from "./assets/logo_civ.png";
import tizenlogo from "./assets/tizen.png";
import backgroundImage from './assets/background.jpg';

const projects = [
  {
    name: "Digi Graf",
    description: "Software oplossing voor uitvaartonderneming.",
    repo: "https://github.com/PatrickSt1991/Uitvaartverzorging-Dossier-Registratie",
    download: "https://github.com/PatrickSt1991/Uitvaartverzorging-Dossier-Registratie/releases/latest",
    manual: "https://patrickst1991.github.io/Uitvaartverzorging-Dossier-Registratie/",
    image: dglogo,
  },
  {
    name: "Club Info Board",
    description: "Real-time informatie over wedstrijden, uitslagen en wedstrijd details.",
    repo: "https://github.com/PatrickSt1991/Sportlink.Club.Info.Viewer",
    download: "https://github.com/PatrickSt1991/Sportlink.Club.Info.Viewer/releases/latest",
    manual: "https://patrickst1991.github.io/Sportlink.Club.Info.Viewer/",
    image: clublogo,
  },
  {
    name: "Jellyfin 2 Samsung",
    description: "Applicatie om snel en eenvouding Jellyfin op je Samsung Smart TV te installeren.",
    repo: "https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer",
    download: "https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer/releases/latest",
    manual: "https://github.com/PatrickSt1991/Samsung-Jellyfin-Installer/blob/master/README.md",
    image: tizenlogo,
  },
];

const badges = [
  {
    name: "PlayStation 5",
    image: "https://cdn-icons-png.flaticon.com/512/771/771262.png",
    url: "#",
  },
  {
    name: "Home Assistant",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Home_Assistant_Logo.svg/1200px-Home_Assistant_Logo.svg.png",
    url: "#",
  },
  {
    name: "Internet of Things",
    image: "https://cdn-icons-png.flaticon.com/512/6080/6080697.png",
    url: "#",
  }
];

export default function Portfolio() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-600 p-4 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-50"></div>

      {/* Header */}
      <header className="text-center py-12">
        <div className="flex flex-col items-center">
          <img
            src={profielfoto}
            alt="Patrick Stel"
            className="w-50 h-50 rounded-full shadow-lg border-4 border-white hover:border-gray-100 transition-all transform hover:scale-105"
          />
          <h1 className="text-4xl font-bold text-gray-100 mt-4">Patrick Stel</h1>
          <p className="text-lg text-gray-50 mt-2">
            Technisch Applicatiebeheerder & Hobby Programmeur
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Technisch Applicatiebeheerder & Hobby Programmeur</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* About Me Box */}
          <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">In het kort</h3>
            <p className="text-gray-700 leading-relaxed">
              Hallo, ik ben Patrick Stel, een technisch applicatiebeheerder met een passie voor programmeren en technologie. 
              In mijn vrije tijd houd ik mij bezig met IOT oplossingen die het huishouden vereenvoudigen.
              <br/><br/>
              Ik hou van uitdagingen, het oplossen van complexe problemen en het leren van nieuwe technologieën.
              Daarnaast ben ik een fan van gaming, leuke dingen doen en alles wat met innovatie te maken heeft.
            </p>
          </div>

          {/* Badges Box */}
          <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mijn Interesses</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <a
                  key={index}
                  href={badge.url}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all transform hover:scale-105"
                >
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="w-12 h-12 object-contain mr-4"
                  />
                  <p className="text-lg font-semibold text-gray-800">{badge.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mijn Projecten</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={project.repo}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
                >
                  Code
                </a>
                <a
                  href={project.manual}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
                >
                  Handleiding
                </a>
                <a
                  href={project.download}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="font-bold text-center">
        <p className="text-gray-100">
          Gebouwd met ❤️ door Patrick Stel.
        </p>
      </footer>
    </div>
  );
}