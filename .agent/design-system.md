# Design system — VITECH CO

Ghi chú về **hệ thống thiết kế đang chạy thật** trong code (không phải đề xuất lý thuyết).
Mọi giá trị dưới đây đọc trực tiếp từ `src/`.

---

## 1. Nền tảng

| Thành phần | Giá trị | Nơi khai báo |
| --- | --- | --- |
| Framework | Astro 7, `output: 'static'` | `astro.config.mjs` |
| UI island | React 19 (`client:load`) | `src/views/*.tsx` |
| CSS | Tailwind CSS 4 qua `@tailwindcss/vite` | `astro.config.mjs`, `src/index.css` |
| Font | **Plus Jakarta Sans** — 400/500/600/700/800 | `src/layouts/Layout.astro` (Google Fonts) |
| Màu nhấn | **emerald-600** | khắp nơi |

### Cấu hình đặc biệt trong `src/index.css`

```css
html { scroll-behavior: smooth; overflow-x: clip; }  /* clip, KHÔNG dùng hidden */
body { overflow-x: clip; font-weight: 450; -webkit-font-smoothing: auto; }
```

- `font-weight: 450`: Plus Jakarta Sans nét mảnh, để 400 thì chữ trên nền trắng bị "nhạt".
- `-webkit-font-smoothing: auto`: **đã bỏ** class `antialiased` của Tailwind vì nó làm chữ mảnh đi.
- Token `--color-solar-*` khai báo trong `@theme` nhưng thực tế **không dùng** — dùng `emerald` của Tailwind.

---

## 2. Màu — quy ước

| Vai trò | Class |
| --- | --- |
| Nền trang | `bg-white` / `bg-slate-50` (xen kẽ giữa các section) |
| Nền tối (footer, contact, workflow) | `bg-slate-950` / `bg-slate-900` |
| Tiêu đề lớn | `text-slate-900` |
| Đoạn văn chính | `text-slate-800` |
| Chữ phụ / nhãn | `text-slate-600` → `text-slate-700` khi cần đậm hơn |
| Nhấn thương hiệu | `text-emerald-600` (chữ lớn), `text-emerald-700` (chữ nhỏ trên nền sáng) |
| Nhấn trên nền tối | `text-emerald-400` / `text-emerald-300` |
| Viền | `border-slate-200` (mảnh), `border-slate-300` (cần rõ) |

> Đã có đợt "tăng độ đậm toàn trang": `slate-500→600`, `600→700`, `700→800`.
> Nếu thấy chữ nhạt, ưu tiên tăng `font-weight` hoặc màu, **không** bật lại `antialiased`.

---

## 3. Mẫu tiêu đề section (dùng lặp lại khắp site)

```tsx
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
  Tiêu đề
</h2>
<div className="w-20 h-1.5 bg-emerald-600 mt-4 mb-5 rounded-full" />   {/* gạch xanh chính */}
<p className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl">Mô tả</p>
```

Tiêu đề phụ trong một khối nội dung (bài viết):

```tsx
<h3 className="text-xl sm:text-2xl font-bold ...">Mục lớn</h3>
<div className="w-14 h-1 bg-emerald-600 mt-3 mb-6 rounded-full" />      {/* gạch phụ ngắn hơn */}
```

### Quy tắc căn lề (quan trọng)

| Trang | Tiêu đề + gạch xanh + mô tả |
| --- | --- |
| **Trang chủ `/`** | **Căn giữa** — `text-center max-w-3xl mx-auto`, gạch thêm `mx-auto` |
| **Trang con** | **Căn trái** — không `text-center`, gạch không `mx-auto` |

Thực hiện bằng prop **`align: 'left' | 'center'`** trên `AboutSection`, `ProjectsSection`, `ServicesSection`, `AluminumDoorSection`.
`SolarApp` truyền `"center"`, `SitePage` truyền `"left"`.

---

## 4. Nút (button)

| Loại | Class rút gọn |
| --- | --- |
| **Chính (CTA)** | `bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg px-4 py-3.5 text-sm font-bold` |
| **Phụ trên nền tối** | `bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-xl` |
| **Nút trong sidebar** | như trên, thêm `w-full`, `whitespace-nowrap` (rộng đúng 256px) |
| **Nút gọi/Zalo nổi** | `FloatingActions.tsx` — cố định góc phải dưới |

Bố cục sidebar luôn là: **2 khối danh mục sáng → Hotline (tối) → Tư vấn miễn phí (emerald)**,
để mắt tập trung vào 2 nút cuối.

---

## 5. Thẻ (card)

