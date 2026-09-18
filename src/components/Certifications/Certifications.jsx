import React from 'react';
import './Certifications.css';

const certData = [
 /* {
    id: 1,
    category: "Data Science with Python",
    date: "Feb 23, 2023",
    title: "IBM In Cognitive Class",
    issuer: "IBM / Cognitive Class",
    status: "Issued",
    desc: "Completed the Data Science with Python course from IBM on Cognitive Class, gaining practical experience in data analysis, visualization, and machine learning techniques.",
    logoCard: true,
    coverImage: "/certificate (1).png",
    modalImage: "/certificate (1).png",
    link: "#"
  },*/
  {
    id: 1,
    category: "Gen AI Hackathon",
    date: "Jan 14,2026",
    title: "Generative AI Hackathon Google",
    status: "Issued",
    desc: "Participated in the Gen AI Exchange Hackathon, working on innovative solutions using Generative AI tools. Demonstrated problem-solving skills and teamwork in a competitive development environment.",
    coverImage: "/google.png",
    modalImage: "/certificate (1).png",
    link: "#"
  },
  {
    id: 2,
    category: "AI/Machine Learning intern",
    date: "July - Aug,2025",
    title: "Apex Seekers Edtech Pvt Ltd",
    status: "Issued",
    desc: "Gained hands-on experience in AI/ML workflows, including data preprocessing, model development, and evaluation. Utilized Python and machine learning libraries to perform data analysis and build predictive models.",
    coverImage: "/apex.png",
    modalImage: "/certificate (4).jpg",
    link: "#"
  },
  {
    id: 3,
    category: "FullStack Web Development",
    date: "Sep 23,2024",
    title: "Imagecon Private Limited",
    status: "Issued",
    desc: "Worked on web application development, designing responsive interfaces and implementing interactive UI elements. Applied HTML, CSS, and JavaScript to build structured and user-friendly web pages.",
    coverImage: "/image.png",
    modalImage: "/certificate (5).jpg",
    link: "#"
  },
  {
    id: 4,
    category: "Python FullStack",
    date: "Oct 14,2024",
    title: "DEV Technology Solutions",
    status: "Issued",
    desc: "Completed a Full Stack Python workshop focused on developing dynamic web applications. Gained exposure to Python-based backend development, database connectivity, and web application architecture.",
    coverImage: "/dev.png",
    modalImage: "/certificate (3).jpg",
    link: "#"
  },
  
  {
    id: 5,
    category: "FullStack Web Development",
    date: "Jun 5,2024",
    title: "Shivashri Academy",
    status: "Issued",
    desc: "Completed a Full Stack Web Development course covering frontend and backend development concepts. Learned to develop web applications using PHP, MySQL, HTML, CSS, and JavaScript.",
    coverImage: "/shi (3).png",
    modalImage: "/certificate (7).jpg",
    link: "#"
  },
  {
    id: 6,
    category: "Dark Pattern Hackathon",
    date: "Nov 03,2025",
    title: "Indian Institute Of Technology varanasi",
    status: "Issued",
    desc: "Awarded a Certificate of Excellence at the Dark Patterns Buster Hackathon 2023 for outstanding participation in the final round. Demonstrated strong technical skills, collaboration, and competitive enthusiasm during the hackathon.",
    coverImage: "/dark.png",
    modalImage: "/cer.png",
    link: "#"
  },
  {
    id: 7,
    category: "24 Hour Hackathon",
    date: "Nov 03,2025",
    title: "Dhirajlal Gandhi College of Technology ",
    status: "Issued",
    desc: "Participated in the 24-Hour SDG Challenge’25 Hackathon organized by the DGCT Centre for Innovation & Entrepreneurship. Worked on conceptualizing a smart healthcare solution, demonstrating teamwork, rapid problem solving, and innovatio",
    coverImage: "/hack.png",
    modalImage: "/certificate (8).jpg",
    link: "#"
  },
  {
    id: 8,
    category: "Java with Mysql",
    date: "Nov 05, 2023",
    title: "Shivashri Academy",
    status: "Issued",
    desc: "Completed a Core Java and MySQL training program focused on programming fundamentals and database integration. Gained knowledge of OOP concepts, Java development, and working with relational databases using MySQL.",
    coverImage: "/shi (2).png",
    modalImage: "/certificate (6).jpg",
    link: "#"
  },
  {
    id: 9,
    category: "Introduction to GenAI/ Prompting",
    date: "July 11, 2025",
    title: "Lets Upgrade",
    status: "Issued",
    desc: "Completed a workshop on Generative AI and Prompt Engineering, focusing on practical AI usage. Gained knowledge of creating structured prompts to effectively utilize AI models for various tasks.",
    coverImage: "/pop.png",
    modalImage: "/ceritificate (1).png",
    link: "#"
  },
  {
    id: 10,
    category: "GenAI Data Analytics Simulation",
    date: "Sep 03, 2025",
    title: "Tata",
    status: "Issued",
    desc: "Successfully completed a GenAI Powered Data Analytics job simulation, focusing on real-world data analysis scenarios. Applied AI-driven techniques to analyze datasets and generate insights for data-driven decision making.",
    coverImage: "/tata.png",
    modalImage: "/ceritificate2.png",
    link: "#"
  },
  {
    id: 11,
    category: "Learnathon",
    date: "Feb 28, 2024",
    title: "GUVI Naan Mudhalvan",
    status: "Issued",
    desc: "Successfully participated in the GUVI Naan Mudhalvan Learnathon program aimed at improving industry-relevant technical skills. Gained exposure to structured learning modules and hands-on exercises for technology development.",
    coverImage: "https://img-cdn.publive.online/fit-in/1200x675/entrackr/media/post_attachments/wp-content/uploads/2022/09/Guvi.jpg",
    modalImage: "/certificate (2).png",
    link: "#"
  },
  {
    id: 12,
    category: "Project Expo",
    date: "Feb 14, 2024",
    title: "Manakula Vinayagar Institute of Technology",
    status: "Issued",
    desc: "Participated in the National Science Day Project Expo 2024 at Manakula Vinayagar Institute of Technology. Showcased a project and engaged with peers and experts in a technical exhibition environment.",
    coverImage: "/pro.jpg",
    modalImage: "/certificate (2).jpg",
    link: "#"
  },
  {
    id: 13,
    category: "Cloud Computing",
    date: "Oct 01, 2023",
    title: "Intrainz",
    status: "Issued",
    desc: "Successfully completed a Cloud Computing internship, focusing on fundamental cloud concepts and practical applications. Showed strong learning ability and active participation throughout the training program..",
    coverImage: "/cloud.png",
    modalImage: "/cert.png",
    link: "#"
  },
  {
    id: 14,
    category: "Paper Presentation",
    date: "Oct 06, 2023",
    title: "Mahendra College of Technology",
    status: "Issued",
    desc: "Participated in the Papyrus Prism event at XENIX’23, a National Level Technical Symposium. Gained exposure to technical competitions and collaborative learning with peers from various institutions.",
    coverImage: "/mahendra.png",
    modalImage: "/certificate (1).jpg",
    link: "#"
  }
];

