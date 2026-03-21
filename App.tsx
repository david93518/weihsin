
import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import { BUSINESS_INFO } from './constants';

const SITE_ORIGIN = 'https://weihsin.com';

const ensureMetaTag = (name: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  return el;
};

const ensurePropertyTag = (property: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  return el;
};

const ensureLink = (rel: string) => {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  return el;
};

const Seo: React.FC = () => {
  const location = useLocation();

  const seo = useMemo(() => {
    const pathname = location.pathname || '/';

    const baseTitle = '點將家電腦伴唱機 北區維修服務/展示中心｜伴唱機買賣・到府安裝設定・維修保養';
    const baseDescription =
      '點將家電腦伴唱機 北區維修服務/展示中心，專營大台北地區點將家電腦伴唱機。提供家用、店家 KTV 規劃服務，從選機、安裝、伴唱機設備修理到維修保養，一次搞定。';

    const byPath: Record<string, { title: string; description: string }> = {
      '/': {
        title: `${baseTitle}｜KTV 規劃・安裝・維修保養`,
        description: baseDescription,
      },
      '/services': {
        title: `服務項目｜${baseTitle}`,
        description:
          '大台北地區 KTV 規劃與伴唱機一站式服務：選機搭配、到府安裝設定、音響設備銷售、伴唱機設備修理與維修保養。',
      },
      '/faq': {
        title: `常見問題 FAQ｜${baseTitle}`,
        description:
          '整理客戶最常詢問的伴唱機與音響問題：沒聲音、破音雜音、當機、讀不到歌、點歌失靈、更新與維修流程等。',
      },
      '/contact': {
        title: `聯絡我們｜${baseTitle}`,
        description:
          '位於台北市萬華區，提供到店與到府諮詢服務。來電前請準備品牌、型號、需求與問題照片，回覆更快速。',
      },
    };

    const chosen = byPath[pathname] ?? {
      title: baseTitle,
      description: baseDescription,
    };

    const canonical = `${SITE_ORIGIN}${pathname === '/' ? '/' : pathname}`;
    return { ...chosen, canonical };
  }, [location.pathname]);

  useEffect(() => {
    document.title = seo.title;

    const desc = ensureMetaTag('description');
    desc.setAttribute('content', seo.description);

    const robots = ensureMetaTag('robots');
    robots.setAttribute('content', 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1');

    const canonical = ensureLink('canonical');
    canonical.setAttribute('href', seo.canonical);

    const ogTitle = ensurePropertyTag('og:title');
    ogTitle.setAttribute('content', seo.title);
    const ogDesc = ensurePropertyTag('og:description');
    ogDesc.setAttribute('content', seo.description);
    const ogUrl = ensurePropertyTag('og:url');
    ogUrl.setAttribute('content', seo.canonical);
    const ogType = ensurePropertyTag('og:type');
    ogType.setAttribute('content', 'website');
    const ogSiteName = ensurePropertyTag('og:site_name');
    ogSiteName.setAttribute('content', '點將家電腦伴唱機 北區維修服務/展示中心');
    const ogImage = ensurePropertyTag('og:image');
    ogImage.setAttribute('content', `${SITE_ORIGIN}/logo.png`);
    const ogLocale = ensurePropertyTag('og:locale');
    ogLocale.setAttribute('content', 'zh_TW');

    const twCard = ensureMetaTag('twitter:card');
    twCard.setAttribute('content', 'summary_large_image');
    const twImage = ensureMetaTag('twitter:image');
    twImage.setAttribute('content', `${SITE_ORIGIN}/logo.png`);
    const twTitle = ensureMetaTag('twitter:title');
    twTitle.setAttribute('content', seo.title);
    const twDesc = ensureMetaTag('twitter:description');
    twDesc.setAttribute('content', seo.description);
  }, [seo]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '服務項目', path: '/services' },
    { name: '常見問題', path: '/faq' },
    { name: '聯絡我們', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img src="/logo.png" alt="點將家 (Dian Jiang Jia) 官方 Logo" className="h-10 flex-shrink-0" />
            <span className="hidden sm:inline text-base md:text-xl font-black text-blue-900 leading-tight">點將家電腦伴唱機 北區維修服務/展示中心</span>
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
          <h3 className="text-xl font-bold mb-4">點將家電腦伴唱機 北區維修服務/展示中心</h3>
          <p className="text-gray-400 text-sm mb-4">專營點將家電腦伴唱機。家用、店家 KTV 規劃，從選機、安裝到維修保養，一次搞定。</p>
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
        &copy; {new Date().getFullYear()} 點將家電腦伴唱機 北區維修服務/展示中心 版權所有.
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router>
      <Seo />
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
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
