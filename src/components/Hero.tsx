import React from 'react';
import { StudioArtwork } from './StudioArtwork';
import { ArrowDownRight, PhoneCall } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex flex-col items-center text-center">
        
        {/* Top Black Badge with Yellow Text */}
        <div className="mb-6 sm:mb-8 inline-block max-w-full">
          <div className="bg-black text-[#FFE15A] border-2 border-black px-3 sm:px-6 py-1.5 sm:py-2 shadow-[3px_3px_0px_#000000] sm:shadow-[4px_4px_0px_#000000] text-[10px] sm:text-xs md:text-sm font-mono font-bold tracking-wider sm:tracking-widest uppercase">
            SILVASSA • VAPI • DAMAN • CREATIVE AGENCY
          </div>
        </div>

        {/* Oversized Editorial Bold Serif Headline */}
        <h1 className="font-serif font-black uppercase text-black tracking-tight leading-[0.98] text-3xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 select-none max-w-full">
          <span className="block">CREATIVE</span>
          <span className="block">CONTENT.</span>
          
          {/* Highlight Yellow Block for SMARTER MARKETING. */}
          <span className="block my-2 sm:my-3.5">
            <span className="inline-block bg-[#FFE15A] text-black border-3 sm:border-4 border-black px-3 sm:px-8 py-1.5 sm:py-2.5 shadow-[4px_4px_0px_#000000] sm:shadow-[8px_8px_0px_#000000] max-w-full">
              <span className="block sm:inline">SMARTER </span>
              <span className="block sm:inline">MARKETING.</span>
            </span>
          </span>

          <span className="block">STRONGER</span>
          <span className="block">BRANDS.</span>
        </h1>

        {/* Hero Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-neutral-800 font-medium leading-relaxed mb-8 sm:mb-10 px-2">
          A creative and social media marketing agency in Silvassa, helping businesses across Vapi, Daman, and nearby cities grow through content, branding, and digital marketing.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 w-full max-w-md sm:max-w-none mb-10 sm:mb-16">
          <button
            type="button"
            onClick={() => scrollTo('#work')}
            className="w-full sm:w-auto bg-black text-white hover:bg-[#FFE15A] hover:text-black border-[3px] border-black px-6 sm:px-9 py-3 sm:py-4 font-serif font-black text-xs sm:text-base uppercase tracking-wider shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('#talk')}
            className="w-full sm:w-auto bg-black text-white hover:bg-[#FFE15A] hover:text-black border-[3px] border-black px-6 sm:px-9 py-3 sm:py-4 font-serif font-black text-xs sm:text-base uppercase tracking-wider shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE15A] group-hover:text-black" />
            <span>☎ LET'S TALK</span>
          </button>
        </div>

        {/* Quick Trust Highlights */}
        <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 text-left">
          <div className="bg-[#F7F7F7] border-2 border-black p-2.5 sm:p-3 shadow-[2px_2px_0px_#000000] sm:shadow-[3px_3px_0px_#000000]">
            <span className="block font-mono text-[10px] sm:text-xs text-neutral-500 font-bold uppercase">Production</span>
            <span className="font-serif font-black text-sm sm:text-lg text-black">4K Video Suite</span>
          </div>
          <div className="bg-[#F7F7F7] border-2 border-black p-2.5 sm:p-3 shadow-[2px_2px_0px_#000000] sm:shadow-[3px_3px_0px_#000000]">
            <span className="block font-mono text-[10px] sm:text-xs text-neutral-500 font-bold uppercase">Focus</span>
            <span className="font-serif font-black text-sm sm:text-lg text-black">Reels &amp; Growth</span>
          </div>
          <div className="bg-[#F7F7F7] border-2 border-black p-2.5 sm:p-3 shadow-[2px_2px_0px_#000000] sm:shadow-[3px_3px_0px_#000000]">
            <span className="block font-mono text-[10px] sm:text-xs text-neutral-500 font-bold uppercase">Base</span>
            <span className="font-serif font-black text-sm sm:text-lg text-black">Silvassa HQ</span>
          </div>
          <div className="bg-[#F7F7F7] border-2 border-black p-2.5 sm:p-3 shadow-[2px_2px_0px_#000000] sm:shadow-[3px_3px_0px_#000000]">
            <span className="block font-mono text-[10px] sm:text-xs text-neutral-500 font-bold uppercase">Turnaround</span>
            <span className="font-serif font-black text-sm sm:text-lg text-black">Fast Delivery</span>
          </div>
        </div>

        {/* Hero Studio Artwork: Professional Video Editing Suite */}
        <StudioArtwork />

      </div>
    </section>
  );
};
