import type {
  HeritageId,
  HeritagePillarBlock,
  ReferenceItem,
  SurveyQuestion,
} from '../data/heritageContent';

export type HeritageFilter = 'all' | HeritageId;

export function filterHeritageBlocks(
  blocks: HeritagePillarBlock[],
  filter: HeritageFilter
): HeritagePillarBlock[] {
  if (filter === 'all') {
    return blocks;
  }
  return blocks.filter((block) => block.id === filter);
}

export function filterReferences(
  references: ReferenceItem[],
  filter: HeritageFilter
): ReferenceItem[] {
  if (filter === 'all') {
    return references;
  }
  return references.filter((item) => item.heritageId === filter);
}

export interface SurveyValidationResult {
  valid: boolean;
  answeredCount: number;
  totalCount: number;
  errorMessage: string | null;
}

export function validateSurveySubmission(
  questions: SurveyQuestion[],
  selectedAnswers: Record<string, string>,
  requireAll = false
): SurveyValidationResult {
  const validIds = new Set(questions.map((q) => q.id));
  const answeredCount = Object.entries(selectedAnswers).filter(
    ([qId, optionId]) => validIds.has(qId) && Boolean(optionId)
  ).length;

  if (answeredCount === 0) {
    return {
      valid: false,
      answeredCount,
      totalCount: questions.length,
      errorMessage: 'Vui lòng chọn ít nhất một câu trả lời trước khi gửi khảo sát.',
    };
  }

  if (requireAll && answeredCount < questions.length) {
    return {
      valid: false,
      answeredCount,
      totalCount: questions.length,
      errorMessage: `Vui lòng hoàn thành đầy đủ ${questions.length} câu hỏi khảo sát (${answeredCount}/${questions.length}).`,
    };
  }

  return {
    valid: true,
    answeredCount,
    totalCount: questions.length,
    errorMessage: null,
  };
}

export type PollTallies = Record<string, Record<string, number>>;

export function createInitialPollTallies(questions: SurveyQuestion[]): PollTallies {
  const tallies: PollTallies = {};
  for (const q of questions) {
    tallies[q.id] = {};
    for (const opt of q.options) {
      tallies[q.id][opt.id] = opt.initialCount;
    }
  }
  return tallies;
}

export function mergePollVotes(
  currentTallies: PollTallies,
  selectedAnswers: Record<string, string>
): PollTallies {
  const next: PollTallies = {};
  for (const [qId, optionsMap] of Object.entries(currentTallies)) {
    next[qId] = { ...optionsMap };
  }

  for (const [qId, selectedOptionId] of Object.entries(selectedAnswers)) {
    if (next[qId] && typeof next[qId][selectedOptionId] === 'number') {
      next[qId][selectedOptionId] += 1;
    }
  }
  return next;
}

export interface OptionPercentage {
  optionId: string;
  count: number;
  percentage: number;
}

export function calculatePollPercentages(
  question: SurveyQuestion,
  talliesForQuestion: Record<string, number> | undefined
): OptionPercentage[] {
  const counts = question.options.map((opt) => ({
    optionId: opt.id,
    count: talliesForQuestion?.[opt.id] ?? opt.initialCount,
  }));

  const total = counts.reduce((sum, item) => sum + item.count, 0);
  if (total === 0) {
    return counts.map((item) => ({ ...item, percentage: 0 }));
  }

  return counts.map((item) => ({
    optionId: item.optionId,
    count: item.count,
    percentage: Math.round((item.count / total) * 100),
  }));
}

export function generateResearchBriefText(
  blocks: HeritagePillarBlock[],
  references: ReferenceItem[]
): string {
  const lines: string[] = [
    'TÀI LIỆU TỔNG HỢP: DI SẢN VĂN HÓA PHI VẬT THỂ VIỆT NAM',
    'ĐỜN CA TÀI TỬ NAM BỘ – HÁT XẨM – HÁT TUỒNG (HÁT BỘI)',
    '================================================================',
    '',
  ];

  for (const block of blocks) {
    lines.push(`${block.blockCode}: ${block.title}`);
    lines.push(block.subtitle);
    lines.push('----------------------------------------------------------------');
    for (const sub of block.subsections) {
      lines.push(`${sub.index} ${sub.title}`);
      for (const b of sub.bullets) {
        lines.push(`  - ${b.label} ${b.text}`);
      }
      lines.push('');
    }
    lines.push('');
  }

  lines.push('TÀI LIỆU THAM KHẢO CHÍNH');
  lines.push('----------------------------------------------------------------');
  for (const ref of references) {
    lines.push(`${ref.code} ${ref.citation}${ref.url ? ` (${ref.url})` : ''}`);
  }

  return lines.join('\n');
}
