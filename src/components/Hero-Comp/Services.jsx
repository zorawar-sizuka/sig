"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  Landmark,
  BookOpen,
  ArrowRight,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";

// Create a motion-enabled Link component
const MotionLink = motion(Link);

const services = [
  {
    id: "01",
    title: "Admissions Counseling",
    href: "/services/admission-counselling",
    description:
      "Personalized university shortlisting, profile positioning, and application strategy tailored for global success.",
    image: "/services/ser2.jpeg",
    icon: <GraduationCap size={34} strokeWidth={1.8} className="text-[#1b2856]" />,
  },
  {
    id: "02",
    title: "Visa Assistance",
    href: "/services/visa-assistance",
    description:
      "End-to-end documentation guidance, interview preparation, and process support to strengthen approval readiness.",
    image: "/services/ser1.jpeg",
    icon: <ShieldCheck size={34} strokeWidth={1.8} className="text-[#1b2856]" />,
  },
  {
    id: "03",
    title: "Scholarship Guidance",
    href: "/services/scholarship-guidance",
    description:
      "Strategic scholarship planning to identify funding opportunities and reduce the overall cost of education abroad.",
    image: "/services/ser3.jpg",
    icon: <Landmark size={34} strokeWidth={1.8} className="text-[#1b2856]" />,
  },
  {
    id: "04",
    title: "Language Preparation",
    href: "/services/language-preparation",
    description:
      "Structured coaching for IELTS, PTE, TOEFL, and related exams through expert-led preparation and practice.",
    image: "/services/ser4.jpeg",
    icon: <BookOpen size={34} strokeWidth={1.8} className="text-[#1b2856]" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-brand-blue-50/30 py-16 sm:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-10 xl:px-16">
      <div className="max-w-[1600px] mx-auto">
        {/* HEADER */}
        <div className="mb-12 sm:mb-14 lg:mb-16 max-w-2xl">
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <span className="w-8 sm:w-10 h-[2px] bg-[#ec2025]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] sm:tracking-[0.4em] text-[#1b2856]/45">
              Core Expertise
            </span>
          </div>

          <h2 className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] xl:text-[60px] font-light leading-[1.02] tracking-tight text-[#1b2856]">
            Services Built for{" "}
            <span className="font-semibold text-[#ec2025]">Global Study Success.</span>
          </h2>
        </div>

        {/* UNIFIED GRID FOR ALL SCREEN SIZES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <MotionLink
              href={service.href}
              key={service.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[1.5rem] bg-zinc-900 min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] shadow-2xl block"
            >
              {/* IMAGE LAYER */}
              <div className="absolute inset-0 z-0 bg-zinc-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                />
                
                {/* REFINED TIGHT GRADIENTS (Middle stays clear) */}
                {/* Top Edge Shadow */}
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/70 to-transparent" />
                
                {/* Bottom Edge Shadow */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* CONTENT LAYER */}
              <div className="relative z-10 flex h-full flex-col p-8 sm:p-10">
                {/* TOP ROW: TITLE & PLUS BUTTON */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[28px] sm:text-[32px] font-medium leading-[1.1] tracking-tight text-white max-w-[80%]">
                    {service.title}
                  </h3>
                  
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:scale-110">
                    <Plus size={24} strokeWidth={2} />
                  </div>
                </div>

                {/* BOTTOM ROW: DESCRIPTION */}
                <div className="mt-auto space-y-6">
                  <p className="max-w-[32ch] text-[16px] sm:text-[18px] leading-[1.5] text-white/80 group-hover:text-white transition-colors duration-500 font-light">
                    {service.description}
                  </p>
                  
                  {/* HIDDEN VISUAL INDICATOR REVEALED ON HOVER */}
                  <div className="h-[1px] w-0 bg-white/40 transition-all duration-700 group-hover:w-full" />
                </div>
              </div>

              {/* SUBTLE BORDER HIGHLIGHT */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none group-hover:border-white/20 transition-all duration-500" />
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}