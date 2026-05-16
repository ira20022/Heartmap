'use client';

import React from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';

interface CompatibilityStrength {
  id: string;
  title: string;
  description: string;
}

interface CompatibilityChallenge {
  id: string;
  title: string;
  description: string;
}

interface DimensionScore {
  id: string;
  label: string;
  score: number;
}

export interface CompatibilityResult {
  overallScore: number;
  narrative: string;
  strengths: CompatibilityStrength[];
  challenges: CompatibilityChallenge[];
  dimensionScores: DimensionScore[];
  relationshipDynamic: string;
  adviceForA: string;
  adviceForB: string;
}

interface CompatibilityReportProps {
  result: CompatibilityResult;
  userPersonaName: string;
  partnerPersonaName: string;
}

function ScoreBar({ score, color }: { score: number; color: string }) {
  return (
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{ width: `${score}%`, background: color }}
      />
    </div>
  );
}

function getScoreColor(score: number): string {
  if (score >= 75) return 'linear-gradient(90deg, #34D399, #60A5FA)';
  if (score >= 50) return 'linear-gradient(90deg, #E8547A, #A78BFA)';
  return 'linear-gradient(90deg, #F59E0B, #EF4444)';
}

function getScoreLabel(score: number): string {
  if (score >= 80) return 'Exceptional';
  if (score >= 65) return 'Strong';
  if (score >= 50) return 'Moderate';
  if (score >= 35) return 'Challenging';
  return 'Difficult';
}

export default function CompatibilityReport({
  result,
  userPersonaName,
  partnerPersonaName,
}: CompatibilityReportProps) {
  const scoreColor = getScoreColor(result.overallScore);
  const scoreLabel = getScoreLabel(result.overallScore);

  return (
    <div className="flex flex-col gap-6 fade-in">
      {/* Overall Score Hero */}
      <div className="rounded-3xl bg-gradient-card card-border-glow p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Compatibility Score
          </p>
          <div className="relative w-28 h-28 mx-auto mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--muted)" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="url(#scoreGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - result.overallScore / 100)}`}
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E8547A" />
                  <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-foreground font-tabular">{result.overallScore}</span>
              <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide">%</span>
            </div>
          </div>
          <p className="text-lg font-bold text-foreground mb-1">{scoreLabel} Match</p>
          <p className="text-sm text-accent font-semibold italic">"{result.relationshipDynamic}"</p>
        </div>
      </div>

      {/* Persona Pairing */}
      <div className="flex items-center gap-3">
        <div className="flex-1 rounded-2xl bg-secondary border border-border p-3 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">You</p>
          <p className="text-sm font-semibold text-foreground leading-tight">{userPersonaName}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
          <span className="text-sm">💞</span>
        </div>
        <div className="flex-1 rounded-2xl bg-secondary border border-border p-3 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Partner</p>
          <p className="text-sm font-semibold text-foreground leading-tight">{partnerPersonaName}</p>
        </div>
      </div>

      {/* Narrative */}
      <div className="rounded-2xl bg-gradient-card card-border-violet p-5">
        <p className="text-sm text-secondary-foreground leading-relaxed">{result.narrative}</p>
      </div>

      {/* Dimension Scores */}
      <div className="rounded-2xl bg-secondary border border-border p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Compatibility Dimensions
        </p>
        <div className="flex flex-col gap-4">
          {result.dimensionScores.map((dim) => (
            <div key={dim.id}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-foreground font-medium">{dim.label}</span>
                <span className="text-sm font-bold font-tabular text-foreground">{dim.score}%</span>
              </div>
              <ScoreBar score={dim.score} color={getScoreColor(dim.score)} />
            </div>
          ))}
        </div>
      </div>

      {/* Strengths */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-teal-400" />
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">Relationship Strengths</p>
        </div>
        <div className="flex flex-col gap-3">
          {result.strengths.map((s) => (
            <div key={s.id} className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-4">
              <p className="text-sm font-semibold text-teal-300 mb-1">{s.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Growth Challenges</p>
        </div>
        <div className="flex flex-col gap-3">
          {result.challenges.map((c) => (
            <div key={c.id} className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-4">
              <p className="text-sm font-semibold text-amber-300 mb-1">{c.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advice */}
      <div className="rounded-2xl bg-gradient-card card-border-glow p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Personalised Guidance</p>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5">For {userPersonaName}</p>
            <p className="text-sm text-secondary-foreground leading-relaxed">{result.adviceForA}</p>
          </div>
          <div className="h-px bg-border" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5">For {partnerPersonaName}</p>
            <p className="text-sm text-secondary-foreground leading-relaxed">{result.adviceForB}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
