import React from 'react';
import { ShieldCheck, MapPin, FileCheck, Building2, Zap, Users } from 'lucide-react';
import { PARTNERS_DATA } from '../data/solarData';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
  /** 'home' = bản gọn dùng ở trang chủ; 'page' = bản đầy đủ cho trang /gioi-thieu */
  variant?: 'home' | 'page';
  /** Trang chủ căn giữa tiêu đề + gạch xanh; trang con căn trái */
  align?: 'left' | 'center';
}

const COMMITMENTS = [
  { icon: FileCheck, text: 'Hợp Đồng Pháp Lý Minh Bạch' },
  { icon: Building2, text: 'Đảm Bảo Chống Dột Mái Nhà' },
  { icon: Zap, text: 'Hỗ Trợ EVN Bình Dương' },
  { icon: Users, text: 'Bảo Dưỡng Định Kỳ Miễn Phí' },
];

// Ảnh minh hoạ công trình / thiết bị (dùng ảnh có sẵn trong public/images)
const PARTNER_IMAGES = [
  { src: '/images/project_commercial_rooftop_1793562357223.jpg', alt: 'Công trình điện mặt trời mái tôn do VITECH CO thi công' },
  { src: '/images/hero_solar_rooftop_binhduong_1793562355617.jpg', alt: 'Hệ thống điện mặt trời áp mái tại Bình Dương' },
  { src: '/images/project_residential_solar_1793562356167.jpg', alt: 'Công trình điện mặt trời nhà phố' },
];

