import { ArrowRight, Clock, User, Sparkles, Tag, TrendingUp, ChevronRight, Bookmark, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", email })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  const featuredPost = blogPosts[0];
  const posts = blogPosts.slice(1);

  return (
    <div className="pt-28 pb-24 bg-gray-50 min-h-screen">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">The Repair Journal</span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9]">
              Insights for the <br /> Modern <span className="text-blue-600">Home.</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. Featured Post - Magazine Style */}
        <Link to={`/blog/${featuredPost.id}`} className="block bg-white rounded-[48px] p-4 border border-gray-100 shadow-xl mb-16 group cursor-pointer hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative h-[400px] lg:h-[500px] rounded-[36px] overflow-hidden">
              <img loading="lazy" 
                src={featuredPost.image} 
                alt="Featured" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
                Featured Story
              </div>
            </div>
            
            <div className="flex flex-col justify-center p-4 lg:p-8">
              <div className="flex items-center gap-3 mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="text-blue-600">{featuredPost.category}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{featuredPost.date}</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-[1.1] group-hover:text-blue-600 transition-colors">
                {featuredPost.title}
              </h2>
              
              <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                    <img loading="lazy" src={`https://i.pravatar.cc/150?u=${featuredPost.author.split(' ')[0]}`} alt="Author" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900 uppercase">{featuredPost.author}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{featuredPost.readTime} Read</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* 3. Trending / Grid Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="text-blue-600" size={24} />
            <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="bg-white rounded-[40px] p-4 border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-500 group flex flex-col sm:flex-row gap-6 cursor-pointer">
                <div className="w-full sm:w-48 h-48 sm:h-auto rounded-[28px] overflow-hidden shrink-0 relative">
                  <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors" />
                </div>
                
                <div className="flex flex-col justify-between py-2 pr-4 flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-lg">{post.category}</span>
                      <Bookmark size={16} className="text-gray-300 hover:text-gray-900 transition-colors" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-400 text-xs font-bold leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. Newsletter Banner */}
        <div className="relative rounded-[56px] overflow-hidden bg-gray-900 px-8 py-16 md:p-20 text-center">
          {/* Success Toast */}
          <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
            <div className="bg-white text-gray-900 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                <CheckCircle2 size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black uppercase tracking-widest">Subscription Successful!</span>
                <span className="text-[10px] font-medium text-gray-400">Welcome to the Repair Journal.</span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Sparkles className="mx-auto text-blue-500 mb-6" size={32} />
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
              Master Your Home.
            </h2>
          
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[28px] shadow-2xl">
              <input type="hidden" name="form-name" value="newsletter" />
              <input 
                required
                name="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-1 bg-transparent border-none px-6 py-4 text-white font-bold placeholder:text-gray-500 outline-none text-sm"
              />
              <button 
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-gray-900 rounded-[20px] font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all active:scale-95 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? '...' : 'Subscribe'}
              </button>
            </form>
            <p className="mt-6 text-[9px] text-gray-500 font-bold uppercase tracking-widest">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
