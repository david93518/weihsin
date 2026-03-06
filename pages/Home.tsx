
import React from 'react';
import { Phone, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, SERVICES, BRANDS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=2000" 
            alt="Karaoke room background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
            威信視聽｜伴唱機買賣・音響設備銷售・維修保養
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-12 drop-shadow-md">
            點將家北區服務中心，專營大台北地區點將家 / 金嗓 / 音圓系統。提供家用、店家 KTV 規劃服務，從選機、安裝、伴唱機設備修理到維修保養，一次搞定。
          </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-10 py-5 rounded-full text-xl font-black shadow-2xl hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6" />
              電話立即聯絡
            </a>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-4 max-w-7xl mx-auto -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((svc) => (
            <div key={svc.id} className="bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden hover:shadow-blue-200/50 transition-all group">
              <div className="h-56 overflow-hidden bg-gray-200">
                <img 
                  src={svc.imageUrl} 
                  alt={svc.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {svc.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{svc.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{svc.desc}</p>
                <Link to="/services" className="text-blue-600 font-black inline-flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1">
                  了解詳細內容 <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">快速處理三步驟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: "01", title: "來電諮詢", desc: "簡單說明您的需求：是買新機、要購買音響設備，還是機器故障？" },
              { step: "02", title: "提供機器照片與型號", desc: "拍下機器正面與背面貼紙傳給我們，我們能更快為您診斷與報價。" },
              { step: "03", title: "安排到店或到府服務", desc: "確認內容與費用後，我們會安排最快時間為您處理完畢。" }
            ].map((item, idx) => (
              <div key={idx} className="relative bg-white p-10 rounded-3xl shadow-xl border-l-8 border-blue-600">
                <span className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">
                  {item.step}
                </span>
                <h3 className="text-2xl font-black mb-4 mt-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Support */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-16 text-gray-400 uppercase tracking-widest">常見主流品牌專業支援</h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {BRANDS.map((brand) => (
              <div key={brand.name} className="flex flex-col items-center group">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-blue-50 flex items-center justify-center border-4 border-white shadow-xl group-hover:shadow-blue-100 group-hover:border-blue-500 transition-all cursor-default">
                  <span className="text-3xl md:text-4xl font-black text-blue-900">{brand.name}</span>
                </div>
                <p className="mt-6 text-xl font-black text-gray-800">{brand.name} 伴唱機</p>
                <p className="text-sm text-gray-400 mt-2">買賣 / 音響設備 / 維修</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Contact */}
      <section className="py-20 px-4 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black mb-10">現在就聯絡我們</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-4 rounded-2xl"><MapPin className="w-8 h-8" /></div>
                <div>
                  <h4 className="font-bold text-gray-400 mb-1">門市地址</h4>
                  <p className="text-xl font-bold">{BUSINESS_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-green-600 p-4 rounded-2xl"><Phone className="w-8 h-8" /></div>
                <div>
                  <h4 className="font-bold text-gray-400 mb-1">預約電話</h4>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-3xl font-black hover:text-blue-400 transition-colors">{BUSINESS_INFO.phoneDisplay}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.158373305284!2d121.4988583759367!3d25.028688438510834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a987019f854b%3A0xe542617f185f36e8!2zMTA46Ie65YyX5biC6JCs6I-v5Y2A6JCs5aSn6LevMjc35be3M-iZnw!5e0!3m2!1szh-TW!2stw!4v1711234567890!5m2!1szh-TW!2stw" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
