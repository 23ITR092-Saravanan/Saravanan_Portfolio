import React, { useEffect, useRef } from 'react';

type ParticleShape = 'ribbon' | 'spark' | 'dot';

interface PopperParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  aspect: number;
  rotation: number;
  vr: number;
  tilt: number;
  vTilt: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
  drag: number;
  shape: ParticleShape;
}

interface ShockwaveRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

const METALLIC_PALETTE = [
  '#ffffff', // pure white highlight
  '#f4f4f5', // zinc-100 platinum
  '#e2e8f0', // slate-200 bright silver
  '#cbd5e1', // slate-300 brushed silver
  '#94a3b8', // slate-400 chrome
  '#d4d4d8', // zinc-300 cool steel
];

export const ClickPopperOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const particles: PopperParticle[] = [];
    const rings: ShockwaveRing[] = [];
    let rafId: number | null = null;

    const spawnBurst = (originX: number, originY: number) => {
      if (prefersReducedMotion) {
        rings.push({
          x: originX,
          y: originY,
          radius: 6,
          maxRadius: 34,
          alpha: 0.7,
          color: '#e2e8f0',
        });
        startLoop();
        return;
      }

      // Expanding metallic shockwave rings
      rings.push({
        x: originX,
        y: originY,
        radius: 4,
        maxRadius: 46,
        alpha: 0.75,
        color: '#ffffff',
      });
      rings.push({
        x: originX,
        y: originY,
        radius: 2,
        maxRadius: 28,
        alpha: 0.55,
        color: '#cbd5e1',
      });

      const count = 26;
      const shapes: ParticleShape[] = ['ribbon', 'ribbon', 'spark', 'dot'];

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.45;
        const speed = 3.2 + Math.random() * 5.6;
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (1.0 + Math.random() * 1.4), // slight upward popper lift
          size: shape === 'dot' ? 2 + Math.random() * 2.2 : 4 + Math.random() * 4.5,
          aspect: 0.42 + Math.random() * 0.35,
          rotation: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.28,
          tilt: Math.random() * Math.PI * 2,
          vTilt: 0.12 + Math.random() * 0.16,
          color: METALLIC_PALETTE[Math.floor(Math.random() * METALLIC_PALETTE.length)],
          alpha: 1,
          decay: 0.018 + Math.random() * 0.014,
          gravity: shape === 'spark' ? 0.09 : 0.14,
          drag: 0.945,
          shape,
        });
      }

      // Cap total particles so rapid multi-clicking stays silky smooth
      if (particles.length > 260) {
        particles.splice(0, particles.length - 260);
      }

      startLoop();
    };

    const drawFourPointSpark = (x: number, y: number, r: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      const inner = r * 0.28;
      for (let i = 0; i < 4; i++) {
        const outerAngle = (i * Math.PI) / 2;
        const innerAngle = outerAngle + Math.PI / 4;
        if (i === 0) {
          ctx.moveTo(Math.cos(outerAngle) * r, Math.sin(outerAngle) * r);
        } else {
          ctx.lineTo(Math.cos(outerAngle) * r, Math.sin(outerAngle) * r);
        }
        ctx.lineTo(Math.cos(innerAngle) * inner, Math.sin(innerAngle) * inner);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & draw shockwave rings
      for (let i = rings.length - 1; i >= 0; i--) {
        const ring = rings[i];
        ring.radius += (ring.maxRadius - ring.radius) * 0.22 + 0.8;
        ring.alpha -= 0.045;

        if (ring.alpha <= 0 || ring.radius >= ring.maxRadius) {
          rings.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, ring.alpha);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Update & draw popper particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vr;
        p.tilt += p.vTilt;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.55)';
        ctx.shadowBlur = 6;

        if (p.shape === 'ribbon') {
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          const scaleY = Math.cos(p.tilt);
          ctx.scale(1, Math.abs(scaleY) < 0.2 ? 0.2 : scaleY);
          const w = p.size;
          const h = p.size * p.aspect;
          ctx.fillRect(-w / 2, -h / 2, w, h);
        } else if (p.shape === 'spark') {
          drawFourPointSpark(p.x, p.y, p.size * 0.72, p.rotation);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      if (particles.length > 0 || rings.length > 0) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    const startLoop = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const buttonEl = target.closest(
        'button:not(:disabled), [role="button"]:not([aria-disabled="true"]), a.btn-metallic, a.btn-shimmer'
      ) as HTMLElement | null;

      if (!buttonEl) return;

      // Determine exact burst origin (pointer coords or center of button for keyboard activation)
      let x = e.clientX;
      let y = e.clientY;

      if (x === 0 && y === 0) {
        const rect = buttonEl.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }

      spawnBurst(x, y);
    };

    // Capture phase ensures bursts trigger even if handlers stopPropagation or immediately unmount the button
    document.addEventListener('click', handleGlobalClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
      window.removeEventListener('resize', resize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
};
