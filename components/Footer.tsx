import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold tracking-tight">
              Taskif<span className="text-brand-500">AI</span>
            </span>
            <p className="text-gray-500 text-sm mt-2">
              Malmö, Sweden (Minc Incubator)
            </p>
          </div>
          
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-gray-500 hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-brand-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-brand-400 transition-colors">LinkedIn</a>
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