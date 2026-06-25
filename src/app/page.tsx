'use client';

import { useState, useEffect } from 'react';
import { courses } from '@/lib/courses';
import type { Question, UserAnswerMap, Course } from '@/lib/types';
import QuizContainer from '@/components/quiz-container';
import QuizResults from '@/components/quiz-results';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { Play, Timer, Sparkles, BookOpen, BrainCircuit, ShieldCheck, TrendingUp, ArrowRight, GraduationCap } from 'lucide-react';

export default function Home() {
  const [quizState, setQuizState] = useState<'not-started' | 'in-progress' | 'finished'>('not-started');
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [timeLimit, setTimeLimit] = useState(15 * 60);
  const [numQuestions, setNumQuestions] = useState(45);
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);

  const allQuestions = selectedCourse.questions;

  useEffect(() => {
    if (numQuestions > selectedCourse.totalQuestions || selectedCourse.totalQuestions === 0) {
      setNumQuestions(selectedCourse.totalQuestions > 0 ? selectedCourse.minQuestions : 0);
    } else if (numQuestions < selectedCourse.minQuestions && selectedCourse.totalQuestions > 0) {
      setNumQuestions(selectedCourse.minQuestions);
    }
  }, [selectedCourse, numQuestions]);

  const handleQuizStart = () => {
    if (selectedCourse.totalQuestions < selectedCourse.minQuestions) return;
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
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
    if (course) setSelectedCourse(course);
  };

  const features = [
    { icon: BrainCircuit, title: 'AI-Powered Insights', desc: 'Smart analysis of your performance with personalized study recommendations.' },
    { icon: ShieldCheck, title: 'Exam-Ready Questions', desc: 'Curated question banks covering key topics across multiple courses.' },
    { icon: TrendingUp, title: 'Track Your Progress', desc: 'Detailed results and review to identify strengths and areas for growth.' },
    { icon: Sparkles, title: 'Adaptive Testing', desc: 'Customizable time limits and question counts tailored to your needs.' },
  ];

  const renderNotStarted = () => (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-6 slide-down">
            <Sparkles className="size-3.5" />
            Premium Exam Preparation Platform
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance leading-[1.1] mb-5">
            Master Your Exams with{' '}
            <span className="gold-text">Confidence</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Prepare smarter with expertly crafted questions, real-time progress tracking,
            and AI-driven insights designed to help you succeed.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-sm text-muted-foreground">
              <BookOpen className="size-4 text-primary" />
              <span>{courses.reduce((sum, c) => sum + c.totalQuestions, 0)}+ Questions</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-sm text-muted-foreground">
              <GraduationCap className="size-4 text-primary" />
              <span>{courses.filter(c => c.totalQuestions > 0).length} Courses</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="card-glass rounded-2xl p-6 md:p-8 lg:p-10">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-2">Configure Your Quiz</h2>
                <p className="text-muted-foreground">Customize your exam experience</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-sm font-medium">
                    <BookOpen className="size-4 text-primary" />
                    Course
                  </Label>
                  <Select
                    defaultValue={selectedCourse.code}
                    onValueChange={handleCourseChange}
                  >
                    <SelectTrigger className="w-full h-12 bg-background/50 border-border/60 focus:ring-primary/30">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map(course => (
                        <SelectItem key={course.code} value={course.code}>
                          {course.code} — {course.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedCourse.totalQuestions > 0 && (
                    <p className="text-xs text-muted-foreground px-1">
                      {selectedCourse.totalQuestions} questions available
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-sm font-medium">
                    <Timer className="size-4 text-primary" />
                    Duration
                  </Label>
                  <Select
                    defaultValue={String(timeLimit / 60)}
                    onValueChange={(value) => setTimeLimit(Number(value) * 60)}
                  >
                    <SelectTrigger className="w-full h-12 bg-background/50 border-border/60 focus:ring-primary/30">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 Minutes</SelectItem>
                      <SelectItem value="30">30 Minutes</SelectItem>
                      <SelectItem value="45">45 Minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-sm font-medium">
                    <BrainCircuit className="size-4 text-primary" />
                    Questions
                  </Label>
                  <Select
                    value={String(numQuestions)}
                    onValueChange={(value) => setNumQuestions(Number(value))}
                  >
                    <SelectTrigger className="w-full h-12 bg-background/50 border-border/60 focus:ring-primary/30">
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      {questionOptions.map(qty => (
                        <SelectItem key={qty} value={String(qty)}>
                          {qty === totalAvailableQuestions ? `All Questions (${qty})` : `${qty} Questions`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {totalAvailableQuestions < selectedCourse.minQuestions ? (
                <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-primary/80 text-sm">
                    Questions for {selectedCourse.code} are being added. Please check back soon or select another course.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={handleQuizStart}
                    className="h-13 px-8 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                  >
                    <Play className="mr-2 size-4 group-hover:translate-x-0.5 transition-transform" />
                    Start Exam
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-3">
              Why <span className="gold-text">Examplify</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to prepare for your exams in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="card-glass rounded-xl p-6 group hover:border-primary/20 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Examplify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );

  const renderInProgress = () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <QuizContainer questions={questions} onQuizFinish={handleQuizFinish} timeLimit={timeLimit} course={selectedCourse} />
      </main>
    </div>
  );

  const renderFinished = () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <QuizResults
          score={score}
          totalQuestions={questions.length}
          userAnswers={userAnswers}
          questions={questions}
          onRestart={handleRestart}
          course={selectedCourse}
        />
      </main>
    </div>
  );

  return (
    <>
      {quizState === 'not-started' && renderNotStarted()}
      {quizState === 'in-progress' && renderInProgress()}
      {quizState === 'finished' && renderFinished()}
    </>
  );
}
