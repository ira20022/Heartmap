'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Share2, Lock, ArrowLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import AppLogo from '@/components/ui/AppLogo';
import { Toaster } from 'sonner';
import PersonaHeroCard from './PersonaHeroCard';
import TraitsTab from './TraitsTab';
import StatesTab from './StatesTab';
import CompatibilityTab from './CompatibilityTab';
import ShareCardModal from './ShareCardModal';
import PremiumModal from './PremiumModal';

export type ResultTab = 'traits' | 'states' | 'compatibility';

// BACKEND INTEGRATION: This mock data would come from /api/quiz/result?sessionId=xxx
// LLM returns structured JSON matching PersonaProfile schema
export const MOCK_PERSONA = {
  id: 'persona-steady-anchor',
  name: 'The Steady Anchor',
  emoji: '⚓',
  tagline: 'You love deeply, steadily, and without drama.',
  archetype: 'Secure-Leaning',
  attachmentStyle: 'Secure',
  attachmentBadgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  confidenceScore: 84,
  description: `You don't fall fast — you fall sure. When you care about someone, it shows in how consistently you show up, not in grand gestures or urgent declarations. You have a quiet confidence in love that comes from knowing your own worth without needing constant proof of theirs.In relationships, you're the person who makes others feel safe. You don't weaponise silence, you don't disappear when things get hard, and you don't need drama to feel the relationship is real. That stability is rare — and deeply attractive.Your challenge isn't love itself. It's vulnerability. Sometimes your steadiness becomes a wall — a way of being "fine" when you're actually not. The people who love you most want to see your unsteady moments too.`,
  signals: [
    { id: 'sig-space', label: 'Gives space without withdrawing', positive: true },
    { id: 'sig-direct', label: 'Addresses conflict directly', positive: true },
    { id: 'sig-vulnerable', label: 'Selective with vulnerability', positive: null },
    { id: 'sig-reassurance', label: 'Rarely seeks reassurance', positive: true },
    { id: 'sig-wall', label: 'Can emotionally wall off', positive: false },
    { id: 'sig-consistent', label: 'Highly consistent partner', positive: true },
  ],
  traits: [
    { id: 'trait-emotional', name: 'Emotional Stability', score: 88, color: 'var(--primary)' },
    { id: 'trait-communication', name: 'Open Communication', score: 74, color: 'var(--accent)' },
    { id: 'trait-independence', name: 'Healthy Independence', score: 91, color: '#34D399' },
    { id: 'trait-empathy', name: 'Empathy & Presence', score: 79, color: '#60A5FA' },
    { id: 'trait-vulnerability', name: 'Vulnerability', score: 52, color: '#FBBF24' },
    { id: 'trait-trust', name: 'Trust Ease', score: 83, color: '#F472B6' },
  ],
  stateVariations: {
    fallingInLove: {
      title: 'When you\'re falling',
      emoji: '🌹',
      behaviors: [
        'Shows up consistently — texts back, remembers things, follows through',
        'Doesn\'t rush the emotional timeline but is clearly present',
        'Quietly protective — wants to make them feel safe before anything else',
        'Playful and warm, but doesn\'t lose themselves in the process',
      ],
    },
    whenHurt: {
      title: 'When you\'re hurt',
      emoji: '🌧️',
      behaviors: [
        'Goes quiet instead of expressing pain directly',
        'Continues functioning normally — making it hard to notice',
        'Replays the situation privately, processes alone',
        'Eventually brings it up — calmly, but later than they should',
      ],
    },
  },
  secondaryPersona: {
    id: 'secondary-guardian',
    name: 'The Quiet Guardian',
    match: 68,
    note: 'When under stress, you lean into protector mode — prioritising others\' needs over your own.',
  },
  compatibilityTeaser: {
    bestMatch: 'The Passionate Heart',
    worstMatch: 'The Overthinker',
    preview: 'Your steadiness balances their intensity perfectly...',
  },
};

