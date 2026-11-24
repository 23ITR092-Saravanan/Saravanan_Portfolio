import React, { useEffect, useState } from 'react';

interface InitialLoaderProps {
  onComplete: () => void;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
    }, 450);

    const removeTimer = setTimeout(() => {
      onComplete();
    }, 750);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080b] transition-opacity duration-300 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <span className="text-2xl md:text-3xl font-display font-bold tracking-wider text-silver-gradient">
            SARAVANAN R
          </span>
          <div className="h-[2px] w-full mt-2 bg-gradient-to-r from-transparent via-slate-200 to-transparent animate-pulse" />
        </div>
        <span className="text-xs tracking-[0.25em] text-zinc-500 uppercase font-mono">
          B.Tech Information Technology
        </span>
      </div>
    </div>
  );
};
