
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import SecurityPage from './components/SecurityPage';

export type ViewType = 'home' | 'terms' | 'privacy' | 'security-commitment';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');

  // Sync state with hash for deep-linking
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#terms') {
        setView('terms');
        window.scrollTo(0, 0);
      } else if (hash === '#privacy') {
        setView('privacy');
        window.scrollTo(0, 0);
      } else if (hash === '#security-commitment') {
        setView('security-commitment');
        window.scrollTo(0, 0);
      } else {
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
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
      if (window.location.hash) {
        window.location.hash = ''; 
      }
      window.scrollTo(0, 0);
    } else {
      window.location.hash = newView;
    }
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary-900 selection:text-white">
      <Navbar onNavigateHome={() => navigateTo('home')} isHome={view === 'home'} />
      
      <main className="animate-in">
        {view === 'home' ? (
          <>
            <Hero />
            <SocialProof />
            <ProblemSolution />
            <Pricing />
            <Contact />
          </>
        ) : view === 'security-commitment' ? (
          <SecurityPage />
        ) : (
          <LegalPage type={view as 'terms' | 'privacy'} />
        )}
      </main>

      <Footer onNavigate={(v) => navigateTo(v)} />
    </div>
  );
};

export default App;
