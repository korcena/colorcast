export type ColorKey = 'red' | 'yellow' | 'green' | 'blue';

export interface Option {
  color: ColorKey;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface ColorProfile {
  key: ColorKey;
  emoji: string;
  name: string;
  archetype: string;
  motivation: string;
  strength: string;
  blindSpot: string;
  fear: string;
  description: string;
  perceived: string;
  adaptTo: string;
  stressFactors: string;
  growthArea: string;
  bg: string;
  accent: string;
  textAccent: string;
  border: string;
}

export interface CombinationInsight {
  label: string;
  insight: string;
}

export type Scores = Record<ColorKey, number>;
