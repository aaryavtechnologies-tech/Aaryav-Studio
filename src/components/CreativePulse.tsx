import React, { useRef, useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Pause, 
  Play, 
  Volume2,
  VolumeX,
  ArrowRight, 
  MapPin, 
  Clock, 
  Navigation, 
  CheckCircle2 
} from 'lucide-react';

export const CreativePulse: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      videoRef.current.volume = 1.0;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section 
      id="pulse" 
      className="py-16 sm:py-24 bg-black text-white border-t-4 border-black relative overflow-hidden" 
      aria-label="Creative Pulse - Instagram and Google Business Integration"
    >
      {/* Subtle grid background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFDE59] text-black text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 mb-3 border-2 border-black shadow-[3px_3px_0px_#fff]">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>THE CREATIVE PULSE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl brutalist-heading uppercase text-white leading-tight font-serif font-black">
            Our Work Speaks.{' '}
            <span className="bg-[#FFDE59] text-black px-2.5 sm:px-4 py-0.5 border-2 sm:border-4 border-black shadow-[3px_3px_0px_white] sm:shadow-[5px_5px_0px_white] inline-block mt-1 sm:mt-0">
              Our Presence Connects.
            </span>
          </h2>
          
          <p className="text-xs sm:text-sm font-bold uppercase text-white/70 mt-4 max-w-xl mx-auto leading-relaxed font-mono">
            Explore our creative world on Instagram and connect with Aaryav Studios on Google.
          </p>
        </div>

        {/* Dual Brutalist Social Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Card 1: Instagram Showcase (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-zinc-950 border-3 sm:border-4 border-white shadow-[6px_6px_0px_#FFDE59] p-5 sm:p-7 relative">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between border-b-2 border-white/20 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-gradient-to-tr from-[#FFDE59] via-[#FF6F3C] to-[#E52E71] p-0.5 border-2 border-white shadow-[2px_2px_0px_white]">
                    <div className="w-full h-full bg-black flex items-center justify-center text-[#FFDE59]">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-black text-sm sm:text-base uppercase tracking-tight text-white font-serif">
                        AARYAV STUDIOS
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#FFDE59] inline-block" />
                    </div>
                    <span className="text-[11px] font-bold text-white/60 tracking-wider font-mono">
                      @aaryavstudios
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/aaryavstudios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFDE59] hover:bg-white text-black font-black text-[11px] sm:text-xs uppercase px-3.5 sm:px-4 py-2 border-2 border-black shadow-[2px_2px_0px_white] transition-transform active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1.5 shrink-0 font-mono"
                  aria-label="Follow Aaryav Studios on Instagram"
                >
                  <span>Follow</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Bio description */}
              <p className="text-xs sm:text-sm font-bold text-white/80 uppercase leading-relaxed mb-6 font-mono">
                High-retention commercial video, viral vertical reels, and creative brand direction engineered for the mobile feed.
              </p>

              {/* Content Grid: Video Reel + Stacked Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-6">
                
                {/* Left 9:16 Vertical Reel Player (7 cols) */}
                <div className="sm:col-span-7 relative bg-black border-2 sm:border-3 border-white shadow-[4px_4px_0px_#FFDE59] overflow-hidden group aspect-[9/16] max-h-[460px] sm:max-h-none flex flex-col justify-between">
                  <video
                    ref={videoRef}
                    src="/videos/optimized/reel-0119.mp4"
                    poster="/videos/optimized/reel-0119.jpg"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover absolute inset-0 z-0"
                  />

                  {/* Top Bar inside video player */}
                  <div className="relative z-10 p-3 flex justify-between items-center bg-gradient-to-b from-black/80 via-black/30 to-transparent">
                    <span className="bg-[#FFDE59] text-black font-black text-[9px] uppercase tracking-widest px-2 py-0.5 border border-black shadow-[2px_2px_0px_black] font-mono">
                      FEATURED REEL
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="w-7 h-7 bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/60 transition-colors cursor-pointer"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        type="button"
                        onClick={toggleMute}
                        className="h-7 px-2 bg-black/80 hover:bg-black text-[#FFE15A] flex items-center gap-1 border border-white/60 font-mono text-[10px] font-bold uppercase transition-colors cursor-pointer"
                        aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#FFE15A]" />}
                        <span>{isMuted ? 'AUDIO' : 'MUTE'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Bottom Bar inside video player */}
                  <div className="relative z-10 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent pt-8">
                    <span className="text-[10px] font-bold text-[#FFDE59] uppercase tracking-wider block mb-0.5 font-mono">
                      PRO REEL EDIT • COLOR &amp; RETENTION
                    </span>
                    <a
                      href="https://www.instagram.com/aaryavstudios/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-black text-xs sm:text-sm uppercase text-white hover:text-[#FFDE59] flex items-center gap-1.5 transition-colors font-serif"
                    >
                      <span>View Project On Instagram</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFDE59]" />
                    </a>
                  </div>
                </div>

                {/* Right Stacked Visuals (5 cols) */}
                <div className="sm:col-span-5 grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                  {/* Photo 1: Commercial Campaign */}
                  <a
                    href="https://www.instagram.com/aaryavstudios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-black border-2 border-white/80 shadow-[3px_3px_0px_#FFDE59] overflow-hidden group block"
                    aria-label="View COMMERCIAL CAMPAIGN on Instagram"
                  >
                    <div className="aspect-[4/5] sm:aspect-auto sm:h-[195px] w-full overflow-hidden bg-neutral-900">
                      <img
                        src="/photography/photo-6.png"
                        alt="COMMERCIAL CAMPAIGN - Aaryav Studios creative portfolio"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 bg-black/90 border-t border-white/30 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-bold text-[#FFDE59] uppercase tracking-wider block font-mono">
                          Brand Shoot
                        </span>
                        <span className="text-[10px] font-black uppercase text-white tracking-tight font-serif">
                          COMMERCIAL CAMPAIGN
                        </span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-white/70 group-hover:text-[#FFDE59] transition-colors" />
                    </div>
                  </a>

                  {/* Photo 2: Studio Portrait */}
                  <a
                    href="https://www.instagram.com/aaryavstudios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-black border-2 border-white/80 shadow-[3px_3px_0px_#FFDE59] overflow-hidden group block"
                    aria-label="View STUDIO PORTRAIT on Instagram"
                  >
                    <div className="aspect-[4/5] sm:aspect-auto sm:h-[195px] w-full overflow-hidden bg-neutral-900">
                      <img
                        src="/photography/photo-5.jpg"
                        alt="STUDIO PORTRAIT - Aaryav Studios creative portfolio"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 bg-black/90 border-t border-white/30 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-bold text-[#FFDE59] uppercase tracking-wider block font-mono">
                          Creative Stills
                        </span>
                        <span className="text-[10px] font-black uppercase text-white tracking-tight font-serif">
                          STUDIO PORTRAIT
                        </span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-white/70 group-hover:text-[#FFDE59] transition-colors" />
                    </div>
                  </a>
                </div>

              </div>
            </div>

            {/* Bottom Full-Width Explore Button */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/aaryavstudios/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FFDE59] hover:bg-white text-black font-black text-xs sm:text-sm uppercase py-3 px-4 border-2 sm:border-3 border-black shadow-[3px_3px_0px_white] flex items-center justify-center gap-2 transition-colors font-serif"
              >
                <span>Explore Our Instagram</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Google Profile & Local Studio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950 border-3 sm:border-4 border-white shadow-[6px_6px_0px_white] p-5 sm:p-7 relative">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-white/20 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white p-2 border-2 border-white shadow-[2px_2px_0px_#FFDE59] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                  </div>
                  <div>
                    <span className="bg-[#FFDE59] text-black font-black text-[9px] uppercase tracking-widest px-2 py-0.5 border border-black inline-block mb-0.5 font-mono">
                      VERIFIED LOCAL STUDIO
                    </span>
                    <h3 className="font-black text-base sm:text-lg uppercase text-white tracking-tight font-serif">
                      AARYAV STUDIOS
                    </h3>
                  </div>
                </div>
              </div>

              {/* Studio Headquarters Address Box */}
              <div className="bg-black border-2 border-white/60 p-4 sm:p-5 mb-5 shadow-[3px_3px_0px_#FFDE59]">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#FFDE59] text-black border border-black shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#FFDE59] uppercase tracking-widest block mb-1 font-mono">
                      STUDIO HEADQUARTERS
                    </span>
                    <p className="text-xs sm:text-sm font-bold uppercase text-white leading-relaxed font-mono">
                      Kilvani Naka, Office no 601, 6th Floor, Premaldeep Square, Opp. Pravin Tailor
                    </p>
                    <p className="text-[11px] font-bold uppercase text-white/60 mt-1 font-mono">
                      Silvassa, Dadra &amp; Nagar Haveli 396230
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/20 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-bold uppercase font-mono">
                  <div className="flex items-center gap-1.5 text-[#FFDE59]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>OPEN MON – SAT</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/70">
                    <Clock className="w-3.5 h-3.5 text-[#FFDE59]" />
                    <span>09:30 AM – 07:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Regional Coverage section */}
              <div className="mb-6 space-y-2.5">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#FFDE59] flex items-center gap-1.5 font-mono">
                  <Navigation className="w-3.5 h-3.5 text-[#FFDE59]" />
                  <span>REGIONAL COVERAGE</span>
                </div>
                <p className="text-xs font-bold uppercase text-white/80 leading-relaxed font-mono">
                  Genuine physical presence in Silvassa serving local brands, manufacturers, retailers, and creators across:
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-bold uppercase text-white/90 font-mono">
                  <div className="flex items-center gap-1.5 bg-black border border-white/40 px-2.5 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE59] shrink-0" />
                    <span>Silvassa HQ</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black border border-white/40 px-2.5 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE59] shrink-0" />
                    <span>Vapi Industrial</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black border border-white/40 px-2.5 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE59] shrink-0" />
                    <span>Daman Hospitality</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black border border-white/40 px-2.5 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDE59] shrink-0" />
                    <span>Dadra &amp; Nagar Haveli</span>
                  </div>
                </div>
              </div>

              {/* Verified listing badge text */}
              <div className="bg-black/60 border border-white/20 p-3 mb-6 text-[10px] sm:text-[11px] font-bold uppercase text-white/60 leading-relaxed font-mono">
                Official Google Business listing for Aaryav Studios. Verified local presence and directions on Google Maps.
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href="https://share.google/XjYDdslcZE47oTgbS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-[#FFDE59] text-black font-black text-xs sm:text-sm uppercase py-3 px-4 border-2 sm:border-3 border-black shadow-[3px_3px_0px_#FFDE59] flex items-center justify-center gap-2 transition-colors font-serif"
                aria-label="Explore Aaryav Studios Google Business Profile"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                </svg>
                <span>Explore Our Google Profile</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Premaldeep+Square+Kilvani+Naka+Silvassa+Dadra+and+Nagar+Haveli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black hover:bg-zinc-900 text-white hover:text-[#FFDE59] font-black text-xs uppercase py-2.5 px-4 border-2 border-white/80 flex items-center justify-center gap-2 transition-colors font-mono"
                aria-label="Get directions to Aaryav Studios Silvassa on Google Maps"
              >
                <Navigation className="w-3.5 h-3.5 text-[#FFDE59]" />
                <span>Get Studio Directions</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
