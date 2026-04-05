import type { Question } from './types';

export const questions: Question[] = [
    {
        id: 'csc223-q1',
        text: 'Which two steps must be completed to prove a statement S(n) by the basic principle of mathematical induction?',
        options: [
            { id: 'csc223-q1oA', text: 'Prove S(1) is true, and prove that S(k) true implies S(k+1) true' },
            { id: 'csc223-q1oB', text: 'Prove S(1) is true, and verify S(n) for all n up to 10' },
            { id: 'csc223-q1oC', text: 'Assume S(n) is true for all n, then verify S(1)' },
            { id: 'csc223-q1oD', text: 'Prove S(1) and S(2) are true, and show S(k) implies S(k+2)' }
        ],
        correctOptionId: 'csc223-q1oA',
        topic: 'Mathematical Induction'
    },
    {
        id: 'csc223-q2',
        text: 'In an inductive proof, what is the "induction hypothesis"?',
        options: [
            { id: 'csc223-q2oA', text: 'The final conclusion that S(n) holds for all positive integers' },
            { id: 'csc223-q2oB', text: 'The proof that S(1) is true' },
            { id: 'csc223-q2oC', text: 'The assumption that S(k) is true for some arbitrary positive integer k' },
            { id: 'csc223-q2oD', text: 'The statement S(k+1) that is yet to be proved' }
        ],
        correctOptionId: 'csc223-q2oC',
        topic: 'Mathematical Induction'
    },
    {
        id: 'csc223-q3',
        text: 'A student attempts to prove the inductive step but never references the assumption S(k). What is most likely wrong?',
        options: [
            { id: 'csc223-q3oA', text: 'The base case was proved incorrectly' },
            { id: 'csc223-q3oB', text: 'The inductive step is logically incomplete because the induction hypothesis was not used' },
            { id: 'csc223-q3oC', text: 'The wrong variation of induction was chosen' },
            { id: 'csc223-q3oD', text: 'The conclusion applies only for n ≥ 2 instead of n ≥ 1' }
        ],
        correctOptionId: 'csc223-q3oB',
        topic: 'Mathematical Induction'
    },
    {
        id: 'csc223-q4',
        text: 'Using mathematical induction, what is the proven closed form for the sum 1 + 3 + 5 + ··· + (2n − 1)?',
        options: [
            { id: 'csc223-q4oA', text: 'n(n+1)/2' },
            { id: 'csc223-q4oB', text: '2n − 1' },
            { id: 'csc223-q4oC', text: 'n²' },
            { id: 'csc223-q4oD', text: 'n(2n−1)' }
        ],
        correctOptionId: 'csc223-q4oC',
        topic: 'Mathematical Induction'
    },
    {
        id: 'csc223-q5',
        text: 'When proving 1 + 2 + 3 + ··· + n = n(n+1)/2 by induction, what is the correct base case verification?',
        options: [
            { id: 'csc223-q5oA', text: 'n = 0: 0 = 0(1)/2 = 0 ✓' },
            { id: 'csc223-q5oB', text: 'n = 1: 1 = 1(2)/2 = 1 ✓' },
            { id: 'csc223-q5oC', text: 'n = 2: 1+2 = 2(3)/2 = 3, but 1+2 = 3 ✓' },
            { id: 'csc223-q5oD', text: 'n = 1: 1 = 1(1+1) = 2, which fails ✗' }
        ],
        correctOptionId: 'csc223-q5oB',
        topic: 'Mathematical Induction'
    },
    {
        id: 'csc223-q6',
        text: 'In the inductive step for proving 1 + 2 + ··· + n = n(n+1)/2, after assuming S(k) is true, which expression correctly represents the left-hand side for S(k+1)?',
        options: [
            { id: 'csc223-q6oA', text: '1 + 2 + ··· + k' },
            { id: 'csc223-q6oB', text: '(k+1)(k+2)/2' },
            { id: 'csc223-q6oC', text: 'k(k+1)/2 + (k+1)' },
            { id: 'csc223-q6oD', text: 'k² + k + 1' }
        ],
        correctOptionId: 'csc223-q6oC',
        topic: 'Mathematical Induction'
    },
    {
        id: 'csc223-q7',
        text: 'The "domino analogy" for mathematical induction describes which two actions?',
        options: [
            { id: 'csc223-q7oA', text: 'Pushing the last domino and showing the chain runs backward' },
            { id: 'csc223-q7oB', text: 'Pushing the first domino (base case) and showing each fallen domino topples the next (inductive step)' },
            { id: 'csc223-q7oC', text: 'Placing all dominoes (setup) and removing defective ones (verification)' },
            { id: 'csc223-q7oD', text: 'Showing dominoes at even positions fall and then deducing odd positions fall' }
        ],
        correctOptionId: 'csc223-q7oB',
        topic: 'Mathematical Induction'
    },
    {
        id: 'csc223-q8',
        text: 'A claim states: "2ⁿ > n² for all positive integers n." You try to prove it starting at n = 1, but the base case fails (2¹ = 2 is not greater than 1² = 1 is true, but the statement fails for n=3: 2³=8 vs 3²=9). Which variation of induction is most appropriate?',
        options: [
            { id: 'csc223-q8oA', text: 'Strong induction starting at n = 1' },
            { id: 'csc223-q8oB', text: 'Backward induction' },
            { id: 'csc223-q8oC', text: 'Variation 1 — starting the base case at k₀ = 5' },
            { id: 'csc223-q8oD', text: 'Variation 2 — requiring two base cases' }
        ],
        correctOptionId: 'csc223-q8oC',
        topic: 'Variations of Mathematical Induction'
    },
    {
        id: 'csc223-q9',
        text: 'Which variation of mathematical induction assumes S(1), S(2), ..., S(k) are ALL true before proving S(k+1)?',
        options: [
            { id: 'csc223-q9oA', text: 'Variation 1 — starting from k₀ ≠ 1' },
            { id: 'csc223-q9oB', text: 'Variation 2 — two base cases' },
            { id: 'csc223-q9oC', text: 'Variation 3 — jumping by 2' },
            { id: 'csc223-q9oD', text: 'Strong (Complete) Induction' }
        ],
        correctOptionId: 'csc223-q9oD',
        topic: 'Variations of Mathematical Induction'
    },
    {
        id: 'csc223-q10',
        text: 'A sequence is defined such that each term depends on the two immediately preceding terms (like the Fibonacci sequence). Which variation of induction is most appropriate for proving properties of this sequence?',
        options: [
            { id: 'csc223-q10oA', text: 'Basic principle starting at n = 1 with assumption S(k) only' },
            { id: 'csc223-q10oB', text: 'Variation 2 — two base cases with assumption of S(k) and S(k−1)' },
            { id: 'csc223-q10oC', text: 'Backward induction' },
            { id: 'csc223-q10oD', text: 'Variation 3 — jumping by 2 with one base case' }
        ],
        correctOptionId: 'csc223-q10oB',
        topic: 'Variations of Mathematical Induction'
    },
    {
        id: 'csc223-q11',
        text: 'In Variation 3 (jumping by 2), why are TWO initial base cases required instead of one?',
        options: [
            { id: 'csc223-q11oA', text: 'Because the statement is only true for even numbers' },
            { id: 'csc223-q11oB', text: 'Because proving S(k) ⟹ S(k+2) creates two separate domino chains — one for odd n, one for even n — each needing its own starter' },
            { id: 'csc223-q11oC', text: 'Because backward induction requires two endpoints' },
            { id: 'csc223-q11oD', text: 'Because the induction hypothesis must be assumed for two consecutive values' }
        ],
        correctOptionId: 'csc223-q11oB',
        topic: 'Variations of Mathematical Induction'
    },
    {
        id: 'csc223-q12',
        text: 'Backward induction requires two conditions. Which of the following correctly states both?',
        options: [
            { id: 'csc223-q12oA', text: 'S(n) is true for n = 1 and n = 2; and S(k) true implies S(k+1) true' },
            { id: 'csc223-q12oB', text: 'S(n) is true for infinitely many n; and S(k) true implies S(k−1) true' },
            { id: 'csc223-q12oC', text: 'S(n) is true for all even n; and S(k) true implies S(k−2) true' },
            { id: 'csc223-q12oD', text: 'S(n) fails for finitely many n; and S(k) true implies S(k+1) true' }
        ],
        correctOptionId: 'csc223-q12oB',
        topic: 'Variations of Mathematical Induction'
    },
    {
        id: 'csc223-q13',
        text: 'The conclusion of Theorem 3.1 (Variation 1, starting at k₀) states that S(n) is true for:',
        options: [
            { id: 'csc223-q13oA', text: 'All positive integers n' },
            { id: 'csc223-q13oB', text: 'All n such that 1 ≤ n ≤ k₀' },
            { id: 'csc223-q13oC', text: 'All integers n ≥ k₀' },
            { id: 'csc223-q13oD', text: 'All even integers greater than k₀' }
        ],
        correctOptionId: 'csc223-q13oC',
        topic: 'Variations of Mathematical Induction'
    },
    {
        id: 'csc223-q14',
        text: 'Which famous inequality is cited as the classic application of backward induction?',
        options: [
            { id: 'csc223-q14oA', text: 'The Cauchy-Schwarz inequality' },
            { id: 'csc223-q14oB', text: 'The AM-GM inequality' },
            { id: 'csc223-q14oC', text: 'The triangle inequality' },
            { id: 'csc223-q14oD', text: 'Bernoulli\'s inequality' }
        ],
        correctOptionId: 'csc223-q14oB',
        topic: 'Variations of Mathematical Induction'
    },
    {
        id: 'csc223-q15',
        text: 'What is the inclusion-exclusion formula for the union of two sets A and B?',
        options: [
            { id: 'csc223-q15oA', text: '|A ∪ B| = |A| + |B| + |A ∩ B|' },
            { id: 'csc223-q15oB', text: '|A ∪ B| = |A| × |B| − |A ∩ B|' },
            { id: 'csc223-q15oC', text: '|A ∪ B| = |A| + |B| − |A ∩ B|' },
            { id: 'csc223-q15oD', text: '|A ∪ B| = |A| − |B| + |A ∩ B|' }
        ],
        correctOptionId: 'csc223-q15oC',
        topic: 'Inclusion-Exclusion Principle'
    },
    {
        id: 'csc223-q16',
        text: 'What is the correct three-set inclusion-exclusion formula for |A ∪ B ∪ C|?',
        options: [
            { id: 'csc223-q16oA', text: '|A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|' },
            { id: 'csc223-q16oB', text: '|A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| − |A∩B∩C|' },
            { id: 'csc223-q16oC', text: '|A| + |B| + |C| + |A∩B| + |A∩C| + |B∩C| − |A∩B∩C|' },
            { id: 'csc223-q16oD', text: '|A| + |B| + |C| − |A∩B∩C|' }
        ],
        correctOptionId: 'csc223-q16oA',
        topic: 'Inclusion-Exclusion Principle'
    },
    {
        id: 'csc223-q17',
        text: 'Why does simply adding |A| + |B| overcount when computing the size of A ∪ B?',
        options: [
            { id: 'csc223-q17oA', text: 'Because some elements of A are also in B and are counted twice' },
            { id: 'csc223-q17oB', text: 'Because |A| and |B| already include all shared elements separately' },
            { id: 'csc223-q17oC', text: 'Because the union includes elements not in either set' },
            { id: 'csc223-q17oD', text: 'Because set sizes cannot be added directly without normalization' }
        ],
        correctOptionId: 'csc223-q17oA',
        topic: 'Inclusion-Exclusion Principle'
    },
    {
        id: 'csc223-q18',
        text: 'How many bit strings of length 8 either start with 1 or end with 00?',
        options: [
            { id: 'csc223-q18oA', text: '128' },
            { id: 'csc223-q18oB', text: '192' },
            { id: 'csc223-q18oC', text: '160' },
            { id: 'csc223-q18oD', text: '224' }
        ],
        correctOptionId: 'csc223-q18oC',
        topic: 'Inclusion-Exclusion Principle'
    },
    {
        id: 'csc223-q19',
        text: 'The inclusion-exclusion principle is also known by which other name?',
        options: [
            { id: 'csc223-q19oA', text: 'The counting principle' },
            { id: 'csc223-q19oB', text: 'The sieve principle' },
            { id: 'csc223-q19oC', text: 'The overlap theorem' },
            { id: 'csc223-q19oD', text: 'The Venn method' }
        ],
        correctOptionId: 'csc223-q19oB',
        topic: 'Inclusion-Exclusion Principle'
    },
    {
        id: 'csc223-q20',
        text: 'In the general inclusion-exclusion formula for n sets, the signs of successive terms follow which pattern?',
        options: [
            { id: 'csc223-q20oA', text: 'All positive terms' },
            { id: 'csc223-q20oB', text: 'All negative terms' },
            { id: 'csc223-q20oC', text: 'Alternating: add singletons, subtract pairwise, add triple, subtract quadruple, ...' },
            { id: 'csc223-q20oD', text: 'Alternating: subtract singletons, add pairwise, subtract triple, ...' }
        ],
        correctOptionId: 'csc223-q20oC',
        topic: 'Inclusion-Exclusion Principle'
    },
    {
        id: 'csc223-q21',
        text: 'A Venn diagram for three overlapping sets has how many distinct regions?',
        options: [
            { id: 'csc223-q21oA', text: '3' },
            { id: 'csc223-q21oB', text: '5' },
            { id: 'csc223-q21oC', text: '6' },
            { id: 'csc223-q21oD', text: '7' }
        ],
        correctOptionId: 'csc223-q21oD',
        topic: 'Inclusion-Exclusion Principle'
    },
    {
        id: 'csc223-q22',
        text: 'The general inclusion-exclusion formula for n sets is proven using which proof technique?',
        options: [
            { id: 'csc223-q22oA', text: 'Proof by contradiction' },
            { id: 'csc223-q22oB', text: 'Direct proof' },
            { id: 'csc223-q22oC', text: 'Mathematical induction' },
            { id: 'csc223-q22oD', text: 'Proof by pigeonhole' }
        ],
        correctOptionId: 'csc223-q22oC',
        topic: 'Inclusion-Exclusion Principle'
    },
    {
        id: 'csc223-q23',
        text: 'The basic Pigeonhole Principle states that if m objects are distributed into n containers and m > n, then:',
        options: [
            { id: 'csc223-q23oA', text: 'Every container holds exactly ⌊m/n⌋ objects' },
            { id: 'csc223-q23oB', text: 'At least one container holds 2 or more objects' },
            { id: 'csc223-q23oC', text: 'Exactly one container holds more than one object' },
            { id: 'csc223-q23oD', text: 'At least one container must be empty' }
        ],
        correctOptionId: 'csc223-q23oB',
        topic: 'Pigeonhole Principle'
    },
    {
        id: 'csc223-q24',
        text: 'In a group of 13 children, why must at least two children have been born in the same month?',
        options: [
            { id: 'csc223-q24oA', text: 'Because 13 > 12 (months), so by the pigeonhole principle, some month contains at least 2 children' },
            { id: 'csc223-q24oB', text: 'Because the probability that all 13 have different birth months is zero' },
            { id: 'csc223-q24oC', text: 'Because 13 is a prime number and cannot be divided by 12 evenly' },
            { id: 'csc223-q24oD', text: 'Because the inclusion-exclusion of birth months guarantees a collision' }
        ],
        correctOptionId: 'csc223-q24oA',
        topic: 'Pigeonhole Principle'
    },
    {
        id: 'csc223-q25',
        text: 'According to the Generalized Pigeonhole Principle, if n holes contain kn + 1 or more pigeons, then at least one hole contains:',
        options: [
            { id: 'csc223-q25oA', text: 'At least k pigeons' },
            { id: 'csc223-q25oB', text: 'Exactly k + 1 pigeons' },
            { id: 'csc223-q25oC', text: 'At least k + 1 pigeons' },
            { id: 'csc223-q25oD', text: 'At most k pigeons' }
        ],
        correctOptionId: 'csc223-q25oC',
        topic: 'Pigeonhole Principle'
    },
    {
        id: 'csc223-q26',
        text: 'Using the generalized pigeonhole principle, what is the minimum class size required to guarantee that at least 4 students share the same birth month?',
        options: [
            { id: 'csc223-q26oA', text: '25' },
            { id: 'csc223-q26oB', text: '36' },
            { id: 'csc223-q26oC', text: '48' },
            { id: 'csc223-q26oD', text: '37' }
        ],
        correctOptionId: 'csc223-q26oD',
        topic: 'Pigeonhole Principle'
    },
    {
        id: 'csc223-q27',
        text: 'In a pigeonhole argument, what is always identified as the "pigeons" in a problem?',
        options: [
            { id: 'csc223-q27oA', text: 'The categories or containers being distributed into' },
            { id: 'csc223-q27oB', text: 'The objects being distributed' },
            { id: 'csc223-q27oC', text: 'The total count of holes' },
            { id: 'csc223-q27oD', text: 'The maximum number of collisions allowed' }
        ],
        correctOptionId: 'csc223-q27oB',
        topic: 'Pigeonhole Principle'
    },
    {
        id: 'csc223-q28',
        text: 'When using pigeonhole to prove that among 101 numbers selected from {1, 2, ..., 200} some number divides another, what are the 100 "pigeonholes"?',
        options: [
            { id: 'csc223-q28oA', text: 'The 100 even numbers from 2 to 200' },
            { id: 'csc223-q28oB', text: 'The 100 odd numbers from 1 to 199, serving as the odd parts of every integer' },
            { id: 'csc223-q28oC', text: 'The 100 possible powers of 2 up to 200' },
            { id: 'csc223-q28oD', text: 'The 100 pairs of consecutive integers' }
        ],
        correctOptionId: 'csc223-q28oB',
        topic: 'Pigeonhole Principle'
    },
    {
        id: 'csc223-q29',
        text: 'A pigeonhole proof guarantees which of the following?',
        options: [
            { id: 'csc223-q29oA', text: 'The exact identity of the overloaded container' },
            { id: 'csc223-q29oB', text: 'That every container is overloaded' },
            { id: 'csc223-q29oC', text: 'The existence of at least one overloaded container, without identifying which one' },
            { id: 'csc223-q29oD', text: 'The minimum number of objects that can be safely distributed' }
        ],
        correctOptionId: 'csc223-q29oC',
        topic: 'Pigeonhole Principle'
    },
    {
        id: 'csc223-q30',
        text: 'Classical probability is defined as:',
        options: [
            { id: 'csc223-q30oA', text: 'The number of successful trials divided by the total number of trials conducted' },
            { id: 'csc223-q30oB', text: 'The number of favorable outcomes divided by the total number of equally likely outcomes' },
            { id: 'csc223-q30oC', text: 'The ratio of the sample size to the population size' },
            { id: 'csc223-q30oD', text: 'An estimate computed from observed data that improves with more trials' }
        ],
        correctOptionId: 'csc223-q30oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q31',
        text: 'Empirical probability differs from classical probability in that it is:',
        options: [
            { id: 'csc223-q31oA', text: 'Based on equally likely outcomes assumed in advance' },
            { id: 'csc223-q31oB', text: 'Always more accurate than classical probability' },
            { id: 'csc223-q31oC', text: 'Based on observed data from actual experiments and improves with larger samples' },
            { id: 'csc223-q31oD', text: 'Only valid when all outcomes are equally likely' }
        ],
        correctOptionId: 'csc223-q31oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q32',
        text: 'If P(A) = 0.35, what is P(Ā) — the probability of the complement of A?',
        options: [
            { id: 'csc223-q32oA', text: '0.35' },
            { id: 'csc223-q32oB', text: '0.65' },
            { id: 'csc223-q32oC', text: '1.35' },
            { id: 'csc223-q32oD', text: '0.5' }
        ],
        correctOptionId: 'csc223-q32oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q33',
        text: 'Events A and B are mutually exclusive. If P(A) = 0.4 and P(B) = 0.25, what is P(A or B)?',
        options: [
            { id: 'csc223-q33oA', text: '0.10' },
            { id: 'csc223-q33oB', text: '0.15' },
            { id: 'csc223-q33oC', text: '0.65' },
            { id: 'csc223-q33oD', text: '0.55' }
        ],
        correctOptionId: 'csc223-q33oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q34',
        text: 'Which of the following correctly describes mutually exclusive events?',
        options: [
            { id: 'csc223-q34oA', text: 'Events where the occurrence of one does not affect the probability of the other' },
            { id: 'csc223-q34oB', text: 'Events that cannot occur at the same time in a single trial' },
            { id: 'csc223-q34oC', text: 'Events where knowing one occurred changes the probability of the other' },
            { id: 'csc223-q34oD', text: 'Events whose union equals the entire sample space' }
        ],
        correctOptionId: 'csc223-q34oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q35',
        text: 'P(A) = 0.5, P(B) = 0.4, and P(A and B) = 0.2. What is P(A or B)?',
        options: [
            { id: 'csc223-q35oA', text: '0.9' },
            { id: 'csc223-q35oB', text: '0.7' },
            { id: 'csc223-q35oC', text: '0.3' },
            { id: 'csc223-q35oD', text: '1.1' }
        ],
        correctOptionId: 'csc223-q35oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q36',
        text: 'A card is drawn from a standard 52-card deck. Let A = {drawing a heart} and B = {drawing a king}. Are these events mutually exclusive?',
        options: [
            { id: 'csc223-q36oA', text: 'Yes, because a card cannot be both a heart and a king' },
            { id: 'csc223-q36oB', text: 'No, because the king of hearts is both a heart and a king' },
            { id: 'csc223-q36oC', text: 'Yes, because P(A) + P(B) = 1' },
            { id: 'csc223-q36oD', text: 'No, because hearts and kings are independent suits' }
        ],
        correctOptionId: 'csc223-q36oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q37',
        text: 'Two independent events have P(A) = 0.6 and P(B) = 0.5. What is P(A and B)?',
        options: [
            { id: 'csc223-q37oA', text: '1.1' },
            { id: 'csc223-q37oB', text: '0.1' },
            { id: 'csc223-q37oC', text: '0.3' },
            { id: 'csc223-q37oD', text: '0.55' }
        ],
        correctOptionId: 'csc223-q37oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q38',
        text: 'A bag has 5 red balls and 3 blue balls. Two balls are drawn without replacement. What is the probability that both are red?',
        options: [
            { id: 'csc223-q38oA', text: '25/64' },
            { id: 'csc223-q38oB', text: '5/14' },
            { id: 'csc223-q38oC', text: '5/8' },
            { id: 'csc223-q38oD', text: '10/28' }
        ],
        correctOptionId: 'csc223-q38oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q39',
        text: 'Why must the dependent (not independent) multiplication rule be used when drawing cards without replacement?',
        options: [
            { id: 'csc223-q39oA', text: 'Because the deck is finite and ordered' },
            { id: 'csc223-q39oB', text: 'Because removing the first card changes the composition of the deck, altering the probability of the second draw' },
            { id: 'csc223-q39oC', text: 'Because card suits are not equally likely' },
            { id: 'csc223-q39oD', text: 'Because replacement changes the sample space size' }
        ],
        correctOptionId: 'csc223-q39oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q40',
        text: 'The conditional probability formula P(B|A) is defined as:',
        options: [
            { id: 'csc223-q40oA', text: 'P(A) × P(B)' },
            { id: 'csc223-q40oB', text: 'P(A and B) / P(B)' },
            { id: 'csc223-q40oC', text: 'P(A and B) / P(A)' },
            { id: 'csc223-q40oD', text: 'P(A) / P(A and B)' }
        ],
        correctOptionId: 'csc223-q40oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q41',
        text: 'If A and B are independent events, what is P(B|A) equal to?',
        options: [
            { id: 'csc223-q41oA', text: 'P(A)' },
            { id: 'csc223-q41oB', text: 'P(A) × P(B)' },
            { id: 'csc223-q41oC', text: 'P(B)' },
            { id: 'csc223-q41oD', text: '1 − P(B)' }
        ],
        correctOptionId: 'csc223-q41oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q42',
        text: 'P(A) = 0.3, P(B) = 0.5, and P(A and B) = 0.12. What is P(B|A)?',
        options: [
            { id: 'csc223-q42oA', text: '0.5' },
            { id: 'csc223-q42oB', text: '0.4' },
            { id: 'csc223-q42oC', text: '0.24' },
            { id: 'csc223-q42oD', text: '0.036' }
        ],
        correctOptionId: 'csc223-q42oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q43',
        text: 'A factory produces items where 4% are defective. In a batch of 500 items, what is the expected number of defective items?',
        options: [
            { id: 'csc223-q43oA', text: '4' },
            { id: 'csc223-q43oB', text: '40' },
            { id: 'csc223-q43oC', text: '20' },
            { id: 'csc223-q43oD', text: '25' }
        ],
        correctOptionId: 'csc223-q43oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q44',
        text: 'The expectation formula E = N × P(A) means:',
        options: [
            { id: 'csc223-q44oA', text: 'Event A will occur exactly N × P(A) times in every N trials' },
            { id: 'csc223-q44oB', text: 'The average number of times A is expected to occur over many repetitions of N trials' },
            { id: 'csc223-q44oC', text: 'The maximum number of times A can occur in N trials' },
            { id: 'csc223-q44oD', text: 'The minimum guaranteed occurrences of A in N trials' }
        ],
        correctOptionId: 'csc223-q44oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q45',
        text: 'A batch of 500 items is tested and 25 are found defective. What empirical probability does this give for a defective item?',
        options: [
            { id: 'csc223-q45oA', text: '0.04' },
            { id: 'csc223-q45oB', text: '0.25' },
            { id: 'csc223-q45oC', text: '0.05' },
            { id: 'csc223-q45oD', text: '0.025' }
        ],
        correctOptionId: 'csc223-q45oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q46',
        text: 'Which scenario REQUIRES empirical probability rather than classical probability?',
        options: [
            { id: 'csc223-q46oA', text: 'The probability of rolling a 4 on a fair six-sided die' },
            { id: 'csc223-q46oB', text: 'The probability of drawing a spade from a standard deck' },
            { id: 'csc223-q46oC', text: 'The probability that a manufactured component survives 10,000 hours of use' },
            { id: 'csc223-q46oD', text: 'The probability of flipping heads on a fair coin' }
        ],
        correctOptionId: 'csc223-q46oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q47',
        text: 'The addition law of probability for non-exclusive events is structurally equivalent to which other principle in the course?',
        options: [
            { id: 'csc223-q47oA', text: 'The basic principle of mathematical induction' },
            { id: 'csc223-q47oB', text: 'The generalized pigeonhole principle' },
            { id: 'csc223-q47oC', text: 'The two-set inclusion-exclusion formula' },
            { id: 'csc223-q47oD', text: 'Backward induction' }
        ],
        correctOptionId: 'csc223-q47oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q48',
        text: 'A student writes P(A or B) = P(A) × P(B) to find the probability that at least one of two events occurs. What error has the student made?',
        options: [
            { id: 'csc223-q48oA', text: 'Used the addition law instead of the multiplication law' },
            { id: 'csc223-q48oB', text: 'Confused "or" (which requires addition) with "and" (which requires multiplication)' },
            { id: 'csc223-q48oC', text: 'Forgot to apply the complement rule' },
            { id: 'csc223-q48oD', text: 'Assumed the events are dependent when they are independent' }
        ],
        correctOptionId: 'csc223-q48oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q49',
        text: 'The complement (Ā) of event A is best defined as:',
        options: [
            { id: 'csc223-q49oA', text: 'The intersection of A with the sample space' },
            { id: 'csc223-q49oB', text: 'All outcomes in the sample space that are NOT in A' },
            { id: 'csc223-q49oC', text: 'The event that A occurs more than once' },
            { id: 'csc223-q49oD', text: 'The union of A with any mutually exclusive event' }
        ],
        correctOptionId: 'csc223-q49oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q50',
        text: 'If you select any 6 numbers from {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, why must at least two of them sum to 11?',
        options: [
            { id: 'csc223-q50oA', text: 'Because the average of any 6 numbers from this set is 5.5 and 5.5 × 2 = 11' },
            { id: 'csc223-q50oB', text: 'The 5 pairs that sum to 11 are {1,10},{2,9},{3,8},{4,7},{5,6} — these 5 pairs act as pigeonholes, and with 6 numbers chosen, two must fall in the same pair' },
            { id: 'csc223-q50oC', text: 'Because the inclusion-exclusion of all pairs summing to 11 yields at least 1 overlap' },
            { id: 'csc223-q50oD', text: 'Because any 6 consecutive integers must include two that are complementary' }
        ],
        correctOptionId: 'csc223-q50oB',
        topic: 'Pigeonhole Principle'
    },
    {
        id: 'csc223-q51',
        text: 'P(A) = 0 indicates that event A is:',
        options: [
            { id: 'csc223-q51oA', text: 'Certain to occur' },
            { id: 'csc223-q51oB', text: 'Very unlikely but possible' },
            { id: 'csc223-q51oC', text: 'Impossible' },
            { id: 'csc223-q51oD', text: 'Mutually exclusive with every other event' }
        ],
        correctOptionId: 'csc223-q51oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q52',
        text: 'Which of the following is a correct statement about dependent events?',
        options: [
            { id: 'csc223-q52oA', text: 'P(A and B) = P(A) × P(B)' },
            { id: 'csc223-q52oB', text: 'The outcome of the first event has no effect on the probability of the second' },
            { id: 'csc223-q52oC', text: 'P(A and B) = P(A) × P(B|A), where P(B|A) ≠ P(B)' },
            { id: 'csc223-q52oD', text: 'P(B|A) = P(B) always' }
        ],
        correctOptionId: 'csc223-q52oC',
        topic: 'Probability'
    },
    {
        id: 'csc223-q53',
        text: 'Which topic in the course is described as giving "the proof engine," while inclusion-exclusion and pigeonhole give the counting tools?',
        options: [
            { id: 'csc223-q53oA', text: 'Classical probability' },
            { id: 'csc223-q53oB', text: 'Set theory' },
            { id: 'csc223-q53oC', text: 'Mathematical induction' },
            { id: 'csc223-q53oD', text: 'Empirical probability' }
        ],
        correctOptionId: 'csc223-q53oC',
        topic: 'Mathematical Induction'
    },
    {
        id: 'csc223-q54',
        text: 'Strong induction is logically equivalent to basic induction, yet is sometimes preferred. In what kind of problem is strong induction particularly easier to apply?',
        options: [
            { id: 'csc223-q54oA', text: 'Problems where the base case fails at n = 1' },
            { id: 'csc223-q54oB', text: 'Problems involving recursively defined sequences where a term depends on multiple previous terms' },
            { id: 'csc223-q54oC', text: 'Problems that only need backward induction' },
            { id: 'csc223-q54oD', text: 'Problems where all outcomes are equally likely' }
        ],
        correctOptionId: 'csc223-q54oB',
        topic: 'Variations of Mathematical Induction'
    },
    {
        id: 'csc223-q55',
        text: 'How many integers from 1 to 100 are divisible by both 2 and 5 (i.e., divisible by 10)?',
        options: [
            { id: 'csc223-q55oA', text: '5' },
            { id: 'csc223-q55oB', text: '20' },
            { id: 'csc223-q55oC', text: '10' },
            { id: 'csc223-q55oD', text: '15' }
        ],
        correctOptionId: 'csc223-q55oC',
        topic: 'Inclusion-Exclusion Principle'
    },
    {
        id: 'csc223-q56',
        text: 'Using inclusion-exclusion, how many integers from 1 to 30 are divisible by 2 or 3?',
        options: [
            { id: 'csc223-q56oA', text: '25' },
            { id: 'csc223-q56oB', text: '20' },
            { id: 'csc223-q56oC', text: '15' },
            { id: 'csc223-q56oD', text: '10' }
        ],
        correctOptionId: 'csc223-q56oB',
        topic: 'Inclusion-Exclusion Principle'
    },
    {
        id: 'csc223-q57',
        text: 'The minimum number of people needed to guarantee that at least 3 share the same birth month is:',
        options: [
            { id: 'csc223-q57oA', text: '24' },
            { id: 'csc223-q57oB', text: '25' },
            { id: 'csc223-q57oC', text: '26' },
            { id: 'csc223-q57oD', text: '13' }
        ],
        correctOptionId: 'csc223-q57oB',
        topic: 'Pigeonhole Principle'
    },
    {
        id: 'csc223-q58',
        text: 'The Ceiling function ⌈m/n⌉ in the pigeonhole principle gives:',
        options: [
            { id: 'csc223-q58oA', text: 'The minimum number of pigeons needed' },
            { id: 'csc223-q58oB', text: 'The maximum number of objects any hole can hold' },
            { id: 'csc223-q58oC', text: 'The minimum number of objects that at least one hole must contain' },
            { id: 'csc223-q58oD', text: 'The average number of objects per hole' }
        ],
        correctOptionId: 'csc223-q58oC',
        topic: 'Pigeonhole Principle'
    },
    {
        id: 'csc223-q59',
        text: 'In probability, what is meant by a "success"?',
        options: [
            { id: 'csc223-q59oA', text: 'The most probable outcome of an experiment' },
            { id: 'csc223-q59oB', text: 'The event being tested for occurring in a given trial' },
            { id: 'csc223-q59oC', text: 'Any outcome with probability greater than 0.5' },
            { id: 'csc223-q59oD', text: 'A trial in which all events occur simultaneously' }
        ],
        correctOptionId: 'csc223-q59oB',
        topic: 'Probability'
    },
    {
        id: 'csc223-q60',
        text: 'Which of the following best explains why "Counting → Probability" is a key connection in discrete structures?',
        options: [
            { id: 'csc223-q60oA', text: 'Probability calculations always require the pigeonhole principle' },
            { id: 'csc223-q60oB', text: 'Classical probability is fundamentally a counting exercise: P(A) = (favorable outcomes) / (total outcomes), so better counting skills directly improve probability calculations' },
            { id: 'csc223-q60oC', text: 'Probability uses induction to prove every formula' },
            { id: 'csc223-q60oD', text: 'Counting theorems replace all formulas in probability' }
        ],
        correctOptionId: 'csc223-q60oB',
        topic: 'Probability'
    }
];