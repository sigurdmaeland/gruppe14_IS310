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
      backgroundImage: "safeshelter1.png",
      image: "/safeshelter2.png",
      description: `I 4. semester jobbet gruppen sammen med tre andre medstudenter på et større prosjekt i emnet IS-218. Prosjektet gikk ut på å designe og utvikle SafeShelter, et beredskapsverktøy for den norske befolkningen som skal hjelpe folk med å håndtere krisesituasjoner på en rask og effektiv måte.

Vi la stor vekt på samarbeid, struktur og kvalitet i alle ledd av prosessen. Gruppen jobbet tett sammen om alt fra idéutvikling, design og prototyping til implementering og testing. Vi utviklet en brukervennlig applikasjon hvor man enkelt kan finne nærmeste trygge sted, eller selv velge destinasjon, og få raskeste rute basert på egen lokasjon.

SafeShelter har funksjoner som brukerinnmeldinger, registrering for varsler og en AI-assistent som kan hjelpe deg 24 timer i døgnet. Målet var å lage en løsning som er oversiktlig og effektiv selv i stressende nødsituasjoner.

Prosjektet ble svært godt mottatt, og vi fikk karakter A for arbeidet. Vi er stolte av innsatsen, samarbeidet og resultatet – og prosjektet viser hvor mye man kan få til når man jobber godt sammen som gruppe.`
    },
    {
      id: 2,
      title: "Kartverket",
      subtitle: "Kartløsninger for fremtiden",
      backgroundImage: "/kartverket1.png",
      image: "/kartverket1.png",
      description: `Kartverket-prosjektet var et spennende samarbeid hvor vi utviklet moderne kartløsninger med fokus på brukervennlighet og nøyaktighet. Prosjektet involverte avansert GIS-teknologi og moderne web-utvikling.

Vi jobbet med interaktive kart, geodata-behandling og responsive brukergrensesnitt. Løsningen inkluderte funksjoner for kartnavigasjon, søk i geodata, og visualisering av komplekse geografiske datasett.

  Teknologistacken inkluderte ASP.NET, kartbiblioteker som Leaflet/MapBox, og backend-løsninger for effektiv databehandling. Vi la stor vekt på ytelse og skalerbarhet.

Prosjektet ga oss verdifull erfaring med geografiske informasjonssystemer og moderne webteknologi, samtidig som vi lærte mye om brukersentrert design innenfor kartapplikasjoner.`
    }
  ];

  const currentProjects = [
    {
      id: 1,
      title: "Alt i Høyde AS",
      subtitle: "praksisplass hos Alt i Høyde",
      backgroundImage: "altihoyde2.png",
      image: "altihoyde1.png",
      description: `Noen av gruppemedlemmene har praksis dette semesteret hos Alt i Høyde AS, hvor de jobber med et prosjekt innen full-stack utvikling. Prosjektet går ut på å utvikle en helt ny nettside for bedriften. Arbeidet innebærer å fornye designet, bygge en ny backend, og opprette en administrasjonsside som gjør det enkelt for bedriften å håndtere innhold selv.

Hovedmålet med prosjektet er å utvikle en moderne, brukervennlig og fleksibel nettside som gir verdi både for kunder og ansatte. Gruppen benytter MERN-stacken (MongoDB, Express, React, Node.js) i utviklingen, og får med det praktisk erfaring med både frontend- og backend-utvikling gjennom hele prosessen.`
    },
    {
      id: 2,
      title: "IKT Agder",
      subtitle: "Tjenestekartlegging med LOS-struktur",
      backgroundImage: "henrik.png",
      image: "ikt_agder_logo.png",
      description: `Et av gruppemedlemmene har praksis dette semesteret hos IKT Agder, hvor han har jobbet med å kartlegge og strukturere kommunale tjenester ved hjelp av LOS-strukturen. Målet med prosjektet har vært å skape en bedre oversikt over hvilke tjenester som faktisk leveres i de ulike kommunene, og hvilke fagsystemer som benyttes for å levere dem. Arbeidet skal støtte Samstyringsutvalget i å forstå dagens situasjon og legge til rette for mer effektiv styring og gevinstrealisering.

I praksisperioden har han bidratt aktivt i kartleggingsarbeidet og undersøkt hvilke digitale verktøy som kan brukes til å samle inn, organisere og presentere data på en enkel og oversiktlig måte. Han har evaluert ulike løsninger, testet ut verktøy, utviklet en prototype og dokumentert funnene i en anbefaling som kan brukes videre i prosjektet.`
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
            <h2 className="section-title">Pågående Prosjekter</h2>
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
                  {selectedProject.description.split('\n\n').map((paragraph, index, arr) => {
                    // Inject a clickable promovideo link after the last paragraph for SafeShelter
                    const isLast = index === arr.length - 1;
                    if (selectedProject.title === 'SafeShelter' && isLast) {
                      return (
                        <p key={index}>
                          {paragraph}
                          <br />
                          <a href="https://www.youtube.com/watch?v=j_XpqJ1WP8I" target="_blank" rel="noopener noreferrer" className="project-video-link">
                            Se promovideo for SafeShelter
                          </a>
                        </p>
                      );
                    }

                    return <p key={index}>{paragraph}</p>;
                  })}
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