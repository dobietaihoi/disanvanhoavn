import { useState } from 'react';
import { Calendar, Download, ExternalLink, FileText } from 'lucide-react';
import {
  HERITAGE_BLOCKS,
  REFERENCES_ALL,
  type HeritageId,
} from '../data/heritageContent';
import {
  filterReferences,
  generateResearchBriefText,
  type HeritageFilter,
} from '../utils/heritageLogic';
import { ScheduleModal } from './ScheduleModal';

const REF_TABS: { id: HeritageFilter; label: string; count: number }[] = [
  { id: 'all', label: 'Tất cả Nguồn', count: REFERENCES_ALL.length },
  {
    id: 'don-ca-tai-tu',
    label: '10.1. Đờn ca tài tử Nam Bộ',
    count: REFERENCES_ALL.filter((r) => r.heritageId === 'don-ca-tai-tu').length,
  },
  {
    id: 'hat-xam',
    label: '10.2. Hát Xẩm',
    count: REFERENCES_ALL.filter((r) => r.heritageId === 'hat-xam').length,
  },
  {
    id: 'hat-tuong',
    label: '10.3. Hát Tuồng (Hát Bội)',
    count: REFERENCES_ALL.filter((r) => r.heritageId === 'hat-tuong').length,
  },
];

const HERITAGE_SECTION_TITLES: { id: HeritageId; heading: string }[] = [
  { id: 'don-ca-tai-tu', heading: '10.1. Nguồn tham khảo – Đờn ca tài tử Nam Bộ' },
  { id: 'hat-xam', heading: '10.2. Nguồn tham khảo – Hát Xẩm' },
  { id: 'hat-tuong', heading: '10.3. Nguồn tham khảo – Hát Tuồng (Hát Bội)' },
];