/* ─── Modal ──────────────────────────────────────────── */
const CertModal = ({ index, onClose, onPrev, onNext }) => {
  const cert = certData[index];
  const isFirst = index === 0;
  const isLast  = index === certData.length - 1;

  /* close on backdrop click */
  const onBackdrop = (e) => { if (e.target === e.currentTarget) onClose(); };

  /* keyboard */
  React.useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft'  && !isFirst) onPrev();
      if (e.key === 'ArrowRight' && !isLast)  onNext();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [index]);

  /* lock body scroll */
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  /* short heading — first word of title */
  const heading = cert.title;

  return (
    <div className="cm-backdrop" onClick={onBackdrop}>

      {/* ── X button — top-right, outside the panel ── */}
      <button className="cm-close" onClick={onClose} aria-label="Close">✕</button>

      {/* ── Modal container ── */}
      <div className="cm-container">

        {/* LEFT — certificate image */}
        <div className="cm-left">
          {cert.logoCard ? (
            <div className="cm-logo-fallback">
              <svg className="cm-ibm-svg" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="3" x="0"   y="0"  fill="#1f70c1"/>
                <rect width="8" height="3" x="0"   y="5"  fill="#1f70c1"/>
                <rect width="5" height="3" x="1.5" y="10" fill="#1f70c1"/>
                <rect width="5" height="3" x="1.5" y="15" fill="#1f70c1"/>
                <rect width="8" height="3" x="0"   y="20" fill="#1f70c1"/>
                <rect width="8" height="3" x="0"   y="25" fill="#1f70c1"/>
                <rect width="8" height="3" x="12"  y="0"  fill="#1f70c1"/>
                <rect width="8" height="3" x="12"  y="5"  fill="#1f70c1"/>
                <rect width="8" height="3" x="12"  y="10" fill="#1f70c1"/>
                <rect width="8" height="3" x="12"  y="15" fill="#1f70c1"/>
                <rect width="8" height="3" x="12"  y="20" fill="#1f70c1"/>
                <rect width="8" height="3" x="12"  y="25" fill="#1f70c1"/>
                <rect width="8" height="3" x="24"  y="0"  fill="#1f70c1"/>
                <rect width="8" height="3" x="24"  y="5"  fill="#1f70c1"/>
                <rect width="8" height="3" x="24"  y="10" fill="#1f70c1"/>
                <rect width="8" height="3" x="24"  y="15" fill="#1f70c1"/>
                <rect width="8" height="3" x="24"  y="20" fill="#1f70c1"/>
                <rect width="8" height="3" x="24"  y="25" fill="#1f70c1"/>
              </svg>
              <div className="cert-logo-text">
                <span className="cert-logo-cognitive">Cognitive</span>
                <span className="cert-logo-class">Class</span>
              </div>
            </div>
          ) : (
            <img
              src={cert.modalImage || cert.coverImage}
              alt={cert.title}
              className="cm-img"
            />
          )}
        </div>

        {/* RIGHT — details panel */}
        <div className="cm-right">

          {/* scrollable content area */}
          <div className="cm-right-body">
            <h2 className="cm-heading">{heading}</h2>

            <div className="cm-row">
              <span className="cm-label">Issued by:</span>
              <span className="cm-value">{cert.category || '—'}</span>
            </div>

            <div className="cm-row">
              <span className="cm-label">Issued on:</span>
              <span className="cm-value">{cert.date}</span>
            </div>

            <div className="cm-row">
              <span className="cm-label">Status:</span>
              <span className="cm-value">{cert.status || 'Issued'}</span>
            </div>

            <p className="cm-desc">{cert.desc}</p>
          </div>

          {/* bottom nav — ( Prev   Download   Next ) */}
          <div className="cm-nav">
            <button
              className={`cm-nav-btn${isFirst ? ' cm-nav-btn--off' : ''}`}
              onClick={onPrev}
              disabled={isFirst}
            >( Prev</button>

            <a
              href={cert.modalImage || cert.link || '#'}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="cm-download"
            >Download</a>

            <button
              className={`cm-nav-btn${isLast ? ' cm-nav-btn--off' : ''}`}
              onClick={onNext}
              disabled={isLast}
            >Next )</button>
          </div>

        </div>
      </div>
    </div>
  );
};

