'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles, RefreshCw } from 'lucide-react';
import AppLogo from '@/components/ui/AppLogo';
import { Toaster, toast } from 'sonner';
import PersonaSelector, { type PersonaOption } from './PersonaSelector';
import CompatibilityReport, { type CompatibilityResult } from './CompatibilityReport';

type ScreenState = 'select' | 'analyzing' | 'result';

export default function PartnerCompatibilityClient() {
  const router = useRouter();
  const [screenState, setScreenState] = useState<ScreenState>('select');
  const [userPersona, setUserPersona] = useState<PersonaOption | null>(null);
  const [partnerPersona, setPartnerPersona] = useState<PersonaOption | null>(null);
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [analyzeStep, setAnalyzeStep] = useState(0);

  const analyzeSteps = [
    'Reading persona signals...',
    'Mapping attachment dynamics...',
    'Scoring compatibility dimensions...',
    'Generating relationship narrative...',
  ];

  useEffect(() => {
    if (screenState !== 'analyzing') return;
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < analyzeSteps.length) {
        setAnalyzeStep(step);
      } else {
        clearInterval(interval);
      }
    }, 900);
    return () => clearInterval(interval);
  }, [screenState]);

  const handleAnalyze = async () => {
    if (!userPersona || !partnerPersona) {
      toast.error('Please select both personas to continue');
      return;
    }

    setScreenState('analyzing');
    setAnalyzeStep(0);

    try {
      const response = await fetch('/api/ai/compatibility-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userPersona, partnerPersona }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error ?? 'Compatibility analysis failed');
      }

      setResult(data.compatibility);
      setScreenState('result');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      toast.error(message);
      setScreenState('select');
    }
  };

  const handleReset = () => {
    setResult(null);
    setScreenState('select');
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Toaster position="top-center" theme="dark" richColors />

      {/* Header */}
      <header className="px-5 py-4 flex items-center justify-between sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border/50">
        <button
          onClick={() => router.push('/persona-results-screen')}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>

        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-bold text-sm text-foreground">LovePersona</span>
        </div>

        {screenState === 'result' && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="text-sm">New</span>
          </button>
        )}
        {screenState !== 'result' && <div className="w-16" />}
      </header>

      <div className="max-w-lg mx-auto w-full px-4 pb-24">

        {/* Analyzing State */}
        {screenState === 'analyzing' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 fade-in">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 animate-ping" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-foreground mb-2">Analysing Compatibility</h2>
              <p className="text-sm text-muted-foreground">{analyzeSteps[analyzeStep]}</p>
            </div>
            <div className="flex gap-1.5">
              {analyzeSteps.map((_, i) => (
                <div
                  key={`step-${i}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i <= analyzeStep ? 'w-6 bg-primary' : 'w-1.5 bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Select State */}
        {screenState === 'select' && (
          <div className="pt-6 fade-in">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-base">💞</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Partner Compatibility</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground leading-tight mb-2">
                How do your personas match?
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Select two Love Personas and our AI will analyse the relationship dynamics, strengths, and challenges between them.
              </p>
            </div>

            {/* Selectors */}
            <div className="flex flex-col gap-4 mb-8">
              <PersonaSelector
                label="Your Persona"
                selected={userPersona}
                onSelect={setUserPersona}
                excludeId={partnerPersona?.id}
              />
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center">
                  <span className="text-sm">vs</span>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>
              <PersonaSelector
                label="Partner's Persona"
                selected={partnerPersona}
                onSelect={setPartnerPersona}
                excludeId={userPersona?.id}
              />
            </div>

            {/* What you'll get */}
            {!userPersona && !partnerPersona && (
              <div className="rounded-2xl bg-secondary border border-border p-5 mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">What you'll discover</p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { emoji: '📊', text: 'Overall compatibility score with dimension breakdown' },
                    { emoji: '💪', text: 'Relationship strengths unique to this pairing' },
                    { emoji: '⚡', text: 'Growth challenges to navigate together' },
                    { emoji: '🧭', text: 'Personalised guidance for each persona' },
                  ].map(({ emoji, text }) => (
                    <div key={text} className="flex items-start gap-3">
                      <span className="text-base shrink-0">{emoji}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analyze Button */}
            <button
              onClick={handleAnalyze}
              disabled={!userPersona || !partnerPersona}
              className={`w-full py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                userPersona && partnerPersona
                  ? 'bg-primary hover:bg-primary/90 text-white pulse-glow' :'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Analyse Compatibility
            </button>

            {userPersona && partnerPersona && (
              <p className="text-center text-xs text-muted-foreground mt-3">
                AI-powered analysis · Takes about 10 seconds
              </p>
            )}
          </div>
        )}

        {/* Result State */}
        {screenState === 'result' && result && userPersona && partnerPersona && (
          <div className="pt-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-1">Your Compatibility Report</h2>
              <p className="text-sm text-muted-foreground">AI-analysed relationship dynamics</p>
            </div>
            <CompatibilityReport
              result={result}
              userPersonaName={userPersona.name}
              partnerPersonaName={partnerPersona.name}
            />
            <button
              onClick={handleReset}
              className="w-full mt-6 py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 bg-secondary border border-border hover:border-primary/40 text-foreground transition-all active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              Try Another Pairing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
