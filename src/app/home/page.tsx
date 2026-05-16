'use client';

import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

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
      {
        id: 'attachment-style',
        title: 'Attachment style',
        description: 'Secure, anxious, avoidant, or disorganized — how you bond and feel safe in love.',
        tag: 'Self-awareness',
        tagColor: 'text-rose-400',
        href: '/quiz/attachment-style',
        accent: 'from-rose-500/20 to-pink-500/10',
      },
      {
        id: 'love-language',
        title: 'Love language',
        description: 'Words, touch, quality time, acts of service, or gifts — how you give and receive love.',
        tag: 'Self-awareness',
        tagColor: 'text-rose-400',
        href: '/quiz/love-language',
        accent: 'from-pink-500/20 to-rose-400/10',
      },
      {
        id: 'emotional-needs',
        title: 'Emotional needs',
        description: 'Security, validation, independence, or intimacy — what you need to feel truly loved.',
        tag: 'Self-awareness',
        tagColor: 'text-rose-400',
        href: '/quiz/emotional-needs',
        accent: 'from-rose-400/20 to-fuchsia-500/10',
      },
      {
        id: 'communication-style',
        title: 'Communication style',
        description: 'How you express needs, handle conflict, and show up when things get hard.',
        tag: 'Self-awareness',
        tagColor: 'text-rose-400',
        href: '/quiz/communication-style',
        accent: 'from-fuchsia-500/20 to-rose-500/10',
      },
    ],
  },
  {
    label: 'PATTERNS & BLIND SPOTS',
    cards: [
      {
        id: 'relationship-patterns',
        title: 'Relationship patterns',
        description: 'Chasing, withdrawing, people-pleasing — behaviours you repeat without realizing it.',
        tag: 'Patterns',
        tagColor: 'text-violet-400',
        href: '/quiz/relationship-patterns',
        accent: 'from-violet-500/20 to-purple-500/10',
      },
      {
        id: 'red-flags',
        title: 'Red flags',
        description: 'The warning signs you overlook in others — and the ones you may unknowingly display.',
        tag: 'Patterns',
        tagColor: 'text-violet-400',
        href: '/quiz/red-flags',
        accent: 'from-purple-500/20 to-violet-400/10',
      },
      {
        id: 'attraction-blueprint',
        title: 'Attraction blueprint',
        description: 'The personality types and energies you\'re consistently pulled toward in partners.',
        tag: 'Patterns',
        tagColor: 'text-violet-400',
        href: '/quiz/attraction-blueprint',
        accent: 'from-indigo-500/20 to-violet-500/10',
      },
    ],
  },
  {
    label: 'YOUR RELATIONSHIP PERSONA',
    cards: [
      {
        id: 'who-are-you-in-love',
        title: 'Who are you in love?',
        description: 'Discover your relationship archetype — from The Steady Anchor to The Storm Chaser. A portrait of how you love, fear, and connect.',
        tag: 'Persona',
        tagColor: 'text-amber-400',
        href: '/quiz-screen',
        isNew: true,
        accent: 'from-amber-500/20 to-orange-500/10',
      },
      {
        id: 'who-do-you-fall-for',
        title: 'Who do you fall for?',
        description: 'The emotional archetypes and relationship personas you tend to attract and be drawn to.',
        tag: 'Persona',
        tagColor: 'text-amber-400',
        href: '/quiz/who-do-you-fall-for',
        accent: 'from-orange-500/20 to-amber-400/10',
      },
    ],
  },
  {
    label: 'BETWEEN YOU TWO',
    cards: [
      {
        id: 'compatibility-check',
        title: 'Compatibility check',
        description: 'Both partners answer, see how your styles, needs, and attachment patterns align.',
        tag: 'Couple',
        tagColor: 'text-sky-400',
        href: '/partner-compatibility-screen',
        isBoth: true,
        accent: 'from-sky-500/20 to-blue-500/10',
      },
    ],
  },
];

const tagBg: Record<string, string> = {
  'Self-awareness': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'Patterns': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Persona': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Couple': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <AppLogo />
          <Link
            href="/sign-up-login-screen"
            className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-2xl mx-auto px-4 pt-10 pb-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--muted-foreground)] uppercase mb-3">
          Relationship Intelligence
        </p>
        <h1 className="text-3xl font-bold text-[var(--foreground)] leading-tight mb-3">
          Understand yourself.<br />
          <span className="text-gradient-rose">Understand love.</span>
        </h1>
        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
          Short, honest quizzes that reveal how you attach, communicate, and connect — so you can love with more clarity.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-2xl mx-auto px-4 pb-16 space-y-10">
        {sections.map((section) => (
          <div key={section.label}>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-[0.18em] text-[var(--muted-foreground)] uppercase">
                {section.label}
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>

            {/* Cards grid — bento-style: 2 cols on wider, 1 col on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.cards.map((card, idx) => {
                // Make first card of persona section span full width
                const isWide =
                  (section.label === 'YOUR RELATIONSHIP PERSONA' && idx === 0) ||
                  section.label === 'BETWEEN YOU TWO';

                return (
                  <Link
                    key={card.id}
                    href={card.href}
                    className={`group relative flex flex-col justify-between rounded-2xl p-5 border border-[var(--border)] bg-[var(--card)] overflow-hidden transition-all duration-300 hover:border-[var(--primary)]/40 hover:shadow-lg hover:shadow-[var(--primary)]/5 hover:-translate-y-0.5 active:scale-[0.98] ${isWide ? 'sm:col-span-2' : ''}`}
                  >
                    {/* Gradient accent */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="text-base font-semibold text-[var(--foreground)] leading-snug group-hover:text-white transition-colors">
                          {card.title}
                        </h3>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {card.isNew && (
                            <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
                              NEW
                            </span>
                          )}
                          {card.isBoth && (
                            <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/25">
                              BOTH
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                        {card.description}
                      </p>
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
