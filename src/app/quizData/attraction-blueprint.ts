// Attraction Blueprint Quiz
// Result categories: mysteryAttractor | safeHavenAttractor | unavailableAttractor | chaosAttractor | recognitionAttractor | reformerAttractor | intellectualAttractor | awakenedAttractor

import { QuizMeta } from './attachment-style';

export type AttractionBlueprintCategory =
  | 'mysteryAttractor'
  | 'safeHavenAttractor'
  | 'unavailableAttractor'
  | 'chaosAttractor'
  | 'recognitionAttractor'
  | 'reformerAttractor'
  | 'intellectualAttractor'
  | 'awakenedAttractor';

const attractionBlueprint: QuizMeta = {
  title: 'Attraction Blueprint',
  description:
    "The personality types and energies you're consistently pulled toward in partners.",
  tag: 'Patterns',
  color: 'text-violet-400',
  noOfQuestion: 10,

  resultCategories: {
    mysteryAttractor: {
      label: 'The Mystery Attractor',
      emoji: '🌙',
      description:
        'You are drawn to emotional depth, ambiguity, and people who feel genuinely difficult to fully know. Hidden layers are intriguing rather than frustrating. You romanticise emotional distance — the sense that someone holds a rich interior world they have not yet chosen to share with you. Attraction for you grows through curiosity, through the slow revelation of someone complex. Partners who are immediately legible, openly available, and easy to read can feel less compelling than they deserve to.',
      advice:
        'The pull toward mystery is beautiful until it becomes a cover for emotional unavailability. There is a difference between someone who is complex and someone who is simply withholding. Real depth eventually opens — it does not stay perpetually hidden behind artful distance. Ask yourself whether you are drawn to someone\'s inner world or to the feeling of pursuing it. The most meaningful connections reveal themselves over time, but they do actually reveal.',
    },

    safeHavenAttractor: {
      label: 'The Safe-Haven Attractor',
      emoji: '🌿',
      description:
        'You are drawn to emotional steadiness, warmth, and reliable affection above almost everything else. Consistency feels more intimate than excitement. You feel most attracted to grounded people — those who show up predictably, communicate clearly, and create an emotional environment where you can genuinely relax. Drama, ambiguity, and emotional hot-and-cold dynamics feel unappealing rather than thrilling. Peace, for you, is not settling — it is the highest form of connection.',
      advice:
        'Your instinct toward emotional safety is one of the healthiest blueprints there is. The nuance to watch for is whether "safe" sometimes tips into "emotionally flat" — and whether you occasionally mistake the absence of anxiety for the presence of genuine chemistry. Deep, stable connection is also alive. Make sure that within the safety you seek, there is also room for growth, honest challenge, and the kind of aliveness that does not require drama to exist.',
    },

    unavailableAttractor: {
      label: 'The Unavailable Attractor',
      emoji: '🧲',
      description:
        'You are consistently drawn toward emotional distance and hard-to-win affection. Your attraction increases, rather than decreases, when someone is inconsistent, slow to commit, or difficult to reach. You confuse longing with compatibility, interpreting the ache of pursuit as evidence of depth. Certainty and emotional availability can feel strangely unexciting — as though something important is missing when love comes without effort. The core belief is: if I can finally earn their love, it will mean something real.',
      advice:
        'What feels like chemistry is often dysregulation — your nervous system responding to a familiar kind of emotional tension rather than genuine connection. The relief of winning someone over is temporary. It does not resolve the underlying belief that love must be earned. Practising staying interested in people who are emotionally present — even when it feels less urgent — is one of the most important things you can do. Steady love can be deeply exciting once you learn to receive it.',
    },

    chaosAttractor: {
      label: 'The Chaos Attractor',
      emoji: '🌪️',
      description:
        'You are drawn to passion, volatility, and emotional unpredictability. You mistake intensity for depth, and you feel most alive in relationships that have a high emotional temperature — even when that temperature regularly tips into difficulty. Stability can feel emotionally flat, like something vital is missing. The relationships that have gripped you most powerfully have often also been the most disruptive. The pull is toward love that consumes, overwhelms, and destabilises in a way that feels undeniably real.',
      advice:
        'Intensity and chemistry are not the same thing. What creates urgency is not always what creates lasting connection — and the feelings that are loudest are not always the ones worth following. Grounded, consistent love can feel electric too, once you stop equating calm with emptiness. The goal is not a relationship without feeling, but a relationship where the feeling does not require chaos to survive. That shift takes time, but it is entirely possible.',
    },

    recognitionAttractor: {
      label: 'The Recognition Attractor',
      emoji: '🪞',
      description:
        'You are most powerfully drawn to people who immediately and deeply get you — who share your values, emotional language, aesthetic, and way of moving through the world. The feeling of being profoundly understood is, for you, the core of attraction. When someone mirrors your psychological landscape back to you, the connection feels instantly meaningful. Difference at a fundamental level — in emotional style, worldview, or personality — tends to feel uncomfortable rather than interesting.',
      advice:
        'The longing to be truly known by a partner is one of the most human experiences there is. The shadow side is that seeking a mirror can produce relationships that feel intensely connected early but lack the growth that comes from genuine complementarity. Ask yourself whether you are drawn to someone because of who they are or because of how deeply seen you feel in their presence. The best relationships involve both resonance and productive difference — someone who understands you and also expands you.',
    },

    reformerAttractor: {
      label: 'The Reformer Attractor',
      emoji: '🔥',
      description:
        'You are consistently drawn to people with obvious emotional complexity, visible rough edges, or unrealised potential. The fixer impulse runs deep — you feel most purposeful when there is someone to understand, help heal, or bring out. Partners who are emotionally stable and already available can feel less compelling, even when you logically know that is what you want. The idea of being the person who sees someone\'s potential and helps them realise it is deeply satisfying on a level that straightforward relationships rarely match.',
      advice:
        'The draw toward someone who needs you is often rooted in your own need to feel necessary and emotionally meaningful. This is not a flaw — but it is a pattern worth examining. The work is learning to find depth and genuine connection in partners who are already emotionally available, rather than in the project of transformation. Ask yourself honestly: "Am I attracted to who this person is right now, or to who I believe they could become?" That single question will save you a great deal of heartache.',
    },

    intellectualAttractor: {
      label: 'The Intellectual Attractor',
      emoji: '🧠',
      description:
        'You fall for minds before almost anything else. Insight, psychological complexity, and the ability to hold a genuinely deep conversation are the most reliable paths to your interest. You associate attraction with mental stimulation and find that understanding someone intellectually creates a level of intimacy that physical or emotional resonance alone cannot replicate. Partners who cannot meet you in the space of ideas, curiosity, or intellectual depth tend to feel like something essential is missing, regardless of how much else is present.',
      advice:
        'The craving for intellectual connection is real and worth honouring. The shadow side is that intelligence can become a filter that keeps emotional intimacy at arm\'s length — because the mind is much safer than the heart. Notice whether the conversations you prize sometimes function as a way of maintaining stimulating distance rather than genuine closeness. The most fulfilling connections are the ones where the intellectual resonance opens into emotional vulnerability rather than substituting for it.',
    },

    awakenedAttractor: {
      label: 'The Awakener Attractor',
      emoji: '🔥',
      description:
        'You are drawn to people who disrupt your equilibrium and trigger something in you to grow. Relationships feel most meaningful when they catalyse change, push you beyond your comfort zone, or force a confrontation with something you had not previously been willing to examine. You are interested in emotionally catalytic connections — love that transforms rather than merely accompanies. Predictability and comfort, however healthy, can feel like stagnation when they are not paired with the feeling of expansion.',
      advice:
        'The desire for growth through connection is one of the most alive forms of attraction there is. The risk is equating disruption with depth — and choosing partners who unsettle you primarily because unsettlement has become familiar. Not every transformative relationship requires pain to catalyse growth. Some of the most profound change comes through the sustained challenge of being genuinely loved by someone stable and honest over a long period of time.',
    },
  },

  questions: [
    {
      q: 'What quality in a person tends to make you feel genuinely attracted to them?',
      options: [
        { text: 'A sense of depth or complexity that feels like it could take years to fully understand', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 1, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 1, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'Warmth, consistency, and emotional reliability', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Something unpredictable or hard to categorise', weights: { mysteryAttractor: 1, safeHavenAttractor: 0, unavailableAttractor: 2, chaosAttractor: 3, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 1 } },
        { text: 'Intelligence, insight, and the ability to hold a genuinely deep conversation', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 3, awakenedAttractor: 1 } },
      ],
    },
    {
      q: 'When you imagine a partner who is completely emotionally available and openly affectionate, that sounds…',
      options: [
        { text: 'Wonderful — exactly what you have been looking for', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Appealing in theory, but somehow less compelling in practice', weights: { mysteryAttractor: 2, safeHavenAttractor: 0, unavailableAttractor: 3, chaosAttractor: 2, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Good — though you also need intellectual depth alongside it', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 3, awakenedAttractor: 0 } },
        { text: 'Fine, but you are more drawn by someone who challenges you to grow', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 1, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 0, awakenedAttractor: 3 } },
      ],
    },
    {
      q: 'What does "chemistry" most feel like to you?',
      options: [
        { text: 'A feeling that someone holds layers you have barely scratched the surface of', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 1, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'A sense of ease and calm — like you can finally relax', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'An electric, slightly unsettling energy that makes you feel fully switched on', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 2, chaosAttractor: 3, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 1 } },
        { text: 'Instant recognition — like meeting someone you already somehow know', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 3, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
      ],
    },
    {
      q: 'Have you ever been more attracted to someone because of how much unrealised potential you saw in them?',
      options: [
        { text: 'Yes — their potential is often exactly what draws me in', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 3, intellectualAttractor: 0, awakenedAttractor: 1 } },
        { text: 'No — I prefer someone who is already living it', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'Sometimes — especially if they seem on the edge of a breakthrough', weights: { mysteryAttractor: 2, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 2, intellectualAttractor: 0, awakenedAttractor: 2 } },
        { text: 'Not really — I am drawn more to who someone is, not who they might become', weights: { mysteryAttractor: 0, safeHavenAttractor: 1, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 2, reformerAttractor: 0, intellectualAttractor: 2, awakenedAttractor: 0 } },
      ],
    },
    {
      q: 'What tends to kill your attraction fastest?',
      options: [
        { text: 'When someone feels entirely knowable and surface-level', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 1, chaosAttractor: 1, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 2, awakenedAttractor: 0 } },
        { text: 'When someone is unreliable or emotionally chaotic', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'When things feel too settled and predictable too quickly', weights: { mysteryAttractor: 1, safeHavenAttractor: 0, unavailableAttractor: 2, chaosAttractor: 3, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 1 } },
        { text: 'When someone does not share any of my core values or way of seeing the world', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 3, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
      ],
    },
    {
      q: 'How do you feel when a partner becomes more emotionally consistent and predictable over time?',
      options: [
        { text: 'Grateful — this is what you were hoping for', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Slightly less engaged — some of the pull fades with certainty', weights: { mysteryAttractor: 2, safeHavenAttractor: 0, unavailableAttractor: 3, chaosAttractor: 2, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Warm and connected — especially if the depth keeps revealing itself', weights: { mysteryAttractor: 1, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 2, reformerAttractor: 0, intellectualAttractor: 2, awakenedAttractor: 1 } },
        { text: 'It depends on whether the growth and challenge continue alongside the consistency', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 0, awakenedAttractor: 3 } },
      ],
    },
    {
      q: 'When you are on a third date and feel real potential, it usually comes from…',
      options: [
        { text: 'The sense that you still have not fully figured this person out', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 1, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'Feeling at ease — like you could genuinely build a life with this person', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Leaving feeling strangely destabilised in a way that makes you want more', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 2, chaosAttractor: 3, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 1 } },
        { text: 'The conversation flowing as if you have known them for years', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 3, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
      ],
    },
    {
      q: 'When you meet someone whose emotional life seems deeply complicated or difficult, you feel…',
      options: [
        { text: 'Intrigued — there is something compelling about emotional complexity', weights: { mysteryAttractor: 2, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 1, recognitionAttractor: 0, reformerAttractor: 3, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'Cautious — emotional instability tends to put me off', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'Drawn in — something about the turbulence feels electric', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 2, chaosAttractor: 3, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Interested if there is real self-awareness underneath the complexity', weights: { mysteryAttractor: 1, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 3, awakenedAttractor: 2 } },
      ],
    },
    {
      q: 'Which version of love feels most real or meaningful to you?',
      options: [
        { text: 'A love built on mutual understanding and deep emotional discovery', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 2, awakenedAttractor: 0 } },
        { text: 'A love that anchors both people in consistent warmth and reliability', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'A love that transforms someone — that helps them become more fully themselves', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 3, intellectualAttractor: 0, awakenedAttractor: 2 } },
        { text: 'A love built on profound mutual recognition and psychological resonance', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 3, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
      ],
    },
    {
      q: 'Your attraction increases most when someone…',
      options: [
        { text: 'Reveals something unexpected about themselves that changes how you see them', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 2, awakenedAttractor: 1 } },
        { text: 'Shows up consistently and makes you feel genuinely safe', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Becomes slightly less available or harder to read', weights: { mysteryAttractor: 1, safeHavenAttractor: 0, unavailableAttractor: 3, chaosAttractor: 2, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Says something that makes you think differently about something you believed', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 3, awakenedAttractor: 2 } },
      ],
    },
    {
      q: 'Have you ever found yourself less attracted to someone once they became emotionally stable and consistent?',
      options: [
        { text: 'Yes — something about the certainty made them feel less compelling', weights: { mysteryAttractor: 2, safeHavenAttractor: 0, unavailableAttractor: 3, chaosAttractor: 2, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'No — stability makes someone more attractive to me', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Sometimes — once they were "sorted," I felt less needed', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 3, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Possibly — though it is more that the growth stopped and things felt flat', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 3 } },
      ],
    },
    {
      q: 'How important is it that a partner shares your values, aesthetic, or way of seeing the world?',
      options: [
        { text: 'Extremely important — resonance at that level is the foundation of attraction', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 3, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'Important, though warmth and reliability matter more to me day-to-day', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Less important than emotional depth and the capacity for genuine growth', weights: { mysteryAttractor: 1, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 2, intellectualAttractor: 0, awakenedAttractor: 2 } },
        { text: 'Interesting but not essential — difference can be more compelling than alignment', weights: { mysteryAttractor: 2, safeHavenAttractor: 0, unavailableAttractor: 1, chaosAttractor: 2, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 1 } },
      ],
    },
    {
      q: 'What is the quality you are most likely to overlook warning signs for?',
      options: [
        { text: 'An air of mystery that makes you feel you have not seen the real them yet', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 2, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'The feeling that they need someone who truly believes in them', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 3, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'A kind of electric, difficult-to-name pull that overrides your better judgement', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 3, chaosAttractor: 3, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'An intellectual spark that makes every conversation feel like a discovery', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 3, awakenedAttractor: 1 } },
      ],
    },
    {
      q: 'In past relationships, the people you fell hardest for tended to be…',
      options: [
        { text: 'Emotionally layered and genuinely difficult to fully know', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 1, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'Steady, warm, and emotionally present', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Unpredictable, intense, or emotionally hot-and-cold', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 3, chaosAttractor: 3, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Profoundly similar to you in personality or inner life', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 3, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
      ],
    },
    {
      q: 'When a partner challenges your worldview or disrupts your usual thinking, you feel…',
      options: [
        { text: 'Activated and more engaged — intellectual friction draws you in', weights: { mysteryAttractor: 1, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 1, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 3, awakenedAttractor: 2 } },
        { text: 'Unsettled — you prefer emotional safety over provocation', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Intrigued — it reveals something about who they are underneath', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'Alive — this is exactly the kind of disruption you find meaningful', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 2, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 3 } },
      ],
    },
    {
      q: 'Which phrase most honestly describes how you talk about attraction to close friends?',
      options: [
        { text: '"There\'s something about them I can\'t quite put my finger on — and that\'s the whole thing."', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 1, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: '"I feel completely at ease with them, which almost never happens."', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: '"I know they\'re not perfect but I can\'t stop thinking about them."', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 3, chaosAttractor: 2, recognitionAttractor: 0, reformerAttractor: 2, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: '"Talking to them makes me feel like I\'ve finally met someone who gets it."', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 3, reformerAttractor: 0, intellectualAttractor: 2, awakenedAttractor: 0 } },
      ],
    },
    {
      q: 'How do you tend to feel when a relationship becomes deeply settled and peaceful?',
      options: [
        { text: 'Content and grateful — this is what you were building toward', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Slightly restless — the pull toward mystery returns even within the relationship', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 2, chaosAttractor: 1, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Quietly bored — you need more intensity or unpredictability to stay engaged', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 2, chaosAttractor: 3, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Good — as long as the growth and depth are still present underneath the calm', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 2, awakenedAttractor: 3 } },
      ],
    },
    {
      q: 'If a therapist asked you what you are really looking for in a partner, your most honest answer would be…',
      options: [
        { text: 'Someone whose inner world I could spend a lifetime still discovering', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'Someone who makes me feel genuinely safe enough to fully exhale', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Someone who keeps me feeling alive, slightly uncertain, and a little off-balance', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 3, chaosAttractor: 3, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'Someone who feels like a genuine intellectual and emotional equal', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 2, reformerAttractor: 0, intellectualAttractor: 3, awakenedAttractor: 0 } },
      ],
    },
    {
      q: 'When you picture yourself deeply in love, what is the feeling you are most chasing?',
      options: [
        { text: 'The feeling that you are always still discovering who this person really is', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'The feeling of finally being able to fully rest in someone\'s presence', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'The feeling of being truly and completely known by another person', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 3, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'The feeling of becoming a bigger, more expanded version of yourself through love', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 0, awakenedAttractor: 3 } },
      ],
    },
    {
      q: 'Which belief about love feels most true to you, even if you know it\'s complicated?',
      options: [
        { text: '"Love should feel like a door into something vast and not fully knowable."', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 1, recognitionAttractor: 0, reformerAttractor: 0, intellectualAttractor: 1, awakenedAttractor: 1 } },
        { text: '"Love should feel like coming home."', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: '"Love should feel like something you had to work to deserve."', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 3, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 2, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: '"Love should change you — leave you different than it found you."', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 1, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 1, awakenedAttractor: 3 } },
      ],
    },
    {
      q: 'Looking back honestly at the relationships you\'ve wanted most — what did they share?',
      options: [
        { text: 'A sense that the person always had more to reveal', weights: { mysteryAttractor: 3, safeHavenAttractor: 0, unavailableAttractor: 1, chaosAttractor: 0, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 1, awakenedAttractor: 0 } },
        { text: 'A quality of steadiness that made me feel I did not have to perform', weights: { mysteryAttractor: 0, safeHavenAttractor: 3, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 1, reformerAttractor: 0, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'A difficulty or emotional edge that made everything feel more urgent', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 2, chaosAttractor: 3, recognitionAttractor: 0, reformerAttractor: 1, intellectualAttractor: 0, awakenedAttractor: 0 } },
        { text: 'A sense of psychological meeting — like we were made of similar material', weights: { mysteryAttractor: 0, safeHavenAttractor: 0, unavailableAttractor: 0, chaosAttractor: 0, recognitionAttractor: 3, reformerAttractor: 0, intellectualAttractor: 2, awakenedAttractor: 0 } },
      ],
    },
  ],
};

export default attractionBlueprint;