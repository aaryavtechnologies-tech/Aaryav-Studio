import React from 'react';
import { Video, Film, Camera, TrendingUp, Palette, Sparkles, ArrowRight } from 'lucide-react';

interface GoogleAdsServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const GoogleAdsServices: React.FC<GoogleAdsServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'reels-shorts',
      number: '01',
      title: 'Reels & Shorts Editing',
      formValue: 'Reels & Shorts Editing',
      icon: Video,
      description: 'Professional vertical videos for Instagram Reels, YouTube Shorts, and short-form content engineered for maximum retention.',
      highlights: ['Hook Pacing in First 3s', 'Kinetic Animated Captions', 'SFX & Sound Layering'],
    },
    {
      id: 'video-editing',
      number: '02',
      title: 'Professional Video Editing',
      formValue: 'Long-Form Video Editing',
      icon: Film,
      description: 'Long-form YouTube videos, interviews, educational videos, and promotional content structured for high watch-time.',
      highlights: ['Multi-Camera Sync', 'B-Roll & Visual Callouts', 'Dialogue Noise Removal'],
    },
    {
      id: 'commercial-production',
      number: '03',
      title: 'Commercial Video Production',
      formValue: 'Commercial Video Production',
      icon: Camera,
      description: 'Professional promotional videos, corporate films, and brand campaigns shot with cinema cameras and studio lighting.',
      highlights: ['4K Cinema Camera Capture', 'Studio & On-Location Filming', 'Creative Script & Direction'],
    },
    {
      id: 'social-media-marketing',
      number: '04',
      title: 'Social Media Marketing',
      formValue: 'Social Media Marketing',
      icon: TrendingUp,
      description: 'Content planning, campaign creatives, and social media marketing support tailored to generate genuine business inquiries.',
      highlights: ['Monthly Content Calendar', 'Regional Targeting (Vapi/Daman/Silvassa)', 'Inquiry-Driven CTAs'],
    },
    {
      id: 'color-grading',
      number: '05',
      title: 'Cinematic Color Grading',
      formValue: 'Color Grading',
      icon: Palette,
      description: 'Professional footage enhancement, cinematic color correction, and visual finishing in DaVinci Resolve.',
      highlights: ['Rec.709 & Film Emulation', 'Natural Skin Tone Isolation', 'Mood & Contrast Curves'],
    },
    {
      id: 'branding-design',
      number: '06',
      title: 'Branding & Creative Design',
      formValue: 'Branding & Creative Design',
      icon: Sparkles,
      description: 'Brand identity, visual creatives, promotional design, and content branding that make your business look commanding.',
      highlights: ['Visual Identity Systems', 'Promotional Social Assets', 'Brand Style Manuals'],
    },
  ];

  const handleCardClick = (serviceValue: string) => {
    onSelectService(serviceValue);
    const el = document.querySelector('#quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-block mb-3">
            <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000]">
              CORE SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-4">
            Everything Your Brand Needs to{' '}
            <span className="inline-block bg-[#FFE15A] px-3 sm:px-4 py-0.5 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000]">
              Look Exceptional.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-mono font-bold uppercase text-neutral-600 tracking-wider max-w-xl mx-auto">
            Creative services tailored to help your business communicate, engage, and stand out.
          </p>
        </div>

        {/* 6 Service Cards Grid (3x2 on desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="bg-[#F7F7F7] border-4 border-black p-6 sm:p-7 shadow-[6px_6px_0px_#000000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[10px_10px_0px_#FFE15A] transition-all group"
              >
                <div>
                  {/* Top Card Bar: Number Badge + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-black bg-black text-[#FFE15A] px-2.5 py-1 border border-black shadow-[2px_2px_0px_#FFE15A]">
                      SERVICE {s.number}
                    </span>
                    <div className="w-10 h-10 bg-[#FFE15A] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] group-hover:bg-black group-hover:text-[#FFE15A] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-black uppercase tracking-tight mb-3">
                    {s.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed mb-5">
                    {s.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-black/15">
                    {s.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase text-neutral-800">
                        <span className="w-1.5 h-1.5 bg-black inline-block"></span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preselecting CTA Button */}
                <button
                  type="button"
                  onClick={() => handleCardClick(s.formValue)}
                  className="w-full mt-2 bg-black text-white group-hover:bg-[#FFE15A] group-hover:text-black border-2 border-black py-2.5 px-4 font-serif font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000000] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>GET A QUOTE FOR THIS</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