export default function PersonaResultsClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ResultTab>('traits');
  const [showShareModal, setShowShareModal] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const handleShare = () => {
    setShowShareModal(true);
  };

  const handleCompatibility = () => {
    router.push('/partner-compatibility-screen');
  };

  const tabs: { id: ResultTab; label: string; locked: boolean }[] = [
    { id: 'traits', label: 'Traits', locked: false },
    { id: 'states', label: 'Your States', locked: false },
    { id: 'compatibility', label: 'Compatibility', locked: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Toaster position="top-center" theme="dark" richColors />

      {/* Header */}
      <header className="px-5 py-4 flex items-center justify-between sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border/50">
        <button
          onClick={() => router.push('/quiz-screen')}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Retake quiz"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Retake</span>
        </button>

        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-bold text-sm text-foreground">LovePersona</span>
        </div>

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/20 transition-all active:scale-95"
        >
          <Share2 className="w-3.5 h-3.5" />
          Share
        </button>
      </header>

      <div className="max-w-lg mx-auto px-4 pb-24">
        {/* Hero Persona Card */}
        <div className="pt-6 pb-5">
          <PersonaHeroCard persona={MOCK_PERSONA} />
        </div>

        {/* Behavioral Signals */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Behavioral Signals Detected
          </p>
          <div className="flex flex-wrap gap-2">
            {MOCK_PERSONA.signals.map((signal) => (
              <span
                key={signal.id}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                  signal.positive === true
                    ? 'bg-teal-500/10 text-teal-300 border-teal-500/20'
                    : signal.positive === false
                    ? 'bg-rose-500/10 text-rose-300 border-rose-500/20' :'bg-muted text-muted-foreground border-border'
                }`}
              >
                {signal.positive === true ? '✓ ' : signal.positive === false ? '⚠ ' : '◦ '}
                {signal.label}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative Description */}
        <div className="rounded-2xl bg-gradient-card card-border-glow p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">AI Analysis</span>
          </div>
          {MOCK_PERSONA.description.split('\n\n').map((para, i) => (
            <p key={`para-${i}`} className="text-sm text-secondary-foreground leading-relaxed mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </div>

        {/* Secondary Persona */}
        <div className="rounded-2xl bg-secondary/60 border border-border p-4 mb-6 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <Heart className="w-4 h-4 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Secondary Persona</p>
            <p className="text-sm font-semibold text-foreground">{MOCK_PERSONA.secondaryPersona.name}</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{MOCK_PERSONA.secondaryPersona.note}</p>
          </div>
          <span className="shrink-0 text-xs font-bold text-accent font-tabular">{MOCK_PERSONA.secondaryPersona.match}%</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-muted/40 rounded-2xl p-1 mb-5">
          {tabs.map((tab) => (
            <button
              key={`tab-${tab.id}`}
              onClick={() => {
                if (tab.locked) {
                  setShowPremiumModal(true);
                } else {
                  setActiveTab(tab.id);
                }
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id && !tab.locked
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.locked && <Lock className="w-3 h-3" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="fade-in">
          {activeTab === 'traits' && <TraitsTab traits={MOCK_PERSONA.traits} />}
          {activeTab === 'states' && <StatesTab stateVariations={MOCK_PERSONA.stateVariations} />}
          {activeTab === 'compatibility' && <CompatibilityTab teaser={MOCK_PERSONA.compatibilityTeaser} onUnlock={() => setShowPremiumModal(true)} />}
        </div>

        {/* Premium CTA */}
        <div className="mt-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Unlock Deep Insights</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            See your full compatibility report, contradictions in your love style, and what you need most from a partner.
          </p>
          <div className="flex gap-3 justify-center mb-3">
            <button
              onClick={() => setShowPremiumModal(true)}
              className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all active:scale-95 pulse-glow"
            >
              Unlock for ₹29
            </button>
            <button
              onClick={() => setShowPremiumModal(true)}
              className="px-5 py-2.5 rounded-xl bg-secondary border border-border text-sm font-semibold text-foreground hover:border-primary/40 transition-all active:scale-95 flex items-center gap-1.5"
            >
              View Plans
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-muted-foreground">One-time unlock • No subscription needed</p>
        </div>

        {/* Partner Compatibility CTA */}
        <div className="mt-4 rounded-3xl bg-gradient-to-br from-accent/10 to-blue-500/10 border border-accent/20 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <span className="text-lg">💞</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">Partner Compatibility</h3>
              <p className="text-xs text-muted-foreground">AI-powered relationship analysis</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Match your persona with a partner's and get a full LLM-analyzed report on your relationship dynamics, strengths, and challenges.
          </p>
          <button
            onClick={handleCompatibility}
            className="w-full py-3 rounded-xl bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent text-sm font-semibold transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4" />
            Check Compatibility
          </button>
        </div>
      </div>

      {showShareModal && (
        <ShareCardModal persona={MOCK_PERSONA} onClose={() => setShowShareModal(false)} />
      )}

      {showPremiumModal && (
        <PremiumModal onClose={() => setShowPremiumModal(false)} />
      )}
    </div>
  );
}