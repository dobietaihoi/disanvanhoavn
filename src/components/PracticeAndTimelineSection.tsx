import { COMPARISON_MATRIX, XAM_TIMELINE } from '../data/heritageContent';

export function PracticeAndTimelineSection() {
  return (
    <section id="co-che" className="py-16 lg:py-24 bg-[#F5EFE8] border-b border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 5.1 Cơ chế Thực hành & Hệ thống Nghệ thuật */}
        <div>
          <div className="max-w-3xl mb-8">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8F5E24] mb-1.5">
              05. Cơ chế Thực hành & Tiến trình Lịch sử
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#57243a]">
              5.1. Cơ chế Thực hành & Hệ thống Nghệ thuật (Bảng đối chiếu 3 Di sản)
            </h2>
          </div>

          <div className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-xl overflow-hidden">
            {/* Desktop comparison table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#57243a] text-[#FBF8F4]">
                    <th className="py-4 px-5 text-xs font-semibold tracking-wide w-[19%]">
                      Tiêu chí đối chiếu
                    </th>
                    <th className="py-4 px-5 text-xs font-semibold tracking-wide w-[27%]">
                      Đờn ca tài tử Nam Bộ
                    </th>
                    <th className="py-4 px-5 text-xs font-semibold tracking-wide w-[27%]">
                      Hát Xẩm
                    </th>
                    <th className="py-4 px-5 text-xs font-semibold tracking-wide w-[27%]">
                      Hát Tuồng (Hát Bội)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE2D8] text-sm leading-relaxed text-[#3E3036]">
                  {COMPARISON_MATRIX.map((row) => (
                    <tr
                      key={row.criterion}
                      className="align-top hover:bg-[#FAF5F7]/60 transition-colors"
                    >
                      <td className="py-5 px-5 font-serif text-base font-bold text-[#57243a]">
                        {row.criterion}
                      </td>
                      <td className="py-5 px-5">{row.donCaTaiTu}</td>
                      <td className="py-5 px-5">{row.hatXam}</td>
                      <td className="py-5 px-5">{row.hatTuong}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Responsive stacked comparison cards */}
            <div className="lg:hidden divide-y divide-[#EAE2D8]">
              {COMPARISON_MATRIX.map((row) => (
                <div key={row.criterion} className="p-5 sm:p-6 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#57243a]">
                    {row.criterion}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm leading-relaxed">
                    <div className="p-4 bg-[#FBF8F4] border border-[#EAE2D8] rounded-lg">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#8F5E24] mb-1.5">
                        Đờn ca tài tử Nam Bộ
                      </p>
                      <p className="text-[#3E3036]">{row.donCaTaiTu}</p>
                    </div>
                    <div className="p-4 bg-[#FBF8F4] border border-[#EAE2D8] rounded-lg">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#8F5E24] mb-1.5">
                        Hát Xẩm
                      </p>
                      <p className="text-[#3E3036]">{row.hatXam}</p>
                    </div>
                    <div className="p-4 bg-[#FBF8F4] border border-[#EAE2D8] rounded-lg">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#8F5E24] mb-1.5">
                        Hát Tuồng (Hát Bội)
                      </p>
                      <p className="text-[#3E3036]">{row.hatTuong}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5.2 Tiến trình Lịch sử 5 Giai đoạn của Nghệ thuật Hát Xẩm */}
        <div>
          <div className="max-w-3xl mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#57243a]">
              5.2. Tiến trình Lịch sử 5 Giai đoạn của Nghệ thuật Hát Xẩm (Thế kỷ XIV – Nay)
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#3E3036]">
              Hành trình chuyển biến qua bảy thế kỷ từ phường Xẩm nông thôn, Xẩm Tàu điện đô thị đến tiến trình phục hồi di sản quốc gia.
            </p>
          </div>

          <ol className="space-y-5">
            {XAM_TIMELINE.map((stage) => (
              <li
                key={stage.stageNumber}
                className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F5E24] tabular-nums">
                    <span>Giai đoạn {stage.stageNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>{stage.period}</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#57243a]">
                    {stage.title}
                  </h4>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#3E3036] max-w-prose">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
