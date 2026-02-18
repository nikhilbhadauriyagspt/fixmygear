import { ShieldCheck, Clock, Award, ArrowLeft, Sparkles, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookingModal from './BookingModal';

const ServiceLayout = ({ title, desc, longDesc, icon, image, extraContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest mb-12 hover:text-blue-600 transition-colors">
          <ArrowLeft size={14} /> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-8">
            <div className="relative mb-12 group">
              <div className="rounded-[48px] p-4 bg-gray-50 border border-gray-100 shadow-2xl transition-all duration-500 group-hover:bg-blue-50 group-hover:border-blue-100">
                <div className="rounded-[36px] overflow-hidden aspect-video sm:aspect-auto">
                  <img loading="eager" 
                    src={image} 
                    alt={title} 
                    className="w-full h-full lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-4 rounded-[36px] bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-[32px] flex items-center justify-center text-white shadow-2xl animate-bounce-slow z-20">
                {icon}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase mb-8 shadow-sm">
              <Sparkles size={12} /> Expert Repair Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8">
              {title} <br />
              <span className="text-blue-600 italic">Specialists.</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">
                {longDesc || desc}
              </p>

              {extraContent}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div className="p-8 rounded-[32px] bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6">
                    <AlertCircle size={24} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">Common Issues We Fix</h3>
                  <ul className="space-y-4">
                    {["Performance Drops", "Unusual Noises", "Power Failures", "Leaking Components"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-500 font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-[32px] bg-gray-900 text-white">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white mb-6">
                    <Wrench size={24} />
                  </div>
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Our Repair Process</h3>
                  <ul className="space-y-4">
                    {["Deep Diagnostics", "Genuine Parts Replace", "Safety Testing", "Post-Repair Cleaning"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400 font-bold">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-32">
            <div className="bg-gray-50 border border-gray-100 rounded-[40px] p-8 shadow-sm">
              <h4 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-8">Why Choose Us</h4>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm border border-gray-100">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 uppercase text-sm mb-1">Fast Response</h5>
                    <p className="text-gray-500 text-xs font-bold">Technician reaches in 60 mins</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm border border-gray-100">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 uppercase text-sm mb-1">Service Warranty</h5>
                    <p className="text-gray-500 text-xs font-bold">90 days peace of mind</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm border border-gray-100">
                    <Award size={24} />
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 uppercase text-sm mb-1">Genuine Parts</h5>
                    <p className="text-gray-500 text-xs font-bold">100% original replacements</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-xs font-bold text-gray-400 leading-relaxed">
                  Need immediate assistance? Our helpline is available 24/7 for emergency repairs and consultations.
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-6 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={title} 
      />
    </div>
  );
};

export default ServiceLayout;


