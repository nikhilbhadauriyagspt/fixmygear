import { ShieldCheck, Clock, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 pb-0 bg-white min-h-screen">
      
      {/* 1. Hero Section - Clean & Direct */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">About APPLIANCENERDY</span>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                Your Trusted Partner in <br />
                <span className="text-blue-600">Appliance Care.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
                Founded in 2026, we have been dedicated to providing top-tier appliance repair services. We believe in quality, transparency, and the long-term reliability of your home equipment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg">
                  Get in Touch
                </Link>
                <div className="flex items-center gap-2 px-6 py-4 bg-gray-50 rounded-xl">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Certified Technicians</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[32px] overflow-hidden shadow-2xl border-8 border-gray-50">
                <img 
                  src="/about-main.jpg" 
                  alt="Our Team" 
                  className="w-full h-full object-cover aspect-[4/3]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Values - Simple Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">The Values We Stand By</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our commitment to excellence is reflected in every repair we perform and every client we serve.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<ShieldCheck className="text-blue-600" />}
              title="Guaranteed Quality"
              desc="We use only 100% genuine parts sourced directly from manufacturers to ensure longevity."
            />
            <ValueCard 
              icon={<Clock className="text-blue-600" />}
              title="Timely Response"
              desc="We value your time. Our technicians aim to reach your doorstep within 60 minutes of booking."
            />
            <ValueCard 
              icon={<Award className="text-blue-600" />}
              title="Expert Knowledge"
              desc="Our team undergoes continuous training to stay updated with the latest smart home technologies."
            />
          </div>
        </div>
      </section>

      {/* 3. Our Commitment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 border-4 border-gray-50">
                  <img src="/about-child1.jpg" className="w-full h-full object-cover" alt="Detail" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 mt-8 border-4 border-gray-50">
                  <img src="/about-child2.jpg" className="w-full h-full object-cover" alt="Detail" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">Our Commitment to <br />Technical Excellence.</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                At APPLIANCENERDY, we understand that a broken appliance is more than just a minor inconvenience. It's a disruption to your daily routine. That's why our process is designed to be as seamless and efficient as possible.
              </p>
              <ul className="space-y-4 mb-10">
                {['Direct access to original OEM parts', 'Transparent upfront pricing model', '90-Day comprehensive service warranty', 'Fully background-checked technicians'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    <span className="text-gray-700 font-bold text-sm uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/#repair-process" 
                className="group inline-flex items-center gap-4 bg-blue-50 text-blue-600 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 border border-blue-100/50 shadow-sm"
              >
                Learn More About Our Process <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Call to Action */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">Need a Professional Fix?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 font-medium">Join thousands of happy customers who trust APPLIANCENERDY for their home appliance maintenance and repairs.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
      {icon}
    </div>
    <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-gray-500 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);

export default About;
