import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Film, BookOpen, GraduationCap } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code className="w-5 h-5 text-violet-400" />,
      title: 'Web Engineering',
      desc: 'Creating interactive user interfaces using React.js and modern styling systems. Committed to pixel-perfection and clean structures.',
    },
    {
      icon: <Film className="w-5 h-5 text-cyan-400" />,
      title: 'Video Editing & Creative',
      desc: 'Experienced in editing with Filmora, Canva, and Photoshop. Crafting visual assets and marketing materials with strong aesthetics.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      title: 'CS Core Concepts',
      desc: 'Solid foundation in Data Structures, Algorithms, Relational Databases (MySQL), and Operating Systems.',
    },
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-4 tracking-wider uppercase"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <User className="w-3.5 h-3.5" /> About Me
        </motion.div>
        
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Engineering Meets <span className="text-gradient text-gradient-purple-cyan">Creative Vision</span>
        </motion.h2>
        
        <motion.p
          className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Get to know my journey, academic credentials, and the design-oriented mindset I bring to software development.
        </motion.p>
      </div>

      {/* Narrative & Highlights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Narrator glassmorphic block */}
        <motion.div
          className="lg:col-span-7 glass-card p-8 md:p-10 rounded-2xl border border-white/5 flex flex-col justify-between"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 font-display">My Narrative</h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
              I am currently pursuing my B.Tech in Computer Science and Engineering at GL Bajaj Group Of Institutions, Mathura (2023–2027). My technical passion lies at the intersection of web design, backend database administration, and programmatic layouts.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              In addition to writing optimized C++ programs and queries, I have a deep aesthetic drive. I spent substantial time honing video editing skills (using Filmora, Photoshop, and Canva) and managing meta marketing workflows. I focus on combining these creative abilities with software engineering principles to build apps that are visually compelling, intuitive, and performant.
            </p>
          </div>

          {/* Quick Bio Info */}
          <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4 text-left">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">Languages</span>
              <span className="text-sm font-medium text-white">English, Hindi</span>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">Location</span>
              <span className="text-sm font-medium text-white">Mathura, India</span>
            </div>
          </div>
        </motion.div>

        {/* Dynamic features stack */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="glass-card p-6 rounded-2xl border border-white/5 text-left flex gap-5 items-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                {card.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5 font-display">{card.title}</h4>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
