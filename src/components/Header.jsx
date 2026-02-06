import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    // 현재 페이지가 홈 페이지인 경우에만 스크롤
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    } else {
      // 다른 페이지에서 클릭 시 홈 페이지로 이동 후 스크롤
      window.location.href = `/#${sectionId}`
    }
  }

  const handleNavClick = (sectionId, e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      // Contact 페이지에서 클릭 시 홈 페이지로 이동
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-overlay">
          <div className="header-container">
            {/* 좌측 네비게이션 메뉴 */}
            <nav className="desktop-nav">
              <button onClick={(e) => handleNavClick('hero', e)} className="nav-link">홈</button>
              <button onClick={(e) => handleNavClick('projects', e)} className="nav-link">프로젝트</button>
              <button onClick={(e) => handleNavClick('development-history', e)} className="nav-link">개발이력</button>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>

            {/* 구분선 */}
            <div className="vertical-divider"></div>

            {/* 우측 소셜 미디어 아이콘 (데스크톱) */}
            <div className="social-icons">
              <a 
                href="https://www.linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="social-icon"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="X (Twitter)" 
                className="social-icon"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/taemin1111111" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub" 
                className="social-icon"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            
            {/* 모바일 햄버거 메뉴 */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 (Frame 410) */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-container">
          {/* 네비게이션 메뉴 */}
          <div className="mobile-nav-menu-wrapper">
            <button className="mobile-nav-item" onClick={(e) => handleNavClick('hero', e)}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.83" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Home</span>
            </button>
            <button className="mobile-nav-item" onClick={(e) => handleNavClick('projects', e)}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.83" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Projects</span>
            </button>
            <button className="mobile-nav-item" onClick={(e) => handleNavClick('development-history', e)}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.83" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>Scribbles</span>
            </button>
            <Link className="mobile-nav-item" to="/contact" onClick={() => setIsMenuOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.83" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div 
          className="mobile-nav-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}

export default Header
