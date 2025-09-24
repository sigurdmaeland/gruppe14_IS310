import React from 'react';
import './css/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Gruppe 14</h1>
          <p className="hero-subtitle">
            Vi er fire studenter som studerer Informasjonssystemer ved Universitetet i Agder
          </p>
          <div className="hero-cards">
            <div className="hero-card">
              <h3>🎯 Vårt Mål</h3>
              <p>
                Å lære og utvikle våre ferdigheter innen informasjonssystemer gjennom praktiske prosjekter
              </p>
            </div>
            <div className="hero-card">
              <h3>🚀 Vårt Fokus</h3>
              <p>
                Moderne webutvikling, systemutvikling og innovative løsninger for fremtidens utfordringer
              </p>
            </div>
            <div className="hero-card">
              <h3>🤝 Vårt Team</h3>
              <p>
                Fire dedikerte studenter med ulike bakgrunner som sammen skaper sterke løsninger
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
