import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: "fab fa-java", colorClass: "java" },
        { name: "Python", icon: "fab fa-python", colorClass: "python" },
        { name: "JavaScript", icon: "fab fa-js", colorClass: "js" },
        { name: "PHP", icon: "fab fa-php", colorClass: "php" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "fab fa-html5", colorClass: "html" },
        { name: "CSS3", icon: "fab fa-css3-alt", colorClass: "css" },
        { name: "JS (ES6+)", icon: "fab fa-js-square", colorClass: "js" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", colorClass: "bootstrap" },
        { name: "React (Basic)", icon: "fab fa-react", colorClass: "react" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "PHP", icon: "fab fa-php", colorClass: "php" },
        { name: "Flask", icon: "fas fa-flask", colorClass: "flask" },
        { name: "MySQL", icon: "fas fa-database", colorClass: "mysql" }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "NumPy", icon: "fas fa-th", colorClass: "numpy" },
        { name: "Matplotlib", icon: "fas fa-chart-line", colorClass: "matplotlib" },
        { name: "scikit-learn", icon: "fas fa-project-diagram", colorClass: "sklearn" },
        { name: "TensorFlow", icon: "fas fa-brain", colorClass: "tensorflow" },
        { name: "Pandas", icon: "fas fa-table", colorClass: "pandas" },
        { name: "NLP (Basic)", icon: "fas fa-comment-dots", colorClass: "nlp" }
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git", icon: "fab fa-git-alt", colorClass: "git" },
        { name: "GitHub", icon: "fab fa-github", colorClass: "github" },
        { name: "Firebase", icon: "fas fa-fire", colorClass: "firebase" },
        { name: "EmailJS", icon: "fas fa-envelope-open-text", colorClass: "emailjs" },
        { name: "Jupyter", icon: "fas fa-book", colorClass: "jupyter" },
        { name: "Claude AI", icon: "fas fa-robot", colorClass: "claude" },
      ]
    },
    /* --- ADDED SOFT SKILLS CATEGORY --- */
    {
      title: "Soft Skills",
      skills: [
        { name: "Adaptability", icon: "fas fa-seedling", colorClass: "soft-green" },
        { name: "Teamwork", icon: "fas fa-users-cog", colorClass: "soft-blue" },
        { name: "Time Mgmt", icon: "fas fa-stopwatch", colorClass: "soft-purple" },
        { name: "Communication", icon: "fas fa-comments", colorClass: "soft-cyan" },
        { name: "Goal Focused", icon: "fas fa-bullseye", colorClass: "soft-red" }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title-main">
          Skill<span className="text-blue">set</span>
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="icon-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className={`icon-wrapper ${skill.colorClass}`}>
                      <i className={skill.icon}></i>
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;