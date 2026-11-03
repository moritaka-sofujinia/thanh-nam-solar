import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export const ContactSection: React.FC = () => {
  return (
    <section id="lien-he" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-[1.2]">
            Khảo Sát & Tư Vấn Tận Nơi Tại Bình Dương
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 mt-4 mb-5 rounded-full" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Đội ngũ kỹ sư năng lượng mặt trời VITECH CO luôn sẵn sàng hỗ trợ kiểm tra mái nhà, đo đạc hướng nắng và lên bản vẽ thiết kế trực tiếp tại địa bàn tỉnh Bình Dương.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {/* Trụ sở văn phòng */}
          <div className="p-7 bg-slate-800/80 rounded-2xl border border-slate-700/80">
            <div>
              <div className="text-sm text-slate-400 font-medium">Trụ sở chính:</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                {COMPANY_INFO.address}
              </div>
            </div>
          </div>

          {/* Hotline & Zalo */}
          <div className="p-7 bg-slate-800/80 rounded-2xl border border-slate-700/80">
            <div>
              <div className="text-sm text-slate-400 font-medium">Hotline kỹ thuật & Zalo:</div>
              <a
                href={`tel:${COMPANY_INFO.hotlineRaw}`}
                className="text-2xl sm:text-3xl font-extrabold text-emerald-400 hover:text-emerald-300 transition-colors block mt-1"
              >
                {COMPANY_INFO.hotline}
              </a>
            </div>
            <div className="pt-3 border-t border-slate-700/60 flex items-center gap-2">
              <a
                href={COMPANY_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Nhắn tin Zalo trực tiếp</span>
              </a>
            </div>
          </div>

          {/* Thời gian tiếp nhận khảo sát */}
          <div className="p-7 bg-slate-800/80 rounded-2xl border border-slate-700/80">
            <div>
              <div className="text-sm text-slate-400 font-medium">Thời gian tiếp nhận khảo sát:</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                {COMPANY_INFO.workingHours}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};