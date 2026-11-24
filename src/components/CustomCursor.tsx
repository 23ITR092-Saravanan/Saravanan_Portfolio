import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer');
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp for trailing cursor
  useEffect(() => {
    if (isTouch || !isVisible) return;
    let animationFrameId: number;

    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pos, isTouch, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Background Soft Cursor Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(550px circle at ${pos.x}px ${pos.y}px, rgba(220, 225, 235, 0.045), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Main Core Dot */}
      <div
        className={`pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out ${
          isHovered
            ? 'w-3 h-3 -ml-1.5 -mt-1.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] scale-150'
            : 'w-2 h-2 -ml-1 -mt-1 bg-zinc-300 shadow-[0_0_8px_rgba(255,255,255,0.5)]'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
        aria-hidden="true"
      />

      {/* Outer Magnetic Ring */}
      <div
        className={`pointer-events-none fixed z-40 rounded-full border border-slate-400/40 transition-all duration-200 ease-out ${
          isHovered
            ? 'w-10 h-10 -ml-5 -mt-5 border-slate-200/80 bg-white/5 scale-110'
            : 'w-7 h-7 -ml-3.5 -mt-3.5 border-slate-500/30'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
        aria-hidden="true"
      />
    </>
  );
};
