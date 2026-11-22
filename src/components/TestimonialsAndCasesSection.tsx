import { CASE_STUDIES, EXPERT_QUOTES } from '../data/heritageContent';

export function TestimonialsAndCasesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5EFE8] border-b border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 7.1 Nhận định Chuyên gia & Phát biểu Chính thức */}
        <div>
          <div className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8F5E24] mb-1.5">
              07. Nhận định Chuyên gia & Nhân vật Tiêu biểu
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#57243a]">
              7.1. Nhận định Chuyên gia & Phát biểu Chính thức
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {EXPERT_QUOTES.map((item) => (
              <figure
                key={item.index}
                className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#8F5E24] tabular-nums">
                    {item.index}
                  </span>
                  <blockquote className="mt-4 font-serif italic text-base sm:text-lg leading-relaxed text-[#1F161A]">
                    {item.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-4 border-t border-[#EAE2D8]">
                  <p className="text-sm font-bold text-[#57243a]">{item.author}</p>
                  <p className="text-xs text-[#69575E] mt-0.5">{item.context}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* 7.2 Case Studies & Nhân vật Tiêu biểu */}
        <div>
          <div className="max-w-3xl mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#57243a]">
              7.2. Case Studies & Nhân vật Tiêu biểu
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CASE_STUDIES.map((cs) => (
              <article
                key={cs.code}
                className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-xl p-6 sm:p-8 space-y-3"
              >
                <div className="flex items-center justify-between gap-4 border-b border-[#EAE2D8] pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8F5E24]">
                    {cs.code}
                  </span>
                  <a
                    href={`#khoi-${cs.heritageId}`}
                    className="text-xs font-medium text-[#57243a] hover:underline"
                  >
                    Xem hồ sơ di sản →
                  </a>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1F161A]">
                  {cs.title}
                </h4>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#3E3036]">
                  {cs.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 bg-[#FAF5F7] border border-[#E5D4BA] rounded-lg px-5 py-4 text-xs sm:text-sm text-[#3E3036] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p>
              <strong className="font-semibold text-[#57243a]">Ghi nhận góc nhìn cộng đồng:</strong>{' '}
              Dữ liệu cảm nhận của du khách và thế hệ trẻ tiếp tục được cập nhật thông qua Khảo sát Tương tác bên dưới.
            </p>
            <a
              href="#khao-sat"
              className="font-semibold text-[#57243a] hover:underline whitespace-nowrap shrink-0"
            >
              Đóng góp ý kiến →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
