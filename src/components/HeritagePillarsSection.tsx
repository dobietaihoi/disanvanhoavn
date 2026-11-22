import { useState } from 'react';
import { HERITAGE_BLOCKS } from '../data/heritageContent';
import { filterHeritageBlocks, type HeritageFilter } from '../utils/heritageLogic';
import { HeritageImage } from './HeritageImage';

const FILTER_OPTIONS: { id: HeritageFilter; label: string }[] = [
  { id: 'all', label: 'Tất cả 3 Di sản' },
  { id: 'don-ca-tai-tu', label: 'Đờn ca tài tử Nam Bộ' },
  { id: 'hat-xam', label: 'Hát Xẩm' },
  { id: 'hat-tuong', label: 'Hát Tuồng (Hát Bội)' },
];

export function HeritagePillarsSection() {
  const [activeFilter, setActiveFilter] = useState<HeritageFilter>('all');
  const visibleBlocks = filterHeritageBlocks(HERITAGE_BLOCKS, activeFilter);

  return (
    <section id="di-san" className="py-16 lg:py-24 bg-[#FBF8F4] border-b border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#EAE2D8]">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8F5E24] mb-1.5">
              04. Chiều sâu Di sản & Tri thức Dân gian
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#57243a]">
              Nguồn gốc Lịch sử, Vai trò Cộng đồng & Giá trị Văn hóa
            </h2>
          </div>

          {/* Interactive filter control */}
          <div
            role="group"
            aria-label="Lọc theo loại hình di sản"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F5EFE8] border border-[#EAE2D8] rounded-lg self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((opt) => {
              const isActive = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setActiveFilter(opt.id)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#57243a] ${
                    isActive
                      ? 'bg-[#57243a] text-[#FBF8F4]'
                      : 'text-[#3E3036] hover:text-[#57243a] hover:bg-[#FFFFFF]/70'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 space-y-16">
          {visibleBlocks.map((block, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={block.id}
                id={`khoi-${block.id}`}
                className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Editorial photograph column */}
                  <div
                    className={`lg:col-span-5 flex flex-col bg-[#F5EFE8] ${
                      isEven ? 'lg:order-2 lg:border-l border-[#EAE2D8]' : 'lg:border-r border-[#EAE2D8]'
                    }`}
                  >
                    <HeritageImage
                      src={block.image}
                      alt={block.imageAlt}
                      aspectClassName="aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-[360px]"
                      fallbackTitle={block.title}
                    />
                    <div className="px-6 py-4 border-t border-[#EAE2D8] bg-[#FAF5F7]">
                      <p className="text-xs font-serif italic text-[#57243a]">
                        {block.figureLabel}
                      </p>
                    </div>
                  </div>

                  {/* Structured heritage essay column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8">
                    <header className="pb-5 border-b border-[#EAE2D8]">
                      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8F5E24] mb-2">
                        <span>{block.blockCode}</span>
                        <span aria-hidden="true">·</span>
                        <span>Hồ sơ chuyên sâu</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#57243a]">
                        {block.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#69575E]">{block.subtitle}</p>
                    </header>

                    <div className="space-y-8">
                      {block.subsections.map((sub) => (
                        <div key={sub.index} className="space-y-3">
                          <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1F161A] flex items-baseline gap-2">
                            <span className="text-[#57243a] font-mono text-sm font-semibold">
                              {sub.index}
                            </span>
                            <span>{sub.title}</span>
                          </h4>
                          <ul className="space-y-3 text-sm sm:text-[15px] leading-relaxed text-[#3E3036]">
                            {sub.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5">
                                <span
                                  className="text-[#57243a] font-bold mt-1 text-xs"
                                  aria-hidden="true"
                                >
                                  ◆
                                </span>
                                <p>
                                  <strong className="font-semibold text-[#1F161A]">
                                    {bullet.label}{' '}
                                  </strong>
                                  <span>{bullet.text}</span>
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
