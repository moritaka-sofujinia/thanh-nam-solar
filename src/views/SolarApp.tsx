/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { AdvantagesSection } from '../components/AdvantagesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { SeoContentSection } from '../components/SeoContentSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { FloatingActions } from '../components/FloatingActions';
import { SidebarPanels } from '../components/HeroSidebar';
import { COMPANY_INFO } from '../data/solarData';
import { ArrowRight, Phone } from 'lucide-react';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    billAmount?: number;
    kwp?: number;
    panels?: number;
    savingsMonth?: number;
    customerType?: string;
    customNote?: string;
  } | null>(null);

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
      {/* 1. Header (Sticky navigation, 3-zone Top Bar Contract) */}
      <Header onOpenQuoteModal={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuote} />

        {/* ===== Vùng 2 cột: sidebar TRÁI (sticky) + nội dung PHẢI, chỉ từ laptop ===== */}
        <div className="relative">
          {/* Rail sidebar: sticky suốt vùng About → FAQ */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden lg:block">
            {/* pb chừa khoảng đáy để sidebar không dính sát khu Khảo sát & Tư vấn */}
            <div className="mx-auto flex h-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
              <aside
                aria-label="Danh mục dịch vụ và dự án"
                className="sticky top-24 w-64 shrink-0 self-start space-y-3 pt-20 pointer-events-auto"
              >
                <SidebarPanels />

                {/* Hotline — nút phụ, đặt trên CTA chính */}
                <a
                  href={`tel:${COMPANY_INFO.hotlineRaw}`}
                  className="group inline-flex w-full items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl shadow-lg shadow-slate-950/40 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Hotline {COMPANY_INFO.hotline}</span>
                </a>

                {/* CTA chính đặt dưới cột sidebar */}
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

          {/* 3. About VITECH CO — cột 2 của nhóm 2 cột */}
          <AboutSection onOpenQuoteModal={handleOpenQuote} align="center" />

          {/* 4. Featured Projects — đặt TRƯỚC phần lĩnh vực hoạt động */}
          <ProjectsSection onOpenQuoteModal={handleOpenQuote} align="center" />

          {/* 5. Core Services (Viettel Construction inspired 3 pillars) */}
          <ServicesSection onOpenQuoteModal={handleOpenQuote} align="center" />

          {/* 6. Numbers & Competitive Advantages (Tại sao chọn VITECH CO) */}
          <AdvantagesSection onOpenQuoteModal={handleOpenQuote} />

          {/* 7. SEO Content & Reference Pricing Table */}
          <SeoContentSection onOpenQuoteModal={handleOpenQuoteWithNote} />

          {/* 8. Frequently Asked Questions */}
          <FaqSection />
        </div>

        {/* 9. Contact Section — 1 cột, toàn chiều rộng */}
        <ContactSection />
      </main>

      {/* 10. Corporate Footer */}
      <Footer />

      {/* 11. Floating Action Controls (Hotline, Zalo, Scroll to top) */}
      <FloatingActions onOpenQuoteModal={handleOpenQuote} />

      {/* 12. Interactive Quote & Survey Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={modalData}
      />
    </div>
  );
}