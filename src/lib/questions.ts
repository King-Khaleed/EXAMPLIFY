import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 'q1',
    text: 'What is the capital of Japan?',
    options: [
      { id: 'q1o1', text: 'Beijing' },
      { id: 'q1o2', text: 'Seoul' },
      { id: 'q1o3', text: 'Tokyo' },
      { id: 'q1o4', text: 'Bangkok' },
    ],
    correctOptionId: 'q1o3',
    topic: 'Asia',
  },
  {
    id: 'q2',
    text: 'What is the capital of Canada?',
    options: [
      { id: 'q2o1', text: 'Toronto' },
      { id: 'q2o2', text: 'Vancouver' },
      { id: 'q2o3', text: 'Ottawa' },
      { id: 'q2o4', text: 'Montreal' },
    ],
    correctOptionId: 'q2o3',
    topic: 'North America',
  },
  {
    id: 'q3',
    text: 'What is the capital of Australia?',
    options: [
      { id: 'q3o1', text: 'Sydney' },
      { id: 'q3o2', text: 'Melbourne' },
      { id: 'q3o3', text: 'Canberra' },
      { id: 'q3o4', text: 'Perth' },
    ],
    correctOptionId: 'q3o3',
    topic: 'Oceania',
  },
  {
    id: 'q4',
    text: 'What is the capital of Brazil?',
    options: [
      { id: 'q4o1', text: 'Rio de Janeiro' },
      { id: 'q4o2', text: 'São Paulo' },
      { id: 'q4o3', text: 'Salvador' },
      { id: 'q4o4', text: 'Brasília' },
    ],
    correctOptionId: 'q4o4',
    topic: 'South America',
  },
  {
    id: 'q5',
    text: 'What is the capital of Germany?',
    options: [
      { id: 'q5o1', text: 'Munich' },
      { id: 'q5o2', text: 'Berlin' },
      { id: 'q5o3', text: 'Frankfurt' },
      { id: 'q5o4', text: 'Hamburg' },
    ],
    correctOptionId: 'q5o2',
    topic: 'Europe',
  },
  {
    id: 'q6',
    text: 'What is the capital of Egypt?',
    options: [
      { id: 'q6o1', text: 'Cairo' },
      { id: 'q6o2', text: 'Alexandria' },
      { id: 'q6o3', text: 'Giza' },
      { id: 'q6o4', text: 'Luxor' },
    ],
    correctOptionId: 'q6o1',
    topic: 'Africa',
  },
  {
    id: 'q7',
    text: 'What is the capital of South Korea?',
    options: [
      { id: 'q7o1', text: 'Busan' },
      { id: 'q7o2', text: 'Incheon' },
      { id: 'q7o3', text: 'Seoul' },
      { id: 'q7o4', text: 'Daegu' },
    ],
    correctOptionId: 'q7o3',
    topic: 'Asia',
  },
  {
    id: 'q8',
    text: 'What is the capital of Argentina?',
    options: [
      { id: 'q8o1', text: 'Córdoba' },
      { id: 'q8o2', text: 'Buenos Aires' },
      { id: 'q8o3', text: 'Rosario' },
      { id: 'q8o4', text: 'Mendoza' },
    ],
    correctOptionId: 'q8o2',
    topic: 'South America',
  },
  {
    id: 'q9',
    text: 'What is the capital of Italy?',
    options: [
      { id: 'q9o1', text: 'Milan' },
      { id: 'q9o2', text: 'Naples' },
      { id: 'q9o3', text: 'Rome' },
      { id: 'q9o4', text: 'Turin' },
    ],
    correctOptionId: 'q9o3',
    topic: 'Europe',
  },
  {
    id: 'q10',
    text: 'What is the capital of Nigeria?',
    options: [
      { id: 'q10o1', text: 'Lagos' },
      { id: 'q10o2', text: 'Kano' },
      { id: 'q10o3', text: 'Ibadan' },
      { id: 'q10o4', text: 'Abuja' },
    ],
    correctOptionId: 'q10o4',
    topic: 'Africa',
  },
];
