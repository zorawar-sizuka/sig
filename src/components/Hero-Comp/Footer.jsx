import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F162E] text-white pt-16 md:pt-20 pb-8 px-6 md:px-12 lg:px-20 rounded-t-[24px] md:rounded-t-[32px] font-sans mt-12 md:mt-0">
      <div className="max-w-[1400px] mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-10 gap-x-8 mb-16">
          
          {/* LEFT GROUP */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            
            {/* Company */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] font-bold text-[#9BA1B3] uppercase tracking-wider">
                Company
              </h3>
              <ul className="flex flex-col gap-3 text-[15px]">
                <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="/events" className="hover:text-blue-400 transition-colors">Events</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="/vision" className="hover:text-blue-400 transition-colors">Our Vision</a></li>
              </ul>
            </div>

            {/* Student Services */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] font-bold text-[#9BA1B3] uppercase tracking-wider">
                Student Services
              </h3>
              <ul className="flex flex-col gap-3 text-[15px]">
                <li><a href="/services/admission-counselling" className="hover:text-blue-400 transition-colors">Admission Counseling</a></li>
                <li><a href="/services//language-preparation" className="hover:text-blue-400 transition-colors">Language Prep. (IELTS/PTE)</a></li>
                <li><a href="/services/admission-counselling" className="hover:text-blue-400 transition-colors">Visa Assistance</a></li>
                <li><a href="/services/scholarship-guidance" className="hover:text-blue-400 transition-colors">Scholarship Guidance</a></li>
              </ul>
            </div>

            {/* Study Destinations */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] font-bold text-[#9BA1B3] uppercase tracking-wider">
                Study Destinations
              </h3>
              <ul className="flex flex-col gap-3 text-[15px]">
                <li><a href="/countries/study-in-usa" className="hover:text-blue-400 transition-colors">Study in USA</a></li>
                <li><a href="/countries/study-in-uk" className="hover:text-blue-400 transition-colors">Study in UK</a></li>
                <li><a href="/countries/study-in-australia" className="hover:text-blue-400 transition-colors">Study in Canada</a></li>
                <li><a href="/countries/study-in-canada" className="hover:text-blue-400 transition-colors">Study in Australia</a></li>
                <li><a href="/countries/study-in-germany" className="hover:text-blue-400 transition-colors">Study in Germany</a></li>
                <li><a href="/countries/study-in-japan" className="hover:text-blue-400 transition-colors">Study in Japan</a></li>
                <li><a href="/countries/study-in-new-zealand" className="hover:text-blue-400 transition-colors">Study in New Zealand</a></li>
              </ul>
            </div>

            {/* Utilities */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] font-bold text-[#9BA1B3] uppercase tracking-wider">
                Utilities
              </h3>
              <ul className="flex flex-col gap-3 text-[15px]">
                <li><a href="/tools" className="hover:text-blue-400 transition-colors">AI Tools</a></li>
                <li><a href="/resources" className="hover:text-blue-400 transition-colors">Resources</a></li>
              </ul>
            </div>

            {/* Appendix */}
            <div className="flex flex-col gap-4 md:col-start-4">
              <h3 className="text-[13px] font-bold text-[#9BA1B3] uppercase tracking-wider">
                Appendix
              </h3>
              <ul className="flex flex-col gap-3 text-[15px]">
                <li><a href="/appendix/faqs" className="hover:text-blue-400 transition-colors">FAQs</a></li>
                <li><a href="/appendix/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/appendix/t&c" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* CONNECT */}
          <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
            <h3 className="text-[13px] font-bold text-[#9BA1B3] uppercase tracking-wider mb-4">
              Connect
            </h3>

            <div className="flex gap-4 mb-6">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="m22 6-10 7L2 6"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>

            <div className="text-[13px] leading-relaxed">
              <p className="font-bold text-white mb-1">Head Office</p>
              <p className="text-blue-400 font-semibold mb-1">01-5332391</p>
              <p className="text-[#9BA1B3]">Hattisar Road, Putalisadak, Kathmandu</p>

              <p className="font-bold text-white mt-5 mb-2">Branches</p>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[#9BA1B3]">
                <p>Itahari</p><p className="text-right">9852073502</p>
                <p>Rajbiraj</p><p className="text-right">9707081801</p>
                <p>Pokhara</p><p className="text-right whitespace-nowrap">061-591175</p>
                <p>Lahan</p><p className="text-right">9816845377</p>
                <p>Dharan</p><p className="text-right">9705078902</p>
                <p>Lalitpur</p><p className="text-right whitespace-nowrap">01-5402052</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* LOGO INSTEAD OF TEXT */}
          <div className="flex items-center">
            <img
              src="/images/sglogo.png"
              alt="Study in Global"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[11px] font-bold text-[#9BA1B3] uppercase tracking-[0.1em] text-center">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <p>© 2026. ALL RIGHTS RESERVED.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}