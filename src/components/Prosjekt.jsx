import React, { useState } from 'react';
import './css/prosjekt.css';

const Prosjekt = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "SafeShelter",
      subtitle: "Din trygghet i sanntid",
      backgroundImage: "/sigurd.png",
      image: "/henrik.png",
      description: `I 4. semester jobbet gruppen sammen med tre andre medstudenter på et større prosjekt i emnet IS-218. Prosjektet gikk ut på å designe og utvikle SafeShelter, et beredskapsverktøy for den norske befolkningen som skal hjelpe folk med å håndtere krisesituasjoner på en rask og effektiv måte.

Vi la stor vekt på samarbeid, struktur og kvalitet i alle ledd av prosessen. Gruppen jobbet tett sammen om alt fra idéutvikling, design og prototyping til implementering og testing. Vi utviklet en brukervennlig applikasjon hvor man enkelt kan finne nærmeste trygge sted, eller selv velge destinasjon, og få raskeste rute basert på egen lokasjon.

SafeShelter har funksjoner som brukerinnmeldinger, registrering for varsler og en AI-assistent som kan hjelpe deg 24 timer i døgnet. Målet var å lage en løsning som er oversiktlig og effektiv selv i stressende nødsituasjoner.

Prosjektet ble svært godt mottatt, og vi fikk karakter A for arbeidet. Vi er stolte av innsatsen, samarbeidet og resultatet – og prosjektet viser hvor mye man kan få til når man jobber godt sammen som gruppe.`
    },
    {
      id: 2,
      title: "Kartverket",
      subtitle: "Kartløsninger for fremtiden",
      backgroundImage: "/henrik.png",
      image: "/henrik.png",
      description: `Kartverket-prosjektet var et spennende samarbeid hvor vi utviklet moderne kartløsninger med fokus på brukervennlighet og nøyaktighet. Prosjektet involverte avansert GIS-teknologi og moderne web-utvikling.

Vi jobbet med interaktive kart, geodata-behandling og responsive brukergrensesnitt. Løsningen inkluderte funksjoner for kartnavigasjon, søk i geodata, og visualisering av komplekse geografiske datasett.

Teknologistacken inkluderte moderne JavaScript-rammeverk, kartbiblioteker som Leaflet/MapBox, og backend-løsninger for effektiv databehandling. Vi la stor vekt på ytelse og skalerbarhet.

Prosjektet ga oss verdifull erfaring med geografiske informasjonssystemer og moderne webteknologi, samtidig som vi lærte mye om brukersentrert design innenfor kartapplikasjoner.`
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <>
      <section id="prosjekter" className="projects-section">
        <div className="container">
          <h2 className="section-title">Tidligere Prosjekter</h2>
          <p className="section-subtitle">Her finner du utvalgte prosjekter vi har jobbet med tidligere som gruppe.</p>
          <div className="projects-grid">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`project-card project-${project.id}`}
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${project.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <button 
                    className="project-btn"
                    onClick={() => openModal(project)}
                  >
                    Les mer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img 
                  src={selectedProject.image || selectedProject.backgroundImage} 
                  alt={selectedProject.title}
                  className="modal-img"
                />
              </div>
              <div className="modal-text">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-subtitle">{selectedProject.subtitle}</p>
                <div className="modal-description">
                  {selectedProject.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Prosjekt;
