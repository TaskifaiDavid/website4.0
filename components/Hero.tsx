
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Brain, Terminal, Shield, Leaf, Loader2, Sparkles } from 'lucide-react';

const NeuralCore = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 flex items-center justify-center opacity-40 pointer-events-none">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute w-[600px] h-[600px] rounded-full border border-primary-200"
    />
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      className="absolute w-[450px] h-[450px] rounded-full border border-primary-200/40 border-dashed"
    />
    <div className="absolute w-[200px] h-[200px] bg-primary-200/50 blur-[100px] rounded-full" />
  </div>
);

interface Message {
  id: string;
  text: string;
  type: 'user' | 'orchestrator' | 'agent';
  isTyping?: boolean;
  hasChart?: boolean;
}

const SCENARIOS = [
  {
    user: "Analyze my data for 2025",
    steps: [
      { text: "Connecting to data warehouse... Scanning 2.4M transaction records...", type: 'orchestrator' },
      { text: "COMPREHENSIVE AUDIT:\n\n• Revenue: $12.8M (▲ 24% YoY)\n• Profit Margin: 18% (vs 12% industry avg)\n• Top Channel: LinkedIn Organic (+400% ROI)\n• Leakage: $240k lost in Q3 due to mobile checkout friction.\n• Cohort Health: Enterprise LTV is up 15%, but SMB churn is accelerating.", type: 'agent' },
      { text: "Strategy Generated: I've drafted a mobile optimization roadmap to recover the $240k leakage and an automated retention sequence for SMBs. Deploying to your dashboard now.", type: 'orchestrator' }
    ]
  },
  {
    user: "Forecast 2026",
    steps: [
      { text: "Accessing historical revenue models...", type: 'orchestrator' },
      { text: "Detected steady compound growth of 12% YoY.", type: 'agent' },
      { text: "Projection: $4.2M based on current pipeline velocity.", type: 'orchestrator' }
    ]
  },
  {
    user: "Why did my sales go down in Q3 2025?",
    steps: [
      { text: "Correlating sales volume with external factors...", type: 'orchestrator' },
      { text: "Identified 3-week supply chain halt in APAC region.", type: 'agent' },
      { text: "Root cause: Inventory stockout during peak season.", type: 'orchestrator' }
    ]
  },
  {
    user: "Create a chart showing my yoy growth",
    steps: [
      { text: "Aggregating performance metrics...", type: 'orchestrator' },
      { text: "Comparing 2024 vs 2025 revenue streams.", type: 'agent' },
      { text: "Visualizing growth trajectory.", type: 'orchestrator', hasChart: true }
    ]
  }
];

const LineChart = () => (
  <motion.div 
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    className="mt-3 bg-white p-4 rounded-xl border border-primary-100 shadow-sm w-full"
  >
    <div className="flex items-center justify-between mb-3">
      <div className="text-[10px] font-bold text-primary-900 uppercase tracking-wide">Revenue Growth</div>
      <div className="flex gap-3">
        <div className="flex items-center gap-1.5 text-[9px] text-primary-500 font-bold"><div className="w-2 h-0.5 bg-primary-500 rounded-full"></div>2025</div>
        <div className="flex items-center gap-1.5 text-[9px] text-primary-300 font-bold"><div className="w-2 h-0.5 bg-primary-200 rounded-full"></div>2024</div>
      </div>
    </div>
    <div className="h-24 w-full relative">
       <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="0" x2="100" y2="0" stroke="#F1F5F9" strokeWidth="0.5" />
          <line x1="0" y1="20" x2="100" y2="20" stroke="#F1F5F9" strokeWidth="0.5" />
          <line x1="0" y1="40" x2="100" y2="40" stroke="#F1F5F9" strokeWidth="0.5" />
          
          {/* 2024 Line (Dashed) */}
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M0,35 C15,35 25,30 40,25 C55,20 70,22 85,15 L100,10" 
            fill="none" 
            stroke="#BAE6FD" 
            strokeWidth="1.5" 
            strokeDasharray="3,2"
            strokeLinecap="round"
          />
          
          {/* 2025 Line (Solid) */}
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            d="M0,30 C15,28 25,15 40,12 C55,9 70,15 85,5 L100,0" 
            fill="none" 
            stroke="#3A7CA5" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
       </svg>
    </div>
  </motion.div>
);

const ChatBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isUser = message.type === 'user';
  const isOrchestrator = message.type === 'orchestrator';
  
  const align = isUser ? 'justify-end' : 'justify-start';
  
  // Dynamic styles based on type
  let bubbleStyle = "bg-primary-50 text-primary-900 border border-primary-100"; // Default Agent
  if (isUser) bubbleStyle = "bg-primary-500 text-white shadow-lg shadow-primary-500/20 border-transparent";
  if (isOrchestrator) bubbleStyle = "bg-white text-primary-900 border border-primary-200 shadow-sm";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex ${align} w-full mb-4`}
    >
      <div className={`max-w-[92%] px-4 py-3 rounded-2xl text-xs font-mono leading-relaxed relative ${bubbleStyle}`}>
        {/* Header Label for System Messages */}
        {!isUser && (
          <div className={`flex items-center gap-1.5 mb-1.5 text-[9px] font-bold uppercase tracking-wider ${isOrchestrator ? 'text-primary-600' : 'text-primary-400'}`}>
            {isOrchestrator ? <Brain size={10} /> : <Terminal size={10} />}
            {isOrchestrator ? 'Orchestrator' : 'Analyst Node'}
          </div>
        )}
        
        <span className="whitespace-pre-wrap">{message.text}</span>
        
        {message.hasChart && !message.isTyping && <LineChart />}

        {/* Cursor for typing effect */}
        {message.isTyping && (
          <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1.5 h-3 bg-current ml-1 align-middle" 
          />
        )}
      </div>
    </motion.div>
  );
};

const ChatAnimation = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    
    const typeText = async (fullText: string, onUpdate: (text: string) => void) => {
      let currentText = "";
      const chars = fullText.split("");
      for (let i = 0; i < chars.length; i++) {
        if (!isMounted.current) return;
        currentText += chars[i];
        onUpdate(currentText);
        await new Promise(r => setTimeout(r, 15 + Math.random() * 20)); 
      }
    };

    const runScenario = async (scenarioIndex: number) => {
      if (!isMounted.current) return;

      const scenario = SCENARIOS[scenarioIndex];
      setMessages([]); // Clear previous chat

      // 1. User Types
      const userMsgId = `user-${Date.now()}`;
      setMessages([{ id: userMsgId, text: "", type: 'user', isTyping: true }]);
      
      await typeText(scenario.user, (text) => {
        setMessages(prev => prev.map(m => m.id === userMsgId ? { ...m, text } : m));
      });
      
      setMessages(prev => prev.map(m => m.id === userMsgId ? { ...m, isTyping: false } : m));
      
      // 2. Thinking Pause
      setIsThinking(true);
      await new Promise(r => setTimeout(r, 800)); // Thinking delay
      setIsThinking(false);

      // 3. Process Steps (Orchestrator/Agent responses)
      for (let i = 0; i < scenario.steps.length; i++) {
        if (!isMounted.current) return;
        const step = scenario.steps[i] as any;
        const msgId = `msg-${i}-${Date.now()}`;
        
        setMessages(prev => [...prev, { id: msgId, text: "", type: step.type, isTyping: true, hasChart: step.hasChart }]);

        await typeText(step.text, (text) => {
          setMessages(prev => prev.map(m => m.id === msgId ? { ...m, text } : m));
        });

        setMessages(prev => prev.map(m => m.id === msgId ? { ...m, isTyping: false } : m));
        
        // Extra pause if there is a chart to let it animate
        if (step.hasChart) await new Promise(r => setTimeout(r, 2500));
        
        await new Promise(r => setTimeout(r, 600));
      }

      // 4. Hold final state then restart
      await new Promise(r => setTimeout(r, 5000));
      
      if (isMounted.current) {
        const nextIndex = (scenarioIndex + 1) % SCENARIOS.length;
        runScenario(nextIndex);
      }
    };

    runScenario(0);

    return () => { isMounted.current = false; };
  }, []);

  return (
    // Updated max-width to 460px (approx 20% wider than sm)
    <div className="w-full max-w-[460px] h-[380px] bg-white/90 backdrop-blur-xl rounded-2xl border border-primary-200 shadow-2xl shadow-primary-900/5 p-6 flex flex-col relative overflow-hidden group ring-1 ring-primary-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-primary-100 pb-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2.5 w-2.5">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-800/60 font-mono">TaskifAI Core</span>
        </div>
        <div className="text-[10px] font-mono text-primary-400">v2.4.0</div>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 flex flex-col justify-end overflow-hidden pb-2">
        <AnimatePresence mode="popLayout">
          {messages.map((m) => (
            <ChatBubble key={m.id} message={m} />
          ))}
          {isThinking && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               className="flex items-center gap-2 text-primary-500 text-xs font-mono ml-1 mb-2"
             >
               <Loader2 size={12} className="animate-spin" />
               <span>Thinking...</span>
             </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Input Field (Visual Only) */}
      <div className="h-10 mt-2 bg-primary-50/30 rounded-lg border border-primary-100/50 flex items-center px-3 shrink-0">
         <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden px-4">
      <NeuralCore />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-primary-200 text-primary-700 text-[10px] font-bold uppercase tracking-[0.15em] mb-8 shadow-sm">
            <Sparkles size={12} className="text-primary-500" />
            Collaborative Intelligence
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-900 leading-[1.05] tracking-tight mb-8">
            AI Agents for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 whitespace-nowrap">Brand Intelligence.</span>
          </h1>

          <p className="text-lg text-primary-900/70 max-w-lg mb-10 leading-relaxed font-medium">
            Move beyond the manual grind of stitching together fragmented reports. TaskifAI connects your reseller data to a sovereign board of specialized agents, Analyst, Forecaster, and Strategist, to automate data cleaning and unlock high-level strategy in a secure, private vault.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-4 bg-primary-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 hover:bg-primary-600 transition-colors"
            >
              Hire Your AI Team
              <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end w-full"
        >
          <div className="relative z-10 w-full flex justify-center lg:justify-end">
             <ChatAnimation />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
