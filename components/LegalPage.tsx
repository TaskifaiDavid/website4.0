
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, FileText, ShieldCheck, Globe, Lock, Scale, Database, Server, Info, Brain, AlertTriangle, Eye, Layers } from 'lucide-react';

interface LegalPageProps {
  type: 'terms' | 'privacy';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isTerms = type === 'terms';

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
              {isTerms ? 'Terms Navigation' : 'Privacy Navigation'}
            </h3>
            <nav className="space-y-1">
              {isTerms ? (
                <>
                  <SidebarItem id="t1" title="Introduction" icon={Info} />
                  <SidebarItem id="t2" title="Definitions" icon={FileText} />
                  <SidebarItem id="t3" title="License & Use" icon={Layers} />
                  <SidebarItem id="t4" title="Data & AI Policy" icon={Database} />
                  <SidebarItem id="t5" title="Warranties" icon={AlertTriangle} />
                  <SidebarItem id="t6" title="Liability" icon={Scale} />
                  <SidebarItem id="t7" title="Confidentiality" icon={Lock} />
                  <SidebarItem id="t8" title="Termination" icon={ShieldCheck} />
                  <SidebarItem id="t10" title="Governing Law" icon={Globe} />
                </>
              ) : (
                <>
                  <SidebarItem id="p1" title="Introduction" icon={Info} />
                  <SidebarItem id="p2" title="Data Collected" icon={Database} />
                  <SidebarItem id="p3" title="AI Usage Policy" icon={Brain} />
                  <SidebarItem id="p4" title="Infrastructure" icon={Server} />
                  <SidebarItem id="p5" title="Security" icon={ShieldCheck} />
                  <SidebarItem id="p6" title="Your Rights" icon={Scale} />
                  <SidebarItem id="p7" title="Retention" icon={Layers} />
                </>
              )}
            </nav>
          </div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-slate prose-sm md:prose-base max-w-none text-primary-900/80 headings:font-bold headings:text-primary-900 headings:tracking-tight"
          >
            {isTerms ? <TermsContent /> : <PrivacyContent />}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const TermsContent = () => (
  <div className="space-y-16">
    <div className="border-b border-primary-100 pb-8">
      <h1 className="text-4xl font-extrabold text-primary-900 mb-4 tracking-tight">Terms of Service</h1>
      <p className="text-primary-500 font-mono text-sm">Last Updated: December 19, 2025</p>
    </div>

    <section id="t1" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">01.</span> Introduction
      </h2>
      <p>
        These Terms of Service (the "Agreement") constitute a binding legal agreement between <strong>TaskifAI</strong> (Reg. No. SE880407637301, headquartered in Malmö, Sweden ("Supplier", "we", "us"), and you ("Customer", "User").
      </p>
      <p>
        By accessing or using the TaskifAI platform (the "Service"), you agree to be bound by this Agreement. If you are entering into this Agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity.
      </p>
    </section>

    <section id="t2" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">02.</span> Definitions
      </h2>
      <ul className="space-y-2 list-disc pl-5">
        <li><strong>"Service"</strong>: The TaskifAI brand intelligence operating system, including its AI agents, dashboards, and analytics tools.</li>
        <li><strong>"Customer Data"</strong>: All proprietary metrics, sales data, trade secrets, and content uploaded by the Customer to the Service.</li>
        <li><strong>"AI Outputs"</strong>: The insights, reports, and suggestions generated by the Service based on Customer Data.</li>
        <li><strong>"Confidential Information"</strong>: As defined in Section 7.</li>
      </ul>
    </section>

    <section id="t3" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">03.</span> License and Use of Service
      </h2>
      <h3 className="text-lg font-bold mt-6 mb-2">3.1 Limited License</h3>
      <p>Subject to payment of applicable fees, we grant you a non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes.</p>
      
      <h3 className="text-lg font-bold mt-6 mb-2">3.2 Restrictions</h3>
      <p>You shall not:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Reverse engineer, decompile, or attempt to extract the source code or algorithms of the Service.</li>
        <li>Use the Service to build a competing product.</li>
        <li>Use the Service for any illegal or unauthorized purpose.</li>
        <li>Input data that violates the rights of any third party or applicable laws.</li>
      </ul>
    </section>

    <section id="t4" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">04.</span> Data Sovereignty & AI Policy
      </h2>
      
      <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 mb-6">
        <h3 className="text-lg font-bold mb-2 text-primary-900">4.1 Data Ownership</h3>
        <p className="mb-0"><strong>You own your data.</strong> TaskifAI claims no intellectual property rights over the Customer Data you provide.</p>
      </div>

      <h3 className="text-lg font-bold mt-6 mb-2">4.2 License to Process</h3>
      <p>You grant TaskifAI a worldwide, royalty-free license to access, host, and process Customer Data <em>solely</em> for the purpose of providing the Service to you.</p>

      <h3 className="text-lg font-bold mt-6 mb-2">4.3 AI Training Restriction (The "No-Train" Guarantee)</h3>
      <p>TaskifAI strictly covenants that <strong>Customer Data will NOT be used to train our third-party foundation models (e.g., Anthropic)</strong>. Data is processed within an isolated context window for the generation of specific outputs and is not retained by the AI provider for model improvement.</p>

      <h3 className="text-lg font-bold mt-6 mb-2">4.4 EU AI Act Transparency</h3>
      <p>You acknowledge that you are interacting with an Artificial Intelligence system. AI Outputs are generated probabilistically and should be verified by human oversight before implementation.</p>
    </section>

    <section id="t5" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">05.</span> Warranties and Disclaimers
      </h2>
      <h3 className="text-lg font-bold mt-6 mb-2">5.1 "As Is" Basis</h3>
      <p>The Service is provided "as is" and "as available." While we strive for high accuracy, we do not warrant that the Service will be uninterrupted or error-free.</p>
      <h3 className="text-lg font-bold mt-6 mb-2">5.2 AI Disclaimer</h3>
      <p>The Service utilizes artificial intelligence to generate insights. <strong>AI Outputs are suggestions only and should not be interpreted as professional financial, legal, or strategic advice.</strong> You are solely responsible for decisions made based on AI Outputs.</p>
    </section>

    <section id="t6" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">06.</span> Liability
      </h2>
      <h3 className="text-lg font-bold mt-6 mb-2">6.1 Limitation of Liability</h3>
      <p>To the fullest extent permitted by Swedish law, neither Party shall be liable for any indirect, incidental, or consequential damages (including loss of profits, data, or goodwill).</p>
      <h3 className="text-lg font-bold mt-6 mb-2">6.2 Liability Cap</h3>
      <p>Our total cumulative liability arising out of or related to this Agreement shall not exceed the total amount paid by you to TaskifAI in the twelve (12) months preceding the incident.</p>
      <h3 className="text-lg font-bold mt-6 mb-2">6.3 Exclusions</h3>
      <p>Nothing in this Agreement limits or excludes liability for:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Death or personal injury caused by negligence.</li>
        <li>Fraud or fraudulent misrepresentation.</li>
        <li>Gross negligence (<em>grov vårdslöshet</em>) or willful misconduct (<em>uppsåt</em>).</li>
        <li>Breach of confidentiality obligations under Section 7.</li>
      </ul>
    </section>

    <section id="t7" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">07.</span> Confidentiality
      </h2>
      <p><strong>7.1 Definition:</strong> "Confidential Information" means any information disclosed by one Party to the other that is marked as confidential or should reasonably be understood to be confidential, including trade secrets, financial data, and technical know-how.</p>
      <p className="mt-4"><strong>7.2 Obligations:</strong> Both Parties agree to:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Hold Confidential Information in strict confidence.</li>
        <li>Not disclose such information to any third party (except to authorized employees and subprocessors bound by similar confidentiality).</li>
        <li>Use such information only to fulfill obligations under this Agreement.</li>
      </ul>
      <p className="mt-4"><strong>7.3 Duration:</strong> These obligations apply during the term of this Agreement and for a period of five (5) years thereafter. For trade secrets, the confidentiality obligation is perpetual.</p>
    </section>

    <section id="t8" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">08.</span> Term and Termination
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Term:</strong> This Agreement remains in effect as long as you have an active subscription.</li>
        <li><strong>Termination for Cause:</strong> Either Party may terminate immediately if the other Party materially breaches this Agreement and fails to cure such breach within 30 days of notice.</li>
        <li><strong>Effect of Termination:</strong> Upon termination, your right to use the Service ceases. We will delete your Customer Data in accordance with our Privacy Policy and DPA.</li>
      </ul>
    </section>

    <section id="t9" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">09.</span> Modifications to Agreement
      </h2>
      <p>We may update these terms from time to time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use the Service after those revisions become effective, you agree to be bound by the revised terms.</p>
    </section>

    <section id="t10" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">10.</span> Governing Law and Dispute Resolution
      </h2>
      <p>This Agreement shall be governed by the substantive laws of <strong>Sweden</strong>.</p>
      <p>Any dispute, controversy, or claim arising out of or in connection with this Agreement shall be settled by the <strong>District Court of Malmö</strong> (Malmö tingsrätt) as the court of first instance.</p>
    </section>
  </div>
);

const PrivacyContent = () => (
  <div className="space-y-16">
    <div className="border-b border-primary-100 pb-8">
      <h1 className="text-4xl font-extrabold text-primary-900 mb-4 tracking-tight">Privacy Policy</h1>
      <p className="text-primary-500 font-mono text-sm">Effective Date: December 2025</p>
    </div>

    <section id="p1" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">01.</span> Introduction
      </h2>
      <p>TaskifAI ("we", "us") is committed to protecting the privacy and security of your brand intelligence. This Privacy Policy outlines how we collect, use, and safeguard your information.</p>
      <div className="mt-4 p-4 bg-white border border-primary-100 rounded-lg text-sm">
        <p className="font-bold mb-1">Data Controller:</p>
        <p>TaskifAI<br/>Styrbordsgatan 6, 21647 Limhamn<br/>Malmö, Sweden</p>
        <p className="mt-2">Contact: <a href="mailto:security@taskifai.com" className="text-primary-600 hover:underline">security@taskifai.com</a></p>
      </div>
    </section>

    <section id="p2" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">02.</span> The Data We Collect
      </h2>
      <h3 className="text-lg font-bold mt-6 mb-2">2.1 Account Information</h3>
      <p>We collect data necessary to manage your account, including:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Name and Email Address</li>
        <li>Billing Information (processed via our payment provider)</li>
        <li>Company details</li>
      </ul>
      <h3 className="text-lg font-bold mt-6 mb-2">2.2 Brand Intelligence Data (Client Data)</h3>
      <p>This includes the proprietary datasets you upload for analysis (sales metrics, strategy docs, etc.). We process this data strictly as a <strong>Data Processor</strong> on your behalf (see Section 5).</p>
    </section>

    <section id="p3" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">03.</span> How We Use AI (Strict usage Policy)
      </h2>
      <p>We distinguish ourselves through a <strong>privacy-first AI architecture</strong>:</p>
      <ol className="list-decimal pl-5 space-y-3 mt-4">
        <li><strong>Isolation:</strong> Your data is processed in isolated logical environments.</li>
        <li><strong>No Training:</strong> We do not use your Brand Intelligence Data to train our foundation models or the models of our third-party providers (e.g., Anthropic).</li>
        <li><strong>Stateless Processing:</strong> When you send a query, relevant data is retrieved, anonymized where possible by our "Analyst Agent," and sent to the LLM (Large Language Model) within a transient context window. It is not stored by the LLM provider.</li>
        <li><strong>Automated Decision Making:</strong> We do not use your personal data for automated decision-making that produces legal effects concerning you (as defined in GDPR Art. 22).</li>
      </ol>
    </section>

    <section id="p4" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">04.</span> Infrastructure and Subprocessors
      </h2>
      <p className="mb-6">We use trusted third-party service providers to support our operations. We have Data Processing Agreements (DPAs) in place with all listed providers:</p>
      
      <div className="overflow-x-auto rounded-xl border border-primary-100 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-primary-50 text-primary-900 font-bold uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3">Provider</th>
              <th className="px-6 py-3">Purpose</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Transfer Mechanism</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary-100 bg-white">
            <tr>
              <td className="px-6 py-4 font-semibold">DigitalOcean</td>
              <td className="px-6 py-4">Cloud Hosting & Infrastructure</td>
              <td className="px-6 py-4">Europe (Germany/Netherlands)</td>
              <td className="px-6 py-4 text-xs text-primary-600">Intra-EEA Transfer</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold">Supabase</td>
              <td className="px-6 py-4">Database & Authentication</td>
              <td className="px-6 py-4">Europe</td>
              <td className="px-6 py-4 text-xs text-primary-600">Intra-EEA Transfer</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold">Anthropic</td>
              <td className="px-6 py-4">AI Intelligence Provider</td>
              <td className="px-6 py-4">US</td>
              <td className="px-6 py-4 text-xs text-primary-600">EU-US Data Privacy Framework / SCCs</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-primary-400 mt-4 italic">Note: Where data is transferred to the US, we rely on the EU-US Data Privacy Framework (if applicable to the provider) or Standard Contractual Clauses (SCCs) with supplementary measures.</p>
    </section>

    <section id="p5" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">05.</span> Security Measures
      </h2>
      <p>We employ enterprise-grade security including:</p>
      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit.</li>
        <li><strong>Row-Level Security (RLS):</strong> Database isolation ensuring tenants cannot access each other's data.</li>
        <li><strong>Access Control:</strong> Strict internal access policies based on "least privilege."</li>
        <li><strong>Audit Logging:</strong> We maintain logs of system access to detect anomalies.</li>
      </ul>
    </section>

    <section id="p6" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">06.</span> Your Rights (GDPR)
      </h2>
      <p>Under the General Data Protection Regulation (GDPR), you have the right to:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Access:</strong> Request a copy of the personal data we hold.</li>
        <li><strong>Rectification:</strong> Correct inaccurate data.</li>
        <li><strong>Erasure (Right to be Forgotten):</strong> Request permanent deletion of your data/account.</li>
        <li><strong>Portability:</strong> Receive your data in a structured, commonly used format.</li>
        <li><strong>Object:</strong> Object to processing based on legitimate interests.</li>
      </ul>
      <p className="mt-4">To exercise these rights, contact <a href="mailto:security@taskifai.com" className="font-bold text-primary-600">security@taskifai.com</a>.</p>
    </section>

    <section id="p7" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">07.</span> Data Retention
      </h2>
      <p>We retain your data only as long as your account is active. Upon account cancellation, Brand Intelligence Data is deleted from our active databases within 30 days. Backups are cycled strictly according to our disaster recovery schedule and then overwritten.</p>
    </section>

    <section id="p8" className="scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-primary-300">08.</span> Changes to this Policy
      </h2>
      <p>We may update this policy to reflect changes in our technology or legal requirements. We will notify you of significant changes via email or dashboard notification.</p>
    </section>
  </div>
);

export default LegalPage;
