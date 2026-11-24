import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Briefcase, User, Calendar, MapPin, Sparkles, CheckCircle2, ArrowLeft } from 'lucide-react';

interface AboutSectionProps {
  onBack?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBack }) => {
  return (
    <section id="about" className="w-full min-h-[calc(100dvh-5.5rem)] pt-20 pb-12 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto animate-in fade-in duration-300">
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
            Profile Overview
          </span>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col items-start mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-silver-bright tracking-tight">
          About Me
        </h2>
      </div>

      {/* Main Glass Panel */}
      <div className="relative rounded-2xl sm:rounded-3xl metallic-card p-5 sm:p-10 md:p-14 overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        {/* Subtle decorative internal specular gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/[0.05] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Main Statement Quote Block */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2.5 sm:mb-3">
                Personal Statement
              </span>
              <blockquote className="text-base sm:text-xl md:text-[22px] text-zinc-100 font-display font-normal leading-relaxed tracking-wide mb-6 sm:mb-8">
                “{PERSONAL_INFO.aboutBio}”
              </blockquote>
            </div>

            {/* Below Personal Statement: Only Available for internships and jobs with increased font size */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10 border border-white/15 text-slate-200 shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                <Briefcase className="w-5 h-5 text-slate-200" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-silver-bright tracking-wide">
                Available for internships and jobs
              </span>
            </div>
          </div>

          {/* Right Column: Clean Personal Facts */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-8 lg:pt-0 lg:pl-10">
            {/* Full Name */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/20 transition-all">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                Full Name
              </span>
              <span className="text-base sm:text-lg font-bold text-white font-display">
                Saravanan R
              </span>
            </div>

            {/* Age */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/20 transition-all">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                Age
              </span>
              <span className="text-sm sm:text-base font-semibold text-zinc-100">
                20 years
              </span>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/20 transition-all">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                Location
              </span>
              <span className="text-sm sm:text-base font-semibold text-zinc-100">
                Erode, TamilNadu
              </span>
            </div>

            {/* Area of Interests */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/20 transition-all">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                Area of Interests
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shadow-[0_0_6px_#fff]" />
                  <span>Data Analytics</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shadow-[0_0_6px_#fff]" />
                  <span>Digital Marketing</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shadow-[0_0_6px_#fff]" />
                  <span>Web Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
