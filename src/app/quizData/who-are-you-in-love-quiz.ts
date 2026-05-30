import { QuizMeta } from './attachment-style';

const whoAreYouInLove: QuizMeta = {
  title: 'Who Are You in Love?',
  description:
    'Not a compatibility score. A portrait of how you actually love — the parts you show, and the parts you quietly protect.',
  tag: 'Persona',
  color: 'text-violet-400',
  noOfQuestion: 20,

  resultCategories: {

    // ── SECURE ────────────────────────────────────────────────────────────────

    'persona-steady-anchor': {
      label: 'The Steady Anchor',
      emoji: '⚓',
      description:
        'You love without turning it into a crisis. You say what you mean, mean what you say, and rarely leave people guessing. Your love feels like solid ground — not because nothing ever goes wrong, but because you handle it without making everything a disaster. People feel safe around you, and that is a rarer gift than it sounds.',
      advice:
        'You are the emotional standard-setter in most of your relationships. The next growth edge is making sure you are choosing people who match your maturity — not just people who benefit from it. You deserve the same reliability you offer. Do not shrink your needs to keep the peace.',
    },

    'persona-golden-retriever': {
      label: 'The Golden Retriever',
      emoji: '☀️',
      description:
        'You are exactly what you appear to be: warm, enthusiastic, and genuinely happy to be here. You make people feel chosen. You do not play games, hold grudges, or love with conditions. Your energy is contagious and your loyalty is absolute. The people in your life are lucky — and the healthy ones know it.',
      advice:
        'Your openness is a strength, not a flaw. The work is making sure you are choosing people who match your generosity rather than quietly taking advantage of it. You can be warm and have standards at the same time. In fact, the warmest version of you requires it.',
    },

    'persona-devoted-builder': {
      label: 'The Devoted Builder',
      emoji: '🏡',
      description:
        'The butterflies are nice, but what you actually want is the quiet Sunday morning ten years in. You love through consistency, reliability, and showing up — especially when it is unglamorous. You are less interested in being someone\'s obsession and more interested in being someone\'s home. That is not a small thing.',
      advice:
        'Your long-term thinking is a genuine gift. Watch that stability does not quietly become complacency — love still needs tending, not just maintaining. And make sure your partner knows how much you are doing. Devotion that goes unnoticed on both sides slowly becomes resentment.',
    },

    'persona-free-spirit': {
      label: 'The Free Spirit',
      emoji: '🌬️',
      description:
        'You never lose yourself in a relationship. Your identity, your friendships, your solo pursuits — they stay intact even when you are deeply in love. You believe two whole people make a better couple than two halves do. You are confident, self-possessed, and rarely anxious about where you stand. That kind of security is magnetic.',
      advice:
        'Your independence is healthy and worth keeping. The edge to watch is whether it ever becomes a convenient reason to stay emotionally unavailable. There is a difference between maintaining yourself and protecting yourself from intimacy. You know which one it is — be honest about it.',
    },

    'persona-gentle-flame': {
      label: 'The Gentle Flame',
      emoji: '🕯️',
      description:
        'You do not perform affection. You remember the small details, show up without being asked, and make people feel genuinely seen without making a production of it. Your warmth is never loud but it is always there. People often realise how much you meant to them only after you are gone — which says everything about the quiet quality of what you offered.',
      advice:
        'Your love language is consistency, and it is deeply valuable. Make sure you are also advocating for your own needs — your quiet nature can make others assume you are fine when you are not. The people who deserve you are the ones who notice without you having to perform.',
    },

    // ── ANXIOUS ───────────────────────────────────────────────────────────────

    'persona-passionate-heart': {
      label: 'The Passionate Heart',
      emoji: '🔥',
      description:
        'Love is not a background feeling for you — it takes up space, asks questions, and keeps you up at night. A cold text lands differently on you than it would on most people. You crave closeness and reassurance not because you are needy, but because emotional connection is genuinely everything to you. Your love is real and deep. The work is learning to hold it without being consumed by it.',
      advice:
        'Your emotional depth is a strength, not a liability. The goal is not to feel less — it is to build enough internal security that the relationship does not have to constantly prove itself. Practice sitting with uncertainty before reaching for reassurance. That pause changes everything over time.',
    },

    'persona-nurturer': {
      label: 'The Nurturer',
      emoji: '🌸',
      description:
        'You love through action: the remembered detail, the check-in text, the presence no one had to ask for. You are the person people call first when things fall apart. But underneath all that giving is a quiet, persistent fear that love might be conditional — that if you stop showing up so perfectly, you will be left. You deserve to receive as freely as you give.',
      advice:
        'Your care is genuine and felt by everyone around you. The pattern to watch is giving from fear rather than love — there is a difference, and your body knows which one it is. Start practising asking for what you need directly. The people worth keeping will not leave when you do.',
    },

    'persona-overthinker': {
      label: 'The Overthinker',
      emoji: '🌀',
      description:
        'You read between every line. A shorter reply becomes a sign. A slightly different tone becomes a red flag. You are not dramatic — you are terrified of being blindsided again. Your pattern recognition is genuinely sharp. The problem is it cannot turn off, even when everything is actually fine. Being present in good moments is the hardest and most important work for you.',
      advice:
        'The anxiety is not lying to you — it is just working from old data. The thing that hurt you before is not necessarily happening now. When your mind runs ahead, try asking: "Is there actual evidence for this, or am I filling in the blank from memory?" That one question, asked honestly, is more useful than most things.',
    },

    'persona-burning-comet': {
      label: 'The Burning Comet',
      emoji: '☄️',
      description:
        'You do not ease into love — you land in it. Within weeks, you are emotionally all in: thinking about them constantly, building the future in your head, feeling things at a volume that surprises even you. Relationships feel enormous to you, and moments of uncertainty hit accordingly hard. Your capacity for love is real. The pacing is the part that needs tending.',
      advice:
        'Intensity is not the same as compatibility. Let people earn your investment before you go all in — not because you should feel less, but because you deserve someone who has had enough time to choose you clearly. Slowing down in the early stages protects your heart without closing it.',
    },

    'persona-mirror-heart': {
      label: 'The Mirror Heart',
      emoji: '🪞',
      description:
        'When they are happy, you are light. When they go quiet, something in you goes quiet too. You are attuned to emotional shifts in a way most people are not — which makes you an extraordinary partner and a deeply vulnerable one. Your wellbeing is too tightly connected to theirs. The work is building an emotional life that has its own roots, independent of whoever you are loving.',
      advice:
        'Your attunement is a gift — it makes people feel profoundly understood. The line to find is between empathy and enmeshment. You are allowed to feel okay even when they are having a hard day. That is not distance. That is what makes you sustainable to love.',
    },

    // ── AVOIDANT ──────────────────────────────────────────────────────────────

    'persona-lone-wolf': {
      label: 'The Lone Wolf',
      emoji: '🐺',
      description:
        'You function best alone and feel most like yourself without the weight of someone else\'s emotional needs. Closeness takes effort. Intimacy requires working against your instincts. You care — more than most people realise — but showing it feels like handing someone something they could use against you. The right person will learn your language. Most do not stay long enough.',
      advice:
        'Your independence is real and worth respecting. The question worth sitting with is whether the distance you keep is about needing space or about avoiding the specific vulnerability that closeness requires. Those are different things, and you probably know which one it is on any given day.',
    },

    'persona-ice-kingdom': {
      label: 'The Ice Kingdom',
      emoji: '❄️',
      description:
        'Your emotional world is vast and almost entirely invisible. You have learned to keep feelings private because expressing them has cost you before. People read you as cold or indifferent. That is not it — you are selective. Vulnerability is earned, not given freely. The ones who get through the wall often discover someone who loves with unusual depth and steadiness.',
      advice:
        'The wall kept you safe when you needed it to. At some point, the question becomes whether it is still protecting you or just preventing anything good from getting close. You do not have to tear it down. You just have to leave a door in it — for the people who have shown they will not use the opening against you.',
    },

    'persona-silent-tide': {
      label: 'The Silent Tide',
      emoji: '🌌',
      description:
        'Your love does not announce itself. It shows up in practical ways — a problem solved without being asked, loyalty that requires nothing in return, presence without pressure. You do not need constant connection to feel close. What you give is deliberate and real, even when others need a translation to understand it.',
      advice:
        'You love in a language that not everyone speaks fluently. Some people need words, not just actions — and telling them where you are does not make the love smaller. Try adding small verbal confirmations to what you are already doing. It costs you little and means everything to the right person.',
    },

    'persona-castle-builder': {
      label: 'The Castle Builder',
      emoji: '🏰',
      description:
        'Trust is not given — it is earned in increments over a long time. Your emotional distance is not cruelty. It is architecture you built after something or someone made openness feel dangerous. You have been disappointed by people who were supposed to be safe. So now everyone starts outside the gate. A few earn their way in. Those people become everything.',
      advice:
        'The castle was a reasonable response to what happened. The work now is making sure the drawbridge still works — that you can actually let it down when someone has earned it, rather than finding reasons to keep it up. Trust is a skill. It gets easier with practice, even if early attempts feel impossible.',
    },

    // ── DISORGANIZED ──────────────────────────────────────────────────────────

    'persona-shadow-walker': {
      label: 'The Shadow Walker',
      emoji: '🌑',
      description:
        'You pull people in and then feel the urge to push them away. It is not manipulation — it is fear wearing love\'s clothes. You crave closeness more than almost anything, but vulnerability feels like standing on ice you are not sure will hold. You have probably lost relationships not from a lack of love but from a terror of what love actually requires.',
      advice:
        'The push-pull is not your personality. It is a response to something that happened before you had the tools to handle it. The goal is not to force yourself to stay open when you are flooded — it is to build enough safety, inside yourself and in your relationships, that closing does not become your only option.',
    },

    'persona-storm-chaser': {
      label: 'The Storm Chaser',
      emoji: '⛈️',
      description:
        'When things are calm, something feels missing. You have been drawn to people who keep you on edge — not because you like pain, but because intensity is the only love you learned to recognise. The slow burn does not register. Peace can feel like emotional distance. You are in the process of learning that the most loving relationship you will ever have might also be the quietest one.',
      advice:
        'The electricity you chase is real — but it is not always the signal you think it is. Sometimes it is chemistry. Sometimes it is your nervous system recognising a familiar kind of chaos. Learning to tell the difference is one of the most valuable things you can do. Calm is not the absence of love. It might actually be what love feels like when it is safe.',
    },

    'persona-midnight-poet': {
      label: 'The Midnight Poet',
      emoji: '🖋️',
      description:
        'You feel love like music — in waves, metaphors, and things almost said but never sent. Your emotional world is extraordinary in its richness. You are drawn to depth, complexity, and meaning. Love is your favourite subject. Actually being in it — without narrating, analysing, or protecting yourself from the outcome — that is the harder and more important work.',
      advice:
        'Your self-awareness is a genuine gift. It becomes a liability when it turns into a reason to stay one step removed from your own life. At some point the analysis has to stop and the living has to start. Understanding yourself is not the same as healing. Stop studying the water. Swim.',
    },

    'persona-fragile-flame': {
      label: 'The Fragile Flame',
      emoji: '🕊️',
      description:
        'You are emotionally sensitive in a way that makes you intuitive, empathetic, and very easy to hurt. Inconsistency does not just confuse you — it destabilises you. You carry hope and fear simultaneously, often in the same moment. You are not fragile in a weak sense. You are fragile the way something genuinely precious is — requiring careful handling, not less value.',
      advice:
        'Your sensitivity is not the problem — it is actually one of your greatest gifts when it is in an environment that honours it. The work is finding relationships stable enough to hold it, and building enough internal ground that one person\'s inconsistency does not shake everything. You need reliability. Do not settle for less.',
    },

    'persona-chaotic-dreamer': {
      label: 'The Chaotic Dreamer',
      emoji: '🎭',
      description:
        'You hold two contradictory truths: you need closeness desperately and closeness terrifies you. Your relationships often reflect that conflict — intense connection followed by self-sabotage, or longing for someone you pushed away. You are not broken. You are carrying something heavy that was given to you before you were old enough to refuse it.',
      advice:
        'The chaos is not who you are — it is what happened to you. Healing here is slow, non-linear, and absolutely possible. The goal is not to eliminate the fear of intimacy, but to gradually teach your nervous system that not all closeness leads to pain. Therapy, stable relationships, and learning to pause before reacting from fear are all part of the path.',
    },

    'persona-deep-thinker': {
      label: 'The Deep Thinker',
      emoji: '🌙',
      description:
        'You can articulate your emotional patterns with startling precision. You know your triggers, your history, the mechanics of your own avoidance. The analysis is real and valuable. It is also sometimes a delay tactic — a way to stay in your head and out of the dangerous territory of your heart. Understanding is not the same as healing. At some point, you have to stop studying love and actually be in it.',
      advice:
        'Your self-awareness is far ahead of most people. The question is whether you are using it to grow or to stay safely one step removed. Insight without action is just sophisticated avoidance. You know what needs to happen. The work now is doing it rather than understanding it.',
    },
  },

  questions: [
    {
      q: "It's 10pm. Someone you've been seeing for six weeks hasn't replied to your message — sent five hours ago. What are you actually doing right now?",
      options: [
        { text: "Nothing unusual. They're probably tired or busy. I'll hear from them.", weights: { 'persona-steady-anchor': 2, 'persona-golden-retriever': 2, 'persona-free-spirit': 2, 'persona-devoted-builder': 1, 'persona-gentle-flame': 1 } },
        { text: "I've checked my phone more times than I'd admit. I'm rereading what I sent to find the problem.", weights: { 'persona-overthinker': 3, 'persona-passionate-heart': 2, 'persona-burning-comet': 2, 'persona-mirror-heart': 1 } },
        { text: "I noticed, felt something, then put my phone face-down. I refuse to spiral over this.", weights: { 'persona-lone-wolf': 2, 'persona-ice-kingdom': 2, 'persona-castle-builder': 2, 'persona-silent-tide': 1 } },
        { text: "I've gone from 'totally fine' to 'is this over' about four times in the last hour.", weights: { 'persona-chaotic-dreamer': 3, 'persona-shadow-walker': 2, 'persona-storm-chaser': 2, 'persona-fragile-flame': 2 } },
      ],
    },

    {
      q: "A close friend asks: 'What does being in love actually feel like for you?' What's the honest answer?",
      options: [
        { text: "Safe. Like I can stop bracing for something to go wrong.", weights: { 'persona-steady-anchor': 3, 'persona-devoted-builder': 2, 'persona-gentle-flame': 2 } },
        { text: "Consuming. Like they live in my head and every interaction carries weight.", weights: { 'persona-passionate-heart': 3, 'persona-burning-comet': 3, 'persona-mirror-heart': 2, 'persona-nurturer': 1 } },
        { text: "Nice, but slightly uncomfortable. Like wearing something that almost fits.", weights: { 'persona-lone-wolf': 3, 'persona-ice-kingdom': 2, 'persona-castle-builder': 2 } },
        { text: "Terrifying and incredible at the same time. I never know which one is winning.", weights: { 'persona-shadow-walker': 3, 'persona-chaotic-dreamer': 3, 'persona-fragile-flame': 2, 'persona-midnight-poet': 2 } },
      ],
    },

    {
      q: 'Your partner cancels plans last minute — third time this month. What do you do?',
      options: [
        { text: "Bring it up directly: 'This is a pattern and it's affecting me. Can we talk?'", weights: { 'persona-steady-anchor': 3, 'persona-free-spirit': 2, 'persona-golden-retriever': 1 } },
        { text: "Say it's fine. Spend the night quietly stewing and not fully understanding why.", weights: { 'persona-nurturer': 3, 'persona-mirror-heart': 2, 'persona-overthinker': 2 } },
        { text: "Feel a small, guilty wave of relief. An unexpected evening alone.", weights: { 'persona-lone-wolf': 3, 'persona-silent-tide': 2, 'persona-ice-kingdom': 2 } },
        { text: "Alternate between genuinely hurt and convinced I'm completely overreacting.", weights: { 'persona-chaotic-dreamer': 3, 'persona-fragile-flame': 2, 'persona-shadow-walker': 2 } },
      ],
    },

    {
      q: "Things are going really well — better than you expected. What's the feeling underneath the good feeling?",
      options: [
        { text: "Mostly just happiness. I'm present in it without waiting for the catch.", weights: { 'persona-golden-retriever': 3, 'persona-steady-anchor': 2, 'persona-devoted-builder': 2, 'persona-free-spirit': 2 } },
        { text: "A low-grade fear that this is the part right before something goes wrong.", weights: { 'persona-overthinker': 3, 'persona-burning-comet': 2, 'persona-passionate-heart': 2 } },
        { text: "A slight urge to slow down. Create a little distance before it gets too real.", weights: { 'persona-castle-builder': 3, 'persona-lone-wolf': 2, 'persona-ice-kingdom': 2 } },
        { text: "Confusion. I don't fully trust good things. I wait for the real version to appear.", weights: { 'persona-storm-chaser': 3, 'persona-deep-thinker': 2, 'persona-shadow-walker': 2 } },
      ],
    },

    {
      q: "You're in an argument. Things get heated. What does your instinct tell you to do?",
      options: [
        { text: "Stay in it. I'd rather have an uncomfortable conversation than leave it unresolved.", weights: { 'persona-steady-anchor': 3, 'persona-free-spirit': 2, 'persona-golden-retriever': 1 } },
        { text: "Backpedal. Apologise. Restore the peace even if the problem isn't actually solved.", weights: { 'persona-nurturer': 3, 'persona-mirror-heart': 2, 'persona-passionate-heart': 2 } },
        { text: "Go quiet. Leave the room. I need to process alone before I can say anything useful.", weights: { 'persona-lone-wolf': 3, 'persona-silent-tide': 2, 'persona-castle-builder': 2 } },
        { text: "Escalate without meaning to and regret it — or shut down completely. Never in between.", weights: { 'persona-chaotic-dreamer': 3, 'persona-storm-chaser': 2, 'persona-shadow-walker': 2, 'persona-fragile-flame': 1 } },
      ],
    },

    {
      q: "Your partner says they need some alone time this weekend — 'nothing's wrong.' Your internal response is…",
      options: [
        { text: "Completely fine. I'll use the time for myself too.", weights: { 'persona-steady-anchor': 2, 'persona-free-spirit': 3, 'persona-devoted-builder': 1 } },
        { text: "I believe them logically. Emotionally, I keep looking for the thing that's actually wrong.", weights: { 'persona-overthinker': 3, 'persona-passionate-heart': 2, 'persona-burning-comet': 2, 'persona-mirror-heart': 2 } },
        { text: "Grateful, honestly. I could use the space too.", weights: { 'persona-lone-wolf': 3, 'persona-ice-kingdom': 2, 'persona-silent-tide': 2 } },
        { text: "I go back and forth between respecting it and reading it as the beginning of the end.", weights: { 'persona-shadow-walker': 3, 'persona-chaotic-dreamer': 3, 'persona-fragile-flame': 2 } },
      ],
    },

    {
      q: "It's been six months. The butterflies have settled into something quieter. How do you feel about that?",
      options: [
        { text: "Relief. This deeper, steadier feeling is what I actually wanted from the beginning.", weights: { 'persona-devoted-builder': 3, 'persona-steady-anchor': 2, 'persona-gentle-flame': 2 } },
        { text: "Slight panic. I interpret the calm as the connection starting to fade.", weights: { 'persona-burning-comet': 3, 'persona-passionate-heart': 2, 'persona-overthinker': 2 } },
        { text: "Comfortable. I'm more myself now than I was in those first months.", weights: { 'persona-free-spirit': 3, 'persona-golden-retriever': 2, 'persona-lone-wolf': 1 } },
        { text: "Restless. Part of me wonders if this is just where things go flat and stay flat.", weights: { 'persona-storm-chaser': 3, 'persona-deep-thinker': 2, 'persona-midnight-poet': 2 } },
      ],
    },

    {
      q: "Someone you love is going through something hard. They're not reaching out much. What do you do?",
      options: [
        { text: "Check in once, let them know I'm here, then give them the space they seem to need.", weights: { 'persona-steady-anchor': 3, 'persona-gentle-flame': 2, 'persona-free-spirit': 2 } },
        { text: "Keep texting. I can't not. I need to know they're okay and that we're still okay.", weights: { 'persona-nurturer': 3, 'persona-passionate-heart': 2, 'persona-burning-comet': 2, 'persona-mirror-heart': 2 } },
        { text: "Respect the distance. I'd want space if I were going through something difficult.", weights: { 'persona-lone-wolf': 3, 'persona-silent-tide': 2, 'persona-ice-kingdom': 1 } },
        { text: "Try to give space, panic that it means something, check in, then feel guilty for checking in.", weights: { 'persona-chaotic-dreamer': 3, 'persona-shadow-walker': 2, 'persona-fragile-flame': 2 } },
      ],
    },

    {
      q: "You've had a genuinely hard day. When you think about what you want from your partner tonight, it's…",
      options: [
        { text: "To talk about it properly — and to feel heard before they offer any solutions.", weights: { 'persona-golden-retriever': 2, 'persona-steady-anchor': 2, 'persona-devoted-builder': 2 } },
        { text: "To be held without having to explain myself. Just presence, no words needed.", weights: { 'persona-nurturer': 2, 'persona-passionate-heart': 2, 'persona-mirror-heart': 2 } },
        { text: "Space to decompress alone. I'll be better company once I've had time to process.", weights: { 'persona-lone-wolf': 3, 'persona-castle-builder': 2, 'persona-silent-tide': 2 } },
        { text: "I want comfort but asking for it feels like asking for too much.", weights: { 'persona-fragile-flame': 3, 'persona-midnight-poet': 2, 'persona-deep-thinker': 2 } },
      ],
    },

    {
      q: "Your ex reaches out after a long silence — friendly, vague, clearly wanting to reconnect 'as friends.' Your gut feeling is…",
      options: [
        { text: "I assess it clearly. Do I actually want this in my life? If not, I can decline without guilt.", weights: { 'persona-steady-anchor': 3, 'persona-free-spirit': 3, 'persona-golden-retriever': 1 } },
        { text: "A flood of feelings I thought I was done with. I'm already reading into every word.", weights: { 'persona-passionate-heart': 3, 'persona-burning-comet': 3, 'persona-overthinker': 2 } },
        { text: "Caution. I close that door a little more firmly in my head and move on.", weights: { 'persona-castle-builder': 3, 'persona-ice-kingdom': 2, 'persona-lone-wolf': 2 } },
        { text: "A pull between wanting to respond and knowing I probably should not.", weights: { 'persona-shadow-walker': 3, 'persona-midnight-poet': 2, 'persona-chaotic-dreamer': 2 } },
      ],
    },

    {
      q: "Your partner is in a great mood and being openly affectionate. What is your experience of that?",
      options: [
        { text: "Warm and easy. I receive it without any friction.", weights: { 'persona-golden-retriever': 3, 'persona-steady-anchor': 2, 'persona-devoted-builder': 2 } },
        { text: "I love it — and I'm aware of how much I needed it, which is its own complicated feeling.", weights: { 'persona-passionate-heart': 3, 'persona-nurturer': 2, 'persona-mirror-heart': 3 } },
        { text: "Slightly overstimulating. I appreciate it but find myself wanting to step back a little.", weights: { 'persona-lone-wolf': 3, 'persona-ice-kingdom': 2, 'persona-silent-tide': 2 } },
        { text: "Happy, but with background noise: 'Is this sustainable? Will this change?'", weights: { 'persona-deep-thinker': 3, 'persona-midnight-poet': 2, 'persona-storm-chaser': 2 } },
      ],
    },

    {
      q: "You are thinking about ending a relationship that isn't making you happy. What is slowing you down?",
      options: [
        { text: "Making sure I've communicated clearly and given it a real chance before I walk away.", weights: { 'persona-steady-anchor': 3, 'persona-devoted-builder': 2, 'persona-gentle-flame': 2 } },
        { text: "The fear of losing them — even if staying does not feel right either.", weights: { 'persona-passionate-heart': 3, 'persona-nurturer': 2, 'persona-burning-comet': 2, 'persona-mirror-heart': 2 } },
        { text: "Habit and logistics. The thought of rebuilding is more exhausting than continuing.", weights: { 'persona-castle-builder': 3, 'persona-lone-wolf': 2, 'persona-ice-kingdom': 1 } },
        { text: "Being simultaneously convinced I should leave and that leaving would be a catastrophic mistake.", weights: { 'persona-chaotic-dreamer': 3, 'persona-shadow-walker': 3, 'persona-fragile-flame': 2 } },
      ],
    },

    {
      q: "Someone tells you: 'You're really hard to read.' What is your honest reaction?",
      options: [
        { text: "Mildly surprised. I think I'm fairly transparent about how I feel.", weights: { 'persona-golden-retriever': 3, 'persona-steady-anchor': 2, 'persona-free-spirit': 2 } },
        { text: "Worried. I want people to feel secure around me, and that tells me they don't.", weights: { 'persona-nurturer': 3, 'persona-overthinker': 3, 'persona-passionate-heart': 2 } },
        { text: "Unsurprised. Probably true. I don't always say what I'm feeling.", weights: { 'persona-ice-kingdom': 3, 'persona-silent-tide': 3, 'persona-castle-builder': 2 } },
        { text: "I get it. I don't always know what I feel — so of course I'm hard to read.", weights: { 'persona-deep-thinker': 3, 'persona-midnight-poet': 2, 'persona-chaotic-dreamer': 2 } },
      ],
    },

    {
      q: "You've been hurt before in a specific way. A new person is showing early signs of the same pattern. What do you do?",
      options: [
        { text: "Name it directly: 'This feels familiar to me — can we talk about it?'", weights: { 'persona-steady-anchor': 3, 'persona-free-spirit': 2, 'persona-gentle-flame': 2 } },
        { text: "Stay quiet, hope it's different this time, but monitor every interaction from here forward.", weights: { 'persona-overthinker': 3, 'persona-passionate-heart': 2, 'persona-burning-comet': 2 } },
        { text: "Build an internal wall and start protecting yourself without saying a word.", weights: { 'persona-castle-builder': 3, 'persona-ice-kingdom': 3, 'persona-lone-wolf': 2 } },
        { text: "Become hyper-alert and start behaving differently without being able to explain why.", weights: { 'persona-shadow-walker': 3, 'persona-fragile-flame': 3, 'persona-chaotic-dreamer': 2 } },
      ],
    },

    {
      q: "Which sentence most honestly describes what love has taught you so far?",
      options: [
        { text: "That being loved by the right person makes being yourself feel safe.", weights: { 'persona-steady-anchor': 2, 'persona-devoted-builder': 2, 'persona-golden-retriever': 2, 'persona-gentle-flame': 2 } },
        { text: "That I need more reassurance than I wish I did — and I'm working on it.", weights: { 'persona-passionate-heart': 2, 'persona-overthinker': 2, 'persona-nurturer': 2, 'persona-burning-comet': 2 } },
        { text: "That needing people is a vulnerability I'm still learning how to sit with.", weights: { 'persona-lone-wolf': 3, 'persona-castle-builder': 2, 'persona-ice-kingdom': 2 } },
        { text: "That I want closeness and fear it in almost equal measure.", weights: { 'persona-shadow-walker': 3, 'persona-chaotic-dreamer': 3, 'persona-deep-thinker': 2, 'persona-midnight-poet': 2 } },
      ],
    },

    {
      q: "Your partner is going away for two weeks. As they leave, what do you honestly feel?",
      options: [
        { text: "I'll miss them and I'm genuinely okay. We'll stay in touch. The time will pass.", weights: { 'persona-steady-anchor': 2, 'persona-golden-retriever': 2, 'persona-free-spirit': 3, 'persona-devoted-builder': 2 } },
        { text: "Already counting down. Already quietly wondering if distance will change something.", weights: { 'persona-passionate-heart': 3, 'persona-burning-comet': 3, 'persona-overthinker': 2 } },
        { text: "Partially relieved. Partially guilty for feeling relieved.", weights: { 'persona-lone-wolf': 3, 'persona-silent-tide': 2, 'persona-ice-kingdom': 2 } },
        { text: "Sad, fine, worried, proud of them, insecure, excited for them — all at once.", weights: { 'persona-chaotic-dreamer': 3, 'persona-fragile-flame': 3, 'persona-mirror-heart': 2 } },
      ],
    },

    {
      q: "You've been together long enough that they've seen your worst days. What does that feel like?",
      options: [
        { text: "Freeing. That's what real intimacy is supposed to feel like.", weights: { 'persona-steady-anchor': 3, 'persona-golden-retriever': 2, 'persona-devoted-builder': 2, 'persona-free-spirit': 2 } },
        { text: "Vulnerable but necessary. I needed to know they stayed after seeing that.", weights: { 'persona-nurturer': 2, 'persona-passionate-heart': 2, 'persona-gentle-flame': 2 } },
        { text: "Uncomfortable. I don't love being known that completely.", weights: { 'persona-castle-builder': 3, 'persona-ice-kingdom': 3, 'persona-silent-tide': 2 } },
        { text: "Like holding my breath and hoping they don't decide I'm too much to handle.", weights: { 'persona-fragile-flame': 3, 'persona-shadow-walker': 3, 'persona-midnight-poet': 2 } },
      ],
    },

    {
      q: "You send a vulnerable message — something real that cost you to write. Now you wait. What happens internally?",
      options: [
        { text: "I feel okay. It needed to be said. I can wait for a response without spiralling.", weights: { 'persona-steady-anchor': 3, 'persona-gentle-flame': 2, 'persona-free-spirit': 2 } },
        { text: "I immediately second-guess the wording and check my phone every few minutes.", weights: { 'persona-overthinker': 3, 'persona-burning-comet': 2, 'persona-mirror-heart': 2, 'persona-nurturer': 2 } },
        { text: "I regret opening up almost immediately and wish I had kept it to myself.", weights: { 'persona-lone-wolf': 3, 'persona-castle-builder': 3, 'persona-ice-kingdom': 2 } },
        { text: "I feel exposed in a way I can't fully name — both right to send it and horrified that I did.", weights: { 'persona-midnight-poet': 3, 'persona-shadow-walker': 2, 'persona-deep-thinker': 2 } },
      ],
    },

    {
      q: "After a real fight — one where difficult things were actually said — what does the silence afterward feel like to you?",
      options: [
        { text: "Temporary. We'll repair it when we're both ready. I'm not scared of the silence.", weights: { 'persona-steady-anchor': 3, 'persona-devoted-builder': 2, 'persona-golden-retriever': 2 } },
        { text: "Unbearable. I need to know we're okay. I'll reach out first, even if it wasn't my fault.", weights: { 'persona-passionate-heart': 3, 'persona-nurturer': 3, 'persona-burning-comet': 2 } },
        { text: "Necessary. I need the distance to process before I can come back to it.", weights: { 'persona-lone-wolf': 3, 'persona-silent-tide': 2, 'persona-castle-builder': 2 } },
        { text: "Like standing in rubble. Part of me wants to fix it immediately. Part wants to disappear.", weights: { 'persona-chaotic-dreamer': 3, 'persona-storm-chaser': 2, 'persona-shadow-walker': 2 } },
      ],
    },

    {
      q: "If love were completely safe — no possibility of loss, rejection, or being hurt — how would you love differently?",
      options: [
        { text: "Honestly, not that differently. I try to love fully already.", weights: { 'persona-steady-anchor': 2, 'persona-golden-retriever': 3, 'persona-devoted-builder': 2, 'persona-gentle-flame': 2 } },
        { text: "I'd stop second-guessing everything. I'd just be in it without the running commentary.", weights: { 'persona-overthinker': 3, 'persona-passionate-heart': 2, 'persona-mirror-heart': 2 } },
        { text: "I'd let people in faster. The walls only exist because of the risk.", weights: { 'persona-castle-builder': 3, 'persona-lone-wolf': 3, 'persona-ice-kingdom': 2 } },
        { text: "I'd stop waiting for it to collapse. I'd let myself actually believe it.", weights: { 'persona-shadow-walker': 3, 'persona-chaotic-dreamer': 3, 'persona-storm-chaser': 2, 'persona-fragile-flame': 2 } },
      ],
    },
  ],
};

export default whoAreYouInLove;
