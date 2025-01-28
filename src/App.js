import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import Contact from './components/Contacts';
import Education from './components/Education';
import './App.css';
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Education />
        <ProjectsSection />
        <Certifications />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;