import { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How long does a typical repair take?",
    answer: "Most repairs are completed within 45 to 90 minutes. Our technicians carry common spare parts to ensure same-day resolution for over 90% of our service calls."
  },
  {
    question: "Do you use original spare parts?",
    answer: "Yes, we exclusively use 100% genuine and original spare parts sourced directly from manufacturers like Samsung, LG, Bosch, and Whirlpool to ensure long-lasting performance."
  },
  {
    question: "Is there a warranty on your services?",
    answer: "Absolutely. We provide a 90-day comprehensive warranty on both the spare parts we replace and the labor performed during the repair session."
  },
  
  {
    question: "Do you provide emergency same-day service?",
    answer: "Yes, we offer priority emergency services. Book before 12:00 PM and we guarantee a technician visit by the evening of the same day."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/50 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase mb-4 shadow-sm">
            <Sparkles size={12} /> Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">
            Frequently Asked <span className="text-blue-600 italic">Questions.</span>
          </h2>
          <p className="text-gray-500 font-medium">Everything you need to know about our repair process and policies.</p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-[32px] border transition-all duration-500 overflow-hidden ${
                openIndex === idx 
                  ? 'bg-white border-blue-200 shadow-[0_20px_50px_rgba(0,0,0,0.04)]' 
                  : 'bg-gray-50 border-transparent hover:border-gray-200'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-8 py-7 flex items-center justify-between text-left cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    openIndex === idx ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100'
                  }`}>
                    {openIndex === idx ? <HelpCircle size={20} /> : <Plus size={20} className="group-hover:rotate-90 transition-transform" />}
                  </div>
                  <span className={`text-base md:text-lg font-black tracking-tight transition-colors duration-300 ${
                    openIndex === idx ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                {openIndex === idx && <Minus size={20} className="text-blue-600 hidden md:block" />}
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pt-0 ml-14">
                  <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-16 p-8 rounded-[40px] bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px]" />
           <div className="relative z-10 text-center md:text-left">
              <h4 className="text-xl font-black mb-1">Still have questions?</h4>
              <p className="text-gray-400 text-sm font-medium">Our support team is online and ready to help.</p>
           </div>
           <Link to="/contact" className="relative z-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              Contact Us
           </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
