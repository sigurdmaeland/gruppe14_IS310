import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/bachelor.css';

const Bachelor = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/bachelor-prosjekt');
    window.scrollTo(0, 0);
  };

  return (
    <section id="bachelor" className="bachelor-section">
      <div className="bachelor-container">
        <div className="bachelor-content">
          <h2 className="bachelor-title">Bachelorprosjekt 2026</h2>
          <p className="bachelor-description">
            Hold deg oppdatert på gruppens bachelorprosjekt hos Kristiansand Kommune. 
            Følg med på fremdrift, planlegging og kvalitetssikring gjennom hele prosjektperioden.
          </p>
          
          <button 
            className="bachelor-card-button"
            onClick={handleNavigate}
            aria-label="Gå til bachelorprosjekt"
          >
            <div className="bachelor-card">
              <div className="bachelor-card-icon">
                <img 
                  src="/kommunen.png" 
                  alt="Kristiansand Kommune logo" 
                  className="bachelor-card-image"
                />
              </div>
              <div className="bachelor-card-content">
                <h3 className="bachelor-card-title">Kristiansand Kommune</h3>
                <p className="bachelor-card-text">
                  Klikk her for å lese mer om vårt bachelorprosjekt i samarbeid med Kristiansand Kommune
                </p>
                <span className="bachelor-card-arrow">→</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bachelor;
