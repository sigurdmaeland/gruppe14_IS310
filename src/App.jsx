import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Omoss from './pages/Omoss'
import Prosjekt from './pages/Prosjekt'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './pages/style.css'


function App() {

  return (
    <div className="app-layout">
      <Navbar />
      <ScrollToTop />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prosjekt" element={<Prosjekt />} />
          <Route path="/omoss" element={<Omoss />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App



