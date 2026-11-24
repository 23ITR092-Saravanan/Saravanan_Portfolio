import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import {
  X,
  AlertCircle,
  History,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Layers
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90dvh] overflow-y-auto bg-[#0b0c11] border border-white/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-5 sm:p-8 md:p-10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-metallic absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header (No Images) */}
        <div className="pr-10 sm:pr-12 mb-6 border-b border-white/[0.08] pb-5 sm:pb-6">
          <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-slate-300 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            <span>{project.domain}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Technical Breakdown</span>
          </div>

          <h3
            id="project-modal-title"
            className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-silver-bright mb-3 tracking-tight"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-base text-zinc-300 leading-relaxed max-w-3xl mb-4">
            {project.introduction}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500 mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Technologies:</span>
            </span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-md bg-white/[0.05] border border-white/10 text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Five Distinct Structured Sections */}
        <div className="space-y-4 sm:space-y-6">
          {/* Section 1: Problem Statement */}
          <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/15 transition-all">
            <h4 className="text-sm sm:text-base font-display font-semibold text-white mb-3 flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-white/5 border border-white/10 text-slate-300 shrink-0">
                <AlertCircle className="w-4 h-4" />
              </div>
              <span className="text-silver-bright">1. Problem Statement</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 pl-1">
              {project.problemStatement.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-zinc-500 mt-0.5 font-mono">―</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Existing System */}
          <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/15 transition-all">
            <h4 className="text-sm sm:text-base font-display font-semibold text-white mb-3 flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-white/5 border border-white/10 text-slate-300 shrink-0">
                <History className="w-4 h-4" />
              </div>
              <span className="text-silver-bright">2. Existing System</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 pl-1">
              {project.existingSystem.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-zinc-500 mt-0.5 font-mono">―</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Proposed System Solution */}
          <div className="p-4 sm:p-6 rounded-xl bg-white/[0.03] border border-white/[0.12] hover:border-white/20 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <h4 className="text-sm sm:text-base font-display font-semibold text-white mb-3 flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-white/10 border border-white/20 text-slate-200 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-silver-bright">3. Proposed System Solution</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200 pl-1">
              {project.proposedSystemSolution.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-slate-300 mt-0.5 font-mono font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Advantages of Proposed System */}
          <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/15 transition-all">
            <h4 className="text-sm sm:text-base font-display font-semibold text-white mb-3 flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-white/5 border border-white/10 text-slate-300 shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-silver-bright">4. Advantages of Proposed System</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 pl-1">
              {project.advantages.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-zinc-500 mt-0.5 font-mono">―</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Future Innovations */}
          <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/15 transition-all">
            <h4 className="text-sm sm:text-base font-display font-semibold text-white mb-3 flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-white/5 border border-white/10 text-slate-300 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-silver-bright">5. Future Innovations</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 pl-1">
              {project.futureInnovations.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-zinc-500 mt-0.5 font-mono">―</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <span className="text-[11px] sm:text-xs font-mono text-zinc-500 text-center sm:text-left">
            Student Project Showcase · Saravanan R
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto btn-metallic btn-shimmer px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-zinc-200 to-white hover:to-zinc-100 rounded-lg shadow-md transition-all cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
