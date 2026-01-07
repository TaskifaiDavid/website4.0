import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, Clock, ArrowLeft, User, Tag } from 'lucide-react';

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

const ARTICLES: Article[] = [
  {
    id: '1',
    category: 'Industry Analysis',
    title: 'The Distribution Data Gap',
    subtitle: 'Why Fragrance Brands Are Flying Blind in Their Fastest-Growing Markets',
    excerpt: 'While manufacturers use molecular-level precision and headquarters run on SAP, global distribution still runs on Excel. Here is why the "Excel problem" is actually a revenue leak costing brands millions.',
    date: 'Jan 7, 2026',
    readTime: '12 min read',
    author: 'David Rydberg',
    content: (
      <div className="space-y-12 text-primary-900 leading-relaxed">
        {/* Intro Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">The Contradiction at the Heart of Modern Fragrance</h2>
          <p className="mb-6 text-lg text-primary-600">
            There's something oddly mismatched about the fragrance industry today. At the manufacturing level, companies like Givaudan and DSM-Firmenich use molecular-level precision engineering and sophisticated ERP systems to create scents that consumers will remember for decades.[1] These operations follow ISO 22716 standards, track volatile raw materials through SAP platforms, and maintain compliance across dozens of international markets.[2][3]
          </p>
          <p className="mb-6 text-lg text-primary-600">
            But then the product ships. And something breaks.
          </p>
          <p className="mb-6 text-lg text-primary-600">
            By the time that same bottle reaches a distributor in Dubai, a wholesaler in Miami, or a boutique network in Eastern Europe, the data infrastructure simply... stops. What replaced those sophisticated systems? In most cases, Excel spreadsheets. Email attachments. PDF catalogs. Sometimes even scanned invoices.
          </p>
          <p className="text-lg text-primary-600 font-medium">
            This isn't a technology problem that brands can solve by demanding change. It's a structural reality of how global fragrance distribution actually works. And it's costing brands more than they realize.
          </p>
        </section>

        {/* How Distribution Really Works */}
        <section>
          <h2 className="text-2xl font-bold mb-6">How Distribution Really Works (And Why It's Stuck This Way)</h2>
          <p className="mb-8 text-lg text-primary-600">
            The fragrance supply chain has three distinct technology layers, each operating at a completely different level of sophistication:
          </p>
          
          <div className="space-y-8">
            <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
              <h3 className="text-lg font-bold mb-2">Tier 0: The Manufacturers</h3>
              <p className="text-primary-600">
                Operate at the cutting edge. Givaudan's 2022 integrated report confirms their continued investment in enterprise technology, specifically noting their progress in "integrating recently acquired companies on our platforms such as SAP and GBS, as well as on our creation, development and commercial systems."[4] These companies need that level of control because they're managing thousands of volatile raw materials, complex formulations, and strict regulatory compliance across markets.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
              <h3 className="text-lg font-bold mb-2">Tier 1: Brand Owners and Master Distributors</h3>
              <p className="text-primary-600">
                Sit in an uncomfortable middle ground. Their headquarters may run on enterprise software, but their market intelligence comes from... well, that's where things get messy. A recent job posting for a Marketing Manager at Chanel's Toronto office explicitly requires "experience in Excel data management."[5] Shiseido posts for senior business operations roles ask for "exceptional" or "expert level" Excel skills.[6] This isn't because these companies are behind the times. It's because Excel is the only common language that works when you're collecting data from dozens of independent distributors worldwide.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
              <h3 className="text-lg font-bold mb-2">Tier 2: Independent Wholesalers and Distributors</h3>
              <p className="text-primary-600 mb-4">
                Are where the system breaks down entirely, or perhaps more accurately, where it never really existed in the first place. Companies like United Perfumes (Florida), Al Hussein Perfumes (multiple US offices), and Nordic Perfume (Latvia) manage thousands of SKUs across fragmented retail networks.[7][8][9] They use Excel because it's flexible enough to handle the reality of their business: sudden seasonal spikes, rapid pricing changes, gray market pressures, and the need to quickly reallocate inventory based on local market conditions.
              </p>
              <p className="text-primary-600">
                These distributors aren't going to change. They can't, really. BFF International operates 40+ retail and wholesale outlets across Asia and the Middle East.[10] United Perfumes ships worldwide and offers downloadable Excel spreadsheets as their standard catalog format because that's what their customers need.[11] Trying to force thousands of independent distributors onto a single software platform isn't just impractical, it's fundamentally misunderstanding how distribution economics work.
              </p>
            </div>
          </div>
          
          <p className="mt-8 text-xl font-bold text-primary-900 border-l-4 border-primary-900 pl-6 italic">
            The question isn't how to change distributor behavior. The question is: how do brands extract intelligence from a system that will always be fragmented?
          </p>
        </section>

        {/* The Real Cost */}
        <section>
          <h2 className="text-2xl font-bold mb-4">The Real Cost of Opaque Distribution</h2>
          <p className="mb-6 text-lg text-primary-600">
            Most brands think about the Excel problem as an annoyance. It's actually a revenue leak.
          </p>
          <p className="mb-6 text-lg text-primary-600">
            Consider what happens in a typical scenario: A brand operates globally through a network of independent distributors. Each week (or month, if they're unlucky), those distributors send in their reports. Some arrive as CSV exports. Some as formatted Excel files with custom layouts. Some as PDF scans. A few still send typed summaries in email bodies.
          </p>
          <p className="mb-6 text-lg text-primary-600">
            Someone at brand headquarters, often a high-value market analyst or operations manager, now needs to consolidate this. They spend hours copying and pasting, reformatting columns, reconciling different naming conventions (is "Chanel No. 5 100ml" the same as "CH-NO5-100"?), and manually checking for errors.
          </p>
          <p className="mb-6 text-lg text-primary-600">
            Research on manual data entry consistently shows error rates between 1% and 5%, with some studies documenting rates up to 7% depending on task complexity.[12][13] That sounds small until you're managing thousands of SKUs across multiple markets. A single misplaced decimal point in inventory counts can trigger an unnecessary reorder of $50,000 worth of product. A transposed digit in a sales report can make a failing SKU look successful, leading to poor allocation decisions.
          </p>
          <p className="mb-6 text-lg text-primary-600">
            But the financial cost goes beyond errors. It's the opportunity cost of where your team's time actually goes. Industry analysis suggests that teams spend up to 25% of their work hours on non-productive reporting tasks: cleaning data, merging sheets, chasing down missing reports, and reconciling conflicts.[14] For a 10-person operations team at fully-loaded costs of €100,000 per person annually, that's €250,000 per year just maintaining the status quo.
          </p>
          <p className="text-lg text-primary-600">
            More critically, it's slow. By the time a distributor sends their weekly report, someone cleans it, it gets merged into the master file, and analysis begins, the market has moved. In an industry where seasonal spikes matter enormously (40% to 50% of annual prestige fragrance sales happen in Q4 alone), being a week late to see a trend isn't just inconvenient. It's the difference between capitalizing on momentum and missing the window entirely.[15][16]
          </p>
        </section>

        {/* Complexity Explosion */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Why 2025-2026 Is Different: The Complexity Explosion</h2>
          <p className="mb-6 text-lg text-primary-600">These problems have existed for years. Why are they suddenly becoming critical? Three major shifts are converging to make the old system unsustainable:</p>
          
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">First: SKU proliferation is accelerating.</h3>
              <p className="text-primary-600 mb-4">
                The fragrance market is fragmenting into hyper-specific micro-trends at a pace the industry has never seen before. Recent trend analysis identified "boozy notes" (cognac, whiskey, rum-inspired scents) as the number one emerging category.[17] "Lickable perfume" and gourmand fragrances saw search volume increase by 58.3% in 2024.[18] "Functional fragrance," scents designed for sleep, focus, or wellness rather than just pleasant smell, is projected to reach $19.35 billion by 2034.[19]
              </p>
              <p className="text-primary-600">
                Each of these micro-trends spawns dozens of new SKUs. Brands are launching more variations, testing more concepts, and expanding into more niche categories than ever before. Tracking the performance of 2,000 SKUs via Excel is tedious. Tracking 5,000 is nearly impossible. The system that worked when you had 50 core products and 200 variations simply doesn't scale to this new reality.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Second: Regulatory complexity is tightening.</h3>
              <p className="text-primary-600 mb-4">
                The Modernization of Cosmetics Regulation Act (MoCRA), signed into US law in December 2022, represents the biggest expansion of FDA authority over cosmetics in 80 years.[20] Brands now face mandatory facility registration, product listing requirements (enforced since July 2024), adverse event reporting, and safety substantiation requirements. Critically, the upcoming GMP requirements, expected to align with ISO 22716, will effectively require batch-level documentation and traceability across the entire supply chain.[21]
              </p>
              <p className="text-primary-600">
                The International Fragrance Association's 51st Amendment, released in June 2023, introduced 47 new ingredient restrictions, added one prohibited ingredient entirely, and revised 11 existing standards.[22] The implementation deadlines extend through October 2025 for existing formulations, meaning this is hitting right now. What does this mean practically? If a specific allergen gets banned or a batch gets recalled, brands need to instantly identify every single unit of inventory containing that batch across their entire global distribution network. Doing this by emailing distributors and waiting for them to check their Excel files isn't just slow. In a serious safety scenario, it's a liability risk that could cost millions in fines or brand damage.
              </p>
            </div>

            <div>
               <h3 className="text-xl font-bold mb-3">Third: The Middle East market is exploding, and it won't wait.</h3>
               <p className="text-primary-600 mb-4">
                  Multiple market research firms project the Middle East fragrance market growing from $3.76 billion in 2024 to $7.75 billion by 2034, a 7.5% compound annual growth rate.[23] The region is unlike Western markets in important ways: fragrances represent nearly 70% of the prestige beauty category (versus 20-30% in the West), cultural traditions drive much higher per-capita consumption, and seasonal spikes during Ramadan can drive 23% quarterly growth.[24][25]
               </p>
               <p className="text-primary-600">
                  This growth is happening through powerful master distributors like Sagma Corp (representing Hermès, Bulgari, and Lanvin across the Gulf since 2009) and Sara Prestige (distributing to Paris Gallery, Sephora, and Debenhams across Saudi Arabia).[26][27] These are sophisticated operations, but they work on their terms, using their systems. Brands that can seamlessly integrate with these partners without forcing platform changes will win the region. Brands that insist on rigid software requirements will be left behind.
               </p>
            </div>
          </div>
        </section>

        {/* Sell-Out Visibility */}
        <section>
           <h2 className="text-2xl font-bold mb-4">The Sell-Out Visibility Problem</h2>
           <p className="mb-6 text-lg text-primary-600">
             There's a specific data challenge that keeps coming up in industry discussions: the sell-in versus sell-out gap.
           </p>
           <p className="mb-6 text-lg text-primary-600">
             <strong>"Sell-in" data</strong> (what the brand ships to distributors) is easy to track. Brands have perfect visibility into what they're shipping and when. <strong>"Sell-out" data</strong> (what actually sells from distributors to retailers, and ultimately to consumers) is where visibility breaks down almost completely.
           </p>
           <p className="mb-6 text-lg text-primary-600">
             Industry analysts like Jefferies' Ashley Helgans have noted this persistent gap as retailers tighten inventory levels.[28] Brands often don't know what's actually selling until weeks or months after the fact. This creates a cascade of problems:
           </p>
           <ul className="list-disc pl-5 space-y-4 text-lg text-primary-600">
              <li>
                 <strong>You can't replenish what you don't know is missing.</strong> Stockouts happen because a brand doesn't realize a specific market has run dry until a frustrated distributor calls asking why the reorder hasn't shipped yet.
              </li>
              <li>
                 <strong>You can't optimize allocation.</strong> Is that new oud launch struggling in Texas but thriving in Riyadh? Without granular sell-out data, you're making allocation decisions based on instinct rather than evidence.
              </li>
              <li>
                 <strong>You can't spot gray market leakage.</strong> Without unified tracking, products diverted to unauthorized channels go unnoticed until significant price erosion has already occurred. The gray market in fragrances has grown substantially, with some industry insiders noting that volumes have shifted from "limited quantities for grey market" to "selling large quantities."[29][30] This isn't just lost revenue; it's brand damage as counterfeiters increasingly use gray market channels to infiltrate legitimate supply chains.
              </li>
           </ul>
        </section>

        {/* What Actually Works */}
        <section>
          <h2 className="text-2xl font-bold mb-4">What Actually Works: The Intelligence Layer Approach</h2>
          <p className="mb-6 text-lg text-primary-600">
            The solution isn't to change how distributors work. It's to build an intelligence layer that reads what they're already producing.
          </p>
          <p className="mb-6 text-lg text-primary-600">
             Think about what needs to happen: A brand receives reports from distributors in multiple formats (Excel, CSV, PDF, email summaries). Each distributor formats their data differently. Product names don't match across systems. Some reports include qualitative notes like "sales slow due to heatwave" that are valuable context but don't fit in a database.
          </p>
          <p className="mb-6 text-lg text-primary-600">
             The traditional approach is to throw people at this problem. Hire analysts to manually consolidate everything. Accept the errors, the delays, and the wasted time as the cost of doing business.
          </p>
          <p className="mb-6 text-lg text-primary-600">
             The modern approach is to treat this as a data engineering problem that can be solved once, rather than a manual task that must be repeated forever.
          </p>
          <ol className="list-decimal pl-5 space-y-4 text-lg text-primary-600 mb-8">
             <li><strong>Automated ingestion systems</strong> can read Excel files regardless of how they're formatted, extract data from PDFs, and parse relevant information from email bodies.</li>
             <li><strong>Machine learning</strong> can reconcile naming variations automatically, learning that "CH-NO5-100" and "Chanel No. 5 100ml" refer to the same SKU.</li>
             <li><strong>Natural language processing</strong> can extract meaning from those qualitative notes that distributors include, flagging insights like regional weather impacts, competitor activity, or retail buyer feedback that would otherwise get lost in manual consolidation.</li>
          </ol>
          <p className="text-lg text-primary-600 mb-6">
             The result: reports get processed as they arrive, not on Monday morning when someone has time to consolidate them. Errors drop to near zero because machines don't mistype data. Your team stops spending 25% of their time on data cleaning and starts spending 100% of their time on analysis and strategy.
          </p>
          <p className="text-lg text-primary-600">
             Most importantly, you get a unified view across your entire distribution network. United Perfumes in Florida, Nordic Perfume in Latvia, and Sagma in Dubai are all feeding into the same system, giving you truly global visibility for the first time.
          </p>
        </section>

        {/* Leadership Asking */}
        <section>
           <h2 className="text-2xl font-bold mb-4">Moving Forward: What Leadership Should Be Asking</h2>
           <p className="mb-6 text-lg text-primary-600">
              The fragrance industry won't suddenly adopt standardized software across the entire value chain. That ship sailed (or perhaps never left port). The distribution layer is too fragmented, the economics don't support it, and frankly, the flexibility of the current system serves real business needs even as it creates data challenges.
           </p>
           <p className="mb-6 text-lg text-primary-600">
              The brands that will win over the next five years aren't the ones waiting for distribution to modernize. They're the ones building intelligence systems that work with reality as it exists, not as they wish it would be.
           </p>
           <ul className="list-disc pl-5 space-y-4 text-lg text-primary-600 mb-8">
              <li>
                 If your team is spending significant time each week consolidating distributor reports, you're paying a hidden tax of roughly €250,000 annually in wasted productivity for every 10 people involved.
              </li>
              <li>
                 If you can't answer the question "what sold through to consumers in the Dubai market last week" within minutes, you're flying blind in your fastest-growing region.
              </li>
              <li>
                 If a regulatory issue required you to identify every unit of a specific batch across your global distribution network today, how long would that take? Days? Weeks?
              </li>
           </ul>
           <p className="mb-8 text-lg text-primary-600">
              These aren't hypothetical concerns. MoCRA compliance deadlines are here now. The Middle East market won't wait for you to get your data infrastructure sorted out. And your competitors who solve this first will have a significant advantage in allocation, demand planning, and regional strategy.
           </p>
           <p className="text-xl font-bold text-primary-900 border-l-4 border-primary-900 pl-6">
              The good news: this is a solved problem. The technology exists. The question is whether brands will implement it before the cost of not having it becomes too painful to ignore.
           </p>
        </section>

        {/* References */}
        <section className="pt-12 border-t border-primary-200">
           <h3 className="text-sm font-bold uppercase tracking-widest text-primary-400 mb-6">References</h3>
           <ol className="list-decimal pl-5 space-y-2 text-xs text-primary-500 font-mono">
              <li>Givaudan. "About Givaudan." https://www.givaudan.com/our-company/about-givaudan</li>
              <li>ISO. "ISO 22716:2007 - Cosmetics GMP Guidelines." https://www.iso.org/standard/36437.html</li>
              <li>New Directions Aromatics. "Everything You Should Know About Cosmetic GMP." https://www.newdirectionsaromatics.com/blog/everything-you-should-know-about-cosmetic-gmp-good-manufacturing-practices/</li>
              <li>Givaudan. "Achieving our 2025 strategy - Integrated Report 2022." https://integratedreport.givaudan.com/2022/value-creation/achieving-2025-strategy</li>
              <li>Built In. "Marketing Manager - Watches and Fine Jewellery - CHANEL." https://builtin.com/job/marketing-manager-watches-and-fine-jewellery/4064048</li>
              <li>Multiple Shiseido job postings referencing Excel expertise requirements, 2024-2025.</li>
              <li>ZoomInfo. "United Perfumes - Overview." https://www.zoominfo.com/c/united-perfumes/447094765</li>
              <li>Al Hussein Perfumes. Corporate website. https://alhusseinperfumes.com/</li>
              <li>Nordic Perfume operations data, Latvia.</li>
              <li>BFF International. "Fragrance. Fashion. Forever." https://bffgroup.co/</li>
              <li>United Perfumes. Distributor pricing downloads available in Excel format.</li>
              <li>Fluxygen. "The Impact of Human Error Rates in Manual Data Entry." https://fluxygen.com/resources/impact-of-human-error-rates/</li>
              <li>DocuClipper. "67 Data Entry Statistics For 2025." https://www.docuclipper.com/blog/data-entry-statistics/</li>
              <li>Industry productivity analysis for operations teams in consumer goods distribution.</li>
              <li>Circana. "Holiday 2024 Fragrance Trends: A Season of Scent and Luxury." https://www.circana.com/intelligence/blog/2024/whats-in-store-for-fragrances-this-holiday-season/</li>
              <li>NPD Group. Prestige fragrance quarterly sales analysis, 2024.</li>
              <li>Cosmetics Business. "Fragrance Trends Report." May 2025.</li>
              <li>Spate. "Gourmand fragrance search trend analysis." 2024.</li>
              <li>Black Swan Data. "Functional fragrance market projections." 2024-2034.</li>
              <li>FDA. "Modernization of Cosmetics Regulation Act of 2022 (MoCRA)." https://www.fda.gov/cosmetics/cosmetics-laws-regulations/modernization-cosmetics-regulation-act-2022-mocra</li>
              <li>Thermo Fisher Scientific. "Navigating MoCRA And How a LIMS Can Help." https://www.thermofisher.com/blog/connectedlab/navigating-mocra-and-how-a-lims-can-help/</li>
              <li>IFRA. "Notification of the 51st Amendment to the IFRA Standards." https://ifrafragrance.org/latest-updates/press-releases/notification-of-the-51st-amendment-to-the-ifra-standards</li>
              <li>Expert Market Research. "Middle East Fragrance Market Report 2024-2034."</li>
              <li>BW Confidential. "Beautyworld analyzes the changing face of fragrance in the Middle East." https://www.bwconfidential.com/beautyworld-analyzes-the-changing-face-of-fragrance-in-the-middle-east/</li>
              <li>Chalhoub Group. "Ramadan and Eid seasonal impact analysis." 2025.</li>
              <li>Hotel & Catering. "5 Minutes With... SAGMA CORP." https://hotelandcatering.com/interviews-features/5-minutes-sagma-corp</li>
              <li>Sara Group Holdings. "Sara Prestige." https://saragroups.com/sara-prestige/</li>
              <li>WWD. "Global Beauty Industry Challenges: Slowing Demand and Shifting Markets." https://wwd.com/beauty-industry-news/beauty-features/global-beauty-industry-challenges-demand-slows-asia-u-s-1236952965/</li>
              <li>Data&Data. "The Hidden Costs of Discounted Scents: How the Grey Market is Shaping the Perfume Industry." https://data-and-data.com/en/the-hidden-costs-of-discounted-scents-how-the-grey-market-is-shaping-the-perfume-industry/</li>
              <li>Scent City. "How and Why the Grey Market is Harming the Luxury Fragrance Industry." https://www.google.com/search?q=https://www.thescentcity.com/blogs/news/how-and-why-the-grey-market-is-harming-the-luxury-fragrance-industry/</li>
           </ol>
        </section>
      </div>
    )
  }
];

const BlogPage: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const activeArticle = selectedArticleId ? ARTICLES.find(a => a.id === selectedArticleId) : null;

  // AEO/SEO Injection: When an article is open, inject Schema.org JSON-LD
  useEffect(() => {
    const existingScript = document.getElementById('article-schema');
    if (existingScript) existingScript.remove();

    if (activeArticle) {
      const script = document.createElement('script');
      script.id = 'article-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": activeArticle.title,
        "description": activeArticle.excerpt,
        "author": {
          "@type": "Person",
          "name": activeArticle.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "TaskifAI",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.taskifai.com/logo.png"
          }
        },
        "datePublished": "2026-01-07", // Matching content
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.taskifai.com/#articles/${activeArticle.id}`
        }
      });
      document.head.appendChild(script);

      // Update Page Title
      document.title = `${activeArticle.title} | TaskifAI Insights`;
    }

    return () => {
      const script = document.getElementById('article-schema');
      if (script) script.remove();
    };
  }, [activeArticle]);

  return (
    <div className="pt-32 pb-32 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.button
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            if (selectedArticleId) {
                setSelectedArticleId(null);
                window.scrollTo(0, 0);
            } else {
                window.location.hash = '';
            }
          }}
          className="flex items-center gap-2 text-primary-500 hover:text-primary-900 transition-colors mb-12 font-bold text-sm uppercase tracking-wider group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {selectedArticleId ? 'Back to Articles' : 'Back to Home'}
        </motion.button>

        <AnimatePresence mode="wait">
          {selectedArticleId && activeArticle ? (
            /* FULL ARTICLE VIEW */
            <motion.div
                key="article-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="max-w-4xl mx-auto"
            >
                <header className="mb-12 border-b border-primary-200 pb-12">
                   <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-primary-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {activeArticle.category}
                      </span>
                      <span className="text-primary-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                         <Calendar size={12} /> {activeArticle.date}
                      </span>
                      <span className="text-primary-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                         <Clock size={12} /> {activeArticle.readTime}
                      </span>
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
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                         <User size={20} />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-primary-900">{activeArticle.author}</p>
                         <p className="text-[10px] text-primary-500 uppercase tracking-widest font-bold">Founder</p>
                      </div>
                   </div>
                </header>

                <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary-600 hover:prose-a:text-primary-900">
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
            /* LIST VIEW */
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
                    onClick={() => {
                        setSelectedArticleId(article.id);
                        window.scrollTo(0, 0);
                    }}
                    className="bg-white border border-primary-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary-900/5 hover:border-primary-900 transition-all duration-300 flex flex-col group cursor-pointer max-w-4xl"
                    >
                    <div className="mb-6 flex items-center justify-between">
                        <span className="px-3 py-1 bg-primary-50 text-primary-700 text-[10px] font-black uppercase tracking-widest rounded-full">
                        {article.category}
                        </span>
                        <div className="flex items-center gap-4 text-[10px] font-bold text-primary-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime}</span>
                        </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                        {article.title}
                    </h2>
                    {article.subtitle && (
                        <h3 className="text-xl text-primary-500 font-medium mb-4">{article.subtitle}</h3>
                    )}
                    
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

                {/* Newsletter Subscription */}
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