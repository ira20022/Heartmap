'use client';
import React, { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import AppLogo from '@/components/ui/AppLogo';
import { Toaster } from 'sonner';
import QuestionCard from './QuestionCard';
import AnalyzingScreen from './AnalyzingScreen';

export interface Question {
  id: string;
  number: number;
  signal: string;
  signalColor: string;
  scenario: string;
  context: string;
  options: {
    id: string;
    text: string;
    subtext: string;
  }[];
}


export const QUESTIONS: Question[] = [
  {
    id: 'q-001',
    number: 1,
    signal: 'Attachment Style',
    signalColor: 'text-rose-400',
    scenario: 'You\'ve been texting someone you like for three days straight. Then — silence. No reply for 18 hours.',
    context: 'Your phone sits there. The last message was yours.',
    options: [
      { id: 'q001-a', text: 'Give them space, no big deal', subtext: 'They\'re probably just busy. I\'ll hear from them.' },
      { id: 'q001-b', text: 'Send a casual follow-up text', subtext: 'Just checking in — keeping it light but I need to know.' },
      { id: 'q001-c', text: 'Replay every conversation for clues', subtext: 'Something I said must have changed things. What was it?' },
      { id: 'q001-d', text: 'Pull back and protect yourself', subtext: 'If they wanted to reply, they would. I\'m not chasing.' },
    ],
  },
  {
    id: 'q-002',
    number: 2,
    signal: 'Conflict Behavior',
    signalColor: 'text-violet-400',
    scenario: 'Your partner says something that genuinely hurts you — in front of other people at a dinner.',
    context: 'Everyone at the table heard. They don\'t seem to realize.',
    options: [
      { id: 'q002-a', text: 'Stay quiet, address it privately later', subtext: 'Not the place. I\'ll bring it up when we\'re alone.' },
      { id: 'q002-b', text: 'Laugh it off but feel it internally', subtext: 'Keep the peace now. Carry it quietly.' },
      { id: 'q002-c', text: 'Gently call it out in the moment', subtext: 'That actually hurt — and they should know right now.' },
      { id: 'q002-d', text: 'Go cold for the rest of the evening', subtext: 'They\'ll figure out something\'s wrong. I shouldn\'t have to explain.' },
    ],
  },
  {
    id: 'q-003',
    number: 3,
    signal: 'Emotional Openness',
    signalColor: 'text-blue-400',
    scenario: 'Three months in and things feel real. Your partner says, "I think I\'m falling for you."',
    context: 'You feel it too. But saying it out loud feels enormous.',
    options: [
      { id: 'q003-a', text: 'Say it back immediately and mean it', subtext: 'I\'ve been waiting to say this. Of course I feel it too.' },
      { id: 'q003-b', text: 'Smile and hold their hand instead', subtext: 'I can\'t find the words but I want them to feel my answer.' },
      { id: 'q003-c', text: 'Ask what they mean by that', subtext: 'I want to make sure we\'re talking about the same thing.' },
      { id: 'q003-d', text: 'Change the subject with a joke', subtext: 'I\'m not ready for this conversation yet.' },
    ],
  },
  {
    id: 'q-004',
    number: 4,
    signal: 'Independence vs Closeness',
    signalColor: 'text-amber-400',
    scenario: 'Your partner wants to spend every weekend together. You value your alone time deeply.',
    context: 'They\'re not demanding — they just genuinely want to be with you.',
    options: [
      { id: 'q004-a', text: 'Compromise — some weekends together, some solo', subtext: 'Balance is everything. We can make this work.' },
      { id: 'q004-b', text: 'Embrace it — I love being around them', subtext: 'My alone time can wait. This is what I want.' },
      { id: 'q004-c', text: 'Feel quietly suffocated but say nothing', subtext: 'I don\'t want to hurt them but I need breathing room.' },
      { id: 'q004-d', text: 'Set clear calendar boundaries upfront', subtext: 'I need to be honest about what works for me.' },
    ],
  },
  {
    id: 'q-005',
    number: 5,
    signal: 'Reassurance Seeking',
    signalColor: 'text-pink-400',
    scenario: 'You notice your partner has been less affectionate than usual for the past week.',
    context: 'Nothing dramatic happened. They seem fine — just quieter.',
    options: [
      { id: 'q005-a', text: 'Assume they\'re just going through something', subtext: 'It\'s not about me. I\'ll be here when they\'re ready.' },
      { id: 'q005-b', text: 'Wonder if you did something wrong', subtext: 'The silence feels pointed. I keep replaying things.' },
      { id: 'q005-c', text: 'Ask directly if everything\'s okay between us', subtext: 'I\'d rather know than spiral. Let\'s just talk.' },
      { id: 'q005-d', text: 'Match their energy and pull back too', subtext: 'If they\'re distant, I\'ll be distant. Self-protection.' },
    ],
  },
  {
    id: 'q-006',
    number: 6,
    signal: 'Trust Patterns',
    signalColor: 'text-teal-400',
    scenario: 'Your partner mentions their ex casually in a story — with warmth, not bitterness.',
    context: 'The relationship ended years ago. They seem completely over it.',
    options: [
      { id: 'q006-a', text: 'Feel fine — past is past', subtext: 'People have histories. It doesn\'t threaten what we have.' },
      { id: 'q006-b', text: 'Notice it but not bring it up', subtext: 'I\'m fine. Mostly. I\'ll just quietly file that away.' },
      { id: 'q006-c', text: 'Casually ask more questions about them', subtext: 'Just curious. Totally casual. I just want to understand.' },
      { id: 'q006-d', text: 'Feel irritated but tell yourself it\'s irrational', subtext: 'I know I\'m being silly. But I can\'t help how I feel.' },
    ],
  },
  {
    id: 'q-007',
    number: 7,
    signal: 'Vulnerability Threshold',
    signalColor: 'text-indigo-400',
    scenario: 'Things ended with someone you cared about deeply. You\'re talking to a close friend about it.',
    context: 'They\'re listening. You could say anything right now.',
    options: [
      { id: 'q007-a', text: 'Let it all out — cry, vent, the whole thing', subtext: 'I need to feel this fully before I can move forward.' },
      { id: 'q007-b', text: 'Give the facts, keep the feelings private', subtext: 'Here\'s what happened. I\'m dealing with the rest alone.' },
      { id: 'q007-c', text: 'Downplay it — "I\'m fine, honestly"', subtext: 'I don\'t want to make it a big thing. I\'ll be okay.' },
      { id: 'q007-d', text: 'Analyze what went wrong, not how you feel', subtext: 'If I understand the pattern, I can avoid it next time.' },
    ],
  },
  {
    id: 'q-008',
    number: 8,
    signal: 'Love Language Expression',
    signalColor: 'text-orange-400',
    scenario: 'You want someone you care about to know how much they mean to you.',
    context: 'No special occasion. Just a regular Tuesday.',
    options: [
      { id: 'q008-a', text: 'Write them a long, heartfelt message', subtext: 'I want them to have something they can read again.' },
      { id: 'q008-b', text: 'Make their favourite meal without being asked', subtext: 'I show love through what I do, not what I say.' },
      { id: 'q008-c', text: 'Give them a long, unexpected hug', subtext: 'Words feel insufficient. Being close says it better.' },
      { id: 'q008-d', text: 'Find something small that reminded you of them', subtext: 'I saw it and thought of you — that\'s the whole message.' },
    ],
  },
  {
    id: 'q-009',
    number: 9,
    signal: 'Commitment Readiness',
    signalColor: 'text-cyan-400',
    scenario: 'You\'ve been seeing someone for two months. They bring up "where is this going?"',
    context: 'You like them. But the question catches you off guard.',
    options: [
      { id: 'q009-a', text: 'Feel ready — you\'ve been thinking the same thing', subtext: 'I\'ve been waiting for this conversation. Let\'s define it.' },
      { id: 'q009-b', text: 'Appreciate the honesty and share where you\'re at', subtext: 'I like you. I\'m not ready to label it yet, but I\'m here.' },
      { id: 'q009-c', text: 'Deflect with humour to buy more time', subtext: 'I\'m not ready for this but I don\'t want to lose them either.' },
      { id: 'q009-d', text: 'Feel the urge to slow things down immediately', subtext: 'Pressure makes me want to pull back, even if I care.' },
    ],
  },
  {
    id: 'q-010',
    number: 10,
    signal: 'Jealousy Response',
    signalColor: 'text-red-400',
    scenario: 'Your partner gets noticeably flirted with at a party — and seems to enjoy the attention.',
    context: 'They haven\'t done anything wrong. But you feel it.',
    options: [
      { id: 'q010-a', text: 'Feel secure — they came with me, they\'re leaving with me', subtext: 'A little attention doesn\'t threaten what we have.' },
      { id: 'q010-b', text: 'Subtly move closer to signal your presence', subtext: 'Not possessive — just reminding everyone we\'re together.' },
      { id: 'q010-c', text: 'Go quiet and process it internally all night', subtext: 'I won\'t say anything but I\'ll be replaying this later.' },
      { id: 'q010-d', text: 'Bring it up honestly on the way home', subtext: 'I felt something. I\'d rather say it than stew in it.' },
    ],
  },
  {
    id: 'q-011',
    number: 11,
    signal: 'Repair Instinct',
    signalColor: 'text-lime-400',
    scenario: 'You and your partner had a real argument. It ended without resolution — just silence.',
    context: 'A day has passed. Neither of you has reached out.',
    options: [
      { id: 'q011-a', text: 'Reach out first — pride isn\'t worth the distance', subtext: 'I don\'t care who was right. I want us to be okay.' },
      { id: 'q011-b', text: 'Wait for them to come to you', subtext: 'I need them to show they care enough to fix this.' },
      { id: 'q011-c', text: 'Send a message — but keep it measured', subtext: 'I\'ll open the door but I won\'t walk through it alone.' },
      { id: 'q011-d', text: 'Stay silent until the tension naturally dissolves', subtext: 'Time fixes most things. I\'d rather not force it.' },
    ],
  },
  {
    id: 'q-012',
    number: 12,
    signal: 'Future Orientation',
    signalColor: 'text-purple-400',
    scenario: 'A great opportunity comes up — but it would mean moving cities away from your partner.',
    context: 'You\'ve been together eight months. Things are good.',
    options: [
      { id: 'q012-a', text: 'Take it — the right person will make long-distance work', subtext: 'My growth matters. Love adapts if it\'s real.' },
      { id: 'q012-b', text: 'Turn it down — what we have is worth more', subtext: 'Opportunities come again. This connection might not.' },
      { id: 'q012-c', text: 'Have a serious conversation before deciding anything', subtext: 'This affects both of us. We decide together.' },
      { id: 'q012-d', text: 'Feel paralysed — you can\'t imagine either choice', subtext: 'I want everything and I\'m terrified of losing something.' },
    ],
  },
  {
    id: 'q-013',
    number: 13,
    signal: 'Emotional Availability',
    signalColor: 'text-fuchsia-400',
    scenario: 'Someone you\'re dating asks you what scares you most in relationships.',
    context: 'The question feels unexpectedly personal.',
    options: [
      { id: 'q013-a', text: 'Answer honestly and openly', subtext: 'If we\'re building something real, they should know me fully.' },
      { id: 'q013-b', text: 'Keep the answer light and surface-level', subtext: 'I\'m not ready to expose the deeper stuff yet.' },
      { id: 'q013-c', text: 'Turn the question back on them first', subtext: 'I\'d rather understand them before revealing myself.' },
      { id: 'q013-d', text: 'Joke your way around the conversation', subtext: 'Humour feels safer than vulnerability right now.' },
    ],
  },
  {
    id: 'q-014',
    number: 14,
    signal: 'Communication Style',
    signalColor: 'text-sky-400',
    scenario: 'Your partner seems upset but insists that everything is fine.',
    context: 'You can clearly feel the tension between you.',
    options: [
      { id: 'q014-a', text: 'Gently keep checking in', subtext: 'I don\'t want things to build up silently between us.' },
      { id: 'q014-b', text: 'Respect their space and wait', subtext: 'They\'ll talk when they\'re ready.' },
      { id: 'q014-c', text: 'Feel anxious and overthink the silence', subtext: 'I keep wondering what I did wrong.' },
      { id: 'q014-d', text: 'Get frustrated and emotionally shut down too', subtext: 'If they won\'t communicate, I stop trying.' },
    ],
  },
  {
    id: 'q-015',
    number: 15,
    signal: 'Security in Love',
    signalColor: 'text-emerald-400',
    scenario: 'Your partner is extremely busy for two weeks and can barely text.',
    context: 'They warned you ahead of time and still try when they can.',
    options: [
      { id: 'q015-a', text: 'Feel secure and supportive', subtext: 'Life gets busy sometimes. It doesn\'t change how they feel.' },
      { id: 'q015-b', text: 'Need occasional reassurance to stay calm', subtext: 'A little effort goes a long way for me.' },
      { id: 'q015-c', text: 'Start emotionally distancing yourself', subtext: 'I prepare for disappointment before it hits me.' },
      { id: 'q015-d', text: 'Become hyper-aware of every small interaction', subtext: 'I start searching for signs that something changed.' },
    ],
  },
  {
    id: 'q-016',
    number: 16,
    signal: 'Boundaries',
    signalColor: 'text-yellow-400',
    scenario: 'A partner keeps making plans for you both without asking first.',
    context: 'They mean well — but it\'s starting to bother you.',
    options: [
      { id: 'q016-a', text: 'Bring it up calmly and directly', subtext: 'Small frustrations grow if they stay unspoken.' },
      { id: 'q016-b', text: 'Go along with it to avoid tension', subtext: 'It\'s easier than disappointing them.' },
      { id: 'q016-c', text: 'Feel resentful but hope they notice', subtext: 'I wish they\'d naturally realize it\'s too much.' },
      { id: 'q016-d', text: 'Start creating distance and saying no more often', subtext: 'I need to reclaim some space for myself.' },
    ],
  },
  {
    id: 'q-017',
    number: 17,
    signal: 'Romantic Idealism',
    signalColor: 'text-rose-500',
    scenario: 'You realize your partner has habits that genuinely annoy you.',
    context: 'Nothing major — just the reality of getting closer to someone.',
    options: [
      { id: 'q017-a', text: 'Accept it as part of loving a real person', subtext: 'No relationship is perfect all the time.' },
      { id: 'q017-b', text: 'Fixate on whether it means you\'re incompatible', subtext: 'What if this is a sign of bigger issues?' },
      { id: 'q017-c', text: 'Bring it up playfully and honestly', subtext: 'Small conversations keep resentment from building.' },
      { id: 'q017-d', text: 'Ignore it outwardly but stew internally', subtext: 'I don\'t want conflict, but it keeps bothering me.' },
    ],
  },
  {
    id: 'q-018',
    number: 18,
    signal: 'Fear of Rejection',
    signalColor: 'text-slate-400',
    scenario: 'You\'re thinking about confessing feelings to someone you\'ve grown close to.',
    context: 'There\'s a real chance they might not feel the same.',
    options: [
      { id: 'q018-a', text: 'Tell them anyway — clarity matters more than fear', subtext: 'I\'d rather know than wonder forever.' },
      { id: 'q018-b', text: 'Drop subtle hints first', subtext: 'I need some sign it\'s safe before risking it.' },
      { id: 'q018-c', text: 'Wait until the timing feels perfect', subtext: 'Maybe eventually the right moment will appear.' },
      { id: 'q018-d', text: 'Say nothing and keep the feelings private', subtext: 'Rejection would hurt more than silence.' },
    ],
  },
  {
    id: 'q-019',
    number: 19,
    signal: 'Emotional Dependence',
    signalColor: 'text-blue-500',
    scenario: 'You\'re having a terrible day and your partner is unavailable for most of it.',
    context: 'They warned you beforehand, but emotionally you still feel alone.',
    options: [
      { id: 'q019-a', text: 'Handle it yourself and reconnect later', subtext: 'I can support myself even when I miss them.' },
      { id: 'q019-b', text: 'Wish they were more emotionally present', subtext: 'I understand — but it still hurts a little.' },
      { id: 'q019-c', text: 'Feel abandoned even if it\'s irrational', subtext: 'Their absence feels bigger than it probably is.' },
      { id: 'q019-d', text: 'Pull away emotionally for the rest of the day', subtext: 'If they\'re unavailable, I stop expecting anything.' },
    ],
  },
  {
    id: 'q-020',
    number: 20,
    signal: 'Conflict Recovery',
    signalColor: 'text-red-500',
    scenario: 'An argument ends with both of you apologizing — but the mood still feels off.',
    context: 'The issue is technically resolved, but emotionally it lingers.',
    options: [
      { id: 'q020-a', text: 'Reconnect naturally and move forward', subtext: 'Not every disagreement needs to linger forever.' },
      { id: 'q020-b', text: 'Need extra reassurance afterward', subtext: 'I want to feel emotionally close again before relaxing.' },
      { id: 'q020-c', text: 'Replay the argument repeatedly in your mind', subtext: 'I keep wondering what the conflict really meant.' },
      { id: 'q020-d', text: 'Stay emotionally guarded for a while', subtext: 'It takes time for me to fully soften again.' },
    ],
  },
  {
    id: 'q-021',
    number: 21,
    signal: 'Need for Validation',
    signalColor: 'text-pink-500',
    scenario: 'You post a photo you love and your partner barely reacts to it.',
    context: 'Other people noticed it immediately.',
    options: [
      { id: 'q021-a', text: 'Not think much of it', subtext: 'Social media reactions don\'t define our relationship.' },
      { id: 'q021-b', text: 'Quietly wish they were more expressive', subtext: 'A little enthusiasm would have meant a lot.' },
      { id: 'q021-c', text: 'Wonder if they\'re losing interest', subtext: 'My mind immediately starts connecting dots.' },
      { id: 'q021-d', text: 'Avoid bringing it up but feel hurt', subtext: 'It feels small and silly — but still personal.' },
    ],
  },
  {
    id: 'q-022',
    number: 22,
    signal: 'Intimacy Pace',
    signalColor: 'text-violet-500',
    scenario: 'Someone you\'re dating wants to meet your family much sooner than expected.',
    context: 'Things are going well, but it feels fast.',
    options: [
      { id: 'q022-a', text: 'Feel excited and ready', subtext: 'If it feels right, I don\'t need arbitrary timelines.' },
      { id: 'q022-b', text: 'Agree but feel nervous internally', subtext: 'I want this — I just need time to adjust emotionally.' },
      { id: 'q022-c', text: 'Ask to slow things down slightly', subtext: 'I care about this enough to move thoughtfully.' },
      { id: 'q022-d', text: 'Feel overwhelmed and instinctively retreat', subtext: 'Too much closeness too quickly makes me panic.' },
    ],
  },
  {
    id: 'q-023',
    number: 23,
    signal: 'Expression of Affection',
    signalColor: 'text-orange-500',
    scenario: 'Your partner surprises you with an incredibly thoughtful gesture.',
    context: 'It\'s obvious they paid attention to something small you once mentioned.',
    options: [
      { id: 'q023-a', text: 'Express gratitude openly and emotionally', subtext: 'Moments like this make me feel deeply seen.' },
      { id: 'q023-b', text: 'Feel touched but slightly awkward', subtext: 'I love it — I\'m just not great at receiving affection.' },
      { id: 'q023-c', text: 'Immediately want to reciprocate equally', subtext: 'I feel pressure to give back the same energy.' },
      { id: 'q023-d', text: 'Downplay how much it affected you', subtext: 'Being emotionally exposed feels vulnerable.' },
    ],
  },
  {
    id: 'q-024',
    number: 24,
    signal: 'Emotional Honesty',
    signalColor: 'text-cyan-500',
    scenario: 'Your partner asks if something has been bothering you lately.',
    context: 'You\'ve actually been carrying a lot internally.',
    options: [
      { id: 'q024-a', text: 'Open up honestly about what\'s going on', subtext: 'I want emotional transparency between us.' },
      { id: 'q024-b', text: 'Share only part of the truth', subtext: 'I\'m not ready to unpack everything yet.' },
      { id: 'q024-c', text: 'Say you\'re fine even though you\'re not', subtext: 'I don\'t want to burden them with my emotions.' },
      { id: 'q024-d', text: 'Deflect and change the subject', subtext: 'Talking about emotions feels uncomfortable right now.' },
    ],
  },
  {
    id: 'q-025',
    number: 25,
    signal: 'Attachment Security',
    signalColor: 'text-emerald-500',
    scenario: 'Your partner goes on a trip with friends and barely checks their phone.',
    context: 'You won\'t properly talk for a few days.',
    options: [
      { id: 'q025-a', text: 'Enjoy your own time and reconnect later', subtext: 'Distance doesn\'t automatically create insecurity for me.' },
      { id: 'q025-b', text: 'Miss them but stay emotionally steady', subtext: 'I feel the absence, but not panic.' },
      { id: 'q025-c', text: 'Need more communication to feel okay', subtext: 'Silence starts affecting my emotional state quickly.' },
      { id: 'q025-d', text: 'Assume something feels different between you', subtext: 'My brain starts preparing for rejection.' },
    ],
  },
  {
    id: 'q-026',
    number: 26,
    signal: 'Response to Criticism',
    signalColor: 'text-yellow-500',
    scenario: 'Your partner gives you honest feedback about something you do that bothers them.',
    context: 'They say it kindly, but it still stings.',
    options: [
      { id: 'q026-a', text: 'Listen openly and try to understand', subtext: 'Feedback doesn\'t automatically mean rejection.' },
      { id: 'q026-b', text: 'Feel hurt but appreciate the honesty', subtext: 'It\'s uncomfortable, but important.' },
      { id: 'q026-c', text: 'Get defensive before reflecting later', subtext: 'My first instinct is usually self-protection.' },
      { id: 'q026-d', text: 'Shut down emotionally after hearing it', subtext: 'Criticism tends to hit deeper than people realize.' },
    ],
  },
  {
    id: 'q-027',
    number: 27,
    signal: 'Romantic Consistency',
    signalColor: 'text-lime-500',
    scenario: 'The honeymoon phase fades and the relationship feels calmer and more routine.',
    context: 'Nothing is wrong — it just feels less intense now.',
    options: [
      { id: 'q027-a', text: 'Feel comforted by the stability', subtext: 'Consistency can be its own form of intimacy.' },
      { id: 'q027-b', text: 'Miss the intensity but still feel connected', subtext: 'I notice the shift, but it doesn\'t scare me.' },
      { id: 'q027-c', text: 'Worry the spark is disappearing', subtext: 'I start questioning what the change means.' },
      { id: 'q027-d', text: 'Feel restless and emotionally detached', subtext: 'Calmness sometimes feels too much like boredom.' },
    ],
  },
  {
    id: 'q-028',
    number: 28,
    signal: 'Trust in Communication',
    signalColor: 'text-indigo-500',
    scenario: 'Your partner says they need a night alone to recharge.',
    context: 'They reassure you it\'s not about the relationship.',
    options: [
      { id: 'q028-a', text: 'Completely respect and understand it', subtext: 'Healthy people need personal space sometimes.' },
      { id: 'q028-b', text: 'Understand it logically but still feel unsure', subtext: 'Part of me wonders if something else is going on.' },
      { id: 'q028-c', text: 'Take it personally at first', subtext: 'Distance can feel emotionally loaded to me.' },
      { id: 'q028-d', text: 'Withdraw before they can withdraw further', subtext: 'I instinctively protect myself from rejection.' },
    ],
  },
  {
    id: 'q-029',
    number: 29,
    signal: 'Relationship Priorities',
    signalColor: 'text-purple-500',
    scenario: 'Your career suddenly becomes demanding during an important phase of your relationship.',
    context: 'You care deeply about both.',
    options: [
      { id: 'q029-a', text: 'Communicate openly and try balancing both', subtext: 'Healthy relationships adapt through changing seasons.' },
      { id: 'q029-b', text: 'Prioritize the relationship emotionally', subtext: 'Connection matters more to me than achievement.' },
      { id: 'q029-c', text: 'Throw yourself into work and emotionally disconnect', subtext: 'Stress makes me withdraw from intimacy.' },
      { id: 'q029-d', text: 'Feel torn and guilty no matter what you choose', subtext: 'It feels impossible to fully satisfy both worlds.' },
    ],
  },
  {
    id: 'q-030',
    number: 30,
    signal: 'Long-Term Emotional Readiness',
    signalColor: 'text-rose-600',
    scenario: 'Your partner starts talking seriously about building a future together.',
    context: 'This is the kind of conversation that changes things permanently.',
    options: [
      { id: 'q030-a', text: 'Feel excited and emotionally grounded', subtext: 'Commitment feels meaningful rather than scary.' },
      { id: 'q030-b', text: 'Feel hopeful but cautious', subtext: 'I want this — I just need emotional certainty too.' },
      { id: 'q030-c', text: 'Become anxious about expectations', subtext: 'Big emotional commitments make me overthink everything.' },
      { id: 'q030-d', text: 'Feel the urge to create emotional distance', subtext: 'Part of me wants closeness while another part wants escape.' },
    ],
  },
];


export const QUESTION_CATEGORIES = {
  attachment: ['q-001', 'q-005', 'q-015', 'q-025'],
  communication: ['q-002', 'q-014', 'q-024', 'q-026'],
  emotionalOpenness: ['q-003', 'q-007', 'q-013', 'q-017'],
  independence: ['q-004', 'q-016', 'q-028', 'q-029'],
  trustAndJealousy: ['q-006', 'q-010', 'q-021', 'q-022'],
  commitment: ['q-009', 'q-012', 'q-018', 'q-030'],
  conflictRepair: ['q-011', 'q-019', 'q-020', 'q-027'],
  vulnerability: ['q-008', 'q-023'],
};

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};


