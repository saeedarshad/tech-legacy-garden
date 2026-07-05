import React from 'react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'm.saeedarshad95@gmail.com',
    href: 'mailto:m.saeedarshad95@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'in/saeedarshadd',
    href: 'https://www.linkedin.com/in/saeedarshadd/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/saeedarshad',
    href: 'https://github.com/saeedarshad',
    icon: Github,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <div className="mb-12">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="section-title">Let's talk</h2>
          <p className="section-subtitle max-w-2xl">
            Open to senior and lead engineering roles. The fastest way to reach
            me is email, and I usually reply within a day.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass-card group flex items-center gap-4 p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center text-sm font-medium">
                  {label}
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="block truncate text-sm text-muted-foreground">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
