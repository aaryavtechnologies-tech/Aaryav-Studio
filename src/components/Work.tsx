import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import type { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { Play, ArrowUpRight } from 'lucide-react';
import { YoutubeIcon } from './icons/YoutubeIcon';

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="work" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="mb-4 inline-block">
            <span className="bg-black text-[#FFE15A] border-2 border-black px-4 py-1.5 font-mono font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[3px_3px_0px_#000000]">
              OUR PORTFOLIO
            </span>
          </div>

          <h2 className="font-serif font-black uppercase text-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            WORK THAT<br />
            <span className="inline-block bg-[#FFE15A] text-black border-3 border-black px-3 sm:px-4 py-0.5 shadow-[4px_4px_0px_#000000] mt-1">
              SPEAKS LOUDER.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-800 font-medium max-w-xl mx-auto">
            High-retention YouTube long-form edits, educational one-shots, kinetic motion graphics, and narrative video cuts produced for commercial channels.
          </p>
        </div>

        {/* 2-Column Responsive Card Grid matching the exact reference screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white border-[3.5px] border-black rounded-2xl shadow-[6px_6px_0px_#000000] overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#000000] transition-all cursor-pointer group"
            >
              <div>
                {/* 16:9 Thumbnail Image / Video Preview (Black & White by default, Full Color on Hover) */}
                <div className="relative aspect-[16/9] w-full bg-neutral-900 overflow-hidden border-b-[3.5px] border-black">
                  {project.videoSrc ? (
                    <video
                      src={project.videoSrc}
                      poster={project.image}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
                      onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  )}

                  {/* Play Overlay: Hidden by default, reveals and scales in when hovered */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FFE15A] text-black border-[2.5px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000000] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out transform">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-black ml-1" />
                    </div>
                  </div>

                  {/* Top Corner Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-black text-[#FFE15A] border-2 border-black font-mono font-bold text-[10px] sm:text-xs uppercase px-2.5 py-0.5 shadow-[2px_2px_0px_#000000]">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <span className="hidden sm:inline bg-black/80 text-[#FFE15A] font-mono font-bold text-[9px] uppercase px-2 py-0.5 border border-black group-hover:hidden">
                      HOVER FOR COLOR
                    </span>
                    {project.videoSrc ? (
                      <span className="bg-[#FFE15A] text-black font-mono font-bold text-[10px] uppercase px-2 py-0.5 border border-black shadow-[2px_2px_0px_#000000] flex items-center gap-1">
                        <span>ORIGINAL VIDEO</span>
                      </span>
                    ) : (
                      <span className="bg-red-600 text-white font-mono font-bold text-[10px] uppercase px-2 py-0.5 border border-black shadow-[2px_2px_0px_#000000] flex items-center gap-1">
                        <YoutubeIcon className="w-3 h-3 text-white" />
                        <span>YOUTUBE</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section matching the exact screenshot typography */}
                <div className="p-5 sm:p-6 bg-white">
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-black uppercase tracking-tight mb-2 group-hover:text-neutral-800 leading-snug">
                    {project.title}
                  </h3>

                  <p className="font-mono text-xs sm:text-xs text-neutral-700 font-bold uppercase tracking-wider leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Bottom Strip */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <div className="pt-3 border-t-2 border-black/15 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-neutral-500 font-bold uppercase">
                    CLICK TO WATCH PREVIEW
                  </span>
                  <div className="bg-[#FFE15A] group-hover:bg-black text-black group-hover:text-[#FFE15A] border-2 border-black px-3 py-1 font-serif font-black text-xs uppercase tracking-wider flex items-center gap-1 shadow-[2px_2px_0px_#000000] transition-colors">
                    <span>PLAY VIDEO</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Video Discovery Banner */}
        <div className="mt-14 sm:mt-18 bg-[#F7F7F7] border-[3px] border-black p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_#000000]">
          <div>
            <span className="bg-black text-[#FFE15A] font-mono font-bold text-xs uppercase px-2.5 py-1 tracking-wider inline-block mb-2">
              4K MULTI-CAM &amp; HIGH-RETENTION YOUTUBE SUITE
            </span>
            <h4 className="font-serif font-bold text-lg sm:text-xl uppercase text-black">
              Need television-quality editing for your YouTube or education channel?
            </h4>
            <p className="text-neutral-600 text-xs sm:text-sm mt-1 font-mono">
              From raw footage to hook-optimized, fully subtitled, and color-graded YouTube episodes delivered with fast turnaround.
            </p>
          </div>
          <a
            href="https://wa.me/919328603748?text=Hi%20Aaryav%20Studios%2C%20I%20want%20to%20discuss%20YouTube%20video%20editing%20and%20production%20for%20my%20channel."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black border-2 border-black font-serif font-black px-6 py-3.5 uppercase text-xs sm:text-sm tracking-wider shadow-[4px_4px_0px_#000000] transition-all whitespace-nowrap text-center cursor-pointer"
          >
            DISCUSS CHANNEL EDITING →
          </a>
        </div>

      </div>

      {/* Project Video Embed Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
