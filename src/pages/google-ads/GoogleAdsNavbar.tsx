import React, { useState } from 'react';
import { AGENCY_INFO } from '../../data/content';
import { trackEvent } from '../../utils/tracking';
import { Phone, ArrowUpRight, Menu, X } from 'lucide-react';

interface GoogleAdsNavbarProps {
  onQuoteClick?: () => void;
}

export const GoogleAdsNavbar: React.FC<GoogleAdsNavbarProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallClick = () => {
    trackEvent('click_call', { source: 'navbar' });
  };

  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      scrollTo('#quote');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-3 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left: Original Aaryav Studios Logo */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 sm:gap-3 group select-none cursor-pointer"
          title="Aaryav Studios Home"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFE15A] border-2 sm:border-[2.5px] border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] group-hover:bg-black group-hover:text-[#FFE15A] transition-colors">
            <span className="font-serif font-black text-black group-hover:text-[#FFE15A] text-sm sm:text-base tracking-tight">
              AS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-black text-base sm:text-lg tracking-wider leading-none uppercase">
              AARYAV STUDIOS
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 font-bold tracking-widest uppercase">
              COMMERCIAL VIDEO &amp; REELS
            </span>
          </div>
        </a>

        {/* Center / Right Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-serif font-bold text-xs uppercase tracking-wider text-black">
          <button 
            type="button"
            onClick={() => scrollTo('#portfolio')} 
            className="hover:text-[#FFE15A] hover:bg-black px-2 py-1 transition-colors cursor-pointer"
          >
            VIEW WORK
          </button>
          <button 
            type="button"
            onClick={() => scrollTo('#services')} 
            className="hover:text-[#FFE15A] hover:bg-black px-2 py-1 transition-colors cursor-pointer"
          >
            SERVICES
          </button>
          <button 
            type="button"
            onClick={() => scrollTo('#craft')} 
            className="hover:text-[#FFE15A] hover:bg-black px-2 py-1 transition-colors cursor-pointer"
          >
            BEFORE &amp; AFTER
          </button>
          <button 
            type="button"
            onClick={() => scrollTo('#process')} 
            className="hover:text-[#FFE15A] hover:bg-black px-2 py-1 transition-colors cursor-pointer"
          >
            PROCESS
          </button>
          <button 
            type="button"
            onClick={() => scrollTo('#quote')} 
            className="hover:text-[#FFE15A] hover:bg-black px-2 py-1 transition-colors cursor-pointer"
          >
            CONTACT
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Direct Call Button */}
          <a
            href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
            onClick={handleCallClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-[#F7F7F7] hover:bg-black hover:text-[#FFE15A] border-2 border-black font-mono font-bold text-xs uppercase shadow-[2px_2px_0px_#000000] transition-colors"
            title="Call Aaryav Studios"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{AGENCY_INFO.phoneDisplay}</span>
          </a>

          {/* Prominent High-Contrast Get a Quote Button */}
          <button
            type="button"
            onClick={handleQuoteClick}
            className="bg-[#FFE15A] text-black hover:bg-black hover:text-[#FFE15A] border-2 sm:border-3 border-black px-3.5 sm:px-5 py-2 sm:py-2.5 font-serif font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000000] sm:shadow-[4px_4px_0px_#000000] hover:shadow-[1px_1px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer"
          >
            <span>GET A QUOTE</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden w-9 h-9 bg-black text-[#FFE15A] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-3 border-black px-4 py-4 space-y-3 font-serif font-bold text-sm uppercase">
          <button
            type="button"
            onClick={() => scrollTo('#portfolio')}
            className="block w-full text-left py-2 border-b border-black/10 hover:text-[#FFE15A] hover:bg-black px-2 cursor-pointer"
          >
            View Work
          </button>
          <button
            type="button"
            onClick={() => scrollTo('#services')}
            className="block w-full text-left py-2 border-b border-black/10 hover:text-[#FFE15A] hover:bg-black px-2 cursor-pointer"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => scrollTo('#craft')}
            className="block w-full text-left py-2 border-b border-black/10 hover:text-[#FFE15A] hover:bg-black px-2 cursor-pointer"
          >
            Before &amp; After
          </button>
          <button
            type="button"
            onClick={() => scrollTo('#why-us')}
            className="block w-full text-left py-2 border-b border-black/10 hover:text-[#FFE15A] hover:bg-black px-2 cursor-pointer"
          >
            Why Choose Us
          </button>
          <button
            type="button"
            onClick={() => scrollTo('#process')}
            className="block w-full text-left py-2 border-b border-black/10 hover:text-[#FFE15A] hover:bg-black px-2 cursor-pointer"
          >
            Work Process
          </button>
          <button
            type="button"
            onClick={() => scrollTo('#quote')}
            className="block w-full text-left py-2 text-black bg-[#FFE15A] border-2 border-black px-3 font-serif font-black shadow-[2px_2px_0px_#000000] cursor-pointer"
          >
            Request Custom Quote
          </button>
        </div>
      )}
    </header>
  );
};
