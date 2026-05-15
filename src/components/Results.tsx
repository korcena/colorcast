import type { ColorKey, Scores } from '../types';
import { colorProfiles, getCombinationInsight } from '../data/quiz';

interface Props {
  scores: Scores;
  onRetake: () => void;
}

const COLOR_ORDER: ColorKey[] = ['red', 'yellow', 'green', 'blue'];

function getSortedColors(scores: Scores): ColorKey[] {
  return [...COLOR_ORDER].sort((a, b) => scores[b] - scores[a]);
}

interface TraitCardProps {
  label: string;
  value: string;
  accent: string;
  bg: string;
}

function TraitCard({ label, value, accent, bg }: TraitCardProps) {
  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-1"
      style={{ backgroundColor: bg }}
    >
      <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>
        {label}
      </span>
      <span className="text-sm text-gray-700 font-medium">{value}</span>
    </div>
  );
}

interface InfoSectionProps {
  title: string;
  text: string;
  icon: string;
}

function InfoSection({ title, text, icon }: InfoSectionProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

export default function Results({ scores, onRetake }: Props) {
  const sorted = getSortedColors(scores);
  const primaryKey = sorted[0];
  const secondaryKey = sorted[1];
  const primary = colorProfiles[primaryKey];
  const secondary = colorProfiles[secondaryKey];

  const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
  const combination = getCombinationInsight(primaryKey, secondaryKey);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-10">
      <div className="w-full max-w-lg flex flex-col gap-4">
        {/* Header card */}
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{ backgroundColor: primary.bg, borderColor: primary.border }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{primary.emoji}</span>
            <div>
              <div
                className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-1"
                style={{ backgroundColor: primary.accent, color: '#fff' }}
              >
                Primary Color
              </div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                {primary.name} — {primary.archetype}
              </h1>
            </div>
          </div>
          <p className="text-sm font-medium" style={{ color: primary.textAccent }}>
            With a secondary {secondary.name} ({secondary.archetype.split(' ').slice(1).join(' ')})
          </p>
        </div>

        {/* Score bars */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            Your Color Breakdown
          </h2>
          <div className="flex flex-col gap-3">
            {sorted.map((key) => {
              const profile = colorProfiles[key];
              const pct = Math.round((scores[key] / total) * 100);
              return (
                <div key={key}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                      <span>{profile.emoji}</span> {profile.name}
                    </span>
                    <span className="text-sm font-semibold text-gray-500">{pct}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${pct}%`, backgroundColor: profile.accent }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trait cards 2x2 */}
        <div className="grid grid-cols-2 gap-3">
          <TraitCard
            label="Core Motivation"
            value={primary.motivation}
            accent={primary.textAccent}
            bg={primary.bg}
          />
          <TraitCard
            label="Strength"
            value={primary.strength}
            accent={primary.textAccent}
            bg={primary.bg}
          />
          <TraitCard
            label="Blind Spot"
            value={primary.blindSpot}
            accent={primary.textAccent}
            bg={primary.bg}
          />
          <TraitCard
            label="Deepest Fear"
            value={primary.fear}
            accent={primary.textAccent}
            bg={primary.bg}
          />
        </div>

        {/* About You */}
        <InfoSection
          icon="🪞"
          title="About You"
          text={primary.description}
        />

        {/* How others perceive you */}
        <InfoSection
          icon="👀"
          title="How Others Perceive You"
          text={primary.perceived}
        />

        {/* How to adapt to you */}
        <InfoSection
          icon="🤝"
          title="How to Adapt to You"
          text={primary.adaptTo}
        />

        {/* Stress factors */}
        <InfoSection
          icon="⚡"
          title="Stress Factors"
          text={primary.stressFactors}
        />

        {/* Where can you be better */}
        <InfoSection
          icon="🌱"
          title="Where You Can Grow"
          text={primary.growthArea}
        />

        {/* Combination insight */}
        {combination && (
          <div
            className="rounded-2xl border p-5"
            style={{ backgroundColor: '#EEEDFE', borderColor: '#C4C1F7' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">{primary.emoji}</span>
              <span className="text-gray-400 text-sm">+</span>
              <span className="text-base">{secondary.emoji}</span>
              <span
                className="text-xs font-bold uppercase tracking-wider ml-1"
                style={{ color: '#7F77DD' }}
              >
                {combination.label} Combination
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{combination.insight}</p>
          </div>
        )}

        {/* Retake button */}
        <button
          onClick={onRetake}
          className="w-full py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
        >
          Retake the quiz
        </button>
      </div>
    </div>
  );
}
