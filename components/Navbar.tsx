import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewType } from '../App';

interface NavbarProps {
  onNavigateHome: () => void;
  onNavigate: (view: ViewType) => void;
  isHome: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onNavigate, isHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    const targetId = getTargetId(item);
    
    if (targetId === 'articles') {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        onNavigate('articles');
        return;
    }
    
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (!isHome) {
      onNavigateHome();
      // Allow time for navigation to home before scrolling
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Map menu items to element IDs
  const getTargetId = (item: string) => {
    switch (item) {
      case 'The Problem': return 'problem';
      case 'How It Works': return 'solution';
      case 'Pricing': return 'pricing';
      case 'Security': return 'security';
      case 'Articles': return 'articles';
      default: return 'contact';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-panel border border-primary-200 rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm transition-all`}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} className="flex items-center gap-1 group">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-primary-900">TaskifAI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['The Problem', 'How It Works', 'Pricing', 'Security', 'Articles'].map((item) => (
              <a 
                key={item} 
                href={item === 'Articles' ? '#articles' : `#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleNavClick(e, item)}
                className="text-xs font-bold text-primary-600 hover:text-primary-900 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            onClick={(e) => handleNavClick(e, 'Contact')}
            className="hidden md:block bg-primary-900 text-white px-5 py-2 rounded-lg text-xs font-bold shadow-lg shadow-primary-900/10 hover:bg-black hover:shadow-primary-900/20 transition-all"
          >
            Book a Demo
          </motion.a>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-primary-900">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 bg-white mt-2 border border-primary-100 rounded-xl shadow-xl p-4 flex flex-col gap-2 md:hidden"
          >
             {['The Problem', 'How It Works', 'Pricing', 'Security', 'Articles'].map((item) => (
              <a 
                key={item} 
                href={item === 'Articles' ? '#articles' : `#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-semibold text-primary-900 p-3 hover:bg-primary-50 rounded-lg"
              >
                {item}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleNavClick(e, 'Contact')} className="bg-primary-900 text-white p-3 rounded-lg text-center font-bold mt-2">Book a Demo</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;