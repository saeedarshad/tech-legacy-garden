import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const coreStack = ['Python / Django', 'Angular', 'AWS', 'LLMs / AI'];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center pt-16 overflow-hidden"
    >
      <div className="section-container w-full">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Availability status */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-muted-foreground">
              Open to Senior / Lead roles · Remote
            </span>
          </div>

          <p className="eyebrow mb-4">
            Senior / Lead Software Engineer · AI + Full-Stack
          </p>

          <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight leading-[1.05]">
            Saeed Arshad
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I build AI products in healthtech and edtech. Recent work spans LLM
            chatbots, telehealth platforms, and medical education tools.
          </p>

          {/* Core stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-secondary/40 px-3 py-1 text-sm font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span>7.5+ years experience</span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="inline-flex items-center gap-1.5">
              <Globe className="h-4 w-4" />
              Remote · Available across all time zones
            </span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/saeedarshad"
              className="text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/saeedarshadd/"
              className="text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:m.saeedarshad95@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
