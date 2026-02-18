import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import BookingModal from './BookingModal';


const slides = [
  {
    tag: "Laundry Expert",
    title: "Revolutionizing",
    highlight: "Washing Machine",
    suffix: "Repairs.",
    subtitle: "Experience lightning-fast service with our certified master technicians. Same-day fixes guaranteed.",
    image: "/hero-washing.jpg",
    color: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/20"
  },
  {
    tag: "Cooling Master",
    title: "Pro-Level",
    highlight: "Refrigerator",
    suffix: "Maintenance.",
    subtitle: "From compressor failures to gas leaks, we restore your fridge's peak performance in hours, not days.",
    image: "/hero-refri.jpg",
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20"
  },
  {
    tag: "Kitchen Tech",
    title: "Precision",
    highlight: "Cooking Oven",
    suffix: "Care.",
    subtitle: "Restoring the heart of your kitchen. Expert calibration and part replacement for all premium brands.",
    image: "/hero-cook.jpg",
    color: "from-orange-500 to-red-600",
    shadow: "shadow-orange-500/20"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative min-h-[90vh] lg:h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content - Text */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase mb-8 shadow-sm">
              <SparkleIcon />
              {slides[current].tag}
            </div>

            <div className="relative overflow-hidden h-[140px] sm:h-[180px] lg:h-[200px] mb-6">
              {slides.map((slide, index) => {
                const Tag = index === current ? 'h1' : 'div';
                return (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
                      index === current ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
                    }`}
                  >
                    <Tag className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                      {slide.title} <br />
                      <span className={`bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                        {slide.highlight}
                      </span> <br />
                      {slide.suffix}
                    </Tag>
                  </div>
                );
              })}
            </div>

            <p className="text-gray-500 text-sm sm:text-lg lg:text-xl font-medium max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setIsModalOpen(true)}
                className={`group relative w-full sm:w-auto px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl transition-all hover:bg-blue-600 active:scale-95 cursor-pointer`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Schedule Repair <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('repair-solutions');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative group">
              {/* Main Image Bento Card */}
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white">
                {slides.map((slide, index) => (
                  <img loading="eager"
                    key={index}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                      index === current ? 'scale-100 rotate-0 opacity-100' : 'scale-110 rotate-2 opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Aesthetic Badges */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/80 backdrop-blur-xl rounded-[32px] shadow-xl border border-white flex flex-col items-center justify-center p-4 animate-bounce-slow">
                <ShieldCheck className="text-blue-600 mb-2" size={32} />
                <span className="text-[8px] font-black text-gray-400 uppercase text-center leading-tight">Authentic <br /> Parts Only</span>
              </div>
              
              {/* Carousel Controls (Minimalist) */}
              <div className="absolute top-1/2 -right-4 lg:-right-10 -translate-y-1/2 flex flex-col gap-2">
                <button onClick={nextSlide} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-gray-100">
                  <ChevronRight size={20} />
                </button>
                <button onClick={prevSlide} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-gray-900 transition-all cursor-pointer border border-gray-100">
                  <ChevronLeft size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Visual Bottom Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
              index === current ? 'w-12 bg-blue-600' : 'w-4 bg-gray-200 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={slides[current].highlight} 
      />
    </section>
  );
};


const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M12 3v3m0 12v3M5.3 5.3l2.1 2.1m9.2 9.2l2.1 2.1M3 12h3m12 0h3M5.3 18.7l2.1-2.1m9.2-9.2l2.1-2.1" />
  </svg>
);

export default Hero;
