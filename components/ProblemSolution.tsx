import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingUp, Target, Brain, X, Send, BarChart2, PieChart, Activity, AlertCircle, Database, Zap } from 'lucide-react';

const CHART_SCENARIOS = [
  {
    type: 'bar_horizontal',
    q: "Show me top 5 bestsellers this month",
    a: "Here are your leaders. 'Midnight Serum' is outperforming expectations by 15%.",
    title: "Top Products (Revenue)",
    subtitle: "Sep 2025",
    agent: "The Analyst",
    icon: Search,
    colorClass: "text-blue-600 bg-blue-50",
    data: [
      { label: "Midnight Serum", value: 100, display: "€124k", color: "bg-brand-500" },
      { label: "Velvet Mist", value: 82, display: "€101k", color: "bg-brand-400" },
      { label: "Day Glow", value: 65, display: "€80k", color: "bg-brand-300" },
      { label: "Night Repair", value: 48, display: "€59k", color: "bg-brand-200" },
      { label: "Eye Lift", value: 35, display: "€43k", color: "bg-brand-100" },
    ]
  },
  {
    type: 'bar_vertical',
    q: "Visualize traffic trend for last 7 days",
    a: "Traffic spiked on Tuesday following the influencer campaign launch.",
    title: "Daily Active Users",
    subtitle: "Last 7 Days",
    agent: "The Forecaster",
    icon: TrendingUp,
    colorClass: "text-purple-600 bg-purple-50",
    data: [
      { label: "Mon", value: 40, display: "4.2k", color: "bg-indigo-300" },
      { label: "Tue", value: 85, display: "8.5k", color: "bg-indigo-500" },
      { label: "Wed", value: 60, display: "6.0k", color: "bg-indigo-400" },
      { label: "Thu", value: 55, display: "5.5k", color: "bg-indigo-300" },
      { label: "Fri", value: 70, display: "7.0k", color: "bg-indigo-400" },
      { label: "Sat", value: 90, display: "9.0k", color: "bg-indigo-600" },
      { label: "Sun", value: 80, display: "8.0k", color: "bg-indigo-500" },
    ]
  },
  {
    type: 'donut',
    q: "Break down marketing spend by channel",
    a: "Paid Social accounts for 55% of spend. Search is optimized at 25%.",
    title: "Marketing Mix",
    subtitle: "Q3 2025",
    agent: "The Strategist",
    icon: Target,
    colorClass: "text-brand-600 bg-brand-50",
    data: [
      { label: "Social", value: 55, display: "55%", strokeColor: "stroke-violet-500", legendColor: "bg-violet-500" },
      { label: "Search", value: 25, display: "25%", strokeColor: "stroke-cyan-400", legendColor: "bg-cyan-400" },
      { label: "Email", value: 15, display: "15%", strokeColor: "stroke-emerald-400", legendColor: "bg-emerald-400" },
      { label: "Other", value: 5, display: "5%", strokeColor: "stroke-slate-300", legendColor: "bg-slate-300" },
    ]
  }
];

