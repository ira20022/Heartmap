'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, Clock, CheckCircle, BarChart2, ChevronRight, RefreshCw } from 'lucide-react';

const FASTAPI_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

interface QuizResult {
  id: string;
  quiz_id: string;
  quiz_title: string;
  completed_at: string;
  result_summary: string;
  persona?: string;
  score?: number;
  tags?: string[];
}

interface DashboardStats {
  total_completed: number;
  last_active: string | null;
  favorite_category: string | null;
}

interface QuizCard {
  id: string;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
  href: string;
  isNew?: boolean;
  isBoth?: boolean;
  accent: string;
}

const sections: { label: string; cards: QuizCard[] }[] = [
  {
    label: 'KNOW YOURSELF',
    cards: [
      { id: 'attachment-style', title: 'Attachment style', description: 'Secure, anxious, avoidant, or disorganized — how you bond and feel safe in love.', tag: 'Self-awareness', tagColor: 'text-rose-400', href: '/quiz/attachment-style', accent: 'from-rose-500/20 to-pink-500/10' },
      { id: 'love-language', title: 'Love language', description: 'Words, touch, quality time, acts of service, or gifts — how you give and receive love.', tag: 'Self-awareness', tagColor: 'text-rose-400', href: '/quiz/love-language', accent: 'from-pink-500/20 to-rose-400/10' },
      { id: 'emotional-needs', title: 'Emotional needs', description: 'Security, validation, independence, or intimacy — what you need to feel truly loved.', tag: 'Self-awareness', tagColor: 'text-rose-400', href: '/quiz/emotional-needs', accent: 'from-rose-400/20 to-fuchsia-500/10' },
      { id: 'communication-style', title: 'Communication style', description: 'How you express needs, handle conflict, and show up when things get hard.', tag: 'Self-awareness', tagColor: 'text-rose-400', href: '/quiz/communication-style', accent: 'from-fuchsia-500/20 to-rose-500/10' },
    ],
  },
  {
    label: 'PATTERNS & BLIND SPOTS',
    cards: [
      { id: 'relationship-patterns', title: 'Relationship patterns', description: 'Chasing, withdrawing, people-pleasing — behaviours you repeat without realizing it.', tag: 'Patterns', tagColor: 'text-violet-400', href: '/quiz/relationship-patterns', accent: 'from-violet-500/20 to-purple-500/10' },
      { id: 'red-flags', title: 'Red flags', description: 'The warning signs you overlook in others — and the ones you may unknowingly display.', tag: 'Patterns', tagColor: 'text-violet-400', href: '/quiz/red-flags', accent: 'from-purple-500/20 to-violet-400/10' },
      { id: 'attraction-blueprint', title: 'Attraction blueprint', description: "The personality types and energies you're consistently pulled toward in partners.", tag: 'Patterns', tagColor: 'text-violet-400', href: '/quiz/attraction-blueprint', accent: 'from-indigo-500/20 to-violet-500/10' },
    ],
  },
  {
    label: 'YOUR RELATIONSHIP PERSONA',
    cards: [
      { id: 'who-are-you-in-love', title: 'Who are you in love?', description: 'Discover your relationship archetype — from The Steady Anchor to The Storm Chaser. A portrait of how you love, fear, and connect.', tag: 'Persona', tagColor: 'text-violet-400', href: '/quiz/who-are-you-in-love-quiz', isNew: true, accent: 'from-amber-500/20 to-orange-500/10' },
      { id: 'who-do-you-fall-for', title: 'Who do you fall for?', description: 'The emotional archetypes and relationship personas you tend to attract and be drawn to.', tag: 'Persona', tagColor: 'text-violet-400', href: '/quiz/who-do-you-fall-for', accent: 'from-orange-500/20 to-amber-400/10' },
      {
        id: 'how-you-fall-in-love',
        title: 'How do you fall in love?',
        description:
          'Explore the path your heart takes — slowly and cautiously, intensely and fast, or through deep emotional connection. Uncover the patterns behind how attraction turns into love.',
        tag: 'Persona',
        tagColor: 'text-violet-400',
        href: '/quiz/how-do-you-fall-in-love',
        accent: 'from-rose-500/20 to-pink-500/10',
      }
    ],
  },
  {
    label: 'BETWEEN YOU TWO',
    cards: [
      { id: 'compatibility-check', title: 'Compatibility check', description: 'Both partners answer, see how your styles, needs, and attachment patterns align.', tag: 'Couple', tagColor: 'text-sky-400', href: '/partner-compatibility-screen', isBoth: true, accent: 'from-sky-500/20 to-blue-500/10' },
    ],
  },
];

