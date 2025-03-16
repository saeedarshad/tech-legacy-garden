
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AIAnimatedBackground from '../components/AIAnimatedBackground';

const Index = () => {
  const [loading, setLoading] = useState(true);

  // Preloader animation
  useEffect(() => {
    document.title = 'Senior Software Engineer Portfolio';
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AIAnimatedBackground variant="primary" />
            <motion.div
              className="flex flex-col items-center relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="w-16 h-16 mb-6 relative"
                animate={{ 
                  rotate: 360,
                  borderRadius: ["20%", "50%", "20%"],
                }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <motion.div
                  className="absolute inset-0 border-t-4 border-primary rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                />
                <motion.div
                  className="absolute inset-2 border-r-4 border-primary/60 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ 
                    duration: 2, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                />
              </motion.div>
              <motion.span 
                className="text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Loading Portfolio...
              </motion.span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            className="min-h-screen flex flex-col relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main background that spans the entire site */}
            <AIAnimatedBackground variant="primary" />
            
            <motion.header variants={itemVariants} className="relative z-20">
              <Navbar />
            </motion.header>
            <motion.main className="flex-grow" variants={itemVariants}>
              <Hero />
              <About />
              <section id="skills" className="relative py-20">
                <div className="relative z-10">
                  <Skills />
                </div>
              </section>
              <section id="projects" className="relative py-20">
                <div className="relative z-10">
                  <Projects />
                </div>
              </section>
              <section id="contact" className="relative py-20">
                <div className="relative z-10">
                  <Contact />
                </div>
              </section>
            </motion.main>
            <motion.footer variants={itemVariants} className="relative z-10">
              <Footer />
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
