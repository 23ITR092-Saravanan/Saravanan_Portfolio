import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExploreMenu } from './components/ExploreMenu';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ClickPopperOverlay } from './components/ClickPopperOverlay';
import { InitialLoader } from './components/InitialLoader';
import { BackToTop } from './components/BackToTop';

export type ViewState =
  | 'home'
  | 'explore-menu'
  | 'about'
  | 'education'
  | 'projects'
  | 'skills'
  | 'certifications'
  | 'contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<ViewState>('home');

  // Whenever view changes, scroll to top smoothly
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 relative selection:bg-slate-300 selection:text-black flex flex-col justify-between">
      {/* Initial Brief Loader */}
      {loading && <InitialLoader onComplete={() => setLoading(false)} />}

      {/* Custom Fluid Cursor & Ambient Spotlight */}
      <CustomCursor />

      {/* Global Metallic Popper Effect on Button Clicks Across All Pages */}
      <ClickPopperOverlay />

      {/* Navigation (Navbar) */}
      <Navbar
        activeView={activeView}
        onNavigate={(view) => setActiveView(view as ViewState)}
      />

      {/* Dynamic Ambient Background Highlights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-[25%] left-[-10%] w-[600px] h-[600px] bg-slate-300/[0.035] rounded-full blur-[140px]" />
        <div className="absolute top-[65%] right-[-10%] w-[650px] h-[650px] bg-zinc-200/[0.03] rounded-full blur-[160px]" />
      </div>

      {/* Main View-Based Content (Home displays ONLY the hero with the 2 vertical buttons; scrolling does not show other sections) */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        {activeView === 'home' && (
          <HeroSection
            onExplore={() => setActiveView('explore-menu')}
            onContact={() => setActiveView('contact')}
          />
        )}

        {activeView === 'explore-menu' && (
          <ExploreMenu
            onSelect={(section) => setActiveView(section)}
            onBack={() => setActiveView('home')}
          />
        )}

        {activeView === 'about' && (
          <AboutSection onBack={() => setActiveView('explore-menu')} />
        )}

        {activeView === 'education' && (
          <EducationSection onBack={() => setActiveView('explore-menu')} />
        )}

        {activeView === 'projects' && (
          <ProjectsSection onBack={() => setActiveView('explore-menu')} />
        )}

        {activeView === 'skills' && (
          <SkillsSection onBack={() => setActiveView('explore-menu')} />
        )}

        {activeView === 'certifications' && (
          <CertificationsSection onBack={() => setActiveView('explore-menu')} />
        )}

        {activeView === 'contact' && (
          <ContactSection onBack={() => setActiveView('home')} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back To Top */}
      <BackToTop />
    </div>
  );
}
