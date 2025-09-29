import React from 'react';
import { Calendar, Users, MapPin, Clock, Mail, Phone } from 'lucide-react';
import './css/kontakt.css';

const Kontakt = () => {
  return (
    <section id="kontakt" className="kontakt-section">
      <div className="container">
        <div className="kontakt-header">
          <h2 className="kontakt-title">Knytt Kontakt!</h2>
          <p className="kontakt-beskrivelse">
            Vi søker praksisplasser og er åpne for alle typer samarbeid.
            <br />
            Send oss en melding hvis dere har interessante prosjekter.
          </p>
        </div>

        <div className="kontakt-content">
          <div className="kontakt-info">
            <div className="info-item">
              <div className="info-ikon">
                <Calendar size={24} />
              </div>
              <div className="info-tekst">
                <h3>Tilgjengelig for praksis våren 2026</h3>
              </div>
            </div>

            <div className="info-item">
              <div className="info-ikon">
                <Users size={24} />
              </div>
              <div className="info-tekst">
                <h3>Kan arbeide individuelt eller som team</h3>
              </div>
            </div>

            <div className="info-item">
              <div className="info-ikon">
                <MapPin size={24} />
              </div>
              <div className="info-tekst">
                <h3>Åpne for både fysisk og fjernarbeid</h3>
              </div>
            </div>

            <div className="info-item">
              <div className="info-ikon">
                <Clock size={24} />
              </div>
              <div className="info-tekst">
                <h3>Fleksible på varighet og omfang</h3>
              </div>
            </div>
          </div>

          <div className="kontakt-details">
            <div className="kontakt-card">
              <div className="card-header">
                <h3>Kontaktinformasjon</h3>
              </div>
              <div className="card-content">
                <div className="kontakt-method">
                  <Mail size={20} />
                  <div>
                    <h4>E-post</h4>
                    <a href="mailto:olebo@uia.no">olebo@uia.no</a>
                  </div>
                </div>
                <div className="kontakt-method">
                  <Phone size={20} />
                  <div>
                    <h4>Telefon</h4>
                    <a href="tel:+4790855170">+47 908 55 170</a>
                  </div>
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