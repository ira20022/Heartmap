'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';


const quizMeta: Record<string, { title: string; description: string; tag: string; color: string; questions: { q: string; options: string[] }[] }> = {
  'attachment-style': {
    title: 'Attachment Style',
    description: 'Secure, anxious, avoidant, or disorganized — how you bond and feel safe in love.',
    tag: 'Self-awareness',
    color: 'text-rose-400',
    questions: [
      {
        q: 'When someone you like doesn\'t reply for a day, you usually…',
        options: ['Give them space — they\'re probably busy', 'Send a casual follow-up', 'Replay every conversation for clues', 'Pull back and protect yourself'],
      },
      {
        q: 'In a relationship, you feel most secure when…',
        options: ['You have consistent communication', 'You have your own space and independence', 'You feel emotionally validated often', 'Things are calm and predictable'],
      },
      {
        q: 'When conflict arises, your first instinct is to…',
        options: ['Talk it through immediately', 'Need time alone before discussing', 'Worry the relationship is at risk', 'Shut down and go quiet'],
      },
      {
        q: 'How comfortable are you depending on a partner?',
        options: ['Very comfortable — it feels natural', 'Somewhat — I prefer being self-sufficient', 'I want to but it feels scary', 'I avoid it — I don\'t want to need anyone'],
      },
    ],
  },
  'love-language': {
    title: 'Love Language',
    description: 'Words, touch, quality time, acts of service, or gifts — how you give and receive love.',
    tag: 'Self-awareness',
    color: 'text-rose-400',
    questions: [
      {
        q: 'You feel most loved when your partner…',
        options: ['Tells you how much you mean to them', 'Holds your hand or hugs you', 'Puts their phone away and focuses on you', 'Does something helpful without being asked'],
      },
      {
        q: 'When you want to show someone you care, you typically…',
        options: ['Write them a heartfelt message', 'Give them a long hug', 'Plan a special day together', 'Take care of something they\'ve been stressed about'],
      },
      {
        q: 'Which feels most meaningful to receive?',
        options: ['A sincere compliment', 'A spontaneous kiss', 'An uninterrupted evening together', 'Breakfast made for you'],
      },
      {
        q: 'What bothers you most in a relationship?',
        options: ['Not hearing "I love you" enough', 'Lack of physical affection', 'Not spending enough quality time', 'Partner not helping out'],
      },
    ],
  },
  'emotional-needs': {
    title: 'Emotional Needs',
    description: 'Security, validation, independence, or intimacy — what you need to feel truly loved.',
    tag: 'Self-awareness',
    color: 'text-rose-400',
    questions: [
      {
        q: 'What do you need most from a partner on a hard day?',
        options: ['Reassurance that everything is okay', 'Space to process alone', 'Someone to just listen', 'Practical help solving the problem'],
      },
      {
        q: 'You feel emotionally fulfilled when…',
        options: ['Your partner checks in on you regularly', 'You have freedom to be yourself', 'You share deep, vulnerable conversations', 'You feel like a team'],
      },
      {
        q: 'What makes you feel most unseen in a relationship?',
        options: ['When your feelings are dismissed', 'When you\'re not given space', 'When conversations stay surface-level', 'When your efforts go unnoticed'],
      },
      {
        q: 'In an ideal relationship, emotional safety looks like…',
        options: ['Knowing they\'ll always be there', 'Trusting you won\'t lose yourself', 'Being able to say anything without judgment', 'Facing challenges as a united front'],
      },
    ],
  },
  'communication-style': {
    title: 'Communication Style',
    description: 'How you express needs, handle conflict, and show up when things get hard.',
    tag: 'Self-awareness',
    color: 'text-rose-400',
    questions: [
      {
        q: 'When you\'re upset with a partner, you tend to…',
        options: ['Bring it up directly and calmly', 'Wait until you\'ve cooled down', 'Drop hints and hope they notice', 'Go quiet and withdraw'],
      },
      {
        q: 'During an argument, you\'re most likely to…',
        options: ['Stay focused on finding a solution', 'Need a break to collect your thoughts', 'Escalate emotionally before calming down', 'Agree just to end the conflict'],
      },
      {
        q: 'How do you typically express a need to your partner?',
        options: ['State it clearly and directly', 'Hint at it and hope they pick up on it', 'Wait until it becomes urgent', 'Struggle to express it at all'],
      },
      {
        q: 'After a disagreement, you usually…',
        options: ['Want to resolve it immediately', 'Need time before reconnecting', 'Feel anxious until things are okay again', 'Move on quickly without fully resolving it'],
      },
    ],
  },
  'relationship-patterns': {
    title: 'Relationship Patterns',
    description: 'Chasing, withdrawing, people-pleasing — behaviours you repeat without realizing it.',
    tag: 'Patterns',
    color: 'text-violet-400',
    questions: [
      {
        q: 'In past relationships, you\'ve most often found yourself…',
        options: ['Chasing someone who pulls away', 'Pulling away when someone gets close', 'Saying yes when you mean no', 'Trying to fix or save your partner'],
      },
      {
        q: 'When a relationship starts to feel too comfortable, you…',
        options: ['Lean in and enjoy the stability', 'Start to feel restless or bored', 'Worry it means they\'ll leave', 'Create distance to feel safe'],
      },
      {
        q: 'You tend to be most attracted to people who are…',
        options: ['Emotionally available and consistent', 'A little unpredictable or hard to read', 'In need of support or guidance', 'Confident and slightly unavailable'],
      },
      {
        q: 'Looking back, a pattern you\'ve noticed in yourself is…',
        options: ['Giving too much too soon', 'Keeping people at arm\'s length', 'Losing yourself in relationships', 'Ending things before they get too real'],
      },
    ],
  },
  'red-flags': {
    title: 'Red Flags',
    description: 'The warning signs you overlook in others — and the ones you may unknowingly display.',
    tag: 'Patterns',
    color: 'text-violet-400',
    questions: [
      {
        q: 'When someone shows inconsistency early on, you usually…',
        options: ['Take it as a sign and step back', 'Make excuses for their behaviour', 'Bring it up and see how they respond', 'Ignore it and hope it improves'],
      },
      {
        q: 'Which of these do you most often overlook in a partner?',
        options: ['Emotional unavailability', 'Dismissing your feelings', 'Inconsistent effort', 'Controlling tendencies'],
      },
      {
        q: 'When you\'re really into someone, you tend to…',
        options: ['Stay grounded and observe their patterns', 'Idealize them and overlook flaws', 'Move slowly to protect yourself', 'Dive in fully and figure it out later'],
      },
      {
        q: 'A red flag you might unknowingly show is…',
        options: ['Pulling away when things get serious', 'Needing constant reassurance', 'Being overly self-sufficient', 'Avoiding difficult conversations'],
      },
    ],
  },
  'attraction-blueprint': {
    title: 'Attraction Blueprint',
    description: 'The personality types and energies you\'re consistently pulled toward in partners.',
    tag: 'Patterns',
    color: 'text-violet-400',
    questions: [
      {
        q: 'You\'re most drawn to someone who is…',
        options: ['Calm, steady, and emotionally grounded', 'Intense, passionate, and unpredictable', 'Witty, playful, and light-hearted', 'Deep, introspective, and complex'],
      },
      {
        q: 'The quality that hooks you fastest in a person is…',
        options: ['Their emotional intelligence', 'Their mystery and edge', 'Their warmth and ease', 'Their ambition and drive'],
      },
      {
        q: 'You tend to feel most alive in relationships that are…',
        options: ['Stable and deeply trusting', 'Passionate and a little chaotic', 'Fun and pressure-free', 'Intellectually and emotionally rich'],
      },
      {
        q: 'Looking at your past partners, they often shared…',
        options: ['A quiet strength and reliability', 'An emotional intensity', 'A free-spirited energy', 'A need for someone to understand them'],
      },
    ],
  },
  'who-do-you-fall-for': {
    title: 'Who Do You Fall For?',
    description: 'The emotional archetypes and relationship personas you tend to attract and be drawn to.',
    tag: 'Persona',
    color: 'text-amber-400',
    questions: [
      {
        q: 'The person you fall for hardest is usually…',
        options: ['The one who needs saving', 'The one who\'s hard to get', 'The one who feels like home', 'The one who challenges you'],
      },
      {
        q: 'You find yourself most emotionally invested when someone…',
        options: ['Is vulnerable and opens up to you', 'Keeps you slightly uncertain', 'Makes you feel completely safe', 'Pushes you to grow'],
      },
      {
        q: 'The archetype you\'re most drawn to is…',
        options: ['The Wounded Soul', 'The Unavailable One', 'The Steady Anchor', 'The Catalyst'],
      },
      {
        q: 'In hindsight, the people you\'ve fallen for have often…',
        options: ['Needed more than they could give back', 'Kept you guessing about their feelings', 'Felt like a safe harbour', 'Changed how you see yourself'],
      },
    ],
  },
};

