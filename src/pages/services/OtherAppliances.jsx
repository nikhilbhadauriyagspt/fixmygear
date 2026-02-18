import ServiceLayout from '../../components/ServiceLayout';
import { Cpu } from 'lucide-react';

const OtherAppliancesPage = () => (
  <ServiceLayout 
    title="Other Appliances"
    desc="Mixers, irons & more"
    longDesc="From high-performance mixers to precision steam irons, we provide expert repair services for a wide range of small household appliances. Our technicians ensure your everyday gear stays in perfect working condition."
    icon={<Cpu size={24} />}
    image="/others.jpg"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Small Appliance Expertise</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            We specialize in repairing various household appliances that make your daily life easier. Our technical team is equipped with the right tools and knowledge to diagnose and fix issues in mixers, grinders, irons, vacuum cleaners, and more.
          </p>
        </section>

        <section className="bg-gray-900 p-10 rounded-[40px] text-white">
          <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">What We Service:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-blue-500 font-black uppercase text-sm">Kitchen Gadgets</h4>
              <ul className="space-y-2 text-gray-400 font-bold text-sm">
                <li>• Mixers and Grinders</li>
                <li>• Toasters and Blenders</li>
                <li>• Food Processors</li>
                <li>• Juicers and Choppers</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-blue-500 font-black uppercase text-sm">Home Utilities</h4>
              <ul className="space-y-2 text-gray-400 font-bold text-sm">
                <li>• Steam and Dry Irons</li>
                <li>• Vacuum Cleaners</li>
                <li>• Hair Dryers and Stylers</li>
                <li>• Air Purifiers</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Precision Technical Care</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-8">
            Even small appliances require professional care to ensure safety and longevity. We use high-quality components for all replacements and follow strict testing protocols to guarantee that your appliances are safe for use.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Multipurpose", val: "Repairs" },
              { label: "Quick", val: "Turnaround" },
              { label: "Genuine", val: "Components" },
              { label: "Safety", val: "Tested" }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-blue-600 font-black text-xs uppercase mb-1">{item.label}</div>
                <div className="text-gray-900 font-black text-[10px] uppercase tracking-widest">{item.val}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    }
  />
);

export default OtherAppliancesPage;
