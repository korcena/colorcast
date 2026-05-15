import { useState } from 'react';
import Quiz from './components/Quiz';
import Results from './components/Results';
import type { Scores } from './types';

type Screen = 'quiz' | 'results';

export default function App() {
  const [screen, setScreen] = useState<Screen>('quiz');
  const [scores, setScores] = useState<Scores | null>(null);

  function handleComplete(s: Scores) {
    setScores(s);
    setScreen('results');
  }

  function handleRetake() {
    setScores(null);
    setScreen('quiz');
  }

  if (screen === 'results' && scores) {
    return <Results scores={scores} onRetake={handleRetake} />;
  }

  return <Quiz onComplete={handleComplete} />;
}
