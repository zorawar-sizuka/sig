"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  Landmark,
  BookOpen,
  ArrowRight,
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

        {/* MOBILE / TABLET GRID */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:hidden">
          {services.map((service, index) => (
            <MotionLink
              href={service.href}
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-[16px] sm:rounded-[18px] bg-white border border-brand-blue-100 shadow-[0_4px_20px_rgba(26,40,87,0.03)] block"
            >
              <div className="flex h-full flex-col p-5 sm:p-6">
                <div className="mb-8 sm:mb-10">
                  <div className="flex h-[64px] w-[64px] sm:h-[70px] sm:w-[70px] items-center justify-center rounded-[10px] sm:rounded-[12px] bg-[#ec2025]/10 border border-[#ec2025]/12">
                    {React.cloneElement(service.icon, {
                      className: "text-[#1b2856]",
                    })}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ec2025]">
                      {service.id}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1b2856]/15" />
                  </div>

                  <h3 className="text-[20px] sm:text-[24px] font-semibold leading-[1.08] tracking-tight text-[#1b2856]">
                    {service.title}
                  </h3>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <MotionLink
              href={service.href}
              key={service.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[20px] bg-white min-h-[460px] xl:min-h-[500px] border border-brand-blue-100 shadow-[0_4px_20px_rgba(26,40,87,0.03)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(26,40,87,0.08)] block"
            >
              {/* FULL CARD HOVER IMAGE */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
                <div 
                  className="absolute inset-x-0 top-full h-full opacity-0 transition-all duration-700 ease-[0.22,1,0.36,1] will-change-transform group-hover:top-0 group-hover:opacity-100"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover scale-[1.08] transition-transform duration-[1400ms] ease-out group-hover:scale-100"
                  />
                  
                  {/* REFINED OVERLAYS */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b2856]/82 via-[#1b2856]/35 to-transparent" />
                  <div className="absolute inset-0 bg-[#ec2025]/5 mix-blend-overlay" />
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="relative z-10 flex h-full flex-col p-7 xl:p-8">
                {/* ICON TILE */}
                <div className="mb-20">
                  <div className="flex h-[82px] w-[82px] items-center justify-center rounded-[12px] bg-[#ec2025]/10 border border-[#ec2025]/12 transition-all duration-500 group-hover:bg-white/12 group-hover:border-white/15 group-hover:backdrop-blur-sm">
                    <div className="transition-all duration-500 group-hover:text-white">
                      {React.cloneElement(service.icon, {
                        className:
                          "text-[#1b2856] group-hover:text-white transition-colors duration-500",
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-auto relative z-20">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ec2025] transition-colors duration-500 group-hover:text-white/75">
                      {service.id}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1b2856]/15 transition-all duration-500 group-hover:bg-white/75" />
                  </div>

                  <h3 className="text-[32px] xl:text-[34px] font-semibold leading-[1.05] tracking-tight text-[#1b2856] transition-all duration-500 group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-[28ch] text-[16px] xl:text-[17px] leading-[1.55] text-[#1b2856]/58 transition-all duration-500 group-hover:text-white">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-[#1b2856] transition-all duration-500 group-hover:text-white">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.16em]">
                      Learn More
                    </span>
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>

              {/* BASE TINT */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b2856]/[0.01]" />

              {/* HOVER RING */}
              <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-transparent transition-all duration-500 group-hover:ring-white/10" />
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}