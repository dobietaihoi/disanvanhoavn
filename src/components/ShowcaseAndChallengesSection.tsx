import {
  CHALLENGE_ROWS,
  PRICING_TIERS,
  SHOWCASE_ITEMS,
} from '../data/heritageContent';

export function ShowcaseAndChallengesSection() {
  return (
    <section id="thich-nghi" className="py-16 lg:py-24 bg-[#FBF8F4] border-b border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 6.1 Showcase Ứng dụng & Thích nghi trong Đời sống Hiện đại */}
        <div>
          <div className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8F5E24] mb-1.5">
              06. Đời sống Hiện đại, Thách thức & Trải nghiệm
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#57243a]">
              6.1. Showcase Ứng dụng & Thích nghi trong Đời sống Hiện đại
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SHOWCASE_ITEMS.map((item) => (
              <article
                key={item.id}
                className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-xl p-6 sm:p-7 flex flex-col"
              >
                <header className="pb-4 mb-5 border-b border-[#EAE2D8]">
                  <p className="font-mono text-xs font-semibold text-[#8F5E24] mb-1 tabular-nums">
                    {item.index}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#57243a]">
                    {item.title}
                  </h3>
                </header>
                <ul className="space-y-4 text-sm leading-relaxed text-[#3E3036]">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="space-y-1">
                      <p className="font-semibold text-[#1F161A]">{bullet.label}</p>
                      <p>{bullet.text}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* 6.2 Thực trạng & Thách thức Bảo tồn */}
        <div id="thach-thuc">
          <div className="max-w-3xl mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#57243a]">
              6.2. Thực trạng & Thách thức Bảo tồn (Bảng phân tích Nguy cơ Mai một)
            </h3>
          </div>

          <div className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#57243a] text-[#FBF8F4]">
                    <th className="py-4 px-5 text-xs font-semibold tracking-wide w-full md:w-[26%]">
                      Loại hình Di sản
                    </th>
                    <th className="hidden md:table-cell py-4 px-5 text-xs font-semibold tracking-wide w-[74%]">
                      Các Thách thức Cốt lõi & Nguy cơ Mai một Thực tế
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE2D8] text-sm leading-relaxed text-[#3E3036]">
                  {CHALLENGE_ROWS.map((row) => (
                    <tr
                      key={row.id}
                      className="align-top flex flex-col md:table-row hover:bg-[#FAF5F7]/60 transition-colors"
                    >
                      <td className="pt-5 pb-2 md:py-5 px-5 font-serif text-lg font-bold text-[#57243a]">
                        {row.heritageName}
                      </td>
                      <td className="pb-5 pt-1 md:py-5 px-5">
                        <ul className="space-y-2.5">
                          {row.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-[#8F5E24] font-bold mt-0.5" aria-hidden="true">
                                •
                              </span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 6.3 Bảng giá / Chi phí Trải nghiệm & Vé Biểu diễn */}
        <div>
          <div className="max-w-3xl mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#57243a]">
              6.3. Bảng giá / Chi phí Trải nghiệm & Vé Biểu diễn
            </h3>
            <p className="mt-2 text-sm text-[#69575E]">
              Thông tin chi phí tham khảo chuẩn hóa cho các hình thức thưởng thức tại nhà hát chuyên nghiệp, tour workshop di sản và lễ hội cộng đồng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.title}
                className="bg-[#F5EFE8] border border-[#EAE2D8] rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1F161A]">
                    {tier.title}
                  </h4>
                  <p className="mt-3 text-base font-semibold text-[#57243a]">
                    {tier.detail}
                  </p>
                </div>
                <p className="mt-4 pt-4 border-t border-[#EAE2D8] text-xs sm:text-sm leading-relaxed text-[#69575E]">
                  {tier.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
