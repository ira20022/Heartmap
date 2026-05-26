// import {
//   quizRegistry,
//   buildSession,
//   calculateResult,
//   QuizResult,
//   AnswerMap,
//   SessionQuestion,
// } from '@/app/quizData';

'use client';

import React, { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

import {
  quizRegistry,
  buildSession,
  calculateResult,
  QuizMeta,
  QuizResult,
  AnswerMap,
  SessionQuestion,
} from '@/app/quizData';
// Adjust path if needed:
// import { ... } from '../../../../quizData';

// ---------------------------------------------------------------------------
// How many questions to show per session
// ---------------------------------------------------------------------------
const QUESTIONS_PER_SESSION = 10;

// ---------------------------------------------------------------------------
// ResultScreen
// ---------------------------------------------------------------------------
function ResultScreen({
  quiz,
  result,
  onRetake,
}: {
  quiz: QuizMeta;
  result: QuizResult;
  onRetake: () => void;
}) {
  const winner = quiz.resultCategories[result.winner];

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-start px-4 py-12">
      <div className="w-full max-w-xl">
        {/* Badge */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-[var(--primary)]/15 flex items-center justify-center mb-5 text-4xl">
            {winner.emoji}
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-2">
            Your {quiz.title}
          </p>
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">{winner.label}</h2>
          <p className="text-[var(--muted-foreground)] text-sm leading-relaxed max-w-sm">
            {winner.description}
          </p>
        </div>

        {/* Score breakdown */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-4">
            Score breakdown
          </p>
          <div className="space-y-3">
            {result.scores.map((cat, idx) => (
              <div key={cat.key}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-[var(--foreground)] flex items-center gap-1.5">
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                    {idx === 0 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[var(--primary)]/15 text-[var(--primary)] px-1.5 py-0.5 rounded-full ml-1">
                        Top
                      </span>
                    )}
                  </span>
                  <span className="text-xs tabular-nums text-[var(--muted-foreground)]">
                    {cat.percent}%
                  </span>
                </div>
                <div className="h-1.5 bg-[var(--muted)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${cat.percent}%`,
                      backgroundColor: idx === 0 ? 'var(--primary)' : 'var(--muted-foreground)',
                      opacity: idx === 0 ? 1 : 0.4,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advice */}
        <div className="bg-[var(--primary)]/5 border border-[var(--primary)]/20 rounded-2xl p-5 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-2">
            What this means for you
          </p>
          <p className="text-sm text-[var(--foreground)] leading-relaxed">{winner.advice}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onRetake}
            className="w-full text-center px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] text-sm font-semibold hover:border-[var(--primary)]/40 transition-colors"
          >
            Retake with new questions ↺
          </button>
          <Link
            href="/home"
            className="block w-full text-center px-6 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Explore more quizzes
          </Link>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main quiz page
// ---------------------------------------------------------------------------
export default function QuizSlugPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const quiz = quizRegistry[slug];

  // ── Session seed: a new random number each time the component mounts,
  //    or when the user clicks "Retake". Changing this key triggers useMemo
  //    to rebuild the session with a fresh shuffle.
  const [sessionSeed, setSessionSeed] = useState(() => Date.now());

  // ── Build the session once per seed — never changes mid-quiz
  const session: SessionQuestion[] = useMemo(() => {
    if (!quiz) return [];
    return buildSession(quiz, QUESTIONS_PER_SESSION, sessionSeed);
  }, [quiz, sessionSeed]);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  // ── Reset all state and generate a fresh shuffle
  function handleRetake() {
    setSessionSeed(Date.now());
    setCurrent(0);
    setAnswers({});
    setResult(null);
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center px-4 text-center">
        <p className="text-[var(--muted-foreground)] mb-6">Quiz not found.</p>
        <Link href="/home" className="text-[var(--primary)] text-sm underline">
          Back to home
        </Link>
      </div>
    );
  }

  const total = session.length; // always QUESTIONS_PER_SESSION (or fewer if pool < 10)
  const progress = (current / total) * 100;

  function handleSelect(optIdx: number) {
    const updated = { ...answers, [current]: optIdx };
    setAnswers(updated);

    if (current < total - 1) {
      setTimeout(() => setCurrent((c) => c + 1), 280);
    } else {
      setTimeout(() => {
        setResult(calculateResult(quiz, session, updated));
      }, 280);
    }
  }

  // Show results
  if (result) {
    return <ResultScreen quiz={quiz} result={result} onRetake={handleRetake} />;
  }

  const q = session[current];

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() =>
              current > 0 ? setCurrent((c) => c - 1) : router.push('/home')
            }
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--muted)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex-1">
            <p className="text-xs text-[var(--muted-foreground)] mb-1">{quiz.title}</p>
            <div className="h-1.5 bg-[var(--muted)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--primary)] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <span className="text-xs text-[var(--muted-foreground)] tabular-nums">
            {current + 1}/{total}
          </span>
        </div>
      </header>

      {/* Question */}
      <div className="flex-1 max-w-xl mx-auto w-full px-4 py-10 flex flex-col">
        <div className="mb-2">
          <span className={`text-xs font-semibold uppercase tracking-wider ${quiz.color}`}>
            {quiz.tag}
          </span>
        </div>

        <h2 className="text-xl font-bold text-[var(--foreground)] leading-snug mb-8">{q.q}</h2>

        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 text-sm font-medium
                ${
                  answers[current] === idx
                    ? 'border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--foreground)]'
                    : 'border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5'
                }`}
            >
              {opt.text}
            </button>
          ))}
        </div>

        {/* Previous button */}
        {current > 0 && (
          <div className="mt-8 flex justify-between text-xs text-[var(--muted-foreground)]">
            <button
              className="hover:text-[var(--foreground)] transition-colors"
              onClick={() => setCurrent((c) => c - 1)}
            >
              ← Previous
            </button>
            <span>
              {Object.keys(answers).length} of {total} answered
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
