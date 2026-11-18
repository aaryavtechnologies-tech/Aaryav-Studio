import React, { useState } from 'react';
import { AREAS_SERVED, AGENCY_INFO } from '../data/content';
import type { LocationArea } from '../types';
import { PhoneCall, X, MessageSquare } from 'lucide-react';

export const Areas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<LocationArea | null>(null);

  return (
    <section id="areas" className="py-20 sm:py-28 bg-white border-t-4 border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header matching exact screenshot */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-3 inline-block">
            <span className="bg-black text-[#FFE15A] border-2 border-black px-4 py-1.5 font-mono font-bold text-xs uppercase tracking-widest shadow-[3px_3px_0px_#000000]">
              WHERE WE CREATE IMPACT
            </span>
          </div>

          <h2 className="font-serif font-black uppercase text-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-tight mb-4">
            AREAS WE <span className="inline-block bg-[#FFE15A] text-black border-3 border-black px-3 sm:px-4 py-0.5 shadow-[4px_4px_0px_#000000]">SERVE</span>
          </h2>

          <p className="font-mono font-bold text-xs sm:text-sm text-neutral-800 uppercase tracking-wider leading-relaxed max-w-4xl">
            HEADQUARTERED IN SILVASSA, AARYAV STUDIOS PROVIDES RAPID ON-SITE VIDEO PRODUCTION AND SOCIAL MEDIA MARKETING THROUGHOUT DADRA &amp; NAGAR HAVELI, SOUTH GUJARAT, AND DAMAN.
          </p>
        </div>

        {/* 3 Location Cards in 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {AREAS_SERVED.map((area) => (
            <div
              key={area.id}
              className="bg-white border-[3.5px] border-black shadow-[6px_6px_0px_#000000] p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#000000] transition-all"
            >
              <div>
                {/* Top Badge: LOCATION / SILVASSA, etc. */}
                <div className="mb-3 inline-block">
                  <span className="bg-black text-[#FFE15A] font-mono font-bold text-xs uppercase px-2.5 py-1 border border-black shadow-[2px_2px_0px_#000000]">
                    {area.badge}
                  </span>
                </div>

                {/* City Name */}
                <h3 className="font-serif font-black text-3xl text-black uppercase tracking-tight mb-4">
                  {area.city}
                </h3>

                {/* Yellow Highlight Box */}
                {area.city === 'SILVASSA' ? (
                  <div className="mb-4 inline-block">
                    <span className="bg-[#FFE15A] text-black border-2 border-black font-mono font-bold text-xs uppercase px-3 py-1.5 shadow-[2px_2px_0px_#000000] inline-block">
                      {area.highlightBox}
                    </span>
                  </div>
                ) : (
                  <div className="bg-[#FFE15A] border-2 border-black p-3 mb-4 shadow-[2px_2px_0px_#000000]">
                    <p className="font-mono text-[11px] sm:text-xs font-bold text-black uppercase leading-relaxed">
                      {area.highlightBox}
                    </p>
                  </div>
                )}

                {/* Description Paragraph */}
                <p className="font-mono text-xs text-neutral-700 font-semibold uppercase leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Bottom Yellow Button: EXPLORE [CITY] → */}
              <div className="pt-4 border-t-2 border-black/15">
                <button
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className="w-full bg-[#FFE15A] hover:bg-black text-black hover:text-[#FFE15A] border-2 border-black py-3 px-4 font-serif font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-[3px_3px_0px_#000000] hover:shadow-[1px_1px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer group"
                >
                  <span>{area.buttonText}</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Central Production Headquarters Box matching screenshot */}
        <div className="mt-14 sm:mt-18 bg-black text-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#FFE15A,14px_14px_0px_#000000] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex-1">
            <span className="bg-[#FFE15A] text-black font-mono font-bold text-xs uppercase px-2.5 py-1 tracking-wider inline-block mb-2 border border-black">
              CENTRAL PRODUCTION HEADQUARTERS
            </span>
            <h4 className="font-serif font-black text-xl sm:text-2xl uppercase text-[#FFE15A] tracking-wider">
              AARYAV STUDIOS — SILVASSA
            </h4>
            <p className="font-mono text-xs sm:text-sm text-neutral-300 uppercase leading-relaxed mt-1">
              KILVANI NAKA, OFFICE NO 601, 6TH FLOOR, PREMAJDEEP SQUARE, OPP. PRAVIN TAILOR, SILVASSA, DADRA &amp; NAGAR HAVELI 396230.
            </p>
          </div>

          <a
            href={AGENCY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#FFE15A] text-black hover:bg-white border-2 border-black font-serif font-black px-6 py-3.5 uppercase text-xs sm:text-sm tracking-wider shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[2px_2px_0px_#FFFFFF] transition-all whitespace-nowrap text-center cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP DIRECT</span>
          </a>
        </div>

      </div>

      {/* Area Detail Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white border-4 border-black shadow-[10px_10px_0px_#FFE15A,16px_16px_0px_#000000] max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-black text-[#FFE15A] border-2 border-black flex items-center justify-center hover:bg-[#FFE15A] hover:text-black transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4 stroke-[3]" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-black text-[#FFE15A] font-mono font-bold text-xs px-2.5 py-0.5 uppercase border border-black">
                {selectedArea.badge}
              </span>
              <span className="font-mono text-xs text-neutral-500 font-bold uppercase">
                {selectedArea.distance}
              </span>
            </div>

            <h3 className="font-serif font-black text-3xl text-black uppercase mb-3">
              {selectedArea.city}
            </h3>

            {/* Highlight */}
            <div className="bg-[#FFE15A] border-2 border-black p-3.5 mb-4 shadow-[3px_3px_0px_#000000]">
              <p className="font-mono text-xs font-bold text-black uppercase leading-relaxed">
                {selectedArea.highlightBox}
              </p>
            </div>

            <p className="font-mono text-xs text-neutral-800 uppercase font-semibold leading-relaxed mb-6">
              {selectedArea.description}
            </p>

            {/* Key Services in this Region */}
            {selectedArea.keyServices && (
              <div className="bg-[#F7F7F7] border-2 border-black p-4 mb-6">
                <h4 className="font-serif font-bold text-xs uppercase text-black tracking-wider mb-2.5">
                  CORE AGENCY CAPABILITIES FOR {selectedArea.city}:
                </h4>
                <div className="space-y-1.5">
                  {selectedArea.keyServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-neutral-800 uppercase font-semibold">
                      <span className="w-1.5 h-1.5 bg-black"></span>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/919328603748?text=${encodeURIComponent(`Hi Aaryav Studios, we operate in ${selectedArea.city} and would like to schedule an on-site video shoot / marketing consultation.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black border-2 border-black py-3 px-4 font-serif font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000000] transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>BOOK IN {selectedArea.city}</span>
              </a>

              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="bg-white text-black hover:bg-neutral-100 border-2 border-black py-3 px-4 font-serif font-bold text-xs uppercase tracking-wider transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
