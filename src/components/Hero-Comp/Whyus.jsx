"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- REFINED COUNT UP ---
function CountUpNumber({ end, suffix = "", duration = 2800, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 5);
      setCount(end * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <span ref={ref} className="tabular-nums tracking-tighter">
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

// --- REFINED STAT CARD ---
const TintedStatCard = ({ end, suffix, label, color = "navy", decimals = 0 }) => {
  const isRed = color === "red";
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] border p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)] ${
        isRed
          ? "bg-[#e42027]/[0.03] border-[#e42027]/10 hover:bg-[#e42027]/[0.06]"
          : "bg-[#1b2856]/[0.03] border-[#1b2856]/10 hover:bg-[#1b2856]/[0.06]"
      }`}
    >
      <p className={`mb-2 text-[34px] sm:text-[38px] lg:text-[42px] font-bold leading-none ${isRed ? "text-[#e42027]" : "text-[#162b7b]"}`}>
        <CountUpNumber end={end} suffix={suffix} decimals={decimals} />
      </p>
      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-gray-400">{label}</p>
    </motion.div>
  );
};

// --- PARALLAX IMAGE TILE (Balanced Zoom & Motion) ---
function ParallaxImageTile({
  src,
  alt,
  className = "",
  imgClassName = "",
  overlay = null,
  content = null,
  parallaxRange = [-40, 40], // Optimized range
  delay = 0,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallaxRange);
  // Scale is now much tighter (starts at 1.05 instead of 1.15)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] bg-white group shadow-sm ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        // Using h-[120%] instead of 140% to keep images crisp and un-zoomed
        className={`absolute inset-0 h-[120%] w-full object-cover grayscale brightness-95 transition-all duration-[1.2s] ease-out group-hover:grayscale-0 ${imgClassName}`}
      />
      {overlay}
      {content}
    </motion.div>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Balanced external movement
  const frameY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-[#fdfdfd] px-4 sm:px-6 lg:px-12 xl:px-20 py-16 sm:py-20 lg:py-28 xl:py-36">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 sm:gap-16 lg:grid-cols-12 lg:gap-20 xl:gap-24">
        
        {/* LEFT: TEXT & TINTED CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="mb-8 sm:mb-10 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#e42027]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] sm:tracking-[0.4em] text-[#1b2856]/50">Impact Analysis</span>
          </div>
          <h2 className="mb-8 sm:mb-10 text-[38px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-light leading-[0.98] tracking-tight text-[#1b348f]">
            Success Defined <br /> By <span className="font-bold">Measurable Growth.</span>
          </h2>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.12 }}}} className="mb-10 sm:mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TintedStatCard end={50} suffix="K+" label="Students Guided" />
            <TintedStatCard end={98.4} suffix="%" label="Visa Approval" color="red" decimals={1} />
            <div className="sm:col-span-2">
              <TintedStatCard end={2.5} suffix="M+" label="Scholarship Wealth Secured (USD)" decimals={1} />
            </div>
          </motion.div>

          <button className="group flex items-center gap-4 sm:gap-5 px-1 sm:px-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#1b2856]">
            Our Complete Story
            <div className="h-[1px] w-12 bg-[#1b2856]/20 transition-all duration-700 group-hover:w-20 group-hover:bg-[#e42027]" />
          </button>
        </motion.div>

        {/* RIGHT: FRAMED GALLERY */}
       {/* RIGHT: MODULAR BENTO GALLERY */}
<motion.div style={{ y: frameY }} className="lg:col-span-7 flex items-center">
  <div className="w-full rounded-[32px] sm:rounded-[40px] lg:rounded-[56px] border border-white bg-white/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
    <div className="grid h-[550px] sm:h-[650px] lg:h-[750px] grid-cols-12 grid-rows-6 gap-3 sm:gap-4">
      
      {/* 1. TALL LEFT PILLAR - Hero Image */}
      <ParallaxImageTile
        src="/impact/impact1.jpg"
        alt="University Campus"
        delay={0.05}
        parallaxRange={[-30, 30]} 
        className="col-span-4 row-span-4 rounded-[24px] overflow-hidden shadow-sm"
      />

      {/* 2. MIDDLE FEATURE PILLAR - Narrative/Quote */}
      <div className="col-span-4 row-span-4 rounded-[24px] bg-white p-6 shadow-sm flex flex-col justify-between border border-gray-50">
        <div className="space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#ec2025] flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H10.017C8.91243 16 8.017 16.8954 8.017 18V21M3 11L12 3L21 11V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </div>
          <p className="text-[#1b2856] font-medium leading-relaxed text-sm sm:text-base">
            "SGA didn't just find me a university; they mapped out my entire career trajectory in London."
          </p>
        </div>
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-white bg-[#1b2856] flex items-center justify-center text-[10px] text-white font-bold">+12k</div>
        </div>
      </div>

      {/* 3. TOP RIGHT SQUARE - Success Metric */}
      <div className="col-span-4 row-span-2 rounded-[24px] bg-[#1b2856] shadow-sm flex flex-col items-center justify-center text-center p-4 group">
        <span className="text-3xl sm:text-4xl font-bold text-white mb-1">150+</span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Partner Unis</span>
      </div>

      {/* 4. MIDDLE RIGHT SQUARE - Quick Info */}
      <div className="col-span-4 row-span-2 rounded-[24px] bg-white shadow-sm flex flex-col items-center justify-center text-center p-4 border border-gray-50">
        <span className="text-3xl sm:text-4xl font-bold text-[#ec2025] mb-1">100%</span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Visa Support</span>
      </div>

      {/* 5. BOTTOM LEFT SQUARE - Sub Image */}
      <ParallaxImageTile
        src="/impact/impact2.jpg"
        alt="Student Life"
        delay={0.15}
        parallaxRange={[-20, 20]}
        className="col-span-4 row-span-2 rounded-[24px] overflow-hidden shadow-sm"
      />

      {/* 6. BOTTOM WIDE RECTANGLE - Wide Feature Image */}
      <ParallaxImageTile
        src="/impact/impact3.jpg"
        alt="Seminar Hall"
        delay={0.2}
        parallaxRange={[-15, 15]}
        className="col-span-8 row-span-2 rounded-[24px] overflow-hidden shadow-sm"
        overlay={<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />}
      />

    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}