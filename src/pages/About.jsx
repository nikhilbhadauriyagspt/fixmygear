import { ShieldCheck, Clock, Award, Users, CheckCircle2, ArrowRight, ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const About = () => {
  const [showProcess, setShowProcess] = useState(false);

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
              <div className="rounded-[48px] overflow-hidden shadow-2xl border-8 border-gray-50 bg-gray-100">
                <img 
                  src="/about-main.jpg" 
                  alt="Our Team" 
                  className="w-full h-auto object-cover min-h-[400px] lg:min-h-[500px]" 
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
              <button 
                onClick={() => {
                  setShowProcess(true);
                  setTimeout(() => {
                    document.getElementById('detailed-process')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group inline-flex items-center gap-4 bg-blue-50 text-blue-600 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 border border-blue-100/50 shadow-sm cursor-pointer"
              >
                Learn More About Our Process <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Process Section - Animated Entrance */}
      <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${showProcess ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <section id="detailed-process" className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">The Journey</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-6">Our Repair Journey.</h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-medium">A step-by-step breakdown of how we ensure your appliances receive the highest level of care.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <ProcessAccordion 
                  step="01" 
                  title="Initial Diagnostics" 
                  desc="Our technicians use precision tools to identify the root cause of the issue, ensuring we don't just fix symptoms but solve the real problem."
                  isOpen={true}
                />
                <ProcessAccordion 
                  step="02" 
                  title="Genuine Parts Sourcing" 
                  desc="We exclusively use original manufacturer parts. This stage ensures that every component replaced meets the exact specifications of your appliance."
                />
                <ProcessAccordion 
                  step="03" 
                  title="Precision Repair" 
                  desc="The actual repair is performed in a controlled manner, following strict safety protocols and technical guidelines for your specific brand."
                />
                <ProcessAccordion 
                  step="04" 
                  title="Quality Assurance" 
                  desc="Before we leave, we perform a multi-point test to verify that the appliance is working at peak efficiency and is safe for your family."
                />
              </div>
              <div className="relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2">
                  <img src="/about-child1.jpg" alt="Process" className="w-full h-[500px] object-cover" />
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
                </div>
                {/* Floating Stat */}
                <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 animate-bounce-slow">
                  <div className="text-3xl font-black text-blue-600 mb-1">100%</div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Satisfaction <br /> Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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

const ProcessAccordion = ({ step, title, desc, isOpen: initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className={`p-6 rounded-3xl border transition-all duration-500 ${isOpen ? 'bg-white border-blue-100 shadow-xl' : 'bg-gray-100/50 border-transparent hover:bg-gray-100'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <span className={`text-sm font-black transition-colors duration-500 ${isOpen ? 'text-blue-600' : 'text-gray-400'}`}>{step}</span>
          <h3 className="text-lg font-black text-gray-900 tracking-tight">{title}</h3>
        </div>
        <ChevronDown size={20} className={`text-gray-400 transition-transform duration-500 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
        <div className="overflow-hidden">
          <p className="text-gray-500 text-sm font-medium leading-relaxed border-l-2 border-blue-50 pl-4">
            {desc}
          </p>
        </div>
      </div>
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
