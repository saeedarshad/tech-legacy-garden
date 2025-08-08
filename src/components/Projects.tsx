
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);

  const projects: Project[] = [
    {
      title: "MediKnow - Medical Learning Platform",
      description: "A comprehensive medical learning platform for students, doctors, nurses, and paramedics. AI tutor, AI quiz generation from articles, quiz duel, courses (PDF & in‑platform), org-level plans, gamification (XP, streaks, leaderboards), and secure Stripe billing.",
      image: "/lovable-uploads/3482dbe9-4c9d-4e66-b73c-36cf1d9a3689.png",
      tags: ["Django", "AI", "Stripe", "AWS S3", "Elasticsearch", "Gamification", "Education"],
      demoLink: "https://mediknow.io/",
      githubLink: "#"
    },
    {
      title: "TSIM – Telehealth Service Implementation Model",
      description: "Centralized and standardized framework to scale telehealth programs. Provides a framework to set up services, roadmap to scope/design/operationalize, operational CRM for multi‑site engagement, and knowledge sharing based on proven best practices.",
      image: "/lovable-uploads/b3493824-b7fd-41f4-9e1f-e638e435c88f.png",
      tags: ["AI", "Django", "Angular", "Python", "AWS", "Celery", "Healthcare", "CRM"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "AI Powered Chatbot Widget",
      description: "Embeddable AI chatbot that integrates into any website via iframe. Fully customizable (size, position, colors, fonts), supports user-selected AI models and BYO API keys, and can answer against a company knowledge base with strong reasoning.",
      image: "/lovable-uploads/296faafa-fc78-4328-8806-511132ef72fb.png",
      tags: ["AI", "Chatbot", "Embeddable", "Iframe", "Customization", "Multi-model", "Knowledge Base", "RAG", "Reasoning", "API Keys"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with an Angular frontend and Django backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["Angular", "Django", "PostgreSQL", "Payment Integration"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management system built with Angular and Django REST framework. Includes role-based access control, real-time updates, and detailed analytics.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      tags: ["Django", "Angular", "WebSockets", "Charts"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Healthcare Portal",
      description: "A secure portal for healthcare providers built with Angular and Django. Features include appointment scheduling, patient records, and secure messaging.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["Healthcare", "Angular", "Django", "Security"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "An interactive dashboard for visualizing business metrics in real-time using Django, Angular, and WebSockets.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      tags: ["Data Visualization", "Django", "Angular", "WebSockets"],
      demoLink: "#",
      githubLink: "#"
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();
  const filters = ['all', ...allTags];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
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

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const filterVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-secondary/30 overflow-hidden">
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in Python/Django and Angular development.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
              }`}
              variants={filterVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={`${activeFilter}-${index}`}
                className="project-card relative group"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Project Image with hover effect */}
                <div className="relative overflow-hidden" style={{ height: '240px' }}>
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-secondary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Links */}
                  <motion.div 
                    className="flex items-center space-x-4 mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (0.1 * index) }}
                  >
                    <a 
                      href={project.demoLink}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo 
                      <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a 
                      href={project.githubLink}
                      className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code <Github className="ml-1 h-4 w-4 transition-transform group-hover:rotate-6" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
