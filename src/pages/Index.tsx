import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AIAnimatedBackground from '../components/AIAnimatedBackground';

const Index = () => {
  useEffect(() => {
    document.title = 'Saeed Arshad · Senior Software Engineer';
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      <AIAnimatedBackground />

      <header className="relative z-20">
        <Navbar />
      </header>

      <main className="relative z-10 flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
