"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Create a motion-enabled Link component
const MotionLink = motion(Link);

export default function CTA() {
  return (
    <section className="relative w-full bg-[#f9faff] py-24 md:py-40 px-6 overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#1b2856]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[900px] mx-auto flex flex-col items-center relative z-10 text-center">

        {/* --- MINI LABEL --- */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-8 rounded-full bg-[#ec2025] flex items-center justify-center shadow-lg shadow-[#1b2856]/20">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <span className="text-[12px] text-[#1b2856] font-bold uppercase tracking-[0.2em]">
            Get in Touch
          </span>
        </motion.div>

        {/* --- HEADLINE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[38px] md:text-[56px] leading-[1.1] tracking-[-0.03em] text-[#1b2856] font-light max-w-[820px]"
        >
          Partner with experts who guide your <span className="font-bold italic"><span className="text-[#ec2025]">global journey.</span></span>
        </motion.h2>

        {/* --- SUBTEXT --- */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-[17px] md:text-[19px] text-[#1b2856]/60 max-w-[620px] leading-relaxed font-medium"
        >
          Let’s help you choose the right universities, secure admits, and
          achieve your study abroad goals with clarity and confidence.
        </motion.p>

        {/* --- BUTTON GROUP --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >

          {/* Secondary: Services Route */}
          <MotionLink 
            href="/services"
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full bg-white text-[#1b2856] text-[13px] font-bold uppercase tracking-widest border border-gray-100 shadow-sm transition-colors hover:bg-gray-50 cursor-pointer"
          >
            Our Services
          </MotionLink>

          {/* Primary: Contact Route */}
          <MotionLink 
            href="/contact"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 pl-8 pr-3 py-3 rounded-full bg-[#1b2856] text-white text-[13px] font-bold uppercase tracking-widest transition-all duration-500 hover:bg-[#16224a] hover:shadow-2xl hover:shadow-[#1b2856]/30 cursor-pointer"
          >
            Contact Us

            {/* Red Arrow Bubble with Motion */}
            <motion.div 
              variants={{
                hover: { x: 5, backgroundColor: "#e42027" }
              }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors duration-300"
            >
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.div>
          </MotionLink>

        </motion.div>
      </div>
    </section>
  );
}