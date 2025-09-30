import type { Question } from './types';

export const questions: Question[] = [
    {
        id: 'csc102-q1',
        text: 'What is the most accurate definition of a "problem" in the context of problem-solving?',
        options: [
            { id: 'csc102-q1o1', text: 'A difficult mathematical equation' },
            { id: 'csc102-q1o2', text: 'A barrier that prevents the achievement of a goal' },
            { id: 'csc102-q1o3', text: 'A bug in a computer program' },
            { id: 'csc102-q1o4', text: 'A conflict between two people' }
        ],
        correctOptionId: 'csc102-q1o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q2',
        text: 'The first and most crucial step in the Problem-Solving Method is:',
        options: [
            { id: 'csc102-q2o1', text: 'Trying out a solution' },
            { id: 'csc102-q2o2', text: 'Identifying various solutions' },
            { id: 'csc102-q2o3', text: 'Understanding the problem' },
            { id: 'csc102-q2o4', text: 'Evaluating the results' }
        ],
        correctOptionId: 'csc102-q2o3',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q3',
        text: 'Which of the following is NOT a recognized step in the Problem-Solving Method?',
        options: [
            { id: 'csc102-q3o1', text: 'Describe any barriers' },
            { id: 'csc102-q3o2', text: 'Implement the solution in code' },
            { id: 'csc102-q3o3', text: 'Identify various solutions' },
            { id: 'csc102-q3o4', text: 'Evaluate the results' }
        ],
        correctOptionId: 'csc102-q3o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q4',
        text: 'The problem-solving strategy that involves creating "mind pictures" of a problem is known as:',
        options: [
            { id: 'csc102-q4o1', text: 'Guesstimation' },
            { id: 'csc102-q4o2', text: 'Creating visual images' },
            { id: 'csc102-q4o3', text: 'Looking for a pattern' },
            { id: 'csc102-q4o4', text: 'Creating a systematic list' }
        ],
        correctOptionId: 'csc102-q4o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q5',
        text: 'What is the primary purpose of engaging in trial-and-error (guesstimation) during problem-solving?',
        options: [
            { id: 'csc102-q5o1', text: 'To find the final solution immediately' },
            { id: 'csc102-q5o2', text: 'To gather some preliminary data about the problem' },
            { id: 'csc102-q5o3', text: 'To avoid having to use a systematic approach' },
            { id: 'csc102-q5o4', text: 'To delegate the problem to someone else' }
        ],
        correctOptionId: 'csc102-q5o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q6',
        text: 'Creating a table as a problem-solving strategy is primarily useful for:',
        options: [
            { id: 'csc102-q6o1', text: 'Making the solution look more professional' },
            { id: 'csc102-q6o2', text: 'Grouping and organizing data related to the problem' },
            { id: 'csc102-q6o3', text: 'Writing computer code faster' },
            { id: 'csc102-q6o4', text: 'Replacing the need for an algorithm' }
        ],
        correctOptionId: 'csc102-q6o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q7',
        text: 'The problem-solving strategy that relies on identifying regular, systematic repetitions in data is:',
        options: [
            { id: 'csc102-q7o1', text: 'Looking for a pattern' },
            { id: 'csc102-q7o2', text: 'Creating a systematic list' },
            { id: 'csc102-q7o3', text: 'Guesstimation' },
            { id: 'csc102-q7o4', text: 'Describing barriers' }
        ],
        correctOptionId: 'csc102-q7o1',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q8',
        text: 'Which of the following is a key advantage of the problem-solving method?',
        options: [
            { id: 'csc102-q8o1', text: 'It guarantees a correct solution on the first try.' },
            { id: 'csc102-q8o2', text: 'It eliminates the need for teamwork.' },
            { id: 'csc102-q8o3', text: 'It promotes the development of long-term knowledge retention.' },
            { id: 'csc102-q8o4', text: 'It only applies to computer science problems.' }
        ],
        correctOptionId: 'csc102-q8o3',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q9',
        text: 'When trying out a solution, it is important to do all of the following EXCEPT:',
        options: [
            { id: 'csc102-q9o1', text: 'Keep accurate records of thoughts and procedures.' },
            { id: 'csc102-q9o2', text: 'Rush through the strategy to arrive at a quick answer.' },
            { id: 'csc102-q9o3', text: 'Monitor the steps undertaken with great care.' },
            { id: 'csc102-q9o4', text: 'Feel comfortable putting the problem aside and returning to it later.' }
        ],
        correctOptionId: 'csc102-q9o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q10',
        text: 'The final step of the Problem-Solving Method, "Evaluate the results," primarily involves:',
        options: [
            { id: 'csc102-q10o1', text: 'Asking others to solve the problem for you.' },
            { id: 'csc102-q10o2', text: 'Self-assessment and questioning the obtained results.' },
            { id: 'csc102-q10o3', text: 'Immediately moving on to the next problem.' },
            { id: 'csc102-q10o4', text: 'Writing the final report.' }
        ],
        correctOptionId: 'csc102-q10o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q11',
        text: 'In the example of calculating a class average, if the grades are letters (A+, B, F, etc.), what must be done before processing?',
        options: [
            { id: 'csc102-q11o1', text: 'The letters must be converted to numerical values.' },
            { id: 'csc102-q11o2', text: 'The letters must be sorted alphabetically.' },
            { id: 'csc102-q11o3', text: 'The average of the letters can be calculated directly.' },
            { id: 'csc102-q11o4', text: 'The problem cannot be solved.' }
        ],
        correctOptionId: 'csc102-q11o1',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q12',
        text: 'Which of these is an example of a problem-solving activity in a non-computing context?',
        options: [
            { id: 'csc102-q12o1', text: 'Compiling a C++ program' },
            { id: 'csc102-q12o2', text: 'Picking up books according to a school timetable' },
            { id: 'csc102-q12o3', text: 'Defragmenting a hard drive' },
            { id: 'csc102-q12o4', text: 'Installing a new software update' }
        ],
        correctOptionId: 'csc102-q12o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q13',
        text: 'The problem-solving objective "Willingness to try problems and improve their perseverance" is aimed at developing:',
        options: [
            { id: 'csc102-q13o1', text: 'Technical skills' },
            { id: 'csc102-q13o2', text: 'Cognitive and attitudinal skills' },
            { id: 'csc102-q13o3', text: 'Physical skills' },
            { id: 'csc102-q13o4', text: 'Networking skills' }
        ],
        correctOptionId: 'csc102-q13o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q14',
        text: 'A "systematic list" in problem-solving is used to:',
        options: [
            { id: 'csc102-q14o1', text: 'Map out a plan of attack and determine regularities.' },
            { id: 'csc102-q14o2', text: 'Replace the need for a flowchart.' },
            { id: 'csc102-q14o3', text: 'Write pseudocode automatically.' },
            { id: 'csc102-q14o4', text: 'Impress the examiner.' }
        ],
        correctOptionId: 'csc102-q14o1',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q15',
        text: 'The three basic purposes of problem-solving include all EXCEPT:',
        options: [
            { id: 'csc102-q15o1', text: 'Seeking information' },
            { id: 'csc102-q15o2', text: 'Generating new knowledge' },
            { id: 'csc102-q15o3', text: 'Making decisions' },
            { id: 'csc102-q15o4', text: 'Avoiding difficult tasks' }
        ],
        correctOptionId: 'csc102-q15o4',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q16',
        text: 'What does the "accumulation of facts and data pertinent to the problem" lead to?',
        options: [
            { id: 'csc102-q16o1', text: 'More confusion' },
            { id: 'csc102-q16o2', text: 'A logical interpretation supported by valid experience' },
            { id: 'csc102-q16o3', text: 'Immediate solution' },
            { id: 'csc102-q16o4', text: 'Decreased understanding' }
        ],
        correctOptionId: 'csc102-q16o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q17',
        text: 'The problem-solving method encourages students to frame a problem in their own words during which step?',
        options: [
            { id: 'csc102-q17o1', text: 'Understand the problem' },
            { id: 'csc102-q17o2', text: 'Describe barriers' },
            { id: 'csc102-q17o3', text: 'Identify solutions' },
            { id: 'csc102-q17o4', text: 'Evaluate results' }
        ],
        correctOptionId: 'csc102-q17o1',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q18',
        text: 'Verbalizing the impediments or constraints preventing goal achievement is a part of:',
        options: [
            { id: 'csc102-q18o1', text: 'Describing barriers' },
            { id: 'csc102-q18o2', text: 'Understanding the problem' },
            { id: 'csc102-q18o3', text: 'Trying a solution' },
            { id: 'csc102-q18o4', text: 'Evaluating results' }
        ],
        correctOptionId: 'csc102-q18o1',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q19',
        text: 'The advantage of "Development of Transferable Skills" means problem-solving skills can be:',
        options: [
            { id: 'csc102-q19o1', text: 'Applied only to computer science.' },
            { id: 'csc102-q19o2', text: 'Applied to other real-world scenarios.' },
            { id: 'csc102-q19o3', text: 'Forgotten after the exam.' },
            { id: 'csc102-q19o4', text: 'Used only in individual work.' }
        ],
        correctOptionId: 'csc102-q19o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q20',
        text: 'Problem-solving methods improve teamwork and interpersonal skills by promoting:',
        options: [
            { id: 'csc102-q20o1', text: 'Isolation and independent work.' },
            { id: 'csc102-q20o2', text: 'Interaction and communication.' },
            { id: 'csc102-q20o3', text: 'Competition among students.' },
            { id: 'csc102-q20o4', text: 'Rote memorization.' }
        ],
        correctOptionId: 'csc102-q20o2',
        topic: 'Lecture 1: Problem Solving Methods'
    },
    {
        id: 'csc102-q21',
        text: 'What is an algorithm?',
        options: [
            { id: 'csc102-q21o1', text: 'A programming language' },
            { id: 'csc102-q21o2', text: 'A type of computer hardware' },
            { id: 'csc102-q21o3', text: 'A set of step-by-step rules to solve a problem' },
            { id: 'csc102-q21o4', text: 'A graphical representation of data' }
        ],
        correctOptionId: 'csc102-q21o3',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q22',
        text: 'Which of the following is a NON-essential property of an algorithm?',
        options: [
            { id: 'csc102-q22o1', text: 'Finiteness' },
            { id: 'csc102-q22o2', text: 'Definiteness' },
            { id: 'csc102-q22o3', text: 'Complexity' },
            { id: 'csc102-q22o4', text: 'Effectiveness' }
        ],
        correctOptionId: 'csc102-q22o3',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q23',
        text: 'The property of an algorithm that ensures it will always terminate after a finite number of steps is called:',
        options: [
            { id: 'csc102-q23o1', text: 'Definiteness' },
            { id: 'csc102-q23o2', text: 'Finiteness' },
            { id: 'csc102-q23o3', text: 'Input' },
            { id: 'csc102-q23o4', text: 'Output' }
        ],
        correctOptionId: 'csc102-q23o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q24',
        text: 'Each step of an algorithm must be precisely defined. This property is known as:',
        options: [
            { id: 'csc102-q24o1', text: 'Effectiveness' },
            { id: 'csc102-q24o2', text: 'Definiteness' },
            { id: 'csc102-q24o3', text: 'Finiteness' },
            { id: 'csc102-q24o4', text: 'Input' }
        ],
        correctOptionId: 'csc102-q24o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q25',
        text: 'An algorithm must have:',
        options: [
            { id: 'csc102-q25o1', text: 'At least one input' },
            { id: 'csc102-q25o2', text: 'At least one output' },
            { id: 'csc102-q25o3', text: 'Both multiple inputs and multiple outputs' },
            { id: 'csc102-q25o4', text: 'No inputs or outputs' }
        ],
        correctOptionId: 'csc102-q25o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q26',
        text: 'The operations in an algorithm should be basic and doable in a finite amount of time. This is the property of:',
        options: [
            { id: 'csc102-q26o1', text: 'Definiteness' },
            { id: 'csc102-q26o2', text: 'Finiteness' },
            { id: 'csc102-q26o3', text: 'Effectiveness' },
            { id: 'csc102-q26o4', text: 'Output' }
        ],
        correctOptionId: 'csc102-q26o3',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q27',
        text: 'Which of the following is a common element of most algorithms?',
        options: [
            { id: 'csc102-q27o1', text: 'Graphical User Interface (GUI)' },
            { id: 'csc102-q27o2', text: 'Internet connectivity' },
            { id: 'csc102-q27o3', text: 'Iteration (repetition)' },
            { id: 'csc102-q27o4', text: 'Color coding' }
        ],
        correctOptionId: 'csc102-q27o3',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q28',
        text: 'The algorithm type that involves dividing a problem into smaller sub-problems of the same type is:',
        options: [
            { id: 'csc102-q28o1', text: 'Brute Force' },
            { id: 'csc102-q28o2', text: 'Divide and Conquer' },
            { id: 'csc102-q28o3', text: 'Randomized' },
            { id: 'csc102-q28o4', text: 'Greedy' }
        ],
        correctOptionId: 'csc102-q28o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q29',
        text: 'An algorithm that tries all possible solutions until a satisfactory one is found is called a:',
        options: [
            { id: 'csc102-q29o1', text: 'Greedy algorithm' },
            { id: 'csc102-q29o2', text: 'Dynamic programming algorithm' },
            { id: 'csc102-q29o3', text: 'Brute force algorithm' },
            { id: 'csc102-q29o4', text: 'Recursive algorithm' }
        ],
        correctOptionId: 'csc102-q29o3',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q30',
        text: 'Which type of algorithm uses a random number during computation to find a solution?',
        options: [
            { id: 'csc102-q30o1', text: 'Recursive' },
            { id: 'csc102-q30o2', text: 'Randomized' },
            { id: 'csc102-q30o3', text: 'Backtracking' },
            { id: 'csc102-q30o4', text: 'Divide and Conquer' }
        ],
        correctOptionId: 'csc102-q30o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q31',
        text: 'A Greedy algorithm finds an optimal solution:',
        options: [
            { id: 'csc102-q31o1', text: 'For the whole problem from the start.' },
            { id: 'csc102-q31o2', text: 'At the local level with the intent of it being optimal for the whole problem.' },
            { id: 'csc102-q31o3', text: 'By breaking the problem into simpler sub-problems.' },
            { id: 'csc102-q31o4', text: 'By trying all possible combinations.' }
        ],
        correctOptionId: 'csc102-q31o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q32',
        text: 'An algorithm that solves the simplest version of a problem and then builds up to solve the original problem is:',
        options: [
            { id: 'csc102-q32o1', text: 'Brute Force' },
            { id: 'csc102-q32o2', text: 'Recursive' },
            { id: 'csc102-q32o3', text: 'Randomized' },
            { id: 'csc102-q32o4', text: 'Greedy' }
        ],
        correctOptionId: 'csc102-q32o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q33',
        text: 'Backtracking algorithms are characterized by:',
        options: [
            { id: 'csc102-q33o1', text: 'Moving only forward through sub-problems.' },
            { id: 'csc102-q33o2', text: 'Moving backwards if a path does not lead to a solution.' },
            { id: 'csc102-q33o3', text: 'Never revisiting a decision.' },
            { id: 'csc102-q33o4', text: 'Using random numbers to make choices.' }
        ],
        correctOptionId: 'csc102-q33o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q34',
        text: 'Dynamic programming algorithms are efficient because they:',
        options: [
            { id: 'csc102-q34o1', text: 'Solve sub-problems only once and store their solutions.' },
            { id: 'csc102-q34o2', text: 'Solve every sub-problem repeatedly.' },
            { id: 'csc102-q34o3', text: 'Only work on very small problems.' },
            { id: 'csc102-q34o4', text: 'Avoid using iteration.' }
        ],
        correctOptionId: 'csc102-q34o1',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q35',
        text: 'Which of the following is a benefit of algorithmic thinking?',
        options: [
            { id: 'csc102-q35o1', text: 'It makes decision-making a more random process.' },
            { id: 'csc102-q35o2', text: 'It allows students to breakdown problems into distinct steps.' },
            { id: 'csc102-q35o3', text: 'It is only useful in computer science.' },
            { id: 'csc102-q35o4', text: 'It eliminates the need for planning.' }
        ],
        correctOptionId: 'csc102-q35o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q36',
        text: 'Algorithms can be expressed in all of the following ways EXCEPT:',
        options: [
            { id: 'csc102-q36o1', text: 'Natural languages' },
            { id: 'csc102-q36o2', text: 'Programming languages' },
            { id: 'csc102-q36o3', text: 'Telepathic communication' },
            { id: 'csc102-q36o4', text: 'Flowcharts and Pseudocode' }
        ],
        correctOptionId: 'csc102-q36o3',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q37',
        text: 'Why are natural languages rarely used for complex algorithms?',
        options: [
            { id: 'csc102-q37o1', text: 'They are too fast.' },
            { id: 'csc102-q37o2', text: 'They are verbose and ambiguous.' },
            { id: 'csc102-q37o3', text: 'They are not understood by humans.' },
            { id: 'csc102-q37o4', text: 'They require a compiler.' }
        ],
        correctOptionId: 'csc102-q37o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q38',
        text: 'The student story about thanking the school management illustrates that a computer program is similar to:',
        options: [
            { id: 'csc102-q38o1', text: 'The students themselves.' },
            { id: 'csc102-q38o2', text: 'The HoD\'s office.' },
            { id: 'csc102-q38o3', text: 'The instruction given to the representatives.' },
            { id: 'csc102-q38o4', text: 'The thank you note.' }
        ],
        correctOptionId: 'csc102-q38o3',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q39',
        text: 'The role of an algorithm in problem-solving is to:',
        options: [
            { id: 'csc102-q39o1', text: 'Automate individual steps and provide an organized procedure.' },
            { id: 'csc102-q39o2', text: 'Replace the need for human thinking.' },
            { id: 'csc102-q39o3', text: 'Make problems more complex.' },
            { id: 'csc102-q39o4', text: 'Work only for mathematical problems.' }
        ],
        correctOptionId: 'csc102-q39o1',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q40',
        text: 'A good algorithm is compared to:',
        options: [
            { id: 'csc102-q40o1', text: 'Using a pair of scissors to cut plywood.' },
            { id: 'csc102-q40o2', text: 'Using the exact right tool for a job in a workshop.' },
            { id: 'csc102-q40o3', text: 'A random guess.' },
            { id: 'csc102-q40o4', text: 'A poorly defined map.' }
        ],
        correctOptionId: 'csc102-q40o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q41',
        text: 'What is the primary goal of the "Input" common element in an algorithm?',
        options: [
            { id: 'csc102-q41o1', text: 'To acquire data that defines the specific problem.' },
            { id: 'csc102-q41o2', text: 'To display the final result.' },
            { id: 'csc102-q41o3', text: 'To perform arithmetic computations.' },
            { id: 'csc102-q41o4', text: 'To repeat a set of instructions.' }
        ],
        correctOptionId: 'csc102-q41o1',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q42',
        text: 'The "Selection" common element in an algorithm refers to:',
        options: [
            { id: 'csc102-q42o1', text: 'Choosing a programming language.' },
            { id: 'csc102-q42o2', text: 'Choosing among two or more courses of action.' },
            { id: 'csc102-q42o3', text: 'Selecting data to ignore.' },
            { id: 'csc102-q42o4', text: 'Sorting a list of numbers.' }
        ],
        correctOptionId: 'csc102-q42o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q43',
        text: 'The "Iteration" common element in an algorithm involves:',
        options: [
            { id: 'csc102-q43o1', text: 'Reporting the final results.' },
            { id: 'csc102-q43o2', text: 'Repeatedly executing a collection of instructions.' },
            { id: 'csc102-q43o3', text: 'Getting input from the user.' },
            { id: 'csc102-q43o4', text: 'Making a single decision.' }
        ],
        correctOptionId: 'csc102-q43o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q44',
        text: 'Which characteristic is NOT true for an algorithm?',
        options: [
            { id: 'csc102-q44o1', text: 'It is a finite set of instructions.' },
            { id: 'csc102-q44o2', text: 'It must have a clearly defined stopping point.' },
            { id: 'csc102-q44o3', text: 'Its activities must be unambiguous.' },
            { id: 'csc102-q44o4', text: 'It must be written in a programming language.' }
        ],
        correctOptionId: 'csc102-q44o4',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q45',
        text: 'What is the key difference between a good algorithm and a poor one?',
        options: [
            { id: 'csc102-q45o1', text: 'The speed of the computer it runs on.' },
            { id: 'csc102-q45o2', text: 'The choice of the right approach and how well it is defined.' },
            { id: 'csc102-q45o3', text: 'The number of lines of code.' },
            { id: 'csc102-q45o4', text: 'The programming language used.' }
        ],
        correctOptionId: 'csc102-q45o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q46',
        text: 'The step "Sum = num1 + num2" in a summation algorithm falls under which common element?',
        options: [
            { id: 'csc102-q46o1', text: 'Input' },
            { id: 'csc102-q46o2', text: 'Output' },
            { id: 'csc102-q46o3', text: 'Computation' },
            { id: 'csc102-q46o4', text: 'Selection' }
        ],
        correctOptionId: 'csc102-q46o3',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q47',
        text: 'Expressing an algorithm in a programming language is intended for:',
        options: [
            { id: 'csc102-q47o1', text: 'Human understanding only.' },
            { id: 'csc102-q47o2', text: 'Execution by a computer.' },
            { id: 'csc102-q47o3', text: 'Creating flowcharts.' },
            { id: 'csc102-q47o4', text: 'Writing pseudocode.' }
        ],
        correctOptionId: 'csc102-q47o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q48',
        text: 'The primary disadvantage of using a brute force algorithm is that it can be:',
        options: [
            { id: 'csc102-q48o1', text: 'Too efficient.' },
            { id: 'csc102-q48o2', text: 'Very slow for large problems.' },
            { id: 'csc102-q48o3', text: 'Too simple to understand.' },
            { id: 'csc102-q48o4', text: 'Impossible to implement.' }
        ],
        correctOptionId: 'csc102-q48o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q49',
        text: 'In the context of algorithms, what does "reusability" refer to?',
        options: [
            { id: 'csc102-q49o1', text: 'Using the same algorithm for different problems.' },
            { id: 'csc102-q49o2', text: 'The algorithm\'s ability to use less memory.' },
            { id: 'csc102-q49o3', text: 'The algorithm\'s running speed.' },
            { id: 'csc102-q49o4', text: 'The number of inputs it can take.' }
        ],
        correctOptionId: 'csc102-q49o1',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q50',
        text: 'The concept that an algorithm should have a clear starting and ending point is covered by which two properties?',
        options: [
            { id: 'csc102-q50o1', text: 'Input and Output' },
            { id: 'csc102-q50o2', text: 'Finiteness and Definiteness' },
            { id: 'csc102-q50o3', text: 'Effectiveness and Definiteness' },
            { id: 'csc102-q50o4', text: 'Finiteness and Effectiveness' }
        ],
        correctOptionId: 'csc102-q50o2',
        topic: 'Lecture 2: Algorithms'
    },
    {
        id: 'csc102-q51',
        text: 'What is a flowchart?',
        options: [
            { id: 'csc102-q51o1', text: 'A programming language' },
            { id: 'csc102-q51o2', text: 'A diagram that depicts the flow of data in sequential order' },
            { id: 'csc102-q51o3', text: 'A type of algorithm' },
            { id: 'csc102-q51o4', text: 'A computer hardware component' }
        ],
        correctOptionId: 'csc102-q51o2',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q52',
        text: 'Which flowchart symbol is used to represent the start or end of a process?',
        options: [
            { id: 'csc102-q52o1', text: 'Rectangle' },
            { id: 'csc102-q52o2', text: 'Parallelogram' },
            { id: 'csc102-q52o3', text: 'Diamond' },
            { id: 'csc102-q52o4', text: 'Oval' }
        ],
        correctOptionId: 'csc102-q52o4',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q53',
        text: 'A normal process flow step, such as a calculation, is represented by which symbol?',
        options: [
            { id: 'csc102-q53o1', text: 'Rectangle (Process)' },
            { id: 'csc102-q53o2', text: 'Parallelogram (I/O)' },
            { id: 'csc102-q53o3', text: 'Diamond (Decision)' },
            { id: 'csc102-q53o4', text: 'Oval (Terminator)' }
        ],
        correctOptionId: 'csc102-q53o1',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q54',
        text: 'Which symbol is used for any Input/Output (I/O) operation in a flowchart?',
        options: [
            { id: 'csc102-q54o1', text: 'Rectangle' },
            { id: 'csc102-q54o2', text: 'Parallelogram' },
            { id: 'csc102-q54o3', text: 'Diamond' },
            { id: 'csc102-q54o4', text: 'Oval' }
        ],
        correctOptionId: 'csc102-q54o2',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q55',
        text: 'A diamond-shaped symbol in a flowchart is used for:',
        options: [
            { id: 'csc102-q55o1', text: 'Starting the process' },
            { id: 'csc102-q55o2', text: 'Input/Output' },
            { id: 'csc102-q55o3', text: 'A decision or branch' },
            { id: 'csc102-q55o4', text: 'A computational process' }
        ],
        correctOptionId: 'csc102-q55o3',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q56',
        text: 'What is the primary function of a connector symbol (circle) in a flowchart?',
        options: [
            { id: 'csc102-q56o1', text: 'To indicate a delay' },
            { id: 'csc102-q56o2', text: 'To represent a decision' },
            { id: 'csc102-q56o3', text: 'To connect breaks in the flowchart across pages or sections' },
            { id: 'csc102-q56o4', text: 'To indicate the start of a subroutine' }
        ],
        correctOptionId: 'csc102-q56o3',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q57',
        text: 'Which of the following is a general rule for flowcharting?',
        options: [
            { id: 'csc102-q57o1', text: 'Flowcharts should use lines, not arrows, to connect symbols.' },
            { id: 'csc102-q57o2', text: 'All symbols should have multiple entry and exit points.' },
            { id: 'csc102-q57o3', text: 'The flowchart should be neat, clear, and easy to follow.' },
            { id: 'csc102-q57o4', text: 'Flowcharts must always flow from bottom to top.' }
        ],
        correctOptionId: 'csc102-q57o3',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q58',
        text: 'For a Decision symbol, how many flow lines can enter and how many can exit?',
        options: [
            { id: 'csc102-q58o1', text: 'One enter, one exit' },
            { id: 'csc102-q58o2', text: 'One enter, two exits' },
            { id: 'csc102-q58o3', text: 'Two enter, one exit' },
            { id: 'csc102-q58o4', text: 'Multiple enter, multiple exit' }
        ],
        correctOptionId: 'csc102-q58o2',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q59',
        text: 'The general direction of flow in a flowchart is:',
        options: [
            { id: 'csc102-q59o1', text: 'Right to left or bottom to top' },
            { id: 'csc102-q59o2', text: 'Random, to show creativity' },
            { id: 'csc102-q59o3', text: 'Left to right or top to bottom' },
            { id: 'csc102-q59o4', text: 'Only in a circular pattern' }
        ],
        correctOptionId: 'csc102-q59o3',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q60',
        text: 'When is an upward flow in a flowchart generally acceptable?',
        options: [
            { id: 'csc102-q60o1', text: 'Never' },
            { id: 'csc102-q60o2', text: 'Always, for any number of symbols' },
            { id: 'csc102-q60o3', text: 'As long as it does not exceed 3 symbols' },
            { id: 'csc102-q60o4', text: 'Only when using a connector' }
        ],
        correctOptionId: 'csc102-q60o4',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q61',
        text: 'What does a Predefined Process symbol typically represent?',
        options: [
            { id: 'csc102-q61o1', text: 'A simple calculation' },
            { id: 'csc102-q61o2', text: 'The start of the program' },
            { id: 'csc102-q61o3', text: 'A subroutine or an interrupt program' },
            { id: 'csc102-q61o4', text: 'An input operation' }
        ],
        correctOptionId: 'csc102-q61o3',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q62',
        text: 'All flowcharts must begin with which symbol?',
        options: [
            { id: 'csc102-q62o1', text: 'Process' },
            { id: 'csc102-q62o2', text: 'Input/Output' },
            { id: 'csc102-q62o3', text: 'Decision' },
            { id: 'csc102-q62o4', text: 'Terminal or Predefined Process (for subroutines)' }
        ],
        correctOptionId: 'csc102-q62o4',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q63',
        text: 'A High-Level (top-down) flowchart is useful for:',
        options: [
            { id: 'csc102-q63o1', text: 'Documenting every minor detail of a process.' },
            { id: 'csc102-q63o2', text: 'Identifying the major steps and intermediate outputs in a process.' },
            { id: 'csc102-q63o3', text: 'Writing the actual program code.' },
            { id: 'csc102-q63o4', text: 'Replacing the need for an algorithm.' }
        ],
        correctOptionId: 'csc102-q63o2',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q64',
        text: 'A Detailed Flowchart is characterized by its inclusion of:',
        options: [
            { id: 'csc102-q64o1', text: 'Only the top 5 steps.' },
            { id: 'csc102-q64o2', text: 'All steps, decision points, waiting periods, and feedback loops.' },
            { id: 'csc102-q64o3', text: 'Only the start and end points.' },
            { id: 'csc102-q64o4', text: 'Pictures and graphics.' }
        ],
        correctOptionId: 'csc102-q64o2',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q65',
        text: 'Which of the following is an advantage of using flowcharts?',
        options: [
            { id: 'csc102-q65o1', text: 'They are independent of programming languages.' },
            { id: 'csc102-q65o2', text: 'They can be executed directly by the computer.' },
            { id: 'csc102-q65o3', text: 'They eliminate the need for testing.' },
            { id: 'csc102-q65o4', text: 'They are only understood by programmers.' }
        ],
        correctOptionId: 'csc102-q65o1',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q66',
        text: 'Flowcharts are particularly useful in which phase of program development?',
        options: [
            { id: 'csc102-q66o1', text: 'Initial stage of formulating computer solutions' },
            { id: 'csc102-q66o2', text: 'Final documentation after the program is written' },
            { id: 'csc102-q66o3', text: 'During the coding phase only' },
            { id: 'csc102-q66o4', text: 'When marketing the software' }
        ],
        correctOptionId: 'csc102-q66o1',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q67',
        text: 'The symbol used to indicate a delay or wait in a process is:',
        options: [
            { id: 'csc102-q67o1', text: 'A rectangle with rounded corners' },
            { id: 'csc102-q67o2', text: 'A hexagon' },
            { id: 'csc102-q67o3', text: 'A pentagon' },
            { id: 'csc102-q67o4', text: 'A D-shaped symbol' }
        ],
        correctOptionId: 'csc102-q67o3',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q68',
        text: 'The primary purpose of using standardized symbols in flowcharts is to:',
        options: [
            { id: 'csc102-q68o1', text: 'Make the charts look more professional.' },
            { id: 'csc102-q68o2', text: 'Provide a common method for people to visualize problems in the same way.' },
            { id: 'csc102-q68o3', text: 'Comply with international law.' },
            { id: 'csc102-q68o4', text: 'Make the flowchart harder to copy.' }
        ],
        correctOptionId: 'csc102-q68o2',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q69',
        text: 'In the flowchart for finding the largest number between A and B, what follows the decision "Is A < B?" if the condition is TRUE?',
        options: [
            { id: 'csc102-q69o1', text: 'BIG = A' },
            { id: 'csc102-q69o2', text: 'SMALL = B' },
            { id: 'csc102-q69o3', text: 'BIG = B' },
            { id: 'csc102-q69o4', text: 'Display A and B' }
        ],
        correctOptionId: 'csc102-q69o3',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q70',
        text: 'Which of these is NOT a typical use of a flowchart?',
        options: [
            { id: 'csc102-q70o1', text: 'Documenting a business process' },
            { id: 'csc102-q70o2', text: 'Communicating the logic of a system' },
            { id: 'csc102-q70o3', text: 'Directly executing a program on a CPU' },
            { id: 'csc102-q70o4', text: 'Aiding in the analysis of a problem' }
        ],
        correctOptionId: 'csc102-q70o3',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q71',
        text: 'The "Effective analysis" advantage of flowcharts means they can be used to:',
        options: [
            { id: 'csc102-q71o1', text: 'Analyze the problem effectively.' },
            { id: 'csc102-q71o2', text: 'Analyze the computer\'s hardware.' },
            { id: 'csc102-q71o3', text: 'Analyze the programmer\'s skills.' },
            { id: 'csc102-q71o4', text: 'Analyze the user\'s behavior.' }
        ],
        correctOptionId: 'csc102-q71o1',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q72',
        text: 'How do flowcharts assist in "Efficient Program Maintenance"?',
        options: [
            { id: 'csc102-q72o1', text: 'By making the program run faster.' },
            { id: 'csc102-q72o2', text: 'By providing a visual guide to the program\'s logic, making it easier to update.' },
            { id: 'csc102-q72o3', text: 'By reducing the file size of the program.' },
            { id: 'csc102-q72o4', text: 'By automatically fixing bugs.' }
        ],
        correctOptionId: 'csc102-q72o2',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q73',
        text: 'For the problem "Find the area of a circle," which symbol would be used for "AREA = 3.14 * r * r"?',
        options: [
            { id: 'csc102-q73o1', text: 'Input/Output' },
            { id: 'csc102-q73o2', text: 'Process' },
            { id: 'csc102-q73o3', text: 'Decision' },
            { id: 'csc102-q73o4', text: 'Terminator' }
        ],
        correctOptionId: 'csc102-q73o2',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q74',
        text: 'In a flowchart, an arrow represents:',
        options: [
            { id: 'csc102-q74o1', text: 'A variable' },
            { id: 'csc102-q74o2', text: 'A data type' },
            { id: 'csc102-q74o3', text: 'The direction of flow' },
            { id: 'csc102-q74o4', text: 'A comment' }
        ],
        correctOptionId: 'csc102-q74o3',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q75',
        text: 'The exit point for most flowchart symbols is at the:',
        options: [
            { id: 'csc102-q75o1', text: 'Top' },
            { id: 'csc102-q75o2', text: 'Bottom' },
            { id: 'csc102-q75o3', text: 'Left side' },
            { id: 'csc102-q75o4', text: 'Right side' }
        ],
        correctOptionId: 'csc102-q75o2',
        topic: 'Lecture 3: Flowcharts'
    },
    {
        id: 'csc102-q76',
        text: 'What does the term "pseudocode" literally mean?',
        options: [
            { id: 'csc102-q76o1', text: 'Real code' },
            { id: 'csc102-q76o2', text: 'Fake code' },
            { id: 'csc102-q76o3', text: 'Python code' },
            { id: 'csc102-q76o4', text: 'Complex code' }
        ],
        correctOptionId: 'csc102-q76o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q77',
        text: 'Pseudocode is an artificial and informal approach to writing:',
        options: [
            { id: 'csc102-q77o1', text: 'Flowchart symbols' },
            { id: 'csc102-q77o2', text: 'Sequence of actions and instructions (algorithms)' },
            { id: 'csc102-q77o3', text: 'Computer hardware specifications' },
            { id: 'csc102-q77o4', text: 'User manuals' }
        ],
        correctOptionId: 'csc102-q77o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q78',
        text: 'The primary benefit of using pseudocode is that it:',
        options: [
            { id: 'csc102-q78o1', text: 'Can be executed directly by a computer.' },
            { id: 'csc102-q78o2', text: 'Allows programmers to focus on logic without strict syntax.' },
            { id: 'csc102-q78o3', text: 'Is a formal programming language.' },
            { id: 'csc102-q78o4', text: 'Replaces the need for testing.' }
        ],
        correctOptionId: 'csc102-q78o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q79',
        text: 'Which of the following is a characteristic of pseudocode?',
        options: [
            { id: 'csc102-q79o1', text: 'It has official, strict rules that must be obeyed.' },
            { id: 'csc102-q79o2', text: 'It requires knowledge of a specific programming language.' },
            { id: 'csc102-q79o3', text: 'It uses a combination of natural language and programming language.' },
            { id: 'csc102-q79o4', text: 'It is only useful for experienced programmers.' }
        ],
        correctOptionId: 'csc102-q79o3',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q80',
        text: 'What is the first step recommended for solving programming problems with pseudocode?',
        options: [
            { id: 'csc102-q80o1', text: 'Break the problem down.' },
            { id: 'csc102-q80o2', text: 'Understand what the function does.' },
            { id: 'csc102-q80o3', text: 'Start writing code immediately.' },
            { id: 'csc102-q80o4', text: 'Draw a flowchart.' }
        ],
        correctOptionId: 'csc102-q80o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q81',
        text: 'The step "Break the problem down" in pseudocode development involves:',
        options: [
            { id: 'csc102-q81o1', text: 'Solving the main problem first and ignoring details.' },
            { id: 'csc102-q81o2', text: 'Breaking the problem into smaller parts and sub-problems.' },
            { id: 'csc102-q81o3', text: 'Using a hammer on your computer.' },
            { id: 'csc102-q81o4', text: 'Delegating the problem to someone else.' }
        ],
        correctOptionId: 'csc102-q81o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q82',
        text: 'Pseudocode acts as a bridge between:',
        options: [
            { id: 'csc102-q82o1', text: 'The computer and the printer.' },
            { id: 'csc102-q82o2', text: 'The human brain and the computer code executor.' },
            { id: 'csc102-q82o3', text: 'Two different programming languages.' },
            { id: 'csc102-q82o4', text: 'The CPU and the RAM.' }
        ],
        correctOptionId: 'csc102-q82o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q83',
        text: 'In the provided pseudocode example (finding the smallest integer where the sum exceeds a limit), what control structure is used for repetition?',
        options: [
            { id: 'csc102-q83o1', text: 'If-Else' },
            { id: 'csc102-q83o2', text: 'A "Repeat the following" loop' },
            { id: 'csc102-q83o3', text: 'Select-Case' },
            { id: 'csc102-q83o4', text: 'Goto statement' }
        ],
        correctOptionId: 'csc102-q83o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q84',
        text: 'Why is pseudocode considered a "great way to get started with software programming as a beginner"?',
        options: [
            { id: 'csc102-q84o1', text: 'It teaches advanced syntax.' },
            { id: 'csc102-q84o2', text: 'It allows beginners to plan logic without worrying about complex syntax.' },
            { id: 'csc102-q84o3', text: 'It is the same as machine language.' },
            { id: 'csc102-q84o4', text: 'It automatically debugs the program.' }
        ],
        correctOptionId: 'csc102-q84o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q85',
        text: 'Which of the following would be the BEST representation in pseudocode for a condition?',
        options: [
            { id: 'csc102-q85o1', text: 'if condition then' },
            { id: 'csc102-q85o2', text: '{ condition }' },
            { id: 'csc102-q85o3', text: 'condition:' },
            { id: 'csc102-q85o4', text: '# condition' }
        ],
        correctOptionId: 'csc102-q85o1',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q86',
        text: 'The main difference between pseudocode and an actual programming language is that pseudocode:',
        options: [
            { id: 'csc102-q86o1', text: 'Is faster to execute.' },
            { id: 'csc102-q86o2', text: 'Has no strict syntactic rules.' },
            { id: 'csc102-q86o3', text: 'Is more powerful.' },
            { id: 'csc102-q86o4', text: 'Can handle more data types.' }
        ],
        correctOptionId: 'csc102-q86o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q87',
        text: 'When writing pseudocode, the programmer:',
        options: [
            { id: 'csc102-q87o1', text: 'Must use Python syntax.' },
            { id: 'csc102-q87o2', text: 'Makes the rules, as long as it is comprehensible.' },
            { id: 'csc102-q87o3', text: 'Must follow the rules of Java.' },
            { id: 'csc102-q87o4', text: 'Does not need to think about logic.' }
        ],
        correctOptionId: 'csc102-q87o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q88',
        text: 'The step "Make sure you understand the question" is important because:',
        options: [
            { id: 'csc102-q88o1', text: 'It is the easiest step.' },
            { id: 'csc102-q88o2', text: 'It saves time by avoiding solutions to the wrong problem.' },
            { id: 'csc102-q88o3', text: 'The teacher requires it.' },
            { id: 'csc102-q88o4', text: 'It is only necessary for complex problems.' }
        ],
        correctOptionId: 'csc102-q88o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q89',
        text: 'In the context of pseudocode, what does "I/O" typically stand for?',
        options: [
            { id: 'csc102-q89o1', text: 'Internal/External' },
            { id: 'csc102-q89o2', text: 'Input/Output' },
            { id: 'csc102-q89o3', text: 'Integer/Operator' },
            { id: 'csc102-q89o4', text: 'Internet/Online' }
        ],
        correctOptionId: 'csc102-q89o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q90',
        text: 'Pseudocode is most similar to which other algorithm expression method?',
        options: [
            { id: 'csc102-q90o1', text: 'Machine Code' },
            { id: 'csc102-q90o2', text: 'Flowchart' },
            { id: 'csc102-q90o3', text: 'Binary' },
            { id: 'csc102-q90o4', text: 'Assembly Language' }
        ],
        correctOptionId: 'csc102-q90o2',
        topic: 'Lecture 4: Pseudocode'
    },
    {
        id: 'csc102-q91',
        text: 'A computer program is best defined as a:',
        options: [
            { id: 'csc102-q91o1', text: 'Type of computer hardware.' },
            { id: 'csc102-q91o2', text: 'Set of instructions following the rules of a chosen language.' },
            { id: 'csc102-q91o3', text: 'The physical components of a computer.' },
            { id: 'csc102-q91o4', text: 'A user of a computer system.' }
        ],
        correctOptionId: 'csc102-q91o2',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q92',
        text: 'Without programs, computers are:',
        options: [
            { id: 'csc102-q92o1', text: 'Faster' },
            { id: 'csc102-q92o2', text: 'Useless' },
            { id: 'csc102-q92o3', text: 'More secure' },
            { id: 'csc102-q92o4', text: 'Cheaper' }
        ],
        correctOptionId: 'csc102-q92o2',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q93',
        text: 'A programming language provides:',
        options: [
            { id: 'csc102-q93o1', text: 'Electrical power to the computer.' },
            { id: 'csc102-q93o2', text: 'A vocabulary and set of grammatical rules for instructing a computer.' },
            { id: 'csc102-q93o3', text: 'The physical circuit designs for the CPU.' },
            { id: 'csc102-q93o4', text: 'The internet connection for the computer.' }
        ],
        correctOptionId: 'csc102-q93o2',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q94',
        text: 'Which type of programming language consists entirely of binary digits (0s and 1s)?',
        options: [
            { id: 'csc102-q94o1', text: 'Assembly Language' },
            { id: 'csc102-q94o2', text: 'High-Level Language' },
            { id: 'csc102-q94o3', text: 'Machine Language' },
            { id: 'csc102-q94o4', text: 'Python' }
        ],
        correctOptionId: 'csc102-q94o3',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q95',
        text: 'Machine language is:',
        options: [
            { id: 'csc102-q95o1', text: 'Easily understood and used by humans.' },
            { id: 'csc102-q95o2', text: 'The only language understood by computers.' },
            { id: 'csc102-q95o3', text: 'A high-level language.' },
            { id: 'csc102-q95o4', text: 'The same as assembly language.' }
        ],
        correctOptionId: 'csc102-q95o2',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q96',
        text: 'Assembly language uses:',
        options: [
            { id: 'csc102-q96o1', text: 'Binary code' },
            { id: 'csc102-q96o2', text: 'Mnemonic codes' },
            { id: 'csc102-q96o3', text: 'English-like words' },
            { id: 'csc102-q96o4', text: 'Graphical symbols' }
        ],
        correctOptionId: 'csc102-q96o2',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q97',
        text: 'A program that translates assembly language into machine language is called a(n):',
        options: [
            { id: 'csc102-q97o1', text: 'Compiler' },
            { id: 'csc102-q97o2', text: 'Interpreter' },
            { id: 'csc102-q97o3', text: 'Assembler' },
            { id: 'csc102-q97o4', text: 'Converter' }
        ],
        correctOptionId: 'csc102-q97o3',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q98',
        text: 'High-level languages are:',
        options: [
            { id: 'csc102-q98o1', text: 'Closer to human languages.' },
            { id: 'csc102-q98o2', text: 'Closer to machine language.' },
            { id: 'csc102-q98o3', text: 'The same as assembly language.' },
            { id: 'csc102-q98o4', text: 'Not used anymore.' }
        ],
        correctOptionId: 'csc102-q98o1',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q99',
        text: 'Examples of high-level languages include:',
        options: [
            { id: 'csc102-q99o1', text: 'Python, JAVA, C++' },
            { id: 'csc102-q99o2', text: 'Binary, Hexadecimal' },
            { id: 'csc102-q99o3', text: 'CPU op-codes' },
            { id: 'csc102-q99o4', text: 'Assembler directives' }
        ],
        correctOptionId: 'csc102-q99o1',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q100',
        text: 'A program that translates a high-level language into machine language all at once is called a:',
        options: [
            { id: 'csc102-q100o1', text: 'Assembler' },
            { id: 'csc102-q100o2', text: 'Interpreter' },
            { id: 'csc102-q100o3', text: 'Compiler' },
            { id: 'csc102-q100o4', text: 'Linker' }
        ],
        correctOptionId: 'csc102-q100o3',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q101',
        text: 'An interpreter translates and executes a high-level language program:',
        options: [
            { id: 'csc102-q101o1', text: 'One line at a time.' },
            { id: 'csc102-q101o2', text: 'After reading the entire source code.' },
            { id: 'csc102-q101o3', text: 'Without translating it.' },
            { id: 'csc102-q101o4', text: 'Only during the night.' }
        ],
        correctOptionId: 'csc102-q101o1',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q102',
        text: 'Which programming language type generally executes the fastest?',
        options: [
            { id: 'csc102-q102o1', text: 'High-Level Language' },
            { id: 'csc102-q102o2', text: 'Assembly Language' },
            { id: 'csc102-q102o3', text: 'Machine Language' },
            { id: 'csc102-q102o4', text: 'They all execute at the same speed.' }
        ],
        correctOptionId: 'csc102-q102o3',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q103',
        text: 'Which programming language type is generally the easiest and fastest for humans to develop programs in?',
        options: [
            { id: 'csc102-q103o1', text: 'Machine Language' },
            { id: 'csc102-q103o2', text: 'Assembly Language' },
            { id: 'csc102-q103o3', text: 'High-Level Language' },
            { id: 'csc102-q103o4', text: 'Binary Language' }
        ],
        correctOptionId: 'csc102-q103o3',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q104',
        text: 'The process of writing, testing, debugging, and maintaining source code is known as:',
        options: [
            { id: 'csc102-q104o1', text: 'Computer programming' },
            { id: 'csc102-q104o2', text: 'Flowcharting' },
            { id: 'csc102-q104o3', text: 'Algorithm design' },
            { id: 'csc102-q104o4', text: 'Hardware engineering' }
        ],
        correctOptionId: 'csc102-q104o1',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q105',
        text: 'When choosing a programming language, one should consider:',
        options: [
            { id: 'csc102-q105o1', text: 'The problem at hand and the target environment.' },
            { id: 'csc102-q105o2', text: 'The color of the programmer\'s shirt.' },
            { id: 'csc102-q105o3', text: 'The brand of the computer monitor.' },
            { id: 'csc102-q105o4', text: 'The current weather.' }
        ],
        correctOptionId: 'csc102-q105o1',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q106',
        text: 'The term "syntax" in a programming language refers to:',
        options: [
            { id: 'csc102-q106o1', text: 'The meaning of the program.' },
            { id: 'csc102-q106o2', text: 'The grammatical rules of the language.' },
            { id: 'csc102-q106o3', text: 'The speed of execution.' },
            { id: 'csc102-q106o4', text: 'The size of the program.' }
        ],
        correctOptionId: 'csc102-q106o2',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q107',
        text: 'A program written in a high-level language is called:',
        options: [
            { id: 'csc102-q107o1', text: 'Object code' },
            { id: 'csc102-q107o2', text: 'Source code' },
            { id: 'csc102-q107o3', text: 'Machine code' },
            { id: 'csc102-q107o4', text: 'Binary code' }
        ],
        correctOptionId: 'csc102-q107o2',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q108',
        text: 'The output of a compiler is typically:',
        options: [
            { id: 'csc102-q108o1', text: 'Source code' },
            { id: 'csc102-q108o2', text: 'A flowchart' },
            { id: 'csc102-q108o3', text: 'Object code (machine code)' },
            { id: 'csc102-q108o4', text: 'Pseudocode' }
        ],
        correctOptionId: 'csc102-q108o3',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q109',
        text: 'Which of the following is a disadvantage of using an interpreter?',
        options: [
            { id: 'csc102-q109o1', text: 'The program runs slower than compiled code.' },
            { id: 'csc102-q109o2', text: 'The program is harder to debug.' },
            { id: 'csc102-q109o3', text: 'The program cannot be run on different platforms.' },
            { id: 'csc102-q109o4', text: 'The program source code is hidden.' }
        ],
        correctOptionId: 'csc102-q109o1',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q110',
        text: 'The category "Object Oriented" falls under:',
        options: [
            { id: 'csc102-q110o1', text: 'Machine Language' },
            { id: 'csc102-q110o2', text: 'Assembly Language' },
            { id: 'csc102-q110o3', text: 'High-Level Language' },
            { id: 'csc102-q110o4', text: 'Binary Language' }
        ],
        correctOptionId: 'csc102-q110o3',
        topic: 'Lecture 5: Introduction to Computer Programming'
    },
    {
        id: 'csc102-q111',
        text: 'OOP is an approach to problem-solving that involves using:',
        options: [
            { id: 'csc102-q111o1', text: 'Complex mathematical formulas.' },
            { id: 'csc102-q111o2', text: 'Objects in computations.' },
            { id: 'csc102-q111o3', text: 'Only sequential procedures.' },
            { id: 'csc102-q111o4', text: 'Low-level assembly code.' }
        ],
        correctOptionId: 'csc102-q111o2',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q112',
        text: 'In OOP, an object is a component of a program that:',
        options: [
            { id: 'csc102-q112o1', text: 'Is always a physical item.' },
            { id: 'csc102-q112o2', text: 'Knows how to perform actions and interact with other elements.' },
            { id: 'csc102-q112o3', text: 'Can only represent a person.' },
            { id: 'csc102-q112o4', text: 'Cannot contain data.' }
        ],
        correctOptionId: 'csc102-q112o2',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q113',
        text: 'The set of actions that an object performs defines its:',
        options: [
            { id: 'csc102-q113o1', text: 'Class' },
            { id: 'csc102-q113o2', text: 'Behavior' },
            { id: 'csc102-q113o3', text: 'Message' },
            { id: 'csc102-q113o4', text: 'Method' }
        ],
        correctOptionId: 'csc102-q113o2',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q114',
        text: 'When objects interact in OOP, they do so by sending:',
        options: [
            { id: 'csc102-q114o1', text: 'Emails' },
            { id: 'csc102-q114o2', text: 'Messages' },
            { id: 'csc102-q114o3', text: 'Files' },
            { id: 'csc102-q114o4', text: 'Signals to the printer' }
        ],
        correctOptionId: 'csc102-q114o2',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q115',
        text: 'The object that asks another object to perform an action is called the:',
        options: [
            { id: 'csc102-q115o1', text: 'Receiver' },
            { id: 'csc102-q115o2', text: 'Sender' },
            { id: 'csc102-q115o3', text: 'Manager' },
            { id: 'csc102-q115o4', text: 'Controller' }
        ],
        correctOptionId: 'csc102-q115o2',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q116',
        text: 'The object that receives a request to perform an action is called the:',
        options: [
            { id: 'csc102-q116o1', text: 'Sender' },
            { id: 'csc102-q116o2', text: 'Receiver' },
            { id: 'csc102-q116o3', text: 'Client' },
            { id: 'csc102-q116o4', text: 'Server' }
        ],
        correctOptionId: 'csc102-q116o2',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q117',
        text: 'Information that a sending object needs to pass to a receiving object is called a(n):',
        options: [
            { id: 'csc102-q117o1', text: 'Argument' },
            { id: 'csc102-q117o2', text: 'Return value' },
            { id: 'csc102-q117o3', text: 'Method' },
            { id: 'csc102-q117o4', text: 'Class' }
        ],
        correctOptionId: 'csc102-q117o1',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q118',
        text: 'The code that is executed when an object receives a message is called a:',
        options: [
            { id: 'csc102-q118o1', text: 'Argument' },
            { id: 'csc102-q118o2', text: 'Message' },
            { id: 'csc102-q118o3', text: 'Method' },
            { id: 'csc102-q118o4', text: 'Class' }
        ],
        correctOptionId: 'csc102-q118o3',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q119',
        text: 'The message name is also called the:',
        options: [
            { id: 'csc102-q119o1', text: 'Argument name' },
            { id: 'csc102-q119o2', text: 'Class name' },
            { id: 'csc102-q119o3', text: 'Method name' },
            { id: 'csc102-q119o4', text: 'Sender name' }
        ],
        correctOptionId: 'csc102-q119o3',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q120',
        text: 'The OOP problem-solving approach is similar to:',
        options: [
            { id: 'csc102-q120o1', text: 'How a calculator works.' },
            { id: 'csc102-q120o2', text: 'How humans solve daily problems.' },
            { id: 'csc102-q120o3', text: 'The binary system.' },
            { id: 'csc102-q120o4', text: 'The compilation process.' }
        ],
        correctOptionId: 'csc102-q120o2',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q121',
        text: 'What is the first step in the object-oriented problem-solving approach?',
        options: [
            { id: 'csc102-q121o1', text: 'Identify the messages.' },
            { id: 'csc102-q121o2', text: 'Identify the objects.' },
            { id: 'csc102-q121o3', text: 'Identify the problem.' },
            { id: 'csc102-q121o4', text: 'Create a sequence of messages.' }
        ],
        correctOptionId: 'csc102-q121o3',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q122',
        text: 'In the example of adding two numbers, the objects identified were:',
        options: [
            { id: 'csc102-q122o1', text: 'The + operator and the print function.' },
            { id: 'csc102-q122o2', text: 'The programmer and the user.' },
            { id: 'csc102-q122o3', text: 'The first number, the second number, and the result.' },
            { id: 'csc102-q122o4', text: 'The screen and the keyboard.' }
        ],
        correctOptionId: 'csc102-q122o3',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q123',
        text: 'In the sequence (First_num + Second_num) print, the message + is sent to:',
        options: [
            { id: 'csc102-q123o1', text: 'The print object.' },
            { id: 'csc102-q123o2', text: 'The Second_num object.' },
            { id: 'csc102-q123o3', text: 'The First_num object.' },
            { id: 'csc102-q123o4', text: 'The user.' }
        ],
        correctOptionId: 'csc102-q123o3',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q124',
        text: 'The concept where a message can trigger other messages is known as:',
        options: [
            { id: 'csc102-q124o1', text: 'Sequential operation.' },
            { id: 'csc102-q124o2', text: 'Random operation.' },
            { id: 'csc102-q124o3', text: 'Parallel processing.' },
            { id: 'csc102-q124o4', text: 'Binary execution.' }
        ],
        correctOptionId: 'csc102-q124o1',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q125',
        text: 'The primary goal of OOP is to:',
        options: [
            { id: 'csc102-q125o1', text: 'Make programs run faster.' },
            { id: 'csc102-q125o2', text: 'Design objects whose characteristics solve a specific problem.' },
            { id: 'csc102-q125o3', text: 'Write programs with fewer lines of code.' },
            { id: 'csc102-q125o4', text: 'Make programs easier to compile.' }
        ],
        correctOptionId: 'csc102-q125o2',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q126',
        text: 'In OOP, each object contains:',
        options: [
            { id: 'csc102-q126o1', text: 'Only data.' },
            { id: 'csc102-q126o2', text: 'Only code.' },
            { id: 'csc102-q126o3', text: 'Both data and code to manipulate the data.' },
            { id: 'csc102-q126o4', text: 'Neither data nor code.' }
        ],
        correctOptionId: 'csc102-q126o3',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q127',
        text: 'A key feature of OOP that allows objects to interact without knowing each other\'s internal details is called:',
        options: [
            { id: 'csc102-q127o1', text: 'Inheritance' },
            { id: 'csc102-q127o2', text: 'Polymorphism' },
            { id: 'csc102-q127o3', text: 'Encapsulation' },
            { id: 'csc102-q127o4', text: 'Abstraction' }
        ],
        correctOptionId: 'csc102-q127o3',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q128',
        text: 'In the message student.setName("Alice"), "Alice" is the:',
        options: [
            { id: 'csc102-q128o1', text: 'Method' },
            { id: 'csc102-q128o2', text: 'Object' },
            { id: 'csc102-q128o3', text: 'Argument' },
            { id: 'csc102-q128o4', text: 'Return value' }
        ],
        correctOptionId: 'csc102-q128o3',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q129',
        text: 'The value returned by a receiving object to the sending object is:',
        options: [
            { id: 'csc102-q129o1', text: 'Always useful to the sender.' },
            { id: 'csc102-q129o2', text: 'Never useful to the sender.' },
            { id: 'csc102-q129o3', text: 'The result of the requested action.' },
            { id: 'csc102-q129o4', text: 'Always a number.' }
        ],
        correctOptionId: 'csc102-q129o3',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q130',
        text: 'The OOP approach can be divided into how many main steps?',
        options: [
            { id: 'csc102-q130o1', text: '3' },
            { id: 'csc102-q130o2', text: '4' },
            { id: 'csc102-q130o3', text: '5' },
            { id: 'csc102-q130o4', text: '6' }
        ],
        correctOptionId: 'csc102-q130o2',
        topic: 'Lecture 6: Object-Oriented Programming (OOP)'
    },
    {
        id: 'csc102-q131',
        text: 'Python is a:',
        options: [
            { id: 'csc102-q131o1', text: 'Low-level programming language.' },
            { id: 'csc102-q131o2', text: 'High-level programming language.' },
            { id: 'csc102-q131o3', text: 'Machine language.' },
            { id: 'csc102-q131o4', text: 'Assembly language.' }
        ],
        correctOptionId: 'csc102-q131o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q132',
        text: 'Python was created by:',
        options: [
            { id: 'csc102-q132o1', text: 'Bill Gates' },
            { id: 'csc102-q132o2', text: 'James Gosling' },
            { id: 'csc102-q132o3', text: 'Guido van Rossum' },
            { id: 'csc102-q132o4', text: 'Dennis Ritchie' }
        ],
        correctOptionId: 'csc102-q132o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q133',
        text: 'Python was first released in:',
        options: [
            { id: 'csc102-q133o1', text: '1981' },
            { id: 'csc102-q133o2', text: '1991' },
            { id: 'csc102-q133o3', text: '2001' },
            { id: 'csc102-q133o4', text: '2011' }
        ],
        correctOptionId: 'csc102-q133o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q134',
        text: 'One of the main reasons to use Python is because it is:',
        options: [
            { id: 'csc102-q134o1', text: 'Complex and verbose.' },
            { id: 'csc102-q134o2', text: 'Simple to use and read.' },
            { id: 'csc102-q134o3', text: 'Only available on Windows.' },
            { id: 'csc102-q134o4', text: 'A low-level language.' }
        ],
        correctOptionId: 'csc102-q134o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q135',
        text: 'Python is an interpreted language, which means:',
        options: [
            { id: 'csc102-q135o1', text: 'It requires compilation before running.' },
            { id: 'csc102-q135o2', text: 'It is executed line by line, with no separate compilation needed.' },
            { id: 'csc102-q135o3', text: 'It is the same as Java.' },
            { id: 'csc102-q135o4', text: 'It cannot be used for web development.' }
        ],
        correctOptionId: 'csc102-q135o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q136',
        text: 'Python uses ______ to define the scope of loops, functions, and classes.',
        options: [
            { id: 'csc102-q136o1', text: 'Curly braces {}' },
            { id: 'csc102-q136o2', text: 'Parentheses ()' },
            { id: 'csc102-q136o3', text: 'Square brackets []' },
            { id: 'csc102-q136o4', text: 'Indentation (whitespace)' }
        ],
        correctOptionId: 'csc102-q136o4',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q137',
        text: 'Which of the following is a valid Python file extension?',
        options: [
            { id: 'csc102-q137o1', text: '.java' },
            { id: 'csc102-q137o2', text: '.cpp' },
            { id: 'csc102-q137o3', text: '.py' },
            { id: 'csc102-q137o4', text: '.cs' }
        ],
        correctOptionId: 'csc102-q137o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q138',
        text: 'What is the output of print("Hello, World!") in Python?',
        options: [
            { id: 'csc102-q138o1', text: 'Hello World' },
            { id: 'csc102-q138o2', text: '"Hello, World!"' },
            { id: 'csc102-q138o3', text: 'Hello, World!' },
            { id: 'csc102-q138o4', text: 'print(Hello, World!)' }
        ],
        correctOptionId: 'csc102-q138o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q139',
        text: 'How do you create a variable x with the value 5 in Python?',
        options: [
            { id: 'csc102-q139o1', text: 'var x = 5' },
            { id: 'csc102-q139o2', text: 'int x = 5' },
            { id: 'csc102-q139o3', text: 'x = 5' },
            { id: 'csc102-q139o4', text: 'x := 5' }
        ],
        correctOptionId: 'csc102-q139o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q140',
        text: 'Python variables are:',
        options: [
            { id: 'csc102-q140o1', text: 'Statically typed.' },
            { id: 'csc102-q140o2', text: 'Dynamically typed.' },
            { id: 'csc102-q140o3', text: 'Not allowed to change type.' },
            { id: 'csc102-q140o4', text: 'Declared with a specific keyword.' }
        ],
        correctOptionId: 'csc102-q140o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q141',
        text: 'What will be the data type of x after the execution of x = 5?',
        options: [
            { id: 'csc102-q141o1', text: 'str' },
            { id: 'csc102-q141o2', text: 'float' },
            { id: 'csc102-q141o3', text: 'int' },
            { id: 'csc102-q141o4', text: 'bool' }
        ],
        correctOptionId: 'csc102-q141o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q142',
        text: 'What will be the data type of x after the execution of x = "5"?',
        options: [
            { id: 'csc102-q142o1', text: 'int' },
            { id: 'csc102-q142o2', text: 'float' },
            { id: 'csc102-q142o3', text: 'str' },
            { id: 'csc102-q142o4', text: 'char' }
        ],
        correctOptionId: 'csc102-q142o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q143',
        text: 'Which function is used to get the data type of a variable?',
        options: [
            { id: 'csc102-q143o1', text: 'typeof()' },
            { id: 'csc102-q143o2', text: 'type()' },
            { id: 'csc102-q143o3', text: 'dtype()' },
            { id: 'csc102-q143o4', text: 'var_type()' }
        ],
        correctOptionId: 'csc102-q143o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q144',
        text: 'What is the output of print(type(10.5))?',
        options: [
            { id: 'csc102-q144o1', text: '<class \'int\'>' },
            { id: 'csc102-q144o2', text: '<class \'str\'>' },
            { id: 'csc102-q144o3', text: '<class \'float\'>' },
            { id: 'csc102-q144o4', text: '<class \'double\'>' }
        ],
        correctOptionId: 'csc102-q144o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q145',
        text: 'Casting in Python is done using:',
        options: [
            { id: 'csc102-q145o1', text: 'Constructor functions like int(), str(), float()' },
            { id: 'csc102-q145o2', text: 'The cast keyword' },
            { id: 'csc102-q145o3', text: 'The as keyword' },
            { id: 'csc102-q145o4', text: 'Special symbols' }
        ],
        correctOptionId: 'csc102-q145o1',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q146',
        text: 'What will y be after y = int(2.8)?',
        options: [
            { id: 'csc102-q146o1', text: '2.8' },
            { id: 'csc102-q146o2', text: '2' },
            { id: 'csc102-q146o3', text: '3' },
            { id: 'csc102-q146o4', text: 'An error' }
        ],
        correctOptionId: 'csc102-q146o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q147',
        text: 'What will z be after z = str(3.0)?',
        options: [
            { id: 'csc102-q147o1', text: '3' },
            { id: 'csc102-q147o2', text: '3.0' },
            { id: 'csc102-q147o3', text: '\'3.0\'' },
            { id: 'csc102-q147o4', text: 'An error' }
        ],
        correctOptionId: 'csc102-q147o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q148',
        text: 'Variable names in Python are:',
        options: [
            { id: 'csc102-q148o1', text: 'Case-insensitive' },
            { id: 'csc102-q148o2', text: 'Case-sensitive' },
            { id: 'csc102-q148o3', text: 'Always in uppercase' },
            { id: 'csc102-q148o4', text: 'Always in lowercase' }
        ],
        correctOptionId: 'csc102-q148o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q149',
        text: 'Which of the following is an illegal variable name in Python?',
        options: [
            { id: 'csc102-q149o1', text: 'my_var' },
            { id: 'csc102-q149o2', text: '_myvar' },
            { id: 'csc102-q149o3', text: '2myvar' },
            { id: 'csc102-q149o4', text: 'myVar2' }
        ],
        correctOptionId: 'csc102-q149o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q150',
        text: 'Which variable naming style uses underscores to separate words?',
        options: [
            { id: 'csc102-q150o1', text: 'Camel Case' },
            { id: 'csc102-q150o2', text: 'Pascal Case' },
            { id: 'csc102-q150o3', text: 'Snake Case' },
            { id: 'csc102-q150o4', text: 'Kebab Case' }
        ],
        correctOptionId: 'csc102-q150o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q151',
        text: 'How do you write a single-line comment in Python?',
        options: [
            { id: 'csc102-q151o1', text: '// This is a comment' },
            { id: 'csc102-q151o2', text: '/* This is a comment */' },
            { id: 'csc102-q151o3', text: '# This is a comment' },
            { id: 'csc102-q151o4', text: '-- This is a comment' }
        ],
        correctOptionId: 'csc102-q151o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q152',
        text: 'Which of the following is a Python numeric data type?',
        options: [
            { id: 'csc102-q152o1', text: 'string' },
            { id: 'csc102-q152o2', text: 'list' },
            { id: 'csc102-q152o3', text: 'int' },
            { id: 'csc102-q152o4', text: 'bool' }
        ],
        correctOptionId: 'csc102-q152o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q153',
        text: 'Which data type is used to store a sequence of characters?',
        options: [
            { id: 'csc102-q153o1', text: 'int' },
            { id: 'csc102-q153o2', text: 'float' },
            { id: 'csc102-q153o3', text: 'str' },
            { id: 'csc102-q153o4', text: 'list' }
        ],
        correctOptionId: 'csc102-q153o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q154',
        text: 'Which data type is ordered, changeable, and allows duplicate members?',
        options: [
            { id: 'csc102-q154o1', text: 'tuple' },
            { id: 'csc102-q154o2', text: 'set' },
            { id: 'csc102-q154o3', text: 'list' },
            { id: 'csc102-q154o4', text: 'dict' }
        ],
        correctOptionId: 'csc102-q154o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q155',
        text: 'Which data type is ordered, unchangeable, and allows duplicate members?',
        options: [
            { id: 'csc102-q155o1', text: 'list' },
            { id: 'csc102-q155o2', text: 'tuple' },
            { id: 'csc102-q155o3', text: 'set' },
            { id: 'csc102-q155o4', text: 'dict' }
        ],
        correctOptionId: 'csc102-q155o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q156',
        text: 'Which data type is unordered, unchangeable, and does not allow duplicates?',
        options: [
            { id: 'csc102-q156o1', text: 'list' },
            { id: 'csc102-q156o2', text: 'tuple' },
            { id: 'csc102-q156o3', text: 'set' },
            { id: 'csc102-q156o4', text: 'dict' }
        ],
        correctOptionId: 'csc102-q156o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q157',
        text: 'Which data type stores data in key-value pairs?',
        options: [
            { id: 'csc102-q157o1', text: 'list' },
            { id: 'csc102-q157o2', text: 'tuple' },
            { id: 'csc102-q157o3', text: 'set' },
            { id: 'csc102-q157o4', text: 'dict' }
        ],
        correctOptionId: 'csc102-q157o4',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q158',
        text: 'What is the output of print(10 > 9)?',
        options: [
            { id: 'csc102-q158o1', text: '10' },
            { id: 'csc102-q158o2', text: '9' },
            { id: 'csc102-q158o3', text: 'True' },
            { id: 'csc102-q158o4', text: 'False' }
        ],
        correctOptionId: 'csc102-q158o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q159',
        text: 'The + operator in Python can be used to:',
        options: [
            { id: 'csc102-q159o1', text: 'Add numbers and concatenate strings.' },
            { id: 'csc102-q159o2', text: 'Only add numbers.' },
            { id: 'csc102-q159o3', text: 'Only concatenate strings.' },
            { id: 'csc102-q159o4', text: 'Subtract numbers.' }
        ],
        correctOptionId: 'csc102-q159o1',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q160',
        text: 'Which operator is used for exponentiation?',
        options: [
            { id: 'csc102-q160o1', text: '^' },
            { id: 'csc102-q160o2', text: '**' },
            { id: 'csc102-q160o3', text: '%' },
            { id: 'csc102-q160o4', text: '//' }
        ],
        correctOptionId: 'csc102-q160o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q161',
        text: 'The % operator returns the:',
        options: [
            { id: 'csc102-q161o1', text: 'Percentage' },
            { id: 'csc102-q161o2', text: 'Division result' },
            { id: 'csc102-q161o3', text: 'Remainder' },
            { id: 'csc102-q161o4', text: 'Multiplication result' }
        ],
        correctOptionId: 'csc102-q161o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q162',
        text: 'The // operator performs:',
        options: [
            { id: 'csc102-q162o1', text: 'Normal division' },
            { id: 'csc102-q162o2', text: 'Floor division (returns integer quotient)' },
            { id: 'csc102-q162o3', text: 'Multiplication' },
            { id: 'csc102-q162o4', text: 'Commenting' }
        ],
        correctOptionId: 'csc102-q162o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q163',
        text: 'Which operator is used to check if two values are equal?',
        options: [
            { id: 'csc102-q163o1', text: '=' },
            { id: 'csc102-q163o2', text: '==' },
            { id: 'csc102-q163o3', text: '!=' },
            { id: 'csc102-q163o4', text: '<>' }
        ],
        correctOptionId: 'csc102-q163o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q164',
        text: 'The and keyword is a:',
        options: [
            { id: 'csc102-q164o1', text: 'Arithmetic operator' },
            { id: 'csc102-q164o2', text: 'Assignment operator' },
            { id: 'csc102-q164o3', text: 'Logical operator' },
            { id: 'csc102-q164o4', text: 'Identity operator' }
        ],
        correctOptionId: 'csc102-q164o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q165',
        text: 'The is operator is a(n):',
        options: [
            { id: 'csc102-q165o1', text: 'Arithmetic operator' },
            { id: 'csc102-q165o2', text: 'Assignment operator' },
            { id: 'csc102-q165o3', text: 'Identity operator' },
            { id: 'csc102-q165o4', text: 'Membership operator' }
        ],
        correctOptionId: 'csc102-q165o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q166',
        text: 'The in operator is a(n):',
        options: [
            { id: 'csc102-q166o1', text: 'Arithmetic operator' },
            { id: 'csc102-q166o2', text: 'Assignment operator' },
            { id: 'csc102-q166o3', text: 'Identity operator' },
            { id: 'csc102-q166o4', text: 'Membership operator' }
        ],
        correctOptionId: 'csc102-q166o4',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q167',
        text: 'How do you create a list in Python?',
        options: [
            { id: 'csc102-q167o1', text: 'list = {"apple", "banana", "cherry"}' },
            { id: 'csc102-q167o2', text: 'list = ("apple", "banana", "cherry")' },
            { id: 'csc102-q167o3', text: 'list = {"apple", "banana", "cherry"}' },
            { id: 'csc102-q167o4', text: 'list = ["apple", "banana", "cherry"]' }
        ],
        correctOptionId: 'csc102-q167o4',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q168',
        text: 'How do you create a tuple in Python?',
        options: [
            { id: 'csc102-q168o1', text: 'tuple = ["apple", "banana", "cherry"]' },
            { id: 'csc102-q168o2', text: 'tuple = ("apple", "banana", "cherry")' },
            { id: 'csc102-q168o3', text: 'tuple = {"apple", "banana", "cherry"}' },
            { id: 'csc102-q168o4', text: 'tuple = "apple", "banana", "cherry"' }
        ],
        correctOptionId: 'csc102-q168o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q169',
        text: 'How do you create a set in Python?',
        options: [
            { id: 'csc102-q169o1', text: 'set = ["apple", "banana", "cherry"]' },
            { id: 'csc102-q169o2', text: 'set = ("apple", "banana", "cherry")' },
            { id: 'csc102-q169o3', text: 'set = {"apple", "banana", "cherry"}' },
            { id: 'csc102-q169o4', text: 'set = "apple", "banana", "cherry"' }
        ],
        correctOptionId: 'csc102-q169o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q170',
        text: 'How do you create a dictionary in Python?',
        options: [
            { id: 'csc102-q170o1', text: 'dict = ["brand": "Ford", "model": "Mustang"]' },
            { id: 'csc102-q170o2', text: 'dict = ("brand": "Ford", "model": "Mustang")' },
            { id: 'csc102-q170o3', text: 'dict = {"brand": "Ford", "model": "Mustang"}' },
            { id: 'csc102-q170o4', text: 'dict = "brand"-"Ford", "model"-"Mustang"' }
        ],
        correctOptionId: 'csc102-q170o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q171',
        text: 'To determine how many items a list has, you use the:',
        options: [
            { id: 'csc102-q171o1', text: 'length() function' },
            { id: 'csc102-q171o2', text: 'count() function' },
            { id: 'csc102-q171o3', text: 'len() function' },
            { id: 'csc102-q171o4', text: 'size() function' }
        ],
        correctOptionId: 'csc102-q171o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q172',
        text: 'Which collection type is mutable?',
        options: [
            { id: 'csc102-q172o1', text: 'tuple' },
            { id: 'csc102-q172o2', text: 'list' },
            { id: 'csc102-q172o3', text: 'str' },
            { id: 'csc102-q172o4', text: 'frozenset' }
        ],
        correctOptionId: 'csc102-q172o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q173',
        text: 'What is the index of the first item in a list?',
        options: [
            { id: 'csc102-q173o1', text: '0' },
            { id: 'csc102-q173o2', text: '1' },
            { id: 'csc102-q173o3', text: '-1' },
            { id: 'csc102-q173o4', text: 'A' }
        ],
        correctOptionId: 'csc102-q173o1',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q174',
        text: 'Which method is used to add an item to the end of a list?',
        options: [
            { id: 'csc102-q174o1', text: 'append()' },
            { id: 'csc102-q174o2', text: 'add()' },
            { id: 'csc102-q174o3', text: 'insert()' },
            { id: 'csc102-q174o4', text: 'push()' }
        ],
        correctOptionId: 'csc102-q174o1',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q175',
        text: 'In a dictionary, you access elements using:',
        options: [
            { id: 'csc102-q175o1', text: 'An index number' },
            { id: 'csc102-q175o2', text: 'A key' },
            { id: 'csc102-q175o3', text: 'A value' },
            { id: 'csc102-q175o4', text: 'A random generator' }
        ],
        correctOptionId: 'csc102-q175o2',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q176',
        text: 'What will word[0] return if word = "Python"?',
        options: [
            { id: 'csc102-q176o1', text: '\'P\'' },
            { id: 'csc102-q176o2', text: '\'y\'' },
            { id: 'csc102-q176o3', text: '\'n\'' },
            { id: 'csc102-q176o4', text: '\'Python\'' }
        ],
        correctOptionId: 'csc102-q176o1',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q177',
        text: 'What will word[0:2] return if word = "Python"?',
        options: [
            { id: 'csc102-q177o1', text: '\'Py\'' },
            { id: 'csc102-q177o2', text: '\'Pyt\'' },
            { id: 'csc102-q177o3', text: '\'yth\'' },
            { id: 'csc102-q177o4', text: '\'Python\'' }
        ],
        correctOptionId: 'csc102-q177o1',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q178',
        text: 'The input() function in Python always returns data as what type?',
        options: [
            { id: 'csc102-q178o1', text: 'int' },
            { id: 'csc102-q178o2', text: 'float' },
            { id: 'csc102-q178o3', text: 'str' },
            { id: 'csc102-q178o4', text: 'list' }
        ],
        correctOptionId: 'csc102-q178o3',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q179',
        text: 'In the code num = float(input("Enter a number: ")), what is the purpose of float()?',
        options: [
            { id: 'csc102-q179o1', text: 'To convert the user\'s input string to a floating-point number.' },
            { id: 'csc102-q179o2', text: 'To print the number with decimal points.' },
            { id: 'csc102-q179o3', text: 'To create a list of numbers.' },
            { id: 'csc102-q179o4', text: 'To round the number down.' }
        ],
        correctOptionId: 'csc102-q179o1',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q180',
        text: 'Which of the following is the correct way to check if a variable a is greater than b in an if statement?',
        options: [
            { id: 'csc102-q180o1', text: 'if a > b:' },
            { id: 'csc102-q180o2', text: 'if (a > b)' },
            { id: 'csc102-q180o3', text: 'if a > b then' },
            { id: 'csc102-q180o4', text: 'if a greater than b:' }
        ],
        correctOptionId: 'csc102-q180o1',
        topic: 'Lecture 7: Python Programming'
    },
    {
        id: 'csc102-q181',
        text: 'The process of finding and fixing errors in a program is called:',
        options: [
            { id: 'csc102-q181o1', text: 'Compiling' },
            { id: 'csc102-q181o2', text: 'Interpreting' },
            { id: 'csc102-q181o3', text: 'Debugging' },
            { id: 'csc102-q181o4', text: 'Flowcharting' }
        ],
        correctOptionId: 'csc102-q181o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q182',
        text: 'Which of the following is the correct sequence for developing a software solution?',
        options: [
            { id: 'csc102-q182o1', text: 'Code -> Test -> Design Algorithm -> Understand Problem' },
            { id: 'csc102-q182o2', text: 'Understand Problem -> Design Algorithm -> Write Code -> Test' },
            { id: 'csc102-q182o3', text: 'Write Code -> Design Algorithm -> Understand Problem -> Test' },
            { id: 'csc102-q182o4', text: 'Test -> Write Code -> Understand Problem -> Design Algorithm' }
        ],
        correctOptionId: 'csc102-q182o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q183',
        text: 'A detailed flowchart is most helpful for:',
        options: [
            { id: 'csc102-q183o1', text: 'Giving a high-level overview to managers.' },
            { id: 'csc102-q183o2', text: 'Looking for problems or areas of inefficiency in a process.' },
            { id: 'csc102-q183o3', text: 'Writing the final user manual.' },
            { id: 'csc102-q183o4', text: 'Replacing the need for pseudocode.' }
        ],
        correctOptionId: 'csc102-q183o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q184',
        text: 'If you are assigned a grade of B+, what numerical value would be assigned to it in the provided example for calculating an average?',
        options: [
            { id: 'csc102-q184o1', text: '8' },
            { id: 'csc102-q184o2', text: '9' },
            { id: 'csc102-q184o3', text: '10' },
            { id: 'csc102-q184o4', text: '11' }
        ],
        correctOptionId: 'csc102-q184o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q185',
        text: 'The statement "An algorithm must be effective" implies that its operations must be:',
        options: [
            { id: 'csc102-q185o1', text: 'Complex and sophisticated.' },
            { id: 'csc102-q185o2', text: 'Doable by a person with pen and paper in a finite amount of time.' },
            { id: 'csc102-q185o3', text: 'Executable only on a computer.' },
            { id: 'csc102-q185o4', text: 'Written in a high-level language.' }
        ],
        correctOptionId: 'csc102-q185o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q186',
        text: 'Which Python collection would be the best choice to store the unique registration numbers of students?',
        options: [
            { id: 'csc102-q186o1', text: 'List' },
            { id: 'csc102-q186o2', text: 'Tuple' },
            { id: 'csc102-q186o3', text: 'Set' },
            { id: 'csc102-q186o4', text: 'Dictionary' }
        ],
        correctOptionId: 'csc102-q186o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q187',
        text: 'You are designing a program to manage a student\'s record, including their name, ID, and courses. Which Python data structure is most appropriate?',
        options: [
            { id: 'csc102-q187o1', text: 'A list of lists' },
            { id: 'csc102-q187o2', text: 'A dictionary with keys like \'name\', \'id\', \'courses\'' },
            { id: 'csc102-q187o3', text: 'A tuple of strings' },
            { id: 'csc102-q187o4', text: 'A set of student attributes' }
        ],
        correctOptionId: 'csc102-q187o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q188',
        text: 'In an OOP system for a library, a Book object would most likely have a method called:',
        options: [
            { id: 'csc102-q188o1', text: 'read()' },
            { id: 'csc102-q188o2', text: 'borrow()' },
            { id: 'csc102-q188o3', text: 'librarian()' },
            { id: 'csc102-q188o4', text: 'shelf()' }
        ],
        correctOptionId: 'csc102-q188o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q189',
        text: 'The Python code "Hello" + "World" will output:',
        options: [
            { id: 'csc102-q189o1', text: 'HelloWorld' },
            { id: 'csc102-q189o2', text: 'Hello World' },
            { id: 'csc102-q189o3', text: '"Hello"+"World"' },
            { id: 'csc102-q189o4', text: 'It will cause an error.' }
        ],
        correctOptionId: 'csc102-q189o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q190',
        text: 'What is the primary reason for using pseudocode before writing actual code?',
        options: [
            { id: 'csc102-q190o1', text: 'To make the code longer.' },
            { id: 'csc102-q190o2', text: 'To plan the program\'s logic without getting bogged down by syntax.' },
            { id: 'csc102-q190o3', text: 'Because the computer requires it.' },
            { id: 'csc102-q190o4', text: 'To impress other programmers.' }
        ],
        correctOptionId: 'csc102-q190o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q191',
        text: 'A flowchart symbol that has one entry point and two exit points is the:',
        options: [
            { id: 'csc102-q191o1', text: 'Process symbol' },
            { id: 'csc102-q191o2', text: 'Input/Output symbol' },
            { id: 'csc102-q191o3', text: 'Decision symbol' },
            { id: 'csc102-q191o4', text: 'Terminator symbol' }
        ],
        correctOptionId: 'csc102-q191o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q192',
        text: 'The Python code for i in range(5): will iterate how many times?',
        options: [
            { id: 'csc102-q192o1', text: '4' },
            { id: 'csc102-q192o2', text: '5' },
            { id: 'csc102-q192o3', text: '6' },
            { id: 'csc102-q192o4', text: 'It will cause an error.' }
        ],
        correctOptionId: 'csc102-q192o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q193',
        text: 'Which of these is a valid Python if statement structure?',
        options: [
            { id: 'csc102-q193o1', text: 'if x = 5:' },
            { id: 'csc102-q193o2', text: 'if x == 5:' },
            { id: 'csc102-q193o3', text: 'if x => 5:' },
            { id: 'csc102-q193o4', text: 'if x equals 5:' }
        ],
        correctOptionId: 'csc102-q193o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q194',
        text: 'The expression 2 + 3 * 4 in Python evaluates to:',
        options: [
            { id: 'csc102-q194o1', text: '20' },
            { id: 'csc102-q194o2', text: '14' },
            { id: 'csc102-q194o3', text: '24' },
            { id: 'csc102-q194o4', text: '9' }
        ],
        correctOptionId: 'csc102-q194o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q195',
        text: 'The expression (2 + 3) * 4 in Python evaluates to:',
        options: [
            { id: 'csc102-q195o1', text: '20' },
            { id: 'csc102-q195o2', text: '14' },
            { id: 'csc102-q195o3', text: '24' },
            { id: 'csc102-q195o4', text: '9' }
        ],
        correctOptionId: 'csc102-q195o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q196',
        text: 'A compiler is different from an interpreter because a compiler:',
        options: [
            { id: 'csc102-q196o1', text: 'Translates the entire source code at once.' },
            { id: 'csc102-q196o2', text: 'Translates and executes one line at a time.' },
            { id: 'csc102-q196o3', text: 'Is only used for Python.' },
            { id: 'csc102-q196o4', text: 'Is slower for program development.' }
        ],
        correctOptionId: 'csc102-q196o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q197',
        text: 'The term "IDE" stands for:',
        options: [
            { id: 'csc102-q197o1', text: 'Integrated Development Environment' },
            { id: 'csc102-q197o2', text: 'Internal Data Engine' },
            { id: 'csc102-q197o3', text: 'Interpreted Development Execution' },
            { id: 'csc102-q197o4', text: 'International Data Exchange' }
        ],
        correctOptionId: 'csc102-q197o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q198',
        text: 'Which of the following is a valid Python variable name?',
        options: [
            { id: 'csc102-q198o1', text: 'global' },
            { id: 'csc102-q198o2', text: '2nd_var' },
            { id: 'csc102-q198o3', text: 'my-variable' },
            { id: 'csc102-q198o4', text: '_private' }
        ],
        correctOptionId: 'csc102-q198o4',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q199',
        text: 'The ** operator in Python is used for:',
        options: [
            { id: 'csc102-q199o1', text: 'Multiplication' },
            { id: 'csc102-q199o2', text: 'Exponentiation' },
            { id: 'csc102-q199o3', text: 'Comments' },
            { id: 'csc102-q199o4', text: 'String repetition' }
        ],
        correctOptionId: 'csc102-q199o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q200',
        text: 'The += operator is an example of a(n):',
        options: [
            { id: 'csc102-q200o1', text: 'Arithmetic operator' },
            { id: 'csc102-q200o2', text: 'Assignment operator' },
            { id: 'csc102-q200o3', text: 'Comparison operator' },
            { id: 'csc102-q200o4', text: 'Logical operator' }
        ],
        correctOptionId: 'csc102-q200o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q201',
        text: 'The == operator is used to:',
        options: [
            { id: 'csc102-q201o1', text: 'Assign a value.' },
            { id: 'csc102-q201o2', text: 'Compare two values for equality.' },
            { id: 'csc102-q201o3', text: 'Declare a variable.' },
            { id: 'csc102-q201o4', text: 'Add two numbers.' }
        ],
        correctOptionId: 'csc102-q201o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q202',
        text: 'The != operator means:',
        options: [
            { id: 'csc102-q202o1', text: 'Equal to' },
            { id: 'csc102-q202o2', text: 'Not equal to' },
            { id: 'csc102-q202o3', text: 'Approximately equal to' },
            { id: 'csc102-q202o4', text: 'Less than' }
        ],
        correctOptionId: 'csc102-q202o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q203',
        text: 'The and operator returns True only if:',
        options: [
            { id: 'csc102-q203o1', text: 'Both operands are True.' },
            { id: 'csc102-q203o2', text: 'At least one operand is True.' },
            { id: 'csc102-q203o3', text: 'The first operand is True.' },
            { id: 'csc102-q203o4', text: 'Both operands are False.' }
        ],
        correctOptionId: 'csc102-q203o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q204',
        text: 'The or operator returns True if:',
        options: [
            { id: 'csc102-q204o1', text: 'Both operands are True.' },
            { id: 'csc102-q204o2', text: 'At least one operand is True.' },
            { id: 'csc102-q204o3', text: 'The first operand is True.' },
            { id: 'csc102-q204o4', text: 'Both operands are False.' }
        ],
        correctOptionId: 'csc102-q204o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q205',
        text: 'The not operator:',
        options: [
            { id: 'csc102-q205o1', text: 'Reverses the logical state of its operand.' },
            { id: 'csc102-q205o2', text: 'Adds two numbers.' },
            { id: 'csc102-q205o3', text: 'Concatenates two strings.' },
            { id: 'csc102-q205o4', text: 'Assigns a value to a variable.' }
        ],
        correctOptionId: 'csc102-q205o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q206',
        text: 'The is operator checks if two variables:',
        options: [
            { id: 'csc102-q206o1', text: 'Have the same value.' },
            { id: 'csc102-q206o2', text: 'Are the same object.' },
            { id: 'csc102-q206o3', text: 'Are both numbers.' },
            { id: 'csc102-q206o4', text: 'Are both strings.' }
        ],
        correctOptionId: 'csc102-q206o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q207',
        text: 'The in operator checks if a value:',
        options: [
            { id: 'csc102-q207o1', text: 'Exists in a sequence (like a list, tuple, or string).' },
            { id: 'csc102-q207o2', text: 'Is an integer.' },
            { id: 'csc102-q207o3', text: 'Is in the memory.' },
            { id: 'csc102-q207o4', text: 'Is defined.' }
        ],
        correctOptionId: 'csc102-q207o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q208',
        text: 'Which of the following creates a list containing the numbers 1, 2, and 3?',
        options: [
            { id: 'csc102-q208o1', text: 'list = (1, 2, 3)' },
            { id: 'csc102-q208o2', text: 'list = {1, 2, 3}' },
            { id: 'csc102-q208o3', text: 'list = [1, 2, 3]' },
            { id: 'csc102-q208o4', text: 'list = <1, 2, 3>' }
        ],
        correctOptionId: 'csc102-q208o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q209',
        text: 'Which of the following creates a tuple?',
        options: [
            { id: 'csc102-q209o1', text: 't = [1, 2, 3]' },
            { id: 'csc102-q209o2', text: 't = (1, 2, 3)' },
            { id: 'csc102-q209o3', text: 't = {1, 2, 3}' },
            { id: 'csc102-q209o4', text: 't = 1, 2, 3' }
        ],
        correctOptionId: 'csc102-q209o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q210',
        text: 'Which of the following creates a set?',
        options: [
            { id: 'csc102-q210o1', text: 's = [1, 2, 3]' },
            { id: 'csc102-q210o2', text: 's = (1, 2, 3)' },
            { id: 'csc102-q210o3', text: 's = {1, 2, 3}' },
            { id: 'csc102-q210o4', text: 's = <1, 2, 3>' }
        ],
        correctOptionId: 'csc102-q210o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q211',
        text: 'Which of the following creates a dictionary?',
        options: [
            { id: 'csc102-q211o1', text: 'd = [1: \'a\', 2: \'b\']' },
            { id: 'csc102-q211o2', text: 'd = (1: \'a\', 2: \'b\')' },
            { id: 'csc102-q211o3', text: 'd = {1: \'a\', 2: \'b\'}' },
            { id: 'csc102-q211o4', text: 'd = <1: \'a\', 2: \'b\'>' }
        ],
        correctOptionId: 'csc102-q211o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q212',
        text: 'To access the value associated with the key \'name\' in a dictionary person, you would use:',
        options: [
            { id: 'csc102-q212o1', text: 'person(\'name\')' },
            { id: 'csc102-q212o2', text: 'person[\'name\']' },
            { id: 'csc102-q212o3', text: 'person.name' },
            { id: 'csc102-q212o4', text: 'person->name' }
        ],
        correctOptionId: 'csc102-q212o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q213',
        text: 'The len() function, when applied to a dictionary, returns:',
        options: [
            { id: 'csc102-q213o1', text: 'The number of keys.' },
            { id: 'csc102-q213o2', text: 'The number of values.' },
            { id: 'csc102-q213o3', text: 'The number of key-value pairs.' },
            { id: 'csc102-q213o4', text: 'The length of the longest key.' }
        ],
        correctOptionId: 'csc102-q213o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q214',
        text: 'What is the output of "hello".upper()?',
        options: [
            { id: 'csc102-q214o1', text: '\'HELLO\'' },
            { id: 'csc102-q214o2', text: '\'Hello\'' },
            { id: 'csc102-q214o3', text: '\'hello\'' },
            { id: 'csc102-q214o4', text: 'An error' }
        ],
        correctOptionId: 'csc102-q214o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q215',
        text: 'What is the output of "Hello World".split()?',
        options: [
            { id: 'csc102-q215o1', text: '\'Hello\', \'World\'' },
            { id: 'csc102-q215o2', text: '[\'Hello\', \'World\']' },
            { id: 'csc102-q215o3', text: '\'H e l l o W o r l d\'' },
            { id: 'csc102-q215o4', text: '\'HelloWorld\'' }
        ],
        correctOptionId: 'csc102-q215o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q216',
        text: 'The range(5) function generates a sequence of numbers from:',
        options: [
            { id: 'csc102-q216o1', text: '0 to 5' },
            { id: 'csc102-q216o2', text: '1 to 5' },
            { id: 'csc102-q216o3', text: '0 to 4' },
            { id: 'csc102-q216o4', text: '1 to 4' }
        ],
        correctOptionId: 'csc102-q216o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q217',
        text: 'A while loop in Python is used when:',
        options: [
            { id: 'csc102-q217o1', text: 'You know the exact number of iterations.' },
            { id: 'csc102-q217o2', text: 'You want to iterate over a sequence (like a list).' },
            { id: 'csc102-q217o3', text: 'You want to repeat a block of code as long as a condition is true.' },
            { id: 'csc102-q217o4', text: 'You want to skip iterations.' }
        ],
        correctOptionId: 'csc102-q217o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q218',
        text: 'A for loop is typically used for:',
        options: [
            { id: 'csc102-q218o1', text: 'Iterating over a sequence (like a list, tuple, string, or range).' },
            { id: 'csc102-q218o2', text: 'Repeating a block of code indefinitely.' },
            { id: 'csc102-q218o3', text: 'Making decisions.' },
            { id: 'csc102-q218o4', text: 'Defining functions.' }
        ],
        correctOptionId: 'csc102-q218o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q219',
        text: 'The else clause in a loop is executed:',
        options: [
            { id: 'csc102-q219o1', text: 'Only if the loop condition is true.' },
            { id: 'csc102-q219o2', text: 'Only if the loop condition is false.' },
            { id: 'csc102-q219o3', text: 'After the loop completes normally (i.e., not terminated by a break).' },
            { id: 'csc102-q219o4', text: 'Before the loop starts.' }
        ],
        correctOptionId: 'csc102-q219o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q220',
        text: 'A function in Python is defined using the keyword:',
        options: [
            { id: 'csc102-q220o1', text: 'func' },
            { id: 'csc102-q220o2', text: 'def' },
            { id: 'csc102-q220o3', text: 'function' },
            { id: 'csc102-q220o4', text: 'define' }
        ],
        correctOptionId: 'csc102-q220o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q221',
        text: 'What keyword is used to return a value from a function?',
        options: [
            { id: 'csc102-q221o1', text: 'return' },
            { id: 'csc102-q221o2', text: 'break' },
            { id: 'csc102-q221o3', text: 'yield' },
            { id: 'csc102-q221o4', text: 'exit' }
        ],
        correctOptionId: 'csc102-q221o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q222',
        text: 'Parameters are:',
        options: [
            { id: 'csc102-q222o1', text: 'The values returned from a function.' },
            { id: 'csc102-q222o2', text: 'The variables listed in the function definition.' },
            { id: 'csc102-q222o3', text: 'The actual values passed to the function when it is called.' },
            { id: 'csc102-q222o4', text: 'The local variables inside a function.' }
        ],
        correctOptionId: 'csc102-q222o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q223',
        text: 'Arguments are:',
        options: [
            { id: 'csc102-q223o1', text: 'The values returned from a function.' },
            { id: 'csc102-q223o2', text: 'The variables listed in the function definition.' },
            { id: 'csc102-q223o3', text: 'The actual values passed to the function when it is called.' },
            { id: 'csc102-q223o4', text: 'The global variables used in a function.' }
        ],
        correctOptionId: 'csc102-q223o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q224',
        text: 'A module in Python is:',
        options: [
            { id: 'csc102-q224o1', text: 'A single file containing Python code (functions, classes, variables).' },
            { id: 'csc102-q224o2', text: 'A type of loop.' },
            { id: 'csc102-q224o3', text: 'A data structure.' },
            { id: 'csc102-q224o4', text: 'A programming paradigm.' }
        ],
        correctOptionId: 'csc102-q224o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q225',
        text: 'The import keyword is used to:',
        options: [
            { id: 'csc102-q225o1', text: 'Export a function.' },
            { id: 'csc102-q225o2', text: 'Include a module in your program.' },
            { id: 'csc102-q225o3', text: 'Define a class.' },
            { id: 'csc102-q225o4', text: 'Create a variable.' }
        ],
        correctOptionId: 'csc102-q225o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q226',
        text: 'Which of the following is a valid way to import a specific function sqrt from the math module?',
        options: [
            { id: 'csc102-q226o1', text: 'import math' },
            { id: 'csc102-q226o2', text: 'import sqrt from math' },
            { id: 'csc102-q226o3', text: 'from math import sqrt' },
            { id: 'csc102-q226o4', text: 'include math.sqrt' }
        ],
        correctOptionId: 'csc102-q226o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q227',
        text: 'Exception handling in Python is done using:',
        options: [
            { id: 'csc102-q227o1', text: 'if-else statements' },
            { id: 'csc102-q227o2', text: 'try-except blocks' },
            { id: 'csc102-q227o3', text: 'for loops' },
            { id: 'csc102-q227o4', text: 'while loops' }
        ],
        correctOptionId: 'csc102-q227o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q228',
        text: 'The pass statement in Python is used to:',
        options: [
            { id: 'csc102-q228o1', text: 'Terminate the program.' },
            { id: 'csc102-q228o2', text: 'Skip the current iteration of a loop.' },
            { id: 'csc102-q228o3', text: 'Do nothing; it\'s a placeholder.' },
            { id: 'csc102-q228o4', text: 'Pass arguments to a function.' }
        ],
        correctOptionId: 'csc102-q228o3',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q229',
        text: 'The break statement is used to:',
        options: [
            { id: 'csc102-q229o1', text: 'Exit the current loop prematurely.' },
            { id: 'csc102-q229o2', text: 'Skip the rest of the current iteration and continue with the next.' },
            { id: 'csc102-q229o3', text: 'Exit the program.' },
            { id: 'csc102-q229o4', text: 'Create a line break in the output.' }
        ],
        correctOptionId: 'csc102-q229o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q230',
        text: 'The continue statement is used to:',
        options: [
            { id: 'csc102-q230o1', text: 'Exit the current loop prematurely.' },
            { id: 'csc102-q230o2', text: 'Skip the rest of the current iteration and continue with the next.' },
            { id: 'csc102-q230o3', text: 'Exit the program.' },
            { id: 'csc102-q230o4', text: 'Continue with the next statement after the loop.' }
        ],
        correctOptionId: 'csc102-q230o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q231',
        text: 'A class in Python is defined using the keyword:',
        options: [
            { id: 'csc102-q231o1', text: 'class' },
            { id: 'csc102-q231o2', text: 'object' },
            { id: 'csc102-q231o3', text: 'def' },
            { id: 'csc102-q231o4', text: 'struct' }
        ],
        correctOptionId: 'csc102-q231o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q232',
        text: 'The __init__ method in a class is used for:',
        options: [
            { id: 'csc102-q232o1', text: 'Destroying the object.' },
            { id: 'csc102-q232o2', text: 'Initializing the object\'s attributes (constructor).' },
            { id: 'csc102-q232o3', text: 'Printing the object.' },
            { id: 'csc102-q232o4', text: 'Comparing two objects.' }
        ],
        correctOptionId: 'csc102-q232o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q233',
        text: 'The self parameter in a class method refers to:',
        options: [
            { id: 'csc102-q233o1', text: 'The class itself.' },
            { id: 'csc102-q233o2', text: 'The current object instance.' },
            { id: 'csc102-q233o3', text: 'The parent class.' },
            { id: 'csc102-q233o4', text: 'The module containing the class.' }
        ],
        correctOptionId: 'csc102-q233o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q234',
        text: 'Inheritance allows a class to:',
        options: [
            { id: 'csc102-q234o1', text: 'Inherit attributes and methods from another class.' },
            { id: 'csc102-q234o2', text: 'Inherit only attributes from another class.' },
            { id: 'csc102-q234o3', text: 'Inherit only methods from another class.' },
            { id: 'csc102-q234o4', text: 'Be inherited by multiple classes.' }
        ],
        correctOptionId: 'csc102-q234o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q235',
        text: 'The super() function is used to:',
        options: [
            { id: 'csc102-q235o1', text: 'Call a method from the parent class.' },
            { id: 'csc102-q235o2', text: 'Create a superclass.' },
            { id: 'csc102-q235o3', text: 'Make a class superior to others.' },
            { id: 'csc102-q235o4', text: 'Define a class.' }
        ],
        correctOptionId: 'csc102-q235o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q236',
        text: 'Polymorphism in OOP allows:',
        options: [
            { id: 'csc102-q236o1', text: 'Objects of different classes to be treated as objects of a common superclass.' },
            { id: 'csc102-q236o2', text: 'A class to have multiple __init__ methods.' },
            { id: 'csc102-q236o3', text: 'A class to inherit from multiple parents.' },
            { id: 'csc102-q236o4', text: 'Data to be hidden within a class.' }
        ],
        correctOptionId: 'csc102-q236o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q237',
        text: 'Encapsulation in OOP refers to:',
        options: [
            { id: 'csc102-q237o1', text: 'Bundling of data and methods that operate on that data within a single unit (class).' },
            { id: 'csc102-q237o2', text: 'Inheriting from a base class.' },
            { id: 'csc102-q237o3', text: 'The ability to take many forms.' },
            { id: 'csc102-q237o4', text: 'The process of creating multiple objects.' }
        ],
        correctOptionId: 'csc102-q237o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q238',
        text: 'A lambda function in Python is:',
        options: [
            { id: 'csc102-q238o1', text: 'A large, named function.' },
            { id: 'csc102-q238o2', text: 'A small, anonymous function.' },
            { id: 'csc102-q238o3', text: 'A function that is part of a class.' },
            { id: 'csc102-q238o4', text: 'A function that returns multiple values.' }
        ],
        correctOptionId: 'csc102-q238o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q239',
        text: 'The map() function in Python is used to:',
        options: [
            { id: 'csc102-q239o1', text: 'Apply a function to every item in an iterable.' },
            { id: 'csc102-q239o2', text: 'Filter items from an iterable based on a condition.' },
            { id: 'csc102-q239o3', text: 'Reduce an iterable to a single value.' },
            { id: 'csc102-q239o4', text: 'Create a dictionary.' }
        ],
        correctOptionId: 'csc102-q239o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q240',
        text: 'A list comprehension in Python is a concise way to:',
        options: [
            { id: 'csc102-q240o1', text: 'Create a list.' },
            { id: 'csc102-q240o2', text: 'Create a dictionary.' },
            { id: 'csc102-q240o3', text: 'Create a set.' },
            { id: 'csc102-q240o4', text: 'Create a tuple.' }
        ],
        correctOptionId: 'csc102-q240o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q241',
        text: 'The with statement in Python is commonly used for:',
        options: [
            { id: 'csc102-q241o1', text: 'Looping.' },
            { id: 'csc102-q241o2', text: 'Resource management (e.g., automatically closing files).' },
            { id: 'csc102-q241o3', text: 'Function definition.' },
            { id: 'csc102-q241o4', text: 'Class inheritance.' }
        ],
        correctOptionId: 'csc102-q241o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q242',
        text: 'The __name__ variable of a module is "__main__" if:',
        options: [
            { id: 'csc102-q242o1', text: 'The module is being imported.' },
            { id: 'csc102-q242o2', text: 'The module is being run as the main program.' },
            { id: 'csc102-q242o3', text: 'The module has a syntax error.' },
            { id: 'csc102-q242o4', text: 'The module is empty.' }
        ],
        correctOptionId: 'csc102-q242o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q243',
        text: 'The sys.argv list contains:',
        options: [
            { id: 'csc102-q243o1', text: 'The command-line arguments passed to the Python script.' },
            { id: 'csc102-q243o2', text: 'The system environment variables.' },
            { id: 'csc102-q243o3', text: 'The arguments of the current function.' },
            { id: 'csc102-q243o4', text: 'The list of all installed modules.' }
        ],
        correctOptionId: 'csc102-q243o1',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q244',
        text: 'The json.loads() function is used to:',
        options: [
            { id: 'csc102-q244o1', text: 'Convert a Python object to a JSON string.' },
            { id: 'csc102-q244o2', text: 'Convert a JSON string to a Python object.' },
            { id: 'csc102-q244o3', text: 'Load a JSON file from the disk.' },
            { id: 'csc102-q244o4', text: 'Save a Python object as a JSON file.' }
        ],
        correctOptionId: 'csc102-q244o2',
        topic: 'Mixed and Applied Concepts'
    },
    {
        id: 'csc102-q245',
        text: 'A virtual environment in Python is used to:',
        options: [
            { id: 'csc102-q245o1', text: 'Create an isolated environment for a project with its own dependencies.' },
            { id: 'csc102-q245o2', text: 'Run Python on a virtual machine for better performance.' },
            { id: 'csc102-q245o3', text: 'Develop virtual reality applications.' },
            { id: 'csc102-q245o4', text: 'Test network protocols.' }
        ],
        correctOptionId: 'csc102-q245o1',
        topic: 'Mixed and Applied Concepts'
    }
];
