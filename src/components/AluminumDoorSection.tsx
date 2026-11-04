import React from 'react';
import { BadgeCheck, Wrench, Settings2, HardHat, Layers, Frame, Sparkles } from 'lucide-react';
import { ImageGallery } from './ImageGallery';

/** 4 ảnh công trình — sửa mô tả tại đây */
const GALLERY = [
  { src: '/images/xingfa/xingfa-1.avif', alt: 'Thi công cửa nhôm Xingfa tại Bình Dương - ảnh 1', caption: 'Thi công cửa nhôm Xingfa' },
  { src: '/images/xingfa/xingfa-2.avif', alt: 'Thi công cửa nhôm Xingfa tại Bình Dương - ảnh 2', caption: 'Thi công cửa nhôm Xingfa' },
  { src: '/images/xingfa/xingfa-3.avif', alt: 'Thi công cửa nhôm Xingfa tại Bình Dương - ảnh 3', caption: 'Thi công cửa nhôm Xingfa' },
  { src: '/images/xingfa/xingfa-4.avif', alt: 'Thi công cửa nhôm Xingfa tại Bình Dương - ảnh 4', caption: 'Thi công cửa nhôm Xingfa' },
];



interface AluminumDoorSectionProps {
  onOpenQuoteModal: () => void;
  /** Trang chủ căn giữa; trang con căn trái */
  align?: 'left' | 'center';
}

const USPS = [
  {
    icon: BadgeCheck,
    title: '100% Nhôm Xingfa Tem Đỏ Nhập Khẩu Chính Hãng',
    body: 'Cam kết cung cấp thanh nhôm Xingfa Quảng Đông tem đỏ nhập khẩu 100%, có đầy đủ chứng nhận CO/CQ về nguồn gốc xuất xứ. Đền tiền 200% nếu phát hiện hàng giả, hàng nhái kém chất lượng.',
  },
  {
    icon: Wrench,
    title: 'Phụ Kiện Đồng Bộ Cao Cấp & Keo Chuyên Dụng',
    body: 'Sử dụng 100% phụ kiện chính hãng (Kinlong, Draho, CMECH,...) kết hợp cùng keo silicone đặc chủng (Dow Corning / Apollo) và hệ gioăng EPDM kép chống co ngót. Giúp cửa vận hành êm ái, chống thấm nước mưa tuyệt đối và độ bền trên 20 năm.',
  },
  {
    icon: Settings2,
    title: 'Công Nghệ Ép Góc Tự Động Kín Khít 100%',
    body: 'Hệ thống xưởng sản xuất trang bị máy cắt hai đầu, máy ép góc dàn tự động CNC hiện đại. Đường ghép góc vuông vức, kín khít hoàn hảo, chịu lực chống xệ cánh vượt trội so với phương pháp bắt vít thủ công.',
  },
];

/** Mục đội ngũ tách riêng — hiển thị dạng ô ngang nền đen nổi bật */
const TEAM_USP = {
  icon: HardHat,
  title: 'Đội Ngũ Kỹ Thuật Nhiều Năm Kinh Nghiệm',
  body: 'Thợ thi công tay nghề cao, tỉ mỉ trong từng đường keo và góc ép. Đảm bảo thi công đúng bản vẽ thiết kế, giữ vệ sinh công trình sạch sẽ và bàn giao đúng tiến độ cam kết.',
};

const SYSTEMS = [
  {
    name: 'Xingfa Hệ 55',
    thickness: 'Dày 1.4mm – 2.0mm',
    usage: 'Chuyên dùng cho cửa đi mở quay, cửa sổ mở quay và cửa sổ mở hất.',
    feature:
      'Kết cấu khoang rỗng cùng đường gân gia cường chịu lực, tạo độ vững chắc cao, chống va đập gió bão cực tốt.',
  },
  {
    name: 'Xingfa Hệ 93 / Hệ 2001',
    thickness: 'Dày 2.0mm',
    usage: 'Chuyên dùng cho cửa đi mở trượt (lùa) và cửa sổ mở trượt.',
    feature:
      'Thiết kế cánh trượt trên ray giúp tối ưu hóa diện tích sử dụng, thích hợp cho không gian hẹp hoặc cửa ra ban công, sân thượng.',
  },
  {
    name: 'Xingfa Hệ 63',
    thickness: 'Dày 1.5mm – 3.0mm',
    usage: 'Chuyên dùng cho cửa đi xếp trượt (3 cánh, 4 cánh, 6 cánh, 8 cánh...).',
    feature:
      'Cho phép mở rộng tối đa diện tích mặt tiền, kết nối không gian bên trong và bên ngoài một cách trọn vẹn.',
  },
];

