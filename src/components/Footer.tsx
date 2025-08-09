
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Logo */}
          <a href="#home" className="font-display text-xl font-bold mb-4 md:mb-0">
            <span className="text-primary">&lt;/&gt;</span> <span>Saeed Arshad</span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/saeedarshad" className="p-2 text-muted-foreground hover:text-primary transition-colors" target='_blank'>
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/saeedarshadd/" className="p-2 text-muted-foreground hover:text-primary transition-colors" target='_blank'>
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:m.saeedarshad95@gmail.com" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col-reverse md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
