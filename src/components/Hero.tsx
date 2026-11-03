import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="trang-chu" className="relative flex flex-col justify-end pt-36 sm:pt-40 lg:pt-44 pb-12 sm:pb-14 lg:pb-16 overflow-hidden bg-slate-950 lg:min-h-[38rem]">
      {/* Background Hero Image — sáng rõ, chỉ mờ đen nhẹ ở chân ảnh */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_solar_rooftop_binhduong_1793562355617.jpg"
          alt="Hệ thống điện mặt trời áp mái tại Bình Dương - VITECH CO"
          className="w-full h-full object-cover object-center brightness-110 contrast-[1.03] saturate-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Mờ đen rất nhẹ, chỉ phủ bên trái (vùng có chữ) — phần phải ảnh giữ nguyên độ sáng */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[88%] lg:w-3/4 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
        {/* Mờ đen nhẹ dâng từ đáy ảnh lên */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent" />
      </div>

      {/* Toàn bộ nội dung hero nằm trong MỘT cột duy nhất */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="max-w-4xl space-y-6 sm:space-y-7">
          {/* H1 Heading per user spec */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            Giải Pháp Năng Lượng Xanh & Tiết Kiệm Cho Mọi Nhà
          </h1>

          {/* Subtitle per user spec */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-normal leading-relaxed max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Chuyên <span className="text-emerald-300 font-bold [text-shadow:0_2px_8px_rgba(0,0,0,0.95)]">Lắp đặt điện mặt trời giá rẻ tại Bình Dương</span>
            <span className="block">– Uy tín, nhanh chóng, bảo hành dài lâu.</span>
          </p>

          {/* CTA chỉ hiện ở mobile/tablet — bản laptop đã chuyển xuống sidebar */}
          <div className="pt-3 lg:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/50 transition-all cursor-pointer whitespace-nowrap group"
            >
              <span>Tư vấn miễn phí</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
