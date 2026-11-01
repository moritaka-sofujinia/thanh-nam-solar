import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

interface FloatingActionsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuoteModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
          aria-label="Cuộn lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Zalo Contact Button */}
      <a
        href={COMPANY_INFO.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 pl-3 pr-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all transform hover:scale-105"
        title="Nhắn tin qua Zalo"
      >
        <div className="w-7 h-7 rounded-full bg-white text-blue-600 font-black text-xs flex items-center justify-center">
          Z
        </div>
        <span className="text-xs font-bold hidden sm:inline">Chat Zalo</span>
      </a>

      {/* Direct Call Hotline Button */}
      <a
        href={`tel:${COMPANY_INFO.hotlineRaw}`}
        className="flex items-center gap-2 pl-3 pr-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-all transform hover:scale-105"
        title="Gọi điện ngay"
      >
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <Phone className="w-4 h-4 text-white" />
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-[9px] uppercase tracking-wider text-emerald-100 font-semibold leading-none">Hotline</div>
          <div className="text-xs font-bold leading-tight">{COMPANY_INFO.hotline}</div>
        </div>
      </a>
    </div>
  );
};
