"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-brand-red-50/10 relative overflow-hidden">
      {/* Background Decor: subtle brand-tinted atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-blue-50/40 to-white" />
        <div className="absolute -top-48 -left-48 w-[620px] h-[620px] bg-[#1b2856]/[0.05] rounded-full blur-[120px]" />
        <div className="absolute -bottom-56 -right-56 w-[720px] h-[720px] bg-[#ec2025]/[0.05] rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* --- Header --- */}
          {/* Heading */}
          <div className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex rounded-full bg-[#ec2025]/30 px-5 py-2">
            <span className="text-[14px] text-[#1b2856]">Our Impact</span>
          </div>

          <h2 className="my-8 text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#1b2856] md:text-[56px]">
          Expert-led strategies. Proven global outcomes.
          </h2>

        
        </div>

        {/* --- Two-Column Layout --- */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT: Visual + Stats */}
            <div className="lg:col-span-7">
              <div className="relative h-[420px] md:h-[680px] flex items-center justify-center">
                
                {/* SVG CONNECTORS */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
                  <line x1="10%" y1="25%" x2="50%" y2="25%" stroke="#d8e0f0" strokeWidth="1.5" />
                  <line x1="7%" y1="50%" x2="50%" y2="50%" stroke="#d8e0f0" strokeWidth="1.5" />
                  <line x1="12%" y1="75%" x2="50%" y2="75%" stroke="#d8e0f0" strokeWidth="1.5" />
                  <line x1="90%" y1="25%" x2="50%" y2="25%" stroke="#d8e0f0" strokeWidth="1.5" />
                  <line x1="93%" y1="50%" x2="50%" y2="50%" stroke="#d8e0f0" strokeWidth="1.5" />
                  <line x1="88%" y1="75%" x2="50%" y2="75%" stroke="#d8e0f0" strokeWidth="1.5" />
                </svg>

                {/* CENTRAL IMAGE */}
                <motion.div
                  initial={{ scale: 0.94, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: "circOut" }}
                  className="relative z-10 w-[260px] h-[360px] md:w-[410px] md:h-[610px] rounded-3xl overflow-hidden shadow-[0_26px_70px_rgba(26,40,87,0.08)] bg-brand-blue-100/50"
                >
                  <Image
                    src="/images/ceo.jpg"
                    alt="Confident Student"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 border border-white/30 rounded-3xl pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b2856]/10 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* LEFT SIDE PILLS */}
                <div className="absolute left-0 md:left-[5%] lg:left-[6%] top-0 md:top-[25%] -translate-y-1/2 z-20">
                  <StatPill label="Visa Success" value="98%" delay={0.2} side="left" />
                </div>

                <div className="absolute left-0 md:left-0 lg:left-[2%] top-[45%] md:top-[50%] -translate-y-1/2 z-20">
                  <StatPill label="Placed" value="5k+" delay={0.3} side="left" />
                </div>

                <div className="absolute left-0 md:left-[7%] lg:left-[9%] top-[90%] md:top-[75%] -translate-y-1/2 z-20">
                  <StatPill label="Scholarships" value="$2M" delay={0.4} side="left" />
                </div>

                {/* RIGHT SIDE PILLS */}
                <div className="absolute right-0 md:right-[5%] lg:right-[6%] top-0 md:top-[25%] -translate-y-1/2 z-20">
                  <StatPill label="Universities" value="200+" delay={0.5} side="right" />
                </div>

                <div className="absolute right-0 md:right-0 lg:right-[2%] top-[45%] md:top-[50%] -translate-y-1/2 z-20">
                  <StatPill label="Countries" value="09" delay={0.6} side="right" />
                </div>

                <div className="absolute right-0 md:right-[4%] lg:right-[5%] top-[90%] md:top-[75%] -translate-y-1/2 z-20">
                  <StatPill label="Experience" value="12yr" delay={0.7} side="right" />
                </div>
              </div>
            </div>

            {/* RIGHT: Details Panel */}
            <div className="lg:col-span-5 relative mt-4 md:mt-0">
              <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1b2856]/20 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="pt-2"
              >
              <h3 className="text-3xl sm:text-4xl lg:text-[52px] leading-[1.03] tracking-tight text-[#1b2856]">
  <span className="font-light">Architects of</span>
  <br />
  <span className="font-semibold text-[#2a3f7d]"> Global Study</span>
  <br />
  <span className="font-light">Strategic</span>
  <br />
  <span className="font-semibold text-[#ec2025]"> Excellence</span>
</h3>

<p className="mt-6 md:mt-8 text-sm md:text-[16px] leading-relaxed text-[#1b2856]/60 max-w-md">
  Beyond basic applications, we provide the technical precision and mentorship 
  required to navigate elite admissions—transforming complex global transitions 
  into a seamless journey of growth.
</p>

                {/* Signature Block */}
                <div className="mt-8 md:mt-12">
                  <div className="relative w-[180px] h-[60px] md:w-[220px] md:h-[70px]">
                    <Image
                      src="/images/sglogo.png"
                      alt="SIG Signature"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4 h-px w-48 md:w-56 bg-gradient-to-r from-[#1b2856]/25 via-[#ec2025]/20 to-transparent" />
                  <p className="mt-4 text-sm text-[#1b2856]/55">
                    Lead Advisors Team, SIG
                  </p>
                </div>

                {/* Experience Circle */}
                <div className="mt-10 md:mt-14 flex items-center gap-6 md:gap-10">
                  <ExperienceCircle years="10+" label="EXPERIENCE" />
                  <div className="text-xs md:text-sm text-[#1b2856]/60 leading-relaxed max-w-[200px] md:max-w-[260px]">
                    Experience you can rely on — built across admissions, documentation, and visa coaching.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Subcomponent: Stat Pill */
function StatPill({ label, value, delay, side }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? 18 : -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="
        flex items-center bg-white/95
        p-1 md:p-1.5 rounded-full
        shadow-[0_8px_30px_rgba(27,40,86,0.08)]
        border border-[#1b2856]/10
        transition-all duration-300
        hover:shadow-[0_12px_34px_rgba(27,40,86,0.12)] hover:-translate-y-0.5
        cursor-default
      "
    >
      <span className="flex items-center justify-center bg-gradient-to-r from-[#1b2856] to-[#2f478c] text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full min-w-[3rem] md:min-w-[4rem] tracking-wide">
        {value}
      </span>
      <span className="px-3 md:px-5 text-xs md:text-sm font-medium text-[#1b2856]/80 whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

/** Subcomponent: Experience Circle */
function ExperienceCircle({ years = "10+", label = "EXPERIENCE" }) {
  return (
    <div className="relative flex items-center">
      <div className="text-[80px] md:text-[120px] leading-none tracking-tight text-[#ec2025]/85 font-light">
        {years}
      </div>

      <div className="ml-3 md:ml-4 flex items-center">
        <span className="text-[9px] md:text-[11px] uppercase tracking-[0.35em] font-semibold text-[#1b2856]/65 rotate-90 origin-left">
          {label}
        </span>
      </div>
    </div>
  );
}