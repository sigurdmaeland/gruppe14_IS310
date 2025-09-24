import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './css/scrolltotop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const heroSection = document.querySelector('#home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollY = window.scrollY;
        
        // Vis knappen når man har scrollet forbi Hero-seksjonen
        setIsVisible(scrollY > heroHeight);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll til toppen"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;
