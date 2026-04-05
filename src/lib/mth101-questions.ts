import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 'mth101-q1',
    text: 'Given that the universal set µ = {X E N:1≤ x ≤10}. If A = {x E N:4≤x≤8} and B = {5} are proper subsets of µ. find A\' ∆ B\'?',
    options: [
      { id: 'mth101-q1oA', text: '{2,4,6}' },
      { id: 'mth101-q1oB', text: '{4,6,7}' },
      { id: 'mth101-q1oC', text: '{3,4,6}' },
      { id: 'mth101-q1oD', text: '{4,7}' }
    ],
    correctOptionId: 'mth101-q1oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q2',
    text: 'Given that the universal set µ = {1,2,……10}. If X = {2,3,5,7} and Y = {1,3,5,7,9} are proper subsets of µ. Find (X n Y)\'?',
    options: [
      { id: 'mth101-q2oA', text: '{1,2,4,6,8,9,10}' },
      { id: 'mth101-q2oB', text: '{2,4,6,8}' },
      { id: 'mth101-q2oC', text: '{1,3,5,7,9}' },
      { id: 'mth101-q2oD', text: '{2,3,5,7}' }
    ],
    correctOptionId: 'mth101-q2oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q3',
    text: 'In a class of 100, all students study mathematics, chemistry or both, if 50 study mathematics and 60 study chemistry; find the number of students that study both mathematics and chemistry?',
    options: [
      { id: 'mth101-q3oA', text: '6' },
      { id: 'mth101-q3oB', text: '5' },
      { id: 'mth101-q3oC', text: '10' },
      { id: 'mth101-q3oD', text: '20' }
    ],
    correctOptionId: 'mth101-q3oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q4',
    text: 'For all x, k E R, which of the following is true:',
    options: [
      { id: 'mth101-q4oA', text: '│x│< k ↔ -k<x<k' },
      { id: 'mth101-q4oB', text: '│x│<k ↔ -x<k<x' },
      { id: 'mth101-q4oC', text: '│x│< k↔ k<x<-k' },
      { id: 'mth101-q4oD', text: '│x│< k↔ -x<k<-x' }
    ],
    correctOptionId: 'mth101-q4oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q5',
    text: 'If A = {all prime factors of 30}, B = {all factors of 18} and C = {all positive even less than 10}. Find (A n B n C)?',
    options: [
      { id: 'mth101-q5oA', text: '{1}' },
      { id: 'mth101-q5oB', text: '{2}' },
      { id: 'mth101-q5oC', text: '{3}' },
      { id: 'mth101-q5oD', text: '{4}' }
    ],
    correctOptionId: 'mth101-q5oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q6',
    text: 'Given that ∑ⁿr=1 (2r + 1)(3r + 1) = ½ n(4n² + 11n + 9), find Pk+1?',
    options: [
      { id: 'mth101-q6oA', text: '½(k+1)[4(k+1)² + 11(k+1) + 9]' },
      { id: 'mth101-q6oB', text: '½ (k+1)[4(k+1) + 11(k+1)² + 9]' },
      { id: 'mth101-q6oC', text: '½ (k+1)[4(k²+1) + 11(k+1) + 9]' },
      { id: 'mth101-q6oD', text: '½ (k+1)[4(k+1)² + 11(k² + 1) + 9]' }
    ],
    correctOptionId: 'mth101-q6oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q7',
    text: 'What is the Pk+1 of (1x3) + (2x4) +…..+ n(n + 2) = ⅙n(n + 1)(2n + 7)?',
    options: [
      { id: 'mth101-q7oA', text: '⅙[2k² + 15k³ + 31k² + 18]' },
      { id: 'mth101-q7oB', text: '⅙[2k³ + 15k² + 31k + 18]' },
      { id: 'mth101-q7oC', text: '⅙ [2k⁴ + 15k³ + 31k² + 18]' },
      { id: 'mth101-q7oD', text: '⅙[2k⁵ + 15k³ + 31k² + 18]' }
    ],
    correctOptionId: 'mth101-q7oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q8',
    text: 'Find the sum of an AP: ⅔, ¾ and 7/12,…up to 19 terms.',
    options: [
      { id: 'mth101-q8oA', text: '22' },
      { id: 'mth101-q8oB', text: '10' },
      { id: 'mth101-q8oC', text: '3' },
      { id: 'mth101-q8oD', text: '0' }
    ],
    correctOptionId: 'mth101-q8oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q9',
    text: 'Insert three arithmetic means between 1 and 13?',
    options: [
      { id: 'mth101-q9oA', text: '4,7 and 11' },
      { id: 'mth101-q9oB', text: '4,7 and 10' },
      { id: 'mth101-q9oC', text: '4,7 and 9' },
      { id: 'mth101-q9oD', text: '3,6 and 9' }
    ],
    correctOptionId: 'mth101-q9oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q10',
    text: 'State the nature of the roots of a quadratic equation: k² – 6k + 9=0.',
    options: [
      { id: 'mth101-q10oA', text: 'Real and unequal' },
      { id: 'mth101-q10oB', text: 'Real and equal' },
      { id: 'mth101-q10oC', text: 'Real and imaginary' },
      { id: 'mth101-q10oD', text: 'All of the above' }
    ],
    correctOptionId: 'mth101-q10oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q11',
    text: 'If α and β are roots of 4x² + 3x + 5=0. Evaluate: 1/α + 1/β.',
    options: [
      { id: 'mth101-q11oA', text: '3/5' },
      { id: 'mth101-q11oB', text: '-3/5' },
      { id: 'mth101-q11oC', text: '5/3' },
      { id: 'mth101-q11oD', text: '-5/3' }
    ],
    correctOptionId: 'mth101-q11oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q12',
    text: 'If α and β are roots of 4x² + 3x + 5=0. Compute α² + β²?',
    options: [
      { id: 'mth101-q12oA', text: '31/16' },
      { id: 'mth101-q12oB', text: '16/31' },
      { id: 'mth101-q12oC', text: '-16/31' },
      { id: 'mth101-q12oD', text: '-31/16' }
    ],
    correctOptionId: 'mth101-q12oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q13',
    text: 'If (x + y) + i(x - y) = 8 + 2i. Find x and y.',
    options: [
      { id: 'mth101-q13oA', text: '5 and 3' },
      { id: 'mth101-q13oB', text: '3 and 5' },
      { id: 'mth101-q13oC', text: '-5 and -3' },
      { id: 'mth101-q13oD', text: '-3 and -5' }
    ],
    correctOptionId: 'mth101-q13oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q14',
    text: 'Given the complex number (Z) = (7+i)/(1+3i). Express Z in the form: a + bi?',
    options: [
      { id: 'mth101-q14oA', text: '1 + 3i' },
      { id: 'mth101-q14oB', text: '1 – 3i' },
      { id: 'mth101-q14oC', text: '1 – 2i' },
      { id: 'mth101-q14oD', text: '1 + 2i' }
    ],
    correctOptionId: 'mth101-q14oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q15',
    text: 'Given the complex number (Z) = (7+i)/(1+3i). Find the modulus of Z?',
    options: [
      { id: 'mth101-q15oA', text: '√11' },
      { id: 'mth101-q15oB', text: '√10' },
      { id: 'mth101-q15oC', text: '√8' },
      { id: 'mth101-q15oD', text: '√5' }
    ],
    correctOptionId: 'mth101-q15oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q16',
    text: 'If the universal set is {a,b,c…..,j} and A = {a,b,c,d,e} and B = {c,f,h,i}. find AcBc?',
    options: [
      { id: 'mth101-q16oA', text: '{a,b,d,e,f,g,h,i}' },
      { id: 'mth101-q16oB', text: '{i,j}' },
      { id: 'mth101-q16oC', text: '{j,g}' },
      { id: 'mth101-q16oD', text: '{a,b,d,i,j}' }
    ],
    correctOptionId: 'mth101-q16oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q17',
    text: 'In the department of mathematics, all the 50 students speak Nupe or English or both. If 35 speak Nupe and 18 speak English, find the number of students that speaks both languages?',
    options: [
      { id: 'mth101-q17oA', text: '2' },
      { id: 'mth101-q17oB', text: '3' },
      { id: 'mth101-q17oC', text: '33' },
      { id: 'mth101-q17oD', text: '5' }
    ],
    correctOptionId: 'mth101-q17oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q18',
    text: 'Given that 1 + 3 + 5 +…+ (2n - 1) = n² for all positive integers of n. Find Pk+1?',
    options: [
      { id: 'mth101-q18oA', text: '(k+1)²' },
      { id: 'mth101-q18oB', text: '(2k+2)²' },
      { id: 'mth101-q18oC', text: '(2k+1)²' },
      { id: 'mth101-q18oD', text: '(k-1)²' }
    ],
    correctOptionId: 'mth101-q18oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q19',
    text: 'The following are examples of AP sequence except?',
    options: [
      { id: 'mth101-q19oA', text: '6,2,-2,-6,-10' },
      { id: 'mth101-q19oB', text: '2,4,8,16,32' },
      { id: 'mth101-q19oC', text: '3,6,9,12,15,18' },
      { id: 'mth101-q19oD', text: 'x+y,x,x-y,x-2y' }
    ],
    correctOptionId: 'mth101-q19oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q20',
    text: 'The 20th term of the sequence: 6,2,-2,-6,-10…… is?',
    options: [
      { id: 'mth101-q20oA', text: '-69' },
      { id: 'mth101-q20oB', text: '-70' },
      { id: 'mth101-q20oC', text: '70' },
      { id: 'mth101-q20oD', text: '82' }
    ],
    correctOptionId: 'mth101-q20oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q21',
    text: 'Given the AP: 69,64,59,54,…… which of its term is 14?',
    options: [
      { id: 'mth101-q21oA', text: 'n = 9' },
      { id: 'mth101-q21oB', text: 'n = 10' },
      { id: 'mth101-q21oC', text: 'n = 11' },
      { id: 'mth101-q21oD', text: 'n = 12' }
    ],
    correctOptionId: 'mth101-q21oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q22',
    text: 'What is the number of terms in an AP? Given that its first and last term are 6 and -50 respectively and its common difference is -4?',
    options: [
      { id: 'mth101-q22oA', text: '13' },
      { id: 'mth101-q22oB', text: '15' },
      { id: 'mth101-q22oC', text: '14' },
      { id: 'mth101-q22oD', text: '16' }
    ],
    correctOptionId: 'mth101-q22oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q23',
    text: 'If α and β are roots of 3x² + 5x + 7 = 0, find 1/α + 1/β.',
    options: [
      { id: 'mth101-q23oA', text: '-5/7' },
      { id: 'mth101-q23oB', text: '-5/3' },
      { id: 'mth101-q23oC', text: '7/3' },
      { id: 'mth101-q23oD', text: '7/5' }
    ],
    correctOptionId: 'mth101-q23oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q24',
    text: 'Find the coefficient of x⁵ in the expansion of (x + 3)⁹?',
    options: [
      { id: 'mth101-q24oA', text: '19683' },
      { id: 'mth101-q24oB', text: '10206' },
      { id: 'mth101-q24oC', text: '12006' },
      { id: 'mth101-q24oD', text: '12600' }
    ],
    correctOptionId: 'mth101-q24oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q25',
    text: 'In a certain class of 100 students, all the students take physics or chemistry subject. If 97 students take physics and 64 take chemistry. The number of students taking only chemistry is?',
    options: [
      { id: 'mth101-q25oA', text: '3' },
      { id: 'mth101-q25oB', text: '4' },
      { id: 'mth101-q25oC', text: '5' },
      { id: 'mth101-q25oD', text: '6' }
    ],
    correctOptionId: 'mth101-q25oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q26',
    text: 'Which of the following is not an irrational number?',
    options: [
      { id: 'mth101-q26oA', text: '√2' },
      { id: 'mth101-q26oB', text: '√3' },
      { id: 'mth101-q26oC', text: '√4' },
      { id: 'mth101-q26oD', text: '√5' }
    ],
    correctOptionId: 'mth101-q26oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q27',
    text: 'Given that 1 + 2 + 2² + 2³ + … + 2(n-1) = 2ⁿ–1, then by the principle of mathematical induction Pk+1 is?',
    options: [
      { id: 'mth101-q27oA', text: '2k+2 -1' },
      { id: 'mth101-q27oB', text: '2k+1 -1' },
      { id: 'mth101-q27oC', text: '2k -1' },
      { id: 'mth101-q27oD', text: '2k-1 -1' }
    ],
    correctOptionId: 'mth101-q27oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q28',
    text: 'Find the cube roots of the complex number (Z) = -8.',
    options: [
      { id: 'mth101-q28oA', text: '1 - i√3, -2, 1 + i√3' },
      { id: 'mth101-q28oB', text: '1 + √3, -2, 1 - i√3' },
      { id: 'mth101-q28oC', text: '-2, 1 - i√3, 1 + i√3' },
      { id: 'mth101-q28oD', text: '1 - i√3, 1 + i√3, -2' }
    ],
    correctOptionId: 'mth101-q28oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q29',
    text: 'Given that 1 + x² + …. xⁿ = (xⁿ⁺¹-1)/(x-1) for all n>1. Using mathematical induction to show that if P(k) is true then P(k+1) is:',
    options: [
      { id: 'mth101-q29oA', text: '(xk+1-1)/(x-1)' },
      { id: 'mth101-q29oB', text: '(x(k+1)-1-1)/(x-1)' },
      { id: 'mth101-q29oC', text: '(xk+2-1)/(x-1)' },
      { id: 'mth101-q29oD', text: '(x2k-1)/(x-1)' }
    ],
    correctOptionId: 'mth101-q29oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q30',
    text: 'Given the sequence: 3.75, 3.5, 3.25, 3,…. Then the 16th term is?',
    options: [
      { id: 'mth101-q30oA', text: '-1' },
      { id: 'mth101-q30oB', text: '0' },
      { id: 'mth101-q30oC', text: '1' },
      { id: 'mth101-q30oD', text: '2' }
    ],
    correctOptionId: 'mth101-q30oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q31',
    text: 'An AP is given by p, 2p/3, p/3, 0….. find its sixth term?',
    options: [
      { id: 'mth101-q31oA', text: '–P/3' },
      { id: 'mth101-q31oB', text: 'P/3' },
      { id: 'mth101-q31oC', text: '-2P/3' },
      { id: 'mth101-q31oD', text: '2P/3' }
    ],
    correctOptionId: 'mth101-q31oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q32',
    text: 'Find the sum of 19 terms in the series: ¾ + 2/3 + 7/12 +….?',
    options: [
      { id: 'mth101-q32oA', text: '2' },
      { id: 'mth101-q32oB', text: '1' },
      { id: 'mth101-q32oC', text: '0' },
      { id: 'mth101-q32oD', text: '-1' }
    ],
    correctOptionId: 'mth101-q32oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q33',
    text: 'The 4th and the 11th terms of an AP are respectively 11 and 32. Then the first and the common difference are:',
    options: [
      { id: 'mth101-q33oA', text: '2 and 3' },
      { id: 'mth101-q33oB', text: '3 and 2' },
      { id: 'mth101-q33oC', text: '2 and 4' },
      { id: 'mth101-q33oD', text: '4 and 2' }
    ],
    correctOptionId: 'mth101-q33oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q34',
    text: 'The three geometric means between 1 and 16 are:',
    options: [
      { id: 'mth101-q34oA', text: '2,4,6' },
      { id: 'mth101-q34oB', text: '2,4,8' },
      { id: 'mth101-q34oC', text: '2,4,10' },
      { id: 'mth101-q34oD', text: '2,4,12' }
    ],
    correctOptionId: 'mth101-q34oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q35',
    text: 'In the series 1 + 3/7 + 9/49 + 27/343 +…. The sum to infinity is?',
    options: [
      { id: 'mth101-q35oA', text: '5/7' },
      { id: 'mth101-q35oB', text: '7/5' },
      { id: 'mth101-q35oC', text: '4/7' },
      { id: 'mth101-q35oD', text: '7/4' }
    ],
    correctOptionId: 'mth101-q35oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q36',
    text: 'The solution to the quadratic equation: x² – 2(p+2)x + 8p = 0',
    options: [
      { id: 'mth101-q36oA', text: '4p, 2' },
      { id: 'mth101-q36oB', text: '4p, 2p' },
      { id: 'mth101-q36oC', text: '4, 2p' },
      { id: 'mth101-q36oD', text: '4, 2' }
    ],
    correctOptionId: 'mth101-q36oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q37',
    text: 'The cardinality of an empty set is?',
    options: [
      { id: 'mth101-q37oA', text: '2' },
      { id: 'mth101-q37oB', text: '1' },
      { id: 'mth101-q37oC', text: '0' },
      { id: 'mth101-q37oD', text: 'Φ' }
    ],
    correctOptionId: 'mth101-q37oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q38',
    text: 'The coefficient of x³y² in the expansion of (x + y)⁵ is?',
    options: [
      { id: 'mth101-q38oA', text: '6' },
      { id: 'mth101-q38oB', text: '24' },
      { id: 'mth101-q38oC', text: '10' },
      { id: 'mth101-q38oD', text: '36' }
    ],
    correctOptionId: 'mth101-q38oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q39',
    text: 'Represent the complex number z = 3 + 3i in polar form?',
    options: [
      { id: 'mth101-q39oA', text: '3√2 (cos π/4 + i sin π/4)' },
      { id: 'mth101-q39oB', text: '2√3 (cos π/4 + i sin π/4)' },
      { id: 'mth101-q39oC', text: '3√2 (cos 2π + i sin 2π)' },
      { id: 'mth101-q39oD', text: '2√3 (cos 2π + i sin 2π)' }
    ],
    correctOptionId: 'mth101-q39oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q40',
    text: 'If α and β are roots of 3x² + 4x - 1 = 0, find the value of α² + β²?',
    options: [
      { id: 'mth101-q40oA', text: '22/3' },
      { id: 'mth101-q40oB', text: '22/9' },
      { id: 'mth101-q40oC', text: '16/9' },
      { id: 'mth101-q40oD', text: '20/3' }
    ],
    correctOptionId: 'mth101-q40oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q41',
    text: 'One root of the equation: 27x² + bx + 8 = 0 is known to be the square of the other. Find the value of b?',
    options: [
      { id: 'mth101-q41oA', text: '-30' },
      { id: 'mth101-q41oB', text: '30' },
      { id: 'mth101-q41oC', text: '20' },
      { id: 'mth101-q41oD', text: '15' }
    ],
    correctOptionId: 'mth101-q41oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q42',
    text: 'If 3 and b are roots of a quadratic equation; find the equation?',
    options: [
      { id: 'mth101-q42oA', text: 'x² + bx + 3b = 0' },
      { id: 'mth101-q42oB', text: 'x² - (3 + b)x + 3b = 0' },
      { id: 'mth101-q42oC', text: 'x² + (3 + b)x + 3 = 0' },
      { id: 'mth101-q42oD', text: 'x² + (3 + b)x + 6 = 0' }
    ],
    correctOptionId: 'mth101-q42oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q43',
    text: 'For any x,y E N one and only one of the following is true: x>y, x+y or y>x. This is known as:',
    options: [
      { id: 'mth101-q43oA', text: 'The law of equality' },
      { id: 'mth101-q43oB', text: 'The law of inequality' },
      { id: 'mth101-q43oC', text: 'The law of trichotomy' },
      { id: 'mth101-q43oD', text: 'None of the above' }
    ],
    correctOptionId: 'mth101-q43oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q44',
    text: 'Suppose that A and B are subsets of universal set: U = {x:x E N, 1≤X≤10}, Given that A = {3,4,6} and B = {3,5,7,9}. Find Ac n Bc?',
    options: [
      { id: 'mth101-q44oA', text: '{2,4,6}' },
      { id: 'mth101-q44oB', text: 'Φ' },
      { id: 'mth101-q44oC', text: '{3,4,6}' },
      { id: 'mth101-q44oD', text: '{1,2,8,10}' }
    ],
    correctOptionId: 'mth101-q44oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q45',
    text: 'List the elements in the following set: {x:x E R, x² + 5x - 6}',
    options: [
      { id: 'mth101-q45oA', text: '{2,3}' },
      { id: 'mth101-q45oB', text: '{-3, -2}' },
      { id: 'mth101-q45oC', text: '{-2,3}' },
      { id: 'mth101-q45oD', text: '{-3,2}' }
    ],
    correctOptionId: 'mth101-q45oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q46',
    text: 'Express 1/(1+5i) in the form of a + bi?',
    options: [
      { id: 'mth101-q46oA', text: '1/26 + 26i/5' },
      { id: 'mth101-q46oB', text: '-1/26 – 5i/26' },
      { id: 'mth101-q46oC', text: '1/26 – 5i/26' },
      { id: 'mth101-q46oD', text: '1/26 + 5i/26' }
    ],
    correctOptionId: 'mth101-q46oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q47',
    text: 'Evaluate α/β + β/α if α and β are roots of the equation: x² - 12x + 7 = 0.',
    options: [
      { id: 'mth101-q47oA', text: '144/7' },
      { id: 'mth101-q47oB', text: '7/130' },
      { id: 'mth101-q47oC', text: '144/130' },
      { id: 'mth101-q47oD', text: '130/7' }
    ],
    correctOptionId: 'mth101-q47oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q48',
    text: '(3 + 4i)² – 3(x - iy) -1 = x + iy; for real gases. Find x and y?',
    options: [
      { id: 'mth101-q48oA', text: 'x = -7 and y = 24' },
      { id: 'mth101-q48oB', text: 'x = 3 and y = -12' },
      { id: 'mth101-q48oC', text: 'x = -2 and y = -12' },
      { id: 'mth101-q48oD', text: 'x = -24 and y = -7' }
    ],
    correctOptionId: 'mth101-q48oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q49',
    text: 'Find the value of n, if the sums of the following arithmetic progressions are equal: 1, 5, 9, 13, 17 …. nth term and 19, 17, 15, 13 …… nth term.',
    options: [
      { id: 'mth101-q49oA', text: '6' },
      { id: 'mth101-q49oB', text: '7' },
      { id: 'mth101-q49oC', text: '8' },
      { id: 'mth101-q49oD', text: '9' }
    ],
    correctOptionId: 'mth101-q49oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q50',
    text: 'Evaluate i¹⁰⁰⁰?',
    options: [
      { id: 'mth101-q50oA', text: 'i' },
      { id: 'mth101-q50oB', text: '-1' },
      { id: 'mth101-q50oC', text: '-i' },
      { id: 'mth101-q50oD', text: '1' }
    ],
    correctOptionId: 'mth101-q50oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q51',
    text: 'If Z = -2 + 2i, Compute Z⁶?',
    options: [
      { id: 'mth101-q51oA', text: '512i' },
      { id: 'mth101-q51oB', text: '-512i' },
      { id: 'mth101-q51oC', text: '1 + 512i' },
      { id: 'mth101-q51oD', text: '1 – 512i' }
    ],
    correctOptionId: 'mth101-q51oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q52',
    text: 'Compute the real and imaginary part of: Z = (i-4)/(2i-3)?',
    options: [
      { id: 'mth101-q52oA', text: 'Real(z) = 14/13, Im(z) = 5/13' },
      { id: 'mth101-q52oB', text: 'Real(z) = 5/13, Im(z) = 14/13' },
      { id: 'mth101-q52oC', text: 'Real(z) = -14/13, Im(z) = -5/13' },
      { id: 'mth101-q52oD', text: 'Real(z) = -5/13, Im(z) = -14/13' }
    ],
    correctOptionId: 'mth101-q52oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q53',
    text: 'If Z1 = 2 + 2i and Z2 is conjugate of Z1, then Z1 + Z2 is?',
    options: [
      { id: 'mth101-q53oA', text: '4 + 4i' },
      { id: 'mth101-q53oB', text: '4 + 2i' },
      { id: 'mth101-q53oC', text: '4' },
      { id: 'mth101-q53oD', text: '4i' }
    ],
    correctOptionId: 'mth101-q53oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q54',
    text: 'Find α² + β², if α and β are roots of the equation: x² – (1 + n²)x + ½(1 + n² + n⁴) = 0.',
    options: [
      { id: 'mth101-q54oA', text: '1 + n²' },
      { id: 'mth101-q54oB', text: '1 – n²' },
      { id: 'mth101-q54oC', text: 'n²' },
      { id: 'mth101-q54oD', text: 'n⁴' }
    ],
    correctOptionId: 'mth101-q54oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q55',
    text: 'Find A U B, if A = {x:x E Z and x < 5}, B = {y:y is a prime number < 10}',
    options: [
      { id: 'mth101-q55oA', text: '{1,2,3,4,5,6,7}' },
      { id: 'mth101-q55oB', text: '{1,2,3,4,5,7}' },
      { id: 'mth101-q55oC', text: '{2,3,5}' },
      { id: 'mth101-q55oD', text: '{2,3,5,7}' }
    ],
    correctOptionId: 'mth101-q55oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q56',
    text: 'Find the power set of P = {x:x is even prime number}',
    options: [
      { id: 'mth101-q56oA', text: '2' },
      { id: 'mth101-q56oB', text: '1' },
      { id: 'mth101-q56oC', text: '3' },
      { id: 'mth101-q56oD', text: 'Φ' }
    ],
    correctOptionId: 'mth101-q56oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q57',
    text: 'Let A = {1,2,3,4,5} and B = {a,b,c,d,e}. which of the following statements are correct? (i) A is equal to B (ii) Cardinality of B is equal to cardinality of A (iii) A is equivalent to B (iv) A and B are disjoint Set.',
    options: [
      { id: 'mth101-q57oA', text: 'I, ii and iii' },
      { id: 'mth101-q57oB', text: 'ii, iii and iv' },
      { id: 'mth101-q57oC', text: 'All of the above' },
      { id: 'mth101-q57oD', text: 'None of the above' }
    ],
    correctOptionId: 'mth101-q57oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q58',
    text: 'At a breakfast buffet, 93 people choose coffee and 47 people choose juice; 25 people choose both coffee and juice. If each person chose at least one of the beverages. Find the number of people that chose coffee only?',
    options: [
      { id: 'mth101-q58oA', text: '68' },
      { id: 'mth101-q58oB', text: '118' },
      { id: 'mth101-q58oC', text: '22' },
      { id: 'mth101-q58oD', text: '72' }
    ],
    correctOptionId: 'mth101-q58oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q59',
    text: 'At a breakfast buffet, 93 people choose coffee and 47 people choose juice; 25 people choose both coffee and juice. If each person chose at least one of the beverages. How many people visited the buffet?',
    options: [
      { id: 'mth101-q59oA', text: '72' },
      { id: 'mth101-q59oB', text: '115' },
      { id: 'mth101-q59oC', text: '118' },
      { id: 'mth101-q59oD', text: '22' }
    ],
    correctOptionId: 'mth101-q59oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q60',
    text: 'For what value of n, are nth terms of two APs 63, 65, 67, …… and 3, 10, 17,…… are equal?',
    options: [
      { id: 'mth101-q60oA', text: '7' },
      { id: 'mth101-q60oB', text: '13' },
      { id: 'mth101-q60oC', text: '14' },
      { id: 'mth101-q60oD', text: '2' }
    ],
    correctOptionId: 'mth101-q60oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q61',
    text: 'Find the sum of first 20 terms of the sequence: 2,5,8,11,…….?',
    options: [
      { id: 'mth101-q61oA', text: '510' },
      { id: 'mth101-q61oB', text: '410' },
      { id: 'mth101-q61oC', text: '610' },
      { id: 'mth101-q61oD', text: '310' }
    ],
    correctOptionId: 'mth101-q61oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q62',
    text: 'The following are AP sequences except? (i) 3,9,15 (ii) 2,4,8 (iii) -2,0,2 (iv) 8,4,2.',
    options: [
      { id: 'mth101-q62oA', text: 'i and iii' },
      { id: 'mth101-q62oB', text: 'i and ii' },
      { id: 'mth101-q62oC', text: 'iii and iv' },
      { id: 'mth101-q62oD', text: 'ii and iv' }
    ],
    correctOptionId: 'mth101-q62oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q63',
    text: 'Which of the following is/are true about conjugate complex numbers? (i) Sum of a complex number and its conjugate is 2 Re(z). (ii) Product of a complex number and its conjugate is Re(z) squared plus Im(z) squared. (iii) Difference of a complex number with its conjugate is im(z) squared.',
    options: [
      { id: 'mth101-q63oA', text: 'All of the above' },
      { id: 'mth101-q63oB', text: 'i and ii' },
      { id: 'mth101-q63oC', text: 'ii and iii' },
      { id: 'mth101-q63oD', text: 'None of the above' }
    ],
    correctOptionId: 'mth101-q63oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q64',
    text: 'If the first three terms of the expansion of (1 + kx)ⁿ in ascending powers of x are 1 + 18x + 135x², find n and k?',
    options: [
      { id: 'mth101-q64oA', text: '5 and 3' },
      { id: 'mth101-q64oB', text: '3 and 6' },
      { id: 'mth101-q64oC', text: '6 and 3' },
      { id: 'mth101-q64oD', text: '3 and 5' }
    ],
    correctOptionId: 'mth101-q64oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q65',
    text: 'Find the term independent of x in the expansion (x – 1/x)⁸?',
    options: [
      { id: 'mth101-q65oA', text: '70' },
      { id: 'mth101-q65oB', text: '-70' },
      { id: 'mth101-q65oC', text: '140' },
      { id: 'mth101-q65oD', text: '-140' }
    ],
    correctOptionId: 'mth101-q65oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q66',
    text: 'Find the 15th term of a GP sequence if the first term is 5 and the common ratio is 2?',
    options: [
      { id: 'mth101-q66oA', text: '16,384' },
      { id: 'mth101-q66oB', text: '81,920' },
      { id: 'mth101-q66oC', text: '32,768' },
      { id: 'mth101-q66oD', text: '40,960' }
    ],
    correctOptionId: 'mth101-q66oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q67',
    text: 'If a and b are roots of the equation: px² + qx + r = 0, p is not equal to 0. Then evaluate a²b + ab²?',
    options: [
      { id: 'mth101-q67oA', text: 'qr/p²' },
      { id: 'mth101-q67oB', text: '–qr/p²' },
      { id: 'mth101-q67oC', text: 'pr/q²' },
      { id: 'mth101-q67oD', text: '–pr/q²' }
    ],
    correctOptionId: 'mth101-q67oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q68',
    text: 'If (x + y) + i(x - y) = 7 + 2i, find the values of x and y respectively?',
    options: [
      { id: 'mth101-q68oA', text: '5/2 and 7/2' },
      { id: 'mth101-q68oB', text: '9/2 and 5/2' },
      { id: 'mth101-q68oC', text: '-5/2 and -7/2' },
      { id: 'mth101-q68oD', text: '-9/2 and -5/2' }
    ],
    correctOptionId: 'mth101-q68oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q69',
    text: 'Insert three arithmetic means between 2 to 14?',
    options: [
      { id: 'mth101-q69oA', text: '5,8,11' },
      { id: 'mth101-q69oB', text: '6,9,12' },
      { id: 'mth101-q69oC', text: '7,10,13' },
      { id: 'mth101-q69oD', text: '8,11,14' }
    ],
    correctOptionId: 'mth101-q69oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q70',
    text: 'Find the nth term of the geometric sequence: pq³, p²q⁵, p³q⁷,……?',
    options: [
      { id: 'mth101-q70oA', text: 'pⁿq3n+1' },
      { id: 'mth101-q70oB', text: 'pⁿq2n' },
      { id: 'mth101-q70oC', text: 'p2n+1qⁿ' },
      { id: 'mth101-q70oD', text: 'pⁿq2n+1' }
    ],
    correctOptionId: 'mth101-q70oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q71',
    text: 'The term of a sequence: a1, a2, a3, …… an where an – an-1 is constant for all integers greater than 1 is called?',
    options: [
      { id: 'mth101-q71oA', text: 'Geometric Progression' },
      { id: 'mth101-q71oB', text: 'Geometric Mean' },
      { id: 'mth101-q71oC', text: 'Arithmetic Mean' },
      { id: 'mth101-q71oD', text: 'Arithmetic Progression' }
    ],
    correctOptionId: 'mth101-q71oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q72',
    text: 'Find the two possible values of a and r if the 3rd and 6th terms of a G.P are 1 and 1/8 respectively?',
    options: [
      { id: 'mth101-q72oA', text: '4 and 1/8' },
      { id: 'mth101-q72oB', text: '4 and ½' },
      { id: 'mth101-q72oC', text: '4 and -1/2' },
      { id: 'mth101-q72oD', text: '4 and -1/8' }
    ],
    correctOptionId: 'mth101-q72oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q73',
    text: 'Write (3-i)/(1+i) in the form of a + ib?',
    options: [
      { id: 'mth101-q73oA', text: '1 + 2i' },
      { id: 'mth101-q73oB', text: '2 + i' },
      { id: 'mth101-q73oC', text: '1 – 2i' },
      { id: 'mth101-q73oD', text: '2 – 4i' }
    ],
    correctOptionId: 'mth101-q73oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q74',
    text: 'Find the values of x and y if x + iy = 5 + 4i?',
    options: [
      { id: 'mth101-q74oA', text: '4 and 5' },
      { id: 'mth101-q74oB', text: '3 and 5' },
      { id: 'mth101-q74oC', text: '5 and 4' },
      { id: 'mth101-q74oD', text: '5 and 3' }
    ],
    correctOptionId: 'mth101-q74oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q75',
    text: 'Find b if the three consecutive terms of a GP are: (b - 4), b, (b + 5)?',
    options: [
      { id: 'mth101-q75oA', text: '30' },
      { id: 'mth101-q75oB', text: '24' },
      { id: 'mth101-q75oC', text: '20' },
      { id: 'mth101-q75oD', text: '22' }
    ],
    correctOptionId: 'mth101-q75oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q76',
    text: 'Find the sum to infinity of the series: 1 + 3/7 + 9/49 + 27/343 + 81/2401 +….. ?',
    options: [
      { id: 'mth101-q76oA', text: '7/3' },
      { id: 'mth101-q76oB', text: '3/7' },
      { id: 'mth101-q76oC', text: '4/7' },
      { id: 'mth101-q76oD', text: '7/4' }
    ],
    correctOptionId: 'mth101-q76oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q77',
    text: 'In a community, the number of people that speak Yoruba are 60, Igbo are 40 and Hausa are 50. Find the number of people that speak Yoruba only?',
    options: [
      { id: 'mth101-q77oA', text: '40 + x' },
      { id: 'mth101-q77oB', text: '40 – x' },
      { id: 'mth101-q77oC', text: '39 + x' },
      { id: 'mth101-q77oD', text: '39 - x' }
    ],
    correctOptionId: 'mth101-q77oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q78',
    text: 'In a community, the number of people that speak Yoruba are 60, Igbo are 40 and Hausa are 50. Find the number of people that speak Igbo only?',
    options: [
      { id: 'mth101-q78oA', text: '18 + x' },
      { id: 'mth101-q78oB', text: '2(10 – x)' },
      { id: 'mth101-q78oC', text: '18 – x' },
      { id: 'mth101-q78oD', text: '2(10 + x)' }
    ],
    correctOptionId: 'mth101-q78oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q79',
    text: 'Find the 20th term of the sequence: p + q, p, p – q, p – 2q?',
    options: [
      { id: 'mth101-q79oA', text: 'p – 18q' },
      { id: 'mth101-q79oB', text: 'p + 18q' },
      { id: 'mth101-q79oC', text: '18p – q' },
      { id: 'mth101-q79oD', text: '18p + q' }
    ],
    correctOptionId: 'mth101-q79oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q80',
    text: 'If the sum of three consecutive terms of an AP is 15 and their product is 80. Find the first and the common difference respectively?',
    options: [
      { id: 'mth101-q80oA', text: '2 and 4' },
      { id: 'mth101-q80oB', text: '2 and 3' },
      { id: 'mth101-q80oC', text: '2 and 5' },
      { id: 'mth101-q80oD', text: '2 and 6' }
    ],
    correctOptionId: 'mth101-q80oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q81',
    text: 'Find the difference between the complex number (Z) = 4 + 5i and its conjugate.',
    options: [
      { id: 'mth101-q81oA', text: '8 + 10i' },
      { id: 'mth101-q81oB', text: '8 + 0i' },
      { id: 'mth101-q81oC', text: '4 + 10i' },
      { id: 'mth101-q81oD', text: '0 + 10i' }
    ],
    correctOptionId: 'mth101-q81oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q82',
    text: 'State the nature of the roots of the quadratic equation: x² – 6x + 9 = 0.',
    options: [
      { id: 'mth101-q82oA', text: 'Real and equal' },
      { id: 'mth101-q82oB', text: 'Real and unequal' },
      { id: 'mth101-q82oC', text: 'Real and complex' },
      { id: 'mth101-q82oD', text: 'Real and irrational' }
    ],
    correctOptionId: 'mth101-q82oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q83',
    text: 'Find the quadratic equation whose roots are: 3 + √3 and 3 - √5?',
    options: [
      { id: 'mth101-q83oA', text: 'x² – 3x + 5 = 0' },
      { id: 'mth101-q83oB', text: 'x² – 6x + 4 = 0' },
      { id: 'mth101-q83oC', text: 'x² - 3√5x + 4' },
      { id: 'mth101-q83oD', text: 'x² + 3√5x + 4 = 0' }
    ],
    correctOptionId: 'mth101-q83oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q84',
    text: 'Write the complex number: 3 + √−9 in standard form?',
    options: [
      { id: 'mth101-q84oA', text: '3 + 9i' },
      { id: 'mth101-q84oB', text: '3 – 9i' },
      { id: 'mth101-q84oC', text: '3 + 3i' },
      { id: 'mth101-q84oD', text: '3 – 3i' }
    ],
    correctOptionId: 'mth101-q84oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q85',
    text: 'Given the complex number Z = 3 + 4i. Find the modulus of the complex number?',
    options: [
      { id: 'mth101-q85oA', text: '7' },
      { id: 'mth101-q85oB', text: '25' },
      { id: 'mth101-q85oC', text: '-25' },
      { id: 'mth101-q85oD', text: '5' }
    ],
    correctOptionId: 'mth101-q85oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q86',
    text: 'Given the complex number Z = 3 + 4i. Find the argument of the complex number?',
    options: [
      { id: 'mth101-q86oA', text: '53.1°' },
      { id: 'mth101-q86oB', text: '-53.1°' },
      { id: 'mth101-q86oC', text: '233.1°' },
      { id: 'mth101-q86oD', text: '-233.1°' }
    ],
    correctOptionId: 'mth101-q86oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q87',
    text: 'Given the complex number Z = 3 + 4i. Find the polar form of the complex number?',
    options: [
      { id: 'mth101-q87oA', text: '-25(cos 53.1° + isin 53.1°)' },
      { id: 'mth101-q87oB', text: '5(cos 53.1° + isin 53.1°)' },
      { id: 'mth101-q87oC', text: '25(cos 53.1° + isin 53.1°)' },
      { id: 'mth101-q87oD', text: '7(cos 53.1° + isin 53.1°)' }
    ],
    correctOptionId: 'mth101-q87oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q88',
    text: 'Which of the following is/are true for proving a given result by principle of mathematical induction? (i) Check that p(1) is true (ii) Assume that p(k) is true. (iii) Prove that p(k) is true (iv) Prove that p(k+1) is true.',
    options: [
      { id: 'mth101-q88oA', text: 'i, ii, and iii' },
      { id: 'mth101-q88oB', text: 'i, ii and iv' },
      { id: 'mth101-q88oC', text: 'i, iii and iv' },
      { id: 'mth101-q88oD', text: 'all of the above' }
    ],
    correctOptionId: 'mth101-q88oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q89',
    text: 'In the quadratic formula, the expression b² – 4ac is called?',
    options: [
      { id: 'mth101-q89oA', text: 'Determinant' },
      { id: 'mth101-q89oB', text: 'Discriminant' },
      { id: 'mth101-q89oC', text: 'Factorization formula' },
      { id: 'mth101-q89oD', text: 'Denominator' }
    ],
    correctOptionId: 'mth101-q89oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q90',
    text: 'Use Pascal\'s triangle to state the coefficient of the binomial expression (x + y)⁷?',
    options: [
      { id: 'mth101-q90oA', text: '1, 7, 22, 35, 35, 22, 7, 1' },
      { id: 'mth101-q90oB', text: '1, 7, 20, 36, 36, 20, 7, 1' },
      { id: 'mth101-q90oC', text: '1, 7, 21, 35, 35, 21, 7, 1' },
      { id: 'mth101-q90oD', text: '1, 7, 21, 37, 37, 21, 7, 1' }
    ],
    correctOptionId: 'mth101-q90oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q91',
    text: 'Given that 1³ + 2³ +….+ n³ = ¼n²(n + 1)²; What is p(k+1)?',
    options: [
      { id: 'mth101-q91oA', text: '¼(k + 1)²(k + 2)²' },
      { id: 'mth101-q91oB', text: '¼(k + 1)²(k + 1)²' },
      { id: 'mth101-q91oC', text: '¼(k + 1)²(k + 3)²' },
      { id: 'mth101-q91oD', text: '¼(k + 2)²(k + 1)²' }
    ],
    correctOptionId: 'mth101-q91oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q92',
    text: 'If the constant term in the (√x − q/x²)¹⁰ is 405, find the value of q?',
    options: [
      { id: 'mth101-q92oA', text: '45' },
      { id: 'mth101-q92oB', text: '3' },
      { id: 'mth101-q92oC', text: '405' },
      { id: 'mth101-q92oD', text: '10' }
    ],
    correctOptionId: 'mth101-q92oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q93',
    text: 'Express (1 – 2i)³ in the form of a + ib?',
    options: [
      { id: 'mth101-q93oA', text: '-11 – 2i' },
      { id: 'mth101-q93oB', text: '11 + 2i' },
      { id: 'mth101-q93oC', text: '11 – 2i' },
      { id: 'mth101-q93oD', text: '-11 + 2i' }
    ],
    correctOptionId: 'mth101-q93oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q94',
    text: 'If A and B are two sets, n(A)=10, n(B)=18 and n(A U B)=23. Then n(A n B) is equal to?',
    options: [
      { id: 'mth101-q94oA', text: '28' },
      { id: 'mth101-q94oB', text: '10' },
      { id: 'mth101-q94oC', text: '5' },
      { id: 'mth101-q94oD', text: '18' }
    ],
    correctOptionId: 'mth101-q94oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q95',
    text: 'If A={x:x is natural number less than 15 divisible by 2} and B={x: 0 < x < 8}. Find (A n B)?',
    options: [
      { id: 'mth101-q95oA', text: '{1,2,3,4,6,8}' },
      { id: 'mth101-q95oB', text: '{2,4,8}' },
      { id: 'mth101-q95oC', text: '{2,4,5}' },
      { id: 'mth101-q95oD', text: '{2,4,6}' }
    ],
    correctOptionId: 'mth101-q95oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q96',
    text: 'The representation of {x:x E Z and x² + 3x + 2 = 0} is?',
    options: [
      { id: 'mth101-q96oA', text: '{-1, 2}' },
      { id: 'mth101-q96oB', text: '{2, 1}' },
      { id: 'mth101-q96oC', text: '{-2, 1}' },
      { id: 'mth101-q96oD', text: '{-2, -1}' }
    ],
    correctOptionId: 'mth101-q96oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q97',
    text: 'In a group of 72 students, 47 have background in electronics, 59 have background in mathematics while 42 have background in both subjects. How many students do not have background in any of the subjects?',
    options: [
      { id: 'mth101-q97oA', text: '8' },
      { id: 'mth101-q97oB', text: '9' },
      { id: 'mth101-q97oC', text: '10' },
      { id: 'mth101-q97oD', text: '11' }
    ],
    correctOptionId: 'mth101-q97oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q98',
    text: 'In a class, if 50 study MATHS, 35 study CHEM, 38 study PHY, 10 study MATHS and CHEM, 9 study PHY and MATHS, 4 study CHEM and PHY and all students study at least one of the three subjects, find the number of student that study only CHEM?',
    options: [
      { id: 'mth101-q98oA', text: '5 - x' },
      { id: 'mth101-q98oB', text: '5 + x' },
      { id: 'mth101-q98oC', text: '21 + x' },
      { id: 'mth101-q98oD', text: '21 - x' }
    ],
    correctOptionId: 'mth101-q98oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q99',
    text: 'If A = {1,2,3,4,5}, then the power set of A has?',
    options: [
      { id: 'mth101-q99oA', text: '5 subset' },
      { id: 'mth101-q99oB', text: '20 subset' },
      { id: 'mth101-q99oC', text: '32 subset' },
      { id: 'mth101-q99oD', text: '25 subset' }
    ],
    correctOptionId: 'mth101-q99oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q100',
    text: 'Solve |2x – 3| = 7?',
    options: [
      { id: 'mth101-q100oA', text: 'x = 2, 5' },
      { id: 'mth101-q100oB', text: 'x = 5, -2' },
      { id: 'mth101-q100oC', text: 'x = -5, 2' },
      { id: 'mth101-q100oD', text: 'x = -2, 5' }
    ],
    correctOptionId: 'mth101-q100oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q101',
    text: 'Let R, Z, C, Q, N represent the sets of real numbers, integers, complex, rational and natural numbers respectively. The following are not chain of relation EXCEPT?',
    options: [
      { id: 'mth101-q101oA', text: 'N<Z<Q<C<R' },
      { id: 'mth101-q101oB', text: 'N<Z<Q<R<C' },
      { id: 'mth101-q101oC', text: 'N<C<Z<Q<R' },
      { id: 'mth101-q101oD', text: 'N<Z<C<R<Q' }
    ],
    correctOptionId: 'mth101-q101oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q102',
    text: 'In the trichotomy law for all x, y E Z one and only one of the following holds: (i) x² > y (ii) x > y (iii) x² = y (iv) y > x (v) y² > x (vi) x = y',
    options: [
      { id: 'mth101-q102oA', text: 'ii, iv, vi' },
      { id: 'mth101-q102oB', text: 'ii, v, vi' },
      { id: 'mth101-q102oC', text: 'i, ii, iii' },
      { id: 'mth101-q102oD', text: 'i, v, vi' }
    ],
    correctOptionId: 'mth101-q102oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q103',
    text: 'The smallest set A such that: A U {4,5} = {3,4,5,6,7}?',
    options: [
      { id: 'mth101-q103oA', text: '{3,4,7}' },
      { id: 'mth101-q103oB', text: '{3,4,5}' },
      { id: 'mth101-q103oC', text: '{3,6,7}' },
      { id: 'mth101-q103oD', text: '{4,5,6}' }
    ],
    correctOptionId: 'mth101-q103oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q104',
    text: 'Given that: ∑r² = ⅙n(n + 1)(2n + 7) for all positive integers n. find Pk+1?',
    options: [
      { id: 'mth101-q104oA', text: '⅙(k + 1)[(k + 1) + 1][2(k + 1) + 7]' },
      { id: 'mth101-q104oB', text: '⅙(k + 1)[(k + 1) + 2][2(k + 1) + 8]' },
      { id: 'mth101-q104oC', text: '⅙(k + 1)[k + 1][2(k + 2) + 7]' },
      { id: 'mth101-q104oD', text: '⅙k[(k + 1) + 1][2(k + 1) + 7]' }
    ],
    correctOptionId: 'mth101-q104oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q105',
    text: 'Find the sum of the nth term of the series: 15 + 11 + 7 + 3 +……',
    options: [
      { id: 'mth101-q105oA', text: 'n²(17 – 2n)' },
      { id: 'mth101-q105oB', text: 'n(17 – 2n)' },
      { id: 'mth101-q105oC', text: 'n(17 + 2n)' },
      { id: 'mth101-q105oD', text: 'n(34 – 2n)' }
    ],
    correctOptionId: 'mth101-q105oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q106',
    text: 'What is the number of terms in an AP, given that its first term and last term are 4 and -228 respectively and the common difference is -4?',
    options: [
      { id: 'mth101-q106oA', text: '-57' },
      { id: 'mth101-q106oB', text: '57' },
      { id: 'mth101-q106oC', text: '-59' },
      { id: 'mth101-q106oD', text: '59' }
    ],
    correctOptionId: 'mth101-q106oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q107',
    text: 'The third term of an AP is 20 and the seventh term is 44, find first term and the common difference?',
    options: [
      { id: 'mth101-q107oA', text: 'a = -8, d = 6' },
      { id: 'mth101-q107oB', text: 'a = 8, r = 6' },
      { id: 'mth101-q107oC', text: 'a = -8, r = -6' },
      { id: 'mth101-q107oD', text: 'a = 8, d = -6' }
    ],
    correctOptionId: 'mth101-q107oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q108',
    text: 'Insert five arithmetic means between 3 and 51?',
    options: [
      { id: 'mth101-q108oA', text: '3,11,19,27,35' },
      { id: 'mth101-q108oB', text: '19,27,35,43,51' },
      { id: 'mth101-q108oC', text: '8,16,24,32,40' },
      { id: 'mth101-q108oD', text: '11,19,27,35,43' }
    ],
    correctOptionId: 'mth101-q108oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q109',
    text: 'If the three consecutive terms of an AP are: x + 3, 3x + 5, 12. The value of x is?',
    options: [
      { id: 'mth101-q109oA', text: '-1' },
      { id: 'mth101-q109oB', text: '1' },
      { id: 'mth101-q109oC', text: '2' },
      { id: 'mth101-q109oD', text: '-2' }
    ],
    correctOptionId: 'mth101-q109oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q110',
    text: 'If the 5th and 9th of a GP are 2048 and 8 respectively, find the possible value of a and r?',
    options: [
      { id: 'mth101-q110oA', text: 'a = 524288, r = ¼' },
      { id: 'mth101-q110oB', text: 'a = -524288, r = ¼' },
      { id: 'mth101-q110oC', text: 'a = 524288, r = -¼' },
      { id: 'mth101-q110oD', text: 'a = -524288, r = -¼' }
    ],
    correctOptionId: 'mth101-q110oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q111',
    text: 'A GP sequence is given by: p, 1, 1/p, 1/p²,…… find the nth term?',
    options: [
      { id: 'mth101-q111oA', text: 'p²⁺ⁿ' },
      { id: 'mth101-q111oB', text: 'p⁻²⁺ⁿ' },
      { id: 'mth101-q111oC', text: 'p⁻²⁻ⁿ' },
      { id: 'mth101-q111oD', text: 'p²⁻ⁿ' }
    ],
    correctOptionId: 'mth101-q111oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q112',
    text: 'Insert four geometric means between 1 and 1024?',
    options: [
      { id: 'mth101-q112oA', text: '4,16,64,256' },
      { id: 'mth101-q112oB', text: '16,64,256,1024' },
      { id: 'mth101-q112oC', text: '4,16,64,1024' },
      { id: 'mth101-q112oD', text: '1,4,16,64' }
    ],
    correctOptionId: 'mth101-q112oA',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q113',
    text: 'Find the sum of nth term of GP sequence: xy³, x²y⁵, x³y⁷ where x and y > 1.',
    options: [
      { id: 'mth101-q113oA', text: '(xⁿ⁺¹y²ⁿ⁺³ + xy³)/(xy² + 1)' },
      { id: 'mth101-q113oB', text: '(xⁿ⁺¹y²ⁿ⁺³ – xy³)/(xy² - 1)' },
      { id: 'mth101-q113oC', text: '(xⁿ⁻¹y²ⁿ⁻³ – xy³)/(xy² + 1)' },
      { id: 'mth101-q113oD', text: '(xⁿ⁺¹y²ⁿ⁺³ – xy³)/(xy² + 1)' }
    ],
    correctOptionId: 'mth101-q113oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q114',
    text: 'The sum to infinity of the series: 1 + ½ + ¼ + 1/8 +….. is?',
    options: [
      { id: 'mth101-q114oA', text: '0' },
      { id: 'mth101-q114oB', text: '1' },
      { id: 'mth101-q114oC', text: '2' },
      { id: 'mth101-q114oD', text: '3' }
    ],
    correctOptionId: 'mth101-q114oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q115',
    text: 'Find the equation whose roots are: 5 + √3 and 5 - √3?',
    options: [
      { id: 'mth101-q115oA', text: 'x² + 10x + 22' },
      { id: 'mth101-q115oB', text: 'x² – 10x - 22' },
      { id: 'mth101-q115oC', text: 'x² + 10x – 22' },
      { id: 'mth101-q115oD', text: 'x² – 10x + 22' }
    ],
    correctOptionId: 'mth101-q115oD',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q116',
    text: 'If α and β are roots of an equation such that α – β = 1 and αβ = 6, find α and β.',
    options: [
      { id: 'mth101-q116oA', text: 'α = 2, -3 and β= -3, -2' },
      { id: 'mth101-q116oB', text: 'α = -2, 3 and β= -3, 2' },
      { id: 'mth101-q116oC', text: 'α = -3, 2 and β= -2, 3' },
      { id: 'mth101-q116oD', text: 'α = 2, 3 and β= 3, 2' }
    ],
    correctOptionId: 'mth101-q116oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q117',
    text: 'The following are the properties of binomial expansion EXCEPT ……. ?',
    options: [
      { id: 'mth101-q117oA', text: 'There are (n + 1) terms.' },
      { id: 'mth101-q117oB', text: 'The power of the first term is in ascending order and that of the second term is in descending order.' },
      { id: 'mth101-q117oC', text: 'The sum of the powers of the terms is equal to the power of the binomial expansion.' },
      { id: 'mth101-q117oD', text: 'The power of the first term is in descending order and that of the second term is in ascending order.' }
    ],
    correctOptionId: 'mth101-q117oB',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q118',
    text: 'Expand (2x + 1/x)⁴?',
    options: [
      { id: 'mth101-q118oA', text: '16x⁴ – 32x² + 24 – 8/x² + 1/x⁴' },
      { id: 'mth101-q118oB', text: '16x⁴ – 32x² - 24 – 8/x² - 1/x⁴' },
      { id: 'mth101-q118oC', text: '16x⁴ + 32x² + 24 + 8/x² + 1/x⁴' },
      { id: 'mth101-q118oD', text: '16x⁴ + 32x² - 24 + 8/x² - 1/x⁴' }
    ],
    correctOptionId: 'mth101-q118oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q119',
    text: 'The differences of any given complex number z and its conjugate is?',
    options: [
      { id: 'mth101-q119oA', text: '2Re (z)' },
      { id: 'mth101-q119oB', text: 'Re (z)' },
      { id: 'mth101-q119oC', text: '2Im (z)' },
      { id: 'mth101-q119oD', text: 'Im (z)' }
    ],
    correctOptionId: 'mth101-q119oC',
    topic: 'Past Question'
  },
  {
    id: 'mth101-q120',
    text: 'Given (2 + iy)(4 – 3i) = 5 + 4i, find the values of y?',
    options: [
      { id: 'mth101-q120oA', text: 'y = 1, 5/2' },
      { id: 'mth101-q120oB', text: 'y = 1, -5/2' },
      { id: 'mth101-q120oC', text: '-1, 5/2' },
      { id: 'mth101-q120oD', text: '-1, -5/2' }
    ],
    correctOptionId: 'mth101-q120oC',
    topic: 'Past Question'
  }
];