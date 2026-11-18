import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import type { BlogPost } from '../types';
import { ArticleModal } from './ArticleModal';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const featuredPost = BLOG_POSTS.find(p => p.id === 'social-media-marketing-guide-silvassa') || BLOG_POSTS[0];
  const guidePosts = BLOG_POSTS.filter(p => p.id !== 'social-media-marketing-guide-silvassa');

  return (
    <section id="blog" className="py-16 sm:py-24 bg-white border-t-4 border-black relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFDE59] px-3 py-1 font-black uppercase text-[10px] sm:text-xs tracking-wider border border-black mb-3 sm:mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>INSIGHTS, GUIDES &amp; STRATEGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif font-black mb-4 sm:mb-6 uppercase text-black leading-none tracking-tight">
            AARYAV{' '}
            <span className="bg-[#FFDE59] px-2 sm:px-4 shadow-[3px_3px_0px_black] sm:shadow-[5px_5px_0px_black] border-2 sm:border-4 border-black inline-block">
              INSIGHTS
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base font-bold uppercase text-black/80 max-w-2xl leading-relaxed font-mono">
            Practical knowledge, retention frameworks, and local marketing strategies engineered for businesses in Silvassa, Vapi, Daman, and South Gujarat.
          </p>
        </div>

        {/* Featured Article — Yellow Brutalist Box */}
        {featuredPost && (
          <div className="bg-[#FFDE59] border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-[6px_6px_0px_black] p-5 sm:p-8 md:p-10 mb-12 sm:mb-16">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3 font-mono">
              <span className="bg-black text-[#FFDE59] px-2.5 py-0.5">
                FEATURED ARTICLE
              </span>
              <span className="bg-white text-black px-2 py-0.5 border border-black">
                {featuredPost.category}
              </span>
              <span className="flex items-center gap-1 text-black font-bold">
                <Clock className="w-3 h-3" />
                {featuredPost.readTime}
              </span>
            </div>

            <h3 
              onClick={() => setSelectedPost(featuredPost)}
              className="text-xl sm:text-3xl md:text-4xl font-serif font-black uppercase text-black mb-3 leading-tight hover:underline cursor-pointer"
            >
              {featuredPost.title}
            </h3>

            <p className="text-xs sm:text-sm md:text-base font-bold uppercase text-black/85 mb-5 max-w-2xl leading-relaxed font-mono">
              {featuredPost.excerpt}
            </p>

            <button
              onClick={() => setSelectedPost(featuredPost)}
              className="bg-black hover:bg-white text-[#FFDE59] hover:text-black text-xs sm:text-sm font-black font-mono uppercase px-5 py-3 border-2 border-black shadow-[3px_3px_0px_black] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Read Complete Article</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        )}

        {/* All Guides & Strategies Section */}
        <div className="mb-14 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-serif font-black uppercase text-black mb-6 border-b-2 sm:border-b-4 border-black pb-2">
            ALL GUIDES &amp; STRATEGIES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {guidePosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white border-3 sm:border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-[6px_6px_0px_black] p-5 flex flex-col justify-between hover:-translate-y-1 transition-transform group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2 font-mono">
                    <span className="bg-black text-[#FFDE59] px-2 py-0.5">
                      {post.category}
                    </span>
                    <span className="text-black/60 flex items-center gap-1 font-bold">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-serif font-black uppercase text-black mb-2 leading-snug group-hover:underline">
                    {post.title}
                  </h4>

                  <p className="text-xs font-bold text-black/75 uppercase leading-relaxed mb-5 font-mono">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t-2 border-black/10">
                  <div className="font-mono font-black text-xs uppercase tracking-wider text-black group-hover:text-[#FFDE59] group-hover:bg-black px-3 py-2 border-2 border-black inline-flex items-center gap-2 transition-colors w-full justify-between">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Strategy Advice Call-to-Action Box */}
        <div className="bg-black text-white border-3 sm:border-4 border-black shadow-[4px_4px_0px_#FFDE59] sm:shadow-[6px_6px_0px_#FFDE59] p-6 sm:p-10 text-center max-w-2xl mx-auto">
          <Sparkles className="w-6 h-6 text-[#FFDE59] mx-auto mb-3" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-black uppercase text-white mb-2">
            Want Strategy Advice for Your Brand?
          </h3>
          <p className="text-xs sm:text-sm font-bold text-white/80 uppercase max-w-md mx-auto mb-5 leading-relaxed font-mono">
            Connect with our team in Silvassa for a practical review of your visual marketing and video workflow.
          </p>
          <a
            href="https://wa.me/919328603748"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto bg-[#FFDE59] hover:bg-white text-black text-xs sm:text-sm font-black font-mono px-6 py-3.5 border-2 border-black shadow-[3px_3px_0px_white] uppercase transition-colors cursor-pointer">
              Chat With Us on WhatsApp
            </button>
          </a>
        </div>

      </div>

      {/* Editorial Article Reader Modal */}
      <ArticleModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  );
};
