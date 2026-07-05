import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    title: 'Edge Node: Pipeline Integrity Monitoring',
    description:
      'A platform that visualises guided-wave ultrasonic sensor data for pipeline corrosion monitoring. Built solo from scratch: position-by-date heatmaps, pipe schematics with cross-chart sync, an offline-aware GIS location map, threshold-driven analytical charts, and a full RBAC-gated administration suite.',
    image: '/portfolio-uploads/edge-node.png',
    tags: ['Angular 21', 'Highcharts', 'PrimeNG', 'ArcGIS', 'RBAC'],
  },
  {
    title: 'MediKnow: Medical Learning Platform',
    description:
      'A learning platform for medical students, doctors, and paramedics. AI tutor, AI quiz generation from articles, quiz duels, courses, org-level plans, gamification, and secure Stripe billing.',
    image: '/portfolio-uploads/3482dbe9-4c9d-4e66-b73c-36cf1d9a3689.png',
    tags: ['Django', 'AI', 'Stripe', 'Elasticsearch', 'AWS S3'],
    demoLink: 'https://mediknow.io/',
  },
  {
    title: 'TSIM: Telehealth Service Implementation Model',
    description:
      'A centralized framework to scale telehealth programs: service setup, a roadmap to scope and operationalize, an operational CRM for multi-site engagement, and best-practice knowledge sharing.',
    image: '/portfolio-uploads/b3493824-b7fd-41f4-9e1f-e638e435c88f.png',
    tags: ['Angular', 'Django', 'AWS', 'Celery', 'Healthcare'],
  },
  {
    title: 'AI-Powered Chatbot Widget',
    description:
      'An embeddable AI chatbot that drops into any website via iframe. Fully customizable, supports user-selected models and bring-your-own API keys, and answers against a company knowledge base with strong reasoning.',
    image: '/portfolio-uploads/296faafa-fc78-4328-8806-511132ef72fb.png',
    tags: ['AI', 'RAG', 'Embeddable', 'Multi-model', 'Knowledge Base'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative border-y border-border/70 bg-card/40">
      <div className="section-container">
        <div className="mb-12">
          <p className="eyebrow mb-3">Projects</p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle max-w-2xl">
            A few projects that show how I build AI-powered products end to end.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const hasDemo = project.demoLink && project.demoLink !== '#';
            const hasGithub = project.githubLink && project.githubLink !== '#';

            return (
              <div key={project.title} className="project-card group">
                <div className="relative h-56 overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border px-2 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(hasDemo || hasGithub) && (
                    <div className="mt-5 flex items-center gap-5">
                      {hasDemo && (
                        <a
                          href={project.demoLink}
                          className="inline-flex items-center text-sm font-medium hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Site
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      )}
                      {hasGithub && (
                        <a
                          href={project.githubLink}
                          className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source
                          <Github className="ml-1 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
