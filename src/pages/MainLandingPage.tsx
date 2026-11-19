import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Photography } from '../components/Photography';
import { Work } from '../components/Work';
import { Shorts } from '../components/Shorts';
import { RawVsEdited } from '../components/RawVsEdited';
import { KineticType } from '../components/KineticType';
import { Areas } from '../components/Areas';
import { Team } from '../components/Team';
import { Blog } from '../components/Blog';
import { Testimonials } from '../components/Testimonials';
import { CreativePulse } from '../components/CreativePulse';
import { Talk } from '../components/Talk';
import { Footer } from '../components/Footer';
import { ConnectWidget } from '../components/ConnectWidget';
import { MessageSquare, Phone } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

export function MainLandingPage() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    // Reset main site title
    document.title = 'AARYAV STUDIOS — Creative Content & Social Media Marketing Agency | Silvassa';

    const sections = [
      'home',
      'services',
      'photography',
      'work',
      'shorts',
      'craft',
      'areas',
      'team',
      'blog',
      'testimonials',
      'talk'
    ];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FFE15A] selection:text-black antialiased overflow-x-clip">
      
      {/* Navigation Bar: Sticky, Horizontally Centered */}
      <Navbar activeSection={activeSection} />

      <main>
        {/* 1. HOME — Main Hero & Studio Image */}
        <Hero />

        {/* 2. SERVICES — What We Do */}
        <Services />

        {/* 3. BRAND & STUDIO PHOTOGRAPHY */}
        <Photography />

        {/* 4. WORK — Selected Projects */}
        <Work />

        {/* 5. SHORTS — Creative Video Showcase */}
        <Shorts />

        {/* 6. RAW VS EDITED — Color & Pacing Craft */}
        <RawVsEdited />

        {/* 7. KINETIC TYPE — Retention Motion Typography */}
        <KineticType />

        {/* 8. AREAS — Locations We Serve */}
        <Areas />

        {/* 9. TEAM — Agency Leadership (Himanshu & Chirag) */}
        <Team />

        {/* 10. BLOG — Ideas & Insights */}
        <Blog />

        {/* 11. TESTIMONIALS — Verified Client Feedback */}
        <Testimonials />

        {/* 12. CREATIVE PULSE — Instagram & Google Profile */}
        <CreativePulse />

        {/* 13. TALK — Contact Section */}
        <Talk />
      </main>

      {/* 14. FOOTER — Branding & Quick Links */}
      <Footer />

      {/* Floating Brutalist Connect Widget */}
      <ConnectWidget />

      {/* Mobile Floating Quick Action Dock */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-black text-white border-2 border-black p-1.5 shadow-[4px_4px_0px_#FFE15A] flex items-center justify-between gap-2">
        <a
          href={AGENCY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#FFE15A] text-black py-2.5 px-3 font-serif font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-black shadow-[2px_2px_0px_#000000]"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </a>

        <a
          href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
          className="flex-1 bg-white text-black py-2.5 px-3 font-serif font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-black shadow-[2px_2px_0px_#000000]"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>CALL STUDIO</span>
        </a>
      </div>

    </div>
  );
}
