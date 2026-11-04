/**
 * Cấu hình cho các trang "Điện mặt trời Hybrid" (3kW / 5kW / 10kW).
 * Mỗi trang dùng CHUNG component SolarHybridSection, chỉ khác dữ liệu dưới đây.
 * Nội dung là bản tạm — sửa trực tiếp tại file này.
 */

export type HybridKey = '3kw' | '5kw' | '10kw';

export interface HybridUsp {
  /** id để xếp thứ tự, khớp với icon trong component */
  id: 'genuine' | 'backup' | 'saving' | 'battery' | 'install' | 'warranty';
  title: string;
  body: string;
}

export interface HybridRow {
  label: string;
  value: string;
}

export interface HybridGroup {
  /** id để chọn icon */
  id: 'panel' | 'inverter' | 'battery' | 'accessory';
  name: string;
  rows: HybridRow[];
}

export interface HybridPageConfig {
  key: HybridKey;
  title: string;
  intro: string;
  /** Thứ tự ảnh: chỉ số 1..4 trong thư mục /images/solar-hybrid */
  galleryOrder: number[];
  /** Thứ tự hiển thị cam kết (theo id) */
  uspOrder: HybridUsp['id'][];
  /** Ô ngang nền đen — LUÔN hiển thị ở cuối danh sách cam kết */
  highlightId: HybridUsp['id'];
  configTitle: string;
  configGroups: HybridGroup[];
  suitabilityTitle: string;
  suitability: HybridRow[];
  metaTitle: string;
  metaDescription: string;
}

export const HYBRID_USP_TEXT: Record<HybridUsp['id'], { title: string; body: string }> = {
  genuine: {
    title: '100% Thiết Bị Chính Hãng – Đầy Đủ CO/CQ',
    body: 'Sử dụng tấm pin mặt trời (Longi, JA Solar, Jinko...) và biến tần Hybrid (Deye, Luxpower, GoodWe...) thuộc Top 1 thế giới. Đầy đủ giấy tờ chứng nhận xuất xứ CO/CQ, cam kết đền tiền 200% nếu phát hiện hàng nhái.',
  },
  backup: {
    title: 'Có Điện Dùng 24/7 – Không Lo Mất Điện Lưới',
    body: 'Hệ thống Hybrid tự động chuyển sang nguồn pin lưu trữ (Lithium) chỉ trong 10ms khi lưới điện quốc gia gặp sự cố. Đảm bảo các thiết bị thiết yếu như tủ lạnh, đèn chiếu sáng, quạt, WiFi, camera luôn hoạt động liên tục.',
  },
  saving: {
    title: 'Tiết Kiệm 70% – 90% Chi Phí Tiền Điện Hàng Tháng',
    body: 'Bắt trọn nguồn năng lượng mặt trời vào ban ngày để sinh hoạt và sạc pin lưu trữ. Ban đêm sử dụng điện từ pin Lithium xả ra, giúp gia đình tối ưu hóa hóa đơn tiền điện ở các bậc giá cao.',
  },
  battery: {
    title: 'Pin Lưu Trữ Lithium Chuẩn Chu Kỳ Cao (6000+ Lần Sạc/Xả)',
    body: 'Sử dụng dòng pin lưu trữ LiFePO4 (Lithium Iron Phosphate) công nghệ tiên tiến nhất, an toàn chống cháy nổ, tuổi thọ lên đến 10–15 năm, hỗ trợ xả sâu đến 90% dung lượng.',
  },
  install: {
    title: 'Thi Công Chuẩn Kỹ Thuật – Thẩm Mỹ & An Toàn PCCC',
    body: 'Đội ngũ kỹ thuật viên giàu kinh nghiệm trực tiếp khảo sát và thi công. Sử dụng hệ thống khung giàn nhôm/thép mạ kẽm chống ăn mòn, tủ điện bảo vệ tích hợp chống sét lan truyền (SPD), CB aptomat chuyên dụng AC/DC an toàn tuyệt đối.',
  },
  warranty: {
    title: 'Bảo Hành Dài Hạn & Giám Sát Từ Xa 24/7',
    body: 'Bảo hành tấm pin 12 năm (hiệu suất 25 năm), Inverter 5 năm, Pin Lithium 5 năm. Tích hợp ứng dụng theo dõi sản lượng điện, trạng thái sạc/xả ngay trên điện thoại thông minh mọi lúc mọi nơi.',
  },
};

const panelGroup = (count: string): HybridGroup => ({
  id: 'panel',
  name: 'Tấm Pin Mặt Trời (Solar Panels)',
  rows: [
    { label: 'Số lượng', value: count },
    {
      label: 'Công nghệ',
      value: 'Nhập khẩu chính hãng (Longi / JA / Jinko), công nghệ Half-cell / N-type hiệu suất cao trên 21.5%.',
    },
  ],
});

