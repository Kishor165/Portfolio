import React from 'react';
import Header from './components/Header/Header';
import BackgroundMesh from './components/Hero/BackgroundMesh';
import Hero from './components/Hero/Hero';
import About from './components/About/About'; 
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications'; // 1. IMPORT CERTIFICATIONS
import Education from './components/Education/Education'; // ADDED EDUCATION IMPORT
import Contact from './components/Contact/Contact'; // ADDED CONTACT IMPORT
import './App.css';

function App() {
  return (
    <div className="App">
      {/* The background stays fixed behind everything */}
      <BackgroundMesh />
      
      {/* Navigation stays at the top */}
      <Header />
      
      {/* Main Content Sections */}
      <main>
        <Hero />
        <About /> 
        
        {/* Technical & Soft Skills Section */}
        <Skills /> 
        
        {/* Projects Section */}
        <Projects /> 

        {/* Experience Section */}
        <Experience />

        {/* 2. ADD THE CERTIFICATIONS TAG HERE */}
        <Certifications />

        {/* ADDED EDUCATION SECTION */}
        <Education />
        
        {/* ADDED CONTACT SECTION */}
        <Contact />
      </main>
    </div>
  );
}

export default App;