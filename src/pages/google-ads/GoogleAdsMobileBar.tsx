import React from 'react';
import { trackEvent } from '../../utils/tracking';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

interface GoogleAdsMobileBarProps {
  onQuoteClick: () => void;
}

export const GoogleAdsMobileBar: React.FC<GoogleAdsMobileBarProps> = ({ onQuoteClick }) => {
  const whatsappUrl = `https://wa.me/919328603748?text=${encodeURIComponent(
    'Hello Aaryav Studios, I found your website through Google and would like to discuss a project. Please share more details about your services.'
  )}`;

  const handleWhatsApp = () => {
    trackEvent('click_whatsapp', { source: 'mobile_sticky_bar' });
  };

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-30 bg-black text-white border-2 border-black p-1.5 shadow-[4px_4px_0px_#FFE15A] flex items-center justify-between gap-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsApp}
        className="flex-1 bg-[#FFE15A] text-black py-2.5 px-3 font-serif font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-black shadow-[2px_2px_0px_#000000] active:scale-95 transition-transform"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WHATSAPP US</span>
      </a>

      <button
        type="button"
        onClick={onQuoteClick}
        className="flex-1 bg-white text-black py-2.5 px-3 font-serif font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-black shadow-[2px_2px_0px_#000000] active:scale-95 transition-transform cursor-pointer"
      >
        <span>GET A QUOTE</span>
        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
      </button>
    </div>
  );
};
