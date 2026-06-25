'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { Question, UserAnswerMap, Course } from '@/lib/types';
import QuestionCard from './question-card';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { Timer, ArrowLeft, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

type QuizContainerProps = {
  questions: Question[];
  onQuizFinish: (score: number, userAnswers: UserAnswerMap) => void;
  timeLimit: number;
  course: Course;
};

export default function QuizContainer({ questions, onQuizFinish, timeLimit, course }: QuizContainerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = useCallback(() => {
    let finalScore = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctOptionId) finalScore++;
    });
    if (timerRef.current) clearInterval(timerRef.current);
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
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [handleSubmit]);

  const handleAnswer = (selectedOptionId: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questions[currentQuestionIndex].id]: selectedOptionId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const currentQuestion = questions[currentQuestionIndex];
  const progressValue = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card-glass rounded-2xl p-4 md:p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary font-heading font-semibold text-sm">
              {currentQuestionIndex + 1}
            </div>
            <div>
              <p className="text-sm font-medium">Question {currentQuestionIndex + 1}</p>
              <p className="text-xs text-muted-foreground">of {questions.length}</p>
            </div>
          </div>

          <div className={cn(
            'flex items-center gap-2.5 px-3.5 py-2 rounded-xl border',
            timeLeft <= 60
              ? 'bg-destructive/10 border-destructive/30 text-destructive'
              : timeLeft <= timeLimit * 0.25
              ? 'bg-primary/10 border-primary/30 text-primary'
              : 'bg-card/50 border-border/50 text-muted-foreground'
          )}>
            <Clock className="size-4" />
            <span className="font-mono text-sm font-semibold tabular-nums">{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="relative">
          <Progress value={progressValue} className="h-1.5 bg-border/50 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-primary/70" />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>{answeredCount} answered</span>
            <span>{questions.length - answeredCount} remaining</span>
          </div>
        </div>
      </div>

      <div className="animate-in-fast" key={currentQuestion.id}>
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          userAnswer={userAnswers[currentQuestion.id]}
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <Button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          variant="outline"
          className="w-full sm:w-auto h-11 px-5 border-border/60"
        >
          <ArrowLeft className="mr-2 size-4" />
          Previous
        </Button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <AlertDialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto h-11 px-5 border-border/60 text-muted-foreground hover:text-destructive hover:border-destructive/50 transition-colors"
              >
                <ShieldCheck className="mr-2 size-4" />
                Submit
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="card-premium rounded-2xl border-border/60">
              <AlertDialogHeader>
                <AlertDialogTitle className="font-heading text-xl">Submit your exam?</AlertDialogTitle>
                <AlertDialogDescription className="text-muted-foreground">
                  {questions.length - answeredCount > 0 ? (
                    <>You have <span className="text-foreground font-medium">{questions.length - answeredCount} unanswered</span> questions. </>
                  ) : null}
                  Your score will be calculated and you cannot undo this action.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="rounded-xl border-border/60">Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSubmit} className="rounded-xl">Submit Exam</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {currentQuestionIndex < questions.length - 1 ? (
            <Button onClick={handleNext} className="w-full sm:w-auto h-11 px-6 shadow-lg shadow-primary/15">
              Next
              <ArrowRight className="ml-2 size-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="w-full sm:w-auto h-11 px-6 shadow-lg shadow-primary/15"
            >
              Finish Exam
              <ArrowRight className="ml-2 size-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
