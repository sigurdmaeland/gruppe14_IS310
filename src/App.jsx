import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './pages/style.css'

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App



