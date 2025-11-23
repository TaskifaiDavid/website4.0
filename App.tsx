import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';

const App: React.FC = () => {
  const [activeLegalDoc, setActiveLegalDoc] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Pricing />
        <Contact />
      </main>
      <Footer onOpenLegal={(type) => setActiveLegalDoc(type)} />
      
      <LegalModals 
        isOpen={activeLegalDoc !== null}
        type={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />
    </div>
  );
};

export default App;