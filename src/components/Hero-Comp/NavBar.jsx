






// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = (e) => {
//     e.preventDefault();
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setIsMobileMenuOpen(false);
//   };

//   const navVariants = {
//     hidden: { y: -100, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
//     }
//   };

//   const dropdowns = {
//     services: {
//       items: [
//         { name: 'All Services', link: '/services' },
//         { name: 'Admission Counselling', link: '/services/admission-counselling' },
//         { name: 'Visa Assistance', link: '/services/visa-assistance' },
//         { name: 'Language Preparation', link: '/services/language-preparation' },
//         { name: 'Scholarship Guidance', link: '/services/scholarship-guidance' }
//       ]
//     },
//     countries: {
//       items: [
//         { name: 'All Countries', link: '/countries' },
//         { name: 'UK', link: '/countries/uk' },
//         { name: 'USA', link: '/countries/usa' },
//         { name: 'Australia', link: '/countries/australia' },
//         { name: 'Canada', link: '/countries/canada' },
//         { name: 'Germany', link: '/countries/germany' },
//         { name: 'Japan', link: '/countries/japan' },
//         { name: 'New Zealand', link: '/countries/new-zealand' }
//       ]
//     },
//     testPrep: {
//       items: [
//         { name: 'IELTS', link: '/test-prep/ielts' },
//         { name: 'PTE', link: '/test-prep/pte' },
//         { name: 'TOEFL', link: '/test-prep/toefl' },
//         { name: 'GMAT', link: '/test-prep/gmat' },
//         { name: 'GRE', link: '/test-prep/gre' }
//       ]
//     },
//     about: {
//       items: [
//         { name: 'Meet Our Team', link: '/about/team' },
//         { name: 'Vision & Mission', link: '/about/vision' },
//         { name: 'FAQs', link: '/about/faqs' },
//         { name: 'Privacy Policy', link: '/privacy-policy' },
//         { name: 'Terms & Conditions', link: '/terms-conditions' }
//       ]
//     }
//   };

//   return (
//     <>
//       <motion.header 
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//         className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex items-center justify-between pointer-events-none"
//       >
//         {/* --- LEFT: BRAND IDENTITY --- */}
//         <div className="pointer-events-auto group">
//           <div 
//             className="bg-[#1b2856] p-3 sm:p-4 rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 cursor-pointer"
//             onClick={scrollToTop}
//           >
//             <img 
//               src="/images/sglogo.png" 
//               alt="Logo" 
//               className="h-8 sm:h-10 lg:h-14 w-auto object-contain" 
//             />
//           </div>
//         </div>

//         {/* --- CENTER: GLASSMORPHIC DOCK (UPDATED FOR HIGH-SHINE) --- */}
//         <nav className={`hidden lg:flex items-center gap-1 pointer-events-auto transition-all duration-700 ${
//           isScrolled 
//             ? 'bg-white/40 backdrop-blur-3xl border border-white/60 px-4 py-2 rounded-full shadow-[0_8px_32px_0_rgba(255,255,255,0.3),inset_0_0_8px_rgba(255,255,255,0.2)]' 
//             : 'bg-white/20 backdrop-blur-2xl border border-white/40 px-6 py-3 rounded-full shadow-[0_4px_24px_0_rgba(255,255,255,0.2)]'
//         }`}>
          
//           {/* Home Link */}
//           <div className="relative group px-3 py-2">
//             <a href="/" onClick={scrollToTop} className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors whitespace-nowrap">
//               Home
//             </a>
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
//           </div>

