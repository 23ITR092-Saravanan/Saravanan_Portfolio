import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import {
  FileText,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  Cpu,
  Globe,
  BarChart3,
  ArrowLeft
} from 'lucide-react';

interface ProjectsSectionProps {
  onBack?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onBack }) => {
  const [projects] = useState<Project[]>(PROJECTS_DATA);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'Machine Learning':
        return <Cpu className="w-4 h-4 text-slate-300" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-slate-300" />;
      case 'Power BI':
        return <BarChart3 className="w-4 h-4 text-slate-300" />;
      default:
        return <Layers className="w-4 h-4 text-slate-300" />;
    }
  };

  return (
    <section id="projects" className="w-full min-h-[calc(100dvh-5.5rem)] pt-20 pb-12 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto animate-in fade-in duration-300">
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
            Engineering Projects
          </span>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col items-start mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-silver-bright tracking-tight">
          Projects
        </h2>
      </div>

      {/* Purely Text-Based Cards Grid (No Images or Placeholders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="group relative rounded-2xl metallic-card p-5 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)]"
          >
            {/* Top Domain & Index Row */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5 pb-3.5 sm:pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="p-1.5 rounded-md bg-white/[0.04] border border-white/10 group-hover:border-white/20 transition-colors shrink-0">
                    {getDomainIcon(project.domain)}
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono tracking-wider text-slate-300 uppercase truncate">
                    {project.domain}
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-500 shrink-0">
                  0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-white mb-3 group-hover:text-silver-bright transition-colors">
                {project.title}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-zinc-300 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Short Introduction */}
              <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed mb-5 sm:mb-6 font-normal">
                {project.introduction}
              </p>
            </div>

            {/* Bottom Actions: View Details Button */}
            <div className="pt-5 sm:pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-zinc-500">
                5-Part Architecture
              </span>
              <button
                onClick={() => setActiveProject(project)}
                className="btn-metallic btn-shimmer inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-zinc-200 via-zinc-100 to-white hover:to-zinc-200 rounded-lg shadow-[0_2px_12px_rgba(255,255,255,0.12)] cursor-pointer"
                aria-label={`View details for ${project.title}`}
              >
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with 5 Structured Sections */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
