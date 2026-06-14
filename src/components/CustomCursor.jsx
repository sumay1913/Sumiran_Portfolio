import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState('default'); // 'default', 'link', 'magnetic'
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  const mousePosRef = useRef({ x: -100, y: -100 });
  const magneticTargetRef = useRef(null);

  // Springs for outer ring
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 18, stiffness: 140, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check mobile
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsMobile(!mediaQuery.matches);
    const handleMediaQueryChange = (e) => setIsMobile(!e.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Canvas particle system setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 28 + 14; // size 4 to 12
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.opacity = 0.25;
        // Cyan and Violet glow colors
        this.color = Math.random() > 0.5 ? 'rgba(139, 92, 246, ' : 'rgba(34, 211, 238, ';
        this.decay = Math.random() * 0.008 + 0.004;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.decay;
        this.size = Math.max(0.1, this.size - 0.15);
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = 60;
        ctx.shadowColor = this.color.replace(', ', ')');
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw existing particles
      particles.forEach((p, idx) => {
        p.update();
        p.draw();
        if (p.opacity <= 0 || p.size <= 0.1) {
          particles.splice(idx, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };
    animateParticles();

    // Mouse movement handler
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      mousePosRef.current = { x: clientX, y: clientY };
      
      // Update motion values
      if (!magneticTargetRef.current) {
        cursorX.set(clientX);
        cursorY.set(clientY);
      } else {
        // Magnetic pull: lerp towards target center
        const targetRect = magneticTargetRef.current.getBoundingClientRect();
        const targetX = targetRect.left + targetRect.width / 2;
        const targetY = targetRect.top + targetRect.height / 2;
        
        // Dynamic pull threshold
        const dx = clientX - targetX;
        const dy = clientY - targetY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < 80) {
          // Snap outer ring to target, apply slight pull to target itself
          cursorX.set(targetX + dx * 0.2);
          cursorY.set(targetY + dy * 0.2);
          
          // Apply magnetic pull to the target button/card
          magneticTargetRef.current.style.transform = `translate(${dx * 0.15}px, ${dy * 0.15}px)`;
        } else {
          // Release target
          magneticTargetRef.current.style.transform = '';
          magneticTargetRef.current = null;
          setHoverType('default');
          cursorX.set(clientX);
          cursorY.set(clientY);
        }
      }

      // Spawn particles
      if (Math.random() > 0.4) {
        particles.push(new Particle(clientX, clientY));
      }

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Setup magnetic target check
    const setupMagneticElements = () => {
      const magnetics = document.querySelectorAll('.magnetic, a, button, .interactive-card');
      magnetics.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsHovered(true);
          const isMagnetic = el.classList.contains('magnetic') || el.tagName === 'BUTTON' || el.tagName === 'A';
          setHoverType(isMagnetic ? 'magnetic' : 'link');
          if (isMagnetic) {
            magneticTargetRef.current = el;
          }
        });
        el.addEventListener('mouseleave', () => {
          setIsHovered(false);
          setHoverType('default');
          if (magneticTargetRef.current) {
            magneticTargetRef.current.style.transform = '';
            magneticTargetRef.current = null;
          }
        });
      });
    };
    setupMagneticElements();

    const observer = new MutationObserver(setupMagneticElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Canvas for Glowing Particle Trail */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />

      {/* Spring Follower Circle */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ${
          isHovered
            ? hoverType === 'magnetic'
              ? 'w-14 h-14 border-cyan-400 bg-cyan-400/5'
              : 'w-10 h-10 border-white bg-white mix-blend-difference scale-125'
            : 'w-6 h-6 border-white/20 bg-transparent'
        }`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {isHovered && hoverType === 'magnetic' && (
          <span className="text-[9px] font-bold text-cyan-300 font-mono tracking-widest scale-75 animate-pulse uppercase">Pull</span>
        )}
      </motion.div>

      {/* Pinpoint Dot */}
      {!isHovered && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
          style={{
            x: cursorX,
            y: cursorY,
            opacity: isVisible ? 1 : 0,
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
