import React from 'react';
import { ArrowRight, Mail, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import metallicFlowHero from '../assets/images/metallic_flow_hero_1793247066215.jpg';

interface HeroSectionProps {
  onExplore: () => void;
  onContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onContact }) => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100dvh-5.5rem)] flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      {/* Cinematic Metallic Fluid Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={metallicFlowHero}
          alt="Cinematic metallic ribbon wave background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-90 contrast-125 scale-105 animate-metallic-drift"
        />
        {/* Deep vignette and contrast scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/80 via-[#08090d]/40 to-[#08090d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#08090d_75%)]" />

        {/* Dynamic ambient glow highlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[550px] md:w-[700px] h-[220px] sm:h-[350px] bg-slate-400/5 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Main Greeting */}
        <p className="text-base sm:text-xl md:text-2xl font-medium text-zinc-300 mb-2 sm:mb-3 tracking-wide text-center">
          Hi I'm
        </p>

        {/* Large Name Typography with Silver Gradient (scales safely from 320px phones to 4K monitors) */}
        <h1 className="text-[clamp(2.35rem,11vw,7.5rem)] leading-[1.06] font-display font-extrabold tracking-tight text-silver-bright mb-2.5 sm:mb-3 select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] max-w-full">
          {PERSONAL_INFO.name}
        </h1>

        {/* Final-Year B.Tech IT Student under Saravanan R */}
        <p className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-silver-gradient mb-2 sm:mb-3 tracking-normal">
          Final-Year B.Tech IT Student
        </p>

        {/* Subtitle */}
        <h2 className="text-sm sm:text-base md:text-lg text-zinc-400 font-normal mb-8 sm:mb-10 tracking-wide">
          {PERSONAL_INFO.subtitle}
        </h2>

        {/* Two Vertical Buttons placed vertically */}
        <div className="flex flex-col items-center gap-3.5 sm:gap-4 w-full max-w-[280px] sm:max-w-sm">
          {/* Button 1: Explore My Portfolio */}
          <button
            onClick={onExplore}
            className="w-full btn-metallic btn-shimmer group inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-zinc-950 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300 hover:from-white hover:to-zinc-100 rounded-xl shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-zinc-900 shrink-0" />
            <span>Explore My Portfolio</span>
            <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-zinc-900 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </button>

          {/* Button 2: Contact Me */}
          <button
            onClick={onContact}
            className="w-full btn-metallic btn-shimmer group inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] rounded-xl backdrop-blur-sm transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-zinc-400 group-hover:text-white transition-colors shrink-0" />
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </section>
  );
};
