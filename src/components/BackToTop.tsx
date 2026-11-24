import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-[#0e1017]/90 border border-white/20 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-white/50 hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-4 h-4 text-slate-200" />
    </button>
  );
};
