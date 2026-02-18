import { WashingMachine, Refrigerator, Snowflake, Microwave, Monitor, Waves, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

const services = [
// ... (same as before)
];

const ServiceSection = () => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '' });

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Professional <span className="text-blue-600">Repairs.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
            >
              <div className="h-44 overflow-hidden relative">
                <img loading="lazy" 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-sm border border-gray-100">
                  {service.icon}
                </div>
                <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold">
                  From {service.price}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-black text-gray-900 mb-1 leading-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm font-medium mb-5 line-clamp-1">
                  {service.description}
                </p>
                
                <button 
                  onClick={() => setModalState({ isOpen: true, title: service.title })}
                  className="mt-auto w-full py-3 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white font-bold rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Now
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState({ isOpen: false, title: '' })} 
        serviceTitle={modalState.title} 
      />
    </section>
  );
};


export default ServiceSection;
