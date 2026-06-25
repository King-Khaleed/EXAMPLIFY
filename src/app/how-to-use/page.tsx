import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, ChevronRight, ListChecks, Send, BarChart3, Check, X, Target, BrainCircuit, Clock, RefreshCw, Calendar, UserCheck, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowToUsePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-6 slide-down">
            <BookOpen className="size-3.5" />
            User Guide
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-5">
            How to Use{' '}
            <span className="gold-text">Examplify</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Your complete guide to mastering quizzes, tracking your progress, and making the most of every study session.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="card-glass rounded-2xl p-8 md:p-10 mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="size-6 text-primary" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold">Introduction</h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Welcome to Examplify! This guide will walk you through everything you need to know to get started and make the most of your learning experience.
              </p>
            </div>

            <div className="mb-10">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold">
                  Getting <span className="gold-text">Started</span>
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {[
                  {
                    value: 'step-1',
                    icon: BookOpen,
                    title: 'Step 1: Select Your Course',
                    content: (
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>Navigate to the home page to access the quiz setup.</span></li>
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>Click on the course dropdown menu to see available options.</span></li>
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>Choose from courses like GST 112, CSC 102, PHY 102, and more.</span></li>
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>Each course shows the number of available questions.</span></li>
                      </ul>
                    ),
                  },
                  {
                    value: 'step-2',
                    icon: Clock,
                    title: 'Step 2: Choose Time Duration',
                    content: (
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>Select your preferred quiz duration from the dropdown.</span></li>
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>Options include 15, 30, and 45 minutes to fit your schedule.</span></li>
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>The timer begins counting down as soon as you start the quiz.</span></li>
                      </ul>
                    ),
                  },
                  {
                    value: 'step-3',
                    icon: ListChecks,
                    title: 'Step 3: Set Number of Questions',
                    content: (
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>Choose how many questions you want to answer, from 45 up to the total available.</span></li>
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>More questions provide a more comprehensive assessment of your knowledge.</span></li>
                      </ul>
                    ),
                  },
                  {
                    value: 'step-4',
                    icon: Send,
                    title: 'Step 4: Start Your Quiz',
                    content: (
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>Click the "Start Exam" button to begin.</span></li>
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>Questions are randomly selected from the course question bank.</span></li>
                        <li className="flex items-start gap-3"><ChevronRight className="size-4 text-primary mt-0.5 flex-shrink-0" /><span>The timer starts immediately — stay focused!</span></li>
                      </ul>
                    ),
                  },
                ].map(({ value, icon: Icon, title, content }) => (
                  <AccordionItem key={value} value={value} className="border border-border/50 rounded-xl overflow-hidden bg-card/30 data-[state=open]:bg-card/50 transition-all">
                    <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-accent/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="size-4 text-primary" />
                        </div>
                        <span className="font-heading font-semibold text-base">{title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-1 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mb-10">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold">
                  During the <span className="gold-text">Quiz</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { icon: ChevronRight, title: 'Navigation', desc: 'Use the "Next" and "Previous" buttons to move between questions. Your answers are automatically saved as you navigate.' },
                  { icon: ListChecks, title: 'Answering Questions', desc: 'Select one of the options for each question. Your selection will be highlighted. You can change your answer anytime before submitting.' },
                  { icon: Send, title: 'Submitting', desc: 'Click "Finish Exam" on the last question or use "Submit" to end early. A confirmation dialog will appear before final submission.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="card-glass rounded-xl p-6 hover:border-primary/20 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-base mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold">
                  After Submission:{' '}
                  <span className="gold-text">Results</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { icon: BarChart3, title: 'Overall Score', desc: 'Instantly see your total score, percentage, grade, and a breakdown of correct, incorrect, and unanswered questions.' },
                  { icon: Check, icon2: X, title: 'Detailed Review', desc: 'Scroll through all answered questions. Correct answers are marked green, incorrect ones in red. The correct answer is always shown to help you learn.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="card-glass rounded-xl p-6 hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-base">{title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold">
                  Tips for Better{' '}
                  <span className="gold-text">Performance</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Target, title: 'Read Carefully', desc: 'Take time to understand each question before answering.' },
                  { icon: BrainCircuit, title: 'Eliminate Wrong Answers', desc: 'Narrow down your options to increase your chances.' },
                  { icon: Clock, title: 'Time Management', desc: 'Keep an eye on the timer, but don\'t rush unnecessarily.' },
                  { icon: RefreshCw, title: 'Review Before Submitting', desc: 'Double-check your answers if time allows.' },
                  { icon: Calendar, title: 'Practice Regularly', desc: 'Consistent practice is key to retaining information.' },
                  { icon: UserCheck, title: 'Learn from Mistakes', desc: 'Focus on the review section to understand concepts you missed.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-5 card-glass rounded-xl hover:border-primary/20 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold">
                  Troubleshooting &{' '}
                  <span className="gold-text">FAQ</span>
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {[
                  { q: 'What happens if I close the browser during a quiz?', a: 'Your progress may be lost. We recommend completing quizzes in one session as progress is not saved if you close the tab or browser.' },
                  { q: 'Can I pause the quiz?', a: 'Currently, there is no pause function. The timer will continue to run until you submit or time expires.' },
                  { q: 'What if time runs out?', a: 'The quiz will automatically submit when the timer reaches zero. Your score will be calculated based on the questions you answered.' },
                  { q: 'Can I retake a quiz?', a: 'Absolutely! You can take quizzes as many times as you like. Questions are randomized each time to provide a fresh experience.' },
                  { q: 'How does the AI study suggestion work?', a: 'After completing a quiz, you can request AI-powered analysis that identifies your weak areas and provides personalized study recommendations.' },
                ].map(({ q, a }, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-xl overflow-hidden bg-card/30 data-[state=open]:bg-card/50 transition-all">
                    <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-accent/5 transition-colors">
                      <div className="flex items-center gap-3 text-left">
                        <Sparkles className="size-4 text-primary flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">{q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center">
              <Link href="/">
                <Button size="lg" className="h-13 px-8 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Ready to Start?
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
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
}
