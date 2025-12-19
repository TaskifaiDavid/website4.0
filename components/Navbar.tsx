
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigateHome: () => void;
  isHome: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, isHome }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (!isHome) {
      onNavigateHome();
      // Delay scroll until home view is mounted
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Mission', id: 'problem' },
    { name: 'The Team', id: 'solution' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl shadow-teal-950/10 rounded-full px-6 py-2.5 pointer-events-auto flex items-center justify-between gap-8 md:min-w-[550px]">
          {/* Logo - Text Only */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigateHome(); }}
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center">
              <span className="text-3xl font-black tracking-tighter text-[#0F172A]">Taskif</span>
              <span className="text-3xl font-black tracking-tighter text-[#0D9488]">AI</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-teal-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-[#0F172A] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#0D9488] transition-all duration-300 shadow-lg shadow-teal-900/10"
            >
              Get Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 focus:outline-none p-1"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-24 z-40 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden md:hidden"
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="block px-4 py-4 text-lg font-bold text-gray-800 hover:bg-gray-50 rounded-2xl"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="block w-full text-center px-4 py-4 bg-teal-600 text-white font-bold rounded-2xl shadow-xl shadow-teal-500/20"
                >
                  Get Early Access
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
