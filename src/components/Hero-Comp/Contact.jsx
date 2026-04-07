import React from 'react';

export default function ContactRequest() {
  return (
    <section className="max-w-[1200px] mx-auto py-14 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-0 flex flex-col lg:flex-row items-stretch gap-10 md:gap-12 lg:gap-16 xl:gap-20 font-sans bg-white">
      
      {/* LEFT: FORM SECTION */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <h2 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold text-[#1b2856] mb-8 sm:mb-10 lg:mb-12 tracking-tight leading-[1.08]">
          Send a request
        </h2>

        <form className="space-y-8 sm:space-y-9 lg:space-y-10">
          {/* Name Field */}
          <div className="relative border-b border-gray-300 focus-within:border-[#e42027] transition-colors pb-1">
            <label className="block text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-bold text-[#1b2856] mb-1.5">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent outline-none text-[18px] sm:text-[19px] md:text-[20px] text-[#1b2856] pb-2 placeholder-gray-300"
            />
          </div>

          {/* Services Dropdown */}
          <div className="relative border-b border-gray-300 focus-within:border-[#e42027] transition-colors pb-1">
            <label className="block text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-bold text-[#1b2856] mb-1.5">
              Interested Service
            </label>
            <select
              className="w-full bg-transparent outline-none text-[18px] sm:text-[19px] md:text-[20px] text-[#1b2856] pb-2 pr-8 appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>Select a service</option>
              <option value="sop-lor">SOP/LOR Support</option>
              <option value="visa">Visa Documentation</option>
              <option value="test-prep">Test Preparation (IELTS/PTE)</option>
              <option value="briefing">Pre-departure Briefing</option>
              <option value="scholarship">Scholarship Assistance</option>
            </select>
            <div className="absolute right-0 bottom-4 pointer-events-none text-[#1b2856]">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1l5 5 5-5" />
              </svg>
            </div>
          </div>

          {/* Email Field */}
          <div className="relative border-b border-gray-300 focus-within:border-[#e42027] transition-colors pb-1">
            <label className="block text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-bold text-[#1b2856] mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full bg-transparent outline-none text-[18px] sm:text-[19px] md:text-[20px] text-[#1b2856] pb-2 placeholder-gray-300"
            />
          </div>

          {/* Phone Field */}
          <div className="relative border-b border-gray-300 focus-within:border-[#e42027] transition-colors pb-1">
            <label className="block text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-bold text-[#1b2856] mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+977"
              className="w-full bg-transparent outline-none text-[18px] sm:text-[19px] md:text-[20px] text-[#1b2856] pb-2 placeholder-gray-300"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 sm:pt-4 lg:pt-6">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#1b2856] hover:bg-[#e42027] text-white px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-full text-[15px] sm:text-[16px] lg:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#e42027]/20 hover:-translate-y-0.5"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT: IMAGE SECTION */}
      <div className="flex-1 relative hidden lg:flex items-stretch justify-end min-w-0">
        <div className="h-full w-full max-w-[300px] xl:max-w-[400px] overflow-hidden rounded-[24px] xl:rounded-[30px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <img
            src="https://images.unsplash.com/photo-1681949222860-9cb3b0329878?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="University Campus"
            className="w-full h-full object-cover min-h-[520px] xl:min-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}