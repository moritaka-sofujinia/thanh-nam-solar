import React from 'react';
import { CheckCircle2, Shield, Zap, Sparkles, MapPin, ArrowRight, Table } from 'lucide-react';
import { PRICING_PACKAGES, DISTRICTS_BINH_DUONG, COMPANY_INFO } from '../data/solarData';

interface SeoContentSectionProps {
  onOpenQuoteModal: (customNote?: string) => void;
}

export const SeoContentSection: React.FC<SeoContentSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="bang-gia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core SEO Header per user prompt specification */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Dịch Vụ Lắp Đặt Điện Mặt Trời Giá Rẻ Tại Bình Dương Uy Tín Nhất
          </h2>

          <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-5 mb-6 rounded-full" />

          {/* Standard SEO Paragraph required by user spec */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed text-balance">
            <strong>ThanhNam<span className="text-emerald-600">Solar</span></strong> tự hào là đơn vị chuyên cung cấp giải pháp thiết kế và lắp đặt điện mặt trời giá rẻ tại Bình Dương. Chúng tôi mang đến các gói đầu tư tối ưu cho hộ gia đình và doanh nghiệp với mức chi phí tiết kiệm nhất, hoàn vốn nhanh, thiết bị đạt chuẩn quốc tế (Tier 1) cùng dịch vụ hậu mãi đồng hành trọn đời công trình.
          </p>
        </div>

        {/* Pricing Reference Table - Transparent Corporate Viettel Style */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
              <Table className="w-6 h-6 text-emerald-600" />
              <span>Bảng Giá Lắp Đặt Điện Mặt Trời Trọn Gói Mới Nhất 2026</span>
            </h3>
            <p className="text-sm text-slate-600 mt-1.5">
              Đơn giá đã bao gồm toàn bộ tấm pin Tier 1, biến tần Inverter, tủ điện bảo vệ, dây dẫn, khung ray nhôm và nhân công lắp đặt tại Bình Dương.
            </p>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm sm:text-base">
              <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-xs">
                <tr>
                  <th scope="col" className="px-6 py-4.5">Gói Công Suất</th>
                  <th scope="col" className="px-5 py-4.5">Diện Tích Mái</th>
                  <th scope="col" className="px-5 py-4.5">Sản Lượng Điện/Tháng</th>
                  <th scope="col" className="px-6 py-4.5 text-right">Giá Trọn Gói</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {PRICING_PACKAGES.slice(0, 3).map((pkg, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-5">
                      <div className="font-bold text-slate-900 text-base">{pkg.systemSize}</div>
                      <div className="text-xs sm:text-sm text-slate-500 mt-1">{pkg.panelCount} · {pkg.inverterType}</div>
                    </td>
                    <td className="px-5 py-5 text-slate-600 whitespace-nowrap">
                      {pkg.roofArea}
                    </td>
                    <td className="px-5 py-5 font-semibold text-slate-800 tabular-nums whitespace-nowrap">
                      {pkg.monthlyOutput}
                    </td>
                    <td className="px-6 py-5 text-right whitespace-nowrap">
                      <span className="font-extrabold text-slate-900 text-base sm:text-lg tabular-nums">
                        {pkg.packagePrice}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-[11px] text-slate-500 italic text-right">
            * Báo giá có thể thay đổi tùy thuộc vào chiều cao mái nhà, địa hình thi công và yêu cầu cấu hình biến tần cao cấp.
          </div>
        </div>

        {/* 3 Pillars: Why ThanhNamSolar is the cheapest & best in Binh Duong */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative overflow-hidden p-7 bg-white rounded-2xl border border-emerald-200/70 shadow-sm hover:shadow-lg hover:border-emerald-400/70 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300" />
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
              Kho Thiết Bị Trực Tiếp
              <br />
              Tại Bình Dương
            </h4>
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 my-4" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Kho vật tư tại KCN Sóng Thần (Dĩ An), nhập trực tiếp tấm pin và Inverter từ nhà máy, giúp khách hàng tiết kiệm 15% - 20% tổng chi phí.
            </p>
          </div>

          <div className="relative overflow-hidden p-7 bg-white rounded-2xl border border-emerald-200/70 shadow-sm hover:shadow-lg hover:border-emerald-400/70 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300" />
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
              Đội Ngũ Kỹ Sư
              <br />
              Địa Phương Cơ Động
            </h4>
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 my-4" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Kỹ sư túc trực tại Thủ Dầu Một, Thuận An, Dĩ An, Bến Cát. Khảo sát tận nơi trong 24 giờ và xử lý sự cố kỹ thuật trong 2-4 giờ.
            </p>
          </div>

          <div className="relative overflow-hidden p-7 bg-white rounded-2xl border border-emerald-200/70 shadow-sm hover:shadow-lg hover:border-emerald-400/70 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300" />
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
              Am Hiểu Thủ Tục
              <br />
              Điện Lực Bình Dương
            </h4>
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 my-4" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Hỗ trợ hồ sơ kỹ thuật đấu nối với Công ty Điện lực Bình Dương, cài đặt hệ thống chống phát ngược đạt chuẩn kỹ thuật điện hiện hành.
            </p>
          </div>
        </div>

        {/* Coverage District Tag Cloud in Binh Duong */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-emerald-400 font-bold mb-1.5">
                Khu vực phục vụ hỏa tốc
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Khảo Sát Miễn Phí Tại Tất Cả Các Huyện Thị Tỉnh Bình Dương
              </h4>
            </div>
            <div className="flex flex-wrap gap-2 max-w-lg">
              {DISTRICTS_BINH_DUONG.map((district) => (
                <span
                  key={district}
                  className="px-3.5 py-1.5 bg-slate-800 text-slate-200 border border-slate-700 rounded-md text-sm font-medium"
                >
                  {district}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};