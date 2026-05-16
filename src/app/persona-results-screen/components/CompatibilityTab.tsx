'use client';

import React from 'react';
import { Lock, Sparkles } from 'lucide-react';

interface CompatibilityTabProps {
  teaser: {
    bestMatch: string;
    worstMatch: string;
    preview: string;
  };
  onUnlock: () => void;
}

export default function CompatibilityTab({ teaser, onUnlock }: CompatibilityTabProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Teaser cards — blurred */}
      <div className="relative">
        <div className="flex flex-col gap-3 blur-premium select-none pointer-events-none">
          {[
            { label: 'Best Match', name: teaser.bestMatch, score: 91, color: 'text-teal-300' },
            { label: 'Challenging Match', name: teaser.worstMatch, score: 43, color: 'text-amber-300' },
            { label: 'Relationship Dynamic', name: 'Your combined profile', score: null, color: 'text-foreground' },
          ].map((item) => (
            <div key={`compat-${item.label}`} className="rounded-xl bg-secondary border border-border p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className={`text-base font-semibold mt-0.5 ${item.color}`}>{item.name}</p>
              </div>
              {item.score !== null && (
                <span className="text-2xl font-bold font-tabular text-foreground">{item.score}%</span>
              )}
            </div>
          ))}
        </div>

        {/* Lock overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 backdrop-blur-xs rounded-2xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 shadow-[0_0_24px_rgba(232,84,122,0.3)]">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <p className="text-base font-bold text-foreground mb-1">Unlock Compatibility</p>
          <p className="text-xs text-muted-foreground text-center max-w-[200px] mb-4 leading-relaxed">
            See who you match with, who challenges you, and how to navigate it
          </p>
          <button
            onClick={onUnlock}
            className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all active:scale-95 flex items-center gap-2 pulse-glow"
          >
            <Sparkles className="w-4 h-4" />
            Unlock for ₹29
          </button>
        </div>
      </div>

      <p className="text-[11px] text-muted-foreground text-center">
        One-time purchase • Includes unlimited compatibility checks for 30 days
      </p>
    </div>
  );
}