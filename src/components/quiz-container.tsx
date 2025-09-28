'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { Question, UserAnswerMap } from '@/lib/types';
import QuestionCard from './question-card';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { Timer, ArrowLeft, ArrowRight, CheckCircle, AlarmClockCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

type QuizContainerProps = {
  questions: Question[];
  onQuizFinish: (score: number, userAnswers: UserAnswerMap) => void;
  timeLimit: number; // in seconds
};

export default function QuizContainer({ questions, onQuizFinish, timeLimit }: QuizContainerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const halfwayPoint = timeLimit / 2;

  const handleSubmit = useCallback(() => {
    let finalScore = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctOptionId) {
        finalScore++;
      }
    });
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    onQuizFinish(finalScore, userAnswers);
  }, [questions, userAnswers, onQuizFinish]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current!);
          handleSubmit();
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
  }, [handleSubmit]);


  const handleAnswer = (selectedOptionId: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].id]: selectedOptionId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progressValue = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isTimeHalfway = timeLeft <= halfwayPoint;
  const unansweredQuestions = questions.length - Object.keys(userAnswers).length;

  const SubmitButton = ({ isEarly }: { isEarly?: boolean }) => (
    <AlertDialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="lg" className={cn(isEarly && "animate-pulse")}>
          <CheckCircle className="mr-2 h-5 w-5" />
          Submit Quiz
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {unansweredQuestions > 0 ? `You have ${unansweredQuestions} unanswered questions. ` : ''}
            This action will end your quiz and your score will be calculated. You cannot undo this.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return (
    <div className="max-w-3xl mx-auto mt-4 md:mt-8">
      <div className="mb-6 space-y-4">
        <div className="flex justify-between items-center text-sm font-semibold">
           <p className="text-xs md:text-sm text-muted-foreground text-center">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <div className={cn("flex items-center gap-2", timeLeft <= 60 ? "text-destructive font-bold animate-pulse" : "text-muted-foreground")}>
            <Timer className="h-5 w-5" />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
        <Progress value={progressValue} className="w-full h-2" />
        {isTimeHalfway && !isLastQuestion && (
            <div className="flex items-center justify-center gap-2 text-xs text-primary/80 p-2 bg-primary/10 rounded-lg">
                <AlarmClockCheck className="h-4 w-4" />
                <span>Time is halfway - you can now submit early.</span>
            </div>
        )}
      </div>

      <QuestionCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        userAnswer={userAnswers[currentQuestion.id]}
      />

      <div className="mt-6 flex justify-between items-center gap-2">
        <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0} variant="outline" size="lg" className="min-w-[120px]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        
        <div className="flex items-center gap-2">
            {isTimeHalfway && !isLastQuestion && <SubmitButton isEarly />}

            {isLastQuestion ? (
              <SubmitButton />
            ) : (
              <Button onClick={handleNext} disabled={isLastQuestion} size="lg" className="min-w-[120px]">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
        </div>
      </div>
    </div>
  );
}
