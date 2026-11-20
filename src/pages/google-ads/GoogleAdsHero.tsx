import React from 'react';
import { ArrowDownRight, Sparkles, Play, CheckCircle } from 'lucide-react';

interface GoogleAdsHeroProps {
  onQuoteClick: () => void;
  onExploreWorkClick: () => void;
}

export const GoogleAdsHero: React.FC<GoogleAdsHeroProps> = ({
  onQuoteClick,
  onExploreWorkClick,
}) => {
  return (
    <section className="pt-8 sm:pt-14 pb-12 sm:pb-20 bg-white relative overflow-hidden border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Trust Category Pill */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFE15A] border-2 border-black px-3.5 py-1.5 shadow-[3px_3px_0px_#000000] text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#FFE15A]" />
            <span>PREMIUM VIDEO PRODUCTION &amp; POST-PRODUCTION STUDIO</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="font-serif font-black uppercase text-black tracking-tight leading-[1.02] text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Professional Video Editing{' '}
            <span className="block mt-1 sm:mt-2">
              That Makes Your Brand{' '}
              <span className="inline-block bg-[#FFE15A] text-black px-3 sm:px-5 py-0.5 sm:py-1 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000]">
                Stand Out.
              </span>
            </span>
          </h1>

          {/* Supporting Headline */}
          <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-neutral-800 font-medium leading-relaxed">
            From scroll-stopping Reels and Shorts to cinematic brand videos, Aaryav Studios turns your footage into polished, engaging visual content.
          </p>
        </div>

        {/* Dual Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto mb-10 sm:mb-14">
          <button
            type="button"
            onClick={onQuoteClick}
            className="w-full sm:w-auto bg-[#FFE15A] text-black hover:bg-black hover:text-[#FFE15A] border-3 border-black px-7 sm:px-9 py-3.5 sm:py-4 font-serif font-black text-sm sm:text-base uppercase tracking-wider shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>GET A CUSTOM QUOTE</span>
            <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={onExploreWorkClick}
            className="w-full sm:w-auto bg-black text-white hover:bg-[#FFE15A] hover:text-black border-3 border-black px-7 sm:px-9 py-3.5 sm:py-4 font-serif font-black text-sm sm:text-base uppercase tracking-wider shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>SEE OUR WORK</span>
            <Play className="w-3.5 h-3.5 fill-current" />
          </button>
        </div>

        {/* Hero Visual: Cinematic Editing Suite Timeline & Real Work Preview */}
        <div className="w-full max-w-5xl mx-auto bg-black border-4 border-black shadow-[8px_8px_0px_#000000] sm:shadow-[12px_12px_0px_#FFE15A] overflow-hidden text-white mb-10">
          
          {/* Top Window Chrome Bar */}
          <div className="bg-[#111111] px-4 py-2.5 border-b-2 border-neutral-800 flex items-center justify-between font-mono text-[11px] text-neutral-400 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              <span className="ml-2 font-bold text-white uppercase hidden sm:inline">AARYAV STUDIO SUITE // 4K POST-PRODUCTION</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-neutral-800 text-[#FFE15A] px-2 py-0.5 text-[10px] font-bold">REC.709 MASTER</span>
              <span className="hidden sm:inline">TIMELINE: 00:04:18:22</span>
            </div>
          </div>

          {/* Interactive Hero Video Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 divide-y-2 md:divide-y-0 md:divide-x-2 divide-neutral-800 bg-[#0A0A0A]">
            
            {/* Main Featured Cinema Artwork (7 Cols) */}
            <div className="md:col-span-7 relative group aspect-video sm:aspect-[16/10] bg-neutral-900 overflow-hidden flex items-center justify-center cursor-pointer">
              <img
                src="/hero-studio-suite.jpg"
                alt="Aaryav Studios Creative Post-Production Editing Suite"
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Hover For Color Hint Badge */}
              <div className="absolute top-3 right-3 bg-black/85 text-[#FFE15A] font-mono font-bold text-[9px] uppercase px-2.5 py-0.5 border border-black group-hover:opacity-0 transition-opacity pointer-events-none shadow-[2px_2px_0px_#000000]">
                HOVER FOR COLOR
              </div>

              {/* Artwork Overlay Details */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono pointer-events-none">
                <span className="bg-black/90 text-white px-2.5 py-1 border border-neutral-700">
                  ✦ STUDIO POST-PRODUCTION SUITE
                </span>
                <span className="bg-[#FFE15A] text-black font-bold px-2 py-0.5 border border-black text-[10px]">
                  NEO-BRUTALIST CINEMA
                </span>
              </div>
            </div>

            {/* Editing Timeline & Metadata Sidebar (5 Cols) */}
            <div className="md:col-span-5 p-4 sm:p-6 flex flex-col justify-between bg-[#111111]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-bold">
                    POST-PRODUCTION PIPELINE
                  </span>
                  <span className="font-mono text-[10px] text-green-400 bg-green-950/60 px-2 py-0.5 border border-green-800">
                    ACTIVE PROJECT
                  </span>
                </div>

                <h3 className="font-serif font-black text-lg sm:text-xl text-white uppercase mb-2">
                  Precision Editing Engineered for Conversion
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-4">
                  We don’t just slice video files. We craft dynamic pacing, kinetic typography, multi-layer soundscapes, and color grading calibrated for high watch-time.
                </p>

                {/* Capabilities Checklist */}
                <div className="space-y-2 mb-6">
                  {[
                    '3-Second Scroll-Stopping Visual Hooks',
                    'Kinetic Subtitles & Sound FX Design',
                    'DaVinci Resolve Cinema Color Grading',
                    'Multi-Cam Sync & Audio Mastering'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-neutral-200">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FFE15A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Track Visual Representation */}
              <div className="bg-[#181818] border border-neutral-700 p-2.5 space-y-1.5 font-mono text-[10px] select-none">
                <div className="flex items-center justify-between text-neutral-400 pb-1 border-b border-neutral-800">
                  <span>TIMELINE LAYERS</span>
                  <span className="text-[#FFE15A]">4K 60FPS</span>
                </div>
                <div className="grid grid-cols-12 gap-1 items-center">
                  <span className="col-span-2 text-neutral-500">V2</span>
                  <div className="col-span-10 bg-[#FFE15A] text-black font-bold px-1.5 py-0.5 truncate border border-black">
                    KINETIC MOTION GRAPHICS
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-1 items-center">
                  <span className="col-span-2 text-neutral-500">V1</span>
                  <div className="col-span-10 bg-neutral-700 text-white px-1.5 py-0.5 truncate border border-neutral-600">
                    CINEMA COLOR GRADED A-ROLL
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-1 items-center">
                  <span className="col-span-2 text-neutral-500">A1</span>
                  <div className="col-span-10 bg-emerald-700 text-white px-1.5 py-0.5 truncate border border-emerald-600">
                    MASTERED SFX &amp; DIALOGUE
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Small Trust Strip Beneath Hero */}
        <div className="w-full bg-[#FFE15A] border-3 border-black p-3 sm:p-4 shadow-[4px_4px_0px_#000000] text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 font-mono font-black text-xs sm:text-sm text-black uppercase tracking-wider">
            <span>REELS &amp; SHORTS</span>
            <span className="hidden sm:inline">•</span>
            <span>VIDEO EDITING</span>
            <span className="hidden sm:inline">•</span>
            <span>BRAND VIDEOS</span>
            <span className="hidden sm:inline">•</span>
            <span>SOCIAL MEDIA CONTENT</span>
          </div>
        </div>

      </div>
    </section>
  );
};
