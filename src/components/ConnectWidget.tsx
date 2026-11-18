import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/content';
import { X, ExternalLink } from 'lucide-react';

export const ConnectWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="hidden sm:block fixed bottom-5 left-5 z-40 bg-black border-2 border-black p-2.5 shadow-[4px_4px_0px_#FFE15A,7px_7px_0px_#000000] w-48 select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FFE15A]">
          CONNECT WITH US
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-neutral-400 hover:text-white p-0.5"
          aria-label="Dismiss connect widget"
        >
          <X className="w-3 h-3 stroke-[2.5]" />
        </button>
      </div>

      {/* Buttons */}
      <div className="space-y-1.5">
        <a
          href={AGENCY_INFO.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#FFE15A] hover:bg-white text-black font-mono font-bold text-[10px] uppercase py-1.5 px-2 border border-black flex items-center justify-between shadow-[2px_2px_0px_#000000] transition-colors"
        >
          <span>INSTAGRAM</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>

        <a
          href={AGENCY_INFO.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white hover:bg-[#FFE15A] text-black font-mono font-bold text-[10px] uppercase py-1.5 px-2 border border-black flex items-center justify-between shadow-[2px_2px_0px_#000000] transition-colors"
        >
          <span>GOOGLE PROFILE</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
};
