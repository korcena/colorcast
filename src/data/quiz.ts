import type { Question, ColorProfile, CombinationInsight, ColorKey } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: 'When a problem arises, which of these feel like you?',
    options: [
      { color: 'red', text: 'I take charge and push for a fast decision.' },
      { color: 'blue', text: 'I gather all the facts before acting.' },
      { color: 'yellow', text: 'I rally the team and brainstorm together.' },
      { color: 'green', text: 'I make sure everyone is okay and harmony is kept.' },
    ],
  },
  {
    id: 2,
    text: 'How do people usually describe your communication style?',
    options: [
      { color: 'red', text: 'Direct, confident, sometimes blunt.' },
      { color: 'blue', text: 'Precise, logical, and measured.' },
      { color: 'yellow', text: 'Enthusiastic and expressive.' },
      { color: 'green', text: 'Calm, warm, and a great listener.' },
    ],
  },
  {
    id: 3,
    text: 'Given a big project with no clear instructions, you feel:',
    options: [
      { color: 'red', text: 'Excited — finally something to own and conquer.' },
      { color: 'blue', text: 'Anxious — you need clarity before starting.' },
      { color: 'yellow', text: 'Pumped — endless possibilities!' },
      { color: 'green', text: 'A bit uneasy — you\'d prefer a defined role.' },
    ],
  },
  {
    id: 4,
    text: 'In a meeting with disagreement, you tend to:',
    options: [
      { color: 'red', text: 'State your view clearly and push to resolve it quickly.' },
      { color: 'blue', text: 'Back your stance with data and logic.' },
      { color: 'yellow', text: 'Lighten the mood and find creative middle ground.' },
      { color: 'green', text: 'Keep the peace and stay quiet unless pushed.' },
    ],
  },
  {
    id: 5,
    text: 'What frustrates you most about others?',
    options: [
      { color: 'red', text: 'Indecision, slowness, or lack of drive.' },
      { color: 'blue', text: 'Sloppiness, emotionality, or imprecision.' },
      { color: 'yellow', text: 'Rigidity, overthinking, or low energy.' },
      { color: 'green', text: 'Aggression, conflict, or disregard for feelings.' },
    ],
  },
  {
    id: 6,
    text: 'When you receive critical feedback, you typically:',
    options: [
      { color: 'red', text: 'Listen briefly and move on — you don\'t dwell.' },
      { color: 'blue', text: 'Analyze it carefully to judge if it\'s valid.' },
      { color: 'yellow', text: 'Shrug it off at first, then reflect later.' },
      { color: 'green', text: 'Take it personally and need time to process.' },
    ],
  },
  {
    id: 7,
    text: 'Your ideal work environment looks like:',
    options: [
      { color: 'red', text: 'Fast-paced, high stakes, results-driven.' },
      { color: 'blue', text: 'Structured, quiet, with clear processes.' },
      { color: 'yellow', text: 'Social, spontaneous, full of ideas and energy.' },
      { color: 'green', text: 'Collaborative, supportive, and low conflict.' },
    ],
  },
  {
    id: 8,
    text: 'How do you typically make decisions?',
    options: [
      { color: 'red', text: 'Quickly, based on gut feeling and goals.' },
      { color: 'blue', text: 'Slowly, after thorough research.' },
      { color: 'yellow', text: 'Spontaneously, fueled by excitement.' },
      { color: 'green', text: 'Carefully, considering how it affects everyone.' },
    ],
  },
  {
    id: 9,
    text: 'What motivates you most?',
    options: [
      { color: 'red', text: 'Winning, achieving, and being the best.' },
      { color: 'blue', text: 'Mastery, accuracy, and being right.' },
      { color: 'yellow', text: 'Recognition, fun, and new experiences.' },
      { color: 'green', text: 'Security, belonging, and helping others.' },
    ],
  },
  {
    id: 10,
    text: 'At a social gathering, you\'re most likely to:',
    options: [
      { color: 'red', text: 'Network strategically and keep conversations purposeful.' },
      { color: 'blue', text: 'Find one person for a deep, interesting conversation.' },
      { color: 'yellow', text: 'Be the life of the party, talking to everyone.' },
      { color: 'green', text: 'Help the host and make sure guests feel welcome.' },
    ],
  },
];

