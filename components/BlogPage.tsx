import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, Clock, ArrowLeft, User, Link as LinkIcon, Check, FileText, BarChart, Zap } from 'lucide-react';

interface Article {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  content: React.ReactNode;
}

const ReferenceItem: React.FC<{ text: string; url?: string }> = ({ text, url }) => (
  <li className="pl-2">
    <span>{text} </span>
    {url && (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-primary-400 hover:text-primary-900 underline decoration-primary-200 break-all block mt-1"
      >
        {url}
      </a>
    )}
  </li>
);

const ArticleReferences: React.FC<{ items: { text: string; url?: string }[] }> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-primary-200 mt-12 pt-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-400 hover:text-primary-900 transition-colors group select-none"
      >
        <ChevronRight size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
        {isOpen ? 'Hide References' : 'View References'}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ol className="list-decimal pl-5 space-y-4 text-xs text-primary-500 font-mono mt-6">
              {items.map((item, idx) => (
                <ReferenceItem key={idx} text={item.text} url={item.url} />
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const REFERENCES_LIST = [
  { text: 'Givaudan. "About Givaudan."', url: 'https://www.givaudan.com/our-company/about-givaudan' },
  { text: 'ISO. "ISO 22716:2007 - Cosmetics GMP Guidelines."', url: 'https://www.iso.org/standard/36437.html' },
  { text: 'New Directions Aromatics. "Everything You Should Know About Cosmetic GMP."', url: 'https://www.newdirectionsaromatics.com/blog/everything-you-should-know-about-cosmetic-gmp-good-manufacturing-practices/' },
  { text: 'Givaudan. "Achieving our 2025 strategy - Integrated Report 2022."', url: 'https://integratedreport.givaudan.com/2022/value-creation/achieving-2025-strategy' },
  { text: 'Built In. "Marketing Manager - Watches and Fine Jewellery - CHANEL."', url: 'https://builtin.com/job/marketing-manager-watches-and-fine-jewellery/4064048' },
  { text: 'Multiple Shiseido job postings referencing Excel expertise requirements, 2024-2025.', url: '' },
  { text: 'ZoomInfo. "United Perfumes - Overview."', url: 'https://www.zoominfo.com/c/united-perfumes/447094765' },
  { text: 'Al Hussein Perfumes. Corporate website.', url: 'https://alhusseinperfumes.com/' },
  { text: 'Nordic Perfume operations data, Latvia.', url: '' },
  { text: 'BFF International. "Fragrance. Fashion. Forever."', url: 'https://bffgroup.co/' },
  { text: 'United Perfumes. Distributor pricing downloads available in Excel format.', url: '' },
  { text: 'Fluxygen. "The Impact of Human Error Rates in Manual Data Entry."', url: 'https://fluxygen.com/resources/impact-of-human-error-rates/' },
  { text: 'DocuClipper. "67 Data Entry Statistics For 2025."', url: 'https://www.docuclipper.com/blog/data-entry-statistics/' },
  { text: 'Industry productivity analysis for operations teams in consumer goods distribution.', url: '' },
  { text: 'Circana. "Holiday 2024 Fragrance Trends: A Season of Scent and Luxury."', url: 'https://www.circana.com/intelligence/blog/2024/whats-in-store-for-fragrances-this-holiday-season/' },
  { text: 'NPD Group. Prestige fragrance quarterly sales analysis, 2024.', url: '' },
  { text: 'Cosmetics Business. "Fragrance Trends Report." May 2025.', url: '' },
  { text: 'Spate. "Gourmand fragrance search trend analysis." 2024.', url: '' },
  { text: 'Black Swan Data. "Functional fragrance market projections." 2024-2034.', url: '' },
  { text: 'FDA. "Modernization of Cosmetics Regulation Act of 2022 (MoCRA)."', url: 'https://www.fda.gov/cosmetics/cosmetics-laws-regulations/modernization-cosmetics-regulation-act-2022-mocra' },
  { text: 'Thermo Fisher Scientific. "Navigating MoCRA And How a LIMS Can Help."', url: 'https://www.thermofisher.com/blog/connectedlab/navigating-mocra-and-how-a-lims-can-help/' },
  { text: 'IFRA. "Notification of the 51st Amendment to the IFRA Standards."', url: 'https://ifrafragrance.org/latest-updates/press-releases/notification-of-the-51st-amendment-to-the-ifra-standards' },
  { text: 'Expert Market Research. "Middle East Fragrance Market Report 2024-2034."', url: '' },
  { text: 'BW Confidential. "Beautyworld analyzes the changing face of fragrance in the Middle East."', url: 'https://www.bwconfidential.com/beautyworld-analyzes-the-changing-face-of-fragrance-in-the-middle-east/' },
  { text: 'Chalhoub Group. "Ramadan and Eid seasonal impact analysis." 2025.', url: '' },
  { text: 'Hotel & Catering. "5 Minutes With... SAGMA CORP."', url: 'https://hotelandcatering.com/interviews-features/5-minutes-sagma-corp' },
  { text: 'Sara Group Holdings. "Sara Prestige."', url: 'https://saragroups.com/sara-prestige/' },
  { text: 'WWD. "Global Beauty Industry Challenges: Slowing Demand and Shifting Markets."', url: 'https://wwd.com/beauty-industry-news/beauty-features/global-beauty-industry-challenges-demand-slows-asia-u-s-1236952965/' },
  { text: 'Data&Data. "The Hidden Costs of Discounted Scents: How the Grey Market is Shaping the Perfume Industry."', url: 'https://data-and-data.com/en/the-hidden-costs-of-discounted-scents-how-the-grey-market-is-shaping-the-perfume-industry/' },
  { text: 'Scent City. "How and Why the Grey Market is Harming the Luxury Fragrance Industry."', url: 'https://www.thescentcity.com/blogs/news/how-and-why-the-grey-market-is-harming-the-luxury-fragrance-industry/' },
];

const ARTICLES: Article[] = [
  {
    id: '1',
    category: 'Industry Analysis',
    title: 'The Distribution Data Gap',
    subtitle: 'Why Fragrance Brands Are Flying Blind in Their Fastest-Growing Markets',
    excerpt: 'While manufacturers use molecular-level precision and headquarters run on SAP, global distribution still runs on Excel. Here is why the "Excel problem" is actually a revenue leak costing brands millions.',
    date: 'Jan 7, 2026',
    readTime: '15 min read',
    author: 'David Rydberg',
    content: (
      <div className="space-y-12 text-primary-900 leading-relaxed">
        
        {/* Section 1: Introduction */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary-900">The Contradiction at the Heart of Modern Fragrance</h2>
          <p className="mb-6 text-lg text-primary-600">
            There's something oddly mismatched about the fragrance industry today. At the manufacturing level, companies like Givaudan and DSM-Firmenich use molecular-level precision engineering and sophisticated ERP systems to create scents that consumers will remember for decades. These operations follow ISO 22716 standards, track volatile raw materials through SAP platforms, and maintain compliance across dozens of international markets.
          </p>
          <p className="mb-6 text-lg text-primary-600">
            But then the product ships. And something breaks.
          </p>
          <p className="mb-6 text-lg text-primary-600">
            By the time that same bottle reaches a distributor in Dubai, a wholesaler in Miami, or a boutique network in Eastern Europe, the data infrastructure simply... stops. What replaced those sophisticated systems? In most cases, Excel spreadsheets. Email attachments. PDF catalogs. Sometimes even scanned invoices.
          </p>
          <p className="mb-6 text-lg text-primary-600 font-medium">
            This isn't a technology problem that brands can solve by demanding change. It's a structural reality of how global fragrance distribution actually works. And it's costing brands more than they realize.
          </p>
        </section>

        {/* Section 2: How Distribution Works */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary-900">How Distribution Really Works (And Why It's Stuck This Way)</h2>
          <p className="mb-6 text-lg text-primary-600">
            The fragrance supply chain has three distinct technology layers, each operating at a completely different level of sophistication:
          </p>
          
          <div className="space-y-8">
            <div className="border-l-2 border-primary-200 pl-6">
              <h3 className="text-xl font-bold text-primary-900 mb-2">Tier 0: The Manufacturers</h3>
              <p className="text-primary-600">
                Operate at the cutting edge. Givaudan's 2022 integrated report confirms their continued investment in enterprise technology, specifically noting their progress in "integrating recently acquired companies on our platforms such as SAP and GBS." These companies need that level of control because they're managing thousands of volatile raw materials and strict regulatory compliance.
              </p>
            </div>

            <div className="border-l-2 border-primary-200 pl-6">
              <h3 className="text-xl font-bold text-primary-900 mb-2">Tier 1: Brand Owners and Master Distributors</h3>
              <p className="text-primary-600">
                Sit in an uncomfortable middle ground. Their headquarters may run on enterprise software, but their market intelligence comes from... well, that's where things get messy. A recent job posting for a Marketing Manager at Chanel's Toronto office explicitly requires "experience in Excel data management." Shiseido posts for senior business operations roles ask for "exceptional" or "expert level" Excel skills. It's because Excel is the only common language that works when you're collecting data from dozens of independent distributors worldwide.
              </p>
            </div>

            <div className="border-l-2 border-primary-200 pl-6">
              <h3 className="text-xl font-bold text-primary-900 mb-2">Tier 2: Independent Wholesalers and Distributors</h3>
              <p className="text-primary-600">
                Are where the system breaks down entirely, or perhaps more accurately, where it never really existed in the first place. Companies like United Perfumes (Florida), Al Hussein Perfumes, and Nordic Perfume manage thousands of SKUs across fragmented retail networks. They use Excel because it's flexible enough to handle the reality of their business: sudden seasonal spikes, rapid pricing changes, gray market pressures, and the need to quickly reallocate inventory.
              </p>
              <p className="text-primary-600 mt-4">
                These distributors aren't going to change. Trying to force thousands of independent distributors onto a single software platform isn't just impractical, it's fundamentally misunderstanding how distribution economics work.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The Real Cost */}
        <section>
            <h2 className="text-2xl font-bold mb-6 text-primary-900">The Real Cost of Opaque Distribution</h2>
            <p className="mb-6 text-lg text-primary-600">
                Most brands think about the Excel problem as an annoyance. It's actually a revenue leak.
            </p>
            <p className="mb-6 text-lg text-primary-600">
                Consider what happens in a typical scenario: A brand operates globally through a network of independent distributors. Each week, those distributors send in their reports. Some arrive as CSV exports. Some as formatted Excel files with custom layouts. Some as PDF scans.
            </p>
            <p className="mb-6 text-lg text-primary-600">
                Someone at brand headquarters now needs to consolidate this. They spend hours copying and pasting, reformatting columns, and reconciling naming conventions. Research on manual data entry consistently shows error rates between 1% and 5%. A single misplaced decimal point in inventory counts can trigger an unnecessary reorder of $50,000 worth of product.
            </p>
            
            <div className="bg-primary-50 p-8 rounded-2xl border border-primary-200 my-8">
                <h3 className="text-xl font-bold mb-3 text-primary-900">The Latency Problem</h3>
                <p className="text-primary-800 leading-relaxed mb-4">
                  But the financial cost goes beyond errors. It's the opportunity cost. Industry analysis suggests that teams spend up to 25% of their work hours on non-productive reporting tasks.
                </p>
                <p className="text-primary-800 leading-relaxed">
                  More critically, it's slow. By the time a distributor sends their weekly report, someone cleans it, and analysis begins, the market has moved. In an industry where 40% to 50% of annual prestige fragrance sales happen in Q4 alone, being a week late to see a trend is the difference between capitalizing on momentum and missing the window entirely.
                </p>
            </div>
        </section>

        {/* Section 4: Why Now? */}
        <section>
            <h2 className="text-2xl font-bold mb-6 text-primary-900">Why 2025-2026 Is Different: The Complexity Explosion</h2>
            <p className="mb-6 text-lg text-primary-600">
                Three major shifts are converging to make the old system unsustainable:
            </p>

            <ul className="space-y-8 mt-8">
                <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center shrink-0 text-white font-bold text-sm">1</div>
                    <div>
                        <h4 className="font-bold text-lg text-primary-900 mb-2">SKU proliferation is accelerating.</h4>
                        <p className="text-primary-600">
                            The fragrance market is fragmenting into hyper-specific micro-trends ("boozy notes", "lickable perfume", "functional fragrance"). Tracking the performance of 2,000 SKUs via Excel is tedious. Tracking 5,000 is nearly impossible.
                        </p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center shrink-0 text-white font-bold text-sm">2</div>
                    <div>
                        <h4 className="font-bold text-lg text-primary-900 mb-2">Regulatory complexity is tightening.</h4>
                        <p className="text-primary-600">
                            MoCRA represents the biggest expansion of FDA authority over cosmetics in 80 years. If a specific allergen gets banned or a batch gets recalled, brands need to instantly identify every single unit of inventory across their global network. Doing this via email and Excel is a liability risk.
                        </p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center shrink-0 text-white font-bold text-sm">3</div>
                    <div>
                        <h4 className="font-bold text-lg text-primary-900 mb-2">The Middle East market is exploding.</h4>
                        <p className="text-primary-600">
                            The region is growing at a 7.5% CAGR. It operates through powerful master distributors like Sagma Corp and Sara Prestige. Brands that can seamlessly integrate with these partners without forcing platform changes will win the region.
                        </p>
                    </div>
                </li>
            </ul>
        </section>

        {/* Section 5: The Sell-Out Problem */}
        <section>
            <h2 className="text-2xl font-bold mb-6 text-primary-900">The Sell-Out Visibility Problem</h2>
            <p className="mb-6 text-lg text-primary-600">
                "Sell-in" data (what the brand ships to distributors) is easy to track. "Sell-out" data (what actually sells from distributors to retailers) is where visibility breaks down.
            </p>
            <p className="mb-4 text-lg text-primary-600">
                Brands often don't know what's actually selling until weeks or months after the fact. This creates a cascade of problems:
            </p>
            <ul className="list-disc pl-5 space-y-4 text-lg text-primary-600 mb-8">
                <li><strong>You can't replenish what you don't know is missing.</strong> Stockouts happen because a brand doesn't realize a specific market has run dry.</li>
                <li><strong>You can't optimize allocation.</strong> Is that new oud launch struggling in Texas but thriving in Riyadh? Without granular sell-out data, you're guessing.</li>
                <li><strong>You can't spot gray market leakage.</strong> Without unified tracking, products diverted to unauthorized channels go unnoticed until price erosion occurs.</li>
            </ul>
        </section>

        {/* Section 6: The Solution */}
        <section>
            <h2 className="text-2xl font-bold mb-6 text-primary-900">What Actually Works: The Intelligence Layer Approach</h2>
            <p className="mb-6 text-lg text-primary-600">
                The solution isn't to change how distributors work. It's to build an intelligence layer that reads what they're already producing.
            </p>
            <p className="mb-6 text-lg text-primary-600">
                The modern approach is to treat this as a data engineering problem that can be solved once, rather than a manual task that must be repeated forever.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-primary-200 p-6 rounded-xl">
                    <h4 className="font-bold text-primary-900 mb-2">1. Automated Ingestion</h4>
                    <p className="text-sm text-primary-600">Systems that read Excel files regardless of format and extract data from PDFs and email bodies.</p>
                </div>
                <div className="bg-white border border-primary-200 p-6 rounded-xl">
                    <h4 className="font-bold text-primary-900 mb-2">2. Machine Learning</h4>
                    <p className="text-sm text-primary-600">Reconcile naming variations automatically (learning that "CH-NO5-100" is "Chanel No. 5 100ml").</p>
                </div>
                <div className="bg-white border border-primary-200 p-6 rounded-xl">
                    <h4 className="font-bold text-primary-900 mb-2">3. NLP Context</h4>
                    <p className="text-sm text-primary-600">Extract meaning from qualitative notes like "sales slow due to heatwave" that usually get lost.</p>
                </div>
            </div>
            <p className="text-lg text-primary-600">
                The result: reports get processed as they arrive. Errors drop to near zero. Your team stops spending 25% of their time on data cleaning and starts spending 100% of their time on analysis and strategy.
            </p>
        </section>

        {/* Section 7: Moving Forward */}
        <section>
            <h2 className="text-2xl font-bold mb-6 text-primary-900">Moving Forward: What Leadership Should Be Asking</h2>
            <p className="mb-6 text-lg text-primary-600">
                The brands that will win over the next five years aren't the ones waiting for distribution to modernize. They're the ones building intelligence systems that work with reality as it exists.
            </p>
            <ul className="list-disc pl-5 space-y-4 text-lg text-primary-600 mb-8">
                <li>If your team is spending significant time each week consolidating reports, you're paying a hidden tax of roughly €250,000 annually in wasted productivity.</li>
                <li>If you can't answer "what sold in Dubai last week" within minutes, you're flying blind.</li>
                <li>If a regulatory issue required you to identify a batch today, how long would that take?</li>
            </ul>
            <p className="text-xl font-bold text-primary-900 mb-12">
                The good news: this is a solved problem. The technology exists.
            </p>
        </section>

        <ArticleReferences items={REFERENCES_LIST} />

      </div>
    )
  }
];

const BlogPage: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#articles/')) {
        const id = hash.split('/')[1];
        setSelectedArticleId(id);
      } else {
        setSelectedArticleId(null);
      }
    };

    window.addEventListener('hashchange', parseHash);
    parseHash(); // Initial check

    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleArticleClick = (id: string) => {
    window.location.hash = `#articles/${id}`;
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (selectedArticleId) {
      window.location.hash = '#articles';
    } else {
      window.location.hash = '';
    }
  };

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const activeArticle = selectedArticleId ? ARTICLES.find(a => a.id === selectedArticleId) : null;

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.button
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBack}
          className="flex items-center gap-2 text-primary-500 hover:text-primary-900 transition-colors mb-12 font-bold text-sm uppercase tracking-wider group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {selectedArticleId ? 'Back to Articles' : 'Back to Home'}
        </motion.button>

        <AnimatePresence mode="wait">
          {selectedArticleId && activeArticle ? (
            <motion.div
                key="article-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="max-w-4xl mx-auto"
            >
                <header className="mb-12 border-b border-primary-200 pb-12">
                   <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-primary-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                          {activeArticle.category}
                        </span>
                        <span className="text-primary-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                           <Calendar size={12} /> {activeArticle.date}
                        </span>
                      </div>
                      
                      <button 
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-400 hover:text-primary-900 transition-colors"
                        title="Copy article link"
                      >
                        {copySuccess ? <Check size={14} className="text-primary-900" /> : <LinkIcon size={14} />}
                        {copySuccess ? 'Copied!' : 'Copy Link'}
                      </button>
                   </div>

                   <h1 className="text-4xl md:text-5xl font-extrabold text-primary-900 tracking-tight leading-tight mb-6">
                      {activeArticle.title}
                   </h1>
                   
                   {activeArticle.subtitle && (
                      <p className="text-2xl text-primary-500 font-medium leading-relaxed mb-8">
                         {activeArticle.subtitle}
                      </p>
                   )}

                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-900">
                         <User size={20} />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-primary-900">{activeArticle.author}</p>
                         <p className="text-[10px] text-primary-500 uppercase tracking-widest font-bold">Founder</p>
                      </div>
                   </div>
                </header>

                <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary-900 hover:prose-a:text-black">
                   {activeArticle.content}
                </article>

                <div className="mt-20 pt-12 border-t border-primary-200 text-center">
                    <h3 className="text-2xl font-bold text-primary-900 mb-6">Ready to stop flying blind?</h3>
                    <button onClick={() => window.location.hash = '#contact'} className="bg-primary-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-colors shadow-xl shadow-primary-900/10">
                        Book a TaskifAI Demo
                    </button>
                </div>
            </motion.div>
          ) : (
            <motion.div
                key="list-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="grid md:grid-cols-1 gap-8">
                {ARTICLES.map((article, index) => (
                    <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleArticleClick(article.id)}
                    className="bg-white border border-primary-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary-900/5 hover:border-primary-900 transition-all duration-300 flex flex-col group cursor-pointer max-w-4xl"
                    >
                    <div className="mb-6 flex items-center justify-between">
                        <span className="px-3 py-1 bg-primary-50 text-primary-900 text-[10px] font-black uppercase tracking-widest rounded-full">
                        {article.category}
                        </span>
                        <div className="flex items-center gap-4 text-[10px] font-bold text-primary-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime}</span>
                        </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-primary-900 mb-3 group-hover:text-black transition-colors">
                        {article.title}
                    </h2>
                    
                    <p className="text-primary-600 text-base leading-relaxed mb-8 flex-1">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-bold text-primary-900 group-hover:gap-4 transition-all duration-300">
                        Read full article
                        <ChevronRight size={18} className="text-primary-900" />
                    </div>
                    </motion.article>
                ))}
                </div>

                <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-24 p-10 md:p-16 bg-primary-900 rounded-3xl text-white relative overflow-hidden"
                >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] pointer-events-none"></div>
                <div className="relative z-10 max-w-2xl">
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Stay ahead of the curve.</h3>
                    <p className="text-primary-200 mb-8 text-lg">
                    Get our monthly analysis on wholesale trends and data automation delivered to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3">
                    <input 
                        type="email" 
                        placeholder="Work email address" 
                        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-primary-300 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
                    />
                    <button className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-colors">
                        Subscribe
                    </button>
                    </form>
                </div>
                </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;