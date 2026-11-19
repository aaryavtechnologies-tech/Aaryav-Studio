import React from 'react';
import { trackEvent } from '../../utils/tracking';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

interface GoogleAdsFinalCtaProps {
  onQuoteClick: () => void;
}

export const GoogleAdsFinalCta: React.FC<GoogleAdsFinalCtaProps> = ({ onQuoteClick }) => {
  const whatsappUrl = `https://wa.me/919328603748?text=${encodeURIComponent(
    'Hello Aaryav Studios, I found your website through Google and would like to discuss a project. Please share more details about your services.'
  )}`;

  const handleWhatsAppClick = () => {
    trackEvent('click_whatsapp', { source: 'final_cta' });
  };

  return (
    <section className="py-20 sm:py-28 bg-black text-white border-b-4 border-black relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#FFE15A 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center">
        
        <div className="inline-block mb-4">
          <span className="bg-[#FFE15A] text-black font-mono font-bold text-xs uppercase px-3.5 py-1.5 border-2 border-black shadow-[3px_3px_0px_#FFFFFF]">
            START YOUR PRODUCTION
          </span>
        </div>

        <h2 className="font-serif font-black uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6 leading-tight">
          Your Next Great Video{' '}
          <span className="inline-block bg-[#FFE15A] text-black px-3 sm:px-6 py-0.5 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#FFFFFF] mt-1 sm:mt-2">
            Starts Here.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-neutral-300 font-sans leading-relaxed mb-10 sm:mb-14">
          Bring your ideas to life with professional editing, production, and creative content from Aaryav Studios.
        </p>

        {/* Dual Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto">
          <button
            type="button"
            onClick={onQuoteClick}
            className="w-full sm:w-auto bg-[#FFE15A] text-black hover:bg-white hover:text-black border-3 border-black px-8 sm:px-10 py-4 font-serif font-black text-sm sm:text-base uppercase tracking-wider shadow-[5px_5px_0px_#FFFFFF] hover:shadow-[2px_2px_0px_#FFFFFF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>GET A QUOTE</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-black text-white hover:bg-[#FFE15A] hover:text-black border-3 border-white hover:border-black px-8 sm:px-10 py-4 font-serif font-black text-sm sm:text-base uppercase tracking-wider shadow-[5px_5px_0px_#FFE15A] hover:shadow-[2px_2px_0px_#FFE15A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#FFE15A]" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};
