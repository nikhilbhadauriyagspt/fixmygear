import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="pt-12 bg-white min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/20 blur-[120px] rounded-full -z-10" />
      
      {/* Redesigned Contact Section Integration */}
      <ContactSection />

      {/* Brand Promise Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="mt-32 p-12 lg:p-20 rounded-[64px] bg-gray-950 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-blue-600/20" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black tracking-[0.3em] text-blue-400 uppercase mb-8">
                <Shield size={12} /> The APPLIANCENERDY Guarantee
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-8">
                Your Trust is Our <br /><span className="text-blue-500 italic">Greatest Asset.</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md">
                We guarantee that every interaction with our team will be professional, transparent, and focused on solving your problem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
                <Clock className="text-blue-500 mb-4" size={24} />
                <h4 className="text-white font-black text-sm uppercase tracking-tight mb-1">On-Time</h4>
                <p className="text-gray-500 text-[10px] font-bold">Punctuality is our priority</p>
              </div>
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
                <Shield className="text-blue-500 mb-4" size={24} />
                <h4 className="text-white font-black text-sm uppercase tracking-tight mb-1">Secure</h4>
                <p className="text-gray-500 text-[10px] font-bold">Insured & Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
