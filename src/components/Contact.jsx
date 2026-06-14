import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');
    
    // Simulate API request dispatch
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-violet-400" />,
      label: 'Email Me',
      value: 'sumiranchauhan96@gmail.com',
      href: 'mailto:sumiranchauhan96@gmail.com',
    },
    {
      icon: <LinkedinIcon className="w-5 h-5 text-blue-400" />,
      label: 'LinkedIn',
      value: 'mayank-rajput-b77689277',
      href: 'https://www.linkedin.com/in/mayank-rajput-b77689277/',
    },
    {
      icon: <GithubIcon className="w-5 h-5 text-zinc-300" />,
      label: 'GitHub',
      value: 'sumay1913',
      href: 'https://github.com/sumay1913',
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-400" />,
      label: 'Location',
      value: 'Mathura, U.P., India',
      href: 'https://maps.google.com/?q=Mathura',
    }
  ];

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-4 tracking-wider uppercase"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="w-4 h-4" /> Contact
        </motion.div>
        
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Get In <span className="text-gradient text-gradient-purple-cyan">Touch</span>
        </motion.h2>
        
        <motion.p
          className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have an internship opportunity, a project proposal, or just want to connect? Reach out below!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Info Grid */}
        <div className="lg:col-span-5 flex flex-col gap-4 text-left h-full">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={info.label}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-xl border border-white/5 flex items-center gap-4 hover:border-violet-500/20 group magnetic"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-0.5">
                  {info.label}
                </span>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200 font-display">
                  {info.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form card */}
        <motion.div
          className="lg:col-span-7 glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top border decor */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400" />

          <form onSubmit={handleSubmit} className="space-y-5 text-left relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono text-zinc-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 focus:border-violet-500 focus:bg-white/[0.04] focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-zinc-600 focus:outline-none transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono text-zinc-400">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@domain.com"
                  required
                  className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 focus:border-violet-500 focus:bg-white/[0.04] focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-zinc-600 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-mono text-zinc-400">Subject (Optional)</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Topic of message"
                className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 focus:border-violet-500 focus:bg-white/[0.04] focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-zinc-600 focus:outline-none transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-mono text-zinc-400">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Write your message here..."
                required
                className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 focus:border-violet-500 focus:bg-white/[0.04] focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            {/* Form submit with dynamic loading state overlay */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:from-zinc-800 disabled:to-zinc-800 text-sm font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden magnetic"
            >
              <AnimatePresence mode="wait">
                {status === 'sending' ? (
                  <motion.span
                    key="sending"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>

          {/* Toast feedback alerts */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                className="absolute inset-0 bg-[#030303]/90 backdrop-blur-sm flex flex-col items-center justify-center z-20 px-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4 animate-bounce" />
                <h3 className="text-lg font-bold text-white mb-2 font-display">Message Sent Successfully!</h3>
                <p className="text-zinc-400 text-xs md:text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out, Sumiran will get back to you as soon as possible.
                </p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                className="absolute bottom-6 right-6 bg-red-950/90 border border-red-500/50 rounded-xl px-4 py-3 flex items-center gap-2 z-20 shadow-xl"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-xs font-semibold text-red-200">Please fill out all required fields!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
