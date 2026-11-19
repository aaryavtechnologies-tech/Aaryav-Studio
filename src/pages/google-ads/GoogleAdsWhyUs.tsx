import React from 'react';
import { Lightbulb, Award, Smartphone, RefreshCw } from 'lucide-react';

export const GoogleAdsWhyUs: React.FC = () => {
  const benefits = [
    {
      number: '01',
      title: 'Creative Storytelling',
      icon: Lightbulb,
      description: 'Every project is shaped around its core message and target audience. We prioritize emotional connection and retention rather than generic visual noise.',
    },
    {
      number: '02',
      title: 'Professional Visual Quality',
      icon: Award,
      description: 'Thoughtful editing, cinema-grade finishing, precise color curves, and professional audio mastering executed by dedicated creative editors.',
    },
    {
      number: '03',
      title: 'Content Built for Digital Platforms',
      icon: Smartphone,
      description: 'Video content purposefully formatted for YouTube, Instagram Reels, Google Video Ads, and mobile feeds to maximize thumb-stop rates.',
    },
    {
      number: '04',
      title: 'Collaborative Creative Process',
      icon: RefreshCw,
      description: 'Clear communication, transparent creative planning, responsive feedback loops, and revisions according to agreed project scopes.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F7F7F7] border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-block mb-3">
            <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000]">
              THE AARYAV DIFFERENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-4">
            More Than Just Editing.{' '}
            <span className="inline-block bg-[#FFE15A] px-3 sm:px-4 py-0.5 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000]">
              We Create Visual Experiences.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-mono font-bold uppercase text-neutral-600 tracking-wider">
            Built for brands that value professional polish, dependable turnarounds, and creative strategy.
          </p>
        </div>

        {/* 4 Benefit Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.number}
                className="bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[10px_10px_0px_#FFE15A] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black bg-black text-[#FFE15A] px-2.5 py-1 border border-black">
                      PILLAR {b.number}
                    </span>
                    <div className="w-10 h-10 bg-[#FFE15A] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] group-hover:bg-black group-hover:text-[#FFE15A] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif font-black text-xl sm:text-2xl text-black uppercase tracking-tight mb-3">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFE15A] border border-black"></span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    AARYAV STUDIOS STANDARD
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
