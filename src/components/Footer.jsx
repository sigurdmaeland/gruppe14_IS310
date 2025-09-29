import React from 'react'
import './css/footer.css'


function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Gruppe 14 • IS-310</p>
        <div className="footer-links">
          <a href="https://www.uia.no/" target="_blank" rel="noreferrer" aria-label="Universitetet i Agder">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer