import React, { useState } from 'react';
import { STUDIO_PHOTOS, AGENCY_INFO } from '../data/content';
import type { StudioPhoto } from '../types';
import { PhotoLightbox } from './PhotoLightbox';
import { Camera, MessageSquare } from 'lucide-react';

export const Photography: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<StudioPhoto | null>(null);

  return (
    <section id="photography" className="py-20 sm:py-28 bg-[#FFE15A] border-t-4 border-b-4 border-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="mb-4 inline-block">
            <span className="bg-black text-[#FFE15A] border-2 border-black px-4 py-1.5 font-mono font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[3px_3px_0px_#000000]">
              COMMERCIAL STILLS &amp; PRODUCT SHOOTS
            </span>
          </div>

          <h2 className="font-serif font-black uppercase text-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            BRAND &amp; STUDIO<br />
            PHOTOGRAPHY.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-black font-semibold max-w-2xl mx-auto">
            High-precision product, jewellery, and commercial catalog photography captured in our Silvassa studio with cinema-grade lighting, macro lens optics, and editorial color science.
          </p>
        </div>

        {/* 8-Photo Grid (4x2 on Desktop, 2x4 on Tablet, 1x8 on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STUDIO_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="relative aspect-square bg-neutral-900 border-[3.5px] border-black shadow-[6px_6px_0px_#000000] overflow-hidden cursor-pointer group hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#000000] transition-all"
            >
              {/* Pure Image with Black & White default, Color on Hover, NO zoom symbol */}
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Studio Photography Banner */}
        <div className="mt-14 bg-white border-[3.5px] border-black shadow-[8px_8px_0px_#000000] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FFE15A] border-2 border-black flex items-center justify-center shrink-0 shadow-[3px_3px_0px_#000000]">
              <Camera className="w-6 h-6 text-black stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-serif font-black text-lg sm:text-xl uppercase text-black">
                Need Professional Product &amp; Jewellery Photography?
              </h4>
              <p className="text-neutral-700 text-sm mt-0.5 font-medium max-w-xl">
                Book our Silvassa studio equipped with macro lenses, diffused softboxes, and color-calibrated monitors for your retail and catalog shoots.
              </p>
            </div>
          </div>

          <a
            href={AGENCY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black border-2 border-black font-serif font-black px-6 py-3 uppercase text-xs sm:text-sm tracking-wider shadow-[4px_4px_0px_#000000] transition-colors flex items-center justify-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-[#FFE15A]" />
            <span>BOOK STUDIO SHOOT →</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </section>
  );
};
