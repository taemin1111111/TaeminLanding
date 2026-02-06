import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 이메일/주소 섹션 */}
        <div className="footer-content">
          <p className="footer-text">이메일 : oooo@ooooo.io</p>
          <p className="footer-text">주소 : 서울 강남구 삼성로 32길 12-11. Seoul South Korea</p>
        </div>
      </div>
      
      {/* Copyright 섹션 */}
      <div className="footer-section">
        <div className="footer-section-divider"></div>
        <div className="footer-section-container">
          <p className="footer-copyright">© {currentYear} Myportfolio</p>
          <p className="footer-rights">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
