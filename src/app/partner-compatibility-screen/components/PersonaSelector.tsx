'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, Heart, Sparkles } from 'lucide-react';


const PERSONA_OPTIONS = [
  {
    id: 'persona-steady-anchor',
    name: 'The Steady Anchor',
    emoji: '⚓',
    attachmentStyle: 'Secure',
    archetype: 'Secure-Leaning',
    tagline: 'You love deeply, steadily, and without drama.',
    description: 'You bring calmness into relationships instead of chaos. You communicate directly, handle conflict maturely, and rarely play emotional games. People often feel emotionally safe around you because your love feels stable rather than unpredictable. You believe healthy relationships should feel grounding, not exhausting.'
  },
  {
    id: 'persona-passionate-heart',
    name: 'The Passionate Heart',
    emoji: '🔥',
    attachmentStyle: 'Anxious',
    archetype: 'Anxious-Romantic',
    tagline: 'You love with everything — and feel everything twice.',
    description: 'You experience love intensely and emotionally. Small shifts in tone, attention, or affection can deeply affect you because emotional connection matters enormously in your world. You crave reassurance, closeness, and emotional depth, but your fear of losing people can sometimes create emotional overwhelm.'
  },
  {
    id: 'persona-quiet-guardian',
    name: 'The Quiet Guardian',
    emoji: '🛡️',
    attachmentStyle: 'Avoidant',
    archetype: 'Protective-Avoidant',
    tagline: 'You protect by keeping distance — even from those you love.',
    description: 'You value emotional control and independence deeply. Vulnerability does not come naturally to you, and when emotions become too intense, your instinct is often to withdraw internally. You care deeply beneath the surface, but expressing that openly can feel uncomfortable or risky.'
  },
  {
    id: 'persona-free-spirit',
    name: 'The Free Spirit',
    emoji: '🌊',
    attachmentStyle: 'Secure',
    archetype: 'Autonomous-Secure',
    tagline: 'You love freely, without needing to possess or be possessed.',
    description: 'You believe love works best when both people remain fully themselves. You value emotional closeness while still maintaining independence and individuality. You rarely feel threatened by space or autonomy because your trust in relationships runs deep.'
  },
  {
    id: 'persona-deep-thinker',
    name: 'The Deep Thinker',
    emoji: '🌙',
    attachmentStyle: 'Disorganized',
    archetype: 'Analytical-Complex',
    tagline: 'You analyse love more than you let yourself feel it.',
    description: 'Your emotional world is rich, layered, and complicated. You often intellectualize feelings to make sense of them, especially when vulnerability feels overwhelming. You crave deep emotional connection but may simultaneously fear the loss of control that comes with it.'
  },
  {
    id: 'persona-nurturer',
    name: 'The Nurturer',
    emoji: '🌸',
    attachmentStyle: 'Anxious',
    archetype: 'Caregiver-Anxious',
    tagline: 'You give endlessly — and quietly fear it\'s never enough.',
    description: 'You express love through care, support, and emotional attentiveness. You naturally prioritize the people you love, sometimes even at the expense of your own needs. Deep down, you fear being unappreciated or emotionally abandoned despite how much you give.'
  },
  {
    id: 'persona-lone-wolf',
    name: 'The Lone Wolf',
    emoji: '🐺',
    attachmentStyle: 'Avoidant',
    archetype: 'Independent-Avoidant',
    tagline: 'You crave connection but retreat when it gets real.',
    description: 'You value emotional independence and often rely heavily on yourself. While you desire intimacy, deep emotional closeness can trigger discomfort or pressure, causing you to pull away instinctively. You often need space to feel emotionally safe.'
  },
  {
    id: 'persona-overthinker',
    name: 'The Overthinker',
    emoji: '🌀',
    attachmentStyle: 'Anxious',
    archetype: 'Anxious-Analytical',
    tagline: 'Your mind runs ahead of your heart — always preparing for loss.',
    description: 'You notice every detail in relationships — the pauses, tone shifts, unread messages, and emotional changes others might miss. Your mind constantly searches for meaning and certainty, which can make relationships emotionally exhausting even when things are going well.'
  },
  {
    id: 'persona-golden-retriever',
    name: 'The Golden Retriever',
    emoji: '☀️',
    attachmentStyle: 'Secure',
    archetype: 'Warm-Secure',
    tagline: 'You love openly, loyally, and with contagious warmth.',
    description: 'You bring optimism, affection, and emotional openness into relationships. You enjoy making people feel loved and appreciated, and your energy often creates emotional safety around you. You believe relationships should feel joyful, playful, and emotionally honest.'
  },
  {
    id: 'persona-storm-chaser',
    name: 'The Storm Chaser',
    emoji: '⛈️',
    attachmentStyle: 'Disorganized',
    archetype: 'Intensity-Seeking',
    tagline: 'You confuse emotional intensity with emotional certainty.',
    description: 'You are drawn toward emotionally charged relationships because calmness can sometimes feel unfamiliar or emotionally distant. You crave deep connection but may unconsciously recreate emotional highs and lows that mirror inner instability.'
  },
  {
    id: 'persona-soft-romantic',
    name: 'The Soft Romantic',
    emoji: '💌',
    attachmentStyle: 'Secure',
    archetype: 'Hopeless Romantic',
    tagline: 'You believe love should feel tender, intentional, and sincere.',
    description: 'You value emotional intimacy, thoughtful gestures, and meaningful connection. You pay attention to emotional details and often express affection through words, warmth, and consistency. Love feels sacred and deeply emotional to you.'
  },
  {
    id: 'persona-emotional-firefighter',
    name: 'The Emotional Firefighter',
    emoji: '🚨',
    attachmentStyle: 'Anxious',
    archetype: 'Conflict-Reactive',
    tagline: 'You rush to fix emotional distance before it grows.',
    description: 'Conflict and emotional disconnection feel extremely uncomfortable to you. When tension appears, you instinctively try to repair, reconnect, or seek reassurance quickly because uncertainty emotionally overwhelms you.'
  },
  {
    id: 'persona-ice-kingdom',
    name: 'The Ice Kingdom',
    emoji: '❄️',
    attachmentStyle: 'Avoidant',
    archetype: 'Emotionally-Guarded',
    tagline: 'You feel deeply — but reveal very little.',
    description: 'You tend to keep your emotions private and carefully controlled. Vulnerability feels risky because emotional dependence can feel like losing control. People may see you as distant, even when you genuinely care.'
  },
  {
    id: 'persona-devoted-builder',
    name: 'The Devoted Builder',
    emoji: '🏡',
    attachmentStyle: 'Secure',
    archetype: 'Long-Term Partner',
    tagline: 'You value stability, loyalty, and building something real.',
    description: 'You approach love with patience and intention. You are less interested in temporary excitement and more interested in emotional trust, partnership, and long-term consistency. Your relationships tend to feel dependable and emotionally grounded.'
  },
  {
    id: 'persona-mirror-heart',
    name: 'The Mirror Heart',
    emoji: '🪞',
    attachmentStyle: 'Anxious',
    archetype: 'Emotionally-Adaptive',
    tagline: 'You absorb the emotional energy of the people you love.',
    description: 'Your emotional state is highly connected to the emotional tone of your relationships. When people feel warm and connected, you thrive. When they become distant or unpredictable, you feel emotionally destabilized quickly.'
  },
  {
    id: 'persona-shadow-walker',
    name: 'The Shadow Walker',
    emoji: '🌑',
    attachmentStyle: 'Disorganized',
    archetype: 'Fearful-Avoidant',
    tagline: 'You want intimacy deeply — but fear what comes with it.',
    description: 'You often feel torn between craving emotional closeness and fearing vulnerability. Relationships can trigger both intense desire for connection and strong impulses to retreat, creating emotional push-and-pull patterns.'
  },
  {
    id: 'persona-sunflower-soul',
    name: 'The Sunflower Soul',
    emoji: '🌻',
    attachmentStyle: 'Secure',
    archetype: 'Emotionally-Bright',
    tagline: 'Your warmth makes people feel emotionally safe.',
    description: 'You naturally create comfort, positivity, and emotional openness around you. You enjoy supporting the people you love and rarely approach relationships with manipulation or emotional games.'
  },
  {
    id: 'persona-heart-on-sleeve',
    name: 'The Heart-on-Sleeve',
    emoji: '❤️',
    attachmentStyle: 'Anxious',
    archetype: 'Emotionally-Transparent',
    tagline: 'You feel deeply and rarely hide it.',
    description: 'You express emotions openly and intensely. While this honesty creates deep intimacy, it can also leave you emotionally vulnerable to rejection, inconsistency, or emotional withdrawal from others.'
  },
  {
    id: 'persona-detached-drifter',
    name: 'The Detached Drifter',
    emoji: '🌫️',
    attachmentStyle: 'Avoidant',
    archetype: 'Emotionally-Distant',
    tagline: 'You keep moving emotionally before anyone gets too close.',
    description: 'You struggle with emotional dependency and often maintain emotional distance to protect yourself. Relationships may feel safer when they remain slightly undefined or emotionally less demanding.'
  },
  {
    id: 'persona-midnight-poet',
    name: 'The Midnight Poet',
    emoji: '🖋️',
    attachmentStyle: 'Disorganized',
    archetype: 'Emotionally-Introspective',
    tagline: 'You romanticize emotions you still struggle to trust.',
    description: 'You experience love in a highly emotional and introspective way. You are deeply reflective and emotionally aware, but your fear of emotional pain can create hesitation, inconsistency, or emotional self-protection.'
  },
  {
    id: 'persona-safe-harbor',
    name: 'The Safe Harbor',
    emoji: '🕯️',
    attachmentStyle: 'Secure',
    archetype: 'Emotionally-Stable',
    tagline: 'People feel calmer simply by being around you.',
    description: 'You provide emotional steadiness during conflict, uncertainty, and vulnerability. You tend to communicate clearly, remain emotionally reliable, and approach relationships with maturity and patience.'
  },
  {
    id: 'persona-burning-comet',
    name: 'The Burning Comet',
    emoji: '☄️',
    attachmentStyle: 'Anxious',
    archetype: 'Intensity-Loving',
    tagline: 'You fall hard, fast, and emotionally all at once.',
    description: 'You become emotionally invested quickly and deeply. Relationships often feel emotionally consuming to you, and moments of distance or uncertainty can affect you intensely because connection means so much.'
  },
  {
    id: 'persona-castle-builder',
    name: 'The Castle Builder',
    emoji: '🏰',
    attachmentStyle: 'Avoidant',
    archetype: 'Self-Protective',
    tagline: 'You build strong walls before you build trust.',
    description: 'Trust takes time for you because emotional safety matters deeply. You often rely on self-sufficiency and emotional distance to avoid disappointment, making vulnerability something earned rather than freely given.'
  },
  {
    id: 'persona-balanced-soul',
    name: 'The Balanced Soul',
    emoji: '⚖️',
    attachmentStyle: 'Secure',
    archetype: 'Emotionally-Balanced',
    tagline: 'You balance intimacy and independence naturally.',
    description: 'You value both closeness and individuality within relationships. You rarely feel consumed by fear of abandonment or fear of intimacy because emotional balance comes relatively naturally to you.'
  },
  {
    id: 'persona-fragile-flame',
    name: 'The Fragile Flame',
    emoji: '🕊️',
    attachmentStyle: 'Disorganized',
    archetype: 'Sensitive-Complex',
    tagline: 'You feel everything deeply — including uncertainty.',
    description: 'You are emotionally sensitive, deeply intuitive, and highly affected by emotional inconsistency. Relationships can feel beautiful but also emotionally overwhelming because vulnerability triggers both hope and fear simultaneously.'
  },
  {
    id: 'persona-silent-tide',
    name: 'The Silent Tide',
    emoji: '🌌',
    attachmentStyle: 'Avoidant',
    archetype: 'Quietly-Independent',
    tagline: 'You love quietly, privately, and on your own terms.',
    description: 'You are capable of deep love but often express it subtly rather than openly. Emotional independence matters deeply to you, and too much emotional intensity can make you instinctively retreat inward.'
  },
  {
    id: 'persona-evergreen-heart',
    name: 'The Evergreen Heart',
    emoji: '🌿',
    attachmentStyle: 'Secure',
    archetype: 'Reliable-Lover',
    tagline: 'Your love grows steadily instead of burning out quickly.',
    description: 'You value emotional consistency, patience, and sustainable connection over emotional extremes. Your relationships often deepen gradually over time because you prioritize trust, stability, and emotional honesty.'
  },
  {
    id: 'persona-chaotic-dreamer',
    name: 'The Chaotic Dreamer',
    emoji: '🎭',
    attachmentStyle: 'Disorganized',
    archetype: 'Emotionally-Unpredictable',
    tagline: 'You crave certainty while fearing emotional dependence.',
    description: 'Your emotional needs can feel internally conflicting. Part of you wants complete closeness and emotional merging, while another part fears vulnerability and emotional exposure, creating emotional unpredictability.'
  },
];




