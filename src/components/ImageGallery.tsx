import React, { useState, useEffect } from 'react';
import { MapPin, Zap } from 'lucide-react';

export interface GalleryItem {
  src: string;
  alt: string;
  /** Dòng chính hiển thị trên ảnh */
  title: string;
  /** Dòng phụ (địa điểm, số thứ tự...) */
  subtitle?: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
  /** Thời gian tự chuyển ảnh (ms) */
  autoMs?: number;
}

/**
 * Khung gallery dùng CHUNG cho mọi trang:
 * 1 ảnh lớn 16:9 + 4 thumbnail cùng bề rộng, tự chuyển ảnh, rê chuột thì dừng.
 * Nguồn thiết kế: khối ảnh trang "Dự Án Điện Mặt Trời Tiêu Biểu".
 */
export const ImageGallery: React.FC<ImageGalleryProps> = ({ items, autoMs = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, autoMs);
    return () => clearInterval(timer);
  }, [paused, items.length, autoMs]);

  const current = items[index] ?? items[0];
  if (!current) return null;

  return (
    <>
      {/* Ảnh lớn */}
      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-900"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative aspect-[16/9] w-full">
          {items.map((img, i) => (
            <img
              key={`${img.src}-${i}`}
              src={img.src}
              alt={img.alt}
              referrerPolicy="no-referrer"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-transparent px-5 sm:px-7 pt-16 pb-5 sm:pb-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug flex items-start gap-2">
            <Zap className="w-5 h-5 shrink-0 text-emerald-400 mt-1" />
            <span>{current.title}</span>
          </h3>
          {current.subtitle && (
            <div className="mt-1.5 pl-7 text-sm sm:text-base text-slate-200 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{current.subtitle}</span>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail — cùng bề rộng với ảnh lớn */}
      <div className="mt-4 grid grid-cols-4 gap-3 sm:gap-4">
        {items.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Xem ảnh ${i + 1}: ${img.title}`}
            aria-current={i === index}
            title={img.title}
            className={`group relative overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
              i === index
                ? 'border-emerald-600 ring-2 ring-emerald-600/25'
                : 'border-slate-200 hover:border-emerald-400 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="aspect-[16/10] w-full bg-slate-100">
              <img
                src={img.src}
                alt={img.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </button>
        ))}
      </div>
    </>
  );
};
