
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigateHome: () => void;
  isHome: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, isHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (!isHome) {
      onNavigateHome();
      // Allow time for navigation to home before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Map menu items to element IDs
  const getTargetId = (item: string) => {
    switch (item) {
      case 'Mission': return 'solution';
      case 'The Board': return 'solution';
      case 'Access': return 'contact';
      default: return 'contact';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-panel border border-white/50 rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm transition-all`}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} className="flex items-center gap-1 group">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-primary-900">Taskif<span className="text-primary-600">AI</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['Mission', 'The Board', 'Access'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => scrollToSection(e, getTargetId(item))}
                className="text-xs font-semibold text-primary-900/70 hover:text-primary-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden md:block bg-primary-600 text-white px-5 py-2 rounded-lg text-xs font-bold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-colors"
          >
            Hire Your AI Team
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
            className="absolute top-full left-4 right-4 bg-white mt-2 border border-primary-50 rounded-xl shadow-xl p-4 flex flex-col gap-2 md:hidden"
          >
             {['Mission', 'The Board', 'Access'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => scrollToSection(e, getTargetId(item))}
                className="text-sm font-semibold text-primary-900 p-3 hover:bg-primary-50 rounded-lg"
              >
                {item}
              </a>
            ))}
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="bg-primary-600 text-white p-3 rounded-lg text-center font-bold mt-2">Hire Your AI Team</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
