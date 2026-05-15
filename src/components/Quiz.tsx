import { useState } from 'react';
import { questions } from '../data/quiz';
import type { ColorKey, Scores } from '../types';
import ProgressBar from './ProgressBar';
import OptionCard from './OptionCard';
import { useShuffledQuestionOptions } from '../hooks/useShuffledOptions';

interface Props {
  onComplete: (scores: Scores) => void;
}

export default function Quiz({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<ColorKey[][]>(
    () => questions.map(() => [])
  );

  const shuffledOptions = useShuffledQuestionOptions(questions.map((q) => q.options));

  const current = questions[step];
  const currentSelections = selections[step];
  const isLast = step === questions.length - 1;

  function toggle(color: ColorKey) {
    setSelections((prev) => {
      const next = [...prev];
      const cur = next[step];
      next[step] = cur.includes(color)
        ? cur.filter((c) => c !== color)
        : [...cur, color];
      return next;
    });
  }

  function handleNext() {
    if (isLast) {
      const scores: Scores = { red: 0, yellow: 0, green: 0, blue: 0 };
      selections.forEach((picked) => picked.forEach((c) => scores[c]++));
      onComplete(scores);
    } else {
      setStep((s) => s + 1);
    }
  }

  function handleBack() {
    setStep((s) => s - 1);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <div className="mb-2">
          <h1 className="text-xl font-semibold text-gray-900 mb-1">
            What's Your Color Type?
          </h1>
          <p className="text-xs text-gray-400 mb-5">
            Based on <em>Surrounded by Idiots</em> by Thomas Erikson
          </p>
          <ProgressBar current={step + 1} total={questions.length} />
        </div>

        <h2 className="text-base font-semibold text-gray-800 mb-4 leading-snug">
          {current.text}
        </h2>

        <div className="flex flex-col gap-2.5 mb-6">
          {shuffledOptions[step].map((option) => (
            <OptionCard
              key={option.color}
              text={option.text}
              selected={currentSelections.includes(option.color)}
              onToggle={() => toggle(option.color)}
            />
          ))}
        </div>

        <p className="text-xs text-gray-400 mb-4 text-center">
          You can select multiple answers
        </p>

        <div className="flex gap-3">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={currentSelections.length === 0}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#7F77DD' }}
          >
            {isLast ? 'See my result' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
