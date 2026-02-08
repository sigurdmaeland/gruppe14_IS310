import React, { useState } from 'react';
import './css/status1.css';

const Status1 = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <section id="status1" className="status1-section">
        <div className="container">
          <h2 className="section-title">Status 1 — Innlevering</h2>
          <p className="section-subtitle">Her er vår korte video for Status 1 av bachelorprosjektet.</p>

          <div className="status1-video-container">
            <div className="status1-video-placeholder">
              <button 
                className="status1-play-button"
                onClick={openVideoModal}
                aria-label="Se Status 1 video"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="status1-play-icon">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className="status1-play-text">Se Video</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="status1-video-modal-overlay" onClick={closeVideoModal}>
          <div className="status1-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="status1-video-modal-close"
              onClick={closeVideoModal}
              aria-label="Lukk video"
            >
              ×
            </button>
            <div className="status1-video-modal-wrapper">
              <iframe
                className="status1-video-modal-iframe"
                src="https://www.youtube.com/embed/8fcc0XmCgug?autoplay=1&modestbranding=1&rel=0&showinfo=0"
                title="Status 1 video"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Status1;
