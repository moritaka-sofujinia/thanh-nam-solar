import React from 'react';
import { BadgeCheck, ShieldCheck, ShieldAlert, BatteryCharging, Layers, Cog, Smartphone, Frame } from 'lucide-react';
import { ImageGallery } from './ImageGallery';

/** 4 ảnh công trình — sửa mô tả tại đây */
const GALLERY = [
  { src: '/images/austdoor/austdoor-1.avif', alt: 'Thi công cửa cuốn Austdoor tại Bình Dương - ảnh 1', caption: 'Thi công cửa cuốn Austdoor' },
  { src: '/images/austdoor/austdoor-2.avif', alt: 'Thi công cửa cuốn Austdoor tại Bình Dương - ảnh 2', caption: 'Thi công cửa cuốn Austdoor' },
  { src: '/images/austdoor/austdoor-3.avif', alt: 'Thi công cửa cuốn Austdoor tại Bình Dương - ảnh 3', caption: 'Thi công cửa cuốn Austdoor' },
  { src: '/images/austdoor/austdoor-4.avif', alt: 'Thi công cửa cuốn Austdoor tại Bình Dương - ảnh 4', caption: 'Thi công cửa cuốn Austdoor' },
];

interface AustdoorSectionProps {
  onOpenQuoteModal: () => void;
  /** Trang chủ căn giữa; trang con căn trái */
  align?: 'left' | 'center';
}

const USPS = [
  {
    icon: BadgeCheck,
    title: '100% Cửa Cuốn Austdoor Chính Hãng Đồng Bộ',
    body: 'Cam kết cung cấp sản phẩm cửa cuốn Austdoor chính hãng 100% từ Tập đoàn Austdoor, có đầy đủ tem nhãn, giấy tờ chứng nhận xuất xưởng (CO/CQ). Đền tiền 200% nếu phát hiện hàng giả, hàng nhái kém chất lượng.',
  },
  {
    icon: ShieldCheck,
    title: 'Tích Hợp Công Nghệ Chống Sao Chép Mã Khóa (ARC)',
    body: 'Mỗi lần bấm điều khiển sẽ tạo ra hàng tỷ mã ngẫu nhiên không lặp lại nhờ công nghệ Austromatic Rolling Code (ARC). Giúp ngăn chặn hoàn toàn kẻ gian sử dụng thiết bị dò mã để mở cửa, bảo vệ an toàn tối đa cho ngôi nhà.',
  },
  {
    icon: ShieldAlert,
    title: 'Hệ Thống Đảo Chiều / Tự Dừng Khi Gặp Vật Cản',
    body: 'Tất cả các dòng cửa cuốn đều tích hợp hệ thống cảm biến thông minh: tự động đảo chiều hoặc dừng lại ngay lập tức khi phát hiện vật cản (người, xe cộ, vật nuôi). Đảm bảo an toàn tuyệt đối cho trẻ nhỏ và người già.',
  },
];

/** Mục lưu điện — hiển thị dạng ô ngang nền đen nổi bật */
const HIGHLIGHT_USP = {
  icon: BatteryCharging,
  label: 'An toàn khi mất điện',
  title: 'Bộ Tích Điện (UPS) & Xử Lý Sự Cố Khi Mất Điện',
  body: 'Cung cấp giải pháp lưu điện thông minh Austdoor giúp vận hành cửa nhẹ nhàng từ 48h–72h khi xảy ra sự cố mất điện. Đồng thời trang bị dây giật chốt xích rút chốt ly hợp để mở cửa bằng tay thoát hiểm dễ dàng trong tình huống khẩn cấp.',
};

const PRODUCT_LINES = [
  {
    name: 'Cửa Cuốn Khe Thoáng Thế Hệ Mới',
    variants: 'Combi / Supera / Line-Art',
    rows: [
      {
        label: 'Đặc điểm',
        value: 'Làm từ hợp kim nhôm 6063-T5 cao cấp, thiết kế các ô lấy sáng và khe thoáng thông minh giúp căn nhà luôn thoáng đãng.',
      },
      {
        label: 'Ưu điểm',
        value: 'Trang bị hệ gioăng giảm chấn triệt tiêu tiếng ồn, kiểu dáng hiện đại, phối màu thẩm mỹ (vàng kem, ghi xám, café).',
      },
    ],
  },
  {
    name: 'Cửa Cuốn Tấm Liền Công Nghệ Úc',
    variants: 'Austroll',
    rows: [
      {
        label: 'Đặc điểm',
        value: 'Thân cửa bằng thép hợp kim Colorbond (BlueScope Steel - Úc), sử dụng dây polyguide chạy dọc thân cửa.',
      },
      {
        label: 'Ưu điểm',
        value: 'Tốc độ đóng mở nhanh gấp 3 lần cửa khe thoáng, vận hành siêu êm, có chế độ mở bằng tay nhẹ nhàng khi mất điện.',
      },
    ],
  },
  {
    name: 'Cửa Cuốn Trượt Trần / Cửa Cuốn Chuyên Dụng',
    variants: 'Overhead / Chống cháy / Siêu trường',
    rows: [
      {
        label: 'Ứng dụng',
        value: 'Chuyên dùng cho gara ô tô trần thấp, nhà xưởng, trung tâm thương mại hoặc các công trình đòi hỏi tiêu chuẩn phòng cháy chữa cháy nghiêm ngặt.',
      },
    ],
  },
];

