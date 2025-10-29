import { useState, useEffect, KeyboardEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import type { Character } from '@/data';

interface GameProps {
  characters: Character[];
  languageName: string;
  onShowReference: () => void;
}

export function Game({ characters, languageName, onShowReference }: GameProps) {
  const [shuffledCharacters] = useState(() => {
    const shuffled = [...characters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxCharCount, setMaxCharCount] = useState(1);
  const [charCount, setCharCount] = useState(1);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [totalChars, setTotalChars] = useState(0);

  const currentCharacters = shuffledCharacters.slice(currentIndex, currentIndex + charCount);
  const correctAnswer = currentCharacters.map(c => c.romanization).join('');
  const elapsedSeconds = (Date.now() - startTime) / 1000;
  const charsPerSecond = elapsedSeconds > 0 ? (totalChars / elapsedSeconds).toFixed(2) : '0.00';

  useEffect(() => {
    // Reset feedback and focus input when character changes
    setFeedback(null);
  }, [currentIndex]);

  const checkAnswer = () => {
    const isCorrect = userInput.toLowerCase().trim() === correctAnswer.toLowerCase();

    if (isCorrect) {
      setScore(score + charCount);
      setTotalChars(totalChars + charCount);
      setFeedback('correct');

      // Move to next character(s) immediately
      const nextIndex = currentIndex + charCount;
      if (nextIndex < shuffledCharacters.length) {
        setCurrentIndex(nextIndex);
        // Randomly show 1-maxCharCount characters (but don't exceed remaining characters)
        const remaining = shuffledCharacters.length - nextIndex;
        const maxChars = Math.min(maxCharCount, remaining);
        const newCharCount = Math.floor(Math.random() * maxChars) + 1;
        setCharCount(newCharCount);
        setUserInput('');
        setFeedback(null);
      } else {
        // Game completed
        const totalScore = score + charCount;
        alert(`Congratulations! You completed all ${shuffledCharacters.length} characters!\nScore: ${totalScore}/${shuffledCharacters.length}\nSpeed: ${charsPerSecond} chars/sec`);
        setCurrentIndex(0);
        setCharCount(1);
        setScore(0);
        setTotalChars(0);
        setStartTime(Date.now());
        setUserInput('');
        setFeedback(null);
      }
    } else {
      setFeedback('incorrect');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  const skip = () => {
    const nextIndex = currentIndex + charCount;
    if (nextIndex < shuffledCharacters.length) {
      setCurrentIndex(nextIndex);
      const remaining = shuffledCharacters.length - nextIndex;
      const maxChars = Math.min(maxCharCount, remaining);
      const newCharCount = Math.floor(Math.random() * maxChars) + 1;
      setCharCount(newCharCount);
      setUserInput('');
      setFeedback(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{languageName} Character Practice</h1>
          <Button onClick={onShowReference} variant="outline">
            Show Reference
          </Button>
        </div>

        {/* Progress */}
        <Card className="p-4">
          <div className="text-sm space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Progress: {currentIndex + 1} / {shuffledCharacters.length}</span>
              <span>Score: {score} / {shuffledCharacters.length}</span>
              <span>Speed: {charsPerSecond} char/s</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + charCount) / shuffledCharacters.length) * 100}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Main Game Card */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-center text-sm text-gray-600">
              {charCount === 1
                ? `Type the romanization for this ${currentCharacters[0].type}:`
                : `Type the romanization for these ${charCount} characters:`
              }
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Character Display */}
            <div className="flex justify-center gap-4">
              {currentCharacters.map((char, idx) => (
                <div
                  key={idx}
                  className="text-9xl font-bold text-center p-8 bg-gray-100 rounded-xl border-2 border-gray-200"
                >
                  {char.character}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="space-y-2">
              <Input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type romanization..."
                className={`text-2xl text-center h-16 ${
                  feedback === 'incorrect' ? 'border-red-500 bg-red-50' : ''
                }`}
                autoFocus
              />

              {/* Feedback */}
              {feedback === 'incorrect' && (
                <p className="text-red-600 text-center font-semibold">
                  Incorrect! The answer is: {correctAnswer}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-2 justify-center">
              <Button
                onClick={checkAnswer}
                disabled={!userInput}
                size="lg"
              >
                Check Answer
              </Button>
              <Button
                onClick={skip}
                variant="secondary"
                size="lg"
              >
                Skip
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Difficulty Slider */}
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Difficulty: {maxCharCount} character{maxCharCount > 1 ? 's' : ''} at a time</label>
            </div>
            <Slider
              value={[maxCharCount]}
              onValueChange={(value) => setMaxCharCount(value[0])}
              min={1}
              max={5}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Easy (1)</span>
              <span>Hard (5)</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
