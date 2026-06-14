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
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
        title="Chatear por WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="36" height="36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.652.873 5.105 2.349 7.1L4.5 28.5l6.55-1.81a11.93 11.93 0 0 0 4.951 1.06h.005c6.628 0 12-5.373 12-12.001C28.006 8.373 22.633 3 16.001 3zm0 21.7c-1.61 0-3.18-.43-4.55-1.24l-.327-.19-3.886 1.073 1.04-3.79-.213-.34A9.66 9.66 0 0 1 6.3 15.001c0-5.347 4.353-9.7 9.701-9.7 5.347 0 9.7 4.353 9.7 9.7 0 5.348-4.353 9.699-9.7 9.699zm5.317-7.267c-.291-.146-1.719-.848-1.985-.945-.266-.097-.46-.146-.654.146-.194.291-.751.945-.92 1.139-.17.194-.34.218-.629.073-.291-.146-1.227-.453-2.337-1.443-.864-.77-1.447-1.72-1.616-2.011-.17-.291-.018-.448.146-.594.146-.146.34-.34.51-.51.17-.17.218-.291.34-.485.121-.194.06-.36-.034-.51-.097-.146-.85-2.05-1.165-2.806-.31-.74-.622-.64-.85-.65-.218-.01-.46-.012-.704-.012-.243 0-.629.097-.92.388-.291.291-1.114 1.09-1.114 2.66 0 1.57 1.139 3.087 1.298 3.305.16.218 2.184 3.34 5.34 4.55 2.652 1.012 3.197.81 3.778.76.58-.05 1.886-.77 2.15-1.516.266-.745.266-1.382.186-1.516-.073-.146-.266-.218-.557-.364z"/>
        </svg>
      </a>

      {/* Scroll to Top Button */}
      {scrollY > 300 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40 animate-bounce"
          title="Subir"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
