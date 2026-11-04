# Kiến trúc trang & nơi sửa nội dung

## 1. Cây thư mục (phần quan trọng)

```
src/
├─ pages/                      # route (Astro) — mỗi file = 1 trang
│  ├─ index.astro              → /
│  ├─ gioi-thieu.astro         → /gioi-thieu
│  ├─ du-an.astro              → /du-an
│  ├─ dich-vu.astro            → /dich-vu
│  └─ lap-cua-nhom-xingfa-binh-duong.astro → /lap-cua-nhom-xingfa-binh-duong
├─ views/
│  ├─ SolarApp.tsx             # island của TRANG CHỦ (đầy đủ section)
│  └─ SitePage.tsx             # khung dùng chung cho MỌI trang con
├─ components/                 # 15 component UI
├─ layouts/Layout.astro        # <head>, SEO, JSON-LD
├─ data/solarData.ts           # ~90% nội dung website
└─ index.css                   # Tailwind + vài luật toàn cục
public/images/                 # ảnh (xem mục 5)
```

## 2. Hai kiểu trang

### a) Trang chủ — `SolarApp.tsx`
Thứ tự section:

1. `Header`
2. `Hero` — ảnh lớn + H1 + mô tả
3. Vùng 2 cột (`relative`): rail `SidebarPanels` + Hotline + Tư vấn **|** cột nội dung:
   - `AboutSection` (variant `home`)
   - `ProjectsSection` (variant `gallery` — cụm ảnh)
   - `ServicesSection`
   - `AdvantagesSection` (4 thẻ ưu điểm + 4 bước quy trình)
   - `SeoContentSection` (đoạn SEO + 3 trụ cột + tag quận)
   - `FaqSection`
4. `ContactSection` — "Khảo Sát & Tư Vấn Tận Nơi" (1 cột)
5. `Footer` + `FloatingActions` + `QuoteModal`

### b) Trang con — `SitePage.tsx`
Giữ **nguyên cấu trúc chung**: `Header → Hero → [rail | cột 2] → ContactSection → Footer`.
**Chỉ cột 2 thay đổi**, điều khiển bằng prop `section`:

```tsx
export type PageSection = 'about' | 'projects' | 'services' | 'aluminum';
<SitePage section="aluminum" client:load />
```

| `section` | Component | Trang |
| --- | --- | --- |
| `about` | `AboutSection variant="page" align="left"` | /gioi-thieu |
| `projects` | `ProjectsSection variant="article" align="left"` | /du-an |
| `services` | `ServicesSection align="left"` | /dich-vu |
| `aluminum` | `AluminumDoorSection align="left"` | /lap-cua-nhom-xingfa-binh-duong |

### Thêm trang con mới (3 bước)
1. Tạo component nội dung mới (nhận `align`).
2. Thêm key vào `PageSection` + nhánh render trong `SitePage.tsx`.
3. Tạo `src/pages/<slug>.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
import SitePage from '../views/SitePage';
---
<Layout title="…" description="…">
  <SitePage section="…" client:load />
</Layout>
```

## 3. Component & biến thể

| Component | Prop / biến thể | Ghi chú |
| --- | --- | --- |
| `Header` | — | nav 4 mục, hamburger < `xl` |
| `Hero` | `onOpenQuoteModal` | CTA mobile-only `lg:hidden` |
| `HeroSidebar` | export `SidebarPanels` | chỉ 2 khối danh mục |
| `AboutSection` | `variant: 'home'\|'page'`, `align` | page: ảnh dàn ngang + đối tác |
| `ProjectsSection` | `variant: 'gallery'\|'article'`, `align` | gallery dùng `ImageGallery` |
| `ServicesSection` | `align` | 3 thẻ: nhôm, hộ gia đình, bảo trì |
| `AluminumDoorSection` | `align` | bài viết + `ImageGallery` |
| `AdvantagesSection` | — | 4 thẻ + quy trình 4 bước |
| `SeoContentSection` | — | bảng giá đã **bỏ** |
| `FaqSection` | — | accordion |
| `ContactSection` | — | nền tối, 1 cột |
| `Footer` | — | credit "Thiết kế bởi Moritaka Sofujinia" |
| `ImageGallery` | `items`, `autoMs` | **dùng chung**, không copy |
| `QuoteModal` | `isOpen`, `onClose`, `initialData` | xem mục 6 |

## 4. Nội dung nằm ở đâu (`src/data/solarData.ts`)

