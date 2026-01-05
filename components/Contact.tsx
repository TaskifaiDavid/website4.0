
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight, Mail, Building, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', company: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-primary-50 border-t border-primary-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
        
        <div>
          <span className="text-primary-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight leading-tight mb-8">
            Ready to Unify Your Sales Data?
          </h2>
          <p className="text-base text-primary-600 leading-relaxed mb-10 max-w-md">
            Book a personalized demo to see how TaskifAI can transform your chaotic reseller reports into a clean, strategic advantage.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-xs font-bold text-primary-800 uppercase tracking-widest">
              <div className="w-8 h-px bg-primary-400" />
              Annual Contract Discounts
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-primary-800 uppercase tracking-widest">
              <div className="w-8 h-px bg-primary-400" />
              SOC 2 Type II Secure
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-primary-800 uppercase tracking-widest">
              <div className="w-8 h-px bg-primary-400" />
              Dedicated Onboarding
            </div>
          </div>
        </div>

        <div className="bg-white border border-primary-200 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-primary-400">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full bg-primary-50 border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-900 focus:bg-white transition-all placeholder:text-primary-300 text-primary-900"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-primary-400">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full bg-primary-50 border border-primary-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-900 focus:bg-white transition-all placeholder:text-primary-300 text-primary-900"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase text-primary-400">Work Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-300" />
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-primary-50 border border-primary-200 rounded-lg pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary-900 focus:bg-white transition-all placeholder:text-primary-300 text-primary-900"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase text-primary-400">Company</label>
              <div className="relative">
                <Building size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-300" />
                <input
                  type="text"
                  required
                  placeholder="ACME Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-primary-50 border border-primary-200 rounded-lg pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary-900 focus:bg-white transition-all placeholder:text-primary-300 text-primary-900"
                />
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={status === 'submitting'}
              className="w-full py-4 bg-primary-900 text-white rounded-lg font-bold text-sm shadow-lg shadow-primary-900/20 flex items-center justify-center gap-2 group hover:bg-black transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Scheduling...' : 'Book a Demo'}
              {status !== 'submitting' && <Calendar size={18} className="group-hover:scale-110 transition-transform" />}
            </motion.button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-primary-900/20 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl max-w-sm w-full text-center relative shadow-2xl border border-primary-200"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-primary-900" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Request Received</h3>
              <p className="text-sm text-primary-500 leading-relaxed mb-8">
                Thanks for your interest in TaskifAI. Our team will contact you shortly to schedule your personalized demo.
              </p>
              <button onClick={() => setStatus('idle')} className="w-full py-3 bg-primary-900 text-white hover:bg-black rounded-lg text-sm font-bold transition-colors">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
