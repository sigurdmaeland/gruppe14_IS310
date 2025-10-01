import React, { useState } from 'react';
import './css/promovideo.css';

const Promovideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <>
      <section id="promovideo" className="promovideo-section">
        <div className="container">
          <div className="promovideo-header">
            <h2 className="promovideo-title">Promovideo</h2>
            <p className="promovideo-subtitle">
              Bli kjent med oss og hva vi kan tilby som gruppe
            </p>
          </div>
          
          <div className="video-button-container">
            <div className="video-preview-card" onClick={openVideo}>
              <img 
                src="/gruppebilde2.jpg" 
                alt="Gruppe 14 - Gruppebilde" 
                className="group-image"
              />
              <div className="play-overlay">
                <button className="video-play-button">
                  <div className="play-icon">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="40" fill="currentColor" fillOpacity="0.95"/>
                      <path d="M30 25l20 15-20 15V25z" fill="white"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="video-modal-overlay" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideo}>
              ×
            </button>
            <div className="video-modal-wrapper">
              <iframe
                className="video-modal-iframe"
                src="https://www.youtube.com/embed/9z8irRiijeo?autoplay=1&modestbranding=1&rel=0&showinfo=0"
                title="Gruppe 14 - Promovideo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Promovideo;
