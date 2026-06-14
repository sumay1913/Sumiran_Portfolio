import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling toggle
      setIsScrolled(window.scrollY > 20);

      // Scroll progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    // Active section tracking using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger when section occupies the middle of screen
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Watch sections
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-3.5 bg-[#030303]/65 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/45' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <a 
            href="#home" 
            className="group flex items-center gap-1.5 text-lg font-bold tracking-tight text-white font-display"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 group-hover:scale-125 transition-transform duration-300" />
            Sumiran Chauhan
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-mono font-semibold transition-colors duration-300 relative py-1 group ${
                    isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {link.name}
                  {/* Underline Indicator for Active Section */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              );
            })}
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="magnetic px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/10 text-xs font-semibold text-white transition-all duration-300 flex items-center gap-1.5 group"
            >
              Contact Me
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </nav>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="magnetic md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#030303]/98 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden"
            initial={{ opacity: 0, y: '-20px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-20px' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glow blobs inside menu */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-600/10 blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-600/10 blur-[100px]" />

            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-bold tracking-tight py-2 block font-display transition-colors ${
                      isActive ? 'text-white' : 'text-zinc-500 hover:text-white'
                    }`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
