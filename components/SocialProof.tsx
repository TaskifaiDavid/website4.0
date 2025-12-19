import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
          Trusted by our partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
            
            {/* BIBBI PARIS Logo */}
            <div className="flex flex-col items-center justify-center select-none transform hover:scale-105 transition-transform duration-500 cursor-default">
                <h3 className="text-5xl md:text-6xl font-black tracking-tight text-black leading-none">BIBBI</h3>
                <span className="text-lg md:text-xl font-normal tracking-[0.2em] text-black mt-1">PARIS</span>
            </div>

            {/* MINC Logo */}
            <div className="flex items-center justify-center select-none transform hover:scale-105 transition-transform duration-500 cursor-default">
                <span className="text-6xl md:text-7xl font-bold text-[#FF8A5B] tracking-tighter lowercase mb-2">minc.</span>
            </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;