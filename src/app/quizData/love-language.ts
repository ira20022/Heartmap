// Love Language Quiz
// Result categories: words | touch | quality_time | acts | gifts

import { QuizMeta } from './attachment-style';

const quiz: QuizMeta = {
  title: 'Love Language',
  description: 'Words, touch, quality time, acts of service, or gifts — how you give and receive love.',
  tag: 'Self-awareness',
  color: 'text-rose-400',
  noOfQuestion: 10,
  resultCategories: {
    words: {
      label: 'Words of Affirmation',
      emoji: '💬',
      description: 'You feel most loved when love is spoken. Compliments, declarations, and verbal encouragement fill your emotional tank like nothing else.',
      advice: 'Tell partners early that verbal expression matters to you. People who show love through action may need prompting — and that\'s okay to ask for.',
    },
    touch: {
      label: 'Physical Touch',
      emoji: '🤝',
      description: 'For you, love lives in the body. A hand on your back, a long hug, physical presence — these communicate care more powerfully than any words.',
      advice: 'Physical disconnection can feel like emotional rejection to you. Help partners understand this so small gestures aren\'t overlooked.',
    },
    quality_time: {
      label: 'Quality Time',
      emoji: '⏳',
      description: 'Undivided attention is your love language. Being truly present — phones away, eyes meeting — tells you that you matter more than anything else.',
      advice: 'Be specific about what "quality time" looks like for you. Sitting together but distracted won\'t cut it — share that context openly.',
    },
    acts: {
      label: 'Acts of Service',
      emoji: '🛠️',
      description: 'When someone does something for you — without being asked — it lands as deep love. Actions speak louder than anything for you.',
      advice: 'Help partners understand that doing, not just being, is how you experience care. "What can I do?" is a question worth teaching them to ask.',
    },
    gifts: {
      label: 'Receiving Gifts',
      emoji: '🎁',
      description: 'Thoughtful tokens — not the price tag, but the meaning — tell you someone was thinking of you. It\'s about being remembered.',
      advice: 'Be open about this language, since it\'s often misunderstood as materialism. The gesture is what moves you — not the value.',
    },
  },
  questions: [
    {
      q: 'You feel most loved when your partner…',
      options: [
        { text: 'Tells you exactly what they love about you', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Reaches over and squeezes your hand', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Puts their phone down and focuses entirely on you', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Takes care of something before you even ask', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'When you want to show someone you care, you typically…',
      options: [
        { text: 'Write them a heartfelt message or compliment', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Pull them into a long, warm hug', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Plan something special for just the two of you', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Handle something they\'ve been stressed about', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'Which feels most meaningful to receive?',
      options: [
        { text: 'A sincere, unprompted compliment', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'A spontaneous kiss on the forehead', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'An uninterrupted evening together', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Breakfast made for you before you wake', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'What bothers you most in a relationship?',
      options: [
        { text: 'Not hearing "I love you" or affirmations enough', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Lack of physical affection', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Never truly spending quality time together', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Your partner not stepping up to help', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'You feel deeply seen when a partner…',
      options: [
        { text: 'Remembers something you said and brings it back up', weights: { words: 2, touch: 0, quality_time: 1, acts: 0, gifts: 2 } },
        { text: 'Comes up behind you and holds you', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Prioritises time with you over other things', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Does the thing you dread doing, so you don\'t have to', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'On a rough day, the thing that helps most is…',
      options: [
        { text: 'Your partner saying "I\'m proud of you"', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'A long, quiet hug that says everything', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Your partner sitting with you, fully present', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Them sorting out something that was stressing you', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'A surprise that would genuinely delight you is…',
      options: [
        { text: 'A voice note just to say they\'re thinking of you', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 1 } },
        { text: 'Them showing up in person, unannounced', weights: { words: 0, touch: 2, quality_time: 2, acts: 0, gifts: 0 } },
        { text: 'An entire day planned just for the two of you', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'A small, very thoughtful gift they picked just for you', weights: { words: 0, touch: 0, quality_time: 0, acts: 0, gifts: 3 } },
      ],
    },
    {
      q: 'What does a "perfect date" look like to you?',
      options: [
        { text: 'Deep conversation where you really open up', weights: { words: 3, touch: 0, quality_time: 1, acts: 0, gifts: 0 } },
        { text: 'Lots of physical closeness — cuddling, dancing, touching', weights: { words: 0, touch: 3, quality_time: 1, acts: 0, gifts: 0 } },
        { text: 'No distractions — just the two of you, fully present', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Somewhere they planned and handled entirely for you', weights: { words: 0, touch: 0, quality_time: 1, acts: 2, gifts: 1 } },
      ],
    },
    {
      q: 'If your partner forgets an important date, you feel…',
      options: [
        { text: 'Hurt that they didn\'t acknowledge it with words', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 1 } },
        { text: 'Disconnected and craving physical reassurance', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Like you weren\'t a priority that day', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Like they didn\'t care enough to do something for it', weights: { words: 0, touch: 0, quality_time: 0, acts: 2, gifts: 2 } },
      ],
    },
    {
      q: 'The most romantic thing someone can do daily is…',
      options: [
        { text: 'Leave you a sweet note or voice message', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 1 } },
        { text: 'Hold your hand while you walk together', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Give you their full, undivided attention', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Handle something practical to make your day easier', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'You\'d feel most appreciated if your partner said…',
      options: [
        { text: '"I was telling someone today how incredible you are"', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: '"Come here, I just want to hold you"', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: '"Let\'s turn off everything and just spend time together"', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: '"I sorted that thing you\'ve been worrying about"', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'When you imagine feeling truly loved, the image is…',
      options: [
        { text: 'A long conversation where someone really listens', weights: { words: 2, touch: 0, quality_time: 2, acts: 0, gifts: 0 } },
        { text: 'Falling asleep tangled together', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'A slow Sunday morning with nowhere to be', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Someone doing something kind before you even asked', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'How do you most naturally comfort someone you love?',
      options: [
        { text: 'Tell them everything you love and admire about them', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Hold them close until they feel better', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Drop everything to just be there with them', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Cook for them, run an errand, fix something', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'Which gift would move you the most?',
      options: [
        { text: 'A letter full of exactly what they love about you', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 1 } },
        { text: 'A massage or spa experience you share together', weights: { words: 0, touch: 3, quality_time: 1, acts: 0, gifts: 0 } },
        { text: 'A completely planned trip — they handled everything', weights: { words: 0, touch: 0, quality_time: 2, acts: 1, gifts: 1 } },
        { text: 'A small object tied to something meaningful you mentioned', weights: { words: 0, touch: 0, quality_time: 0, acts: 0, gifts: 3 } },
      ],
    },
    {
      q: 'When you give a gift, you care most about…',
      options: [
        { text: 'Writing the card — that\'s where the real love is', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 1 } },
        { text: 'Being there to give it in person', weights: { words: 0, touch: 2, quality_time: 2, acts: 0, gifts: 0 } },
        { text: 'The experience it creates together', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'That it solves a real problem or need they have', weights: { words: 0, touch: 0, quality_time: 0, acts: 2, gifts: 2 } },
      ],
    },
    {
      q: 'Distance in a relationship feels hardest because…',
      options: [
        { text: 'You can\'t hear their voice and feel affirmed', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'You miss the physical closeness deeply', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Real quality time is impossible through a screen', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'You can\'t do things for each other the same way', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'Your love tank runs empty when…',
      options: [
        { text: 'You go days without a real, affirming conversation', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'There\'s been no physical affection in a while', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'You\'ve spent time together but never really connected', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'You feel like you\'re doing everything alone', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'Which action from a new partner would signal "this one is different"?',
      options: [
        { text: 'A long, thoughtful message about how they feel', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 1 } },
        { text: 'Instinctively reaching for your hand', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Suggesting a full day together with their phone away', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Doing something helpful without being asked once', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'If love were a soundtrack, yours would be…',
      options: [
        { text: 'A slow song with lyrics that say exactly everything', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Something you sway to, pressed close together', weights: { words: 0, touch: 3, quality_time: 1, acts: 0, gifts: 0 } },
        { text: 'A long instrumental — no distractions, just presence', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Quiet background music while you do life together', weights: { words: 0, touch: 0, quality_time: 1, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'What do you wish partners understood sooner about loving you?',
      options: [
        { text: 'Words mean more to me than almost anything', weights: { words: 3, touch: 0, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Don\'t underestimate how much physical closeness matters', weights: { words: 0, touch: 3, quality_time: 0, acts: 0, gifts: 0 } },
        { text: 'Your time is the most precious thing you can give', weights: { words: 0, touch: 0, quality_time: 3, acts: 0, gifts: 0 } },
        { text: 'Doing things for me is how I feel truly cared for', weights: { words: 0, touch: 0, quality_time: 0, acts: 3, gifts: 0 } },
      ],
    },
    {
      q: 'If something feels off over text with your partner, you usually…',
      options: [
        {
          text: 'Ask directly what’s going on instead of assuming',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Overthink the tone but avoid bringing it up',
          weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 },
        },
        {
          text: 'Pull back and wait for them to reach out first',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Double text or react quickly because the uncertainty feels intense',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'How long does it usually take you to open up emotionally in relationships?',
      options: [
        {
          text: 'Not long — I’m comfortable being emotionally honest',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'I open up slowly because I worry about being “too much”',
          weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 },
        },
        {
          text: 'A long time — vulnerability feels unsafe until trust is deeply earned',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Very quickly — I tend to express emotions intensely early on',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'When you feel insecure or uncertain in a relationship, you usually…',
      options: [
        {
          text: 'Talk openly about what you’re feeling',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Seek reassurance indirectly without fully admitting you need it',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Distance yourself emotionally to avoid feeling dependent',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Need immediate reassurance or clarity to calm your mind',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'When someone sets a boundary with you, your first instinct is to…',
      options: [
        {
          text: 'Respect it and appreciate the honesty',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Worry you may have upset them somehow',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Pull back emotionally and give them lots of space',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Feel rejected or frustrated in the moment',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'After a conflict, what matters most to you emotionally?',
      options: [
        {
          text: 'Mutual understanding and genuine resolution',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Restoring peace as quickly as possible',
          weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 },
        },
        {
          text: 'Having enough space to emotionally recover first',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Feeling emotionally heard and validated immediately',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'What feels hardest about difficult conversations for you?',
      options: [
        {
          text: 'Making sure both people feel understood',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'The possibility of disappointing or upsetting someone',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Feeling emotionally exposed or trapped in the conversation',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Controlling your emotions once they become intense',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'When your partner needs reassurance from you, you usually…',
      options: [
        {
          text: 'Offer reassurance openly and talk things through',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Try to comfort them, even if you neglect your own feelings',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Feel unsure how to respond emotionally and withdraw a little',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Become frustrated if the reassurance never seems enough',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'When you realise you hurt someone unintentionally, you usually…',
      options: [
        {
          text: 'Acknowledge it directly and try to repair the situation',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Feel deeply guilty and over-apologise',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Need time alone before addressing it emotionally',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Defend your intentions before fully hearing their feelings',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'When communication feels emotionally intense, your biggest instinct is to…',
      options: [
        {
          text: 'Stay grounded and work through it together',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Keep things calm, even if your real feelings stay hidden',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Escape the conversation and regulate alone',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Push harder to resolve things immediately',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'Which statement feels most true in your relationships?',
      options: [
        {
          text: 'Clear communication prevents most problems',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'I often prioritise harmony over honesty',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'I need space before I can fully process emotions',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Strong emotions feel impossible to hold in',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },
  ],
};

export default quiz;
