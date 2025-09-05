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
            SafeShelter er et beredskapsverktøy laget for den norske befolkningen for å kunne håndtere krisesituasjoner på en rask og effektiv måte.<br /><br />
            Finn nærmeste trygge sted eller velg selv hvor du vil dra og SafeShelter vil gi deg raskeste rute basert på din lokasjon!<br /><br />
            Applikasjonen er utviklet med et mål om å være brukervennlig, oversiktlig i stressende nødsituasjoner og selvfølgelig behjelpelig.<br /><br />
            Ved hjelp av brukerinnmeldinger, registrering for varsler og en AI assistent som kan hjelpe deg 24 timer i døgnet så kan du være sikker på at du er trygg der du er!
          </p>
          <p style={{fontWeight: 'bold', marginTop: '1.2rem'}}>SafeShelter - Din Trygghet I Sanntid</p>
          <a href="https://www.youtube.com/watch?v=j_XpqJ1WP8I" target="_blank" rel="noopener noreferrer" className="accent-link" style={{display: 'inline-block', marginTop: '1.1rem'}}>Se demo av arbeidet på YouTube</a>
        </section>
        {/* Neste prosjekt kommer senere */}
      </div>
    </div>
  )
}
export default TidligereProsjekter;