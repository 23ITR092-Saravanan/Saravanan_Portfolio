import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import {
  Code,
  Globe,
  Database,
  BarChart3,
  Palette,
  HeartHandshake,
  ArrowLeft
} from 'lucide-react';

interface SkillsSectionProps {
  onBack?: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onBack }) => {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming Languages':
        return <Code className="w-5 h-5 text-slate-300" />;
      case 'Web Technologies':
        return <Globe className="w-5 h-5 text-slate-300" />;
      case 'Database':
        return <Database className="w-5 h-5 text-slate-300" />;
      case 'Data Analytics Tools':
        return <BarChart3 className="w-5 h-5 text-slate-300" />;
      case 'Design Tools':
        return <Palette className="w-5 h-5 text-slate-300" />;
      case 'Soft Skills':
        return <HeartHandshake className="w-5 h-5 text-slate-300" />;
      default:
        return <Code className="w-5 h-5 text-slate-300" />;
    }
  };

  return (
    <section id="skills" className="w-full min-h-[calc(100dvh-5.5rem)] pt-20 pb-12 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto animate-in fade-in duration-300">
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
            Technical & Soft Skills
          </span>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col items-start mb-8 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-silver-bright tracking-tight">
          Skills & Expertise
        </h2>
      </div>

      {/* Clean Grid of Skill Categories (Only Category Names & Skill Names) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="metallic-card rounded-2xl p-5 sm:p-7 flex flex-col justify-start transition-all duration-300 hover:border-white/25 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)] group"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5 pb-3.5 sm:pb-4 border-b border-white/[0.08]">
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-white/25 transition-colors shrink-0">
                {getCategoryIcon(group.category)}
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-silver-bright transition-colors">
                {group.category}
              </h3>
            </div>

            {/* Skill Names Only (No descriptions, no percentages, no proficiency tags) */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-medium rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/25 hover:bg-white/[0.07] text-zinc-200 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
