import { useState } from 'react';
import { CheckCircle2, ChevronDown, RotateCcw } from 'lucide-react';
import {
  FAQ_ITEMS,
  SURVEY_QUESTIONS,
  type HeritageId,
} from '../data/heritageContent';
import {
  calculatePollPercentages,
  createInitialPollTallies,
  mergePollVotes,
  validateSurveySubmission,
  type PollTallies,
} from '../utils/heritageLogic';

const SURVEY_GROUPS: { id: HeritageId; title: string }[] = [
  { id: 'don-ca-tai-tu', title: 'Nhóm Đờn ca tài tử Nam Bộ' },
  { id: 'hat-tuong', title: 'Nhóm Hát Tuồng (Hát Bội)' },
  { id: 'hat-xam', title: 'Nhóm Hát Xẩm' },
];

export function FaqAndSurveySection() {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [pollTallies, setPollTallies] = useState<PollTallies>(() =>
    createInitialPollTallies(SURVEY_QUESTIONS)
  );
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedCount, setSubmittedCount] = useState(0);

  const handleSelectOption = (questionId: string, optionId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    if (validationError) {
      setValidationError(null);
    }
  };

  const handleSubmitSurvey = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateSurveySubmission(SURVEY_QUESTIONS, selectedAnswers, false);
    if (!validation.valid) {
      setValidationError(validation.errorMessage);
      return;
    }

    setPollTallies((prev) => mergePollVotes(prev, selectedAnswers));
    setSubmittedCount(validation.answeredCount);
    setValidationError(null);
    setIsSubmitted(true);
  };

  const handleResetSurvey = () => {
    setSelectedAnswers({});
    setValidationError(null);
    setIsSubmitted(false);
  };

  const answeredProgress = Object.keys(selectedAnswers).length;

  return (
    <section id="khao-sat" className="py-16 lg:py-24 bg-[#FBF8F4] border-b border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 8.1 Giải đáp Hiểu lầm Thường gặp (FAQ Accordion) */}
        <div>
          <div className="max-w-3xl mb-8">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8F5E24] mb-1.5">
              08. Hỏi – Đáp & Khảo sát Tương tác Công chúng
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#57243a]">
              8.1. Giải đáp Hiểu lầm Thường gặp (FAQ Accordion)
            </h2>
          </div>

          <div className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-xl divide-y divide-[#EAE2D8]">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${item.id}`}
                    onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF5F7]/60 transition-colors focus-visible:outline-2 focus-visible:outline-[#57243a]"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1F161A]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#57243a] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={`panel-${item.id}`}
                      className="px-6 pb-6 pt-1 text-sm sm:text-[15px] leading-relaxed text-[#3E3036] max-w-4xl"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 8.2 Bộ Câu hỏi Khảo sát Tương tác trên Website */}
        <div id="bieu-mau-khao-sat">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="max-w-3xl">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#57243a]">
                8.2. Bộ Câu hỏi Khảo sát Tương tác trên Website (Interactive Poll)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#3E3036]">
                Góp phần khảo sát nhận thức cộng đồng và thế hệ trẻ đối với ba loại hình di sản Đờn ca tài tử Nam Bộ, Hát Tuồng và Hát Xẩm.
              </p>
            </div>
            <div className="text-xs font-medium text-[#69575E] tabular-nums shrink-0">
              Đã chọn <strong className="text-[#57243a]">{answeredProgress}</strong> /{' '}
              {SURVEY_QUESTIONS.length} câu hỏi
            </div>
          </div>

          <form onSubmit={handleSubmitSurvey} className="space-y-8" noValidate>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {SURVEY_GROUPS.map((group) => {
                const groupQuestions = SURVEY_QUESTIONS.filter(
                  (q) => q.groupId === group.id
                );
                return (
                  <div
                    key={group.id}
                    role="group"
                    aria-labelledby={`survey-group-${group.id}`}
                    className="bg-[#FFFFFF] border border-[#EAE2D8] rounded-xl p-6 space-y-6"
                  >
                    <h4
                      id={`survey-group-${group.id}`}
                      className="font-serif text-xl font-bold text-[#57243a] border-b border-[#EAE2D8] pb-3.5"
                    >
                      {group.title}
                    </h4>

                    <div className="space-y-6">
                      {groupQuestions.map((q) => {
                        const selectedOpt = selectedAnswers[q.id];
                        const percentages = calculatePollPercentages(
                          q,
                          pollTallies[q.id]
                        );

                        return (
                          <div key={q.id} className="space-y-3">
                            <p className="text-sm font-semibold text-[#1F161A] leading-snug">
                              <span className="text-[#8F5E24] font-mono mr-1.5 tabular-nums">
                                {q.number}.
                              </span>
                              {q.question}
                            </p>

                            <div className="space-y-2">
                              {q.options.map((opt) => {
                                const isChecked = selectedOpt === opt.id;
                                const stat = percentages.find(
                                  (p) => p.optionId === opt.id
                                );
                                return (
                                  <label
                                    key={opt.id}
                                    className={`block p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-colors ${
                                      isChecked
                                        ? 'border-[#57243a] bg-[#FAF5F7] text-[#1F161A]'
                                        : 'border-[#EAE2D8] bg-[#FBF8F4]/60 text-[#3E3036] hover:border-[#D8CEC2]'
                                    }`}
                                  >
                                    <div className="flex items-start gap-2.5">
                                      <input
                                        type="radio"
                                        name={q.id}
                                        value={opt.id}
                                        checked={isChecked}
                                        onChange={() => handleSelectOption(q.id, opt.id)}
                                        className="mt-1 accent-[#57243a] shrink-0"
                                      />
                                      <span className="flex-1 leading-snug">
                                        {opt.label}
                                      </span>
                                    </div>

                                    {isSubmitted && stat && (
                                      <div className="mt-2.5 pl-6 space-y-1">
                                        <div className="flex items-center justify-between text-[11px] font-medium text-[#69575E] tabular-nums">
                                          <span>Tỷ lệ cộng đồng</span>
                                          <span>
                                            {stat.percentage}% ({stat.count} lượt)
                                          </span>
                                        </div>
                                        <div className="h-1.5 w-full bg-[#EAE2D8] rounded-full overflow-hidden">
                                          <div
                                            className="h-full bg-[#57243a] rounded-full"
                                            style={{ width: `${stat.percentage}%` }}
                                          />
                                        </div>
                                      </div>
                                    )}
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {validationError && (
              <div
                role="alert"
                className="p-4 rounded-lg bg-[#FAF5F7] border border-[#57243a]/40 text-sm font-medium text-[#57243a]"
              >
                {validationError}
              </div>
            )}

            {isSubmitted && (
              <div
                role="status"
                className="p-5 rounded-xl bg-[#FAF5F7] border border-[#57243a]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#57243a] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#57243a]">
                      Cảm ơn bạn đã tham gia khảo sát nhận thức di sản!
                    </p>
                    <p className="text-xs sm:text-sm text-[#3E3036] mt-0.5 tabular-nums">
                      Hệ thống đã ghi nhận {submittedCount}/{SURVEY_QUESTIONS.length} câu trả lời của bạn và cập nhật tỷ lệ thống kê cộng đồng ngay trên từng lựa chọn.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleResetSurvey}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#57243a] border border-[#57243a]/40 rounded-md hover:bg-[#FFFFFF] transition-colors whitespace-nowrap shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  Làm lại khảo sát
                </button>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-xs text-[#69575E]">
                Bạn có thể trả lời từng nhóm hoặc toàn bộ 9 câu hỏi khảo sát nhận thức công chúng.
              </p>
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold text-[#FBF8F4] bg-[#57243a] hover:bg-[#43192B] rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57243a]"
              >
                Gửi kết quả khảo sát
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
