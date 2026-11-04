export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  capacityRange: string;
  /** Nhãn hiển thị trước capacityRange trên ảnh thẻ. Mặc định "Công suất". */
  specLabel?: string;
  warranty: string;
  suitableFor: string;
  iconName: 'home' | 'factory' | 'wrench' | 'door';
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  district: string;
  category: 'residential' | 'commercial' | 'hybrid';
  capacity: string;
  solarPanels: string;
  inverter: string;
  battery?: string;
  monthlySavings: string;
  annualGeneration: string;
  completionDate: string;
  image: string;
  description: string;
  paybackPeriod: string;
}

export interface PriceTier {
  systemSize: string;
  roofArea: string;
  monthlyOutput: string;
  monthlySavings: string;
  recommendedFor: string;
  packagePrice: string;
  inverterType: string;
  panelCount: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  tags: string[];
}

export const COMPANY_INFO = {
  brandName: 'VITECH CO',
  companyFullName: 'CÔNG TY TNHH CÔNG NGHIỆP VÀ XÂY DỰNG VITECH CO',
  slogan: 'Giải Pháp Năng Lượng Xanh & Tiết Kiệm Cho Mọi Nhà',
  tagline: 'Chuyên Lắp đặt điện mặt trời giá rẻ tại Bình Dương – Uy tín, nhanh chóng, bảo hành dài lâu',
  taxId: '3702492647',
  hotline: '0988.567.892',
  hotlineRaw: '0988567892',
  phoneAlt: '0912.345.678',
  email: 'lienhe@vitechco.com',
  website: 'vitechco.com',
  address: '1A4/G/15, Khu phố Hòa Lân 3, Phường Thuận Giao, TP. Thuận An, tỉnh Bình Dương',
  branchOffice: 'Chi nhánh 2: Đường DT743, P. Tân Đông Hiệp, TP. Dĩ An, Bình Dương',
  warehouse: 'Kho thiết bị: KCN Sóng Thần 2, TP. Dĩ An, Bình Dương',
  workingHours: 'Thứ 2 - Chủ Nhật: 07:30 - 18:30 (Kỹ thuật hỗ trợ 24/7)',
  zaloUrl: 'https://zalo.me/0988567892',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'aluminum',
    title: 'Thi Công Cửa, Khung Nhôm',
    subtitle: 'Cửa nhôm XingFa, vách kính, lan can và khung nhôm công trình',
    category: 'Xây dựng & Hoàn thiện',
    description: 'Thi công cửa nhôm XingFa, cửa cuốn Austdoor, vách kính cường lực, lan can và khung nhôm định hình cho nhà phố, biệt thự và nhà xưởng tại Bình Dương — đo đạc tận nơi, gia công theo kích thước thực tế.',
    features: [
      'Nhôm XingFa hệ 55/60 nhập khẩu chính hãng, phụ kiện Kinlong đồng bộ',
      'Kính cường lực, kính dán an toàn, kính Low-E cách nhiệt chống nóng',
      'Đo đạc và gia công theo kích thước thực tế từng ô cửa, hạn chế tối đa sai lệch',
      'Thi công trọn gói: tháo dỡ, lắp đặt, bắn keo silicone và vệ sinh bàn giao',
      'Bảo hành kết cấu khung nhôm, phụ kiện và keo theo đúng cam kết hợp đồng'
    ],
    capacityRange: 'Cửa đi, cửa sổ, vách kính, lan can',
    specLabel: 'Hạng mục',
    warranty: 'Bảo hành khung nhôm và phụ kiện 2-5 năm theo hạng mục',
    suitableFor: 'Nhà phố, biệt thự, văn phòng, nhà xưởng đang xây mới hoặc cải tạo tại Bình Dương',
    iconName: 'door',
    image: '/images/project_commercial_rooftop_1793562357223.jpg',
  },
  {
    id: 'residential',
    title: 'Lắp Đặt Điện Mặt Trời Hộ Gia Đình',
    subtitle: 'Giải pháp tối ưu hóa hóa đơn tiền điện hàng tháng',
    category: 'Dân dụng',
    description: 'Hệ thống điện mặt trời áp mái dân dụng từ 3kWp đến 15kWp, giúp cắt giảm bậc thang tiền điện lũy tiến cao nhất của EVN, đem lại lợi ích kinh tế lâu dài cho gia đình.',
    features: [
      'Cắt giảm đến 80% hóa đơn tiền điện ở các bậc giá cao (2.700đ - 3.300đ/kWh)',
      'Hạ nhiệt độ phòng áp mái từ 4 - 6 độ C nhờ lớp đệm tấm pin',
      'Tùy chọn hệ thống hòa lưới bám tải hoặc lưu trữ Hybrid an tâm khi mất điện',
      'Giám sát sản lượng điện thông minh trực tiếp trên điện thoại qua ứng dụng tiếng Việt',
      'Thi công nhanh trong 1 - 2 ngày, đảm bảo an toàn kết cấu mái và chống dột 100%'
    ],
    capacityRange: '3 kWp - 15 kWp',
    warranty: 'Bảo hành tấm pin 12-25 năm, Inverter 5 năm, bảo trì 2 năm miễn phí',
    suitableFor: 'Nhà phố, biệt thự, nhà cấp 4 có mái tôn hoặc bê tông tại Bình Dương',
    iconName: 'home',
    image: '/images/project_residential_solar_1793562356167.jpg',
  },
  {
    id: 'maintenance',
    title: 'Bảo Trì, Vệ Sinh & Giám Sát Hệ Thống',
    subtitle: 'Kiểm tra inverter, đo nhiệt hồng ngoại, rửa pin định kỳ',
    category: 'Dịch vụ kỹ thuật',
    description: 'Dịch vụ bảo dưỡng chuyên nghiệp cho mọi hệ thống điện mặt trời tại Bình Dương. Phục hồi 15-25% hiệu suất bị suy giảm do bụi bẩn công nghiệp, lá cây và lỗi kết nối cáp.',
    features: [
      'Vệ sinh tấm pin bằng chổi xoay chuyên dụng và nước lọc RO không làm xước kính AR',
      'Đo kiểm nhiệt độ tấm pin bằng camera nhiệt hồng ngoại Fluke phát hiện điểm nóng (Hotspot)',
      'Kiểm tra siết ốc kết cấu giàn khung, rắc cắm MC4, đo điện trở cách điện và tiếp địa an toàn',
      'Cập nhật firmware Inverter, tinh chỉnh thông số bám tải Zero-Export',
      'Đội phản ứng nhanh có mặt trong 2 - 4 giờ xử lý sự cố tại địa bàn Bình Dương'
    ],
    capacityRange: 'Mọi quy mô từ gia đình đến nhà xưởng',
    warranty: 'Cam kết tăng hiệu suất phát điện sau khi vệ sinh từ 10% - 25%',
    suitableFor: 'Tất cả các hệ thống đã lắp đặt đang hoạt động hoặc suy giảm công suất',
    iconName: 'wrench',
    image: '/images/solar_maintenance_technician_1793562357872.jpg',
  },
];

