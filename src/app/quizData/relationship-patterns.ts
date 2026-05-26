import { QuizMeta } from './attachment-style';
export type RelationshipPatternCategory =
  | 'chaser'
  | 'withdrawer'
  | 'pleaser'
  | 'controller'
  | 'rescuer'
  | 'repeater'
  | 'peacekeeper'
  | 'merger';

const relationshipPatterns: QuizMeta = {
  title: 'Relationship Patterns',
  description:
    'Chasing, withdrawing, people-pleasing — behaviours you repeat without realising it.',
  tag: 'Patterns',
  color: 'text-violet-400',

  resultCategories: {
    chaser: {
      label: 'The Chaser',
      emoji: '🌀',
      description:
        'You tend to pursue love intensely — often more than the situation warrants. When someone pulls away, your instinct is to close the gap rather than give space. You may over-invest early, over-communicate when anxious, and find yourself most attracted to partners who feel slightly out of reach. The pursuit itself feels activating, even addictive. When love comes easily and consistently, it can feel less compelling than it logically should. Intermittent affection tends to strengthen your attachment rather than weaken it.',
      advice:
        'The chase pattern often masks a deeper belief that love must be earned, not simply received. Notice when you are pursuing closeness out of genuine connection versus fear of losing someone. Practice tolerating the discomfort of uncertainty without immediately resolving it through pursuit. The right relationship will not require you to constantly close the emotional gap. Learning to receive steady love without the excitement of the chase is one of the most transformative shifts available to you.',
    },

    withdrawer: {
      label: 'The Withdrawer',
      emoji: '🌫️',
      description:
        'You tend to pull back when relationships get emotionally intense. This might look like needing more space than your partner, going quiet during conflict, feeling suffocated as closeness increases, or quietly checking out before things go wrong. You likely value independence deeply and may interpret emotional distance as self-protection. While you do care, vulnerability and emotional dependency tend to feel more threatening than appealing. You often process emotions privately and appear calm even when internally retreating.',
      advice:
        'Withdrawal often develops as a coping mechanism when emotional closeness felt unsafe at some point. Over time, it quietly pushes away the people you actually want to keep. Growth here looks like learning to stay emotionally present even when discomfort rises — not abandoning your need for space, but communicating it openly rather than disappearing. Intimacy becomes safer when you stop managing it through distance.',
    },

    pleaser: {
      label: 'The Pleaser',
      emoji: '🌸',
      description:
        'You tend to prioritise others\' needs, comfort, and approval above your own. You may say yes when you mean no, suppress frustration to avoid conflict, or define your worth by how well you are received by a partner. Relationships feel most comfortable when everyone is happy — which often means your own emotional needs go unspoken or minimised. People tend to like you quickly, but closeness can feel built on performance rather than authenticity. The fear underneath is that your real self — needs, limits, opinions — will be too much.',
      advice:
        'People-pleasing is rooted in the belief that your authentic self is not worth protecting. True intimacy cannot exist without honesty. Start small: voice a genuine preference, set a low-stakes boundary, let someone be mildly disappointed. The relationships that survive your honesty are the ones worth keeping. You deserve to be known, not just liked.',
    },

    controller: {
      label: 'The Controller',
      emoji: '⚖️',
      description:
        'You tend to manage relationships through structure, high standards, or emotional guardedness — often without fully realising it. This might look like keeping a close watch on dynamics, struggling with unpredictability, pushing for commitment early, or subtly steering how a relationship unfolds. You may study your partner\'s behaviour intensely, searching for patterns or hidden meaning, using understanding as a way to gain emotional control. Underneath this is often a genuine fear of being blindsided or hurt.',
      advice:
        'Control in relationships is usually anxiety in disguise. The tighter you hold, the more you signal to yourself that things are inherently unsafe — which makes genuine relaxation impossible. The antidote is not giving up your standards, but learning to tolerate ambiguity without managing it away. Letting a relationship breathe — and allowing your partner to show up without constant monitoring — is what creates the safety you are trying to engineer.',
    },

    rescuer: {
      label: 'The Rescuer',
      emoji: '🚑',
      description:
        'You feel most emotionally alive and purposeful when someone needs you. You are consistently attracted to partners who are emotionally unavailable, chaotic, or working through something significant — and you feel responsible for helping them heal. Equating being needed with being loved is at the core of this pattern. You can exhaust yourself caretaking while your own needs go quietly unmet. The deep belief driving this is: if I love them enough, they will eventually change.',
      advice:
        'Your capacity for empathy and care is real and valuable — the question is whether it is being used in service of genuine love or as a way to feel necessary. Someone can have a painful history and still be harmful to you. You cannot love someone into healing they have not chosen for themselves. The work is learning to be generous without abandoning your own needs, and distinguishing between a partner who is growing and one who is simply being carried.',
    },

    repeater: {
      label: 'The Repeater',
      emoji: '🔁',
      description:
        'Across different people and different circumstances, you tend to find yourself in the same emotional story. The partners change but the dynamic stays familiar — perhaps always the one who gives more, always the one who gets left, always the one managing someone else\'s instability. This is not coincidence. You are drawn to emotional familiarity over emotional safety, often recreating childhood attachment patterns in adult relationships. Chaos or emotional intensity can feel more real than genuine stability.',
      advice:
        'Repetition is the nervous system\'s way of trying to resolve something unfinished. Recognising the pattern is the first and most important step — because once you see it clearly, you can begin to choose differently. Stability might feel unfamiliar or even boring at first. That discomfort is not a sign something is wrong. It is a sign you are in new territory. That is exactly where growth lives.',
    },

    peacekeeper: {
      label: 'The Peacekeeper',
      emoji: '🕊️',
      description:
        'You prioritise emotional calm and harmony above almost everything else in a relationship — including honesty. You soften difficult truths, absorb tension to maintain the atmosphere, and suppress your own dissatisfaction rather than risk conflict. Confrontation feels genuinely threatening, not just uncomfortable. Over time, this means your needs stay invisible and resentment quietly accumulates beneath the smooth surface you maintain. The relationship looks stable from the outside while something important goes unexpressed inside.',
      advice:
        'Peacekeeping feels like love — but when it consistently requires you to betray your own experience, it becomes a form of self-erasure. Real relationships can hold honest conversations without collapsing. The calm you are protecting by staying silent is often more fragile than you think, and the truth you are suppressing is usually more survivable than you fear. Conflict managed well does not end connection — it deepens it.',
    },

    merger: {
      label: 'The Merger',
      emoji: '🌊',
      description:
        'You experience closeness by emotionally blending with a partner — absorbing their moods, mirroring their interests, and gradually losing the clear boundary between what is yours and what is theirs. Relationships feel most real when you are deeply intertwined, and distance — even healthy distance — can feel like disconnection or rejection. You have a deep capacity for emotional attunement, but individuality can feel threatening to the closeness you crave.',
      advice:
        'Your emotional attunement is a genuine gift. The shadow side is that when you lose yourself in a relationship, you eventually have nothing left to bring to it. Identity and intimacy are not in conflict — the most connected relationships are between two people who remain distinctly themselves. Practice maintaining your own interests, opinions, and rhythms alongside closeness. The relationship becomes richer, not more distant, when both people stay whole.',
    },
  },

  questions: [
    {
      q: 'When someone you like becomes less available, your first move is usually to…',
      options: [
        { text: 'Reach out more — you want to close the distance', weights: { chaser: 3, withdrawer: 0, pleaser: 1, controller: 1, rescuer: 0, repeater: 1, peacekeeper: 0, merger: 1 } },
        { text: 'Pull back and give them space, even if it\'s uncomfortable', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 1, merger: 0 } },
        { text: 'Wonder what you did wrong and quietly try to fix it', weights: { chaser: 1, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 2, merger: 0 } },
        { text: 'Try to figure out why the shift happened and address it directly', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'Do you find yourself more attracted to someone once they seem slightly less interested in you?',
      options: [
        { text: 'Yes — distance somehow makes them more compelling', weights: { chaser: 3, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 0, repeater: 2, peacekeeper: 0, merger: 0 } },
        { text: 'No — I prefer when there\'s already a clear mutual rhythm', weights: { chaser: 0, withdrawer: 1, pleaser: 0, controller: 2, rescuer: 0, repeater: 0, peacekeeper: 1, merger: 0 } },
        { text: 'Sometimes — when they pull back I assume I did something wrong', weights: { chaser: 1, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 0, repeater: 1, peacekeeper: 1, merger: 0 } },
        { text: 'Not usually — I\'d rather understand the shift than chase it', weights: { chaser: 0, withdrawer: 2, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'When you look back at your past relationships, the pattern you notice most is…',
      options: [
        { text: 'You gave more than you got, and kept giving anyway', weights: { chaser: 2, withdrawer: 0, pleaser: 2, controller: 0, rescuer: 2, repeater: 1, peacekeeper: 1, merger: 1 } },
        { text: 'You emotionally checked out before problems fully surfaced', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 0, rescuer: 0, repeater: 1, peacekeeper: 0, merger: 0 } },
        { text: 'You kept finding yourself in the same emotional story with different people', weights: { chaser: 1, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 1, repeater: 3, peacekeeper: 0, merger: 0 } },
        { text: 'You tried to manage outcomes more than you trusted the process', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'When conflict arises in a relationship, your first instinct is to…',
      options: [
        { text: 'Resolve it immediately — the tension is unbearable', weights: { chaser: 3, withdrawer: 0, pleaser: 1, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 1 } },
        { text: 'Go quiet and need time before you can engage', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Apologise or take blame to restore the harmony quickly', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 3, merger: 0 } },
        { text: 'Understand the root cause and establish what changes', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'How attracted are you to partners who seem emotionally wounded or still working through something?',
      options: [
        { text: 'Very — their depth and complexity feel magnetic', weights: { chaser: 1, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 3, repeater: 2, peacekeeper: 0, merger: 0 } },
        { text: 'Not particularly — I prefer someone emotionally stable', weights: { chaser: 0, withdrawer: 2, pleaser: 0, controller: 2, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Sometimes — it makes me feel needed in a meaningful way', weights: { chaser: 0, withdrawer: 0, pleaser: 1, controller: 0, rescuer: 3, repeater: 1, peacekeeper: 0, merger: 1 } },
        { text: 'I notice I keep ending up with them even when I don\'t plan to', weights: { chaser: 1, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 1, repeater: 3, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'When a relationship is going really smoothly, you…',
      options: [
        { text: 'Enjoy it but sometimes wonder when something will disrupt it', weights: { chaser: 2, withdrawer: 0, pleaser: 1, controller: 1, rescuer: 0, repeater: 2, peacekeeper: 1, merger: 0 } },
        { text: 'Start to feel restless or slightly less engaged', weights: { chaser: 1, withdrawer: 3, pleaser: 0, controller: 0, rescuer: 0, repeater: 2, peacekeeper: 0, merger: 0 } },
        { text: 'Work harder to maintain it — you\'re afraid of the other shoe dropping', weights: { chaser: 0, withdrawer: 0, pleaser: 2, controller: 2, rescuer: 1, repeater: 0, peacekeeper: 2, merger: 0 } },
        { text: 'Feel content and absorbed — you want even more closeness', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 3 } },
      ],
    },
    {
      q: 'When a partner is upset or struggling, your instinct is to…',
      options: [
        { text: 'Be there immediately — closeness feels urgent', weights: { chaser: 2, withdrawer: 0, pleaser: 1, controller: 0, rescuer: 2, repeater: 0, peacekeeper: 0, merger: 2 } },
        { text: 'Give them space and check in later when things settle', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Do everything you can to make them feel better, even at your own expense', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 3, repeater: 0, peacekeeper: 1, merger: 1 } },
        { text: 'Want to understand exactly what happened and fix it properly', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 1, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'How comfortable are you saying no to a partner when they ask something of you?',
      options: [
        { text: 'Difficult — I don\'t want to push them away or disappoint them', weights: { chaser: 2, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 2, repeater: 0, peacekeeper: 2, merger: 1 } },
        { text: 'Easy — I know my limits and communicate them without much friction', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 2, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Hard — I say yes even when I mean no', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 2, repeater: 0, peacekeeper: 3, merger: 0 } },
        { text: 'I\'ll say no but usually with a reason or counter-offer', weights: { chaser: 0, withdrawer: 1, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'After an argument, you tend to…',
      options: [
        { text: 'Reach out first — you can\'t stand unresolved tension', weights: { chaser: 3, withdrawer: 0, pleaser: 1, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 1, merger: 2 } },
        { text: 'Need significant time alone before you can reconnect', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Apologise quickly, even when you\'re not sure it was your fault', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 3, merger: 0 } },
        { text: 'Want to debrief properly and establish what to do differently next time', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'Do you notice yourself absorbing your partner\'s moods, worries, or emotional state?',
      options: [
        { text: 'Yes — their emotional state becomes my emotional state very quickly', weights: { chaser: 0, withdrawer: 0, pleaser: 1, controller: 0, rescuer: 2, repeater: 0, peacekeeper: 1, merger: 3 } },
        { text: 'Rarely — I keep my emotional world fairly separate', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 2, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Sometimes — especially when something feels like my responsibility to fix', weights: { chaser: 0, withdrawer: 0, pleaser: 2, controller: 0, rescuer: 3, repeater: 0, peacekeeper: 1, merger: 1 } },
        { text: 'Occasionally — but I tend to analyse it more than absorb it', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'Have you ever stayed in a relationship longer than you should have?',
      options: [
        { text: 'Yes — I kept hoping things would eventually turn around', weights: { chaser: 3, withdrawer: 0, pleaser: 1, controller: 0, rescuer: 2, repeater: 2, peacekeeper: 1, merger: 1 } },
        { text: 'No — when it\'s done, I disconnect fairly quickly', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Yes — I felt guilty or responsible for the other person\'s wellbeing', weights: { chaser: 0, withdrawer: 0, pleaser: 2, controller: 0, rescuer: 3, repeater: 1, peacekeeper: 2, merger: 0 } },
        { text: 'Sometimes — when I still believed I could make it work', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 1, repeater: 1, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'Honest question: does emotional intensity in a relationship make it feel more real to you?',
      options: [
        { text: 'Yes — the bigger the feeling, the more meaningful it feels', weights: { chaser: 2, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 1, repeater: 3, peacekeeper: 0, merger: 2 } },
        { text: 'Not really — I actively seek calm and stability over drama', weights: { chaser: 0, withdrawer: 2, pleaser: 0, controller: 2, rescuer: 0, repeater: 0, peacekeeper: 2, merger: 0 } },
        { text: 'Sometimes — though I know it\'s not always healthy', weights: { chaser: 2, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 2, repeater: 2, peacekeeper: 0, merger: 0 } },
        { text: 'Intensity makes me anxious — I prefer predictable emotional dynamics', weights: { chaser: 0, withdrawer: 1, pleaser: 2, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 3, merger: 0 } },
      ],
    },
    {
      q: 'When a partner is emotionally unavailable, your typical response is to…',
      options: [
        { text: 'Pursue them more — something in you rises to the challenge', weights: { chaser: 3, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 2, repeater: 2, peacekeeper: 0, merger: 0 } },
        { text: 'Reciprocate the distance — it actually suits you', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Try harder to be what they seem to need', weights: { chaser: 1, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 3, repeater: 1, peacekeeper: 1, merger: 0 } },
        { text: 'Feel emotionally unsettled and want to name it directly', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 2 } },
      ],
    },
    {
      q: 'When you think about the idea of a truly stable, drama-free relationship, it sounds…',
      options: [
        { text: 'Ideal — you\'ve been looking for exactly that', weights: { chaser: 0, withdrawer: 0, pleaser: 1, controller: 2, rescuer: 0, repeater: 0, peacekeeper: 2, merger: 0 } },
        { text: 'Good in theory, though something in you wonders if it would hold your attention', weights: { chaser: 3, withdrawer: 1, pleaser: 0, controller: 0, rescuer: 0, repeater: 3, peacekeeper: 0, merger: 0 } },
        { text: 'Slightly suffocating — you need a little more emotional space', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Perfect — as long as both people are still deeply emotionally close', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 1, merger: 3 } },
      ],
    },
    {
      q: 'How honest are you with partners about your actual emotional needs?',
      options: [
        { text: 'I communicate needs, but sometimes too urgently when anxious', weights: { chaser: 3, withdrawer: 0, pleaser: 0, controller: 1, rescuer: 0, repeater: 1, peacekeeper: 0, merger: 1 } },
        { text: 'I rarely voice needs — I prefer handling things myself', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'I minimise my needs so the other person isn\'t burdened', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 2, repeater: 0, peacekeeper: 3, merger: 0 } },
        { text: 'I\'m fairly direct, but I also watch closely how they respond', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'Have the dynamics in your relationships — even across very different partners — felt surprisingly similar?',
      options: [
        { text: 'Yes — uncomfortably so', weights: { chaser: 1, withdrawer: 1, pleaser: 1, controller: 1, rescuer: 1, repeater: 3, peacekeeper: 1, merger: 1 } },
        { text: 'Not really — each relationship has felt quite distinct', weights: { chaser: 0, withdrawer: 2, pleaser: 0, controller: 2, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Somewhat — though I\'ve attributed it to bad luck rather than pattern', weights: { chaser: 2, withdrawer: 0, pleaser: 1, controller: 0, rescuer: 2, repeater: 2, peacekeeper: 1, merger: 0 } },
        { text: 'I haven\'t thought about it that way, but maybe', weights: { chaser: 0, withdrawer: 0, pleaser: 2, controller: 0, rescuer: 0, repeater: 1, peacekeeper: 2, merger: 1 } },
      ],
    },
    {
      q: 'When a partner sets a boundary you don\'t like, you…',
      options: [
        { text: 'Feel pushed away and instinctively want to close the gap', weights: { chaser: 3, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 0, repeater: 1, peacekeeper: 0, merger: 2 } },
        { text: 'Respect it and appreciate the clarity', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Accommodate it even when it doesn\'t feel fair to you', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 1, repeater: 0, peacekeeper: 3, merger: 0 } },
        { text: 'Want to discuss it and understand the reasoning before accepting it', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'When someone you love is struggling and explicitly says they don\'t want help, you…',
      options: [
        { text: 'Find it very hard not to step in anyway', weights: { chaser: 1, withdrawer: 0, pleaser: 0, controller: 1, rescuer: 3, repeater: 0, peacekeeper: 0, merger: 2 } },
        { text: 'Respect it completely — space feels natural to you', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Back off but quietly keep watching in case they change their mind', weights: { chaser: 0, withdrawer: 0, pleaser: 1, controller: 2, rescuer: 2, repeater: 0, peacekeeper: 1, merger: 0 } },
        { text: 'Let it go emotionally but check in once things have settled', weights: { chaser: 0, withdrawer: 1, pleaser: 0, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 2, merger: 0 } },
      ],
    },
    {
      q: 'Which phrase resonates with something you\'ve thought or believed about love?',
      options: [
        { text: '"If I can finally win them over, it will mean something."', weights: { chaser: 3, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 1, repeater: 2, peacekeeper: 0, merger: 0 } },
        { text: '"I\'m better at caring from a comfortable distance."', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 1, merger: 0 } },
        { text: '"If I love them enough, they\'ll eventually come around."', weights: { chaser: 1, withdrawer: 0, pleaser: 1, controller: 0, rescuer: 3, repeater: 2, peacekeeper: 0, merger: 0 } },
        { text: '"Conflict threatens everything, so I\'d rather absorb it than risk it."', weights: { chaser: 0, withdrawer: 0, pleaser: 2, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 3, merger: 0 } },
      ],
    },
    {
      q: 'When you imagine your ideal relationship, the quality that matters most is…',
      options: [
        { text: 'Depth and passion — you want to feel it intensely', weights: { chaser: 3, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 1, repeater: 2, peacekeeper: 0, merger: 1 } },
        { text: 'Independence — two whole people choosing each other freely', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Acceptance — someone who never makes you feel like too much', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 2, merger: 0 } },
        { text: 'Closeness — you want to feel genuinely intertwined with someone', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 3 } },
      ],
    },
    {
      q: 'How do you feel when a partner wants significantly more emotional independence than you?',
      options: [
        { text: 'Anxious — the distance feels like a signal something is wrong', weights: { chaser: 3, withdrawer: 0, pleaser: 1, controller: 1, rescuer: 0, repeater: 1, peacekeeper: 0, merger: 2 } },
        { text: 'Completely fine — you appreciate the breathing room too', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Like you should be doing more to make them want to stay closer', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 2, repeater: 0, peacekeeper: 1, merger: 0 } },
        { text: 'It depends on whether the independence seems emotionally healthy or evasive', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 3, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'When you are not in a relationship, how do you typically feel?',
      options: [
        { text: 'Restless — you feel most alive when someone has your attention', weights: { chaser: 3, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 1, repeater: 1, peacekeeper: 0, merger: 1 } },
        { text: 'Comfortable — you function well independently', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 2, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Like something important is missing — you find your sense of purpose through others', weights: { chaser: 0, withdrawer: 0, pleaser: 2, controller: 0, rescuer: 3, repeater: 1, peacekeeper: 0, merger: 2 } },
        { text: 'Fine, but you notice familiar emotional patterns showing up anyway', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 0, repeater: 3, peacekeeper: 0, merger: 0 } },
      ],
    },
    {
      q: 'If a therapist watched your last three relationships and named one repeating theme, what would it most likely be?',
      options: [
        { text: 'You pursued people who were difficult to hold onto', weights: { chaser: 3, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 1, repeater: 2, peacekeeper: 0, merger: 0 } },
        { text: 'You kept emotional distance even when you cared deeply', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'You gave endlessly and expected very little in return', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 3, repeater: 1, peacekeeper: 2, merger: 0 } },
        { text: 'You and your partner blurred into each other emotionally', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 3 } },
      ],
    },
    {
      q: 'If you\'re being fully honest, what have you most often sacrificed in relationships?',
      options: [
        { text: 'Your own emotional stability — you ride the highs and lows with them', weights: { chaser: 3, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 1, repeater: 2, peacekeeper: 0, merger: 1 } },
        { text: 'Closeness itself — you\'ve kept people at arm\'s length even when you wanted them near', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: 'Your own needs, voice, and boundaries', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 2, repeater: 0, peacekeeper: 3, merger: 0 } },
        { text: 'Your individual identity and sense of self', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 3 } },
      ],
    },
    {
      q: 'Which belief feels most uncomfortably familiar when you\'re in a relationship?',
      options: [
        { text: '"If I stop trying, they\'ll leave."', weights: { chaser: 3, withdrawer: 0, pleaser: 2, controller: 0, rescuer: 2, repeater: 1, peacekeeper: 1, merger: 0 } },
        { text: '"Depending on people is dangerous."', weights: { chaser: 0, withdrawer: 3, pleaser: 0, controller: 1, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 0 } },
        { text: '"My needs create problems."', weights: { chaser: 0, withdrawer: 0, pleaser: 3, controller: 0, rescuer: 1, repeater: 0, peacekeeper: 3, merger: 0 } },
        { text: '"Closeness requires becoming one person."', weights: { chaser: 0, withdrawer: 0, pleaser: 0, controller: 0, rescuer: 0, repeater: 0, peacekeeper: 0, merger: 3 } },
      ],
    },
  ],
};

export default relationshipPatterns;