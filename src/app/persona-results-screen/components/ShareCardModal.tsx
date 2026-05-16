'use client';

import React, { useState } from 'react';
import { X, Download, Link2, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import type { MOCK_PERSONA } from './PersonaResultsClient';

interface ShareCardModalProps {
  persona: typeof MOCK_PERSONA;
  onClose: () => void;
}

export default function ShareCardModal({ persona, onClose }: ShareCardModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    // BACKEND INTEGRATION: Generate short shareable link via /api/share/create
    await navigator.clipboard.writeText('https://lovepersona.app/p/steady-anchor-priya');
    setCopied(true);
    toast.success('Link copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-background/80 backdrop-blur-sm fade-in">
      <div className="w-full max-w-sm mx-4 mb-4 sm:mb-0 rounded-3xl bg-card border border-border shadow-2xl slide-in-up">
        {/* Handle */}
        <div className="flex justify-center pt-4">
          <div className="w-8 h-1 rounded-full bg-muted" />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-foreground">Share Your Persona</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              aria-label="Close share modal"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Preview Card */}
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 p-5 mb-5 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mx-auto mb-3 flex items-center justify-center text-3xl shadow-lg">
              {persona.emoji}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">My Love Persona</p>
            <p className="text-xl font-bold text-foreground">{persona.name}</p>
            <p className="text-xs text-muted-foreground mt-1">{persona.attachmentStyle} Attachment • {persona.confidenceScore}% match</p>
            <p className="text-xs text-primary/70 mt-3 italic">&ldquo;{persona.tagline}&rdquo;</p>
            <p className="text-[10px] text-muted-foreground mt-3">lovepersona.app</p>
          </div>

          {/* Share options */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              onClick={() => toast.info('Instagram share — connect native share API')}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-sm font-semibold text-foreground hover:border-purple-500/40 transition-all active:scale-95"
            >
              <span className="text-pink-400 text-base">📷</span>
              Instagram
            </button>
            <button
              onClick={() => toast.info('WhatsApp share — connect native share API')}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-sm font-semibold text-foreground hover:border-green-500/40 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              WhatsApp
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleCopyLink}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary border border-border text-sm font-semibold text-foreground hover:border-primary/40 transition-all active:scale-95"
            >
              <Link2 className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <button
              onClick={() => toast.info('Download card — connect canvas export')}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              Save Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}