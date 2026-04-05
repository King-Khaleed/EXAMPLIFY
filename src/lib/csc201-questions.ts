import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 'csc201-q1',
    text: 'Which of the following correctly describes the role of a compiler in C++ program development?',
    options: [
      { id: 'csc201-q1oA', text: 'It translates and executes the program one statement at a time' },
      { id: 'csc201-q1oB', text: 'It translates the entire source program into machine code at once, producing an executable' },
      { id: 'csc201-q1oC', text: 'It merges header files into the source code before translation' },
      { id: 'csc201-q1oD', text: 'It loads the executable into RAM for the CPU to run' }
    ],
    correctOptionId: 'csc201-q1oB',
    topic: 'Compilers vs Interpreters'
  },
  {
    id: 'csc201-q2',
    text: 'What is the correct order of the six phases of C++ program development?',
    options: [
      { id: 'csc201-q2oA', text: 'Edit → Compile → Preprocess → Link → Load → Execute' },
      { id: 'csc201-q2oB', text: 'Edit → Preprocess → Link → Compile → Load → Execute' },
      { id: 'csc201-q2oC', text: 'Edit → Preprocess → Compile → Link → Load → Execute' },
      { id: 'csc201-q2oD', text: 'Edit → Compile → Link → Preprocess → Execute → Load' }
    ],
    correctOptionId: 'csc201-q2oC',
    topic: 'Six Phases of C++ Program Development'
  },
  {
    id: 'csc201-q3',
    text: 'A student receives a "linker error" when building their C++ program. What does this most likely mean?',
    options: [
      { id: 'csc201-q3oA', text: 'The source code contains a syntax error such as a missing semicolon' },
      { id: 'csc201-q3oB', text: 'The preprocessor failed to find a header file' },
      { id: 'csc201-q3oC', text: 'The code compiled successfully but a referenced function or library is missing' },
      { id: 'csc201-q3oD', text: 'The operating system could not load the executable into RAM' }
    ],
    correctOptionId: 'csc201-q3oC',
    topic: 'Six Phases of C++ Program Development'
  },
  {
    id: 'csc201-q4',
    text: 'Which phase of C++ program development handles the #include and #define directives?',
    options: [
      { id: 'csc201-q4oA', text: 'Compilation' },
      { id: 'csc201-q4oB', text: 'Linking' },
      { id: 'csc201-q4oC', text: 'Loading' },
      { id: 'csc201-q4oD', text: 'Preprocessing' }
    ],
    correctOptionId: 'csc201-q4oD',
    topic: 'Six Phases of C++ Program Development'
  },
  {
    id: 'csc201-q5',
    text: 'Which of the following statements about programming language generations is CORRECT?',
    options: [
      { id: 'csc201-q5oA', text: 'Machine language uses symbolic mnemonics and is translated by an assembler' },
      { id: 'csc201-q5oB', text: 'High-level languages run directly on the CPU without translation' },
      { id: 'csc201-q5oC', text: 'Assembly language replaces binary with symbolic names and is translated by an assembler' },
      { id: 'csc201-q5oD', text: 'Fourth-generation languages are closer to machine code than high-level languages' }
    ],
    correctOptionId: 'csc201-q5oC',
    topic: 'Programming Languages & Their Levels'
  },
  {
    id: 'csc201-q6',
    text: 'What is the entry point of every C++ program — the function where execution always begins?',
    options: [
      { id: 'csc201-q6oA', text: 'start()' },
      { id: 'csc201-q6oB', text: 'begin()' },
      { id: 'csc201-q6oC', text: 'main()' },
      { id: 'csc201-q6oD', text: 'run()' }
    ],
    correctOptionId: 'csc201-q6oC',
    topic: 'C++ Program Syntax'
  },
  {
    id: 'csc201-q7',
    text: 'A student writes the following: cout >> "Hello"; — What is wrong with this statement?',
    options: [
      { id: 'csc201-q7oA', text: 'cout should be replaced with print' },
      { id: 'csc201-q7oB', text: 'The >> operator is the extraction operator and is used with cin, not cout; output uses <<' },
      { id: 'csc201-q7oC', text: 'String literals cannot be sent to cout directly' },
      { id: 'csc201-q7oD', text: 'A semicolon is missing at the end of the statement' }
    ],
    correctOptionId: 'csc201-q7oB',
    topic: 'C++ Program Syntax'
  },
  {
    id: 'csc201-q8',
    text: 'A student forgets a semicolon at the end of a statement. On which line does the compiler typically report the error?',
    options: [
      { id: 'csc201-q8oA', text: 'On the same line where the semicolon is missing' },
      { id: 'csc201-q8oB', text: 'On the line after the one where the semicolon is missing' },
      { id: 'csc201-q8oC', text: 'At the top of the file, in the #include directive' },
      { id: 'csc201-q8oD', text: 'No error is reported; the program still compiles' }
    ],
    correctOptionId: 'csc201-q8oB',
    topic: 'C++ Program Syntax'
  },
  {
    id: 'csc201-q9',
    text: 'Which of the following is the correct way to declare an integer variable named score and initialize it to 100?',
    options: [
      { id: 'csc201-q9oA', text: 'score = 100;' },
      { id: 'csc201-q9oB', text: 'integer score = 100;' },
      { id: 'csc201-q9oC', text: 'int score = 100;' },
      { id: 'csc201-q9oD', text: 'declare int score = 100;' }
    ],
    correctOptionId: 'csc201-q9oC',
    topic: 'Variables and Declarations'
  },
  {
    id: 'csc201-q10',
    text: 'What does the assignment operator (=) do in C++, and in which direction does it operate?',
    options: [
      { id: 'csc201-q10oA', text: 'It tests whether two values are equal; it operates left-to-right' },
      { id: 'csc201-q10oB', text: 'It stores a value in a variable; it evaluates the right side first and stores the result on the left' },
      { id: 'csc201-q10oC', text: 'It stores a value in a variable; it evaluates the left side first and stores the result on the right' },
      { id: 'csc201-q10oD', text: 'It compares two expressions and returns true or false' }
    ],
    correctOptionId: 'csc201-q10oB',
    topic: 'Variables and Declarations'
  },
  {
    id: 'csc201-q11',
    text: 'A variable is declared as short int counter. The programmer attempts to store the value 40,000 in it. What happens?',
    options: [
      { id: 'csc201-q11oA', text: 'The value is stored correctly because short int can hold up to 65,535' },
      { id: 'csc201-q11oB', text: 'The compiler automatically upgrades the type to int' },
      { id: 'csc201-q11oC', text: 'Integer overflow occurs and the result is an unexpected garbage value' },
      { id: 'csc201-q11oD', text: 'The value is truncated to 32,767 without any error' }
    ],
    correctOptionId: 'csc201-q11oC',
    topic: 'Integer Types'
  },
  {
    id: 'csc201-q12',
    text: 'Which C++ data type should be used to store the value 7,000,000,000 (seven billion)?',
    options: [
      { id: 'csc201-q12oA', text: 'int' },
      { id: 'csc201-q12oB', text: 'short int' },
      { id: 'csc201-q12oC', text: 'unsigned short' },
      { id: 'csc201-q12oD', text: 'long long int' }
    ],
    correctOptionId: 'csc201-q12oD',
    topic: 'Integer Types'
  },
  {
    id: 'csc201-q13',
    text: 'Why should floating-point types never be used for financial calculations without special handling?',
    options: [
      { id: 'csc201-q13oA', text: 'Because float and double cannot store negative numbers' },
      { id: 'csc201-q13oB', text: 'Because floating-point numbers are stored as approximations in binary, causing precision errors such as 0.1 + 0.2 ≠ 0.3' },
      { id: 'csc201-q13oC', text: 'Because floating-point arithmetic is slower than integer arithmetic' },
      { id: 'csc201-q13oD', text: 'Because the % operator does not work with floating-point types' }
    ],
    correctOptionId: 'csc201-q13oB',
    topic: 'Floating-Point Types'
  },
  {
    id: 'csc201-q14',
    text: 'What is the output of the following C++ statement: bool signal = false; signal = true; cout << signal;',
    options: [
      { id: 'csc201-q14oA', text: 'true' },
      { id: 'csc201-q14oB', text: 'false' },
      { id: 'csc201-q14oC', text: '1' },
      { id: 'csc201-q14oD', text: '0' }
    ],
    correctOptionId: 'csc201-q14oC',
    topic: 'The Boolean Type'
  },
  {
    id: 'csc201-q15',
    text: 'What is the internal ASCII value stored when you declare: char c = \'A\';?',
    options: [
      { id: 'csc201-q15oA', text: '0' },
      { id: 'csc201-q15oB', text: '65' },
      { id: 'csc201-q15oC', text: '97' },
      { id: 'csc201-q15oD', text: '1' }
    ],
    correctOptionId: 'csc201-q15oB',
    topic: 'The Character Type and Enumeration'
  },
  {
    id: 'csc201-q16',
    text: 'Given: enum semester {first, second, summer}; — what integer values do first, second, and summer map to respectively?',
    options: [
      { id: 'csc201-q16oA', text: '1, 2, 3' },
      { id: 'csc201-q16oB', text: '0, 1, 2' },
      { id: 'csc201-q16oC', text: '0, 2, 4' },
      { id: 'csc201-q16oD', text: 'Depends on the compiler; enum values are undefined by default' }
    ],
    correctOptionId: 'csc201-q16oB',
    topic: 'The Character Type and Enumeration'
  },
  {
    id: 'csc201-q17',
    text: 'Which of the following is WRONG about preprocessor directives?',
    options: [
      { id: 'csc201-q17oA', text: 'All preprocessor directives begin with the # symbol' },
      { id: 'csc201-q17oB', text: 'Preprocessor directives are processed before the compiler sees the source code' },
      { id: 'csc201-q17oC', text: 'Preprocessor directives must end with a semicolon' },
      { id: 'csc201-q17oD', text: '#include merges the contents of another file into the source code' }
    ],
    correctOptionId: 'csc201-q17oC',
    topic: 'Preprocessor Directives'
  },
  {
    id: 'csc201-q18',
    text: 'When should you use double quotes ("") instead of angle brackets (<>) with the #include directive?',
    options: [
      { id: 'csc201-q18oA', text: 'When including system library headers like iostream' },
      { id: 'csc201-q18oB', text: 'When including files located in your own project directory' },
      { id: 'csc201-q18oC', text: 'When the file is larger than a standard header' },
      { id: 'csc201-q18oD', text: 'Double quotes and angle brackets are completely interchangeable' }
    ],
    correctOptionId: 'csc201-q18oB',
    topic: 'Preprocessor Directives'
  },
  {
    id: 'csc201-q19',
    text: 'Given: #define X 2+3 — what is the result of evaluating X*X?',
    options: [
      { id: 'csc201-q19oA', text: '25' },
      { id: 'csc201-q19oB', text: '10' },
      { id: 'csc201-q19oC', text: '11' },
      { id: 'csc201-q19oD', text: '13' }
    ],
    correctOptionId: 'csc201-q19oC',
    topic: 'Preprocessor Directives'
  },
  {
    id: 'csc201-q20',
    text: 'How do you fix the expression problem caused by #define X 2+3 so that X*X correctly evaluates to 25?',
    options: [
      { id: 'csc201-q20oA', text: '#define X [2+3]' },
      { id: 'csc201-q20oB', text: '#define X (2+3)' },
      { id: 'csc201-q20oC', text: '#define X {2+3}' },
      { id: 'csc201-q20oD', text: '#define X = 2+3' }
    ],
    correctOptionId: 'csc201-q20oB',
    topic: 'Preprocessor Directives'
  },
  {
    id: 'csc201-q21',
    text: 'Which header file must be included to use the setw() and setprecision() formatting functions?',
    options: [
      { id: 'csc201-q21oA', text: '<iostream>' },
      { id: 'csc201-q21oB', text: '<stdio.h>' },
      { id: 'csc201-q21oC', text: '<iomanip.h>' },
      { id: 'csc201-q21oD', text: '<string.h>' }
    ],
    correctOptionId: 'csc201-q21oC',
    topic: 'Input / Output'
  },
  {
    id: 'csc201-q22',
    text: 'What does setw(5) do when used with cout, and how long does its effect last?',
    options: [
      { id: 'csc201-q22oA', text: 'It sets 5 decimal places for all subsequent floating-point output' },
      { id: 'csc201-q22oB', text: 'It right-aligns the next output value in a field of 5 characters, affecting only the immediately following value' },
      { id: 'csc201-q22oC', text: 'It left-aligns all output in a field of 5 characters for the rest of the program' },
      { id: 'csc201-q22oD', text: 'It limits all integer output to a maximum of 5 digits' }
    ],
    correctOptionId: 'csc201-q22oB',
    topic: 'Input / Output'
  },
  {
    id: 'csc201-q23',
    text: 'What is the output of: printf("I am %d years old and earn %f\\n", 25, 50000.00);?',
    options: [
      { id: 'csc201-q23oA', text: 'I am 25 years old and earn 50000' },
      { id: 'csc201-q23oB', text: 'I am %d years old and earn %f' },
      { id: 'csc201-q23oC', text: 'I am 25 years old and earn 50000.000000' },
      { id: 'csc201-q23oD', text: 'Compile error: mismatched format specifiers' }
    ],
    correctOptionId: 'csc201-q23oC',
    topic: 'Input / Output'
  },
  {
    id: 'csc201-q24',
    text: 'Which conversion character is used in printf()/scanf() to represent a single character?',
    options: [
      { id: 'csc201-q24oA', text: '%s' },
      { id: 'csc201-q24oB', text: '%d' },
      { id: 'csc201-q24oC', text: '%f' },
      { id: 'csc201-q24oD', text: '%c' }
    ],
    correctOptionId: 'csc201-q24oD',
    topic: 'Input / Output'
  },
  {
    id: 'csc201-q25',
    text: 'A student writes: scanf("%f", total_sale); — the program crashes. What is the most likely cause?',
    options: [
      { id: 'csc201-q25oA', text: 'scanf() cannot read floating-point numbers; use cin instead' },
      { id: 'csc201-q25oB', text: 'The & address-of operator is missing before total_sale; scanf() needs the memory address of the variable' },
      { id: 'csc201-q25oC', text: '%f should be %d for reading a float' },
      { id: 'csc201-q25oD', text: 'stdio.h has not been included' }
    ],
    correctOptionId: 'csc201-q25oB',
    topic: 'Input / Output'
  },
  {
    id: 'csc201-q26',
    text: 'What is the result of the integer division expression 7 / 2 in C++?',
    options: [
      { id: 'csc201-q26oA', text: '3.5' },
      { id: 'csc201-q26oB', text: '4' },
      { id: 'csc201-q26oC', text: '3' },
      { id: 'csc201-q26oD', text: '0' }
    ],
    correctOptionId: 'csc201-q26oC',
    topic: 'Operators'
  },
  {
    id: 'csc201-q27',
    text: 'What is the result of 11 % 3 in C++?',
    options: [
      { id: 'csc201-q27oA', text: '3' },
      { id: 'csc201-q27oB', text: '3.67' },
      { id: 'csc201-q27oC', text: '1' },
      { id: 'csc201-q27oD', text: '2' }
    ],
    correctOptionId: 'csc201-q27oD',
    topic: 'Operators'
  },
  {
    id: 'csc201-q28',
    text: 'How can the modulo operator (%) be used to determine whether an integer n is even?',
    options: [
      { id: 'csc201-q28oA', text: 'n % 2 == 1' },
      { id: 'csc201-q28oB', text: 'n / 2 == 0' },
      { id: 'csc201-q28oC', text: 'n % 2 == 0' },
      { id: 'csc201-q28oD', text: 'n % 0 == 2' }
    ],
    correctOptionId: 'csc201-q28oC',
    topic: 'Operators'
  },
  {
    id: 'csc201-q29',
    text: 'Given: int x = 5; int y = x++; — what are the values of x and y after these statements?',
    options: [
      { id: 'csc201-q29oA', text: 'x = 5, y = 5' },
      { id: 'csc201-q29oB', text: 'x = 6, y = 6' },
      { id: 'csc201-q29oC', text: 'x = 6, y = 5' },
      { id: 'csc201-q29oD', text: 'x = 5, y = 6' }
    ],
    correctOptionId: 'csc201-q29oC',
    topic: 'Operators'
  },
  {
    id: 'csc201-q30',
    text: 'Given: int x = 5; int y = ++x; — what are the values of x and y after these statements?',
    options: [
      { id: 'csc201-q30oA', text: 'x = 5, y = 5' },
      { id: 'csc201-q30oB', text: 'x = 6, y = 6' },
      { id: 'csc201-q30oC', text: 'x = 6, y = 5' },
      { id: 'csc201-q30oD', text: 'x = 5, y = 6' }
    ],
    correctOptionId: 'csc201-q30oB',
    topic: 'Operators'
  },
  {
    id: 'csc201-q31',
    text: 'What is the result of a += 5; if a was initially 3?',
    options: [
      { id: 'csc201-q31oA', text: 'a = 5' },
      { id: 'csc201-q31oB', text: 'a = 3' },
      { id: 'csc201-q31oC', text: 'a = 15' },
      { id: 'csc201-q31oD', text: 'a = 8' }
    ],
    correctOptionId: 'csc201-q31oD',
    topic: 'Operators'
  },
  {
    id: 'csc201-q32',
    text: 'Evaluate the logical expression: (5 > 3 && 2 > 4)',
    options: [
      { id: 'csc201-q32oA', text: 'true, because the first condition is true' },
      { id: 'csc201-q32oB', text: 'false, because both conditions must be true for && and the second is false' },
      { id: 'csc201-q32oC', text: 'true, because at least one condition is true' },
      { id: 'csc201-q32oD', text: 'Compile error: mixed relational and logical operators' }
    ],
    correctOptionId: 'csc201-q32oB',
    topic: 'Operators'
  },
  {
    id: 'csc201-q33',
    text: 'What does the ternary operator expression c = (a > b) ? a : b; do?',
    options: [
      { id: 'csc201-q33oA', text: 'Assigns the smaller of a and b to c' },
      { id: 'csc201-q33oB', text: 'Tests if c equals a or b' },
      { id: 'csc201-q33oC', text: 'Assigns the larger of a and b to c' },
      { id: 'csc201-q33oD', text: 'Swaps the values of a and b and stores the result in c' }
    ],
    correctOptionId: 'csc201-q33oC',
    topic: 'Operators'
  },
  {
    id: 'csc201-q34',
    text: 'What is the result of: int i; float f = 3.9; i = (int)f; — what value does i hold?',
    options: [
      { id: 'csc201-q34oA', text: '4 (rounded up)' },
      { id: 'csc201-q34oB', text: '3 (truncated)' },
      { id: 'csc201-q34oC', text: '3.9' },
      { id: 'csc201-q34oD', text: 'Compile error: cannot cast float to int' }
    ],
    correctOptionId: 'csc201-q34oB',
    topic: 'Operators'
  },
  {
    id: 'csc201-q35',
    text: 'What does sizeof(int) typically return on a modern system?',
    options: [
      { id: 'csc201-q35oA', text: '1' },
      { id: 'csc201-q35oB', text: '2' },
      { id: 'csc201-q35oC', text: '4' },
      { id: 'csc201-q35oD', text: '8' }
    ],
    correctOptionId: 'csc201-q35oC',
    topic: 'Operators'
  },
  {
    id: 'csc201-q36',
    text: 'A student declares: char name[5] = "Michael"; — what is the problem?',
    options: [
      { id: 'csc201-q36oA', text: 'char arrays cannot be initialized with string literals' },
      { id: 'csc201-q36oB', text: 'The array size 5 is too small; "Michael" has 7 characters plus a null terminator requiring at least 8 slots' },
      { id: 'csc201-q36oC', text: 'String literals require double square brackets, not single' },
      { id: 'csc201-q36oD', text: 'No problem; C++ automatically resizes the array to fit the string' }
    ],
    correctOptionId: 'csc201-q36oB',
    topic: 'Character Arrays and Strings'
  },
  {
    id: 'csc201-q37',
    text: 'Given: char horse[] = "Stallion"; — what character is stored at horse[0] and horse[8]?',
    options: [
      { id: 'csc201-q37oA', text: 'horse[0] = \'S\', horse[8] = \'n\'' },
      { id: 'csc201-q37oB', text: 'horse[0] = \'S\', horse[8] = \'\\0\'' },
      { id: 'csc201-q37oC', text: 'horse[0] = \'h\', horse[8] = \'\\0\'' },
      { id: 'csc201-q37oD', text: 'horse[0] = \'S\', horse[8] does not exist' }
    ],
    correctOptionId: 'csc201-q37oB',
    topic: 'Character Arrays and Strings'
  },
  {
    id: 'csc201-q38',
    text: 'What is the null terminator, and why is it critical for C++ string handling?',
    options: [
      { id: 'csc201-q38oA', text: 'It is the space character (ASCII 32) that separates words in a string' },
      { id: 'csc201-q38oB', text: 'It is the \'\\0\' character (ASCII 0) that signals the end of a string; without it, string functions read garbage beyond the array' },
      { id: 'csc201-q38oC', text: 'It is the newline character (\'\\n\') that terminates each line of output' },
      { id: 'csc201-q38oD', text: 'It is a compiler directive that marks the end of a character array declaration' }
    ],
    correctOptionId: 'csc201-q38oB',
    topic: 'Character Arrays and Strings'
  },
  {
    id: 'csc201-q39',
    text: 'After declaring char name[20];, a student writes: name = "Alice"; — why does this cause a compile error?',
    options: [
      { id: 'csc201-q39oA', text: 'The name array is too large for the string "Alice"' },
      { id: 'csc201-q39oB', text: 'You cannot assign a new string to a character array after declaration using =; use strcpy() instead' },
      { id: 'csc201-q39oC', text: 'String literals must be enclosed in single quotes, not double quotes' },
      { id: 'csc201-q39oD', text: 'The variable name conflicts with a reserved keyword' }
    ],
    correctOptionId: 'csc201-q39oB',
    topic: 'Character Arrays and Strings'
  },
  {
    id: 'csc201-q40',
    text: 'Which function from string.h is used to assign a new string value to a character array after declaration?',
    options: [
      { id: 'csc201-q40oA', text: 'strcat()' },
      { id: 'csc201-q40oB', text: 'strlen()' },
      { id: 'csc201-q40oC', text: 'strcpy()' },
      { id: 'csc201-q40oD', text: 'strcmp()' }
    ],
    correctOptionId: 'csc201-q40oC',
    topic: 'Character Arrays and Strings'
  },
  {
    id: 'csc201-q41',
    text: 'What is the difference between a character array and a string in C++?',
    options: [
      { id: 'csc201-q41oA', text: 'There is no difference; all character arrays are strings' },
      { id: 'csc201-q41oB', text: 'A string is a character array that ends with a null terminator (\'\\0\'); not all character arrays have this' },
      { id: 'csc201-q41oC', text: 'A character array can only hold one character; a string holds multiple' },
      { id: 'csc201-q41oD', text: 'Strings use single quotes while character arrays use double quotes' }
    ],
    correctOptionId: 'csc201-q41oB',
    topic: 'Character Arrays and Strings'
  },
  {
    id: 'csc201-q42',
    text: 'Which of the following if statement usages is INCORRECT according to C++ best practices?',
    options: [
      { id: 'csc201-q42oA', text: 'if (x > 0) { a = 1; b = 2; }' },
      { id: 'csc201-q42oB', text: 'if (n % 2 != 0) { cout << "odd"; }' },
      { id: 'csc201-q42oC', text: 'if (x > 0) a = 1; b = 2;' },
      { id: 'csc201-q42oD', text: 'if (flag == true) { cout << "active"; }' }
    ],
    correctOptionId: 'csc201-q42oC',
    topic: 'Selection Statements'
  },
  {
    id: 'csc201-q43',
    text: 'A student writes: if (x = 5) { cout << "five"; } — what is the bug in this code?',
    options: [
      { id: 'csc201-q43oA', text: 'The condition uses = (assignment), which always sets x to 5 and evaluates as true, rather than == (equality test)' },
      { id: 'csc201-q43oB', text: 'The if statement is missing an else clause' },
      { id: 'csc201-q43oC', text: 'Integer 5 cannot be used as a condition; use a boolean expression' },
      { id: 'csc201-q43oD', text: 'There is no bug; this is valid C++ that checks if x equals 5' }
    ],
    correctOptionId: 'csc201-q43oA',
    topic: 'Selection Statements'
  },
  {
    id: 'csc201-q44',
    text: 'In an if...else statement, how many of the two code blocks can execute for a single evaluation of the condition?',
    options: [
      { id: 'csc201-q44oA', text: 'Both blocks always execute' },
      { id: 'csc201-q44oB', text: 'Neither block executes if the condition is ambiguous' },
      { id: 'csc201-q44oC', text: 'Exactly one block executes — either the if block or the else block, never both' },
      { id: 'csc201-q44oD', text: 'It depends on the compiler; behavior is undefined' }
    ],
    correctOptionId: 'csc201-q44oC',
    topic: 'Selection Statements'
  },
  {
    id: 'csc201-q45',
    text: 'What is the scope of a variable declared inside a statement block (enclosed by {})?',
    options: [
      { id: 'csc201-q45oA', text: 'The variable exists throughout the entire program from that point forward' },
      { id: 'csc201-q45oB', text: 'The variable exists from its declaration to the closing } of the block in which it was declared' },
      { id: 'csc201-q45oC', text: 'The variable exists only on the single line where it is declared' },
      { id: 'csc201-q45oD', text: 'The variable exists for the duration of the function but not outside it' }
    ],
    correctOptionId: 'csc201-q45oB',
    topic: 'Selection Statements'
  },
  {
    id: 'csc201-q46',
    text: 'What happens in a switch statement when the break keyword is omitted from a case block?',
    options: [
      { id: 'csc201-q46oA', text: 'The switch statement exits immediately after the matched case' },
      { id: 'csc201-q46oB', text: 'A compile error occurs because break is required' },
      { id: 'csc201-q46oC', text: 'Execution falls through to the next case and continues until a break or the end of the switch is reached' },
      { id: 'csc201-q46oD', text: 'The default block executes instead of the matched case' }
    ],
    correctOptionId: 'csc201-q46oC',
    topic: 'Selection Statements'
  },
  {
    id: 'csc201-q47',
    text: 'When is the default block in a switch statement executed?',
    options: [
      { id: 'csc201-q47oA', text: 'Always, regardless of whether any case matches' },
      { id: 'csc201-q47oB', text: 'Only when the switch expression is zero' },
      { id: 'csc201-q47oC', text: 'Only when no case label matches the switch expression' },
      { id: 'csc201-q47oD', text: 'When the break keyword is present in the preceding case' }
    ],
    correctOptionId: 'csc201-q47oC',
    topic: 'Selection Statements'
  },
  {
    id: 'csc201-q48',
    text: 'Consider: if (d != 0 && n % d == 0). Why is the order of these conditions important?',
    options: [
      { id: 'csc201-q48oA', text: 'It is not important; && evaluates both sides simultaneously' },
      { id: 'csc201-q48oB', text: 'Due to short-circuit evaluation, if d != 0 is false, the modulo operation is never attempted, preventing a division-by-zero crash' },
      { id: 'csc201-q48oC', text: 'The modulo must be checked first to ensure d is not zero' },
      { id: 'csc201-q48oD', text: 'Reversing the order would cause a linker error' }
    ],
    correctOptionId: 'csc201-q48oB',
    topic: 'Selection Statements'
  },
  {
    id: 'csc201-q49',
    text: 'In short-circuit evaluation of the expression A || B, when is B NOT evaluated?',
    options: [
      { id: 'csc201-q49oA', text: 'When A is false' },
      { id: 'csc201-q49oB', text: 'When B is false' },
      { id: 'csc201-q49oC', text: 'When A is true' },
      { id: 'csc201-q49oD', text: 'Never; || always evaluates both sides' }
    ],
    correctOptionId: 'csc201-q49oC',
    topic: 'Selection Statements'
  },
  {
    id: 'csc201-q50',
    text: 'What is the key advantage of an interpreter over a compiler during program development?',
    options: [
      { id: 'csc201-q50oA', text: 'Interpreted programs run faster at runtime because translation is done once' },
      { id: 'csc201-q50oB', text: 'Interpreters produce standalone executables that do not need the interpreter to run' },
      { id: 'csc201-q50oC', text: 'Interpreters are easier to debug interactively because they execute one line at a time and report errors immediately' },
      { id: 'csc201-q50oD', text: 'Interpreters fully optimize the code before execution, producing faster programs' }
    ],
    correctOptionId: 'csc201-q50oC',
    topic: 'Compilers vs Interpreters'
  },
  {
    id: 'csc201-q51',
    text: 'A student uses cin to read a full name entered as "John Doe". Only "John" is stored. What is the correct fix?',
    options: [
      { id: 'csc201-q51oA', text: 'Use scanf() with %s instead of cin' },
      { id: 'csc201-q51oB', text: 'Use getline() to read the entire line including spaces' },
      { id: 'csc201-q51oC', text: 'Declare the variable as a double instead of a char array' },
      { id: 'csc201-q51oD', text: 'Use cin with the >> operator twice to capture first and last names separately into one variable' }
    ],
    correctOptionId: 'csc201-q51oB',
    topic: 'Input / Output'
  },
  {
    id: 'csc201-q52',
    text: 'What does the #define directive do at the preprocessor stage?',
    options: [
      { id: 'csc201-q52oA', text: 'It declares a typed constant variable in memory' },
      { id: 'csc201-q52oB', text: 'It performs a text search-and-replace of the defined name with its value throughout the source code before compilation' },
      { id: 'csc201-q52oC', text: 'It links an external library function into the program' },
      { id: 'csc201-q52oD', text: 'It defines a new data type for use in variable declarations' }
    ],
    correctOptionId: 'csc201-q52oB',
    topic: 'Preprocessor Directives'
  },
  {
    id: 'csc201-q53',
    text: 'Trace the following code: a = 10; b = 4; a = b; b = 7; — what are the final values of a and b?',
    options: [
      { id: 'csc201-q53oA', text: 'a = 10, b = 4' },
      { id: 'csc201-q53oB', text: 'a = 4, b = 7' },
      { id: 'csc201-q53oC', text: 'a = 7, b = 4' },
      { id: 'csc201-q53oD', text: 'a = 4, b = 4' }
    ],
    correctOptionId: 'csc201-q53oB',
    topic: 'Operators'
  },
  {
    id: 'csc201-q54',
    text: 'Which of the following is the correct minimum array size to declare for storing the string "Hello" with its null terminator?',
    options: [
      { id: 'csc201-q54oA', text: 'char greeting[4];' },
      { id: 'csc201-q54oB', text: 'char greeting[5];' },
      { id: 'csc201-q54oC', text: 'char greeting[6];' },
      { id: 'csc201-q54oD', text: 'char greeting[3];' }
    ],
    correctOptionId: 'csc201-q54oC',
    topic: 'Character Arrays and Strings'
  },
  {
    id: 'csc201-q55',
    text: 'What is an algorithm, and which three properties must every valid algorithm have?',
    options: [
      { id: 'csc201-q55oA', text: 'A programming language syntax rule; it must be typed, compiled, and linked' },
      { id: 'csc201-q55oB', text: 'A precise step-by-step problem-solving procedure; it must be finite, unambiguous, and effective' },
      { id: 'csc201-q55oC', text: 'A C++ function; it must have a return type, a name, and parameters' },
      { id: 'csc201-q55oD', text: 'A preprocessor directive; it must start with #, have a name, and end without a semicolon' }
    ],
    correctOptionId: 'csc201-q55oB',
    topic: 'Course Overview'
  }
];