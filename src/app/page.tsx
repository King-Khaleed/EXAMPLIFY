'use client';

import { useState, useEffect } from 'react';
import { courses } from '@/lib/courses';
import type { Question, UserAnswerMap, Course } from '@/lib/types';
import QuizContainer from '@/components/quiz-container';
import QuizResults from '@/components/quiz-results';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle, Clock, Hash, Book } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from '@/components/ui/label';

export default function Home() {
  const [quizState, setQuizState] = useState<'not-started' | 'in-progress' | 'finished'>('not-started');
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [timeLimit, setTimeLimit] = useState(15 * 60); // Default to 15 minutes in seconds
  const [numQuestions, setNumQuestions] = useState(45); // Default to 45 questions
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);

  const allQuestions = selectedCourse.questions;

  useEffect(() => {
    // Reset numQuestions if it exceeds the new course's total questions
    // or if the new course has 0 questions
    if (numQuestions > selectedCourse.totalQuestions || selectedCourse.totalQuestions === 0) {
      setNumQuestions(selectedCourse.totalQuestions > 0 ? selectedCourse.minQuestions : 0);
    } else if (numQuestions < selectedCourse.minQuestions && selectedCourse.totalQuestions > 0) {
      setNumQuestions(selectedCourse.minQuestions);
    }
  }, [selectedCourse, numQuestions]);

  const handleQuizStart = () => {
    if (selectedCourse.totalQuestions < selectedCourse.minQuestions) return;
    // Shuffle all questions from the selected course
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
    .filter((qty, index, self) => self.indexOf(qty) === index)
    .sort((a,b) => a - b);


  const handleCourseChange = (courseCode: string) => {
    const course = courses.find(c => c.code === courseCode);
    if (course) {
      setSelectedCourse(course);
    }
  };

  const renderContent = () => {
    switch (quizState) {
      case 'in-progress':
        return <QuizContainer questions={questions} onQuizFinish={handleQuizFinish} timeLimit={timeLimit} course={selectedCourse} />;
      case 'finished':
        return (
          <QuizResults
            score={score}
            totalQuestions={questions.length}
            userAnswers={userAnswers}
            questions={questions}
            onRestart={handleRestart}
            course={selectedCourse}
          />
        );
      case 'not-started':
      default:
        return (
          <div className="flex justify-center items-center py-4 md:py-10">
            <Card className="w-full max-w-4xl bg-card/80 backdrop-blur-sm border-primary/20 shadow-primary/20 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-headline text-shadow-glow">Welcome to The Web3 Wizard's Academy!</CardTitle>
                <CardDescription>
                  Select your course and prepare for your exam.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6 p-6">
                <div className="flex flex-col items-center gap-3 w-full">
                    <Label htmlFor="course-select" className="flex items-center gap-2 text-sm md:text-base">
                        <Book className="h-5 w-5" />
                        Choose Your Course
                    </Label>
                    <Select
                        defaultValue={selectedCourse.code}
                        onValueChange={handleCourseChange}
                    >
                        <SelectTrigger id="course-select" className="w-full max-w-lg mx-auto">
                        <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                        {courses.map(course => (
                            <SelectItem key={course.code} value={course.code}>
                            {course.code} - {course.title} ({course.totalQuestions} questions)
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                </div>

                {totalAvailableQuestions < selectedCourse.minQuestions ? (
                  <div className="text-center text-primary/80 bg-primary/10 p-3 rounded-md">
                    <p>Questions for {selectedCourse.code} are being added. Please check back soon or select another course.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                      <div className="flex flex-col items-center gap-3 w-full">
                          <Label htmlFor="time-select" className="flex items-center gap-2 text-sm md:text-base">
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

                      <div className="flex flex-col items-center gap-3 w-full">
                          <Label htmlFor="questions-select" className="flex items-center gap-2 text-sm md:text-base">
                          <Hash className="h-5 w-5" />
                          Number of Questions
                          </Label>
                          <Select
                          value={String(numQuestions)}
                          onValueChange={(value) => setNumQuestions(Number(value))}
                          >
                          <SelectTrigger id="questions-select" className="w-full">
                              <SelectValue placeholder="Select quantity" />
                          </SelectTrigger>
                          <SelectContent>
                              {questionOptions.map(qty => (
                                  <SelectItem key={qty} value={String(qty)}>
                                  {qty === totalAvailableQuestions ? `All (${qty})` : `${qty} Questions`}
                                  </SelectItem>
                              ))}
                          </SelectContent>
                          </Select>
                      </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button size="lg" onClick={handleQuizStart} className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow" disabled={totalAvailableQuestions < selectedCourse.minQuestions}>
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
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        {renderContent()}
      </main>
    </div>
  );
}
