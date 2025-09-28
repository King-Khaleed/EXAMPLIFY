'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Award, BrainCircuit, RefreshCw, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { getAiSuggestions } from '@/app/actions';
import type { UserAnswerMap, Question } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type QuizResultsProps = {
  score: number;
  totalQuestions: number;
  userAnswers: UserAnswerMap;
  questions: Question[];
  onRestart: () => void;
};

type AiSuggestion = {
  suggestedAreas: string[];
  reasoning: string;
};

export default function QuizResults({ score, totalQuestions, userAnswers, questions, onRestart }: QuizResultsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState<AiSuggestion | null>(null);
  const { toast } = useToast();
  
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

  const handleGetSuggestions = async () => {
    setIsLoading(true);
    setAiSuggestion(null);

    const correctAnswers: Record<string, string> = {};
    const topics: string[] = [];
    const formattedUserAnswers: Record<string, string> = {};

    questions.forEach(q => {
      correctAnswers[q.text] = q.options.find(o => o.id === q.correctOptionId)?.text || '';
      if (!topics.includes(q.topic)) {
        topics.push(q.topic);
      }
      const userAnswerId = userAnswers[q.id];
      formattedUserAnswers[q.text] = q.options.find(o => o.id === userAnswerId)?.text || 'No answer';
    });

    const result = await getAiSuggestions({
      examName: "The Web3 Wizard's Academy Quiz",
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
    <div className="max-w-3xl mx-auto py-8">
      <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-primary/20 shadow-lg animate-in fade-in-50 duration-500 mb-8">
        <CardHeader className="text-center items-center">
          <Award className="h-12 w-12 md:h-16 md:w-16 text-primary mb-4" />
          <CardTitle className="text-2xl md:text-3xl font-headline">Quiz Completed!</CardTitle>
          <CardDescription>Here's how you performed.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-md md:text-lg text-muted-foreground">Your Score</p>
            <p className="text-5xl md:text-6xl font-bold text-foreground">{score}<span className="text-2xl md:text-3xl text-muted-foreground">/{totalQuestions}</span></p>
          </div>
          <div>
            <Progress value={percentage} className="h-3" />
            <p className="text-center mt-2 text-sm text-muted-foreground">{Math.round(percentage)}% Correct</p>
          </div>
        </CardContent>
        <CardFooter className="flex-col sm:flex-row justify-center gap-4">
          <Button onClick={onRestart} variant="outline" className="shadow-sm w-full sm:w-auto">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button onClick={handleGetSuggestions} disabled={isLoading} className="shadow-md shadow-primary/30 hover:shadow-primary/50 transition-shadow w-full sm:w-auto">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <BrainCircuit className="mr-2 h-4 w-4" />
            )}
            Get AI Study Suggestions
          </Button>
        </CardFooter>
      </Card>
      
      {isLoading && (
         <div className="flex justify-center items-center mt-6">
            <Card className="w-full p-8 text-center animate-pulse bg-card/80 backdrop-blur-sm border-primary/20">
                <p className="text-muted-foreground">Analyzing your results with AI...</p>
            </Card>
         </div>
      )}

      {aiSuggestion && (
        <Alert className="mt-8 animate-in fade-in-50 duration-500 shadow-md bg-card/80 backdrop-blur-sm border-primary/20">
          <BrainCircuit className="h-4 w-4" />
          <AlertTitle className="font-headline text-lg md:text-xl">AI-Powered Study Plan</AlertTitle>
          <AlertDescription className="mt-4 space-y-4">
            <p className="text-sm md:text-base">{aiSuggestion.reasoning}</p>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Focus Areas:</h4>
              <ul className="list-disc list-inside space-y-1">
                {aiSuggestion.suggestedAreas.map((area, index) => (
                  <li key={index} className="text-sm md:text-base">{area}</li>
                ))}
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}

      <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-primary/20 shadow-lg animate-in fade-in-50 duration-500 mt-8">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Question Review</CardTitle>
          <CardDescription>Review your answers below.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {questions.map((question, index) => {
              const userAnswerId = userAnswers[question.id];
              const userAnswer = question.options.find(o => o.id === userAnswerId);
              const correctAnswer = question.options.find(o => o.id === question.correctOptionId);
              const isCorrect = userAnswerId === question.correctOptionId;

              return (
                <AccordionItem value={`item-${index}`} key={question.id}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-4 w-full">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                      )}
                      <span className="text-left flex-1 text-sm md:text-base">{question.text}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 space-y-4">
                    <div className="space-y-2">
                       <h4 className="font-semibold text-sm">Your Answer:</h4>
                       <div className={cn("p-3 rounded-md border", !isCorrect ? "bg-destructive/10 border-destructive" : "bg-green-500/10 border-green-500")}>
                         <p className="text-sm md:text-base">{userAnswer?.text || <span className="text-muted-foreground italic">No answer</span>}</p>
                       </div>
                    </div>
                     {!isCorrect && (
                       <div className="space-y-2">
                         <h4 className="font-semibold text-sm">Correct Answer:</h4>
                         <div className="p-3 rounded-md border bg-green-500/10 border-green-500">
                           <p className="text-sm md:text-base">{correctAnswer?.text}</p>
                         </div>
                       </div>
                     )}
                     <div>
                        <Badge variant="secondary">{question.topic}</Badge>
                     </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>

    </div>
  );
}
