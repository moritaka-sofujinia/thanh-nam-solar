import React, { useState } from 'react';
import { MapPin, Zap, ArrowRight, ChevronLeft, ChevronRight, X, Check } from 'lucide-react';
import { PROJECTS_DATA } from '../data/solarData';
import type { ProjectItem } from '../data/solarData';

interface ProjectsSectionProps {
  onOpenQuoteModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const displayProjects = PROJECTS_DATA.slice(0, 3);
  const current = displayProjects[activeIndex] ?? displayProjects[0];

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + displayProjects.length) % displayProjects.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % displayProjects.length);

  return (
    <section id="du-an" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            DỰ ÁN TIÊU BIỂU TẠI BÌNH DƯƠNG
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hình ảnh và thông số thực tế các công trình điện mặt trời do <strong className="font-bold text-slate-900">ThanhNam<span className="text-emerald-600">Solar</span></strong> trực tiếp thiết kế, thi công và bàn giao vận hành tại Thủ Dầu Một, Dĩ An, Thuận An, Bến Cát.
          </p>
        </div>

        {/* Single large featured project card with arrow navigation */}
        <div className="relative">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">
            {/* Left: large image */}
            <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[460px] bg-slate-100 overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/20" />

              {/* Location badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-xs text-slate-900 px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{current.district}</span>
              </div>

              {/* Capacity badge */}
              <div className="absolute bottom-5 left-5 bg-slate-950/70 backdrop-blur-xs text-white px-4 py-2 rounded-xl text-sm">
                Công suất: <span className="font-bold text-emerald-400">{current.capacity}</span>
              </div>
            </div>

            {/* Right: content */}
            <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-3">
                  {current.title}
                </h3>

                <p className="text-base sm:text-lg font-semibold text-emerald-700 mb-4 flex items-start gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                  <span>{current.location}</span>
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">Tấm pin</div>
                    <div className="text-sm font-semibold text-slate-800 leading-snug">{current.solarPanels}</div>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">Biến tần Inverter</div>
                    <div className="text-sm font-semibold text-slate-800 leading-snug">{current.inverter}</div>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">Tiết kiệm/tháng</div>
                    <div className="text-sm font-semibold text-emerald-700">{current.monthlySavings}</div>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">Thu hồi vốn</div>
                    <div className="text-sm font-semibold text-emerald-700">{current.paybackPeriod}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(current)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Xem chi tiết công trình</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-0 sm:-translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:text-emerald-700 hover:border-emerald-300 flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Dự án trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-0 sm:translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:text-emerald-700 hover:border-emerald-300 flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Dự án tiếp theo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-7">
            {displayProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === activeIndex ? 'w-8 bg-emerald-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Xem dự án ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Image Header */}
            <div className="relative h-64 bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Đóng popup"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <span>{selectedProject.district}</span>
                  <span>·</span>
                  <span>{selectedProject.completionDate}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <div className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500">Công suất</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">{selectedProject.capacity}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500">Tiết kiệm/tháng</div>
                  <div className="text-sm font-bold text-emerald-700 mt-0.5">{selectedProject.monthlySavings}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500">Sản lượng năm</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedProject.annualGeneration}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500">Hoàn vốn</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedProject.paybackPeriod}</div>
                </div>
              </div>

              {/* Equipment Breakdown */}
              <div className="p-5 bg-emerald-50/50 border border-emerald-200/80 rounded-xl space-y-2 text-xs">
                <div className="font-bold text-slate-900 text-sm mb-2">Cấu hình thiết bị chi tiết:</div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tấm quang điện:</strong> {selectedProject.solarPanels} (Bảo hành hiệu suất 25 năm)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Biến tần hòa lưới:</strong> {selectedProject.inverter} (Bảo hành 5 năm, kết nối WiFi giám sát)</span>
                </div>
                {selectedProject.battery && (
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Lưu trữ năng lượng:</strong> {selectedProject.battery}</span>
                  </div>
                )}
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Vật tư phụ:</strong> Ray nhôm Anode chống gỉ, cáp chuyên dụng DC Solar Leader 4mm², tủ bảo vệ cắt lọc sét lan truyền Schneider/Chint</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                  Mô tả dự án & Hiệu quả thực tế
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuoteModal();
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer shadow-xs flex items-center gap-2"
                >
                  <span>Khảo sát mái & Báo giá tương tự</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};