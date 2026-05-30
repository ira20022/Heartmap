// Red Flags Quiz
// Result categories: overlooker | rationaliser | enabler | projector | hypervigilant | tester | idealiser | cynic
import { QuizMeta } from './attachment-style';

export type RedFlagCategory =
  | 'overlooker'
  | 'rationaliser'
  | 'enabler'
  | 'projector'
  | 'hypervigilant'
  | 'tester'
  | 'idealiser'
  | 'cynic';

const redFlags: QuizMeta = {
  title: 'Red Flags',
  description:
    'The warning signs you overlook in others — and the ones you may unknowingly display.',
  tag: 'Patterns',
  color: 'text-violet-400',
  noOfQuestion: 10,
  resultCategories: {
    overlooker: {
      label: 'The Overlooker',
      emoji: '🙈',
      description:
        'You have a strong tendency to minimise, explain away, or simply not register warning signs that others might notice clearly. This is not naivety — it is often a deeply practised skill of focusing on potential and positive moments rather than present, consistent reality. You may see the best version of a person and hold onto it even when their actual behaviour contradicts it again and again. Love, hope, or a deep discomfort with conflict can make the uncomfortable things feel smaller than they are.',
      advice:
        'Developing the habit of paying attention to patterns rather than moments is transformative. One difficult moment is human. A repeated dynamic is information. When something bothers you, write it down rather than letting it dissolve in the warmth of a good day. Ask yourself: "If a friend told me this story about their partner, what would I say?" Your gut already knows. Give it more airtime, and take your own discomfort seriously before it accumulates into something much harder to leave.',
    },

    rationaliser: {
      label: 'The Rationaliser',
      emoji: '🧠',
      description:
        'You notice red flags — but your mind is exceptionally good at building convincing cases for why they are not really red flags. You attribute worrying behaviour to someone\'s trauma history, current stress, or difficult circumstances rather than their character. You turn relationships into puzzles to solve, studying behaviour intensely and searching for explanations as a way to feel emotionally in control. Your empathy is immense, but it sometimes works against you by reframing genuine warning signs as things to be understood and worked through.',
      advice:
        'Empathy and discernment must work together. Someone can have a painful history and still be harmful to you. Understanding why someone does something does not obligate you to accept it. When you catch yourself constructing a lengthy explanation for why a red flag is not really one — pause. The elaborateness of the justification is often the signal itself. Give yourself permission to take your own discomfort seriously, not just theirs.',
    },

    enabler: {
      label: 'The Enabler',
      emoji: '🕊️',
      description:
        'You tend to absorb, accommodate, or excuse behaviour that crosses emotional or relational limits — often in service of keeping peace, maintaining the relationship, or protecting the other person. You may tell yourself it is compassion, loyalty, or love. And to some degree it is. But over time, this dynamic erodes your own standards, quietly communicates that certain treatment is acceptable, and can trap both of you in an unhealthy cycle neither of you knows how to exit. Patience becomes a problem when it has no floor.',
      advice:
        'Enabling is often one of the most loving-feeling things a person can do — which makes it one of the hardest to name. Ask yourself: "Am I helping this person grow, or am I shielding them from the consequences that would actually prompt change?" Real love sometimes looks like holding a line. You are allowed to have conditions. Compassion for others must include compassion for yourself.',
    },

    projector: {
      label: 'The Projector',
      emoji: '🔦',
      description:
        'You tend to pick up on red flags in other people very clearly — perhaps even hyper-vigilantly — but may have genuine blind spots about the signals you send yourself. You might be quick to spot inconsistency, emotional unavailability, or controlling tendencies in a partner, while simultaneously displaying patterns like emotional reactivity, jealousy, or intensity that others experience as difficult. Your awareness is sharp when looking outward, but considerably softer when turned inward.',
      advice:
        'Self-awareness is one of the most powerful tools available — but it becomes transformative only when it turns in both directions equally. Ask trusted people what working through conflict with you is actually like. Be genuinely open to the possibility that some of the dynamics you have experienced were not entirely caused by the other person. The goal is not self-blame but honest accountability — and that opens the door to relationships that feel fundamentally different.',
    },

    hypervigilant: {
      label: 'The Hypervigilant',
      emoji: '🧿',
      description:
        'You are constantly scanning relationships for signs of betrayal, abandonment, or shifts in tone or availability. You over-analyse messages, read danger into ambiguity, and feel sensitive to even small inconsistencies in how someone treats you. This creates a state of perpetual low-level alertness that is exhausting to live in — and can cause genuine problems to feel catastrophic while small fluctuations feel like confirmed evidence of something serious. Your instincts are sharp, but the signal-to-noise ratio is very hard to manage.',
      advice:
        'Hypervigilance is usually learned — it developed in an environment where watching carefully did protect you. In safe adult relationships, it often works against you by making genuine connection feel threatening. The work is not to stop noticing, but to build enough trust in yourself that you can distinguish between a real pattern and an anxious interpretation. Slowing down before reacting, naming what you are feeling before acting on it, and building a relationship with uncertainty are all part of the path forward.',
    },

    tester: {
      label: 'The Tester',
      emoji: '🧨',
      description:
        'You create emotional situations to measure how much a partner loves you or how loyal they are. This might look like pulling away to see if they pursue you, manufacturing scenarios that require them to prove themselves, or communicating indirectly and watching their reaction carefully. Underneath the testing is a need for proof that love is real and will not disappear — because at some point, love felt conditional or unreliable, and you learned that trust must be continuously verified rather than given.',
      advice:
        'The tests you run are driven by a very real need for reassurance — but indirect methods of seeking it often produce the opposite of safety. Partners either pass tests without knowing it (which does not actually resolve the underlying doubt) or they feel the dynamic as pressure and pull away. The more sustainable path is learning to ask directly for what you need and practising tolerating the vulnerability of waiting for an honest answer.',
    },

    idealiser: {
      label: 'The Idealiser',
      emoji: '🪞',
      description:
        'You consistently see who someone could become instead of who they consistently are right now. You fall in love with potential, confuse chemistry with compatibility, and tend to rewrite reality into a future that has not happened yet. When someone shows you who they are — through inconsistency, unavailability, or repeated patterns of behaviour — part of you holds more tightly to the story you have built about them. The core belief underneath is: "Once they heal, change, or open up, this will work."',
      advice:
        'The capacity to see someone\'s potential is genuinely beautiful — and it becomes a liability when it means you are in a relationship with your vision of them rather than the actual person. People are always most reliably who they have repeatedly shown you they are, not who they could theoretically be. Notice when you find yourself explaining away behaviour rather than taking it at face value. The person in front of you deserves to be seen clearly, and so do you.',
    },

    cynic: {
      label: 'The Cynic',
      emoji: '🛡️',
      description:
        'You approach new relationships with a background expectation of disappointment. You distrust affection, pre-reject people emotionally before they can reject you, and keep emotional distance through scepticism about intentions. This is not pessimism for its own sake — it is a protective strategy that developed because vulnerability genuinely did lead to pain at some point. The belief underneath is: "Expecting less prevents being hurt." But expecting nothing also prevents genuine connection.',
      advice:
        'Cynicism protects you from some pain and costs you a great deal of joy. The people who have hurt you in the past are not the same people standing in front of you now — and carrying that weight into new connections means the old wounds keep shaping the present. Healing does not require becoming naively trusting. It requires learning to take calibrated risks: small acts of vulnerability, taken slowly, with people who have earned a degree of trust over time.',
    },
  },

  questions: [
    {
      q: 'When someone you like says something that unsettles you, you usually…',
      options: [
        { text: 'Note it but assume it was probably out of character', weights: { overlooker: 3, rationaliser: 1, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'Think about their background and what might have caused it', weights: { overlooker: 0, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Let it go to avoid disrupting the atmosphere between you', weights: { overlooker: 1, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'File it away and pay close attention to whether it happens again', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 2, hypervigilant: 3, tester: 1, idealiser: 0, cynic: 1 } },
      ],
    },
    {
      q: 'When a friend points out a red flag in your relationship, you tend to…',
      options: [
        { text: 'Appreciate their concern but feel they\'re missing important context', weights: { overlooker: 2, rationaliser: 3, enabler: 0, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'Take it seriously and reflect honestly on whether they\'re right', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 3, hypervigilant: 1, tester: 0, idealiser: 0, cynic: 1 } },
        { text: 'Feel torn but ultimately defend your partner', weights: { overlooker: 1, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Worry they\'re right and begin watching your partner more carefully', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 0, hypervigilant: 3, tester: 2, idealiser: 0, cynic: 2 } },
      ],
    },
    {
      q: 'How often do you find yourself thinking "they didn\'t really mean it that way"?',
      options: [
        { text: 'Frequently — you try to assume the most charitable interpretation', weights: { overlooker: 3, rationaliser: 2, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'Rarely — you tend to take what people say and do at face value', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 2, hypervigilant: 1, tester: 1, idealiser: 0, cynic: 2 } },
        { text: 'Often — their intentions matter more to you than the impact', weights: { overlooker: 1, rationaliser: 3, enabler: 2, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Sometimes — but you still track whether the pattern repeats', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 1, hypervigilant: 3, tester: 2, idealiser: 0, cynic: 1 } },
      ],
    },
    {
      q: 'When a potential partner repeatedly cancels plans at the last minute, you…',
      options: [
        { text: 'Forgive easily — life gets in the way for everyone', weights: { overlooker: 3, rationaliser: 1, enabler: 2, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'Consider what might be making reliability hard for them right now', weights: { overlooker: 0, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Keep adjusting your expectations downward to avoid the tension', weights: { overlooker: 1, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Notice the pattern clearly and address it directly', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 3, hypervigilant: 1, tester: 0, idealiser: 0, cynic: 1 } },
      ],
    },
    {
      q: 'Which of these best describes how you reflect on your past relationships?',
      options: [
        { text: 'Surprised by how long it took you to see certain things clearly', weights: { overlooker: 3, rationaliser: 0, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'Like you understood too much — which made it hard to leave', weights: { overlooker: 0, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Like you gave too much and lost yourself in the process', weights: { overlooker: 0, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Like the warning signs were there — but you convinced yourself you were overreacting', weights: { overlooker: 1, rationaliser: 1, enabler: 0, projector: 0, hypervigilant: 3, tester: 1, idealiser: 0, cynic: 2 } },
      ],
    },
    {
      q: 'When you\'re attracted to someone, early warning signs tend to feel…',
      options: [
        { text: 'Easy to overlook — the good far outweighs them', weights: { overlooker: 3, rationaliser: 1, enabler: 0, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'Understandable — you think about what might be causing them', weights: { overlooker: 0, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Uncomfortable but manageable if you adjust your expectations', weights: { overlooker: 0, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Impossible to ignore — you stay alert even when attracted', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 2, hypervigilant: 3, tester: 1, idealiser: 0, cynic: 2 } },
      ],
    },
    {
      q: 'Have you ever found yourself withdrawing slightly just to see how someone would respond?',
      options: [
        { text: 'No — I prefer to be consistent and direct', weights: { overlooker: 1, rationaliser: 0, enabler: 0, projector: 2, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Yes — I need to know if they\'ll pursue me before I invest further', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 0, hypervigilant: 1, tester: 3, idealiser: 0, cynic: 1 } },
        { text: 'Sometimes — I\'m not sure whether it\'s healthy boundary-setting or testing', weights: { overlooker: 0, rationaliser: 1, enabler: 0, projector: 1, hypervigilant: 2, tester: 2, idealiser: 0, cynic: 1 } },
        { text: 'Rarely — though I notice I do watch how they handle my distance', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 0, hypervigilant: 2, tester: 3, idealiser: 0, cynic: 1 } },
      ],
    },
    {
      q: 'If a partner speaks badly about every one of their exes, you…',
      options: [
        { text: 'Take their side — maybe the exes really were the problem', weights: { overlooker: 3, rationaliser: 1, enabler: 2, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'Consider what emotional experiences might have shaped that perspective', weights: { overlooker: 0, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Feel uncomfortable but say nothing to avoid disrupting the mood', weights: { overlooker: 1, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Note it clearly as something worth paying attention to', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 3, hypervigilant: 2, tester: 0, idealiser: 0, cynic: 1 } },
      ],
    },
    {
      q: 'When your gut says something is off but you have no concrete evidence, you…',
      options: [
        { text: 'Dismiss it — you need something more specific before acting on it', weights: { overlooker: 3, rationaliser: 2, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Build a logical explanation for why the feeling is probably wrong', weights: { overlooker: 0, rationaliser: 3, enabler: 0, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Push the feeling down to keep the atmosphere between you positive', weights: { overlooker: 1, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Trust it and begin watching behaviour more carefully', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 2, hypervigilant: 3, tester: 1, idealiser: 0, cynic: 1 } },
      ],
    },
    {
      q: 'When a relationship ends badly, do you find yourself wondering whether the signs were there earlier?',
      options: [
        { text: 'Yes — in hindsight it seems obvious, but at the time I couldn\'t see it', weights: { overlooker: 3, rationaliser: 1, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'I saw the signs, understood why they were there, and stayed anyway', weights: { overlooker: 0, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'I noticed the signs but didn\'t feel I could say anything about them', weights: { overlooker: 0, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'I saw them very clearly — I just couldn\'t act quickly enough', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 3, hypervigilant: 2, tester: 0, idealiser: 0, cynic: 1 } },
      ],
    },
    {
      q: 'When a partner displays intense jealousy early in a relationship, you typically see it as…',
      options: [
        { text: 'Flattering — it means they are genuinely invested', weights: { overlooker: 3, rationaliser: 1, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'Something rooted in past hurt that deserves empathy', weights: { overlooker: 0, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Something you quietly adjust your behaviour around to keep things smooth', weights: { overlooker: 0, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'A yellow flag worth taking seriously from the start', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 3, hypervigilant: 2, tester: 0, idealiser: 0, cynic: 2 } },
      ],
    },
    {
      q: 'How do you typically respond when a partner reassures you they care about you?',
      options: [
        { text: 'You accept it warmly and feel it resolves any recent doubt', weights: { overlooker: 2, rationaliser: 1, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'You appreciate it but notice whether their behaviour matches the words over time', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 2, hypervigilant: 2, tester: 1, idealiser: 0, cynic: 1 } },
        { text: 'You feel momentarily reassured, then the doubt quietly returns', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 0, hypervigilant: 3, tester: 2, idealiser: 0, cynic: 2 } },
        { text: 'You wonder whether they really mean it or whether it will hold', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 1, hypervigilant: 1, tester: 2, idealiser: 0, cynic: 3 } },
      ],
    },
    {
      q: 'How comfortable are you holding a firm position when a partner pushes back emotionally?',
      options: [
        { text: 'I often back down because conflict feels threatening', weights: { overlooker: 1, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'I can hold my position without much difficulty', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 3, hypervigilant: 1, tester: 0, idealiser: 0, cynic: 2 } },
        { text: 'I back down if their emotional argument is compelling enough', weights: { overlooker: 1, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'I hold the line but sometimes then wonder if I was too harsh', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 1, hypervigilant: 2, tester: 1, idealiser: 0, cynic: 2 } },
      ],
    },
    {
      q: 'When you hear yourself saying "but they\'re different with me" about someone others question, you…',
      options: [
        { text: 'Believe it fully — you have seen a side of them nobody else has', weights: { overlooker: 3, rationaliser: 1, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 3, cynic: 0 } },
        { text: 'Wonder whether you are receiving a curated version of who they are', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 3, hypervigilant: 2, tester: 1, idealiser: 0, cynic: 1 } },
        { text: 'Think about the context that might be bringing out the difficult behaviour', weights: { overlooker: 0, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Know it might not be fully true but feel too invested to step back', weights: { overlooker: 0, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
      ],
    },
    {
      q: 'Do you think of love as something that needs to be continuously earned or proven?',
      options: [
        { text: 'No — when it\'s there, you feel it and trust it', weights: { overlooker: 2, rationaliser: 0, enabler: 0, projector: 1, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Yes — you need to see consistent proof through behaviour over time', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 1, hypervigilant: 2, tester: 3, idealiser: 0, cynic: 2 } },
        { text: 'Somewhat — you trust it when things are good but doubt it during uncertainty', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 0, hypervigilant: 3, tester: 2, idealiser: 0, cynic: 1 } },
        { text: 'Not consciously, though you tend to test it without quite intending to', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 0, hypervigilant: 1, tester: 3, idealiser: 0, cynic: 1 } },
      ],
    },
    {
      q: 'If a partner dismisses your feelings, your first response is usually to…',
      options: [
        { text: 'Wonder if maybe you did overreact after all', weights: { overlooker: 3, rationaliser: 2, enabler: 2, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Note it clearly as a significant moment in how they relate to you', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 3, hypervigilant: 2, tester: 0, idealiser: 0, cynic: 1 } },
        { text: 'Think about what might have prevented them from receiving it', weights: { overlooker: 0, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Feel hurt, let it go, and bring your feelings up less next time', weights: { overlooker: 0, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 1 } },
      ],
    },
    {
      q: 'How do you approach affection or warmth from a new partner?',
      options: [
        { text: 'You welcome it openly and let yourself be moved by it', weights: { overlooker: 2, rationaliser: 0, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'You appreciate it but also watch for whether the behaviour is consistent', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 2, hypervigilant: 2, tester: 1, idealiser: 0, cynic: 0 } },
        { text: 'You feel it fully but wait to see if it lasts before trusting it', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 0, hypervigilant: 1, tester: 2, idealiser: 0, cynic: 3 } },
        { text: 'You distrust it early on — you\'ve been caught off guard before', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 1, hypervigilant: 1, tester: 1, idealiser: 0, cynic: 3 } },
      ],
    },
    {
      q: 'Which statement sounds most like something you\'ve thought or said?',
      options: [
        { text: '"I just didn\'t notice until it was too late."', weights: { overlooker: 3, rationaliser: 0, enabler: 0, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: '"They were going through so much — it explains the way they acted."', weights: { overlooker: 0, rationaliser: 3, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: '"I thought if I was patient enough, things would improve."', weights: { overlooker: 0, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: '"I always knew something was slightly off — I just couldn\'t prove it."', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 1, hypervigilant: 3, tester: 1, idealiser: 0, cynic: 1 } },
      ],
    },
    {
      q: 'How do you feel about the idea that you might display red flags yourself?',
      options: [
        { text: 'Unlikely — I\'m generally thoughtful and considerate in relationships', weights: { overlooker: 2, rationaliser: 1, enabler: 0, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Possible — I\'m aware that I can be intense or critical', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 3, hypervigilant: 1, tester: 1, idealiser: 0, cynic: 1 } },
        { text: 'Maybe — although my actions usually come from a place of genuine care', weights: { overlooker: 0, rationaliser: 2, enabler: 2, projector: 0, hypervigilant: 0, tester: 0, idealiser: 1, cynic: 0 } },
        { text: 'Yes — I know I can be guarded, reactive, or test people without meaning to', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 1, hypervigilant: 2, tester: 3, idealiser: 0, cynic: 2 } },
      ],
    },
    {
      q: 'What is your honest relationship with emotional vulnerability in new relationships?',
      options: [
        { text: 'Open — you let yourself fall in fully without too much hesitation', weights: { overlooker: 2, rationaliser: 0, enabler: 1, projector: 0, hypervigilant: 0, tester: 0, idealiser: 3, cynic: 0 } },
        { text: 'Cautious but willing — you open slowly based on what you observe', weights: { overlooker: 0, rationaliser: 1, enabler: 0, projector: 2, hypervigilant: 1, tester: 1, idealiser: 0, cynic: 0 } },
        { text: 'Difficult — you find it hard to open without wanting something in return first', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 0, hypervigilant: 1, tester: 3, idealiser: 0, cynic: 2 } },
        { text: 'Very guarded — vulnerability has led to pain often enough that you protect it tightly', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 1, hypervigilant: 2, tester: 1, idealiser: 0, cynic: 3 } },
      ],
    },
    {
      q: 'If you had to identify your biggest blind spot in love, it would be…',
      options: [
        { text: 'Seeing things clearly before I\'m already emotionally invested', weights: { overlooker: 3, rationaliser: 0, enabler: 0, projector: 0, hypervigilant: 0, tester: 0, idealiser: 2, cynic: 0 } },
        { text: 'Knowing when understanding stops being helpful and starts being an excuse', weights: { overlooker: 0, rationaliser: 3, enabler: 0, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Knowing when caring for someone means saying no or walking away', weights: { overlooker: 0, rationaliser: 0, enabler: 3, projector: 0, hypervigilant: 0, tester: 0, idealiser: 0, cynic: 0 } },
        { text: 'Seeing myself as clearly as I see other people', weights: { overlooker: 0, rationaliser: 0, enabler: 0, projector: 3, hypervigilant: 1, tester: 1, idealiser: 0, cynic: 1 } },
      ],
    },
  ],
};

export default redFlags;