export const ANALYTIC_DIMENSIONS = {
  attachmentSecurity: [
    'q-001', 'q-005', 'q-015', 'q-025', 'q-028'
  ],
  emotionalAvailability: [
    'q-003', 'q-007', 'q-013', 'q-024'
  ],
  communicationStyle: [
    'q-002', 'q-011', 'q-014', 'q-020', 'q-026'
  ],
  independenceVsCloseness: [
    'q-004', 'q-016', 'q-029'
  ],
  jealousyAndTrust: [
    'q-006', 'q-010', 'q-021'
  ],
  commitmentReadiness: [
    'q-009', 'q-012', 'q-018', 'q-030'
  ],
  emotionalIntensity: [
    'q-017', 'q-019', 'q-027'
  ],
  vulnerability: [
    'q-008', 'q-023'
  ],
};



export const generateQuizQuestions = (): Question[] => {
  const selectedIds = new Set<string>();

  // Pick at least 1-2 from every category
  Object.values(QUESTION_CATEGORIES).forEach((categoryQuestions) => {
    const shuffled = shuffleArray(categoryQuestions);

    // pick 1 or 2 randomly from each category
    const count = Math.random() > 0.5 ? 2 : 1;

    shuffled.slice(0, count).forEach((id) => {
      selectedIds.add(id);
    });
  });

  // Fill remaining until total = 12
  const allIds = QUESTIONS.map((q) => q.id);
  const remaining = shuffleArray(
    allIds.filter((id) => !selectedIds.has(id))
  );

  while (selectedIds.size < 12 && remaining.length > 0) {
    selectedIds.add(remaining.pop()!);
  }

  // Map ids back to questions
  const selectedQuestions = QUESTIONS.filter((q) =>
    selectedIds.has(q.id)
  );

  // Shuffle final order shown to user
  return shuffleArray(selectedQuestions).map((q, index) => ({
    ...q,
    number: index + 1,
  }));
};


