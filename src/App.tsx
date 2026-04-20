import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      {scrollY > 300 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40 animate-bounce"
          title="Subir"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
