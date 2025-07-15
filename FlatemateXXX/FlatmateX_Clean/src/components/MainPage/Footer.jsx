// src/components/MainPage/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center bg-footer-light-brown px-footer-pad-x py-[1.65rem] mt-footer-mt relative font-segoe-ui">
      <div className="relative z-10 text-profile-footer-text-light">
        <div className="mt-[1.1rem] mb-[1.1rem] leading-relaxed text-base">
          Free to list, search & communicate
        </div>
        <div className="mt-[1.1rem] mb-[1.1rem] leading-relaxed text-footer-text">
          How to find a room | How to rent your room | Verifications | ID checks | Credit checks | Background checks | Free roommate agreement | Safety & security | Inspections | Community standards
        </div>
        <div className="mt-[1.1rem] mb-[1.1rem] leading-relaxed text-footer-text">
          Help | Team | Blog | Report | Press inquiries | Terms | Privacy | Facebook | Instagram
        </div>
        <div className="mt-[1.1rem] mb-[1.1rem] leading-relaxed text-footer-text">
          🇨🇦 Canada 🇮🇪 Ireland 🇮🇳 India 🇳🇿 New Zealand 🇸🇬 Singapore 🇿🇦 South Africa 🇬🇧 UK
        </div>
        <div className="mt-8 text-xs">&copy; {currentYear} FlatmateX. All rights reserved.</div>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-footer-watermark text-profile-watermark-color pointer-events-none z-0 leading-none select-none md:text-[150px] sm:text-[100px]">
        FLATMATEX
      </div>
    </footer>
  );
};

export default Footer;