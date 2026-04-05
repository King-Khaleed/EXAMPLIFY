import type { Course } from './types';
import { questions as gst112Questions } from './gst112-questions';
import { questions as csc102Questions } from './csc102-questions';
import { questions as phy102Questions } from './phy102-questions';
import { questions as pol101Questions } from './pol101-questions';
import { questions as mth101Questions } from './mth101-questions';
import { questions as agg101Questions } from './agg101-questions';
import { questions as chm101Questions } from './chm101-questions';
import { questions as csc111Questions } from './csc111-questions';
import { questions as csc201Questions } from './csc201-questions';
import { questions as gst212Questions } from './gst212-questions';
import { questions as csc223Questions } from './csc223-questions';


/**
 * To add a new course in the future:
 * 1. Create a new questions file (e.g., `src/lib/phy102-questions.ts`) similar to `src/lib/gst112-questions.ts`.
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
  {
    code: 'POL 101',
    title: 'Introduction to Political Science',
    questions: pol101Questions,
    totalQuestions: pol101Questions.length,
    minQuestions: 45,
  },
  {
    code: 'MTH 101',
    title: 'Set Theorem',
    questions: mth101Questions,
    totalQuestions: mth101Questions.length,
    minQuestions: 45,
  },
  {
    code: 'AGG 101',
    title: 'Introduction To Agriculture 1',
    questions: agg101Questions,
    totalQuestions: agg101Questions.length,
    minQuestions: 45,
  },
  {
    code: 'CHM 101',
    title: 'Introduction To Chemistry',
    questions: chm101Questions,
    totalQuestions: chm101Questions.length,
    minQuestions: 45,
  },
  {
    code: 'CSC 111',
    title: 'Introduction To Computing',
    questions: csc111Questions,
    totalQuestions: csc111Questions.length,
    minQuestions: 45,
  },
  {
    code: 'CSC 201',
    title: 'Object-Oriented Programming',
    questions: csc201Questions,
    totalQuestions: csc201Questions.length,
    minQuestions: 45,
  },
  {
    code: 'CSC 223',
    title: 'Discrete Structures',
    questions: csc223Questions,
    totalQuestions: csc223Questions.length,
    minQuestions: 45,
  },
  {
    code: 'GST 212',
    title: 'PHILOSOPHY',
    questions: gst212Questions,
    totalQuestions: gst212Questions.length,
    minQuestions: 45,
  },

  // Add new courses here in the future
];
