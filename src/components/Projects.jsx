import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Bot, Layers } from 'lucide-react';
import chatbotPreview from '../assets/chatbot_preview.png';
import taskManagerPreview from '../assets/task_manager_preview.png';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
  });
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [showSpotlight, setShowSpotlight] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    
    // Relative coordinates for tilt
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Max 12 degrees 3D tilt
    const rotateX = -(y / (box.height / 2)) * 15;
    const rotateY = (x / (box.width / 2)) * 15;
    
    setTiltStyle({
     transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.05s ease-out',
    });

    // Spotlight coordinates
    const sx = e.clientX - box.left;
    const sy = e.clientY - box.top;
    setSpotlightPos({ x: sx, y: sy });
    if (!showSpotlight) setShowSpotlight(true);
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setShowSpotlight(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="glass-card rounded-2xl border border-white/5 relative overflow-hidden group flex flex-col justify-between h-full cursor-pointer interactive-card hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500"
    >
      {/* Spotlight Dynamic Radial Mask */}
      {showSpotlight && (
        <div 
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 220px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(139, 92, 246, 0.08) 0%, transparent 100%)`
          }}
        />
      )}

      {/* Dynamic glow mask border overlay */}
      {showSpotlight && (
        <div 
          className="absolute inset-0 pointer-events-none z-10 border border-transparent transition-all duration-300"
          style={{
            backgroundImage: `radial-gradient(circle 150px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(34, 211, 238, 0.3) 0%, transparent 80%)`,
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
        />
      )}

      <div>
        {/* Project Thumbnail Image Container */}
        <div className="w-full h-48 md:h-56 relative overflow-hidden bg-black/40 border-b border-white/5">
          <img 
            src={project.preview} 
            alt={project.title}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
          
          {/* Overlay Tech Icon */}
          <div className="absolute bottom-4 left-6 p-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform duration-300 z-20">
            {project.icon}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 md:p-8 text-left relative z-20">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-display tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Feature List */}
          <ul className="space-y-2 mb-6">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-[11px] md:text-xs font-mono text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-semibold text-zinc-300 tracking-wide font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 border-t border-white/5 bg-white/[0.01] flex items-center justify-between mt-auto relative z-20">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors duration-300 magnetic"
        >
          <GithubIcon className="w-4 h-4" /> Codebase
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-xs font-semibold text-white transition-all duration-300 flex items-center gap-1.5 group/btn magnetic"
        >
          Live Demo
          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: 'AI Chatbot',
      description: 'An intelligent conversational agent built with rich natural language capabilities. Features stateful conversational workflows, seamless REST API integration for retrieval systems, and a fully real-time responsive chat layout.',
      tags: ['HTML', 'CSS', 'JavaScript', 'NLU', 'REST API', 'Webhooks'],
      features: ['Natural Language Understanding', 'Conversational Workflows', 'Real-time response rendering'],
      github: 'https://github.com/sumay1913/ai-chatbot',
      live: 'https://github.com/sumay1913/ai-chatbot',
      icon: <Bot className="w-5 h-5" />,
      preview: chatbotPreview
    },
    {
      title: 'Smart Task Manager',
      description: 'A lightweight productivity dashboard focusing on clean application architecture. Implements dynamic CRUD operations, local client storage persistence, custom state management filters, and an adaptive responsive canvas layout.',
      tags: ['React.js', 'Tailwind CSS', 'LocalStorage', 'State Management'],
      features: ['Component-based state management', 'Robust CRUD mechanics', 'Intuitive UI filters'],
      github: 'https://github.com/sumay1913/task-manager',
      live: 'https://github.com/sumay1913/task-manager',
      icon: <Layers className="w-5 h-5" />,
      preview: taskManagerPreview
    }
  ];

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="absolute top-1/3 left-10 w-80 h-80 rounded-full bg-violet-600/5 blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-4 tracking-wider uppercase"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Code2 className="w-4 h-4" /> Work
        </motion.div>
        
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Featured <span className="text-gradient text-gradient-purple-cyan">Projects</span>
        </motion.h2>
        
        <motion.p
          className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A selection of web development projects, illustrating state architectures, algorithms, and interface layouts.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
