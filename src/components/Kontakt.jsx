import React from 'react';
import './css/kontakt.css';

const Kontakt = () => {
  return (
    <section id="kontakt" className="contact-section">
      <div className="container">
        <h2 className="section-title">Kontakt</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Ta kontakt med oss</h3>
            <p>
              Vi er alltid interessert i å høre fra deg! Enten du har spørsmål om våre prosjekter, 
              ønsker samarbeid, eller bare vil si hei - ikke nøl med å ta kontakt.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <h4>📧 E-post</h4>
                <p>Du kan nå oss på våre individuelle e-postadresser via universitetet.</p>
              </div>
              <div className="contact-item">
                <h4>🎓 Universitet</h4>
                <p>Universitetet i Agder (UiA)<br />Fakultet for Teknologi og Realfag</p>
              </div>
              <div className="contact-item">
                <h4>📍 Lokasjon</h4>
                <p>Grimstad og Kristiansand, Norge</p>
              </div>
            </div>
          </div>
          
          <div className="team-links">
            <h3>Følg oss</h3>
            <p>Koble til med oss på sosiale medier og profesjonelle nettverk:</p>
            <div className="member-links">
              <div className="member-link-card">
                <h4>Sigurd</h4>
                <p>Frontend & Design</p>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/sigurd-mæland-40325636a/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                  <a href="https://github.com/Sigurdmaeland" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                </div>
              </div>
              
              <div className="member-link-card">
                <h4>Ole</h4>
                <p>Full-Stack & Team</p>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/ole-bj%C3%B8rk-olsen-10a034365/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                  <a href="https://github.com/oleols1" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                </div>
              </div>
              
              <div className="member-link-card">
                <h4>Jonas</h4>
                <p>Full-Stack & Teknisk</p>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/jonas-løvik-jørgensen-b1b013362/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                  <a href="https://github.com/JonasLovik" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                </div>
              </div>
              
              <div className="member-link-card">
                <h4>Henrik</h4>
                <p>Full-Stack & Kommunikasjon</p>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/henrik-lorentzen/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                  <a href="https://github.com/HenrikLorentzen" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
