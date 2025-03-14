
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

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

  const projects: Project[] = [
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

  const filters = ['all', 'Angular', 'Django', 'Data Visualization', 'Healthcare'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.animate-on-scroll');
            children.forEach((child, index) => {
              (child as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
              child.classList.add('animate-fade-in');
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
    <section id="projects" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll opacity-0">Featured Projects</h2>
          <p className="section-subtitle animate-on-scroll opacity-0 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in Python/Django and Angular development.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center mb-12 animate-on-scroll opacity-0">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="project-card animate-on-scroll opacity-0"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
                <div className="flex items-center space-x-4 mt-4">
                  <a 
                    href={project.demoLink}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                  <a 
                    href={project.githubLink}
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code <Github className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