const tagBg: Record<string, string> = {
  'Self-awareness': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'Patterns': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Persona': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Couple': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function HomePage() {
  const router = useRouter();
  const { user, token, signOut, loading } = useAuth();
  const [results, setResults] = useState<QuizResult[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [dashboardLoading, setDashboardLoading] = useState(false);
  const [dashboardError, setDashboardError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/sign-up-login-screen');
    }
  }, [user, loading, router]);

  const fetchDashboard = useCallback(async () => {
    if (!token) return;
    setDashboardLoading(true);
    setDashboardError(null);
    try {
      const [resultsRes, statsRes] = await Promise.all([
        fetch(`${FASTAPI_BASE_URL}/users/me/quiz-results`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${FASTAPI_BASE_URL}/users/me/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      if (resultsRes.ok) {
        const data = await resultsRes.json();
        setResults(data.results || data || []);
      }
      if (statsRes.ok) {
        const data = await statsRes.json();
        setStats(data);
      }
    } catch {
      setDashboardError('Could not load your dashboard. Please try again.');
    } finally {
      setDashboardLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (user && token) {
      fetchDashboard();
    }
  }, [user, token, fetchDashboard]);

  const handleSignOut = () => {
    signOut();
    router.push('/sign-up-login-screen');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <svg className="animate-spin w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AppLogo size={28} />
            <span className="font-bold text-base text-foreground tracking-tight">heartmap</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user.name || user.email}
            </span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-2xl mx-auto px-4 pt-10 pb-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--muted-foreground)] uppercase mb-3">
          Relationship Intelligence
        </p>
        <h1 className="text-3xl font-bold text-[var(--foreground)] leading-tight mb-3">
          Welcome back{user.name ? `, ${user.name.split(' ')[0]}` : ''}.<br />
          <span className="text-gradient-rose">Understand love.</span>
        </h1>
        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
          Short, honest quizzes that reveal how you attach, communicate, and connect — so you can love with more clarity.
        </p>
      </div>

      {/* Results Dashboard */}
      <div className="max-w-2xl mx-auto px-4 pb-8">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
          {/* Dashboard Header */}
          <div className="px-5 py-4 border-b border-[var(--border)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-primary" />
              <h2 className="text-sm font-semibold text-foreground">Your Results Dashboard</h2>
            </div>
            <button
              onClick={fetchDashboard}
              disabled={dashboardLoading}
              className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Refresh dashboard"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${dashboardLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {/* Stats Row */}
          {stats && (
            <div className="grid grid-cols-3 divide-x divide-[var(--border)] border-b border-[var(--border)]">
              <div className="px-4 py-3 text-center">
                <p className="text-xl font-bold text-foreground">{stats.total_completed}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Completed</p>
              </div>
              <div className="px-4 py-3 text-center">
                <p className="text-sm font-semibold text-foreground truncate">
                  {stats.last_active ? formatDate(stats.last_active) : '—'}
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Last Active</p>
              </div>
              <div className="px-4 py-3 text-center">
                <p className="text-sm font-semibold text-foreground truncate">
                  {stats.favorite_category || '—'}
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Top Category</p>
              </div>
            </div>
          )}

          {/* Results List */}
          <div className="divide-y divide-[var(--border)]">
            {dashboardLoading && (
              <div className="px-5 py-8 flex items-center justify-center gap-2 text-muted-foreground text-sm">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Loading your results...
              </div>
            )}

            {dashboardError && !dashboardLoading && (
              <div className="px-5 py-6 text-center">
                <p className="text-sm text-red-400 mb-3">{dashboardError}</p>
                <button
                  onClick={fetchDashboard}
                  className="text-xs text-primary hover:underline"
                >
                  Try again
                </button>
              </div>
            )}

            {!dashboardLoading && !dashboardError && results.length === 0 && (
              <div className="px-5 py-8 text-center">
                <CheckCircle className="w-8 h-8 text-muted-foreground mx-auto mb-3 opacity-40" />
                <p className="text-sm text-muted-foreground">No quizzes completed yet.</p>
                <p className="text-xs text-muted-foreground mt-1">Take your first quiz below to see results here.</p>
              </div>
            )}

            {!dashboardLoading && results.map((result) => (
              <div key={result.id} className="px-5 py-4 hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      <h3 className="text-sm font-semibold text-foreground truncate">{result.quiz_title}</h3>
                    </div>
                    {result.persona && (
                      <p className="text-xs text-primary font-medium mb-1">
                        Result: {result.persona}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {result.result_summary}
                    </p>
                    {result.tags && result.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {result.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    {result.score !== undefined && (
                      <span className="text-sm font-bold text-foreground">{result.score}%</span>
                    )}
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span className="text-[10px]">{formatDate(result.completed_at)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {results.length > 0 && (
            <div className="px-5 py-3 border-t border-[var(--border)] flex items-center justify-between">
              <p className="text-xs text-muted-foreground">{results.length} quiz{results.length !== 1 ? 'zes' : ''} completed</p>
              <div className="flex items-center gap-1 text-xs text-primary">
                <span>View all</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Quiz CTA */}
      <div className="max-w-2xl mx-auto px-4 pb-6">
        <Link
          href="/quiz/who-are-you-in-love-quiz"
          className="group flex items-center justify-between w-full rounded-2xl p-5 border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/5 hover:border-amber-500/50 hover:from-amber-500/15 transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">QUICK QUIZ</span>
            </div>
            <h3 className="text-base font-semibold text-foreground">Who are you in love?</h3>
            <p className="text-sm text-muted-foreground mt-0.5">Discover your relationship archetype in 15 questions</p>
          </div>
          <ChevronRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Quiz Sections */}
      <div className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        {sections.map((section) => (
          <div key={section.label}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-[0.18em] text-[var(--muted-foreground)] uppercase">
                {section.label}
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.cards.map((card, idx) => {
                const isWide =
                  (section.label === 'YOUR RELATIONSHIP PERSONA' && idx === 0) ||
                  section.label === 'BETWEEN YOU TWO';
                return (
                  <Link
                    key={card.id}
                    href={card.href}
                    className={`group relative flex flex-col justify-between rounded-2xl p-5 border border-[var(--border)] bg-[var(--card)] overflow-hidden transition-all duration-300 hover:border-[var(--primary)]/40 hover:shadow-lg hover:shadow-[var(--primary)]/5 hover:-translate-y-0.5 active:scale-[0.98] ${isWide ? 'sm:col-span-2' : ''}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="text-base font-semibold text-[var(--foreground)] leading-snug group-hover:text-white transition-colors">
                          {card.title}
                        </h3>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {card.isNew && (
                            <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">NEW</span>
                          )}
                          {card.isBoth && (
                            <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/25">BOTH</span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">{card.description}</p>
                    </div>
                    <div className="relative z-10 flex items-center justify-between">
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${tagBg[card.tag] ?? 'bg-white/5 text-white/50 border-white/10'}`}>
                        {card.tag}
                      </span>
                      <span className="text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors duration-200">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
