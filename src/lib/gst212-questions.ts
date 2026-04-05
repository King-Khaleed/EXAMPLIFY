import type { Question } from './types';

export const questions: Question[] = [
{
id: 'gst212-q1',
text: 'What does the word "philosophy" literally mean?',
options: [
{ id: 'gst212-q1oA', text: 'Study of the universe' },
{ id: 'gst212-q1oB', text: 'Love of wisdom' },
{ id: 'gst212-q1oC', text: 'Science of reasoning' },
{ id: 'gst212-q1oD', text: 'Knowledge of nature' }
],
correctOptionId: 'gst212-q1oB',
topic: 'Meaning and Nature of Philosophy'
},
{
id: 'gst212-q2',
text: 'Which branch of philosophy is primarily concerned with the nature of knowledge and how we acquire it?',
options: [
{ id: 'gst212-q2oA', text: 'Metaphysics' },
{ id: 'gst212-q2oB', text: 'Aesthetics' },
{ id: 'gst212-q2oC', text: 'Epistemology' },
{ id: 'gst212-q2oD', text: 'Ethics' }
],
correctOptionId: 'gst212-q2oC',
topic: 'Branches of Philosophy'
},
{
id: 'gst212-q3',
text: 'A student asks: "What is real? Does the external world truly exist?" Which branch of philosophy best addresses this question?',
options: [
{ id: 'gst212-q3oA', text: 'Ethics' },
{ id: 'gst212-q3oB', text: 'Logic' },
{ id: 'gst212-q3oC', text: 'Aesthetics' },
{ id: 'gst212-q3oD', text: 'Metaphysics' }
],
correctOptionId: 'gst212-q3oD',
topic: 'Branches of Philosophy'
},
{
id: 'gst212-q4',
text: 'Descartes\' famous statement "I think, therefore I am" arose from which philosophical problem?',
options: [
{ id: 'gst212-q4oA', text: 'The Problem of Evil' },
{ id: 'gst212-q4oB', text: 'The Mind-Body Problem' },
{ id: 'gst212-q4oC', text: 'The Problem of Universals vs Particulars' },
{ id: 'gst212-q4oD', text: 'The Problem of Change vs Permanence' }
],
correctOptionId: 'gst212-q4oB',
topic: 'Major Philosophical Problems'
},
{
id: 'gst212-q5',
text: 'Heraclitus argued that "you cannot step into the same river twice." This position is associated with which philosophical debate?',
options: [
{ id: 'gst212-q5oA', text: 'Free Will vs Determinism' },
{ id: 'gst212-q5oB', text: 'Appearance vs Reality' },
{ id: 'gst212-q5oC', text: 'Change vs Permanence' },
{ id: 'gst212-q5oD', text: 'Universals vs Particulars' }
],
correctOptionId: 'gst212-q5oC',
topic: 'Major Philosophical Problems'
},
{
id: 'gst212-q6',
text: 'The philosophical problem of Free Will vs Determinism has direct implications for which real-world field?',
options: [
{ id: 'gst212-q6oA', text: 'Aesthetics and art criticism' },
{ id: 'gst212-q6oB', text: 'Criminal law and moral responsibility' },
{ id: 'gst212-q6oC', text: 'Mathematical proof theory' },
{ id: 'gst212-q6oD', text: 'Symbolic logic and truth tables' }
],
correctOptionId: 'gst212-q6oB',
topic: 'Major Philosophical Problems'
},
{
id: 'gst212-q7',
text: 'Which of the following sentences qualifies as a proposition in the logical sense?',
options: [
{ id: 'gst212-q7oA', text: 'Please sit down!' },
{ id: 'gst212-q7oB', text: 'Is Abuja the capital of Nigeria?' },
{ id: 'gst212-q7oC', text: 'Abuja is the capital of Nigeria.' },
{ id: 'gst212-q7oD', text: 'What a beautiful city!' }
],
correctOptionId: 'gst212-q7oC',
topic: 'Propositions'
},
{
id: 'gst212-q8',
text: 'A simple (atomic) proposition is best described as one that:',
options: [
{ id: 'gst212-q8oA', text: 'Contains a logical connective joining two parts' },
{ id: 'gst212-q8oB', text: 'Refers to more than one subject' },
{ id: 'gst212-q8oC', text: 'Contains only one piece of information and cannot be broken down further' },
{ id: 'gst212-q8oD', text: 'Is always universally true' }
],
correctOptionId: 'gst212-q8oC',
topic: 'Propositions'
},
{
id: 'gst212-q9',
text: 'Which of the following is a compound (molecular) proposition?',
options: [
{ id: 'gst212-q9oA', text: 'Lagos is the largest city in Nigeria.' },
{ id: 'gst212-q9oB', text: 'It is raining.' },
{ id: 'gst212-q9oC', text: 'Kano is a city.' },
{ id: 'gst212-q9oD', text: 'It is raining and the sun is shining.' }
],
correctOptionId: 'gst212-q9oD',
topic: 'Propositions'
},
{
id: 'gst212-q10',
text: 'In the argument "All men are mortal. Jude is a man. Therefore, Jude is mortal," the word "therefore" signals which part of the argument?',
options: [
{ id: 'gst212-q10oA', text: 'The major premise' },
{ id: 'gst212-q10oB', text: 'The conclusion' },
{ id: 'gst212-q10oC', text: 'The minor premise' },
{ id: 'gst212-q10oD', text: 'The middle term' }
],
correctOptionId: 'gst212-q10oB',
topic: 'Arguments: Premises and Conclusion'
},
{
id: 'gst212-q11',
text: 'Which of the following words is a premise indicator in an argument?',
options: [
{ id: 'gst212-q11oA', text: 'Therefore' },
{ id: 'gst212-q11oB', text: 'Hence' },
{ id: 'gst212-q11oC', text: 'Because' },
{ id: 'gst212-q11oD', text: 'Consequently' }
],
correctOptionId: 'gst212-q11oC',
topic: 'Arguments: Premises and Conclusion'
},
{
id: 'gst212-q12',
text: 'A deductive argument differs from an inductive argument primarily in that a deductive argument:',
options: [
{ id: 'gst212-q12oA', text: 'Moves from specific observations to general conclusions' },
{ id: 'gst212-q12oB', text: 'Claims its conclusion follows with certainty if the premises are true' },
{ id: 'gst212-q12oC', text: 'Is always based on statistical evidence' },
{ id: 'gst212-q12oD', text: 'Supports its conclusion only with probability' }
],
correctOptionId: 'gst212-q12oB',
topic: 'Types of Arguments'
},
{
id: 'gst212-q13',
text: '"Every experiment I have conducted confirms this hypothesis; therefore, this hypothesis is probably true." This is an example of which type of reasoning?',
options: [
{ id: 'gst212-q13oA', text: 'Deductive reasoning' },
{ id: 'gst212-q13oB', text: 'Syllogistic reasoning' },
{ id: 'gst212-q13oC', text: 'Inductive reasoning' },
{ id: 'gst212-q13oD', text: 'Formal fallacy' }
],
correctOptionId: 'gst212-q13oC',
topic: 'Types of Arguments'
},
{
id: 'gst212-q14',
text: 'An argument is described as VALID when:',
options: [
{ id: 'gst212-q14oA', text: 'All its premises are true' },
{ id: 'gst212-q14oB', text: 'Its conclusion is true' },
{ id: 'gst212-q14oC', text: 'The conclusion necessarily follows from the premises, regardless of whether the premises are actually true' },
{ id: 'gst212-q14oD', text: 'It contains no false statements' }
],
correctOptionId: 'gst212-q14oC',
topic: 'Valid, Invalid, and Sound Arguments'
},
{
id: 'gst212-q15',
text: 'Consider this argument: "All grass is purple. Kano is grass. Therefore, Kano is purple." How should this argument be classified?',
options: [
{ id: 'gst212-q15oA', text: 'Invalid and unsound' },
{ id: 'gst212-q15oB', text: 'Valid but unsound' },
{ id: 'gst212-q15oC', text: 'Valid and sound' },
{ id: 'gst212-q15oD', text: 'Invalid but sound' }
],
correctOptionId: 'gst212-q15oB',
topic: 'Valid, Invalid, and Sound Arguments'
},
{
id: 'gst212-q16',
text: 'A sound argument is defined as one that is:',
options: [
{ id: 'gst212-q16oA', text: 'Valid with a true conclusion' },
{ id: 'gst212-q16oB', text: 'Persuasive and clearly worded' },
{ id: 'gst212-q16oC', text: 'Valid AND has all premises actually true' },
{ id: 'gst212-q16oD', text: 'Inductive with strong evidence' }
],
correctOptionId: 'gst212-q16oC',
topic: 'Valid, Invalid, and Sound Arguments'
},
{
id: 'gst212-q17',
text: 'A student claims: "This argument is invalid because one of its premises is false." This reasoning is:',
options: [
{ id: 'gst212-q17oA', text: 'Correct — false premises always make an argument invalid' },
{ id: 'gst212-q17oB', text: 'Incorrect — validity is about logical form, not the truth of premises' },
{ id: 'gst212-q17oC', text: 'Correct — an argument needs true premises to be valid' },
{ id: 'gst212-q17oD', text: 'Incorrect — only sound arguments can have false premises' }
],
correctOptionId: 'gst212-q17oB',
topic: 'Valid, Invalid, and Sound Arguments'
},
{
id: 'gst212-q18',
text: 'Which of the following best describes an A-type categorical proposition?',
options: [
{ id: 'gst212-q18oA', text: 'Particular Negative — Some S are not P' },
{ id: 'gst212-q18oB', text: 'Universal Affirmative — All S are P' },
{ id: 'gst212-q18oC', text: 'Universal Negative — No S are P' },
{ id: 'gst212-q18oD', text: 'Particular Affirmative — Some S are P' }
],
correctOptionId: 'gst212-q18oB',
topic: 'Categorical Propositions (A, E, I, O)'
},
{
id: 'gst212-q19',
text: '"No judges are corrupt." What type of categorical proposition is this?',
options: [
{ id: 'gst212-q19oA', text: 'A — Universal Affirmative' },
{ id: 'gst212-q19oB', text: 'I — Particular Affirmative' },
{ id: 'gst212-q19oC', text: 'O — Particular Negative' },
{ id: 'gst212-q19oD', text: 'E — Universal Negative' }
],
correctOptionId: 'gst212-q19oD',
topic: 'Categorical Propositions (A, E, I, O)'
},
{
id: 'gst212-q20',
text: '"Some workers are not punctual." What type of categorical proposition is this, and what is its quality?',
options: [
{ id: 'gst212-q20oA', text: 'Type I; Affirmative' },
{ id: 'gst212-q20oB', text: 'Type A; Affirmative' },
{ id: 'gst212-q20oC', text: 'Type O; Negative' },
{ id: 'gst212-q20oD', text: 'Type E; Negative' }
],
correctOptionId: 'gst212-q20oC',
topic: 'Categorical Propositions (A, E, I, O)'
},
{
id: 'gst212-q21',
text: 'The letters A, E, I, O for categorical propositions are derived from which two Latin words?',
options: [
{ id: 'gst212-q21oA', text: '"Aequus" and "Omnis"' },
{ id: 'gst212-q21oB', text: '"AffIrmo" and "nEgO"' },
{ id: 'gst212-q21oC', text: '"Animus" and "Ergo"' },
{ id: 'gst212-q21oD', text: '"Absolutus" and "Essentia"' }
],
correctOptionId: 'gst212-q21oB',
topic: 'Categorical Propositions (A, E, I, O)'
},
{
id: 'gst212-q22',
text: 'In the proposition "All students are intelligent," which terms are distributed?',
options: [
{ id: 'gst212-q22oA', text: 'Both subject and predicate' },
{ id: 'gst212-q22oB', text: 'Neither subject nor predicate' },
{ id: 'gst212-q22oC', text: 'Subject only' },
{ id: 'gst212-q22oD', text: 'Predicate only' }
],
correctOptionId: 'gst212-q22oC',
topic: 'Distribution of Terms'
},
{
id: 'gst212-q23',
text: 'In an E-type proposition (No S are P), which terms are distributed?',
options: [
{ id: 'gst212-q23oA', text: 'Subject only' },
{ id: 'gst212-q23oB', text: 'Predicate only' },
{ id: 'gst212-q23oC', text: 'Neither subject nor predicate' },
{ id: 'gst212-q23oD', text: 'Both subject and predicate' }
],
correctOptionId: 'gst212-q23oD',
topic: 'Distribution of Terms'
},
{
id: 'gst212-q24',
text: 'In an I-type proposition (Some S are P), which terms are distributed?',
options: [
{ id: 'gst212-q24oA', text: 'Subject only' },
{ id: 'gst212-q24oB', text: 'Neither subject nor predicate' },
{ id: 'gst212-q24oC', text: 'Both subject and predicate' },
{ id: 'gst212-q24oD', text: 'Predicate only' }
],
correctOptionId: 'gst212-q24oB',
topic: 'Distribution of Terms'
},
{
id: 'gst212-q25',
text: 'In an O-type proposition (Some S are not P), which term is distributed?',
options: [
{ id: 'gst212-q25oA', text: 'Both subject and predicate' },
{ id: 'gst212-q25oB', text: 'Subject only' },
{ id: 'gst212-q25oC', text: 'Predicate only' },
{ id: 'gst212-q25oD', text: 'Neither subject nor predicate' }
],
correctOptionId: 'gst212-q25oC',
topic: 'Distribution of Terms'
},
{
id: 'gst212-q26',
text: 'A syllogism is defined as a deductive argument with:',
options: [
{ id: 'gst212-q26oA', text: 'Any number of premises and one conclusion' },
{ id: 'gst212-q26oB', text: 'Exactly two premises, one conclusion, and exactly three terms each used twice' },
{ id: 'gst212-q26oC', text: 'Three premises and one conclusion' },
{ id: 'gst212-q26oD', text: 'Two propositions connected by a conditional' }
],
correctOptionId: 'gst212-q26oB',
topic: 'The Syllogism'
},
{
id: 'gst212-q27',
text: 'In the syllogism "All Nigerians are Africans. Emeka is a Nigerian. Therefore, Emeka is an African," what is the middle term?',
options: [
{ id: 'gst212-q27oA', text: 'Africans' },
{ id: 'gst212-q27oB', text: 'Emeka' },
{ id: 'gst212-q27oC', text: 'Nigerians' },
{ id: 'gst212-q27oD', text: 'The conclusion' }
],
correctOptionId: 'gst212-q27oC',
topic: 'The Syllogism'
},
{
id: 'gst212-q28',
text: 'What is the primary advantage of symbolic logic over natural language in analyzing arguments?',
options: [
{ id: 'gst212-q28oA', text: 'It is easier to memorize' },
{ id: 'gst212-q28oB', text: 'It eliminates ambiguity by using precise formal notation' },
{ id: 'gst212-q28oC', text: 'It allows more creative expression' },
{ id: 'gst212-q28oD', text: 'It only works for mathematical statements' }
],
correctOptionId: 'gst212-q28oB',
topic: 'Symbolic Logic'
},
{
id: 'gst212-q29',
text: 'Which symbol represents the logical conjunction, and when is the compound proposition it forms TRUE?',
options: [
{ id: 'gst212-q29oA', text: '∨ ; when at least one part is true' },
{ id: 'gst212-q29oB', text: '¬ ; when the original proposition is false' },
{ id: 'gst212-q29oC', text: '∧ ; only when BOTH parts are true' },
{ id: 'gst212-q29oD', text: '→ ; when the antecedent is false' }
],
correctOptionId: 'gst212-q29oC',
topic: 'Logical Connectives'
},
{
id: 'gst212-q30',
text: 'The disjunction P ∨ Q is FALSE only when:',
options: [
{ id: 'gst212-q30oA', text: 'P is true and Q is false' },
{ id: 'gst212-q30oB', text: 'Both P and Q are false' },
{ id: 'gst212-q30oC', text: 'P is false and Q is true' },
{ id: 'gst212-q30oD', text: 'Both P and Q are true' }
],
correctOptionId: 'gst212-q30oB',
topic: 'Logical Connectives'
},
{
id: 'gst212-q31',
text: 'The conditional proposition P → Q is FALSE only when:',
options: [
{ id: 'gst212-q31oA', text: 'P is false and Q is true' },
{ id: 'gst212-q31oB', text: 'Both P and Q are false' },
{ id: 'gst212-q31oC', text: 'P is true and Q is false' },
{ id: 'gst212-q31oD', text: 'Both P and Q are true' }
],
correctOptionId: 'gst212-q31oC',
topic: 'Logical Connectives'
},
{
id: 'gst212-q32',
text: 'Given P = "It is raining" and Q = "The sun is shining," how do you symbolize the statement "If it is raining, then the sun is not shining"?',
options: [
{ id: 'gst212-q32oA', text: 'P ∧ ¬Q' },
{ id: 'gst212-q32oB', text: 'P → ¬Q' },
{ id: 'gst212-q32oC', text: '¬P → Q' },
{ id: 'gst212-q32oD', text: 'P ↔ Q' }
],
correctOptionId: 'gst212-q32oB',
topic: 'Symbolization'
},
{
id: 'gst212-q33',
text: 'The biconditional P ↔ Q is TRUE when:',
options: [
{ id: 'gst212-q33oA', text: 'P is true and Q is false' },
{ id: 'gst212-q33oB', text: 'P is false and Q is true' },
{ id: 'gst212-q33oC', text: 'P and Q have the same truth value (both true or both false)' },
{ id: 'gst212-q33oD', text: 'At least one of P or Q is true' }
],
correctOptionId: 'gst212-q33oC',
topic: 'Logical Connectives'
},
{
id: 'gst212-q34',
text: 'In the conditional P → Q, what are P and Q called respectively?',
options: [
{ id: 'gst212-q34oA', text: 'Predicate and subject' },
{ id: 'gst212-q34oB', text: 'Antecedent and consequent' },
{ id: 'gst212-q34oC', text: 'Premise and argument' },
{ id: 'gst212-q34oD', text: 'Consequent and antecedent' }
],
correctOptionId: 'gst212-q34oB',
topic: 'Logical Connectives'
},
{
id: 'gst212-q35',
text: 'A truth table for a formula with three atomic propositions (P, Q, R) will have how many rows?',
options: [
{ id: 'gst212-q35oA', text: '6' },
{ id: 'gst212-q35oB', text: '9' },
{ id: 'gst212-q35oC', text: '8' },
{ id: 'gst212-q35oD', text: '4' }
],
correctOptionId: 'gst212-q35oC',
topic: 'Truth Tables'
},
{
id: 'gst212-q36',
text: 'A formula that is TRUE under every possible truth-value assignment is called a:',
options: [
{ id: 'gst212-q36oA', text: 'Contradiction' },
{ id: 'gst212-q36oB', text: 'Contingency' },
{ id: 'gst212-q36oC', text: 'Tautology' },
{ id: 'gst212-q36oD', text: 'Negation' }
],
correctOptionId: 'gst212-q36oC',
topic: 'Truth Tables'
},
{
id: 'gst212-q37',
text: 'The formula P ∧ ¬P is an example of a logical:',
options: [
{ id: 'gst212-q37oA', text: 'Tautology' },
{ id: 'gst212-q37oB', text: 'Contingency' },
{ id: 'gst212-q37oC', text: 'Valid argument' },
{ id: 'gst212-q37oD', text: 'Contradiction' }
],
correctOptionId: 'gst212-q37oD',
topic: 'Truth Tables'
},
{
id: 'gst212-q38',
text: 'A formula whose truth value depends on the actual values assigned to its variables (true in some rows, false in others) is called a:',
options: [
{ id: 'gst212-q38oA', text: 'Tautology' },
{ id: 'gst212-q38oB', text: 'Well-Formed Formula' },
{ id: 'gst212-q38oC', text: 'Contradiction' },
{ id: 'gst212-q38oD', text: 'Contingency' }
],
correctOptionId: 'gst212-q38oD',
topic: 'Truth Tables'
},
{
id: 'gst212-q39',
text: 'The Law of Identity in logic states that:',
options: [
{ id: 'gst212-q39oA', text: 'Either P is true or not-P is true — there is no third option' },
{ id: 'gst212-q39oB', text: 'Nothing can be both P and not-P simultaneously' },
{ id: 'gst212-q39oC', text: 'A thing is what it is — if P, then P' },
{ id: 'gst212-q39oD', text: 'All propositions are either tautologies or contradictions' }
],
correctOptionId: 'gst212-q39oC',
topic: 'Three Laws of Thought'
},
{
id: 'gst212-q40',
text: 'Which law of thought is symbolized as ¬(P ∧ ¬P)?',
options: [
{ id: 'gst212-q40oA', text: 'Law of Excluded Middle' },
{ id: 'gst212-q40oB', text: 'Law of Non-Contradiction' },
{ id: 'gst212-q40oC', text: 'Law of Identity' },
{ id: 'gst212-q40oD', text: 'Law of Sufficient Reason' }
],
correctOptionId: 'gst212-q40oB',
topic: 'Three Laws of Thought'
},
{
id: 'gst212-q41',
text: 'The Law of Excluded Middle is symbolized as P ∨ ¬P and means:',
options: [
{ id: 'gst212-q41oA', text: 'P and ¬P cannot both be false at the same time — one of them must be true' },
{ id: 'gst212-q41oB', text: 'P and ¬P cannot both be true at the same time' },
{ id: 'gst212-q41oC', text: 'P is always true' },
{ id: 'gst212-q41oD', text: 'A proposition can have a middle value between true and false' }
],
correctOptionId: 'gst212-q41oA',
topic: 'Three Laws of Thought'
},
{
id: 'gst212-q42',
text: 'What is the key difference between the Law of Non-Contradiction and the Law of Excluded Middle?',
options: [
{ id: 'gst212-q42oA', text: 'Non-Contradiction applies only to syllogisms; Excluded Middle applies only to symbolic logic' },
{ id: 'gst212-q42oB', text: 'Non-Contradiction bans P and ¬P from both being TRUE; Excluded Middle bans them from both being FALSE' },
{ id: 'gst212-q42oC', text: 'They are the same law stated differently' },
{ id: 'gst212-q42oD', text: 'Non-Contradiction bans them from both being FALSE; Excluded Middle bans them from both being TRUE' }
],
correctOptionId: 'gst212-q42oB',
topic: 'Three Laws of Thought'
},
{
id: 'gst212-q43',
text: 'A fallacy is best defined as:',
options: [
{ id: 'gst212-q43oA', text: 'A true statement that is poorly worded' },
{ id: 'gst212-q43oB', text: 'A random error in spelling or grammar' },
{ id: 'gst212-q43oC', text: 'A recurring, structured pattern of flawed reasoning that renders an argument invalid or unreliable' },
{ id: 'gst212-q43oD', text: 'Any argument whose conclusion is false' }
],
correctOptionId: 'gst212-q43oC',
topic: 'Fallacies'
},
{
id: 'gst212-q44',
text: 'Formal fallacies differ from informal fallacies in that formal fallacies involve errors in:',
options: [
{ id: 'gst212-q44oA', text: 'The emotional content of the argument' },
{ id: 'gst212-q44oB', text: 'The form or structure of the argument, independent of content' },
{ id: 'gst212-q44oC', text: 'The truth value of the conclusion' },
{ id: 'gst212-q44oD', text: 'The social context in which the argument is made' }
],
correctOptionId: 'gst212-q44oB',
topic: 'Fallacies'
},
{
id: 'gst212-q45',
text: '"If it rains, the ground gets wet. The ground is wet. Therefore, it rained." This argument commits which formal fallacy?',
options: [
{ id: 'gst212-q45oA', text: 'Denying the Antecedent' },
{ id: 'gst212-q45oB', text: 'Undistributed Middle' },
{ id: 'gst212-q45oC', text: 'Ad Hominem' },
{ id: 'gst212-q45oD', text: 'Affirming the Consequent' }
],
correctOptionId: 'gst212-q45oD',
topic: 'Formal Fallacies'
},
{
id: 'gst212-q46',
text: '"If you study, you pass. You did not study. Therefore, you did not pass." This argument commits which formal fallacy?',
options: [
{ id: 'gst212-q46oA', text: 'Affirming the Consequent' },
{ id: 'gst212-q46oB', text: 'False Dilemma' },
{ id: 'gst212-q46oC', text: 'Undistributed Middle' },
{ id: 'gst212-q46oD', text: 'Denying the Antecedent' }
],
correctOptionId: 'gst212-q46oD',
topic: 'Formal Fallacies'
},
{
id: 'gst212-q47',
text: '"All cats are mammals. All dogs are mammals. Therefore, all cats are dogs." This argument commits which formal fallacy?',
options: [
{ id: 'gst212-q47oA', text: 'Affirming the Consequent' },
{ id: 'gst212-q47oB', text: 'Undistributed Middle' },
{ id: 'gst212-q47oC', text: 'Ad Populum' },
{ id: 'gst212-q47oD', text: 'Straw Man' }
],
correctOptionId: 'gst212-q47oB',
topic: 'Formal Fallacies'
},
{
id: 'gst212-q48',
text: '"You cannot trust his opinion on climate change — he is not a scientist." This argument commits which informal fallacy?',
options: [
{ id: 'gst212-q48oA', text: 'Straw Man' },
{ id: 'gst212-q48oB', text: 'Begging the Question' },
{ id: 'gst212-q48oC', text: 'Ad Hominem' },
{ id: 'gst212-q48oD', text: 'False Dilemma' }
],
correctOptionId: 'gst212-q48oC',
topic: 'Informal Fallacies'
},
{
id: 'gst212-q49',
text: '"All my friends support this policy, so it must be correct." This is an example of which informal fallacy?',
options: [
{ id: 'gst212-q49oA', text: 'Ad Hominem' },
{ id: 'gst212-q49oB', text: 'Ad Populum (Appeal to the Crowd)' },
{ id: 'gst212-q49oC', text: 'Slippery Slope' },
{ id: 'gst212-q49oD', text: 'Straw Man' }
],
correctOptionId: 'gst212-q49oB',
topic: 'Informal Fallacies'
},
{
id: 'gst212-q50',
text: '"He wants to reduce military spending, so he obviously wants us to have no defense at all!" This misrepresentation of an opponent\'s position is known as the:',
options: [
{ id: 'gst212-q50oA', text: 'Slippery Slope fallacy' },
{ id: 'gst212-q50oB', text: 'False Dilemma fallacy' },
{ id: 'gst212-q50oC', text: 'Straw Man fallacy' },
{ id: 'gst212-q50oD', text: 'Begging the Question fallacy' }
],
correctOptionId: 'gst212-q50oC',
topic: 'Informal Fallacies'
},
{
id: 'gst212-q51',
text: '"Either you support the president completely, or you are an enemy of the state." This argument presents a:',
options: [
{ id: 'gst212-q51oA', text: 'Ad Hominem fallacy' },
{ id: 'gst212-q51oB', text: 'False Dilemma fallacy' },
{ id: 'gst212-q51oC', text: 'Slippery Slope fallacy' },
{ id: 'gst212-q51oD', text: 'Circular Reasoning fallacy' }
],
correctOptionId: 'gst212-q51oB',
topic: 'Informal Fallacies'
},
{
id: 'gst212-q52',
text: '"The Bible is true because God wrote it, and we know God wrote it because the Bible says so." This is an example of:',
options: [
{ id: 'gst212-q52oA', text: 'Ad Populum' },
{ id: 'gst212-q52oB', text: 'Slippery Slope' },
{ id: 'gst212-q52oC', text: 'Begging the Question (Circular Reasoning)' },
{ id: 'gst212-q52oD', text: 'Straw Man' }
],
correctOptionId: 'gst212-q52oC',
topic: 'Informal Fallacies'
},
{
id: 'gst212-q53',
text: '"If we allow this one new law, next we will end up with a full dictatorship." Without justifying each intermediate step, this argument commits the:',
options: [
{ id: 'gst212-q53oA', text: 'False Dilemma fallacy' },
{ id: 'gst212-q53oB', text: 'Undistributed Middle fallacy' },
{ id: 'gst212-q53oC', text: 'Ad Hominem fallacy' },
{ id: 'gst212-q53oD', text: 'Slippery Slope fallacy' }
],
correctOptionId: 'gst212-q53oD',
topic: 'Informal Fallacies'
},
{
id: 'gst212-q54',
text: 'Plato argued that the physical world is merely a shadow of a more real, ideal world. This view is most directly associated with which philosophical problem?',
options: [
{ id: 'gst212-q54oA', text: 'Free Will vs Determinism' },
{ id: 'gst212-q54oB', text: 'Appearance vs Reality' },
{ id: 'gst212-q54oC', text: 'The Problem of Evil' },
{ id: 'gst212-q54oD', text: 'Change vs Permanence' }
],
correctOptionId: 'gst212-q54oB',
topic: 'Major Philosophical Problems'
},
{
id: 'gst212-q55',
text: 'John Locke\'s philosophical argument for natural rights (life, liberty, and property) and government by consent directly influenced which political document?',
options: [
{ id: 'gst212-q55oA', text: 'The Magna Carta of England' },
{ id: 'gst212-q55oB', text: 'The American Declaration of Independence' },
{ id: 'gst212-q55oC', text: 'The Nigerian Constitution' },
{ id: 'gst212-q55oD', text: 'The Treaty of Westphalia' }
],
correctOptionId: 'gst212-q55oB',
topic: 'Philosophy and Politics'
},
{
id: 'gst212-q56',
text: 'Which philosopher advocated rule by philosopher-kings — the idea that the wisest members of society should govern?',
options: [
{ id: 'gst212-q56oA', text: 'Aristotle' },
{ id: 'gst212-q56oB', text: 'Rousseau' },
{ id: 'gst212-q56oC', text: 'Kant' },
{ id: 'gst212-q56oD', text: 'Plato' }
],
correctOptionId: 'gst212-q56oD',
topic: 'Philosophy and Politics'
},
{
id: 'gst212-q57',
text: 'The ethical theory that focuses on developing good character traits such as courage, honesty, and justice is called:',
options: [
{ id: 'gst212-q57oA', text: 'Utilitarianism' },
{ id: 'gst212-q57oB', text: 'Virtue Ethics' },
{ id: 'gst212-q57oC', text: 'Deontology' },
{ id: 'gst212-q57oD', text: 'Existentialism' }
],
correctOptionId: 'gst212-q57oB',
topic: 'Philosophy and Character Molding'
},
{
id: 'gst212-q58',
text: 'Utilitarianism, associated with Mill and Bentham, holds that the right action is the one that:',
options: [
{ id: 'gst212-q58oA', text: 'Follows universal moral duties regardless of consequences' },
{ id: 'gst212-q58oB', text: 'Builds virtuous character in the individual' },
{ id: 'gst212-q58oC', text: 'Produces the greatest good for the greatest number' },
{ id: 'gst212-q58oD', text: 'Conforms to divine command' }
],
correctOptionId: 'gst212-q58oC',
topic: 'Philosophy and Character Molding'
},
{
id: 'gst212-q59',
text: 'Kant\'s deontological ethical theory holds that:',
options: [
{ id: 'gst212-q59oA', text: 'Morality is determined by the consequences of one\'s actions' },
{ id: 'gst212-q59oB', text: 'Some actions are inherently right or wrong, and one should act according to universal principles' },
{ id: 'gst212-q59oC', text: 'The goal of ethics is to cultivate personal virtue' },
{ id: 'gst212-q59oD', text: 'Ethics is ultimately subjective and culture-dependent' }
],
correctOptionId: 'gst212-q59oB',
topic: 'Philosophy and Character Molding'
},
{
id: 'gst212-q60',
text: 'Logic is described as normative rather than descriptive. This means logic:',
options: [
{ id: 'gst212-q60oA', text: 'Describes how people actually think in everyday life' },
{ id: 'gst212-q60oB', text: 'Prescribes how people OUGHT to think, not how they do think' },
{ id: 'gst212-q60oC', text: 'Is a branch of psychology concerned with human behavior' },
{ id: 'gst212-q60oD', text: 'Only applies to mathematical arguments' }
],
correctOptionId: 'gst212-q60oB',
topic: 'Nature of Logic'
},
{
id: 'gst212-q61',
text: 'According to the document, why is the Law of Non-Contradiction foundational to all logical reasoning?',
options: [
{ id: 'gst212-q61oA', text: 'It guarantees that every proposition is a tautology' },
{ id: 'gst212-q61oB', text: 'It explains why truth tables only have two values (T and F), with no middle value' },
{ id: 'gst212-q61oC', text: 'It explains why a proposition cannot be both true and false simultaneously, making consistent reasoning possible' },
{ id: 'gst212-q61oD', text: 'It is the basis for the undistributed middle fallacy' }
],
correctOptionId: 'gst212-q61oC',
topic: 'Three Laws of Thought'
},
{
id: 'gst212-q62',
text: 'A Well-Formed Formula (WFF) in symbolic logic is defined as:',
options: [
{ id: 'gst212-q62oA', text: 'Any string of symbols that contains at least one connective' },
{ id: 'gst212-q62oB', text: 'A formula that is always true (a tautology)' },
{ id: 'gst212-q62oC', text: 'A symbolic expression that follows the grammar rules of propositional logic' },
{ id: 'gst212-q62oD', text: 'A formula that has been verified using a truth table' }
],
correctOptionId: 'gst212-q62oC',
topic: 'Symbolic Logic'
},
{
id: 'gst212-q63',
text: 'Which of the following is NOT one of the five logical connectives in propositional logic?',
options: [
{ id: 'gst212-q63oA', text: 'Negation (¬)' },
{ id: 'gst212-q63oB', text: 'Conjunction (∧)' },
{ id: 'gst212-q63oC', text: 'Distribution (∂)' },
{ id: 'gst212-q63oD', text: 'Biconditional (↔)' }
],
correctOptionId: 'gst212-q63oC',
topic: 'Logical Connectives'
},
{
id: 'gst212-q64',
text: 'The standard form of a categorical proposition consists of which four components?',
options: [
{ id: 'gst212-q64oA', text: 'Variable, connective, formula, and conclusion' },
{ id: 'gst212-q64oB', text: 'Major term, minor term, middle term, and quantifier' },
{ id: 'gst212-q64oC', text: 'Quantifier, subject term, copula, and predicate term' },
{ id: 'gst212-q64oD', text: 'Premise, inference, rebuttal, and conclusion' }
],
correctOptionId: 'gst212-q64oC',
topic: 'Categorical Propositions (A, E, I, O)'
},
{
id: 'gst212-q65',
text: 'In logic, "Some" means:',
options: [
{ id: 'gst212-q65oA', text: 'More than half but not all' },
{ id: 'gst212-q65oB', text: 'Fewer than half' },
{ id: 'gst212-q65oC', text: 'At least one' },
{ id: 'gst212-q65oD', text: 'A small minority' }
],
correctOptionId: 'gst212-q65oC',
topic: 'Categorical Propositions (A, E, I, O)'
},
{
id: 'gst212-q66',
text: 'Aristotle described man as a "political animal," meaning that humans are:',
options: [
{ id: 'gst212-q66oA', text: 'Naturally inclined to seek political power' },
{ id: 'gst212-q66oB', text: 'Naturally suited to living in communities and political association' },
{ id: 'gst212-q66oC', text: 'Always governed by self-interest' },
{ id: 'gst212-q66oD', text: 'Incapable of moral behavior without government' }
],
correctOptionId: 'gst212-q66oB',
topic: 'Philosophy and Politics'
},
{
id: 'gst212-q67',
text: 'The distinction between validity and truth means that an examiner can present an argument with clearly false premises and ask whether it is valid. The correct approach is to:',
options: [
{ id: 'gst212-q67oA', text: 'Classify it as invalid because the premises are false' },
{ id: 'gst212-q67oB', text: 'Evaluate only whether the conclusion follows logically from the premises, ignoring their actual truth' },
{ id: 'gst212-q67oC', text: 'Accept it as sound if the conclusion sounds reasonable' },
{ id: 'gst212-q67oD', text: 'Refuse to evaluate it since false premises make evaluation impossible' }
],
correctOptionId: 'gst212-q67oB',
topic: 'Valid, Invalid, and Sound Arguments'
},
{
id: 'gst212-q68',
text: 'The Problem of Evil in philosophy asks:',
options: [
{ id: 'gst212-q68oA', text: 'Whether human beings are naturally good or evil' },
{ id: 'gst212-q68oB', text: 'How society should punish criminal behavior' },
{ id: 'gst212-q68oC', text: 'How an all-powerful, all-knowing, and all-good God can coexist with evil and suffering' },
{ id: 'gst212-q68oD', text: 'Whether morality is relative or absolute' }
],
correctOptionId: 'gst212-q68oC',
topic: 'Major Philosophical Problems'
},
{
id: 'gst212-q69',
text: 'Which of the following best explains why the undistributed middle is a formal fallacy?',
options: [
{ id: 'gst212-q69oA', text: 'The argument uses emotionally manipulative language' },
{ id: 'gst212-q69oB', text: 'The middle term, which links the two premises, never refers to all members of its class in either premise, so no valid connection is established' },
{ id: 'gst212-q69oC', text: 'The argument has more than three terms' },
{ id: 'gst212-q69oD', text: 'The conclusion is stated before the premises' }
],
correctOptionId: 'gst212-q69oB',
topic: 'Formal Fallacies'
},
{
id: 'gst212-q70',
text: 'The branch of philosophy that studies beauty and the nature of art is called:',
options: [
{ id: 'gst212-q70oA', text: 'Epistemology' },
{ id: 'gst212-q70oB', text: 'Metaphysics' },
{ id: 'gst212-q70oC', text: 'Aesthetics' },
{ id: 'gst212-q70oD', text: 'Ethics' }
],
correctOptionId: 'gst212-q70oC',
topic: 'Branches of Philosophy'
},
];