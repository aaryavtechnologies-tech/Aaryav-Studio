import React from 'react';

export const KineticType: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Left Column: Headline & Retention Philosophy */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-3 inline-block">
              <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000]">
                RETENTION DESIGN
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-4 leading-tight">
              Kinetic <span className="inline-block bg-[#FFE15A] text-black px-2.5 sm:px-3 py-0.5 border-3 border-black shadow-[4px_4px_0px_#000000]">Type</span>
            </h2>

            <p className="text-sm sm:text-base font-medium text-neutral-800 leading-relaxed max-w-md mx-auto lg:mx-0 mb-6">
              Motion typography that commands attention. We design on-screen animated text that keeps mobile viewers engaged through every second of your message.
            </p>

            <div className="inline-flex items-center gap-3 bg-[#F7F7F7] border-2 border-black p-3 shadow-[3px_3px_0px_#000000]">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              <span className="font-mono text-xs font-bold text-black uppercase">
                ENGINEERED FOR 85%+ HOOK RETENTION
              </span>
            </div>
          </div>

          {/* Right Column: Video Showcase */}
          <div className="w-full lg:w-1/2">
            <div className="relative group max-w-lg mx-auto">
              <div className="relative z-10 border-4 border-black shadow-[8px_8px_0px_#000000] aspect-video w-full overflow-hidden bg-black">
                <video
                  src="/videos/optimized/core-dev-reel.mp4"
                  poster="/videos/optimized/ye-website.jpg"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
