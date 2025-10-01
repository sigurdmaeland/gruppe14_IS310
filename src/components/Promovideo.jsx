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
          <div className="youtube-container">
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/9z8irRiijeo"
              title="Gruppe 14 - Promovideo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promovideo;
