import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './ContactFormPage.css'

function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [submitMessage, setSubmitMessage] = useState('')

  const formatPhoneNumber = (value) => {
    // 숫자만 추출
    const numbers = value.replace(/[^\d]/g, '')
    
    // 길이에 따라 하이픈 자동 삽입
    if (numbers.length <= 3) {
      return numbers
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    } else if (numbers.length <= 11) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`
    } else {
      // 11자리 초과 시 11자리까지만
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // 전화번호 필드인 경우 자동 포맷팅
    let formattedValue = value
    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value)
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }))
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
    <div className="contact-form-page">
      <Header />
      <section className="contact-form-section">
        <div className="contact-form-container">
          <h1 className="contact-title">CONTACT</h1>
          <p className="contact-subtitle">Let's create something amazing together.</p>
          <div className="contact-subtitle-divider"></div>
          
          <form onSubmit={handleSubmit} className="contact-form-wrapper">
              <div className="form-group">
                <label htmlFor="name" className="form-label">이름</label>
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
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">이메일 주소</label>
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
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">연락처</label>
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
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Tell me about it</label>
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
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? '전송 중...' : 'Submit'}
              </button>

              {submitStatus && (
                <div className={`submit-message ${submitStatus}`}>
                  {submitMessage}
                </div>
              )}
            </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ContactFormPage
