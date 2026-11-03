import React from 'react';
import { DISTRICTS_BINH_DUONG } from '../data/solarData';

interface SeoContentSectionProps {
  onOpenQuoteModal: (customNote?: string) => void;
}

export const SeoContentSection: React.FC<SeoContentSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="bang-gia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-[21rem] xl:pl-[24rem]">
        {/* Core SEO Header per user prompt specification */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Dịch Vụ Lắp Đặt Điện Mặt Trời Giá Rẻ Tại Bình Dương Uy Tín Nhất
          </h2>

          <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-5 mb-6 rounded-full" />

          {/* Standard SEO Paragraph required by user spec */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed text-balance">
            <strong>VITECH<span className="text-emerald-600"> CO</span></strong> tự hào là đơn vị chuyên cung cấp giải pháp thiết kế và lắp đặt điện mặt trời giá rẻ tại Bình Dương. Chúng tôi mang đến giải pháp thi công tối ưu cho hộ gia đình và doanh nghiệp với mức chi phí tiết kiệm nhất, thiết bị đạt chuẩn quốc tế.
          </p>
        </div>

        {/* 3 Pillars: Why VITECH CO is the cheapest & best in Binh Duong */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative overflow-hidden flex items-center p-6 sm:p-7 bg-white rounded-2xl border border-emerald-200/70 shadow-sm hover:shadow-lg hover:border-emerald-400/70 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300" />
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
              Kho Thiết Bị Trực Tiếp
              <br />
              Tại Bình Dương
            </h4>
          </div>

          <div className="relative overflow-hidden flex items-center p-6 sm:p-7 bg-white rounded-2xl border border-emerald-200/70 shadow-sm hover:shadow-lg hover:border-emerald-400/70 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300" />
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
              Đội Ngũ Kỹ Sư
              <br />
              Địa Phương Cơ Động
            </h4>
          </div>

          <div className="relative overflow-hidden flex items-center p-6 sm:p-7 bg-white rounded-2xl border border-emerald-200/70 shadow-sm hover:shadow-lg hover:border-emerald-400/70 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300" />
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
              Am Hiểu Thủ Tục
              <br />
              Điện Lực Bình Dương
            </h4>
          </div>
        </div>

        {/* Coverage District Tag Cloud in Binh Duong */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-emerald-400 font-bold mb-1.5">
                Khu vực phục vụ hỏa tốc
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Khảo Sát Miễn Phí Tại Tất Cả Các Huyện Thị Tỉnh Bình Dương
              </h4>
            </div>
            <div className="flex flex-wrap gap-2 max-w-lg">
              {DISTRICTS_BINH_DUONG.map((district) => (
                <span
                  key={district}
                  className="px-3.5 py-1.5 bg-slate-800 text-slate-200 border border-slate-700 rounded-md text-sm font-medium"
                >
                  {district}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};