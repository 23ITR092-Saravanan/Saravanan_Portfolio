import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}`;

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#07080b] py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-8 font-mono text-[11px] sm:text-xs text-zinc-400">
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
        </a>
        <span className="text-zinc-700" aria-hidden="true">·</span>
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
        </a>
        <span className="text-zinc-700" aria-hidden="true">·</span>
        <a
          href={gmailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors break-all text-center"
        >
          {PERSONAL_INFO.email}
        </a>
      </div>
    </footer>
  );
};
