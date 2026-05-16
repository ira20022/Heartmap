'use client';

import React from 'react';
import type { MOCK_PERSONA } from './PersonaResultsClient';
import ConfidenceRing from './ConfidenceRing';

interface PersonaHeroCardProps {
  persona: typeof MOCK_PERSONA;
}

export default function PersonaHeroCard({ persona }: PersonaHeroCardProps) {
  return (
    <div className="rounded-3xl card-border-glow bg-gradient-card p-6 relative overflow-hidden scale-in">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative flex items-start gap-4">
        {/* Emoji + Ring */}
        <div className="shrink-0 relative">
          <ConfidenceRing score={persona.confidenceScore} size={80} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl">{persona.emoji}</span>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 pt-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Your Love Persona
          </p>
          <h2 className="text-xl font-bold text-foreground leading-tight mb-2">
            {persona.name}
          </h2>
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${persona.attachmentBadgeColor}`}>
            {persona.attachmentStyle} Attachment
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm text-secondary-foreground leading-relaxed italic border-t border-border/50 pt-4">
        &ldquo;{persona.tagline}&rdquo;
      </p>

      {/* Confidence score */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Persona Match</p>
          <p className="text-2xl font-bold text-foreground font-tabular">
            {persona.confidenceScore}
            <span className="text-sm font-medium text-muted-foreground">%</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Archetype</p>
          <p className="text-sm font-semibold text-accent">{persona.archetype}</p>
        </div>
      </div>
    </div>
  );
}