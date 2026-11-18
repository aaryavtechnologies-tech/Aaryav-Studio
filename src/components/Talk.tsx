import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/content';
import { MessageSquare, Mail, Phone, Copy, Check, ExternalLink } from 'lucide-react';

export const Talk: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(AGENCY_INFO.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="talk" className="py-20 sm:py-28 bg-[#FFE15A] border-t-4 border-black relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* Top Header: Square AS Logo Beside AARYAV STUDIOS */}
        <div className="flex items-center justify-center gap-3 mb-6 select-none">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFE15A] border-[3px] border-black flex items-center justify-center shadow-[3px_3px_0px_#000000]">
            <span className="font-serif font-black text-black text-lg sm:text-xl tracking-tighter">
              AS
            </span>
          </div>
          <span className="font-serif font-black tracking-widest text-black text-lg sm:text-2xl uppercase">
            AARYAV STUDIOS
          </span>
        </div>

        {/* Visually Dominant, Giant Bold Serif Heading: READY TO SCALE? */}
        <h2 className="font-serif font-black uppercase text-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-10 sm:mb-14">
          READY TO SCALE?
        </h2>

        {/* Large White Rectangular Card with Thick Black Border & Hard Offset Black Shadow */}
        <div className="w-full bg-white border-4 border-black shadow-[8px_8px_0px_#000000] sm:shadow-[10px_10px_0px_#000000] p-6 sm:p-10 md:p-12 text-left mb-10 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black/15">
            
            {/* Left Column — OFFICE ADDRESS */}
            <div className="pb-6 md:pb-0 md:pr-8">
              {/* Badge: 📍 OFFICE ADDRESS */}
              <div className="mb-4 inline-block">
                <span className="bg-black text-[#FFE15A] font-mono font-bold text-xs uppercase px-3 py-1.5 border border-black shadow-[2px_2px_0px_#000000] inline-flex items-center gap-1.5">
                  <span>📍</span>
                  <span>OFFICE ADDRESS</span>
                </span>
              </div>

              {/* Exact Address */}
              <div className="font-serif font-bold text-base sm:text-lg text-black leading-snug uppercase tracking-tight space-y-1 mb-6">
                <p>KILVANI NAKA, OFFICE NO 601, 6TH FLOOR,</p>
                <p>PREMAJDEEP SQUARE, OPP. PRAVIN TAILOR,</p>
                <p>SILVASSA, DADRA &amp; NAGAR HAVELI 396230</p>
              </div>

              {/* Address Quick Actions */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-black/10">
                <button
                  type="button"
                  onClick={copyAddress}
                  className="bg-[#F7F7F7] hover:bg-black hover:text-[#FFE15A] border-2 border-black px-3 py-1.5 font-mono text-xs font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'ADDRESS COPIED!' : 'COPY ADDRESS'}</span>
                </button>

                <a
                  href={AGENCY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFE15A] hover:bg-black hover:text-white border-2 border-black px-3 py-1.5 font-mono text-xs font-bold uppercase transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>OPEN IN GOOGLE MAPS</span>
                </a>
              </div>
            </div>

            {/* Right Column — DIRECT CONTACT */}
            <div className="pt-6 md:pt-0 md:pl-10">
              {/* Badge: ☎ DIRECT CONTACT */}
              <div className="mb-4 inline-block">
                <span className="bg-black text-[#FFE15A] font-mono font-bold text-xs uppercase px-3 py-1.5 border border-black shadow-[2px_2px_0px_#000000] inline-flex items-center gap-1.5">
                  <span>☎</span>
                  <span>DIRECT CONTACT</span>
                </span>
              </div>

              {/* Contact Entries */}
              <div className="space-y-4 font-mono text-sm sm:text-base">
                
                {/* WhatsApp */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-neutral-500 font-bold uppercase text-xs sm:text-sm">WHATSAPP:</span>
                  <a
                    href={AGENCY_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif font-black text-black hover:text-neutral-700 text-lg sm:text-xl underline underline-offset-4 decoration-2"
                  >
                    {AGENCY_INFO.whatsappDisplay}
                  </a>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-neutral-500 font-bold uppercase text-xs sm:text-sm">PHONE:</span>
                  <a
                    href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
                    className="font-serif font-black text-black hover:text-neutral-700 text-lg sm:text-xl underline underline-offset-4 decoration-2"
                  >
                    {AGENCY_INFO.phoneDisplay}
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-neutral-500 font-bold uppercase text-xs sm:text-sm">EMAIL:</span>
                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="font-serif font-black text-black hover:text-neutral-700 text-base sm:text-lg break-all underline underline-offset-4 decoration-2"
                  >
                    {AGENCY_INFO.email}
                  </a>
                </div>

              </div>

              {/* Operating Hours Note */}
              <div className="mt-6 pt-3 border-t border-black/10 font-mono text-xs text-neutral-600">
                <span>STUDIO HOURS: MON — SAT (10:00 AM – 7:30 PM IST)</span>
              </div>
            </div>

          </div>
        </div>

        {/* Two Large Black Buttons with White Bold Text & Offset Shadows */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl">
          
          {/* Button 1: CHAT ON WHATSAPP (+91 93286 03748) */}
          <a
            href={AGENCY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 bg-black text-white hover:bg-[#FFE15A] hover:text-black border-[3px] border-black py-4 px-6 font-serif font-black text-sm sm:text-base uppercase tracking-wider shadow-[6px_6px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <MessageSquare className="w-5 h-5 text-[#FFE15A] group-hover:text-black" />
            <span>CHAT ON WHATSAPP (+91 93286 03748)</span>
          </a>

          {/* Button 2: EMAIL OUR TEAM */}
          <a
            href={`mailto:${AGENCY_INFO.email}?subject=${encodeURIComponent('Project Inquiry — Aaryav Studios')}`}
            className="w-full sm:flex-1 bg-black text-white hover:bg-[#FFE15A] hover:text-black border-[3px] border-black py-4 px-6 font-serif font-black text-sm sm:text-base uppercase tracking-wider shadow-[6px_6px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <Mail className="w-5 h-5 text-[#FFE15A] group-hover:text-black" />
            <span>EMAIL OUR TEAM</span>
          </a>

        </div>

        {/* Direct Call Quick Link */}
        <div className="mt-6">
          <a
            href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 text-black font-serif font-bold text-sm uppercase underline decoration-2 hover:text-neutral-800"
          >
            <Phone className="w-4 h-4 text-black" />
            <span>OR CALL US DIRECTLY AT {AGENCY_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
