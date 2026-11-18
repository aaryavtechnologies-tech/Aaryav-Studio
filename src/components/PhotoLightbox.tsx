import React, { useEffect } from 'react';
import type { StudioPhoto } from '../types';
import { X, MessageSquare, Camera } from 'lucide-react';

interface PhotoLightboxProps {
  photo: StudioPhoto | null;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-black border-4 border-black shadow-[8px_8px_0px_#FFE15A,14px_14px_0px_#000000] w-full max-w-3xl my-auto overflow-hidden relative flex flex-col"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-black text-[#FFE15A] px-4 py-3 flex items-center justify-between border-b-3 border-black font-mono text-xs uppercase tracking-wider shrink-0">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#FFE15A]" />
            <span className="font-bold">AARYAV STUDIOS // {photo.category}</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 bg-[#FFE15A] text-black border border-black flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* High-Resolution Photo Viewer */}
        <div className="bg-neutral-950 flex items-center justify-center p-2 sm:p-4 min-h-[360px] max-h-[75vh] overflow-hidden">
          <img 
            src={photo.image} 
            alt={photo.title}
            className="max-h-[70vh] w-auto max-w-full object-contain border-2 border-black/80 shadow-[4px_4px_0px_#FFE15A]"
          />
        </div>

        {/* Bottom Editorial Caption Bar */}
        <div className="p-4 bg-white border-t-3 border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#FFE15A] text-black border border-black font-mono font-bold text-[10px] px-2 py-0.5 uppercase shadow-[1.5px_1.5px_0px_#000000]">
                {photo.tag}
              </span>
              <span className="font-mono text-xs text-neutral-600 font-bold uppercase">
                {photo.category}
              </span>
            </div>
            <h3 className="font-serif font-black text-lg sm:text-xl text-black uppercase tracking-tight">
              {photo.title}
            </h3>
          </div>

          <a
            href={`https://wa.me/919328603748?text=${encodeURIComponent(`Hi Aaryav Studios, I saw "${photo.title}" on your website and want to book a commercial photography shoot for our products in Silvassa/Vapi/Daman.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#FFE15A] text-black hover:bg-black hover:text-[#FFE15A] border-2 border-black py-2.5 px-4 font-serif font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000000] transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>BOOK STUDIO SHOOT ↗</span>
          </a>
        </div>

      </div>
    </div>
  );
};
