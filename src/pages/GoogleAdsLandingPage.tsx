import React, { useState, useEffect } from 'react';
import { GoogleAdsNavbar } from './google-ads/GoogleAdsNavbar';
import { GoogleAdsHero } from './google-ads/GoogleAdsHero';
import { GoogleAdsSocialProof } from './google-ads/GoogleAdsSocialProof';
import { GoogleAdsServices } from './google-ads/GoogleAdsServices';
import { GoogleAdsPortfolio } from './google-ads/GoogleAdsPortfolio';
import { GoogleAdsBeforeAfter } from './google-ads/GoogleAdsBeforeAfter';
import { GoogleAdsWhyUs } from './google-ads/GoogleAdsWhyUs';
import { GoogleAdsProcess } from './google-ads/GoogleAdsProcess';
import { GoogleAdsTestimonials } from './google-ads/GoogleAdsTestimonials';
import { GoogleAdsLeadForm } from './google-ads/GoogleAdsLeadForm';
import { GoogleAdsFinalCta } from './google-ads/GoogleAdsFinalCta';
import { GoogleAdsFooter } from './google-ads/GoogleAdsFooter';
import { GoogleAdsMobileBar } from './google-ads/GoogleAdsMobileBar';
import { GoogleAdsVideoModal } from './google-ads/GoogleAdsVideoModal';
import { PrivacyPolicyModal } from '../components/PrivacyPolicyModal';
import { initAttributionTracking } from '../utils/tracking';

export const GoogleAdsLandingPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Reels & Shorts Editing');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Video Modal State
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoSrc?: string;
    youtubeId?: string;
    title: string;
  }>({
    isOpen: false,
    videoSrc: '',
    youtubeId: '',
    title: '',
  });

  useEffect(() => {
    // 1. Initialize Google Ads & UTM parameter attribution
    initAttributionTracking();

    // 2. Set optimized page title and meta for Google Ads traffic
    document.title = 'Aaryav Studios — Professional Video Editing & Commercial Production | Silvassa';
    
    // Meta description update
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'High-retention Reels, commercial video production, and cinema color grading by Aaryav Studios. Request a custom quote today.'
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToQuote = () => {
    const el = document.querySelector('#quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.querySelector('#portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVideoModal = (videoSrc: string, title: string, youtubeId?: string) => {
    setVideoModal({
      isOpen: true,
      videoSrc,
      youtubeId,
      title,
    });
  };

  const handleCloseVideoModal = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFE15A] selection:text-black antialiased overflow-x-clip pb-16 md:pb-0">
      
      {/* 1. Header Navigation */}
      <GoogleAdsNavbar onQuoteClick={scrollToQuote} />

      <main>
        {/* 2. Hero Section */}
        <GoogleAdsHero
          onQuoteClick={scrollToQuote}
          onExploreWorkClick={scrollToPortfolio}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* 3. Social Proof Section */}
        <GoogleAdsSocialProof />

        {/* 4. Core Services (Preselects Lead Form on click) */}
        <GoogleAdsServices onSelectService={handleSelectServiceFromCard} />

        {/* 5. Portfolio Section (Reels & Long-Form Video Modal Player) */}
        <GoogleAdsPortfolio
          onOpenVideoModal={handleOpenVideoModal}
          onQuoteClick={scrollToQuote}
        />

        {/* 6. Before & After Interactive Showcase */}
        <GoogleAdsBeforeAfter />

        {/* 7. Why Choose Aaryav Studios */}
        <GoogleAdsWhyUs />

        {/* 8. 4-Step Work Process */}
        <GoogleAdsProcess />

        {/* 9. Verified Client Testimonials */}
        <GoogleAdsTestimonials />

        {/* 10. High-Conversion Lead Form */}
        <GoogleAdsLeadForm
          preselectedService={selectedService}
          onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
        />

        {/* 11. Bold Final Call-To-Action */}
        <GoogleAdsFinalCta onQuoteClick={scrollToQuote} />
      </main>

      {/* 12. Minimal Trustworthy Footer */}
      <GoogleAdsFooter onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} />

      {/* 13. Sticky Mobile Bottom Conversion Dock */}
      <GoogleAdsMobileBar onQuoteClick={scrollToQuote} />

      {/* 14. Video Modal Player */}
      <GoogleAdsVideoModal
        isOpen={videoModal.isOpen}
        videoSrc={videoModal.videoSrc}
        youtubeId={videoModal.youtubeId}
        title={videoModal.title}
        onClose={handleCloseVideoModal}
      />

      {/* 15. Accessible Google Ads Compliant Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

    </div>
  );
};
