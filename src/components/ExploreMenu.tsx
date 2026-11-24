import React from 'react';
import {
  User,
  GraduationCap,
  Layers,
  Sparkles,
  Award,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

interface ExploreMenuProps {
  onSelect: (section: 'about' | 'education' | 'projects' | 'skills' | 'certifications') => void;
  onBack: () => void;
}

export const ExploreMenu: React.FC<ExploreMenuProps> = ({ onSelect, onBack }) => {
  const options = [
    {
      id: 'about' as const,
      title: 'About',
      icon: <User className="w-5 h-5 text-slate-300" />
    },
    {
      id: 'education' as const,
      title: 'Education',
      icon: <GraduationCap className="w-5 h-5 text-slate-300" />
    },
    {
      id: 'projects' as const,
      title: 'Projects',
      icon: <Layers className="w-5 h-5 text-slate-300" />
    },
    {
      id: 'skills' as const,
      title: 'Skills',
      icon: <Sparkles className="w-5 h-5 text-slate-300" />
    },
    {
      id: 'certifications' as const,
      title: 'Certifications',
      icon: <Award className="w-5 h-5 text-slate-300" />
    }
  ];

  return (
    <section className="w-full min-h-[calc(100dvh-5.5rem)] pt-20 pb-12 sm:py-24 px-4 sm:px-6 max-w-2xl mx-auto flex flex-col justify-center animate-in fade-in duration-300">
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-white/[0.08]">
        <button
          onClick={onBack}
          className="btn-metallic inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-[11px] sm:text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Back to Home</span>
        </button>
        <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Portfolio Navigation
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-silver-bright tracking-tight">
          Explore Portfolio
        </h2>
      </div>

      {/* List of 5 Clean Option Buttons */}
      <div className="flex flex-col gap-3 sm:gap-3.5">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className="group btn-metallic btn-shimmer w-full text-left px-4 py-3.5 sm:px-6 sm:py-5 rounded-xl sm:rounded-2xl metallic-card hover:border-white/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-white/25 group-hover:bg-white/10 transition-colors shrink-0">
                {opt.icon}
              </div>
              <h3 className="text-base sm:text-xl font-display font-semibold text-white group-hover:text-silver-bright transition-colors">
                {opt.title}
              </h3>
            </div>

            <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] group-hover:bg-white/10 border border-white/[0.06] transition-colors shrink-0">
              <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
