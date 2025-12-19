
import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0F172A] text-white py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
               <div className="flex items-center">
                <span className="text-3xl font-black tracking-tighter text-white">Taskif</span>
                <span className="text-3xl font-black tracking-tighter text-brand-400">AI</span>
               </div>
            </div>
            <p className="text-brand-400 font-bold text-xs uppercase tracking-[0.2em]">
              The Operating System for Brand Intelligence
            </p>
            <p className="text-gray-500 text-xs mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              Malmö, Sweden (Minc Incubator)
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-gray-600 font-bold uppercase text-[10px] tracking-widest mb-2">Legal</span>
              <button 
                onClick={() => onNavigate('policy')} 
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => onNavigate('terms')} 
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Terms of Service
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-gray-600 font-bold uppercase text-[10px] tracking-widest mb-2">Connect</span>
              <a href="https://www.linkedin.com/company/taskif-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:hello@taskifai.com" className="text-gray-400 hover:text-white transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} TaskifAI. All Rights Reserved.</span>
          <span>Designed for Precision Strategy.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