const PROCESS = [
  { step: '01', title: 'Khảo sát thực địa', desc: 'Đo đạc hướng nắng, kiểm tra kết cấu mái và xác định vị trí đặt thiết bị.' },
  { step: '02', title: 'Thiết kế & báo giá', desc: 'Lên phương án bố trí, bảng vật tư và báo giá trọn gói trước khi thi công.' },
  { step: '03', title: 'Thi công lắp đặt', desc: 'Thi công theo đúng bản vẽ, đảm bảo an toàn điện và chống dột mái.' },
  { step: '04', title: 'Nghiệm thu & bàn giao', desc: 'Chạy thử, hướng dẫn sử dụng, bàn giao hồ sơ và hỗ trợ thủ tục với EVN.' },
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenQuoteModal,
  variant = 'home',
  align = 'center',
}) => {
  const isPage = variant === 'page';
  const center = align === 'center';

  return (
    <section id="gioi-thieu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-[21rem] xl:pl-[24rem]">
        {/* Section Header */}
        <div className={center ? 'text-center max-w-3xl mx-auto mb-10' : 'mb-10'}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            {isPage
              ? 'Giới Thiệu Công Ty Điện Mặt Trời Uy Tín tại Bình Dương'
              : 'Thi Công Lắp Đặt Điện Mặt Trời Uy Tín tại Bình Dương'}
          </h2>
          <div className={`w-20 h-1.5 bg-emerald-600 mt-4 mb-5 rounded-full ${center ? 'mx-auto' : ''}`} />
          <p className={`text-base sm:text-lg text-slate-800 leading-relaxed ${center ? '' : 'max-w-3xl'}`}>
            <strong>VITECH CO</strong> (CÔNG TY TNHH CÔNG NGHIỆP VÀ XÂY DỰNG VITECH CO) được thành lập với sứ mệnh phổ cập nguồn năng lượng tái tạo sạch đến từng hộ gia đình và nhà máy sản xuất tại Bình Dương với mức chi phí đầu tư tiết kiệm và minh bạch nhất.
          </p>
        </div>

        {/* ===== Trang /gioi-thieu: ảnh dàn ngang toàn chiều rộng + nội dung mở rộng ===== */}
        {isPage ? (
          <>
            {/* Ảnh dàn ngang */}
            <div className="relative mb-12">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-900">
                <img
                  src="/images/solar_maintenance_technician_1793562357872.jpg"
                  alt="Đội ngũ kỹ thuật VITECH CO tại Bình Dương"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>KCN Sóng Thần 2 & TP. Thủ Dầu Một</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white">
                    Đội ngũ kỹ sư cơ động 100% tại chỗ
                  </div>
                </div>
              </div>

              {/* Float Card */}
              <div className="hidden sm:block absolute -top-5 right-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 font-medium">Bảo chứng Tier 1</div>
                    <div className="text-sm font-bold text-slate-900">100% Chính Hãng</div>
                  </div>
                </div>
              </div>
            </div>

            {/* NỘI DUNG MỞ RỘNG — khung tạm, sửa lại nội dung theo nhu cầu */}
            <div className="space-y-12">
              {/* 1. Về chúng tôi */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Về VITECH CO
                </h3>
                <div className="w-14 h-1 bg-emerald-600 mt-3 mb-5 rounded-full" />
                <div className="space-y-4 text-base sm:text-lg text-slate-800 leading-relaxed">
                  <p>
                    VITECH CO hoạt động trong lĩnh vực thi công lắp đặt điện mặt trời và các hạng mục hoàn thiện
                    công trình tại Bình Dương. Chúng tôi nhận thi công trọn gói từ khâu khảo sát, thiết kế,
                    cung cấp thiết bị đến lắp đặt, nghiệm thu và bảo trì sau bàn giao.
                  </p>
                  <p>
                    Với đội ngũ kỹ thuật trực tiếp tại địa phương, chúng tôi rút ngắn thời gian khảo sát và
                    xử lý sự cố, đồng thời đồng hành cùng khách hàng trong suốt quá trình sử dụng công trình.
                  </p>
                </div>
              </div>

              {/* 2. Cam kết — nội dung văn bản (khung tạm, sửa lại tuỳ nhu cầu) */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Cam kết với khách hàng
                </h3>
                <div className="w-14 h-1 bg-emerald-600 mt-3 mb-5 rounded-full" />
                <div className="space-y-4 text-base sm:text-lg text-slate-800 leading-relaxed">
                  <p>
                    Mọi hạng mục thi công đều được ghi rõ trong hợp đồng: chủng loại thiết bị, khối lượng,
                    tiến độ và chính sách bảo hành. Khách hàng nắm đầy đủ thông tin trước khi khởi công,
                    không phát sinh chi phí ngoài báo giá đã thống nhất.
                  </p>
                  <p>
                    Trong quá trình lắp đặt, chúng tôi tuân thủ tiêu chuẩn an toàn điện và xử lý chống thấm
                    tại các vị trí chân kệ, bảo đảm mái nhà không bị dột sau thi công. Sau bàn giao, hệ thống
                    được theo dõi và bảo dưỡng định kỳ theo thoả thuận giữa hai bên.
                  </p>
                  <p>
                    Với các hệ thống điện mặt trời, VITECH CO hỗ trợ khách hàng chuẩn bị hồ sơ kỹ thuật và
                    làm việc với đơn vị điện lực địa phương để hoàn tất thủ tục đấu nối theo quy định hiện hành.
                  </p>
                </div>
              </div>

              {/* 3. Quy trình */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Quy trình làm việc
                </h3>
                <div className="w-14 h-1 bg-emerald-600 mt-3 mb-5 rounded-full" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {PROCESS.map((item) => (
                    <div key={item.step} className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs">
                      <div className="text-2xl font-black text-emerald-600 tabular-nums font-mono leading-none">
                        {item.step}
                      </div>
                      <h4 className="mt-2 text-base font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Đối tác của VITECH CO */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Đối tác của VITECH CO
                </h3>
                <div className="w-14 h-1 bg-emerald-600 mt-3 mb-5 rounded-full" />

                <p className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl">
                  VITECH CO làm việc trực tiếp với các hãng thiết bị và nhà cung cấp vật tư uy tín, hạn chế
                  tối đa khâu trung gian. Mỗi lô thiết bị đều có hồ sơ xuất xứ, chứng nhận chất lượng và
                  chính sách bảo hành chính hãng từ nhà sản xuất.
                </p>

                {([
                  { key: 'solar' as const, title: 'Tấm pin & Inverter' },
                  { key: 'aluminum' as const, title: 'Nhôm, cửa cuốn & phụ kiện' },
                ]).map((group) => (
                  <div key={group.key} className="mt-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-4">
                      {group.title}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {PARTNERS_DATA.filter((p) => p.group === group.key).map((partner) => (
                        <div
                          key={partner.name}
                          className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-xs"
                        >
                          {/* Logo thương hiệu (fallback: chữ viết tắt) */}
                          <div className="w-16 h-12 shrink-0 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden">
                            {partner.logo ? (
                              <img
                                src={partner.logo}
                                alt={`Logo ${partner.name}`}
                                referrerPolicy="no-referrer"
                                className="max-w-[52px] max-h-[34px] object-contain"
                              />
                            ) : (
                              <span className="text-sm font-extrabold text-slate-700 tracking-tight">
                                {partner.initials}
                              </span>
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="text-base font-bold text-slate-900">{partner.name}</div>
                            <p className="mt-1 text-sm text-slate-700 leading-relaxed">{partner.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Hình ảnh công trình thực tế */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                  {PARTNER_IMAGES.map((img) => (
                    <div
                      key={img.src}
                      className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-40 sm:h-36 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* ===== Trang chủ: bố cục gọn ảnh + 4 cam kết ===== */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-900">
                <img
                  src="/images/solar_maintenance_technician_1793562357872.jpg"
                  alt="Đội ngũ kỹ thuật VITECH CO tại Bình Dương"
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
                    <div className="text-xs text-slate-600 font-medium">Bảo chứng Tier 1</div>
                    <div className="text-sm font-bold text-slate-900">100% Chính Hãng</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Pillars of Trust */}
            <div className="grid grid-cols-1 gap-5">
              {COMMITMENTS.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 p-5 bg-slate-50 rounded-2xl border border-slate-200 font-bold text-slate-900 text-base"
                >
                  <Icon className="w-5 h-5 shrink-0 text-emerald-600" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
