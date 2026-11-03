import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Cột 1: Thông tin công ty */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white leading-none">
                  VITECH<span className="text-emerald-500"> CO</span>
                </span>
                <span className="text-xs tracking-wider uppercase font-semibold text-slate-400 mt-1">
                  ĐIỆN MẶT TRỜI BÌNH DƯƠNG
                </span>
              </div>
            </div>

            <div className="text-sm sm:text-base text-slate-300 font-semibold">
              {COMPANY_INFO.companyFullName}
            </div>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              Đơn vị tiên phong cung cấp giải pháp lắp đặt điện mặt trời giá rẻ tại Bình Dương.
            </p>

            <div className="text-sm sm:text-base text-slate-400 space-y-1.5">
              <div>Mã số doanh nghiệp (MST): <span className="font-mono text-slate-200">{COMPANY_INFO.taxId}</span> do Sở KH&ĐT tỉnh Bình Dương cấp.</div>
            </div>
          </div>

          {/* Cột 2: Liên hệ trực tiếp */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
              Thông Tin Liên Hệ
            </h4>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Địa chỉ:</strong> {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Hotline/Zalo:</strong>{' '}
                  <a
                    href={`tel:${COMPANY_INFO.hotlineRaw}`}
                    className="text-white hover:text-emerald-400 font-semibold"
                  >
                    {COMPANY_INFO.hotline}
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Email:</strong> {COMPANY_INFO.email}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dòng cuối per spec */}
        <div className="mt-12 pt-6 border-t border-slate-900 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p>
            Bản quyền thuộc về VITECH CO © {new Date().getFullYear()}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-sm text-center sm:text-right">
            <span>Lắp đặt điện mặt trời giá rẻ tại Bình Dương</span>
            <span className="hidden sm:inline">·</span>
            <span>
              Thiết kế bởi{' '}
              <a
                href="https://moritaka-sofujinia.id.vn/vi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
              >
                Moritaka Sofujinia
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};