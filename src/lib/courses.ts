import type { Course } from './types';
import { questions as gst112Questions } from './questions';

/**
 * To add a new course in the future:
 * 1. Create a new questions file (e.g., `src/lib/csc102-questions.ts`) similar to `src/lib/questions.ts`.
 * 2. Import the new questions array into this file.
 * 3. Add a new course object to the `courses` array below, following the structure.
 */

export const courses: Course[] = [
  {
    code: 'GST 112',
    title: 'Nigerian Peoples and Culture',
    questions: gst112Questions,
    totalQuestions: gst112Questions.length,
    minQuestions: 45,
  },
  // Add new courses here in the future
];
