import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socials = [
    { icon: <Mail className="w-4 h-4" />, href: 'mailto:sumiranchauhan96@gmail.com', label: 'Email' },
    { icon: <LinkedinIcon className="w-4 h-4" />, href: 'https://www.linkedin.com/in/mayank-rajput-b77689277/', label: 'LinkedIn' },
    { icon: <GithubIcon className="w-4 h-4" />, href: 'https://github.com/sumay1913', label: 'GitHub' }
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-[#030303]/60 backdrop-blur-md py-12 relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full bg-violet-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Branding */}
        <div className="text-center sm:text-left">
          <div className="text-white font-bold tracking-wider uppercase text-sm mb-1.5 font-display">
            Sumiran Chauhan
          </div>
          <p className="text-zinc-500 text-xs font-mono">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Middle: Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/10 text-zinc-400 hover:text-white transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 text-zinc-400 hover:text-white transition-all duration-300 flex items-center justify-center group"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
