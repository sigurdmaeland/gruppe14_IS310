import React, { useState } from 'react';
import './css/hero.css';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
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
          
          {/* Play button overlay på bildet */}
          <button 
            className="hero-play-button"
            onClick={openVideoModal}
            aria-label="Se promovideo"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="play-text">Promovideo</span>
          </button>
          
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

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div className="hero-video-modal-overlay" onClick={closeVideoModal}>
            <div className="hero-video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="hero-video-modal-close"
                onClick={closeVideoModal}
                aria-label="Lukk video"
              >
                ×
              </button>
              <div className="hero-video-modal-wrapper">
                <iframe
                  className="hero-video-modal-iframe"
                  src="https://www.youtube.com/embed/9z8irRiijeo?autoplay=1&modestbranding=1&rel=0&showinfo=0"
                  title="Promovideo"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
