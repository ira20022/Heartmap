'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const TraitsChart = dynamic(() => import('./TraitsChart'), { ssr: false });

interface Trait {
  id: string;
  name: string;
  score: number;
  color: string;
}

interface TraitsTabProps {
  traits: Trait[];
}

export default function TraitsTab({ traits }: TraitsTabProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Chart */}
      <div className="rounded-2xl bg-gradient-card card-border-glow p-5">
        <p className="text-sm font-semibold text-foreground mb-4">Trait Confidence Scores</p>
        <TraitsChart traits={traits} />
      </div>

      {/* Trait bars */}
      <div className="flex flex-col gap-3">
        {traits.map((trait) => (
          <div key={trait.id} className="rounded-xl bg-secondary/60 border border-border p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{trait.name}</span>
              <span className="text-sm font-bold font-tabular" style={{ color: trait.color }}>
                {trait.score}%
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${trait.score}%`, backgroundColor: trait.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}