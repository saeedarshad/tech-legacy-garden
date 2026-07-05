import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { title: 'Home', href: '#home', id: 'home' },
  { title: 'Experience', href: '#experience', id: 'experience' },
  { title: 'Skills', href: '#skills', id: 'skills' },
  { title: 'Projects', href: '#projects', id: 'projects' },
  { title: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { title: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy: highlight the nav item for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/70 backdrop-blur-xl backdrop-saturate-150 border-b border-white/[0.08] py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto max-w-5xl px-4 flex items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold">
          <span className="sr-only">Saeed Arshad</span>
          <span className="text-muted-foreground">&lt;/&gt;</span>{' '}
          <span>Saeed Arshad</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  activeSection === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.title}
              </a>
            ))}
          </nav>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-border px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Download className="mr-1.5 h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ease-in-out',
          mobileMenuOpen
            ? 'max-h-[420px] opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={cn(
                'py-2 text-base font-medium',
                activeSection === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center rounded-md border border-border px-3.5 py-2 text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
