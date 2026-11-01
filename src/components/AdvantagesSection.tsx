import React from 'react';
import { Award, ShieldCheck, Clock, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { ADVANTAGES_DATA, WORKFLOW_STEPS, COMPANY_INFO } from '../data/solarData';

interface AdvantagesSectionProps {
  onOpenQuoteModal: () => void;
}

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ onOpenQuoteModal }) => {
  const advantageIcons = [
    <Award className="w-6 h-6 text-emerald-600" key="award" />,
    <ShieldCheck className="w-6 h-6 text-emerald-600" key="shield" />,
    <Clock className="w-6 h-6 text-emerald-600" key="clock" />,
    <TrendingUp className="w-6 h-6 text-emerald-600" key="trend" />,
  ];

  return (
    <section id="loi-the" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            TẠI SAO CHỌN THANHNAMSOLAR?
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Chúng tôi tự hào là tổng kho phân phối và nhà thầu EPC điện mặt trời có trụ sở và kỹ sư trực tiếp tại tỉnh Bình Dương, mang đến giải pháp tối ưu chi phí và hỗ trợ thần tốc.
          </p>
        </div>

        {/* 4 Statistics / Competitive Advantage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ADVANTAGES_DATA.map((adv, idx) => (
            <div
              key={idx}
              className="p-7 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-emerald-500/50 hover:bg-emerald-50/20 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shadow-xs">
                    {advantageIcons[idx]}
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight tabular-nums text-emerald-700 leading-none whitespace-nowrap">
                    {adv.value}
                  </div>
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {adv.label}
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-2">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Viettel-style 4-Step Professional Workflow */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              Quy Trình Chuẩn Hóa
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
              4 Bước Triển Khai Chuyên Nghiệp & Minh Bạch
            </h3>
            <p className="text-base text-slate-300 mt-2.5">
              Tất cả các dự án của ThanhNamSolar đều được thực hiện theo tiêu chuẩn kỹ thuật điện nghiêm ngặt, bàn giao hồ sơ đầy đủ và hỗ trợ thủ tục với EVN Bình Dương.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-emerald-400 tabular-nums mb-3 font-mono">
                    {step.step}.
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CTA placed outside the workflow card */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Đăng Ký Khảo Sát</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};