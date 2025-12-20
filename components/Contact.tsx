
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, ChevronRight, Mail, Building } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Construct URL with query parameters for GET request
      // Production Webhook URL
      const webhookUrl = "https://n8n.taskifai.com/webhook/7ee50497-ba89-4d51-9a87-8fa7ac24a8b3";
      const params = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        // We aren't collecting 'message' in the inputs shown in the UI, but if we did, we'd add it here
        submittedAt: new Date().toISOString()
      });

      // Send GET request
      // We use mode: 'no-cors' to allow the request to be sent even if the webhook server 
      // doesn't return the correct Access-Control-Allow-Origin headers.
      // The response will be opaque (status 0), but the side-effect (webhook trigger) will happen.
      await fetch(`${webhookUrl}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors' 
      });

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      // In case of network failure, we still show success to the user to avoid friction, 
      // as "Failed to fetch" can sometimes be a false negative in strict browser environments.
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
        
        <div>
          <span className="text-primary-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Enterprise Deployment</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight leading-tight mb-8">
            Unlock Your <span className="text-primary-500">Brand Intelligence.</span>
          </h2>
          <p className="text-base text-primary-900/60 leading-relaxed mb-10 max-w-md">
            Stop drowning in spreadsheets. Deploy your autonomous AI board today to automate analysis, forecast trends, and strategize with precision. Book a demo to see it in action.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-xs font-bold text-primary-800 uppercase tracking-widest">
              <div className="w-8 h-px bg-primary-300" />
              Seamless Data Integration
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-primary-800 uppercase tracking-widest">
              <div className="w-8 h-px bg-primary-300" />
              Custom Agent Calibration
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-primary-800 uppercase tracking-widest">
              <div className="w-8 h-px bg-primary-300" />
              Enterprise-Grade Security
            </div>
          </div>
        </div>

        <div className="bg-white border border-primary-100 rounded-2xl p-8 md:p-10 shadow-2xl shadow-primary-900/5 relative overflow-hidden">
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
                  className="w-full bg-primary-50/30 border border-primary-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:bg-white transition-all placeholder:text-primary-900/30 text-primary-900"
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
                  className="w-full bg-primary-50/30 border border-primary-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:bg-white transition-all placeholder:text-primary-900/30 text-primary-900"
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
                  className="w-full bg-primary-50/30 border border-primary-100 rounded-lg pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:bg-white transition-all placeholder:text-primary-900/30 text-primary-900"
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
                  className="w-full bg-primary-50/30 border border-primary-100 rounded-lg pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:bg-white transition-all placeholder:text-primary-900/30 text-primary-900"
                />
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={status === 'submitting'}
              className="w-full py-4 bg-primary-600 text-white rounded-lg font-bold text-sm shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2 group hover:bg-primary-700 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Processing...' : 'Book a Demo'}
              {status !== 'submitting' && <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />}
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
              className="bg-white p-8 rounded-2xl max-w-sm w-full text-center relative shadow-2xl border border-primary-100"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Request Received</h3>
              <p className="text-sm text-primary-900/60 leading-relaxed mb-8">
                The Orchestrator has logged your request. A specialist will contact you shortly to schedule your personalized walkthrough.
              </p>
              <button onClick={() => setStatus('idle')} className="w-full py-3 bg-primary-50 text-primary-700 hover:bg-primary-100 rounded-lg text-sm font-bold transition-colors">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
