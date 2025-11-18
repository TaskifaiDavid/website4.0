import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
          Trusted by our partners
        </p>
        <div className="flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
            {/* Recreated BIBBI PARIS Logo based on user image */}
            <div className="flex flex-col items-center justify-center select-none transform hover:scale-105 transition-transform duration-500 cursor-default">
                <h3 className="text-6xl md:text-7xl font-black tracking-tight text-black leading-none" style={{ fontFamily: 'sans-serif' }}>BIBBI</h3>
                <span className="text-xl md:text-2xl font-normal tracking-[0.2em] text-black mt-1" style={{ fontFamily: 'sans-serif' }}>PARIS</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;