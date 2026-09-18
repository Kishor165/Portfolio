import React from "react";
import "./Education.css";

const eduData = [
  {
    id: 1,
    school: "Dhirajlal Gandhi College Of Technology (UG)",
    year: "2022 - 2026",
    score: "8.14 CGPA",
    desc: "Pursuing B.Tech in Artificial Intelligence and Data Science (Final Year) with a CGPA of 8.14 at Dhirajlal Gandhi College of Technology. Focusing on advanced AI concepts, machine learning models, and deep learning architectures.",
  },
  {
    id: 2,
    school: "Little Flower Higher Secondary School (HSC)",
    year: "2020 - 2022",
    score: "65% Percentage",
    desc: "Completed Higher Secondary Education with a specialization in Computer Science, building a strong foundation in programming and core computing concepts..",
  },
  {
    id: 3,
    school: "Vetri Vikaas Higher Secondary School (SSLC)",
    year: "2019 - 2020",
    score: "97% Percentage",
    desc: "Graduated with distinction, demonstrating strong academic performance.Developed an early interest in technology and logical problem-solving skills..",
  },
];

export default function Education() {
  return (
    <section className="edu-section" id="education">
      <div className="edu-container">
        
        <div className="section-header-container">
          <div className="header-line left-line"></div>
          <h2 className="edu-heading">Education</h2>
          <div className="header-line right-line"></div>
        </div>

        <div className="edu-timeline-v3">
          {eduData.map((e) => (
            <div key={e.id} className="edu-item-v3">
              
              {/* FIXED: Marker Side with continuous line logic */}
              <div className="edu-marker-v3">
                <div className="edu-dot-v3"></div>
                <div className="edu-line-v3"></div>
              </div>

              {/* FIXED: Right Side: Strict Vertical Content Flow */}
              <div className="edu-card-v3">
                {/* 1. College Name */}
                <h3 className="edu-school-name">{e.school}</h3>
                
                {/* 2. Year */}
                <span className="edu-year-text">{e.year}</span>
                
                {/* 3. Percentage/CGPA */}
                <div className="edu-score-box">
                  <span className="edu-score-label"></span>
                  <span className="edu-score-val">{e.score}</span>
                </div>

                {/* 4. Description */}
                <p className="edu-description-text">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}