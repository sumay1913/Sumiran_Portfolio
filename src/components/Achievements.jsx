import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Users, ArrowUpRight } from 'lucide-react';

const Counter = ({ value, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const isFloat = value.includes('.');
  const target = parseFloat(value) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const range = target - start;
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const current = start + range * easeProgress;
            
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {isFloat ? count.toFixed(2) : Math.floor(count)}
    </span>
  );
};

const Achievements = () => {
  const stats = [
    { value: '140', isNumeric: true, suffix: '+', label: 'LeetCode DSA Solved', sub: 'Algorithms & Structures', color: 'text-violet-400' },
    { value: '8.05', isNumeric: true, suffix: '', label: 'B.Tech SGPA', sub: 'GL Bajaj Institutions', color: 'text-cyan-400' },
    { value: 'Volunteer', isNumeric: false, suffix: '', label: 'College Hackathon', sub: 'Coordination & Setup', color: 'text-emerald-400' },
  ];

  const highlights = [
    {
      title: 'LeetCode Problem Solving',
      subtitle: 'Data Structures & Algorithms',
      desc: 'Active on LeetCode, solving over 140 problems covering arrays, trees, dynamic programming, strings, and search algorithms. Developing strong analytical and code optimizing habits.',
      icon: <Code className="w-5 h-5 text-violet-400" />,
      linkText: 'Solve on LeetCode',
      link: 'https://leetcode.com/'
    },
    {
      title: 'College Hackathon Volunteer',
      subtitle: 'Jayshree Company Hackathon',
      desc: 'Volunteered in organizing and managing a college-level hackathon. Managed participant registration, assisted with technical setups, and facilitated active communication between student teams and mentors.',
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      linkText: 'Volunteer Activity Detail',
      link: '#education'
    }
  ];

  return (
    <section id="achievements" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-violet-600/5 blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-4 tracking-wider uppercase"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Award className="w-4 h-4" /> Achievements
        </motion.div>
        
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Milestones & <span className="text-gradient text-gradient-purple-cyan">Highlights</span>
        </motion.h2>
        
        <motion.p
          className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Key highlights showcasing my dedication to problem-solving, collaboration, and academic excellence.
        </motion.p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 text-center relative overflow-hidden group hover:border-violet-500/20 cursor-pointer interactive-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Top border light */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-transparent" />
            
            <div className={`text-3xl md:text-4xl font-extrabold mb-1.5 font-display flex justify-center items-center ${stat.color}`}>
              {stat.isNumeric ? (
                <Counter value={stat.value} />
              ) : (
                <span>{stat.value}</span>
              )}
              {stat.suffix}
            </div>
            
            <div className="text-sm font-semibold text-white mb-0.5 tracking-tight font-display">
              {stat.label}
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              {stat.sub}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {highlights.map((item, idx) => (
          <motion.div
            key={item.title}
            className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 text-left flex flex-col justify-between group hover:border-violet-500/20 cursor-pointer interactive-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            {/* Top border light */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-transparent" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white font-display tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                    {item.subtitle}
                  </span>
                </div>
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>

            <a
              href={item.link}
              className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1 group/link mt-auto magnetic"
            >
              <span>{item.linkText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
