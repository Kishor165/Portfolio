import React from 'react';
import './Experience.css';

// SVG Icons (inline, no external dependency)
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Experience = () => {
  const experienceData = [
    {
      role: "AI / Machine Learning Intern",
      company: "Apex Seekers Private Limited",
      year: "Jul - Aug 2025",
      location: "Salem",
      project: "AI-Based Meeting Summarization System",
      description: [
        "Worked on AI/ML workflows including data preprocessing and model training.Utilized Python-based tools for predictive modeling and data analysis."
      ]
    },
   {
  role: "Web Development Intern",
  company: "Imagecon  Private Limited",
  year: "Aug – Sep 2024",
  location: "Salem",
  project: "Online Food Ordering System",
  description: [
    "Designed responsive web interfaces using modern HTML, CSS, and JavaScript practices. Implemented user interface components to enhance usability and overall user experience."
  ]
}
  ];

  return (
    <section className="exp-section" id="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Professional Experience and Internships in Full Stack Development and Machine Learning
        </p>
      </div>

      <div className="timeline-wrapper">
        <div className="center-line"></div>
        {experienceData.map((exp, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : ''}`} key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">

              {/* Year badge — top right */}
              <div className="card-year">
                <CalendarIcon /> {exp.year}
              </div>

              {/* Role title — centered */}
              <h3 className="role-text">{exp.role}</h3>

              {/* Company • Location */}
              <div className="company-info">
                <span className="comp-name"><BriefcaseIcon /> {exp.company}</span>
                <span className="dot-sep">•</span>
                <span className="loc-text"><MapPinIcon /> {exp.location}</span>
              </div>

              <hr className="card-divider" />

              {/* Cyan project label */}
              <div className="project-label">{exp.project}</div>

              {/* Description bullets */}
              <ul className="desc-list">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;