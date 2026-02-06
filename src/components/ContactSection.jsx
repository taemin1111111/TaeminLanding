import { useNavigate } from 'react-router-dom'
import './ContactSection.css'

function ContactSection() {
  const navigate = useNavigate()

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content-wrapper">
          <div className="contact-text-wrapper">
            <h1 className="contact-title">CONTACT</h1>
            <p className="contact-subtitle">Let's create something amazing together.</p>
          </div>
          
          <div className="contact-button-wrapper">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="get-in-touch-button"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
