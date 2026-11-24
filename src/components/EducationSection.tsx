import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { Calendar, Award, MapPin, BookOpen, Layers, ArrowLeft } from 'lucide-react';

interface EducationSectionProps {
  onBack?: () => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onBack }) => {
  return (
    <section id="education" className="w-full min-h-[calc(100dvh-5.5rem)] pt-20 pb-12 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Top Navigation */}
      {onBack && (
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-white/[0.08]">
          <button
            onClick={onBack}
            className="btn-metallic inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-[11px] sm:text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Back to Portfolio Options</span>
          </button>
          <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Education Record
          </span>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col items-start mb-8 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-silver-bright tracking-tight">
          Educational Journey
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative pl-6 sm:pl-10 border-l border-zinc-700/60 ml-2.5 sm:ml-4 flex flex-col gap-6 sm:gap-10">
        {EDUCATION_DATA.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Silver Node (centered on border-l across mobile & desktop) */}
            <div className="absolute -left-[35px] sm:-left-[53px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#08090d] border-2 border-slate-300 flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.4)] group-hover:scale-110 group-hover:border-white transition-all duration-300">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-200" />
            </div>

            {/* Content Card */}
            <div className="metallic-card rounded-2xl p-5 sm:p-8 transition-all duration-300 hover:border-white/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
              {/* Title & Institution */}
              <h3 className="text-lg sm:text-2xl font-display font-bold text-white mb-1.5 group-hover:text-silver-bright transition-colors">
                {item.level}
              </h3>
              <p className="text-xs sm:text-base text-zinc-200 font-medium mb-2">
                {item.institution}
              </p>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-400 font-mono mb-4 sm:mb-5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{item.location}</span>
              </div>

              {/* Clean Academic Details */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-x-5 sm:gap-x-6 gap-y-2 text-[11px] sm:text-sm font-mono text-zinc-300">
                {/* Year of Passing */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.yearOfPassing}</span>
                </div>

                {/* Score (CGPA / Percentage) */}
                {item.score && (
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-slate-300" />
                    <span className="text-white font-medium">{item.score}</span>
                  </div>
                )}

                {/* Medium */}
                {item.medium && (
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.medium}</span>
                  </div>
                )}

                {/* Education Type */}
                {item.educationType && (
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.educationType}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
