import React, { useState, useRef } from 'react';
import { SHORTS_REELS } from '../data/content';
import type { ShortReel } from '../types';
import { ReelModal } from './ReelModal';
import { Play, Eye, Smartphone } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';

interface VideoCardProps {
  reel: ShortReel;
  onSelect: (reel: ShortReel) => void;
}

const ReelCard: React.FC<VideoCardProps> = ({ reel, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={() => onSelect(reel)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white border-[3px] border-black shadow-[6px_6px_0px_#000000] overflow-hidden flex flex-col justify-between hover:-translate-y-2 hover:shadow-[10px_10px_0px_#000000] transition-all cursor-pointer group"
    >
      {/* 9:16 Aspect Ratio Frame */}
      <div className="relative aspect-[9/16] bg-neutral-900 overflow-hidden border-b-[3px] border-black">
        {reel.videoSrc ? (
          <video
            ref={videoRef}
            src={reel.videoSrc}
            poster={reel.thumbnail}
            className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src={reel.thumbnail}
            alt={reel.title}
            className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        )}

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/35 flex flex-col justify-between p-3.5 pointer-events-none">
          
          {/* Top Meta Badges */}
          <div className="flex items-center justify-between">
            <span className="bg-[#FFE15A] text-black border border-black font-mono font-bold text-[10px] uppercase px-2 py-0.5 shadow-[2px_2px_0px_#000000]">
              {reel.category}
            </span>
            <div className="flex items-center gap-1 bg-black/80 text-white font-mono text-[10px] px-2 py-0.5 border border-white/20">
              <Eye className="w-3 h-3 text-[#FFE15A]" />
              <span>{reel.views}</span>
            </div>
          </div>

          {/* Center Play Button Icon - Appears on Hover */}
          <div className="w-13 h-13 bg-[#FFE15A] text-black border-[2.5px] border-black rounded-full flex items-center justify-center mx-auto opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-110 shadow-[4px_4px_0px_#000000] transition-all duration-300 transform">
            <Play className="w-6 h-6 ml-0.5 fill-black" />
          </div>

          {/* Bottom Duration & Title on Reel */}
          <div>
            <span className="bg-black text-[#FFE15A] font-mono text-[10px] px-1.5 py-0.5 inline-block mb-1 border border-black">
              {reel.duration}
            </span>
            <h4 className="font-serif font-bold text-white text-base leading-snug line-clamp-2">
              {reel.title}
            </h4>
          </div>
        </div>
      </div>

      {/* Bottom Card Footer */}
      <div className="p-3.5 bg-white flex items-center justify-between">
        <span className="font-mono text-xs text-neutral-600 font-bold">
          TAP TO PREVIEW
        </span>
        <span className="bg-[#FFE15A] text-black border border-black px-2 py-0.5 font-serif font-black text-xs uppercase tracking-wider group-hover:bg-black group-hover:text-[#FFE15A] transition-colors">
          PLAY REEL →
        </span>
      </div>
    </div>
  );
};

export const Shorts: React.FC = () => {
  const [selectedReel, setSelectedReel] = useState<ShortReel | null>(null);

  return (
    <section id="shorts" className="py-20 sm:py-28 bg-[#F7F7F7] border-t-4 border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="mb-4 inline-block">
            <span className="bg-black text-[#FFE15A] border-2 border-black px-4 py-1.5 font-mono font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[3px_3px_0px_#000000]">
              MOTION &amp; CREATIVITY
            </span>
          </div>

          <h2 className="font-serif font-black uppercase text-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            SHORT FORM.<br />
            <span className="inline-block bg-[#FFE15A] text-black border-3 border-black px-3 sm:px-4 py-0.5 shadow-[4px_4px_0px_#000000] mt-1">
              BIG IMPACT.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium max-w-xl mx-auto">
            High-hook, retention-focused 9:16 vertical video edits engineered for Instagram Reels and YouTube Shorts algorithms.
          </p>
        </div>

        {/* 9:16 Reel Cards Showcase: Desktop Grid & Mobile Swipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHORTS_REELS.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              onSelect={(r) => setSelectedReel(r)}
            />
          ))}
        </div>

        {/* Instagram Channel Banner */}
        <div className="mt-14 bg-white border-[3px] border-black shadow-[6px_6px_0px_#000000] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FFE15A] border-2 border-black flex items-center justify-center shrink-0 shadow-[3px_3px_0px_#000000]">
              <Smartphone className="w-6 h-6 text-black stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-serif font-black text-lg sm:text-xl uppercase text-black">
                Follow @AaryavStudios on Instagram
              </h4>
              <p className="text-neutral-600 text-sm mt-0.5 font-medium">
                Daily video editing breakdowns, creative BTS, and regional marketing insights.
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com/aaryavstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black border-2 border-black font-serif font-bold px-6 py-3 uppercase text-xs sm:text-sm tracking-wider shadow-[4px_4px_0px_#000000] transition-colors flex items-center justify-center gap-2"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>OPEN INSTAGRAM FEED</span>
          </a>
        </div>

      </div>

      {/* Reel Expanded Modal Player */}
      <ReelModal
        reel={selectedReel}
        onClose={() => setSelectedReel(null)}
      />
    </section>
  );
};