const inverterGroup = (name: string, spec: string): HybridGroup => ({
  id: 'inverter',
  name,
  rows: [
    { label: 'Thương hiệu', value: spec },
    {
      label: 'Tính năng',
      value: 'Thông minh, tự động điều phối điện giữa Pin mặt trời – Pin lưu trữ – Điện lưới.',
    },
  ],
});

const batteryGroup = (capacity: string, note: string): HybridGroup => ({
  id: 'battery',
  name: 'Pin Lưu Trữ Lithium (Battery Storage)',
  rows: [
    { label: 'Dung lượng', value: capacity },
    { label: 'Đặc điểm', value: `Dòng pin LiFePO4 an toàn, ${note}` },
  ],
});

const accessoryGroup: HybridGroup = {
  id: 'accessory',
  name: 'Hệ Thống Phụ Kiện Đồng Bộ',
  rows: [
    { label: 'Khung giá đỡ', value: 'Khung giá đỡ tấm pin chịu lực gió bão.' },
    { label: 'Tủ điện', value: 'Tủ điện bảo vệ AC/DC, chống sét lan truyền (SPD), cầu chì DC.' },
    {
      label: 'Dây dẫn',
      value: 'Dây cáp điện mặt trời DC chuyên dụng (Solar Cable 4mm²), ống gen điện chống tia UV.',
    },
  ],
};

const galleryCaption = 'Thi công điện mặt trời Hybrid';

