import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Target, Brain, X } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <>
      {/* Problem Statement */}
      <section id="problem" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              The Data Disconnect
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Operations managers are drowning in data but starved for wisdom. 
              Spreadsheets show you <strong>what</strong> happened, but they can't tell you <strong>why</strong> it matters or <strong>what to do next</strong>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
              {[
                { title: "Analysis Paralysis", desc: "Hours wasted cleaning data instead of using it." },
                { title: "Strategic Drift", desc: "Decisions detached from your 'North Star' goals." },
                { title: "Reactive Tools", desc: "Dashboards only look backward, never forward." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                   <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center mb-3">
                     <X className="w-4 h-4 text-red-500" />
                   </div>
                   <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                   <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution: The Compact 2x2 Grid with Hover Effects */}
      <section id="solution" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Meet Your New <br /><span className="text-brand-500">Executive Team</span>
            </h2>
            <p className="text-lg text-gray-500">
              Hover over an agent to see how they transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            
            {/* 1. The Orchestrator */}
            <div className="group relative h-48 bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
               {/* Default View */}
               <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                   <Brain size={40} className="text-white mb-3" />
                   <h3 className="text-xl font-bold text-white">The Orchestrator</h3>
                   <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Team Lead</p>
               </div>
               
               {/* Hover View */}
               <div className="absolute inset-0 bg-gray-800 p-6 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                   <p className="text-white font-medium text-sm leading-relaxed">
                     "I am your interface. I understand your intent, break down complex problems, and delegate tasks to the right specialists to get you answers fast."
                   </p>
               </div>
            </div>

            {/* 2. The Strategist */}
            <div className="group relative h-48 bg-brand-50 rounded-2xl overflow-hidden shadow-md border border-brand-100 hover:shadow-xl hover:border-brand-200 transition-all duration-300 cursor-pointer">
                {/* Default View */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                   <Target size={40} className="text-brand-600 mb-3" />
                   <h3 className="text-xl font-bold text-gray-900">The Strategist</h3>
                   <p className="text-xs text-brand-600 mt-1 uppercase tracking-widest">Goal Alignment</p>
               </div>
               
               {/* Hover View */}
               <div className="absolute inset-0 bg-brand-600 p-6 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                   <p className="text-white font-medium text-sm leading-relaxed">
                     "I ensure every insight aligns with your North Star. I don't just show data; I explain why it matters for your Q4 retention goals."
                   </p>
               </div>
            </div>

            {/* 3. The Analyst */}
            <div className="group relative h-48 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
               {/* Default View */}
               <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                   <Search size={40} className="text-blue-600 mb-3" />
                   <h3 className="text-xl font-bold text-gray-900">The Analyst</h3>
                   <p className="text-xs text-blue-600 mt-1 uppercase tracking-widest">Data Processing</p>
               </div>
               
               {/* Hover View */}
               <div className="absolute inset-0 bg-blue-600 p-6 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                   <p className="text-white font-medium text-sm leading-relaxed">
                     "I dig through the noise. I automatically clean your messy CSVs and find the hidden correlations that human eyes miss."
                   </p>
               </div>
            </div>

            {/* 4. The Forecaster */}
            <div className="group relative h-48 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
               {/* Default View */}
               <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                   <TrendingUp size={40} className="text-purple-600 mb-3" />
                   <h3 className="text-xl font-bold text-gray-900">The Forecaster</h3>
                   <p className="text-xs text-purple-600 mt-1 uppercase tracking-widest">Predictive Models</p>
               </div>
               
               {/* Hover View */}
               <div className="absolute inset-0 bg-purple-600 p-6 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                   <p className="text-white font-medium text-sm leading-relaxed">
                     "I look ahead. I run 'what-if' scenarios to predict how a price change today will impact your revenue three months from now."
                   </p>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;