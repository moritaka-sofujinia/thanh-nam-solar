import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, AlertCircle, Sun, ShieldCheck } from 'lucide-react';
import { DISTRICTS_BINH_DUONG, COMPANY_INFO } from '../data/solarData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    billAmount?: number;
    kwp?: number;
    panels?: number;
    savingsMonth?: number;
    customerType?: string;
    customNote?: string;
  } | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    district: DISTRICTS_BINH_DUONG[0],
    systemType: 'Hộ gia đình',
    monthlyBill: '2 - 5 triệu/tháng',
  });

  // Nội dung cấu hình đã chọn ở bảng giá (nếu có) — không hiển thị thành ô nhập,
  // chỉ đính kèm vào tin nhắn gửi sang Zalo.
  const [calcSummary, setCalcSummary] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!initialData) return;
    setFormData((prev) => ({
      ...prev,
      systemType: initialData.customerType || prev.systemType,
    }));

    const summary =
      initialData.customNote ||
      (initialData.kwp
        ? `Cần tư vấn gói ${initialData.kwp} kWp (~${initialData.panels} tấm pin), tiền điện hiện tại: ${(initialData.billAmount || 0).toLocaleString('vi-VN')} đ/tháng.`
        : '');
    setCalcSummary(summary);
  }, [initialData]);

  if (!isOpen) return null;

  // Dựng link Zalo kèm nội dung tin nhắn đã điền sẵn.
  // Có thể gọi lại bất cứ lúc nào từ dữ liệu form hiện tại.
  const getZaloLink = () => {
    const lines = [
      'XIN BÁO GIÁ ĐIỆN MẶT TRỜI',
      `Họ tên: ${formData.fullName.trim()}`,
      `SĐT/Zalo: ${formData.phone.trim()}`,
      `Khu vực: ${formData.district}`,
      `Loại hình: ${formData.systemType}`,
      `Tiền điện/tháng: ${formData.monthlyBill}`,
    ];
    if (calcSummary) lines.push(`Cấu hình quan tâm: ${calcSummary}`);
    return `${COMPANY_INFO.zaloUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 9 || cleanPhone.length > 11) {
      setErrorMsg('Vui lòng nhập số điện thoại hợp lệ (10 chữ số).');
      return;
    }

    setErrorMsg('');

    const zaloLink = getZaloLink();

    // Lưu lại lead trên máy
    const saved = JSON.parse(localStorage.getItem('vitechco_inquiries') || '[]');
    localStorage.setItem(
      'vitechco_inquiries',
      JSON.stringify([
        {
          ...formData,
          calcSummary,
          systemKwp: initialData?.kwp || null,
          timestamp: new Date().toISOString(),
        },
        ...saved,
      ])
    );

    // Mở Zalo ngay để khách không phải tự nhắn lại.
    // Dùng window.open trong chính sự kiện click/submit để trình duyệt (nhất là Safari/iOS)
    // không chặn popup.
    const zaloWindow = window.open(zaloLink, '_blank', 'noopener,noreferrer');
    if (!zaloWindow) {
      // Popup bị chặn → chuyển trang ngay trong tab hiện tại
      window.location.href = zaloLink;
    }

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white relative">
          <button
            type="button"
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Đóng popup"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
            <Sun className="w-3.5 h-3.5" />
            <span>VITECH CO Bình Dương</span>
          </div>

          <h3 className="text-xl font-bold text-white">
            Nhận Báo Giá Trọn Gói & Khảo Sát Mái 0đ
          </h3>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Đã Soạn Tin Nhắn Zalo!
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Nếu Zalo chưa tự mở, bấm nút bên dưới để gửi yêu cầu cho chúng tôi.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 text-left space-y-1.5">
                <div><strong>Khách hàng:</strong> {formData.fullName}</div>
                <div><strong>Số điện thoại:</strong> {formData.phone}</div>
                <div><strong>Địa bàn khảo sát:</strong> {formData.district}</div>
                <div><strong>Nhu cầu:</strong> {formData.systemType}</div>
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={getZaloLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleResetAndClose}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Tin Nhắn Qua Zalo</span>
                </a>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.hotlineRaw}`}
                    className="flex-1 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Gọi Hotline Ngay</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Hoàn tất
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Calculator Pre-fill Banner */}
              {initialData?.kwp && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center justify-between">
                  <div>
                    <span className="font-bold">Đã chọn cấu hình đề xuất: </span>
                    <span>{initialData.kwp} kWp ({initialData.panels} tấm pin)</span>
                  </div>
                  <span className="font-bold text-emerald-700 tabular-nums">
                    Tiết kiệm ~{(initialData.savingsMonth || 0).toLocaleString('vi-VN')} đ/tháng
                  </span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Họ và tên quý khách <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Trần Văn Nam"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Số điện thoại / Zalo liên hệ <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0988 xxx xxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-emerald-600 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Khu vực tại Bình Dương
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white"
                  >
                    {DISTRICTS_BINH_DUONG.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Loại hình công trình
                  </label>
                  <select
                    value={formData.systemType}
                    onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white"
                  >
                    <option value="Hộ gia đình">Hộ gia đình / Biệt thự</option>
                    <option value="Nhà xưởng / Doanh nghiệp">Nhà xưởng / Doanh nghiệp</option>
                    <option value="Hệ thống Hybrid lưu trữ">Hệ thống Hybrid lưu trữ</option>
                    <option value="Bảo dưỡng / Vệ sinh pin">Bảo dưỡng / Vệ sinh pin</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-600 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Cam kết bảo mật thông tin 100%.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Gửi Yêu Cầu Báo Giá Ngay</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