//           {/* Services Dropdown */}
//           <div 
//             className="relative group px-3 py-2"
//             onMouseEnter={() => setOpenDropdown('services')}
//             onMouseLeave={() => setOpenDropdown(null)}
//           >
//             <button className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors flex items-center gap-1 whitespace-nowrap">
//               Services
//               <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//               </svg>
//             </button>
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
//             <AnimatePresence>
//               {openDropdown === 'services' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute top-full left-0 mt-3 w-64 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl py-3 z-50"
//                 >
//                   {dropdowns.services.items.map((item, idx) => (
//                     <a
//                       key={idx}
//                       href={item.link}
//                       className="block px-5 py-2.5 text-sm font-medium text-[#1b2856] hover:text-[#ec2025] hover:bg-white/50 transition-colors"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Countries Dropdown */}
//           <div 
//             className="relative group px-3 py-2"
//             onMouseEnter={() => setOpenDropdown('countries')}
//             onMouseLeave={() => setOpenDropdown(null)}
//           >
//             <button className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors flex items-center gap-1 whitespace-nowrap">
//               Countries
//               <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//               </svg>
//             </button>
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
//             <AnimatePresence>
//               {openDropdown === 'countries' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute top-full left-0 mt-3 w-56 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl py-3 z-50"
//                 >
//                   {dropdowns.countries.items.map((item, idx) => (
//                     <a
//                       key={idx}
//                       href={item.link}
//                       className="block px-5 py-2.5 text-sm font-medium text-[#1b2856] hover:text-[#ec2025] hover:bg-white/50 transition-colors"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Test Prep Dropdown */}
//           <div 
//             className="relative group px-3 py-2"
//             onMouseEnter={() => setOpenDropdown('testPrep')}
//             onMouseLeave={() => setOpenDropdown(null)}
//           >
//             <button className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors flex items-center gap-1 whitespace-nowrap">
//               Test Prep
//               <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//               </svg>
//             </button>
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
//             <AnimatePresence>
//               {openDropdown === 'testPrep' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute top-full left-0 mt-3 w-48 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl py-3 z-50"
//                 >
//                   {dropdowns.testPrep.items.map((item, idx) => (
//                     <a
//                       key={idx}
//                       href={item.link}
//                       className="block px-5 py-2.5 text-sm font-medium text-[#1b2856] hover:text-[#ec2025] hover:bg-white/50 transition-colors"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Resources Link */}
//           <div className="relative group px-3 py-2">
//             <a href="/resources" className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors whitespace-nowrap">
//               Resources
//             </a>
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
//           </div>

//           {/* Events Link */}
//           <div className="relative group px-3 py-2">
//             <a href="/events" className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors whitespace-nowrap">
//               Events
//             </a>
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
//           </div>

//           {/* About Dropdown */}
//           <div 
//             className="relative group px-3 py-2"
//             onMouseEnter={() => setOpenDropdown('about')}
//             onMouseLeave={() => setOpenDropdown(null)}
//           >
//             <button className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors flex items-center gap-1 whitespace-nowrap">
//               About
//               <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//               </svg>
//             </button>
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
//             <AnimatePresence>
//               {openDropdown === 'about' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute top-full left-0 mt-3 w-56 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl py-3 z-50"
//                 >
//                   {dropdowns.about.items.map((item, idx) => (
//                     <a
//                       key={idx}
//                       href={item.link}
//                       className="block px-5 py-2.5 text-sm font-medium text-[#1b2856] hover:text-[#ec2025] hover:bg-white/50 transition-colors"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Tools Link with Badge */}
//           <div className="relative group px-3 py-2 ml-2">
//             <a href="/tools" className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors flex items-center gap-2 whitespace-nowrap">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#ec2025] animate-pulse" />
//               Tools
//               <span className="absolute -top-1 -right-2 text-[6px] font-mono text-white bg-[#ec2025] px-1.5 py-0.5 rounded-full">
//                 EXCLUSIVE
//               </span>
//             </a>
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
//           </div>
//         </nav>

//         {/* --- RIGHT: BOOK COUNSELLING BUTTON --- */}
//         <div className="hidden lg:flex items-center gap-4 pointer-events-auto">
//           <button className={`relative overflow-hidden group px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-500 ${
//             isScrolled 
//               ? 'bg-[#1b2856] text-white shadow-xl' 
//               : 'bg-white backdrop-blur-xl text-[#1b2856] shadow-lg border border-white/60'
//           }`}>
//             <span className="relative z-10 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
//               Book Counselling
//             </span>
//             <div className="absolute inset-0 bg-[#ec2025] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
//           </button>
//         </div>

//         {/* MOBILE TOGGLE */}
//         <div className="lg:hidden pointer-events-auto">
//           <button 
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1b2856] rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-xl"
//           >
//             <span className={`w-5 sm:w-6 h-[2px] bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
//             <span className={`w-3 sm:w-4 h-[2px] bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
//             <span className={`w-5 sm:w-6 h-[2px] bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
//           </button>
//         </div>
//       </motion.header>

//       {/* --- FULLSCREEN MOBILE MENU --- */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div 
//             initial={{ clipPath: 'circle(0% at 90% 10%)' }}
//             animate={{ clipPath: 'circle(150% at 90% 10%)' }}
//             exit={{ clipPath: 'circle(0% at 90% 10%)' }}
//             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
//             className="fixed inset-0 bg-[#1b2856] z-[95] flex flex-col justify-center px-6 sm:px-12 lg:hidden overflow-y-auto"
//           >
//             <div className="flex flex-col gap-4 max-w-md mx-auto w-full">
//               <span className="text-[#ec2025] font-mono text-xs tracking-widest uppercase mb-2">[ Menu ]</span>
              