const ACCESSORIES = [
  {
    icon: Cog,
    name: 'Motor Cửa Cuốn Austdoor',
    desc: 'Motor nhập khẩu đồng bộ (ARG, AH, AK) tích hợp phanh đĩa kép, rơ-le nhiệt bảo vệ motor khi quá tải.',
  },
  {
    icon: BatteryCharging,
    name: 'Bộ Lưu Điện (UPS Austdoor)',
    desc: 'Công nghệ xả điện thông minh giúp kéo dài tuổi thọ ắc quy, đảm bảo nguồn điện dự phòng ổn định.',
  },
  {
    icon: Smartphone,
    name: 'Giải Pháp Thông Minh (Austdoor App / Smarthome)',
    desc: 'Tích hợp bộ điều khiển mở cửa bằng điện thoại qua Internet/Wifi, giám sát trạng thái cửa từ xa, hẹn giờ đóng mở và kết nối hệ thống báo động chống đột nhập, báo cháy.',
  },
];

export const AustdoorSection: React.FC<AustdoorSectionProps> = ({ align = 'left' }) => {
  const center = align === 'center';

  return (
    <section id="cua-cuon-austdoor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-[21rem] xl:pl-[24rem]">
        {/* Header */}
        <div className={center ? 'text-center max-w-3xl mx-auto mb-10' : 'mb-10'}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Thi Công Cửa Cuốn Austdoor Bình Dương Chính Hãng
          </h2>
          <div className={`w-20 h-1.5 bg-emerald-600 mt-4 mb-5 rounded-full ${center ? 'mx-auto' : ''}`} />
          <p className={`text-base sm:text-lg text-slate-800 leading-relaxed ${center ? '' : 'max-w-3xl'}`}>
            VITECH CO nhận lắp đặt cửa cuốn Austdoor chính hãng cho nhà phố, biệt thự, gara và nhà xưởng
            tại Bình Dương — khảo sát tận nơi, báo đúng mã sản phẩm và bàn giao đầy đủ giấy tờ bảo hành.
          </p>
        </div>

        {/* Cụm ảnh — dùng chung component với trang Dự án */}
        <div className="mb-12">
          <ImageGallery
            items={GALLERY.map((img, i) => ({
              src: img.src,
              alt: img.alt,
              title: img.caption,
              subtitle: `Hình ảnh ${i + 1}/${GALLERY.length} — VITECH CO`,
            }))}
          />
        </div>

        <article className="max-w-3xl">
          {/* Cam kết / ưu điểm */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Cam kết chất lượng &amp; dịch vụ
          </h3>
          <div className="w-14 h-1 bg-emerald-600 mt-3 mb-6 rounded-full" />

          <div className="space-y-6">
            {USPS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-l-2 border-emerald-600 pl-4 sm:pl-5">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug flex items-start gap-2">
                  <Icon className="w-5 h-5 shrink-0 text-emerald-700 mt-0.5" />
                  <span>{title}</span>
                </h4>
                <p className="mt-1.5 text-base text-slate-800 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Ô ngang nền đen — đồng bộ khối "Khu vực phục vụ hỏa tốc" ở trang chủ */}
          <div className="mt-8 p-6 sm:p-8 bg-slate-900 text-white rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="md:w-[45%] md:shrink-0">
                <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-emerald-400 font-bold mb-1.5">
                  <HIGHLIGHT_USP.icon className="w-4 h-4" />
                  {HIGHLIGHT_USP.label}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {HIGHLIGHT_USP.title}
                </h4>
              </div>
              <p className="md:flex-1 text-sm sm:text-base text-slate-200 leading-relaxed md:border-l md:border-slate-700 md:pl-6">
                {HIGHLIGHT_USP.body}
              </p>
            </div>
          </div>

          {/* A. Phân loại dòng sản phẩm */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-12">
            A. Phân Loại Theo Dòng Sản Phẩm Cửa Cuốn
          </h3>
          <div className="w-14 h-1 bg-emerald-600 mt-3 mb-6 rounded-full" />

          <div className="space-y-6">
            {PRODUCT_LINES.map((line) => (
              <div key={line.name}>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2">
                  <Frame className="w-5 h-5 shrink-0 text-emerald-700 mt-0.5" />
                  <span>
                    {line.name}{' '}
                    <span className="font-medium text-slate-600">({line.variants})</span>
                  </span>
                </h4>
                {line.rows.map((row) => (
                  <p key={row.label} className="mt-1.5 text-base text-slate-800 leading-relaxed">
                    <strong>{row.label}:</strong> {row.value}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* B. Phụ kiện & giải pháp */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-12">
            B. Hệ Phụ Kiện Đồng Bộ &amp; Giải Pháp Thông Minh
          </h3>
          <div className="w-14 h-1 bg-emerald-600 mt-3 mb-6 rounded-full" />

          <div className="space-y-6">
            {ACCESSORIES.map(({ icon: Icon, name, desc }) => (
              <div key={name}>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2">
                  <Icon className="w-5 h-5 shrink-0 text-emerald-700 mt-0.5" />
                  <span>{name}</span>
                </h4>
                <p className="mt-1.5 text-base text-slate-800 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 pt-5 border-t border-slate-200 text-sm text-slate-600 leading-relaxed">
            <em>
              Mọi hạng mục thi công đều được đo đạc, báo giá và ghi rõ trong hợp đồng trước khi thực hiện.
              Quý khách cần khảo sát miễn phí, vui lòng liên hệ hotline hoặc gửi yêu cầu báo giá.
            </em>
          </p>
        </article>
      </div>
    </section>
  );
};
