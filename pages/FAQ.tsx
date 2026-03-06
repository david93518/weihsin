
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-black mb-4">常見問題 FAQ</h1>
          <p className="text-lg text-gray-600">整理了客戶最常詢問的問題，希望能為您提供初步的解答</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-blue-500">Q.</span> {faq.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  <span className="text-blue-500 font-bold mr-2 text-lg">A.</span> {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white p-8 rounded-2xl text-center shadow-xl">
          <h3 className="text-xl font-bold mb-4">還是沒找到答案？</h3>
          <p className="mb-8 opacity-90">沒關係！直接來電詢問最快，我們專人為您服務。</p>
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition-colors"
          >
            立即來電洽詢
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
