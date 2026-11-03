import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SIDEBAR_SERVICE_LINKS, SIDEBAR_PROJECT_LINKS } from '../data/solarData';

/**
 * Hai nhóm danh mục dùng cho sidebar (rail bên trái).
 * Component này chỉ render nội dung; vị trí/sticky do component cha quyết định.
 */
export const SidebarPanels: React.FC = () => (
  <>
    <SidebarGroup title="Dịch vụ" links={SIDEBAR_SERVICE_LINKS} />
    <SidebarGroup title="Dự án đã thi công" links={SIDEBAR_PROJECT_LINKS} />
  </>
);

interface SidebarGroupProps {
  title: string;
  links: { name: string; href: string }[];
}

const SidebarGroup: React.FC<SidebarGroupProps> = ({ title, links }) => (
  // Nền sáng, viền mảnh: không tranh sự chú ý với 2 nút CTA bên dưới
  <div className="rounded-xl bg-white border border-slate-200 shadow-xs overflow-hidden">
    <div className="px-3.5 py-1.5 border-b border-slate-200/80 bg-slate-50/70">
      <h2 className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">
        {title}
      </h2>
    </div>
    <ul className="p-1.5">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="group flex items-center justify-between gap-2 rounded-md px-2.5 py-2 text-[14.5px] font-medium leading-snug text-slate-800 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors"
          >
            <span className="min-w-0">{link.name}</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-emerald-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);
