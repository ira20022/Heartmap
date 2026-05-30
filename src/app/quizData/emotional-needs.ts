// Emotional Needs Quiz
// Result categories: security | validation | autonomy | intimacy
// Each option has weights: { security, validation, autonomy, intimacy }

import { QuizMeta } from './attachment-style';

const quiz: QuizMeta = {
  title: 'Emotional Needs',
  description: 'Security, validation, autonomy, or intimacy — what you need most to feel truly loved.',
  tag: 'Self-awareness',
  color: 'text-rose-400',
  noOfQuestion: 10,
  resultCategories: {
    security: {
      label: 'Security',
      emoji: '🏡',
      description: 'Consistency is your love language at the deepest level. You feel most nourished when a relationship is stable, predictable, and safe — when you know without a doubt that someone is staying. Uncertainty, even small doses of it, can destabilise your sense of wellbeing.',
      advice: 'Communicating your need for consistency early isn\'t neediness — it\'s self-knowledge. Look for partners who show up reliably in small ways, not just grand gestures. Stability is built in the ordinary moments.',
    },
    validation: {
      label: 'Validation',
      emoji: '🪞',
      description: 'Being truly seen and understood is what fills you up. You need a partner who reflects back that your feelings are real, your perspective matters, and who you are is enough. When you feel dismissed or misunderstood, the connection breaks down fast.',
      advice: 'Distinguish between needing validation and needing agreement — they\'re different things. A partner who takes your feelings seriously even while disagreeing is offering real validation. That\'s the kind worth seeking.',
    },
    autonomy: {
      label: 'Autonomy',
      emoji: '🌬️',
      description: 'Space to be yourself — separate from the relationship — is non-negotiable for you. You thrive when you can maintain your own identity, interests, and rhythm without guilt. Too much merging feels suffocating, even when the love is real.',
      advice: 'Your need for independence isn\'t a flaw or a sign you love less. Be upfront about this early. The right partner won\'t take your need for space personally — they\'ll understand it as part of loving you well.',
    },
    intimacy: {
      label: 'Deep Intimacy',
      emoji: '🕯️',
      description: 'Surface-level connection leaves you cold. You hunger for depth — conversations that go somewhere real, vulnerability that\'s mutual, a sense of being known completely. Emotional closeness isn\'t something you want; it\'s something you require.',
      advice: 'Not everyone moves at your depth or pace, and that\'s not a reflection of their capacity to love. Cultivate patience while still being honest about what you need. The connection you\'re looking for exists — don\'t settle for less.',
    },
  },
  questions: [
    {
      q: 'What do you need most from a partner on a genuinely hard day?',
      options: [
        { text: 'Reassurance that things between you are still okay', weights: { security: 3, validation: 1, autonomy: 0, intimacy: 0 } },
        { text: 'For them to really listen and say "that makes sense"', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: 'Space to process it in your own way and time', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'A real conversation where you both go deep', weights: { security: 0, validation: 1, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'You feel emotionally fulfilled in a relationship when…',
      options: [
        { text: 'Your partner checks in consistently without prompting', weights: { security: 3, validation: 1, autonomy: 0, intimacy: 0 } },
        { text: 'They acknowledge your feelings as valid, always', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: 'You have the freedom to be yourself without compromise', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'You share things with each other that you tell no one else', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'What makes you feel most unseen in a relationship?',
      options: [
        { text: 'When their behaviour becomes unpredictable or inconsistent', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: 'When your feelings are minimised or brushed off', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: 'When you\'re expected to merge your life entirely with theirs', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'When conversations never go past the surface', weights: { security: 0, validation: 1, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'In an ideal relationship, emotional safety looks like…',
      options: [
        { text: 'Knowing they\'ll always be there — no question about it', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 1 } },
        { text: 'Being able to express any feeling without being judged', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: 'Trusting that you won\'t lose yourself inside the relationship', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'Knowing you can say anything and be truly understood', weights: { security: 0, validation: 1, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'The thing that kills your feelings fastest in a relationship is…',
      options: [
        { text: 'Hot and cold behaviour — warmth one day, distance the next', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: 'Feeling like your emotions are too much for them', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 0 } },
        { text: 'Feeling controlled or like you have to shrink yourself', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'Emotional unavailability — closeness that never quite lands', weights: { security: 1, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'If a partner went quiet for a few days with no explanation, you\'d feel…',
      options: [
        { text: 'Destabilised — the uncertainty would consume you', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: 'Hurt — like your presence doesn\'t matter to them', weights: { security: 1, validation: 3, autonomy: 0, intimacy: 0 } },
        { text: 'Mostly fine — you understand needing space', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'Disconnected — the emotional thread between you feels cut', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'What does feeling truly loved look like for you?',
      options: [
        { text: 'Knowing they\'re not going anywhere, no matter what', weights: { security: 3, validation: 1, autonomy: 0, intimacy: 0 } },
        { text: 'Feeling understood — like they actually get you', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: 'Being loved for who you are, not who they want you to be', weights: { security: 0, validation: 1, autonomy: 3, intimacy: 0 } },
        { text: 'A closeness that goes below the surface — something rare', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'After a period of tension with a partner, what do you need to feel okay again?',
      options: [
        { text: 'Clear confirmation that you\'re both still solid', weights: { security: 3, validation: 1, autonomy: 0, intimacy: 0 } },
        { text: 'For them to acknowledge your side of it', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 0 } },
        { text: 'Time to decompress alone before reconnecting', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'A real conversation that gets to the heart of what happened', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'Which scenario would affect you the most emotionally?',
      options: [
        { text: 'Your partner becoming less consistent or dependable over time', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: 'Your partner repeatedly dismissing your feelings as "overreacting"', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 0 } },
        { text: 'Your partner expecting you to give up your interests and friendships', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'Your partner never opening up emotionally, no matter how long you wait', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'What kind of relationship conversation energises you the most?',
      options: [
        { text: 'Talking about where you\'re headed — future plans, shared vision', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 1 } },
        { text: 'A moment where they really articulate what they love about you', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 0 } },
        { text: 'Checking in that you\'re both still giving each other enough room', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'An unexpected conversation that goes to a deep, unexpected place', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'You feel emotionally closest to a partner when…',
      options: [
        { text: 'The relationship has a rhythm — reliable, steady, predictable', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 1 } },
        { text: 'They notice something about you before you say a word', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: 'You choose to spend time together — not out of obligation', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 1 } },
        { text: 'You\'ve shared something you\'ve never told anyone else', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'If you could only ask one thing of a partner, it would be…',
      options: [
        { text: '"Show me I can count on you."', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: '"Make me feel like my feelings make sense to you."', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 0 } },
        { text: '"Let me be myself without making it a problem."', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: '"Be willing to go somewhere real with me."', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'When you imagine a partner who truly "gets" you, they…',
      options: [
        { text: 'Never leave you wondering where you stand', weights: { security: 3, validation: 1, autonomy: 0, intimacy: 0 } },
        { text: 'Understand the why behind how you feel, not just the what', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: 'Respect your need for space without making it a conflict', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'Meet you in the deep end without flinching', weights: { security: 0, validation: 1, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'Which fear resonates most with you in relationships?',
      options: [
        { text: 'That they\'ll leave, or that things will fall apart without warning', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: 'That you\'ll never feel truly understood by anyone', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: 'That love always seems to come at the cost of your identity', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'That you\'ll share everything and still feel fundamentally alone', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'How do you know a relationship is meeting your needs?',
      options: [
        { text: 'You feel calm — not anxious, not braced for something to go wrong', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: 'You feel seen — like who you really are is being registered', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: 'You feel free — like yourself, not a version shaped for them', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'You feel known — like there are no parts of you being kept hidden', weights: { security: 0, validation: 1, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'When you\'re at your most vulnerable, what do you need?',
      options: [
        { text: 'To know the relationship can hold whatever you\'re going through', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 1 } },
        { text: 'For your feelings to be met with "I hear you" — not solutions', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 0 } },
        { text: 'The option to handle it yourself without pressure to share', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'To be able to fall apart with someone who won\'t look away', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'What drains you most in a relationship that\'s otherwise good?',
      options: [
        { text: 'Having to constantly re-earn or re-prove the security you\'re in', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: 'Feeling like your emotional reality is always slightly too much', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 0 } },
        { text: 'Feeling like yourself requires constant justification', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'Sharing a life but never quite sharing yourselves', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'A new partner does something that immediately makes you feel safe. What is it?',
      options: [
        { text: 'They follow through on every small thing they said they\'d do', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: 'They respond to something you share by saying "that makes complete sense"', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: 'They actively encourage you to keep your own life outside of them', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'They offer something real and unguarded without you having to ask', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'Looking at past relationships, what you needed most but didn\'t always get was…',
      options: [
        { text: 'Reliability — someone whose presence you could actually count on', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: 'Acknowledgement — someone who made your feelings feel real', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 0 } },
        { text: 'Room — someone who loved you without needing to contain you', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: 'Depth — someone willing to go all the way emotionally', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'Finish this sentence honestly: "I feel most like myself in a relationship when…"',
      options: [
        { text: '"…I\'m not spending energy worrying about where we stand."', weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 } },
        { text: '"…my partner makes me feel like my inner world matters."', weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 } },
        { text: '"…I still have time and space that belong only to me."', weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 } },
        { text: '"…we\'ve gotten past the surface and into something real."', weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 } },
      ],
    },
    {
      q: 'What helps you reconnect most after emotional distance?',
      options: [
        {
          text: 'Consistent reassurance that the relationship is still secure',
          weights: { security: 3, validation: 0, autonomy: 0, intimacy: 1 },
        },
        {
          text: 'Feeling emotionally understood without needing to over-explain',
          weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 },
        },
        {
          text: 'Having space first instead of being pushed to reconnect immediately',
          weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 },
        },
        {
          text: 'An honest, vulnerable conversation about what really happened',
          weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 },
        },
      ],
    },
    {
      q: 'Which action would make you feel most deeply loved?',
      options: [
        {
          text: 'Someone consistently choosing you in both big and small ways',
          weights: { security: 3, validation: 0, autonomy: 0, intimacy: 1 },
        },
        {
          text: 'Someone understanding emotions you struggle to explain yourself',
          weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 },
        },
        {
          text: 'Someone loving you without trying to change your nature',
          weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 },
        },
        {
          text: 'Someone seeing every layer of you and staying anyway',
          weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 },
        },
      ],
    },
    {
      q: 'What relationship pace feels most natural to you?',
      options: [
        {
          text: 'Slowly building something stable and dependable over time',
          weights: { security: 3, validation: 0, autonomy: 0, intimacy: 1 },
        },
        {
          text: 'Frequent emotional check-ins and reassurance along the way',
          weights: { security: 0, validation: 3, autonomy: 0, intimacy: 0 },
        },
        {
          text: 'A relationship that leaves room for separate lives and individuality',
          weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 },
        },
        {
          text: 'Feeling emotionally close very quickly and naturally',
          weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 },
        },
      ],
    },
    {
      q: 'What feels riskiest to you in love?',
      options: [
        {
          text: 'Trusting someone who may not stay',
          weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 },
        },
        {
          text: 'Being misunderstood after opening up honestly',
          weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 },
        },
        {
          text: 'Losing your sense of self inside the relationship',
          weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 },
        },
        {
          text: 'Being fully emotionally known by someone',
          weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 },
        },
      ],
    },
    {
      q: 'What quietly exhausts you most in relationships?',
      options: [
        {
          text: 'Never fully feeling secure about where you stand',
          weights: { security: 3, validation: 0, autonomy: 0, intimacy: 0 },
        },
        {
          text: 'Feeling emotionally unseen even when you’re trying your best',
          weights: { security: 0, validation: 3, autonomy: 0, intimacy: 1 },
        },
        {
          text: 'Feeling emotionally obligated all the time',
          weights: { security: 0, validation: 0, autonomy: 3, intimacy: 0 },
        },
        {
          text: 'Connections that stay pleasant but never truly deep',
          weights: { security: 0, validation: 0, autonomy: 0, intimacy: 3 },
        },
      ],
    },
  ],
};

export default quiz;
