import React from 'react';
import { AGENCY_INFO } from '../data/content';
import { ArrowUp, MessageSquare, Mail, MapPin } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'WORK', href: '#work' },
    { name: 'SHORTS', href: '#shorts' },
    { name: 'AREAS', href: '#areas' },
    { name: 'BLOG', href: '#blog' },
    { name: 'TALK', href: '#talk' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-[#FFE15A]/30">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5">
            {/* Logo + Name */}
            <div className="flex items-center gap-3 mb-4 select-none">
              <div className="w-9 h-9 bg-[#FFE15A] border-2 border-white flex items-center justify-center shadow-[2px_2px_0px_#FFE15A]">
                <span className="font-serif font-black text-black text-base tracking-tighter">AS</span>
              </div>
              <span className="font-serif font-black tracking-widest text-[#FFE15A] text-xl uppercase">
                {AGENCY_INFO.name}
              </span>
            </div>

            <p className="font-serif font-bold text-white text-base leading-snug mb-3">
              {AGENCY_INFO.tagline}
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
              Headquartered in Silvassa, Dadra &amp; Nagar Haveli. Empowering ambitious regional brands across Silvassa, Vapi, Daman, and beyond through high-retention video production, brand design, and growth marketing.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={AGENCY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FFE15A] text-black border border-white flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={AGENCY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FFE15A] text-black border border-white flex items-center justify-center hover:bg-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="w-10 h-10 bg-[#FFE15A] text-black border border-white flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-[#FFE15A] mb-4 pb-1 border-b border-[#FFE15A]/30">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-serif font-bold text-sm uppercase tracking-wider">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-[#FFE15A] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#FFE15A] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-[#FFE15A] mb-4 pb-1 border-b border-[#FFE15A]/30">
              SILVASSA HEADQUARTERS
            </h4>
            <div className="space-y-3 font-mono text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFE15A] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {AGENCY_INFO.address.fullFormatted}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#FFE15A] font-bold">WHATSAPP:</span>
                  <a href={AGENCY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                    {AGENCY_INFO.whatsappDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#FFE15A] font-bold">DIRECT:</span>
                  <a href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white underline">
                    {AGENCY_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#FFE15A] font-bold">EMAIL:</span>
                  <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white underline break-all">
                    {AGENCY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            <span>© {currentYear} {AGENCY_INFO.name}. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-500">SILVASSA • VAPI • DAMAN</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="bg-[#FFE15A] text-black border border-white px-3 py-1 font-mono font-bold text-xs uppercase flex items-center gap-1 hover:bg-white transition-colors cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
