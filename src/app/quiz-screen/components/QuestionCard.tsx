'use client';

import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import type { Question } from './QuizClient';

interface QuestionCardProps {
  question: Question;
  selectedOption: string | null;
  onSelectOption: (id: string) => void;
  onContinue: () => void;
  isLastQuestion: boolean;
  answeredCount: number;
}

export default function QuestionCard({
  question,
  selectedOption,
  onSelectOption,
  onContinue,
  isLastQuestion,
}: QuestionCardProps) {
  return (
    <div className="flex flex-col gap-5 flex-1 slide-in-up">
      {/* Signal Tag */}
      <div className="flex items-center gap-2 mt-2">
        <Zap className="w-3.5 h-3.5 text-muted-foreground" />
        <span className={`text-xs font-semibold uppercase tracking-wider ${question.signalColor}`}>
          {question.signal}
        </span>
      </div>

      {/* Scenario Card */}
      <div className="rounded-2xl bg-gradient-card card-border-glow p-5">
        <p className="text-base font-semibold text-foreground leading-relaxed">
          {question.scenario}
        </p>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed italic">
          {question.context}
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3 flex-1">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onSelectOption(option.id)}
              className={`w-full text-left rounded-2xl p-4 border transition-all duration-200 active:scale-[0.98] ${
                isSelected
                  ? 'bg-primary/10 border-primary/60 shadow-[0_0_20px_rgba(232,84,122,0.15)]'
                  : 'bg-secondary border-border hover:border-muted-foreground/40 hover:bg-muted/40'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold leading-snug ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                    {option.text}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {option.subtext}
                  </p>
                </div>
                <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  isSelected ? 'border-primary bg-primary' : 'border-border'
                }`}>
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Continue Button */}
      <button
        onClick={onContinue}
        disabled={!selectedOption}
        className={`w-full py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
          selectedOption
            ? 'bg-primary hover:bg-primary/90 text-white pulse-glow' :'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
      >
        {isLastQuestion ? (
          <>
            Analyse My Persona
            <span className="text-base">✨</span>
          </>
        ) : (
          <>
            Next Question
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Skip hint */}
      {!selectedOption && (
        <p className="text-center text-xs text-muted-foreground -mt-2">
          Pick the answer that feels most true to you
        </p>
      )}
    </div>
  );
}