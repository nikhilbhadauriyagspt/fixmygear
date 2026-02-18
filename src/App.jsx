import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact'));

// Policies
const PrivacyPolicy = lazy(() => import('./policies/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./policies/TermsOfService'));
const RefundPolicy = lazy(() => import('./policies/RefundPolicy'));
const CookiePolicy = lazy(() => import('./policies/CookiePolicy'));
const Disclaimer = lazy(() => import('./policies/Disclaimer'));

// Individual Service Pages
const WashingMachine = lazy(() => import('./pages/services/WashingMachine'));
const Refrigerator = lazy(() => import('./pages/services/Refrigerator'));
const AirConditioner = lazy(() => import('./pages/services/AirConditioner'));
const Television = lazy(() => import('./pages/services/Television'));
const WaterPurifier = lazy(() => import('./pages/services/WaterPurifier'));
const MicrowaveOven = lazy(() => import('./pages/services/MicrowaveOven'));
const Dishwasher = lazy(() => import('./pages/services/Dishwasher'));
const CoffeeMaker = lazy(() => import('./pages/services/CoffeeMaker'));
const OvenGasStove = lazy(() => import('./pages/services/OvenGasStove'));
const ClothesDryer = lazy(() => import('./pages/services/ClothesDryer'));
const KitchenChimney = lazy(() => import('./pages/services/KitchenChimney'));
const OtherAppliances = lazy(() => import('./pages/services/OtherAppliances'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans selection:bg-blue-100 selection:text-blue-600 bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
