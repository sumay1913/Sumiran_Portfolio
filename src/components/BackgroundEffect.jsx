import React, { useEffect, useRef, useState } from 'react';

const BackgroundEffect = () => {
  const [mouse, setMouse] = useState({ x: 500, y: 300 });
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const handleMove = (e) => {
  setMouse({
    x: e.clientX,
    y: e.clientY,
  });
};

window.addEventListener("mousemove", handleMove);
    window.addEventListener('scroll', handleScroll);

    // Canvas particle network
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
    const numParticles = 45;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }
      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawNetwork);
    };
    drawNetwork();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030303]">
      {/* Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-50" />

      {/* Layer 1: Parallax Ambient Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5 + scrollY * 0.05}px)`,
        }}
      />

      {/* Layer 2: Glowing Blob 1 - Purple (Background Depth) */}
      <div
        className="absolute w-[45vw] h-[45vw] rounded-full bg-violet-600/30 blur-[180px] transition-transform duration-[1500ms] ease-out animate-float"
        style={{
          top: '-15%',
          left: '5%',
          transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12 + scrollY * -0.08}px)`,
        }}
      />

      {/* Layer 3: Glowing Blob 2 - Cyan (Midground Depth) */}
      <div
        className="absolute w-[40vw] h-[40vw] rounded-full bg-cyan-500/30 blur-[160px] transition-transform duration-[1200ms] ease-out animate-float-delayed"
        style={{
          bottom: '5%',
          right: '2%',
          transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 18 + scrollY * -0.12}px)`,
        }}
      />

      {/* Layer 4: Glowing Blob 3 - Emerald (Foreground Depth) */}
      <div
        className="absolute w-[35vw] h-[35vw] rounded-full bg-emerald-500/5 blur-[100px] transition-transform duration-[1000ms] ease-out"
        style={{
          top: '35%',
          left: '45%',
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * 25 + scrollY * 0.06}px) translate(-50%, -50%)`,
        }}
      />
       </div>
    
  );
};

export default BackgroundEffect;
