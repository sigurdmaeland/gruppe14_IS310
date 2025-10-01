import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Omoss from '../components/Omoss';
import Promovideo from '../components/Promovideo';
import Prosjekt from '../components/Prosjekt';
import Prosjektønsker from '../components/Prosjektønsker';
import Kontakt from '../components/Kontakt';
import ScrollToTop from '../components/ScrollToTop';
import './style.css';

const Home = () => {
  useEffect(() => {
    const updateActiveSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY;
      
      // Remove active class and inline styles from all nav links first
      document.querySelectorAll('.navbar-link').forEach(link => {
        link.classList.remove('active');
        link.style.color = '';
        link.style.background = '';
      });
      
      // If at the very top of the page, highlight home
      if (scrollPos < 200) {
        const homeLink = document.querySelector(`a.navbar-link[href="#home"]`);
        if (homeLink) {
          homeLink.classList.add('active');
        }
        return;
      }
      
      // Find which section is currently in view
      let currentSection = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // Account for navbar height
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          currentSection = section.getAttribute('id');
        }
      });
      
      if (currentSection) {
        // Add active class to corresponding nav link
        const activeLink = document.querySelector(`a.navbar-link[href="#${currentSection}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', updateActiveSection);
    
    // Check initial state after DOM is ready
    const checkInitial = () => {
      updateActiveSection();
    };
    
    // Multiple checks to ensure it works
    setTimeout(checkInitial, 100);
    setTimeout(checkInitial, 500);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  return (
    <div className="single-page-container">
      <Hero />
      <Omoss />
      <Promovideo />
      <Prosjekt />
      <Prosjektønsker />
      <Kontakt />
      <ScrollToTop />
    </div>
  );
};

export default Home;