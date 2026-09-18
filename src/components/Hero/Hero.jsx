import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="hero-subtitle">AI & Data Science Engineer</span>
        
        <h1 className="hero-title">
          Kishor <span className="highlight">Kumar</span> B
        </h1>

        <p className="hero-description">
          Architecting scalable web systems with <strong> intelligent AI.</strong>
        </p>

        <div className="hero-btns">
          <a href="#projects" className="primary-btn">Recent Work</a>
          <a href="#contact" className="outline-btn">Contact</a>
        </div>

        {/* --- NEW FOOTER SECTION --- */}
       <div className="hero-footer">
  <div className="social-links">
    
    <a href="https://www.linkedin.com/in/kishorkumar28/" target="_blank" rel="noreferrer" className="social-icon">
      <i className="fa-brands fa-linkedin-in"></i>
      <span className="icon-label">LINKEDIN</span>
    </a>

    <a href="https://github.com/Kishor165" target="_blank" rel="noreferrer" className="social-icon">
      <i className="fa-brands fa-github"></i>
      <span className="icon-label">GITHUB</span>
    </a>

    <a href="mailto:bkishorkumar31@gmail.com" className="social-icon">
      <i className="fa-solid fa-envelope"></i>
      <span className="icon-label">EMAIL</span>
    </a>

    <a href="https://www.instagram.com/kishxr_._/" target="_blank" rel="noreferrer" className="social-icon">
      <i className="fa-brands fa-instagram"></i>
      <span className="icon-label">INSTAGRAM</span>
    </a>

  </div>


{/* Inside your Hero component return */}
<a href="#about" className="scroll-indicator">
  <div className="scroll-indicator">
    <span className="scroll-text">SCROLL</span>
    <div className="scroll-arrow">↓</div>
  </div>
</a>






</div>
        {/* --- END FOOTER SECTION --- */}

      </div>
    </section>
  );
};

export default Hero;