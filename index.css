import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FoodArticles from './pages/FoodArticles';
import NasiLemak from './pages/articles/NasiLemak';
import Laksa from './pages/articles/Laksa';
import Satay from './pages/articles/Satay';
import Rendang from './pages/articles/Rendang';
import RotiCanai from './pages/articles/RotiCanai';
import CharKwayTeow from './pages/articles/CharKwayTeow';
import TehTarik from './pages/articles/TehTarik';
import Cendol from './pages/articles/Cendol';
import MeeGoreng from './pages/articles/MeeGoreng';
import AsamLaksa from './pages/articles/AsamLaksa';
import BananaLeafRice from './pages/articles/BananaLeafRice';
import HainaneseChickenRice from './pages/articles/HainaneseChickenRice';
import ApamBalik from './pages/articles/ApamBalik';
import KuihMelayu from './pages/articles/KuihMelayu';
import Durian from './pages/articles/Durian';
import NasiKerabu from './pages/articles/NasiKerabu';
import BakKutTeh from './pages/articles/BakKutTeh';
import IkanBakar from './pages/articles/IkanBakar';
import OtakOtak from './pages/articles/OtakOtak';
import KuihLapis from './pages/articles/KuihLapis';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <header className="bg-white border-b border-gray-200">
          <nav className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                Malaysian Food Guide
              </Link>
              <div className="flex gap-6">
                <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                <Link to="/foods" className="text-gray-700 hover:text-gray-900">Foods</Link>
                <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<FoodArticles />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/foods/nasi-lemak" element={<NasiLemak />} />
            <Route path="/foods/laksa" element={<Laksa />} />
            <Route path="/foods/satay" element={<Satay />} />
            <Route path="/foods/rendang" element={<Rendang />} />
            <Route path="/foods/roti-canai" element={<RotiCanai />} />
            <Route path="/foods/char-kway-teow" element={<CharKwayTeow />} />
            <Route path="/foods/teh-tarik" element={<TehTarik />} />
            <Route path="/foods/cendol" element={<Cendol />} />
            <Route path="/foods/mee-goreng" element={<MeeGoreng />} />
            <Route path="/foods/asam-laksa" element={<AsamLaksa />} />
            <Route path="/foods/banana-leaf-rice" element={<BananaLeafRice />} />
            <Route path="/foods/hainanese-chicken-rice" element={<HainaneseChickenRice />} />
            <Route path="/foods/apam-balik" element={<ApamBalik />} />
            <Route path="/foods/kuih-melayu" element={<KuihMelayu />} />
            <Route path="/foods/durian" element={<Durian />} />
            <Route path="/foods/nasi-kerabu" element={<NasiKerabu />} />
            <Route path="/foods/bak-kut-teh" element={<BakKutTeh />} />
            <Route path="/foods/ikan-bakar" element={<IkanBakar />} />
            <Route path="/foods/otak-otak" element={<OtakOtak />} />
            <Route path="/foods/kuih-lapis" element={<KuihLapis />} />
          </Routes>
        </main>

        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Malaysian Food Guide</h3>
                <p className="text-sm text-gray-600">
                  Your guide to authentic Malaysian cuisine and culture.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/foods" className="text-gray-600 hover:text-gray-900">Food Articles</Link></li>
                  <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                  <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
                <p className="text-sm text-gray-600">
                  Email: hellomalaysianfoodguide@gmail.com
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
              <p>&copy; {new Date().getFullYear()} Malaysian Food Guide. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;