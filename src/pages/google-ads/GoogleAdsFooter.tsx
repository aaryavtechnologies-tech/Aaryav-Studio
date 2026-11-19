import React from 'react';
import { AGENCY_INFO } from '../../data/content';
import { trackEvent } from '../../utils/tracking';
import { MapPin, Phone, Mail, ShieldCheck, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../../components/icons/InstagramIcon';

interface GoogleAdsFooterProps {
  onOpenPrivacyPolicy: () => void;
}

export const GoogleAdsFooter: React.FC<GoogleAdsFooterProps> = ({ onOpenPrivacyPolicy }) => {
  return (
    <footer className="bg-white text-black border-t-4 border-black py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b-2 border-black/15">
          
          {/* Col 1: Studio Brand & Identity (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4 select-none">
              <div className="w-10 h-10 bg-[#FFE15A] border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_#000000]">
                <span className="font-serif font-black text-black text-base tracking-tight">
                  AS
                </span>
              </div>
              <div>
                <span className="font-serif font-black text-black text-xl tracking-tight leading-none uppercase block">
                  AARYAV STUDIOS
                </span>
                <span className="font-mono text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
                  CREATIVE VIDEO &amp; POST-PRODUCTION
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed mb-6 max-w-sm">
              Premier video editing, vertical reels, and creative commercial production studio based in Silvassa, serving creators and businesses across Vapi, Daman, and South Gujarat.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={AGENCY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000] transition-colors"
                title="Follow Aaryav Studios on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={AGENCY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { source: 'footer' })}
                className="bg-[#FFE15A] text-black hover:bg-black hover:text-[#FFE15A] border-2 border-black px-3 py-1.5 font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#000000] transition-colors"
              >
                WHATSAPP CHAT
              </a>
            </div>
          </div>

          {/* Col 2: Studio Headquarters Address (4 cols) */}
          <div className="md:col-span-4">
            <span className="font-mono text-xs font-black uppercase text-black block mb-3 pb-1 border-b-2 border-black inline-block">
              STUDIO LOCATION
            </span>

            <div className="space-y-3 font-mono text-xs text-neutral-800">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <p className="leading-snug">
                  Kilvani Naka, Office No. 601, 6th Floor, Premaldeep Square, Opp. Pravin Tailor, Silvassa, Dadra and Nagar Haveli and Daman and Diu – 396230, India.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={AGENCY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#F7F7F7] hover:bg-black hover:text-[#FFE15A] border border-black px-3 py-1 font-mono text-[11px] font-bold uppercase transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>VIEW ON GOOGLE MAPS</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Contact & Legal (3 cols) */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs font-black uppercase text-black block mb-3 pb-1 border-b-2 border-black inline-block">
              DIRECT ENQUIRIES
            </span>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-black shrink-0" />
                <a
                  href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
                  onClick={() => trackEvent('click_call', { source: 'footer' })}
                  className="font-bold hover:underline"
                >
                  {AGENCY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-black shrink-0" />
                <a
                  href={`tel:${AGENCY_INFO.whatsapp.replace(/\s+/g, '')}`}
                  onClick={() => trackEvent('click_call', { source: 'footer' })}
                  className="font-bold hover:underline"
                >
                  {AGENCY_INFO.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-black shrink-0" />
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="font-bold hover:underline truncate"
                >
                  {AGENCY_INFO.email}
                </a>
              </div>

              <div className="pt-4 space-y-1.5 font-serif font-bold text-xs uppercase">
                <a
                  href="/"
                  className="block hover:underline text-neutral-800"
                >
                  → Visit Main Website
                </a>
                <button
                  type="button"
                  onClick={onOpenPrivacyPolicy}
                  className="block hover:underline text-neutral-800 cursor-pointer"
                >
                  → Privacy Policy
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-600">
          <div>
            © 2026 Aaryav Studios. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-neutral-500">
            <ShieldCheck className="w-3.5 h-3.5 text-green-700" />
            <span>Google Ads Landing Page • Verified Business Entity</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
