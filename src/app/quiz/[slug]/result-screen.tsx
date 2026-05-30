import {
  QuizMeta,
  QuizResult,
} from '@/app/quizData';
import Link from 'next/link';

export function ResultScreen({
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

        {/* Score breakdown — now with per-category definitions */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-5">
            Score breakdown
          </p>
          <div className="space-y-5">
            {result.scores.filter(cat => cat.percent > 0).map((cat, idx) => {
              const catDef = quiz.resultCategories[cat.key];
              const isWinner = idx === 0;

              return (
                <div
                  key={cat.key}
                  className={`rounded-xl p-4 transition-colors ${
                    isWinner
                      ? 'bg-[var(--primary)]/8 border border-[var(--primary)]/20'
                      : 'bg-[var(--muted)]/40 border border-[var(--border)]'
                  }`}
                >
                  {/* Label + percent */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[var(--foreground)] flex items-center gap-1.5">
                      <span>{cat.emoji}</span>
                      <span>{cat.label}</span>
                      {isWinner && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[var(--primary)]/15 text-[var(--primary)] px-1.5 py-0.5 rounded-full ml-1">
                          Top
                        </span>
                      )}
                    </span>
                    <span className="text-xs tabular-nums font-medium text-[var(--muted-foreground)]">
                      {cat.percent}%
                    </span>
                  </div>

                  {/* Bar */}
                  <div className="h-1.5 bg-[var(--muted)] rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${cat.percent}%`,
                        backgroundColor: isWinner ? 'var(--primary)' : 'var(--muted-foreground)',
                        opacity: isWinner ? 1 : 0.4,
                      }}
                    />
                  </div>

                  {/* Category description */}
                  {catDef && (
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-2">
                      {catDef.description}
                    </p>
                  )}

                  {/* Advice — only show if there's meaningful score */}
                  {catDef?.advice && cat.percent > 0 && (
                    <p
                      className={`text-xs leading-relaxed ${
                        isWinner ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'
                      }`}
                    >
                      <span
                        className={`font-semibold ${
                          isWinner ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'
                        }`}
                      >
                        {isWinner ? '→ ' : '  '}
                      </span>
                      {catDef.advice}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
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