export const ADVANTAGES_DATA = [
  {
    value: '500+',
    label: 'Công trình hoàn thành',
    desc: 'Hơn 500 dự án dân dụng & nhà xưởng đã bàn giao vận hành ổn định khắp các huyện thị Bình Dương.',
  },
  {
    value: '100%',
    label: 'Thiết bị Tier 1 chính hãng',
    desc: 'Pin JA Solar, Longi, Canadian Solar; Inverter Growatt, Huawei, Sungrow, Deye có CO/CQ đầy đủ.',
  },
  {
    value: '24/7',
    label: 'Hỗ trợ kỹ thuật tại chỗ',
    desc: 'Đội ngũ kỹ sư cơ động tại Thủ Dầu Một & Dĩ An, sẵn sàng hỗ trợ kiểm tra trực tiếp trong 2 giờ.',
  },
  {
    value: '~ 50%',
    label: 'Tiết kiệm chi phí mỗi tháng',
    desc: 'Hoàn vốn đầu tư chỉ từ 3 - 4 năm nhờ số giờ nắng dồi dào bậc nhất cả nước tại Bình Dương.',
  },
];

// Sidebar điều hướng phụ cho laptop (dùng ở Hero).
// href: '#' là placeholder — sẽ trỏ tới trang riêng khi các trang đó được tạo.
export const SIDEBAR_SERVICE_LINKS = [
  { name: 'Lắp cửa nhôm XingFa', href: '/lap-cua-nhom-xingfa-binh-duong' },
  { name: 'Lắp cửa cuốn Austdoor', href: '/lap-cua-cuon-austdoor-binh-duong' },
  { name: 'Lắp điện mặt trời 3kW', href: '/lap-dien-mat-troi-hybrid-3kw-binh-duong' },
  { name: 'Lắp điện mặt trời 5kW', href: '/lap-dien-mat-troi-hybrid-5kw-binh-duong' },
  { name: 'Lắp điện mặt trời 10kW', href: '/lap-dien-mat-troi-hybrid-10kw-binh-duong' },
  { name: 'Đèn năng lượng mặt trời', href: '#' },
];

