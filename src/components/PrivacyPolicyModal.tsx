import React, { useEffect } from 'react';
import { X, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-white border-4 border-black shadow-[10px_10px_0px_#FFE15A] p-6 sm:p-10 text-black text-left"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close Privacy Policy"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 bg-black text-white hover:bg-[#FFE15A] hover:text-black border-2 border-black flex items-center justify-center font-bold text-base transition-colors shadow-[2px_2px_0px_#000000] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-[#FFE15A] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000]">
            <ShieldCheck className="w-5 h-5 text-black" />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest bg-black text-[#FFE15A] px-2.5 py-0.5 border border-black">
            LEGAL &amp; COMPLIANCE
          </span>
        </div>

        <h2 id="privacy-modal-title" className="text-2xl sm:text-4xl font-serif font-black uppercase text-black tracking-tight mb-2">
          Privacy Policy
        </h2>
        <p className="text-xs font-mono text-neutral-500 uppercase font-semibold mb-6">
          Last Updated: November 2026 • Compliant with Digital Personal Data Protection &amp; Advertising Standards
        </p>

        {/* Content Body */}
        <div className="space-y-6 text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
          <section>
            <h3 className="text-base font-serif font-black uppercase text-black mb-1.5">
              1. Information We Collect
            </h3>
            <p>
              When you submit a project enquiry or request a quote on <strong>Aaryav Studios</strong>, we collect personal information you explicitly provide:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Contact Information:</strong> Full Name, Mobile / WhatsApp Phone Number, and Email Address.</li>
              <li><strong>Project Requirements:</strong> Selected creative service, project description, timeline, and video preferences.</li>
              <li><strong>Advertising &amp; Analytics Data:</strong> Anonymous browsing data, referral source (Google Ads click identifiers such as GCLID, GBRAID, WBRAID, and UTM tags), browser user agent, and device type to assess marketing performance.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-serif font-black uppercase text-black mb-1.5">
              2. How We Use Your Information
            </h3>
            <p>
              We treat your privacy with strict confidentiality. Your contact information is used strictly to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond directly to your project request and provide customized quotations.</li>
              <li>Coordinate phone consultations or WhatsApp creative discussions regarding your video production requirements.</li>
              <li>Measure and optimize the efficiency of our Google advertising campaigns.</li>
            </ul>
            <p className="mt-2 font-semibold text-black">
              We never sell, rent, license, or disclose your personal contact information to third-party data brokers or marketing aggregators.
            </p>
          </section>

          <section>
            <h3 className="text-base font-serif font-black uppercase text-black mb-1.5">
              3. Google Ads &amp; Conversion Tracking
            </h3>
            <p>
              Our website uses Google Ads conversion tracking and analytics to understand user interactions. These tools place cookies on your device to record when an ad click leads to an enquiry. This data is aggregated and does not personally identify you in public reporting. You can manage or disable cookie tracking via your browser preferences or through Google's Ads Settings.
            </p>
          </section>

          <section>
            <h3 className="text-base font-serif font-black uppercase text-black mb-1.5">
              4. Data Security &amp; Storage
            </h3>
            <p>
              All interactions on studios.aaryavtech.online are encrypted via SSL/TLS 256-bit encryption. Data is stored on secure cloud infrastructure protected by multi-factor authentication and strict access controls.
            </p>
          </section>

          <section>
            <h3 className="text-base font-serif font-black uppercase text-black mb-1.5">
              5. Contacting the Studio
            </h3>
            <p className="mb-3">
              If you wish to update your details, request deletion of your enquiry information, or have any questions regarding this policy, please reach out to our team:
            </p>
            <div className="bg-[#F7F7F7] border-2 border-black p-3.5 space-y-1.5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{AGENCY_INFO.address.fullFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{AGENCY_INFO.phoneDisplay} / {AGENCY_INFO.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>{AGENCY_INFO.email}</span>
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t-2 border-black flex items-center justify-between">
          <span className="font-mono text-xs font-bold uppercase text-neutral-600">
            © 2026 Aaryav Studios
          </span>
          <button
            onClick={onClose}
            type="button"
            className="bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black border-2 border-black px-5 py-2 font-serif font-black text-xs uppercase tracking-wider transition-colors shadow-[2px_2px_0px_#000000] cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
