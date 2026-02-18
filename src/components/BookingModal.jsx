import { X, Send, ShieldCheck, Clock, Award, User, Phone, MessageSquare, CheckCircle2, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const BookingModal = ({ isOpen, onClose, serviceTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      body: encode({ "form-name": "booking", ...data, serviceTitle })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
      {/* Backdrop with high-end glassmorphism */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity duration-700 animate-in fade-in"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full h-full md:h-auto md:max-w-5xl bg-white md:rounded-[48px] shadow-[0_50px_100px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 slide-in-from-bottom-12 duration-700">
        
        {/* Left Side: Brand & Benefits (The Premium Feel) */}
        <div className="hidden md:flex md:w-[40%] bg-gray-950 p-12 lg:p-16 flex-col justify-between relative overflow-hidden text-white">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -ml-32 -mb-32" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-[9px] font-black tracking-[0.3em] text-blue-400 uppercase mb-10">
              <SparkleIcon /> Priority Booking
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] mb-8 tracking-tighter">
              The Gold <br /> Standard of <br /> <span className="text-blue-500 italic">Repair.</span>
            </h2>
            
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
              Experience the difference of a white-glove repair service. We treat your home with absolute respect.
            </p>
          </div>

          <div className="relative z-10 space-y-8">
            <BenefitItem icon={<Clock size={18} />} title="Response" detail="Within 60 minutes" />
            <BenefitItem icon={<ShieldCheck size={18} />} title="Warranty" detail="90-Day Guarantee" />
            <BenefitItem icon={<Award size={18} />} title="Parts" detail="100% Original OEM" />
          </div>
        </div>

        {/* Right Side: The Form Interface */}
        <div className="flex-1 p-8 md:p-16 lg:p-20 relative bg-white">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-white hover:shadow-xl transition-all active:scale-90 z-20"
          >
            <X size={18} />
          </button>

          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-emerald-50 rounded-[32px] flex items-center justify-center text-emerald-500 mb-8 shadow-xl shadow-emerald-500/10">
                <CheckCircle2 size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Booking Confirmed!</h3>
              <p className="text-gray-500 font-medium max-w-xs mx-auto">
                A service coordinator will contact you shortly to finalize the technician's arrival time.
              </p>
            </div>
          ) : (
            <div className="max-w-md w-full mx-auto h-full flex flex-col justify-center">
              <div className="mb-12">
                <h3 className="text-3xl font-black text-gray-900 tracking-tighter mb-2">Request Service</h3>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  Specialized for <span className="text-blue-600 underline underline-offset-4">{serviceTitle}</span>
                </p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="booking" />
                <input type="hidden" name="serviceTitle" value={serviceTitle} />
                <div className="relative group">
                  <label className="absolute -top-2.5 left-4 px-2 bg-white text-[9px] font-black text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-blue-600">Full Name</label>
                  <div className="flex items-center gap-4 px-6 py-5 rounded-[24px] bg-gray-50 border border-gray-100 group-focus-within:border-blue-500 group-focus-within:bg-white transition-all shadow-inner group-focus-within:shadow-xl group-focus-within:shadow-blue-500/5">
                    <User size={18} className="text-gray-300 group-focus-within:text-blue-600 transition-colors" />
                    <input 
                      required
                      name="fullName"
                      type="text" 
                      className="flex-1 bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-300" 
                      placeholder="e.g. Rahul Sharma" 
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="absolute -top-2.5 left-4 px-2 bg-white text-[9px] font-black text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-blue-600">Mobile Number</label>
                  <div className="flex items-center gap-4 px-6 py-5 rounded-[24px] bg-gray-50 border border-gray-100 group-focus-within:border-blue-500 group-focus-within:bg-white transition-all shadow-inner group-focus-within:shadow-xl group-focus-within:shadow-blue-500/5">
                    <Phone size={18} className="text-gray-300 group-focus-within:text-blue-600 transition-colors" />
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      className="flex-1 bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-300" 
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="absolute -top-2.5 left-4 px-2 bg-white text-[9px] font-black text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-blue-600">Email Address</label>
                  <div className="flex items-center gap-4 px-6 py-5 rounded-[24px] bg-gray-50 border border-gray-100 group-focus-within:border-blue-500 group-focus-within:bg-white transition-all shadow-inner group-focus-within:shadow-xl group-focus-within:shadow-blue-500/5">
                    <Mail size={18} className="text-gray-300 group-focus-within:text-blue-600 transition-colors" />
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="flex-1 bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-300" 
                      placeholder="e.g. rahul@example.com" 
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="absolute -top-2.5 left-4 px-2 bg-white text-[9px] font-black text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-blue-600">Describe Issue</label>
                  <div className="flex items-start gap-4 px-6 py-5 rounded-[24px] bg-gray-50 border border-gray-100 group-focus-within:border-blue-500 group-focus-within:bg-white transition-all shadow-inner group-focus-within:shadow-xl group-focus-within:shadow-blue-500/5">
                    <MessageSquare size={18} className="text-gray-300 mt-1 group-focus-within:text-blue-600 transition-colors" />
                    <textarea 
                      required
                      name="issue"
                      rows="3" 
                      className="flex-1 bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-300 resize-none" 
                      placeholder="Explain the problem briefly..."
                    ></textarea>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-6 bg-gray-900 text-white rounded-[28px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-gray-900/20 hover:bg-blue-600 transition-all active:scale-95 flex items-center justify-center gap-4 group/btn disabled:opacity-50 disabled:scale-100 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Confirm Request <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, title, detail }) => (
  <div className="flex items-center gap-5">
    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 shadow-lg">
      {icon}
    </div>
    <div>
      <h5 className="text-[10px] font-black text-blue-500/60 uppercase tracking-widest leading-none mb-1">{title}</h5>
      <p className="text-xs font-bold text-gray-300 uppercase">{detail}</p>
    </div>
  </div>
);

const SparkleIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3m0 12v3M5.3 5.3l2.1 2.1m9.2 9.2l2.1 2.1M3 12h3m12 0h3M5.3 18.7l2.1-2.1m9.2-9.2l2.1-2.1" />
  </svg>
);

export default BookingModal;
