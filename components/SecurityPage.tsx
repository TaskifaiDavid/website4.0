
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ShieldCheck, Lock, Server, Brain, FileText, Globe, Key, Eye, AlertCircle } from 'lucide-react';

const SecurityPage: React.FC = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const SidebarItem = ({ id, title, icon: Icon }: { id: string, title: string, icon: any }) => (
    <button 
      onClick={() => scrollToSection(id)}
      className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm font-medium text-primary-600 hover:bg-primary-50 hover:text-primary-900 rounded-lg transition-colors group"
    >
      <Icon size={16} className="text-primary-300 group-hover:text-primary-500 transition-colors" />
      {title}
    </button>
  );

  return (
    <div className="pt-32 pb-32 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.button
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.location.hash = ''}
          className="flex items-center gap-2 text-primary-500 hover:text-primary-700 transition-colors mb-12 font-bold text-sm uppercase tracking-wider group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 items-start">
          
          {/* Sidebar Navigation */}
          <div className="hidden lg:block sticky top-32">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary-400 mb-6 pl-4">
              Security Navigation
            </h3>
            <nav className="space-y-1">
              <SidebarItem id="sec-1" title="Executive Summary" icon={FileText} />
              <SidebarItem id="sec-2" title="Core Philosophy" icon={ShieldCheck} />
              <SidebarItem id="sec-3" title="Infrastructure" icon={Server} />
              <SidebarItem id="sec-4" title="AI & Privacy" icon={Brain} />
              <SidebarItem id="sec-5" title="GDPR & Compliance" icon={Globe} />
              <SidebarItem id="sec-6" title="Confidentiality" icon={Key} />
              <SidebarItem id="sec-7" title="Conclusion" icon={AlertCircle} />
            </nav>
          </div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-slate prose-sm md:prose-base max-w-none text-primary-900/80 headings:font-bold headings:text-primary-900 headings:tracking-tight"
          >
            <div className="border-b border-primary-100 pb-8 mb-12">
              <h1 className="text-4xl font-extrabold text-primary-900 mb-4 tracking-tight">Data Security & Privacy Commitment</h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-mono text-primary-500">
                <span>Date: December 2025</span>
                <span className="hidden sm:inline">•</span>
                <span>Version: 1.1</span>
                <span className="hidden sm:inline">•</span>
                <span>Confidentiality: Public / Client Distribution</span>
              </div>
            </div>

            <section id="sec-1" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-primary-300">1.</span> Executive Summary
              </h2>
              <p>
                At TaskifAI, we understand that for consumer brands, data is not just an asset, it is your competitive advantage. As the operating system for your brand intelligence, we treat the security, privacy, and integrity of your data as our primary operational directive.
              </p>
              <p>
                This document outlines the technical and procedural measures TaskifAI employs to secure your data. Our architecture leverages world-class infrastructure providers and strictly enforced data governance policies to ensure that your proprietary information remains <strong>private, encrypted, and protected</strong>.
              </p>
            </section>

            <section id="sec-2" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-primary-300">2.</span> Our Core Security Philosophy
              </h2>
              <p>Our security strategy is built on three pillars:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Isolation:</strong> Your data is logically separated from other customers.</li>
                <li><strong>Encryption:</strong> Data is encrypted both in transit and at rest.</li>
                <li><strong>Sovereignty:</strong> You own your data. We do not use your proprietary metrics to train public AI models.</li>
              </ol>
            </section>

            <section id="sec-3" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-primary-300">3.</span> Infrastructure & Technology Stack
              </h2>
              <p>
                TaskifAI is built on a foundation of industry-leading infrastructure providers, selected for their rigorous compliance certifications and security standards.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">3.1 Cloud Infrastructure: DigitalOcean</h3>
              <p>Our platform is hosted on <strong>DigitalOcean</strong>, a premier cloud infrastructure provider.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Physical Security:</strong> Data centers feature 24/7 manned security, biometric scanners, and strict access controls.</li>
                <li><strong>Compliance:</strong> DigitalOcean is certified for SOC 2 Type II, SOC 3, and ISO/IEC 27001:2013.</li>
                <li><strong>Regional Compliance:</strong> Our infrastructure is deployed in European data centers to ensure compliance with local data residency requirements and GDPR.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">3.2 Database Security: Supabase (PostgreSQL)</h3>
              <p>We utilize <strong>Supabase</strong>, built upon the industry-standard PostgreSQL database, to manage your data.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Encryption at Rest:</strong> All user data stored on disk is encrypted using the industry-standard AES-256 algorithm. Even if physical storage media were compromised, the data would remain unreadable.</li>
                <li><strong>Encryption in Transit:</strong> All communications between your dashboard, our API, and the database are encrypted via SSL/TLS (HTTPS).</li>
                <li><strong>Row-Level Security (RLS):</strong> We implement strict Row-Level Security policies at the database level. This ensures that no query can ever access data belonging to another tenant, providing a mathematical guarantee of data isolation.</li>
              </ul>
            </section>

            <section id="sec-4" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-primary-300">4.</span> Artificial Intelligence & Data Privacy
              </h2>
              <p>The most common concern regarding AI is: <em>"Will my sales data be used to train ChatGPT or other public models?"</em></p>
              <p className="font-bold text-lg text-primary-900">The answer is No.</p>

              <h3 className="text-xl font-bold mt-8 mb-4">4.1 The AI Provider: Anthropic</h3>
              <p>We utilize the <strong>Anthropic API</strong> (Claude) for our intelligence layer. We have selected Anthropic specifically for their "Constitution AI" approach and strict enterprise data policies.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Zero Training Policy:</strong> Under our commercial agreement with Anthropic, data submitted to the API is <strong>not</strong> used to train their foundation models. Your data effectively enters a "walled garden" for processing and is then discarded by the model.</li>
                <li><strong>Stateless Processing:</strong> The AI analyzes the data provided in the prompt context to generate insights (e.g., "Predict stockout risk") and returns the answer. It does not retain a memory of your specific sales figures after the session closes.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">4.2 The TaskifAI Protection Layer</h3>
              <p>Before any data reaches the AI model, it passes through our proprietary "Analyst Agent" layer:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Anonymization:</strong> Where possible, sensitive PII (Personal Identifiable Information) is redacted or anonymized before analysis.</li>
                <li><strong>Context-Only Transmission:</strong> We only send the minimum amount of data required to answer a specific query. We do not upload your entire historical database to the AI context window.</li>
              </ul>
            </section>

            <section id="sec-5" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-primary-300">5.</span> GDPR & Compliance
              </h2>
              <p>As a company headquartered in Malmö, Sweden, TaskifAI is designed with <strong>GDPR (General Data Protection Regulation)</strong> at its core.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Data Processor Agreement (DPA):</strong> We provide a standard DPA to all European customers, outlining our responsibilities as a Data Processor and your rights as a Data Controller.</li>
                <li><strong>Right to Erasure:</strong> Our architecture supports full data deletion. If you choose to leave the platform, your data is permanently scrubbed from our active databases and backups in accordance with retention schedules.</li>
              </ul>
            </section>

            <section id="sec-6" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-primary-300">6.</span> Confidentiality & NDAs
              </h2>
              <p>We recognize the sensitive nature of the data you entrust to us.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Non-Disclosure Agreements (NDA):</strong> TaskifAI is fully prepared to execute a mutual Non-Disclosure Agreement (NDA) prior to any data integration or deeper commercial engagement. This legally binds us to strict confidentiality standards regarding your trade secrets, financial metrics, and strategic plans.</li>
              </ul>
            </section>

            <section id="sec-7" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-primary-300">7.</span> Conclusion
              </h2>
              <p>
                Your trust is essential to our business model. TaskifAI provides the power of advanced AI strategy without compromising the security of your proprietary data. We combine the flexibility of modern AI with the rigidity of enterprise banking standards.
              </p>
              <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-200">
                <p className="mb-2 font-medium">Have specific questions?</p>
                <p>
                  If you have specific security questionnaires or require a custom Data Processing Agreement (DPA), please contact our security team at <a href="mailto:security@taskifai.com" className="font-bold text-primary-900 underline">security@taskifai.com</a>.
                </p>
              </div>
            </section>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
