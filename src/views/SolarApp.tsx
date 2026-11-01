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

        {/* 3. About ThanhNamSolar */}
        <AboutSection onOpenQuoteModal={handleOpenQuote} />

        {/* 4. Core Services (Viettel Construction inspired 3 pillars) */}
        <ServicesSection onOpenQuoteModal={handleOpenQuote} />

        {/* 5. Numbers & Competitive Advantages (Tại sao chọn ThanhNamSolar) */}
        <AdvantagesSection onOpenQuoteModal={handleOpenQuote} />

        {/* 6. Featured Projects in Binh Duong (Dĩ An, Thuận An, Bến Cát, Thủ Dầu Một) */}
        <ProjectsSection onOpenQuoteModal={handleOpenQuote} />

        {/* 7. SEO Content & Reference Pricing Table */}
        <SeoContentSection onOpenQuoteModal={handleOpenQuoteWithNote} />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Contact Section */}
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