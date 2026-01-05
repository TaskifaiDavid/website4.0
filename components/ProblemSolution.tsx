
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, Brain, Database, Layers, Shield, Globe, Lock, FileText, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <div id="problem-solution-wrapper">
      
      {/* 1. PROBLEM SECTION: The Hidden Cost */}
      <section id="problem" className="py-24 bg-white relative border-b border-primary-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tight">The Hidden Cost of Fragmented Data</h2>
               <p className="text-lg text-primary-500 leading-relaxed max-w-3xl mx-auto">
                 Every week, operations managers lose 10-20 hours manually reconciling spreadsheets. The real cost isn't the time - it's the decisions you can't make because you're stuck in Excel.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="bg-white p-10 rounded-2xl border border-primary-100 shadow-sm hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 group text-center"
               >
                  <div className="w-14 h-14 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center text-primary-800 mb-6 group-hover:scale-110 transition-transform duration-300">
                     <Clock size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">The Spreadsheet Prison</h3>
                  <p className="text-sm text-primary-500 leading-relaxed font-medium">
                    Operations teams spend 40+ hours monthly just cleaning data. Different formats from every reseller. Manual SKU matching. Version control chaos. By the time your dashboard is ready, the insights are already outdated.
                  </p>
               </motion.div>

               {/* Card 2 */}
               <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="bg-white p-10 rounded-2xl border border-primary-100 shadow-sm hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 group text-center"
               >
                  <div className="w-14 h-14 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center text-primary-800 mb-6 group-hover:scale-110 transition-transform duration-300">
                     <AlertCircle size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">The Blind Spot Crisis</h3>
                  <p className="text-sm text-primary-500 leading-relaxed font-medium">
                    You can see what happened last month, but you can't see what's about to happen next week. Stockouts hit before you can react. Overstock ties up cash you need elsewhere. Reactive decisions cost you 6 figures annually.
                  </p>
               </motion.div>

               {/* Card 3 */}
               <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="bg-white p-10 rounded-2xl border border-primary-100 shadow-sm hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 group text-center"
               >
                  <div className="w-14 h-14 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center text-primary-800 mb-6 group-hover:scale-110 transition-transform duration-300">
                     <Brain size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">The Intelligence Gap</h3>
                  <p className="text-sm text-primary-500 leading-relaxed font-medium">
                    Generic BI tools show you graphs. They don't tell you <em>why</em> sales dropped or <em>what</em> to do about it. ChatGPT can't read your proprietary files. You need intelligence that understands your business.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 2. DATA SOVEREIGNTY (SECURITY) SECTION */}
      <section id="security" className="py-24 bg-primary-900 text-white relative overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
             <div className="absolute transform rotate-45 bg-white w-96 h-96 top-0 right-0 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="text-primary-300 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Data Sovereignty</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Your Competitive Intelligence Stays Yours.</h2>
                <p className="mt-6 text-primary-200 text-lg">
                  We know what we're asking. Your reseller data contains margins, velocities, and channel strategies your competitors would pay to see. Here's how we protect it.
                </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Sec Card 1 */}
             <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 p-6 rounded-xl">
                <Shield className="text-primary-400 mb-4" size={24} />
                <h3 className="text-lg font-bold mb-3">The No-Train Guarantee</h3>
                <p className="text-sm text-primary-200 leading-relaxed">
                  Unlike consumer AI tools, your sales data is processed in isolated sessions and immediately discarded. We use Anthropic's enterprise API - your data never trains their models.
                </p>
             </div>

             {/* Sec Card 2 */}
             <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 p-6 rounded-xl">
                <Globe className="text-primary-400 mb-4" size={24} />
                <h3 className="text-lg font-bold mb-3">European Residency</h3>
                <p className="text-sm text-primary-200 leading-relaxed">
                  Hosted in DigitalOcean's German and Dutch data centers. We're headquartered in Malmö, Sweden, and built GDPR compliance into our architecture from day one.
                </p>
             </div>

             {/* Sec Card 3 */}
             <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 p-6 rounded-xl">
                <Lock className="text-primary-400 mb-4" size={24} />
                <h3 className="text-lg font-bold mb-3">Bank-Grade Encryption</h3>
                <p className="text-sm text-primary-200 leading-relaxed">
                  AES-256 at Rest. TLS 1.3 in Transit. Row-Level Security ensures mathematical isolation—no query can ever access another customer's data.
                </p>
             </div>

             {/* Sec Card 4 */}
             <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 p-6 rounded-xl">
                <FileText className="text-primary-400 mb-4" size={24} />
                <h3 className="text-lg font-bold mb-3">We'll Sign Your NDA</h3>
                <p className="text-sm text-primary-200 leading-relaxed">
                  We execute mutual Non-Disclosure Agreements before any data integration. Your trade secrets and margins are legally protected.
                </p>
             </div>
          </div>

          {/* Badges */}
          <div className="mt-12 pt-8 border-t border-primary-800 flex flex-wrap gap-8 items-center justify-center opacity-60">
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><CheckCircle size={14}/> SOC 2 Type II</span>
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><CheckCircle size={14}/> ISO 27001</span>
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><CheckCircle size={14}/> GDPR Compliant</span>
             <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><CheckCircle size={14}/> Anthropic Enterprise</span>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION: 3 Layers */}
      <section id="solution" className="py-24 bg-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">The Mechanism</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight">
              From Chaos to Clarity in Three Layers
            </h2>
            <p className="mt-6 text-primary-500 max-w-2xl mx-auto text-lg">
              TaskifAI isn't just another dashboard. It's the complete data infrastructure that takes you from fragmented reseller reports to strategic intelligence - automatically.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Layer 1 */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white border border-primary-200 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col md:flex-row gap-8 items-start"
            >
               <div className="w-16 h-16 shrink-0 bg-primary-50 rounded-xl flex items-center justify-center text-primary-900">
                 <Database size={32} />
               </div>
               <div>
                 <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">Layer 1: The Foundation</span>
                 <h3 className="text-2xl font-bold text-primary-900 mb-3">We Parse What Others Can't</h3>
                 <p className="text-primary-600 mb-4 leading-relaxed max-w-3xl">
                   Upload any reseller report - PDF, CSV, XLS, whatever format they send. Our proprietary parsing engine detects patterns, standardizes SKUs, cleans anomalies, and merges everything into a single source of truth. This is the 'unglamorous' infrastructure layer that makes everything else possible.
                 </p>
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-800 rounded text-xs font-bold">
                   <CheckCircle size={12} />
                   Bibbi Parfum: 40 hours → 2 hours monthly (75% reduction)
                 </div>
               </div>
            </motion.div>

            {/* Layer 2 */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-white border border-primary-200 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col md:flex-row gap-8 items-start"
            >
               <div className="w-16 h-16 shrink-0 bg-primary-50 rounded-xl flex items-center justify-center text-primary-900">
                 <Layers size={32} />
               </div>
               <div>
                 <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">Layer 2: The Intelligence</span>
                 <h3 className="text-2xl font-bold text-primary-900 mb-3">All Your Sales Data, One Platform</h3>
                 <p className="text-primary-600 mb-4 leading-relaxed max-w-3xl">
                   See wholesale and DTC performance side by side. Track sell-through rates by channel, region, and SKU. Identify your top performers and your risk zones. Connect Shopify and WooCommerce in minutes - no technical setup required.
                 </p>
                 <p className="text-sm font-bold text-primary-800">
                   Feature Highlight: Custom dashboards built around your KPIs, not generic templates.
                 </p>
               </div>
            </motion.div>

            {/* Layer 3 */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white border border-primary-200 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col md:flex-row gap-8 items-start"
            >
               <div className="w-16 h-16 shrink-0 bg-primary-50 rounded-xl flex items-center justify-center text-primary-900">
                 <Brain size={32} />
               </div>
               <div>
                 <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">Layer 3: The Insight</span>
                 <h3 className="text-2xl font-bold text-primary-900 mb-3">Strategic Intelligence, Not Generic Suggestions</h3>
                 <p className="text-primary-600 mb-4 leading-relaxed max-w-3xl">
                   Our AI agents analyze your data through the lens of your business goals. The Analyst spots patterns. The Forecaster predicts stockouts 60 days ahead. The Strategist filters every recommendation through your brand positioning. You get insights you can act on.
                 </p>
                 <p className="text-sm italic text-primary-500">
                   "Unlike ChatGPT, our AI is trained on YOUR historical data and anchored to YOUR North Star metrics."
                 </p>
               </div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ProblemSolution;
