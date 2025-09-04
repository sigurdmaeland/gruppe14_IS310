import React from 'react';
import './style.css';
import '../css/omoss.css';

const OmOss = () => {
  const teamMembers = [
    {
      name: "Sigurd Bøthun Mæland",
      age: 22,
      background: "Erfaring med React, JavaScript, og full-stack utvikling. Har jobbet med flere web-prosjekter og har solid bakgrunn innen moderne frontend-teknologier.",
      image: "/sigurd.png", 
      linkedin: "https://www.linkedin.com/in/sigurd-mæland-40325636a/",
      github: "https://github.com/Sigurdmaeland"
    },
    {
      name: "Ole Bjørk Olsen", 
      age: 22,
      background: "Erfaring med React, JavaScript, og frontend utvikling. Har jobbet med flere web-prosjekter og har solid bakgrunn innen moderne frontend-teknologier.",
      image: "/ole.png", 
      linkedin: "https://www.linkedin.com/in/ole-bj%C3%B8rk-olsen-10a034365/",
      github: "https://github.com/oleols1"
    },
    {
      name: "Jonas Løvik Jørgensen",
      age: 24,
      background: "Jeg heter Jonas, jeg er født i Kristiansand og er oppvokst i Molde. Jeg har jobbet i Romsdal Gruppen hver sommer siden jeg var 13 år gammel, der var jeg maskinfører for datterselskapet Romsdal Gjenvinning. Fra tidligere har jeg en bachelorgrad i Økonomi og Administrasjon fra Handelshøyskolen BI, derfor har jeg både erfaring med informasjonssystemer og økonomi. På fritiden liker jeg å se på fotball og trene.",
      image: "/jonas.png", 
      linkedin: "https://www.linkedin.com/in/jonas-løvik-jørgensen-b1b013362/",
      github: "https://github.com/JonasLovik"
    },
    {
      name: "Henrik Lorentzen",
      age: 22,
      background: "Erfaring med backend utvikling, spesielt med Node.js og Express. Har jobbet med flere API-prosjekter.",
      image: "/henrik.png", 
      linkedin: "https://www.linkedin.com/in/henrik-lorentzen/",
      github: "https://github.com/HenrikLorentzen"
    }
  ];

  return (
    <div className="page-container omoss-page">
      <div className="content-wrapper">
        <div className="omoss-header">
          <h1 className="omoss-title">Om Oss</h1>
          <p className="omoss-subtitle">
            Velkommen til oss i gruppe 9. Vi er fire studenter som 
            gjennom flere semestere har jobbet delaktig sammen for å utarbeide gode resultater og lærdom gjennom bachelorprogrammet, IT og Informasjonssystemer på <a href="https://www.uia.no" target="_blank" rel="noopener noreferrer" className="accent-link">Universitetet i Agder (UiA)</a>.
            Gjennom studiene har studentene bygget god faglig kompetanse på både individuelt plan, og i felleskap. Gruppen har sammen utarbeidet en arbeidsdynamikk som effektivt tar i bruk enkeltpersoners evner, erfaringer, styrker og svakheter, for å skape et arbeidsmiljø som er inkluderende og effektivt ved prosjektgjennomføring og arbeid. Denne sammensetningen skaper rom for åpenhet, troverdighet og utfyllelse ved hverandres evner, tanker og ønsker ved et gitt arbeid. 
          </p>
        </div>

        <div className="team-section">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="person-card">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="profile-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/120x120/4A5D7A/ffffff?text=" + member.name.split(' ').map(n => n[0]).join('');
                  }}
                />
                
                <h3 className="person-name">{member.name}</h3>
                <p className="person-age">{member.age} år</p>
                
                <div className="person-background">
                  <h4 className="background-title">Om meg</h4>
                  <p className="background-text">{member.background}</p>
                </div>
                
                <div className="social-links">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link linkedin"
                    title="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link github"
                    title="GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmOss;
