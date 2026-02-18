import { ShieldCheck, BadgeDollarSign, CalendarDays, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutOrganization = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Visual - Aesthetic Bento Image */}
          <div className="lg:col-span-5 relative order-first min-h-[400px] lg:min-h-0">
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-3xl border-8 border-white group/img h-full">
               <img 
                 src="/about.jpg" 
                 alt="Repair Professional" 
                 className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none" />
            </div>
            
            {/* Aesthetic Floating Badge */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-[32px] p-6 text-white flex flex-col justify-center items-center text-center shadow-2xl animate-bounce-slow">
               <span className="text-2xl font-black leading-none mb-1">9+</span>
               <span className="text-[8px] font-black uppercase tracking-widest opacity-80">Years of Experience</span>
            </div>
            
            {/* Abstract Background Shape */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Content - Information */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/50 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase mb-8 shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              Our Organization
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-8">
              Providing Professional <br />
              <span className="text-blue-600">Appliance Solutions.</span>
            </h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                At <span className="text-gray-900 font-black tracking-tight uppercase italic">APPLIANCENERDY</span>, we pride ourselves on being a leading provider of high-quality appliance repair and maintenance services. Our mission is to provide fast, reliable, and affordable technical solutions.
              </p>
              <p className="text-gray-400 text-base font-medium leading-relaxed">
                We focus on technical excellence, using advanced diagnostic tools and genuine parts to ensure every repair is performed to the highest standards. Our team of certified technicians is dedicated to extending the life of your appliances.
              </p>
            </div>

            {/* Features Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-100 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-sm font-black text-gray-900 mb-2 uppercase tracking-tight">Trained Techs</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-tight">Experienced in high-end appliance maintenance.</p>
              </div>
              
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-100 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <BadgeDollarSign size={20} />
                </div>
                <h4 className="text-sm font-black text-gray-900 mb-2 uppercase tracking-tight">Upfront Pricing</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-tight">Detailed cost estimates provided before work begins.</p>
              </div>

              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-100 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <CalendarDays size={20} />
                </div>
                <h4 className="text-sm font-black text-gray-900 mb-2 uppercase tracking-tight">Scheduled Support</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-tight">Service appointments based on your availability.</p>
              </div>
            </div>

            <Link to="/contact" className="group inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-gray-900/10 active:scale-95">
              Request a Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOrganization;
