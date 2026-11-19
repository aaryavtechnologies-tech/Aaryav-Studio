import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Palette, Volume2, Sparkles } from 'lucide-react';

export const GoogleAdsBeforeAfter: React.FC = () => {
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

  const features = [
    {
      icon: Palette,
      title: 'Color Grading & Film Emulation',
      desc: 'Log-to-Rec.709 conversion, tonal curves, and skin-tone protection.',
    },
    {
      icon: Sliders,
      title: 'Retention Pacing & Jump Cuts',
      desc: 'Trimming pauses and structuring 3-second hook patterns to stop scrolling.',
    },
    {
      icon: Volume2,
      title: 'Layered Sound Design',
      desc: 'Whooshes, impact hits, ambient beds, and voice mastering.',
    },
    {
      icon: Sparkles,
      title: 'Kinetic Motion Graphics',
      desc: 'Animated typography, callout pointers, and branded overlays.',
    },
  ];

  return (
    <section id="craft" className="py-20 sm:py-28 bg-white border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-block mb-3">
            <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000]">
              POST-PRODUCTION CRAFT
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-4">
            From Raw Footage to{' '}
            <span className="inline-block bg-[#FFE15A] px-3 sm:px-4 py-0.5 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000]">
              Remarkable Content.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-mono font-bold uppercase text-neutral-600 tracking-wider">
            Drag the slider to see how professional color grading, pacing, and visual finishing transform flat footage into scroll-stopping video.
          </p>
        </div>

        {/* Content Layout: Features on Left, Interactive Slider on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Features Checklist Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FFE15A] border-3 border-black p-4 shadow-[4px_4px_0px_#000000] mb-6">
              <span className="font-mono text-xs font-black uppercase text-black block mb-1">
                TRANSFORMATION GUARANTEE
              </span>
              <p className="font-serif font-bold text-sm text-black uppercase leading-snug">
                Even ordinary smartphone or flat camera footage becomes commanding and cinematic in our editing pipeline.
              </p>
            </div>

            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F7F7F7] border-3 border-black p-4 shadow-[3px_3px_0px_#000000] flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 bg-black border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#FFE15A]">
                    <Icon className="w-4 h-4 text-[#FFE15A]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-sm sm:text-base uppercase text-black leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 font-sans mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-2 text-center lg:text-left">
              <span className="font-mono text-xs font-bold uppercase text-neutral-600">
                ↔ DRAG OR TAP SLIDER ON THE RIGHT TO COMPARE
              </span>
            </div>
          </div>

          {/* Interactive Split Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => { isDragging.current = true; }}
              onMouseUp={() => { isDragging.current = false; }}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative w-full aspect-[4/3] sm:aspect-video border-4 border-black overflow-hidden shadow-[8px_8px_0px_#000000] select-none cursor-ew-resize bg-black"
            >
              {/* After: Full Color Graded / Edited Layer */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
                  alt="Aaryav Studios Professionally Edited Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#FFE15A] border-2 border-black px-3 py-1 font-mono font-black text-xs uppercase z-10 shadow-[2px_2px_0px_#000000]">
                  EDITED &amp; GRADED
                </div>
              </div>

              {/* Before: Raw LOG Ungraded Layer */}
              <div
                className="absolute inset-0 border-r-3 border-black z-20 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
                  alt="Raw flat camera footage"
                  className="w-full h-full object-cover filter grayscale contrast-75 brightness-110"
                />
                <div className="absolute top-4 left-4 bg-white border-2 border-black px-3 py-1 font-mono font-black text-xs uppercase shadow-[2px_2px_0px_#000000]">
                  RAW LOG FOOTAGE
                </div>
              </div>

              {/* Draggable Divider Line & Knob */}
              <div
                className="absolute top-0 bottom-0 w-1.5 bg-black z-30 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#FFE15A] border-3 border-black flex items-center justify-center font-mono font-black shadow-[3px_3px_0px_#000000] text-sm sm:text-base">
                  ↔
                </div>
              </div>

              {/* Bottom Helper Bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono font-bold text-white z-20 pointer-events-none">
                <span className="bg-black/80 px-2 py-0.5 border border-neutral-700">FLAT S-LOG / D-LOG</span>
                <span className="bg-black/80 px-2 py-0.5 border border-neutral-700">REC.709 MASTER</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
