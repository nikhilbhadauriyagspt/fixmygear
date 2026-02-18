import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Policies
import PrivacyPolicy from './policies/PrivacyPolicy';
import TermsOfService from './policies/TermsOfService';
import RefundPolicy from './policies/RefundPolicy';
import CookiePolicy from './policies/CookiePolicy';
import Disclaimer from './policies/Disclaimer';

// Individual Service Pages
import WashingMachine from './pages/services/WashingMachine';
import Refrigerator from './pages/services/Refrigerator';
import AirConditioner from './pages/services/AirConditioner';
import Television from './pages/services/Television';
import WaterPurifier from './pages/services/WaterPurifier';
import MicrowaveOven from './pages/services/MicrowaveOven';
import Dishwasher from './pages/services/Dishwasher';
import CoffeeMaker from './pages/services/CoffeeMaker';
import OvenGasStove from './pages/services/OvenGasStove';
import ClothesDryer from './pages/services/ClothesDryer';
import KitchenChimney from './pages/services/KitchenChimney';
import OtherAppliances from './pages/services/OtherAppliances';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans selection:bg-blue-100 selection:text-blue-600 bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* Policy Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            
            {/* Individual Service Routes */}
            <Route path="/service/washing-machine" element={<WashingMachine />} />
            <Route path="/service/refrigerator" element={<Refrigerator />} />
            <Route path="/service/air-conditioner" element={<AirConditioner />} />
            <Route path="/service/television" element={<Television />} />
            <Route path="/service/water-purifier" element={<WaterPurifier />} />
            <Route path="/service/microwave-oven" element={<MicrowaveOven />} />
            <Route path="/service/dishwasher" element={<Dishwasher />} />
            <Route path="/service/coffee-maker" element={<CoffeeMaker />} />
            <Route path="/service/oven-stove" element={<OvenGasStove />} />
            <Route path="/service/clothes-dryer" element={<ClothesDryer />} />
            <Route path="/service/kitchen-chimney" element={<KitchenChimney />} />
            <Route path="/service/other-appliances" element={<OtherAppliances />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