export type AnswerMap = Record<string, string>;

export default function QuizClient() {
  const router = useRouter();
  const sessionQuestions = useMemo(() => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 12).map((q, i) => ({ ...q, number: i + 1 }));
  }, []);


  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');

  const currentQuestion = sessionQuestions[currentIndex];
  const progress = ((currentIndex) / sessionQuestions.length) * 100;
  const isLastQuestion = currentIndex === sessionQuestions.length - 1;


  const handleSelectOption = useCallback((optionId: string) => {
    if (isTransitioning) return;
    setSelectedOption(optionId);
  }, [isTransitioning]);

  const handleContinue = useCallback(async () => {
    if (!selectedOption || isTransitioning) return;

    const newAnswers = { ...answers, [currentQuestion.id]: selectedOption };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      setIsAnalyzing(true);
      // BACKEND INTEGRATION: POST /api/quiz/analyze with newAnswers payload
      // LLM processes behavioral signals and returns PersonaProfile JSON

      await new Promise((r) => setTimeout(r, 3200));
      router.push('/persona-results-screen');
      return;
    }

    setIsTransitioning(true);
    setDirection('forward');
    await new Promise((r) => setTimeout(r, 200));
    setCurrentIndex((i) => i + 1);
    setSelectedOption(answers[sessionQuestions[currentIndex + 1]?.id] ?? null);
    setIsTransitioning(false);
  }, [selectedOption, isTransitioning, answers, currentQuestion.id, isLastQuestion, router, currentIndex, sessionQuestions]);

  const handleBack = useCallback(async () => {
    if (currentIndex === 0 || isTransitioning) return;
    setIsTransitioning(true);
    setDirection('back');
    await new Promise((r) => setTimeout(r, 200));
    setCurrentIndex((i) => i - 1);
    setSelectedOption(answers[sessionQuestions[currentIndex - 1]?.id] ?? null);
    setIsTransitioning(false);
  }, [currentIndex, isTransitioning, answers, sessionQuestions]);

  if (isAnalyzing) {
    return <AnalyzingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Toaster position="top-center" theme="dark" richColors />

      {/* Header */}
      <header className="px-5 py-4 flex items-center justify-between shrink-0">
        <button
          onClick={currentIndex === 0 ? () => router.push('/') : handleBack}
          disabled={isTransitioning}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">{currentIndex === 0 ? 'Home' : 'Back'}</span>
        </button>

        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-bold text-sm text-foreground">LovePersona</span>
        </div>

        <div className="text-sm text-muted-foreground font-tabular">
          <span className="text-foreground font-semibold">{currentIndex + 1}</span>
          <span> / {sessionQuestions.length}</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-5 pb-2 shrink-0">
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {sessionQuestions.map((q, i) => (
            <div
              key={`dot-${q.id}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i < currentIndex
                  ? 'bg-primary'
                  : i === currentIndex
                  ? 'bg-primary scale-125' :'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question Area */}
      <div className={`flex-1 flex flex-col px-5 pb-6 transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
          onContinue={handleContinue}
          isLastQuestion={isLastQuestion}
          answeredCount={Object.keys(answers).length}
        />
      </div>
    </div>
  );
}