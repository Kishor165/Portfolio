import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
// Header.jsx
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certificates' }, // Change this from 'certificates'
  { id: 'contact', label: 'Contact' },
];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-main ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Toggle Button: Positioned to the far right via CSS */}
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={30} color="#00d2ff" /> : <Menu size={30} color="#fff" />}
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="/Kishor_Resume.pdf" className="resume-btn highlight-gold" download>
            RESUME <Download size={14} />
          </a>
        </nav>
      </div>
      {/* Clickable overlay to close the menu if clicking outside */}
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;