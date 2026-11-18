import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'PHOTOS', href: '#photography', id: 'photography' },
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'SHORTS', href: '#shorts', id: 'shorts' },
    { name: 'AREAS', href: '#areas', id: 'areas' },
    { name: 'TEAM', href: '#team', id: 'team' },
    { name: 'BLOG', href: '#blog', id: 'blog' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 880) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-2 sm:px-4 pointer-events-none">
      <div className="flex justify-center w-full">
        {/* Main Sticky/Fixed Bar */}
        <nav
          className="pointer-events-auto bg-white border-[3px] border-black shadow-[4px_4px_0px_#000000] sm:shadow-[5px_5px_0px_#000000] flex items-stretch h-12 sm:h-13 w-full max-w-5xl justify-between transition-all"
          aria-label="Main Navigation"
        >
          {/* Logo & Agency Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 px-2.5 sm:px-4 border-r-2 sm:border-r-[2.5px] border-black hover:bg-[#FFE15A] transition-colors select-none group shrink-0"
          >
            {/* Signature Black & Yellow AS Square */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FFE15A] border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_#000000] transition-transform group-hover:scale-105 shrink-0">
              <span className="font-serif font-black text-black text-xs sm:text-sm tracking-tighter">AS</span>
            </div>
            <span className="font-serif font-black tracking-wider text-black text-xs sm:text-sm whitespace-nowrap">
              AARYAV STUDIOS
            </span>
          </a>

          {/* Desktop Nav Items with Vertical Dividers */}
          <div className="hidden min-[880px]:flex items-stretch flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 lg:px-4 flex items-center justify-center text-[11px] lg:text-xs font-serif font-bold uppercase tracking-wider transition-colors border-r-[2.5px] border-black ${
                    isActive
                      ? 'bg-[#FFE15A] text-black font-extrabold shadow-inner'
                      : 'text-black hover:bg-[#FFE15A] hover:text-black'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Right Action: ☎ TALK Button -> Direct to WhatsApp */}
          <div className="hidden min-[880px]:flex items-stretch">
            <a
              href={AGENCY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black px-4 lg:px-5 flex items-center justify-center gap-1.5 font-serif font-extrabold text-[11px] lg:text-xs uppercase tracking-wider transition-colors border-l-[2.5px] border-black"
              aria-label="Direct WhatsApp Chat with Aaryav Studios"
            >
              <span>☎</span>
              <span>TALK</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex min-[880px]:hidden items-stretch shrink-0">
            <a
              href={AGENCY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-[420px]:flex bg-black text-[#FFE15A] px-2.5 sm:px-3 items-center justify-center gap-1 font-serif font-bold text-[11px] sm:text-xs uppercase tracking-wider border-l-2 border-black hover:bg-[#FFE15A] hover:text-black transition-colors"
              aria-label="Direct WhatsApp Chat with Aaryav Studios"
            >
              <PhoneCall className="w-3 h-3 text-[#FFE15A]" />
              <span>TALK</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 sm:px-3.5 flex items-center justify-center bg-[#FFE15A] text-black border-l-2 sm:border-l-[2.5px] border-black hover:bg-black hover:text-[#FFE15A] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu with Brutalist Styling */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto min-[880px]:hidden max-w-5xl mx-auto mt-2 bg-white border-[3px] border-black shadow-[6px_6px_0px_#000000] p-2 flex flex-col gap-1 transition-all max-h-[75vh] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-2.5 border-2 border-black text-xs font-serif font-bold uppercase tracking-wider flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-[#FFE15A] text-black font-extrabold shadow-[2px_2px_0px_#000000]'
                    : 'bg-white text-black hover:bg-[#FFE15A]'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs">→</span>
              </a>
            );
          })}
          <a
            href={AGENCY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-1 px-3.5 py-2.5 bg-black text-[#FFE15A] border-2 border-black font-serif font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-[3px_3px_0px_#000000] hover:bg-[#FFE15A] hover:text-black transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <span>☎</span>
              <span>LET'S TALK — WHATSAPP DIRECT</span>
            </span>
            <span>→</span>
          </a>
        </div>
      )}
    </header>
  );
};
