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
    <main className="relative w-full h-[100svh] overflow-hidden bg-[#0a0a0a] selection:bg-[#ec2025] selection:text-white">
      
      {/* --- PARALLAX BACKGROUND (Smoother Scaling) - NO OVERLAY --- */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src="/images/siuk.jpg" 
          alt="Global Campus" 
          className="w-full h-full object-cover" 
        />
      </div>

      <Navbar />

      {/* --- REFINED CONTENT ANCHOR --- */}
      <div className="absolute inset-0 z-20 flex items-center px-6 md:px-20 lg:px-32">
        <div className="max-w-[700px]">
          
          {/* Top Label: Mono but softer */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-[1px] bg-[#ec2025]" />
            <p className="font-mono text-[11px] text-white/50 tracking-[0.5em] uppercase">
              Est. Excellence
            </p>
          </motion.div>

          {/* Headline: The "Breath" Layout */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-[52px] md:text-[88px] font-light text-white leading-[0.9] tracking-tighter"
          >
            <span className="font-bold text-white tracking-wider">STUDY</span> <br /> 
            <span className="text-[30px] md:text-[40px] font-serif italic opacity-70">in</span> <br /> 
            <span className="relative inline-block tracking-wide">
              GLOBAL.
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute -bottom-2 left-0 h-[3px] bg-[#ec2025]/80"
              />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-10 text-white/80 text-base md:text-lg leading-relaxed max-w-[480px] font-light"
          >
            Navigating the complexities of international education with 
            <span className="text-white/80"> precision strategy</span> and institutional authority.
          </motion.p>






      {/* BUTTONS: with darker tinted blurred backgrounds */}
<div className="mt-12 flex flex-wrap gap-6">
  {/* Book Consultation - Deep Red Blurred BG */}
  <button className="group relative overflow-hidden rounded-full border border-white/10 bg-[#9b1418]/60 backdrop-blur-[12px] px-8 py-4 transition-all duration-500 hover:border-[#ec2025]/60 hover:bg-[#ec2025]/40">
    <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-white">
      Book Consultation
    </span>
    {/* Hover Fill Layer */}
    <div className="absolute inset-0 bg-[linear-gradient(135deg,#ec2025_0%,#d91c22_100%)] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
  </button>

  {/* Check Eligibility - Deep Navy Blurred BG */}
  <button className="group relative flex items-center gap-4 overflow-hidden rounded-full border border-[#1b2856]/40 bg-[#0f1733]/70 backdrop-blur-[12px] px-6 py-4 transition-all duration-500 hover:border-[#1b2856]/60 hover:bg-[#1b2856]/50">
    <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 group-hover:text-white">
      Check Eligibility
    </span>

    {/* animated line */}
    <div className="relative h-[1px] w-8 overflow-hidden bg-white/30 transition-all duration-300 group-hover:w-12">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#1b2856_0%,#ec2025_100%)] opacity-80" />
    </div>

    {/* subtle glow layer */}
    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 bg-[#1b2856]/30 blur-xl" />
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
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-6 md:px-8 lg:px-12 pb-4 sm:pb-6 md:pb-8">
        <div className="w-full opacity-[0.80] hover:opacity-[0.95] transition-opacity duration-300 hidden md:block">
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