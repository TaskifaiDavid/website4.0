import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, Brain, Search, TrendingUp, Target } from 'lucide-react';

const SCENARIOS = [
  {
    question: "Compare Q3 sales growth between our US and German markets.",
    agent: "The Analyst",
    icon: Search,
    color: "text-blue-600 bg-blue-50",
    answer: "US sales grew 12% driven by new influencers, while Germany flatlined. However, Germany has 20% higher retention. Recommendation: Replicate the US influencer strategy in the DACH region."
  },
  {
    question: "Project the impact on inventory if we run a 20% flash sale this weekend.",
    agent: "The Forecaster",
    icon: TrendingUp,
    color: "text-purple-600 bg-purple-50",
    answer: "You will likely stock out of the 'Night Cream' SKU by Sunday afternoon. I recommend capping the discount on that item or checking safety stock levels immediately."
  },
  {
    question: "Identify the top reason for the drop in Average Order Value (AOV) this week.",
    agent: "The Strategist",
    icon: Target,
    color: "text-brand-600 bg-brand-50",
    answer: "AOV dropped €8 because the 'Bundle & Save' widget is broken on mobile devices. Fixing this is critical—it is costing us roughly €400 per day in lost upsells."
  }
];

type Phase = 'typing_question' | 'thinking' | 'typing_answer' | 'reading' | 'deleting';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('typing_question');
  const [displayQuestion, setDisplayQuestion] = useState('');
  const [displayAnswer, setDisplayAnswer] = useState('');
  const [thinkingStep, setThinkingStep] = useState(0); // 0: Orchestrator, 1: Specialist

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentScenario = SCENARIOS[scenarioIndex];

    // PHASE 1: Typing Question
    if (phase === 'typing_question') {
      if (displayQuestion.length < currentScenario.question.length) {
        timeout = setTimeout(() => {
          setDisplayQuestion(currentScenario.question.slice(0, displayQuestion.length + 1));
        }, 20); // Fast typing speed
      } else {
        timeout = setTimeout(() => setPhase('thinking'), 300);
      }
    }
    
    // PHASE 2: Thinking (Orchestrator -> Agent)
    else if (phase === 'thinking') {
       // Step 1: Orchestrator active
       if (thinkingStep === 0) {
         timeout = setTimeout(() => {
           setThinkingStep(1);
         }, 800);
       } 
       // Step 2: Specialist active
       else if (thinkingStep === 1) {
         timeout = setTimeout(() => {
           setPhase('typing_answer');
           setThinkingStep(0); // Reset for next time
         }, 800);
       }
    }

    // PHASE 3: Typing Answer (Streaming)
    else if (phase === 'typing_answer') {
      if (displayAnswer.length < currentScenario.answer.length) {
        timeout = setTimeout(() => {
          setDisplayAnswer(currentScenario.answer.slice(0, displayAnswer.length + 1));
        }, 15); // Fast reading speed
      } else {
        setPhase('reading');
      }
    }

    // PHASE 4: Reading
    else if (phase === 'reading') {
      timeout = setTimeout(() => {
        setPhase('deleting');
      }, 6000); // Longer read time for complex answers
    }

    // PHASE 5: Deleting / Resetting
    else if (phase === 'deleting') {
      if (displayQuestion.length > 0) {
         timeout = setTimeout(() => {
           setDisplayQuestion('');
           setDisplayAnswer('');
           setScenarioIndex((prev) => (prev + 1) % SCENARIOS.length);
           setPhase('typing_question');
         }, 500);
      } else {
         setDisplayQuestion('');
         setDisplayAnswer('');
         setPhase('typing_question');
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, displayQuestion, displayAnswer, thinkingStep, scenarioIndex]);

  const currentScenario = SCENARIOS[scenarioIndex];
  const CurrentIcon = currentScenario.icon;

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white min-h-[80vh] flex items-center">
      {/* Subtle Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] right-0 w-[600px] h-[600px] bg-brand-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold tracking-wide uppercase mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
              The Future of BI is Here
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-8 leading-[1.1]"
            >
              Your AI team, <br className="hidden lg:block" />
              <span className="text-brand-600">focused only on your goals</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed font-light"
            >
              Our specialized AI agents automatically clean, analyze, and align your sales data, so you can stop guessing and start growing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-gray-900 hover:bg-brand-600 transition-all duration-300 shadow-xl shadow-gray-900/10 hover:shadow-brand-500/25 group w-full sm:w-auto"
              >
                Start Your Pilot
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Chat Graphic with Synchronized Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2 transform transition-transform duration-500 hover:scale-[1.01]">
                <div className="bg-gray-50 rounded-xl p-5 text-left min-h-[240px] flex flex-col justify-end relative">
                    
                    {/* Header status */}
                    <div className="absolute top-4 left-5 right-5 flex justify-between items-start z-20">
                         <div className="flex items-center space-x-2">
                             <div className="w-3 h-3 rounded-full bg-red-400"></div>
                             <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                             <div className="w-3 h-3 rounded-full bg-green-400"></div>
                         </div>
                         <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                           <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                            </span>
                           <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">The Orchestrator Active</div>
                         </div>
                    </div>

                    {/* Thought Process Visualization */}
                    <AnimatePresence>
                      {phase === 'thinking' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute bottom-20 left-5 right-5 mb-2"
                        >
                           <div className="flex items-center gap-3 text-xs font-mono text-gray-400 bg-white/50 p-2 rounded-lg border border-dashed border-gray-200 inline-flex">
                              <div className={`flex items-center gap-2 transition-colors duration-300 ${thinkingStep >= 0 ? 'text-gray-800 font-bold' : ''}`}>
                                <Brain size={14} />
                                <span>Orchestrator</span>
                              </div>
                              <div className="w-4 h-px bg-gray-300"></div>
                              <div className={`flex items-center gap-2 transition-colors duration-300 ${thinkingStep >= 1 ? 'text-gray-800 font-bold' : ''}`}>
                                <CurrentIcon size={14} />
                                <span>{currentScenario.agent}</span>
                              </div>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <div className="space-y-4 w-full relative z-10 mt-10">
                        {/* User Input (Left Side) */}
                        <div className="flex gap-3 items-end w-full">
                             <div className="w-8 h-8 rounded-full bg-gray-900 flex-shrink-0 flex items-center justify-center font-bold text-white text-[10px] tracking-wider">YOU</div>
                             <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm text-gray-900 text-base w-full flex justify-between items-center">
                                 <div className="font-medium w-full">
                                   <span className="inline-block">
                                      {displayQuestion}
                                      <span className={`ml-1 w-0.5 h-4 bg-brand-500 inline-block align-middle ${phase === 'typing_question' ? 'animate-pulse' : 'opacity-0'}`}></span>
                                   </span>
                                 </div>
                                 <div className={`ml-3 p-1.5 rounded-full text-white transition-colors duration-300 flex-shrink-0 ${displayQuestion.length > 0 ? 'bg-brand-500' : 'bg-gray-200'}`}>
                                   <Send size={12} />
                                 </div>
                             </div>
                        </div>
                        
                        {/* Agent Response (Right Side) */}
                        <div className="min-h-[110px] w-full relative">
                          <AnimatePresence mode="wait">
                            {(phase === 'typing_answer' || phase === 'reading') && (
                              <motion.div 
                                key="answer-container"
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="flex gap-3 items-start flex-row-reverse absolute right-0 w-full justify-end"
                              >
                                   <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${currentScenario.color.split(' ')[1]}`}>
                                       <CurrentIcon size={16} className={currentScenario.color.split(' ')[0]} />
                                   </div>
                                   <div className={`bg-brand-50 px-5 py-3 rounded-2xl rounded-br-none text-gray-800 max-w-xl text-sm border border-brand-100 shadow-sm`}>
                                       <div className="flex items-center gap-2 mb-1 justify-start">
                                          <span className="text-[10px] font-bold text-brand-700 uppercase tracking-wider">{currentScenario.agent}</span>
                                          <span className="text-[10px] text-gray-400">Just now</span>
                                       </div>
                                       <p className="text-left leading-relaxed">
                                         {displayAnswer}
                                         <span className={`ml-1 w-0.5 h-3 bg-brand-500 inline-block align-middle ${phase === 'typing_answer' ? 'animate-pulse' : 'opacity-0'}`}></span>
                                       </p>
                                   </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;