import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