export const colorProfiles: Record<ColorKey, ColorProfile> = {
  red: {
    key: 'red',
    emoji: '🔴',
    name: 'Red',
    archetype: 'The Dominant Driver',
    motivation: 'Results & control',
    strength: 'Decisive, bold',
    blindSpot: 'Impatient, blunt',
    fear: 'Losing control',
    description:
      'You are a natural leader who thrives on challenges. Direct and fast-moving, you get things done and dislike wasted time. You inspire action in others simply by stepping forward — but remember, slowing down occasionally builds deeper trust.',
    bg: '#FEE2E2',
    accent: '#E24B4A',
    textAccent: '#B91C1C',
    border: '#FECACA',
  },
  yellow: {
    key: 'yellow',
    emoji: '🟡',
    name: 'Yellow',
    archetype: 'The Inspiring Optimist',
    motivation: 'Fun & recognition',
    strength: 'Enthusiastic, creative',
    blindSpot: 'Impulsive, unfocused',
    fear: 'Being ignored',
    description:
      'Energetic and charismatic, you love ideas and people. Naturally persuasive and optimistic, you lift the energy in any room. Your enthusiasm is contagious — just watch out for starting more than you finish.',
    bg: '#FEF3C7',
    accent: '#EF9F27',
    textAccent: '#92400E',
    border: '#FDE68A',
  },
  green: {
    key: 'green',
    emoji: '🟢',
    name: 'Green',
    archetype: 'The Stable Supporter',
    motivation: 'Harmony & security',
    strength: 'Patient, loyal, kind',
    blindSpot: 'Avoids conflict',
    fear: 'Change & conflict',
    description:
      'Steady, empathetic, and an excellent listener, you are deeply loyal and dependable. People feel safe around you. Your consistency holds teams together — learning to speak up when it matters will amplify your impact.',
    bg: '#DCFCE7',
    accent: '#639922',
    textAccent: '#166534',
    border: '#BBF7D0',
  },
  blue: {
    key: 'blue',
    emoji: '🔵',
    name: 'Blue',
    archetype: 'The Analytical Thinker',
    motivation: 'Accuracy & quality',
    strength: 'Logical, thorough',
    blindSpot: 'Overcritical, slow',
    fear: 'Being wrong',
    description:
      'You value facts and precision and think deeply before acting. You catch what others miss and set high standards. Your thoroughness protects teams from costly errors — trusting your analysis enough to act sooner will multiply your influence.',
    bg: '#DBEAFE',
    accent: '#378ADD',
    textAccent: '#1E40AF',
    border: '#BFDBFE',
  },
};

type PairKey = string;

const pairKey = (a: ColorKey, b: ColorKey): PairKey => [a, b].sort().join('+');

export const combinationInsights: Record<PairKey, CombinationInsight> = {
  [pairKey('red', 'yellow')]: {
    label: 'Red + Yellow',
    insight:
      'Drive with charisma — results-focused and inspiring, but may move too fast for others to keep up.',
  },
  [pairKey('red', 'blue')]: {
    label: 'Red + Blue',
    insight:
      'Decisiveness with precision — wants results done right and holds exceptionally high standards.',
  },
  [pairKey('red', 'green')]: {
    label: 'Red + Green',
    insight:
      'Authority with empathy — assertive and goal-oriented, yet genuinely cares about the people involved.',
  },
  [pairKey('yellow', 'green')]: {
    label: 'Yellow + Green',
    insight:
      'Warm and people-centered — easy to trust and be around, naturally dislikes conflict or tension.',
  },
  [pairKey('yellow', 'blue')]: {
    label: 'Yellow + Blue',
    insight:
      'Creative yet analytical — the rare combination of visionary and meticulous planner in one person.',
  },
  [pairKey('blue', 'green')]: {
    label: 'Blue + Green',
    insight:
      'Thoughtful and considerate — careful decisions that stand the test of time and protect everyone.',
  },
};

export function getCombinationInsight(
  primary: ColorKey,
  secondary: ColorKey
): CombinationInsight | null {
  const key = pairKey(primary, secondary);
  return combinationInsights[key] ?? null;
}
