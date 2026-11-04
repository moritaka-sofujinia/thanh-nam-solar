import React from 'react';
import { BadgeCheck, BatteryCharging, PiggyBank, Zap, HardHat, ShieldCheck, Sun, Cpu, Battery, Wrench } from 'lucide-react';
import { ImageGallery } from './ImageGallery';
import { HYBRID_PAGES, HYBRID_USP_TEXT } from '../data/solarHybridPages';
import type { HybridKey, HybridUsp, HybridGroup } from '../data/solarHybridPages';

interface SolarHybridSectionProps {
  onOpenQuoteModal: () => void;
  /** Trang chủ căn giữa; trang con căn trái */
  align?: 'left' | 'center';
  /** Chọn cấu hình trang: 3kW / 5kW / 10kW */
  capacity?: HybridKey;
}

const USP_ICONS: Record<HybridUsp['id'], React.ComponentType<{ className?: string }>> = {
  genuine: BadgeCheck,
  backup: BatteryCharging,
  saving: PiggyBank,
  battery: Zap,
  install: HardHat,
  warranty: ShieldCheck,
};

const GROUP_ICONS: Record<HybridGroup['id'], React.ComponentType<{ className?: string }>> = {
  panel: Sun,
  inverter: Cpu,
  battery: Battery,
  accessory: Wrench,
};

/** 4 ảnh dùng chung; thứ tự hiển thị do config của từng trang quyết định */
const IMAGES: Record<number, { src: string; alt: string }> = {
  1: { src: '/images/solar-hybrid/solar-hybrid-1.avif', alt: 'Hệ thống điện mặt trời Hybrid trên mái nhà phố' },
  2: { src: '/images/solar-hybrid/solar-hybrid-2.avif', alt: 'Hệ thống điện mặt trời Hybrid trên mái bằng' },
  3: { src: '/images/solar-hybrid/solar-hybrid-3.avif', alt: 'Hệ thống điện mặt trời Hybrid nhà phố hiện đại' },
  4: { src: '/images/solar-hybrid/solar-hybrid-4.avif', alt: 'Hệ thống điện mặt trời Hybrid trên mái ngói biệt thự' },
};

export const SolarHybridSection: React.FC<SolarHybridSectionProps> = ({
  align = 'left',
  capacity = '3kw',
}) => {
  const center = align === 'center';
  const cfg = HYBRID_PAGES[capacity];

  const galleryItems = cfg.galleryOrder.map((n, i) => {
    const img = IMAGES[n] ?? IMAGES[1];
    return {
      src: img.src,
      alt: img.alt,
      title: 'Thi công điện mặt trời Hybrid',
      subtitle: `Hình ảnh ${i + 1}/${cfg.galleryOrder.length} — VITECH CO`,
    };
  });

  const HighlightIcon = USP_ICONS[cfg.highlightId];
  const highlightText = HYBRID_USP_TEXT[cfg.highlightId];

  const renderHighlight = () => (
    <div key="highlight" className="mt-8 mb-6 p-6 sm:p-8 bg-slate-900 text-white rounded-2xl">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="md:w-[45%] md:shrink-0">
          <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-emerald-400 font-bold mb-1.5">
            <HighlightIcon className="w-4 h-4" />
            Bảo hành &amp; giám sát
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            {highlightText.title}
          </h4>
        </div>
        <p className="md:flex-1 text-sm sm:text-base text-slate-200 leading-relaxed md:border-l md:border-slate-700 md:pl-6">
          {highlightText.body}
        </p>
      </div>
    </div>
  );

  return (
    <section id="dien-mat-troi-hybrid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-[21rem] xl:pl-[24rem]">
        {/* Header */}
        <div className={center ? 'text-center max-w-3xl mx-auto mb-10' : 'mb-10'}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            {cfg.title}
          </h2>
          <div className={`w-20 h-1.5 bg-emerald-600 mt-4 mb-5 rounded-full ${center ? 'mx-auto' : ''}`} />
          <p className={`text-base sm:text-lg text-slate-800 leading-relaxed ${center ? '' : 'max-w-3xl'}`}>
            {cfg.intro}
          </p>
        </div>

        {/* Cụm ảnh — dùng chung component với trang Dự án */}
        <div className="mb-12">
          <ImageGallery items={galleryItems} />
        </div>

        <article className="max-w-3xl">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Cam kết chất lượng &amp; dịch vụ
          </h3>
          <div className="w-14 h-1 bg-emerald-600 mt-3 mb-6 rounded-full" />

          <div className="space-y-6">
            {cfg.uspOrder.map((id) => {
              const Icon = USP_ICONS[id];
              const text = HYBRID_USP_TEXT[id];
              return (
                <div key={id} className="border-l-2 border-emerald-600 pl-4 sm:pl-5">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug flex items-start gap-2">
                    <Icon className="w-5 h-5 shrink-0 text-emerald-700 mt-0.5" />
                    <span>{text.title}</span>
                  </h4>
                  <p className="mt-1.5 text-base text-slate-800 leading-relaxed">{text.body}</p>
                </div>
              );
            })}

            {/* Ô ngang nền đen — luôn ở cuối, không xáo trộn */}
            {renderHighlight()}
          </div>

          {/* A. Cấu hình thiết bị */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-12">
            {cfg.configTitle}
          </h3>
          <div className="w-14 h-1 bg-emerald-600 mt-3 mb-6 rounded-full" />
          <div className="space-y-6">
            {cfg.configGroups.map((group) => {
              const Icon = GROUP_ICONS[group.id];
              return (
                <div key={group.name}>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2">
                    <Icon className="w-5 h-5 shrink-0 text-emerald-700 mt-0.5" />
                    <span>{group.name}</span>
                  </h4>
                  {group.rows.map((row) => (
                    <p key={row.label} className="mt-1.5 text-base text-slate-800 leading-relaxed">
                      <strong>{row.label}:</strong> {row.value}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          {/* B. Nhu cầu sử dụng */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-12">
            {cfg.suitabilityTitle}
          </h3>
          <div className="w-14 h-1 bg-emerald-600 mt-3 mb-6 rounded-full" />
          <div className="space-y-4">
            {cfg.suitability.map((item) => (
              <p key={item.label} className="text-base text-slate-800 leading-relaxed">
                <strong>{item.label}:</strong> {item.value}
              </p>
            ))}
          </div>

          <p className="mt-10 pt-5 border-t border-slate-200 text-sm text-slate-600 leading-relaxed">
            <em>
              Mọi hạng mục thi công đều được đo đạc, báo giá và ghi rõ trong hợp đồng trước khi thực hiện.
              Quý khách cần khảo sát miễn phí, vui lòng liên hệ hotline hoặc gửi yêu cầu báo giá.
            </em>
          </p>
        </article>
      </div>
    </section>
  );
};