export function FinalCtaAndFooter() {
  const [refFilter, setRefFilter] = useState<HeritageFilter>('all');
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const visibleReferences = filterReferences(REFERENCES_ALL, refFilter);

  const handleDownloadResearchBrief = () => {
    const content = generateResearchBriefText(HERITAGE_BLOCKS, REFERENCES_ALL);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'di-san-van-hoa-phi-vat-the-viet-nam.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadNotice(
      'Đã tải xuống trọn bộ tài liệu tổng hợp di sản (định dạng văn bản chuẩn hóa).'
    );
  };

  return (
    <>
      {/* 09. FINAL CTA BANNER */}
      <section className="py-16 lg:py-24 bg-[#57243a] text-[#FBF8F4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#E2C285] mb-3">
            09. Lời kêu gọi Bảo tồn & Lan tỏa
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-tight text-[#FBF8F4]">
            CHUNG TAY GÌN GIỮ & LAN TỎA DI SẢN VĂN HÓA PHI VẬT THỂ VIỆT NAM
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#F4EAEF] max-w-3xl mx-auto">
            Từ tiếng đàn tài tử phóng khoáng phương Nam, chiếu Xẩm mộc mạc đậm tính nhân văn đồng bằng Bắc Bộ, đến tiếng trống chầu bi tráng trên sân khấu Tuồng cổ truyền — mỗi di sản đều là kết tinh trí tuệ và tâm hồn hàng ngàn năm của dân tộc. Hãy cùng chúng tôi bắt đầu hành trình khám phá, tham gia khảo sát nhận thức và lan tỏa những giá trị di sản văn hóa vô giá này đến cộng đồng hôm nay.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#bieu-mau-khao-sat"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#57243a] bg-[#FBF8F4] hover:bg-[#F5EFE8] rounded-md transition-colors whitespace-nowrap"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              Biểu mẫu Khảo sát Trực tuyến
            </a>
            <button
              type="button"
              onClick={() => setIsScheduleOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#FBF8F4] bg-[#43192B] border border-[#E2C285]/40 hover:border-[#E2C285] rounded-md transition-colors whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Lịch Biểu diễn Nhà hát & CLB
            </button>
            <button
              type="button"
              onClick={handleDownloadResearchBrief}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#FBF8F4] bg-transparent border border-[#FBF8F4]/35 hover:bg-[#43192B] rounded-md transition-colors whitespace-nowrap"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Tải Trọn bộ Tài liệu Nghiên cứu
            </button>
          </div>

          {downloadNotice && (
            <p role="status" className="mt-4 text-xs sm:text-sm text-[#E2C285]">
              {downloadNotice}
            </p>
          )}
        </div>
      </section>

      {/* 10. FOOTER (TÀI LIỆU THAM KHẢO, NGUỒN TRÍCH DẪN & THÔNG TIN BỔ TRỢ) */}
      <footer id="tai-lieu-tham-khao" className="bg-[#F5EFE8] text-[#1F161A] border-t border-[#EAE2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#EAE2D8]">
            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8F5E24] mb-1.5">
                10. Tài liệu Tham khảo & Nguồn Trích dẫn
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#57243a]">
                Thư mục Công trình Khoa học, Luận văn & Văn bản Pháp lý
              </h2>
            </div>

            <div
              role="group"
              aria-label="Lọc tài liệu tham khảo theo di sản"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#FFFFFF] border border-[#EAE2D8] rounded-lg self-start lg:self-auto"
            >
              {REF_TABS.map((tab) => {
                const isActive = refFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setRefFilter(tab.id)}
                    aria-pressed={isActive}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap tabular-nums ${
                      isActive
                        ? 'bg-[#57243a] text-[#FBF8F4]'
                        : 'text-[#3E3036] hover:text-[#57243a]'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-12">
            {HERITAGE_SECTION_TITLES.filter(
              (sec) => refFilter === 'all' || sec.id === refFilter
            ).map((sec) => {
              const items = visibleReferences.filter((r) => r.heritageId === sec.id);
              const academicItems = items.filter((r) => r.category === 'academic');
              const webItems = items.filter((r) => r.category === 'web');

              return (
                <div
                  key={sec.id}
                  className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-xl p-6 sm:p-8 space-y-6"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#57243a] border-b border-[#EAE2D8] pb-3">
                    {sec.heading}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8F5E24] mb-4">
                        {sec.id === 'hat-xam'
                          ? 'Tài liệu khoa học & Luận văn'
                          : sec.id === 'hat-tuong'
                            ? 'Tài liệu khoa học & Sách chuyên khảo'
                            : 'Tài liệu khoa học & Công trình nghiên cứu'}
                      </h4>
                      <ol className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#3E3036]">
                        {academicItems.map((ref) => (
                          <li key={ref.id} className="flex items-start gap-2.5">
                            <span className="font-mono text-xs font-semibold text-[#57243a] shrink-0 mt-0.5 tabular-nums">
                              {ref.code}
                            </span>
                            <div>
                              <span>{ref.citation}</span>
                              {ref.url && (
                                <a
                                  href={ref.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 ml-2 text-xs font-medium text-[#57243a] hover:underline break-all"
                                >
                                  <span>{ref.url}</span>
                                  <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                                </a>
                              )}
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8F5E24] mb-4">
                        {sec.id === 'hat-xam'
                          ? 'Trang web chuyên đề'
                          : sec.id === 'hat-tuong'
                            ? 'Trang web & Báo chí (W1–W14)'
                            : 'Trang web & Văn bản pháp lý (W1–W15)'}
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-[#3E3036]">
                        {webItems.map((ref) => (
                          <li key={ref.id} className="flex items-start gap-2.5">
                            <span className="font-mono text-xs font-semibold text-[#57243a] shrink-0 mt-0.5 tabular-nums">
                              {ref.code}
                            </span>
                            <div>
                              <span>{ref.citation}</span>
                              {ref.url && (
                                <a
                                  href={ref.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-xs text-[#57243a] hover:underline break-all mt-0.5"
                                >
                                  {ref.url}
                                </a>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 10.4 Thông tin Bản quyền, Liên hệ & Quản trị Website */}
          <div className="pt-8 border-t border-[#D8CEC2] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#3E3036]">
            <div>
              <p className="font-serif text-base font-bold text-[#57243a] mb-1">
                Đơn vị vận hành
              </p>
              <p>Dự án Bảo tồn & Giới thiệu Di sản Văn hóa Phi vật thể Việt Nam</p>
            </div>
            <div>
              <p className="font-serif text-base font-bold text-[#57243a] mb-1">
                Liên hệ Bồi dưỡng & Đóng góp dữ liệu
              </p>
              <p>Thư mục tư liệu chuẩn hóa cho 3 loại hình: Đờn ca tài tử – Hát Xẩm – Hát Tuồng</p>
            </div>
            <div className="md:text-right">
              <p className="font-serif text-base font-bold text-[#57243a] mb-1">
                Tuyên bố Bản quyền
              </p>
              <p>© 2026 Dự án Bảo tồn Di sản Văn hóa Phi vật thể Việt Nam. Tất cả các quyền được bảo hộ.</p>
            </div>
          </div>
        </div>
      </footer>

      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
    </>
  );
}
