import React, { useState } from 'react';
import { trackEvent } from '../../utils/tracking';
import { Play, ArrowUpRight, Film, Video, ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  type: 'long-form' | 'short-reel';
  duration: string;
  thumbnail: string;
  videoSrc?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  description: string;
}

interface GoogleAdsPortfolioProps {
  onOpenVideoModal: (videoSrc: string, title: string, youtubeId?: string) => void;
  onQuoteClick: () => void;
}

export const GoogleAdsPortfolio: React.FC<GoogleAdsPortfolioProps> = ({
  onOpenVideoModal,
  onQuoteClick,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'shorts' | 'long-form'>('all');

  const portfolioItems: PortfolioItem[] = [
    // Reels & Shorts (9:16)
    {
      id: 'short-1',
      title: 'New SS Watch & Electronics',
      client: 'SS Watches Store',
      category: 'Commercial Promo',
      type: 'short-reel',
      duration: '0:18',
      thumbnail: '/videos/optimized/luxury-watch.jpg',
      videoSrc: '/videos/optimized/luxury-watch.mp4',
      description: 'Retail footfall promotion engineered with dynamic pacing, on-screen pricing hooks, and retail conversion CTAs.',
    },
    {
      id: 'short-2',
      title: 'Poojara Telecom Store Showcase',
      client: 'Poojara Phones',
      category: 'Retail Walkthrough',
      type: 'short-reel',
      duration: '0:12',
      thumbnail: '/videos/optimized/poojara-promo.jpg',
      videoSrc: '/videos/optimized/poojara-promo.mp4',
      description: 'Rapid-cut store promotion for regional showroom, featuring sync cuts and high-velocity mobile engagement.',
    },
    {
      id: 'short-3',
      title: 'Money Hub Finance Talk',
      client: 'Money Hub Podcast',
      category: 'Talking Head & Hook',
      type: 'short-reel',
      duration: '0:26',
      thumbnail: '/videos/optimized/money-hub.jpg',
      videoSrc: '/videos/optimized/money-hub.mp4',
      description: 'High-retention talking head format with animated captions, punch zooms, and crisp voice mastering.',
    },
    {
      id: 'short-4',
      title: 'Luxury Villa Cinematic Tour',
      client: 'Architectural Feature',
      category: 'Cinematography',
      type: 'short-reel',
      duration: '0:28',
      thumbnail: '/videos/optimized/luxury-villa.jpg',
      videoSrc: '/videos/optimized/luxury-villa.mp4',
      description: 'Architectural cinematography featuring smooth gimbal movement, balanced natural lighting, and luxury atmosphere.',
    },
    {
      id: 'short-5',
      title: 'Commercial Story Edit // 0119',
      client: 'Brand Commercial',
      category: 'Brand Storytelling',
      type: 'short-reel',
      duration: '0:44',
      thumbnail: '/videos/optimized/reel-0119.jpg',
      videoSrc: '/videos/optimized/reel-0119.mp4',
      description: 'Vertical commercial storytelling with custom DaVinci color grading, layered sound design, and smooth transitions.',
    },
    {
      id: 'short-6',
      title: 'Creative Brand Cutdown // 0113',
      client: 'Creative Campaign',
      category: 'Motion Dynamics',
      type: 'short-reel',
      duration: '0:27',
      thumbnail: '/videos/optimized/reel-0113.jpg',
      videoSrc: '/videos/optimized/reel-0113.mp4',
      description: 'Kinetic energy brand edit highlighting speed ramps, rhythm cuts, and seamless visual impact.',
    },
    {
      id: 'short-7',
      title: 'Lifestyle & Product Dynamics',
      client: 'Creative Showcase',
      category: 'Visual Story',
      type: 'short-reel',
      duration: '0:30',
      thumbnail: '/videos/optimized/v-video.jpg',
      videoSrc: '/videos/optimized/v-video.mp4',
      description: 'Engaging vertical reel blending dynamic sound effects, pacing, and visual storytelling.',
    },
    {
      id: 'short-8',
      title: 'Poojara Retail Promo Cut',
      client: 'Poojara Telecom',
      category: 'Retail Showcase',
      type: 'short-reel',
      duration: '0:41',
      thumbnail: '/videos/optimized/poojara-cut-12.jpg',
      videoSrc: '/videos/optimized/poojara-cut-12.mp4',
      description: 'Complete showroom feature with store-walkthrough cuts, festive offers, and local footfall drivers.',
    },
    {
      id: 'short-9',
      title: 'Money Hub Market Growth',
      client: 'Money Hub Podcast',
      category: 'Finance Talk',
      type: 'short-reel',
      duration: '0:17',
      thumbnail: '/videos/optimized/money-hub-part4.jpg',
      videoSrc: '/videos/optimized/money-hub-part4.mp4',
      description: 'Punchy talking-head reel with kinetic subtitle animations, retention zooms, and audio punctuation.',
    },

    // Long-Form & YouTube
    {
      id: 'long-1',
      title: 'Educational Hix: Chemistry Full One-Shot',
      client: 'Educational Hix (200K+)',
      category: 'YouTube Long-Form',
      type: 'long-form',
      duration: '1:12:00',
      thumbnail: '/work/yt-chemical-reactions.jpg',
      youtubeId: 'NVwnmtemFpk',
      youtubeUrl: 'https://youtu.be/NVwnmtemFpk',
      description: 'Dense educational curriculum transformed into a high-watch-time video with animated formulas, motion callouts, and clean audio.',
    },
    {
      id: 'long-2',
      title: 'Core Dev Reel // Kinetic Typography Masterclass',
      client: 'Aaryav Post-Production',
      category: 'Motion Typography',
      type: 'long-form',
      duration: '1:05',
      thumbnail: '/videos/optimized/ye-website.jpg',
      videoSrc: '/videos/optimized/core-dev-reel.mp4',
      description: 'High-impact motion graphics and retention typography masterclass showcasing our full post-production capabilities.',
    },
    {
      id: 'long-3',
      title: 'Educational Hix: Rapid 20-Min Revision',
      client: 'Educational Hix',
      category: 'Paced Educational Edit',
      type: 'long-form',
      duration: '22:15',
      thumbnail: '/work/yt-matter-pure-2.jpg',
      youtubeId: 'V5weVIxWomo',
      youtubeUrl: 'https://youtu.be/V5weVIxWomo',
      description: 'Rapid-tempo lesson editing with countdown clocks, on-screen key takeaways, and sound effects to maintain student focus.',
    },
    {
      id: 'long-4',
      title: 'Class 10 Political Parties Full Chapter',
      client: 'Hix Educational Series',
      category: 'Documentary Polish',
      type: 'long-form',
      duration: '58:40',
      thumbnail: '/work/yt-political-parties.jpg',
      youtubeId: 'R0k0FAufXdc',
      youtubeUrl: 'https://youtu.be/R0k0FAufXdc',
      description: 'Documentary style lecture polish with historical archival B-roll integration and broadcast audio mastering.',
    },
    {
      id: 'long-5',
      title: 'Digital Literacy | Masterclass',
      client: 'Educational Hix',
      category: 'Educational Story',
      type: 'long-form',
      duration: '45:20',
      thumbnail: '/work/yt-matter-pure-1.jpg',
      youtubeId: 'GjnrnxUUaxU',
      youtubeUrl: 'https://youtu.be/GjnrnxUUaxU',
      description: 'Class 9 Chemistry Ch-2 One Shot: Is Matter Around Us Pure? Multi-camera dialogue synchronization and dynamic callouts.',
    },
  ];

  const filteredItems = portfolioItems.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'shorts') return item.type === 'short-reel';
    if (activeTab === 'long-form') return item.type === 'long-form';
    return true;
  });

  const handleItemClick = (item: PortfolioItem) => {
    trackEvent('view_portfolio', { project_id: item.id, title: item.title, type: item.type });
    if (item.videoSrc) {
      onOpenVideoModal(item.videoSrc, item.title);
    } else if (item.youtubeId) {
      onOpenVideoModal('', item.title, item.youtubeId);
    }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#F7F7F7] border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block mb-3">
            <span className="bg-black text-[#FFE15A] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 border border-black shadow-[2px_2px_0px_#000000]">
              VERIFIED PORTFOLIO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight text-black mb-4">
            Don't Just Take Our Word for It.{' '}
            <span className="inline-block bg-[#FFE15A] px-3 sm:px-4 py-0.5 border-3 sm:border-4 border-black shadow-[4px_4px_0px_#000000]">
              See Our Work.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-mono font-bold uppercase text-neutral-600 tracking-wider">
            Explore real high-retention commercial edits, YouTube long-form videos, and viral Instagram reels crafted at Aaryav Studios.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 font-serif font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-black text-[#FFE15A] shadow-[3px_3px_0px_#FFE15A]'
                : 'bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_#000000]'
            }`}
          >
            All Work ({portfolioItems.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('shorts')}
            className={`flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 font-serif font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
              activeTab === 'shorts'
                ? 'bg-black text-[#FFE15A] shadow-[3px_3px_0px_#FFE15A]'
                : 'bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_#000000]'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Reels &amp; Shorts (9:16)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('long-form')}
            className={`flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 font-serif font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
              activeTab === 'long-form'
                ? 'bg-black text-[#FFE15A] shadow-[3px_3px_0px_#FFE15A]'
                : 'bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_#000000]'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Commercial &amp; Long-Form</span>
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="bg-white border-4 border-black shadow-[6px_6px_0px_#000000] overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000000] transition-all cursor-pointer group"
            >
              {/* Media Thumbnail Container */}
              <div className={`relative overflow-hidden bg-black ${item.type === 'short-reel' ? 'aspect-[4/5]' : 'aspect-video'}`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Category & Duration Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono font-bold">
                  <span className="bg-black text-[#FFE15A] px-2 py-0.5 border border-black text-[10px] uppercase">
                    {item.category}
                  </span>
                  <span className="bg-white text-black px-2 py-0.5 border border-black text-[10px]">
                    {item.duration}
                  </span>
                </div>

                {/* Hover Play Button Overlay — Visible when bringing mouse cursor on video */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFE15A] text-black border-3 border-black flex items-center justify-center shadow-[4px_4px_0px_#000000] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out transform">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-black text-black ml-0.5" />
                  </div>
                </div>

                {/* Tap to Play prompt */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                  <span className="bg-black/80 px-2 py-0.5 border border-neutral-700">
                    {item.type === 'short-reel' ? 'VERTICAL REEL' : '4K CINEMA / YT'}
                  </span>
                  <span className="text-[#FFE15A] font-bold group-hover:underline">
                    CLICK TO WATCH →
                  </span>
                </div>
              </div>

              {/* Information Panel */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <span className="block font-mono text-[10px] font-bold uppercase text-neutral-500 tracking-wider mb-1">
                    CLIENT: {item.client}
                  </span>
                  <h3 className="font-serif font-black text-base sm:text-lg text-black uppercase tracking-tight mb-2 leading-snug group-hover:text-neutral-800">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/15 flex items-center justify-between font-mono text-xs font-bold uppercase text-black">
                  <span>WATCH PREVIEW</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Conversion CTA Strip */}
        <div className="bg-[#FFE15A] border-4 border-black p-6 sm:p-10 shadow-[8px_8px_0px_#000000] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-black uppercase bg-black text-[#FFE15A] px-2.5 py-0.5 border border-black inline-block mb-2">
              READY FOR HIGH-IMPACT VIDEO?
            </span>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-black uppercase tracking-tight leading-snug">
              Want Content Like This? Let's Talk.
            </h3>
            <p className="font-mono text-xs sm:text-sm text-neutral-800 font-bold uppercase tracking-wider mt-1">
              Share your footage or hire our studio crew. We handle everything from rough cuts to cinema color.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={onQuoteClick}
              className="w-full sm:w-auto bg-black text-white hover:bg-white hover:text-black border-3 border-black px-6 sm:px-8 py-3 font-serif font-black text-xs sm:text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
            >
              REQUEST CUSTOM QUOTE
            </button>
            <a
              href="https://wa.me/919328603748?text=Hello%20Aaryav%20Studios%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { source: 'portfolio_cta' })}
              className="w-full sm:w-auto bg-white text-black hover:bg-black hover:text-[#FFE15A] border-3 border-black px-6 sm:px-8 py-3 font-serif font-black text-xs sm:text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-1.5"
            >
              <span>WHATSAPP US</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
