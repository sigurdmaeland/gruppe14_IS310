import React from 'react';
import './css/promovideo.css';

const Promovideo = () => {
  return (
    <section id="promovideo" className="promovideo-section">
      <div className="container">
        <div className="promovideo-header">
          <h2 className="promovideo-title">Promovideo</h2>
          <p className="promovideo-subtitle">
            Bli kjent med oss og hva vi kan tilby som gruppe
          </p>
        </div>
        
        <div className="video-container">
          <div className="video-placeholder">
            <div className="placeholder-icon">🎬</div>
            <h3>Promovideo kommer snart!</h3>
            <p>Vi jobber med å lage en spennende video som presenterer gruppen vår.</p>
            <div className="placeholder-info">
              <span>📐 300×519px</span>
              <span>🎞️ MP4 Format</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promovideo;