const ChartSimulation = () => {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [phase, setPhase] = useState<'typing_q' | 'thinking' | 'typing_a' | 'drawing' | 'reading' | 'reset'>('typing_q');
  const [qText, setQText] = useState('');
  const [aText, setAText] = useState('');
  const [thinkingStep, setThinkingStep] = useState(0);
  
  const currentScenario = CHART_SCENARIOS[scenarioIndex];
  const CurrentIcon = currentScenario.icon;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // PHASE 1: Typing Question
    if (phase === 'typing_q') {
      if (qText.length < currentScenario.q.length) {
        timeout = setTimeout(() => setQText(currentScenario.q.slice(0, qText.length + 1)), 30);
      } else {
        timeout = setTimeout(() => setPhase('thinking'), 500);
      }
    } 
    
    // PHASE 2: Thinking (Simulated Orchestrator)
    else if (phase === 'thinking') {
       // Step 1: Orchestrator active
       if (thinkingStep === 0) {
         timeout = setTimeout(() => {
           setThinkingStep(1);
         }, 600);
       } 
       // Step 2: Specialist active
       else if (thinkingStep === 1) {
         timeout = setTimeout(() => {
           setPhase('typing_a');
           setThinkingStep(0); 
         }, 600);
       }
    } 
    
    // PHASE 3: Typing Answer
    else if (phase === 'typing_a') {
      if (aText.length < currentScenario.a.length) {
        timeout = setTimeout(() => setAText(currentScenario.a.slice(0, aText.length + 1)), 20);
      } else {
        timeout = setTimeout(() => setPhase('drawing'), 200);
      }
    } 
    
    // PHASE 4: Drawing Chart
    else if (phase === 'drawing') {
      timeout = setTimeout(() => setPhase('reading'), 1000);
    } 
    
    // PHASE 5: Reading / Hold
    else if (phase === 'reading') {
      timeout = setTimeout(() => setPhase('reset'), 5000);
    } 
    
    // PHASE 6: Reset
    else if (phase === 'reset') {
      setQText('');
      setAText('');
      setScenarioIndex((prev) => (prev + 1) % CHART_SCENARIOS.length);
      setPhase('typing_q');
    }

    return () => clearTimeout(timeout);
  }, [phase, qText, aText, currentScenario, scenarioIndex, thinkingStep]);

  // Helper for Donut Chart calculation
  const renderDonut = () => {
    let cumulativePercent = 0;
    const radius = 35;
    const circumference = 2 * Math.PI * radius;

    return (
      <div className="flex items-center justify-center h-40 gap-6">
        <div className="relative w-28 h-28 flex-shrink-0">
           <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
             {currentScenario.data.map((item, i) => {
               const percent = item.value / 100;
               const strokeDasharray = `${percent * circumference} ${circumference}`;
               const strokeDashoffset = -cumulativePercent * circumference;
               cumulativePercent += percent;
               
               return (
                 <motion.circle
                   key={i}
                   cx="50"
                   cy="50"
                   r={radius}
                   fill="transparent"
                   strokeWidth="18"
                   className={item.strokeColor || "stroke-gray-200"} 
                   strokeDasharray={strokeDasharray}
                   strokeDashoffset={strokeDashoffset}
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                 />
               );
             })}
           </svg>
        </div>
        <div className="space-y-1.5 min-w-[100px]">
          {currentScenario.data.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="flex items-center gap-2 text-[10px]"
            >
              <div className={`w-2.5 h-2.5 rounded-full ${item.legendColor || item.color}`}></div>
              <span className="text-gray-600 font-medium">{item.label}</span>
              <span className="text-gray-400 ml-auto">{item.display}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // Helper for Vertical Bar Chart
  const renderVerticalBar = () => {
    return (
      <div className="h-40 flex items-end justify-between gap-1.5 px-2 pt-4">
        {currentScenario.data.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1 w-full h-full justify-end group relative">
            {/* Tooltip on Hover */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[9px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {item.display}
            </div>
            
            {/* Background Track */}
            <div className="w-full h-full absolute bottom-0 bg-gray-50 rounded-t-md -z-10" />
            
            <motion.div 
              initial={{ height: "0%" }}
              animate={{ height: `${item.value}%` }}
              transition={{ duration: 0.8, delay: i * 0.1, type: "spring", damping: 15 }}
              className={`w-full rounded-t-md ${item.color} opacity-90 hover:opacity-100 transition-opacity min-h-[4px]`}
            />
            <span className="text-[9px] text-gray-400 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    );
  };

  // Helper for Horizontal Bar Chart
  const renderHorizontalBar = () => {
    return (
      <div className="space-y-2.5">
        {currentScenario.data.map((item, i) => (
          <div key={i} className="relative">
            <div className="flex justify-between text-[10px] text-gray-500 mb-1">
              <span className="font-medium text-gray-700">{item.label}</span>
              <span>{item.display}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                className={`h-full rounded-full ${item.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-[500px] mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col min-h-[460px] transform transition-transform duration-500 hover:scale-[1.01]">
      <div className="bg-gray-50 rounded-xl p-5 text-left flex-1 flex flex-col relative">
        
        {/* Header status (Matches Hero) */}
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

        {/* Thinking Animation (Matches Hero) */}
        <AnimatePresence>
          {phase === 'thinking' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-24 left-5 right-5 z-10"
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

        <div className="mt-auto space-y-4 w-full relative z-10 pt-12">
           {/* User Input */}
           <div className="flex gap-3 items-end w-full">
               <div className="w-8 h-8 rounded-full bg-gray-900 flex-shrink-0 flex items-center justify-center font-bold text-white text-[10px] tracking-wider">YOU</div>
               <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm text-gray-900 text-sm w-full flex justify-between items-center">
                   <div className="font-medium w-full">
                     <span className="inline-block">
                        {qText}
                        <span className={`ml-1 w-0.5 h-4 bg-brand-500 inline-block align-middle ${phase === 'typing_q' ? 'animate-pulse' : 'opacity-0'}`}></span>
                     </span>
                   </div>
                   <div className={`ml-3 p-1.5 rounded-full text-white transition-colors duration-300 flex-shrink-0 ${qText.length > 0 ? 'bg-brand-500' : 'bg-gray-200'}`}>
                     <Send size={12} />
                   </div>
               </div>
           </div>

           {/* Agent Response + Chart */}
           <AnimatePresence mode="wait">
             {(phase === 'typing_a' || phase === 'drawing' || phase === 'reading') && (
               <motion.div 
                 key={scenarioIndex}
                 initial={{ opacity: 0, y: 10, scale: 0.98 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: -10, scale: 0.98 }}
                 className="flex gap-3 items-start flex-row-reverse w-full"
               >
                   <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${currentScenario.colorClass.split(' ')[1]}`}>
                       <CurrentIcon size={16} className={currentScenario.colorClass.split(' ')[0]} />
                   </div>
                   
                   <div className="flex flex-col gap-2 max-w-[90%] w-full items-end">
                     {/* Text Bubble */}
                     <div className={`bg-brand-50 border border-brand-100 px-5 py-3 rounded-2xl rounded-br-none text-gray-800 text-sm shadow-sm w-full text-left`}>
                        <div className="flex items-center gap-2 mb-1 justify-start">
                            <span className="text-[10px] font-bold text-brand-700 uppercase tracking-wider">{currentScenario.agent}</span>
                            <span className="text-[10px] text-gray-400">Just now</span>
                        </div>
                        <p className="leading-relaxed">
                          {aText}
                          <span className={`ml-1 w-0.5 h-3 bg-brand-500 inline-block align-middle ${phase === 'typing_a' ? 'animate-pulse' : 'opacity-0'}`}></span>
                        </p>
                     </div>

                     {/* Chart Card */}
                     {(phase === 'drawing' || phase === 'reading') && (
                       <motion.div 
                         initial={{ opacity: 0, height: 0, scale: 0.95 }}
                         animate={{ opacity: 1, height: 'auto', scale: 1 }}
                         className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg w-full overflow-hidden mt-1"
                       >
                         <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-2">
                            <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                              {currentScenario.type === 'bar_horizontal' && <BarChart2 size={14} className="text-brand-500" />}
                              {currentScenario.type === 'bar_vertical' && <Activity size={14} className="text-indigo-500" />}
                              {currentScenario.type === 'donut' && <PieChart size={14} className="text-violet-500" />}
                              {currentScenario.title}
                            </h4>
                            <span className="text-[9px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">{currentScenario.subtitle}</span>
                         </div>
                         
                         {currentScenario.type === 'bar_horizontal' && renderHorizontalBar()}
                         {currentScenario.type === 'bar_vertical' && renderVerticalBar()}
                         {currentScenario.type === 'donut' && renderDonut()}

                       </motion.div>
                     )}
                   </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const ProblemSolution: React.FC = () => {
  const team = [
    { 
      name: "The Orchestrator", 
      role: "Team Lead", 
      icon: Brain, 
      desc: "Your mission control. It breaks down vague requests like 'why are we down?' into actionable tasks, delegating them to the right specialists instantly." 
    },
    { 
      name: "The Strategist", 
      role: "Goal Alignment", 
      icon: Target, 
      desc: "Your business conscience. It understands your 'North Star' metrics and filters every insight through that lens to ensure you stay focused on what matters." 
    },
    { 
      name: "The Analyst", 
      role: "Data Processing", 
      icon: Search, 
      desc: "Your data scientist. It connects to your chaotic spreadsheets and platforms, cleaning and merging millions of rows to find the hidden truth in seconds." 
    },
    { 
      name: "The Forecaster", 
      role: "Prediction", 
      icon: TrendingUp, 
      desc: "Your crystal ball. It uses historical patterns to model future outcomes, warning you about stockouts or revenue dips before they actually happen." 
    }
  ];

  return (
    <>
      {/* SECTION 1: THE DATA DISCONNECT (PROBLEM) */}
      <section id="problem" className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              The Data Disconnect
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-16">
              Operations managers are drowning in data but starved for wisdom. 
              Dashboards show you <strong>what</strong> happened, but they fail to explain <strong>why</strong> it matters or <strong>how</strong> to fix it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Analysis Paralysis", desc: "Hours wasted manually cleaning spreadsheets instead of making decisions.", icon: AlertCircle },
               { title: "Strategic Drift", desc: "Daily actions are disconnected from your quarterly 'North Star' goals.", icon: Database },
               { title: "Reactive Decisions", desc: "Looking at last month's report means you're always one step behind.", icon: Zap }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center"
               >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-gray-900">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: BUSINESS CONTEXT MANAGER (SOLUTION) */}
      <section id="solution" className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900 rounded-full blur-3xl opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900 rounded-full blur-3xl opacity-10 pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT COLUMN: Interactive Chat Chart Demo */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 w-full"
            >
               <ChartSimulation />
            </motion.div>

            {/* RIGHT COLUMN: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-400 text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
                The Game Changer
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Business Context Manager
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                This is what makes TaskifAI different. You set your strategic objectives, your <strong>"North Star"</strong>, directly within the platform. 
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                For example: <em>"Increase customer retention by 10%, this quarter."</em>
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                This context guides every action your AI team takes. The AI finally understands <strong>why</strong> you're asking, moving from simple automation to true strategic partnership.
              </p>
              
              <div className="pt-4">
                 <div className="flex items-center gap-4 text-sm font-medium text-brand-400">
                   <div className="h-px bg-brand-500/30 flex-1"></div>
                   Goal-Alignment is Built-In
                   <div className="h-px bg-brand-500/30 flex-1"></div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: EXECUTIVE TEAM */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Meet Your New Executive Team</h2>
             <p className="text-gray-500 mt-3">A dedicated squad of specialists working in unison.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-gray-200 rounded-2xl h-40 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
              >
                 {/* Default State: Icon & Name */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4 transform p-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 text-gray-700 group-hover:scale-110 transition-transform">
                        <member.icon size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm text-center">{member.name}</h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{member.role}</p>
                 </div>

                 {/* Hover State: Description */}
                 <div className="absolute inset-0 flex items-center justify-center p-5 bg-gray-50 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-center text-[11px] text-gray-600 leading-relaxed font-medium">
                      "{member.desc}"
                    </p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;