import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Omoss from '../components/Omoss';
import Prosjekt from '../components/Prosjekt';
import Kontakt from '../components/Kontakt';
import './style.css';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          
          // Remove active class from all nav links
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          
          // Add active class to corresponding nav link
          const activeLink = document.querySelector(`[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="single-page-container">
      <Hero />
      <Omoss />
      <Prosjekt />
      <Kontakt />
    </div>
  );
};

export default Home;