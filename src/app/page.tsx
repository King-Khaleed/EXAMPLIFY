'use client';

import { useState, useEffect } from 'react';
import { questions as allQuestions } from '@/lib/questions';
import type { Question, UserAnswerMap } from '@/lib/types';
import QuizContainer from '@/components/quiz-container';
import QuizResults from '@/components/quiz-results';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, Clock } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from '@/components/ui/label';

export default function Home() {
  const [quizState, setQuizState] = useState<'not-started' | 'in-progress' | 'finished'>('not-started');
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [timeLimit, setTimeLimit] = useState(15 * 60); // Default to 15 minutes in seconds

  useEffect(() => {
    // Randomize questions once on component mount
    setQuestions([...allQuestions].sort(() => Math.random() - 0.5));
  }, []);

  const handleQuizFinish = (finalScore: number, finalAnswers: UserAnswerMap) => {
    setScore(finalScore);
    setUserAnswers(finalAnswers);
    setQuizState('finished');
  };

  const handleRestart = () => {
    setQuestions([...allQuestions].sort(() => Math.random() - 0.5));
    setUserAnswers({});
    setScore(0);
    setQuizState('not-started');
  };

  const renderContent = () => {
    switch (quizState) {
      case 'in-progress':
        return <QuizContainer questions={questions} onQuizFinish={handleQuizFinish} timeLimit={timeLimit} />;
      case 'finished':
        return (
          <QuizResults
            score={score}
            totalQuestions={questions.length}
            userAnswers={userAnswers}
            questions={questions}
            onRestart={handleRestart}
          />
        );
      case 'not-started':
      default:
        return (
          <div className="flex justify-center items-center py-10">
            <Card className="w-full max-w-lg shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">Welcome to the GST 111 Quiz!</CardTitle>
                <CardDescription>Test your knowledge. You will be presented with {questions.length} questions.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6">
                 <div className="flex flex-col items-center gap-3 w-full max-w-xs">
                  <Label htmlFor="time-select" className="flex items-center gap-2 text-base">
                    <Clock className="h-5 w-5" />
                    Choose Exam Duration
                  </Label>
                  <Select
                    defaultValue={String(timeLimit / 60)}
                    onValueChange={(value) => setTimeLimit(Number(value) * 60)}
                  >
                    <SelectTrigger id="time-select" className="w-full">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 Minutes</SelectItem>
                      <SelectItem value="30">30 Minutes</SelectItem>
                      <SelectItem value="45">45 Minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button size="lg" onClick={() => setQuizState('in-progress')} className="shadow-md">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Start Quiz
                </Button>
              </CardFooter>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        {renderContent()}
      </main>
    </div>
  );
}
