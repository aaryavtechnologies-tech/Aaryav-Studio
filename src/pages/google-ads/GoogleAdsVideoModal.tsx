import React, { useEffect, useRef, useState } from 'react';
import { X, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface GoogleAdsVideoModalProps {
  isOpen: boolean;
  videoSrc?: string;
  youtubeId?: string;
  title: string;
  onClose: () => void;
}

export const GoogleAdsVideoModal: React.FC<GoogleAdsVideoModalProps> = ({
  isOpen,
  videoSrc,
  youtubeId,
  title,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const currentVid = videoRef.current;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Attempt to play if standard HTML5 video
      if (currentVid) {
        currentVid.currentTime = 0;
        currentVid.play().catch(() => {
          // If browser policy blocks unmuted autoplay, mute and retry
          if (currentVid) {
            currentVid.muted = true;
            setIsMuted(true);
            currentVid.play().catch(console.error);
          }
        });
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      if (currentVid) {
        currentVid.pause();
      }
    };
  }, [isOpen, onClose, videoSrc]);

  if (!isOpen) return null;

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const isVertical = videoSrc && (
    videoSrc.includes('reel') || 
    videoSrc.includes('poojara') || 
    videoSrc.includes('money-hub') || 
    videoSrc.includes('luxury-watch') || 
    videoSrc.includes('luxury-villa') ||
    videoSrc.includes('v-video')
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full bg-black border-4 border-black shadow-[10px_10px_0px_#FFE15A] overflow-hidden flex flex-col ${
          isVertical ? 'max-w-md max-h-[90vh]' : 'max-w-4xl'
        }`}
      >
        {/* Top Header Bar */}
        <div className="bg-[#111111] px-4 py-3 border-b-2 border-neutral-800 flex items-center justify-between text-white font-mono text-xs">
          <div className="flex items-center gap-2 truncate pr-4">
            <span className="w-2.5 h-2.5 bg-[#FFE15A] inline-block"></span>
            <span className="font-bold truncate uppercase">{title}</span>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close modal"
            className="w-7 h-7 bg-white text-black hover:bg-[#FFE15A] flex items-center justify-center font-bold transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Content */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden">
          {youtubeId ? (
            <div className="w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div className={`relative w-full ${isVertical ? 'aspect-[9/16] max-h-[75vh]' : 'aspect-video'}`}>
              <video
                ref={videoRef}
                src={videoSrc}
                playsInline
                autoPlay
                controls={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-contain bg-black"
              />

              {/* In-Video Quick Controls */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="bg-black/80 hover:bg-[#FFE15A] hover:text-black text-white border border-white px-3 py-1.5 font-mono text-xs font-bold uppercase flex items-center gap-1.5 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                </button>

                <button
                  type="button"
                  onClick={toggleSound}
                  className="bg-[#FFE15A] text-black border border-black px-3 py-1.5 font-mono text-xs font-black uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>{isMuted ? 'TAP FOR AUDIO 🔊' : 'AUDIO ON 🔊'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Status Strip */}
        <div className="bg-[#181818] px-4 py-2 text-neutral-400 font-mono text-[11px] flex items-center justify-between border-t border-neutral-800">
          <span>AARYAV STUDIOS HIGH-RETENTION PRODUCTION</span>
          <span className="text-[#FFE15A]">4K TIMELINE</span>
        </div>
      </div>
    </div>
  );
};
