/**
 * Khung trang con (MPA) — GIỮ NGUYÊN cấu trúc dùng chung của trang chủ:
 * Header → ảnh hero → (sidebar trái + cột nội dung) → Khảo Sát & Tư Vấn → Footer.
 * Chỉ có CỘT 2 (nội dung) là thay đổi theo từng trang.
 */
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ServicesSection } from '../components/ServicesSection';
import { AluminumDoorSection } from '../components/AluminumDoorSection';
import { AustdoorSection } from '../components/AustdoorSection';
import { SolarHybridSection } from '../components/SolarHybridSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { FloatingActions } from '../components/FloatingActions';
import { SidebarPanels } from '../components/HeroSidebar';
import { COMPANY_INFO } from '../data/solarData';
import { ArrowRight, Phone } from 'lucide-react';

export type PageSection =
  | 'about'
  | 'projects'
  | 'services'
  | 'aluminum'
  | 'austdoor'
  | 'solar-hybrid'
  | 'solar-5kw'
  | 'solar-10kw';

interface SitePageProps {
  section: PageSection;
}

export default function SitePage({ section }: SitePageProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [modalData, setModalData] = useState<{ customNote?: string } | null>(null);

  const handleOpenQuote = () => {
    setModalData(null);
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithNote = (customNote?: string) => {
    setModalData({ customNote });
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Header onOpenQuoteModal={handleOpenQuote} />

      <main className="flex-1">
        {/* Ảnh hero — dùng chung, giống hệt trang chủ */}
        <Hero onOpenQuoteModal={handleOpenQuote} />

        {/* 2 cột: sidebar TRÁI (sticky) + cột nội dung PHẢI (thay đổi theo trang) */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden lg:block">
            <div className="mx-auto flex h-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
              <aside
                aria-label="Danh mục dịch vụ và dự án"
                className="sticky top-24 w-64 shrink-0 self-start space-y-3 pt-20 pointer-events-auto"
              >
                <SidebarPanels />

                <a
                  href={`tel:${COMPANY_INFO.hotlineRaw}`}
                  className="group inline-flex w-full items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl shadow-lg shadow-slate-950/40 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Hotline {COMPANY_INFO.hotline}</span>
                </a>

                <button
                  type="button"
                  onClick={handleOpenQuote}
                  className="group inline-flex w-full items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/40 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Tư vấn miễn phí</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </aside>
            </div>
          </div>

          {/* ===== CỘT 2 — phần duy nhất thay đổi giữa các trang ===== */}
          {section === 'about' && (
            <AboutSection onOpenQuoteModal={handleOpenQuote} variant="page" align="left" />
          )}
          {section === 'projects' && (
            <ProjectsSection onOpenQuoteModal={handleOpenQuote} variant="article" align="left" />
          )}
          {section === 'services' && (
            <ServicesSection onOpenQuoteModal={handleOpenQuote} align="left" />
          )}
          {section === 'aluminum' && (
            <AluminumDoorSection onOpenQuoteModal={handleOpenQuote} align="left" />
          )}
          {section === 'austdoor' && (
            <AustdoorSection onOpenQuoteModal={handleOpenQuote} align="left" />
          )}
          {section === 'solar-hybrid' && (
            <SolarHybridSection onOpenQuoteModal={handleOpenQuote} align="left" capacity="3kw" />
          )}
          {section === 'solar-5kw' && (
            <SolarHybridSection onOpenQuoteModal={handleOpenQuote} align="left" capacity="5kw" />
          )}
          {section === 'solar-10kw' && (
            <SolarHybridSection onOpenQuoteModal={handleOpenQuote} align="left" capacity="10kw" />
          )}
        </div>

        {/* Khảo Sát & Tư Vấn — dùng chung, 1 cột toàn chiều rộng */}
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions onOpenQuoteModal={handleOpenQuote} />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={modalData}
      />
    </div>
  );
}