| Export | Dùng cho |
| --- | --- |
| `COMPANY_INFO` | hotline, địa chỉ, MST, email, giờ làm việc, zalo |
| `SIDEBAR_SERVICE_LINKS` | 6 dòng sidebar "Dịch vụ" (XingFa đã có link, còn lại `#`) |
| `SIDEBAR_PROJECT_LINKS` | 4 dòng sidebar "Dự án đã thi công" → `/du-an#du-an-N` |
| `SERVICES_DATA` | 3 thẻ "Lĩnh vực hoạt động" |
| `ADVANTAGES_DATA` | 4 thẻ "Tại sao chọn VITECH CO" |
| `WORKFLOW_STEPS` | 4 bước quy trình (chỉ còn tiêu đề hiển thị) |
| `PARTNERS_DATA` | khối đối tác (logo + mô tả uy tín + `source`) |
| `PROJECTS_PAGE_DATA` | **4 dự án** cho gallery trang chủ + bài viết /du-an |
| `DISTRICTS_BINH_DUONG` | tag quận ở khu SEO |
| `FAQS_DATA` | câu hỏi thường gặp |
| `PROJECTS_DATA` | 6 dự án chi tiết — **hiện không còn dùng** |
| `PRICING_PACKAGES`, `NEWS_ARTICLES` | **không dùng** (bảng giá đã bỏ) |

> Khi sửa nội dung: ưu tiên file data. Chỉ sửa trong component khi đó là câu chữ cố định của section (vd đoạn dẫn của About).

## 5. Ảnh

```
public/images/
├─ hero_solar_rooftop_binhduong_*.jpg      # ảnh hero
├─ project_residential_solar_*.jpg
├─ project_commercial_rooftop_*.jpg
├─ solar_maintenance_technician_*.jpg
├─ brands/   7 logo đối tác (png/svg)
└─ xingfa/   xingfa-1..4.avif (4 ảnh trang cửa nhôm)
```

- Tham chiếu bằng đường dẫn tuyệt đối: `/images/...`.
- Thiếu logo: **JA Solar, Austdoor, XingFa** → hiển thị chữ viết tắt (`initials` trong `PARTNERS_DATA`).
- Ảnh trang XingFa tải từ Cloudinary về local, **giữ đúng thứ tự yêu cầu** (file 3 và 4 đổi tên so với tên gốc).

## 6. Form báo giá (`QuoteModal`)

- Không sinh "mã yêu cầu" giả, không hứa "gọi trong 15 phút".
- Submit → lưu lead vào `localStorage` key **`vitechco_inquiries`** → mở **Zalo** (`https://zalo.me/<hotline>?text=<nội dung soạn sẵn>`).
- Popup bị chặn → fallback `window.location.href`.
- Màn hình sau khi gửi có nút "Gửi Tin Nhắn Qua Zalo" dự phòng.
- Zalo **không cho web tự gửi tin** — tối đa là mở khung chat với nội dung điền sẵn.

## 7. SEO

- `Layout.astro`: title, description, canonical, OG/Twitter, JSON-LD `LocalBusiness`.
- `site` trong `astro.config.mjs` = `https://vitechco.com` → quyết định canonical + OG url.
- Mỗi trang truyền `title`/`description` riêng qua `Layout`.

## 8. Việc còn treo (TODO)

| Việc | Chỗ sửa |
| --- | --- |
| **Domain thật** (đang tạm `vitechco.com`) | `astro.config.mjs`, `COMPANY_INFO.website/email`, `Layout.astro` |
| 4 dự án ở /du-an là **nội dung tạm** (chi phí, tiết kiệm, nhu cầu) | `PROJECTS_PAGE_DATA` |
| Ảnh dự án chưa khớp thực tế (Bến Cát dùng ảnh xưởng, 5kW dùng ảnh kỹ thuật viên) | `PROJECTS_PAGE_DATA[].image` |
| Logo thiếu: JA Solar, Austdoor, XingFa | `public/images/brands/` + `PARTNERS_DATA[].logo` |
| 5 dòng sidebar "Dịch vụ" còn `#` | `SIDEBAR_SERVICE_LINKS` |
| Chú thích 4 ảnh XingFa còn chung chung | mảng `GALLERY` trong `AluminumDoorSection.tsx` |
| Đổi key `localStorage` khiến lead cũ không hiện | (chỉ ảnh hưởng máy khách, không mất dữ liệu server) |
| Xoá code chết: `PROJECTS_DATA`, `PRICING_PACKAGES`, `NEWS_ARTICLES`, modal dịch vụ | `solarData.ts`, `ServicesSection.tsx` |

## 9. Git & deploy

- Remote: `https://github.com/moritaka-sofujinia/thanh-nam-solar.git`, nhánh `main`.
- `.gitignore`: `node_modules/`, `dist/`, `.astro/`, `.shots/`, `.env*`.
- Deploy tĩnh: build ra `dist/` (Cloudflare Pages/Workers Assets, hoặc bất kỳ static host).
