import React from 'react';
import { ShieldCheck, Award, Zap, CheckCircle2, MapPin, Users, Building2, FileCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="gioi-thieu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Stats Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-900">
              <img
                src="/images/solar_maintenance_technician_1793562357872.jpg"
                alt="Đội ngũ kỹ thuật ThanhNamSolar tại Bình Dương"
                className="w-full h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>KCN Sóng Thần 2 & TP. Thủ Dầu Một</span>
                </div>
                <div className="text-lg font-bold text-white">
                  Đội ngũ kỹ sư cơ động 100% tại chỗ
                </div>
              </div>
            </div>

            {/* Float Card */}
            <div className="hidden sm:block absolute -top-5 -right-5 bg-white p-4 rounded-2xl border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Bảo chứng Tier 1</div>
                  <div className="text-sm font-bold text-slate-900">100% Chính Hãng</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Tổng Thầu EPC Năng Lượng Mặt Trời Uy Tín tại Bình Dương
              </h2>
              <div className="w-20 h-1.5 bg-emerald-600 mt-4 mb-6 rounded-full" />
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong>ThanhNamSolar</strong> (CÔNG TY TNHH KỸ THUẬT & NĂNG LƯỢNG THANH NAM) được thành lập với sứ mệnh phổ cập nguồn năng lượng tái tạo sạch đến từng hộ gia đình và nhà máy sản xuất tại Bình Dương với mức chi phí đầu tư tiết kiệm và minh bạch nhất.
            </p>

            {/* 4 Pillars of Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-base mb-2">
                  <FileCheck className="w-5 h-5 text-emerald-600" />
                  <span>Hợp Đồng Pháp Lý Minh Bạch</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cam kết rõ ràng về chủng loại thiết bị, sản lượng sinh điện và tiến độ thi công.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-base mb-2">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                  <span>Chống Dột Mái Nhà 100%</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sử dụng kẹp tôn Seamlock, Klip-lok hoặc bulong chống dột chuyên dụng 3 lớp keo bảo vệ.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-base mb-2">
                  <Zap className="w-5 h-5 text-emerald-600" />
                  <span>Hỗ Trợ EVN Bình Dương</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Hỗ trợ trọn gói thủ tục đăng ký hệ thống phát điện tự sản tự tiêu với Điện lực địa phương.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-base mb-2">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <span>Đồng Hành 25 Năm</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Chăm sóc, bảo dưỡng, giám sát từ xa trọn đời công trình qua app điện thoại di động.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};