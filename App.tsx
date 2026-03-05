
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import Brands from './pages/Brands';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import { BUSINESS_INFO } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '服務項目', path: '/services' },
    { name: '品牌專區', path: '/brands' },
    { name: '常見問題', path: '/faq' },
    { name: '聯絡我們', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-black text-blue-900 leading-tight">威信視聽</span>
            <span className="text-xs text-gray-500 font-medium">伴唱機專業服務</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-500'
                } px-1 py-2 text-sm font-bold transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="電話聯絡"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-4">威信視聽器材行</h3>
          <p className="text-gray-400 text-sm mb-4">專業點將家 / 金嗓 / 音圓系統。家用、店家 KTV 規劃，從選機、安裝到維修保養，一次搞定。</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">快速聯絡</h3>
          <p className="text-gray-400 text-sm mb-2">電話：{BUSINESS_INFO.phoneDisplay}</p>
          <p className="text-gray-400 text-sm mb-2">地址：{BUSINESS_INFO.address}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">營業時間</h3>
          <div className="text-gray-400 text-sm grid grid-cols-2 gap-x-6 gap-y-1 max-w-[280px] mx-auto md:mx-0">
            {BUSINESS_INFO.openingHours.map((h, i) => (
              <div key={i} className="flex justify-between">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} 威信視聽器材行 版權所有.
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