export interface PersonaOption {
  id: string;
  name: string;
  emoji: string;
  attachmentStyle: string;
  archetype: string;
  tagline: string;
}

interface PersonaSelectorProps {
  label: string;
  selected: PersonaOption | null;
  onSelect: (persona: PersonaOption) => void;
  excludeId?: string;
}

export default function PersonaSelector({ label, selected, onSelect, excludeId }: PersonaSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = PERSONA_OPTIONS.filter(
    (p) => p.id !== excludeId && p.name.toLowerCase().includes(search.toLowerCase())
  );

  const attachmentColors: Record<string, string> = {
    Secure: 'text-teal-300 bg-teal-500/10 border-teal-500/20',
    Anxious: 'text-rose-300 bg-rose-500/10 border-rose-500/20',
    Avoidant: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
    Disorganized: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
  };

  return (
    <div className="relative">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</p>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200 text-left ${
          selected
            ? 'bg-primary/5 border-primary/40 hover:border-primary/60' :'bg-secondary border-border hover:border-muted-foreground/40'
        }`}
      >
        {selected ? (
          <>
            <span className="text-2xl shrink-0">{selected.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">{selected.name}</p>
              <p className="text-xs text-muted-foreground truncate">{selected.tagline}</p>
            </div>
          </>
        ) : (
          <>
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Select a persona...</p>
            </div>
          </>
        )}
        <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-30 rounded-2xl bg-card border border-border shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Search */}
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search personas..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
                autoFocus
              />
            </div>
          </div>

          {/* Options */}
          <div className="max-h-64 overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">No personas found</div>
            ) : (
              filtered.map((persona) => (
                <button
                  key={persona.id}
                  type="button"
                  onClick={() => {
                    onSelect(persona);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/40 transition-colors text-left border-b border-border/50 last:border-0 ${
                    selected?.id === persona.id ? 'bg-primary/5' : ''
                  }`}
                >
                  <span className="text-xl shrink-0">{persona.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">{persona.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{persona.tagline}</p>
                  </div>
                  <span className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${attachmentColors[persona.attachmentStyle] ?? 'text-muted-foreground bg-muted border-border'}`}>
                    {persona.attachmentStyle}
                  </span>
                </button>
              ))
            )}
          </div>

          {/* Custom persona hint */}
          <div className="p-3 border-t border-border bg-muted/20">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-accent" />
              <p className="text-[11px] text-muted-foreground">Take the quiz to get your own AI-generated persona</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
