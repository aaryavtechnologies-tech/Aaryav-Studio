import React, { useState, useRef, useCallback } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const RawVsEdited: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="craft" className="py-20 sm:py-28 bg-[#F7F7F7] border-t-4 border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Left Column: Text & Features */}
          <div className="flex-1 w-full text-center lg:text-left">
            <div className="mb-3 inline-block">
              <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000]">
                POST-PRODUCTION CRAFT
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-4 leading-tight">
              Raw vs <span className="inline-block bg-[#FFE15A] px-2.5 sm:px-3 py-0.5 border-3 border-black shadow-[4px_4px_0px_#000000]">Edited</span>
            </h2>

            <p className="text-sm sm:text-base font-medium text-neutral-800 mb-6 max-w-lg mx-auto lg:mx-0">
              Cinema-grade color science, tight pacing, and custom audio leveling that elevate raw footage into thumb-stopping brand creatives.
            </p>

            <ul className="space-y-3 mb-8 inline-block text-left">
              <li className="flex items-center gap-3 font-serif font-bold text-xs sm:text-sm uppercase text-black">
                <span className="w-5 h-5 bg-[#FFE15A] border-2 border-black flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_#000000]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black stroke-[3]" />
                </span>
                <span>Color Correction &amp; Film Emulation</span>
              </li>
              <li className="flex items-center gap-3 font-serif font-bold text-xs sm:text-sm uppercase text-black">
                <span className="w-5 h-5 bg-[#FFE15A] border-2 border-black flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_#000000]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black stroke-[3]" />
                </span>
                <span>Pacing &amp; Story Structure</span>
              </li>
              <li className="flex items-center gap-3 font-serif font-bold text-xs sm:text-sm uppercase text-black">
                <span className="w-5 h-5 bg-[#FFE15A] border-2 border-black flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_#000000]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black stroke-[3]" />
                </span>
                <span>Layered Sound Design &amp; Audio Polish</span>
              </li>
            </ul>

            <div className="text-xs font-mono text-neutral-600 font-bold uppercase">
              ↔ DRAG OR HOVER SLIDER TO COMPARE
            </div>
          </div>

          {/* Right Column: Interactive Before/After Split Slider */}
          <div className="flex-1 w-full max-w-xl mx-auto">
            <div 
              ref={containerRef}
              onMouseDown={() => { isDragging.current = true; }}
              onMouseUp={() => { isDragging.current = false; }}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative w-full aspect-[4/3] sm:aspect-video border-4 border-black overflow-hidden shadow-[8px_8px_0px_#000000] select-none cursor-ew-resize bg-black"
            >
              {/* After: Full Color Edited Layer */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Edited color graded preview" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-[#FFE15A] border-2 border-black px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase z-10 shadow-[2px_2px_0px_#000000]">
                  EDITED
                </div>
              </div>

              {/* Before: Raw LOG Grayscale Layer clipped by sliderPos */}
              <div 
                className="absolute inset-0 border-r-3 border-black z-20 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Raw ungraded footage preview" 
                  className="w-full h-full object-cover filter grayscale contrast-75 brightness-110"
                />
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-white border-2 border-black px-3 py-1 font-mono font-black text-xs sm:text-sm uppercase shadow-[2px_2px_0px_#000000]">
                  RAW LOG
                </div>
              </div>

              {/* Draggable Divider Line & Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1.5 bg-black z-30 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-[#FFE15A] border-3 border-black flex items-center justify-center font-mono font-black shadow-[3px_3px_0px_#000000] text-sm sm:text-base">
                  ↔
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
