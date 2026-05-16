'use client';

import React from 'react';

interface StateVariations {
  fallingInLove: {
    title: string;
    emoji: string;
    behaviors: string[];
  };
  whenHurt: {
    title: string;
    emoji: string;
    behaviors: string[];
  };
}

interface StatesTabProps {
  stateVariations: StateVariations;
}

export default function StatesTab({ stateVariations }: StatesTabProps) {
  const states = [
    {
      key: 'falling',
      data: stateVariations.fallingInLove,
      accent: 'border-rose-500/30 bg-rose-500/5',
      badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      dot: 'bg-rose-400',
    },
    {
      key: 'hurt',
      data: stateVariations.whenHurt,
      accent: 'border-blue-500/30 bg-blue-500/5',
      badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      dot: 'bg-blue-400',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground leading-relaxed">
        Your persona shifts depending on where you are emotionally. Here&apos;s how you show up in two contrasting states.
      </p>

      {states.map(({ key, data, accent, badge, dot }) => (
        <div key={`state-${key}`} className={`rounded-2xl border p-5 ${accent}`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{data.emoji}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${badge}`}>
              {data.title}
            </span>
          </div>
          <div className="flex flex-col gap-2.5">
            {data.behaviors.map((behavior, i) => (
              <div key={`behavior-${key}-${i}`} className="flex items-start gap-3">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${dot}`} />
                <p className="text-sm text-secondary-foreground leading-relaxed">{behavior}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-xl bg-muted/30 border border-border p-4 text-center">
        <p className="text-xs text-muted-foreground leading-relaxed">
          These patterns were inferred from your scenario responses. They reflect tendencies, not fixed behaviors.
        </p>
      </div>
    </div>
  );
}