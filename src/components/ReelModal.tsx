import React, { useState, useRef, useEffect } from 'react';
import type { ShortReel } from '../types';
import { X, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface ReelModalProps {
  reel: ShortReel | null;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ reel, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (reel && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [reel]);

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

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  if (!reel) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
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
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
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

        {/* 9:16 Vertical Screen Only (No side text panel) */}
        <div className="relative aspect-[9/16] max-h-[calc(92vh-85px)] bg-black overflow-hidden flex items-center justify-center grow">
          {reel.videoSrc ? (
            <video
              ref={videoRef}
              src={reel.videoSrc}
              poster={reel.thumbnail}
              className="w-full h-full object-cover cursor-pointer"
              playsInline
              autoPlay
              loop
              muted={isMuted}
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
            />
          ) : (
            <img
              src={reel.thumbnail}
              alt={reel.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Reel Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none flex flex-col justify-between p-3.5">
            {/* Top badges */}
            <div className="flex items-center justify-between pointer-events-auto">
              <span className="bg-[#FFE15A] text-black border border-black font-mono font-bold text-[10px] px-2 py-0.5 uppercase shadow-[2px_2px_0px_#000000]">
                {reel.category}
              </span>
              <button
                type="button"
                onClick={toggleMute}
                className="bg-black/80 p-1.5 border border-white/30 text-[#FFE15A] hover:bg-black cursor-pointer shadow-[2px_2px_0px_#000000] flex items-center gap-1.5 px-2 font-mono text-[10px]"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-red-400" />
                    <span>MUTED</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#FFE15A]" />
                    <span>AUDIO ON</span>
                  </>
                )}
              </button>
            </div>

            {/* Center Play/Pause button */}
            <button
              type="button"
              onClick={togglePlay}
              className="pointer-events-auto w-14 h-14 bg-black/70 hover:bg-black text-[#FFE15A] border-2 border-[#FFE15A] rounded-full flex items-center justify-center mx-auto transition-transform hover:scale-110 shadow-[4px_4px_0px_#000000] cursor-pointer"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1 fill-[#FFE15A]" />}
            </button>

            {/* Bottom Video Controls */}
            <div className="pointer-events-auto bg-black/75 p-2.5 border border-white/20">
              <div className="flex items-center justify-between text-white text-[11px] font-mono mb-1.5">
                <span className="text-[#FFE15A] font-bold">{formatTime(currentTime)}</span>
                <span className="text-neutral-400 font-mono text-[10px] truncate max-w-[180px]">{reel.title}</span>
                <span>{formatTime(duration) || reel.duration}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-neutral-700 overflow-hidden cursor-pointer">
                <div 
                  className="h-full bg-[#FFE15A]"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Close Button Bar */}
        <div className="p-2 bg-black border-t-2 border-neutral-800 flex items-center justify-between">
          <span className="text-[11px] font-mono text-neutral-400 pl-2">
            TAP VIDEO TO PAUSE / PLAY
          </span>
          <button
            onClick={onClose}
            className="bg-[#FFE15A] text-black hover:bg-white border border-black font-serif font-black text-xs px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer"
          >
            CLOSE ✕
          </button>
        </div>
      </div>
    </div>
  );
};
