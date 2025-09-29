import React from 'react';
import './css/hero.css';

const Hero = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img 
            src="/gruppebilde2.jpg" 
            alt="Gruppe 14 - Fire studenter fra Universitetet i Agder"
            className="hero-background-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="hero-image-placeholder" style={{display: 'none'}}>
            <div className="placeholder-content">
              <h3>Gruppe 14</h3>
              <p>Teamfoto kommer snart</p>
            </div>
          </div>
        </div>
        
        <div className="hero-text-overlay">
          <h1>Velkommen til vår portefølje!</h1>
          <p className="hero-subtitle">
            Fire dedikerte studenter som søker praksisplass for bachelorprosjektet våren 2026.
          </p>
          <div className="hero-buttons">
            <button 
              className="hero-btn primary"
              onClick={() => handleScrollToSection('omoss')}
            >
              Møt Teamet
            </button>
            <button 
              className="hero-btn secondary"
              onClick={() => handleScrollToSection('kontakt')}
            >
              Ta Kontakt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
