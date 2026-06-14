import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Download, Mail, Terminal, Cpu, Layout, Database } from 'lucide-react';
import profileImg from "/src/assets/sumiran_profile.png.png";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const containerRef = useRef(null);
  const words = [
    'Front-End Web Developer',
    'B.Tech CSE Student',
    'Creative Video Editor',
    'C++ Programmer'
  ];

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(wordTimeout);
  }, []);

  useEffect(() => {
    // GSAP entrance staggers
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-reveal', 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          stagger: 0.12, 
          ease: 'power4.out',
          delay: 0.3
        }
      );

      // Tech badges floating loops
      gsap.to('.tech-badge-1', {
        y: -15,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
      gsap.to('.tech-badge-2', {
        y: 15,
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.3
      });
      gsap.to('.tech-badge-3', {
        y: -12,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 0.6
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden max-w-7xl mx-auto px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Accent Label */}
          <div className="hero-reveal opacity-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-zinc-300 font-mono">OPEN TO WORK</span>
          </div>

          {/* Subheading */}
          <p className="hero-reveal opacity-0 text-zinc-400 text-lg md:text-xl font-medium mb-2 font-display">
            Hello, I am
          </p>

          {/* Title */}
          <h1 className="hero-reveal opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 font-display leading-[1.1]">
            Sumiran <br className="sm:hidden" />
            <span className="text-gradient text-gradient-purple-cyan">Chauhan</span>
          </h1>

          {/* Dynamic Typist Switcher */}
          <div className="hero-reveal opacity-0 h-8 md:h-10 mb-8 overflow-hidden">
            <motion.div
              key={textIndex}
              className="text-lg md:text-2xl font-semibold text-zinc-300 font-mono flex items-center gap-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <span className="text-violet-400">&gt;</span>
              {words[textIndex]}
              <span className="w-1.5 h-5 md:h-6 bg-cyan-400 animate-pulse" />
            </motion.div>
          </div>

          {/* Introduction paragraph */}
          <p className="hero-reveal opacity-0 text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mb-10">
            B.Tech Computer Science student at GL Bajaj, Mathura. Passionate about engineering high-quality front-end web apps, refining algorithms, and exploring natural language workflows. Dedicated to creating responsive interfaces with visual precision.
          </p>

          {/* Call To Actions */}
          <div className="hero-reveal opacity-0 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="magnetic px-6 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 hover:shadow-violet-600/35 transition-all duration-300 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="/Sumiran Chauhan. Resume.pdf"
              download
              className="magnetic px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-semibold text-white transition-all duration-300 flex items-center gap-2 group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="magnetic px-6 py-3.5 rounded-full bg-transparent hover:bg-zinc-900 border border-transparent text-sm font-semibold text-zinc-300 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Avatar & Terminal Column */}
        <div className="lg:col-span-5 flex flex-col items-center gap-10 w-full relative">
          
          {/* Floating Badges */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* React Badge */}
            <div className="tech-badge-1 absolute top-[10%] left-[-5%] px-3 py-1.5 rounded-xl bg-cyan-900/30 backdrop-blur-md border border-cyan-500/20 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-cyan-950/20 pointer-events-auto cursor-pointer magnetic">
              <Layout className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> React.js
            </div>
            
            {/* C++ Badge */}
            <div className="tech-badge-2 absolute bottom-[25%] left-[-10%] px-3 py-1.5 rounded-xl bg-violet-900/30 backdrop-blur-md border border-violet-500/20 text-violet-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-violet-950/20 pointer-events-auto cursor-pointer magnetic">
              <Cpu className="w-3.5 h-3.5 text-violet-400 animate-pulse" /> C++
            </div>

            {/* SQL Badge */}
            <div className="tech-badge-3 absolute top-[45%] right-[-5%] px-3 py-1.5 rounded-xl bg-emerald-900/30 backdrop-blur-md border border-emerald-500/20 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-emerald-950/20 pointer-events-auto cursor-pointer magnetic">
              <Database className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> MySQL
            </div>
          </div>

          {/* Profile Card */}
          <motion.div
            className="hero-reveal opacity-0 w-72 h-72 md:w-80 md:h-80 rounded-[40px] relative group p-1.5"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Double spinning glowing border circles */}
           <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-violet-500 via-purple-600 to-cyan-400 animate-spin-slow opacity-80" />
            <div className="absolute inset-1 rounded-[39px] bg-gradient-to-r from-cyan-400 via-indigo-600 to-violet-500 animate-spin-slow direction-reverse opacity-60 blur-sm" />
            
            {/* Outer glass border shield */}
            <div className="absolute inset-1.5 rounded-[38px] bg-[#030303]"/>

            {/* Profile Image container */}
            <div className="absolute inset-3 rounded-[36px] overflow-hidden border border-white/10 group-hover:scale-[1.02] transition-transform duration-500 ease-out shadow-2xl">
              <img
             
  src={profileImg}
  alt="Sumiran Chauhan avatar"
  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
/>
            </div>
          </motion.div>

          {/* Code Terminal (JSON) */}
          <div className="hero-reveal opacity-0 w-full max-w-md glass-card rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden mt-2">
            {/* Header bar */}
            <div className="px-5 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500/50" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/50" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs font-mono text-zinc-500 tracking-wide flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> developer.json
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-left text-xs sm:text-sm leading-relaxed text-zinc-400">
              <span className="text-violet-400">const</span>{' '}
              <span className="text-cyan-400">developer</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-white">{'{'}</span>
              <div className="pl-4">
                <div>
                  <span className="text-zinc-500">name:</span>{' '}
                  <span className="text-emerald-400">"Sumiran Chauhan"</span>,
                </div>
                <div>
                  <span className="text-zinc-500">education:</span>{' '}
                  <span className="text-emerald-400">"B.Tech CSE @ GL Bajaj"</span>,
                </div>
                <div>
                  <span className="text-zinc-500">coreSkills:</span>{' '}
                  <span className="text-white">[</span>
                  <div className="pl-4">
                    <span className="text-orange-400">"React.js"</span>,{' '}
                    <span className="text-orange-400">"C++"</span>,{' '}
                    <span className="text-orange-400">"JavaScript"</span>,{' '}
                    <span className="text-orange-400">"MySQL"</span>
                  </div>
                  <span className="text-white">]</span>,
                </div>
                <div>
                  <span className="text-zinc-500">status:</span>{' '}
                  <span className="text-emerald-400">"Actively Coding"</span>
                </div>
              </div>
              <span className="text-white">{'};'}</span>
            </div>
            
            {/* Glow underlay spotlight */}
            <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-cyan-500/10 blur-xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-violet-500/10 blur-xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
