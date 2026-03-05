
import React from 'react';
import { Phone, MapPin, Clock, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-4">聯絡威信視聽</h1>
          <p className="text-lg text-gray-600">我們位於萬華區，歡迎預約到店或是諮詢到府服務</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 text-white rounded-xl"><Info className="w-6 h-6" /></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">快速諮詢請提供</h3>
                  <p className="text-gray-700 leading-relaxed">
                    為了給您更精確的報價，諮詢時請註明：<br/>
                    <span className="font-bold text-blue-800">1. 品牌 (點將家/金嗓/音圓)</span><br/>
                    <span className="font-bold text-blue-800">2. 型號</span><br/>
                    <span className="font-bold text-blue-800">3. 需求 (買機/更新/維修)</span><br/>
                    <span className="font-bold text-blue-800">4. 問題描述與照片</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-green-50 text-green-600 rounded-xl"><Phone className="w-6 h-6" /></div>
                <div>
                  <div className="text-sm text-gray-500">電話聯絡</div>
                  <div className="font-bold text-lg">{BUSINESS_INFO.phoneDisplay}</div>
                </div>
              </a>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl"><MapPin className="w-6 h-6" /></div>
                <div>
                  <div className="text-sm text-gray-500">門市地址</div>
                  <div className="font-bold text-lg">{BUSINESS_INFO.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl"><Clock className="w-6 h-6" /></div>
                <div className="flex-grow">
                  <div className="text-sm text-gray-500 mb-2">營業時間</div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                    {BUSINESS_INFO.openingHours.map((h, i) => (
                      <div key={i} className="flex justify-between py-0.5">
                        <span className="text-gray-600">{h.day}</span>
                        <span className="font-medium text-gray-900">{h.time}{h.note && <span className="text-red-500 text-xs ml-1">{h.note}</span>}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
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
      </div>
    </div>
  );
};

export default Contact;
