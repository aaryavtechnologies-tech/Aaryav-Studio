import React from 'react';
import type { BlogPost } from '../types';
import { X, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white border-4 border-black shadow-[10px_10px_0px_#FFE15A,16px_16px_0px_#000000] max-w-3xl w-full my-auto overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="bg-black text-[#FFE15A] px-4 sm:px-6 py-2.5 flex items-center justify-between border-b-3 border-black font-mono text-xs uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#FFE15A]" />
            <span>AARYAV EDITORIAL DESK // ESSAY</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 bg-[#FFE15A] text-black border border-black flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Close article"
          >
            <X className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* Scrollable Article Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
          {/* Article Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#FFE15A] text-black border-2 border-black font-mono font-bold text-xs uppercase px-2.5 py-0.5 shadow-[2px_2px_0px_#000000]">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-500 font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="font-serif font-black text-2xl sm:text-4xl text-black uppercase tracking-tight leading-tight mb-6">
            {post.title}
          </h2>

          {/* Hero Featured Image */}
          <div className="border-3 border-black shadow-[5px_5px_0px_#000000] overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 sm:h-72 object-cover"
            />
          </div>

          {/* Article Introduction */}
          <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed mb-8 border-l-4 border-[#FFE15A] pl-4 sm:pl-5 py-1">
            {post.content.intro}
          </p>

          {/* Article Subsections */}
          <div className="space-y-6 mb-8">
            {post.content.sections.map((sec, idx) => (
              <div key={idx} className="border-t-2 border-black/10 pt-5">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-black uppercase mb-2">
                  {sec.subheading}
                </h3>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal">
                  {sec.paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* Key Strategic Takeaways Box */}
          <div className="bg-[#FFE15A] border-3 border-black p-5 sm:p-6 shadow-[5px_5px_0px_#000000] mb-8">
            <h4 className="font-serif font-black text-base uppercase text-black mb-3">
              ⚡ KEY EXECUTIVE TAKEAWAYS
            </h4>
            <ul className="space-y-2">
              {post.content.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-900 font-medium">
                  <span className="w-2 h-2 bg-black shrink-0 mt-1.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t-2 border-black/15">
            <a
              href={`https://wa.me/919328603748?text=${encodeURIComponent(`Hi Aaryav Studios, I read your article "${post.title}" and would like to consult on applying this strategy to our brand.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black text-[#FFE15A] hover:bg-[#FFE15A] hover:text-black border-2 border-black py-3 px-5 font-serif font-black text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[4px_4px_0px_#000000] transition-colors"
            >
              <span>APPLY THIS TO YOUR BRAND</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="bg-white text-black hover:bg-neutral-100 border-2 border-black py-3 px-6 font-serif font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
            >
              CLOSE ESSAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
