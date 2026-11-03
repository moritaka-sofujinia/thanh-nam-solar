# VITECH CO — Website Lắp Đặt Điện Mặt Trời Bình Dương

Landing page doanh nghiệp cho VITECH CO, xây dựng trên **Astro 7** + **React 19** (island) + **Tailwind CSS 4**.

## Kiến trúc

Astro đảm nhận trang, SEO head và render tĩnh; toàn bộ UI tương tác là một React island.

```
src/
├─ pages/index.astro        # Route "/" — render Layout + SolarApp island
├─ layouts/Layout.astro     # <head> SEO: title, description, canonical, OG/Twitter, JSON-LD LocalBusiness
├─ views/SolarApp.tsx       # React island gốc (client:load) — state modal báo giá
├─ components/*.tsx         # 12 section UI (Header, Hero, ... FloatingActions)
├─ data/solarData.ts        # Nội dung, giá, dự án, FAQ, thông tin công ty
└─ index.css                # Tailwind + @theme (font, màu solar)
public/images/              # 4 ảnh dự án/hero phục vụ trực tiếp
```

**Render tĩnh:** HTML đầy đủ (h1, sections, JSON-LD) được prerender ở build time nên tốt cho SEO;
JavaScript chỉ hydrate phần tương tác.

## Chạy dự án

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Lệnh | Mô tả |
| --- | --- |
| `npm run dev` | Dev server (HMR) tại cổng 3000 |
| `npm run build` | Build tĩnh ra `dist/` |
| `npm run preview` | Preview bản build production |
| `npm run check` | Type-check Astro + TypeScript |
| `npm run clean` | Xoá `dist` và `.astro` |

## Ghi chú kỹ thuật

- Ảnh nằm trong `public/images/` và được tham chiếu bằng đường dẫn tuyệt đối `/images/...`.
- Thư mục React gốc đặt tên `views/` (không phải `pages/`) để tránh nhầm với thư mục route của Astro.
- Cập nhật `site` trong `astro.config.mjs` khi deploy để canonical/OG URL chính xác.
- Form báo giá hiện lưu lead vào `localStorage`; cần nối API/CRM nếu muốn gửi về server.
