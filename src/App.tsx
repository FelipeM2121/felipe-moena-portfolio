import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/Experience';
import { Projects } from './components/Projects';
import { TechProjects } from './components/TechProjects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
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
        <TechProjects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/56972181349"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
        title="Chatear por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

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
