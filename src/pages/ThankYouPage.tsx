import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { trackEvent } from '../utils/tracking';
import { CheckCircle2, MessageSquare, ArrowLeft } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  const location = useLocation();
  const lead = (location.state as any)?.lead;

  useEffect(() => {
    // Set page title
    document.title = 'Thank You — We Received Your Enquiry | Aaryav Studios';
    window.scrollTo(0, 0);

    // Track conversion confirmation
    trackEvent('conversion_thank_you_view', {
      service: lead?.service || 'General Enquiry',
    });
  }, [lead]);

  const applicantName = lead?.fullName || 'there';
  const serviceName = lead?.service || 'Video Production & Editing';

  const whatsappDirectUrl = `https://wa.me/919328603748?text=${encodeURIComponent(
    `Hello Aaryav Studios, I just submitted an enquiry for ${serviceName}. My name is ${lead?.fullName || ''}. I would like to share more details.`
  )}`;

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-black font-sans selection:bg-[#FFE15A] selection:text-black antialiased flex flex-col justify-between">
      
      {/* Top Header */}
      <header className="bg-white border-b-4 border-black py-4 sm:py-5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FFE15A] border-2 sm:border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000]">
              <span className="font-serif font-black text-black text-sm sm:text-base">
                AS
              </span>
            </div>
            <span className="font-serif font-black text-black text-base sm:text-lg tracking-wider uppercase">
              AARYAV STUDIOS
            </span>
          </Link>

          <Link
            to="/"
            className="font-serif font-black text-xs uppercase tracking-wider bg-black text-[#FFE15A] px-3 py-1.5 border-2 border-black flex items-center gap-1.5 hover:bg-[#FFE15A] hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">BACK TO</span> MAIN SITE
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center flex-1 flex flex-col justify-center">
        
        {/* Success Icon */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#FFE15A] border-4 border-black flex items-center justify-center mx-auto mb-6 shadow-[6px_6px_0px_#000000]">
          <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-black stroke-[2.5]" />
        </div>

        <div className="inline-block mb-3">
          <span className="bg-black text-[#FFE15A] text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000]">
            ENQUIRY CONFIRMED
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-4">
          Thank You, {applicantName}!
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-neutral-800 font-sans max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          We have received your request for <strong>{serviceName}</strong>. Our creative team is reviewing your project details.
        </p>

        {/* Expectation Timeline Box */}
        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] text-left mb-8 max-w-xl mx-auto w-full">
          <span className="font-mono text-xs font-black uppercase bg-[#FFE15A] text-black px-2.5 py-1 border border-black inline-block mb-4">
            WHAT HAPPENS NEXT?
          </span>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 bg-black text-[#FFE15A] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                1
              </div>
              <div className="text-xs sm:text-sm">
                <strong className="block text-black uppercase font-serif">Quick Assessment</strong>
                <span className="text-neutral-600">Our creative lead reviews your footage volume, scope, and requested deliverables.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 bg-black text-[#FFE15A] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                2
              </div>
              <div className="text-xs sm:text-sm">
                <strong className="block text-black uppercase font-serif">Response Within 2–4 Hours</strong>
                <span className="text-neutral-600">We will reach out to you via WhatsApp or phone with a tailored proposal and schedule.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 bg-black text-[#FFE15A] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                3
              </div>
              <div className="text-xs sm:text-sm">
                <strong className="block text-black uppercase font-serif">Production Kickoff</strong>
                <span className="text-neutral-600">Upon approval, our editors begin cutting and grading your video assets.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Faster Option: Instant WhatsApp Connect */}
        <div className="bg-[#FFE15A] border-3 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000000] max-w-xl mx-auto w-full mb-8">
          <h3 className="font-serif font-black text-base sm:text-lg uppercase text-black mb-1">
            Need an Immediate Response?
          </h3>
          <p className="text-xs font-mono text-neutral-800 mb-4 font-bold uppercase">
            Skip the waiting time and chat directly with our creative team on WhatsApp right now.
          </p>

          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { source: 'thank_you_page' })}
            className="inline-flex items-center justify-center gap-2 w-full bg-black text-[#FFE15A] hover:bg-white hover:text-black border-2 border-black py-3 px-6 font-serif font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000000] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>START DIRECT WHATSAPP CHAT</span>
          </a>
        </div>

        {/* Return Button */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-neutral-700 hover:text-black hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO MAIN AARYAV STUDIOS WEBSITE</span>
          </Link>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t-3 border-black py-6 px-4 text-center font-mono text-xs text-neutral-600">
        <p>© 2026 Aaryav Studios • Silvassa, Dadra and Nagar Haveli</p>
      </footer>

    </div>
  );
};
