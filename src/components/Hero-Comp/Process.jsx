"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const iconVariants = {
  hidden: { scale: 0.5, opacity: 0, rotate: -15 },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], type: "spring", stiffness: 100 }
  },
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const ProcessCard = ({ title, percentage, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className="group relative bg-white/80 backdrop-blur-xl rounded-[24px] p-6 border border-[#1b2856]/5 shadow-[0_8px_32px_rgba(27,40,86,0.05)] overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#1b2856]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
      <h4 className="text-lg font-bold text-[#1b2856] tracking-wide">{title}</h4>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red-500/10 text-[#ec2025] font-mono font-bold text-xs ring-1 ring-brand-red-500/20">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        {percentage}
      </div>
    </div>
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const ProgressBar = ({ progress }) => (
  <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${progress}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ec2025] to-[#f45659] rounded-full shadow-[0_0_15px_rgba(236,32,37,0.3)]"
    />
  </div>
);

export default function Process() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);

  const steps = [
    { 
      id: "01", 
      title: "Strategic Profiling",
      text: "Evaluating academic profiles and career goals to map out highly bespoke global study opportunities.",
      color: "from-[#1b2856] to-brand-blue-500"
    },
    { 
      id: "02", 
      title: "Institutional Matching",
      text: "Curating elite university selections and specialized programs to ensure maximum ROI and cultural alignment.",
      color: "from-[#1b2856] to-indigo-600"
    },
    { 
      id: "03", 
      title: "Execution & Visas",
      text: "Streamlining application execution, securing scholarships, and navigating complex visa procedures flawlessly.",
      color: "from-[#ec2025] to-[#f45659]"
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 lg:py-40 bg-zinc-50 font-sans overflow-hidden">
      
      {/* Background Ambience - Light Version */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-brand-blue-200/40 blur-[120px] rounded-full pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[400px] bg-brand-red-200/30 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* SPLIT LAYOUT ENCOMPASSING ENTIRE CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 xl:gap-20 items-start">
          
          {/* LEFT COLUMN: Headings + Visual Engine */}
          <div className="flex flex-col gap-10 lg:gap-16 w-full">
            
            {/* The Headings */}
            <div className="flex flex-col items-start gap-6 lg:gap-8 w-full pt-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="flex items-center gap-4 relative z-20"
              >
                <span className="w-12 h-[1px] bg-brand-red-500" />
                <p className="font-mono text-[10px] sm:text-xs text-[#1b2856]/60 font-bold uppercase tracking-[0.3em]">
                  The Blueprint
                </p>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="text-[46px] sm:text-[60px] lg:text-[72px] xl:text-[84px] font-medium leading-[0.9] tracking-tight text-[#111827] relative z-20"
              >
                Mastering <br />
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#ec2025] to-orange-500 pr-4 drop-shadow-sm">Precision.</span>
              </motion.h2>
            </div>

            {/* The Visual Engine */}
            <motion.div style={{ y: y1 }} className="mt-8 sm:mt-12 lg:mt-16 xl:mt-24 relative w-full aspect-[3/4] max-w-[440px] mx-auto lg:mx-0 rounded-[2rem] overflow-hidden bg-brand-blue-50 border border-gray-200 shadow-2xl shadow-gray-200/50 group">
              <motion.img 
                style={{ scale: scaleImage }}
                src="/images/sga.jpg" 
                alt="Architectural Planning" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-1000 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2856]/80 via-[#1b2856]/10 to-transparent" />
              
              {/* Overlay Glass Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 bg-white/20 backdrop-blur-xl border border-white/40 p-6 sm:p-8 rounded-[2rem] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#ec2025] mb-2 font-bold bg-white/80 inline-block px-2 py-0.5 rounded-full shadow-sm">Live Status</p>
                  <p className="text-white font-medium text-lg sm:text-xl leading-tight drop-shadow-md">Oxford Intake Confirmed <br/> <span className="text-white/80">For Sept 2026.</span></p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white mx-auto sm:mx-0 flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-[#ec2025] rounded-full animate-ping" />
                  <div className="w-4 h-4 bg-[#ec2025] rounded-full absolute" />
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Action + Stats + Steps */}
          <div className="flex flex-col gap-10 lg:gap-14 w-full pt-2">
            
            {/* Top Right Header Action */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="flex items-center justify-start lg:justify-end gap-4 lg:gap-6 group cursor-pointer relative z-20 pb-2 xl:pb-4"
            >
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#1b2856] uppercase transition-colors hidden sm:block">
                Start Architecture
              </span>
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#1b2856] group-hover:border-[#1b2856] transition-colors duration-500 shadow-sm">
                <svg className="w-5 h-5 text-[#1b2856] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
            
            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-20">
              <ProcessCard title="Placement" percentage="+94%" delay={0.1}>
                <div className="h-16 flex items-end gap-1.5 px-1">
                  {[40, 70, 55, 90, 65, 80, 100].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: 0.3 + (i * 0.1), duration: 0.8, type:"spring" }} className="flex-1 bg-gradient-to-t from-[#1b2856] to-brand-blue-400 rounded-t-sm" />
                  ))}
                </div>
              </ProcessCard>
              
              <ProcessCard title="Visa Success" percentage="+99%" delay={0.2}>
                <div className="flex flex-col justify-center h-16 gap-3">
                  <p className="text-sm text-[#1b2856]/60 font-medium tracking-wide">Approval Rate</p>
                  <ProgressBar progress={99} />
                </div>
              </ProcessCard>
            </div>

            {/* Steps Accordion / List */}
            <div className="flex flex-col mt-8">
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.id} 
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + (idx * 0.15), duration: 0.7 }}
                  className="group relative flex items-start gap-6 py-10 border-t border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <div className={`text-[40px] sm:text-[50px] font-light leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${step.color} opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 shrink-0`}>
                    {step.id}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#111827] text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-[#ec2025] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md group-hover:text-gray-800 transition-colors duration-300">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}