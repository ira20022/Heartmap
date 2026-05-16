'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const ANALYSIS_STEPS = [
  { id: 'step-signals', text: 'Reading your behavioral signals...', duration: 800 },
  { id: 'step-patterns', text: 'Mapping emotional patterns...', duration: 700 },
  { id: 'step-attachment', text: 'Identifying attachment tendencies...', duration: 750 },
  { id: 'step-persona', text: 'Matching your Love Persona...', duration: 600 },
  { id: 'step-insights', text: 'Crafting your personal insights...', duration: 350 },
];

export default function AnalyzingScreen() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let elapsed = 0;
    ANALYSIS_STEPS?.forEach((step, i) => {
      setTimeout(() => setActiveStep(i), elapsed);
      elapsed += step?.duration;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-xs mx-auto">
        {/* Animated logo */}
        <div className="float-anim mb-8">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center shadow-[0_0_40px_rgba(232,84,122,0.4)]">
            <AppLogo size={44} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-2">Analysing your answers</h2>
        <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
          Our relationship AI is reading between the lines...
        </p>

        {/* Steps */}
        <div className="flex flex-col gap-3 text-left">
          {ANALYSIS_STEPS?.map((step, i) => (
            <div
              key={step?.id}
              className={`flex items-center gap-3 transition-all duration-400 ${
                i <= activeStep ? 'opacity-100' : 'opacity-20'
              }`}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                i < activeStep
                  ? 'bg-primary'
                  : i === activeStep
                  ? 'bg-primary animate-pulse' :'bg-muted'
              }`}>
                {i < activeStep ? (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : i === activeStep ? (
                  <div className="w-2 h-2 rounded-full bg-white" />
                ) : null}
              </div>
              <span className={`text-sm ${i <= activeStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                {step?.text}
              </span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-8 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700 ease-out"
            style={{ width: `${((activeStep + 1) / ANALYSIS_STEPS?.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}