"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import studentAnimation from "../../../public/lottie/educationsg.json";

export default function HeroRefined() {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[white]">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.01]"
        style={{
          backgroundImage:
            "linear-gradient(#1b2856 1px, transparent 1px), linear-gradient(90deg, #1b2856 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10 mx-auto px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-16 lg:py-24 xl:px-20 xl:py-28">
        <div className="flex flex-col items-center gap-16 md:gap-20 lg:flex-row lg:items-center lg:gap-16 xl:gap-24 2xl:gap-28">
          {/* LEFT */}
          <div className="w-full lg:w-[47%] xl:w-[45%]">
            <motion.div
              initial="hidden"
              animate="show"
              className="mx-auto max-w-[680px] lg:mx-0"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-5"
              >
                <span className="h-[2px] w-10 sm:w-12 bg-[#e42027]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[#1b2856]/50">
                  Global Strategy Group
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={0.08}
                className="mb-8 sm:mb-10 lg:mb-12 text-[46px] leading-[1.02] tracking-tight text-[#1b348f] sm:text-[58px] md:text-[68px] lg:text-[72px] xl:text-[82px] font-light"
              >
                The <span className="font-semibold text-[#e42027]">New Era</span> <br />
                of Global Success.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={0.16}
                className="mb-10 sm:mb-12 lg:mb-14 max-w-[560px] border-l border-gray-200 pl-5 sm:pl-6 md:pl-7 text-[17px] sm:text-[18px] md:text-[19px] leading-[1.95] text-gray-500"
              >
                We bridge the distance between ambition and reality. EIEC
                operates as a strategic partner for students navigating
                world-class education pathways.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={0.24}
                className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12 lg:gap-14"
              >
                <Link
                  href="/vision"
                  className="group relative inline-flex items-center gap-5 self-start"
                >
                  <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#1b2856] transition-colors duration-300 group-hover:text-[#e42027]">
                    Explore Vision
                  </span>

                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-[#1b2856] group-hover:bg-[#1b2856] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    <svg
                      className="h-4 w-4 text-[#1b2856] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>

                <div className="flex flex-col">
                  <span className="text-[16px] sm:text-[17px] font-bold text-[#1b2856]">
                    4.9 / 5
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                    Student Rating
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full lg:w-[53%] xl:w-[55%]">
            <motion.div
              className="relative mx-auto flex aspect-square w-full max-w-[640px] sm:max-w-[720px] lg:max-w-[760px] xl:max-w-[820px] 2xl:max-w-[860px] items-center justify-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Lottie Centerpiece */}
              <div className="relative z-10 h-[88%] w-[88%] mix-blend-multiply">
                <Lottie
                  animationData={studentAnimation}
                  loop={true}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Floating cards */}

              {/* Top Left */}
              <motion.div
                animate={{ y: [0, -18, 0], x: [0, -6, 0], rotate: [0, -1.5, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[-1%] top-[7%] sm:left-[2%] lg:left-[0%] xl:left-[2%] z-20 rounded-2xl border border-gray-100 bg-white/85 px-4 py-4 sm:px-5 sm:py-4 backdrop-blur-md shadow-[0_14px_50px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                  <p className="text-[20px] sm:text-[22px] font-bold text-[#1b2856]">98%</p>
                </div>
                <p className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Visa Success
                </p>
              </motion.div>

              {/* Top Right */}
              <motion.div
                animate={{ y: [0, 16, 0], x: [0, 8, 0], rotate: [0, 1.5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute right-[-1%] top-[11%] sm:right-[2%] lg:right-[0%] xl:right-[2%] z-20 rounded-2xl border border-gray-100 bg-white/85 px-4 py-4 sm:px-5 sm:py-4 backdrop-blur-md shadow-[0_14px_50px_rgba(0,0,0,0.045)]"
              >
                <p className="text-[17px] sm:text-[18px] font-bold text-[#1b2856]">25+ Nations</p>
                <p className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Global Reach
                </p>
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                animate={{ x: [0, 14, 0], y: [0, -8, 0], rotate: [0, -1, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[16%] left-[-2%] sm:left-[1%] lg:left-[-1%] xl:left-[1%] z-20 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/90 px-4 py-3.5 sm:px-4.5 sm:py-4 shadow-[0_12px_38px_rgba(0,0,0,0.04)]"
              >
                <div className="rounded-lg bg-[#e42027]/8 p-2.5">
                  <span className="text-[11px] font-bold text-[#e42027]">AI</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#1b2856]">
                  Powered Tools
                </span>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                animate={{ y: [0, -16, 0], x: [0, 6, 0], rotate: [0, 1, 0] }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute bottom-[8%] right-[2%] sm:right-[5%] lg:right-[4%] xl:right-[7%] z-20 min-w-[155px] sm:min-w-[170px] rounded-[22px] bg-[#1b2856] px-5 py-5 sm:px-6 sm:py-6 shadow-[0_24px_60px_rgba(27,40,86,0.22)]"
              >
                <p className="mb-1 text-[18px] sm:text-[20px] font-bold leading-none text-white">
                  120+
                </p>
                <p className="text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
                  University Partners
                </p>
              </motion.div>

              {/* Ambient ring */}
              <div className="absolute inset-0 -z-10 m-auto h-[82%] w-[82%] animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-gray-400" />

              {/* Secondary ambient ring */}
              <div className="absolute inset-0 -z-10 m-auto h-[66%] w-[66%] rounded-full border border-gray-200/80" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}