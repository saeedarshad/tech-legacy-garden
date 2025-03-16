
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import AIAnimatedBackground from './AIAnimatedBackground';

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
    };

    // Run animation after component mount
    setTimeout(animateElements, 100);

    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Use AIAnimatedBackground for hero section */}
      <AIAnimatedBackground variant="secondary" />
      
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
          <motion.h1 
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 dark:from-white dark:to-gray-400"
              animate={{ 
                backgroundPosition: ['0% center', '100% center', '0% center'],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "linear" 
              }}
            >
              Building scalable AI-powered solutions
            </motion.span>
          </motion.h1>

          {/* Subtle fade-in subtitle */}
          <motion.p 
            className="mt-6 text-xl md:text-2xl text-muted-foreground animate-on-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            With 6 years of experience in Python/Django, Angular, AWS, and AI technologies, I create robust applications that transform complex challenges into elegant, intelligent solutions.
          </motion.p>

          {/* Animated CTA buttons */}
          <motion.div 
            className="mt-8 flex flex-wrap gap-4 animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
          </motion.div>

          {/* Social links with hover animations */}
          <motion.div 
            className="mt-12 flex items-center space-x-6 animate-on-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <motion.div 
          className="w-0.5 h-12 bg-gradient-to-b from-muted-foreground to-transparent"
          animate={{ 
            scaleY: [0.5, 1, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
