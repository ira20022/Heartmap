// How You Fall Quiz
// Result categories: slow_burn | instant_believer | quiet_watcher | romantic | builder | secret_keeper | resistant | once_and_fully | pattern_repeater | late_bloomer

import { QuizMeta } from './attachment-style';

const howYouFallInLove: QuizMeta = {
  title: 'How do you fall in love?',
  description: 'Not a compatibility test. A portrait of how love actually begins for you — the pace, the pattern, and what it costs you to let someone in.',
  tag: 'Love Style',
  color: 'text-pink-400',
  noOfQuestion: 20,

  resultCategories: {

    // ── HOW YOU FALL ─────────────────────────────────────────────────────────

    'slow-burn': {
      label: 'The Slow Burn',
      emoji: '🌊',
      description: 'You do not fall — you arrive. Somewhere between the third conversation and the hundredth small moment, you look up and realise it has already happened. There was no lightning bolt. There was accumulation. Presence becoming warmth becoming something you cannot imagine being without. That is how it works for you, and it is more durable than most people\'s fireworks.',
      advice: 'The risk is that by the time you know you\'re in love, the other person may have already doubted your interest. Let people know they\'re mattering to you before you have the full picture — small signals are enough. You do not have to be certain to be present.',
    },

    'instant-believer': {
      label: 'The Instant Believer',
      emoji: '☄️',
      description: 'Within days, maybe hours, something clicks and you are already half in. You do not manufacture it — it simply arrives fully formed. You think about them constantly, the future builds itself in your head, and you feel more alive than you did a week ago. Your capacity to feel is extraordinary. The question is whether the other person has had enough time to feel even a fraction of it back.',
      advice: 'Your intensity is real — the problem is timing, not feeling. Let people catch up before you go all in. Holding back for the first few weeks is not suppression — it is protection for both of you. The feeling will still be there when they arrive.',
    },

    'quiet-watcher': {
      label: 'The Quiet Watcher',
      emoji: '🔍',
      description: 'You fall in love with details. The way they laugh at their own joke before the punchline. The specific word they always use. What they do when they think no one is looking. You are paying attention long before you name what you are feeling. By the time you admit it, you have been watching for a while — and what you have seen is real, not imagined.',
      advice: 'Your love is built on genuine observation, which makes it unusually accurate. The cost is that you can stay in the watching phase too long — studying instead of participating. At some point you have to stop gathering evidence and just be there with them.',
    },

    'romantic': {
      label: 'The Romantic',
      emoji: '🎭',
      description: 'You fall in love with the story as much as the person. The setting matters. The timing feels like fate. You replay the first conversation like a scene. You are drawn to the feeling that this is the beginning of something that will matter — and often you are right. Your love has texture and meaning from the first moment. It is beautiful, and occasionally it mistakes the cinematic for the real.',
      advice: 'The narrative instinct is a gift — it makes you attentive, expressive, and deeply present in early love. Watch for the moment when the story you have written starts to diverge from the person actually in front of you. Love them as they are, not as the story needs them to be.',
    },

    'builder': {
      label: 'The Builder',
      emoji: '🏗️',
      description: 'You fall in love through doing. A road trip planned together. A problem solved side by side. A running joke that only the two of you understand. Love is not something that arrives for you — it is something you construct, brick by brick, through shared experience and accumulated time. You are less interested in how a person makes you feel and more interested in who you become together.',
      advice: 'Your love is built to last because you built it deliberately. Make sure you also let yourself be in it — not just building it. Sometimes the most important moment is not the project but the quiet at the end of it. Be present there too.',
    },

    'secret-keeper': {
      label: 'The Secret Keeper',
      emoji: '🌙',
      description: 'You fall deeply and say almost nothing. The feeling is real — enormous, even — but it lives privately, expressed in the way you remember what they said three weeks ago, in the thing you did for them that you never mentioned. You show love without naming it. Some people will miss it entirely. The ones worth keeping will feel it without needing the words.',
      advice: 'Not everyone reads love in actions. Some people need to hear it, or they genuinely do not know. Consider that saying it — even once, even imperfectly — is not weakness. It is information the other person needs to choose you back.',
    },

    'resistant': {
      label: 'The Resistant One',
      emoji: '🌪️',
      description: 'You fight it. You list the reasons it is not practical, not the right time, not quite right. You talk yourself out of it at least twice before you admit what is happening. And then, having resisted it fully, you fall harder than almost anyone. The resistance was not dishonesty — it was self-protection. Which means when you finally let go, you have already made a real decision.',
      advice: 'The analysis is not the problem — the problem is when analysis becomes a permanent delay. At some point the thinking has to stop and the being-in-it has to start. You are allowed to decide to love someone. That is not naive. That is brave.',
    },

    'once-and-fully': {
      label: 'The Once and Fully',
      emoji: '🕊️',
      description: 'You do not fall often, but when you do, it is total. You are not someone who loves in passing or keeps one foot out the door. When it is real for you, it is real — without conditions, without backup plans. People sometimes mistake your carefulness for coldness. It is not. It is the silence before a very deliberate yes.',
      advice: 'Your all-or-nothing quality is a strength in the right relationship. Make sure you are choosing people who can hold that kind of love — not people who find it overwhelming or use it carelessly. You deserve someone who knows what they have.',
    },

    'pattern-repeater': {
      label: 'The Pattern Repeater',
      emoji: '🔁',
      description: 'Different face, same pull. You have a type — not just physically, but energetically. The same quality draws you in each time, whether it is intensity, mystery, unavailability, or warmth. You fall for variations of the same essential person. This is not a flaw. It tells you something precise about what you are wired to want. The question is whether what you want is also what you need.',
      advice: 'Noticing the pattern is the first move. The second is asking whether you are repeating it from genuine attraction or from familiarity. Some patterns are worth repeating. Some are worth consciously breaking. Only you know which this one is.',
    },

    'late-bloomer': {
      label: 'The Late Bloomer',
      emoji: '🌱',
      description: 'Safety comes first, feeling comes after. You need to know you are not going to be hurt before you let yourself want someone. The love arrives later than it does for others — not because it is smaller, but because you needed the ground to be solid before you let yourself stand on it. When it finally comes, it is steady and sure in a way that early love rarely is.',
      advice: 'Your caution is earned and it protects you. The risk is requiring so much certainty before you open that some people give up before you arrive. It is okay to let someone in a little before you are completely sure. Small bets are how trust gets built.',
    },
  },

  questions: [
    {
      q: 'You have been spending time with someone new. When do you first notice that something is different about them?',
      options: [
        { text: 'Slowly — I realise it weeks later, looking back', weights: { 'slow-burn': 3, 'late-bloomer': 2, 'quiet-watcher': 1 } },
        { text: 'Immediately — something shifts in the first conversation', weights: { 'instant-believer': 3, 'romantic': 2 } },
        { text: 'When I catch myself noticing specific things about them', weights: { 'quiet-watcher': 3, 'slow-burn': 1 } },
        { text: 'When the setting and moment feel like the start of something', weights: { 'romantic': 3, 'instant-believer': 1 } },
      ],
    },

    {
      q: 'In the early stages of liking someone, what is actually happening inside you?',
      options: [
        { text: 'A quiet warmth I can not quite name yet', weights: { 'slow-burn': 3, 'secret-keeper': 2, 'late-bloomer': 1 } },
        { text: 'They are already living in my head and I am already planning', weights: { 'instant-believer': 3, 'romantic': 2 } },
        { text: 'I am watching them carefully and collecting information', weights: { 'quiet-watcher': 3, 'resistant': 1 } },
        { text: 'I am telling myself reasons why this probably is not a big deal', weights: { 'resistant': 3, 'late-bloomer': 2 } },
      ],
    },

    {
      q: 'Someone asks if you like the person you have been spending time with. What do you say?',
      options: [
        { text: 'Honestly, yes — I am already pretty sure', weights: { 'instant-believer': 3, 'once-and-fully': 1 } },
        { text: 'I say I am not sure yet, even if I probably am', weights: { 'resistant': 3, 'slow-burn': 2, 'secret-keeper': 1 } },
        { text: 'I deflect — I do not like naming it before I understand it', weights: { 'secret-keeper': 3, 'quiet-watcher': 2 } },
        { text: 'I talk about the situation, the timing, what it could become', weights: { 'romantic': 3, 'builder': 1 } },
      ],
    },

    {
      q: 'What is the moment you know — really know — that you have fallen?',
      options: [
        { text: 'When I realise I have been thinking about them for weeks without noticing', weights: { 'slow-burn': 3, 'quiet-watcher': 2 } },
        { text: 'It announced itself — I just knew, suddenly and clearly', weights: { 'instant-believer': 3, 'once-and-fully': 2 } },
        { text: 'When I stop being able to argue myself out of it', weights: { 'resistant': 3, 'late-bloomer': 2 } },
        { text: 'When we do something together and I think: I want more of this', weights: { 'builder': 3, 'slow-burn': 1 } },
      ],
    },

    {
      q: 'How do you typically show someone you are interested before anything is official?',
      options: [
        { text: 'Through small, consistent actions — nothing dramatic', weights: { 'builder': 3, 'secret-keeper': 2, 'slow-burn': 1 } },
        { text: 'Probably too obviously — I am not good at hiding it', weights: { 'instant-believer': 3, 'romantic': 1 } },
        { text: 'By remembering things and bringing them back up later', weights: { 'quiet-watcher': 3, 'secret-keeper': 2 } },
        { text: 'Carefully — I wait until I am more certain before showing anything', weights: { 'once-and-fully': 3, 'late-bloomer': 2, 'resistant': 1 } },
      ],
    },

    {
      q: 'You have had feelings for someone for a while and have not said anything. Why?',
      options: [
        { text: 'I did not realise the feelings were that serious until recently', weights: { 'slow-burn': 3, 'late-bloomer': 2 } },
        { text: 'I know but saying it makes it real, and real things can break', weights: { 'once-and-fully': 3, 'resistant': 2 } },
        { text: 'I express it through what I do, not through what I say', weights: { 'secret-keeper': 3, 'builder': 2 } },
        { text: 'I have been building up to the right moment', weights: { 'romantic': 3, 'quiet-watcher': 1 } },
      ],
    },

    {
      q: 'You look back at your past relationships. What do you notice about who you have loved?',
      options: [
        { text: 'A similar quality keeps drawing me in, different people but the same pull', weights: { 'pattern-repeater': 3 } },
        { text: 'I have loved rarely but completely', weights: { 'once-and-fully': 3, 'late-bloomer': 1 } },
        { text: 'The love built over time rather than arriving all at once', weights: { 'slow-burn': 3, 'builder': 2 } },
        { text: 'I fell fast and hard more than once', weights: { 'instant-believer': 3, 'pattern-repeater': 1 } },
      ],
    },

    {
      q: 'The early part of falling for someone — before anything is confirmed — feels like…',
      options: [
        { text: 'A quiet hum I carry around without drawing attention to it', weights: { 'secret-keeper': 3, 'slow-burn': 2 } },
        { text: 'Electric — I am fully alive in a way that is hard to hide', weights: { 'instant-believer': 3, 'romantic': 2 } },
        { text: 'Interesting — I am paying close attention to everything', weights: { 'quiet-watcher': 3, 'resistant': 1 } },
        { text: 'Slightly uncomfortable — I would rather know where I stand', weights: { 'resistant': 2, 'once-and-fully': 2, 'late-bloomer': 2 } },
      ],
    },

    {
      q: 'What does falling in love actually require from you?',
      options: [
        { text: 'Time — it cannot be rushed and I cannot fake it', weights: { 'slow-burn': 3, 'once-and-fully': 2, 'late-bloomer': 2 } },
        { text: 'Almost nothing — it just happens and I go with it', weights: { 'instant-believer': 3, 'romantic': 1 } },
        { text: 'Safety — I need to trust the ground before I step onto it', weights: { 'late-bloomer': 3, 'once-and-fully': 2, 'resistant': 1 } },
        { text: 'Shared experience — I fall in love with what we build, not just who they are', weights: { 'builder': 3, 'slow-burn': 1 } },
      ],
    },

    {
      q: 'When you imagine the version of falling in love that feels most like you, it is…',
      options: [
        { text: 'Gradual and warm, like a season changing without you noticing', weights: { 'slow-burn': 3, 'builder': 2 } },
        { text: 'Sudden and total — it lands before I have had time to prepare', weights: { 'instant-believer': 3, 'once-and-fully': 1 } },
        { text: 'Private — a feeling I hold quietly long before I name it', weights: { 'secret-keeper': 3, 'resistant': 2 } },
        { text: 'A decision, as much as a feeling — I choose it deliberately', weights: { 'once-and-fully': 3, 'resistant': 2, 'late-bloomer': 1 } },
      ],
    },

    {
      q: 'A new person asks what you are looking for. What do you actually say?',
      options: [
        { text: 'Something real that builds slowly and lasts', weights: { 'slow-burn': 2, 'builder': 2, 'once-and-fully': 2 } },
        { text: 'I deflect — I am more comfortable letting it unfold than naming it', weights: { 'secret-keeper': 3, 'resistant': 2 } },
        { text: 'Something that feels like it was supposed to happen', weights: { 'romantic': 3, 'instant-believer': 1 } },
        { text: 'Someone I can do life with — a partner in the actual sense', weights: { 'builder': 3, 'slow-burn': 1 } },
      ],
    },

    {
      q: 'If love were a kind of light, yours would be…',
      options: [
        { text: 'Sunlight through a window — constant, warm, easy to stop noticing until it is gone', weights: { 'slow-burn': 3, 'builder': 2, 'secret-keeper': 1 } },
        { text: 'A struck match — immediate, bright, and impossible to ignore', weights: { 'instant-believer': 3, 'romantic': 2 } },
        { text: 'A candle in a dark room — quiet, deliberate, present without announcing itself', weights: { 'secret-keeper': 3, 'once-and-fully': 2, 'quiet-watcher': 1 } },
        { text: 'Dawn — arriving so gradually you almost miss the moment it became light', weights: { 'late-bloomer': 3, 'slow-burn': 2, 'resistant': 1 } },
      ],
    },

    {
      q: 'The thing that has surprised you most about how you love is…',
      options: [
        { text: 'How long it takes me to realise I am already in it', weights: { 'slow-burn': 3, 'quiet-watcher': 2 } },
        { text: 'How completely I go all in when it is real', weights: { 'once-and-fully': 3, 'instant-believer': 2 } },
        { text: 'How much I keep repeating a version of the same story', weights: { 'pattern-repeater': 3, 'resistant': 1 } },
        { text: 'How much I have to feel safe before I can feel anything else', weights: { 'late-bloomer': 3, 'once-and-fully': 1 } },
      ],
    },

    {
      q: 'You are falling for someone but you have not said it yet. What is stopping you?',
      options: [
        { text: 'I am still not completely certain — I need more time', weights: { 'slow-burn': 2, 'resistant': 2, 'late-bloomer': 2 } },
        { text: 'I want the moment to be right when I do', weights: { 'romantic': 3, 'once-and-fully': 1 } },
        { text: 'I am not someone who says it easily — I show it instead', weights: { 'secret-keeper': 3, 'builder': 2 } },
        { text: 'Fear — saying it gives someone something they could take away', weights: { 'once-and-fully': 2, 'resistant': 2, 'late-bloomer': 2 } },
      ],
    },

    {
      q: 'Which sentence feels most honestly like you?',
      options: [
        { text: 'I fall without noticing, then look up and realise I am already there', weights: { 'slow-burn': 3, 'quiet-watcher': 2 } },
        { text: 'I fall fast and completely and I do not apologise for it', weights: { 'instant-believer': 3, 'once-and-fully': 1 } },
        { text: 'I fall privately, long before anyone would know', weights: { 'secret-keeper': 3, 'resistant': 1 } },
        { text: 'I fall slowly, once I am sure the ground will hold', weights: { 'late-bloomer': 3, 'once-and-fully': 2 } },
      ],
    },

    {
      q: 'When a relationship ends, what do you grieve the most?',
      options: [
        { text: 'The future I had already built in my head', weights: { 'instant-believer': 3, 'romantic': 2 } },
        { text: 'The accumulated small things — the texture of everyday life together', weights: { 'builder': 3, 'slow-burn': 2 } },
        { text: 'The person I let myself become around them', weights: { 'once-and-fully': 3, 'late-bloomer': 2 } },
        { text: 'The realisation that I am back at the same starting point again', weights: { 'pattern-repeater': 3, 'resistant': 2 } },
      ],
    },

    {
      q: 'You meet someone new after a hard ending. What happens inside you?',
      options: [
        { text: 'A flicker of something, but I keep it very quiet for a long time', weights: { 'late-bloomer': 3, 'slow-burn': 2 } },
        { text: 'I notice if the pull feels familiar — and I am suspicious of it if it does', weights: { 'pattern-repeater': 3, 'resistant': 2 } },
        { text: 'I still feel it — I am not someone who shuts down easily', weights: { 'instant-believer': 2, 'romantic': 2, 'once-and-fully': 1 } },
        { text: 'I watch carefully without investing, for longer than usual', weights: { 'quiet-watcher': 3, 'resistant': 2 } },
      ],
    },

    {
      q: 'The thing love has most required you to learn is…',
      options: [
        { text: 'Patience with how slowly I arrive at my own feelings', weights: { 'slow-burn': 3, 'late-bloomer': 2 } },
        { text: 'Letting people catch up instead of pulling them forward', weights: { 'instant-believer': 3, 'romantic': 1 } },
        { text: 'Saying what I feel instead of just showing it', weights: { 'secret-keeper': 3, 'builder': 2 } },
        { text: 'Breaking a pattern I kept choosing without fully seeing it', weights: { 'pattern-repeater': 3, 'resistant': 1 } },
      ],
    },

    {
      q: 'If falling in love is a journey, yours tends to start with…',
      options: [
        { text: 'A quiet road that I do not realise I am on until I am already far down it', weights: { 'slow-burn': 3, 'quiet-watcher': 2 } },
        { text: 'A sudden departure — I am already moving before I have packed', weights: { 'instant-believer': 3, 'romantic': 2 } },
        { text: 'A deliberate step after I have checked the map carefully', weights: { 'resistant': 3, 'once-and-fully': 2, 'late-bloomer': 1 } },
        { text: 'Recognising familiar terrain — I have been here before', weights: { 'pattern-repeater': 3, 'slow-burn': 1 } },
      ],
    },

    {
      q: 'What do you wish someone had told you earlier about how you fall in love?',
      options: [
        { text: 'That it is okay to tell people they matter before you are certain', weights: { 'slow-burn': 3, 'secret-keeper': 2 } },
        { text: 'That feeling everything at once is not the same as knowing someone', weights: { 'instant-believer': 3, 'romantic': 2 } },
        { text: 'That needing safety first is not the same as being closed off', weights: { 'late-bloomer': 3, 'resistant': 2 } },
        { text: 'That the pattern I kept choosing was telling me something important', weights: { 'pattern-repeater': 3, 'once-and-fully': 1 } },
      ],
    },
  ],
};

export default howYouFallInLove;
