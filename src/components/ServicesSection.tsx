import React, { useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { SERVICES_DATA } from '../data/solarData';
import type { ServiceItem } from '../data/solarData';

interface ServicesSectionProps {
  onOpenQuoteModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="dich-vu" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Viettel Construction clean corporate style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            LĨNH VỰC HOẠT ĐỘNG CỐT LÕI
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            ThanhNamSolar tập trung chuyên sâu vào 3 lĩnh vực năng lượng mặt trời then chốt tại Bình Dương, cung cấp giải pháp từ tư vấn, thiết kế, thi công trọn gói đến bảo trì định kỳ.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white text-xs sm:text-sm font-medium">
                  Công suất: <span className="font-bold text-emerald-300">{service.capacityRange}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-7 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Image Header */}
            <div className="relative h-56 bg-slate-900">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Đóng popup"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase text-slate-900 tracking-wider mb-2">
                  Tổng quan giải pháp
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Quy mô công suất:</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedService.capacityRange}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Chính sách bảo hành:</div>
                  <div className="text-sm font-bold text-emerald-700 mt-0.5">{selectedService.warranty}</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-xs text-slate-500 font-medium">Đối tượng phù hợp:</div>
                  <div className="text-sm text-slate-800 mt-0.5">{selectedService.suitableFor}</div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-bold uppercase text-slate-900 tracking-wider mb-3">
                  Đặc tính kỹ thuật & Lợi ích nổi bật
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brands Used */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Đối tác thiết bị chính hãng tại Bình Dương:
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="px-3 py-1 bg-slate-100 rounded-md">JA Solar (Tier 1)</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-md">Longi Green (Tier 1)</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-md">Canadian Solar (Tier 1)</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-md">Growatt</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-md">Huawei Solar</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-md">Deye Hybrid</span>
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService(null);
                    onOpenQuoteModal();
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer shadow-xs flex items-center gap-2"
                >
                  <span>Yêu cầu khảo sát dịch vụ này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};