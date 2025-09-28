'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import type { Question } from '@/lib/types';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle } from 'lucide-react';

type QuestionCardProps = {
  question: Question;
  onAnswer: (selectedOptionId: string) => void;
  userAnswer: string | undefined;
};

export default function QuestionCard({ question, onAnswer, userAnswer }: QuestionCardProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | undefined>(userAnswer);

  useEffect(() => {
    setSelectedOptionId(userAnswer);
  }, [userAnswer, question]);

  const handleValueChange = (value: string) => {
    setSelectedOptionId(value);
    onAnswer(value);
  };

  return (
    <Card className="shadow-lg transition-all animate-in fade-in-50 duration-500">
      <CardHeader>
        <CardDescription className="font-semibold text-primary">{question.topic}</CardDescription>
        <CardTitle className="font-headline text-xl md:text-2xl leading-relaxed">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedOptionId}
          onValueChange={handleValueChange}
        >
          <div className="space-y-4">
            {question.options.map((option) => (
              <div
                key={option.id}
                className={cn(
                  'flex items-center space-x-3 rounded-lg border p-4 transition-all',
                  'hover:bg-accent/50 has-[input:checked]:border-primary min-h-[44px]'
                )}
              >
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id} className="text-sm md:text-base flex-1 cursor-pointer">{option.text}</Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
