import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

const PRICING_TIERS = [
  {
    id: 'pilot',
    maxResellers: 5,
    name: "Pilot Program",
    price: 499,
    setupFee: 500,
    description: "Perfect for validating the impact of AI on your operations.",
    note: "Max 3 months duration"
  },
  {
    id: 'starter',
    maxResellers: 10,
    name: "Starter",
    price: 799,
    setupFee: 1000,
    description: "For growing brands managing multiple reseller relationships.",
    note: null
  },
  {
    id: 'growth',
    maxResellers: 24,
    name: "Growth",
    price: 1099,
    setupFee: 1000,
    description: "Scale your intelligence across your entire sales network.",
    note: null
  },
  {
    id: 'scale',
    maxResellers: 100, // Arbitrary high number for logic
    name: "Scale",
    price: 1299,
    setupFee: 1000,
    description: "Maximum power for high-volume operations.",
    note: "25+ Resellers"
  }
];

const FEATURES = [
  "Full AI Team Access",
  "Business Context Manager",
  "Automated Data Cleaning",
  "Weekly Insight Reports",
  "Stockout Prediction Alerts",
  "Margin Analysis & Protection",
  "Priority Email & Slack Support"
];

const Pricing: React.FC = () => {
  const [resellerCount, setResellerCount] = useState(3); // Default to Pilot range

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Determine active tier based on slider value
  const activeTier = PRICING_TIERS.find(tier => resellerCount <= tier.maxResellers) || PRICING_TIERS[PRICING_TIERS.length - 1];

  // Calculate progress percentage for the slider background
  // Map 1-30 slider range to percentage
  const sliderPercentage = ((resellerCount - 1) / 29) * 100;

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Invest in Intelligence</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Pricing that scales with your complexity. Start with a pilot to prove the value, then grow as your network expands.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-gray-900/20 text-white relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 items-center">
              
              {/* LEFT COLUMN: Controls & Info */}
              <div className="flex flex-col justify-center h-full">
                
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-2">{activeTier.name}</h3>
                  <p className="text-gray-400 text-sm h-10 lg:h-auto">{activeTier.description}</p>
                </div>

                {/* Price Display */}
                <div className="mb-12">
                  <div className="flex items-baseline gap-1">
                    <span className="text-7xl font-bold tracking-tight">€{activeTier.price}</span>
                    <span className="text-gray-400 font-medium text-lg">/ Month</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-sm text-gray-400">
                    <span>+ €{activeTier.setupFee} setup</span>
                    {activeTier.note && (
                       <span className="bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
                         {activeTier.note}
                       </span>
                    )}
                  </div>
                </div>

                {/* Slider Section */}
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-400 mb-6">
                    <span className="uppercase tracking-wider text-xs">Resellers Managed</span>
                    <span className="text-white font-bold text-lg">{resellerCount > 25 ? "25+" : resellerCount}</span>
                  </div>

                  <div className="relative w-full h-10 flex items-center mb-4">
                    {/* Custom Track */}
                    <div className="absolute w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-brand-500 transition-all duration-100 ease-out"
                         style={{ width: `${sliderPercentage}%` }}
                       ></div>
                    </div>

                    {/* Markers */}
                    <div className="absolute w-full flex justify-between px-1 pointer-events-none top-4">
                      {[1, 5, 10, 25].map((mark) => (
                        <div key={mark} className="flex flex-col items-center gap-1 mt-4">
                           <div className="w-0.5 h-1 bg-gray-600"></div>
                           <span className="text-[10px] text-gray-500 font-medium">{mark}{mark === 25 ? '+' : ''}</span>
                        </div>
                      ))}
                    </div>

                    {/* Input Slider */}
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={resellerCount}
                      onChange={(e) => setResellerCount(parseInt(e.target.value))}
                      className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                    />

                    {/* Custom Thumb (Visual Only - tracks with state) */}
                    <motion.div 
                       className="absolute w-6 h-6 bg-white rounded-full shadow-lg border-2 border-brand-500 pointer-events-none z-10"
                       style={{ left: `calc(${sliderPercentage}% - 12px)` }}
                       layoutId="slider-thumb"
                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Features & CTA */}
              <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700/50 flex flex-col justify-between h-full">
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">What's Included</h4>
                    {/* Features List */}
                    <ul className="space-y-4 mb-8">
                      {FEATURES.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={12} className="text-brand-400" />
                          </div>
                          <span className="text-gray-300 text-sm leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className="w-full py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {activeTier.id === 'pilot' ? 'Apply for Pilot' : 'Get Started'}
                </button>
              </div>

            </div>

          </motion.div>
          
          <p className="text-center text-xs text-gray-400 mt-8">
            Need a custom enterprise plan? <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}} className="underline hover:text-gray-600">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;