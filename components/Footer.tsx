
import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white py-6 border-t border-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold tracking-tight text-primary-900">Taskif<span className="text-primary-600">AI</span></span>
          <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-primary-300">
            &copy; {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-semibold text-primary-600">
          <button onClick={() => onNavigate('home')} className="hover:text-primary-900 transition-colors">Home</button>
          <button onClick={() => onNavigate('privacy')} className="hover:text-primary-900 transition-colors">Privacy Policy</button>
          <button onClick={() => onNavigate('terms')} className="hover:text-primary-900 transition-colors">Terms of Service</button>
        </div>
        
        <div className="md:hidden text-[10px] font-bold uppercase tracking-widest text-primary-300">
            &copy; {new Date().getFullYear()} TaskifAI
        </div>
      </div>
    </footer>
  );
};

export default Footer;
