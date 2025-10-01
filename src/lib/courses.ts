import type { Course } from './types';
import { questions as gst112Questions } from './questions';
import { questions as csc102Questions } from './csc102-questions';
import { questions as phy102Questions } from './phy102-questions';

/**
 * To add a new course in the future:
 * 1. Create a new questions file (e.g., `src/lib/phy102-questions.ts`) similar to `src/lib/questions.ts`.
 * 2. Import the new questions array into this file.
 * 3. Add a new course object to the `courses` array below, following the structure.
 */

export const courses: Course[] = [
  {
    code: 'CSC 102',
    title: 'Introduction to Problem Solving And Python Programming',
    questions: csc102Questions,
    totalQuestions: csc102Questions.length,
    minQuestions: 45,
  },
  {
    code: 'GST 112',
    title: 'Nigerian Peoples and Culture',
    questions: gst112Questions,
    totalQuestions: gst112Questions.length,
    minQuestions: 45,
  },
  {
    code: 'PHY 102',
    title: 'Electricity, Magnetism & Modern Physics',
    questions: phy102Questions,
    totalQuestions: phy102Questions.length,
    minQuestions: 45,
  },
  // Add new courses here in the future
];
