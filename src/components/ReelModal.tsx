import React, { useState, useRef, useEffect } from 'react';
import type { ShortReel } from '../types';
import { X, Play, Pause } from 'lucide-react';

interface ReelModalProps {
  reel: ShortReel | null;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ reel, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-play silently whenever a reel is opened
  useEffect(() => {
    if (reel && videoRef.current) {
      const vid = videoRef.current;
      vid.currentTime = 0;
      vid.muted = true; // Always muted for 100% seamless mobile/desktop playback

      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [reel]);

  // Ensure audio and video stop immediately if component unmounts or reel closes
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

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const vid = videoRef.current;

    if (vid.paused) {
      vid.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
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
          onClick={togglePlay}
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
              muted
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
            {/* Top badge (No mute button) */}
            <div className="flex items-center justify-between pointer-events-auto">
              <span className="bg-[#FFE15A] text-black border border-black font-mono font-bold text-[10px] px-2 py-0.5 uppercase shadow-[2px_2px_0px_#000000]">
                {reel.category}
              </span>
              <span className="bg-black/80 text-[#FFE15A] font-mono text-[10px] font-bold px-2 py-0.5 border border-white/20 uppercase tracking-wider">
                SILENT REEL PREVIEW
              </span>
            </div>

            {/* Center Play Button Overlay (visible when paused) */}
            {!isPlaying && (
              <div className="pointer-events-auto my-auto flex flex-col items-center">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-16 h-16 bg-[#FFE15A] text-black border-3 border-black rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-[4px_4px_0px_#000000] cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 ml-1 fill-black" />
                </button>
                <span className="mt-2 bg-black/80 text-white font-mono text-[10px] font-bold px-2.5 py-0.5 border border-white/30 uppercase tracking-wider">
                  TAP TO PLAY
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

        {/* Bottom Bar with Play/Pause and Close Button */}
        <div className="p-2.5 bg-black border-t-2 border-neutral-800 flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#FFE15A] hover:text-white transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-[#FFE15A]" />}
            <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
          </button>
          
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
