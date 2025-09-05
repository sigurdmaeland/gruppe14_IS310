import React from 'react'
import './style.css'

function TidligereProsjekter() {
  return (
    <div className="page-container tidligereprosjekter-page">
      <div className="content-wrapper">
        <h1 className="omoss-title" style={{marginBottom: '2.2rem'}}>Tidligere Prosjekter</h1>
        <section className="project-card">
          <h2>SafeShelter – IS-218 prosjekt</h2>
          <p>
            I 4. semester jobbet gruppen sammen med tre andre medstudenter på et større prosjekt i emnet IS-218. Prosjektet gikk ut på å designe og utvikle <strong>SafeShelter</strong>, et beredskapsverktøy for den norske befolkningen som skal hjelpe folk med å håndtere krisesituasjoner på en rask og effektiv måte.<br /><br />
            Vi la stor vekt på samarbeid, struktur og kvalitet i alle ledd av prosessen. Gruppen jobbet tett sammen om alt fra idéutvikling, design og prototyping til implementering og testing. Vi utviklet en brukervennlig applikasjon hvor man enkelt kan finne nærmeste trygge sted, eller selv velge destinasjon, og få raskeste rute basert på egen lokasjon.<br /><br />
            SafeShelter har funksjoner som brukerinnmeldinger, registrering for varsler og en AI-assistent som kan hjelpe deg 24 timer i døgnet. Målet var å lage en løsning som er oversiktlig og effektiv selv i stressende nødsituasjoner.<br /><br />
            Prosjektet ble svært godt mottatt, og vi fikk <strong>karakter A</strong> for arbeidet. Vi er stolte av innsatsen, samarbeidet og resultatet – og prosjektet viser hvor mye man kan få til når man jobber godt sammen som gruppe.<br /><br />
            <span style={{fontWeight: 'bold'}}>SafeShelter - Din Trygghet I Sanntid</span>
          </p>
          <a href="https://www.youtube.com/watch?v=j_XpqJ1WP8I" target="_blank" rel="noopener noreferrer" className="accent-link" style={{display: 'inline-block', marginTop: '1.1rem'}}>Se demo av arbeidet på YouTube</a>
        </section>
        {/* Neste prosjekt kommer senere */}
      </div>
    </div>
  )
}
export default TidligereProsjekter;