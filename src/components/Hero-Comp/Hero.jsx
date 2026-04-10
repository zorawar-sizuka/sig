"use client" 

import React, { useState, useEffect, useRef } from 'react';
import Navbar from './NavBar'; 
import Marquee from './Marquee';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const scrollIndRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] selection:bg-[#ec2025] selection:text-white">
      
      {/* --- PARALLAX BACKGROUND (Smoother Scaling) - NO OVERLAY --- */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src="/images/sig_01.jpg" 
          alt="Global Campus" 
          className="w-full h-full object-cover" 
        />
      </div>

      <Navbar />

      {/* --- REFINED CONTENT ANCHOR --- */}
      <div className="absolute inset-0 z-20 flex items-center px-6 md:px-20 lg:px-32">
        <div className="max-w-[700px] mt-20">
          
        <motion.div
  initial={{ opacity: 0, scale: 0.95, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="inline-block relative sm:rounded-[2.5rem] sm:overflow-hidden
    bg-transparent sm:bg-white/25 sm:backdrop-blur-[12px] 
    border-transparent sm:border sm:border-white/30
    shadow-none sm:shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_10px_5px_rgba(255,255,255,0.2)] 
    py-4 sm:px-10 lg:px-12 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 mb-6"
>
  {/* --- THE SHINY EDGES (Replica of your ::before and ::after) --- */}
  
  {/* TOP EDGE LIGHT (::before) */}
  <div className="hidden sm:block absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20" />
  
  {/* LEFT EDGE LIGHT (::after) */}
  <div className="hidden sm:block absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-white/80 via-transparent to-white/30 z-20" />

  {/* CONTENT */}
  <div className="relative z-10">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      className="flex items-center gap-4 mb-3 md:mb-5"
    >
      <span className="w-8 h-[1px] bg-brand-red-500" />
      <p className="font-mono text-[10px] md:text-[11px] text-white tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold">
        Est. Excellence
      </p>
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-[48px] sm:text-[64px] md:text-[88px] font-light text-white leading-[0.95] md:leading-[0.9] tracking-tighter"
    >
      <span className="font-bold text-white tracking-wider">STUDY</span> <br /> 
      <span className="text-[28px] md:text-[40px] font-serif italic text-[#0c39b1] ml-2 md:ml-4">in</span> <br /> 
      <span className="relative inline-block tracking-wide mt-2 md:mt-0">
        GLOBAL.
        <motion.span 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute -bottom-1 md:-bottom-2 left-0 h-[2px] md:h-[3px] bg-brand-red-500 rounded-full"
        />
      </span>
    </motion.h1>
  </div>
</motion.div>



          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="hidden sm:block mt-6 sm:mt-0 p-4 sm:p-5 rounded-2xl bg-brand-blue-900/15 backdrop-blur-[6px] border border-brand-blue-100/10 shadow-sm ml-2 sm:ml-4 max-w-[480px]"
          >
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
              Navigating the complexities of international education with 
              <span className="text-white/95 font-medium"> precision strategy</span> and institutional authority.
            </p>
          </motion.div>






      {/* BUTTONS: with darker tinted blurred backgrounds */}
<div className="mt-8 sm:mt-10 mb-20 sm:mb-10 flex flex-wrap gap-4 sm:gap-6 ml-2 sm:ml-4">
  {/* Book Consultation - Deep Red Blurred BG */}
  <button className="group relative overflow-hidden rounded-full border border-white/20 bg-brand-red-600/70 backdrop-blur-md px-8 py-4 transition-all duration-500 hover:border-brand-red-400 hover:bg-brand-red-500/80 shadow-[0_4px_20px_rgba(236,33,36,0.3)] hover:shadow-[0_8px_30px_rgba(236,33,36,0.5)]">
    <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
      Book Consultation
    </span>
    {/* Hover Fill Layer */}
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(236,33,36,0.8)_0%,rgba(180,20,20,0.8)_100%)] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
  </button>

  {/* Check Eligibility - Deep Navy Blurred BG */}
  <button className="group relative flex items-center gap-4 overflow-hidden rounded-full border border-white/20 bg-brand-blue-900/60 backdrop-blur-md px-6 py-4 transition-all duration-500 hover:border-brand-blue-400 hover:bg-brand-blue-800/80 shadow-[0_4px_20px_rgba(26,40,87,0.3)] hover:shadow-[0_8px_30px_rgba(26,40,87,0.5)]">
    <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 group-hover:text-white">
      Check Eligibility
    </span>

    {/* animated line */}
    <div className="relative h-[1px] w-8 overflow-hidden bg-white/30 transition-all duration-300 group-hover:w-12">
      <div className="absolute inset-0 bg-brand-red-500 opacity-80" />
    </div>
  </button>
</div>




        </div>
      </div>

      {/* --- SILENT SCROLL INDICATOR --- */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-3 opacity-30 hidden md:flex"
      >
        <span className="text-[9px] text-white uppercase tracking-[0.4em] [writing-mode:vertical-lr]">Scroll</span>
      </motion.div>

      {/* MARQUEE: Integrated into the floor with proper margins */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-6 md:px-8 lg:px-12  ">
        <div className="w-full opacity-[0.80] hover:opacity-[0.95] transition-opacity duration-300 hidden md:block ">
          <Marquee />
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div
        ref={scrollIndRef} 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center">
          <span className="text-[11px] text-white/55 mb-2 tracking-wider uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/55 to-transparent" />
        </div>
      </div>
    </main>
  );
}