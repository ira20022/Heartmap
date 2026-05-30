export type AttachmentCategory =
  | 'secure'
  | 'anxious'
  | 'avoidant'
  | 'disorganized';

export interface QuizOption {
  text: string;
  weights: Record<string, number>;
}

export interface QuizQuestion {
  q: string;
  options: QuizOption[];
}

export interface QuizMeta {
  title: string;
  description: string;
  tag: string;
  color: string;
  noOfQuestion: number;
  resultCategories: Record<
    string,
    {
      label: string;
      emoji: string;
      description: string;
      advice: string;
    }
  >;
  questions: QuizQuestion[];
}

const quiz: QuizMeta = {
  title: 'Attachment Style',
  description:
    'Discover how you emotionally connect, trust, react to closeness, and experience love.',
  tag: 'Self-awareness',
  color: 'text-rose-400',
  noOfQuestion: 10,
  resultCategories: {
    secure: {
      label: 'Secure',
      emoji: '🌿',
      description:
        'You likely experience relationships as emotionally safe, balanced, and stable. You can handle intimacy without losing yourself, communicate openly, and usually don’t panic when temporary distance or conflict appears. You trust both yourself and the people you care about. While you still experience insecurity sometimes, it usually doesn’t control your behaviour or self-worth.',

      advice:
        'Your ability to create emotional safety is one of your biggest strengths. Continue nurturing honest communication, healthy boundaries, and emotional consistency. Be mindful not to become the “emotional fixer” in relationships where the effort is one-sided. You deserve the same emotional maturity and reliability that you offer others. Relationships thrive not because conflict never happens, but because repair feels safe — and you naturally help create that safety.',
    },

    anxious: {
      label: 'Anxious',
      emoji: '🌊',
      description:
        'You likely crave deep emotional closeness and reassurance, but relationships can sometimes feel emotionally consuming or unstable. You may become highly sensitive to changes in communication, affection, tone, or availability. Small shifts can feel much bigger internally, leading to overthinking, reassurance-seeking, emotional dependency, or fear of abandonment. Your nervous system often stays alert for signs that love might disappear.',

      advice:
        'Your emotional depth and capacity for love are real strengths — the goal is not to become less emotional, but more emotionally grounded. Practice slowing down before reacting to fear or uncertainty. Learn to separate actual relationship problems from anxiety-driven assumptions. Building emotional safety inside yourself changes everything. The more you develop self-soothing, emotional regulation, independent routines, and secure communication habits, the more stable your relationships will feel. Love becomes healthier when you no longer need constant proof that it still exists.',
    },

    avoidant: {
      label: 'Avoidant',
      emoji: '🏔️',
      description:
        'You likely value independence, self-sufficiency, and emotional control very highly. Emotional closeness may sometimes feel overwhelming, draining, or restrictive — especially when relationships become deeply vulnerable or emotionally dependent. You may instinctively create distance through withdrawal, emotional shutdown, distraction, or needing excessive space. Even when you genuinely care about someone, vulnerability can feel uncomfortable because depending on others has not always felt emotionally safe.',

      advice:
        'Your independence probably developed as protection, but emotional distance can quietly become loneliness over time. Growth for you is not about losing freedom — it is about learning that intimacy and autonomy can coexist. Practice expressing your feelings earlier instead of disappearing emotionally once overwhelmed. Let trusted people support you in small ways without viewing it as weakness. Emotional closeness becomes safer through repeated experiences of honesty, reliability, and vulnerability that doesn’t lead to loss of self.',
    },

    disorganized: {
      label: 'Disorganized',
      emoji: '🌪️',
      description:
        'You likely experience relationships as emotionally conflicting — deeply desired, but also emotionally unsafe. Part of you wants closeness, intimacy, and reassurance, while another part fears betrayal, rejection, abandonment, or emotional chaos. This can create a push-pull dynamic where you alternate between intense closeness and emotional withdrawal. Relationships may feel emotionally overwhelming because love and fear became connected somewhere along the way.',

      advice:
        'Healing here is less about “fixing yourself” and more about teaching your nervous system that closeness does not automatically equal danger. Consistency, therapy, emotional regulation work, safe communication patterns, and stable relationships can gradually reshape how intimacy feels. Learn to pause before reacting from fear, panic, shutdown, or emotional overwhelm. The goal is not perfection — it is learning how to stay emotionally present without needing to cling, flee, test, or emotionally disappear. Secure attachment is something people can grow into over time.',
    },
  },

  questions: [
    {
      q: 'When someone you like doesn\'t reply for a day, you usually…',
      options: [
        { text: 'Give them space — they\'re probably busy', weights: { secure: 3, anxious: 0, avoidant: 1, disorganized: 0 } },
        { text: 'Send a casual follow-up after a day or two', weights: { secure: 2, anxious: 1, avoidant: 0, disorganized: 1 } },
        { text: 'Replay every conversation looking for clues', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Pull back and protect yourself emotionally', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 } },
      ],
    },
    {
      q: 'In a relationship, you feel most secure when…',
      options: [
        { text: 'You have consistent, warm communication', weights: { secure: 3, anxious: 1, avoidant: 0, disorganized: 0 } },
        { text: 'You have space and independence', weights: { secure: 1, anxious: 0, avoidant: 3, disorganized: 0 } },
        { text: 'You feel emotionally validated frequently', weights: { secure: 1, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Things are calm and predictable', weights: { secure: 2, anxious: 0, avoidant: 1, disorganized: 3 } },
      ],
    },
    {
      q: 'When conflict arises, your first instinct is to…',
      options: [
        { text: 'Talk it through immediately and calmly', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'Need time alone before discussing anything', weights: { secure: 1, anxious: 0, avoidant: 3, disorganized: 1 } },
        { text: 'Worry the relationship is in danger', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Shut down and go completely quiet', weights: { secure: 0, anxious: 0, avoidant: 1, disorganized: 3 } },
      ],
    },
    {
      q: 'How comfortable are you depending on a partner emotionally?',
      options: [
        { text: 'Very comfortable — it feels natural', weights: { secure: 3, anxious: 1, avoidant: 0, disorganized: 0 } },
        { text: 'Somewhat — I prefer being self-sufficient', weights: { secure: 1, anxious: 0, avoidant: 3, disorganized: 0 } },
        { text: 'I want to but it feels scary', weights: { secure: 0, anxious: 2, avoidant: 0, disorganized: 3 } },
        { text: 'I avoid it — I don\'t want to need anyone', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 } },
      ],
    },
    {
      q: 'If a partner says "we need to talk", your gut reaction is…',
      options: [
        { text: 'Curious — you wonder what\'s on their mind', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'Mild dread, but you stay composed', weights: { secure: 2, anxious: 1, avoidant: 1, disorganized: 0 } },
        { text: 'Immediate anxiety — your mind races', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'You brace yourself and go cold inside', weights: { secure: 0, anxious: 0, avoidant: 2, disorganized: 3 } },
      ],
    },
    {
      q: 'How do you typically respond to a partner expressing love?',
      options: [
        { text: 'Warmly and openly — it feels good', weights: { secure: 3, anxious: 1, avoidant: 0, disorganized: 0 } },
        { text: 'With relief — you needed to hear it', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Slightly uncomfortable — it feels like pressure', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 } },
        { text: 'Touched but guarded — you wait to see if it lasts', weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 } },
      ],
    },
    {
      q: 'When you\'re stressed, what do you do with your relationship?',
      options: [
        { text: 'Lean into it — your partner is a source of support', weights: { secure: 3, anxious: 1, avoidant: 0, disorganized: 0 } },
        { text: 'Seek extra reassurance that things are okay', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Pull away — you don\'t want to be a burden', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 } },
        { text: 'Oscillate between clinging and withdrawing', weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 } },
      ],
    },
    {
      q: 'What does "closeness" in a relationship feel like to you?',
      options: [
        { text: 'Safe and energising', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'Something you constantly seek more of', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 0 } },
        { text: 'Suffocating if it\'s too much', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 } },
        { text: 'Simultaneously comforting and frightening', weights: { secure: 0, anxious: 0, avoidant: 0, disorganized: 3 } },
      ],
    },
    {
      q: 'If a partner needs more space than usual, you…',
      options: [
        { text: 'Respect it without a second thought', weights: { secure: 3, anxious: 0, avoidant: 1, disorganized: 0 } },
        { text: 'Feel anxious and wonder if you did something wrong', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Feel relieved — you could use some space too', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 0 } },
        { text: 'Feel hurt but pretend you\'re totally fine', weights: { secure: 0, anxious: 1, avoidant: 0, disorganized: 3 } },
      ],
    },
    {
      q: 'After a fight, you tend to…',
      options: [
        { text: 'Want to reconnect and repair as soon as possible', weights: { secure: 3, anxious: 1, avoidant: 0, disorganized: 0 } },
        { text: 'Need reassurance the relationship is still okay', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Need significant alone time before reconnecting', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 } },
        { text: 'Feel numb and unsure how to come back', weights: { secure: 0, anxious: 0, avoidant: 1, disorganized: 3 } },
      ],
    },
    {
      q: 'When things are going really well, you feel…',
      options: [
        { text: 'Content and grateful', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'A quiet fear that it\'s too good to last', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 2 } },
        { text: 'Slightly bored or restless', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 0 } },
        { text: 'Waiting for something to go wrong', weights: { secure: 0, anxious: 1, avoidant: 0, disorganized: 3 } },
      ],
    },
    {
      q: 'How do you handle it when a partner is emotionally unavailable?',
      options: [
        { text: 'Talk about it directly and give them time', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'Try harder to get them to open up', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Appreciate the distance — it feels easier', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 0 } },
        { text: 'Feel trapped between wanting more and pulling away', weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 } },
      ],
    },
    {
      q: 'In long-term relationships, you most often struggle with…',
      options: [
        { text: 'Honestly, not much — I feel settled', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'Constant reassurance-seeking', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Keeping enough emotional distance', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 0 } },
        { text: 'Trusting that it\'s real and not going to implode', weights: { secure: 0, anxious: 1, avoidant: 0, disorganized: 3 } },
      ],
    },
    {
      q: 'How do you feel about asking for what you need in a relationship?',
      options: [
        { text: 'Easy — I communicate my needs clearly', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'Hard — I\'m scared they\'ll think I\'m too much', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Hard — I barely know what I need', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 } },
        { text: 'Terrifying — vulnerability feels like a trap', weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 } },
      ],
    },
    {
      q: 'How do you feel about the idea of a partner seeing the "real you"?',
      options: [
        { text: 'Excited — that\'s the goal', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'Hopeful but anxious they might not like what they see', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Unnecessary — you prefer to keep some things private', weights: { secure: 1, anxious: 0, avoidant: 3, disorganized: 0 } },
        { text: 'Overwhelming — you\'re not sure what that even looks like', weights: { secure: 0, anxious: 0, avoidant: 0, disorganized: 3 } },
      ],
    },
    {
      q: 'When you imagine a happy relationship, you see…',
      options: [
        { text: 'Two secure people growing together', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'Someone who never makes you doubt their love', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Freedom to be yourself without losing yourself', weights: { secure: 1, anxious: 0, avoidant: 3, disorganized: 0 } },
        { text: 'Honestly, something that still feels out of reach', weights: { secure: 0, anxious: 0, avoidant: 0, disorganized: 3 } },
      ],
    },
    {
      q: 'Your most honest feeling about love right now is…',
      options: [
        { text: 'It\'s worth pursuing and I trust the process', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'It\'s what I want most, and that terrifies me', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'It\'s nice but I do fine without it', weights: { secure: 1, anxious: 0, avoidant: 3, disorganized: 0 } },
        { text: 'It\'s the thing that has hurt me the most', weights: { secure: 0, anxious: 0, avoidant: 0, disorganized: 3 } },
      ],
    },
    {
      q: 'When a new relationship starts getting serious, you…',
      options: [
        { text: 'Lean in — this is what you wanted', weights: { secure: 3, anxious: 1, avoidant: 0, disorganized: 0 } },
        { text: 'Feel excited but need constant affirmation', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Start to feel the urge to pull away', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 } },
        { text: 'Freeze up — the closeness suddenly feels dangerous', weights: { secure: 0, anxious: 0, avoidant: 0, disorganized: 3 } },
      ],
    },
    {
      q: 'How do you typically recover after a breakup?',
      options: [
        { text: 'Grieve it, learn from it, move forward when ready', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'Struggle intensely and seek connection immediately', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Bounce back quickly — independence comes naturally', weights: { secure: 1, anxious: 0, avoidant: 3, disorganized: 0 } },
        { text: 'Feel relief followed by deep, disorienting grief', weights: { secure: 0, anxious: 0, avoidant: 0, disorganized: 3 } },
      ],
    },
    {
      q: 'If you could change one thing about how you show up in love, it would be…',
      options: [
        { text: 'Honestly, I\'m mostly happy with how I show up', weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 } },
        { text: 'Worrying less about being abandoned', weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 } },
        { text: 'Being able to let people in more', weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 } },
        { text: 'Feeling safer — in myself and with others', weights: { secure: 0, anxious: 0, avoidant: 0, disorganized: 3 } },
      ],
    },
    {
      q: 'Someone you really like suddenly becomes less responsive for a couple of days. What happens internally for you?',
      options: [
        {
          text: 'You notice it, but assume they’re probably busy or distracted',
          weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'You start overthinking every interaction and wondering what changed',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'You emotionally detach a little to avoid getting too invested',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 },
        },
        {
          text: 'You feel both hurt and defensive, like you should pull away before they do',
          weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 },
        },
      ],
    },

    {
      q: 'When someone starts getting emotionally close to you, your natural reaction is usually…',
      options: [
        {
          text: 'You enjoy it and let things develop naturally',
          weights: { secure: 3, anxious: 1, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'You get attached quickly and hope they feel the same way',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'You instinctively slow things down or need more space',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 },
        },
        {
          text: 'Part of you wants closeness while another part feels unsafe',
          weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 },
        },
      ],
    },

    {
      q: 'After sending a vulnerable text, you usually…',
      options: [
        {
          text: 'Feel okay waiting for a response',
          weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'Keep checking your phone and replay what you said',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'Regret opening up and wish you had kept it to yourself',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 },
        },
        {
          text: 'Feel emotionally exposed and uncomfortable afterward',
          weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 },
        },
      ],
    },


    {
      q: 'If your partner says “we need to talk,” your first gut reaction is…',
      options: [
        {
          text: 'Curiosity about what’s going on',
          weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'A wave of anxiety that something is seriously wrong',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'Mental preparation to emotionally shut down a little',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 },
        },
        {
          text: 'Panic mixed with emotional numbness',
          weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 },
        },
      ],
    },

    {
      q: 'When your partner needs a lot of emotional reassurance, you usually…',
      options: [
        {
          text: 'Support them while keeping healthy boundaries',
          weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'Feel pressure to constantly prove your love',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'Feel emotionally drained or cornered',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 },
        },
        {
          text: 'Want to help but also feel emotionally overwhelmed',
          weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 },
        },
      ],
    },

    {
      q: 'How does emotional vulnerability usually feel to you?',
      options: [
        {
          text: 'Important and necessary for real closeness',
          weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'Necessary, but emotionally risky',
          weights: { secure: 1, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'Uncomfortable and difficult to sustain',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 },
        },
        {
          text: 'Something you deeply want but struggle to tolerate',
          weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 },
        },
      ],
    },

    {
      q: 'What feels hardest for you in relationships?',
      options: [
        {
          text: 'Relationships feel manageable overall, even with challenges',
          weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'Feeling secure when communication changes even slightly',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'Staying emotionally open without feeling trapped',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 },
        },
        {
          text: 'Trusting that closeness won’t eventually hurt you',
          weights: { secure: 0, anxious: 1, avoidant: 0, disorganized: 3 },
        },
      ],
    },

    {
      q: 'When things are going really well in a relationship, you usually feel…',
      options: [
        {
          text: 'Content, calm, and appreciative',
          weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'Scared that the happiness might suddenly disappear',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 2 },
        },
        {
          text: 'Restless or slightly suffocated by too much closeness',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 },
        },
        {
          text: 'Like you’re waiting for something to go wrong',
          weights: { secure: 0, anxious: 1, avoidant: 0, disorganized: 3 },
        },
      ],
    },

    {
      q: 'How do you usually recover after a breakup?',
      options: [
        {
          text: 'You grieve, reflect, and slowly move forward',
          weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'You struggle intensely and want connection immediately',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'You focus on independence and avoid sitting with emotions too long',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 },
        },
        {
          text: 'You feel relief at first, then deep emotional confusion later',
          weights: { secure: 0, anxious: 0, avoidant: 1, disorganized: 3 },
        },
      ],
    },

    {
      q: 'How comfortable are you depending on someone emotionally?',
      options: [
        {
          text: 'Quite comfortable — mutual support feels healthy',
          weights: { secure: 3, anxious: 1, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'You want it badly, but fear needing someone too much',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'You prefer handling things on your own',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 0 },
        },
        {
          text: 'You crave support but struggle trusting it emotionally',
          weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 },
        },
      ],
    },

    {
      q: 'When someone expresses love very openly, your reaction is usually…',
      options: [
        {
          text: 'Warmth and appreciation',
          weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'Relief because you needed reassurance',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'Discomfort because it feels emotionally intense',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 1 },
        },
        {
          text: 'You feel touched but guarded at the same time',
          weights: { secure: 0, anxious: 1, avoidant: 1, disorganized: 3 },
        },
      ],
    },

    {
      q: 'What feels most true about love to you right now?',
      options: [
        {
          text: 'Love works best when both people feel emotionally safe and honest',
          weights: { secure: 3, anxious: 0, avoidant: 0, disorganized: 0 },
        },
        {
          text: 'Love feels amazing, but it can disappear at any moment',
          weights: { secure: 0, anxious: 3, avoidant: 0, disorganized: 1 },
        },
        {
          text: 'Love is easier when nobody depends too heavily on each other',
          weights: { secure: 0, anxious: 0, avoidant: 3, disorganized: 0 },
        },
        {
          text: 'Love often feels emotionally confusing and difficult to trust',
          weights: { secure: 0, anxious: 1, avoidant: 0, disorganized: 3 },
        },
      ],
    },
  ],
};

export default quiz;
