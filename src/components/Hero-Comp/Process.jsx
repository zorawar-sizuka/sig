"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Process() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const barriers = [
    { 
      title: "Strategic Profiling", 
      desc: "Evaluating academic profiles and career goals to map out highly bespoke global study opportunities.",
    },
    { 
      title: "Institutional Matching", 
      desc: "Curating elite university selections and specialized programs to ensure maximum ROI and cultural alignment.",
    },
    { 
      title: "Execution & Visas", 
      desc: "Streamlining application execution, securing scholarships, and navigating complex visa procedures flawlessly.",
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 lg:py-40 bg-white font-sans overflow-hidden text-[#1b2856]">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-red-50/20 blur-[120px] rounded-full pointer-events-none opacity-40" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">
          
          {/* LEFT CONTENT: THE MESSAGE */}
          <div className="flex flex-col items-start gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="px-3 py-1 border border-brand-red-200 bg-brand-red-50 rounded-sm"
            >
              <p className="font-bold text-[10px] sm:text-[11px] text-brand-red-500 uppercase tracking-widest">
                Our Methodology
              </p>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="text-[40px] sm:text-[50px] lg:text-[62px] font-light leading-[1.08] tracking-tight text-[#111827]"
            >
              Overcoming These <br className="hidden sm:block" />
              <span className="font-bold text-brand-red-500">Key Barriers</span> <br className="hidden sm:block" />
              Starts Here Today
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 max-w-lg leading-relaxed"
            >
              Identify the barriers that prevent your global education dreams from reaching its full potential. Addressing these issues can transform your path to success.
            </motion.p>

            <div className="flex flex-col gap-8 mt-6">
              {barriers.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-red-500 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-brand-red-500/10 group-hover:scale-110 transition-transform">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-[#111827] text-[18px] font-bold tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-[16px] leading-[1.6] max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT: VISUAL WITH PILLS */}
          <div className="relative w-full max-w-[520px] ml-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-zinc-100"
            >
              <motion.img 
                style={{ y: imgY, scale: 1.15 }}
                src="/images/sga.jpg" 
                alt="Global Education Success" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Pills */}
              <div className="absolute top-[8%] -right-4 sm:-right-6 flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                  className="bg-[#f2524a] text-white px-5 py-3 rounded-xl font-bold text-[10px] sm:text-xs shadow-xl rotate-[-4deg] tracking-wider uppercase border border-white/20 backdrop-blur-sm"
                >
                  Unclear Strategic Path
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                  className="bg-[#70c1b3] text-white px-5 py-3 rounded-xl font-bold text-[10px] sm:text-xs shadow-xl rotate-[2deg] tracking-wider uppercase border border-white/20 ml-6 backdrop-blur-sm"
                >
                  Lack of Expertise
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
                  className="bg-[#4a89ff] text-white px-5 py-3 rounded-xl font-bold text-[10px] sm:text-xs shadow-xl rotate-[-2deg] tracking-wider uppercase border border-white/20 -ml-2 backdrop-blur-sm"
                >
                  Limited Success
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}