import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen text-white bg-[#0b0f14] selection:bg-cyan-300/30 selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
