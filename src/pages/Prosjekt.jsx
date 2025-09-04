import React from 'react'
import './style.css'

function Prosjekt() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '1.2rem' }}>Prosjekter</h1>
      <p style={{ fontSize: '1.15rem', color: 'var(--muted)' }}>
        Her kommer det innhold om prosjektet i løpet av semesteret.
      </p>
    </div>
  );
}

export default Prosjekt