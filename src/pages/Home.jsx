import React from 'react'
import './style.css'

function Home() {
  return (
    <main className="container page">
      <section className="hero">
        <h1>Prosjekt gjennomføring IS-310</h1>
        <p className="lede">Velkommen til vår prosjektportal for IS-310! Her finner du informasjon om våre tidligere prosjekter, erfaringer fra prosjektgjennomføring og presentasjon av gruppen.</p>
      </section>

      <section className="cards">
        <article className="card">
          <h2>Våre Tidligere Gruppeprosjekter</h2>
          <p>
            Et utvalg av prosjekter vi har jobbet med gjennom studieforløpet.
          </p>
          <div style={{flex: 1}} />
          <a className="btn" href="#prosjekter">Les mer</a>
        </article>
        <article className="card">
          <h2>Prosjektgjennomføring</h2>
          <p>
            Tanker og erfaringer rundt prosjektgjennomføring frem mot bachelor.
          </p>
          <div style={{flex: 1}} />
          <a className="btn" href="/prosjekt">Gå til prosjekt</a>
        </article>
        <article className="card">
          <h2>Bli kjent med gruppen</h2>
          <p>
            Informasjon om gruppemedlemmer og hvem vi er.
          </p>
          <div style={{flex: 1}} />
          <a className="btn" href="/omoss">Om oss</a>
        </article>
      </section>
    </main>
  )
}

export default Home