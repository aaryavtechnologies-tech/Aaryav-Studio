import React from 'react';
import { Send, MessageCircle, Scissors, CheckCheck } from 'lucide-react';

export const GoogleAdsProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Share Requirements',
      icon: Send,
      desc: 'Submit your raw footage, project goals, references, and delivery timeline through our form or direct WhatsApp.',
    },
    {
      step: '02',
      title: 'Discuss Direction',
      icon: MessageCircle,
      desc: 'We align on visual tone, pacing, hook concepts, typography style, and soundtrack before opening the timeline.',
    },
    {
      step: '03',
      title: 'Production & Edit',
      icon: Scissors,
      desc: 'Our editors cut, assemble, color grade, design sound FX, and add kinetic graphics tailored for mobile feeds.',
    },
    {
      step: '04',
      title: 'Review & Delivery',
      icon: CheckCheck,
      desc: 'You review the draft via preview link, we refine according to feedback, and deliver 4K master exports.',
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-white border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-block mb-3">
            <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000]">
              STREAMLINED WORKFLOW
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-4">
            Your Vision.{' '}
            <span className="inline-block bg-[#FFE15A] px-3 sm:px-4 py-0.5 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000]">
              Our Creative Process.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-mono font-bold uppercase text-neutral-600 tracking-wider">
            A frictionless 4-step collaborative journey from raw footage to broadcast-ready assets.
          </p>
        </div>

        {/* Timeline Grid: 4 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-[#F7F7F7] border-4 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000000] transition-all relative group"
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black bg-black text-[#FFE15A] px-2.5 py-1 border border-black shadow-[2px_2px_0px_#FFE15A]">
                    STEP {s.step}
                  </span>
                  <div className="w-9 h-9 bg-[#FFE15A] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] group-hover:bg-black group-hover:text-[#FFE15A] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-lg sm:text-xl text-black uppercase tracking-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-black/15 font-mono text-[10px] font-bold text-neutral-500 uppercase">
                  PHASE {idx + 1} OF 4
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
