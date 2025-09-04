import React from 'react'
import './style.css'

function Home() {
  return (
    <main className="container page">
      <section className="hero">
        <h1>Gruppe 14</h1>
        <p className="lede">Hjemmeside for IS-310 – presentasjon av gruppe 14.</p>
      </section>

      <section className="cards">
        <article className="card">
          <h2>Våre Tidligere Gruppeprosjekter</h2>
          <p>
            Et utvalg av prosjekter vi har jobbet med gjennom studieforløpet.
          </p>
          <a className="btn" href="#prosjekter">Les mer</a>
        </article>
        <article className="card">
          <h2>Prosjektgjennomføring</h2>
          <p>
            Tanker og erfaringer rundt prosjektgjennomføring frem mot bachelor.
          </p>
          <a className="btn" href="/prosjekt">Gå til prosjekt</a>
        </article>
        <article className="card">
          <h2>Bli kjent med gruppen</h2>
          <p>
            Informasjon om gruppemedlemmer og hvem vi er.
          </p>
          <a className="btn" href="/omoss">Om oss</a>
        </article>
      </section>
    </main>
  )
}

export default Home