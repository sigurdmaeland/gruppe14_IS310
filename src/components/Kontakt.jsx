import React, { useRef, useEffect } from 'react';
import { Lightbulb, Target, Users, Mail, Phone, Calendar, MapPin } from 'lucide-react';
import './css/kontakt.css';

const Kontakt = () => {
  const cardRef = useRef(null);
  
  const teamMembers = [
    { name: "Ole", email: "olebo@uia.no", phone: "+47 908 55 170" },
    { name: "Henrik", email: "henriksl@uia.no", phone: "+47 XXX XX XXX" },
    { name: "Jonas", email: "jonaslj@uia.no", phone: "+47 XXX XX XXX" },
    { name: "Sigurd", email: "sigurdbm@uia.no", phone: "+47 XXX XX XXX" }
  ];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleScroll = () => {
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;
      
      // Beregn hvor langt fra sentrum iPhone'n er (normalisert fra -1 til 1)
      const distanceFromCenter = (cardCenter - screenCenter) / screenCenter;
      
      // Begrens verdien til mellom -1.5 og 1.5 for mer dramatisk effekt
      const clampedDistance = Math.max(-1.5, Math.min(1.5, distanceFromCenter));
      
      // Kraftigere rotasjoner (maks ±35 grader X, ±20 grader Y)
      const rotationX = clampedDistance * 35;
      const rotationY = clampedDistance * 20;
      
      // Legg til Z-rotasjon for enda mer dramatisk effekt
      const rotationZ = clampedDistance * 8;
      
      // Scale-effekt - iPhone'n blir litt mindre når den er langt unna sentrum
      const scale = 1 - Math.abs(clampedDistance) * 0.1;
      
      // Vertikal forskyvning for mer dynamikk
      const translateY = clampedDistance * 15;
      const translateX = clampedDistance * 8;
      
      // Oppdater transform med alle effekter
      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotationX}deg) 
        rotateY(${rotationY}deg) 
        rotateZ(${rotationZ}deg)
        scale(${scale})
        translateY(${translateY}px)
        translateX(${translateX}px)
      `;
      
      // Oppdater box-shadow basert på posisjon for mer dramatikk
      const shadowIntensity = Math.abs(clampedDistance);
      const shadowY = 20 + shadowIntensity * 30;
      const shadowBlur = 30 + shadowIntensity * 40;
      const shadowSpread = shadowIntensity * 10;
      
      card.style.boxShadow = `
        0 0 0 2px #000,
        0 ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${0.3 + shadowIntensity * 0.4}),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 ${shadowSpread}px ${shadowBlur + 20}px rgba(0, 0, 0, ${0.2 + shadowIntensity * 0.3})
      `;
    };

    // Legg til scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Kjør en gang ved mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="kontakt" className="kontakt-section">
      <div className="container">
        <div className="kontakt-header">
          <h2 className="kontakt-title">La Oss Samarbeide!</h2>
          <p className="kontakt-subtitle">
            Vi er klare til å bidra på ditt neste prosjekt høsten 2026
          </p>
        </div>

        <div className="kontakt-grid">
          <div className="styrker-container">
            <h3 className="styrker-title">Våre Styrker</h3>
            <div className="styrker-liste">
              <div className="styrke-item">
                <div className="styrke-nummer">01</div>
                <div className="styrke-content">
                  <Lightbulb className="styrke-ikon" />
                  <div>
                    <h4>Kreativ problemløsning</h4>
                    <p>Vi tenker utradisjonelt og finner innovative løsninger på komplekse utfordringer</p>
                  </div>
                </div>
              </div>

              <div className="styrke-item">
                <div className="styrke-nummer">02</div>
                <div className="styrke-content">
                  <Target className="styrke-ikon" />
                  <div>
                    <h4>Resultatorientert arbeidsmetode</h4>
                    <p>Vi leverer alltid i tide og holder høy kvalitet gjennom hele prosjektforløpet</p>
                  </div>
                </div>
              </div>

              <div className="styrke-item">
                <div className="styrke-nummer">03</div>
                <div className="styrke-content">
                  <Users className="styrke-ikon" />
                  <div>
                    <h4>Sterkt teamsamarbeid</h4>
                    <p>Erfaring med både individuelt arbeid og tverrfaglig samarbeid i team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="kontakt-info-container">
            <div className="kontakt-card" ref={cardRef}>
              <h4>Kontakt</h4>
              <div className="kontakt-methods">
                <a href="mailto:olebo@uia.no" className="kontakt-method primary">
                  <Mail size={18} />
                  <span>Send e-post</span>
                </a>
                <a href="tel:+4790855170" className="kontakt-method secondary">
                  <Phone size={18} />
                  <span>Ring oss</span>
                </a>
              </div>
              
              <div className="team-kontakt">
                <p className="team-label">Eller kontakt oss individuelt:</p>
                <div className="team-members">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="member-kontakt">
                      <span className="member-navn">{member.name}</span>
                      <a href={`mailto:${member.email}`} className="member-email">
                        {member.email}
                      </a>
                    </div>
                  ))}
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