import { Mail, Send, ArrowRight, Sparkles, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      e.target.reset();
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Success Toast */}
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
        <div className="bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <CheckCircle2 size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest">Message Sent!</span>
            <span className="text-[10px] font-medium text-gray-400">Our experts will contact you soon.</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/50 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase mb-4 shadow-sm">
            <Sparkles size={12} /> Communication Hub
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6 leading-tight">
            Get in <span className="text-blue-600 italic">Touch.</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Have a question or need assistance? Our team is standing by to provide you with the support you deserve.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          
          {/* Contact Details Column */}
          <div className="lg:w-1/3 space-y-8">
            <div className="p-8 rounded-[40px] bg-gray-50 border border-gray-100 group transition-all duration-500 hover:bg-white hover:shadow-2xl">
               <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white mb-6 shadow-xl shadow-gray-900/20 group-hover:scale-110 transition-transform">
                 <Mail size={24} />
               </div>
               <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">Digital Mail</h3>
               <p className="text-gray-500 text-sm font-bold mb-4">Expect our response within 2 business hours.</p>
               <a href="mailto:support@appliancenerdy.shop" className="text-xl font-black text-blue-600 hover:text-blue-700 transition-colors">support@appliancenerdy.shop</a>
            </div>

            <div className="p-8 rounded-[40px] bg-gray-50 border border-gray-100 group transition-all duration-500 hover:bg-white hover:shadow-2xl">
               <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white mb-6 shadow-xl shadow-emerald-600/20 group-hover:scale-110 transition-transform">
                 <MapPin size={24} />
               </div>
               <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">Main HQ</h3>
               <p className="text-gray-500 text-sm font-bold mb-4">Visit our central diagnostic facility.</p>
               <span className="text-sm font-black text-gray-900 leading-tight block">128 E Pacific Coast Hwy, Long Beach,<br />CA 90813, USA</span>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:w-2/3 bg-white border border-gray-100 rounded-[56px] p-8 lg:p-16 shadow-[0_32px_100px_rgba(0,0,0,0.05)] relative overflow-hidden group">

            <form className="space-y-10" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="relative group/input">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block group-focus-within/input:text-blue-600 transition-colors">Full Name</label>
                  <input 
                    required
                    name="fullName"
                    type="text" 
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-bold text-gray-900 shadow-inner" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="relative group/input">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block group-focus-within/input:text-blue-600 transition-colors">Email Address</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-bold text-gray-900 shadow-inner" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div className="relative group/input">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block group-focus-within/input:text-blue-600 transition-colors">Mobile Number</label>
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-bold text-gray-900 shadow-inner" 
                    placeholder="+91 XXXXX XXXXX" 
                  />
                </div>
              </div>

              <div className="relative group/input">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block group-focus-within/input:text-blue-600 transition-colors">Subject</label>
                <input 
                  required
                  name="subject"
                  type="text" 
                  className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-bold text-gray-900 shadow-inner" 
                  placeholder="How can we help?" 
                />
              </div>

              <div className="relative group/input">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block group-focus-within/input:text-blue-600 transition-colors">Message</label>
                <textarea 
                  required
                  name="message"
                  rows="4" 
                  className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-bold text-gray-900 shadow-inner resize-none" 
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Encrypted Connection</span>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto py-5 px-12 bg-gray-900 hover:bg-blue-600 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-2xl shadow-gray-900/20 active:scale-95 flex items-center justify-center gap-4 group/send cursor-pointer disabled:opacity-50 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={16} className="group-hover/send:translate-x-1 group-hover/send:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
