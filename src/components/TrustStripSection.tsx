import { CONTENT_MATRIX, TRUST_STRIP_ROWS } from '../data/heritageContent';

export function TrustStripSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#F5EFE8] border-b border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 03: Bảng Dấu ấn Công nhận, Pháp lý & Số liệu Bảo tồn */}
        <div>
          <div className="max-w-3xl mb-8">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8F5E24] mb-1.5">
              03. Dấu ấn Công nhận & Mạng lưới Bảo tồn
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#57243a]">
              Bảng Dấu ấn Công nhận, Pháp lý & Số liệu Bảo tồn
            </h2>
          </div>

          <div className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-lg overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#57243a] text-[#FBF8F4]">
                    <th className="py-3.5 px-5 text-xs font-semibold tracking-wide w-[22%]">
                      Loại hình Di sản
                    </th>
                    <th className="py-3.5 px-5 text-xs font-semibold tracking-wide w-[39%]">
                      Mốc thời gian & Văn bản Pháp lý công nhận
                    </th>
                    <th className="py-3.5 px-5 text-xs font-semibold tracking-wide w-[39%]">
                      Quy mô Mạng lưới, CLB & Đề án Bảo tồn
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE2D8] text-sm leading-relaxed text-[#1F161A]">
                  {TRUST_STRIP_ROWS.map((row) => (
                    <tr key={row.id} className="align-top hover:bg-[#FAF5F7]/60 transition-colors">
                      <td className="py-5 px-5 font-serif text-base font-bold text-[#57243a]">
                        {row.heritageName}
                      </td>
                      <td className="py-5 px-5">
                        <ul className="space-y-2 tabular-nums">
                          {row.legalMilestones.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#8F5E24] font-bold mt-0.5" aria-hidden="true">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-5 px-5">
                        <ul className="space-y-2 tabular-nums">
                          {row.networkAndProjects.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#8F5E24] font-bold mt-0.5" aria-hidden="true">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-[#EAE2D8]">
              {TRUST_STRIP_ROWS.map((row) => (
                <div key={row.id} className="p-5 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#57243a]">
                    {row.heritageName}
                  </h3>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[#69575E] mb-2">
                      Mốc thời gian & Văn bản Pháp lý công nhận
                    </p>
                    <ul className="space-y-1.5 text-sm text-[#1F161A] tabular-nums">
                      {row.legalMilestones.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#8F5E24] font-bold" aria-hidden="true">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[#69575E] mb-2">
                      Quy mô Mạng lưới, CLB & Đề án Bảo tồn
                    </p>
                    <ul className="space-y-1.5 text-sm text-[#1F161A] tabular-nums">
                      {row.networkAndProjects.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#8F5E24] font-bold" aria-hidden="true">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ma trận Kiến trúc Nội dung (7 khía cạnh cốt lõi) */}
        <div>
          <div className="max-w-3xl mb-8">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8F5E24] mb-1.5">
              Ma trận Kiến trúc Nội dung (Content Matrix)
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#57243a]">
              7 Khía cạnh Cốt lõi Khai thác Toàn diện 3 Loại hình Di sản
            </h2>
          </div>

          <div className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#57243a] text-[#FBF8F4]">
                    <th className="py-3.5 px-4 sm:px-5 text-xs font-semibold tracking-wide w-16">
                      STT
                    </th>
                    <th className="py-3.5 px-4 sm:px-5 text-xs font-semibold tracking-wide w-[28%]">
                      Khía cạnh khai thác
                    </th>
                    <th className="py-3.5 px-4 sm:px-5 text-xs font-semibold tracking-wide">
                      Câu hỏi định hướng nội dung chi tiết
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE2D8] text-sm leading-relaxed text-[#1F161A]">
                  {CONTENT_MATRIX.map((row) => (
                    <tr
                      key={row.stt}
                      className="align-top hover:bg-[#FAF5F7]/60 transition-colors"
                    >
                      <td className="py-4 px-4 sm:px-5 font-mono text-xs font-semibold text-[#57243a] tabular-nums">
                        {row.stt}
                      </td>
                      <td className="py-4 px-4 sm:px-5 font-semibold text-[#1F161A]">
                        <a
                          href={`#${row.anchorId}`}
                          className="hover:text-[#57243a] hover:underline"
                        >
                          {row.aspect}
                        </a>
                      </td>
                      <td className="py-4 px-4 sm:px-5 text-[#3E3036]">
                        {row.guidingQuestion}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
