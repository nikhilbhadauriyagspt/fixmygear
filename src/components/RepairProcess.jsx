import { Search, CalendarCheck, Wrench, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

const RepairProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      id: "01",
      title: "Discovery",
      label: "Select Service",
      desc: "Browse our premium repair catalog and identify your specific appliance needs.",
      icon: <Search size={22} />,
      color: "blue"
    },
    {
      id: "02",
      title: "Schedule",
      label: "Book Expert",
      desc: "Our AI system matches you with the best available certified technician in your area.",
      icon: <CalendarCheck size={22} />,
      color: "indigo"
    },
    {
      id: "03",
      title: "Execution",
      label: "Repair Done",
      desc: "The technician arrives with genuine parts to restore your appliance's peak performance.",
      icon: <Wrench size={22} />,
      color: "emerald"
    },
    {
      id: "04",
      title: "Guarantee",
      label: "Peace of Mind",
      desc: "Receive a verified 90-day warranty certificate instantly on your mobile device.",
      icon: <ShieldCheck size={22} />,
      color: "blue"
    }
  ];

  return (
    <section id="repair-process" className="py-32 bg-white relative overflow-hidden">
      {/* Aesthetic Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/30 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Aesthetic Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/50 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase mb-6 shadow-sm">
              <Sparkles size={12} /> The Workflow
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9]">
              How We <br /> <span className="text-blue-600 italic">Restore</span> Order.
            </h2>
          </div>
          <p className="text-gray-400 font-medium max-w-xs text-sm md:text-base border-l-2 border-blue-100 pl-6 mb-2">
            A seamless, technology-driven journey from breakdown to guaranteed performance.
          </p>
        </div>

        {/* Steps Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle Connection Line (Desktop) */}
          <div className="absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent hidden lg:block" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Large Aesthetic Background Number */}
              <span className="absolute -top-10 left-0 text-[120px] font-black text-gray-50 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none italic select-none">
                {step.id}
              </span>

              <div className="relative z-10 p-8 rounded-[40px] bg-white border border-gray-100 hover:border-blue-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] h-full flex flex-col">
                
                {/* Icon Capsule */}
                <div className={`w-14 h-14 rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex items-center justify-center mb-10 shadow-sm border border-transparent group-hover:border-blue-400 group-hover:scale-110 group-hover:rotate-3`}>
                  {step.icon}
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{step.title}</span>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">{step.label}</h3>
                </div>

                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                  {step.desc}
                </p>

                {/* Aesthetic Detail */}
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Step {step.id}</span>
                   <ArrowRight size={16} className="text-blue-200 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Section */}
        <div className="mt-24 text-center">
           <button 
            onClick={() => setIsModalOpen(true)}
            className="relative group px-12 py-6 bg-gray-900 text-white rounded-3xl font-black text-xs uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-blue-600 shadow-2xl active:scale-95 cursor-pointer"
           >
              <span className="relative z-10 flex items-center gap-4">
                Initialize Booking <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
           </button>
           <p className="mt-8 text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
             <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Same day service available in your area
           </p>
        </div>

      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Full Diagnostic" 
      />
    </section>
  );
};

export default RepairProcess;
