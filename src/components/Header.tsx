import React, { useState, useEffect } from 'react';
import { Sun, Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#trang-chu' },
    { name: 'Giới thiệu', href: '#gioi-thieu' },
    { name: 'Dịch vụ', href: '#dich-vu' },
    { name: 'Dự án', href: '#du-an' },
    { name: 'Báo giá', href: '#bang-gia' },
    { name: 'Liên hệ', href: '#lien-he' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-8 min-w-0">
          {/* Zone 1: Brand Wordmark element */}
          <a
            href="#trang-chu"
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
            aria-label="ThanhNamSolar Trang chủ"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <Sun className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                ThanhNam<span className="text-emerald-600">Solar</span>
              </span>
              <span className="text-[11px] tracking-wider uppercase font-semibold text-slate-500 mt-1">
                Năng Lượng Xanh Bình Dương
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-emerald-600 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Hotline and 1 Primary CTA Action */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-4 min-w-0">
            <a
              href={`tel:${COMPANY_INFO.hotlineRaw}`}
              className="hidden md:flex items-center gap-2.5 text-slate-800 hover:text-emerald-600 transition-colors py-1.5 px-2 lg:px-3.5 rounded-xl hover:bg-slate-50 whitespace-nowrap shrink min-w-0"
              title="Gọi hotline tư vấn trực tiếp"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] text-slate-500 font-medium leading-none">Hotline Bình Dương</div>
                <div className="text-base font-bold text-slate-900 tracking-tight leading-tight mt-0.5">
                  {COMPANY_INFO.hotline}
                </div>
              </div>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Nhận báo giá ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-md whitespace-nowrap"
            >
              Báo giá
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 pb-4 space-y-2">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="p-3 bg-slate-50 rounded-lg space-y-2">
              <a
                href={`tel:${COMPANY_INFO.hotlineRaw}`}
                className="flex items-center gap-2 text-slate-900 font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Hotline: {COMPANY_INFO.hotline}</span>
              </a>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Khảo sát mái tận nơi miễn phí 24h</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full mt-2 py-2.5 px-4 text-center text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                Nhận Báo Giá Trọn Gói Ngay
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
