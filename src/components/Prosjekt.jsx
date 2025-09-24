import React from 'react';
import './css/prosjekt.css';

const Prosjekt = () => {
  return (
    <>
      {/* Tidligere Prosjekter Section */}
      <section id="prosjekter" className="projects-section">
        <div className="container">
          <h2 className="section-title">Tidligere Prosjekter</h2>
          <div className="project-card">
            <h2>SafeShelter – IS-218 prosjekt</h2>
            <p>
              I 4. semester jobbet gruppen sammen med tre andre medstudenter på et større prosjekt i emnet IS-218. Prosjektet gikk ut på å designe og utvikle <strong>SafeShelter</strong>, et beredskapsverktøy for den norske befolkningen som skal hjelpe folk med å håndtere krisesituasjoner på en rask og effektiv måte.<br /><br />
              Vi la stor vekt på samarbeid, struktur og kvalitet i alle ledd av prosessen. Gruppen jobbet tett sammen om alt fra idéutvikling, design og prototyping til implementering og testing. Vi utviklet en brukervennlig applikasjon hvor man enkelt kan finne nærmeste trygge sted, eller selv velge destinasjon, og få raskeste rute basert på egen lokasjon.<br /><br />
              SafeShelter har funksjoner som brukerinnmeldinger, registrering for varsler og en AI-assistent som kan hjelpe deg 24 timer i døgnet. Målet var å lage en løsning som er oversiktlig og effektiv selv i stressende nødsituasjoner.<br /><br />
              Prosjektet ble svært godt mottatt, og vi fikk <strong>karakter A</strong> for arbeidet. Vi er stolte av innsatsen, samarbeidet og resultatet – og prosjektet viser hvor mye man kan få til når man jobber godt sammen som gruppe.<br /><br />
              <span style={{fontWeight: 'bold'}}>SafeShelter - Din Trygghet I Sanntid</span>
            </p>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '1.1rem'}}>
              <iframe
                width="400"
                height="225"
                src="https://www.youtube.com/embed/j_XpqJ1WP8I"
                title="SafeShelter Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.12)'}}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Prosjekt Section */}
      <section id="prosjekt" className="current-project-section">
        <div className="container">
          <h2 className="section-title">Prosjektgjennomføring</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--muted)', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            Her kommer det innhold om prosjektet i løpet av semesteret.
          </p>
        </div>
      </section>
    </>
  );
};

export default Prosjekt;
