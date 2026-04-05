import type { Question } from './types';

export const questions: Question[] = [
    {
        id: 'csc227-q1',
        text: 'Which of the following best describes why classical computers struggle with exponentially hard problems?',
        options: [
            { id: 'csc227-q1oA', text: 'They cannot perform arithmetic on large numbers' },
            { id: 'csc227-q1oB', text: 'Doubling the problem size multiplies the work required by millions rather than doubling it' },
            { id: 'csc227-q1oC', text: 'They are limited to processing only binary data' },
            { id: 'csc227-q1oD', text: 'Their clock speeds cannot exceed a fixed physical limit' }
        ],
        correctOptionId: 'csc227-q1oB',
        topic: 'Limits of Classical Computing'
    },
    {
        id: 'csc227-q2',
        text: 'What was Moore\'s Law, and why is it now slowing down?',
        options: [
            { id: 'csc227-q2oA', text: 'The observation that computing speed doubles every decade; it is slowing because processors overheat' },
            { id: 'csc227-q2oB', text: 'The prediction that software becomes twice as efficient every two years; limited by programming languages' },
            { id: 'csc227-q2oC', text: 'The observation that the number of transistors on a chip doubles roughly every two years; slowing because transistors are now so small that quantum effects break them' },
            { id: 'csc227-q2oD', text: 'The rule that memory capacity doubles every 18 months; slowing because silicon is running out' }
        ],
        correctOptionId: 'csc227-q2oC',
        topic: 'Limits of Classical Computing'
    },
    {
        id: 'csc227-q3',
        text: 'Which of the following is NOT listed as a real-world application of quantum computers in the study guide?',
        options: [
            { id: 'csc227-q3oA', text: 'Drug discovery through molecular simulation' },
            { id: 'csc227-q3oB', text: 'Breaking RSA encryption using Shor\'s algorithm' },
            { id: 'csc227-q3oC', text: 'Real-time video rendering and gaming' },
            { id: 'csc227-q3oD', text: 'Searching databases using Grover\'s algorithm' }
        ],
        correctOptionId: 'csc227-q3oC',
        topic: 'What Is Quantum Computing'
    },
    {
        id: 'csc227-q4',
        text: 'What does NISQ stand for, and what characterises these devices?',
        options: [
            { id: 'csc227-q4oA', text: 'Non-Integrated Scalable Quantum; they are fully fault-tolerant with unlimited qubits' },
            { id: 'csc227-q4oB', text: 'Noisy Intermediate-Scale Quantum; they are real but limited in qubit count and prone to errors' },
            { id: 'csc227-q4oC', text: 'Normalised Instruction-Set Quantum; they use classical instruction sets adapted for qubits' },
            { id: 'csc227-q4oD', text: 'Noisy Integrated Sequential Quantum; they process qubits one at a time without parallelism' }
        ],
        correctOptionId: 'csc227-q4oB',
        topic: 'What Is Quantum Computing'
    },
    {
        id: 'csc227-q5',
        text: 'A qubit differs from a classical bit primarily because:',
        options: [
            { id: 'csc227-q5oA', text: 'A qubit is faster to read than a classical bit' },
            { id: 'csc227-q5oB', text: 'A qubit can only store the value 0, whereas a classical bit stores 0 or 1' },
            { id: 'csc227-q5oC', text: 'A qubit can be in a superposition of both 0 and 1 simultaneously before measurement' },
            { id: 'csc227-q5oD', text: 'A qubit is a physical transistor with three possible voltage states' }
        ],
        correctOptionId: 'csc227-q5oC',
        topic: 'What Is Quantum Computing'
    },
    {
        id: 'csc227-q6',
        text: 'Which analogy is used in the study guide to describe superposition?',
        options: [
            { id: 'csc227-q6oA', text: 'A coin resting on a table showing either heads or tails' },
            { id: 'csc227-q6oB', text: 'A spinning coin in the air that is neither heads nor tails until it lands' },
            { id: 'csc227-q6oC', text: 'A pair of magic dice that always show the same number' },
            { id: 'csc227-q6oD', text: 'Noise-cancelling headphones eliminating background sound' }
        ],
        correctOptionId: 'csc227-q6oB',
        topic: 'The Three Superpowers of Quantum Computing'
    },
    {
        id: 'csc227-q7',
        text: 'What is quantum entanglement?',
        options: [
            { id: 'csc227-q7oA', text: 'A qubit\'s ability to be in two states at once before measurement' },
            { id: 'csc227-q7oB', text: 'The process of amplifying correct answers and cancelling wrong ones in a quantum algorithm' },
            { id: 'csc227-q7oC', text: 'A special link between two qubits such that measuring one instantly determines the state of the other, regardless of distance' },
            { id: 'csc227-q7oD', text: 'The irreversible collapse of a quantum state upon measurement' }
        ],
        correctOptionId: 'csc227-q7oC',
        topic: 'The Three Superpowers of Quantum Computing'
    },
    {
        id: 'csc227-q8',
        text: 'In quantum computing, constructive interference is used to:',
        options: [
            { id: 'csc227-q8oA', text: 'Destroy the superposition of a qubit and force it to collapse' },
            { id: 'csc227-q8oB', text: 'Amplify the probability of correct answers in a computation' },
            { id: 'csc227-q8oC', text: 'Entangle two qubits so their states become correlated' },
            { id: 'csc227-q8oD', text: 'Reduce the number of qubits needed for a computation' }
        ],
        correctOptionId: 'csc227-q8oB',
        topic: 'The Three Superpowers of Quantum Computing'
    },
    {
        id: 'csc227-q9',
        text: 'Destructive interference in a quantum algorithm serves what purpose?',
        options: [
            { id: 'csc227-q9oA', text: 'It increases the probability of all possible outcomes equally' },
            { id: 'csc227-q9oB', text: 'It cancels out or reduces the probability of incorrect answers' },
            { id: 'csc227-q9oC', text: 'It resets all qubits to the |0⟩ state' },
            { id: 'csc227-q9oD', text: 'It converts quantum gates into classical logic gates' }
        ],
        correctOptionId: 'csc227-q9oB',
        topic: 'The Three Superpowers of Quantum Computing'
    },
    {
        id: 'csc227-q10',
        text: 'In Dirac (bra-ket) notation, the general state of a single qubit is written as |ψ⟩ = α|0⟩ + β|1⟩. What do α and β represent?',
        options: [
            { id: 'csc227-q10oA', text: 'The voltage levels corresponding to 0 and 1 in the qubit\'s physical hardware' },
            { id: 'csc227-q10oB', text: 'Probability amplitudes whose squared magnitudes give the probability of measuring 0 or 1' },
            { id: 'csc227-q10oC', text: 'The number of times the qubit has been measured in each state' },
            { id: 'csc227-q10oD', text: 'The classical bit values stored alongside the qubit' }
        ],
        correctOptionId: 'csc227-q10oB',
        topic: 'Basic Principles of Quantum Mechanics'
    },
    {
        id: 'csc227-q11',
        text: 'The normalization condition for a qubit state |ψ⟩ = α|0⟩ + β|1⟩ states that:',
        options: [
            { id: 'csc227-q11oA', text: 'α + β = 1' },
            { id: 'csc227-q11oB', text: 'α² + β² = 0' },
            { id: 'csc227-q11oC', text: '|α|² + |β|² = 1' },
            { id: 'csc227-q11oD', text: '|α| × |β| = 1' }
        ],
        correctOptionId: 'csc227-q11oC',
        topic: 'Basic Principles of Quantum Mechanics'
    },
    {
        id: 'csc227-q12',
        text: 'If a qubit has α = β = 1/√2, what is the probability of measuring the value 1?',
        options: [
            { id: 'csc227-q12oA', text: '0 (it is impossible)' },
            { id: 'csc227-q12oB', text: '1 (it is certain)' },
            { id: 'csc227-q12oC', text: '0.25 (25%)' },
            { id: 'csc227-q12oD', text: '0.5 (50%)' }
        ],
        correctOptionId: 'csc227-q12oD',
        topic: 'Basic Principles of Quantum Mechanics'
    },
    {
        id: 'csc227-q13',
        text: 'What happens to a qubit\'s superposition when it is measured?',
        options: [
            { id: 'csc227-q13oA', text: 'The superposition is preserved and can be measured again to confirm the result' },
            { id: 'csc227-q13oB', text: 'The qubit collapses irreversibly to either |0⟩ or |1⟩, destroying the superposition' },
            { id: 'csc227-q13oC', text: 'The qubit temporarily collapses to 0 or 1 but reverts to superposition after measurement' },
            { id: 'csc227-q13oD', text: 'The qubit splits into two separate qubits, one for each possible outcome' }
        ],
        correctOptionId: 'csc227-q13oB',
        topic: 'Basic Principles of Quantum Mechanics'
    },
    {
        id: 'csc227-q14',
        text: 'How does superposition differ from classical randomness?',
        options: [
            { id: 'csc227-q14oA', text: 'Superposition and randomness are identical — both represent uncertainty about the value' },
            { id: 'csc227-q14oB', text: 'In superposition, we simply do not know the value; in randomness, the value is truly uncertain' },
            { id: 'csc227-q14oC', text: 'In superposition, the qubit genuinely has no definite value and is fully described by α and β; randomness is about ignorance of a definite value' },
            { id: 'csc227-q14oD', text: 'Superposition only applies to classical bits, while randomness is a quantum property' }
        ],
        correctOptionId: 'csc227-q14oC',
        topic: 'Basic Principles of Quantum Mechanics'
    },
    {
        id: 'csc227-q15',
        text: 'What does the Bloch sphere represent in quantum computing?',
        options: [
            { id: 'csc227-q15oA', text: 'A 3D sphere used to visualise the combined state of a multi-qubit system' },
            { id: 'csc227-q15oB', text: 'A 3D sphere where every point on the surface represents a valid state of a single qubit' },
            { id: 'csc227-q15oC', text: 'A diagram showing all possible measurement outcomes for a quantum circuit' },
            { id: 'csc227-q15oD', text: 'A model of the physical hardware inside a quantum computer' }
        ],
        correctOptionId: 'csc227-q15oB',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q16',
        text: 'On the Bloch sphere, which points correspond to the states |0⟩ and |1⟩?',
        options: [
            { id: 'csc227-q16oA', text: '|0⟩ is on the equator; |1⟩ is at the north pole' },
            { id: 'csc227-q16oB', text: '|0⟩ is at the north pole; |1⟩ is at the south pole' },
            { id: 'csc227-q16oC', text: 'Both |0⟩ and |1⟩ are on the equator at opposite sides' },
            { id: 'csc227-q16oD', text: '|0⟩ is at the south pole; |1⟩ is at the north pole' }
        ],
        correctOptionId: 'csc227-q16oB',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q17',
        text: 'Points on the equator of the Bloch sphere represent:',
        options: [
            { id: 'csc227-q17oA', text: 'States where the qubit is definitely |0⟩' },
            { id: 'csc227-q17oB', text: 'States where the qubit is definitely |1⟩' },
            { id: 'csc227-q17oC', text: 'Equal superposition states with a 50/50 chance of measuring 0 or 1' },
            { id: 'csc227-q17oD', text: 'States where the qubit has been measured and collapsed' }
        ],
        correctOptionId: 'csc227-q17oC',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q18',
        text: 'What is the matrix representation of the Pauli-X gate?',
        options: [
            { id: 'csc227-q18oA', text: '[[1, 0], [0, -1]]' },
            { id: 'csc227-q18oB', text: '[[0, -i], [i, 0]]' },
            { id: 'csc227-q18oC', text: '[[1, 0], [0, 1]]' },
            { id: 'csc227-q18oD', text: '[[0, 1], [1, 0]]' }
        ],
        correctOptionId: 'csc227-q18oD',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q19',
        text: 'What is the effect of applying the Pauli-X gate to the state |1⟩?',
        options: [
            { id: 'csc227-q19oA', text: 'The qubit remains in state |1⟩ — X has no effect on |1⟩' },
            { id: 'csc227-q19oB', text: 'The qubit is placed into equal superposition (|0⟩ + |1⟩)/√2' },
            { id: 'csc227-q19oC', text: 'The qubit flips to state |0⟩' },
            { id: 'csc227-q19oD', text: 'The qubit collapses and is measured as 0' }
        ],
        correctOptionId: 'csc227-q19oC',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q20',
        text: 'What is the key difference between the Pauli-X gate and the Pauli-Z gate?',
        options: [
            { id: 'csc227-q20oA', text: 'Pauli-X rotates around the z-axis; Pauli-Z rotates around the x-axis' },
            { id: 'csc227-q20oB', text: 'Pauli-X flips the qubit (|0⟩ ↔ |1⟩); Pauli-Z only changes the phase of |1⟩ without flipping the qubit' },
            { id: 'csc227-q20oC', text: 'Pauli-X works on two qubits; Pauli-Z works on a single qubit' },
            { id: 'csc227-q20oD', text: 'Pauli-X creates entanglement; Pauli-Z destroys it' }
        ],
        correctOptionId: 'csc227-q20oB',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q21',
        text: 'After applying the Pauli-Z gate to the superposition state (|0⟩ + |1⟩)/√2, the measurement probabilities are:',
        options: [
            { id: 'csc227-q21oA', text: '100% chance of measuring 0 and 0% chance of measuring 1' },
            { id: 'csc227-q21oB', text: 'Changed to a 75/25 split' },
            { id: 'csc227-q21oC', text: 'Still 50% chance of 0 and 50% chance of 1 — only the phase changed' },
            { id: 'csc227-q21oD', text: '0% chance of both — the qubit enters an undefined state' }
        ],
        correctOptionId: 'csc227-q21oC',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q22',
        text: 'What is the result of applying the Hadamard gate to |0⟩?',
        options: [
            { id: 'csc227-q22oA', text: '|1⟩' },
            { id: 'csc227-q22oB', text: '(|0⟩ + |1⟩)/√2' },
            { id: 'csc227-q22oC', text: '(|0⟩ − |1⟩)/√2' },
            { id: 'csc227-q22oD', text: '|0⟩ — the Hadamard gate has no effect on |0⟩' }
        ],
        correctOptionId: 'csc227-q22oB',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q23',
        text: 'What happens if you apply the Hadamard gate twice in succession to a qubit in state |0⟩?',
        options: [
            { id: 'csc227-q23oA', text: 'The qubit is permanently left in equal superposition' },
            { id: 'csc227-q23oB', text: 'The qubit flips to |1⟩' },
            { id: 'csc227-q23oC', text: 'The qubit returns to its original state |0⟩ — applying H twice is the identity' },
            { id: 'csc227-q23oD', text: 'The qubit collapses and must be reset before further use' }
        ],
        correctOptionId: 'csc227-q23oC',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q24',
        text: 'Which of the following correctly states the matrix of the Hadamard gate?',
        options: [
            { id: 'csc227-q24oA', text: '(1/√2) × [[1, 0], [0, 1]]' },
            { id: 'csc227-q24oB', text: '(1/√2) × [[1, 1], [1, -1]]' },
            { id: 'csc227-q24oC', text: '(1/√2) × [[0, 1], [1, 0]]' },
            { id: 'csc227-q24oD', text: '(1/√2) × [[1, -1], [-1, 1]]' }
        ],
        correctOptionId: 'csc227-q24oB',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q25',
        text: 'All quantum gates share three fundamental properties. Which of the following correctly lists all three?',
        options: [
            { id: 'csc227-q25oA', text: 'Deterministic, classical, and binary' },
            { id: 'csc227-q25oB', text: 'Unitary, reversible, and representable as a matrix' },
            { id: 'csc227-q25oC', text: 'Irreversible, probabilistic, and able to clone quantum states' },
            { id: 'csc227-q25oD', text: 'Analog, infinite-dimensional, and non-invertible' }
        ],
        correctOptionId: 'csc227-q25oB',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q26',
        text: 'The S gate and T gate are both phase gates. How many degrees do they rotate a qubit around the z-axis, respectively?',
        options: [
            { id: 'csc227-q26oA', text: 'S = 180°, T = 90°' },
            { id: 'csc227-q26oB', text: 'S = 45°, T = 90°' },
            { id: 'csc227-q26oC', text: 'S = 90°, T = 45°' },
            { id: 'csc227-q26oD', text: 'S = 60°, T = 30°' }
        ],
        correctOptionId: 'csc227-q26oC',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q27',
        text: 'Why can the Bloch sphere only visualise a SINGLE qubit?',
        options: [
            { id: 'csc227-q27oA', text: 'Because the Bloch sphere was only designed for the Pauli-X gate' },
            { id: 'csc227-q27oB', text: 'Because multi-qubit systems exist in exponentially higher-dimensional spaces that cannot be captured by a single 3D sphere' },
            { id: 'csc227-q27oC', text: 'Because entangled qubits always collapse before they can be visualised' },
            { id: 'csc227-q27oD', text: 'Because the Bloch sphere only applies to classical bits that have been quantized' }
        ],
        correctOptionId: 'csc227-q27oB',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q28',
        text: 'How many possible basis states does a system of 3 qubits have?',
        options: [
            { id: 'csc227-q28oA', text: '3' },
            { id: 'csc227-q28oB', text: '6' },
            { id: 'csc227-q28oC', text: '8' },
            { id: 'csc227-q28oD', text: '16' }
        ],
        correctOptionId: 'csc227-q28oC',
        topic: 'Multiple-Qubit Systems and Entanglement'
    },
    {
        id: 'csc227-q29',
        text: 'What mathematical operation is used to combine two separate qubit states into a single joint state?',
        options: [
            { id: 'csc227-q29oA', text: 'Matrix addition' },
            { id: 'csc227-q29oB', text: 'The tensor product (⊗)' },
            { id: 'csc227-q29oC', text: 'The inner product' },
            { id: 'csc227-q29oD', text: 'Classical concatenation' }
        ],
        correctOptionId: 'csc227-q29oB',
        topic: 'Multiple-Qubit Systems and Entanglement'
    },
    {
        id: 'csc227-q30',
        text: 'For the general two-qubit state |ψ⟩ = α|00⟩ + β|01⟩ + γ|10⟩ + δ|11⟩, what is the normalization condition?',
        options: [
            { id: 'csc227-q30oA', text: 'α + β + γ + δ = 1' },
            { id: 'csc227-q30oB', text: '|α|² + |β|² = 1' },
            { id: 'csc227-q30oC', text: '|α|² + |β|² + |γ|² + |δ|² = 1' },
            { id: 'csc227-q30oD', text: '|α × β × γ × δ| = 1' }
        ],
        correctOptionId: 'csc227-q30oC',
        topic: 'Multiple-Qubit Systems and Entanglement'
    },
    {
        id: 'csc227-q31',
        text: 'What is a product (separable) state in a two-qubit system?',
        options: [
            { id: 'csc227-q31oA', text: 'A state in which both qubits are definitely |0⟩' },
            { id: 'csc227-q31oB', text: 'A two-qubit state that can be written as the tensor product of two independent single-qubit states' },
            { id: 'csc227-q31oC', text: 'A state in which both qubits are entangled and share quantum information' },
            { id: 'csc227-q31oD', text: 'A state produced only by applying a CNOT gate' }
        ],
        correctOptionId: 'csc227-q31oB',
        topic: 'Multiple-Qubit Systems and Entanglement'
    },
    {
        id: 'csc227-q32',
        text: 'The Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2 is described as entangled because:',
        options: [
            { id: 'csc227-q32oA', text: 'Both qubits are individually in a 50/50 superposition of 0 and 1' },
            { id: 'csc227-q32oB', text: 'It can be separated into two independent qubit states using the tensor product' },
            { id: 'csc227-q32oC', text: 'It cannot be written as the tensor product of two individual qubit states — the qubits are inseparably correlated' },
            { id: 'csc227-q32oD', text: 'The outcomes 01 and 10 are more likely than 00 and 11' }
        ],
        correctOptionId: 'csc227-q32oC',
        topic: 'Multiple-Qubit Systems and Entanglement'
    },
    {
        id: 'csc227-q33',
        text: 'For the Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2, which measurement outcomes are possible when both qubits are measured?',
        options: [
            { id: 'csc227-q33oA', text: 'All four outcomes 00, 01, 10, and 11 are equally likely' },
            { id: 'csc227-q33oB', text: 'Only 01 and 10 are possible' },
            { id: 'csc227-q33oC', text: 'Only 00 is possible' },
            { id: 'csc227-q33oD', text: 'Only 00 and 11 are possible, each with 50% probability' }
        ],
        correctOptionId: 'csc227-q33oD',
        topic: 'Multiple-Qubit Systems and Entanglement'
    },
    {
        id: 'csc227-q34',
        text: 'In the Bell state |Φ⁺⟩, if the first qubit is measured and collapses to |1⟩, what is the state of the second qubit?',
        options: [
            { id: 'csc227-q34oA', text: 'Still in superposition — the second qubit is unaffected' },
            { id: 'csc227-q34oB', text: 'Definitely |0⟩' },
            { id: 'csc227-q34oC', text: 'Definitely |1⟩' },
            { id: 'csc227-q34oD', text: 'Unknown — measuring the first qubit destroys information about the second' }
        ],
        correctOptionId: 'csc227-q34oC',
        topic: 'Multiple-Qubit Systems and Entanglement'
    },
    {
        id: 'csc227-q35',
        text: 'How does quantum entanglement differ from classical correlation?',
        options: [
            { id: 'csc227-q35oA', text: 'In classical correlation, the correlated values are determined before measurement; in entanglement, neither qubit has a definite state until one is measured' },
            { id: 'csc227-q35oB', text: 'Classical correlation requires two computers; entanglement requires only one' },
            { id: 'csc227-q35oC', text: 'Classical correlation is stronger than quantum entanglement' },
            { id: 'csc227-q35oD', text: 'There is no difference — both describe pre-determined matching values' }
        ],
        correctOptionId: 'csc227-q35oA',
        topic: 'Multiple-Qubit Systems and Entanglement'
    },
    {
        id: 'csc227-q36',
        text: 'What does measuring one qubit of an entangled pair NOT allow you to do?',
        options: [
            { id: 'csc227-q36oA', text: 'Predict what the other qubit will measure' },
            { id: 'csc227-q36oB', text: 'Collapse the joint quantum state' },
            { id: 'csc227-q36oC', text: 'Send a signal or message to the location of the other qubit' },
            { id: 'csc227-q36oD', text: 'Determine the measurement outcome of the other qubit with certainty' }
        ],
        correctOptionId: 'csc227-q36oC',
        topic: 'Multiple-Qubit Systems and Entanglement'
    },
    {
        id: 'csc227-q37',
        text: 'In a quantum circuit diagram, what do the horizontal lines represent?',
        options: [
            { id: 'csc227-q37oA', text: 'Quantum gates sorted by type' },
            { id: 'csc227-q37oB', text: 'The passage of time from bottom to top' },
            { id: 'csc227-q37oC', text: 'Qubits, with operations applied along the line from left to right over time' },
            { id: 'csc227-q37oD', text: 'Classical wires carrying the measured output values' }
        ],
        correctOptionId: 'csc227-q37oC',
        topic: 'Quantum Circuits'
    },
    {
        id: 'csc227-q38',
        text: 'What is the fundamental difference between a quantum gate and a measurement in a quantum circuit?',
        options: [
            { id: 'csc227-q38oA', text: 'A gate operates on two qubits; a measurement operates on one qubit' },
            { id: 'csc227-q38oB', text: 'A gate transforms the quantum state reversibly; measurement collapses the quantum state irreversibly' },
            { id: 'csc227-q38oC', text: 'A gate produces a classical output; measurement produces a quantum output' },
            { id: 'csc227-q38oD', text: 'A gate destroys the qubit; measurement preserves the qubit for further use' }
        ],
        correctOptionId: 'csc227-q38oB',
        topic: 'Quantum Circuits'
    },
    {
        id: 'csc227-q39',
        text: 'Why is mid-circuit measurement considered problematic in quantum computing?',
        options: [
            { id: 'csc227-q39oA', text: 'It requires specialised hardware not available in NISQ devices' },
            { id: 'csc227-q39oB', text: 'It collapses superposition and entanglement early, potentially ruining the quantum advantage that later gates depended on' },
            { id: 'csc227-q39oC', text: 'It converts qubits to classical bits permanently, making further operations impossible' },
            { id: 'csc227-q39oD', text: 'It always gives the wrong answer due to quantum noise' }
        ],
        correctOptionId: 'csc227-q39oB',
        topic: 'Quantum Circuits'
    },
    {
        id: 'csc227-q40',
        text: 'Starting from |00⟩, applying H to the first qubit and then CNOT (control = qubit 1, target = qubit 2) produces:',
        options: [
            { id: 'csc227-q40oA', text: '|01⟩' },
            { id: 'csc227-q40oB', text: 'A product state with qubit 1 in superposition and qubit 2 in |0⟩' },
            { id: 'csc227-q40oC', text: 'The Bell state (|00⟩ + |11⟩)/√2 — an entangled state' },
            { id: 'csc227-q40oD', text: '|11⟩' }
        ],
        correctOptionId: 'csc227-q40oC',
        topic: 'Quantum Circuits'
    },
    {
        id: 'csc227-q41',
        text: 'If you start with |0⟩, apply the X gate, and then measure, what is the result?',
        options: [
            { id: 'csc227-q41oA', text: '0 or 1 with equal probability' },
            { id: 'csc227-q41oB', text: 'Always 0' },
            { id: 'csc227-q41oC', text: 'Always 1' },
            { id: 'csc227-q41oD', text: 'An undefined result because X cannot be applied to |0⟩ directly' }
        ],
        correctOptionId: 'csc227-q41oC',
        topic: 'Quantum Circuits'
    },
    {
        id: 'csc227-q42',
        text: 'Why are quantum gates reversible while classical gates like AND are not?',
        options: [
            { id: 'csc227-q42oA', text: 'Quantum gates operate on photons, which naturally preserve information' },
            { id: 'csc227-q42oB', text: 'Quantum evolution preserves all information — given the output and the gate, the input can always be recovered; AND discards information because different inputs can give the same output' },
            { id: 'csc227-q42oC', text: 'Classical gates process too many bits at once to be reversible' },
            { id: 'csc227-q42oD', text: 'Reversibility is optional in quantum computing and only applies to the Hadamard gate' }
        ],
        correctOptionId: 'csc227-q42oB',
        topic: 'Reversible Computation'
    },
    {
        id: 'csc227-q43',
        text: 'Describe the behaviour of the CNOT gate when applied to the state |10⟩ (control = qubit 1, target = qubit 2):',
        options: [
            { id: 'csc227-q43oA', text: 'The state remains |10⟩ — CNOT only acts when the control is 0' },
            { id: 'csc227-q43oB', text: 'The state becomes |00⟩' },
            { id: 'csc227-q43oC', text: 'The state becomes |11⟩ because the control qubit is 1, so the target qubit flips from 0 to 1' },
            { id: 'csc227-q43oD', text: 'Both qubits are flipped to produce |01⟩' }
        ],
        correctOptionId: 'csc227-q43oC',
        topic: 'Reversible Computation'
    },
    {
        id: 'csc227-q44',
        text: 'What is the output of the CNOT gate applied to |11⟩ (control = qubit 1, target = qubit 2)?',
        options: [
            { id: 'csc227-q44oA', text: '|11⟩ — neither qubit changes' },
            { id: 'csc227-q44oB', text: '|00⟩ — both qubits are flipped' },
            { id: 'csc227-q44oC', text: '|10⟩ — the control qubit is 1, so the target flips from 1 to 0' },
            { id: 'csc227-q44oD', text: '|01⟩ — the control qubit flips and the target stays' }
        ],
        correctOptionId: 'csc227-q44oC',
        topic: 'Reversible Computation'
    },
    {
        id: 'csc227-q45',
        text: 'When does the Toffoli (CCNOT) gate flip its target qubit?',
        options: [
            { id: 'csc227-q45oA', text: 'Whenever at least one of the two control qubits is 1' },
            { id: 'csc227-q45oB', text: 'Only when both control qubits are 1' },
            { id: 'csc227-q45oC', text: 'Whenever the target qubit is 0' },
            { id: 'csc227-q45oD', text: 'Whenever the target qubit is 1' }
        ],
        correctOptionId: 'csc227-q45oB',
        topic: 'Reversible Computation'
    },
    {
        id: 'csc227-q46',
        text: 'What is the purpose of ancilla qubits in quantum computation?',
        options: [
            { id: 'csc227-q46oA', text: 'To serve as the primary output qubits that are measured at the end of a circuit' },
            { id: 'csc227-q46oB', text: 'To hold extra helper information so that classical irreversible logic can be performed reversibly without losing information' },
            { id: 'csc227-q46oC', text: 'To create entanglement between the main qubits' },
            { id: 'csc227-q46oD', text: 'To replace the CNOT gate in circuits that require two-qubit operations' }
        ],
        correctOptionId: 'csc227-q46oB',
        topic: 'Reversible Computation'
    },
    {
        id: 'csc227-q47',
        text: 'What does it mean for a gate set to be "universal" in quantum computing?',
        options: [
            { id: 'csc227-q47oA', text: 'Each gate in the set can independently perform any quantum computation without combining with others' },
            { id: 'csc227-q47oB', text: 'The gate set works on any physical quantum hardware regardless of architecture' },
            { id: 'csc227-q47oC', text: 'Gates in the set can be combined to build or closely approximate any possible quantum circuit' },
            { id: 'csc227-q47oD', text: 'The gate set includes at least one gate for every standard classical logic operation' }
        ],
        correctOptionId: 'csc227-q47oC',
        topic: 'Universal Quantum Gates'
    },
    {
        id: 'csc227-q48',
        text: 'Which of the following is a commonly cited universal quantum gate set?',
        options: [
            { id: 'csc227-q48oA', text: '{X, Y, Z}' },
            { id: 'csc227-q48oB', text: '{H, T, CNOT}' },
            { id: 'csc227-q48oC', text: '{CNOT, Toffoli}' },
            { id: 'csc227-q48oD', text: '{H, X, Measurement}' }
        ],
        correctOptionId: 'csc227-q48oB',
        topic: 'Universal Quantum Gates'
    },
    {
        id: 'csc227-q49',
        text: 'Why is an entangling gate like CNOT essential in any universal quantum gate set?',
        options: [
            { id: 'csc227-q49oA', text: 'Because CNOT is the only gate that can perform phase rotations' },
            { id: 'csc227-q49oB', text: 'Because single-qubit gates alone cannot create entanglement between qubits, so multi-qubit quantum effects would be impossible without it' },
            { id: 'csc227-q49oC', text: 'Because the Hadamard gate requires a CNOT to function correctly' },
            { id: 'csc227-q49oD', text: 'Because CNOT is the only reversible gate in the universal set' }
        ],
        correctOptionId: 'csc227-q49oB',
        topic: 'Universal Quantum Gates'
    },
    {
        id: 'csc227-q50',
        text: 'Why does RSA encryption rely on the difficulty of factoring large numbers?',
        options: [
            { id: 'csc227-q50oA', text: 'Because multiplying two primes is hard but factoring is easy for classical computers' },
            { id: 'csc227-q50oB', text: 'Because multiplying two large primes is easy, but finding those prime factors given only their product is computationally intractable for classical computers' },
            { id: 'csc227-q50oC', text: 'Because RSA uses quantum keys that classical computers cannot read' },
            { id: 'csc227-q50oD', text: 'Because large prime numbers cannot be stored in classical computer memory' }
        ],
        correctOptionId: 'csc227-q50oB',
        topic: "Shor's Algorithm"
    },
    {
        id: 'csc227-q51',
        text: 'What is the central insight of Shor\'s algorithm — how does it convert factoring into a solvable quantum problem?',
        options: [
            { id: 'csc227-q51oA', text: 'It tries every possible factor in parallel using superposition' },
            { id: 'csc227-q51oB', text: 'It converts factoring into a period-finding problem, which can be solved efficiently using the Quantum Fourier Transform' },
            { id: 'csc227-q51oC', text: 'It uses entanglement to instantly communicate the factors from one qubit to another' },
            { id: 'csc227-q51oD', text: 'It uses Grover\'s algorithm to search for the correct factor in √N steps' }
        ],
        correctOptionId: 'csc227-q51oB',
        topic: "Shor's Algorithm"
    },
    {
        id: 'csc227-q52',
        text: 'What is the role of the Quantum Fourier Transform (QFT) in Shor\'s algorithm?',
        options: [
            { id: 'csc227-q52oA', text: 'It directly outputs the prime factors of N' },
            { id: 'csc227-q52oB', text: 'It entangles the two control qubits to produce RSA keys' },
            { id: 'csc227-q52oC', text: 'It reveals the periodic structure in the quantum state, identifying the period r of the modular function' },
            { id: 'csc227-q52oD', text: 'It corrects errors in the qubit states caused by decoherence during the computation' }
        ],
        correctOptionId: 'csc227-q52oC',
        topic: "Shor's Algorithm"
    },
    {
        id: 'csc227-q53',
        text: 'In Shor\'s algorithm, what does the classical post-processing step use the period r to do?',
        options: [
            { id: 'csc227-q53oA', text: 'To directly encrypt a new RSA key' },
            { id: 'csc227-q53oB', text: 'To apply the QFT a second time and refine the period estimate' },
            { id: 'csc227-q53oC', text: 'To compute gcd(a^(r/2) ± 1, N) in order to extract the prime factors of N' },
            { id: 'csc227-q53oD', text: 'To verify that the quantum computer produced the correct answer using a classical check' }
        ],
        correctOptionId: 'csc227-q53oC',
        topic: "Shor's Algorithm"
    },
    {
        id: 'csc227-q54',
        text: 'Which of the following correctly summarises the full sequence of steps in Shor\'s algorithm?',
        options: [
            { id: 'csc227-q54oA', text: 'Factor N directly → check with gcd → output result' },
            { id: 'csc227-q54oB', text: 'Choose random a → check gcd(a, N) → use quantum subroutine with QFT to find period r → use classical gcd to extract factors' },
            { id: 'csc227-q54oC', text: 'Apply Grover search → find smallest factor → divide N → output factors' },
            { id: 'csc227-q54oD', text: 'Entangle qubits → apply Hadamard → measure → read factors directly' }
        ],
        correctOptionId: 'csc227-q54oB',
        topic: "Shor's Algorithm"
    },
    {
        id: 'csc227-q55',
        text: 'How does the QFT differ from the classical Fast Fourier Transform (FFT)?',
        options: [
            { id: 'csc227-q55oA', text: 'They are completely unrelated mathematical tools with no common structure' },
            { id: 'csc227-q55oB', text: 'The QFT operates on quantum states using superposition and interference; the FFT is a classical algorithm for signals — they are mathematically related but the QFT is exponentially faster for periodic quantum problems' },
            { id: 'csc227-q55oC', text: 'The FFT is faster than the QFT for all possible inputs' },
            { id: 'csc227-q55oD', text: 'The QFT outputs classical frequencies; the FFT outputs quantum amplitudes' }
        ],
        correctOptionId: 'csc227-q55oB',
        topic: "Shor's Algorithm"
    },
    {
        id: 'csc227-q56',
        text: 'What type of speedup does Grover\'s algorithm offer for searching an unsorted list of N items?',
        options: [
            { id: 'csc227-q56oA', text: 'Exponential speedup — finding the item in log(N) steps' },
            { id: 'csc227-q56oB', text: 'Linear speedup — finding the item in N/4 steps instead of N/2' },
            { id: 'csc227-q56oC', text: 'Quadratic speedup — finding the item in approximately √N steps instead of N/2' },
            { id: 'csc227-q56oD', text: 'No speedup — Grover\'s algorithm has the same complexity as classical search' }
        ],
        correctOptionId: 'csc227-q56oC',
        topic: "Grover's Algorithm"
    },
    {
        id: 'csc227-q57',
        text: 'What technique does Grover\'s algorithm use to amplify the probability of the correct answer?',
        options: [
            { id: 'csc227-q57oA', text: 'The Quantum Fourier Transform to convert the search to a period-finding problem' },
            { id: 'csc227-q57oB', text: 'Amplitude amplification — repeatedly marking and boosting the correct answer using interference while suppressing wrong answers' },
            { id: 'csc227-q57oC', text: 'Entangling all qubits so the correct answer is instantly correlated across the system' },
            { id: 'csc227-q57oD', text: 'Running the circuit multiple times classically and taking a majority vote' }
        ],
        correctOptionId: 'csc227-q57oB',
        topic: "Grover's Algorithm"
    },
    {
        id: 'csc227-q58',
        text: 'What is a density matrix used for in the context of quantum subsystems?',
        options: [
            { id: 'csc227-q58oA', text: 'To describe the physical layout of qubits on a quantum chip' },
            { id: 'csc227-q58oB', text: 'To mathematically describe a subsystem (e.g., one qubit in an entangled pair) without describing the entire system' },
            { id: 'csc227-q58oC', text: 'To store the results of a quantum measurement for classical analysis' },
            { id: 'csc227-q58oD', text: 'To represent the error rate of a NISQ device' }
        ],
        correctOptionId: 'csc227-q58oB',
        topic: 'Quantum Subsystems and Entanglement'
    },
    {
        id: 'csc227-q59',
        text: 'Why does the reduced density matrix of one qubit in an entangled pair show a "mixed" state?',
        options: [
            { id: 'csc227-q59oA', text: 'Because the qubit has been measured and its superposition has collapsed' },
            { id: 'csc227-q59oB', text: 'Because the qubit\'s state cannot be described independently — information about it is shared with the other entangled qubit, so we have incomplete knowledge when considering it alone' },
            { id: 'csc227-q59oC', text: 'Because mixed states occur whenever a qubit is subjected to the Hadamard gate' },
            { id: 'csc227-q59oD', text: 'Because reduced density matrices always represent classical probability distributions' }
        ],
        correctOptionId: 'csc227-q59oB',
        topic: 'Quantum Subsystems and Entanglement'
    },
    {
        id: 'csc227-q60',
        text: 'What is decoherence in the context of quantum computing?',
        options: [
            { id: 'csc227-q60oA', text: 'The deliberate process of measuring all qubits at the end of a circuit' },
            { id: 'csc227-q60oB', text: 'The loss of quantum behaviour in qubits due to unwanted interaction with the surrounding environment' },
            { id: 'csc227-q60oC', text: 'The application of destructive interference to cancel wrong answers' },
            { id: 'csc227-q60oD', text: 'The process of resetting qubits to |0⟩ between quantum circuit runs' }
        ],
        correctOptionId: 'csc227-q60oB',
        topic: 'Quantum Error Correction'
    },
    {
        id: 'csc227-q61',
        text: 'Why can classical error correction (copying a bit three times) not be directly applied to qubits?',
        options: [
            { id: 'csc227-q61oA', text: 'Because qubits are physically too small to be duplicated by current hardware' },
            { id: 'csc227-q61oB', text: 'Because copying a qubit would violate the No-Cloning Theorem, which forbids making exact copies of unknown quantum states' },
            { id: 'csc227-q61oC', text: 'Because qubits do not experience errors in the same way bits do' },
            { id: 'csc227-q61oD', text: 'Because quantum circuits cannot perform the repetition needed for majority voting' }
        ],
        correctOptionId: 'csc227-q61oB',
        topic: 'Quantum Error Correction'
    },
    {
        id: 'csc227-q62',
        text: 'The Shor code for quantum error correction uses how many physical qubits to encode one logical qubit?',
        options: [
            { id: 'csc227-q62oA', text: '3' },
            { id: 'csc227-q62oB', text: '7' },
            { id: 'csc227-q62oC', text: '9' },
            { id: 'csc227-q62oD', text: '16' }
        ],
        correctOptionId: 'csc227-q62oC',
        topic: 'Quantum Error Correction'
    },
    {
        id: 'csc227-q63',
        text: 'The Steane code for quantum error correction uses how many physical qubits to encode one logical qubit?',
        options: [
            { id: 'csc227-q63oA', text: '5' },
            { id: 'csc227-q63oB', text: '7' },
            { id: 'csc227-q63oC', text: '9' },
            { id: 'csc227-q63oD', text: '12' }
        ],
        correctOptionId: 'csc227-q63oB',
        topic: 'Quantum Error Correction'
    },
    {
        id: 'csc227-q64',
        text: 'What does "fault-tolerant quantum computing" mean?',
        options: [
            { id: 'csc227-q64oA', text: 'A quantum computer that operates with zero errors due to perfect hardware' },
            { id: 'csc227-q64oB', text: 'Designing quantum circuits so that errors do not cascade and destroy the entire computation, allowing correct results despite imperfections' },
            { id: 'csc227-q64oC', text: 'A NISQ device that has been calibrated to reduce noise below 1%' },
            { id: 'csc227-q64oD', text: 'A quantum algorithm that avoids using entanglement to sidestep error-prone gates' }
        ],
        correctOptionId: 'csc227-q64oB',
        topic: 'Quantum Error Correction'
    },
    {
        id: 'csc227-q65',
        text: 'The No-Cloning Theorem states that:',
        options: [
            { id: 'csc227-q65oA', text: 'A quantum state cannot be teleported to another location' },
            { id: 'csc227-q65oB', text: 'Two identical qubits cannot be entangled' },
            { id: 'csc227-q65oC', text: 'It is impossible to create an exact copy of an unknown quantum state' },
            { id: 'csc227-q65oD', text: 'Quantum gates cannot produce the same output twice in a row' }
        ],
        correctOptionId: 'csc227-q65oC',
        topic: 'Quantum Error Correction'
    },
    {
        id: 'csc227-q66',
        text: 'Which of the following correctly maps a term to its definition?',
        options: [
            { id: 'csc227-q66oA', text: 'Unitary gate: a gate that collapses the qubit state upon application' },
            { id: 'csc227-q66oB', text: 'Bell state: a classical correlation between two bits held in separate registers' },
            { id: 'csc227-q66oC', text: 'Tensor product: the mathematical operation used to combine two qubit states into a joint multi-qubit state' },
            { id: 'csc227-q66oD', text: 'Normalization: the process of resetting qubits to |0⟩ after measurement' }
        ],
        correctOptionId: 'csc227-q66oC',
        topic: 'Key Definitions and Glossary'
    },
    {
        id: 'csc227-q67',
        text: 'What happens on the Bloch sphere when a quantum gate is applied to a qubit?',
        options: [
            { id: 'csc227-q67oA', text: 'The qubit disappears from the sphere until the gate finishes' },
            { id: 'csc227-q67oB', text: 'The gate collapses the qubit to either the north or south pole' },
            { id: 'csc227-q67oC', text: 'The gate corresponds to a rotation of the qubit\'s point to a new position on the sphere' },
            { id: 'csc227-q67oD', text: 'The qubit moves to the equator regardless of which gate is applied' }
        ],
        correctOptionId: 'csc227-q67oC',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q68',
        text: 'Quantum computers are described as "specialised tools" rather than replacements for classical computers. Which scenario best illustrates this?',
        options: [
            { id: 'csc227-q68oA', text: 'Using a quantum computer to write and save a text document' },
            { id: 'csc227-q68oB', text: 'Using a quantum computer to simulate molecular interactions for drug discovery — a task that is intractable on classical computers' },
            { id: 'csc227-q68oC', text: 'Running a quantum computer as a faster web browser' },
            { id: 'csc227-q68oD', text: 'Replacing all classical bits with qubits to make smartphones faster' }
        ],
        correctOptionId: 'csc227-q68oB',
        topic: 'What Is Quantum Computing'
    },
    {
        id: 'csc227-q69',
        text: 'The Pauli-Y gate has which of the following effects on a qubit?',
        options: [
            { id: 'csc227-q69oA', text: 'It only changes the phase of |1⟩ without flipping the qubit' },
            { id: 'csc227-q69oB', text: 'It flips the qubit AND adds a complex phase factor, corresponding to a 180° rotation about the y-axis on the Bloch sphere' },
            { id: 'csc227-q69oC', text: 'It creates an equal superposition identical to the Hadamard gate' },
            { id: 'csc227-q69oD', text: 'It has no effect on |0⟩ and flips |1⟩ to |0⟩ only' }
        ],
        correctOptionId: 'csc227-q69oB',
        topic: 'Single-Qubit Systems and Quantum Gates'
    },
    {
        id: 'csc227-q70',
        text: 'How many physical qubits does a 300-qubit quantum system represent in terms of simultaneous states, and why is this significant?',
        options: [
            { id: 'csc227-q70oA', text: '600 states — double the number of qubits' },
            { id: 'csc227-q70oB', text: '300² = 90,000 states — a polynomial increase' },
            { id: 'csc227-q70oC', text: '2³⁰⁰ states — more than the number of atoms in the observable universe, illustrating the exponential power of quantum parallelism' },
            { id: 'csc227-q70oD', text: 'Exactly 300 states — one state per qubit as in classical computing' }
        ],
        correctOptionId: 'csc227-q70oC',
        topic: 'Multiple-Qubit Systems and Entanglement'
    }
];