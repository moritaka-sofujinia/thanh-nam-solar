import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="trang-chu" className="relative pt-36 sm:pt-40 lg:pt-64 pb-14 sm:pb-16 lg:pb-20 overflow-hidden bg-slate-950">
      {/* Background Hero Image - Bright, crisp & clear */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_solar_rooftop_binhduong_1793562355617.jpg"
          alt="Hệ thống điện mặt trời áp mái tại Bình Dương - ThanhNamSolar"
          className="w-full h-full object-cover object-center brightness-95 contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Soft, transparent gradient strictly protecting text legibility without muddying the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/25 to-transparent" />

        {/* Blur nhẹ ở chân ảnh (soft blur transition at the bottom edge) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent backdrop-blur-[3px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="max-w-4xl space-y-6 sm:space-y-7">
          {/* H1 Heading per user spec */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance drop-shadow-md">
            Giải Pháp Năng Lượng Xanh & Tiết Kiệm Cho Mọi Nhà
          </h1>

          {/* Subtitle per user spec */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
            Chuyên <span className="text-emerald-400 font-semibold">Lắp đặt điện mặt trời giá rẻ tại Bình Dương</span> – Uy tín, nhanh chóng, bảo hành dài lâu.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/50 transition-all cursor-pointer whitespace-nowrap group"
            >
              <span>Tư vấn miễn phí</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#du-an"
              className="hidden sm:inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-medium text-slate-100 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-white/20 rounded-xl backdrop-blur-xs transition-colors whitespace-nowrap shadow-md"
            >
              <span>Xem dự án tiêu biểu</span>
            </a>
          </div>
        </div>

        {/* 4-Item KPI Proof Strip below Hero */}
        <div className="mt-12 sm:mt-10 lg:mt-12 pt-8 sm:pt-7 lg:pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 sm:gap-6 text-white">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 tabular-nums drop-shadow-sm">500+</div>
            <div className="text-sm sm:text-base text-slate-200 mt-1.5">Công trình tại Bình Dương</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 tabular-nums drop-shadow-sm">25 Năm</div>
            <div className="text-sm sm:text-base text-slate-200 mt-1.5">Bảo hành hiệu suất pin</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 tabular-nums drop-shadow-sm">~ 50%</div>
            <div className="text-sm sm:text-base text-slate-200 mt-1.5">Tiết kiệm tiền điện EVN</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 tabular-nums drop-shadow-sm">2 Giờ</div>
            <div className="text-sm sm:text-base text-slate-200 mt-1.5">Có mặt hỗ trợ sự cố tại chỗ</div>
          </div>
        </div>
      </div>
    </section>
  );
};