| Loại thẻ | Style |
| --- | --- |
| Thẻ ưu điểm (trang chủ) | `bg-slate-100/80 border border-slate-300 rounded-2xl shadow-sm` + hover `border-emerald-500 hover:shadow-md` |
| Khối danh mục sidebar | `bg-white border border-slate-200 rounded-xl shadow-xs`, tiêu đề nhóm nền `bg-slate-50/70`, chữ `emerald-700` |
| Khối dịch vụ (3 cột) | `bg-white border border-slate-200 rounded-2xl overflow-hidden` + ảnh `h-60` |
| Khối đối tác | `bg-white border border-slate-200 rounded-xl p-4`, logo `w-16 h-12` |

Nguyên tắc: **nền sáng + viền mảnh + đổ bóng nhẹ**; không dùng khối đen lớn cho nội dung phụ (sẽ tranh sự chú ý với CTA).

---

## 6. Hero (ảnh đầu trang)

```
section: relative, pt-36/40/44, pb-12/14/16, lg:min-h-[38rem], justify-end
├─ ảnh nền: brightness-110 contrast-[1.03] saturate-[1.05], object-cover
├─ scrim trái: w-[88%] lg:w-3/4, from-slate-950/85 via-/50 → transparent
└─ fade đáy: h-56, from-slate-950/90 via-/45 → transparent
```

- Ảnh **phải sáng**; chỉ mờ đen nhẹ ở đáy + trái để chữ đọc được.
- Chữ: H1 `text-3xl sm:text-4xl lg:text-[2.75rem]`, subtitle có 1 cụm `text-emerald-300 font-bold` + `text-shadow`.
- Khối chữ **đẩy sát đáy ảnh** (`justify-end`), dòng "– Uy tín, nhanh chóng…" nằm ở dòng riêng (`<span className="block">`).
- Không đặt nút CTA trên ảnh nữa (đã chuyển xuống sidebar); chỉ còn bản mobile `lg:hidden`.

---

## 7. Gallery ảnh (component dùng chung)

`src/components/ImageGallery.tsx` — **nguồn thiết kế duy nhất** cho khối ảnh.

```tsx
<ImageGallery
  items={[{ src, alt, title, subtitle? }]}
  autoMs={3000}                 // tự chuyển, rê chuột thì dừng
/>
```

- Ảnh lớn `aspect-[16/9]`, bo `rounded-2xl`, chú thích đè bằng gradient tối.
- 4 thumbnail `grid grid-cols-4 gap-3 sm:gap-4`, **cùng bề rộng với ảnh lớn** (không đặt `max-w-*` riêng cho hàng thumbnail — đây chính là lỗi lệch khung trước đây).
- Thumbnail đang chọn: `border-emerald-600 ring-2 ring-emerald-600/25`.

Dùng ở: trang chủ (khối Dự án) và trang cửa nhôm XingFa.

---

## 8. Layout 2 cột + sidebar sticky

```
<div className="relative">                        // vùng 2 cột
  <div className="absolute inset-y-0 … hidden lg:block pointer-events-none">  // rail
    <div className="max-w-7xl px-8 pb-16 …">      // pb-16: chừa 64px đáy
      <aside className="sticky top-24 w-64 self-start space-y-3 pt-20 pointer-events-auto">
```

- Sidebar **chỉ hiện từ `lg` (≥1024px)**; mobile/tablet 1 cột.
- Nội dung né rail bằng `lg:pl-[21rem] xl:pl-[24rem]` trên container của từng section.
  **Khoảng cách thực** = `pl − 288px` → **48px** ở laptop, **96px** ở desktop.
- Sidebar dừng cách khu "Khảo Sát & Tư Vấn" **64px** nhờ `pb-16` của rail.
- Glyph nhỏ: khi thêm section mới vào vùng 2 cột, **phải thêm cùng cặp class `lg:pl-[21rem] xl:pl-[24rem]`**.

---

## 9. Header

- `fixed top-0`, nền trắng, logo chữ **VITECH CO** (không icon) + tagline `ĐIỆN MẶT TRỜI BÌNH DƯƠNG`.
- Nav **4 mục** trỏ trang thật: `/`, `/gioi-thieu`, `/du-an`, `/dich-vu`.
- Nav ngang hiển thị từ `xl` (≥1280px); dưới đó dùng hamburger (`xl:hidden`).
- Bên phải: hotline + nút "Nhận báo giá ngay".

---

## 10. Checklist khi thêm/sửa UI

- [ ] Dùng lại mẫu tiêu đề + gạch xanh, đúng `align` của trang (trang chủ giữa / trang con trái).
- [ ] Chữ mô tả `text-slate-800`; nhãn phụ `text-slate-600+`.
- [ ] Không thêm `antialiased`, không `overflow-x: hidden`.
- [ ] Khối UI lặp lại → tách component dùng chung, **không copy-paste**.
- [ ] Section mới trong vùng 2 cột → thêm `lg:pl-[21rem] xl:pl-[24rem]`.
- [ ] `npm run check` 0 error + `npm run build` OK.
