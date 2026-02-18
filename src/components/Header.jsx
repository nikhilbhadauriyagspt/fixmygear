import { useState, useEffect } from 'react';
import { 
  Wrench, ChevronDown, Menu, X, 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight, Sparkles
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const services = [
    { id: "washing-machine", title: "Washing Machine", desc: "Drum & motor repair", icon: <WashingMachine size={18} /> },
    { id: "refrigerator", title: "Refrigerator", desc: "Cooling & compressor fix", icon: <Refrigerator size={18} /> },
    { id: "dishwasher", title: "Dishwasher", desc: "Pump & leakage repair", icon: <Waves size={18} /> },
    { id: "television", title: "Television", desc: "Display & audio fix", icon: <Monitor size={18} /> },
    { id: "coffee-maker", title: "Coffee Maker", desc: "Heater & pump service", icon: <Coffee size={18} /> },
    { id: "air-conditioner", title: "Air Conditioner", desc: "Gas refilling & PCB fix", icon: <Snowflake size={18} /> },
    { id: "microwave-oven", title: "Microwave Oven", desc: "Magnetron & panel fix", icon: <Microwave size={18} /> },
    { id: "oven-stove", title: "Oven & Gas Stove", desc: "Burner & ignition repair", icon: <Flame size={18} /> },
    { id: "water-purifier", title: "Water Purifier", desc: "RO filter replacement", icon: <Droplets size={18} /> },
    { id: "clothes-dryer", title: "Clothes Dryer", desc: "Heating & belt repair", icon: <Wind size={18} /> },
    { id: "kitchen-chimney", title: "Kitchen Chimney", desc: "Deep cleaning & motor fix", icon: <Fan size={18} /> },
    { id: "other-appliances", title: "Other Appliances", desc: "Mixers, irons & more", icon: <Cpu size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-300 ${
      isActive 
        ? 'text-blue-600 bg-blue-50/80 shadow-sm border border-blue-100/50' 
        : 'text-gray-500 hover:text-blue-600 hover:bg-white/50'
    }`;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-4 pl-6 pr-3 py-2.5 rounded-[24px] transition-all duration-500 border ${
          isScrolled ? 'bg-white/70 backdrop-blur-xl border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)]' : 'bg-white/30 backdrop-blur-md border-white/20 shadow-sm'
        }`}>
          <div className="flex items-center gap-6 lg:gap-8 flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-500/20"><Wrench className="text-white" size={18} /></div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-tighter text-gray-900 uppercase">APPLIANCE<span className="text-blue-600">NERDY</span></span>
                <span className="text-[7px] font-black tracking-[0.2em] text-blue-500/80 uppercase">Premium Repair Services</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <nav className="hidden lg:flex items-center gap-1 bg-white/40 border border-white/60 px-1.5 py-1 rounded-full shadow-inner">
              <Link to="/" className={getLinkClass('/')}>Home</Link>
              <Link to="/about" className={getLinkClass('/about')}>About</Link>
              <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <button className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${isDropdownOpen ? 'text-blue-600 bg-white/50' : 'text-gray-500 hover:text-blue-600 hover:bg-white/50'}`}>Services<ChevronDown size={12} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} /></button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  <div className="bg-white/95 backdrop-blur-2xl rounded-[40px] shadow-[0_32px_64px_rgba(0,0,0,0.15)] border border-white p-2 w-[850px] overflow-hidden flex">
                    <div className="flex-1 p-6 border-r border-gray-100/50">
                      <div className="flex items-center gap-2 mb-6 px-2"><Sparkles size={16} className="text-blue-600" /><h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">Premium Categories</h3></div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {services.map((item, idx) => (
                          <Link key={idx} to={`/service/${item.id}`} onClick={() => setIsDropdownOpen(false)} className="group/item flex items-center gap-3 p-3 rounded-2xl hover:bg-blue-50/60 transition-all border border-transparent hover:border-blue-100/50">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover/item:bg-white flex items-center justify-center text-blue-600 transition-all shadow-sm border border-transparent group-hover/item:border-blue-100">{item.icon}</div>
                            <div className="flex flex-col leading-tight"><span className="text-sm font-bold text-gray-800 group-hover/item:text-blue-600 transition-colors">{item.title}</span><span className="text-[10px] font-medium text-gray-400 group-hover/item:text-gray-500">{item.desc}</span></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="w-[300px] bg-gray-50/50 p-6 flex flex-col">
                      <div className="relative flex-grow rounded-[24px] overflow-hidden group/img mb-6 shadow-lg border border-white"><img loading="lazy" src="/about-child1.jpg" alt="Featured" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" /><div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" /><div className="absolute bottom-4 left-4 right-4"><p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Expert Repair</p><h4 className="text-white font-bold text-sm">Certified Technicians at Your Doorstep</h4></div></div>
                      <button 
                        onClick={() => {
                          setIsModalOpen(true);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-gray-900/20 active:scale-95 flex items-center justify-center gap-2 group/btn cursor-pointer"
                      >
                        Book Now<ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/blog" className={getLinkClass('/blog')}>Blog</Link><Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
            </nav>

            <div className="flex items-center gap-2 relative z-[70]"><button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-2xl transition-all duration-300 border ${isMenuOpen ? 'bg-gray-900 text-white border-gray-900' : 'bg-white/50 text-gray-900 border-white'}`}>{isMenuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
          </div>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-x-0 top-[80px] px-4 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] border border-white shadow-2xl p-6 max-h-[75vh] overflow-y-auto">
          <div className="flex flex-col gap-1">{navLinks.map((link) => (<Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className={`block px-5 py-4 text-sm font-black rounded-2xl transition-all ${location.pathname === link.path ? 'text-blue-600 bg-blue-50 border border-blue-100/50 shadow-sm' : 'text-gray-900 hover:bg-gray-50'}`}>{link.name.toUpperCase()}</Link>))}</div>
          <div className="px-4 py-2 text-[10px] font-black text-blue-600 uppercase tracking-widest border-t border-gray-50 mt-4 pt-4">OUR SERVICES</div>
          <div className="grid grid-cols-1 gap-1">{services.map((item, idx) => (<Link key={idx} to={`/service/${item.id}`} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 active:bg-blue-50"><span className="text-blue-600">{item.icon}</span><div className="flex flex-col"><span className="text-sm font-bold text-gray-900">{item.title}</span><span className="text-[10px] text-gray-400">{item.desc}</span></div></Link>))}</div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Appliance Repair" 
      />
    </header>
  );
};

export default Header;
