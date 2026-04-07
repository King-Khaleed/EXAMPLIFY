import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 'bio107-q1',
    text: 'What is the primary aim of Biology Practical 1 (BIO 107)?',
    options: [
      { id: 'bio107-q1oA', text: 'To examine chemical reactions in cells' },
      { id: 'bio107-q1oB', text: 'To study plant anatomy through dissection' },
      { id: 'bio107-q1oC', text: 'To examine structures using Bright Field Microscopy' },
      { id: 'bio107-q1oD', text: 'To identify bacteria using staining techniques only' }
    ],
    correctOptionId: 'bio107-q1oC',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q2',
    text: 'Which of the following is NOT a listed material for the Microscopy practical?',
    options: [
      { id: 'bio107-q2oA', text: 'Compound microscope' },
      { id: 'bio107-q2oB', text: 'Centrifuge' },
      { id: 'bio107-q2oC', text: 'Lens paper and lens cleaner' },
      { id: 'bio107-q2oD', text: 'Prepared stained slides of bacteria' }
    ],
    correctOptionId: 'bio107-q2oB',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q3',
    text: 'A microscope is best described as:',
    options: [
      { id: 'bio107-q3oA', text: 'A device for cutting thin sections of tissue' },
      { id: 'bio107-q3oB', text: 'A machine that produces electron beams for imaging' },
      { id: 'bio107-q3oC', text: 'A tool used exclusively for chemical analysis' },
      { id: 'bio107-q3oD', text: 'An instrument designed to magnify images of structures otherwise invisible to the naked eye' }
    ],
    correctOptionId: 'bio107-q3oD',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q4',
    text: 'Microscopes are made in how many major forms, and what are they?',
    options: [
      { id: 'bio107-q4oA', text: 'Three — monocular, binocular, and trinocular' },
      { id: 'bio107-q4oB', text: 'Two — monocular and binocular' },
      { id: 'bio107-q4oC', text: 'Four — simple, compound, electron, and scanning' },
      { id: 'bio107-q4oD', text: 'Two — light and electron only' }
    ],
    correctOptionId: 'bio107-q4oB',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q5',
    text: 'What is the correct procedure when carrying a microscope from one location to another?',
    options: [
      { id: 'bio107-q5oA', text: 'Carry it with one hand by the arm and move quickly' },
      { id: 'bio107-q5oB', text: 'Slide it carefully across the bench surface' },
      { id: 'bio107-q5oC', text: 'Carry it with two hands and place it on a flat bench away from vibration' },
      { id: 'bio107-q5oD', text: 'Hold it by the stage and walk slowly' }
    ],
    correctOptionId: 'bio107-q5oC',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q6',
    text: 'Which objective lens must be in position FIRST before placing a slide on the microscope stage?',
    options: [
      { id: 'bio107-q6oA', text: '100x oil immersion objective' },
      { id: 'bio107-q6oB', text: '40x objective' },
      { id: 'bio107-q6oC', text: '10x objective' },
      { id: 'bio107-q6oD', text: '4x objective' }
    ],
    correctOptionId: 'bio107-q6oD',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q7',
    text: 'What should be used to clean microscope lenses, and what must be avoided?',
    options: [
      { id: 'bio107-q7oA', text: 'Cotton wool and acetone; avoid lens cleaner' },
      { id: 'bio107-q7oB', text: 'Lens paper and lens cleaner if necessary; avoid paper towels as they can scratch lenses' },
      { id: 'bio107-q7oC', text: 'Cloth and methylated spirit; avoid water' },
      { id: 'bio107-q7oD', text: 'Paper towels and distilled water; avoid lens cleaner' }
    ],
    correctOptionId: 'bio107-q7oB',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q8',
    text: 'When lowering the microscope tube with the low-power objective, the tip of the objective should be within how many mm of the slide?',
    options: [
      { id: 'bio107-q8oA', text: '1 mm' },
      { id: 'bio107-q8oB', text: '10 mm' },
      { id: 'bio107-q8oC', text: '2 mm' },
      { id: 'bio107-q8oD', text: '5 mm' }
    ],
    correctOptionId: 'bio107-q8oD',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q9',
    text: 'To bring a specimen into view after lowering the objective to within 5 mm of the slide, the coarse adjustment knob should be turned:',
    options: [
      { id: 'bio107-q9oA', text: 'Clockwise to lower the tube rapidly' },
      { id: 'bio107-q9oB', text: 'Counterclockwise to slowly raise the tube until the object comes into view' },
      { id: 'bio107-q9oC', text: 'Only after using the fine adjustment knob first' },
      { id: 'bio107-q9oD', text: 'Rapidly in any direction' }
    ],
    correctOptionId: 'bio107-q9oB',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q10',
    text: 'The oil immersion lens is specifically used to examine:',
    options: [
      { id: 'bio107-q10oA', text: 'Large plant specimens at low power' },
      { id: 'bio107-q10oB', text: 'Algae in pond water at medium magnification' },
      { id: 'bio107-q10oC', text: 'Stained bacteria slides at high magnification' },
      { id: 'bio107-q10oD', text: 'Unstained animal tissues at 40x' }
    ],
    correctOptionId: 'bio107-q10oC',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q11',
    text: 'After finishing with the microscope, which sequence of final steps is correct?',
    options: [
      { id: 'bio107-q11oA', text: 'Leave the high-power objective in place and cover the microscope' },
      { id: 'bio107-q11oB', text: 'Remove the oculars and store them separately' },
      { id: 'bio107-q11oC', text: 'Leave the slide on the stage for the next user' },
      { id: 'bio107-q11oD', text: 'Place the low-power objective in line with the ocular, lower the tube, clean oil from the oil immersion lens with lens paper, cover, and return to storage' }
    ],
    correctOptionId: 'bio107-q11oD',
    topic: 'Microscopy'
  },
  {
    id: 'bio107-q12',
    text: 'What is the aim of the Cell Structure practical in BIO 107?',
    options: [
      { id: 'bio107-q12oA', text: 'To culture bacteria on agar plates and measure growth' },
      { id: 'bio107-q12oB', text: 'To observe samples of plant and animal cells from various sources under the microscope' },
      { id: 'bio107-q12oC', text: 'To dissect a frog and examine its internal organs' },
      { id: 'bio107-q12oD', text: 'To measure enzyme activity in plant cells' }
    ],
    correctOptionId: 'bio107-q12oB',
    topic: 'Cell Structure'
  },
  {
    id: 'bio107-q13',
    text: 'Which stain is used when preparing onion peel cells for microscopic observation?',
    options: [
      { id: 'bio107-q13oA', text: 'Methylene blue' },
      { id: 'bio107-q13oB', text: 'Gram stain' },
      { id: 'bio107-q13oC', text: 'Iodine solution' },
      { id: 'bio107-q13oD', text: 'Safranin' }
    ],
    correctOptionId: 'bio107-q13oD',
    topic: 'Cell Structure'
  },
  {
    id: 'bio107-q14',
    text: 'The cell is defined as the smallest basic unit of life because:',
    options: [
      { id: 'bio107-q14oA', text: 'It is visible to the naked eye and found in all plants' },
      { id: 'bio107-q14oB', text: 'It carries out all life processes and is made up of protoplasm and membrane' },
      { id: 'bio107-q14oC', text: 'It lacks a nucleus and performs only chemical reactions' },
      { id: 'bio107-q14oD', text: 'It is found only in animals and contains only a membrane' }
    ],
    correctOptionId: 'bio107-q14oB',
    topic: 'Cell Structure'
  },
  {
    id: 'bio107-q15',
    text: 'Which three structures are labeled in the diagram of onion peel cells (Fig 3)?',
    options: [
      { id: 'bio107-q15oA', text: 'Mitochondria, vacuole, and ribosome' },
      { id: 'bio107-q15oB', text: 'Chloroplast, cell membrane, and Golgi body' },
      { id: 'bio107-q15oC', text: 'Cell wall, nucleus, and cytoplasm' },
      { id: 'bio107-q15oD', text: 'Nucleolus, endoplasmic reticulum, and lysosome' }
    ],
    correctOptionId: 'bio107-q15oC',
    topic: 'Cell Structure'
  },
  {
    id: 'bio107-q16',
    text: 'Which structures are labeled in the diagram of human cheek epithelial cells (Fig 4)?',
    options: [
      { id: 'bio107-q16oA', text: 'Cell wall, chloroplast, and large central vacuole' },
      { id: 'bio107-q16oB', text: 'Nuclear membrane, cytoplasm, cell membrane, and nucleus' },
      { id: 'bio107-q16oC', text: 'Hyphae, mycelium, and rhizoids' },
      { id: 'bio107-q16oD', text: 'Flagella, pili, and capsule' }
    ],
    correctOptionId: 'bio107-q16oB',
    topic: 'Cell Structure'
  },
  {
    id: 'bio107-q17',
    text: 'Why must onion peel NOT be left too long in air after peeling during slide preparation?',
    options: [
      { id: 'bio107-q17oA', text: 'It becomes toxic and dangerous to handle' },
      { id: 'bio107-q17oB', text: 'It loses its staining affinity immediately upon air exposure' },
      { id: 'bio107-q17oC', text: 'It will dry and show air bubbles in the preparation, obscuring observation' },
      { id: 'bio107-q17oD', text: 'It starts to divide uncontrollably when exposed to air' }
    ],
    correctOptionId: 'bio107-q17oC',
    topic: 'Cell Structure'
  },
  {
    id: 'bio107-q18',
    text: 'Which objective lenses are used to examine the onion cell preparation?',
    options: [
      { id: 'bio107-q18oA', text: 'x4 and x10' },
      { id: 'bio107-q18oB', text: 'x10 and x40' },
      { id: 'bio107-q18oC', text: 'x40 and x100' },
      { id: 'bio107-q18oD', text: 'x100 only' }
    ],
    correctOptionId: 'bio107-q18oB',
    topic: 'Cell Structure'
  },
  {
    id: 'bio107-q19',
    text: 'Which reagent from the Cell Structure materials list is used to stain animal (cheek) cells?',
    options: [
      { id: 'bio107-q19oA', text: 'Safranin' },
      { id: 'bio107-q19oB', text: 'Aceto-orcein' },
      { id: 'bio107-q19oC', text: 'Lacto-phenol stain' },
      { id: 'bio107-q19oD', text: 'Iodine solution' }
    ],
    correctOptionId: 'bio107-q19oD',
    topic: 'Cell Structure'
  },
  {
    id: 'bio107-q20',
    text: 'Cell division is best described as:',
    options: [
      { id: 'bio107-q20oA', text: 'The movement of nutrients across cell membranes' },
      { id: 'bio107-q20oB', text: 'The process whereby the nucleus divides, followed by subsequent division of the cytoplasm' },
      { id: 'bio107-q20oC', text: 'The replication of DNA without nuclear division' },
      { id: 'bio107-q20oD', text: 'The fusion of two cells to form a single larger cell' }
    ],
    correctOptionId: 'bio107-q20oB',
    topic: 'Cell Division'
  },
  {
    id: 'bio107-q21',
    text: 'Which statement best describes mitosis?',
    options: [
      { id: 'bio107-q21oA', text: 'Division of a diploid cell into four haploid daughter cells' },
      { id: 'bio107-q21oB', text: 'Division resulting in genetically different daughter cells' },
      { id: 'bio107-q21oC', text: 'Division of a diploid mother cell into two diploid daughter cells genetically identical to the mother' },
      { id: 'bio107-q21oD', text: 'Division that occurs only in reproductive (germ) cells' }
    ],
    correctOptionId: 'bio107-q21oC',
    topic: 'Cell Division'
  },
  {
    id: 'bio107-q22',
    text: 'How does meiosis differ from mitosis in terms of the daughter cells produced?',
    options: [
      { id: 'bio107-q22oA', text: 'Meiosis produces two identical diploid cells, just like mitosis' },
      { id: 'bio107-q22oB', text: 'Meiosis produces four haploid daughter cells' },
      { id: 'bio107-q22oC', text: 'Meiosis occurs only in somatic cells and produces two cells' },
      { id: 'bio107-q22oD', text: 'Meiosis does not involve nuclear division' }
    ],
    correctOptionId: 'bio107-q22oB',
    topic: 'Cell Division'
  },
  {
    id: 'bio107-q23',
    text: 'The non-dividing phase of the cell cycle, where assimilation and synthesis of materials take place, is called:',
    options: [
      { id: 'bio107-q23oA', text: 'Metaphase' },
      { id: 'bio107-q23oB', text: 'Anaphase' },
      { id: 'bio107-q23oC', text: 'Telophase' },
      { id: 'bio107-q23oD', text: 'Interphase (resting stage)' }
    ],
    correctOptionId: 'bio107-q23oD',
    topic: 'Cell Division'
  },
  {
    id: 'bio107-q24',
    text: 'Karyokinesis and cytokinesis refer respectively to:',
    options: [
      { id: 'bio107-q24oA', text: 'Division of the cytoplasm; division of nuclear materials' },
      { id: 'bio107-q24oB', text: 'Replication of organelles; formation of the cell membrane' },
      { id: 'bio107-q24oC', text: 'Division of nuclear materials; division of the cytoplasm' },
      { id: 'bio107-q24oD', text: 'DNA synthesis; protein synthesis' }
    ],
    correctOptionId: 'bio107-q24oC',
    topic: 'Cell Division'
  },
  {
    id: 'bio107-q25',
    text: 'What is the correct sequence of stages in karyokinesis (mitosis)?',
    options: [
      { id: 'bio107-q25oA', text: 'Metaphase → Prophase → Anaphase → Telophase' },
      { id: 'bio107-q25oB', text: 'Anaphase → Metaphase → Prophase → Telophase' },
      { id: 'bio107-q25oC', text: 'Telophase → Anaphase → Metaphase → Prophase' },
      { id: 'bio107-q25oD', text: 'Prophase → Metaphase → Anaphase → Telophase' }
    ],
    correctOptionId: 'bio107-q25oD',
    topic: 'Cell Division'
  },
  {
    id: 'bio107-q26',
    text: 'Which two reagents are used to stain onion root tips in the mitosis practical?',
    options: [
      { id: 'bio107-q26oA', text: 'Safranin and distilled water' },
      { id: 'bio107-q26oB', text: 'Acetic orcein and molar HCl' },
      { id: 'bio107-q26oC', text: 'Iodine solution and ethanol' },
      { id: 'bio107-q26oD', text: 'Methylene blue and acetic acid' }
    ],
    correctOptionId: 'bio107-q26oB',
    topic: 'Cell Division'
  },
  {
    id: 'bio107-q27',
    text: 'Why is the onion root kept in darkness for several days before use in the mitosis practical?',
    options: [
      { id: 'bio107-q27oA', text: 'To prevent photosynthesis from interfering with the staining process' },
      { id: 'bio107-q27oB', text: 'To promote rapid cell division in the meristematic region of the root tip' },
      { id: 'bio107-q27oC', text: 'To kill the root cells so they absorb stain better' },
      { id: 'bio107-q27oD', text: 'To allow the root to absorb the acetic orcein naturally' }
    ],
    correctOptionId: 'bio107-q27oB',
    topic: 'Cell Division'
  },
  {
    id: 'bio107-q28',
    text: 'After heating the root tip over a Bunsen flame during the mitosis practical, how long should it be left before squashing?',
    options: [
      { id: 'bio107-q28oA', text: '1 minute' },
      { id: 'bio107-q28oB', text: '30 seconds' },
      { id: 'bio107-q28oC', text: 'At least 5 minutes' },
      { id: 'bio107-q28oD', text: '10 minutes' }
    ],
    correctOptionId: 'bio107-q28oC',
    topic: 'Cell Division'
  },
  {
    id: 'bio107-q29',
    text: 'How is the squash preparation made in the mitosis practical, and what is the purpose?',
    options: [
      { id: 'bio107-q29oA', text: 'Boiling the slide in acid to burst the cells open' },
      { id: 'bio107-q29oB', text: 'Lightly tapping the cover slip using a pencil to spread cells into a single layer for clear observation' },
      { id: 'bio107-q29oC', text: 'Cutting the root tip with a sharp blade and mounting dry' },
      { id: 'bio107-q29oD', text: 'Centrifuging the root tip suspension to pellet the cells' }
    ],
    correctOptionId: 'bio107-q29oB',
    topic: 'Cell Division'
  },
  {
    id: 'bio107-q30',
    text: 'Algae are generally classified based on their:',
    options: [
      { id: 'bio107-q30oA', text: 'Mode of reproduction only' },
      { id: 'bio107-q30oB', text: 'Body form — unicellular, colonial, or filamentous' },
      { id: 'bio107-q30oC', text: 'Antibiotic resistance profile' },
      { id: 'bio107-q30oD', text: 'Presence or absence of mitochondria' }
    ],
    correctOptionId: 'bio107-q30oB',
    topic: 'Identification of Algae'
  },
  {
    id: 'bio107-q31',
    text: 'Which of the following is an example of a filamentous alga?',
    options: [
      { id: 'bio107-q31oA', text: 'Euglena' },
      { id: 'bio107-q31oB', text: 'Amoeba' },
      { id: 'bio107-q31oC', text: 'Volvox' },
      { id: 'bio107-q31oD', text: 'Spirogyra' }
    ],
    correctOptionId: 'bio107-q31oD',
    topic: 'Identification of Algae'
  },
  {
    id: 'bio107-q32',
    text: 'What mode of nutrition do algae exhibit?',
    options: [
      { id: 'bio107-q32oA', text: 'Heterotrophic — they feed on other organisms' },
      { id: 'bio107-q32oB', text: 'Autotrophic — they produce their own food through photosynthesis' },
      { id: 'bio107-q32oC', text: 'Saprophytic — they feed on dead and decaying matter' },
      { id: 'bio107-q32oD', text: 'Parasitic — they obtain nutrients from a living host' }
    ],
    correctOptionId: 'bio107-q32oB',
    topic: 'Identification of Algae'
  },
  {
    id: 'bio107-q33',
    text: 'Which set of materials is required for the algae identification practical?',
    options: [
      { id: 'bio107-q33oA', text: 'Blood agar, petri dish, and incubator' },
      { id: 'bio107-q33oB', text: 'Onion bulb, safranin, and forceps' },
      { id: 'bio107-q33oC', text: 'Bunsen burner, HCl, and acetic orcein' },
      { id: 'bio107-q33oD', text: 'Pond water, compound microscope, glass slide, cover slip, dropper, and glycerine' }
    ],
    correctOptionId: 'bio107-q33oD',
    topic: 'Identification of Algae'
  },
  {
    id: 'bio107-q34',
    text: 'Algae have a thicker cell wall with which distinctive features?',
    options: [
      { id: 'bio107-q34oA', text: 'Flagella and pili' },
      { id: 'bio107-q34oB', text: 'A large vacuole and a highly organized nucleus each with delaminating nuclear envelopes' },
      { id: 'bio107-q34oC', text: 'A rigid peptidoglycan capsule' },
      { id: 'bio107-q34oD', text: 'Chloroplasts and mitochondria arranged in concentric layers' }
    ],
    correctOptionId: 'bio107-q34oB',
    topic: 'Identification of Algae'
  },
  {
    id: 'bio107-q35',
    text: 'What is the first step in the algae identification procedure?',
    options: [
      { id: 'bio107-q35oA', text: 'Add glycerine and cover with a cover slip immediately' },
      { id: 'bio107-q35oB', text: 'Heat the pond water over a flame to concentrate algae' },
      { id: 'bio107-q35oC', text: 'Place a small drop of pond water on the centre of a clean glass slide using a dropper' },
      { id: 'bio107-q35oD', text: 'Centrifuge the pond water to pellet the algae' }
    ],
    correctOptionId: 'bio107-q35oC',
    topic: 'Identification of Algae'
  },
  {
    id: 'bio107-q36',
    text: 'What is the aim of the Fungi identification practical?',
    options: [
      { id: 'bio107-q36oA', text: 'To culture fungi in liquid broth and measure growth rate' },
      { id: 'bio107-q36oB', text: 'To identify the morphology of fungi' },
      { id: 'bio107-q36oC', text: 'To isolate fungi from infected plant tissue' },
      { id: 'bio107-q36oD', text: 'To compare fungal and bacterial antibiotic resistance' }
    ],
    correctOptionId: 'bio107-q36oB',
    topic: 'Identification of Fungi'
  },
  {
    id: 'bio107-q37',
    text: 'The hyphae of fungi are best described as:',
    options: [
      { id: 'bio107-q37oA', text: 'Spherical cells arranged in chains' },
      { id: 'bio107-q37oB', text: 'Flat disk-shaped cells used for reproduction' },
      { id: 'bio107-q37oC', text: 'Flagellated swimming cells found in pond water' },
      { id: 'bio107-q37oD', text: 'Elongated, tubular filamentous structures with a rigid wall made of chitin' }
    ],
    correctOptionId: 'bio107-q37oD',
    topic: 'Identification of Fungi'
  },
  {
    id: 'bio107-q38',
    text: 'The mass of interwoven hyphae that forms the body of a fungus is called:',
    options: [
      { id: 'bio107-q38oA', text: 'Rhizoids' },
      { id: 'bio107-q38oB', text: 'Mycelium' },
      { id: 'bio107-q38oC', text: 'Sporangium' },
      { id: 'bio107-q38oD', text: 'Thallus' }
    ],
    correctOptionId: 'bio107-q38oB',
    topic: 'Identification of Fungi'
  },
  {
    id: 'bio107-q39',
    text: 'What is the function of rhizoids in fungi?',
    options: [
      { id: 'bio107-q39oA', text: 'To produce spores for asexual reproduction' },
      { id: 'bio107-q39oB', text: 'To anchor the fungus and absorb digested organic materials from the substrate' },
      { id: 'bio107-q39oC', text: 'To perform photosynthesis in the absence of light' },
      { id: 'bio107-q39oD', text: 'To form the reproductive cap structure seen in mushrooms' }
    ],
    correctOptionId: 'bio107-q39oB',
    topic: 'Identification of Fungi'
  },
  {
    id: 'bio107-q40',
    text: 'Fungi store their food in the form of:',
    options: [
      { id: 'bio107-q40oA', text: 'Starch' },
      { id: 'bio107-q40oB', text: 'Sucrose' },
      { id: 'bio107-q40oC', text: 'Cellulose' },
      { id: 'bio107-q40oD', text: 'Glycogen' }
    ],
    correctOptionId: 'bio107-q40oD',
    topic: 'Identification of Fungi'
  },
  {
    id: 'bio107-q41',
    text: 'In the bread mould practical, the bread is left covered for how many days to allow visible fungal growth?',
    options: [
      { id: 'bio107-q41oA', text: '1–2 days' },
      { id: 'bio107-q41oB', text: '4–5 days' },
      { id: 'bio107-q41oC', text: '10 days' },
      { id: 'bio107-q41oD', text: '24 hours only' }
    ],
    correctOptionId: 'bio107-q41oB',
    topic: 'Identification of Fungi'
  },
  {
    id: 'bio107-q42',
    text: 'Which stain is used in the fungi identification practical and why?',
    options: [
      { id: 'bio107-q42oA', text: 'Safranin — because it stains plant cell walls red' },
      { id: 'bio107-q42oB', text: 'Lacto-phenol cotton blue stain — because it specifically stains chitin in fungal cell walls blue' },
      { id: 'bio107-q42oC', text: 'Iodine solution — because it reacts with glycogen to produce a dark colour' },
      { id: 'bio107-q42oD', text: 'Aceto-orcein — because it stains fungal chromosomes during division' }
    ],
    correctOptionId: 'bio107-q42oB',
    topic: 'Identification of Fungi'
  },
  {
    id: 'bio107-q43',
    text: 'Fungi may exist in which of the following combinations of forms and lifestyles?',
    options: [
      { id: 'bio107-q43oA', text: 'Only unicellular and always parasitic' },
      { id: 'bio107-q43oB', text: 'Only multicellular and filamentous' },
      { id: 'bio107-q43oC', text: 'Unicellular, multicellular, or filamentous; living as parasitic, saprophytic, or symbiotic' },
      { id: 'bio107-q43oD', text: 'Only saprophytic and symbiotic' }
    ],
    correctOptionId: 'bio107-q43oC',
    topic: 'Identification of Fungi'
  },
  {
    id: 'bio107-q44',
    text: 'The resolving power of a microscope is defined as:',
    options: [
      { id: 'bio107-q44oA', text: 'The ability to make objects appear larger' },
      { id: 'bio107-q44oB', text: 'The brightness of the light source used in the microscope' },
      { id: 'bio107-q44oC', text: 'The ability to distinguish two closely spaced points as separate and distinct' },
      { id: 'bio107-q44oD', text: 'The number of objective lenses available on the nosepiece' }
    ],
    correctOptionId: 'bio107-q44oC',
    topic: 'Extended Knowledge — Microscopy'
  },
  {
    id: 'bio107-q45',
    text: 'Which type of microscope uses a beam of electrons instead of light to form an image?',
    options: [
      { id: 'bio107-q45oA', text: 'Bright-field light microscope' },
      { id: 'bio107-q45oB', text: 'Electron microscope' },
      { id: 'bio107-q45oC', text: 'Phase-contrast microscope' },
      { id: 'bio107-q45oD', text: 'Fluorescence microscope' }
    ],
    correctOptionId: 'bio107-q45oB',
    topic: 'Extended Knowledge — Microscopy'
  },
  {
    id: 'bio107-q46',
    text: 'How is total magnification of a compound microscope calculated?',
    options: [
      { id: 'bio107-q46oA', text: 'Objective lens power + Eyepiece lens power' },
      { id: 'bio107-q46oB', text: 'Objective lens power ÷ Eyepiece lens power' },
      { id: 'bio107-q46oC', text: 'Eyepiece lens power only' },
      { id: 'bio107-q46oD', text: 'Objective lens power × Eyepiece lens power' }
    ],
    correctOptionId: 'bio107-q46oD',
    topic: 'Extended Knowledge — Microscopy'
  },
  {
    id: 'bio107-q47',
    text: 'Why is immersion oil used with the 100x oil immersion objective?',
    options: [
      { id: 'bio107-q47oA', text: 'It cools the lens to prevent heat damage from the light source' },
      { id: 'bio107-q47oB', text: 'It stains the specimen for better visibility at high magnification' },
      { id: 'bio107-q47oC', text: 'It has the same refractive index as glass, reducing light diffraction and improving resolution' },
      { id: 'bio107-q47oD', text: 'It lubricates the stage for smooth mechanical movement' }
    ],
    correctOptionId: 'bio107-q47oC',
    topic: 'Extended Knowledge — Microscopy'
  },
  {
    id: 'bio107-q48',
    text: 'Which organelle is responsible for producing ATP (energy) in eukaryotic cells?',
    options: [
      { id: 'bio107-q48oA', text: 'Ribosome' },
      { id: 'bio107-q48oB', text: 'Golgi apparatus' },
      { id: 'bio107-q48oC', text: 'Lysosome' },
      { id: 'bio107-q48oD', text: 'Mitochondrion' }
    ],
    correctOptionId: 'bio107-q48oD',
    topic: 'Extended Knowledge — Cell Structure'
  },
  {
    id: 'bio107-q49',
    text: 'Which of the following correctly distinguishes a plant cell from an animal cell?',
    options: [
      { id: 'bio107-q49oA', text: 'Plant cells have mitochondria; animal cells do not' },
      { id: 'bio107-q49oB', text: 'Animal cells are always larger in size than plant cells' },
      { id: 'bio107-q49oC', text: 'Animal cells have a nucleus; plant cells do not' },
      { id: 'bio107-q49oD', text: 'Plant cells have a cell wall, chloroplasts, and a large central vacuole; animal cells lack these' }
    ],
    correctOptionId: 'bio107-q49oD',
    topic: 'Extended Knowledge — Cell Structure'
  },
  {
    id: 'bio107-q50',
    text: 'The fluid mosaic model describes the structure of which cellular component?',
    options: [
      { id: 'bio107-q50oA', text: 'The nuclear envelope' },
      { id: 'bio107-q50oB', text: 'The cell (plasma) membrane' },
      { id: 'bio107-q50oC', text: 'The endoplasmic reticulum' },
      { id: 'bio107-q50oD', text: 'The mitochondrial matrix' }
    ],
    correctOptionId: 'bio107-q50oB',
    topic: 'Extended Knowledge — Cell Structure'
  },
  {
    id: 'bio107-q51',
    text: 'Prokaryotic cells differ from eukaryotic cells mainly because prokaryotes:',
    options: [
      { id: 'bio107-q51oA', text: 'Are always larger in size than eukaryotic cells' },
      { id: 'bio107-q51oB', text: 'Have membrane-bound organelles and a true nucleus' },
      { id: 'bio107-q51oC', text: 'Lack a membrane-bound nucleus and membrane-bound organelles' },
      { id: 'bio107-q51oD', text: 'Cannot carry out cellular respiration' }
    ],
    correctOptionId: 'bio107-q51oC',
    topic: 'Extended Knowledge — Cell Structure'
  },
  {
    id: 'bio107-q52',
    text: 'During which phase of mitosis do chromosomes align along the cell\'s equatorial plate?',
    options: [
      { id: 'bio107-q52oA', text: 'Prophase' },
      { id: 'bio107-q52oB', text: 'Metaphase' },
      { id: 'bio107-q52oC', text: 'Anaphase' },
      { id: 'bio107-q52oD', text: 'Telophase' }
    ],
    correctOptionId: 'bio107-q52oB',
    topic: 'Extended Knowledge — Cell Division'
  },
  {
    id: 'bio107-q53',
    text: 'How does cytokinesis in plant cells differ from that in animal cells?',
    options: [
      { id: 'bio107-q53oA', text: 'Plant cells do not undergo cytokinesis at all' },
      { id: 'bio107-q53oB', text: 'Animal cells form a cell plate from Golgi vesicles; plant cells form a cleavage furrow' },
      { id: 'bio107-q53oC', text: 'Plant cells use centrioles to divide the cytoplasm; animal cells do not' },
      { id: 'bio107-q53oD', text: 'Plant cells form a cell plate from Golgi vesicles that develops into a new cell wall; animal cells form a cleavage furrow' }
    ],
    correctOptionId: 'bio107-q53oD',
    topic: 'Extended Knowledge — Cell Division'
  },
  {
    id: 'bio107-q54',
    text: 'What is the primary biological significance of mitosis to a living organism?',
    options: [
      { id: 'bio107-q54oA', text: 'It produces gametes for sexual reproduction' },
      { id: 'bio107-q54oB', text: 'It allows growth, repair of damaged tissues, and replacement of old cells' },
      { id: 'bio107-q54oC', text: 'It reduces the chromosome number by half to maintain ploidy' },
      { id: 'bio107-q54oD', text: 'It creates genetic variation in offspring' }
    ],
    correctOptionId: 'bio107-q54oB',
    topic: 'Extended Knowledge — Cell Division'
  },
  {
    id: 'bio107-q55',
    text: 'Cancer is directly related to cell division because:',
    options: [
      { id: 'bio107-q55oA', text: 'Cancer cells undergo meiosis uncontrollably' },
      { id: 'bio107-q55oB', text: 'Cancer cells stop dividing completely, accumulating in tissues' },
      { id: 'bio107-q55oC', text: 'Cancer results from uncontrolled mitotic cell division due to mutations in cell cycle regulatory genes' },
      { id: 'bio107-q55oD', text: 'Cancer is caused exclusively by errors in cytokinesis' }
    ],
    correctOptionId: 'bio107-q55oC',
    topic: 'Extended Knowledge — Cell Division'
  },
  {
    id: 'bio107-q56',
    text: 'Which of the following correctly matches all three basic bacterial shapes to their names?',
    options: [
      { id: 'bio107-q56oA', text: 'Cocci — rod-shaped; Bacilli — spherical; Spirilla — spiral' },
      { id: 'bio107-q56oB', text: 'Cocci — spherical; Bacilli — rod-shaped; Spirilla — spiral-shaped' },
      { id: 'bio107-q56oC', text: 'Spirilla — spherical; Cocci — spiral; Bacilli — rod' },
      { id: 'bio107-q56oD', text: 'Bacilli — spiral; Cocci — rod; Spirilla — spherical' }
    ],
    correctOptionId: 'bio107-q56oB',
    topic: 'Extended Knowledge — Microbiology'
  },
  {
    id: 'bio107-q57',
    text: 'Gram staining classifies bacteria into two groups based on:',
    options: [
      { id: 'bio107-q57oA', text: 'Their size and motility' },
      { id: 'bio107-q57oB', text: 'Differences in cell wall structure — specifically the thickness of the peptidoglycan layer' },
      { id: 'bio107-q57oC', text: 'Their DNA content and chromosome number' },
      { id: 'bio107-q57oD', text: 'Whether they reproduce sexually or asexually' }
    ],
    correctOptionId: 'bio107-q57oB',
    topic: 'Extended Knowledge — Microbiology'
  },
  {
    id: 'bio107-q58',
    text: 'Which of the following features are unique to bacteria (prokaryotes) and NOT found in eukaryotes?',
    options: [
      { id: 'bio107-q58oA', text: 'Ribosomes and DNA' },
      { id: 'bio107-q58oB', text: 'Cell membrane' },
      { id: 'bio107-q58oC', text: 'Plasmids and 70S ribosomes' },
      { id: 'bio107-q58oD', text: 'Cytoplasm and genetic material' }
    ],
    correctOptionId: 'bio107-q58oC',
    topic: 'Extended Knowledge — Microbiology'
  },
  {
    id: 'bio107-q59',
    text: 'Which pigment gives green algae (Chlorophyta) their characteristic colour?',
    options: [
      { id: 'bio107-q59oA', text: 'Phycoerythrin' },
      { id: 'bio107-q59oB', text: 'Phycocyanin' },
      { id: 'bio107-q59oC', text: 'Fucoxanthin' },
      { id: 'bio107-q59oD', text: 'Chlorophyll a and b' }
    ],
    correctOptionId: 'bio107-q59oD',
    topic: 'Extended Knowledge — Algae'
  },
  {
    id: 'bio107-q60',
    text: 'Eutrophication of water bodies is often caused by excessive growth of:',
    options: [
      { id: 'bio107-q60oA', text: 'Fungi only' },
      { id: 'bio107-q60oB', text: 'Protozoa' },
      { id: 'bio107-q60oC', text: 'Algae (algal blooms) triggered by excess nutrients such as nitrogen and phosphorus' },
      { id: 'bio107-q60oD', text: 'Bacteria only' }
    ],
    correctOptionId: 'bio107-q60oC',
    topic: 'Extended Knowledge — Algae'
  },
  {
    id: 'bio107-q61',
    text: 'Why are fungi classified in their own separate kingdom rather than with plants?',
    options: [
      { id: 'bio107-q61oA', text: 'Because fungi are always unicellular and live only in water' },
      { id: 'bio107-q61oB', text: 'Because fungi are heterotrophic, have chitin cell walls (not cellulose), and store glycogen (not starch)' },
      { id: 'bio107-q61oC', text: 'Because fungi reproduce only sexually' },
      { id: 'bio107-q61oD', text: 'Because fungi have flagella and can swim like protozoa' }
    ],
    correctOptionId: 'bio107-q61oB',
    topic: 'Extended Knowledge — Fungi'
  },
  {
    id: 'bio107-q62',
    text: 'The process by which fungi obtain nutrients from dead and decaying organic matter is called:',
    options: [
      { id: 'bio107-q62oA', text: 'Parasitism' },
      { id: 'bio107-q62oB', text: 'Mutualism' },
      { id: 'bio107-q62oC', text: 'Autotrophy' },
      { id: 'bio107-q62oD', text: 'Saprophytism (saprotrophism)' }
    ],
    correctOptionId: 'bio107-q62oD',
    topic: 'Extended Knowledge — Fungi'
  },
  {
    id: 'bio107-q63',
    text: 'Penicillin, one of the most important antibiotics in medicine, was derived from which organism?',
    options: [
      { id: 'bio107-q63oA', text: 'Aspergillus niger' },
      { id: 'bio107-q63oB', text: 'Saccharomyces cerevisiae' },
      { id: 'bio107-q63oC', text: 'Penicillium notatum (chrysogenum)' },
      { id: 'bio107-q63oD', text: 'Rhizopus stolonifer' }
    ],
    correctOptionId: 'bio107-q63oC',
    topic: 'Extended Knowledge — Biotechnology'
  },
  {
    id: 'bio107-q64',
    text: 'In biotechnology, PCR (Polymerase Chain Reaction) is used to:',
    options: [
      { id: 'bio107-q64oA', text: 'Separate DNA fragments by size using an electric field' },
      { id: 'bio107-q64oB', text: 'Amplify (make millions of copies of) a specific DNA sequence in vitro' },
      { id: 'bio107-q64oC', text: 'Translate mRNA into protein' },
      { id: 'bio107-q64oD', text: 'Insert foreign genes directly into a host organism\'s chromosome' }
    ],
    correctOptionId: 'bio107-q64oB',
    topic: 'Extended Knowledge — Biotechnology'
  },
  {
    id: 'bio107-q65',
    text: 'Which microorganism is widely used in fermentation to produce bread, beer, and wine?',
    options: [
      { id: 'bio107-q65oA', text: 'Escherichia coli' },
      { id: 'bio107-q65oB', text: 'Staphylococcus aureus' },
      { id: 'bio107-q65oC', text: 'Aspergillus fumigatus' },
      { id: 'bio107-q65oD', text: 'Saccharomyces cerevisiae (Baker\'s yeast)' }
    ],
    correctOptionId: 'bio107-q65oD',
    topic: 'Extended Knowledge — Biotechnology'
  },
  {
    id: 'bio107-q66',
    text: 'Sterilization in a microbiology laboratory is BEST achieved by:',
    options: [
      { id: 'bio107-q66oA', text: 'Washing glassware with soap and water only' },
      { id: 'bio107-q66oB', text: 'Using an autoclave at 121°C and 15 psi for 15–20 minutes' },
      { id: 'bio107-q66oC', text: 'Exposing materials to room temperature for 24 hours' },
      { id: 'bio107-q66oD', text: 'Rinsing all materials with cold distilled water' }
    ],
    correctOptionId: 'bio107-q66oB',
    topic: 'Extended Knowledge — Microbiology'
  },
  {
    id: 'bio107-q67',
    text: 'Aseptic technique in microbiology is practiced in order to:',
    options: [
      { id: 'bio107-q67oA', text: 'Speed up the growth of microorganisms in culture' },
      { id: 'bio107-q67oB', text: 'Increase the pH of growth media' },
      { id: 'bio107-q67oC', text: 'Prevent contamination of cultures and media by unwanted microorganisms' },
      { id: 'bio107-q67oD', text: 'Reduce the overall cost of laboratory reagents' }
    ],
    correctOptionId: 'bio107-q67oC',
    topic: 'Extended Knowledge — Microbiology'
  },
  {
    id: 'bio107-q68',
    text: 'Which of the following best describes a virus?',
    options: [
      { id: 'bio107-q68oA', text: 'A unicellular prokaryote that divides by binary fission' },
      { id: 'bio107-q68oB', text: 'A non-cellular obligate intracellular parasite consisting of nucleic acid enclosed in a protein coat (capsid)' },
      { id: 'bio107-q68oC', text: 'A multicellular eukaryote with a cell wall made of chitin' },
      { id: 'bio107-q68oD', text: 'A free-living autotroph found in pond water' }
    ],
    correctOptionId: 'bio107-q68oB',
    topic: 'Extended Knowledge — Microbiology'
  }
];