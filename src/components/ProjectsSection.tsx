import React from 'react';
import { PROJECTS_PAGE_DATA } from '../data/solarData';
import { ImageGallery } from './ImageGallery';

interface ProjectsSectionProps {
  onOpenQuoteModal: () => void;
  /**
   * 'gallery' = trang chủ: cụm ảnh lớn + 4 thumbnail tự chuyển
   * 'article' = /du-an: nội dung dạng bài viết, mỗi dự án có ảnh riêng
   */
  variant?: 'gallery' | 'article';
  /** Trang chủ căn giữa tiêu đề + gạch xanh; trang con căn trái */
  align?: 'left' | 'center';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ variant = 'gallery', align = 'center' }) => {
  const isGallery = variant === 'gallery';
  const center = align === 'center';

  return (
    <section id="du-an" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-[21rem] xl:pl-[24rem]">
        {/* Section Header */}
        <div className={center ? 'text-center max-w-3xl mx-auto mb-10' : 'mb-10'}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Dự Án Điện Mặt Trời Tiêu Biểu Tại Bình Dương
          </h2>
          <div className={`w-20 h-1.5 bg-emerald-600 mt-4 mb-5 rounded-full ${center ? 'mx-auto' : ''}`} />
          <p className={`text-base sm:text-lg text-slate-800 leading-relaxed ${center ? '' : 'max-w-3xl'}`}>
            Hình ảnh và thông số thực tế các công trình điện mặt trời do VITECH CO trực tiếp thiết kế, thi công và bàn giao vận hành tại Thủ Dầu Một, Dĩ An, Thuận An, Bến Cát.
          </p>
        </div>

        {isGallery ? (
          /* ===== TRANG CHỦ: cụm ảnh dùng component dùng chung ===== */
          <ImageGallery
            items={PROJECTS_PAGE_DATA.map((project) => ({
              src: project.image,
              alt: project.title,
              title: project.title,
              subtitle: project.location,
            }))}
          />
        ) : (
          /* ===== TRANG DỰ ÁN: nội dung dạng bài viết, ảnh riêng từng dự án ===== */
          <div className="max-w-3xl space-y-16">
            {PROJECTS_PAGE_DATA.map((project, i) => (
              <article
                key={`${project.image}-${i}`}
                id={`du-an-${i + 1}`}
                className="scroll-mt-28"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.25]">
                  {project.title}
                </h3>
                <div className="w-20 h-1.5 bg-emerald-600 mt-4 mb-6 rounded-full" />

                <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
                  Công trình được VITECH CO thi công tại <strong>{project.location}</strong> với quy mô{' '}
                  <strong>{project.capacity}</strong>, sử dụng {project.panels.toLowerCase()} lắp trên{' '}
                  {project.roofArea.toLowerCase()}, kết hợp {project.inverter.toLowerCase()}. Hệ thống đã
                  hoàn thiện, chạy thử và bàn giao cho gia chủ đưa vào sử dụng.
                </p>

                <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-8">
                  Chi phí đầu tư và mức tiết kiệm
                </h4>
                <div className="w-14 h-1 bg-emerald-600 mt-3 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
                  Tổng chi phí đầu tư trọn gói của hệ thống là <strong>{project.cost}</strong> (đã bao gồm
                  thiết bị, phụ kiện, nhân công và thuế). Với điều kiện nắng tại Bình Dương, hệ thống cho
                  sản lượng khoảng <strong>{project.monthlyOutput}/tháng</strong>, tương đương mức tiết
                  kiệm <strong>{project.monthlySavings}</strong>. Thời gian hoàn vốn ước tính khoảng{' '}
                  <strong>{project.payback}</strong>, sau đó phần điện sản xuất được xem như khoản tiết
                  kiệm thực tế của gia đình.
                </p>

                <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-8">
                  Nhu cầu của gia chủ
                </h4>
                <div className="w-14 h-1 bg-emerald-600 mt-3 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed">{project.needs}</p>

                <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-8">
                  Hạng mục thi công
                </h4>
                <div className="w-14 h-1 bg-emerald-600 mt-3 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
                  {project.scope.join('; ')}.
                </p>

                <figure className="mt-8">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-900">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.location}`}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[16/9] object-cover"
                    />
                  </div>
                  <figcaption className="mt-2.5 text-sm text-slate-600">
                    Hình ảnh hệ thống tại {project.location}
                  </figcaption>
                </figure>
              </article>
            ))}

            <p className="pt-5 border-t border-slate-200 text-sm text-slate-600 leading-relaxed">
              <em>
                Ghi chú: chi phí và mức tiết kiệm nêu trên là số liệu tham khảo tại thời điểm thi công, có
                thể thay đổi theo điều kiện thực tế của từng mái nhà và giá điện của EVN.
              </em>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
