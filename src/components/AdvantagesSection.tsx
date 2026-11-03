import React from 'react';
import { Award, ShieldCheck, Clock, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { ADVANTAGES_DATA, WORKFLOW_STEPS, COMPANY_INFO } from '../data/solarData';

interface AdvantagesSectionProps {
  onOpenQuoteModal: () => void;
}

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ onOpenQuoteModal }) => {
  const advantageIcons = [
    <Award className="w-6 h-6 text-emerald-700" key="award" />,
    <ShieldCheck className="w-6 h-6 text-emerald-700" key="shield" />,
    <Clock className="w-6 h-6 text-emerald-700" key="clock" />,
    <TrendingUp className="w-6 h-6 text-emerald-700" key="trend" />,
  ];

  return (
    <section id="loi-the" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-[21rem] xl:pl-[24rem]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            TẠI SAO CHỌN VITECH<span className="text-emerald-600"> CO</span>?
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Chúng tôi tự hào là tổng kho phân phối và nhà thầu EPC điện mặt trời có trụ sở và kỹ sư trực tiếp tại tỉnh Bình Dương, mang đến giải pháp tối ưu chi phí và hỗ trợ thần tốc.
          </p>
        </div>

        {/* 4 Statistics / Competitive Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {ADVANTAGES_DATA.map((adv, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-slate-100/80 border border-slate-300 rounded-2xl shadow-sm hover:border-emerald-500 hover:bg-emerald-50/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              {/* Icon + số liệu + nhãn chung một khối, đồng màu xanh thương hiệu */}
              <div className="flex items-center gap-2.5 sm:gap-3 text-emerald-700">
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
                  {advantageIcons[idx]}
                </div>
                {/* Nhãn chảy liền sau số liệu trên màn rộng, tự xuống dòng gọn trên màn hẹp */}
                <div className="min-w-0 flex flex-1 flex-wrap items-baseline gap-x-1.5 sm:gap-x-2">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight tabular-nums leading-none whitespace-nowrap">
                    {adv.value}
                  </span>
                  <span className="text-base md:text-lg lg:text-xl font-bold leading-snug">
                    {adv.label}
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-[1.0625rem] font-medium text-slate-800 leading-relaxed mt-4">
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
              Tất cả các dự án của VITECH CO đều được thực hiện theo tiêu chuẩn kỹ thuật điện nghiêm ngặt, bàn giao hồ sơ đầy đủ và hỗ trợ thủ tục với EVN Bình Dương.
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
                  <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {step.title}
                  </h4>
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