// Mỗi dòng trỏ thẳng tới bài viết dự án tương ứng ở trang /du-an
export const SIDEBAR_PROJECT_LINKS = [
  { name: 'Dự án 3kW Thuận An', href: '/du-an#du-an-1' },
  { name: 'Dự án 2kW Bình Dương', href: '/du-an#du-an-2' },
  { name: 'Dự án 2kW Bến Cát', href: '/du-an#du-an-3' },
  { name: 'Dự án 5kW Thuận Giao', href: '/du-an#du-an-4' },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Khảo sát thực địa mái nhà',
    desc: 'Kỹ sư VITECH CO đến tận nơi tại Bình Dương đo đạc hướng nắng, kết cấu xà gồ mái tôn/bê tông.',
  },
  {
    step: '02',
    title: 'Thiết kế + Báo giá chi tiết',
    desc: 'Lên bản vẽ kỹ thuật bố trí tấm pin, bảng phân tích dòng tiền và thời gian hoàn vốn minh bạch.',
  },
  {
    step: '03',
    title: 'Thi công an toàn & Chuẩn kỹ thuật',
    desc: 'Lắp đặt nhanh gọn 1-3 ngày với phụ kiện nhôm Anode, cáp chống cháy chuyên dụng, chống dột triệt để.',
  },
  {
    step: '04',
    title: 'Nghiệm thu & Hỗ trợ EVN',
    desc: 'Cài đặt app giám sát tiếng Việt, bàn giao hồ sơ bảo hành 12-25 năm và hỗ trợ thủ tục với EVN Bình Dương.',
  },
];

export interface PartnerItem {
  name: string;
  /** Đường dẫn logo trong public/images/brands; không có thì hiển thị chữ viết tắt */
  logo?: string;
  initials: string;
  /** Mô tả ngắn về uy tín thương hiệu */
  note: string;
  group: 'solar' | 'aluminum';
  /** Link tham khảo (không hiển thị) */
  source?: string;
}

export const PARTNERS_DATA: PartnerItem[] = [
  {
    name: 'JA Solar',
    initials: 'JA',
    group: 'solar',
    note: 'Nhiều năm trong danh sách Tier 1 của BloombergNEF; đứng đầu bảng xếp hạng nhà sản xuất tấm pin toàn cầu của Wood Mackenzie (nửa đầu 2025).',
    source: 'https://finance.yahoo.com/news/ja-solar-ranked-no-1-053700857.html',
  },
  {
    name: 'LONGi',
    initials: 'LN',
    group: 'solar',
    logo: '/images/brands/longi.png',
    note: 'Tier 1 BloombergNEF cho cả tấm pin và lưu trữ; thuộc nhóm nhà sản xuất tấm pin lớn nhất thế giới.',
    source: 'https://www.longi.com/en/news/bnef-tier1-2026-q2',
  },
  {
    name: 'Canadian Solar',
    initials: 'CS',
    group: 'solar',
    logo: '/images/brands/canadian-solar.png',
    note: 'Nhà sản xuất tấm pin quy mô toàn cầu, thường xuyên nằm trong nhóm Tier 1 của BloombergNEF.',
    source: 'https://www.canadiansolar.com/aboutus/',
  },
  {
    name: 'Huawei',
    initials: 'HW',
    group: 'solar',
    logo: '/images/brands/huawei.png',
    note: 'Dòng inverter FusionSolar dẫn đầu thị phần inverter toàn cầu theo Wood Mackenzie (nửa đầu 2025).',
    source: 'https://www.woodmac.com/es/press-releases/solar-inverter-ranking-h1-2025/',
  },
  {
    name: 'Sungrow',
    initials: 'SG',
    group: 'solar',
    logo: '/images/brands/sungrow.png',
    note: 'Thuộc nhóm dẫn đầu thị phần inverter toàn cầu, mạnh về inverter cho dự án công nghiệp và nhà xưởng.',
    source: 'https://www.woodmac.com/es/press-releases/solar-inverter-ranking-h1-2025/',
  },
  {
    name: 'Growatt',
    initials: 'GR',
    group: 'solar',
    logo: '/images/brands/growatt.png',
    note: 'Nằm trong nhóm 3 nhà cung cấp inverter hybrid lớn nhất thế giới theo sản lượng xuất xưởng.',
    source: 'https://www.energiaestrategica.com/es/notes/growatt-clasificada-entre-los-3-principales-proveedores-mundiales-de-inversores-hibridos-por-volumen-de-envios',
  },
  {
    name: 'Deye',
    initials: 'DY',
    group: 'solar',
    logo: '/images/brands/deye.png',
    note: 'Chuyên inverter hybrid và giải pháp lưu trữ; đã đầu tư nhà máy inverter công suất 25,5 GW.',
    source: 'https://www.pvtime.org/500-million-yuan-deye-increases-investment-in-25-5gw-inverter-factory/',
  },
  {
    name: 'XingFa',
    initials: 'XF',
    group: 'aluminum',
    note: 'Thương hiệu nhôm định hình lớn của Trung Quốc, được dùng phổ biến cho cửa nhôm dân dụng và công trình tại Việt Nam.',
    source: 'https://www.xingfa-aluminium.com/vi/about-us',
  },
  {
    name: 'Austdoor',
    initials: 'AD',
    group: 'aluminum',
    note: 'Thương hiệu cửa cuốn giữ thị phần số một tại thị trường Việt Nam.',
    source: 'https://doanhnhan.baophapluat.vn/giu-thi-phan-so-mot-ve-cua-cuon-tai-viet-nam-tap-doan-austdoor-thu-nghin-ty-nhung-lai-ti-hon-tien-thue-nop-ca-nam-khong-bang-tien-thu-mot-ngay-ban-hang-77093.html',
  },
  {
    name: 'Kinlong',
    initials: 'KL',
    group: 'aluminum',
    logo: '/images/brands/kinlong.svg',
    note: 'Chuyên phụ kiện cửa nhôm kính, phụ kiện đồng bộ đi kèm hệ nhôm XingFa.',
    source: 'https://kinlong.vn/kin-long-door-hardware-series-cac-san-pham-phu-kien-cua-kin-long/',
  },
];