export const HYBRID_PAGES: Record<HybridKey, HybridPageConfig> = {
  '3kw': {
    key: '3kw',
    title: 'Thi Công Điện Mặt Trời Hybrid 3kW Bình Dương',
    intro:
      'Hệ thống điện mặt trời Hybrid 3kW có pin lưu trữ Lithium: ban ngày dùng điện mặt trời và sạc pin, ban đêm xả pin dùng tiếp — phù hợp hộ gia đình tại Bình Dương muốn chủ động nguồn điện.',
    galleryOrder: [1, 2, 3, 4],
    uspOrder: ['genuine', 'backup', 'saving', 'battery', 'install'],
    highlightId: 'warranty',
    configTitle: 'A. Cấu Hình Thiết Bị Chuẩn Cho Hệ 3kW Hybrid',
    configGroups: [
      panelGroup('~6 – 7 tấm (công suất 540W – 580W/tấm).'),
      inverterGroup('Biến Tần Hybrid (Hybrid Inverter 3kW)', 'Deye, Luxpower, GoodWe hoặc Growatt (công suất 3kW – 3.6kW).'),
      batteryGroup('5.12 kWh (48V – 100Ah).', 'tích hợp hệ thống quản lý pin thông minh (BMS).'),
      accessoryGroup,
    ],
    suitabilityTitle: 'B. Giải Pháp Nhu Cầu Sử Dụng Thích Hợp',
    suitability: [
      { label: 'Phù hợp cho', value: 'Hộ gia đình có hóa đơn tiền điện từ 1.5 – 2.5 triệu đồng/tháng.' },
      {
        label: 'Tải thiết bị hoạt động tốt',
        value: '1 máy lạnh (1 – 1.5 HP), 1 tủ lạnh, hệ thống đèn chiếu sáng, TV, quạt, máy tính, WiFi, camera an ninh.',
      },
      {
        label: 'Sản lượng điện tạo ra',
        value: 'Khoảng 360 – 450 kWh (số điện)/tháng, tùy thuộc vào bức xạ nhiệt khu vực.',
      },
    ],
    metaTitle: 'Thi Công Điện Mặt Trời Hybrid 3kW Bình Dương – VITECH CO',
    metaDescription:
      'Hệ thống điện mặt trời Hybrid 3kW có pin lưu trữ Lithium 5.12 kWh: dùng điện 24/7 khi mất lưới, tiết kiệm 70–90% tiền điện. Thiết bị Deye, Luxpower, GoodWe, Longi, JA, Jinko chính hãng tại Bình Dương.',
  },

  '5kw': {
    key: '5kw',
    title: 'Thi Công Điện Mặt Trời Hybrid 5kW Bình Dương',
    intro:
      'Hệ thống Hybrid 5kW dành cho gia đình dùng nhiều thiết bị điện: công suất lớn hơn, pin lưu trữ lớn hơn, đủ nuôi máy lạnh và sinh hoạt ban đêm ngay cả khi mất điện lưới kéo dài.',
    galleryOrder: [3, 1, 4, 2],
    uspOrder: ['backup', 'genuine', 'install', 'saving', 'battery'],
    highlightId: 'warranty',
    configTitle: 'A. Cấu Hình Thiết Bị Chuẩn Cho Hệ 5kW Hybrid',
    configGroups: [
      panelGroup('~9 – 10 tấm (công suất 540W – 580W/tấm).'),
      inverterGroup('Biến Tần Hybrid (Hybrid Inverter 5kW)', 'Deye, Luxpower, GoodWe hoặc Growatt (công suất 5kW – 6kW).'),
      batteryGroup('5.12 kWh (1 module) — nâng cấp 10.24 kWh (2 module).', 'tích hợp BMS và hỗ trợ xả sâu 90% dung lượng.'),
      accessoryGroup,
    ],
    suitabilityTitle: 'B. Giải Pháp Nhu Cầu Sử Dụng Thích Hợp',
    suitability: [
      { label: 'Phù hợp cho', value: 'Hộ gia đình có hóa đơn tiền điện từ 3 – 5 triệu đồng/tháng, nhà phố nhiều tầng.' },
      {
        label: 'Tải thiết bị hoạt động tốt',
        value:
          '2 máy lạnh (1 – 1.5 HP), tủ lạnh, bếp điện/từ, máy giặt, bình nóng lạnh, hệ thống đèn chiếu sáng, TV, WiFi, camera an ninh.',
      },
      {
        label: 'Sản lượng điện tạo ra',
        value: 'Khoảng 600 – 750 kWh (số điện)/tháng, tùy thuộc vào bức xạ nhiệt khu vực và hướng mái.',
      },
    ],
    metaTitle: 'Thi Công Điện Mặt Trời Hybrid 5kW Bình Dương – VITECH CO',
    metaDescription:
      'Hệ thống điện mặt trời Hybrid 5kW có pin lưu trữ Lithium 5.12–10.24 kWh: chạy máy lạnh và sinh hoạt khi mất điện, tiết kiệm 70–90% tiền điện. Thiết bị chính hãng, thi công tại Bình Dương.',
  },

  '10kw': {
    key: '10kw',
    title: 'Thi Công Điện Mặt Trời Hybrid 10kW Bình Dương',
    intro:
      'Hệ thống Hybrid 10kW phù hợp biệt thự, nhà phố lớn hoặc hộ kinh doanh: công suất lớn, pin lưu trữ nhiều module, có thể chạy điều hoà và thiết bị công suất cao trong thời gian dài khi mất điện.',
    galleryOrder: [2, 4, 1, 3],
    uspOrder: ['saving', 'battery', 'genuine', 'backup', 'install'],
    highlightId: 'warranty',
    configTitle: 'A. Cấu Hình Thiết Bị Chuẩn Cho Hệ 10kW Hybrid',
    configGroups: [
      panelGroup('~18 – 20 tấm (công suất 540W – 580W/tấm).'),
      inverterGroup('Biến Tần Hybrid (Hybrid Inverter 10kW)', 'Deye, GoodWe, Sungrow, Luxpower (10kW – 12kW, 1 pha hoặc 3 pha).'),
      batteryGroup('10.24 – 15 kWh (2 – 3 module LiFePO4).', 'tích hợp BMS, cho phép mở rộng dung lượng về sau.'),
      accessoryGroup,
    ],
    suitabilityTitle: 'B. Giải Pháp Nhu Cầu Sử Dụng Thích Hợp',
    suitability: [
      {
        label: 'Phù hợp cho',
        value: 'Biệt thự, nhà phố lớn, hộ kinh doanh hoặc văn phòng nhỏ có hóa đơn tiền điện từ 6 – 10 triệu đồng/tháng.',
      },
      {
        label: 'Tải thiết bị hoạt động tốt',
        value:
          '3 – 4 máy lạnh, tủ lạnh, tủ đông, bơm nước, bình nóng lạnh, hệ thống đèn chiếu sáng, WiFi, camera an ninh và thiết bị văn phòng.',
      },
      {
        label: 'Sản lượng điện tạo ra',
        value: 'Khoảng 1.200 – 1.500 kWh (số điện)/tháng, tùy thuộc diện tích mái và bức xạ nhiệt khu vực.',
      },
    ],
    metaTitle: 'Thi Công Điện Mặt Trời Hybrid 10kW Bình Dương – VITECH CO',
    metaDescription:
      'Hệ thống điện mặt trời Hybrid 10kW, pin lưu trữ Lithium 10.24–15 kWh cho biệt thự, nhà phố lớn, hộ kinh doanh tại Bình Dương. Thiết bị chính hãng, giám sát từ xa 24/7.',
  },
};
