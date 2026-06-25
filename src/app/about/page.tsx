import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/courses';
import { GraduationCap, Rocket, BookOpen, Settings, Star, Sparkles, Target, BrainCircuit, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-6 slide-down">
            <GraduationCap className="size-3.5" />
            About Examplify
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-5">
            Empowering Students Through{' '}
            <span className="gold-text">Smart Learning</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            We believe in transforming traditional exam preparation into an engaging,
            insightful experience that helps students truly master their subjects.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto card-glass rounded-2xl p-8 md:p-10 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Rocket className="size-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our mission is to transform traditional education by providing an engaging,
              interactive platform where students can test their knowledge, track their
              progress, and master their courses through data-driven learning experiences
              powered by modern technology.
            </p>
          </div>

          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-3">
              What We <span className="gold-text">Offer</span>
            </h2>
            <p className="text-muted-foreground">Everything you need to excel in your exams</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
            <div className="card-glass rounded-xl p-6 group hover:border-primary/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="size-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">Quality Content</h3>
              <p className="text-sm text-muted-foreground">Free access to over 600 quality questions across multiple courses, curated by subject matter experts.</p>
            </div>
            <div className="card-glass rounded-xl p-6 group hover:border-primary/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Settings className="size-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">Customizable Quiz</h3>
              <p className="text-sm text-muted-foreground">Tailor your quiz experience with custom time durations and question counts that fit your study schedule.</p>
            </div>
            <div className="card-glass rounded-xl p-6 group hover:border-primary/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Star className="size-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">AI-Powered Feedback</h3>
              <p className="text-sm text-muted-foreground">Get intelligent analysis of your performance with personalized study recommendations to improve faster.</p>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-3">
              Available <span className="gold-text">Courses</span>
            </h2>
            <p className="text-muted-foreground">Select from our growing library of subjects</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
            {courses.map(course => (
              <div key={course.code} className="card-glass rounded-xl p-5 text-center hover:border-primary/20 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="size-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-primary">{course.code}</h3>
                <p className="text-sm text-foreground/80 mt-1 mb-1 line-clamp-1">{course.title}</p>
                <p className="text-xs text-muted-foreground">
                  {course.totalQuestions > 0 ? `${course.totalQuestions} questions` : 'Coming soon'}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-3">
              How It <span className="gold-text">Works</span>
            </h2>
            <p className="text-muted-foreground">Four simple steps to exam mastery</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-16">
            {[
              { num: '01', title: 'Select Course', desc: 'Choose from our growing library of subjects.' },
              { num: '02', title: 'Customize Quiz', desc: 'Set your preferred time and number of questions.' },
              { num: '03', title: 'Start Answering', desc: 'Test your knowledge at your own pace.' },
              { num: '04', title: 'Review & Learn', desc: 'Analyze your results and learn from mistakes.' },
            ].map((step) => (
              <div key={step.num} className="text-center p-6 card-glass rounded-xl hover:border-primary/20 transition-all group">
                <span className="font-heading text-3xl font-semibold gold-text">{step.num}</span>
                <h3 className="font-heading font-semibold text-base mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-3">
              Key <span className="gold-text">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {[
              { icon: BookOpen, label: 'Multiple Courses' },
              { icon: Settings, label: 'Customizable Settings' },
              { icon: Star, label: 'Real-time Scoring' },
              { icon: BarChart3, label: 'Detailed Results' },
              { icon: Target, label: 'AI Study Insights' },
              { icon: BrainCircuit, label: 'Smart Analysis' },
              { icon: Sparkles, label: 'Premium Interface' },
              { icon: GraduationCap, label: '100% Free' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 p-4 card-glass rounded-xl hover:border-primary/20 transition-all">
                <Icon className="size-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/">
              <Button size="lg" className="h-13 px-8 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Start a Quiz
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
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
