"use client"
import React from 'react';
import { motion } from 'framer-motion';

const iconVariants = {
  hidden: { scale: 0.6, opacity: 0, rotate: -8 },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 120
    }
  },
  hover: {
    scale: 1.12,
    rotate: 3,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const ProcessCard = ({ title, percentage, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="bg-white rounded-[20px] p-5 shadow-lg shadow-gray-100/70 border border-gray-100 flex flex-col gap-4"
  >
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        {icon}
        <h4 className="text-lg font-semibold text-[#2C2C2A] leading-tight">{title}</h4>
      </div>
      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-mono font-bold text-xs shrink-0">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        {percentage}
      </div>
    </div>
    {children}
  </motion.div>
);

const ProgressBar = ({ progress }) => (
  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${progress}%` }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="h-full bg-blue-600 rounded-full"
    />
  </div>
);

export default function Process() {
  const steps = [
    { id: 1, text: "Evaluating academic profiles and career goals to map out bespoke global study opportunities." },
    { id: 2, text: "Advising on university selection and specialized programs to ensure high ROI and cultural fit." },
    { id: 3, text: "Streamlining application execution, securing scholarships, and navigating complex visa procedures." }
  ];

  const revealUp = { 
    hidden: { opacity: 0, y: 35 }, 
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.23, 1, 0.32, 1] } } 
  };
  
  const staggerWrap = { 
    hidden: {}, 
    show: { transition: { staggerChildren: 0.12 } } 
  };

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 bg-[#f4f8fe] font-sans text-[#1b2856] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        
        <div className="text-center mb-12 lg:mb-20">
          <motion.p 
            variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="font-mono text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mb-4"
          >
            [OUR PROCESS]
          </motion.p>
          <motion.h2 
            variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-[40px] sm:text-[50px] lg:text-[62px] font-medium leading-[1.05] tracking-tight text-[#2C2C2A]"
          >
            Architecting Your <br className="hidden sm:block"/> <span className='text-[#ec2124]'>Global Journey.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
          
          {/* LEFT: VISUAL COLUMN (Reduced Width) */}
          <div className="w-full max-w-[480px] mx-auto lg:mx-0">
            
            <div className="bg-white rounded-[28px] p-6 mb-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-[#ec2025] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#ec2025]/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex gap-1.5">
                  {[1, 0.6, 0.3].map((op, i) => (
                    <div key={i} className="w-3.5 h-3.5 rounded-full bg-[#1b2856]" style={{ opacity: op }} />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1b2856] leading-tight mb-6">
                Study Acceptance Flow <br/> 
                <span className="text-[#ec2025]/80 text-base font-medium italic">Closed-loop Success Cycle</span>
              </h3>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-inner bg-gray-50 border border-gray-100">
                <img 
                  src="/images/sga.jpg" 
                  alt="Study Flow" 
                  className="w-full h-full object-cover" 
                />
                
                {/* --- NEW ADDITION: FLOATING CARD BELOW/ON IMAGE --- */}
                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl max-w-[160px]"
                >
                    <p className="text-[10px] font-bold text-[#ec2025] uppercase tracking-wider mb-1">Live Update</p>
                    <p className="text-[12px] font-semibold text-[#1b2856] leading-tight">University of Oxford intake confirmed for Sept 2026.</p>
                </motion.div>
              </div>
            </div>

            {/* STATS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ProcessCard title="Placement" percentage="+94%" icon={<div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>}>
                <div className="h-12 flex items-end gap-1 px-1">
                  {[40, 70, 55, 90, 65, 80, 100].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ delay: i * 0.1 }} className="flex-1 bg-blue-500 rounded-t-sm" />
                  ))}
                </div>
              </ProcessCard>
              <ProcessCard title="Visa" percentage="+99%" icon={<div className="p-2 bg-green-50 text-green-600 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>}>
                <div className="flex flex-col gap-2 py-1"><ProgressBar progress={99} /></div>
              </ProcessCard>
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <motion.div 
            variants={staggerWrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} 
            className="flex flex-col lg:pl-6"
          >
            <motion.div variants={revealUp} className="flex items-center gap-6 mb-12">
              <button className="w-14 h-14 rounded-full bg-[#ec2025] text-white flex items-center justify-center shadow-xl shadow-[#ec2025]/20 hover:scale-105 transition-transform group">
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7" />
                </svg>
              </button>
              <span className="font-mono text-xs font-bold tracking-widest text-[#2C2C2A] border-b-2 border-[#ec2025] pb-1 cursor-pointer">START APPLICATION</span>
            </motion.div>

            <div className="flex flex-col">
              {steps.map((step) => (
                <motion.div key={step.id} variants={revealUp} className="group flex items-start gap-6 py-8 border-t border-dashed border-gray-300 transition-colors hover:bg-white/40 px-4 -mx-4 rounded-2xl">
                  <motion.div variants={iconVariants} whileHover="hover" className="w-16 h-16 shrink-0 rounded-2xl bg-[#1b2856] text-white flex items-center justify-center shadow-lg group-hover:bg-[#ec2025] transition-colors duration-500">
                    <span className="text-xl font-bold font-mono">0{step.id}</span>
                  </motion.div>
                  <p className="text-lg sm:text-xl text-[#4A4A48] font-medium leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}