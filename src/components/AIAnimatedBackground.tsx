
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type AIAnimatedBackgroundProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

const AIAnimatedBackground: React.FC<AIAnimatedBackgroundProps> = ({ variant = 'primary' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Colors based on variant
  const getColors = () => {
    switch (variant) {
      case 'primary':
        return {
          particleColor: '#3498db',
          lineColor: 'rgba(52, 152, 219, 0.2)',
          glowColor1: 'rgba(52, 152, 219, 0.4)',
          glowColor2: 'rgba(142, 68, 173, 0.3)',
        };
      case 'secondary':
        return {
          particleColor: '#2ecc71',
          lineColor: 'rgba(46, 204, 113, 0.2)',
          glowColor1: 'rgba(46, 204, 113, 0.4)',
          glowColor2: 'rgba(52, 152, 219, 0.3)',
        };
      case 'tertiary':
        return {
          particleColor: '#e74c3c',
          lineColor: 'rgba(231, 76, 60, 0.2)',
          glowColor1: 'rgba(231, 76, 60, 0.4)',
          glowColor2: 'rgba(241, 196, 15, 0.3)',
        };
      default:
        return {
          particleColor: '#3498db',
          lineColor: 'rgba(52, 152, 219, 0.2)',
          glowColor1: 'rgba(52, 152, 219, 0.4)',
          glowColor2: 'rgba(142, 68, 173, 0.3)',
        };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network simulation variables
    const colors = getColors();
    const particleCount = Math.floor(window.innerWidth * window.innerHeight / 15000);
    const connectionDistance = 150;
    const particles: Particle[] = [];

    // Create particles
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulseSpeed: number;
      pulseAmount: number;
      pulseOffset: number;
      originalSize: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.originalSize = Math.random() * 4 + 1;
        this.size = this.originalSize;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAmount = Math.random() * 0.5 + 0.5;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update() {
        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Pulse size
        this.size = this.originalSize + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * this.pulseAmount;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = colors.particleColor;
        ctx.fill();
      }
    }

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add subtle gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, colors.glowColor1);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 0.3;
      
      const gridSize = 40;
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw connections between particles
      ctx.strokeStyle = colors.lineColor;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.globalAlpha = (1 - distance / connectionDistance) * 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Add floating binary/data symbols occasionally
      if (Math.random() < 0.05) {
        const symbols = ['01', '10', '∞', '∑', '∆', 'λ', 'π', '∫', '≡', '≈'];
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.font = '12px monospace';
        ctx.fillText(symbol, x, y);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <canvas ref={canvasRef} className="w-full h-full opacity-40 dark:opacity-60" />
      
      {/* Additional floating elements with framer-motion */}
      <motion.div 
        className="absolute top-1/4 right-1/5 w-40 h-40 rounded-full blur-3xl"
        style={{ 
          background: variant === 'primary' 
            ? 'radial-gradient(circle, rgba(52,152,219,0.2) 0%, rgba(52,152,219,0) 70%)' 
            : variant === 'secondary'
              ? 'radial-gradient(circle, rgba(46,204,113,0.2) 0%, rgba(46,204,113,0) 70%)'
              : 'radial-gradient(circle, rgba(231,76,60,0.2) 0%, rgba(231,76,60,0) 70%)'
        }}
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-60 h-60 rounded-full blur-3xl"
        style={{ 
          background: variant === 'primary'
            ? 'radial-gradient(circle, rgba(142,68,173,0.2) 0%, rgba(142,68,173,0) 70%)'
            : variant === 'secondary'
              ? 'radial-gradient(circle, rgba(52,152,219,0.2) 0%, rgba(52,152,219,0) 70%)'
              : 'radial-gradient(circle, rgba(241,196,15,0.2) 0%, rgba(241,196,15,0) 70%)'
        }}
        animate={{ 
          y: [0, 40, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AIAnimatedBackground;
