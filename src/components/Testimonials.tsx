import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Poojara Phones',
      badge: 'RETAIL PARTNER',
      quote: 'The team at Aaryav Studios did an amazing job on our promotional video content. Fast turnaround, great eye for color grading, and our store received direct inquiries from the reels.',
    },
    {
      name: 'Educational Hix (YouTube)',
      badge: '200K+ CREATOR',
      quote: 'Understanding pacing and viewer retention is rare. Working with Chirag on our YouTube educational series brought a massive improvement in our average view duration.',
    },
    {
      name: 'SkillPaisa (Instagram)',
      badge: 'INSTAGRAM CAMPAIGN',
      quote: 'Our Instagram engagement noticeably climbed within the first month. Their reels have great energy, clean typography, and feel purpose-built for the mobile feed.',
    },
    {
      name: 'Burhani Socials',
      badge: 'MARKETING AGENCY',
      quote: 'Reliable production partner for shooting and editing. Having them on-site in Silvassa makes coordination effortless whenever we need quick-turnaround client deliverables.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="mb-3 inline-block">
            <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000]">
              VERIFIED REPUTATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-3">
            Client <span className="inline-block bg-[#FFE15A] px-3 py-0.5 border-3 border-black shadow-[4px_4px_0px_#000000]">Feedback</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono font-bold uppercase text-neutral-600 tracking-wider">
            What creators and brand managers say about working with Aaryav Studios.
          </p>
        </div>

        {/* 4 Feedback Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-[#FFE15A] border-4 border-black p-6 sm:p-7 shadow-[6px_6px_0px_#000000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000000] transition-all"
            >
              <p className="text-sm sm:text-base font-serif font-bold text-black uppercase leading-relaxed mb-6 italic">
                "{r.quote}"
              </p>

              <div className="flex items-center justify-between border-t-2 border-black pt-4">
                <div>
                  <h4 className="text-base font-serif font-black uppercase text-black">
                    {r.name}
                  </h4>
                  <span className="text-[10px] font-mono font-bold bg-black text-white px-2 py-0.5 uppercase tracking-widest inline-block mt-1">
                    {r.badge}
                  </span>
                </div>
                <div className="w-8 h-8 bg-black flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#FFE15A]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
