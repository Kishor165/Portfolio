import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Meeting Summarization Notes",
      // Custom AI image: digital interface analyzing documents with neural network links, dark theme.
      image: "/im.png",
      desc: "Natural Language Processing system using Gemini API for automated transcription and smart text summarization.",
      tags: ["HTML", "CSS", "JS", "GEMINI API", "FLASK"],
      liveLink: "", // ADD THIS
      githubLink: "https://github.com/Kishor165/Meeting-Summarizer.git", // ADD THIS
    },
    {
      title: "Employee Data Management",
      // Custom AI image: futuristic database dashboard, data visualization, glowing elements.
      image: "https://as1.ftcdn.net/v2/jpg/19/27/77/86/1000_F_1927778635_TJfPQR7VdrVt7HjABtz1Mu1Ivp9TdH29.jpg",
      desc: "A full-stack system supporting CRUD operations and user authentication for managing personnel records, backed by a MySQL database.",
      tags: ["PHP", "MYSQL",  "HTML", "CSS", "JS"],
      liveLink: "", // ADD THIS
      githubLink: "", // ADD THIS
    },
    {
      title: "Online Food Delivery System",
      // Custom AI image: digital map with AI robot delivering food on a scooter, glowing route.
      image: "/image (2).png",
      desc: "A dynamic frontend ordering system featuring Firebase authentication and real-time database integration with email confirmation via EmailJS.",
      tags: ["HTML", "CSS", "JS", "FIREBASE"],
      liveLink: "https://your-live-demo.com", // ADD THIS
      githubLink: "https://github.com/yourusername/project-repo", // ADD THIS
    },
    {
      title: "Spam Detection",
      // Custom AI image: digital dashboard analyzing emails, neural network links, cyber security elements.
      image: "/image (1).png",
      desc: "A Flask-based application that utilizes machine learning to analyze incoming text and classify messages as either spam or ham.",
      tags: ["HTML", "CSS", "JS", "FLASK"],
      liveLink: "", // ADD THIS
      githubLink: "https://github.com/Kishor165/AI-ML-Models.git", // ADD THIS
    },
    {
      title: "Amazon Clone Page",
      // Custom AI image: e-commerce dashboard, modern UI design, glowing product interfaces.
      image: "/image (2).webp",
      desc: "A frontend replication focusing on recreating the navigation, layout, and product display sections of the Amazon homepage.",
      tags: ["HTML", "CSS", "JS"],
      liveLink: " https://kishor165.github.io/Amazon_clone_page/", // ADD THIS
      githubLink: " https://github.com/Kishor165/Amazon_clone_page.git", // ADD THIS
    }
  ];

  return (
    <section className="projects-section" id="projects">
       <h2 className="skills-title-main">
        Select<span className="text-blue">Work</span>
      </h2>

      <div className="projects-grid">
    {projects.map((p, i) => (
      <div className="project-card" key={i}>
        <div className="card-inner">
          
          {/* 1. Make the Image link to the Live Project */}
          <a href={p.liveLink} target="_blank" rel="noreferrer" className="image-container">
            <img src={p.image} alt={p.title} />
            <div className="top-right-link">
              <i className="fas fa-arrow-up-right-from-square"></i>
            </div>
          </a>
          
          <div className="content-box">
            <h3 className="p-title">{p.title}</h3>
            <p className="p-desc">{p.desc}</p>
            <div className="p-tags">
              {p.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>

          <div className="card-footer">
            <div className="footer-icons">
              {/* 2. Link the GitHub Icon to the Repository */}
              <a href={p.githubLink} target="_blank" rel="noreferrer" className="footer-link">
                <i className="fab fa-github"></i>
              </a>

              {/* 3. Link the External Link Icon to the Live Project */}
              <a href={p.liveLink} target="_blank" rel="noreferrer" className="footer-link">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            
            {/* Optional: Make "View Details" also a live link */}
            <a href={p.liveLink} target="_blank" rel="noreferrer" className="view-details">
              View Details
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
    </section>
  );
};

export default Projects;