import React, { useState } from 'react'; // Added useState
import './About.css';

const About = () => {
  // State to control popup visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewResume = () => {
    // Instead of opening a new URL, we open the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <h2 className="about-title-main">
          <span className="title-cyan-line"></span> About Me
        </h2>
        
        <div className="about-wrapper">
          {/* Left Side: Image with existing design */}
          <div className="about-image-container">
            <div className="image-border">
              <img src="/profile.jpg" alt="Kishor Kumar B" className="profile-img" />
            </div>
          </div>

          {/* Right Side: Three distinct points */}
          <div className="about-text-content">
            {/* Point 1: Passion & Efficiency */}
            <p className="about-description">
              Passionate <strong>Full Stack Java Developer</strong> and <strong>Machine Learning</strong> enthusiast. I leverage <strong>AI agents</strong> to build scalable architectures in a more efficient and optimized way.
            </p>

            {/* Point 2: Core Skills & Current Preparation */}
            <p className="about-description">
              I possess strong skills in <strong>Java, MySQL, HTML, CSS, and JS</strong>. Currently, I am further strengthening my expertise by preparing in <strong>DSA</strong> and the <strong>React framework</strong>.
            </p>

            {/* Point 3: Education & CGPA */}
            <p className="about-description">
              Currently pursuing a <strong>B.Tech in Artificial Intelligence and Data Science</strong> at Dhirajlal Gandhi College of Technology with an impressive <strong>8.2 CGPA</strong>.
            </p>

            <button className="view-resume-btn" onClick={handleViewResume}>
              <i className="far fa-eye"></i> View Resume
            </button>
          </div>
        </div>
      </div>

      {/* --- POPUP MODAL CODE --- */}
      {isModalOpen && (
        <div className="resume-modal-overlay" onClick={closeModal}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <iframe 
              src="/Kishor_Resume.pdf" 
              title="Resume Preview" 
              className="resume-iframe"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;