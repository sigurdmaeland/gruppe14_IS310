import React, { useState } from 'react';
import './css/prosjekt.css';

const Prosjekt = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCurrentProject, setSelectedCurrentProject] = useState(null);

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

  const currentProjects = [
    {
      id: 1,
      title: "Alt i Høyde AS",
      subtitle: "praksisplass hos Alt i Høyde",
      backgroundImage: "/jonas.png",
      image: "/jonas.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
    },
    {
      id: 2,
      title: "IKT Agder",
      subtitle: "Utvikling av innovative løsninger",
      backgroundImage: "/henrik.png",
      image: "/henrik.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const openCurrentModal = (project) => {
    setSelectedCurrentProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedCurrentProject(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <>
      <section id="prosjekter" className="projects-section">
        <div className="container">
          {/* Tidligere Prosjekter */}
          <div className="project-subsection">
            <h2 className="section-title">Tidligere Prosjekter</h2>
            <p className="section-subtitle">Her finner du utvalgte prosjekter gruppen har jobbet med fra tidligere av.</p>
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

          {/* Pågående Prosjekter */}
          <div className="project-subsection current-projects-subsection">
            <h1 className="section-title">Pågående Prosjekter</h1>
            <p className="section-subtitle">
              I tilknytning emnet IS-302 Praksisprosjekt, har samtlige i gruppen vært så heldige å funnet en bedrift å jobbe hos. Les mer om hva vi jobber med denne våren!
            </p>
            <div className="projects-grid">
              {currentProjects.map((project) => (
                <div 
                  key={project.id}
                  className={`project-card current-project-${project.id}`}
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
                      onClick={() => openCurrentModal(project)}
                    >
                      Les mer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for tidligere prosjekter */}
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

      {/* Modal for pågående prosjekter */}
      {selectedCurrentProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img 
                  src={selectedCurrentProject.image || selectedCurrentProject.backgroundImage} 
                  alt={selectedCurrentProject.title}
                  className="modal-img"
                />
              </div>
              <div className="modal-text">
                <h2 className="modal-title">{selectedCurrentProject.title}</h2>
                <p className="modal-subtitle">{selectedCurrentProject.subtitle}</p>
                <div className="modal-description">
                  {selectedCurrentProject.description.split('\n\n').map((paragraph, index) => (
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