//               {['Home', 'Services', 'Countries', 'Test Prep', 'Resources', 'Events', 'About'].map((item, i) => (
//                 <motion.a
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 + (i * 0.05) }}
//                   key={item}
//                   href={`/${item.toLowerCase().replace(' ', '-')}`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight hover:text-[#ec2025] transition-colors py-2"
//                 >
//                   {item}
//                 </motion.a>
//               ))}

//               <motion.a
//                 initial={{ x: -20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.55 }}
//                 href="/tools"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight hover:text-[#ec2025] transition-colors py-2 flex items-center gap-3"
//               >
//                 Tools
//                 <span className="text-[10px] font-mono font-bold text-white bg-[#ec2025] px-2 py-1 rounded-full">
//                   EXCLUSIVE
//                 </span>
//               </motion.a>

//               <motion.button
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//                 className="mt-8 w-full bg-[#ec2025] hover:bg-[#ec2025]/80 text-white py-4 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] shadow-xl"
//               >
//                 Book Counselling
//               </motion.button>
//             </div>

            
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// } 






















"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const dropdowns = {
    services: {
      items: [
        { name: 'All Services', link: '/services' },
        { name: 'Admission Counselling', link: '/services/admission-counselling' },
        { name: 'Visa Assistance', link: '/services/visa-assistance' },
        { name: 'Language Preparation', link: '/services/language-preparation' },
        { name: 'Scholarship Guidance', link: '/services/scholarship-guidance' }
      ]
    },
    countries: {
      items: [
        { name: 'All Countries', link: '/countries' },
        { name: 'UK', link: '/countries/study-in-uk' },
        { name: 'USA', link: '/countries/study-in-usa' },
        { name: 'Australia', link: '/countries/study-in-australia' },
        { name: 'Canada', link: '/countries/study-in-canada' },
        { name: 'Germany', link: '/countries/study-in-germany' },
        { name: 'Japan', link: '/countries/study-in-japan' },
        { name: 'New Zealand', link: '/countries/study-in-new-zealand' }
      ]
    },
    testPrep: {
      items: [
        { name: 'IELTS', link: '/services/language-preparation/ielts' },
        { name: 'PTE', link: '/services/language-preparation/pte' },
     
      ]
    },
    about: {
      items: [
        { name: 'Meet Our Team', link: '/about' },
        { name: 'Vision & Mission', link: '/vision' },
        { name: 'FAQs', link: '/appendix/faqs' },
        { name: 'Privacy Policy', link: '/appendix/privacy-policy' },
        { name: 'Terms & Conditions', link: '/appendix/t&c' }
      ]
    }
  };

  return (
    <>
      <motion.header 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 w-full z-[100] px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 flex items-center justify-between gap-3 sm:gap-4 pointer-events-none"
      >
        {/* --- LEFT: BRAND IDENTITY --- */}
        <div className="pointer-events-auto group shrink-0">
          <div 
            className="bg-[#1b2856] p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <img 
              src="/images/sglogo.png" 
              alt="Logo" 
              className="h-9 sm:h-10 md:h-12 lg:h-16 w-auto object-contain" 
            />
          </div>
        </div>

        {/* --- CENTER: GLASSMORPHIC DOCK --- */}
        <div className="hidden lg:flex flex-1 justify-center min-w-0 px-2 xl:px-4">
          <nav className={`flex items-center gap-0.5 xl:gap-1 pointer-events-auto transition-all duration-700 max-w-full ${
            isScrolled 
              ? 'bg-white/40 backdrop-blur-3xl border border-white/60 px-3 xl:px-4 py-2 rounded-full shadow-[0_8px_32px_0_rgba(255,255,255,0.3),inset_0_0_8px_rgba(255,255,255,0.2)]' 
              : 'bg-white/20 backdrop-blur-2xl border border-white/40 px-4 xl:px-6 py-3 rounded-full shadow-[0_4px_24px_0_rgba(255,255,255,0.2)]'
          }`}>
            
            {/* Home Link */}
            <div className="relative group px-2 xl:px-3 py-2 shrink-0">
              <a href="/" onClick={scrollToTop} className="text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors whitespace-nowrap">
                Home
              </a>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative group px-2 xl:px-3 py-2 shrink-0"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors flex items-center gap-1 whitespace-nowrap">
                Services
                <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              <AnimatePresence>
                {openDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-64 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl py-3 z-50"
                  >
                    {dropdowns.services.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block px-5 py-2.5 text-sm font-medium text-[#1b2856] hover:text-[#ec2025] hover:bg-white/50 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Countries Dropdown */}
            <div 
              className="relative group px-2 xl:px-3 py-2 shrink-0"
              onMouseEnter={() => setOpenDropdown('countries')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors flex items-center gap-1 whitespace-nowrap">
                Countries
                <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              <AnimatePresence>
                {openDropdown === 'countries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl py-3 z-50"
                  >
                    {dropdowns.countries.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block px-5 py-2.5 text-sm font-medium text-[#1b2856] hover:text-[#ec2025] hover:bg-white/50 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Test Prep Dropdown */}
            <div 
              className="relative group px-2 xl:px-3 py-2 shrink-0"
              onMouseEnter={() => setOpenDropdown('testPrep')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors flex items-center gap-1 whitespace-nowrap">
                Test Prep
                <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              <AnimatePresence>
                {openDropdown === 'testPrep' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-48 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl py-3 z-50"
                  >
                    {dropdowns.testPrep.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block px-5 py-2.5 text-sm font-medium text-[#1b2856] hover:text-[#ec2025] hover:bg-white/50 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Link */}
            <div className="relative group px-2 xl:px-3 py-2 shrink-0">
              <a href="/resources" className="text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors whitespace-nowrap">
                Resources
              </a>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>

            {/* Events Link */}
            <div className="relative group px-2 xl:px-3 py-2 shrink-0">
              <a href="/events" className="text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors whitespace-nowrap">
                Events
              </a>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>

            {/* About Dropdown */}
            <div 
              className="relative group px-2 xl:px-3 py-2 shrink-0"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors flex items-center gap-1 whitespace-nowrap">
                About
                <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              <AnimatePresence>
                {openDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl py-3 z-50"
                  >
                    {dropdowns.about.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block px-5 py-2.5 text-sm font-medium text-[#1b2856] hover:text-[#ec2025] hover:bg-white/50 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tools Link with Badge */}
            <div className="relative group px-2 xl:px-3 py-2 ml-1 xl:ml-2 shrink-0">
              <a href="/tools" className="text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-[#1b2856] group-hover:text-[#ec2025] transition-colors flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ec2025] animate-pulse shrink-0" />
                Tools
                <span className="absolute -top-1 -right-2 text-[6px] font-mono text-white bg-[#ec2025] px-1.5 py-0.5 rounded-full">
                  EXCLUSIVE
                </span>
              </a>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ec2025] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </nav>
        </div>

        {/* --- RIGHT: BOOK COUNSELLING BUTTON --- */}
        <div className="hidden lg:flex items-center gap-4 pointer-events-auto shrink-0">
          <button className={`relative overflow-hidden group px-5 xl:px-6 2xl:px-8 py-3 xl:py-4 rounded-full transition-all duration-500 ${
            isScrolled 
              ? 'bg-[#1b2856] text-white shadow-xl' 
              : 'bg-white backdrop-blur-xl text-[#1b2856] shadow-lg border border-white/60'
          }`}>
            <span className="relative z-10 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
              Book Counselling
            </span>
            <div className="absolute inset-0 bg-[#ec2025] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="lg:hidden pointer-events-auto shrink-0">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#1b2856] rounded-xl sm:rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-xl"
          >
            <span className={`w-5 sm:w-6 h-[2px] bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-3 sm:w-4 h-[2px] bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 sm:w-6 h-[2px] bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.header>

      {/* --- FULLSCREEN MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#1b2856] z-[95] flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-3 sm:gap-4 max-w-md mx-auto w-full mt-28">
              {/* <span className="text-[#ec2025] font-mono text-xs tracking-widest uppercase mb-2">[ Menu ]</span> */}
              
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Countries', href: '/countries' },
                { name: 'Test Prep', href: '/test-prep' },
                { name: 'Resources', href: '/resources' },
                { name: 'Events', href: '/events' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((item, i) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight hover:text-[#ec2025] transition-colors py-2"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                href="/tools"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight hover:text-[#ec2025] transition-colors py-2 flex items-center gap-3 flex-wrap"
              >
                Tools
                <span className="text-[10px] font-mono font-bold text-white bg-[#ec2025] px-2 py-1 rounded-full">
                  EXCLUSIVE
                </span>
              </motion.a>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="mt-6 sm:mt-8 w-full bg-[#ec2025] hover:bg-[#ec2025]/80 text-white py-4 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] shadow-xl"
              >
                Book Counselling
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}