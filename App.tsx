
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';

export type ViewType = 'home' | 'terms' | 'policy';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');

  // Handle scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // Sync state with hash for basic deep-linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#terms') setView('terms');
      else if (hash === '#policy') setView('policy');
      else setView('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (newView: ViewType) => {
    if (newView === 'home') window.location.hash = '';
    else window.location.hash = newView;
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar onNavigateHome={() => navigateTo('home')} isHome={view === 'home'} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <SocialProof />
            <ProblemSolution />
            <Contact />
          </>
        ) : (
          <LegalPage type={view as 'terms' | 'policy'} />
        )}
      </main>

      <Footer onNavigate={(v) => navigateTo(v)} />
    </div>
  );
};

export default App;