type AnswerMap = Record<number, number>;

export default function QuizSlugPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const meta = quizMeta[slug];

  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<AnswerMap>({});
  const [done, setDone] = React.useState(false);

  if (!meta) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center px-4 text-center">
        <p className="text-[var(--muted-foreground)] mb-6">Quiz not found.</p>
        <Link href="/home" className="text-[var(--primary)] text-sm underline">Back to home</Link>
      </div>
    );
  }

  const total = meta.questions.length;
  const progress = ((current) / total) * 100;

  function handleSelect(optIdx: number) {
    const updated = { ...answers, [current]: optIdx };
    setAnswers(updated);
    if (current < total - 1) {
      setTimeout(() => setCurrent((c) => c + 1), 280);
    } else {
      setTimeout(() => setDone(true), 280);
    }
  }

  if (done) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--primary)]/15 flex items-center justify-center mb-6">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 14l6 6 10-10" stroke="#E8547A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Quiz complete!</h2>
        <p className="text-[var(--muted-foreground)] text-sm mb-8 max-w-xs">
          Your {meta.title} results are being analysed. Full insights coming soon.
        </p>
        <Link
          href="/home"
          className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Explore more quizzes
        </Link>
      </div>
    );
  }

  const q = meta.questions[current];

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => current > 0 ? setCurrent((c) => c - 1) : router.push('/home')}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--muted)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex-1">
            <p className="text-xs text-[var(--muted-foreground)] mb-1">{meta.title}</p>
            <div className="h-1.5 bg-[var(--muted)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--primary)] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <span className="text-xs text-[var(--muted-foreground)] tabular-nums">{current + 1}/{total}</span>
        </div>
      </header>

      {/* Question */}
      <div className="flex-1 max-w-xl mx-auto w-full px-4 py-10 flex flex-col">
        <div className="mb-2">
          <span className={`text-xs font-semibold uppercase tracking-wider ${meta.color}`}>{meta.tag}</span>
        </div>
        <h2 className="text-xl font-bold text-[var(--foreground)] leading-snug mb-8">{q.q}</h2>

        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 text-sm font-medium
                ${answers[current] === idx
                  ? 'border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--foreground)]'
                  : 'border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5'
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
