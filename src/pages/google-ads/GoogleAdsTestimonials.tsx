import React from 'react';
import { CheckCircle, Quote } from 'lucide-react';

export const GoogleAdsTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Poojara Phones',
      role: 'REGIONAL RETAIL PARTNER',
      quote: 'The team at Aaryav Studios did an amazing job on our promotional video content. Fast turnaround, great eye for color grading, and our store received direct inquiries from the reels.',
      project: 'Store Walkthrough & Festive Reels',
    },
    {
      name: 'Educational Hix (YouTube)',
      role: '200K+ YOUTUBE CREATOR',
      quote: 'Understanding pacing and viewer retention is rare. Working with Chirag on our YouTube educational series brought a massive improvement in our average view duration.',
      project: 'Long-Form Curriculum Video Edits',
    },
    {
      name: 'SkillPaisa (Instagram)',
      role: 'FINANCIAL EDUCATION CREATOR',
      quote: 'Our Instagram engagement noticeably climbed within the first month. Their reels have great energy, clean typography, and feel purpose-built for the mobile feed.',
      project: 'High-Retention Vertical Reels',
    },
    {
      name: 'Burhani Socials',
      role: 'MARKETING AGENCY',
      quote: 'Reliable production partner for shooting and editing. Having them on-site in Silvassa makes coordination effortless whenever we need quick-turnaround client deliverables.',
      project: 'Commercial Video Shooting & Editing',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F7F7] border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-block mb-3">
            <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000]">
              CLIENT ADVOCACY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-4">
            What Our{' '}
            <span className="inline-block bg-[#FFE15A] px-3 sm:px-4 py-0.5 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000]">
              Clients Say.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-mono font-bold uppercase text-neutral-600 tracking-wider">
            Verified feedback from regional brands and digital creators who rely on Aaryav Studios.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FFE15A] border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000000] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-black flex items-center justify-center">
                    <Quote className="w-4 h-4 text-[#FFE15A]" />
                  </div>
                  <span className="font-mono text-[10px] bg-black text-white px-2 py-0.5 uppercase tracking-wider font-bold">
                    {t.role}
                  </span>
                </div>

                <p className="font-serif font-bold text-base sm:text-lg text-black uppercase leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t-2 border-black pt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-black text-base uppercase text-black leading-tight">
                    {t.name}
                  </h3>
                  <span className="font-mono text-[11px] text-neutral-800 font-bold block mt-0.5">
                    {t.project}
                  </span>
                </div>
                <div className="w-8 h-8 bg-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000000]">
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
