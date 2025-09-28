'use client';

import { useState, useEffect, useRef } from 'react';
import type { Question, UserAnswerMap } from '@/lib/types';
import QuestionCard from './question-card';
import { Progress } from './ui/progress';
import { Timer } from 'lucide-react';

type QuizContainerProps = {
  questions: Question[];
  onQuizFinish: (score: number, userAnswers: UserAnswerMap) => void;
  timeLimit: number; // in seconds
};

export default function QuizContainer({ questions, onQuizFinish, timeLimit }: QuizContainerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onQuizFinish(score, userAnswers);
    }
  }, [timeLeft, onQuizFinish, score, userAnswers]);


  const handleAnswer = (selectedOptionId: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.correctOptionId === selectedOptionId;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedOptionId,
    }));
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsAnswered(false);
    } else {
      onQuizFinish(score, userAnswers);
    }
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progressValue = ((currentQuestionIndex + (isAnswered ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="mb-6 space-y-4">
        <div className="flex justify-between items-center text-sm font-semibold">
          <p className="text-primary">Score: {score}</p>
          <div className="flex items-center gap-2 text-destructive">
            <Timer className="h-5 w-5" />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
         <p className="text-sm text-muted-foreground text-center">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        <Progress value={progressValue} className="w-full h-2" />
      </div>
      <QuestionCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        onNext={handleNext}
        isAnswered={isAnswered}
        userAnswer={userAnswers[currentQuestion.id]}
      />
    </div>
  );
}
