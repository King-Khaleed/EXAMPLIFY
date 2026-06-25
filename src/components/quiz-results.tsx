'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Award, BrainCircuit, RefreshCw, Loader2, CheckCircle2, XCircle, Target, BarChart3 } from 'lucide-react';
import { getAiSuggestions } from '@/app/actions';
import type { UserAnswerMap, Question, Course } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { cn } from '@/lib/utils';

type QuizResultsProps = {
  score: number;
  totalQuestions: number;
  userAnswers: UserAnswerMap;
  questions: Question[];
  onRestart: () => void;
  course: Course;
};

type AiSuggestion = {
  suggestedAreas: string[];
  reasoning: string;
};

export default function QuizResults({ score, totalQuestions, userAnswers, questions, onRestart, course }: QuizResultsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState<AiSuggestion | null>(null);
  const { toast } = useToast();

  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  const correctCount = questions.filter(q => userAnswers[q.id] === q.correctOptionId).length;
  const incorrectCount = questions.filter(q => userAnswers[q.id] && userAnswers[q.id] !== q.correctOptionId).length;
  const unansweredCount = questions.filter(q => !userAnswers[q.id]).length;

  const getGrade = () => {
    if (percentage >= 90) return { label: 'Excellent', color: 'text-primary' };
    if (percentage >= 75) return { label: 'Good', color: 'text-primary' };
    if (percentage >= 50) return { label: 'Fair', color: 'text-primary' };
    return { label: 'Needs Improvement', color: 'text-destructive' };
  };

  const handleGetSuggestions = async () => {
    setIsLoading(true);
    setAiSuggestion(null);

    const correctAnswers: Record<string, string> = {};
    const topics: string[] = [];
    const formattedUserAnswers: Record<string, string> = {};

    questions.forEach(q => {
      correctAnswers[q.text] = q.options.find(o => o.id === q.correctOptionId)?.text || '';
      if (!topics.includes(q.topic)) topics.push(q.topic);
      const userAnswerId = userAnswers[q.id];
      formattedUserAnswers[q.text] = q.options.find(o => o.id === userAnswerId)?.text || 'No answer';
    });

    const result = await getAiSuggestions({
      examName: `${course.code} — ${course.title}`,
      userAnswers: formattedUserAnswers,
      correctAnswers,
      topics,
    });

    setIsLoading(false);

    if (result.success && result.data) {
      setAiSuggestion(result.data);
    } else {
      toast({
        variant: "destructive",
        title: "AI Analysis Failed",
        description: result.error || "Could not retrieve study suggestions. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card-glass rounded-2xl p-6 md:p-8 lg:p-10 mb-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Award className="size-8 text-primary" />
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-2">
          Exam Complete
        </h2>
        <p className="text-muted-foreground mb-8">
          {course.code} — {course.title}
        </p>

        <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-heading font-semibold">
              {score}
              <span className="text-2xl md:text-3xl text-muted-foreground font-body font-normal">/{totalQuestions}</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">Total Score</p>
          </div>
          <div className="w-px h-16 bg-border/50" />
          <div className="text-center">
            <p className={cn(
              'text-3xl md:text-4xl font-heading font-semibold',
              getGrade().color
            )}>
              {Math.round(percentage)}%
            </p>
            <p className="text-sm text-muted-foreground mt-1">{getGrade().label}</p>
          </div>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <Progress
            value={percentage}
            className="h-2 bg-border/50 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-primary/70"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-8">
          <div className="text-center p-3 rounded-xl bg-green-500/10 border border-green-500/20">
            <p className="text-lg font-heading font-semibold text-green-500">{correctCount}</p>
            <p className="text-xs text-muted-foreground">Correct</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-destructive/10 border border-destructive/20">
            <p className="text-lg font-heading font-semibold text-destructive">{incorrectCount}</p>
            <p className="text-xs text-muted-foreground">Wrong</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-muted/30 border border-border/50">
            <p className="text-lg font-heading font-semibold text-muted-foreground">{unansweredCount}</p>
            <p className="text-xs text-muted-foreground">Skipped</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={onRestart} variant="outline" className="w-full sm:w-auto h-11 px-6 border-border/60">
            <RefreshCw className="mr-2 size-4" />
            Try Again
          </Button>
          <Button
            onClick={handleGetSuggestions}
            disabled={isLoading}
            className="w-full sm:w-auto h-11 px-6 shadow-lg shadow-primary/20"
          >
            {isLoading ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
              <BrainCircuit className="mr-2 size-4" />
            )}
            AI Study Suggestions
          </Button>
        </div>
      </div>

      {isLoading && (
        <div className="card-glass rounded-2xl p-8 text-center mb-8">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="size-8 text-primary animate-spin" />
            <p className="text-muted-foreground">Analyzing your performance with AI...</p>
          </div>
        </div>
      )}

      {aiSuggestion && (
        <div className="card-glass rounded-2xl p-6 md:p-8 mb-8 border-primary/20 animate-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BrainCircuit className="size-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg">AI-Powered Study Plan</h3>
              <p className="text-xs text-muted-foreground">Personalized recommendations based on your results</p>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{aiSuggestion.reasoning}</p>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
                <Target className="size-4 text-primary" />
                Recommended Focus Areas
              </h4>
              <ul className="space-y-2">
                {aiSuggestion.suggestedAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-primary/15 text-primary text-xs font-heading font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm md:text-base">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="card-glass rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <BarChart3 className="size-5 text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg">Question Review</h3>
            <p className="text-xs text-muted-foreground">Review each question and your answers</p>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {questions.map((question, index) => {
            const userAnswerId = userAnswers[question.id];
            const userAnswer = question.options.find(o => o.id === userAnswerId);
            const correctAnswer = question.options.find(o => o.id === question.correctOptionId);
            const isCorrect = userAnswerId === question.correctOptionId;

            return (
              <AccordionItem
                value={`item-${index}`}
                key={question.id}
                className="border border-border/50 rounded-xl overflow-hidden bg-card/30 data-[state=open]:bg-card/50 transition-colors"
              >
                <AccordionTrigger className="px-4 py-3.5 hover:no-underline hover:bg-accent/5 transition-colors">
                  <div className="flex items-center gap-3 w-full text-left">
                    {isCorrect ? (
                      <CheckCircle2 className="size-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="size-5 text-destructive flex-shrink-0" />
                    )}
                    <span className="flex-1 text-sm md:text-base font-medium truncate">{question.text}</span>
                    <span className="flex-shrink-0 text-xs text-muted-foreground font-mono">#{index + 1}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Your Answer</p>
                    <div className={cn(
                      "p-3.5 rounded-xl border text-sm",
                      !isCorrect
                        ? "bg-destructive/5 border-destructive/20 text-destructive"
                        : "bg-green-500/5 border-green-500/20 text-green-600 dark:text-green-400"
                    )}>
                      {userAnswer?.text || <span className="italic text-muted-foreground">No answer</span>}
                    </div>
                  </div>

                  {!isCorrect && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Correct Answer</p>
                      <div className="p-3.5 rounded-xl border bg-green-500/5 border-green-500/20 text-sm">
                        {correctAnswer?.text}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground px-2 py-1 rounded-md bg-muted/30 border border-border/30">
                      {question.topic}
                    </span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
