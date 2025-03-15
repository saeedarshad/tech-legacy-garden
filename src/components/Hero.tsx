
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Advanced animation sequence
    const animateElements = () => {
      const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
      elements?.forEach((element, index) => {
        // Create staggered animation effect
        (element as HTMLElement).style.animationDelay = `${0.2 * index}s`;
        (element as HTMLElement).style.opacity = '0';
        
        // Use IntersectionObserver for more reliable animations
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        
        observer.observe(element);
      });
      
      // Add parallax effect to decorative elements
      const decorations = sectionRef.current?.querySelectorAll('.bg-decoration');
      decorations?.forEach(element => {
        window.addEventListener('mousemove', (e) => {
          const x = e.clientX / window.innerWidth;
          const y = e.clientY / window.innerHeight;
          (element as HTMLElement).style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        });
      });
    };

    // Run animation after component mount
    setTimeout(animateElements, 100);

    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Enhanced background decorations with parallax effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background"></div>
        <div className="bg-decoration absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="bg-decoration absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="bg-decoration absolute top-1/3 left-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="bg-decoration absolute bottom-1/4 right-1/3 w-56 h-56 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Improved intro tag with shimmer effect */}
          <div className="inline-block animate-on-scroll relative overflow-hidden group">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 rounded-full inline-block relative z-10">
              Saeed Arshad - Senior Software Engineer
            </span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out z-0"></span>
          </div>

          {/* Enhanced heading with text reveal animation */}
          <h1 
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight animate-on-scroll"
          >
            <span className="inline-block overflow-hidden relative">
              <span className="inline-block transform transition-transform duration-700">Building</span>
            </span>{" "}
            <span className="inline-block overflow-hidden relative">
              <span className="inline-block transform transition-transform duration-700">scalable</span>
            </span>{" "}
            <span className="inline-block overflow-hidden relative">
              <span className="inline-block transform transition-transform duration-700">AI-powered</span>
            </span>{" "}
            <span className="inline-block overflow-hidden relative">
              <span className="inline-block transform transition-transform duration-700">solutions</span>
            </span>
          </h1>

          {/* Subtle fade-in subtitle */}
          <p 
            className="mt-6 text-xl md:text-2xl text-muted-foreground animate-on-scroll"
          >
            With 6 years of experience in Python/Django, Angular, AWS, and AI technologies, I create robust applications that transform complex challenges into elegant, intelligent solutions.
          </p>

          {/* Animated CTA buttons */}
          <div 
            className="mt-8 flex flex-wrap gap-4 animate-on-scroll"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md transition-all hover:scale-105 hover:shadow-lg group"
            >
              View Projects 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md transition-all hover:scale-105 hover:shadow-md relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out"></span>
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>

          {/* Social links with hover animations */}
          <div 
            className="mt-12 flex items-center space-x-6 animate-on-scroll"
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 transition-transform duration-200">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 transition-transform duration-200">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 transition-transform duration-200">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-on-scroll">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse-slow"></div>
      </div>
    </section>
  );
};

export default Hero;
