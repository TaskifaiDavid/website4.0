import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Invest in Intelligence</h2>
          <p className="text-gray-500">Simple, transparent pricing for the pilot program.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pilot Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border-2 border-brand-500 relative shadow-2xl shadow-brand-500/10"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
              PILOT ACCESS
            </div>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Pilot</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl font-bold text-gray-900">€499</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">+ €500 setup fee</p>
            </div>
            
            <ul className="space-y-4 mb-8">
               {[
                 "Full AI Team Access",
                 "Business Context Manager",
                 "Weekly Strategic Reports",
                 "Data Cleaning & Integration",
                 "Priority Email Support"
               ].map((item, i) => (
                 <li key={i} className="flex items-center text-gray-700">
                   <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center mr-3 flex-shrink-0">
                     <Check size={12} className="text-brand-600" />
                   </div>
                   {item}
                 </li>
               ))}
            </ul>
            
            <a 
              href="#contact"
              onClick={scrollToContact}
              className="block w-full py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold text-center transition-colors"
            >
              Apply for Pilot
            </a>
          </motion.div>

          {/* Custom Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col justify-between"
          >
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl font-bold text-gray-400">Custom</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Tailored for scale</p>
            </div>
            
            <ul className="space-y-4 mb-8">
               {[
                 "Unlimited Agents",
                 "Custom Data Connectors",
                 "Dedicated Success Manager",
                 "SLA & 24/7 Support",
                 "On-premise Options"
               ].map((item, i) => (
                 <li key={i} className="flex items-center text-gray-500">
                   <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-3 flex-shrink-0">
                     <Check size={12} className="text-gray-500" />
                   </div>
                   {item}
                 </li>
               ))}
            </ul>
            
            <a 
              href="#contact"
              onClick={scrollToContact}
              className="block w-full py-4 bg-white border border-gray-200 hover:bg-gray-100 text-gray-900 rounded-xl font-bold text-center transition-colors"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;