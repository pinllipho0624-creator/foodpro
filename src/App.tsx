import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home.tsx';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import Terms from './Terms';
import FoodArticles from './FoodArticles';
import NasiLemak from './NasiLemak';
import Laksa from './Laksa';
import Satay from './Satay';
import Rendang from './Rendang';
import RotiCanai from './RotiCanai';
import CharKwayTeow from './CharKwayTeow';
import TehTarik from './TehTarik';
import Cendol from './Cendol';
import MeeGoreng from './MeeGoreng';
import AsamLaksa from './AsamLaksa';
import BananaLeafRice from './BananaLeafRice';
import HainaneseChickenRice from './HainaneseChickenRice';
import ApamBalik from './ApamBalik';
import KuihMelayu from './KuihMelayu';
import Durian from './Durian';
import NasiKerabu from './NasiKerabu';
import BakKutTeh from './BakKutTeh';
import IkanBakar from './IkanBakar';
import OtakOtak from './OtakOtak';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-amber-600 tracking-wide hover:text-amber-700 transition-colors">
                  FoodPro
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Home</Link>
                <Link to="/articles" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Articles</Link>
                <Link to="/about" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">About</Link>
                <Link to="/contact" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Contact</Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/articles" element={<FoodArticles />} />
            <Route path="/articles/nasilemak" element={<NasiLemak />} />
            <Route path="/articles/laksa" element={<Laksa />} />
            <Route path="/articles/satay" element={<Satay />} />
            <Route path="/articles/rendang" element={<Rendang />} />
            <Route path="/articles/roticanai" element={<RotiCanai />} />
            <Route path="/articles/charkwayteow" element={<CharKwayTeow />} />
            <Route path="/articles/tehtarik" element={<TehTarik />} />
            <Route path="/articles/cendol" element={<Cendol />} />
            <Route path="/articles/meegoreng" element={<MeeGoreng />} />
            <Route path="/articles/asamlaksa" element={<AsamLaksa />} />
            <Route path="/articles/bananaleafrice" element={<BananaLeafRice />} />
            <Route path="/articles/hainanesechickenrice" element={<HainaneseChickenRice />} />
            <Route path="/articles/apambalik" element={<ApamBalik />} />
            <Route path="/articles/kuihmelayu" element={<KuihMelayu />} />
            <Route path="/articles/durian" element={<Durian />} />
            <Route path="/articles/nasikerabu" element={<NasiKerabu />} />
            <Route path="/articles/bakkutteh" element={<BakKutTeh />} />
            <Route path="/articles/ikanbakar" element={<IkanBakar />} />
            <Route path="/articles/otakotak" element={<OtakOtak />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-gray-300 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">FoodPro</h3>
                <p className="text-sm text-gray-400">Discover authentic Malaysian food culture, recipes, and stories.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Contact</h4>
                <p className="text-sm text-gray-400">Email: info@foodpro.com</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} FoodPro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