/* ─── Card ───────────────────────────────────────────── */
const CertCard = ({ cert, index, onOpen }) => (
  <div className="cert-card" onClick={() => onOpen(index)} style={{ cursor: 'pointer' }}>
    {cert.logoCard ? (
      <div className="cert-logo-box">
        <svg className="ibm-svg" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg">
          <rect width="8" height="3" x="0"   y="0"  fill="#1f70c1"/>
          <rect width="8" height="3" x="0"   y="5"  fill="#1f70c1"/>
          <rect width="5" height="3" x="1.5" y="10" fill="#1f70c1"/>
          <rect width="5" height="3" x="1.5" y="15" fill="#1f70c1"/>
          <rect width="8" height="3" x="0"   y="20" fill="#1f70c1"/>
          <rect width="8" height="3" x="0"   y="25" fill="#1f70c1"/>
          <rect width="8" height="3" x="12"  y="0"  fill="#1f70c1"/>
          <rect width="8" height="3" x="12"  y="5"  fill="#1f70c1"/>
          <rect width="8" height="3" x="12"  y="10" fill="#1f70c1"/>
          <rect width="8" height="3" x="12"  y="15" fill="#1f70c1"/>
          <rect width="8" height="3" x="12"  y="20" fill="#1f70c1"/>
          <rect width="8" height="3" x="12"  y="25" fill="#1f70c1"/>
          <rect width="8" height="3" x="24"  y="0"  fill="#1f70c1"/>
          <rect width="8" height="3" x="24"  y="5"  fill="#1f70c1"/>
          <rect width="8" height="3" x="24"  y="10" fill="#1f70c1"/>
          <rect width="8" height="3" x="24"  y="15" fill="#1f70c1"/>
          <rect width="8" height="3" x="24"  y="20" fill="#1f70c1"/>
          <rect width="8" height="3" x="24"  y="25" fill="#1f70c1"/>
        </svg>
        <div className="cert-logo-text">
          <span className="cert-logo-cognitive">Cognitive</span>
          <span className="cert-logo-class">Class</span>
        </div>
      </div>
    ) : (
      <div className="cert-image-box">
        <img src={cert.coverImage} alt={cert.title} className="cert-cover-img" />
      </div>
    )}

    <div className="cert-body">
      <div className="cert-meta">
        <span className="cert-category">{cert.category}</span>
        <span className="cert-date">{cert.date}</span>
      </div>
      <h3 className="cert-title">{cert.title}</h3>
      {cert.issuer && (
        <p className="cert-issuer">Issued by <strong>{cert.issuer}</strong></p>
      )}
      <p className="cert-desc">{cert.desc}</p>
     {/* <div className="cert-footer"></div> */}
    </div>
  </div>
);
/* ─── Page Header ───────────────────────────────────────────── */
export default function Certifications() {
  const [active, setActive] = React.useState(null);

  return (
    <section className="cert-section" id="certifications">
      <div className="cert-container">
        {/* NEW: Decorative Section Header matching your 3rd image */}
        <div className="section-header-container">
          <div className="header-line left-line"></div>
          <h2 className="cert-heading">Certifications</h2>
          <div className="header-line right-line"></div>
        </div>
        <p className="cert-subheading">Recognition and continuous learning in the field of Full Stack Developer</p>

        <div className="cert-grid">
          {certData.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active !== null && (
        <CertModal
          index={active}
          onClose={() => setActive(null)}
          onPrev={() => setActive(i => Math.max(0, i - 1))}
          onNext={() => setActive(i => Math.min(certData.length - 1, i + 1))}
        />
      )}
    </section>
  );
}
