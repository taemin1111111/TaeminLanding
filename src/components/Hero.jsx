import './Hero.css'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {/* 프로필 이미지 */}
          <div className="profile-image-wrapper">
            <div className="profile-image">
              <img 
                src="https://s3-alpha-sig.figma.com/img/694d/c249/f8cae73c774b2287d0e008762cb29312?Expires=1771200000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BWcn~d8yG5DCHIp71VEhc8eaMdop0wmPL2ZUonnrpztVOPlDe-6QXBtGL2XVCZtVrKk4w6fvS~jmzSHQ0ui5KaTaMhPNbflzWiCYiViQW~GCPzwqEgXuDTLsf9LuRIoIuf0MhLTMGLNVTEukggfZ2Ppi2ToG~gbRXu1zlGf0gL4u1cHu81Nmn6JKB7JdJ36pRfZzLXaLM~v1zyei-Bhp34VEptxir-iZvxAi50wN76MS9akKSHhF4PHllHCMlLbeL5jNKiZcp9p6~3sZjCoO8dUmGDwT3bvP79-pLiz5gcn0nPCyMH5uTGhiF7XjFyd~5lPTzoOxxxl~yKvPls~AQw__"
                alt="프로필"
                className="profile-img"
              />
            </div>
          </div>
          
          {/* 텍스트 영역 */}
          <div className="hero-text">
            <div className="hero-text-container">
              <p className="hero-greeting">안녕하세요</p>
              <h1 className="hero-title">
                노코드 개발자,<br />
                홍길동 입니다
              </h1>
            </div>
            <p className="hero-description">
              노코드 툴 버블을 사용하여<br className="mobile-only" /> Web, App 등을 구현합니다.
            </p>
            <div className="hero-buttons">
              <button 
                className="hero-button primary" 
                onClick={() => scrollToSection('projects')}
              >
                프로젝트 보기
              </button>
              <button 
                className="hero-button secondary" 
                onClick={() => scrollToSection('contact')}
              >
                문의하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
