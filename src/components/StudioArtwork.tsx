import React, { useState } from 'react';
import { Radio, Sparkles } from 'lucide-react';

export const StudioArtwork: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto my-10 sm:my-14 px-2 sm:px-4">
      {/* Studio Header Bar */}
      <div className="bg-black text-[#FFE15A] px-3 sm:px-5 py-2 border-t-4 border-l-4 border-r-4 border-black flex items-center justify-between text-xs sm:text-sm font-mono tracking-wider select-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
          <span className="font-bold">STUDIO A // SILVASSA SUITE</span>
          <span className="hidden sm:inline text-white/60">| 4K PRORES 422 HQ</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:flex items-center gap-1.5 text-white/80">
            <Radio className="w-3.5 h-3.5 text-[#FFE15A]" /> LIVE TIMELINE
          </span>
          <span className="bg-[#FFE15A] text-black font-bold px-2 py-0.5 text-[10px] sm:text-[11px] uppercase">
            REC 00:14:32:18
          </span>
        </div>
      </div>

      {/* Main Studio Frame with Black Border and Yellow-Black Offset Shadow */}
      <div 
        className="relative bg-black border-4 border-black shadow-[6px_6px_0px_#FFE15A,12px_12px_0px_#000000] sm:shadow-[8px_8px_0px_#FFE15A,16px_16px_0px_#000000] overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* The Exact Reference Image with Monochrome Default & Color on Hover */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-neutral-900">
          <img
            src="/hero-studio.jpg"
            alt="Aaryav Studios Professional Video Editing Studio Suite"
            className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-[1.02] filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
          />

          {/* Interactive Reveal Tag (Top Right) */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 transition-all duration-300">
            <div className={`px-2.5 sm:px-3 py-1 font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider border-2 border-black flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] ${
              isHovered 
                ? 'bg-[#FFE15A] text-black' 
                : 'bg-black text-[#FFE15A]'
            }`}>
              <Sparkles className="w-3 h-3" />
              <span>{isHovered ? 'FULL COLOR ACTIVE' : 'HOVER TO REVEAL COLOR'}</span>
            </div>
          </div>

          {/* Studio Suite Badge (Top Left) */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
            <span className="bg-black text-white border-2 border-black font-mono font-bold text-[10px] sm:text-xs uppercase px-2.5 sm:px-3 py-1 tracking-widest shadow-[2px_2px_0px_#000000]">
              DAVINCI &amp; PREMIERE SUITE
            </span>
          </div>
        </div>

        {/* Studio Control Strip Underneath */}
        <div className="bg-[#FFFFFF] border-t-4 border-black p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-serif font-black uppercase text-black text-xs sm:text-base">
              AARYAV POST-PRODUCTION WORKSTATION
            </span>
            <span className="hidden sm:inline bg-black text-[#FFE15A] font-bold px-2 py-0.5 text-xs font-mono">
              {isHovered ? 'COLOR GRADE 100%' : 'MONOCHROME 100%'}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-neutral-600 hidden md:inline text-xs font-mono">
              Multi-Monitor • DaVinci Deck • Studio Monitors • Sound Design
            </span>
            <div className="flex items-center gap-1 bg-[#F7F7F7] border-2 border-black p-0.5">
              <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 bg-[#FFE15A] text-black">
                SILVASSA HQ
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 text-black">
                EST. 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Caption instruction */}
      <div className="mt-3 text-center">
        <p className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-neutral-500">
          ✦ Interactive: Move cursor over the workstation to switch from black-and-white to full studio color
        </p>
      </div>
    </div>
  );
};