/**
 * 4 dự án TẠM cho trang /du-an — khớp đúng 4 dòng ở sidebar "Dự án đã thi công".
 * Nội dung bịa tạm để dựng bố cục; thay bằng dữ liệu thật khi có.
 */
export interface ProjectCardItem {
  title: string;
  location: string;
  image: string;
  /** Quy mô hệ thống */
  capacity: string;
  panels: string;
  roofArea: string;
  inverter: string;
  /** Chi phí đầu tư trọn gói */
  cost: string;
  /** Sản lượng & tiết kiệm */
  monthlyOutput: string;
  monthlySavings: string;
  payback: string;
  /** Nhu cầu của gia chủ */
  needs: string;
  /** Hạng mục thi công */
  scope: string[];
}

export const PROJECTS_PAGE_DATA: ProjectCardItem[] = [
  {
    title: 'Hệ thống điện mặt trời áp mái 3 kWp',
    location: 'Phường Thuận Giao, TP. Thuận An, Bình Dương',
    image: '/images/project_residential_solar_1793562356167.jpg',
    capacity: '3 kWp',
    panels: '6 tấm pin 500W',
    roofArea: '14 m² mái bê tông',
    inverter: 'Inverter hòa lưới bám tải 3 kW',
    cost: '42.000.000 đ',
    monthlyOutput: '~378 kWh',
    monthlySavings: '~1.050.000 đ/tháng',
    payback: '~3,3 năm',
    needs: 'Gia đình 4 người, nhà phố 3 tầng có 2 máy lạnh và bình nóng lạnh. Hóa đơn điện dao động 2,2 - 2,5 triệu đồng/tháng và thường xuyên rơi vào bậc thang cao nhất. Gia chủ muốn cắt phần điện tiêu thụ ban ngày mà không phải thay đổi thói quen sinh hoạt.',
    scope: [
      'Khảo sát mái bê tông, đo hướng nắng buổi sáng',
      'Khung ray nhôm Anode + kẹp chống dột',
      'Tủ điện DC/AC, CB chống sét lan truyền',
      'Cáp DC chuyên dụng, tiếp địa an toàn',
      'Cài đặt app giám sát sản lượng trên điện thoại',
    ],
  },
  {
    title: 'Hệ thống điện mặt trời áp mái 2 kWp',
    location: 'TP. Thủ Dầu Một, Bình Dương',
    image: '/images/hero_solar_rooftop_binhduong_1793562355617.jpg',
    capacity: '2 kWp',
    panels: '4 tấm pin 500W',
    roofArea: '10 m² mái tôn',
    inverter: 'Inverter hòa lưới bám tải 2 kW',
    cost: '30.000.000 đ',
    monthlyOutput: '~252 kWh',
    monthlySavings: '~730.000 đ/tháng',
    payback: '~3,4 năm',
    needs: 'Hộ kinh doanh tạp hóa mở cửa ban ngày, dùng nhiều tủ mát, quạt và đèn chiếu sáng. Gia chủ cần giảm tiền điện giờ hành chính nhưng ngân sách hạn chế, ưu tiên phương án gọn nhẹ, hoàn vốn nhanh.',
    scope: [
      'Khảo sát mái tôn, gia cố điểm bắt kẹp',
      'Khung nhôm định hình, kẹp tôn chống dột 3 lớp keo',
      'Tủ điện bảo vệ và CB AC/DC',
      'Đấu nối bám tải, không phát ngược lên lưới',
      'Bàn giao hồ sơ và hướng dẫn theo dõi sản lượng',
    ],
  },
  {
    title: 'Hệ thống điện mặt trời áp mái 2 kWp',
    location: 'Phường Mỹ Phước, TP. Bến Cát, Bình Dương',
    image: '/images/project_commercial_rooftop_1793562357223.jpg',
    capacity: '2 kWp',
    panels: '4 tấm pin 500W',
    roofArea: '10 m² mái tôn',
    inverter: 'Inverter hòa lưới bám tải 2 kW',
    cost: '29.000.000 đ',
    monthlyOutput: '~250 kWh',
    monthlySavings: '~720.000 đ/tháng',
    payback: '~3,4 năm',
    needs: 'Nhà cấp 4 mái tôn, ban ngày chỉ có người lớn tuổi ở nhà, nhu cầu điện chủ yếu là quạt, tủ lạnh và chiếu sáng. Gia chủ muốn đầu tư nhỏ, an toàn, ít phải bảo trì và không đục phá kết cấu mái.',
    scope: [
      'Khảo sát độ dốc và tình trạng tôn',
      'Lắp đặt không khoan xuyên mái',
      'Đi dây gọn theo xà gồ, bọc ống bảo vệ',
      'Chống sét, tiếp địa theo tiêu chuẩn',
      'Hướng dẫn vệ sinh tấm pin định kỳ',
    ],
  },
  {
    title: 'Hệ thống điện mặt trời áp mái 5 kWp',
    location: 'Phường Thuận Giao, TP. Thuận An, Bình Dương',
    image: '/images/solar_maintenance_technician_1793562357872.jpg',
    capacity: '5 kWp',
    panels: '10 tấm pin 500W',
    roofArea: '23 m² mái bê tông',
    inverter: 'Inverter hòa lưới bám tải 5 kW',
    cost: '68.000.000 đ',
    monthlyOutput: '~630 kWh',
    monthlySavings: '~1.830.000 đ/tháng',
    payback: '~3,1 năm',
    needs: 'Nhà kết hợp 6 phòng trọ cho thuê, ban ngày máy lạnh và bình nóng lạnh chạy liên tục. Chủ nhà cần giảm mạnh tiền điện để giữ giá thuê, đồng thời muốn hệ thống chạy ổn định, ít sự cố và có bảo trì định kỳ.',
    scope: [
      'Khảo sát tải tiêu thụ thực tế theo giờ',
      'Thiết kế bố trí tấm pin tối ưu diện tích mái',
      'Khung nhôm chịu lực, kẹp chống dột toàn bộ điểm bắt',
      'Tủ điện DC/AC, chống sét, tiếp địa',
      'Bàn giao, giám sát từ xa và bảo trì định kỳ',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'prj-1',
    title: 'Hệ thống điện mặt trời áp mái 5.5 kWp',
    location: 'Khu Dân Cư Tân Bình, TP. Dĩ An, Bình Dương',
    district: 'Dĩ An',
    category: 'residential',
    capacity: '5.5 kWp',
    solarPanels: '10 tấm JA Solar 550W Half-cell',
    inverter: 'Growatt MIN 5000TL-X hòa lưới bám tải',
    monthlySavings: '1.950.000 đ/tháng',
    annualGeneration: '7.920 kWh/năm',
    completionDate: 'Tháng 10/2026',
    image: '/images/project_residential_solar_1793562356167.jpg',
    description: 'Hệ thống mái tôn kiên cố cho nhà phố 3 tầng. Giảm 85% tiền điện ban ngày do sử dụng 3 máy lạnh và các thiết bị gia dụng liên tục.',
    paybackPeriod: '3.4 năm',
  },
  {
    id: 'prj-2',
    title: 'Hệ thống 10.8 kWp Hybrid có pin lưu trữ',
    location: 'Khu biệt thự The Oasis, TP. Thuận An, Bình Dương',
    district: 'Thuận An',
    category: 'hybrid',
    capacity: '10.8 kWp',
    solarPanels: '20 tấm Longi Hi-MO 6 540W',
    inverter: 'Deye SUN-10K-SG04LP3 3 pha Hybrid',
    battery: 'Pin Lithium LiFePO4 Deye 15kWh (3 module)',
    monthlySavings: '4.200.000 đ/tháng',
    annualGeneration: '15.550 kWh/năm',
    completionDate: 'Tháng 09/2026',
    image: '/images/hero_solar_rooftop_binhduong_1793562355617.jpg',
    description: 'Giải pháp cao cấp tự chủ nguồn điện 24/7. Ban ngày dùng điện mặt trời và sạc pin, ban đêm xả pin nuôi phụ tải nhà, không lo mất điện lưới.',
    paybackPeriod: '4.2 năm',
  },
  {
    id: 'prj-3',
    title: 'Hệ thống điện mặt trời nhà xưởng 75 kWp',
    location: 'KCN Mỹ Phước 3, Thị xã Bến Cát, Bình Dương',
    district: 'Bến Cát',
    category: 'commercial',
    capacity: '75 kWp',
    solarPanels: '136 tấm Canadian Solar 550W',
    inverter: 'Huawei SUN2000-60KTL-M3 Công Nghiệp',
    monthlySavings: '28.500.000 đ/tháng',
    annualGeneration: '108.000 kWh/năm',
    completionDate: 'Tháng 08/2026',
    image: '/images/project_commercial_rooftop_1793562357223.jpg',
    description: 'Lắp đặt trên mái tôn xưởng gia công cơ khí chính xác. Tiết kiệm mạnh giờ cao điểm của EVN và làm mát nhà xưởng rõ rệt.',
    paybackPeriod: '3.1 năm',
  },
  {
    id: 'prj-4',
    title: 'Hệ thống 8.2 kWp hòa lưới bám tải',
    location: 'Phường Phú Hòa, TP. Thủ Dầu Một, Bình Dương',
    district: 'Thủ Dầu Một',
    category: 'residential',
    capacity: '8.2 kWp',
    solarPanels: '15 tấm Jinko Solar Tiger Pro 550W',
    inverter: 'Growatt MOD 8000TL3-X (3 pha)',
    monthlySavings: '3.100.000 đ/tháng',
    annualGeneration: '11.800 kWh/năm',
    completionDate: 'Tháng 07/2026',
    image: '/images/project_residential_solar_1793562356167.jpg',
    description: 'Lắp đặt cho hộ kinh doanh nhà trọ kết hợp cửa hàng tại trung tâm Thủ Dầu Một. Bù đắp lượng điện tiêu thụ lớn của hệ thống bơm và chiếu sáng.',
    paybackPeriod: '3.3 năm',
  },
  {
    id: 'prj-5',
    title: 'Hệ thống 150 kWp Mái Nhà Kho Logistics',
    location: 'KCN VSIP 1, TP. Thuận An, Bình Dương',
    district: 'Thuận An',
    category: 'commercial',
    capacity: '150 kWp',
    solarPanels: '272 tấm JA Solar 555W DeepBlue',
    inverter: '2 x Inverter Sungrow SG110CX',
    monthlySavings: '56.000.000 đ/tháng',
    annualGeneration: '216.000 kWh/năm',
    completionDate: 'Tháng 06/2026',
    image: '/images/project_commercial_rooftop_1793562357223.jpg',
    description: 'Kho lưu trữ hàng hóa logistics. Hệ thống vận hành tự động bám tải 100%, bảo vệ hệ thống làm mát trung tâm và hệ thống chiếu sáng ban ngày.',
    paybackPeriod: '3.0 năm',
  },
  {
    id: 'prj-6',
    title: 'Dịch vụ bảo trì, vệ sinh hệ thống 100 kWp',
    location: 'KCN Sóng Thần 2, TP. Dĩ An, Bình Dương',
    district: 'Dĩ An',
    category: 'commercial',
    capacity: '100 kWp',
    solarPanels: 'Kiểm tra 220 tấm pin & rửa áp lực RO',
    inverter: 'Kiểm tra nhiệt & cân pha Inverter',
    monthlySavings: 'Tăng 18% sản lượng sau bảo dưỡng',
    annualGeneration: 'Phục hồi +24.000 kWh/năm',
    completionDate: 'Tháng 10/2026',
    image: '/images/solar_maintenance_technician_1793562357872.jpg',
    description: 'Vệ sinh định kỳ loại bỏ bụi than công nghiệp bám dày, quét nhiệt phát hiện 2 cell pin lỗi cục bộ và thay thế kịp thời trong ngày.',
    paybackPeriod: 'Phục hồi tức thì',
  },
];

export const PRICING_PACKAGES: PriceTier[] = [
  {
    systemSize: 'Hệ 3.3 kWp (1 pha)',
    roofArea: '18 - 20 m²',
    monthlyOutput: '390 - 460 kWh',
    monthlySavings: '1.200.000 - 1.500.000 đ',
    recommendedFor: 'Hộ gia đình có tiền điện 1.5 - 2.5 triệu/tháng',
    packagePrice: '42.000.000 đ',
    inverterType: 'Growatt MIN 3000TL-X',
    panelCount: '6 tấm 550W Tier 1',
  },
  {
    systemSize: 'Hệ 5.5 kWp (1 pha / 3 pha)',
    roofArea: '28 - 32 m²',
    monthlyOutput: '650 - 780 kWh',
    monthlySavings: '2.000.000 - 2.600.000 đ',
    recommendedFor: 'Gia đình dùng 3-4 máy lạnh, tiền điện 2.5 - 4 triệu/tháng',
    packagePrice: '65.000.000 đ',
    inverterType: 'Growatt / Huawei 5kW bám tải',
    panelCount: '10 tấm 550W Tier 1',
  },
  {
    systemSize: 'Hệ 8.25 kWp (3 pha)',
    roofArea: '42 - 48 m²',
    monthlyOutput: '980 - 1.150 kWh',
    monthlySavings: '3.200.000 - 4.000.000 đ',
    recommendedFor: 'Biệt thự, nhà vườn, hộ kinh doanh tiền điện 4 - 6 triệu/tháng',
    packagePrice: '92.000.000 đ',
    inverterType: 'Growatt MOD 8000TL3-X 3 pha',
    panelCount: '15 tấm 550W Tier 1',
  },
  {
    systemSize: 'Hệ 10.8 kWp (3 pha)',
    roofArea: '55 - 62 m²',
    monthlyOutput: '1.300 - 1.520 kWh',
    monthlySavings: '4.500.000 - 5.500.000 đ',
    recommendedFor: 'Biệt thự lớn, văn phòng công ty tiền điện 6 - 9 triệu/tháng',
    packagePrice: '118.000.000 đ',
    inverterType: 'Huawei SUN2000-10KTL 3 pha',
    panelCount: '20 tấm 550W Tier 1',
  },
  {
    systemSize: 'Hệ Hybrid 5kWp + Pin 5kWh',
    roofArea: '28 - 32 m²',
    monthlyOutput: '650 - 750 kWh',
    monthlySavings: 'Tự chủ 85% ngày & đêm',
    recommendedFor: 'Gia đình muốn có điện 24/7 khi lưới mất điện',
    packagePrice: '98.000.000 đ',
    inverterType: 'Deye 5kW Hybrid + Pin Lithium LiFePO4',
    panelCount: '10 tấm 550W + 1 bộ pin 5.12kWh',
  },
  {
    systemSize: 'Hệ Nhà Xưởng 50 kWp - 200 kWp',
    roofArea: 'Từ 250 m² trở lên',
    monthlyOutput: '6.000 - 24.000 kWh',
    monthlySavings: '20.000.000 - 85.000.000 đ',
    recommendedFor: 'Nhà máy, xưởng sản xuất, kho lạnh tại KCN Bình Dương',
    packagePrice: 'Liên hệ khảo sát & báo giá gốc',
    inverterType: 'Huawei / Sungrow công nghiệp',
    panelCount: 'Từ 90 tấm 550W trở lên',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Cách tính toán công suất điện mặt trời phù hợp cho gia đình tại Bình Dương',
    date: '15/10/2026',
    readTime: '4 phút đọc',
    summary: 'Hướng dẫn chi tiết cách đọc chỉ số kWh trên hóa đơn điện EVN Bình Dương và xác định chính xác số kWp pin mặt trời cần lắp để không lãng phí công suất.',
    tags: ['Kinh nghiệm', 'Hộ gia đình', 'Bình Dương'],
    content: [
      'Để tính toán chính xác công suất điện mặt trời cho ngôi nhà của bạn tại Bình Dương, bước đầu tiên quan trọng nhất là xem xét lượng điện năng tiêu thụ vào ban ngày từ 7h sáng đến 17h chiều.',
      'Tại Bình Dương, số giờ nắng đạt đỉnh trung bình từ 4.5 đến 5.2 giờ mỗi ngày. Công thức tính đơn giản: Số kWh ban ngày cần dùng / 4.8 = Công suất hệ thống kWp cần lắp đặt.',
      'Ví dụ: Nếu mỗi tháng gia đình bạn tiêu thụ khoảng 600 kWh điện, trong đó ban ngày chiếm 60% (khoảng 360 kWh, tương đương 12 kWh/ngày), thì hệ thống 3kWp đến 5kWp là điểm ngọt đầu tư hoàn hảo nhất.',
      'Việc chọn đúng công suất giúp tối đa hóa tỷ lệ tự dùng 100%, không phát ngược lên lưới và rút ngắn thời gian thu hồi vốn chỉ còn 3.2 - 3.5 năm.'
    ]
  },
  {
    id: 'news-2',
    title: 'So sánh hệ thống hòa lưới bám tải (Zero Export) và hòa lưới lưu trữ Hybrid',
    date: '08/10/2026',
    readTime: '5 phút đọc',
    summary: 'Phân tích ưu nhược điểm, chi phí đầu tư và đối tượng phù hợp giữa 2 mô hình điện mặt trời phổ biến nhất hiện nay tại các khu đô thị Bình Dương.',
    tags: ['Kỹ thuật', 'Hòa lưới bám tải', 'Hybrid lưu trữ'],
    content: [
      'Nhiều khách hàng tại Thủ Dầu Một và Thuận An thường băn khoăn giữa việc lắp đặt hệ thống hòa lưới bám tải đơn thuần hay đầu tư thêm pin lưu trữ Lithium Hybrid.',
      'Hệ thống hòa lưới bám tải (Zero Export): Chi phí đầu tư thấp nhất (chỉ từ 40 - 65 triệu cho hộ gia đình), thời gian hoàn vốn cực nhanh (khoảng 3 năm). Nhược điểm là khi điện lưới EVN bị cắt, hệ thống phải ngắt theo tiêu chuẩn an toàn.',
      'Hệ thống Hybrid lưu trữ: Ban ngày pin mặt trời cấp điện cho nhà và sạc đầy pin Lithium. Khi mất điện lưới hoặc vào ban đêm, pin lưu trữ tự động cấp nguồn liên tục trong 10ms, không làm tắt máy tính, camera hay tủ lạnh.',
      'Khuyến nghị từ kỹ sư VITECH CO: Nếu khu vực bạn có lưới điện ổn định, hãy chọn hòa lưới bám tải để tiết kiệm tiền điện tối đa. Nếu gia đình có người lớn tuổi, trẻ nhỏ hoặc kinh doanh cần nguồn điện dự phòng 24/7, hệ thống Hybrid là lựa chọn xứng đáng.'
    ]
  },
  {
    id: 'news-3',
    title: 'Bảng giá lắp đặt pin mặt trời trọn gói mới nhất 2026 tại Bình Dương',
    date: '28/09/2026',
    readTime: '6 phút đọc',
    summary: 'Cập nhật giá vật tư tấm pin Tier 1, biến tần Inverter chuẩn quốc tế và chi phí thi công trọn gói không phát sinh tại Thủ Dầu Một, Dĩ An, Bến Cát, Tân Uyên.',
    tags: ['Báo giá 2026', 'Giá rẻ Bình Dương', 'Khuyến mãi'],
    content: [
      'Năm 2026, nhờ công nghệ pin Monocrystalline TopCon và N-type phát triển mạnh với hiệu suất đạt trên 22.5%, giá thành suất đầu tư điện mặt trời tại Bình Dương đã giảm hơn 20% so với các năm trước.',
      'VITECH CO tự hào có kho bãi trực tiếp tại KCN Sóng Thần (Dĩ An), nhập khẩu trực tiếp số lượng lớn từ các hãng sản xuất hàng đầu thế giới mà không qua các tầng đại lý trung gian.',
      'Chính sách giá của VITECH CO cam kết trọn gói: Bao gồm toàn bộ tấm pin, Inverter, tủ điện AC/DC chống sét lan truyền, dây dẫn chuyên dụng solar DC 4mm² chịu nhiệt, ray nhôm định hình Anode và nhân công lắp đặt chuẩn thẩm mỹ.',
      'Khách hàng tại Bình Dương luôn được hưởng chính sách khảo sát đo đạc thực địa miễn phí 100% trong vòng 24 giờ kể từ khi liên hệ.'
    ]
  }
];

export const DISTRICTS_BINH_DUONG = [
  'TP. Thủ Dầu Một',
  'TP. Dĩ An',
  'TP. Thuận An',
  'TP. Tân Uyên',
  'TP. Bến Cát',
  'Huyện Bàu Bàng',
  'Huyện Bắc Tân Uyên',
  'Huyện Dầu Tiếng',
  'Huyện Phú Giáo',
];

export const FAQS_DATA = [
  {
    q: 'Tấm pin mặt trời được bảo hành như thế nào?',
    a: 'VITECH CO sử dụng 100% tấm pin Tier 1 (JA Solar, Longi, Canadian Solar) với chính sách bảo hành kép: 12 năm bảo hành vật lý đổi mới nếu lỗi nhà sản xuất và 25 năm bảo hành hiệu suất phát điện (đảm bảo sau 25 năm hiệu suất vẫn đạt trên 80%).',
  },
  {
    q: 'Khi trời mưa hoặc nhiều mây hệ thống có tạo ra điện không?',
    a: 'Tấm pin năng lượng mặt trời hoạt động dựa trên bức xạ quang học chứ không chỉ riêng ánh nắng trực tiếp. Vào những ngày nhiều mây hoặc mưa nhỏ, hệ thống vẫn sản xuất được khoảng 20% - 40% sản lượng so với ngày nắng gắt, lượng thiếu hụt sẽ tự động bù bởi điện lưới EVN mượt mà.',
  },
  {
    q: 'Quy trình lắp đặt mất bao lâu và có làm hư hỏng mái nhà không?',
    a: 'Thời gian thi công hệ thống gia đình chỉ mất từ 1 đến 2 ngày. Đội ngũ kỹ sư VITECH CO sử dụng kẹp nhôm chuyên dụng gắn vào sóng tôn hoặc bulong chống dột 3 lớp keo silicone chuyên dụng chịu thời tiết, cam kết tuyệt đối không gây thấm dột và bảo hành chống dột cho mái nhà.',
  },
];