import { Wrench, Mail, MapPin, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", email })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Latest Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
     
    ],
    services: [
      { name: 'Washing Machine', path: '/service/washing-machine' },
      { name: 'Refrigerator', path: '/service/refrigerator' },
      { name: 'Air Conditioner', path: '/service/air-conditioner' },
      { name: 'Television', path: '/service/television' },
      { name: 'Water Purifier', path: '/service/water-purifier' },
      { name: 'Kitchen Chimney', path: '/service/kitchen-chimney' },
    ],
    support: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Refund Policy', path: '/refund-policy' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
      { name: 'Disclaimer', path: '/disclaimer' },
    ]
  };

  return (
    <footer className="relative bg-gray-50/50 pt-24 pb-12 overflow-hidden border-t border-gray-100">
      {/* Aesthetic Background Accents - Very subtle for light theme */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/80 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand & Newsletter Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                <Wrench className="text-white" size={24} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
                  APPLIANCE<span className="text-blue-600">NERDY</span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-blue-500/80 uppercase">Premium Repair Services</span>
              </div>
            </Link>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm mb-10">
              Your trusted partner for high-end appliance repairs. Delivering precision and reliability to your doorstep since 2026.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200 rounded-[48px] p-10 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 blur-[80px] group-hover:bg-blue-100 transition-all duration-700" />
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                      <Sparkles size={16} className="text-blue-600" />
                      <h3 className="text-gray-900 text-2xl font-black tracking-tight">Stay in the loop.</h3>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Get the latest repair tips and exclusive offers.</p>
                  </div>
                  <form onSubmit={handleSubscribe} className="w-full md:w-auto">
                    <input type="hidden" name="form-name" value="newsletter" />
                    <div className="flex p-1.5 bg-gray-50 border border-gray-100 rounded-2xl relative">
                      <input 
                        required
                        name="email"
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email" 
                        className="bg-transparent px-4 py-3 text-gray-900 text-sm font-bold outline-none flex-grow min-w-[150px] placeholder:text-gray-400"
                      />
                      <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-blue-600/20 disabled:opacity-50"
                      >
                        {isSubmitting ? '...' : 'Join'}
                      </button>

                      {/* Inline Success Message */}
                      {isSuccess && (
                        <div className="absolute -bottom-10 left-0 right-0 text-center md:text-left flex items-center gap-2 text-emerald-600 animate-in fade-in slide-in-from-top-2 duration-300">
                          <CheckCircle2 size={14} />
                          <span className="text-[10px] font-black uppercase tracking-widest">Subscribed Successfully!</span>
                        </div>
                      )}
                    </div>
                  </form>
               </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 mb-20 border-b border-gray-100 pb-20">
          <div>
            <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.3em] mb-8">The Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors flex items-center gap-1 group">
                    {link.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.3em] mb-8">Popular Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.3em] mb-8">Our Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.3em] mb-8">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Send Email</span>
                  <a href="mailto:support@appliancenerdy.shop" className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors tracking-tight">support@appliancenerdy.shop</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Visit Us</span>
                  <span className="text-sm font-bold text-gray-900 tracking-tight">128 E Pacific Coast Hwy, Long Beach, CA 90813, USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Badges */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full shadow-sm">
               <ShieldCheck size={14} className="text-emerald-600" />
               <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
               <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Premium Service Certified</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.1em] mb-1">
              &copy; {currentYear} APPLIANCENERDY. Built with Precision.
            </p>
            <p className="text-[10px] text-gray-300 font-medium">
              Made with passion for perfect appliance maintenance.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
