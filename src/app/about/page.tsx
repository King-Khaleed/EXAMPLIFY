import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { courses } from '@/lib/courses';
import { Check, Rocket, Settings, Star, Award, Code, BookOpen, Cpu, Layers } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-shadow-glow mb-4 animate-in fade-in-50 duration-1000">
            About The Web3 Wizard's Academy
          </h1>
          <p className="text-lg md:text-xl text-primary/90 animate-in fade-in-50 duration-1000 delay-200">
            Empowering Students Through Interactive Learning in the Web3 Era
          </p>
        </section>

        {/* Mission Statement */}
        <section className="max-w-4xl mx-auto my-12">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-headline text-center flex items-center justify-center gap-3">
                <Rocket className="text-primary" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base md:text-lg text-center text-foreground/80">
                Our mission is to transform traditional education by providing an engaging, 
                interactive platform where students can test their knowledge, track their 
                progress, and master their courses through gamified learning experiences.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What We Offer */}
        <section className="my-12 text-center">
            <h2 className="text-3xl md:text-4xl font-headline text-shadow-glow mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="bg-card/60 backdrop-blur-sm border-primary/10 text-left p-4">
                    <CardHeader className='p-2'>
                        <CardTitle className="flex items-center gap-2 text-lg font-semibold"><BookOpen className="text-primary"/>Quality Content</CardTitle>
                    </CardHeader>
                    <CardContent className='p-2'>
                        <p className="text-sm text-muted-foreground">Free access to over 600 quality questions across multiple courses.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-card/60 backdrop-blur-sm border-primary/10 text-left p-4">
                    <CardHeader className='p-2'>
                        <CardTitle className="flex items-center gap-2 text-lg font-semibold"><Settings className="text-primary"/>Customizable Quiz</CardTitle>
                    </CardHeader>
                    <CardContent className='p-2'>
                        <p className="text-sm text-muted-foreground">Tailor your quiz experience with custom time durations and question counts.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-card/60 backdrop-blur-sm border-primary/10 text-left p-4">
                    <CardHeader className='p-2'>
                        <CardTitle className="flex items-center gap-2 text-lg font-semibold"><Star className="text-primary"/>Instant Feedback</CardTitle>
                    </CardHeader>
                    <CardContent className='p-2'>
                        <p className="text-sm text-muted-foreground">Get immediate results and detailed answer reviews to help you learn faster.</p>
                    </CardContent>
                </Card>
            </div>
        </section>


        {/* Available Courses */}
        <section className="my-12">
          <h2 className="text-3xl md:text-4xl font-headline text-center text-shadow-glow mb-8">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.map(course => (
              <Card key={course.code} className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg text-center p-6">
                <CardTitle className="font-headline text-xl text-primary">{course.code}</CardTitle>
                <p className="text-foreground/90 mt-2 mb-1">{course.title}</p>
                <p className="text-sm text-muted-foreground">{course.totalQuestions > 0 ? `${course.totalQuestions} questions` : 'Questions coming soon'}</p>
              </Card>
            ))}
          </div>
        </section>
        
        {/* How It Works */}
        <section className="my-16">
          <h2 className="text-3xl md:text-4xl font-headline text-center text-shadow-glow mb-10">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 border-2 border-primary text-primary text-2xl font-bold mb-4">1</div>
              <h3 className="font-semibold text-lg mb-2">Select Course</h3>
              <p className="text-sm text-muted-foreground">Choose from our growing library of subjects.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 border-2 border-primary text-primary text-2xl font-bold mb-4">2</div>
              <h3 className="font-semibold text-lg mb-2">Customize Quiz</h3>
              <p className="text-sm text-muted-foreground">Set your preferred time and number of questions.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 border-2 border-primary text-primary text-2xl font-bold mb-4">3</div>
              <h3 className="font-semibold text-lg mb-2">Start Answering</h3>
              <p className="text-sm text-muted-foreground">Test your knowledge at your own pace.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 border-2 border-primary text-primary text-2xl font-bold mb-4">4</div>
              <h3 className="font-semibold text-lg mb-2">Review & Learn</h3>
              <p className="text-sm text-muted-foreground">Analyze your results and learn from mistakes.</p>
            </div>
          </div>
        </section>


        {/* Key Features */}
        <section className="my-12">
            <h2 className="text-3xl md:text-4xl font-headline text-center text-shadow-glow mb-8">Key Features</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-sm md:text-base">
                <li className="flex items-center gap-3"><Cpu className="h-5 w-5 text-primary"/>Responsive Design</li>
                <li className="flex items-center gap-3"><Settings className="h-5 w-5 text-primary"/>Customizable Settings</li>
                <li className="flex items-center gap-3"><Award className="h-5 w-5 text-primary"/>Real-time Scoring</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary"/>Detailed Results</li>
                <li className="flex items-center gap-3"><Layers className="h-5 w-5 text-primary"/>Multiple Courses</li>
                <li className="flex items-center gap-3"><Star className="h-5 w-5 text-primary"/>Beautiful Interface</li>
                <li className="flex items-center gap-3"><Code className="h-5 w-5 text-primary"/>No Ads, Completely Free</li>
            </ul>
        </section>

        {/* CTA */}
         <section className="text-center my-16">
            <Link href="/">
                <Button size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                    Start a Quiz
                </Button>
            </Link>
        </section>

        {/* Footer Info */}
        <footer className="text-center text-muted-foreground text-sm space-y-4 pt-12 border-t border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <h4 className='font-bold text-foreground'>Version</h4>
                    <p>1.0.0</p>
                </div>
                <div>
                    <h4 className='font-bold text-foreground'>Developer</h4>
                    <p>The Web3 Wizard's Academy Team</p>
                </div>
                <div>
                    <h4 className='font-bold text-foreground'>Last Updated</h4>
                    <p>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>
            <div className="pt-8">
                <p>Copyright © {new Date().getFullYear()} The Web3 Wizard's Academy. All rights reserved.</p>
            </div>
        </footer>

      </main>
    </div>
  );
}
