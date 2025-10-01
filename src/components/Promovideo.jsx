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
          <video 
            className="promo-video"
            controls
            poster="/video-thumbnail.jpg"
          >
            <source src="/promovideo.mp4" type="video/mp4" />
            Din nettleser støtter ikke videoavspilling.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Promovideo;
