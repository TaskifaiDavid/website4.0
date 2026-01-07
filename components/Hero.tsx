import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain, Terminal, Loader2, Sparkles, FileSpreadsheet, Database } from 'lucide-react';

const DataTransformationVisual = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 flex items-center justify-center opacity-20 pointer-events-none">
       {/* Central Unified Core */}
       <div className="relative">
          <motion.div 
             animate={{ scale: [1, 1.05, 1] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="w-64 h-64 rounded-full bg-primary-100/50 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="relative z-10 w-32 h-32 bg-white rounded-2xl border border-primary-200 shadow-xl flex flex-col items-center justify-center">
             <Database size={40} className="text-primary-900 mb-2" />
             <div className="text-[10px] font-bold text-primary-900 uppercase tracking-widest">Unified</div>
          </div>

          {/* Orbiting Messy Files */}
          {[...Array(6)].map((_, i) => {
             const angle = (i * 60) * (Math.PI / 180);
             const radius = 160;
             const x = Math.cos(angle) * radius;
             const y = Math.sin(angle) * radius;
             
             return (
               <motion.div
                  key={i}
                  initial={{ x, y, opacity: 0 }}
                  animate={{ 
                    x: [x, 0], 
                    y: [y, 0], 
                    opacity: [1, 0],
                    scale: [1, 0.5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-14 bg-white border border-primary-200 rounded shadow-sm flex items-center justify-center"
               >
                  <FileSpreadsheet size={20} className="text-primary-300" />
               </motion.div>
             )
          })}
       </div>
    </div>
  );
};

interface Message {
  id: string;
  text: string;
  type: 'user' | 'orchestrator' | 'agent';
  isTyping?: boolean;
}

const SCENARIOS = [
  {
    user: "How are we tracking against Q4 goals?",
    steps: [
      { text: "Pulling data from 12 resellers + Shopify...", type: 'orchestrator' },
      { text: "SNAPSHOT: €2.1M revenue (87% of Q4 target). Douglas up 24% MoM. Lyko flat. Sephora flagged: inventory gap detected.", type: 'agent' },
      { text: "Risk: You'll stock out of Night Cream in DE market by Dec 18. Recommend emergency production order of 2,400 units within 10 days.", type: 'orchestrator' }
    ]
  },
  {
    user: "Why did sales drop in October?",
    steps: [
      { text: "Cross-referencing sell-through rates with inventory data...", type: 'orchestrator' },
      { text: "Correlation found: 3-week supply chain delay in APAC region caused stockouts across 4 key SKUs during peak season.", type: 'agent' },
      { text: "Impact: €187K in lost revenue. Prevention: Earlier safety stock buffer of +15% on fast-movers would have covered demand.", type: 'orchestrator' }
    ]
  },
  {
    user: "Which reseller should we prioritize for marketing spend?",
    steps: [
      { text: "Comparing performance across all channels...", type: 'agent' },
      { text: "Douglas: €420K YTD, 18% margin, 2.1x inventory turn rate. Recommendation: Increase allocation by 30%. Their buyer demographics align with your premium positioning.", type: 'orchestrator' }
    ]
  }
];

const ChatBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isUser = message.type === 'user';
  const isOrchestrator = message.type === 'orchestrator';
  
  const align = isUser ? 'justify-end' : 'justify-start';
  
  // Dynamic styles based on type
  let bubbleStyle = "bg-primary-50 text-primary-900 border border-primary-200"; // Default Agent
  if (isUser) bubbleStyle = "bg-primary-900 text-white shadow-lg shadow-primary-900/10 border-transparent";
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
          <div className={`flex items-center gap-1.5 mb-1.5 text-[9px] font-bold uppercase tracking-wider text-primary-500`}>
            {isOrchestrator ? <Brain size={10} /> : <Terminal size={10} />}
            {isOrchestrator ? 'Strategist' : 'Analyst'}
          </div>
        )}
        
        <span className="whitespace-pre-wrap">{message.text}</span>
        
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
        
        setMessages(prev => [...prev, { id: msgId, text: "", type: step.type, isTyping: true }]);

        await typeText(step.text, (text) => {
          setMessages(prev => prev.map(m => m.id === msgId ? { ...m, text } : m));
        });

        setMessages(prev => prev.map(m => m.id === msgId ? { ...m, isTyping: false } : m));
        
        await new Promise(r => setTimeout(r, 1200));
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
    // Fixed size: width 380px, height 460px.
    <div className="w-full sm:w-[380px] h-[460px] bg-white/80 backdrop-blur-xl rounded-2xl border border-primary-200 shadow-2xl shadow-primary-900/5 p-6 flex flex-col relative overflow-hidden group ring-1 ring-primary-100 mx-auto lg:mr-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-primary-100 pb-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2.5 w-2.5">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-300 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-900"></span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-900/60 font-mono">TaskifAI Core</span>
        </div>
        <div className="text-[10px] font-mono text-primary-400">Live Demo</div>
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
               className="flex items-center gap-2 text-primary-600 text-xs font-mono ml-1 mb-2"
             >
               <Loader2 size={12} className="animate-spin" />
               <span>Processing wholesale data...</span>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden px-4">
      <DataTransformationVisual />
      
      {/* Adjusted Grid Columns: 1.4fr for text, 0.6fr for chat to prioritize headline width */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-primary-200 text-primary-700 text-[10px] font-bold uppercase tracking-[0.15em] mb-8 shadow-sm">
            <Sparkles size={12} className="text-primary-900" />
            The Future of Operations
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-extrabold text-primary-900 leading-[1.05] tracking-tight mb-6">
            Stop Drowning in <br />
            <span className="text-primary-700">Reseller Spreadsheets.</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-primary-900 mb-6 tracking-tight">
            Start Making Strategic Decisions.
          </p>

          <p className="text-base sm:text-lg text-primary-600 max-w-lg mb-10 leading-relaxed font-medium">
            TaskifAI is the only platform built to handle the messy reality of wholesale data. We automatically clean and unify reports from all your resellers — giving you back your valuable time.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-8 py-4 bg-primary-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary-900/10 hover:bg-black transition-colors"
              >
                Book a Demo
                <ArrowRight size={16} />
              </motion.a>
            </div>
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