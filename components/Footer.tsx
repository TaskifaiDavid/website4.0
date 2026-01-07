import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white py-12 border-t border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="text-xl font-bold tracking-tight text-primary-900">TaskifAI</span>
          <p className="text-[10px] text-primary-400 uppercase tracking-[0.2em] font-black mt-2">
            The Brand Intelligence OS. Built in Malmö.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-xs font-bold text-primary-500 uppercase tracking-widest">
          <button onClick={() => onNavigate('home')} className="hover:text-primary-900 transition-colors">Home</button>
          <button onClick={() => onNavigate('articles')} className="hover:text-primary-900 transition-colors">Articles</button>
          <button onClick={() => onNavigate('privacy')} className="hover:text-primary-900 transition-colors">Privacy</button>
          <button onClick={() => onNavigate('security-commitment')} className="hover:text-primary-900 transition-colors">Security</button>
          <button onClick={() => onNavigate('terms')} className="hover:text-primary-900 transition-colors">Terms</button>
        </div>
        
        <div className="text-[10px] font-bold uppercase tracking-widest text-primary-300">
            &copy; {new Date().getFullYear()} TaskifAI AB
        </div>
      </div>
    </footer>
  );
};

export default Footer;