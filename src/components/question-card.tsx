'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import type { Question } from '@/lib/types';

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

  const handleSelect = (value: string) => {
    setSelectedOptionId(value);
    onAnswer(value);
  };

  return (
    <div className="card-premium rounded-2xl p-6 md:p-8">
      <div className="mb-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
          {question.topic}
        </span>
        <h2 className="font-heading text-xl md:text-2xl font-semibold leading-relaxed">
          {question.text}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={cn(
              'w-full text-left flex items-start gap-4 p-4 md:p-5 rounded-xl border transition-all duration-200 group',
              selectedOptionId === option.id
                ? 'border-primary bg-primary/10 shadow-sm shadow-primary/10'
                : 'border-border/50 bg-card/30 hover:bg-accent/5 hover:border-border'
            )}
          >
            <span className={cn(
              'flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200',
              selectedOptionId === option.id
                ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/30'
                : 'bg-muted/50 text-muted-foreground group-hover:bg-muted'
            )}>
              {String.fromCharCode(65 + index)}
            </span>
            <span className={cn(
              'text-sm md:text-base leading-relaxed pt-0.5 transition-colors',
              selectedOptionId === option.id ? 'text-foreground font-medium' : 'text-foreground/80'
            )}>
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
