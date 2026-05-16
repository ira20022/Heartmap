'use client';

import React, { useState } from 'react';
import { X, Sparkles, Heart, Zap, Check } from 'lucide-react';
import { toast } from 'sonner';

interface PremiumModalProps {
  onClose: () => void;
}

const PLANS = [
  {
    id: 'plan-single',
    name: 'Deep Dive',
    price: '₹29',
    period: 'one-time',
    description: 'Full compatibility report + contradictions',
    features: [
      'Unlimited compatibility checks (30 days)',
      'Full trait contradiction analysis',
      'Partner persona comparison',
      'Relationship dynamic narrative',
    ],
    cta: 'Unlock Now — ₹29',
    highlighted: true,
    icon: Zap,
  },
  {
    id: 'plan-monthly',
    name: 'LovePersona+',
    price: '₹99',
    period: '/month',
    description: 'Everything, unlimited, forever',
    features: [
      'All Deep Dive features',
      'Unlimited persona re-takes',
      'Relationship growth tracker',
      'Monthly new scenarios',
    ],
    cta: 'Subscribe — ₹99/mo',
    highlighted: false,
    icon: Heart,
  },
];

export default function PremiumModal({ onClose }: PremiumModalProps) {
  const [selected, setSelected] = useState('plan-single');

  const handlePurchase = () => {
    // BACKEND INTEGRATION: POST /api/payments/create-order with planId
    // Integrate Razorpay or Stripe for INR payments
    toast.success('Redirecting to payment... (demo mode)');
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-background/80 backdrop-blur-sm fade-in">
      <div className="w-full max-w-sm mx-4 mb-4 sm:mb-0 rounded-3xl bg-card border border-border shadow-2xl slide-in-up">
        <div className="flex justify-center pt-4">
          <div className="w-8 h-1 rounded-full bg-muted" />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Unlock More</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              aria-label="Close premium modal"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            Go deeper into your relationship patterns
          </p>

          {/* Plans */}
          <div className="flex flex-col gap-3 mb-5">
            {PLANS.map((plan) => {
              const IconComp = plan.icon;
              const isSelected = selected === plan.id;
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelected(plan.id)}
                  className={`w-full text-left rounded-2xl p-4 border transition-all duration-200 ${
                    isSelected
                      ? plan.highlighted
                        ? 'border-primary/60 bg-primary/10' :'border-accent/60 bg-accent/10' :'border-border bg-secondary/40 hover:border-muted-foreground/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        plan.highlighted ? 'bg-primary/20' : 'bg-accent/20'
                      }`}>
                        <IconComp className={`w-4 h-4 ${plan.highlighted ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{plan.name}</p>
                        <p className="text-xs text-muted-foreground">{plan.description}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className={`text-lg font-bold font-tabular ${plan.highlighted ? 'text-primary' : 'text-accent'}`}>
                        {plan.price}
                      </p>
                      <p className="text-[10px] text-muted-foreground">{plan.period}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-1.5">
                    {plan.features.map((f) => (
                      <div key={`feat-${plan.id}-${f.slice(0,10)}`} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${plan.highlighted ? 'text-primary' : 'text-accent'}`} />
                        <span className="text-xs text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={handlePurchase}
            className="w-full py-3.5 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-sm transition-all active:scale-95 pulse-glow"
          >
            {PLANS.find((p) => p.id === selected)?.cta}
          </button>

          <p className="text-center text-[11px] text-muted-foreground mt-3">
            Secure payment via Razorpay • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
}