import test from 'node:test';
import assert from 'node:assert/strict';
import {
  HERITAGE_BLOCKS,
  REFERENCES_ALL,
  SURVEY_QUESTIONS,
} from '../data/heritageContent';
import {
  calculatePollPercentages,
  createInitialPollTallies,
  filterHeritageBlocks,
  filterReferences,
  generateResearchBriefText,
  mergePollVotes,
  validateSurveySubmission,
} from './heritageLogic';

test('filterHeritageBlocks returns all 3 heritage blocks for "all" and filters accurately by ID', () => {
  assert.equal(filterHeritageBlocks(HERITAGE_BLOCKS, 'all').length, 3);
  const xamOnly = filterHeritageBlocks(HERITAGE_BLOCKS, 'hat-xam');
  assert.equal(xamOnly.length, 1);
  assert.equal(xamOnly[0].id, 'hat-xam');
  assert.equal(xamOnly[0].blockCode, 'KHỐI B');
});

test('filterReferences preserves exact reference counts for all 3 heritage traditions', () => {
  assert.equal(filterReferences(REFERENCES_ALL, 'all').length, 47);
  assert.equal(filterReferences(REFERENCES_ALL, 'don-ca-tai-tu').length, 22);
  assert.equal(filterReferences(REFERENCES_ALL, 'hat-xam').length, 6);
  assert.equal(filterReferences(REFERENCES_ALL, 'hat-tuong').length, 19);
});

test('validateSurveySubmission rejects empty answers and accepts partial or full submissions', () => {
  const emptyResult = validateSurveySubmission(SURVEY_QUESTIONS, {});
  assert.equal(emptyResult.valid, false);
  assert.equal(emptyResult.answeredCount, 0);
  assert.ok(emptyResult.errorMessage);

  const partialResult = validateSurveySubmission(SURVEY_QUESTIONS, {
    'dctt-q1': 'dctt-q1-a',
    'xam-q3': 'xam-q3-a',
  });
  assert.equal(partialResult.valid, true);
  assert.equal(partialResult.answeredCount, 2);
  assert.equal(partialResult.totalCount, 9);
  assert.equal(partialResult.errorMessage, null);

  const strictIncomplete = validateSurveySubmission(
    SURVEY_QUESTIONS,
    { 'dctt-q1': 'dctt-q1-a' },
    true
  );
  assert.equal(strictIncomplete.valid, false);
});

test('mergePollVotes increments selected option tallies without mutating initial tallies', () => {
  const initial = createInitialPollTallies(SURVEY_QUESTIONS);
  const beforeCount = initial['dctt-q1']['dctt-q1-a'];

  const updated = mergePollVotes(initial, { 'dctt-q1': 'dctt-q1-a' });
  assert.equal(initial['dctt-q1']['dctt-q1-a'], beforeCount);
  assert.equal(updated['dctt-q1']['dctt-q1-a'], beforeCount + 1);
});

test('calculatePollPercentages computes accurate rounded percentages summing near 100', () => {
  const question = SURVEY_QUESTIONS[0];
  const percentages = calculatePollPercentages(question, {
    'dctt-q1-a': 50,
    'dctt-q1-b': 30,
    'dctt-q1-c': 20,
  });

  assert.deepEqual(
    percentages.map((p) => p.percentage),
    [50, 30, 20]
  );
});

test('generateResearchBriefText includes all 3 heritage blocks and references', () => {
  const text = generateResearchBriefText(HERITAGE_BLOCKS, REFERENCES_ALL);
  assert.ok(text.includes('KHỐI A: ĐỜN CA TÀI TỬ NAM BỘ'));
  assert.ok(text.includes('KHỐI B: HÁT XẨM'));
  assert.ok(text.includes('KHỐI C: HÁT TUỒNG (HÁT BỘI)'));
  assert.ok(text.includes('UNESCO Baku Session 2013 Decisions'));
});
