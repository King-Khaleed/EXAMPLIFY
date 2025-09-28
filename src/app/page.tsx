'use client';

import { useState, useEffect } from 'react';
import { questions as allQuestions } from '@/lib/questions';
import type { Question, UserAnswerMap } from '@/lib/types';
import QuizContainer from '@/components/quiz-container';
import QuizResults from '@/components/quiz-results';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export default function Home() {
  const [quizState, setQuizState] = useState<'not-started' | 'in-progress' | 'finished'>('not-started');
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);

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
        return <QuizContainer questions={questions} onQuizFinish={handleQuizFinish} />;
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
                <CardTitle className="text-2xl font-headline">Welcome to the Examplify Quiz!</CardTitle>
                <CardDescription>Test your knowledge on world capitals. You will be presented with {questions.length} questions.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button size="lg" onClick={() => setQuizState('in-progress')} className="shadow-md">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Start Quiz
                </Button>
              </CardContent>
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
