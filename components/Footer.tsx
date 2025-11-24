import React from 'react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-3">
               {/* Custom T Logo SVG */}
               <div className="relative w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                     <path d="M8 30C4 20 16 4 32 8" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round" />
                     <text x="20" y="30" fontSize="28" fontWeight="bold" fontFamily="serif" fill="#FFFFFF" textAnchor="middle">T</text>
                     <path d="M10 34C18 38 36 24 32 8" stroke="#34B37E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
                     <circle cx="32" cy="8" r="2" fill="#34B37E" className="animate-pulse" />
                     <circle cx="8" cy="30" r="1.5" fill="#86EFAC" />
                  </svg>
               </div>
               <span className="text-2xl font-bold tracking-tight text-white">Taskif<span className="text-brand-500">AI</span></span>
            </div>
            <p className="text-brand-400 font-medium text-sm tracking-wide">
              The Operating System for Brand Intelligence
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Malmö, Sweden (Minc Incubator)
            </p>
          </div>
          
          <div className="flex space-x-8 text-sm">
            <button 
              onClick={() => onOpenLegal('privacy')} 
              className="text-gray-500 hover:text-brand-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenLegal('terms')} 
              className="text-gray-500 hover:text-brand-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <a href="https://www.linkedin.com/company/taskif-ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} TaskifAI. Building the future of strategy.
        </div>
      </div>
    </footer>
  );
};

export default Footer;