
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((element, index) => {
              (element as HTMLElement).style.animationDelay = `${0.2 * index}s`;
              element.classList.add('animate-fade-in');
              // Important: Remove the observer once animation is applied
              observer.unobserve(entry.target);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Small intro tag */}
          <div className="inline-block animate-on-scroll opacity-0">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 rounded-full">
              Senior Software Engineer
            </span>
          </div>

          {/* Main heading */}
          <h1 
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight animate-on-scroll opacity-0"
          >
            Turning complex problems into elegant solutions
          </h1>

          {/* Subtitle */}
          <p 
            className="mt-6 text-xl md:text-2xl text-muted-foreground animate-on-scroll opacity-0"
          >
            With 6 years of development experience in Python/Django and Angular, I build robust, scalable applications that deliver exceptional user experiences.
          </p>

          {/* CTA buttons */}
          <div 
            className="mt-8 flex flex-wrap gap-4 animate-on-scroll opacity-0"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md transition-all hover:scale-105"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md transition-all hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div 
            className="mt-12 flex items-center space-x-6 animate-on-scroll opacity-0"
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-on-scroll opacity-0">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-muted-foreground to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
