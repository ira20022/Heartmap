// Quiz registry — add new quiz files here as you create them
// Each quiz follows the QuizMeta interface from attachment-style.ts

import attachmentStyle from './attachment-style';
import loveLanguage from './love-language';
import communicationStyle from './communication-style';
import emotionalNeeds from './emotional-needs';
import relationshipPatterns from './relationship-patterns'
import redFlags from './red-flags';
import attractionBlueprint from './attraction-blueprint';
import whoAreYouInLove from './who-are-you-in-love-quiz'
import whoDoYouFallFor from './who-do-you-fall-for'
import howYouFallInLove from './how-do-you-fall-in-love';

// Re-export types
export type { QuizMeta, QuizQuestion, QuizOption } from './attachment-style';
import type { QuizMeta, QuizQuestion } from './attachment-style';

// Registry: slug → quiz data
export const quizRegistry: Record<string, QuizMeta> = {
  'attachment-style': attachmentStyle,
  'love-language': loveLanguage,
  'communication-style': communicationStyle,
  'emotional-needs': emotionalNeeds,
  'relationship-patterns': relationshipPatterns,
  'red-flags': redFlags,
  'attraction-blueprint': attractionBlueprint,
  'who-are-you-in-love-quiz': whoAreYouInLove,
  'how-do-you-fall-in-love': howYouFallInLove,
  'who-do-you-fall-for': whoDoYouFallFor
};

// ---------------------------------------------------------------------------
// Shuffle utilities
// ---------------------------------------------------------------------------

/**
 * Mulberry32 — a fast, seedable PRNG.
 * Returns a function that produces a float in [0, 1) each call.
 */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Fisher-Yates shuffle driven by a seeded PRNG so the order is
 * deterministic for a given seed but different every session.
 */
function seededShuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------------------
// Session builder
// ---------------------------------------------------------------------------

export interface SessionQuestion extends QuizQuestion {
  /** Shuffled options, each carrying its original weight map */
  options: QuizQuestion['options'];
}

/**
 * buildSession
 *
 * Call once on quiz mount (inside useMemo / useRef) and never again.
 * Returns a stable array of `count` randomly-selected questions, each
 * with its own options shuffled — all driven by a single session seed
 * so the experience is consistent within one sitting but fresh each time.
 *
 * @param quiz   Full quiz data object from the registry
 * @param count  How many questions to pick (default 10)
 * @param seed   Optional explicit seed; defaults to Date.now()
 */
export function buildSession(
  quiz: QuizMeta,
  seed?: number,
): SessionQuestion[] {
  const s = seed ?? Date.now();
  const rand = mulberry32(s);

  // 1. Shuffle the full question pool
  const shuffledQuestions = seededShuffle(quiz.questions, rand);

  // 2. Pick the first `count` (or all if fewer available)
  const picked = shuffledQuestions.slice(0, Math.min(quiz.noOfQuestion, shuffledQuestions.length));

  // 3. For each picked question, shuffle its options
  return picked.map((q) => ({
    ...q,
    options: seededShuffle(q.options, rand),
  }));
}

// ---------------------------------------------------------------------------
// Scoring engine
// ---------------------------------------------------------------------------

export type AnswerMap = Record<number, number>; // sessionQuestionIndex → optionIndex

export interface CategoryScore {
  key: string;
  label: string;
  emoji: string;
  score: number;
  percent: number;
}

export interface QuizResult {
  winner: string;          // category key with highest score
  scores: CategoryScore[]; // all categories sorted by score desc
}

/**
 * calculateResult
 *
 * Works directly against the SessionQuestion array returned by buildSession,
 * so weights always match the (shuffled) options the user actually saw.
 *
 * @param quiz     Full quiz data (for resultCategories metadata)
 * @param session  The SessionQuestion array from buildSession
 * @param answers  Map of sessionQuestionIndex → chosen optionIndex
 */


export function calculateResult(
  quiz: QuizMeta,
  session: SessionQuestion[],
  answers: AnswerMap,
): QuizResult {
  // Initialise totals
  const totals: Record<string, number> = {};
  for (const key of Object.keys(quiz.resultCategories)) {
    totals[key] = 0;
  }

  // Sum weights for each answered question
  session.forEach((question, qIdx) => {
    const chosenOptionIdx = answers[qIdx];
    if (chosenOptionIdx === undefined) return;
    const option = question.options[chosenOptionIdx];
    if (!option) return;
    for (const [cat, weight] of Object.entries(option.weights)) {
      if (cat in totals) totals[cat] += weight;
    }
  });

  // Grand total across all categories for relative percentages
  const grandTotal = Object.values(totals).reduce((sum, v) => sum + v, 0);

  // Build sorted scores array
  const scores: CategoryScore[] = Object.entries(totals)
    .map(([key, score]) => ({
      key,
      label: quiz.resultCategories[key].label,
      emoji: quiz.resultCategories[key].emoji,
      score,
      percent: grandTotal > 0 ? Math.round((score / grandTotal) * 100) : 0,
    }))
    .sort((a, b) => b.score - a.score);

  return {
    winner: scores[0]?.key ?? '',
    scores,
  };
}