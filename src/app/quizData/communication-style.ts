// Communication Style Quiz
// Result categories: direct | passive | avoidant | aggressive

import { QuizMeta } from './attachment-style';

const quiz: QuizMeta = {
  title: 'Communication Style',
  description:
    'How you express needs, handle tension, respond during emotional moments, and navigate difficult conversations in relationships.',
  tag: 'Self-awareness',
  color: 'text-orange-400',
  noOfQuestion: 10,

  resultCategories: {
    direct: {
      label: 'Direct Communicator',
      emoji: '🎯',
      description:
        'You value clarity, honesty, and emotional transparency. You tend to say what you mean without playing games, and you’re usually willing to address problems before they grow. Even when conversations are uncomfortable, you’d rather communicate openly than leave things unresolved.',
      advice:
        'Your communication style creates emotional safety because people usually know where they stand with you. The next level of growth is balancing honesty with softness — not everyone processes emotions as quickly or directly as you do. Continue practicing active listening, emotional patience, and curiosity during conflict instead of focusing only on resolution.',
    },

    passive: {
      label: 'Passive Communicator',
      emoji: '🌫️',
      description:
        'You often prioritise harmony over honesty. You tend to minimise your own needs, avoid disappointing others, and hope people notice what you’re feeling without you having to explicitly say it. You may struggle with guilt around asking for too much, which can lead to resentment quietly building underneath the surface.',
      advice:
        'Your empathy and emotional sensitivity are strengths — but relationships become healthier when your needs exist in the room too. Practice expressing discomfort earlier instead of waiting until emotions overflow internally. Start small: ask for reassurance, state preferences directly, or say when something hurt you without apologising for having feelings.',
    },

    avoidant: {
      label: 'Avoidant Communicator',
      emoji: '🚪',
      description:
        'When conversations become emotionally intense, your instinct is often to withdraw, shut down, or process things privately. You may value independence highly and feel overwhelmed when conflict becomes emotionally demanding. Silence can feel safer than vulnerability, even if it unintentionally leaves others confused or disconnected.',
      advice:
        'Needing space is valid — but disappearing emotionally can create distance that becomes difficult to repair. You do not need to force immediate vulnerability, but small moments of communication matter deeply. Even saying “I need time, but I care about this conversation” can help relationships feel safer and more connected without sacrificing your need for emotional regulation.',
    },

    aggressive: {
      label: 'Emotionally Reactive Communicator',
      emoji: '⚡',
      description:
        'You communicate with intensity and emotional immediacy. When something matters to you, you feel it strongly — and those emotions often come out quickly in the moment. You may struggle holding back frustration, become reactive during conflict, or speak before fully processing what you feel underneath the anger.',
      advice:
        'Your emotional honesty is not the problem — your timing and regulation are the challenge. Strong emotions usually contain important truths, but they land differently when delivered in survival mode. Slowing down before responding, naming the deeper feeling underneath the anger, and learning to tolerate emotional discomfort without reacting instantly will dramatically improve your relationships.',
    },
  },

  questions: [
     {
      q: 'When you\'re upset with a partner, you tend to…',
      options: [
        { text: 'Bring it up directly and calmly when ready', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Drop hints and hope they notice', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Go quiet and wait for it to pass', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Bring it up immediately, sometimes sharply', weights: { direct: 1, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'During an argument, you\'re most likely to…',
      options: [
        { text: 'Stay focused on finding a fair solution', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Agree just to end the tension', weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 } },
        { text: 'Need a break to collect your thoughts', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Escalate emotionally and say more than intended', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'How do you typically express a need to your partner?',
      options: [
        { text: 'State it clearly and without apology', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Hint at it repeatedly until they pick up on it', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Wait until it becomes urgent or unavoidable', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Bring it up forcefully when you\'ve hit a limit', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'After a disagreement, you usually…',
      options: [
        { text: 'Want to resolve it quickly and reconnect', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 1 } },
        { text: 'Pretend it\'s fine even if it isn\'t', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Need significant alone time before reconnecting', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Feel frustrated if the other person doesn\'t come around', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'Someone criticises something you did. You…',
      options: [
        { text: 'Consider it, respond calmly, and share your perspective', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Apologise immediately even if you\'re not sure you were wrong', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Go quiet and process it alone for a while', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Defend yourself and push back hard', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'If a partner does something that really bothers you repeatedly, you…',
      options: [
        { text: 'Bring it up clearly: "This is bothering me and here\'s why"', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Drop bigger hints but still don\'t say it outright', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Withdraw emotionally without explaining why', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Eventually explode — the patience only lasts so long', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'When you need something emotionally from a partner, you…',
      options: [
        { text: 'Ask for it directly: "I need you to listen right now"', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Hope they notice and offer without you having to say anything', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Tell yourself you can handle it alone', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Express your needs intensely, which can overwhelm them', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'How comfortable are you with silence after conflict?',
      options: [
        { text: 'Uncomfortable — you\'d rather talk it through', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 1 } },
        { text: 'Relieved — less conflict feels safer', weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 } },
        { text: 'Very comfortable — you need it to process', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Frustrated — silence means nothing is getting resolved', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'When a conversation gets emotional, you…',
      options: [
        { text: 'Stay in it and work through the emotion together', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 1 } },
        { text: 'Downplay your feelings to keep the peace', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Shut down and need space to regulate', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Feel your emotions intensify as the conversation heats up', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'You find out your partner misunderstood something you said. You…',
      options: [
        { text: 'Calmly clarify what you actually meant', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Let it go and avoid correcting them', weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 } },
        { text: 'Go quiet — explaining feels like too much effort right now', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Get frustrated that they got it wrong and say so', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'Setting boundaries with a partner feels…',
      options: [
        { text: 'Natural — it\'s just healthy communication', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Scary — you worry it\'ll upset or push them away', weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 } },
        { text: 'Unnecessary — you\'d rather just accommodate and avoid the talk', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Something you enforce firmly, sometimes too firmly', weights: { direct: 1, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'When you\'re overwhelmed, you communicate by…',
      options: [
        { text: 'Saying "I\'m overwhelmed and need X right now"', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Going quiet and hoping someone checks on you', weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 } },
        { text: 'Pulling away entirely until you feel okay again', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Snapping or being short with the people around you', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'If a partner is clearly upset but says "I\'m fine", you…',
      options: [
        { text: 'Gently probe — "I can tell something\'s off, I\'m here"', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Take it at face value — you don\'t want to push', weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 } },
        { text: 'Give them space — they\'ll come to you when ready', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Press harder — you need to know what\'s really going on', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'The thing you\'re most likely to regret after a fight is…',
      options: [
        { text: 'Nothing major — you say what you mean and mean what you say', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Not saying what was really bothering you', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Shutting down completely instead of engaging', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Something you said in the heat of the moment', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'How often do you say exactly what you mean in relationships?',
      options: [
        { text: 'Almost always — clarity matters to me', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Rarely — I soften or omit what I really feel', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Not often — I process privately and don\'t always share', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Yes — sometimes too much, too fast', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'In a new relationship, you establish expectations by…',
      options: [
        { text: 'Having an early, honest conversation about what you both want', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Going with the flow and hoping things align', weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 } },
        { text: 'Watching and waiting — you reveal yourself slowly', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Making your preferences clear early and firmly', weights: { direct: 1, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'Apologising after a conflict feels…',
      options: [
        { text: 'Easy when you were wrong — you own it and move on', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Something you do even when you weren\'t sure you were wrong', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Difficult — the conversation itself feels too exposing', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Hard — especially if you still feel justified', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'When your partner brings up something that hurt them, you…',
      options: [
        { text: 'Listen openly and try to understand their experience', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Feel guilty immediately and over-apologise', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Shut down — feedback feels overwhelming', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Get defensive and explain your intentions before listening', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'How do you handle long-term unresolved tension?',
      options: [
        { text: 'Address it directly before it grows into something bigger', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Let it build silently and hope it fades', weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 } },
        { text: 'Withdraw emotionally without explaining the distance', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Let it build until one moment blows everything open', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'The thing you most wish you could change about how you communicate is…',
      options: [
        { text: 'Honestly, not much — I feel good about how I express myself', weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 } },
        { text: 'Being able to speak up without feeling guilty', weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 } },
        { text: 'Being able to stay present instead of shutting down', weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 } },
        { text: 'Pausing before reacting when I\'m emotional', weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 } },
      ],
    },
    {
      q: 'When something is bothering you in a relationship, what usually happens first?',
      options: [
        {
          text: 'You bring it up once you’ve gathered your thoughts',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'You hope they notice something feels off without you saying it',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'You withdraw a little and process it alone',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'You react immediately because holding it in feels impossible',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'During emotionally difficult conversations, you usually…',
      options: [
        {
          text: 'Stay engaged even if the conversation is uncomfortable',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 1 },
        },
        {
          text: 'Try to keep the peace, even if your feelings stay unspoken',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Start feeling emotionally overwhelmed and shut down',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Feel your emotions escalating as the conversation continues',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'If your partner says something that hurts your feelings, you usually…',
      options: [
        {
          text: 'Tell them directly and explain why it affected you',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Say “it’s fine” even when it really isn’t',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Pull away emotionally instead of talking about it',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'React strongly in the moment and say exactly how upset you are',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'When you need emotional support, you usually…',
      options: [
        {
          text: 'Ask clearly for what you need',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Wish they would notice without you having to ask',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Tell yourself you should handle it alone',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Express it intensely because the emotions build up fast',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'After an argument, your instinct is usually to…',
      options: [
        {
          text: 'Reconnect and talk things through properly',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 1 },
        },
        {
          text: 'Pretend everything is okay to avoid more tension',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Take space and avoid talking for a while',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Stay emotionally heated long after the fight ends',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'How do you usually handle misunderstandings?',
      options: [
        {
          text: 'Clarify calmly and make sure both people understand each other',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Let it go because correcting people feels uncomfortable',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Avoid explaining because it feels emotionally draining',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Get frustrated that they misunderstood you in the first place',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'When tension builds over time in a relationship, you tend to…',
      options: [
        {
          text: 'Address it before it becomes a bigger issue',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Keep suppressing it until resentment quietly grows',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Distance yourself emotionally without explaining why',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Eventually explode after bottling it up too long',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'How comfortable are you expressing disappointment?',
      options: [
        {
          text: 'Comfortable — disappointment is part of honest communication',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Uncomfortable — you worry about upsetting people',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'You usually keep it to yourself',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'It comes out strongly once you hit your limit',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'When someone confronts you emotionally, you usually…',
      options: [
        {
          text: 'Listen first before responding',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Apologise quickly to reduce the tension',
          weights: { direct: 0, passive: 3, avoidant: 0, aggressive: 0 },
        },
        {
          text: 'Feel flooded and struggle to stay present',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Become defensive and react immediately',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },

    {
      q: 'The communication habit you struggle with most is…',
      options: [
        {
          text: 'Sometimes expecting others to communicate as directly as you do',
          weights: { direct: 3, passive: 0, avoidant: 0, aggressive: 1 },
        },
        {
          text: 'Avoiding difficult conversations for too long',
          weights: { direct: 0, passive: 3, avoidant: 1, aggressive: 0 },
        },
        {
          text: 'Shutting down when emotions become intense',
          weights: { direct: 0, passive: 0, avoidant: 3, aggressive: 0 },
        },
        {
          text: 'Reacting before fully processing your emotions',
          weights: { direct: 0, passive: 0, avoidant: 0, aggressive: 3 },
        },
      ],
    },
  ],
};

export default quiz;