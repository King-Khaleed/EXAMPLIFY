'use client';

import { useState, useEffect } from 'react';
import { questions as allQuestions } from '@/lib/questions';
import type { Question, UserAnswerMap } from '@/lib/types';
import QuizContainer from '@/components/quiz-container';
import QuizResults from '@/components/quiz-results';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, Clock, Hash } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from '@/components/ui/label';

export default function Home() {
  const [quizState, setQuizState] = useState<'not-started' | 'in-progress' | 'finished'>('not-started');
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [timeLimit, setTimeLimit] = useState(15 * 60); // Default to 15 minutes in seconds
  const [numQuestions, setNumQuestions] = useState(45); // Default to 45 questions

  const handleQuizStart = () => {
    // Shuffle all questions
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    // Select the desired number of questions
    const selectedQuestions = shuffled.slice(0, numQuestions);
    setQuestions(selectedQuestions);
    setQuizState('in-progress');
  };

  const handleQuizFinish = (finalScore: number, finalAnswers: UserAnswerMap) => {
    setScore(finalScore);
    setUserAnswers(finalAnswers);
    setQuizState('finished');
  };

  const handleRestart = () => {
    setUserAnswers({});
    setScore(0);
    setQuestions([]);
    setQuizState('not-started');
  };

  const totalAvailableQuestions = allQuestions.length;
  const questionOptions = [45, 60, 100, 150, totalAvailableQuestions]
    .filter(qty => qty <= totalAvailableQuestions)
    // Remove duplicates if totalAvailableQuestions is one of the options
    .filter((qty, index, self) => self.indexOf(qty) === index)
    .sort((a,b) => a - b);


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
            <Card className="w-full max-w-2xl shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">Welcome to the GST 112 Quiz!</CardTitle>
                <CardDescription>
                  Test your knowledge. Total questions available: {totalAvailableQuestions}.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row justify-center items-center gap-8">
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
                <div className="flex flex-col items-center gap-3 w-full max-w-xs">
                  <Label htmlFor="questions-select" className="flex items-center gap-2 text-base">
                    <Hash className="h-5 w-5" />
                    Number of Questions
                  </Label>
                  <Select
                    defaultValue={String(numQuestions)}
                    onValueChange={(value) => setNumQuestions(Number(value))}
                  >
                    <SelectTrigger id="questions-select" className="w-full">
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      {totalAvailableQuestions < 45 ? (
                         <SelectItem value={String(totalAvailableQuestions)} disabled>Not enough questions (min: 45)</SelectItem>
                      ) : (
                        questionOptions.map(qty => (
                          <SelectItem key={qty} value={String(qty)}>
                            {qty === totalAvailableQuestions ? `All (${qty})` : `${qty} Questions`}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button size="lg" onClick={handleQuizStart} className="shadow-md" disabled={totalAvailableQuestions < 45}>
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
