'use client';

import { useState } from 'react';
import type { Question, UserAnswerMap } from '@/lib/types';
import QuestionCard from './question-card';
import { Progress } from './ui/progress';

type QuizContainerProps = {
  questions: Question[];
  onQuizFinish: (score: number, userAnswers: UserAnswerMap) => void;
};

export default function QuizContainer({ questions, onQuizFinish }: QuizContainerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [isAnswered, setIsAnswered] = useState(false);

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

  const currentQuestion = questions[currentQuestionIndex];
  const progressValue = ((currentQuestionIndex + (isAnswered ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="mb-6 space-y-2">
         <p className="text-sm text-muted-foreground text-center">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        <Progress value={progressValue} className="w-full h-2" />
        <div className="text-right text-sm font-semibold text-primary">Score: {score}</div>
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
