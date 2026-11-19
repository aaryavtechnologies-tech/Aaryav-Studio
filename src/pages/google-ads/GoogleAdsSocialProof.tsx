import React from 'react';
import { Award, Film, Users, ShieldCheck } from 'lucide-react';

export const GoogleAdsSocialProof: React.FC = () => {
  const clients = [
    {
      name: 'POOJARA PHONES',
      tag: 'REGIONAL RETAIL BRAND',
      note: 'Promotional Store Video & Campaign Reels',
    },
    {
      name: 'EDUCATIONAL HIX',
      tag: '200K+ YOUTUBE CREATOR',
      note: 'Educational Series & Long-Form Production',
    },
    {
      name: 'SKILLPAISA',
      tag: 'FINTECH & CAREER CREATOR',
      note: 'High-Retention Instagram Reels & Subtitles',
    },
    {
      name: 'BURHANI SOCIALS',
      tag: 'MARKETING AGENCY PARTNER',
      note: 'Commercial Video Shooting & Editing Support',
    },
  ];

  const stats = [
    {
      icon: Award,
      value: '3+ YEARS',
      label: 'STUDIO EXPERIENCE',
      sub: 'Post-production & creative production',
    },
    {
      icon: Film,
      value: '200+',
      label: 'VIDEOS DELIVERED',
      sub: 'Reels, YouTube edits & commercials',
    },
    {
      icon: Users,
      value: '50+',
      label: 'ACTIVE CLIENTS',
      sub: 'Creators, businesses & agencies',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F7F7F7] border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block mb-3">
            <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000] inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFE15A]" />
              <span>PROVEN TRACK RECORD</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black uppercase tracking-tight text-black mb-3">
            Creative Work Trusted by{' '}
            <span className="inline-block bg-[#FFE15A] px-3 py-0.5 border-3 border-black shadow-[3px_3px_0px_#000000]">
              Brands &amp; Creators.
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono font-bold uppercase text-neutral-600 tracking-wider">
            Authentic partnerships delivering real watch time, brand prestige, and audience engagement.
          </p>
        </div>

        {/* Real Clients Badges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-12 sm:mb-16">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white border-3 border-black p-4 sm:p-5 shadow-[4px_4px_0px_#000000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000000] transition-all"
            >
              <div>
                <span className="block font-mono text-[9px] sm:text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1">
                  {client.tag}
                </span>
                <h3 className="font-serif font-black text-sm sm:text-base text-black uppercase tracking-tight">
                  {client.name}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-black/10">
                <span className="font-sans text-[11px] sm:text-xs text-neutral-600 font-medium">
                  {client.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Stats Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white border-3 border-black p-5 sm:p-6 shadow-[5px_5px_0px_#FFE15A] flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#FFE15A]">
                  <Icon className="w-6 h-6 text-[#FFE15A]" />
                </div>
                <div>
                  <div className="font-serif font-black text-2xl sm:text-3xl text-black tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="font-mono font-bold text-xs uppercase text-black tracking-wider mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-neutral-600 font-sans mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
