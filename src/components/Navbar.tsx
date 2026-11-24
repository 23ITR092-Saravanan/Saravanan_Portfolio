import React, { useState, useEffect } from 'react';
import { ArrowLeft, Home } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || activeView !== 'home'
          ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 md:h-20 flex items-center justify-between gap-3">
        {/* Brand Wordmark (Direct access to Home) */}
        <button
          onClick={() => onNavigate('home')}
          className="text-sm sm:text-base md:text-lg font-display font-bold tracking-tight text-white whitespace-nowrap shrink-0 group flex items-center gap-2 px-2 py-1 -ml-2 rounded-lg cursor-pointer"
          aria-label="Go to Home"
        >
          <span className="w-2 h-2 rounded-full bg-slate-300 shadow-[0_0_8px_rgba(255,255,255,0.7)] group-hover:scale-125 transition-transform" />
          <span className="text-silver-bright group-hover:opacity-90 transition-opacity">
            Saravanan R
          </span>
        </button>

        {/* Clean return button when inside any sub-view */}
        {activeView !== 'home' && (
          <button
            onClick={() => onNavigate('home')}
            className="btn-metallic btn-shimmer inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-lg transition-all shrink-0 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-slate-300" />
            <span>Home</span>
          </button>
        )}
      </div>
    </header>
  );
};
