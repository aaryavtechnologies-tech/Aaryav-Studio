import React, { useState, useRef, useEffect } from 'react';
import type { ShortReel } from '../types';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface ReelModalProps {
  reel: ShortReel | null;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ reel, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-play with audio when reel modal opens
  useEffect(() => {
    if (reel && videoRef.current) {
      const vid = videoRef.current;
      vid.currentTime = 0;
      vid.volume = 1.0;

      // First attempt to play with audio directly (enabled by user click gesture)
      vid.muted = false;
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
          })
          .catch(() => {
            // If browser policy restricts sound on initial autoplay, start muted and display sound prompt
            vid.muted = true;
            setIsMuted(true);
            vid.play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          });
      }
    }
  }, [reel]);

  // Ensure audio and video stop immediately when modal closes
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const vid = videoRef.current;
    const nextMuted = !vid.muted;
    vid.muted = nextMuted;
    vid.volume = 1.0;
    setIsMuted(nextMuted);

    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const vid = videoRef.current;

    // If video was muted by browser autoplay restriction, first tap enables full sound!
    if (vid.muted) {
      vid.muted = false;
      vid.volume = 1.0;
      setIsMuted(false);
      if (vid.paused) {
        vid.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      return;
    }

    // Otherwise toggle play / pause
    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const vid = videoRef.current;

    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = percentage * duration;
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  if (!reel) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-black border-4 border-black shadow-[8px_8px_0px_#FFE15A,14px_14px_0px_#000000] w-full max-w-[360px] sm:max-w-[400px] max-h-[92vh] flex flex-col my-auto overflow-hidden relative"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-black text-[#FFE15A] px-4 py-2.5 flex items-center justify-between border-b-3 border-black font-mono text-xs uppercase tracking-wider shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
            <span className="font-bold">AARYAV REELS // 9:16 PLAYER</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 bg-[#FFE15A] text-black border border-black flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* 9:16 Vertical Screen Player */}
        <div 
          className="relative aspect-[9/16] max-h-[calc(92vh-85px)] bg-black overflow-hidden flex items-center justify-center grow cursor-pointer select-none"
          onClick={handleVideoClick}
        >
          {reel.videoSrc ? (
            <video
              key={reel.id}
              ref={videoRef}
              src={reel.videoSrc}
              poster={reel.thumbnail}
              className="w-full h-full object-cover"
              playsInline
              autoPlay
              loop
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          ) : (
            <img
              src={reel.thumbnail}
              alt={reel.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Reel Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none flex flex-col justify-between p-3.5">
            {/* Top Bar: Category + Audio Toggle Button */}
            <div className="flex items-center justify-between pointer-events-auto">
              <span className="bg-[#FFE15A] text-black border border-black font-mono font-bold text-[10px] px-2 py-0.5 uppercase shadow-[2px_2px_0px_#000000]">
                {reel.category}
              </span>

              {/* Prominent Audio Toggle Pill */}
              <button
                type="button"
                onClick={toggleMute}
                className={`p-1.5 px-2.5 border-2 border-black font-mono font-black text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] cursor-pointer transition-transform hover:scale-105 ${
                  isMuted 
                    ? 'bg-[#FFE15A] text-black animate-pulse' 
                    : 'bg-black/90 text-[#FFE15A] border-white/40'
                }`}
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-red-600" />
                    <span>TAP FOR AUDIO 🔊</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#FFE15A]" />
                    <span>AUDIO ON 🔊</span>
                  </>
                )}
              </button>
            </div>

            {/* Center Play Button Overlay (visible when paused) */}
            {!isPlaying && (
              <div className="pointer-events-auto my-auto flex flex-col items-center">
                <button
                  type="button"
                  onClick={handleVideoClick}
                  className="w-16 h-16 bg-[#FFE15A] text-black border-3 border-black rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-[4px_4px_0px_#000000] cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 ml-1 fill-black" />
                </button>
                <span className="mt-2 bg-black/90 text-[#FFE15A] font-mono text-[10px] font-bold px-3 py-1 border border-[#FFE15A] uppercase tracking-wider">
                  TAP TO PLAY WITH SOUND
                </span>
              </div>
            )}

            {/* Bottom Video Controls */}
            <div 
              className="pointer-events-auto bg-black/85 p-2.5 border border-white/20 mt-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between text-white text-[11px] font-mono mb-1.5">
                <span className="text-[#FFE15A] font-bold">{formatTime(currentTime)}</span>
                <span className="text-neutral-300 font-mono text-[10px] truncate max-w-[170px] uppercase font-bold">
                  {reel.title}
                </span>
                <span>{formatTime(duration) || reel.duration}</span>
              </div>
              
              {/* Progress Bar (Clickable/Scrubbable) */}
              <div 
                className="w-full h-2 bg-neutral-700 overflow-hidden cursor-pointer rounded-xs"
                onClick={handleSeek}
              >
                <div 
                  className="h-full bg-[#FFE15A] transition-all duration-75"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Play/Pause, Audio Toggle and Close Button */}
        <div className="p-2.5 bg-black border-t-2 border-neutral-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#FFE15A] hover:text-white transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-[#FFE15A]" />}
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>

            <button
              onClick={toggleMute}
              className="flex items-center gap-1 text-xs font-mono font-bold text-neutral-300 hover:text-[#FFE15A] transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#FFE15A]" />}
              <span>{isMuted ? 'UNMUTE' : 'MUTE'}</span>
            </button>
          </div>
          
          <button
            onClick={onClose}
            className="bg-[#FFE15A] text-black hover:bg-white border border-black font-serif font-black text-xs px-3.5 py-1 uppercase tracking-wider transition-colors cursor-pointer"
          >
            CLOSE ✕
          </button>
        </div>
      </div>
    </div>
  );
};
