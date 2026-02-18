import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogData';
import { ArrowLeft, Clock, User, Calendar, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-44 flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-28 pb-24">
      {/* Success Toast */}
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${copied ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
        <div className="bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-xl">
          <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <CheckCircle2 size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest">Link Copied!</span>
            <span className="text-[10px] font-medium text-gray-400">Share it with your friends.</span>
          </div>
        </div>
      </div>

      {/* 1. Header & Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors font-black text-[10px] uppercase tracking-[0.2em] mb-8">
          <ArrowLeft size={14} /> Back to Journal
        </Link>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-100/50">
            {post.category}
          </span>
          <span className="text-gray-300 font-black">•</span>
          <span className="text-gray-400 text-[9px] font-black uppercase tracking-widest">{post.readTime} Read</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-10">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-100 py-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-md">
              <img loading="lazy" src={`https://i.pravatar.cc/150?u=${post.author.split(' ')[0]}`} alt={post.author} className="w-full h-full object-cover grayscale" />
            </div>
            <div>
              <p className="text-xs font-black text-gray-900 uppercase leading-none mb-1">{post.author}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 cursor-pointer"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-[48px] overflow-hidden shadow-2xl h-[400px] md:h-[600px] relative border-8 border-gray-50">
          <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
        </div>
      </div>

      {/* 2. Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-medium blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Post Footer */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <div className="bg-gray-50 rounded-[40px] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 blur-[80px] -mr-20 -mt-20" />
            <div className="relative z-10 text-center">
              <Sparkles className="mx-auto text-blue-600 mb-6" size={32} />
              <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-4">Did you find this helpful?</h3>
              <p className="text-gray-500 mb-10 max-w-md mx-auto">Subscribe to our newsletter to receive the latest appliance maintenance tips directly in your inbox.</p>
              <div className="flex justify-center">
                <Link to="/blog" className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-gray-900/20 active:scale-95">
                  Back to All Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS for Blog Content (can be moved to App.css or index.css) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h3 {
          font-size: 1.875rem;
          font-weight: 900;
          color: #111827;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
          text-transform: uppercase;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
      `}} />
    </div>
  );
};

export default BlogDetail;
