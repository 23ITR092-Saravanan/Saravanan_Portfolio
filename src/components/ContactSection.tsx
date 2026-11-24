import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  ArrowLeft
} from 'lucide-react';

interface ContactSectionProps {
  onBack?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}`;

  const copyEmail = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="w-full min-h-[calc(100dvh-5.5rem)] pt-20 pb-12 sm:py-24 px-4 sm:px-6 max-w-xl mx-auto flex flex-col justify-center animate-in fade-in duration-300">
      {/* Top Navigation */}
      {onBack && (
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-white/[0.08]">
          <button
            onClick={onBack}
            className="btn-metallic inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-[11px] sm:text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Back to Home</span>
          </button>
          <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Contact Channels
          </span>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-7 sm:mb-10">
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-silver-bright tracking-tight mb-2 sm:mb-3">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
          Connect directly through GitHub, LinkedIn, or send an email to my Gmail inbox.
        </p>
      </div>

      {/* Main Glass Panel with 3 Vertical Buttons */}
      <div className="metallic-card rounded-2xl sm:rounded-3xl p-5 sm:p-9 flex flex-col items-center text-center relative overflow-hidden">
        {/* Subtle decorative internal specular gradient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none" />

        {/* 3 Vertical Action Buttons */}
        <div className="relative z-10 w-full flex flex-col items-stretch gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* 1. Github */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-metallic btn-shimmer group flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/30 text-white shadow-lg transition-all"
          >
            <div className="flex items-center gap-3">
              {/* Minimal GitHub Icon */}
              <svg
                className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base font-semibold">Github</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors shrink-0" />
          </a>

          {/* 2. LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-metallic btn-shimmer group flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/30 text-white shadow-lg transition-all"
          >
            <div className="flex items-center gap-3">
              {/* Minimal LinkedIn Icon */}
              <svg
                className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span className="text-sm sm:text-base font-semibold">LinkedIn</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors shrink-0" />
          </a>

          {/* 3. Send a mail (Directly opens Gmail with 'to' pre-filled) */}
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-metallic btn-shimmer group flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 hover:from-white hover:to-zinc-100 text-zinc-950 shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-zinc-900 group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-sm sm:text-base font-bold">Send a mail</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-black transition-colors shrink-0" />
          </a>
        </div>

        {/* Quick Email Display with One-Click Copy */}
        <div className="relative z-10 w-full flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-white/[0.08] text-[11px] sm:text-xs font-mono text-zinc-400">
          <span className="break-all">{PERSONAL_INFO.email}</span>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all cursor-pointer active:scale-95"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
