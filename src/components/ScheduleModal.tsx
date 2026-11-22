import { useEffect } from 'react';
import { Calendar, MapPin, X } from 'lucide-react';
import { VENUE_SCHEDULES } from '../data/heritageContent';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F161A]/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#FBF8F4] border border-[#EAE2D8] rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#57243a] text-[#FBF8F4] px-6 py-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#E2C285] font-semibold">
              Danh bạ Không gian Diễn xướng
            </p>
            <h3 id="schedule-modal-title" className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
              Lịch Biểu diễn Nhà hát & CLB Tiêu biểu
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng bảng lịch biểu diễn"
            className="w-10 h-10 inline-flex items-center justify-center rounded-md text-[#FBF8F4] hover:bg-[#43192B] transition-colors focus-visible:outline-2 focus-visible:outline-[#FBF8F4]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {VENUE_SCHEDULES.map((venue) => (
            <div
              key={venue.name}
              className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-lg p-5 space-y-2.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8F5E24]">
                  {venue.heritageType}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#69575E]">
                  <MapPin className="w-3.5 h-3.5 text-[#57243a]" aria-hidden="true" />
                  {venue.location}
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1F161A]">
                {venue.name}
              </h4>
              <p className="text-sm font-medium text-[#57243a]">{venue.format}</p>
              <p className="text-xs sm:text-sm text-[#3E3036] flex items-start gap-2">
                <Calendar className="w-4 h-4 text-[#8F5E24] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{venue.scheduleNote}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 bg-[#F5EFE8] border-t border-[#EAE2D8] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-[#FBF8F4] bg-[#57243a] hover:bg-[#43192B] rounded-md transition-colors"
          >
            Đóng danh bạ
          </button>
        </div>
      </div>
    </div>
  );
}
