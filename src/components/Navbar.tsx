
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display text-xl font-bold">
          <span className="sr-only">Developer Portfolio</span>
          <span className="text-primary">&lt;/&gt;</span> <span>Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.title} 
              href={item.href}
              className="nav-link"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out",
          mobileMenuOpen 
            ? "max-h-[400px] opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.title} 
              href={item.href}
              className="text-lg font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
