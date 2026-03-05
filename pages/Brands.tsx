
import React from 'react';
import { Phone } from 'lucide-react';
import { BRANDS, BUSINESS_INFO } from '../constants';

const Brands: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-4">品牌專區</h1>
          <p className="text-lg text-gray-600">不論您使用的是哪一家的系統，威信視聽都是您最堅強的後盾</p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="border-b border-gray-100 pb-16 last:border-none">
              <div className="bg-blue-50 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3 text-center">
                  <div className="text-5xl font-black text-blue-900 mb-4">{brand.name}</div>
                  <div className="inline-block px-4 py-1 bg-white rounded-full text-blue-600 font-bold text-sm shadow-sm">官方合作 / 專業支援</div>
                </div>
                <div className="md:w-2/3 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">{brand.title}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{brand.content}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {brand.keywords.map((kw) => (
                      <span key={kw} className="bg-white px-3 py-1 rounded-md text-sm text-gray-500 border border-gray-200">#{kw}</span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a 
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all"
                    >
                      <Phone className="w-6 h-6" />
                      我的是{brand.name}｜我要詢問
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-900 text-white rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-4">您的品牌不在名單上？</h3>
          <p className="text-gray-400 mb-8">其他廠牌伴唱機、擴大機或音響設備也歡迎諮詢，我們會盡力為您解決問題。</p>
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2 border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg font-bold transition-all"
          >
            <Phone className="w-6 h-6" />
            立即諮詢其他品牌
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brands;
