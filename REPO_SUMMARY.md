# EXAMPLIFY Repository Summary

## Overview
This project is a Next.js 15 app built as a quiz/exam prep platform called "The Web3 Wizard's Academy." It uses React, Tailwind, Radix UI components, and Genkit AI to offer timed quizzes, answer review, scoring, and AI-generated study suggestions.

## Project Type
- Next.js application using App Router (`src/app`) and client components for interactive UX.
- Tailwind CSS styling with custom UI primitives under `src/components/ui`.
- Genkit AI integration for post-quiz study recommendations.
- Firebase Studio starter branding in `README.md`, but the app itself appears to be a generic Next.js quiz app.

## Key Files
- `package.json` - dependencies include `next`, `react`, `tailwindcss`, `genkit`, `firebase`, `zod`, `react-hook-form`, and a large Radix UI component suite.
- `next.config.ts` - configures TypeScript and ESLint to ignore build errors and allows remote image loading from placeholder and Unsplash domains.
- `src/app/page.tsx` - main quiz entry point, user selects course, time limit, and number of questions.
- `src/app/layout.tsx` - global layout, theme provider, font preload, and `Toaster` integration.
- `src/app/actions.ts` - server action that calls Genkit flow to return AI study suggestions.
- `src/ai/flows/ai-suggested-study-areas.ts` - defines AI prompt/flow for analyzing quiz results and recommending improvement areas.
- `src/lib/courses.ts` - course metadata and question import list.
- `src/lib/types.ts` - shared TypeScript types for `Question`, `Course`, and `UserAnswerMap`.

## Core Features
- Course selection among predefined exams in `src/lib/courses.ts`.
- Configurable quiz duration and question count.
- Randomized question selection when quiz starts.
- Timer-based quiz session with automatic submission on timeout.
- Progress tracking through a `QuizContainer` with navigation and submit dialog.
- Score display and question review in `QuizResults`.
- AI-based study suggestions via a server-side Genkit flow.
- Responsive header navigation with mobile menu and theme toggle.

## Data and UI Flow
1. `src/app/page.tsx` renders the initial landing card and quiz settings.
2. When quiz begins, questions are shuffled and a subset is selected.
3. `QuizContainer` handles question navigation, answer recording, and countdown timer.
4. `QuizResults` calculates score and optionally calls `getAiSuggestions` to produce recommendations.
5. AI suggestions are powered by `src/ai/flows/ai-suggested-study-areas.ts` and run on the server.

## Important Observations
- The app uses `ignoreBuildErrors` and `ignoreDuringBuilds` in Next config, which allows the build to succeed even with TypeScript/ESLint issues.
- `README.md` is minimal and only points to the main page; there is no detailed developer documentation.
- The repository appears ready for local development via `npm run dev` on port `9002`.
- The app currently bundles several courses from `src/lib/questions.ts` and separate subject files such as `csc102-questions.ts`, `phy102-questions.ts`, and `pol101-questions.ts`.

## Suggested Next Steps
- Add more complete README documentation for setup, environment variables, and AI requirements.
- Verify whether `firebase` is intended for deployment or if it is a leftover dependency from the starter.
- Inspect course question files for completeness and to ensure course data is current.
- Consider removing or revising the `ignoreBuildErrors`/`ignoreDuringBuilds` settings once TypeScript/ESLint issues are addressed.
