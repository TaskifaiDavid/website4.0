import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

const LegalModals: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden relative flex flex-col"
        >
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white z-10">
            <h2 className="text-2xl font-bold text-gray-900">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-600"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-8 text-gray-600 leading-relaxed text-sm space-y-6">
            
            {/* PRIVACY POLICY CONTENT */}
            {type === 'privacy' && (
              <>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Last Updated: {new Date().toLocaleDateString()}</p>
                
                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">1. Introduction</h3>
                  <p>
                    TaskifAI ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. 
                    This privacy policy will inform you as to how we look after your personal data when you visit our website 
                    (taskifai.com) or use our services, and tell you about your privacy rights and how the law protects you.
                    We operate in accordance with the General Data Protection Regulation (GDPR) and Swedish data protection laws.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">2. Controller</h3>
                  <p>
                    TaskifAI is the controller and responsible for your personal data. <br/>
                    <strong>Legal Entity:</strong> David Rydberg (Org.nr: SE19880407637301)<br/>
                    <strong>Address:</strong> Styrbordsgatan 6, 21647 Limhamn, Sweden<br/>
                    <strong>Email:</strong> hello@taskifai.com
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">3. The Data We Collect</h3>
                  <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>Identity Data:</strong> First name, last name.</li>
                    <li><strong>Contact Data:</strong> Email address, company name.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, operating system.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                    <li><strong>Business Data:</strong> Data uploaded by you for processing by our AI agents (e.g., spreadsheets, metrics).</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">4. How We Use Your Data</h3>
                  <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>To provide the AI analysis services you requested (Performance of Contract).</li>
                    <li>To improve our AI models and website functionality (Legitimate Interest).</li>
                    <li>To contact you regarding pilot programs or service updates.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">5. Data Retention</h3>
                  <p>
                    We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, 
                    including for the purposes of satisfying any legal, accounting, or reporting requirements.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">6. Data Sharing & Third Parties</h3>
                  <p>We may share your data with trusted third-party service providers (Data Processors) to operate our business:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><strong>Hosting & Infrastructure:</strong> Digital Ocean (USA/EU)</li>
                    <li><strong>Automation:</strong> Proprietary Python Automation</li>
                    <li><strong>AI Models:</strong> Anthropic Claude (USA/EU - Standard Contractual Clauses applied)</li>
                  </ul>
                  <p className="mt-2">We do not sell your data to third parties.</p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">7. Your Rights</h3>
                  <p>Under the GDPR, you have the right to:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Request access to your personal data.</li>
                    <li>Request correction of your personal data.</li>
                    <li>Request erasure of your personal data.</li>
                    <li>Object to processing of your personal data.</li>
                    <li>Request restriction of processing your personal data.</li>
                    <li>Request transfer of your personal data.</li>
                  </ul>
                </section>
              </>
            )}

            {/* TERMS OF SERVICE CONTENT */}
            {type === 'terms' && (
              <>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">1. Agreement to Terms</h3>
                  <p>
                    By accessing or using TaskifAI, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, 
                    you may not access the service.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">2. Description of Service</h3>
                  <p>
                    TaskifAI provides an AI-powered business intelligence platform. We utilize advanced Large Language Models (LLMs) to process data. 
                    <strong>Important Disclaimer:</strong> AI models can occasionally produce incorrect or misleading information ("hallucinations"). 
                    TaskifAI should be used as a support tool, and all strategic decisions should be reviewed by a human.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">3. User Accounts & Security</h3>
                  <p>
                    You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">4. Intellectual Property</h3>
                  <p>
                    The Service and its original content (excluding data provided by you), features, and functionality are and will remain the exclusive property of David Rydberg (TaskifAI).
                    You retain all rights to the business data you upload to the platform.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">5. Limitation of Liability</h3>
                  <p>
                    To the maximum extent permitted by applicable law (Swedish Law), in no event shall TaskifAI, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                    be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                    or other intangible losses, resulting from your use of the service.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">6. Governing Law</h3>
                  <p>
                    These Terms shall be governed and construed in accordance with the laws of Sweden, without regard to its conflict of law provisions. 
                    Any disputes shall be settled by the District Court of Malmö (Malmö tingsrätt).
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">7. Changes</h3>
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes.
                  </p>
                </section>
              </>
            )}

          </div>
          
          <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LegalModals;