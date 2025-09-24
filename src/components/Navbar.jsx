
import React, { useState, useEffect } from 'react';
import './css/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <a href="#hjem" className="navbar-brand" tabIndex={0} aria-label="Gå til Hjem" onClick={(e) => handleSmoothScroll(e, 'hjem')}>
          Gruppe 14
        </a>
        <button
          className={`navbar-menu-toggle${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <span className="navbar-icon-cross" />
          ) : (
            <span className="navbar-icon-hamburger" />
          )}
        </button>
        <div className={`navbar-menu${menuOpen ? ' open' : ''}`}>
          <ul className="navbar-links">
            <li>
              <a href="#hjem" className="navbar-link" onClick={(e) => handleSmoothScroll(e, 'hjem')}>
                Hjem
              </a>
            </li>
            <li>
              <a href="#omoss" className="navbar-link" onClick={(e) => handleSmoothScroll(e, 'omoss')}>
                Om oss
              </a>
            </li>
            <li>
              <a href="#prosjekter" className="navbar-link" onClick={(e) => handleSmoothScroll(e, 'prosjekter')}>
                Prosjekter
              </a>
            </li>
            <li>
              <a href="#prosjekt" className="navbar-link" onClick={(e) => handleSmoothScroll(e, 'prosjekt')}>
                Prosjektgjennomføring
              </a>
            </li>
            <li>
              <a href="#kontakt" className="navbar-link" onClick={(e) => handleSmoothScroll(e, 'kontakt')}>
                Kontakt
              </a>
            </li>
          </ul>
          <button className="navbar-theme-toggle" onClick={toggleTheme} aria-label="Bytt mellom mørk og lys modus">
            {theme === 'dark' ? (
              <span className="navbar-theme-icon sun" />
            ) : (
              <span className="navbar-theme-icon moon" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;