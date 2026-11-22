import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const TOP_NAV_LINKS = [
  { href: '#di-san', label: '3 Loại hình' },
  { href: '#co-che', label: 'Cơ chế & Tiến trình' },
  { href: '#thich-nghi', label: 'Đời sống hiện đại' },
  { href: '#khao-sat', label: 'Hỏi đáp & Khảo sát' },
  { href: '#tai-lieu-tham-khao', label: 'Tài liệu' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF8F4]/95 backdrop-blur-sm border-b border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#57243a] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#57243a]"
        >
          Di sản Văn hóa Việt Nam
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#3E3036]"
        >
          {TOP_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#57243a] transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#57243a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#57243a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#di-san"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-[#FBF8F4] bg-[#57243a] hover:bg-[#43192B] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57243a]"
          >
            Khám phá 3 Di sản
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#D8CEC2] text-[#1F161A] hover:bg-[#F5EFE8] transition-colors focus-visible:outline-2 focus-visible:outline-[#57243a]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Điều hướng di động"
          className="lg:hidden border-t border-[#EAE2D8] bg-[#FBF8F4] px-4 py-4 space-y-2"
        >
          {TOP_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 px-3 text-sm font-medium text-[#1F161A] hover:text-[#57243a] hover:bg-[#F5EFE8] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#EAE2D8]">
            <a
              href="#di-san"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-[#FBF8F4] bg-[#57243a] hover:bg-[#43192B] rounded-md transition-colors"
            >
              Khám phá 3 Di sản
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
