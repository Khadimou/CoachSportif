import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Testimonials } from './components/Testimonials';
import { Nutrition } from './components/Nutrition';
import { ContactCTA } from './components/ContactCTA';
import { ProgramsPage } from './components/ProgramsPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <About />
          <Programs onNavigate={handleNavigate} />
          <Testimonials />
          <Nutrition />
          <ContactCTA />
        </>
      )}

      {currentPage === 'programs' && (
        <ProgramsPage onNavigate={handleNavigate} />
      )}

      {currentPage === 'contact' && (
        <ContactPage />
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
