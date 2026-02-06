import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [showForm, setShowForm] = useState(false) // 폼 표시 여부
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // 상태 메시지 초기화
    if (submitStatus) {
      setSubmitStatus(null)
      setSubmitMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage('')

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus('success')
        setSubmitMessage(data.message || '문의가 성공적으로 전송되었습니다!')
        // 폼 초기화
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.message || '전송 중 오류가 발생했습니다.')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus('error')
      setSubmitMessage('서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">CONTACT</h1>
        <p className="contact-subtitle">Let's create something amazing together.</p>
        <div className="contact-divider"></div>
        
        {!showForm ? (
          <div className="contact-button-center">
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="get-in-touch-button"
            >
              Get in touch
            </button>
          </div>
        ) : (
          <div className="contact-content-wrapper">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="get-in-touch-button"
            >
              Get in touch
            </button>
            
            <form onSubmit={handleSubmit} className="contact-form-wrapper">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ex. nobuilder"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              <label htmlFor="name" className="form-label">이름</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ex. nobuilder@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
              <label htmlFor="email" className="form-label">이메일 주소</label>
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="ex. 010-1234-1234"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                required
              />
              <label htmlFor="phone" className="form-label">연락처</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="내용을 입력해주세요"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="6"
                required
              />
              <label htmlFor="message" className="form-label">Tell me about it</label>
            </div>

            <div className="submit-button-wrapper">
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? '전송 중...' : 'Submit'}
              </button>
            </div>

            {submitStatus && (
              <div className={`submit-message ${submitStatus}`}>
                {submitMessage}
              </div>
            )}
          </form>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactForm
