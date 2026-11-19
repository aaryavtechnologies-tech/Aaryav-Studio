import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveLeadSubmission, trackEvent } from '../../utils/tracking';
import { Send, AlertCircle, Lock, MessageSquare } from 'lucide-react';

interface GoogleAdsLeadFormProps {
  preselectedService?: string;
  onOpenPrivacyPolicy: () => void;
}

const COUNTRY_CODES = [
  { code: '+91', country: 'IN', label: 'India (+91)' },
  { code: '+1', country: 'US', label: 'US/Canada (+1)' },
  { code: '+44', country: 'UK', label: 'UK (+44)' },
  { code: '+971', country: 'AE', label: 'UAE (+971)' },
  { code: '+61', country: 'AU', label: 'Australia (+61)' },
  { code: '+65', country: 'SG', label: 'Singapore (+65)' },
  { code: '+49', country: 'DE', label: 'Germany (+49)' },
  { code: '+33', country: 'FR', label: 'France (+33)' },
  { code: '+966', country: 'SA', label: 'Saudi Arabia (+966)' },
];

const SERVICE_OPTIONS = [
  'Reels & Shorts Editing',
  'Long-Form Video Editing',
  'Commercial Video Production',
  'Social Media Marketing',
  'Color Grading',
  'Branding & Creative Design',
  'Other',
];

export const GoogleAdsLeadForm: React.FC<GoogleAdsLeadFormProps> = ({
  preselectedService,
  onOpenPrivacyPolicy,
}) => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Reels & Shorts Editing');
  const [prevPreselected, setPrevPreselected] = useState(preselectedService);
  const [projectDetails, setProjectDetails] = useState('');
  const [consentGiven, setConsentGiven] = useState(true);
  const [honeypot, setHoneypot] = useState(''); // Anti-bot honeypot

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update service when user clicks a card in the Services section
  if (preselectedService !== prevPreselected) {
    setPrevPreselected(preselectedService);
    if (preselectedService && SERVICE_OPTIONS.includes(preselectedService)) {
      setService(preselectedService);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot bot check
    if (honeypot) {
      console.warn('Bot submission prevented.');
      return;
    }

    // Validation
    const cleanName = fullName.trim();
    const cleanPhone = phoneNumber.trim().replace(/[^\d]/g, '');

    if (!cleanName || cleanName.length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!cleanPhone || cleanPhone.length < 8 || cleanPhone.length > 15) {
      setErrorMessage('Please enter a valid phone or WhatsApp number with 8-15 digits.');
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('Please enter a valid email address, or leave it blank.');
      return;
    }

    if (!consentGiven) {
      setErrorMessage('Please agree to allow Aaryav Studios to contact you regarding your enquiry.');
      return;
    }

    setLoading(true);

    try {
      // Persist lead and fire conversion event
      const leadRecord = saveLeadSubmission({
        fullName: cleanName,
        phone: `${countryCode} ${cleanPhone}`,
        countryCode,
        email: email.trim() || undefined,
        service,
        projectDetails: projectDetails.trim() || undefined,
      });

      // Redirect to dedicated /thank-you page
      navigate('/thank-you', {
        state: {
          lead: leadRecord,
        },
      });
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('An unexpected error occurred while saving your request. Please message us on WhatsApp directly.');
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-20 sm:py-28 bg-[#FFE15A] border-b-4 border-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block mb-3">
            <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000] inline-flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-[#FFE15A]" />
              <span>CUSTOM PRODUCTION PROPOSAL</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-4">
            Let's Create Something{' '}
            <span className="inline-block bg-white px-3 sm:px-4 py-0.5 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000]">
              Great Together.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-serif font-bold uppercase text-neutral-900 tracking-wider">
            Tell us about your project and our team will get in touch to discuss your creative requirements.
          </p>
        </div>

        {/* Lead Form Box */}
        <div className="bg-white border-4 border-black p-6 sm:p-10 md:p-12 shadow-[10px_10px_0px_#000000] relative">
          
          {errorMessage && (
            <div className="mb-6 bg-red-100 border-2 border-red-600 p-3.5 text-red-900 text-xs sm:text-sm font-mono font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            
            {/* Honeypot field (hidden from human visitors) */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website_honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Field: Full Name */}
            <div>
              <label htmlFor="fullName" className="block font-mono text-xs font-black uppercase text-black mb-1.5">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-[#F7F7F7] border-2 border-black px-4 py-3 font-sans text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000000] transition-all"
              />
            </div>

            {/* Field: Phone / WhatsApp with Country Code */}
            <div>
              <label htmlFor="phoneNumber" className="block font-mono text-xs font-black uppercase text-black mb-1.5">
                Phone / WhatsApp Number <span className="text-red-600">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="bg-[#F7F7F7] border-2 border-black px-3 py-3 font-mono text-xs font-bold text-black focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000000] cursor-pointer"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. 98765 43210"
                  className="flex-1 bg-[#F7F7F7] border-2 border-black px-4 py-3 font-sans text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000000] transition-all"
                />
              </div>
              <span className="block font-mono text-[10px] text-neutral-500 uppercase mt-1">
                We'll contact you on WhatsApp or call for a quick project chat.
              </span>
            </div>

            {/* Field: Email Address (Optional) */}
            <div>
              <label htmlFor="email" className="block font-mono text-xs font-black uppercase text-black mb-1.5">
                Email Address <span className="font-normal text-neutral-500 text-[10px]">(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. rahul@example.com"
                className="w-full bg-[#F7F7F7] border-2 border-black px-4 py-3 font-sans text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000000] transition-all"
              />
            </div>

            {/* Field: Service Required Dropdown */}
            <div>
              <label htmlFor="service" className="block font-mono text-xs font-black uppercase text-black mb-1.5">
                Service Required <span className="text-red-600">*</span>
              </label>
              <select
                id="service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#F7F7F7] border-2 border-black px-4 py-3 font-sans text-sm text-black font-semibold focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000000] cursor-pointer"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Field: Project Details (Optional) */}
            <div>
              <label htmlFor="projectDetails" className="block font-mono text-xs font-black uppercase text-black mb-1.5">
                Project Details <span className="font-normal text-neutral-500 text-[10px]">(Optional)</span>
              </label>
              <textarea
                id="projectDetails"
                rows={3}
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                placeholder="Tell us about your brand, footage volume, reference styles, or delivery expectations..."
                className="w-full bg-[#F7F7F7] border-2 border-black px-4 py-3 font-sans text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#000000] transition-all resize-y"
              />
            </div>

            {/* Consent & Privacy Notice Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-black border-2 border-black rounded-none cursor-pointer"
                />
                <span className="text-xs text-neutral-700 font-sans leading-snug">
                  I consent to Aaryav Studios contacting me via phone, WhatsApp, or email regarding my enquiry.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black border-3 border-black py-4 px-6 font-serif font-black text-sm sm:text-base uppercase tracking-wider shadow-[5px_5px_0px_#FFE15A] hover:shadow-[3px_3px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>SUBMITTING ENQUIRY...</span>
                ) : (
                  <>
                    <span>REQUEST MY CUSTOM QUOTE</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>

            {/* Divider OR */}
            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t-2 border-black/10"></div>
              <span className="flex-shrink mx-3 font-mono text-[11px] font-bold uppercase text-neutral-500">OR NEED AN IMMEDIATE RESPONSE?</span>
              <div className="flex-grow border-t-2 border-black/10"></div>
            </div>

            {/* Direct WhatsApp Quote Button */}
            <div>
              <a
                href={`https://wa.me/919328603748?text=${encodeURIComponent(
                  `Hello Aaryav Studios, I would like to get a quote for ${service}. Please share details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { source: 'lead_form_direct' })}
                className="w-full bg-[#FFE15A] text-black hover:bg-black hover:text-[#FFE15A] border-3 border-black py-3.5 px-6 font-serif font-black text-xs sm:text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000000] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT DIRECTLY ON WHATSAPP WITH STUDIO</span>
              </a>
            </div>

            {/* Reassurance Disclaimer */}
            <div className="pt-3 border-t border-black/10 text-center">
              <p className="text-[11px] font-mono text-neutral-600 font-bold uppercase">
                Your details will only be used to respond to your enquiry.
              </p>
              <p className="text-[10px] text-neutral-500 font-sans mt-1">
                We respect your privacy. Read our{' '}
                <button
                  type="button"
                  onClick={onOpenPrivacyPolicy}
                  className="underline hover:text-black font-semibold cursor-pointer"
                >
                  Privacy Policy
                </button>
                .
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
