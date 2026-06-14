import { motion as motionFramer } from 'framer-motion';
import { Cpu, Layout, Database, Settings, Terminal } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      icon: <Cpu className="w-5 h-5 text-violet-400" />,
      desc: 'Foundation of algorithms and software design architectures.',
      skills: [
        { name: 'C', level: 'Intermediate', color: 'from-blue-500 to-indigo-600', icon: (
          <svg className="w-6 h-6 text-[#A8B9CC]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c2.95 0 5.5 1.6 6.89 4h-2.92C15.11 6.8 13.66 6 12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.66 0 3.11-.8 3.97-2h2.92c-1.39 2.4-3.94 4-6.89 4z" />
          </svg>
        )},
        { name: 'C++', level: 'Strong', color: 'from-blue-600 to-cyan-500', icon: (
          <svg className="w-6 h-6 text-[#00599C]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 13h-2v2h-2v-2h-2v-2h2V9h2v2h2v2zm-6-1c0 2.21-1.79 4-4 4-1.66 0-3.11-.8-3.97-2h2.92c.31.57.92 1 1.05 1 .98 0 1.5-1.12 1.5-2s-.52-2-1.5-2c-.13 0-.74.43-1.05 1H6.03C6.89 7.8 8.34 7 10 7c2.21 0 4 1.79 4 4v1z M10 2C4.48 2 2 6.48 2 12s2.48 10 8 10 8-4.48 8-10S15.52 2 10 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        )}
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      desc: 'Structuring, styling, and engineering modular front-end platforms.',
      skills: [
        { name: 'HTML5', level: 'Expert', color: 'from-orange-500 to-red-500', icon: (
          <svg className="w-6 h-6 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.562 10.395-.002.227-2.562H5.978l.69 7.688h8.562l-.281 3.125-2.969.803-2.983-.805-.19-2.115H6.223l.366 4.127 5.39 1.455 5.378-1.455.706-7.91H8.531z" />
          </svg>
        )},
        { name: 'CSS3', level: 'Expert', color: 'from-blue-400 to-indigo-500', icon: (
          <svg className="w-6 h-6 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.562 10.395-.002.227-2.562H5.978l.69 7.688h8.562l-.281 3.125-2.969.803-2.983-.805-.19-2.115H6.223l.366 4.127 5.39 1.455 5.378-1.455.706-7.91H8.531z" />
          </svg>
        )},
        { name: 'JavaScript', level: 'Strong', color: 'from-yellow-400 to-amber-500', icon: (
          <svg className="w-6 h-6 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0zm20.024 18.016c-.475-.75-.95-1.125-1.9-1.125-.8 0-1.2.45-1.2 1.05 0 .7.45 1 1.5 1.45 1.55.65 2.5 1.25 2.5 2.95 0 1.95-1.5 3.05-3.6 3.05-2.2 0-3.3-1.05-3.95-2.35l1.6-1c.4 1 .8 1.45 1.8 1.45.95 0 1.45-.4 1.45-1.15 0-.8-.45-1.1-1.7-1.6-1.5-.6-2.5-1.25-2.5-2.85 0-1.85 1.45-2.95 3.3-2.95 1.75 0 2.8.85 3.4 2.1l-1.6 1.025zM12.4 12.016v11.984H9.55v-7.1h-2.8v7.1H3.9v-11.984h8.5z" />
          </svg>
        )},
        { name: 'React.js', level: 'Strong', color: 'from-cyan-400 to-blue-500', icon: (
          <svg className="w-6 h-6 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 11.38c0-.36-.26-.74-.72-1.1-1.02-.8-2.6-1.48-4.56-1.92 0-.02 0-.04-.02-.06.74-1.74 1.3-3.4 1.62-4.88.08-.36.08-.72-.02-1.04-.14-.42-.48-.72-.94-.86-.34-.1-.76-.08-1.2.06-1.44.48-3.08 1.46-4.72 2.76H13.4c-1.64-1.3-3.28-2.28-4.72-2.76-.44-.14-.86-.16-1.2-.06-.46.14-.8.44-.94.86-.1.32-.1.68-.02 1.04.32 1.48.88 3.14 1.62 4.88 0 .02 0 .04-.02.06-1.96.44-3.54 1.12-4.56 1.92-.46.36-.72.74-.72 1.1 0 .36.26.74.72 1.1 1.02.8 2.6 1.48 4.56 1.92 0 .02 0 .04.02.06-.74 1.74-1.3 3.4-1.62 4.88-.08.36-.08.72.02 1.04.14.42.48.72.94.86.34.1.76.08 1.2-.06 1.44-.48 3.08-1.46 4.72-2.76h.04c1.64 1.3 3.28 2.28 4.72 2.76.44.14.86.16 1.2.06.46-.14.8-.44.94-.86.1-.32.1-.68.02-1.04-.32-1.48-.88-3.14-1.62-4.88 0-.02 0-.04.02-.06 1.96-.44 3.54-1.12 4.56-1.92.46-.36.72-.74.72-1.1zm-12 1.62c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
        )}
      ]
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      desc: 'Relational logic structures and deployment command chains.',
      skills: [
        { name: 'MySQL', level: 'Intermediate', color: 'from-blue-500 to-orange-400', icon: (
          <svg className="w-6 h-6 text-[#4479A1]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.115 1.545a4.2 4.2 0 00-1.85-.295c-1.32.11-2.58.625-3.62 1.48-1.04.855-1.785 1.99-2.14 3.29-.355 1.3-.235 2.67.34 3.89s1.535 2.185 2.72 2.785a8.775 8.775 0 00-3.34 2.87c-.895 1.21-1.355 2.655-1.31 4.14a7.99 7.99 0 001.99 5.09c1.235 1.31 2.915 2.115 4.745 2.26a10.05 10.05 0 005.155-.71 9.4 9.4 0 003.89-3.34 9.77 9.77 0 001.31-5.15 8.63 8.63 0 00-.71-3.62c-.445-1.04-1.155-1.945-2.065-2.625-.91-.68-1.98-1.125-3.115-1.295.42-.515.955-.91 1.575-1.16a4.2 4.2 0 013.885.34c.59.39 1.045.96 1.29 1.625a4.205 4.205 0 01-.135 3.34c.23-.215.485-.41.76-.58a5.2 5.2 0 001.85-5.09 5.26 5.26 0 00-3.885-3.885 5.2 5.2 0 00-5.09 1.85 4.15 4.15 0 01-.98-1.85 4.205 4.205 0 011.85-3.885zm-.67 6.465a1.28 1.28 0 11.002-2.56 1.28 1.28 0 01-.002 2.56z" />
          </svg>
        )},
        { name: 'GitHub', level: 'Strong', color: 'from-zinc-700 to-black', icon: (
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        )},
        { name: 'VS Code', level: 'Strong', color: 'from-blue-500 to-indigo-600', icon: (
          <svg className="w-6 h-6 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.985 6.822l-2.613-2.474a.782.782 0 00-1.035-.064l-9.197 7.07L4.542 6.136l-3.328 1.13c-.347.118-.58.44-.58.807v7.886c0 .367.233.689.58.807l3.328 1.13 6.598-5.218 9.197 7.07a.782.782 0 001.035-.064l2.613-2.474a.8.8 0 00.178-.813V7.635a.8.8 0 00-.178-.813zm-3.528 5.178l-7.39 5.61-4.004-3.136 4.004-3.137 7.39 5.663z" />
          </svg>
        )}
      ]
    },
    {
      title: 'Core CS Concepts',
      icon: <Settings className="w-5 h-5 text-emerald-400" />,
      desc: 'Computational theory and backend database normalization concepts.',
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Foundational', color: 'from-purple-500 to-indigo-600', icon: <Terminal className="w-6 h-6 text-purple-400" /> },
        { name: 'Operating Systems', level: 'Academic', color: 'from-blue-500 to-cyan-400', icon: <Cpu className="w-6 h-6 text-blue-400" /> },
        { name: 'Relational Databases', level: 'Academic', color: 'from-teal-500 to-emerald-400', icon: <Database className="w-6 h-6 text-teal-400" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-violet-600/5 blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-20">
        <motionFramer.div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-4 tracking-wider uppercase"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Settings className="w-4 h-4 animate-spin-slow" /> Skills
        </motionFramer.div>
        
        <motionFramer.h2
          className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My Technical <span className="text-gradient text-gradient-purple-cyan">Arsenal</span>
        </motionFramer.h2>
        
        <motionFramer.p
          className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A timeline of technologies, frameworks, and fundamental concepts mapped across my developers track.
        </motionFramer.p>
      </div>

      {/* Timeline Showcase Track */}
      <div className="relative max-w-4xl mx-auto mt-16 pl-8 md:pl-0">
        {/* Vertical track connecting line */}
        <div className="absolute left-4 md:left-[50px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/80 via-cyan-500/60 to-transparent" />

        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <motionFramer.div
              key={cat.title}
              className="relative flex flex-col md:flex-row items-stretch"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              {/* Connector Node */}
              <div className="absolute left-4 md:left-[50px] w-6 h-6 rounded-full bg-zinc-900 border-2 border-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.4)] transform -translate-x-[11px] z-10 top-6 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
              </div>

              {/* Milestone Box Grid */}
              <div className="w-full pl-12 md:pl-24">
                <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-violet-500/20 text-left">
                  {/* Glowing mask background */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-violet-600/5 blur-xl pointer-events-none group-hover:bg-violet-600/10 transition-colors duration-300" />
                  
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                        {cat.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white font-display">{cat.title}</h3>
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">{cat.desc}</span>
                  </div>

                  {/* Skills Subgrid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cat.skills.map((skill, skillIdx) => (
                      <motionFramer.div
                        key={skill.name}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300 group/item relative overflow-hidden cursor-pointer magnetic"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIdx * 0.05 }}
                      >
                        {/* Skill Icon */}
                        <div className="p-2 rounded-lg bg-zinc-900 border border-white/5 group-hover/item:scale-110 transition-transform duration-300 shrink-0">
                          {skill.icon}
                        </div>

                        {/* Details */}
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-200 group-hover/item:text-white transition-colors duration-200">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                            {skill.level}
                          </span>
                        </div>

                        {/* Hover Accent Strip */}
                        <div className={`absolute bottom-0 left-0 h-[2.5px] w-0 bg-gradient-to-r ${skill.color} group-hover/item:w-full transition-all duration-300`} />
                      </motionFramer.div>
                    ))}
                  </div>
                </div>
              </div>
            </motionFramer.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
