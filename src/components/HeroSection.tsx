import { ArrowDownRight } from 'lucide-react';
import {
  HERO_PILLARS,
  NAV_GROUP_AXES,
  NAV_GROUP_HERITAGE,
  PROJECT_META,
} from '../data/heritageContent';
import { HeritageImage } from './HeritageImage';

export function HeroSection() {
  return (
    <section id="top" className="border-b border-[#EAE2D8] bg-[#FBF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-14 lg:pb-20">
        {/* Archival project kicker */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium tracking-wide text-[#69575E] mb-4">
          <span className="text-[#57243a] font-semibold">Hồ sơ Di sản Văn hóa</span>
          <span aria-hidden="true">·</span>
          <span>Đờn ca tài tử Nam Bộ</span>
          <span aria-hidden="true">/</span>
          <span>Hát Xẩm</span>
          <span aria-hidden="true">/</span>
          <span>Hát Tuồng</span>
        </div>

        {/* Hero 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.18] tracking-tight text-[#1F161A]">
                {PROJECT_META.heroHeadline}
              </h1>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#3E3036] max-w-2xl">
                {PROJECT_META.heroSubheadline}
              </p>

              {/* Primary + Secondary CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#di-san"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#FBF8F4] bg-[#57243a] hover:bg-[#43192B] rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57243a]"
                >
                  Khám phá 3 Di sản
                  <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#khao-sat"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#57243a] bg-transparent border border-[#57243a]/35 hover:border-[#57243a] hover:bg-[#FAF5F7] rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57243a]"
                >
                  Tham gia Khảo sát Nhận thức
                </a>
              </div>
            </div>

            {/* Project full name & Dual-group navigation toolbar */}
            <div className="mt-10 pt-6 border-t border-[#EAE2D8] space-y-4">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#57243a]">
                {PROJECT_META.fullTitle}
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5">
                  <span className="font-semibold text-[#1F161A] shrink-0">
                    3 Loại hình Di sản:
                  </span>
                  {NAV_GROUP_HERITAGE.map((item, idx) => (
                    <span key={item.id} className="inline-flex items-center gap-2.5">
                      <a
                        href={`#${item.id}`}
                        className="text-[#57243a] hover:underline font-medium whitespace-nowrap"
                      >
                        {item.label}
                      </a>
                      {idx < NAV_GROUP_HERITAGE.length - 1 && (
                        <span className="text-[#D8CEC2]" aria-hidden="true">
                          |
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5">
                  <span className="font-semibold text-[#1F161A] shrink-0">
                    7 Trục nội dung & Phụ lục:
                  </span>
                  {NAV_GROUP_AXES.map((item, idx) => (
                    <span
                      key={`${item.label}-${idx}`}
                      className="inline-flex items-center gap-2.5"
                    >
                      <a
                        href={`#${item.id}`}
                        className="text-[#3E3036] hover:text-[#57243a] hover:underline whitespace-nowrap"
                      >
                        {item.label}
                      </a>
                      {idx < NAV_GROUP_AXES.length - 1 && (
                        <span className="text-[#D8CEC2]" aria-hidden="true">
                          |
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right focal visual */}
          <div className="lg:col-span-6 flex flex-col">
            <figure className="flex-1 flex flex-col bg-[#FFFFFF] border border-[#EAE2D8] rounded-lg overflow-hidden">
              <HeritageImage
                src={PROJECT_META.heroImage}
                alt={PROJECT_META.heroImageAlt}
                aspectClassName="aspect-[16/9] lg:aspect-auto lg:flex-1 lg:min-h-[380px]"
                fallbackTitle="Di sản Văn hóa Phi vật thể Việt Nam"
              />
              <figcaption className="px-5 py-3.5 text-xs font-serif italic text-[#69575E] border-t border-[#EAE2D8] bg-[#FFFFFF]">
                {PROJECT_META.heroFigureCaption}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 3-Column Summary Table (Bảng tóm tắt nhanh 3 trụ cột di sản) */}
        <div className="mt-14 pt-10 border-t border-[#EAE2D8]">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#57243a]">
              Ba trụ cột Di sản Văn hóa Phi vật thể Việt Nam
            </h2>
            <span className="hidden sm:inline text-xs font-medium text-[#69575E]">
              Bắc Bộ · Trung Bộ · Nam Bộ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HERO_PILLARS.map((pillar) => (
              <article
                key={pillar.id}
                className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-lg overflow-hidden flex flex-col"
              >
                <HeritageImage
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  aspectClassName="aspect-[4/3]"
                  fallbackTitle={pillar.title}
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#8F5E24] mb-1.5">
                      {pillar.region}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-[#1F161A]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#3E3036]">
                      {pillar.summary}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#F5EFE8] flex items-center justify-between text-xs">
                    <span className="font-serif italic text-[#69575E]">
                      {pillar.figureCaption}
                    </span>
                    <a
                      href={`#khoi-${pillar.id}`}
                      className="font-semibold text-[#57243a] hover:underline whitespace-nowrap"
                    >
                      Xem chi tiết →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
