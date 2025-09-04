
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <NavLink to="/" className="navbar-brand" tabIndex={0} aria-label="Gå til Hjem">
          Gruppe 14
        </NavLink>
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
              <NavLink to="/" end className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
                Hjem
              </NavLink>
            </li>
            <li>
              <NavLink to="/prosjekt" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
                Prosjekt
              </NavLink>
            </li>
            <li>
              <NavLink to="/omoss" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
                Om oss
              </NavLink>
            </li>
          </ul>
          <button className="navbar-theme-toggle" onClick={toggleTheme} aria-label="Bytt mellom mørk og lys modus">
            {theme === 'dark' ? (
              <span className="navbar-theme-icon moon" />
            ) : (
              <span className="navbar-theme-icon sun" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;