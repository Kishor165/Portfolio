import React, { useEffect, useRef } from 'react';

const BackgroundMesh = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // PROFESSIONAL TWEAK: Reduce density on mobile to prevent "messy" look
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 40 : 100; 
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Slower velocity for a more "calm" tech feel
          vx: (Math.random() - 0.5) * 0.3, 
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Use a very subtle cyan for the lines
      ctx.fillStyle = 'rgba(0, 210, 255, 0.3)';
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.08)';

      const connectionDist = window.innerWidth < 768 ? 100 : 150;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < connectionDist) {
            ctx.lineWidth = 1 - dist / connectionDist; // Lines fade as they get further
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* This DIV adds a deep professional glow behind your text */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0) 0%, rgba(2, 6, 23, 0.8) 100%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
      
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          zIndex: -2, /* Sit behind the gradient */
          backgroundColor: '#020617' /* Dark navy/black background */
        }} 
      />
    </>
  );
};

export default BackgroundMesh;