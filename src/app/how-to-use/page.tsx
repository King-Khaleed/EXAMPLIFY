import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Sliders, Timer, ChevronsRight, BookCopy, ListChecks, Target, BrainCircuit, Tv, CircleDollarSign, Fingerprint, Star, Clock, Hash, Book, ArrowRight, ArrowLeft, Send, BarChart, Check, X, ShieldQuestion, Calendar, Cpu, UserCheck, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function HowToUsePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        <section className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-shadow-glow mb-4 animate-in fade-in-50 duration-1000">
            How to Use The Web3 Wizard's Academy
          </h1>
          <p className="text-lg md:text-xl text-primary/90 animate-in fade-in-50 duration-1000 delay-200">
            Your guide to mastering quizzes and tracking your progress
          </p>
        </section>

        <section className="max-w-4xl mx-auto my-8">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-primary/20 shadow-lg p-6">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-headline text-center flex items-center justify-center gap-3">
                <BookCopy className="text-primary" /> Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base md:text-lg text-center text-foreground/80">
                Welcome to The Web3 Wizard's Academy! This guide will walk you through everything you need to know to get started and make the most of your learning experience.
              </p>
            </CardContent>
          </Card>
        </section>
        
        <section className="max-w-4xl mx-auto my-8">
            <h2 className="text-3xl md:text-4xl font-headline text-center text-shadow-glow mb-8">Getting Started</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='bg-card/60 p-4 rounded-lg text-lg'>Step 1: Select Your Course</AccordionTrigger>
                    <AccordionContent className="p-4 bg-card/40 rounded-b-lg">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Navigate to the quiz setup page (the home page).</li>
                            <li>Click on the "Course" dropdown menu.</li>
                            <li>Choose from available courses like GST 112, CSC 102, and PHY 102.</li>
                            <li>Each course displays the number of available questions.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='bg-card/60 p-4 rounded-lg text-lg'>Step 2: Choose Time Duration</AccordionTrigger>
                    <AccordionContent className="p-4 bg-card/40 rounded-b-lg">
                         <ul className="list-disc list-inside space-y-2">
                            <li>Select your preferred quiz time from the dropdown.</li>
                            <li>Options typically include 15, 30, and 45 minutes.</li>
                            <li>The timer starts counting down as soon as you begin the quiz.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='bg-card/60 p-4 rounded-lg text-lg'>Step 3: Set Number of Questions</AccordionTrigger>
                    <AccordionContent className="p-4 bg-card/40 rounded-b-lg">
                         <ul className="list-disc list-inside space-y-2">
                            <li>Choose how many questions you want to answer.</li>
                            <li>The minimum is 45, and the maximum is the total available for the course.</li>
                            <li>More questions provide a more comprehensive assessment.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                    <AccordionTrigger className='bg-card/60 p-4 rounded-lg text-lg'>Step 4: Start Your Quiz</AccordionTrigger>
                    <AccordionContent className="p-4 bg-card/40 rounded-b-lg">
                         <ul className="list-disc list-inside space-y-2">
                            <li>Click the "Start Quiz" button.</li>
                            <li>The quiz begins immediately with the timer countdown.</li>
                             <li>Questions are randomly selected from the chosen course's question pool.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>

        <section className="max-w-4xl mx-auto my-12">
            <h2 className="text-3xl md:text-4xl font-headline text-center text-shadow-glow mb-8">During the Quiz</h2>
            <div className="space-y-4">
                <Card>
                    <CardHeader><CardTitle className='flex items-center gap-2'><ChevronsRight/> Navigation</CardTitle></CardHeader>
                    <CardContent>
                        <p>Use the "Next" and "Previous" buttons to move between questions. Your answers are automatically saved as you navigate. A progress indicator shows your current position.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className='flex items-center gap-2'><ListChecks/> Answering Questions</CardTitle></CardHeader>
                    <CardContent>
                        <p>Read each question and select one of the four options. Your selection will be highlighted. You can change your answer anytime before submitting.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className='flex items-center gap-2'><Send/> Submit Button</CardTitle></CardHeader>
                    <CardContent>
                        <p>The "Submit Quiz" button appears on the last question, or when the timer reaches the halfway point. A confirmation popup will ask you to confirm your submission.</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section className="max-w-4xl mx-auto my-12">
            <h2 className="text-3xl md:text-4xl font-headline text-center text-shadow-glow mb-8">After Submission: The Results</h2>
            <div className="space-y-4">
                <Card>
                    <CardHeader><CardTitle className='flex items-center gap-2'><BarChart/> Overall Score</CardTitle></CardHeader>
                    <CardContent>
                        <p>Instantly see your total score (e.g., 45/50), the percentage, the time taken, and the course name.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle className='flex items-center gap-2'><Check/> <X/> Detailed Review</CardTitle></CardHeader>
                    <CardContent>
                        <p>Scroll through all your answered questions. Correct answers are marked with a green check (✓) and incorrect ones with a red cross (✗). The correct answer is always shown to help you learn.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
        
        <section className="max-w-4xl mx-auto my-12">
            <h2 className="text-3xl md:text-4xl font-headline text-center text-shadow-glow mb-8">Tips for Better Performance</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                <li className="flex items-start gap-3 p-3 bg-card/60 rounded-lg"><Target className="h-5 w-5 text-primary mt-1 flex-shrink-0"/><span><strong>Read Carefully:</strong> Take time to understand each question before answering.</span></li>
                <li className="flex items-start gap-3 p-3 bg-card/60 rounded-lg"><BrainCircuit className="h-5 w-5 text-primary mt-1 flex-shrink-0"/><span><strong>Eliminate Wrong Answers:</strong> Narrow down your options to increase your chances.</span></li>
                <li className="flex items-start gap-3 p-3 bg-card/60 rounded-lg"><Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0"/><span><strong>Time Management:</strong> Keep an eye on the timer, but don't rush unnecessarily.</span></li>
                <li className="flex items-start gap-3 p-3 bg-card/60 rounded-lg"><RefreshCw className="h-5 w-5 text-primary mt-1 flex-shrink-0"/><span><strong>Review Before Submitting:</strong> Use the "Previous" button to double-check your answers if time allows.</span></li>
                <li className="flex items-start gap-3 p-3 bg-card/60 rounded-lg"><Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0"/><span><strong>Practice Regularly:</strong> Consistent practice is key to retaining information.</span></li>
                <li className="flex items-start gap-3 p-3 bg-card/60 rounded-lg"><UserCheck className="h-5 w-5 text-primary mt-1 flex-shrink-0"/><span><strong>Learn from Mistakes:</strong> Pay close attention to the review section to understand concepts you missed.</span></li>
            </ul>
        </section>
        
        <section className="max-w-4xl mx-auto my-12">
            <h2 className="text-3xl md:text-4xl font-headline text-center text-shadow-glow mb-8">Troubleshooting & FAQ</h2>
             <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='bg-card/60 p-4 rounded-lg text-lg'>What happens if I close the browser during a quiz?</AccordionTrigger>
                    <AccordionContent className="p-4 bg-card/40 rounded-b-lg">
                        <p>Your progress may be lost. We recommend completing quizzes in one session as progress is not saved if you close the tab or browser.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='bg-card/60 p-4 rounded-lg text-lg'>Can I pause the quiz?</AccordionTrigger>
                    <AccordionContent className="p-4 bg-card/40 rounded-b-lg">
                        <p>Currently, there is no pause function. The timer will continue to run until you submit or time expires.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='bg-card/60 p-4 rounded-lg text-lg'>What if time runs out?</AccordionTrigger>
                    <AccordionContent className="p-4 bg-card/40 rounded-b-lg">
                        <p>The quiz will automatically submit when the timer reaches zero. Your score will be calculated based on the questions you have answered up to that point.</p>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                    <AccordionTrigger className='bg-card/60 p-4 rounded-lg text-lg'>Can I retake a quiz?</AccordionTrigger>
                    <AccordionContent className="p-4 bg-card/40 rounded-b-lg">
                        <p>Absolutely! You can take quizzes as many times as you like. The questions are randomized each time to provide a fresh experience.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
        
        <section className="text-center my-16">
            <Link href="/">
                <Button size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                    Ready to Start?
                </Button>
            </Link>
        </section>

      </main>
    </div>
  );
}
