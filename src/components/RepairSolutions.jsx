import { 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  { 
    id: "washing-machine",
    title: "Washing Machine", 
    desc: "Drum & motor repair", 
    icon: <WashingMachine size={24} />, 
    image: "/washing.png" 
  },
  { 
    id: "refrigerator",
    title: "Refrigerator", 
    desc: "Cooling & compressor fix", 
    icon: <Refrigerator size={24} />, 
    image: "/refrigerator.png" 
  },
  { 
    id: "dishwasher",
    title: "Dishwasher", 
    desc: "Pump & leakage repair", 
    icon: <Waves size={24} />, 
    image: "/dish.png" 
  },
  { 
    id: "television",
    title: "Television", 
    desc: "Display & audio fix", 
    icon: <Monitor size={24} />, 
    image: "/tv.jpg" 
  },
    { 
      id: "coffee-maker", 
      title: "Coffee Maker", 
      desc: "Heater & pump service", 
      icon: <Coffee size={24} />, 
      image: "/coffee.jpg" 
    },
  
    { 
  
      id: "air-conditioner", 
  
      title: "Air Conditioner", 
  
      desc: "Gas refilling & PCB fix", 
  
      icon: <Snowflake size={24} />, 
  
      image: "/air.jpg" 
  
    },
  
  
    { 
  
  
      id: "microwave-oven", 
  
  
      title: "Microwave Oven", 
  
  
      desc: "Magnetron & panel fix", 
  
  
      icon: <Microwave size={24} />, 
  
  
      image: "/micro.jpg" 
  
  
    },
  
  
  
    { 
  
  
  
      id: "oven-stove", 
  
  
  
      title: "Oven & Gas Stove", 
  
  
  
      desc: "Burner & ignition repair", 
  
  
  
      icon: <Flame size={24} />, 
  
  
  
      image: "/Ove.jpg" 
  
  
  
    },
  
  
  
  
    { 
  
  
  
  
      id: "water-purifier", 
  
  
  
  
      title: "Water Purifier", 
  
  
  
  
      desc: "RO filter replacement", 
  
  
  
  
      icon: <Droplets size={24} />, 
  
  
  
  
      image: "/water.jpg" 
  
  
  
  
    },
  
  
  
  
  
    { 
  
  
  
  
  
      id: "clothes-dryer", 
  
  
  
  
  
      title: "Clothes Dryer", 
  
  
  
  
  
      desc: "Heating & belt repair", 
  
  
  
  
  
      icon: <Wind size={24} />, 
  
  
  
  
  
      image: "/clothes.jpg" 
  
  
  
  
  
    },
  
  
  
  
  
  
    { 
  
  
  
  
  
  
      id: "kitchen-chimney", 
  
  
  
  
  
  
      title: "Kitchen Chimney", 
  
  
  
  
  
  
      desc: "Deep cleaning & motor fix", 
  
  
  
  
  
  
      icon: <Fan size={24} />, 
  
  
  
  
  
  
      image: "/Kitchen.jpg" 
  
  
  
  
  
  
    },
  
  
  
  
  
  
  
  { 
    id: "other-appliances",
    title: "Other Appliances", 
    desc: "Mixers, irons & more", 
    icon: <Cpu size={24} />, 
    image: "/others.jpg" 
  }
];

const RepairSolutions = () => {
  return (
    <section className="py-24 bg-gray-50/50" id="repair-solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/50 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase mb-4 shadow-sm"><Sparkles size={12} /> Service Catalog</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">Expert Repair <span className="text-blue-600 italic">Solutions.</span></h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-sm md:text-base">Professional maintenance for all your household appliances using genuine parts and expert techniques.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {solutions.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
              <div className="h-44 overflow-hidden relative">
                <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-2 rounded-xl text-blue-600 shadow-sm border border-white">{item.icon}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-black text-gray-900 mb-1 leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">{item.desc}</p>
                <div className="mt-auto space-y-4">
                   <Link to={`/service/${item.id}`} className="flex items-center justify-end gap-2 text-gray-400 hover:text-blue-600 font-black text-[9px] uppercase tracking-[0.2em] transition-all group/link">
                      View Details <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairSolutions;
