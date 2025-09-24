import React from 'react';
import './css/prosjektonsker.css';
import { Globe, Database, Shield, TrendingUp } from 'lucide-react';

const Prosjektønsker = () => {
  const interesseområder = [
    {
      id: 1,
      ikon: <Globe size={48} />,
      tittel: "Webteknologi & Frontend",
      beskrivelse: "Moderne webapplikasjoner med fokus på responsivt design og brukeropplevelse.",
      detaljer: ["React & Vue.js", "Responsive design", "UI/UX Design", "Progressive Web Apps"]
    },
    {
      id: 2,
      ikon: <Database size={48} />,
      tittel: "Backend & Infrastruktur",
      beskrivelse: "Robust backend-utvikling og skybaserte løsninger for skalerbare applikasjoner.",
      detaljer: ["Node.js & Express", "Database design", "API utvikling", "Cloud computing"]
    },
    {
      id: 3,
      ikon: <Shield size={48} />,
      tittel: "Sikkerhet & Kvalitetssikring",
      beskrivelse: "Implementering av sikkerhetstiltak og testing for pålitelige løsninger.",
      detaljer: ["Kryptografi & Autentisering", "GDPR compliance", "Penetrasjonstesting", "Kvalitetstesting"]
    },
    {
      id: 4,
      ikon: <TrendingUp size={48} />,
      tittel: "Data Science & Innovasjon",
      beskrivelse: "Avansert dataanalyse og utforsking av fremtidens teknologier.",
      detaljer: ["Machine Learning & AI", "Data mining & Visualisering", "Blockchain teknologi", "IoT løsninger"]
    }
  ];

  return (
    <section id="prosjektønsker" className="interesseområder-section">
      <div className="container">
        <div className="header-content">
          <h2 className="main-title">Våre Fagområder</h2>
          <p className="main-subtitle">
            Utforsk de teknologiområdene vi mestrer og brenner for å utvikle videre
          </p>
        </div>
        
        <div className="områder-grid">
          {interesseområder.map((område) => (
            <div key={område.id} className="område-card">
              <div className="ikon-wrapper">
                <span className="område-ikon">{område.ikon}</span>
              </div>
              <div className="card-content">
                <h3 className="område-tittel">{område.tittel}</h3>
                <p className="område-beskrivelse">{område.beskrivelse}</p>
                <ul className="detaljer-liste">
                  {område.detaljer.map((detalj, index) => (
                    <li key={index} className="detalj-item">
                      <span className="bullet">→</span>
                      {detalj}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drømmejobber Seksjon */}
      <section className="bedrifter-section">
        <div className="container">
          <div className="header-content">
            <h2 className="main-title">Hvem kan vi tenke oss å jobbe for?</h2>
            <p className="main-subtitle">
             Vi søker praksisplasser hos bedrifter som kan gi oss verdifull erfaring og mulighet til å bidra. 
            </p>
            <p className="contact-text">
              Har du en ledig praksisplass til høsten? Vi hører gjerne ifra deg!
            </p>
          </div>
          
          <div className="bedrifter-grid">
            <div className="bedrift-card">
              <div className="bedrift-ikon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 0-8-3-8-6s3-6 8-6c2 0 4 1 6 3"/>
                  <path d="M9 19c0-3 2-6 6-6 5 0 8 3 8 6s-3 6-8 6c-2 0-4-1-6-3"/>
                </svg>
              </div>
              <h3 className="bedrift-tittel">Innovative Startups</h3>
              <p className="bedrift-beskrivelse">
                Oppstartsbedrifter hvor vi kan få praktisk erfaring med nyeste teknologi og være med på å bygge noe nytt
              </p>
            </div>

            <div className="bedrift-card">
              <div className="bedrift-ikon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </div>
              <h3 className="bedrift-tittel">Etablerte IT-selskaper</h3>
              <p className="bedrift-beskrivelse">
                Større teknologiselskaper hvor vi kan lære best-practices og jobbe med store systemer i praksis
              </p>
            </div>

            <div className="bedrift-card">
              <div className="bedrift-ikon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h3 className="bedrift-tittel">Offentlig Sektor</h3>
              <p className="bedrift-beskrivelse">
                Kommuner, fylker og statlige etater hvor vi kan bidra til digitalisering av offentlige tjenester
              </p>
            </div>

            <div className="bedrift-card">
              <div className="bedrift-ikon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </div>
              <h3 className="bedrift-tittel">Konsulent & Digitalbyrå</h3>
              <p className="bedrift-beskrivelse">
                Konsulentselskaper og digitalbyrå hvor vi kan få erfaring med ulike kunder og varierte prosjekter
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Prosjektønsker;
