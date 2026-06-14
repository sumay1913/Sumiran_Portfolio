import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Timeline = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const educationData = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'GL Bajaj Group Of Institutions, Mathura',
      period: '2023 – 2027',
      grade: 'SGPA: 8.05',
      desc: 'Deep diving into core Computer Science topics including Data Structures, Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, and Web Engineering.',
      highlight: 'Specializing in Full-Stack Web Technologies',
      triggerPercent: 15
    },
    {
      degree: 'Intermediate (PCM)',
      institution: 'Dr. Sudama Prasad Girls Inter College, Shahjahanpur (U.P. Board)',
      period: '2022 – 2023',
      grade: 'Grade: A / 85%',
      desc: 'Completed secondary education with focus on Physics, Chemistry, and Mathematics.',
      highlight: 'Core focus on Analytical & Logical foundations',
      triggerPercent: 55
    },
    {
      degree: 'High School (Science)',
      institution: 'Dr. Sudama Prasad Girls Inter College, Shahjahanpur (U.P. Board)',
      period: '2020 – 2021',
      grade: 'Grade: A / 88%',
      desc: 'Completed primary secondary education with a science and mathematics focus.',
      highlight: 'Academic excellence certificate',
      triggerPercent: 90
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start counting progress when the top of container is halfway up the screen
      const start = viewportHeight * 0.8;
      const end = viewportHeight * 0.2;
      
      const totalDist = rect.height;
      const progressDist = start - rect.top;
      
      let percentage = (progressDist / totalDist) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
      
      setScrollProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="education" ref={containerRef} className="py-24 max-w-7xl mx-auto px-6 relative">
      {/* Background soft glow */}
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-cyan-600/5 blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4 tracking-wider uppercase"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GraduationCap className="w-4 h-4" /> Timeline
        </motion.div>
        
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Education <span className="text-gradient text-gradient-cyan-emerald">Journey</span>
        </motion.h2>
        
        <motion.p
          className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A timeline of my academic background and milestones.
        </motion.p>
      </div>

      {/* Timeline track wrapper */}
      <div className="relative max-w-4xl mx-auto mt-20">
        
        {/* SVG Scroll line tracking */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 z-0 overflow-visible">
          <svg className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="line-glow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            {/* Background inactive line */}
            <line x1="2" y1="0" x2="2" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="4" strokeLinecap="round" />
            {/* Active animated line */}
            <line 
              x1="2" 
              y1="0" 
              x2="2" 
              y2={`${scrollProgress}%`} 
              stroke="url(#line-glow)" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" 
            />
          </svg>
        </div>

        {/* Timeline items list */}
        <div className="space-y-12">
          {educationData.map((item, index) => {
            const isEven = index % 2 === 0;
            const isActivated = scrollProgress >= item.triggerPercent;

            return (
              <div 
                key={item.degree} 
                className={`relative flex flex-col md:flex-row items-stretch ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Connector Node Dot */}
                <div 
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 transform -translate-x-[7px] md:-translate-x-1/2 z-10 top-6 transition-all duration-500 ${
                    isActivated 
                      ? 'border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] scale-110' 
                      : 'border-white/10'
                  }`}
                >
                  {isActivated && <span className="absolute inset-1.5 rounded-full bg-cyan-400 animate-ping" />}
                </div>

                {/* Card Container */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <motion.div
                    className={`glass-card p-6 md:p-8 rounded-2xl border text-left relative overflow-hidden group cursor-pointer interactive-card transition-colors duration-500 ${
                      isActivated ? 'border-cyan-500/20 shadow-cyan-950/10' : 'border-white/5'
                    }`}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    {/* Glowing highlight tag */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Metadata header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {item.period}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold font-mono transition-colors duration-500 ${
                        isActivated ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-white/5 border-white/10 text-zinc-400'
                      }`}>
                        {item.grade}
                      </span>
                    </div>

                    {/* Degree and Institution */}
                    <h3 className={`text-lg md:text-xl font-bold mb-1.5 font-display tracking-tight transition-colors duration-300 ${
                      isActivated ? 'text-white' : 'text-zinc-300'
                    }`}>
                      {item.degree}
                    </h3>
                    <h4 className="text-sm font-medium text-zinc-300 mb-4 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-violet-400" /> {item.institution}
                    </h4>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Highlight bullets */}
                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-300 bg-white/[0.02] border border-white/5 rounded-lg p-2.5 w-fit">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{item.highlight}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Empty Spacer Column (Desktop only) */}
                <div className="hidden md:block w-1/2" />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
