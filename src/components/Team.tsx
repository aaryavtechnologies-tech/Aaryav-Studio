import React from 'react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-neutral-950 text-white border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="mb-4 inline-block">
            <span className="bg-[#FFE15A] text-black px-4 py-1.5 font-mono font-bold uppercase tracking-widest text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0px_#FFE15A]">
              AGENCY LEADERSHIP
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase text-[#FFE15A] mb-3 tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-xs sm:text-sm font-mono font-bold uppercase text-neutral-300 tracking-wider">
            The creative and operational team behind Aaryav Studios.
          </p>
        </div>

        {/* 2-Column Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Himanshu Singh */}
          <div className="bg-black border-4 border-white shadow-[8px_8px_0px_#FFE15A] flex flex-col group overflow-hidden">
            <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-neutral-900 border-b-4 border-white">
              <img 
                src="/founder.jpg" 
                alt="Himanshu Singh - Founder & CEO of Aaryav Studios" 
                className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#FFE15A] text-black font-mono font-black uppercase text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000000]">
                FOUNDER &amp; CEO
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between grow">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#FFE15A] mb-1 uppercase tracking-tight">
                  Himanshu Singh
                </h3>
                <div className="text-xs font-mono font-bold text-neutral-400 uppercase mb-3 tracking-wider">
                  Strategy &amp; Client Partnerships
                </div>
                <p className="text-sm font-medium leading-relaxed text-neutral-300">
                  Directs agency vision, long-term brand strategy, and commercial partnerships across South Gujarat and Dadra &amp; Nagar Haveli.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Chirag Singh */}
          <div className="bg-black border-4 border-white shadow-[8px_8px_0px_#FFE15A] flex flex-col group overflow-hidden">
            <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-neutral-900 border-b-4 border-white">
              <img 
                src="/me1.png" 
                alt="Chirag Singh - Co-Founder & COO of Aaryav Studios" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#FFE15A] text-black font-mono font-black uppercase text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000000]">
                CO-FOUNDER &amp; COO
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between grow">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#FFE15A] mb-1 uppercase tracking-tight">
                  Chirag Singh
                </h3>
                <div className="text-xs font-mono font-bold text-neutral-400 uppercase mb-3 tracking-wider">
                  Production &amp; Delivery Lead
                </div>
                <p className="text-sm font-medium leading-relaxed text-neutral-300">
                  Oversees day-to-day video editing, on-location shooting, motion graphics, and delivery standards for client campaigns.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Agency Metrics Banner */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 bg-[#FFE15A] text-black p-6 sm:p-8 border-4 border-white shadow-[6px_6px_0px_#FFFFFF]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-serif font-black text-black">3+</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/80 mt-1">Years Exp</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-serif font-black text-black">200+</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/80 mt-1">Videos Delivered</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-serif font-black text-black">50+</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/80 mt-1">Active Brands</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-serif font-black text-black">Retention</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/80 mt-1">Production Focus</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
