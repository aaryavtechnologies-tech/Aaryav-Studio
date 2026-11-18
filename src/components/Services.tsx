import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import type { ServiceItem } from '../types';
import { 
  CheckCircle2, 
  X, 
  MessageCircle
} from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-t-4 border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="mb-4 inline-block">
            <span className="bg-black text-[#FFE15A] border-2 border-black px-4 py-1.5 font-mono font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[3px_3px_0px_#000000]">
              WHAT WE DO
            </span>
          </div>

          <h2 className="font-serif font-black uppercase text-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            CREATIVE SERVICES.<br />
            <span className="inline-block bg-[#FFE15A] text-black border-3 border-black px-3 sm:px-4 py-0.5 shadow-[4px_4px_0px_#000000] mt-1">
              REAL BRAND IMPACT.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-800 font-medium max-w-xl mx-auto">
            High-hook short-form videos, television-grade production, cinema color grading, and strategic branding built for brands in Silvassa, Vapi, Daman, and beyond.
          </p>
        </div>

        {/* 6 Rectangular Service Cards Grid matching the uploaded reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border-[3px] border-black shadow-[6px_6px_0px_#000000] p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000000] transition-all"
            >
              <div>
                {/* Top Badge: 01 / SERVICE, 02 / SERVICE, etc. */}
                <div className="mb-4 inline-block">
                  <span className="bg-black text-[#FFE15A] font-mono font-bold text-xs uppercase px-2.5 py-1 border border-black shadow-[2px_2px_0px_#000000]">
                    {service.badge}
                  </span>
                </div>

                {/* Bold Serif Service Title */}
                <h3 className="font-serif font-black text-xl sm:text-2xl text-black uppercase tracking-tight mb-3">
                  {service.title}
                </h3>

                {/* Subtitle / Description in Uppercase Editorial Style */}
                <p className="font-mono text-xs text-neutral-700 font-bold uppercase tracking-wider leading-relaxed mb-6">
                  {service.subtitle}
                </p>

                {/* Deliverables Checklist with Circle Check Icons */}
                <div className="space-y-3 mb-6">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5 stroke-[2.2]" />
                      <span className="font-mono text-[11px] sm:text-xs text-neutral-800 uppercase tracking-tight font-semibold leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Yellow Button: EXPLORE SERVICE → matching reference screenshot */}
              <div className="pt-4 border-t-2 border-black/15">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="w-full bg-[#FFE15A] hover:bg-black text-black hover:text-[#FFE15A] border-2 border-black py-3 px-4 font-serif font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-[3px_3px_0px_#000000] hover:shadow-[1px_1px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer group"
                >
                  <span>EXPLORE SERVICE</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Agency Retainer Banner */}
        <div className="mt-14 sm:mt-18 bg-black text-white border-[3px] border-black shadow-[6px_6px_0px_#000000] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="bg-[#FFE15A] text-black font-mono font-bold text-xs uppercase px-2.5 py-1 tracking-wider inline-block mb-2">
              BESPOKE RETAINER PACKAGES
            </span>
            <h4 className="font-serif font-bold text-xl sm:text-2xl uppercase text-[#FFE15A]">
              NEED A FULL MONTHLY CONTENT &amp; SOCIAL MANAGEMENT TEAM?
            </h4>
            <p className="text-neutral-300 text-xs sm:text-sm mt-1 max-w-xl font-mono">
              We manage scripting, shooting, editing, posting, and reporting on monthly retainer for businesses in Silvassa, Vapi, and Daman.
            </p>
          </div>
          <a
            href="#talk"
            className="w-full md:w-auto bg-[#FFE15A] text-black hover:bg-white border-2 border-black font-serif font-black px-6 py-3.5 uppercase text-xs sm:text-sm tracking-wider shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[2px_2px_0px_#FFFFFF] transition-all whitespace-nowrap text-center cursor-pointer"
          >
            DISCUSS A RETAINER →
          </a>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white border-4 border-black shadow-[10px_10px_0px_#FFE15A,16px_16px_0px_#000000] max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-black text-[#FFE15A] border-2 border-black flex items-center justify-center hover:bg-[#FFE15A] hover:text-black transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4 stroke-[3]" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-black text-[#FFE15A] font-mono font-bold text-xs px-2.5 py-0.5 uppercase border border-black">
                {selectedService.badge}
              </span>
              <span className="font-mono text-xs text-neutral-500 font-bold uppercase">
                AARYAV STUDIOS SPEC
              </span>
            </div>

            <h3 className="font-serif font-black text-2xl sm:text-3xl text-black uppercase mb-3">
              {selectedService.title}
            </h3>

            <p className="font-mono text-xs text-neutral-700 font-bold uppercase leading-relaxed mb-4">
              {selectedService.subtitle}
            </p>

            {selectedService.description && (
              <p className="text-neutral-700 text-sm leading-relaxed mb-6 font-medium">
                {selectedService.description}
              </p>
            )}

            {/* Deliverables List */}
            <div className="bg-[#F7F7F7] border-2 border-black p-4 sm:p-5 mb-6">
              <h4 className="font-serif font-bold text-xs uppercase text-black tracking-wider mb-3">
                DETAILED DELIVERABLES &amp; SCOPE:
              </h4>
              <div className="space-y-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-900">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="font-mono uppercase font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/919328603748?text=${encodeURIComponent(`Hi Aaryav Studios, I am interested in your "${selectedService.title}" service for my business in Silvassa/Vapi/Daman. Please share pricing and next steps.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black border-2 border-black py-3 px-4 font-serif font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[4px_4px_0px_#000000] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>INQUIRE ON WHATSAPP</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  const talkSection = document.querySelector('#talk');
                  if (talkSection) talkSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#FFE15A] text-black hover:bg-neutral-100 border-2 border-black py-3 px-4 font-serif font-bold text-xs uppercase tracking-wider transition-colors text-center"
              >
                CONTACT STUDIO
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
