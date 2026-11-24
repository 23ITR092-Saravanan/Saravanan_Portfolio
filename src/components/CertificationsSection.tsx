import React, { useState } from 'react';
import { CertificateItem } from '../types/portfolio';
import { RESUME_CERTIFICATES } from '../data/portfolioData';
import {
  Award,
  Maximize2,
  X,
  Calendar,
  Building,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  BookOpen,
  ArrowLeft
} from 'lucide-react';

interface CertificationsSectionProps {
  onBack?: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onBack }) => {
  const [certificates] = useState<CertificateItem[]>(RESUME_CERTIFICATES);
  const [selectedGroup, setSelectedGroup] = useState<string>('All');

  // Lightbox Preview
  const [previewCert, setPreviewCert] = useState<CertificateItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const groups: { label: string; count: number }[] = [
    { label: 'All', count: certificates.length },
    { label: 'NPTEL', count: certificates.filter((c) => c.group === 'NPTEL').length },
    { label: 'IEEE Conference', count: certificates.filter((c) => c.group === 'IEEE Conference').length },
    { label: 'Other Certificates', count: certificates.filter((c) => c.group === 'Other Certificates').length },
  ];

  // Grouping helpers
  const nptelCerts = certificates.filter((c) => c.group === 'NPTEL');
  const ieeeCerts = certificates.filter((c) => c.group === 'IEEE Conference');
  const otherCerts = certificates.filter((c) => c.group === 'Other Certificates');

  const renderCard = (cert: CertificateItem) => (
    <div
      key={cert.id}
      className="metallic-card rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:border-white/25 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
    >
      <div>
        {/* Card Header: Only honor badge if present. No group header! */}
        {cert.honorBadge ? (
          <div className="flex items-center justify-end mb-3">
            <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-200/10 border border-slate-300/30 text-silver-bright">
              {cert.honorBadge}
            </span>
          </div>
        ) : (
          <div className="h-2" />
        )}

        {/* Certificate Title */}
        <h4 className="text-base sm:text-lg font-display font-bold text-white mb-2 group-hover:text-silver-bright transition-colors">
          {cert.title}
        </h4>

        {/* Issuing Organization */}
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium mb-3">
          <Building className="w-3.5 h-3.5 text-zinc-500" />
          <span>{cert.organization}</span>
        </div>

        {/* Paper title for IEEE conferences */}
        {cert.paperTitle && (
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4 text-xs text-zinc-300 leading-relaxed font-mono">
            <span className="text-zinc-500 block text-[10px] uppercase mb-1">Paper Title:</span>
            “{cert.paperTitle}”
          </div>
        )}

        {/* Image Preview if available */}
        {cert.imageUrl && (
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-zinc-950 mt-2 mb-2">
            <img
              src={cert.imageUrl}
              alt={cert.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => {
                setPreviewCert(cert);
                setZoomLevel(1);
              }}
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-mono cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              <span>View Certificate</span>
            </button>
          </div>
        )}
      </div>

      {cert.imageUrl && (
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-end text-xs font-mono text-zinc-400">
          <button
            onClick={() => {
              setPreviewCert(cert);
              setZoomLevel(1);
            }}
            className="hover:text-white flex items-center gap-1 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Preview</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <section id="certifications" className="w-full min-h-[calc(100dvh-5.5rem)] pt-20 pb-12 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto animate-in fade-in duration-300">
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
            Accreditations
          </span>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col items-start mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-silver-bright tracking-tight">
          Certifications
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 bg-white/[0.03] border border-white/[0.06] rounded-xl w-full sm:w-fit mb-8 sm:mb-12">
        {groups.map((g) => (
          <button
            key={g.label}
            onClick={() => setSelectedGroup(g.label)}
            className={`px-3 py-1.5 sm:px-3.5 text-[11px] sm:text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedGroup === g.label
                ? 'bg-white/10 text-white shadow-sm font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>{g.label}</span>
            <span className="ml-1.5 text-[10px] font-mono text-zinc-500">({g.count})</span>
          </button>
        ))}
      </div>

      {/* Grouped Layout */}
      <div className="space-y-12 sm:space-y-16">
        {/* Group 1: NPTEL Certifications */}
        {(selectedGroup === 'All' || selectedGroup === 'NPTEL') && (
          <div>
            <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-3 border-b border-white/[0.08]">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                NPTEL Certifications
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {nptelCerts.map(renderCard)}
            </div>
          </div>
        )}

        {/* Group 2: IEEE Conference Certificates */}
        {(selectedGroup === 'All' || selectedGroup === 'IEEE Conference') && (
          <div>
            <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-3 border-b border-white/[0.08]">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                IEEE Conference Certificates
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {ieeeCerts.map(renderCard)}
            </div>
          </div>
        )}

        {/* Group 3: Other Certificates */}
        {(selectedGroup === 'All' || selectedGroup === 'Other Certificates') && (
          <div>
            <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-3 border-b border-white/[0.08]">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                Other Certificates
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {otherCerts.map(renderCard)}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox / Zoom Preview Modal */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPreviewCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90dvh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex flex-wrap items-center justify-between gap-2 text-white mb-3 sm:mb-4 bg-zinc-900/90 px-3.5 py-2.5 sm:px-4 rounded-xl border border-white/10 backdrop-blur-md">
              <div className="flex flex-col text-left min-w-0">
                <span className="text-xs sm:text-sm font-bold font-display truncate">{previewCert.title}</span>
                <span className="text-[11px] sm:text-xs text-zinc-400 font-mono truncate">
                  {previewCert.organization} {previewCert.honorBadge ? `· ${previewCert.honorBadge}` : ''}
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                  className="p-1.5 rounded hover:bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                  className="p-1.5 rounded hover:bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-1.5 rounded hover:bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPreviewCert(null)}
                  className="p-1.5 rounded hover:bg-white/10 text-zinc-300 hover:text-white ml-1 sm:ml-2 cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Display Frame */}
            <div className="overflow-auto max-h-[75dvh] rounded-xl border border-white/15 bg-[#090a0f] p-3 sm:p-4 flex items-center justify-center shadow-2xl">
              {previewCert.imageUrl && (
                <img
                  src={previewCert.imageUrl}
                  alt={previewCert.title}
                  referrerPolicy="no-referrer"
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="transition-transform duration-200 max-w-full max-h-[65dvh] object-contain rounded"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
