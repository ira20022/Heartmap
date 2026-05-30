'use client';

import React, { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

import {
  quizRegistry,
  buildSession,
  calculateResult,
  QuizResult,
  AnswerMap,
  SessionQuestion,
} from '@/app/quizData';

import { ResultScreen } from './result-screen';
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
    return buildSession(quiz, sessionSeed);
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
