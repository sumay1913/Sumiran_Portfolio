import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Component Imports
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Global Aesthetics */}
      <CustomCursor />
      <BackgroundEffect />

      {/* Premium Loading Transitions */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col min-h-screen"
          >
            {/* Header & Navigation */}
            <Navbar />

            {/* Main Content Layout */}
            <main className="flex-grow">
              <Hero />
              
              {/* Dividers are clean glassmorphic bars to separate content elegantly */}
              <div className="w-full max-w-7xl mx-auto px-6">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
              
              <About />
              
              <div className="w-full max-w-7xl mx-auto px-6">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
              
              <Skills />
              
              <div className="w-full max-w-7xl mx-auto px-6">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
              
              <Projects />
              
              <div className="w-full max-w-7xl mx-auto px-6">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
              
              <Achievements />
              
              <div className="w-full max-w-7xl mx-auto px-6">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
              
              <Timeline />
              
              <div className="w-full max-w-7xl mx-auto px-6">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
              
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
