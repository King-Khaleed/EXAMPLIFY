'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import type { Question, Option } from '@/lib/types';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

type QuestionCardProps = {
  question: Question;
  onAnswer: (selectedOptionId: string) => void;
  onNext: () => void;
  isAnswered: boolean;
  userAnswer: string | undefined;
};

export default function QuestionCard({ question, onAnswer, onNext, isAnswered, userAnswer }: QuestionCardProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const handleSubmit = () => {
    if (selectedOptionId) {
      onAnswer(selectedOptionId);
    }
  };

  const isCorrect = isAnswered && userAnswer === question.correctOptionId;

  return (
    <Card className="shadow-lg transition-all animate-in fade-in-50 duration-500">
      <CardHeader>
        <CardDescription className="font-semibold text-primary">{question.topic}</CardDescription>
        <CardTitle className="font-headline text-2xl leading-relaxed">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedOptionId ?? undefined}
          onValueChange={setSelectedOptionId}
          disabled={isAnswered}
        >
          <div className="space-y-4">
            {question.options.map((option) => {
              const isUserChoice = userAnswer === option.id;
              const isCorrectAnswer = question.correctOptionId === option.id;

              return (
                <div
                  key={option.id}
                  className={cn(
                    'flex items-center space-x-3 rounded-lg border p-4 transition-all',
                    'has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-70',
                    isAnswered && isCorrectAnswer && 'border-green-500 bg-green-500/10 ring-2 ring-green-500/50',
                    isAnswered && isUserChoice && !isCorrectAnswer && 'border-destructive bg-destructive/10 ring-2 ring-destructive/50',
                    !isAnswered && 'hover:bg-accent/50 has-[input:checked]:border-primary'
                  )}
                >
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="text-base flex-1 cursor-pointer">{option.text}</Label>
                  {isAnswered && isCorrectAnswer && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                  {isAnswered && isUserChoice && !isCorrectAnswer && <XCircle className="h-5 w-5 text-destructive" />}
                </div>
              );
            })}
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-end">
        {isAnswered ? (
          <Button onClick={onNext} className="shadow-md animate-in fade-in duration-300">
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!selectedOptionId} className="shadow-md">
            Submit Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
