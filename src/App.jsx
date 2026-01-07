import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BachelorProsjekt from './pages/BachelorProsjekt'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './pages/style.css'

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bachelor-prosjekt" element={<BachelorProsjekt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App



