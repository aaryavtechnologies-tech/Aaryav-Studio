import React from 'react';
import type { PortfolioProject } from '../types';
import { X, CheckCircle2, ArrowRight, ExternalLink, Play } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white border-4 border-black shadow-[10px_10px_0px_#FFE15A,16px_16px_0px_#000000] max-w-3xl w-full my-auto overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Bar */}
        <div className="bg-black text-[#FFE15A] px-4 sm:px-6 py-2.5 flex items-center justify-between border-b-3 border-black font-mono text-xs uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
            <span>AARYAV VIDEO ARCHIVE // {project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 bg-[#FFE15A] text-black border border-black flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 max-h-[82vh] overflow-y-auto">
          
          {/* Main Video Embed or High-Res Thumbnail */}
          <div className="relative aspect-[16/9] w-full border-3 border-black shadow-[6px_6px_0px_#000000] overflow-hidden mb-6 bg-black">
            {project.videoSrc ? (
              <video
                src={project.videoSrc}
                poster={project.image}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            ) : project.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Project Details */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-[#FFE15A] text-black border border-black font-mono font-bold text-xs uppercase px-2.5 py-0.5">
                {project.category}
              </span>
              <span className="font-mono text-xs text-neutral-500 font-bold uppercase">
                {project.clientType}
              </span>
            </div>

            <h3 className="font-serif font-black text-2xl sm:text-3xl text-black uppercase tracking-tight mb-2">
              {project.title}
            </h3>

            <p className="font-mono text-xs sm:text-sm text-neutral-800 font-bold uppercase tracking-wider leading-relaxed mb-4">
              {project.subtitle}
            </p>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

          {/* Deliverables & Measured Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#F7F7F7] border-2 border-black p-4">
              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-black mb-3">
                EDITING SPECS &amp; SCOPE
              </h4>
              <ul className="space-y-1.5">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-mono text-neutral-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFE15A] border-2 border-black p-4 flex flex-col justify-between">
              <div>
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-black mb-2">
                  PERFORMANCE IMPACT
                </h4>
                <p className="text-black font-serif font-bold text-sm sm:text-base leading-snug">
                  "{project.results}"
                </p>
              </div>
              <span className="text-[11px] font-mono text-neutral-800 mt-3 pt-2 border-t border-black/20">
                Verified high-retention video metric
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t-2 border-black/15">
            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF0000] text-white hover:bg-black border-2 border-black py-3 px-5 font-serif font-black text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000000] transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>OPEN ON YOUTUBE</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            )}

            <a
              href={`https://wa.me/919328603748?text=${encodeURIComponent(`Hi Aaryav Studios, I saw your video editing project "${project.title}" and would like to produce high-retention video content for my brand.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black border-2 border-black py-3 px-5 font-serif font-black text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000000] transition-all"
            >
              <span>INQUIRE ABOUT VIDEO PRODUCTION</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="bg-white text-black hover:bg-neutral-100 border-2 border-black py-3 px-5 font-serif font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
            >
              CLOSE
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
