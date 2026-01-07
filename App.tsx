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
import BlogPage from './components/BlogPage';

export type ViewType = 'home' | 'terms' | 'privacy' | 'security-commitment' | 'articles';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');

  // Helper to update document title for SEO
  const updateTitle = (viewName: ViewType) => {
    const baseTitle = 'TaskifAI';
    switch (viewName) {
      case 'home':
        document.title = `${baseTitle} | Collaborative Brand Intelligence`;
        break;
      case 'terms':
        document.title = `Terms of Service | ${baseTitle}`;
        break;
      case 'privacy':
        document.title = `Privacy Policy | ${baseTitle}`;
        break;
      case 'security-commitment':
        document.title = `Data Security & Sovereignty | ${baseTitle}`;
        break;
      case 'articles':
        document.title = `Insights & Analysis | ${baseTitle}`;
        break;
      default:
        document.title = baseTitle;
    }
  };

  // Sync state with hash for deep-linking
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      let newView: ViewType = 'home';
      
      if (hash === '#terms') {
        newView = 'terms';
      } else if (hash === '#privacy') {
        newView = 'privacy';
      } else if (hash === '#security-commitment') {
        newView = 'security-commitment';
      } else if (hash === '#articles') {
        newView = 'articles';
      }
      
      setView(newView);
      updateTitle(newView);
      
      if (newView !== 'home') {
        window.scrollTo(0, 0);
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
    updateTitle(newView);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary-900 selection:text-white">
      <Navbar 
        onNavigateHome={() => navigateTo('home')} 
        onNavigate={(v) => navigateTo(v)}
        isHome={view === 'home'} 
      />
      
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
        ) : view === 'articles' ? (
          <BlogPage />
        ) : (
          <LegalPage type={view as 'terms' | 'privacy'} />
        )}
      </main>

      <Footer onNavigate={(v) => navigateTo(v)} />
    </div>
  );
};

export default App;