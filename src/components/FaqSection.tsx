import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../data/solarData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            CÂU HỎI THƯỜNG GẶP VỀ ĐIỆN MẶT TRỜI BÌNH DƯƠNG
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600">
            Những băn khoăn phổ biến nhất của các hộ gia đình và chủ nhà xưởng trước khi lắp đặt hệ thống.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed bg-white border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};