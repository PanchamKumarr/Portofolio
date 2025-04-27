import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications'; // <-- Add this
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications /> {/* <-- Add it here */}
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 bg-gray-900">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PanchamKumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
