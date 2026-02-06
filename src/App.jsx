import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import DevelopmentHistory from './components/DevelopmentHistory'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ContactFormPage from './pages/ContactFormPage'
import './App.css'

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <DevelopmentHistory />
      <ContactSection />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactFormPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
