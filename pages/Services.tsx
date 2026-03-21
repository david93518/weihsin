
import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-4">服務項目</h1>
          <p className="text-lg text-gray-600">把您的需求交給點將家電腦伴唱機 北區維修服務/展示中心，我們提供最專業的一站式解決方案</p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((svc, idx) => (
            <div 
              key={svc.id} 
              className={`flex flex-col md:flex-row gap-8 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 items-center overflow-hidden ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center p-3 bg-blue-600 text-white rounded-xl">
                  {svc.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">{svc.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {svc.longDesc}
                </p>
                <div className="space-y-3 pt-4">
                  <h4 className="font-bold text-gray-900">✅ 服務包含：</h4>
                  {svc.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all"
                  >
                    <Phone className="w-6 h-6" />
                    {svc.ctaText}
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={svc.imageUrl} 
                  alt={svc.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
