
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';

export type ViewType = 'home' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');

  // Sync state with hash for deep-linking
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      
      // Handle hash-based routing.
      // We removed checking pathname to avoid issues where the server routing
      // might be sticky or configured unexpectedly during updates.
      if (hash === '#terms') {
        setView('terms');
        window.scrollTo(0, 0);
      } else if (hash === '#privacy') {
        setView('privacy');
        window.scrollTo(0, 0);
      } else {
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    // popstate is still good to listen to for browser back/forward buttons
    window.addEventListener('popstate', handleLocationChange);
    
    // Initial check
    handleLocationChange();

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (newView: ViewType) => {
    if (newView === 'home') {
      // Fix: Avoid pushState which causes SecurityError in blob/iframe contexts.
      // We accept that a trailing '#' might remain in the URL in some browsers.
      if (window.location.hash) {
        window.location.hash = ''; 
      }
      // Also scroll to top explicitly when going home
      window.scrollTo(0, 0);
    } else {
      window.location.hash = newView;
    }
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary-100 selection:text-primary-900">
      <Navbar onNavigateHome={() => navigateTo('home')} isHome={view === 'home'} />
      
      <main className="animate-in">
        {view === 'home' ? (
          <>
            <Hero />
            <SocialProof />
            <ProblemSolution />
            <Contact />
          </>
        ) : (
          <LegalPage type={view as 'terms' | 'privacy'} />
        )}
      </main>

      <Footer onNavigate={(v) => navigateTo(v)} />
    </div>
  );
};

export default App;
