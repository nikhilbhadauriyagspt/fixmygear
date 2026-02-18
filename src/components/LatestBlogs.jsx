import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
  const posts = [
    {
      id: 1,
      title: "5 Signs Your Washing Machine Needs Professional Service",
      excerpt: "Don't wait for a flood. Learn how to spot early warning signs of failure.",
      category: "Maintenance",
      date: "Feb 15, 2026",
      image: "/washing.png"
    },
    {
      id: 2,
      title: "Why Your Refrigerator Is Making Strange Noises",
      excerpt: "Strange sounds can mean many things. Here is a diagnostic guide.",
      category: "Kitchen",
      date: "Feb 10, 2026",
      image: "/refrigerator.png"
    },
    {
      id: 3,
      title: "Ultimate Guide to AC Deep Cleaning for Summer",
      excerpt: "Ensure your split AC is clean, gassed, and running efficiently.",
      category: "HVAC",
      date: "Feb 05, 2026",
      image: "/air.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/50 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase mb-6 shadow-sm">
              <Sparkles size={12} /> Experts Voice
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
              Latest Repair <br /> <span className="text-blue-600 italic">Insights.</span>
            </h2>
          </div>
          <Link to="/blog" className="group flex items-center gap-3 px-8 py-4 bg-gray-50 hover:bg-blue-600 text-gray-900 hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
            View All Posts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Link 
              key={idx} 
              to={`/blog/${post.id}`} 
              className="group bg-white rounded-[40px] overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-500 hover:shadow-[0_32px_64px_rgba(0,0,0,0.06)] flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[9px] font-black uppercase text-blue-600 tracking-widest border border-white/50">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-gray-400 text-[10px] font-bold mb-4 uppercase tracking-widest">
                  <Calendar size={14} /> {post.date}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all">
                  Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestBlogs;
