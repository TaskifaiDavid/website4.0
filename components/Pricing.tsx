import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard: React.FC<{
  title: string;
  price: string;
  period?: string;
  setupFee?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  bestFor: string;
}> = ({ title, price, period, setupFee, description, features, isPopular, buttonText, bestFor }) => (
  <div className={`relative p-8 rounded-2xl border ${isPopular ? 'border-primary-900 bg-primary-50/50' : 'border-primary-200 bg-white'} flex flex-col h-full hover:shadow-xl transition-shadow duration-300`}>
    {isPopular && (
      <div className="absolute top-0 right-0 bg-primary-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl rounded-tr-xl">
        Most Popular
      </div>
    )}
    
    <div className="mb-6">
      <h3 className="text-lg font-bold text-primary-900 mb-2">{title}</h3>
      <p className="text-xs text-primary-500 font-medium italic mb-2">"{bestFor}"</p>
    </div>

    <div className="mb-2">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-primary-900">{price}</span>
        {period && <span className="text-sm text-primary-500 font-medium">/{period}</span>}
      </div>
    </div>
    
    {setupFee && (
        <div className="mb-6 text-xs text-primary-500 font-mono bg-primary-100/50 inline-block px-2 py-1 rounded">
            Setup: {setupFee}
        </div>
    )}

    <div className="flex-1 mb-8 mt-2">
      <ul className="space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-primary-700">
            <Check size={16} className="text-primary-900 shrink-0 mt-0.5" />
            <span className="leading-tight">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <button className={`w-full py-3 rounded-lg text-sm font-bold transition-all ${
      isPopular 
        ? 'bg-primary-900 text-white hover:bg-black shadow-lg shadow-primary-900/10' 
        : 'bg-white border border-primary-200 text-primary-900 hover:border-primary-900 hover:text-primary-900 hover:bg-primary-50'
    }`}>
      {buttonText}
    </button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-900 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tight">Transparent Pricing. Real ROI.</h2>
          <p className="text-lg text-primary-500">
            Setup fees are waived on annual contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <PricingCard 
              title="Basic"
              price="€899"
              period="mo"
              setupFee="€1,500 (waived on annual)"
              bestFor="Brands managing 5-10 resellers testing wholesale intelligence for the first time"
              description=""
              buttonText="Book a Demo"
              features={[
                "Automated parsing of reseller reports",
                "Up to 10 wholesale partners",
                "Shopify/WooCommerce integration",
                "Standard dashboards (revenue, sell-through, inventory)",
                "AI agent access (100 queries/month)",
                "Email support"
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PricingCard 
              title="Growth"
              price="€1,299"
              period="mo"
              setupFee="€1,500 (waived on annual)"
              isPopular={true}
              bestFor="Established brands with complex wholesale networks needing strategic intelligence"
              description=""
              buttonText="Book a Demo"
              features={[
                "Automated parsing of reseller reports",
                "Up to 25 wholesale partners",
                "Shopify/WooCommerce integration",
                "Custom dashboards tailored to your KPIs",
                "Unlimited AI agent access",
                "Priority email + Slack support",
                "Full data export API"
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PricingCard 
              title="Enterprise"
              price="Custom"
              setupFee="Custom based on complexity"
              bestFor="Brands operating across multiple markets with enterprise systems requiring deep integration"
              description=""
              buttonText="Contact Sales"
              features={[
                "Everything in Growth, plus:",
                "Unlimited reseller connections",
                "Multi-entity/multi-currency support",
                "ERP integrations (NetSuite, SAP, Business Central)",
                "White-glove onboarding with data validation",
                "Dedicated customer success manager",
                "Custom reporting and API access"
              ]}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;