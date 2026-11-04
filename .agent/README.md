# .agent — Ghi chú dự án VITECH CO

Bộ ghi chú để agent/AI hoặc người mới nắm nhanh **cách website này được dựng**, tránh sửa sai chỗ.

## Nội dung

| File | Nội dung |
| --- | --- |
| [design-system.md](design-system.md) | Token màu, typography, mẫu tiêu đề, nút, thẻ, quy tắc căn lề |
| [pages-and-data.md](pages-and-data.md) | Kiến trúc trang, khung dùng chung, nơi sửa nội dung, ảnh, TODO |

## Tóm tắt 30 giây

- **Stack**: Astro 7 (output static) + React 19 (island) + Tailwind CSS 4.
- **5 trang**: `/` (landing đầy đủ), `/gioi-thieu`, `/du-an`, `/dich-vu`, `/lap-cua-nhom-xingfa-binh-duong`.
- **Cấu trúc chung các trang con**: `Header → Hero (ảnh lớn) → [sidebar trái | cột nội dung] → Khảo Sát & Tư Vấn → Footer`.
- **Khác biệt duy nhất giữa các trang con**: cột nội dung (cột 2).
- **Màu nhấn**: emerald-600. **Nền**: slate (50/100/800/900). **Font**: Plus Jakarta Sans.
- **Nội dung**: gần như toàn bộ nằm trong [`src/data/solarData.ts`](../src/data/solarData.ts).

## Lệnh thường dùng

```bash
npm run dev      # http://localhost:3000 (hot reload)
npm run check    # astro check — bắt buộc 0 error trước khi commit
npm run build    # xuất tĩnh ra dist/
npm run preview  # xem bản build
npm run clean    # xoá dist + .astro
```

> Dự án **không có test suite** (không jest/vitest). Kiểm chứng = `npm run check` + `npm run build` + xem trực tiếp.

## Luật bất thành văn (đã từng làm sai, đừng lặp lại)

1. **Không dùng `overflow-x: hidden` trên `html`/`body`** → làm hỏng `position: sticky` của sidebar. Dùng `overflow-x: clip` (xem `src/index.css`).
2. **Không copy-paste khối UI giữa các trang.** Đã từng copy gallery sang trang Xingfa và bị lệch khung → nay dùng chung `ImageGallery`.
3. **Sửa thiết kế bằng prop, không fork component.** Các component nội dung nhận `variant` / `align` để phục vụ nhiều trang.
4. **Restart dev server** sau khi sửa `astro.config.mjs` hoặc thêm trang mới — bundle cũ sẽ ghi đè DOM và gây hiện tượng "sửa không ăn".
5. **Khi chụp màn hình để kiểm tra**: đặt profile Chrome **ngoài** workspace (thư mục temp). Profile trong `.shots/` làm Vite watcher lỗi `EBUSY` và treo dev server.
6. **Không bịa dữ liệu doanh nghiệp** (hotline, MST, địa chỉ, email). Nội dung tạm phải được đánh dấu rõ trong file data.