const GLASSES = [
  {
    name: 'Kính cường lực (8mm – 12mm)',
    desc: 'Khả năng chịu lực gấp 4 – 5 lần kính thường, an toàn tuyệt đối.',
  },
  {
    name: 'Kính an toàn 2 lớp (6.38mm – 10.38mm)',
    desc: 'Không vỡ vụn khi có tác động mạnh, tăng cường an ninh.',
  },
  {
    name: 'Kính hộp cách âm cách nhiệt (5-9-5mm)',
    desc: 'Giảm tiếng ồn đến 90%, cách nhiệt hiệu quả giúp tiết kiệm điện máy lạnh.',
  },
];

export const AluminumDoorSection: React.FC<AluminumDoorSectionProps> = ({ align = 'left' }) => {
  const center = align === 'center';



  return (
    <section id="cua-nhom-xingfa" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-[21rem] xl:pl-[24rem]">
        {/* Header */}
        <div className={center ? 'text-center max-w-3xl mx-auto mb-10' : 'mb-10'}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Thi Công Cửa Nhôm XingFa Bình Dương Chính Hãng
          </h2>
          <div className={`w-20 h-1.5 bg-emerald-600 mt-4 mb-5 rounded-full ${center ? 'mx-auto' : ''}`} />
          <p className={`text-base sm:text-lg text-slate-800 leading-relaxed ${center ? '' : 'max-w-3xl'}`}>
            VITECH CO nhận thi công cửa nhôm Xingfa, vách kính, lan can và khung nhôm định hình cho nhà phố,
            biệt thự và nhà xưởng tại Bình Dương — đo đạc tận nơi, gia công theo kích thước thực tế và bàn
            giao đúng tiến độ.
          </p>
        </div>

        {/* Cụm ảnh — dùng CHUNG component với trang Dự án */}
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
          {/* 1. Cam kết / ưu điểm */}
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
                  <TEAM_USP.icon className="w-4 h-4" />
                  Đội ngũ thi công
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {TEAM_USP.title}
                </h4>
              </div>
              <p className="md:flex-1 text-sm sm:text-base text-slate-200 leading-relaxed md:border-l md:border-slate-700 md:pl-6">
                {TEAM_USP.body}
              </p>
            </div>
          </div>

          {/* 2. Phân loại hệ nhôm */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-12">
            A. Phân Loại Theo Hệ Nhôm Xingfa
          </h3>
          <div className="w-14 h-1 bg-emerald-600 mt-3 mb-6 rounded-full" />

          <div className="space-y-6">
            {SYSTEMS.map((sys) => (
              <div key={sys.name}>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2">
                  <Frame className="w-5 h-5 shrink-0 text-emerald-700 mt-0.5" />
                  <span>
                    {sys.name}{' '}
                    <span className="font-medium text-slate-600">({sys.thickness})</span>
                  </span>
                </h4>
                <p className="mt-1.5 text-base text-slate-800 leading-relaxed">
                  <strong>Ứng dụng:</strong> {sys.usage}
                </p>
                <p className="mt-1 text-base text-slate-800 leading-relaxed">
                  <strong>Đặc điểm:</strong> {sys.feature}
                </p>
              </div>
            ))}
          </div>

          {/* 3. Giải pháp kính & phụ kiện */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-12">
            B. Giải Pháp Kính &amp; Phụ Kiện Đi Kèm
          </h3>
          <div className="w-14 h-1 bg-emerald-600 mt-3 mb-6 rounded-full" />

          <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2">
            <Layers className="w-5 h-5 shrink-0 text-emerald-700 mt-0.5" />
            <span>Giải pháp kính an toàn &amp; cách âm</span>
          </h4>
          <ul className="mt-3 space-y-2.5">
            {GLASSES.map((g) => (
              <li key={g.name} className="text-base text-slate-800 leading-relaxed pl-5 relative">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <strong>{g.name}:</strong> {g.desc}
              </li>
            ))}
          </ul>

          <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2 mt-8">
            <Sparkles className="w-5 h-5 shrink-0 text-emerald-700 mt-0.5" />
            <span>Hệ phụ kiện kim khí đồng bộ</span>
          </h4>
          <p className="mt-2 text-base text-slate-800 leading-relaxed">
            Khóa đa điểm, bản lề 3D/4D, tay nắm, bánh xe tải trọng lớn từ các thương hiệu uy tín: Kinlong
            chính hãng, Draho, CMECH (Mỹ), Roto (Đức).
          </p>

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
