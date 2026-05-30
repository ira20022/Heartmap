// Who Do You Fall For Quiz
// Result categories: fixer_upper | ghost | magnetic | safe_harbour | intensity_seeker | wounded_healer | mirror | opposite | mentor | free_spirit

import { QuizMeta } from './attachment-style';

const whoDoYouFallFor: QuizMeta = {
  title: 'Who do you fall for?',
  description: 'The emotional archetypes and relationship personas you tend to attract and be drawn to — and what that pattern says about you.',
  tag: 'Persona',
  color: 'text-fuchsia-400',
  noOfQuestion: 20,

  resultCategories: {

    // ── WHO YOU FALL FOR ──────────────────────────────────────────────────────

    'fixer-upper': {
      label: 'The Fixer-Upper',
      emoji: '🔧',
      description: 'You fall for potential. Not who they are right now, but who you can see they could be — if someone loved them correctly, if life had been kinder, if they just had more time. You are drawn to the unfinished version of people. There is real beauty in that instinct. The cost is that you end up doing the renovations while they live in the house.',
      advice: 'The love is real. The problem is that people have to want to change for themselves, not because someone sees their potential. Notice whether the people you choose are actually working on themselves — or just benefiting from the belief that they could. You deserve someone who is already trying, not someone who needs you to try for them.',
    },

    'ghost': {
      label: 'The Emotionally Unavailable',
      emoji: '🌫️',
      description: 'There is something about emotional distance that reads as depth to you. The person who does not quite let you in, who is hard to read, who gives just enough and then pulls back — that is the one who holds your attention. The pursuit feels like meaning. But what you are often chasing is not a person. It is the feeling of almost having something, which is its own specific kind of intoxication.',
      advice: 'Unavailability is not complexity. Someone who keeps you at arm\'s length indefinitely is not mysterious — they are telling you something true about what they are willing to offer. The work here is learning to find emotional availability interesting instead of easy. That shift takes time, and it is worth doing.',
    },

    'magnetic': {
      label: 'The Magnetic One',
      emoji: '✨',
      description: 'You are drawn to people who light up rooms. Charismatic, confident, effortlessly compelling — the kind of person everyone notices when they walk in. Being chosen by someone like that feels like a confirmation of something. The problem is that the same energy that drew you in is available to everyone else in the room. And the person behind the magnetism is sometimes very different from the magnetism itself.',
      advice: 'Charisma is a surface. Ask what is underneath it. The most magnetic people are often the ones who have learned that being compelling is safer than being known. Look for the moments when the performance drops — what you see there is more real than anything else.',
    },

    'safe-harbour': {
      label: 'The Safe Harbour',
      emoji: '⚓',
      description: 'You fall for reliability. The person who shows up, who is consistent, who does not make you wonder where you stand. After enough turbulence — in relationships or elsewhere — the quiet steadiness of someone like this feels like coming home. You have learned to value peace over fireworks. That is not settling. That is wisdom, most of the time.',
      advice: 'Stability is a legitimate thing to need. Watch for the difference between choosing steadiness because you are ready for it, and choosing it because you are too tired to want more. You are allowed to have both safety and aliveness in the same relationship. They are not mutually exclusive.',
    },

    'intensity-seeker': {
      label: 'The Intensity Seeker',
      emoji: '⚡',
      description: 'You fall for people who make everything feel heightened. The connection has to crackle. There has to be tension, electricity, a sense that something enormous is happening. Calm relationships feel flat to you — not wrong exactly, just not quite real. You have probably had relationships that burned brilliant and fast. What you are learning is whether intensity is a feature or a warning sign. Sometimes it is both.',
      advice: 'The nervous system can mistake anxiety for attraction. What feels like electricity is sometimes just uncertainty — and uncertainty is not the same as chemistry. Try staying with someone who does not make you feel on edge. The steadiness that initially feels underwhelming sometimes becomes the most profound thing.',
    },

    'wounded-healer': {
      label: 'The Wounded One',
      emoji: '🩹',
      description: 'You are drawn to people who are carrying something. The sadness behind the eyes, the story they only tell late at night, the sense that they have been through something real and are still standing. You find that kind of depth compelling. And your instinct to meet it with care is genuine. But you have probably noticed that the person who needs the most care is not always able to give it back.',
      advice: 'Your compassion is one of your best qualities. The question is whether you are choosing wounded people because you genuinely connect with them — or because loving someone who needs you feels safer than being loved by someone who simply wants you. Those are very different dynamics, and only you know which one this is.',
    },

    'mirror': {
      label: 'The Mirror',
      emoji: '🪞',
      description: 'You fall for people who feel like a version of you. The same references, the same humour, the same way of seeing things — the uncanny sense that someone has been living a parallel life. That kind of recognition is intoxicating. You feel completely understood, sometimes before you have said very much. The risk is that what feels like deep connection is sometimes just the comfort of a reflection.',
      advice: 'Sameness is not the same as compatibility. Two people who are alike in all the obvious ways can still be completely wrong for each other — and two people who seem different can build something no one expected. Leave room for the person who is not immediately familiar. They might show you something you could not see in a mirror.',
    },

    'opposite': {
      label: 'The Opposite',
      emoji: '🧲',
      description: 'You fall for your complement. The person who has what you are missing, who moves through the world differently, who challenges your assumptions just by existing. The attraction is partly fascination — they represent something you admire in yourself but have not fully developed. That pull is real and the growth that comes from it can be extraordinary. The complication is that difference that excites you early can exhaust you later.',
      advice: 'The complementary relationship works when it is mutual — when you are both growing from the difference, not just tolerating it. Ask whether the person who is your opposite is also your equal. Complementary does not mean one of you leads and the other follows. It means both of you expand.',
    },

    'mentor': {
      label: 'The Mentor',
      emoji: '🌌',
      description: 'You fall for people who know more than you — about life, about themselves, about whatever it is you are most interested in becoming. There is an authority to them, a groundedness that makes you want to be in their orbit. Being chosen by someone like that feels like graduation. The dynamic starts to strain when you outgrow the gap — or when you realise you were looking for a teacher in a place that needed an equal.',
      advice: 'There is nothing wrong with being drawn to people who have things to teach you. The growth edge is learning to find someone who also wants to learn from you — a relationship where the teaching moves in both directions. You have more to offer than a student role. Find someone who already knows that.',
    },

    'free-spirit': {
      label: 'The Free Spirit',
      emoji: '🌬️',
      description: 'You are drawn to people who seem uncontainable — spontaneous, unconventional, living by rules they made themselves. Something in their freedom pulls at something in you. Maybe it is what you wish you could be. Maybe it is because loving someone who cannot be held feels lower stakes than loving someone who actually could stay. The free spirit is thrilling to orbit. They are very hard to build anything lasting with.',
      advice: 'Ask yourself what the freedom they represent actually means to you. Is it a quality you want in a partner? Or is it a quality you want to develop in yourself — and you have been outsourcing it by falling for people who have it instead? The most interesting version of this pattern is when you become the thing you were always drawn to.',
    },
  },

  questions: [
    {
      q: 'Someone across the room catches your attention. What is it about them?',
      options: [
        { text: 'They are the one everyone is watching — the energy in the room shifts when they speak', weights: { 'magnetic': 3, 'intensity-seeker': 1 } },
        { text: 'Something slightly sad or searching in the way they carry themselves', weights: { 'wounded-healer': 3, 'fixer-upper': 2 } },
        { text: 'They seem completely at ease — unbothered in a way that feels rare', weights: { 'free-spirit': 3, 'safe-harbour': 1 } },
        { text: 'The way they are talking to someone — there is a depth there I want to get closer to', weights: { 'mentor': 2, 'mirror': 2, 'opposite': 1 } },
      ],
    },

    {
      q: 'Early in getting to know someone, the thing that makes you lean in more is…',
      options: [
        { text: 'Sensing there is more to them than they are showing — something they are holding back', weights: { 'ghost': 3, 'wounded-healer': 2 } },
        { text: 'Realising we see the world almost exactly the same way', weights: { 'mirror': 3, 'intensity-seeker': 1 } },
        { text: 'They challenge something I said and I find myself wanting to prove myself to them', weights: { 'opposite': 2, 'mentor': 2, 'intensity-seeker': 2 } },
        { text: 'They are warm and consistent and I feel completely safe with them', weights: { 'safe-harbour': 3, 'mentor': 1 } },
      ],
    },

    {
      q: 'The relationship that has stayed with you the longest had this quality:',
      options: [
        { text: 'It felt like we were the same person in two bodies', weights: { 'mirror': 3, 'intensity-seeker': 2 } },
        { text: 'It never quite resolved — I was always trying to earn something', weights: { 'ghost': 3, 'fixer-upper': 2 } },
        { text: 'I felt like a better version of myself around them', weights: { 'mentor': 3, 'magnetic': 1 } },
        { text: 'It was electric — calm was never really part of it', weights: { 'intensity-seeker': 3, 'opposite': 1 } },
      ],
    },

    {
      q: 'A person you like is clearly going through something difficult. Your instinct is…',
      options: [
        { text: 'To move toward them — difficulty makes them more real to me, not less appealing', weights: { 'wounded-healer': 3, 'fixer-upper': 2 } },
        { text: 'To give them space while quietly making sure they know I am here', weights: { 'safe-harbour': 3, 'mirror': 1 } },
        { text: 'To see if I can fix or solve the thing they are dealing with', weights: { 'fixer-upper': 3, 'wounded-healer': 1 } },
        { text: 'To check in warmly but not get too involved until I know how they handle things', weights: { 'opposite': 2, 'mentor': 2, 'free-spirit': 1 } },
      ],
    },

    {
      q: 'The people you have loved most have tended to be…',
      options: [
        { text: 'Hard to reach — emotionally guarded or inconsistently available', weights: { 'ghost': 3, 'intensity-seeker': 2 } },
        { text: 'Carrying something — a history, a wound, something that needed tending', weights: { 'wounded-healer': 3, 'fixer-upper': 2 } },
        { text: 'Grounded, consistent, the kind of person others rely on', weights: { 'safe-harbour': 3, 'mentor': 1 } },
        { text: 'Alive in a way that made me feel more alive too — unpredictable, exciting', weights: { 'free-spirit': 3, 'magnetic': 2, 'intensity-seeker': 1 } },
      ],
    },

    {
      q: 'When someone is hard to read, you tend to…',
      options: [
        { text: 'Find it compelling — mystery holds my attention more than openness does', weights: { 'ghost': 3, 'intensity-seeker': 2 } },
        { text: 'Want to be the one who finally understands them', weights: { 'fixer-upper': 2, 'wounded-healer': 2, 'ghost': 1 } },
        { text: 'Feel slightly uneasy — I prefer to know where I stand', weights: { 'safe-harbour': 3, 'mirror': 2 } },
        { text: 'Observe more carefully — I want to understand the pattern before I invest', weights: { 'mentor': 2, 'opposite': 2 } },
      ],
    },

    {
      q: 'In your past relationships, you have most often been the one who…',
      options: [
        { text: 'Did more of the emotional work — held more, gave more, tried harder', weights: { 'fixer-upper': 3, 'wounded-healer': 2, 'ghost': 1 } },
        { text: 'Needed more space or felt slightly crowded by closeness', weights: { 'free-spirit': 3, 'opposite': 1 } },
        { text: 'Was drawn in by someone and found myself orbiting their world', weights: { 'magnetic': 3, 'mentor': 2 } },
        { text: 'Was the stable one — the person the other person relied on', weights: { 'safe-harbour': 2, 'mirror': 2 } },
      ],
    },

    {
      q: 'The first thing that makes you feel genuinely close to someone new is…',
      options: [
        { text: 'When they tell me something they do not tell many people', weights: { 'wounded-healer': 3, 'ghost': 2 } },
        { text: 'When I realise they think about things the way I do', weights: { 'mirror': 3, 'mentor': 1 } },
        { text: 'When they say something that completely changes how I see something', weights: { 'mentor': 3, 'opposite': 2 } },
        { text: 'When the energy between us is undeniable and neither of us has named it yet', weights: { 'intensity-seeker': 3, 'magnetic': 2 } },
      ],
    },

    {
      q: 'You have been dating someone kind, consistent, and genuinely available. After a few weeks, you notice…',
      options: [
        { text: 'I feel safe in a way I am not fully used to — and I am staying', weights: { 'safe-harbour': 3, 'wounded-healer': 1 } },
        { text: 'Something feels a little flat — I keep waiting for tension that is not there', weights: { 'intensity-seeker': 3, 'ghost': 2, 'free-spirit': 1 } },
        { text: 'I like them but I am not sure they challenge me enough', weights: { 'mentor': 2, 'opposite': 2, 'free-spirit': 2 } },
        { text: 'I am surprised by how much I like this — it is not what I usually go for', weights: { 'ghost': 2, 'intensity-seeker': 2, 'fixer-upper': 2 } },
      ],
    },

    {
      q: 'Someone you are interested in is clearly your opposite in several key ways. Your response is…',
      options: [
        { text: 'Intrigued — I am drawn to people who have what I do not', weights: { 'opposite': 3, 'free-spirit': 1 } },
        { text: 'Cautious — difference excites me early and tends to exhaust me later', weights: { 'mirror': 2, 'safe-harbour': 2 } },
        { text: 'Excited — the friction makes it feel real', weights: { 'intensity-seeker': 3, 'opposite': 2 } },
        { text: 'Open but watching — I want to see whether the difference is interesting or just incompatible', weights: { 'mentor': 2, 'mirror': 2 } },
      ],
    },

    {
      q: 'The version of love you find hardest to trust is…',
      options: [
        { text: 'Love that is quiet and consistent — it feels too easy to be real', weights: { 'intensity-seeker': 3, 'ghost': 2 } },
        { text: 'Love that comes with no cracks — I trust people I can see have been through something', weights: { 'wounded-healer': 3, 'fixer-upper': 1 } },
        { text: 'Love that asks me to be different from who I am', weights: { 'free-spirit': 3, 'mirror': 2 } },
        { text: 'Love that arrives before I feel I have earned it', weights: { 'mentor': 2, 'magnetic': 2, 'fixer-upper': 1 } },
      ],
    },

    {
      q: 'When you imagine your ideal partner, the quality that rises above everything else is…',
      options: [
        { text: 'They are completely themselves — no performance, no mask', weights: { 'free-spirit': 3, 'opposite': 1 } },
        { text: 'They are wise — they know themselves and they know how to love', weights: { 'mentor': 3, 'safe-harbour': 2 } },
        { text: 'They make me feel more alive than I do on my own', weights: { 'magnetic': 3, 'intensity-seeker': 2 } },
        { text: 'They understand me in a way that requires very little explanation', weights: { 'mirror': 3, 'wounded-healer': 1 } },
      ],
    },

    {
      q: 'You reflect on someone you loved who was not good for you. The honest reason you stayed was…',
      options: [
        { text: 'I kept believing they would become who I could see they could be', weights: { 'fixer-upper': 3, 'wounded-healer': 2 } },
        { text: 'The moments when it was good were unlike anything I had felt before', weights: { 'intensity-seeker': 3, 'magnetic': 2 } },
        { text: 'I could not quite get what I needed from them, and I could not stop trying', weights: { 'ghost': 3, 'fixer-upper': 1 } },
        { text: 'Leaving felt like losing a version of myself I had built around them', weights: { 'mirror': 3, 'mentor': 2 } },
      ],
    },

    {
      q: 'A person confides something vulnerable to you on an early date. You feel…',
      options: [
        { text: 'Moved — I feel more connected to people when I see their difficulty', weights: { 'wounded-healer': 3, 'fixer-upper': 2 } },
        { text: 'Trusted — and careful to honour that by not moving too fast', weights: { 'safe-harbour': 3, 'mentor': 1 } },
        { text: 'Interested — I want to understand how they got to where they are', weights: { 'opposite': 2, 'mirror': 2, 'mentor': 1 } },
        { text: 'Slightly overwhelmed — it is a lot for an early date and I need time to process', weights: { 'free-spirit': 3, 'intensity-seeker': 1 } },
      ],
    },

    {
      q: 'The relationship dynamic that has felt most like home to you is…',
      options: [
        { text: 'Two people who are genuinely free — no pressure, no possession', weights: { 'free-spirit': 3, 'ghost': 1 } },
        { text: 'A slow burn where the love built through everything we did together', weights: { 'safe-harbour': 3, 'mirror': 1 } },
        { text: 'A deep recognition — the feeling that we already knew each other somehow', weights: { 'mirror': 3, 'intensity-seeker': 2 } },
        { text: 'Something that pushed me — I came out of it more than I went in', weights: { 'mentor': 3, 'opposite': 2 } },
      ],
    },

    {
      q: 'If love were showing you something about yourself through the people you choose, what would it be saying?',
      options: [
        { text: 'That I am more comfortable giving love than receiving it freely', weights: { 'fixer-upper': 3, 'wounded-healer': 2, 'ghost': 1 } },
        { text: 'That I am still looking for something in others that I have not found in myself', weights: { 'mentor': 2, 'free-spirit': 2, 'magnetic': 2 } },
        { text: 'That I find intensity easier to believe in than steadiness', weights: { 'intensity-seeker': 3, 'ghost': 2 } },
        { text: 'That I want to be deeply understood by one person more than anything else', weights: { 'mirror': 3, 'safe-harbour': 1 } },
      ],
    },

    {
      q: 'Which sentence most honestly describes your attraction pattern?',
      options: [
        { text: 'I fall for people I can see the potential in, and stay longer than I should trying to reach it', weights: { 'fixer-upper': 3, 'ghost': 1 } },
        { text: 'I fall for people who make me feel something undeniable — even if undeniable is not the same as good', weights: { 'intensity-seeker': 3, 'magnetic': 2 } },
        { text: 'I fall for people who feel like home — familiar, steady, already known', weights: { 'mirror': 2, 'safe-harbour': 2 } },
        { text: 'I fall for people who have something I want — wisdom, freedom, or a life I find magnetic', weights: { 'mentor': 2, 'free-spirit': 2, 'magnetic': 1 } },
      ],
    },

    {
      q: 'What do you most want someone who loves you to understand about how you work?',
      options: [
        { text: 'That I give a lot and I need someone who actually has capacity to receive it', weights: { 'fixer-upper': 2, 'wounded-healer': 3 } },
        { text: 'That I need room to breathe — love and freedom have to coexist for me', weights: { 'free-spirit': 3, 'opposite': 1 } },
        { text: 'That being known completely — not just the good parts — is what I am actually looking for', weights: { 'mirror': 3, 'safe-harbour': 2 } },
        { text: 'That I do not just want love — I want a relationship that makes both of us more', weights: { 'mentor': 3, 'opposite': 2 } },
      ],
    },

    {
      q: 'Looking at who you have loved, the honest pattern is…',
      options: [
        { text: 'Different people, but something about the distance or the difficulty has been consistent', weights: { 'ghost': 3, 'intensity-seeker': 2, 'fixer-upper': 1 } },
        { text: 'I have mostly chosen people who needed more than they could give back', weights: { 'wounded-healer': 3, 'fixer-upper': 2 } },
        { text: 'I have chosen people who were fundamentally good for me, even if the timing was not', weights: { 'safe-harbour': 3, 'mirror': 2 } },
        { text: 'I have chosen people who expanded me — and sometimes outgrew the relationship', weights: { 'mentor': 3, 'opposite': 2, 'free-spirit': 1 } },
      ],
    },
  ],
};

export default whoDoYouFallFor;
