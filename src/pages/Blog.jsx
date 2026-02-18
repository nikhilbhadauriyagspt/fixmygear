import { Search, ArrowRight, Clock, User, Sparkles, Tag, TrendingUp, ChevronRight, Bookmark } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Smart Tech', 'Maintenance', 'DIY Guides', 'Sustainability', 'Company News'];

  const featuredPost = {
    id: 1,
    title: "The Silent Revolution: AI in Home Appliances",
    excerpt: "From refrigerators that order groceries to washing machines that optimize water usage, Artificial Intelligence is reshaping our domestic lives. We explore the tech behind the convenience.",
    category: "Smart Tech",
    author: "Dr. Julian Thorne",
    date: "Feb 18, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
  };

  const posts = [
    {
      id: 2,
      title: "5 Signs Your AC Compressor is Failing",
      excerpt: "Don't wait for the heatwave. Detect these early warning signs to save money.",
      category: "Maintenance",
      date: "Feb 15, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Induction vs. Gas: The Efficiency Verdict",
      excerpt: "A technical breakdown of thermal transfer rates and energy consumption.",
      category: "Sustainability",
      date: "Feb 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "The Ultimate Guide to Descaling",
      excerpt: "Hard water is the silent killer of coffee machines and irons. Here is how to fix it.",
      category: "DIY Guides",
      date: "Feb 10, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Why 'Repair' is the New 'Replace'",
      excerpt: "Moving away from throwaway culture towards a circular economy.",
      category: "Company News",
      date: "Feb 08, 2026",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
    }
  ];

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
          <div className="w-full md:w-auto relative group">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full md:w-80 bg-white border border-gray-200 rounded-[20px] py-4 pl-12 pr-6 text-sm font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all shadow-sm group-hover:shadow-lg"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors" size={18} />
          </div>
        </div>

        {/* Categories Scroll */}
        <div className="flex gap-3 mt-12 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                activeCategory === cat 
                  ? 'bg-gray-900 text-white border-gray-900 shadow-xl shadow-gray-900/20' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. Featured Post - Magazine Style */}
        <div className="bg-white rounded-[48px] p-4 border border-gray-100 shadow-xl mb-16 group cursor-pointer hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative h-[400px] lg:h-[500px] rounded-[36px] overflow-hidden">
              <img 
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
                    <img src="https://i.pravatar.cc/150?u=julian" alt="Author" className="w-full h-full object-cover grayscale" />
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
        </div>

        {/* 3. Trending / Grid Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="text-blue-600" size={24} />
            <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Latest Articles</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-[40px] p-4 border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-500 group flex flex-col sm:flex-row gap-6 cursor-pointer">
                <div className="w-full sm:w-48 h-48 sm:h-auto rounded-[28px] overflow-hidden shrink-0 relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
              </div>
            ))}
          </div>
        </div>

        {/* 4. Newsletter Banner */}
        <div className="relative rounded-[56px] overflow-hidden bg-gray-900 px-8 py-16 md:p-20 text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Sparkles className="mx-auto text-blue-500 mb-6" size={32} />
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
              Master Your Home.
            </h2>
          
            
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[28px] shadow-2xl">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-transparent border-none px-6 py-4 text-white font-bold placeholder:text-gray-500 outline-none text-sm"
              />
              <button className="px-8 py-4 bg-white text-gray-900 rounded-[20px] font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all active:scale-95 shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="mt-6 text-[9px] text-gray-500 font-bold uppercase tracking-widest">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
