
import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Target, Brain, ArrowRight, Clock, Zap, AlertCircle, Database } from 'lucide-react';

const PROBLEMS = [
  {
    title: "Analysis Paralysis",
    desc: "Hours wasted manually cleaning spreadsheets instead of making decisions.",
    icon: AlertCircle,
  },
  {
    title: "Strategic Drift",
    desc: "Daily actions are disconnected from your quarterly 'North Star' goals.",
    icon: Database,
  },
  {
    title: "Reactive Decisions",
    desc: "Looking at last month's report means you're always one step behind.",
    icon: Zap,
  }
];

const AGENTS = [
  {
    name: "The Orchestrator",
    icon: Brain,
    desc: "The central nervous system. Deconstructs complex queries and delegates tasks to the right specialists.",
    bg: "bg-primary-50"
  },
  {
    name: "The Analyst",
    icon: Search,
    desc: "Deep-dive data node. Cleanses raw ERP metrics and extracts actionable performance patterns instantly.",
    bg: "bg-white"
  },
  {
    name: "The Strategist",
    icon: Target,
    desc: "Aligns generated insights with your North Star. No generic suggestions, only brand-specific strategy.",
    bg: "bg-white"
  },
  {
    name: "The Forecaster",
    icon: TrendingUp,
    desc: "Predictive modeling that warns you about supply chain friction or market shifts 60 days ahead.",
    bg: "bg-white"
  }
];

const ProblemSolution: React.FC = () => {
  return (
    <div id="solution">
      {/* Problem Section: The Data Disconnect */}
      <section className="py-24 bg-white relative border-b border-primary-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tight">The Data Disconnect</h2>
               <p className="text-lg text-primary-900/60 leading-relaxed">
                 Operations managers are drowning in data but starved for wisdom. Dashboards show you <span className="font-bold text-primary-900">what</span> happened, but they fail to explain <span className="font-bold text-primary-900">why</span> it matters.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {PROBLEMS.map((problem, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-white p-10 rounded-2xl border border-primary-100 shadow-sm hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 group text-center"
                 >
                    <div className="w-14 h-14 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 relative group-hover:scale-110 transition-transform duration-300">
                       <problem.icon size={28} strokeWidth={1.5} />
                       <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-primary-400 rounded-full border-[3px] border-white"></div>
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-4">{problem.title}</h3>
                    <p className="text-sm text-primary-900/60 leading-relaxed font-medium">
                      {problem.desc}
                    </p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Solution Section: The Collaborative Network */}
      <section className="py-32 bg-primary-50/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">The Collaborative Network</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight">
              Autonomous <span className="text-primary-500">Intelligence.</span>
            </h2>
            <p className="mt-6 text-primary-900/60 max-w-2xl mx-auto">
              Replacing the chaotic noise of dashboards with a silent, effective board of AI directors working in unison.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENTS.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-primary-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-primary-900/5 transition-all group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300`}>
                  <agent.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{agent.name}</h3>
                <p className="text-sm text-primary-900/60 leading-relaxed mb-6">
                  {agent.desc}
                </p>
                <div className="flex items-center gap-2 text-primary-500 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Node <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProblemSolution;
