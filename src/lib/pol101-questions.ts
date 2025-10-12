import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 'pol101-q1',
    text: "What is the most fundamental purpose of calculating national income?",
    options: [
      { id: 'pol101-q1-o1', text: "To determine the country's foreign exchange reserves." },
      { id: 'pol101-q1-o2', text: "To indicate the overall health of the economy and provide a basis for government policy." },
      { id: 'pol101-q1-o3', text: "To calculate the total population of a country." },
      { id: 'pol101-q1-o4', text: "To set prices for goods and services." }
    ],
    correctOptionId: 'pol101-q1-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q2',
    text: "Which organization is responsible for calculating national income in India?",
    options: [
      { id: 'pol101-q2-o1', text: "Reserve Bank of India" },
      { id: 'pol101-q2-o2', text: "Central Statistical Organization" },
      { id: 'pol101-q2-o3', text: "Ministry of Finance" },
      { id: 'pol101-q2-o4', text: "NITI Aayog" }
    ],
    correctOptionId: 'pol101-q2-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q3',
    text: "Gross Domestic Product (GDP) is defined as the aggregate value of:",
    options: [
      { id: 'pol101-q3-o1', text: "All goods and services produced by a country's residents anywhere in the world." },
      { id: 'pol101-q3-o2', text: "All final goods and services produced within a country's domestic boundaries." },
      { id: 'pol101-q3-o3', text: "Only the goods produced for consumption within a country." },
      { id: 'pol101-q3-o4', text: "The net income of citizens from production after accounting for taxes." }
    ],
    correctOptionId: 'pol101-q3-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q4',
    text: "Which of the following is NOT a constituent of GDP as listed in the module?",
    options: [
      { id: 'pol101-q4-o1', text: "Wages and salaries" },
      { id: 'pol101-q4-o2', text: "Undistributed profits" },
      { id: 'pol101-q4-o3', text: "Net income from abroad" },
      { id: 'pol101-q4-o4', text: "Depreciation" }
    ],
    correctOptionId: 'pol101-q4-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q5',
    text: "The correct formula for calculating GDP is:",
    options: [
      { id: 'pol101-q5-o1', text: "GDP = consumption + government spending + exports" },
      { id: 'pol101-q5-o2', text: "GDP = consumption + investment + government spending + (exports - imports)" },
      { id: 'pol101-q5-o3', text: "GDP = consumption + savings + taxes - imports" },
      { id: 'pol101-q5-o4', text: "GDP = wages + rent + interest + profit" }
    ],
    correctOptionId: 'pol101-q5-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q6',
    text: "How does Gross National Product (GNP) differ from GDP?",
    options: [
      { id: 'pol101-q6-o1', text: "GNP is calculated only for the industrial sector, while GDP covers all sectors." },
      { id: 'pol101-q6-o2', text: "GNP includes the net income from assets abroad, while GDP is limited to domestic production." },
      { id: 'pol101-q6-o3', text: "GNP excludes the value of services, while GDP includes them." },
      { id: 'pol101-q6-o4', text: "GNP is calculated at market prices, while GDP is calculated at factor cost." }
    ],
    correctOptionId: 'pol101-q6-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q7',
    text: "Which of these is a component of GNP?",
    options: [
      { id: 'pol101-q7-o1', text: "Value of intermediate goods" },
      { id: 'pol101-q7-o2', text: "Net payment outflow to foreign assets" },
      { id: 'pol101-q7-o3', text: "Income arising from abroad" },
      { id: 'pol101-q7-o4', text: "Indirect taxes only" }
    ],
    correctOptionId: 'pol101-q7-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q8',
    text: "The formula to calculate GNP is:",
    options: [
      { id: 'pol101-q8-o1', text: "GNP = GDP - Depreciation" },
      { id: 'pol101-q8-o2', text: "GNP = GDP + Net Income Receipts from abroad - Net Payment Outflow to foreign assets" },
      { id: 'pol101-q8-o3', text: "GNP = NNP + Depreciation" },
      { id: 'pol101-q8-o4', text: "GNP = GDP + Exports" }
    ],
    correctOptionId: 'pol101-q8-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q9',
    text: "Net Domestic Product (NDP) is obtained by:",
    options: [
      { id: 'pol101-q9-o1', text: "Adding depreciation to GDP." },
      { id: 'pol101-q9-o2', text: "Subtracting net income from abroad from GDP." },
      { id: 'pol101-q9-o3', text: "Subtracting depreciation from GDP." },
      { id: 'pol101-q9-o4', text: "Adding indirect taxes to GDP." }
    ],
    correctOptionId: 'pol101-q9-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q10',
    text: "The term \"depreciation\" in the context of national income refers to:",
    options: [
      { id: 'pol101-q10-o1', text: "The decrease in a currency's international value." },
      { id: 'pol101-q10-o2', text: "The wear and tear or obsolescence of capital equipment during production." },
      { id: 'pol101-q10-o3', text: "The loss of value in the stock market." },
      { id: 'pol101-q10-o4', text: "The reduction in government tax revenue." }
    ],
    correctOptionId: 'pol101-q10-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q11',
    text: "What does Net National Product (NNP) represent?",
    options: [
      { id: 'pol101-q11-o1', text: "The total output of an economy including depreciation." },
      { id: 'pol101-q11-o2', text: "The value of the net output of the economy after accounting for depreciation." },
      { id: 'pol101-q11-o3', text: "The income available to households after direct taxes." },
      { id: 'pol101-q11-o4', text: "The market value of all final goods and services." }
    ],
    correctOptionId: 'pol101-q11-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q12',
    text: "The formula for NNP is:",
    options: [
      { id: 'pol101-q12-o1', text: "NNP = GDP - Depreciation" },
      { id: 'pol101-q12-o2', text: "NNP = GNP - Depreciation" },
      { id: 'pol101-q12-o3', text: "NNP = GNP + Net Income from Abroad" },
      { id: 'pol101-q12-o4', text: "NNP = NDP + Depreciation" }
    ],
    correctOptionId: 'pol101-q12-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q13',
    text: "Disposable income is best defined as:",
    options: [
      { id: 'pol101-q13-o1', text: "Total national income." },
      { id: 'pol101-q13-o2', text: "Personal income minus indirect taxes." },
      { id: 'pol101-q13-o3', text: "The actual income which can be spent on consumption after direct taxes are paid." },
      { id: 'pol101-q13-o4', text: "The sum of all wages and salaries in the economy." }
    ],
    correctOptionId: 'pol101-q13-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q14',
    text: "If Personal Income is N100 billion and Direct Taxes are N20 billion, what is the Disposable Income?",
    options: [
      { id: 'pol101-q14-o1', text: "N120 billion" },
      { id: 'pol101-q14-o2', text: "N80 billion" },
      { id: 'pol101-q14-o3', text: "N100 billion" },
      { id: 'pol101-q14-o4', text: "N20 billion" }
    ],
    correctOptionId: 'pol101-q14-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q15',
    text: "Real income is national income expressed:",
    options: [
      { id: 'pol101-q15-o1', text: "At current market prices." },
      { id: 'pol101-q15-o2', text: "In terms of the general price level of a base year to account for inflation." },
      { id: 'pol101-q15-o3', text: "As a per capita figure." },
      { id: 'pol101-q15-o4', text: "Before accounting for depreciation." }
    ],
    correctOptionId: 'pol101-q15-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q16',
    text: "Why is calculating real income important?",
    options: [
      { id: 'pol101-q16-o1', text: "It includes the value of illegal activities." },
      { id: 'pol101-q16-o2', text: "It indicates the real state of the economy by removing the effect of price changes." },
      { id: 'pol101-q16-o3', text: "It is used to calculate international debt." },
      { id: 'pol101-q16-o4', text: "It measures the income distribution among citizens." }
    ],
    correctOptionId: 'pol101-q16-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q17',
    text: "Per Capita Income is calculated by:",
    options: [
      { id: 'pol101-q17-o1', text: "Multiplying national income by the population." },
      { id: 'pol101-q17-o2', text: "Dividing the national income by the population." },
      { id: 'pol101-q17-o3', text: "Subtracting population growth from income growth." },
      { id: 'pol101-q17-o4', text: "Adding all individual incomes in the country." }
    ],
    correctOptionId: 'pol101-q17-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q18',
    text: "If a country's national income is N500 billion and its population is 50 million, what is its per capita income?",
    options: [
      { id: 'pol101-q18-o1', text: "N10,000" },
      { id: 'pol101-q18-o2', text: "N100" },
      { id: 'pol101-q18-o3', text: "N1,000" },
      { id: 'pol101-q18-o4', text: "N10" }
    ],
    correctOptionId: 'pol101-q18-o1',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q19',
    text: "Personal income is never equal to national income because:",
    options: [
      { id: 'pol101-q19-o1', text: "Personal income includes transfer payments, which are not included in national income." },
      { id: 'pol101-q19-o2', text: "National income includes corporate profits, which are not part of personal income." },
      { id: 'pol101-q19-o3', text: "Personal income is calculated after direct taxes." },
      { id: 'pol101-q19-o4', text: "National income is based on production, while personal income is based on expenditure." }
    ],
    correctOptionId: 'pol101-q19-o1',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q20',
    text: "Which of the following is deducted from national income to derive personal income?",
    options: [
      { id: 'pol101-q20-o1', text: "Direct taxes" },
      { id: 'pol101-q20-o2', text: "Consumption expenditure" },
      { id: 'pol101-q20-o3', text: "Undistributed corporate profits" },
      { id: 'pol101-q20-o4', text: "Depreciation" }
    ],
    correctOptionId: 'pol101-q20-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q21',
    text: "Which method of measuring national income involves adding up net rents, wages, interest, and profits?",
    options: [
      { id: 'pol101-q21-o1', text: "Product Method" },
      { id: 'pol101-q21-o2', text: "Expenditure Method" },
      { id: 'pol101-q21-o3', text: "Income Method" },
      { id: 'pol101-q21-o4', text: "Value Added Method" }
    ],
    correctOptionId: 'pol101-q21-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q22',
    text: "The Product Method for measuring national income involves:",
    options: [
      { id: 'pol101-q22-o1', text: "Summing the total expenditure of the society." },
      { id: 'pol101-q22-o2', text: "Adding the value added at each stage of production." },
      { id: 'pol101-q22-o3', text: "Calculating the net income payments received by all citizens." },
      { id: 'pol101-q22-o4', text: "Computing the aggregate value of final goods and services produced at market prices." }
    ],
    correctOptionId: 'pol101-q22-o4',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q23',
    text: "The Expenditure Method is based on the assumption that:",
    options: [
      { id: 'pol101-q23-o1', text: "National income is equal to national expenditure." },
      { id: 'pol101-q23-o2', text: "National income is equal to personal income." },
      { id: 'pol101-q23-o3', text: "All production is consumed domestically." },
      { id: 'pol101-q23-o4', text: "Government expenditure is always zero." }
    ],
    correctOptionId: 'pol101-q23-o1',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q24',
    text: "Which of the following is included in the Expenditure Method calculation?",
    options: [
      { id: 'pol101-q24-o1', text: "Undistributed profits" },
      { id: 'pol101-q24-o2', text: "Net foreign investment" },
      { id: 'pol101-q24-o3', text: "Value of intermediate goods" },
      { id: 'pol101-q24-o4', text: "Transfer payments" }
    ],
    correctOptionId: 'pol101-q24-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q25',
    text: "The Value Added Method focuses on:",
    options: [
      { id: 'pol101-q25-o1', text: "The total revenue of all firms." },
      { id: 'pol101-q25-o2', text: "The distinction between the value of material outputs and inputs at every production stage." },
      { id: 'pol101-q25-o3', text: "The income received by households." },
      { id: 'pol101-q25-o4', text: "The expenditure on imported goods." }
    ],
    correctOptionId: 'pol101-q25-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q26',
    text: "Which of the following is a difficulty in measuring national income?",
    options: [
      { id: 'pol101-q26-o1', text: "Accurate calculation of GDP" },
      { id: 'pol101-q26-o2', text: "The existence of the underground economy and unreported activities" },
      { id: 'pol101-q26-o3', text: "Over-reporting of corporate profits" },
      { id: 'pol101-q26-o4', text: "Easy valuation of all goods and services" }
    ],
    correctOptionId: 'pol101-q26-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q27',
    text: "Non-monetary transactions, such as bartering, present a problem for national income calculation because:",
    options: [
      { id: 'pol101-q27-o1', text: "They are always illegal." },
      { id: 'pol101-q27-o2', text: "They do not have a recorded market value." },
      { id: 'pol101-q27-o3', text: "They are included in GDP calculations." },
      { id: 'pol101-q27-o4', text: "They are only prevalent in developed countries." }
    ],
    correctOptionId: 'pol101-q27-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q28',
    text: "Why is household production (e.g., childcare, chores) a challenge for national income accounting?",
    options: [
      { id: 'pol101-q28-o1', text: "It is always reported to the government." },
      { id: 'pol101-q28-o2', text: "It is included in the GDP figures." },
      { id: 'pol101-q28-o3', text: "It is unpaid and its value is not captured in the market." },
      { id: 'pol101-q28-o4', text: "It is considered part of the industrial sector." }
    ],
    correctOptionId: 'pol101-q28-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q29',
    text: "National income averages can mask significant:",
    options: [
      { id: 'pol101-q29-o1', text: "Environmental degradation." },
      { id: 'pol101-q29-o2', text: "Data limitations." },
      { id: 'pol101-q29-o3', text: "Income inequality." },
      { id: 'pol101-q29-o4', text: "Seasonal fluctuations." }
    ],
    correctOptionId: 'pol101-q29-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q30',
    text: "Methodological differences in calculating national income can lead to:",
    options: [
      { id: 'pol101-q30-o1', text: "Uniform estimates across all countries." },
      { id: 'pol101-q30-o2', text: "Varying national income estimates." },
      { id: 'pol101-q30-o3', text: "The elimination of the informal sector." },
      { id: 'pol101-q30-o4', text: "Accurate valuation of financial transactions." }
    ],
    correctOptionId: 'pol101-q30-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q31',
    text: "Tax evasion and avoidance make national income measurement difficult because they lead to:",
    options: [
      { id: 'pol101-q31-o1', text: "An overestimation of national income." },
      { id: 'pol101-q31-o2', text: "An increase in government revenue." },
      { id: 'pol101-q31-o3', text: "Unreported income that is not captured." },
      { id: 'pol101-q31-o4', text: "More accurate data on household consumption." }
    ],
    correctOptionId: 'pol101-q31-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q32',
    text: "Which difficulty specifically relates to accurately calculating the using up of capital assets?",
    options: [
      { id: 'pol101-q32-o1', text: "Border transactions" },
      { id: 'pol101-q32-o2', text: "Depreciation and depletion" },
      { id: 'pol101-q32-o3', text: "Informal sector" },
      { id: 'pol101-q32-o4', text: "Government subsidies" }
    ],
    correctOptionId: 'pol101-q32-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q33',
    text: "Measuring economic activity in rural areas is challenging due to:",
    options: [
      { id: 'pol101-q33-o1', text: "The high level of industrialization." },
      { id: 'pol101-q33-o2', text: "Limited access to data and the prevalence of non-market transactions." },
      { id: 'pol101-q33-o3', text: "The absence of an agricultural sector." },
      { id: 'pol101-q33-o4', text: "Over-reporting of production." }
    ],
    correctOptionId: 'pol101-q33-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q34',
    text: "The primary significance of national income data is that it:",
    options: [
      { id: 'pol101-q34-o1', text: "Sets the interest rates for banks." },
      { id: 'pol101-q34-o2', text: "Determines individual salaries." },
      { id: 'pol101-q34-o3', text: "Measures a country's economic performance and growth." },
      { id: 'pol101-q34-o4', text: "Controls the rate of inflation directly." }
    ],
    correctOptionId: 'pol101-q34-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q35',
    text: "National income per capita is a key indicator of a country's:",
    options: [
      { id: 'pol101-q35-o1', text: "Total military power." },
      { id: 'pol101-q35-o2', text: "Average standard of living." },
      { id: 'pol101-q35-o3', text: "Political stability." },
      { id: 'pol101-q35-o4', text: "Environmental policies." }
    ],
    correctOptionId: 'pol101-q35-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q36',
    text: "How does national income data assist governments in resource allocation?",
    options: [
      { id: 'pol101-q36-o1', text: "By directly providing funds to households." },
      { id: 'pol101-q36-o2', text: "By helping to identify which sectors are growing and need investment." },
      { id: 'pol101-q36-o3', text: "By setting prices for all commodities." },
      { id: 'pol101-q36-o4', text: "By determining international trade partners." }
    ],
    correctOptionId: 'pol101-q36-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q37',
    text: "National income data is crucial for formulating:",
    options: [
      { id: 'pol101-q37-o1', text: "Corporate marketing strategies." },
      { id: 'pol101-q37-o2', text: "Fiscal and monetary policies." },
      { id: 'pol101-q37-o3', text: "Individual retirement plans." },
      { id: 'pol101-q37-o4', text: "Local weather forecasts." }
    ],
    correctOptionId: 'pol101-q37-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q38',
    text: "The ability to compare the economic performance of different countries is facilitated by:",
    options: [
      { id: 'pol101-q38-o1', text: "National income statistics." },
      { id: 'pol101-q38-o2', text: "Population density maps." },
      { id: 'pol101-q38-o3', text: "Cultural exchange programs." },
      { id: 'pol101-q38-o4', text: "The number of universities in each country." }
    ],
    correctOptionId: 'pol101-q38-o1',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q39',
    text: "National income is linked to employment rates because:",
    options: [
      { id: 'pol101-q39-o1', text: "Higher national income always guarantees full employment." },
      { id: 'pol101-q39-o2', text: "It indicates the level of economic activity, which influences job creation." },
      { id: 'pol101-q39-o3', text: "It is used to calculate the unemployment benefits." },
      { id: 'pol101-q39-o4', text: "It is unrelated to employment." }
    ],
    correctOptionId: 'pol101-q39-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q40',
    text: "Tracking progress in reducing poverty is possible with national income data by:",
    options: [
      { id: 'pol101-q40-o1', text: "Observing changes in the average per capita income over time." },
      { id: 'pol101-q40-o2', text: "Counting the number of rich people." },
      { id: 'pol101-q40-o3', text: "Analyzing the distribution of income." },
      { id: 'pol101-q40-o4', text: "Both A and C." }
    ],
    correctOptionId: 'pol101-q40-o4',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q41',
    text: "National income helps in monitoring:",
    options: [
      { id: 'pol101-q41-o1', text: "The literacy rate of a country." },
      { id: 'pol101-q41-o2', text: "Inflation and deflation in the economy." },
      { id: 'pol101-q41-o3', text: "The number of patents filed." },
      { id: 'pol101-q41-o4', text: "The crime rate in urban areas." }
    ],
    correctOptionId: 'pol101-q41-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q42',
    text: "A country's economic stability and resilience can be indicated by:",
    options: [
      { id: 'pol101-q42-o1', text: "The stability of its national income over time." },
      { id: 'pol101-q42-o2', text: "The size of its population." },
      { id: 'pol101-q42-o3', text: "The number of political parties." },
      { id: 'pol101-q42-o4', text: "The value of its currency alone." }
    ],
    correctOptionId: 'pol101-q42-o1',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q43',
    text: "According to the module, national income funds which of the following activities?",
    options: [
      { id: 'pol101-q43-o1', text: "Direct household consumption" },
      { id: 'pol101-q43-o2', text: "Research and development" },
      { id: 'pol101-q43-o3', text: "Personal savings" },
      { id: 'pol101-q43-o4', text: "Import of luxury goods" }
    ],
    correctOptionId: 'pol101-q43-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q44',
    text: "Which of the following is a component used in the calculation of GDP?",
    options: [
      { id: 'pol101-q44-o1', text: "Mixed-income" },
      { id: 'pol101-q44-o2', text: "Transfer payments" },
      { id: 'pol101-q44-o3', text: "Net income from abroad" },
      { id: 'pol101-q44-o4', text: "Direct taxes only" }
    ],
    correctOptionId: 'pol101-q44-o1',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q45',
    text: "The \"net\" in Net National Product (NNP) refers to the exclusion of:",
    options: [
      { id: 'pol101-q45-o1', text: "Indirect taxes." },
      { id: 'pol101-q45-o2', text: "Government subsidies." },
      { id: 'pol101-q45-o3', text: "Depreciation." },
      { id: 'pol101-q45-o4', text: "Foreign income." }
    ],
    correctOptionId: 'pol101-q45-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q46',
    text: "If GNP is N1,000 billion and depreciation is N100 billion, what is the NNP?",
    options: [
      { id: 'pol101-q46-o1', text: "N1,100 billion" },
      { id: 'pol101-q46-o2', text: "N900 billion" },
      { id: 'pol101-q46-o3', text: "N1,000 billion" },
      { id: 'pol101-q46-o4', text: "N100 billion" }
    ],
    correctOptionId: 'pol101-q46-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q47',
    text: "Real Per Capita Income is calculated using:",
    options: [
      { id: 'pol101-q47-o1', text: "National income at current prices." },
      { id: 'pol101-q47-o2', text: "Real national income and the population." },
      { id: 'pol101-q47-o3', text: "Personal income and direct taxes." },
      { id: 'pol101-q47-o4', text: "Disposable income and the inflation rate." }
    ],
    correctOptionId: 'pol101-q47-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q48',
    text: "Which method of measuring national income would accumulate data from agriculture, minerals, and industrial production?",
    options: [
      { id: 'pol101-q48-o1', text: "Income Method" },
      { id: 'pol101-q48-o2', text: "Expenditure Method" },
      { id: 'pol101-q48-o3', text: "Product Method" },
      { id: 'pol101-q48-o4', text: "Value Added Method" }
    ],
    correctOptionId: 'pol101-q48-o3',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q49',
    text: "The problem of \"valuation of goods and services\" as a difficulty in measurement refers to:",
    options: [
      { id: 'pol101-q49-o1', text: "The challenge of assigning accurate market values to all outputs." },
      { id: 'pol101-q49-o2', text: "The easy process of pricing all commodities." },
      { id: 'pol101-q49-o3', text: "The overvaluation of services compared to goods." },
      { id: 'pol101-q49-o4', text: "The government's control over all prices." }
    ],
    correctOptionId: 'pol101-q49-o1',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q50',
    text: "National income facilitates global economic integration by:",
    options: [
      { id: 'pol101-q50-o1', text: "Creating barriers to trade." },
      { id: 'pol101-q50-o2', text: "Providing a basis for international trade and investment decisions." },
      { id: 'pol101-q50-o3', text: "Standardizing cultures across countries." },
      { id: 'pol101-q50-o4', text: "Eliminating the need for foreign sectors." }
    ],
    correctOptionId: 'pol101-q50-o2',
    topic: 'MODULE 1: CONCEPTS OF NATIONAL INCOME'
  },
  {
    id: 'pol101-q51',
    text: "What is the circular flow of income?",
    options: [
      { id: 'pol101-q51-o1', text: "A model that shows how goods and services are produced." },
      { id: 'pol101-q51-o2', text: "An economic model that reflects how money or income flows through different sectors." },
      { id: 'pol101-q51-o3', text: "A diagram showing the relationship between supply and demand." },
      { id: 'pol101-q51-o4', text: "A measure of national income." }
    ],
    correctOptionId: 'pol101-q51-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q52',
    text: "In a simple two-sector economy, the two main sectors are:",
    options: [
      { id: 'pol101-q52-o1', text: "Government and firms." },
      { id: 'pol101-q52-o2', text: "Households and government." },
      { id: 'pol101-q52-o3', text: "Households and firms." },
      { id: 'pol101-q52-o4', text: "Firms and foreign sector." }
    ],
    correctOptionId: 'pol101-q52-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q53',
    text: "Households in the circular flow model are:",
    options: [
      { id: 'pol101-q53-o1', text: "Only consumers of goods and services." },
      { id: 'pol101-q53-o2', text: "Only owners of factors of production." },
      { id: 'pol101-q53-o3', text: "Both consumers and owners of factors of production." },
      { id: 'pol101-q53-o4', text: "Neither consumers nor owners." }
    ],
    correctOptionId: 'pol101-q53-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q54',
    text: "What do households provide to firms in the circular flow?",
    options: [
      { id: 'pol101-q54-o1', text: "Goods and services." },
      { id: 'pol101-q54-o2', text: "Factor payments." },
      { id: 'pol101-q54-o3', text: "Factors of production." },
      { id: 'pol101-q54-o4', text: "Tax revenues." }
    ],
    correctOptionId: 'pol101-q54-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q55',
    text: "What do firms provide to households?",
    options: [
      { id: 'pol101-q55-o1', text: "Factors of production." },
      { id: 'pol101-q55-o2', text: "Factor payments." },
      { id: 'pol101-q55-o3', text: "Goods and services." },
      { id: 'pol101-q55-o4', text: "Savings." }
    ],
    correctOptionId: 'pol101-q55-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q56',
    text: "Factor payments include:",
    options: [
      { id: 'pol101-q56-o1', text: "Rent, wages, interest, and profit." },
      { id: 'pol101-q56-o2', text: "Taxes, subsidies, and transfers." },
      { id: 'pol101-q56-o3', text: "Consumption and investment." },
      { id: 'pol101-q56-o4', text: "Imports and exports." }
    ],
    correctOptionId: 'pol101-q56-o1',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q57',
    text: "Which of the following is a type of circular flow model?",
    options: [
      { id: 'pol101-q57-o1', text: "One-sector model." },
      { id: 'pol101-q57-o2', text: "Two-sector model." },
      { id: 'pol101-q57-o3', text: "Five-sector model." },
      { id: 'pol101-q57-o4', text: "All of the above." }
    ],
    correctOptionId: 'pol101-q57-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q58',
    text: "In a two-sector spendthrift economy, which assumption is true?",
    options: [
      { id: 'pol101-q58-o1', text: "There is savings." },
      { id: 'pol101-q58-o2', text: "There is investment." },
      { id: 'pol101-q58-o3', text: "No savings are made." },
      { id: 'pol101-q58-o4', text: "Government is included." }
    ],
    correctOptionId: 'pol101-q58-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q59',
    text: "The two-sector spendthrift economy assumes:",
    options: [
      { id: 'pol101-q59-o1', text: "Households save part of their income." },
      { id: 'pol101-q59-o2', text: "Households spend all their income on consumption." },
      { id: 'pol101-q59-o3', text: "Firms invest in capital goods." },
      { id: 'pol101-q59-o4', text: "Financial market is active." }
    ],
    correctOptionId: 'pol101-q59-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q60',
    text: "In a two-sector frugal economy, what is introduced?",
    options: [
      { id: 'pol101-q60-o1', text: "Government sector." },
      { id: 'pol101-q60-o2', text: "Foreign sector." },
      { id: 'pol101-q60-o3', text: "Financial market." },
      { id: 'pol101-q60-o4', text: "Taxes." }
    ],
    correctOptionId: 'pol101-q60-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q61',
    text: "The financial market in a two-sector economy channels:",
    options: [
      { id: 'pol101-q61-o1', text: "Government spending." },
      { id: 'pol101-q61-o2', text: "Savings and borrowings." },
      { id: 'pol101-q61-o3', text: "Factor payments." },
      { id: 'pol101-q61-o4', text: "Imports and exports." }
    ],
    correctOptionId: 'pol101-q61-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q62',
    text: "What is the role of the financial market in a frugal economy?",
    options: [
      { id: 'pol101-q62-o1', text: "To collect taxes." },
      { id: 'pol101-q62-o2', text: "To provide subsidies." },
      { id: 'pol101-q62-o3', text: "To transact loanable funds." },
      { id: 'pol101-q62-o4', text: "To produce goods and services." }
    ],
    correctOptionId: 'pol101-q62-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q63',
    text: "In a two-sector economy with financial market, savings by households are used by firms for:",
    options: [
      { id: 'pol101-q63-o1', text: "Consumption." },
      { id: 'pol101-q63-o2', text: "Investment." },
      { id: 'pol101-q63-o3', text: "Factor payments." },
      { id: 'pol101-q63-o4', text: "Taxes." }
    ],
    correctOptionId: 'pol101-q63-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q64',
    text: "The three-sector circular flow model adds which sector?",
    options: [
      { id: 'pol101-q64-o1', text: "Foreign sector." },
      { id: 'pol101-q64-o2', text: "Financial sector." },
      { id: 'pol101-q64-o3', text: "Government sector." },
      { id: 'pol101-q64-o4', text: "Industrial sector." }
    ],
    correctOptionId: 'pol101-q64-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q65',
    text: "In a three-sector economy, the government acts as:",
    options: [
      { id: 'pol101-q65-o1', text: "Only a producer." },
      { id: 'pol101-q65-o2', text: "Only a consumer." },
      { id: 'pol101-q65-o3', text: "Both a producer and a consumer." },
      { id: 'pol101-q65-o4', text: "Neither producer nor consumer." }
    ],
    correctOptionId: 'pol101-q65-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q66',
    text: "Which of the following is an activity of the government in a three-sector economy?",
    options: [
      { id: 'pol101-q66-o1', text: "Collecting taxes from households and firms." },
      { id: 'pol101-q66-o2', text: "Providing factors of production to firms." },
      { id: 'pol101-q66-o3', text: "Saving in the financial market." },
      { id: 'pol101-q66-o4', text: "Both A and C." }
    ],
    correctOptionId: 'pol101-q66-o4',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q67',
    text: "Money flows from government to households in the form of:",
    options: [
      { id: 'pol101-q67-o1', text: "Taxes." },
      { id: 'pol101-q67-o2', text: "Transfer payments and factor payments." },
      { id: 'pol101-q67-o3', text: "Subsidies." },
      { id: 'pol101-q67-o4', text: "Goods and services." }
    ],
    correctOptionId: 'pol101-q67-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q68',
    text: "Transfer payments include:",
    options: [
      { id: 'pol101-q68-o1', text: "Old age pensions and scholarships." },
      { id: 'pol101-q68-o2', text: "Wages and salaries." },
      { id: 'pol101-q68-o3', text: "Rent and interest." },
      { id: 'pol101-q68-o4', text: "Taxes and subsidies." }
    ],
    correctOptionId: 'pol101-q68-o1',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q69',
    text: "Money flows from households to government in the form of:",
    options: [
      { id: 'pol101-q69-o1', text: "Transfer payments." },
      { id: 'pol101-q69-o2', text: "Direct taxes." },
      { id: 'pol101-q69-o3', text: "Subsidies." },
      { id: 'pol101-q69-o4', text: "Factor payments." }
    ],
    correctOptionId: 'pol101-q69-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q70',
    text: "Money flows from firms to government in the form of:",
    options: [
      { id: 'pol101-q70-o1', text: "Subsidies." },
      { id: 'pol101-q70-o2', text: "Taxes." },
      { id: 'pol101-q70-o3', text: "Transfer payments." },
      { id: 'pol101-q70-o4', text: "Factor payments." }
    ],
    correctOptionId: 'pol101-q70-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q71',
    text: "Money flows from government to firms in the form of:",
    options: [
      { id: 'pol101-q71-o1', text: "Taxes." },
      { id: 'pol101-q71-o2', text: "Subsidies and payments for goods and services." },
      { id: 'pol101-q71-o3', text: "Factor payments." },
      { id: 'pol101-q71-o4', text: "Transfer payments." }
    ],
    correctOptionId: 'pol101-q71-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q72',
    text: "In a three-sector economy, the government can:",
    options: [
      { id: 'pol101-q72-o1', text: "Only save money in the financial market." },
      { id: 'pol101-q72-o2', text: "Only borrow money from the financial market." },
      { id: 'pol101-q72-o3', text: "Both save and borrow money." },
      { id: 'pol101-q72-o4', text: "Neither save nor borrow." }
    ],
    correctOptionId: 'pol101-q72-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q73',
    text: "The four-sector circular flow model adds which sector?",
    options: [
      { id: 'pol101-q73-o1', text: "Government sector." },
      { id: 'pol101-q73-o2', text: "Financial sector." },
      { id: 'pol101-q73-o3', text: "Foreign sector." },
      { id: 'pol101-q73-o4', text: "Household sector." }
    ],
    correctOptionId: 'pol101-q73-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q74',
    text: "In a four-sector economy, international trade is:",
    options: [
      { id: 'pol101-q74-o1', text: "Not allowed." },
      { id: 'pol101-q74-o2', text: "Allowed." },
      { id: 'pol101-q74-o3', text: "Only exports are allowed." },
      { id: 'pol101-q74-o4', text: "Only imports are allowed." }
    ],
    correctOptionId: 'pol101-q74-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q75',
    text: "Households in a four-sector economy provide factor services to:",
    options: [
      { id: 'pol101-q75-o1', text: "Firms only." },
      { id: 'pol101-q75-o2', text: "Firms and government." },
      { id: 'pol101-q75-o3', text: "Firms, government, and foreign sector." },
      { id: 'pol101-q75-o4', text: "Government only." }
    ],
    correctOptionId: 'pol101-q75-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q76',
    text: "What do households receive from the foreign sector?",
    options: [
      { id: 'pol101-q76-o1', text: "Factor payments and transfer payments." },
      { id: 'pol101-q76-o2', text: "Only goods and services." },
      { id: 'pol101-q76-o3', text: "Only taxes." },
      { id: 'pol101-q76-o4', text: "Only subsidies." }
    ],
    correctOptionId: 'pol101-q76-o1',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q77',
    text: "Firms in a four-sector economy receive revenue from:",
    options: [
      { id: 'pol101-q77-o1', text: "Households only." },
      { id: 'pol101-q77-o2', text: "Households and government." },
      { id: 'pol101-q77-o3', text: "Households, government, and foreign sector." },
      { id: 'pol101-q77-o4', text: "Government only." }
    ],
    correctOptionId: 'pol101-q77-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q78',
    text: "What payments do firms make to the foreign sector?",
    options: [
      { id: 'pol101-q78-o1', text: "For imports." },
      { id: 'pol101-q78-o2', text: "For exports." },
      { id: 'pol101-q78-o3', text: "For factor services." },
      { id: 'pol101-q78-o4', text: "For taxes." }
    ],
    correctOptionId: 'pol101-q78-o1',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q79',
    text: "The government in a four-sector economy receives revenue from:",
    options: [
      { id: 'pol101-q79-o1', text: "Firms and households only." },
      { id: 'pol101-q79-o2', text: "Firms, households, and foreign sector." },
      { id: 'pol101-q79-o3', text: "Foreign sector only." },
      { id: 'pol101-q79-o4', text: "Financial market only." }
    ],
    correctOptionId: 'pol101-q79-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q80',
    text: "The foreign sector receives revenue from:",
    options: [
      { id: 'pol101-q80-o1', text: "Exports of goods and services." },
      { id: 'pol101-q80-o2', text: "Imports of goods and services." },
      { id: 'pol101-q80-o3', text: "Taxes." },
      { id: 'pol101-q80-o4', text: "Subsidies." }
    ],
    correctOptionId: 'pol101-q80-o1',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q81',
    text: "The foreign sector makes payments for:",
    options: [
      { id: 'pol101-q81-o1', text: "Exports." },
      { id: 'pol101-q81-o2', text: "Imports." },
      { id: 'pol101-q81-o3', text: "Taxes." },
      { id: 'pol101-q81-o4', text: "Subsidies." }
    ],
    correctOptionId: 'pol101-q81-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q82',
    text: "In a four-sector economy, the financial market:",
    options: [
      { id: 'pol101-q82-o1', text: "Is not present." },
      { id: 'pol101-q82-o2', text: "Channels savings from households, firms, and government." },
      { id: 'pol101-q82-o3', text: "Only deals with government savings." },
      { id: 'pol101-q82-o4', text: "Only deals with household savings." }
    ],
    correctOptionId: 'pol101-q82-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q83',
    text: "The circular flow of income is continuous because:",
    options: [
      { id: 'pol101-q83-o1', text: "Inflows equal outflows in the financial market." },
      { id: 'pol101-q83-o2', text: "Households always spend all their income." },
      { id: 'pol101-q83-o3', text: "Government always balances its budget." },
      { id: 'pol101-q83-o4', text: "Exports always equal imports." }
    ],
    correctOptionId: 'pol101-q83-o1',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q84',
    text: "Which of the following is an assumption of the two-sector spendthrift economy?",
    options: [
      { id: 'pol101-q84-o1', text: "There is savings." },
      { id: 'pol101-q84-o2', text: "There is investment." },
      { id: 'pol101-q84-o3', text: "No government sector." },
      { id: 'pol101-q84-o4', text: "No foreign sector." }
    ],
    correctOptionId: 'pol101-q84-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q85',
    text: "In a two-sector frugal economy, assumptions include:",
    options: [
      { id: 'pol101-q85-o1', text: "No savings." },
      { id: 'pol101-q85-o2', text: "No investment." },
      { id: 'pol101-q85-o3', text: "There is savings and investment." },
      { id: 'pol101-q85-o4', text: "Government is present." }
    ],
    correctOptionId: 'pol101-q85-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q86',
    text: "What is the key difference between spendthrift and frugal two-sector economies?",
    options: [
      { id: 'pol101-q86-o1', text: "Presence of government." },
      { id: 'pol101-q86-o2', text: "Presence of financial market." },
      { id: 'pol101-q86-o3', text: "Presence of foreign sector." },
      { id: 'pol101-q86-o4', text: "Presence of taxes." }
    ],
    correctOptionId: 'pol101-q86-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q87',
    text: "When savings are introduced in the circular flow, the model becomes:",
    options: [
      { id: 'pol101-q87-o1', text: "More simplified." },
      { id: 'pol101-q87-o2', text: "A two-sector spendthrift economy." },
      { id: 'pol101-q87-o3', text: "A two-sector frugal economy." },
      { id: 'pol101-q87-o4', text: "A three-sector economy." }
    ],
    correctOptionId: 'pol101-q87-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q88',
    text: "The government provides subsidies to:",
    options: [
      { id: 'pol101-q88-o1', text: "Households only." },
      { id: 'pol101-q88-o2', text: "Firms only." },
      { id: 'pol101-q88-o3', text: "Both households and firms." },
      { id: 'pol101-q88-o4', text: "Foreign sector only." }
    ],
    correctOptionId: 'pol101-q88-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q89',
    text: "Households pay taxes to:",
    options: [
      { id: 'pol101-q89-o1', text: "Government only." },
      { id: 'pol101-q89-o2', text: "Firms only." },
      { id: 'pol101-q89-o3', text: "Foreign sector only." },
      { id: 'pol101-q89-o4', text: "Financial market only." }
    ],
    correctOptionId: 'pol101-q89-o1',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q90',
    text: "Which sector(s) can save and borrow in a three-sector economy?",
    options: [
      { id: 'pol101-q90-o1', text: "Households only." },
      { id: 'pol101-q90-o2', text: "Firms only." },
      { id: 'pol101-q90-o3', text: "Government only." },
      { id: 'pol101-q90-o4', text: "Households, firms, and government." }
    ],
    correctOptionId: 'pol101-q90-o4',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q91',
    text: "In a four-sector economy, households spend their income on:",
    options: [
      { id: 'pol101-q91-o1', text: "Goods and services from firms only." },
      { id: 'pol101-q91-o2', text: "Goods and services from firms and imports." },
      { id: 'pol101-q91-o3', text: "Taxes and imports only." },
      { id: 'pol101-q91-o4', text: "Savings only." }
    ],
    correctOptionId: 'pol101-q91-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q92',
    text: "Firms make payments for:",
    options: [
      { id: 'pol101-q92-o1', text: "Taxes to government and factor services to households." },
      { id: 'pol101-q92-o2', text: "Subsidies to government." },
      { id: 'pol101-q92-o3', text: "Transfer payments to households." },
      { id: 'pol101-q92-o4', text: "Imports only." }
    ],
    correctOptionId: 'pol101-q92-o1',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q93',
    text: "The foreign sector makes payments to households for:",
    options: [
      { id: 'pol101-q93-o1', text: "Factor services." },
      { id: 'pol101-q93-o2', text: "Taxes." },
      { id: 'pol101-q93-o3', text: "Subsidies." },
      { id: 'pol101-q93-o4', text: "Imports." }
    ],
    correctOptionId: 'pol101-q93-o1',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q94',
    text: "The primary role of the financial market in the circular flow is to:",
    options: [
      { id: 'pol101-q94-o1', text: "Produce goods and services." },
      { id: 'pol101-q94-o2', text: "Facilitate the flow of savings and investments." },
      { id: 'pol101-q94-o3', text: "Collect taxes." },
      { id: 'pol101-q94-o4', text: "Regulate international trade." }
    ],
    correctOptionId: 'pol101-q94-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q95',
    text: "Which model includes all four sectors: households, firms, government, and foreign sector?",
    options: [
      { id: 'pol101-q95-o1', text: "Two-sector model." },
      { id: 'pol101-q95-o2', text: "Three-sector model." },
      { id: 'pol101-q95-o3', text: "Four-sector model." },
      { id: 'pol101-q95-o4', text: "Spendthrift model." }
    ],
    correctOptionId: 'pol101-q95-o3',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q96',
    text: "In which economy do households spend their entire income on consumption?",
    options: [
      { id: 'pol101-q96-o1', text: "Two-sector frugal economy." },
      { id: 'pol101-q96-o2', text: "Two-sector spendthrift economy." },
      { id: 'pol101-q96-o3', text: "Three-sector economy." },
      { id: 'pol101-q96-o4', text: "Four-sector economy." }
    ],
    correctOptionId: 'pol101-q96-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q97',
    text: "What ensures that the circular flow of income is complete and continuous in a four-sector economy?",
    options: [
      { id: 'pol101-q97-o1', text: "The government's budget balance." },
      { id: 'pol101-q97-o2', text: "The equality of inflows and outflows in the financial market." },
      { id: 'pol101-q97-o3', text: "The balance of trade." },
      { id: 'pol101-q97-o4', text: "The factor payments." }
    ],
    correctOptionId: 'pol101-q97-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q98',
    text: "According to the module, the circular flow model demonstrates:",
    options: [
      { id: 'pol101-q98-o1', text: "The interdependence of different sectors." },
      { id: 'pol101-q98-o2', text: "The calculation of national income." },
      { id: 'pol101-q98-o3', text: "The demand and supply curves." },
      { id: 'pol101-q98-o4', text: "The inflation rate." }
    ],
    correctOptionId: 'pol101-q98-o1',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q99',
    text: "Which of the following is not a factor of production?",
    options: [
      { id: 'pol101-q99-o1', text: "Land." },
      { id: 'pol101-q99-o2', text: "Labour." },
      { id: 'pol101-q99-o3', text: "Capital." },
      { id: 'pol101-q99-o4', text: "Taxes." }
    ],
    correctOptionId: 'pol101-q99-o4',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q100',
    text: "In a three-sector economy, government purchases goods and services from:",
    options: [
      { id: 'pol101-q100-o1', text: "Households only." },
      { id: 'pol101-q100-o2', text: "Firms only." },
      { id: 'pol101-q100-o3', text: "Both households and firms." },
      { id: 'pol101-q100-o4', text: "Foreign sector only." }
    ],
    correctOptionId: 'pol101-q100-o2',
    topic: 'MODULE 2: CIRCULAR FLOW OF INCOME'
  },
  {
    id: 'pol101-q101',
    text: "According to the module, what are the three basic economic activities of an economy?",
    options: [
      { id: 'pol101-q101-o1', text: "Production, distribution, and consumption" },
      { id: 'pol101-q101-o2', text: "Production, consumption, and capital formation" },
      { id: 'pol101-q101-o3', text: "Saving, investment, and consumption" },
      { id: 'pol101-q101-o4', text: "Income, expenditure, and savings" }
    ],
    correctOptionId: 'pol101-q101-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q102',
    text: "Consumption in relation to National Income means:",
    options: [
      { id: 'pol101-q102-o1', text: "All expenditure on goods and services for future use" },
      { id: 'pol101-q102-o2', text: "All expenditure on goods and services for current use in direct satisfaction of wants" },
      { id: 'pol101-q102-o3', text: "Only expenditure on durable goods" },
      { id: 'pol101-q102-o4', text: "The total savings of households" }
    ],
    correctOptionId: 'pol101-q102-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q103',
    text: "Which of the following is an example of a durable good?",
    options: [
      { id: 'pol101-q103-o1', text: "Food" },
      { id: 'pol101-q103-o2', text: "Clothing" },
      { id: 'pol101-q103-o3', text: "Medical fees" },
      { id: 'pol101-q103-o4', text: "Motor vehicle" }
    ],
    correctOptionId: 'pol101-q103-o4',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q104',
    text: "Which factor does NOT determine the level of consumption?",
    options: [
      { id: 'pol101-q104-o1', text: "Level of income" },
      { id: 'pol101-q104-o2', text: "Availability of credit facilities" },
      { id: 'pol101-q104-o3', text: "Political stability" },
      { id: 'pol101-q104-o4', text: "Rate of taxation" }
    ],
    correctOptionId: 'pol101-q104-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q105',
    text: "The Average Propensity to Consume (APC) is defined as:",
    options: [
      { id: 'pol101-q105-o1', text: "The change in consumption divided by the change in income" },
      { id: 'pol101-q105-o2', text: "The ratio of saving to income" },
      { id: 'pol101-q105-o3', text: "The ratio of consumption to income" },
      { id: 'pol101-q105-o4', text: "The change in saving divided by the change in income" }
    ],
    correctOptionId: 'pol101-q105-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q106',
    text: "If national income is N100 million and total consumption is N80 million, what is the APC?",
    options: [
      { id: 'pol101-q106-o1', text: "0.8" },
      { id: 'pol101-q106-o2', text: "1.25" },
      { id: 'pol101-q106-o3', text: "0.2" },
      { id: 'pol101-q106-o4', text: "0.25" }
    ],
    correctOptionId: 'pol101-q106-o1',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q107',
    text: "The Marginal Propensity to Consume (MPC) measures:",
    options: [
      { id: 'pol101-q107-o1', text: "The total consumption at different income levels" },
      { id: 'pol101-q107-o2', text: "The rate of change in consumption relative to change in income" },
      { id: 'pol101-q107-o3', text: "The average consumption per capita" },
      { id: 'pol101-q107-o4', text: "The ratio of savings to income" }
    ],
    correctOptionId: 'pol101-q107-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q108',
    text: "If consumption increases by N15 million when income increases by N20 million, what is the MPC?",
    options: [
      { id: 'pol101-q108-o1', text: "0.75" },
      { id: 'pol101-q108-o2', text: "1.33" },
      { id: 'pol101-q108-o3', text: "0.25" },
      { id: 'pol101-q108-o4', text: "0.15" }
    ],
    correctOptionId: 'pol101-q108-o1',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q109',
    text: "According to Keynes' \"fundamental psychological law\":",
    options: [
      { id: 'pol101-q109-o1', text: "Consumption increases faster than income" },
      { id: 'pol101-q109-o2', text: "Propensity to consume increases with increases in real income" },
      { id: 'pol101-q109-o3', text: "Propensity to consume decreases with increases in real income" },
      { id: 'pol101-q109-o4', text: "Consumption remains constant regardless of income changes" }
    ],
    correctOptionId: 'pol101-q109-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q110',
    text: "In the consumption function C = a + bY, 'a' represents:",
    options: [
      { id: 'pol101-q110-o1', text: "Induced consumption" },
      { id: 'pol101-q110-o2', text: "Marginal propensity to consume" },
      { id: 'pol101-q110-o3', text: "Autonomous consumption" },
      { id: 'pol101-q110-o4', text: "Total income" }
    ],
    correctOptionId: 'pol101-q110-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q111',
    text: "In the consumption function C = a + bY, 'bY' represents:",
    options: [
      { id: 'pol101-q111-o1', text: "Autonomous consumption" },
      { id: 'pol101-q111-o2', text: "Saving" },
      { id: 'pol101-q111-o3', text: "Induced consumption" },
      { id: 'pol101-q111-o4', text: "Disposable income" }
    ],
    correctOptionId: 'pol101-q111-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q112',
    text: "When income is zero in the consumption function C = a + bY, consumption equals:",
    options: [
      { id: 'pol101-q112-o1', text: "Zero" },
      { id: 'pol101-q112-o2', text: "b" },
      { id: 'pol101-q112-o3', text: "a" },
      { id: 'pol101-q112-o4', text: "Y" }
    ],
    correctOptionId: 'pol101-q112-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q113',
    text: "A Consumption Schedule is:",
    options: [
      { id: 'pol101-q113-o1', text: "A table showing the relationship between income and investment" },
      { id: 'pol101-q113-o2', text: "A graph showing the relationship between interest rates and consumption" },
      { id: 'pol101-q113-o3', text: "A table or graph showing the relationship between household income and consumption expenditure" },
      { id: 'pol101-q113-o4', text: "A schedule for purchasing durable goods" }
    ],
    correctOptionId: 'pol101-q113-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q114',
    text: "Savings are defined as:",
    options: [
      { id: 'pol101-q114-o1', text: "Disposable incomes spent on consumer goods" },
      { id: 'pol101-q114-o2', text: "Disposable incomes not spent on consumer goods and services" },
      { id: 'pol101-q114-o3', text: "Total national income" },
      { id: 'pol101-q114-o4', text: "Investment in capital goods" }
    ],
    correctOptionId: 'pol101-q114-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q115',
    text: "Saving constitutes:",
    options: [
      { id: 'pol101-q115-o1', text: "Injection into the circular flow of income" },
      { id: 'pol101-q115-o2', text: "Withdrawal from the circular flow of income" },
      { id: 'pol101-q115-o3', text: "Neither injection nor withdrawal" },
      { id: 'pol101-q115-o4', text: "Both injection and withdrawal" }
    ],
    correctOptionId: 'pol101-q115-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q116',
    text: "Which of the following is NOT a type of saving?",
    options: [
      { id: 'pol101-q116-o1', text: "Personal saving" },
      { id: 'pol101-q116-o2', text: "Corporate saving" },
      { id: 'pol101-q116-o3', text: "Government saving" },
      { id: 'pol101-q116-o4', text: "Induced saving" }
    ],
    correctOptionId: 'pol101-q116-o4',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q117',
    text: "Which factor determines personal saving?",
    options: [
      { id: 'pol101-q117-o1', text: "Rate of taxation" },
      { id: 'pol101-q117-o2', text: "Availability of credit facilities" },
      { id: 'pol101-q117-o3', text: "Rates of interest" },
      { id: 'pol101-q117-o4', text: "Profit earned" }
    ],
    correctOptionId: 'pol101-q117-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q118',
    text: "The Average Propensity to Save (APS) is defined as:",
    options: [
      { id: 'pol101-q118-o1', text: "The ratio of consumption to income" },
      { id: 'pol101-q118-o2', text: "The ratio of saving to total income" },
      { id: 'pol101-q118-o3', text: "The change in saving divided by change in income" },
      { id: 'pol101-q118-o4', text: "The sum of APC and MPC" }
    ],
    correctOptionId: 'pol101-q118-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q119',
    text: "If total income is N10,000 and consumption is N7,000, what is the APS?",
    options: [
      { id: 'pol101-q119-o1', text: "0.7" },
      { id: 'pol101-q119-o2', text: "0.3" },
      { id: 'pol101-q119-o3', text: "1.43" },
      { id: 'pol101-q119-o4', text: "0.43" }
    ],
    correctOptionId: 'pol101-q119-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q120',
    text: "The relationship between APC and APS is:",
    options: [
      { id: 'pol101-q120-o1', text: "APC - APS = 1" },
      { id: 'pol101-q120-o2', text: "APC + APS = 1" },
      { id: 'pol101-q120-o3', text: "APC × APS = 1" },
      { id: 'pol101-q120-o4', text: "APC ÷ APS = 1" }
    ],
    correctOptionId: 'pol101-q120-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q121',
    text: "The Marginal Propensity to Save (MPS) is defined as:",
    options: [
      { id: 'pol101-q121-o1', text: "The ratio of total saving to total income" },
      { id: 'pol101-q121-o2', text: "The change in saving divided by change in income" },
      { id: 'pol101-q121-o3', text: "The ratio of consumption to income" },
      { id: 'pol101-q121-o4', text: "1 - APC" }
    ],
    correctOptionId: 'pol101-q121-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q122',
    text: "If income increases from N10,000 to N12,000 and saving increases from N2,000 to N2,800, what is the MPS?",
    options: [
      { id: 'pol101-q122-o1', text: "0.4" },
      { id: 'pol101-q122-o2', text: "0.6" },
      { id: 'pol101-q122-o3', text: "0.8" },
      { id: 'pol101-q122-o4', text: "0.2" }
    ],
    correctOptionId: 'pol101-q122-o1',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q123',
    text: "The relationship between MPC and MPS is:",
    options: [
      { id: 'pol101-q123-o1', text: "MPC - MPS = 1" },
      { id: 'pol101-q123-o2', text: "MPC + MPS = 1" },
      { id: 'pol101-q123-o3', text: "MPC × MPS = 1" },
      { id: 'pol101-q123-o4', text: "MPC ÷ MPS = 1" }
    ],
    correctOptionId: 'pol101-q123-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q124',
    text: "The saving function is derived from:",
    options: [
      { id: 'pol101-q124-o1', text: "S = Y - C" },
      { id: 'pol101-q124-o2', text: "S = C - Y" },
      { id: 'pol101-q124-o3', text: "S = Y + C" },
      { id: 'pol101-q124-o4', text: "S = C/Y" }
    ],
    correctOptionId: 'pol101-q124-o1',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q125',
    text: "From the consumption function C = a + bY, the saving function is:",
    options: [
      { id: 'pol101-q125-o1', text: "S = a + (1-b)Y" },
      { id: 'pol101-q125-o2', text: "S = -a + (1-b)Y" },
      { id: 'pol101-q125-o3', text: "S = a - bY" },
      { id: 'pol101-q125-o4', text: "S = -a - bY" }
    ],
    correctOptionId: 'pol101-q125-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q126',
    text: "When income is zero in the saving function S = -a + (1-b)Y, saving equals:",
    options: [
      { id: 'pol101-q126-o1', text: "Zero" },
      { id: 'pol101-q126-o2', text: "(1-b)Y" },
      { id: 'pol101-q126-o3', text: "-a" },
      { id: 'pol101-q126-o4', text: "a" }
    ],
    correctOptionId: 'pol101-q126-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q127',
    text: "Investment is defined as expenditure on:",
    options: [
      { id: 'pol101-q127-o1', text: "Consumer goods for immediate consumption" },
      { id: 'pol101-q127-o2', text: "Physical assets for immediate consumption" },
      { id: 'pol101-q127-o3', text: "Physical assets for production of consumer and capital goods" },
      { id: 'pol101-q127-o4', text: "Services only" }
    ],
    correctOptionId: 'pol101-q127-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q128',
    text: "Autonomous investment is characterized by being:",
    options: [
      { id: 'pol101-q128-o1', text: "Dependent on changes in income" },
      { id: 'pol101-q128-o2', text: "Income-elastic" },
      { id: 'pol101-q128-o3', text: "Independent of changes in income, interest rate, or profit" },
      { id: 'pol101-q128-o4', text: "Positively sloped" }
    ],
    correctOptionId: 'pol101-q128-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q129',
    text: "The autonomous investment curve is:",
    options: [
      { id: 'pol101-q129-o1', text: "Vertical" },
      { id: 'pol101-q129-o2', text: "Horizontal" },
      { id: 'pol101-q129-o3', text: "Positively sloped" },
      { id: 'pol101-q129-o4', text: "Negatively sloped" }
    ],
    correctOptionId: 'pol101-q129-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q130',
    text: "Which sector typically makes autonomous investments for welfare considerations?",
    options: [
      { id: 'pol101-q130-o1', text: "Households" },
      { id: 'pol101-q130-o2', text: "Firms" },
      { id: 'pol101-q130-o3', text: "Government" },
      { id: 'pol101-q130-o4', text: "Foreign sector" }
    ],
    correctOptionId: 'pol101-q130-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q131',
    text: "Induced investment is:",
    options: [
      { id: 'pol101-q131-o1', text: "Independent of income changes" },
      { id: 'pol101-q131-o2', text: "Income-inelastic" },
      { id: 'pol101-q131-o3', text: "Motivated by profit and related to national income changes" },
      { id: 'pol101-q131-o4', text: "Made only by government" }
    ],
    correctOptionId: 'pol101-q131-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q132',
    text: "The relationship between national income and induced investment is:",
    options: [
      { id: 'pol101-q132-o1', text: "Negative" },
      { id: 'pol101-q132-o2', text: "Inverse" },
      { id: 'pol101-q132-o3', text: "Positive" },
      { id: 'pol101-q132-o4', text: "Unrelated" }
    ],
    correctOptionId: 'pol101-q132-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q133',
    text: "Which of the following is a characteristic of induced investment?",
    options: [
      { id: 'pol101-q133-o1', text: "Income inelastic" },
      { id: 'pol101-q133-o2', text: "Welfare motive" },
      { id: 'pol101-q133-o3', text: "Income elastic" },
      { id: 'pol101-q133-o4', text: "Horizontal curve" }
    ],
    correctOptionId: 'pol101-q133-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q134',
    text: "Which factor does NOT determine investment?",
    options: [
      { id: 'pol101-q134-o1', text: "Interest rate" },
      { id: 'pol101-q134-o2', text: "Level of income" },
      { id: 'pol101-q134-o3', text: "Political climate" },
      { id: 'pol101-q134-o4', text: "Attitude of saving" }
    ],
    correctOptionId: 'pol101-q134-o4',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q135',
    text: "The relationship between interest rate and investment is:",
    options: [
      { id: 'pol101-q135-o1', text: "Positive" },
      { id: 'pol101-q135-o2', text: "Direct" },
      { id: 'pol101-q135-o3', text: "Inverse" },
      { id: 'pol101-q135-o4', text: "Unrelated" }
    ],
    correctOptionId: 'pol101-q135-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q136',
    text: "Higher interest rates tend to discourage investment because:",
    options: [
      { id: 'pol101-q136-o1', text: "They decrease the cost of borrowing" },
      { id: 'pol101-q136-o2', text: "They increase the opportunity cost of using savings for investment" },
      { id: 'pol101-q136-o3', text: "They make saving less attractive" },
      { id: 'pol101-q136-o4', text: "They increase the rate of return required on investment" }
    ],
    correctOptionId: 'pol101-q136-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q137',
    text: "The investment function shows the relationship between:",
    options: [
      { id: 'pol101-q137-o1', text: "Investment and income" },
      { id: 'pol101-q137-o2', text: "Investment and consumption" },
      { id: 'pol101-q137-o3', text: "Investment and interest rate" },
      { id: 'pol101-q137-o4', text: "Saving and investment" }
    ],
    correctOptionId: 'pol101-q137-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q138',
    text: "In the investment function I = f(r), the dependent variable is:",
    options: [
      { id: 'pol101-q138-o1', text: "r (rate of interest)" },
      { id: 'pol101-q138-o2', text: "I (investment)" },
      { id: 'pol101-q138-o3', text: "Y (income)" },
      { id: 'pol101-q138-o4', text: "C (consumption)" }
    ],
    correctOptionId: 'pol101-q138-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q139',
    text: "The relationship between income, consumption, and saving is represented by:",
    options: [
      { id: 'pol101-q139-o1', text: "Y = C + I" },
      { id: 'pol101-q139-o2', text: "Y = C + S" },
      { id: 'pol101-q139-o3', text: "Y = S + I" },
      { id: 'pol101-q139-o4', text: "C = Y + S" }
    ],
    correctOptionId: 'pol101-q139-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q140',
    text: "The relationship between income, consumption, and investment is represented by:",
    options: [
      { id: 'pol101-q140-o1', text: "Y = C + S" },
      { id: 'pol101-q140-o2', text: "Y = C + I" },
      { id: 'pol101-q140-o3', text: "Y = S + I" },
      { id: 'pol101-q140-o4', text: "C = Y + I" }
    ],
    correctOptionId: 'pol101-q140-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q141',
    text: "If Y = C + S and Y = C + I, then:",
    options: [
      { id: 'pol101-q141-o1', text: "C = I" },
      { id: 'pol101-q141-o2', text: "S = I" },
      { id: 'pol101-q141-o3', text: "Y = I" },
      { id: 'pol101-q141-o4', text: "C = S" }
    ],
    correctOptionId: 'pol101-q141-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q142',
    text: "The fundamental relationship between savings and investment stems from:",
    options: [
      { id: 'pol101-q142-o1', text: "All investment comes from savings" },
      { id: 'pol101-q142-o2', text: "All savings come from investment" },
      { id: 'pol101-q142-o3', text: "Savings and investment are unrelated" },
      { id: 'pol101-q142-o4', text: "Investment determines consumption" }
    ],
    correctOptionId: 'pol101-q142-o1',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q143',
    text: "If autonomous consumption is 100, MPC is 0.6, and income is 500, what is consumption?",
    options: [
      { id: 'pol101-q143-o1', text: "300" },
      { id: 'pol101-q143-o2', text: "400" },
      { id: 'pol101-q143-o3', text: "500" },
      { id: 'pol101-q143-o4', text: "600" }
    ],
    correctOptionId: 'pol101-q143-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q144',
    text: "In the consumption function C = 200 + 0.8Y, when income is 1000, what is consumption?",
    options: [
      { id: 'pol101-q144-o1', text: "800" },
      { id: 'pol101-q144-o2', text: "1000" },
      { id: 'pol101-q144-o3', text: "1200" },
      { id: 'pol101-q144-o4', text: "200" }
    ],
    correctOptionId: 'pol101-q144-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q145',
    text: "Using the same function C = 200 + 0.8Y, when income is 1000, what is saving?",
    options: [
      { id: 'pol101-q145-o1', text: "200" },
      { id: 'pol101-q145-o2', text: "0" },
      { id: 'pol101-q145-o3', text: "800" },
      { id: 'pol101-q145-o4', text: "1000" }
    ],
    correctOptionId: 'pol101-q145-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q146',
    text: "As income increases, the Average Propensity to Consume:",
    options: [
      { id: 'pol101-q146-o1', text: "Increases" },
      { id: 'pol101-q146-o2', text: "Decreases" },
      { id: 'pol101-q146-o3', text: "Remains constant" },
      { id: 'pol101-q146-o4', text: "Becomes zero" }
    ],
    correctOptionId: 'pol101-q146-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q147',
    text: "As income increases, the Average Propensity to Save:",
    options: [
      { id: 'pol101-q147-o1', text: "Increases" },
      { id: 'pol101-q147-o2', text: "Decreases" },
      { id: 'pol101-q147-o3', text: "Remains constant" },
      { id: 'pol101-q147-o4', text: "Becomes negative" }
    ],
    correctOptionId: 'pol101-q147-o1',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q148',
    text: "According to Keynesian consumption function, when income is very low:",
    options: [
      { id: 'pol101-q148-o1', text: "Consumption equals income" },
      { id: 'pol101-q148-o2', text: "Consumption is greater than income" },
      { id: 'pol101-q148-o3', text: "Consumption is less than income" },
      { id: 'pol101-q148-o4', text: "Saving is positive" }
    ],
    correctOptionId: 'pol101-q148-o2',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q149',
    text: "The slope of the consumption function is equal to:",
    options: [
      { id: 'pol101-q149-o1', text: "APC" },
      { id: 'pol101-q149-o2', text: "APS" },
      { id: 'pol101-q149-o3', text: "MPC" },
      { id: 'pol101-q149-o4', text: "MPS" }
    ],
    correctOptionId: 'pol101-q149-o3',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    id: 'pol101-q150',
    text: "The slope of the saving function is equal to:",
    options: [
      { id: 'pol101-q150-o1', text: "APC" },
      { id: 'pol101-q150-o2', text: "APS" },
      { id: 'pol101-q150-o3', text: "MPC" },
      { id: 'pol101-q150-o4', text: "MPS" }
    ],
    correctOptionId: 'pol101-q150-o4',
    topic: 'MODULE 3: CONCEPTS OF SAVINGS, CONSUMPTION AND INVESTMENT'
  },
  {
    "id": "pol101-q151",
    "text": "According to Keynes, national income determination models are divided into sectors based on:",
    "options": [
      { "id": "pol101-q151-o1", "text": "Different sources of income" },
      { "id": "pol101-q151-o2", "text": "Different levels of inflation" },
      { "id": "pol101-q151-o3", "text": "Different currency values" },
      { "id": "pol101-q151-o4", "text": "Different population sizes" }
    ],
    "correctOptionId": "pol101-q151-o1",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q152",
    "text": "Which model represents a closed economy with no foreign trade?",
    "options": [
      { "id": "pol101-q152-o1", "text": "Two-Sector Model" },
      { "id": "pol101-q152-o2", "text": "Three-Sector Model" },
      { "id": "pol101-q152-o3", "text": "Four-Sector Model" },
      { "id": "pol101-q152-o4", "text": "Both A and B" }
    ],
    "correctOptionId": "pol101-q152-o4",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q153",
    "text": "A key assumption of the two-sector model is that it is:",
    "options": [
      { "id": "pol101-q153-o1", "text": "An open economy" },
      { "id": "pol101-q153-o2", "text": "At full employment level of output" },
      { "id": "pol101-q153-o3", "text": "A closed economy with no exports or imports" },
      { "id": "pol101-q153-o4", "text": "Characterized by a variable price level" }
    ],
    "correctOptionId": "pol101-q153-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q154",
    "text": "In the two-sector model, the total output of the economy is the sum of:",
    "options": [
      { "id": "pol101-q154-o1", "text": "Consumption and government expenditure" },
      { "id": "pol101-q154-o2", "text": "Consumption and investment expenditure" },
      { "id": "pol101-q154-o3", "text": "Investment and government expenditure" },
      { "id": "pol101-q154-o4", "text": "Savings and investment" }
    ],
    "correctOptionId": "pol101-q154-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q155",
    "text": "Which of the following is NOT an assumption of the two-sector model?",
    "options": [
      { "id": "pol101-q155-o1", "text": "There are no business taxes" },
      { "id": "pol101-q155-o2", "text": "There is no government" },
      { "id": "pol101-q155-o3", "text": "The economy is at full employment" },
      { "id": "pol101-q155-o4", "text": "The price level remains constant" }
    ],
    "correctOptionId": "pol101-q155-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q156",
    "text": "In a spendthrift two-sector economy, the equilibrium level of income is determined where:",
    "options": [
      { "id": "pol101-q156-o1", "text": "Y = C + I" },
      { "id": "pol101-q156-o2", "text": "S = I" },
      { "id": "pol101-q156-o3", "text": "Y = C" },
      { "id": "pol101-q156-o4", "text": "C = I" }
    ],
    "correctOptionId": "pol101-q156-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q157",
    "text": "In a spendthrift economy, if the consumption function is C = 30 + 0.7Y, what is the equilibrium income?",
    "options": [
      { "id": "pol101-q157-o1", "text": "30" },
      { "id": "pol101-q157-o2", "text": "70" },
      { "id": "pol101-q157-o3", "text": "100" },
      { "id": "pol101-q157-o4", "text": "150" }
    ],
    "correctOptionId": "pol101-q157-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q158",
    "text": "The 45-degree line in the income-determination graph represents all points where:",
    "options": [
      { "id": "pol101-q158-o1", "text": "Saving equals investment" },
      { "id": "pol101-q158-o2", "text": "Consumption equals income" },
      { "id": "pol101-q158-o3", "text": "Income equals investment" },
      { "id": "pol101-q158-o4", "text": "Consumption equals saving" }
    ],
    "correctOptionId": "pol101-q158-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q159",
    "text": "In a frugal two-sector economy, the equilibrium level of national income can be determined by the equality of:",
    "options": [
      { "id": "pol101-q159-o1", "text": "Aggregate demand and aggregate supply" },
      { "id": "pol101-q159-o2", "text": "Saving and investment" },
      { "id": "pol101-q159-o3", "text": "Both A and B" },
      { "id": "pol101-q159-o4", "text": "Neither A nor B" }
    ],
    "correctOptionId": "pol101-q159-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q160",
    "text": "In the identity Y = C + I, the term C + I represents:",
    "options": [
      { "id": "pol101-q160-o1", "text": "Aggregate supply" },
      { "id": "pol101-q160-o2", "text": "Aggregate demand" },
      { "id": "pol101-q160-o3", "text": "Total savings" },
      { "id": "pol101-q160-o4", "text": "Disposable income" }
    ],
    "correctOptionId": "pol101-q160-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q161",
    "text": "If C = 40 + 0.75Y and I = 80, what is the equilibrium level of income?",
    "options": [
      { "id": "pol101-q161-o1", "text": "120" },
      { "id": "pol101-q161-o2", "text": "240" },
      { "id": "pol101-q161-o3", "text": "360" },
      { "id": "pol101-q161-o4", "text": "480" }
    ],
    "correctOptionId": "pol101-q161-o4",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q162",
    "text": "The saving function corresponding to C = 40 + 0.75Y is:",
    "options": [
      { "id": "pol101-q162-o1", "text": "S = 40 + 0.25Y" },
      { "id": "pol101-q162-o2", "text": "S = -40 + 0.25Y" },
      { "id": "pol101-q162-o3", "text": "S = 40 - 0.25Y" },
      { "id": "pol101-q162-o4", "text": "S = -40 - 0.25Y" }
    ],
    "correctOptionId": "pol101-q162-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q163",
    "text": "If autonomous consumption is N60m and MPC = 0.8, what is consumption when income is N500m?",
    "options": [
      { "id": "pol101-q163-o1", "text": "N400m" },
      { "id": "pol101-q163-o2", "text": "N460m" },
      { "id": "pol101-q163-o3", "text": "N500m" },
      { "id": "pol101-q163-o4", "text": "N560m" }
    ],
    "correctOptionId": "pol101-q163-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q164",
    "text": "Using the saving-investment approach, if S = -50 + 0.3Y and I = 100, the equilibrium income is:",
    "options": [
      { "id": "pol101-q164-o1", "text": "N150m" },
      { "id": "pol101-q164-o2", "text": "N300m" },
      { "id": "pol101-q164-o3", "text": "N500m" },
      { "id": "pol101-q164-o4", "text": "N750m" }
    ],
    "correctOptionId": "pol101-q164-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q165",
    "text": "The formula Y = 1/(1-b) × (a + I) is used to calculate:",
    "options": [
      { "id": "pol101-q165-o1", "text": "Consumption" },
      { "id": "pol101-q165-o2", "text": "Saving" },
      { "id": "pol101-q165-o3", "text": "Equilibrium income" },
      { "id": "pol101-q165-o4", "text": "Investment" }
    ],
    "correctOptionId": "pol101-q165-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q166",
    "text": "If MPC = 0.75 and autonomous investment increases by N20m, by how much does equilibrium income increase?",
    "options": [
      { "id": "pol101-q166-o1", "text": "N20m" },
      { "id": "pol101-q166-o2", "text": "N50m" },
      { "id": "pol101-q166-o3", "text": "N80m" },
      { "id": "pol101-q166-o4", "text": "N100m" }
    ],
    "correctOptionId": "pol101-q166-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q167",
    "text": "In Problem 2 of the module, with C = 0.8Y and I = N500, the equilibrium income is:",
    "options": [
      { "id": "pol101-q167-o1", "text": "N1000" },
      { "id": "pol101-q167-o2", "text": "N2000" },
      { "id": "pol101-q167-o3", "text": "N2500" },
      { "id": "pol101-q167-o4", "text": "N3000" }
    ],
    "correctOptionId": "pol101-q167-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q168",
    "text": "For the consumption function C = 60 + 0.75Y and investment I = 35, the equilibrium income is:",
    "options": [
      { "id": "pol101-q168-o1", "text": "285" },
      { "id": "pol101-q168-o2", "text": "380" },
      { "id": "pol101-q168-o3", "text": "420" },
      { "id": "pol101-q168-o4", "text": "460" }
    ],
    "correctOptionId": "pol101-q168-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q169",
    "text": "To achieve full-employment equilibrium at income level N460 with C = 60 + 0.75Y, required investment is:",
    "options": [
      { "id": "pol101-q169-o1", "text": "N35" },
      { "id": "pol101-q169-o2", "text": "N45" },
      { "id": "pol101-q169-o3", "text": "N55" },
      { "id": "pol101-q169-o4", "text": "N65" }
    ],
    "correctOptionId": "pol101-q169-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q170",
    "text": "When investment varies with income (I = 10 + 0.2Y) and C = 20 + 0.6Y, the equilibrium income is:",
    "options": [
      { "id": "pol101-q170-o1", "text": "100" },
      { "id": "pol101-q170-o2", "text": "150" },
      { "id": "pol101-q170-o3", "text": "200" },
      { "id": "pol101-q170-o4", "text": "250" }
    ],
    "correctOptionId": "pol101-q170-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q171",
    "text": "With saving function S = -80 + 0.25Y and autonomous investment I = 200, the equilibrium income is:",
    "options": [
      { "id": "pol101-q171-o1", "text": "480" },
      { "id": "pol101-q171-o2", "text": "800" },
      { "id": "pol101-q171-o3", "text": "1120" },
      { "id": "pol101-q171-o4", "text": "1280" }
    ],
    "correctOptionId": "pol101-q171-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q172",
    "text": "If S = -10 + 0.2Y and I = 50, the equilibrium level of consumption is:",
    "options": [
      { "id": "pol101-q172-o1", "text": "200" },
      { "id": "pol101-q172-o2", "text": "250" },
      { "id": "pol101-q172-o3", "text": "300" },
      { "id": "pol101-q172-o4", "text": "350" }
    ],
    "correctOptionId": "pol101-q172-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q173",
    "text": "When investment increases from N50 to N55 with S = -10 + 0.2Y, the new equilibrium income becomes:",
    "options": [
      { "id": "pol101-q173-o1", "text": "300" },
      { "id": "pol101-q173-o2", "text": "325" },
      { "id": "pol101-q173-o3", "text": "350" },
      { "id": "pol101-q173-o4", "text": "375" }
    ],
    "correctOptionId": "pol101-q173-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q174",
    "text": "The three-sector model adds which sector to the two-sector model?",
    "options": [
      { "id": "pol101-q174-o1", "text": "Foreign sector" },
      { "id": "pol101-q174-o2", "text": "Financial sector" },
      { "id": "pol101-q174-o3", "text": "Government sector" },
      { "id": "pol101-q174-o4", "text": "Industrial sector" }
    ],
    "correctOptionId": "pol101-q174-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q175",
    "text": "In the three-sector model, the equilibrium condition becomes:",
    "options": [
      { "id": "pol101-q175-o1", "text": "Y = C + I" },
      { "id": "pol101-q175-o2", "text": "Y = C + I + G" },
      { "id": "pol101-q175-o3", "text": "Y = C + I + (X - M)" },
      { "id": "pol101-q175-o4", "text": "Y = C + S + T" }
    ],
    "correctOptionId": "pol101-q175-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q176",
    "text": "With C = 20 + 0.8Y, I = 60, and G = 20, the equilibrium income in the three-sector model is:",
    "options": [
      { "id": "pol101-q176-o1", "text": "N400m" },
      { "id": "pol101-q176-o2", "text": "N500m" },
      { "id": "pol101-q176-o3", "text": "N600m" },
      { "id": "pol101-q176-o4", "text": "N700m" }
    ],
    "correctOptionId": "pol101-q176-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q177",
    "text": "In the three-sector model, the alternative equilibrium condition is:",
    "options": [
      { "id": "pol101-q177-o1", "text": "I + G = S + T" },
      { "id": "pol101-q177-o2", "text": "I = S" },
      { "id": "pol101-q177-o3", "text": "G = T" },
      { "id": "pol101-q177-o4", "text": "I + T = S + G" }
    ],
    "correctOptionId": "pol101-q177-o1",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q178",
    "text": "The four-sector model includes:",
    "options": [
      { "id": "pol101-q178-o1", "text": "Households, businesses, and government" },
      { "id": "pol101-q178-o2", "text": "Households, businesses, government, and foreign sector" },
      { "id": "pol101-q178-o3", "text": "Households, businesses, and financial sector" },
      { "id": "pol101-q178-o4", "text": "Households, businesses, government, and financial sector" }
    ],
    "correctOptionId": "pol101-q178-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q179",
    "text": "In the four-sector model, exports are considered:",
    "options": [
      { "id": "pol101-q179-o1", "text": "Leakages" },
      { "id": "pol101-q179-o2", "text": "Injections" },
      { "id": "pol101-q179-o3", "text": "Withdrawals" },
      { "id": "pol101-q179-o4", "text": "Outflows" }
    ],
    "correctOptionId": "pol101-q179-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q180",
    "text": "In the four-sector model, imports act as:",
    "options": [
      { "id": "pol101-q180-o1", "text": "Injections" },
      { "id": "pol101-q180-o2", "text": "Stimulants" },
      { "id": "pol101-q180-o3", "text": "Leakages" },
      { "id": "pol101-q180-o4", "text": "Multipliers" }
    ],
    "correctOptionId": "pol101-q180-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q181",
    "text": "When X > M, there is:",
    "options": [
      { "id": "pol101-q181-o1", "text": "Net leakage" },
      { "id": "pol101-q181-o2", "text": "Net injection" },
      { "id": "pol101-q181-o3", "text": "Balanced trade" },
      { "id": "pol101-q181-o4", "text": "Trade deficit" }
    ],
    "correctOptionId": "pol101-q181-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q182",
    "text": "An assumption of the four-sector model is that:",
    "options": [
      { "id": "pol101-q182-o1", "text": "The domestic economy dominates world trade" },
      { "id": "pol101-q182-o2", "text": "There is full employment in the economy" },
      { "id": "pol101-q182-o3", "text": "Exchange rates are flexible" },
      { "id": "pol101-q182-o4", "text": "Exports, investment and government expenditure are autonomous" }
    ],
    "correctOptionId": "pol101-q182-o4",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q183",
    "text": "In the four-sector model, the equilibrium condition is:",
    "options": [
      { "id": "pol101-q183-o1", "text": "Y = C + I + G" },
      { "id": "pol101-q183-o2", "text": "Y = C + I + G + (X - M)" },
      { "id": "pol101-q183-o3", "text": "Y = C + S + T" },
      { "id": "pol101-q183-o4", "text": "Y = C + I + (X - M)" }
    ],
    "correctOptionId": "pol101-q183-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q184",
    "text": "In an open economy, national income is in equilibrium when:",
    "options": [
      { "id": "pol101-q184-o1", "text": "Exports equal imports" },
      { "id": "pol101-q184-o2", "text": "National expenditure equals national income" },
      { "id": "pol101-q184-o3", "text": "Savings equal investment" },
      { "id": "pol101-q184-o4", "text": "Government spending equals taxes" }
    ],
    "correctOptionId": "pol101-q184-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q185",
    "text": "The term (X - M) in the four-sector model represents:",
    "options": [
      { "id": "pol101-q185-o1", "text": "Trade deficit" },
      { "id": "pol101-q185-o2", "text": "Trade surplus" },
      { "id": "pol101-q185-o3", "text": "Net exports" },
      { "id": "pol101-q185-o4", "text": "Net imports" }
    ],
    "correctOptionId": "pol101-q185-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q186",
    "text": "In the four-sector model, which of the following is assumed to be autonomous?",
    "options": [
      { "id": "pol101-q186-o1", "text": "Consumption" },
      { "id": "pol101-q186-o2", "text": "Imports" },
      { "id": "pol101-q186-o3", "text": "Exports" },
      { "id": "pol101-q186-o4", "text": "Savings" }
    ],
    "correctOptionId": "pol101-q186-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q187",
    "text": "Which of the following is a leakage in the four-sector model?",
    "options": [
      { "id": "pol101-q187-o1", "text": "Investment" },
      { "id": "pol101-q187-o2", "text": "Government spending" },
      { "id": "pol101-q187-o3", "text": "Exports" },
      { "id": "pol101-q187-o4", "text": "Imports" }
    ],
    "correctOptionId": "pol101-q187-o4",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q188",
    "text": "Which of the following is an injection in the four-sector model?",
    "options": [
      { "id": "pol101-q188-o1", "text": "Savings" },
      { "id": "pol101-q188-o2", "text": "Taxes" },
      { "id": "pol101-q188-o3", "text": "Imports" },
      { "id": "pol101-q188-o4", "text": "Government spending" }
    ],
    "correctOptionId": "pol101-q188-o4",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q189",
    "text": "In the four-sector model, if C = Ca + cY, I = Io, G = Go, X = X, and M = M, the equilibrium income is:",
    "options": [
      { "id": "pol101-q189-o1", "text": "Y = (Ca + Io + Go + X - M)/(1 - c)" },
      { "id": "pol101-q189-o2", "text": "Y = (Ca + Io + Go)/(1 - c)" },
      { "id": "pol101-q189-o3", "text": "Y = (Io + Go + X - M)/(1 - c)" },
      { "id": "pol101-q189-o4", "text": "Y = (Ca + Io + X - M)/(1 - c)" }
    ],
    "correctOptionId": "pol101-q189-o1",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q190",
    "text": "The main difference between the three-sector and four-sector models is the inclusion of:",
    "options": [
      { "id": "pol101-q190-o1", "text": "Government sector" },
      { "id": "pol101-q190-o2", "text": "Foreign trade" },
      { "id": "pol101-q190-o3", "text": "Financial sector" },
      { "id": "pol101-q190-o4", "text": "Corporate sector" }
    ],
    "correctOptionId": "pol101-q190-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q191",
    "text": "In a spendthrift economy, which of the following is zero?",
    "options": [
      { "id": "pol101-q191-o1", "text": "Consumption" },
      { "id": "pol101-q191-o2", "text": "Investment" },
      { "id": "pol101-q191-o3", "text": "Saving" },
      { "id": "pol101-q191-o4", "text": "Income" }
    ],
    "correctOptionId": "pol101-q191-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q192",
    "text": "The concept of the 45-degree line is used primarily in which approach?",
    "options": [
      { "id": "pol101-q192-o1", "text": "Saving-Investment approach" },
      { "id": "pol101-q192-o2", "text": "Income-Expenditure approach" },
      { "id": "pol101-q192-o3", "text": "Aggregate demand-aggregate supply approach" },
      { "id": "pol101-q192-o4", "text": "Monetary approach" }
    ],
    "correctOptionId": "pol101-q192-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q193",
    "text": "If MPC is 0.8, the value of the multiplier is:",
    "options": [
      { "id": "pol101-q193-o1", "text": "2" },
      { "id": "pol101-q193-o2", "text": "3" },
      { "id": "pol101-q193-o3", "text": "4" },
      { "id": "pol101-q193-o4", "text": "5" }
    ],
    "correctOptionId": "pol101-q193-o4",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q194",
    "text": "In Problem 6, when investment increases by N5 crores, consumption increases by:",
    "options": [
      { "id": "pol101-q194-o1", "text": "N15 crores" },
      { "id": "pol101-q194-o2", "text": "N20 crores" },
      { "id": "pol101-q194-o3", "text": "N25 crores" },
      { "id": "pol101-q194-o4", "text": "N30 crores" }
    ],
    "correctOptionId": "pol101-q194-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q195",
    "text": "The equilibrium condition I + G = S + T applies to which model?",
    "options": [
      { "id": "pol101-q195-o1", "text": "Two-sector model" },
      { "id": "pol101-q195-o2", "text": "Three-sector model" },
      { "id": "pol101-q195-o3", "text": "Four-sector model" },
      { "id": "pol101-q195-o4", "text": "All of the above" }
    ],
    "correctOptionId": "pol101-q195-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q196",
    "text": "In the four-sector model, which of the following is NOT a fixed proportion of national income?",
    "options": [
      { "id": "pol101-q196-o1", "text": "Consumption" },
      { "id": "pol101-q196-o2", "text": "Imports" },
      { "id": "pol101-q196-o3", "text": "Exports" },
      { "id": "pol101-q196-o4", "text": "Savings" }
    ],
    "correctOptionId": "pol101-q196-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q197",
    "text": "The condition for equilibrium in the four-sector model can also be written as:",
    "options": [
      { "id": "pol101-q197-o1", "text": "I + G + X = S + T + M" },
      { "id": "pol101-q197-o2", "text": "I + G = S + T" },
      { "id": "pol101-q197-o3", "text": "I = S" },
      { "id": "pol101-q197-o4", "text": "G = T" }
    ],
    "correctOptionId": "pol101-q197-o1",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q198",
    "text": "In the numerical example of the three-sector model, when government spending of N20 is added, equilibrium income increases from:",
    "options": [
      { "id": "pol101-q198-o1", "text": "N400m to N500m" },
      { "id": "pol101-q198-o2", "text": "N450m to N550m" },
      { "id": "pol101-q198-o3", "text": "N500m to N600m" },
      { "id": "pol101-q198-o4", "text": "N550m to N650m" }
    ],
    "correctOptionId": "pol101-q198-o1",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q199",
    "text": "The \"saving gap\" at full employment refers to:",
    "options": [
      { "id": "pol101-q199-o1", "text": "The difference between actual saving and desired saving" },
      { "id": "pol101-q199-o2", "text": "The amount of additional investment needed to reach full employment" },
      { "id": "pol101-q199-o3", "text": "The difference between saving and investment" },
      { "id": "pol101-q199-o4", "text": "The amount of imports exceeding exports" }
    ],
    "correctOptionId": "pol101-q199-o2",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q200",
    "text": "Which of the following is a key assumption in all models of income determination in this module?",
    "options": [
      { "id": "pol101-q200-o1", "text": "Flexible prices" },
      { "id": "pol101-q200-o2", "text": "Full employment" },
      { "id": "pol101-q200-o3", "text": "Constant price level up to full employment" },
      { "id": "pol101-q200-o4", "text": "Variable interest rates" }
    ],
    "correctOptionId": "pol101-q200-o3",
    "topic": "MODULE 4: NATIONAL INCOME DETERMINATION"
  },
  {
    "id": "pol101-q201",
    "text": "What is the primary purpose of taxation as identified in the module?",
    "options": [
      { "id": "pol101-q201-o1", "text": "To control the population" },
      { "id": "pol101-q201-o2", "text": "To fund public expenditure and achieve economic goals" },
      { "id": "pol101-q201-o3", "text": "To increase international trade" },
      { "id": "pol101-q201-o4", "text": "To replace private sector funding entirely" }
    ],
    "correctOptionId": "pol101-q201-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q202",
    "text": "How is taxation defined in the module?",
    "options": [
      { "id": "pol101-q202-o1", "text": "A voluntary contribution to public projects" },
      { "id": "pol101-q202-o2", "text": "A compulsory financial charge imposed by a governmental organization" },
      { "id": "pol101-q202-o3", "text": "A fee for using private services" },
      { "id": "pol101-q202-o4", "text": "An optional donation to state funds" }
    ],
    "correctOptionId": "pol101-q202-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q203",
    "text": "Which of the following is NOT an objective of taxation listed in the module?",
    "options": [
      { "id": "pol101-q203-o1", "text": "Revenue Generation" },
      { "id": "pol101-q203-o2", "text": "Redistribution of Wealth" },
      { "id": "pol101-q203-o3", "text": "Economic Stabilization" },
      { "id": "pol101-q203-o4", "text": "Promoting Private Monopolies" }
    ],
    "correctOptionId": "pol101-q203-o4",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q204",
    "text": "A tax on an individual's or business's income or profits is known as:",
    "options": [
      { "id": "pol101-q204-o1", "text": "Sales Tax" },
      { "id": "pol101-q204-o2", "text": "Property Tax" },
      { "id": "pol101-q204-o3", "text": "Income Tax" },
      { "id": "pol101-q204-o4", "text": "Value-Added Tax (VAT)" }
    ],
    "correctOptionId": "pol101-q204-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q205",
    "text": "Which tax is levied on the value added to goods and services during production and distribution?",
    "options": [
      { "id": "pol101-q205-o1", "text": "Estate Tax" },
      { "id": "pol101-q205-o2", "text": "Gift Tax" },
      { "id": "pol101-q205-o3", "text": "Value-Added Tax (VAT)" },
      { "id": "pol101-q205-o4", "text": "Property Tax" }
    ],
    "correctOptionId": "pol101-q205-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q206",
    "text": "Direct taxes are primarily levied on:",
    "options": [
      { "id": "pol101-q206-o1", "text": "Goods and services" },
      { "id": "pol101-q206-o2", "text": "Individuals' income, wealth, or property" },
      { "id": "pol101-q206-o3", "text": "Corporate sales only" },
      { "id": "pol101-q206-o4", "text": "International trade" }
    ],
    "correctOptionId": "pol101-q206-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q207",
    "text": "A sales tax is an example of a(n):",
    "options": [
      { "id": "pol101-q207-o1", "text": "Direct tax" },
      { "id": "pol101-q207-o2", "text": "Indirect tax" },
      { "id": "pol101-q207-o3", "text": "Corporate tax" },
      { "id": "pol101-q207-o4", "text": "Proportional tax" }
    ],
    "correctOptionId": "pol101-q207-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q208",
    "text": "A tax where the rate increases as the taxpayer's income increases is called:",
    "options": [
      { "id": "pol101-q208-o1", "text": "Regressive Tax" },
      { "id": "pol101-q208-o2", "text": "Proportional Tax" },
      { "id": "pol101-q208-o3", "text": "Progressive Tax" },
      { "id": "pol101-q208-o4", "text": "Indirect Tax" }
    ],
    "correctOptionId": "pol101-q208-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q209",
    "text": "Which type of tax takes a larger percentage of income from low-income earners than from high-income earners?",
    "options": [
      { "id": "pol101-q209-o1", "text": "Progressive Tax" },
      { "id": "pol101-q209-o2", "text": "Proportional Tax" },
      { "id": "pol101-q209-o3", "text": "Regressive Tax" },
      { "id": "pol101-q209-o4", "text": "Direct Tax" }
    ],
    "correctOptionId": "pol101-q209-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q210",
    "text": "A flat tax, where the rate remains constant regardless of income, is an example of a:",
    "options": [
      { "id": "pol101-q210-o1", "text": "Progressive tax" },
      { "id": "pol101-q210-o2", "text": "Regressive tax" },
      { "id": "pol101-q210-o3", "text": "Proportional tax" },
      { "id": "pol101-q210-o4", "text": "Value-added tax" }
    ],
    "correctOptionId": "pol101-q210-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q211",
    "text": "Taxes collected by the central government, such as customs duty, are classified as:",
    "options": [
      { "id": "pol101-q211-o1", "text": "State/Local Taxes" },
      { "id": "pol101-q211-o2", "text": "Central Taxes" },
      { "id": "pol101-q211-o3", "text": "Property Taxes" },
      { "id": "pol101-q211-o4", "text": "Sales Taxes" }
    ],
    "correctOptionId": "pol101-q211-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q212",
    "text": "An ad valorem tax is levied as:",
    "options": [
      { "id": "pol101-q212-o1", "text": "A fixed amount per unit" },
      { "id": "pol101-q212-o2", "text": "A percentage of the value of goods or services" },
      { "id": "pol101-q212-o3", "text": "A one-time payment" },
      { "id": "pol101-q212-o4", "text": "A voluntary contribution" }
    ],
    "correctOptionId": "pol101-q212-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q213",
    "text": "According to Adam Smith's principles, a good tax system should be:",
    "options": [
      { "id": "pol101-q213-o1", "text": "Complicated and uncertain" },
      { "id": "pol101-q213-o2", "text": "Expensive to administer" },
      { "id": "pol101-q213-o3", "text": "Equitable and certain" },
      { "id": "pol101-q213-o4", "text": "Inconvenient for taxpayers" }
    ],
    "correctOptionId": "pol101-q213-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q214",
    "text": "The canon of taxation that suggests taxes should be cheap to collect is:",
    "options": [
      { "id": "pol101-q214-o1", "text": "Equity" },
      { "id": "pol101-q214-o2", "text": "Certainty" },
      { "id": "pol101-q214-o3", "text": "Economy" },
      { "id": "pol101-q214-o4", "text": "Convenience" }
    ],
    "correctOptionId": "pol101-q214-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q215",
    "text": "The principle that a tax should be easy for taxpayers to understand and comply with is known as:",
    "options": [
      { "id": "pol101-q215-o1", "text": "Neutrality" },
      { "id": "pol101-q215-o2", "text": "Simplicity" },
      { "id": "pol101-q215-o3", "text": "Flexibility" },
      { "id": "pol101-q215-o4", "text": "Efficiency" }
    ],
    "correctOptionId": "pol101-q215-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q216",
    "text": "Government spending on the acquisition of goods and services for current use is classified as:",
    "options": [
      { "id": "pol101-q216-o1", "text": "Government investment" },
      { "id": "pol101-q216-o2", "text": "Transfer payments" },
      { "id": "pol101-q216-o3", "text": "Government final consumption spending" },
      { "id": "pol101-q216-o4", "text": "Capital expenditure" }
    ],
    "correctOptionId": "pol101-q216-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q217",
    "text": "The two primary sources of financing for government spending are:",
    "options": [
      { "id": "pol101-q217-o1", "text": "Foreign aid and private donations" },
      { "id": "pol101-q217-o2", "text": "Tax collections and government borrowing" },
      { "id": "pol101-q217-o3", "text": "Corporate profits and investment income" },
      { "id": "pol101-q217-o4", "text": "Sales of public assets and user fees" }
    ],
    "correctOptionId": "pol101-q217-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q218",
    "text": "Which of the following is a source of government borrowing?",
    "options": [
      { "id": "pol101-q218-o1", "text": "Direct taxes" },
      { "id": "pol101-q218-o2", "text": "Borrowing money from its own citizens" },
      { "id": "pol101-q218-o3", "text": "Indirect taxes" },
      { "id": "pol101-q218-o4", "text": "Tariff revenues" }
    ],
    "correctOptionId": "pol101-q218-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q219",
    "text": "A significant increase in public spending in the 20th century was primarily on:",
    "options": [
      { "id": "pol101-q219-o1", "text": "Military expansion only" },
      { "id": "pol101-q219-o2", "text": "Education, healthcare, and social protection" },
      { "id": "pol101-q219-o3", "text": "Space exploration" },
      { "id": "pol101-q219-o4", "text": "Tax rebates for corporations" }
    ],
    "correctOptionId": "pol101-q219-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q220",
    "text": "Which of the following is NOT a purpose of government expenditure listed in the module?",
    "options": [
      { "id": "pol101-q220-o1", "text": "Stimulating economic activity" },
      { "id": "pol101-q220-o2", "text": "Protecting national interests" },
      { "id": "pol101-q220-o3", "text": "Reducing private sector competition" },
      { "id": "pol101-q220-o4", "text": "Providing essential services and support" }
    ],
    "correctOptionId": "pol101-q220-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q221",
    "text": "Government expenditure on building and maintaining public infrastructure like roads and bridges falls under which objective?",
    "options": [
      { "id": "pol101-q221-o1", "text": "Social Welfare" },
      { "id": "pol101-q221-o2", "text": "Defence and Security" },
      { "id": "pol101-q221-o3", "text": "Infrastructure Development" },
      { "id": "pol101-q221-o4", "text": "Redistribution of Income" }
    ],
    "correctOptionId": "pol101-q221-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q222",
    "text": "The government supplies merit goods such as hospitals and schools because:",
    "options": [
      { "id": "pol101-q222-o1", "text": "They are always profitable" },
      { "id": "pol101-q222-o2", "text": "The private sector supplies them in excess" },
      { "id": "pol101-q222-o3", "text": "They are not sufficiently supplied by the private sector" },
      { "id": "pol101-q222-o4", "text": "They require no public funding" }
    ],
    "correctOptionId": "pol101-q222-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q223",
    "text": "Spending on education and training to improve labor productivity is an example of government aiming to:",
    "options": [
      { "id": "pol101-q223-o1", "text": "Increase short-term consumption" },
      { "id": "pol101-q223-o2", "text": "Improve the supply-side of the macro-economy" },
      { "id": "pol101-q223-o3", "text": "Reduce government borrowing" },
      { "id": "pol101-q223-o4", "text": "Eliminate taxes" }
    ],
    "correctOptionId": "pol101-q223-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q224",
    "text": "Recurring expenses such as salaries and wages are classified as:",
    "options": [
      { "id": "pol101-q224-o1", "text": "Capital Expenditure" },
      { "id": "pol101-q224-o2", "text": "Transfer Payments" },
      { "id": "pol101-q224-o3", "text": "Current Expenditure" },
      { "id": "pol101-q224-o4", "text": "Defence Expenditure" }
    ],
    "correctOptionId": "pol101-q224-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q225",
    "text": "Investments in infrastructure like roads and public buildings are considered:",
    "options": [
      { "id": "pol101-q225-o1", "text": "Current Expenditure" },
      { "id": "pol101-q225-o2", "text": "Transfer Payments" },
      { "id": "pol101-q225-o3", "text": "Capital Expenditure" },
      { "id": "pol101-q225-o4", "text": "Subsidies" }
    ],
    "correctOptionId": "pol101-q225-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q226",
    "text": "Direct payments to individuals, such as social security benefits, are known as:",
    "options": [
      { "id": "pol101-q226-o1", "text": "Capital Expenditure" },
      { "id": "pol101-q226-o2", "text": "Current Expenditure" },
      { "id": "pol101-q226-o3", "text": "Transfer Payments" },
      { "id": "pol101-q226-o4", "text": "Tax Expenditures" }
    ],
    "correctOptionId": "pol101-q226-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q227",
    "text": "Which of the following is an example of a transfer payment?",
    "options": [
      { "id": "pol101-q227-o1", "text": "Building a new school" },
      { "id": "pol101-q227-o2", "text": "Paying a soldier's salary" },
      { "id": "pol101-q227-o3", "text": "An unemployment benefit" },
      { "id": "pol101-q227-o4", "text": "Buying medical equipment for a public hospital" }
    ],
    "correctOptionId": "pol101-q227-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q228",
    "text": "Spending on national defence and security is categorized as:",
    "options": [
      { "id": "pol101-q228-o1", "text": "Social Welfare Expenditure" },
      { "id": "pol101-q228-o2", "text": "Defence Expenditure" },
      { "id": "pol101-q228-o3", "text": "Capital Expenditure" },
      { "id": "pol101-q228-o4", "text": "Transfer Payment" }
    ],
    "correctOptionId": "pol101-q228-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q229",
    "text": "According to the module, government expenditure has a significant impact on all of the following EXCEPT:",
    "options": [
      { "id": "pol101-q229-o1", "text": "Aggregate demand" },
      { "id": "pol101-q229-o2", "text": "The price of gold internationally" },
      { "id": "pol101-q229-o3", "text": "Employment" },
      { "id": "pol101-q229-o4", "text": "Income distribution" }
    ],
    "correctOptionId": "pol101-q229-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q230",
    "text": "The principle of tax 'neutrality' means that taxes should:",
    "options": [
      { "id": "pol101-q230-o1", "text": "Favor certain industries over others" },
      { "id": "pol101-q230-o2", "text": "Avoid causing distortions in economic decisions" },
      { "id": "pol101-q230-o3", "text": "Be the primary tool for economic planning" },
      { "id": "pol101-q230-o4", "text": "Always be progressive in nature" }
    ],
    "correctOptionId": "pol101-q230-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q231",
    "text": "A tax levied as a fixed amount per unit of a good, such as excise duty, is a:",
    "options": [
      { "id": "pol101-q231-o1", "text": "Ad Valorem Tax" },
      { "id": "pol101-q231-o2", "text": "Specific Tax" },
      { "id": "pol101-q231-o3", "text": "Proportional Tax" },
      { "id": "pol101-q231-o4", "text": "Direct Tax" }
    ],
    "correctOptionId": "pol101-q231-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q232",
    "text": "The 'Ability to Pay' principle is most closely associated with which canon of taxation?",
    "options": [
      { "id": "pol101-q232-o1", "text": "Economy" },
      { "id": "pol101-q232-o2", "text": "Certainty" },
      { "id": "pol101-q232-o3", "text": "Equity" },
      { "id": "pol101-q232-o4", "text": "Convenience" }
    ],
    "correctOptionId": "pol101-q232-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q233",
    "text": "PAYE (Pay-As-You-Earn) taxes are typically associated with:",
    "options": [
      { "id": "pol101-q233-o1", "text": "Sales Tax" },
      { "id": "pol101-q233-o2", "text": "Income Tax" },
      { "id": "pol101-q233-o3", "text": "Property Tax" },
      { "id": "pol101-q233-o4", "text": "Value-Added Tax" }
    ],
    "correctOptionId": "pol101-q233-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q234",
    "text": "Which level of government typically collects property tax?",
    "options": [
      { "id": "pol101-q234-o1", "text": "Central Government" },
      { "id": "pol101-q234-o2", "text": "Foreign Government" },
      { "id": "pol101-q234-o3", "text": "State/Local Government" },
      { "id": "pol101-q234-o4", "text": "United Nations" }
    ],
    "correctOptionId": "pol101-q234-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q235",
    "text": "The objective of taxation aimed at reducing income inequality is:",
    "options": [
      { "id": "pol101-q235-o1", "text": "Revenue Generation" },
      { "id": "pol101-q235-o2", "text": "Economic Stabilization" },
      { "id": "pol101-q235-o3", "text": "Redistribution of Wealth" },
      { "id": "pol101-q235-o4", "text": "Social Welfare" }
    ],
    "correctOptionId": "pol101-q235-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q236",
    "text": "Which type of government expenditure includes interest payments on national debt?",
    "options": [
      { "id": "pol101-q236-o1", "text": "Capital Expenditure" },
      { "id": "pol101-q236-o2", "text": "Transfer Payments" },
      { "id": "pol101-q236-o3", "text": "Current Expenditure" },
      { "id": "pol101-q236-o4", "text": "Defence Expenditure" }
    ],
    "correctOptionId": "pol101-q236-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q237",
    "text": "Public-private partnerships are mentioned in the module as a way to:",
    "options": [
      { "id": "pol101-q237-o1", "text": "Replace all government functions" },
      { "id": "pol101-q237-o2", "text": "Finance, design, build, and operate infrastructure projects" },
      { "id": "pol101-q237-o3", "text": "Eliminate the need for taxation" },
      { "id": "pol101-q237-o4", "text": "Reduce social welfare spending" }
    ],
    "correctOptionId": "pol101-q237-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q238",
    "text": "A key difference between government final consumption spending and government investment is that the latter is for:",
    "options": [
      { "id": "pol101-q238-o1", "text": "Current use" },
      { "id": "pol101-q238-o2", "text": "Immediate consumption" },
      { "id": "pol101-q238-o3", "text": "Future use" },
      { "id": "pol101-q238-o4", "text": "Transfer payments" }
    ],
    "correctOptionId": "pol101-q238-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q239",
    "text": "The principle that suggests a tax system should be relatively easy to change is:",
    "options": [
      { "id": "pol101-q239-o1", "text": "Certainty" },
      { "id": "pol101-q239-o2", "text": "Simplicity" },
      { "id": "pol101-q239-o3", "text": "Flexibility" },
      { "id": "pol101-q239-o4", "text": "Neutrality" }
    ],
    "correctOptionId": "pol101-q239-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q240",
    "text": "Which of the following is a direct tax?",
    "options": [
      { "id": "pol101-q240-o1", "text": "Sales Tax" },
      { "id": "pol101-q240-o2", "text": "Value-Added Tax (VAT)" },
      { "id": "pol101-q240-o3", "text": "Excise Duty" },
      { "id": "pol101-q240-o4", "text": "Wealth Tax" }
    ],
    "correctOptionId": "pol101-q240-o4",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q241",
    "text": "The main reason governments provide subsidies to certain industries is that:",
    "options": [
      { "id": "pol101-q241-o1", "text": "Those industries are always the most profitable" },
      { "id": "pol101-q241-o2", "text": "The private sector can fully meet their financial needs" },
      { "id": "pol101-q241-o3", "text": "Those industries may need financial support for operation or expansion" },
      { "id": "pol101-q241-o4", "text": "It reduces the overall tax burden" }
    ],
    "correctOptionId": "pol101-q241-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q242",
    "text": "Which canon of taxation emphasizes that the time and manner of payment should be convenient for the taxpayer?",
    "options": [
      { "id": "pol101-q242-o1", "text": "Economy" },
      { "id": "pol101-q242-o2", "text": "Certainty" },
      { "id": "pol101-q242-o3", "text": "Convenience" },
      { "id": "pol101-q242-o4", "text": "Equity" }
    ],
    "correctOptionId": "pol101-q242-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q243",
    "text": "In the 20th century, governments in developed countries began spending a larger percentage of GDP on:",
    "options": [
      { "id": "pol101-q243-o1", "text": "Agriculture only" },
      { "id": "pol101-q243-o2", "text": "Military and defence only" },
      { "id": "pol101-q243-o3", "text": "Education, healthcare, and social protection" },
      { "id": "pol101-q243-o4", "text": "Tax collection agencies" }
    ],
    "correctOptionId": "pol101-q243-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q244",
    "text": "An estate tax is a levy on:",
    "options": [
      { "id": "pol101-q244-o1", "text": "Annual business profits" },
      { "id": "pol101-q244-o2", "text": "The transfer of wealth after death" },
      { "id": "pol101-q244-o3", "text": "Retail sales" },
      { "id": "pol101-q244-o4", "text": "Imported goods" }
    ],
    "correctOptionId": "pol101-q244-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q245",
    "text": "The objective of 'Economic Stabilization' through taxation refers to controlling:",
    "options": [
      { "id": "pol101-q245-o1", "text": "The weather" },
      { "id": "pol101-q245-o2", "text": "Inflation, unemployment, and economic growth" },
      { "id": "pol101-q245-o3", "text": "International diplomatic relations" },
      { "id": "pol101-q245-o4", "text": "The number of private businesses" }
    ],
    "correctOptionId": "pol101-q245-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q246",
    "text": "Which of the following is a characteristic of a well-designed tax system according to Adam Smith?",
    "options": [
      { "id": "pol101-q246-o1", "text": "It is arbitrary and unpredictable." },
      { "id": "pol101-q246-o2", "text": "It is costly to administer." },
      { "id": "pol101-q246-o3", "text": "It is certain and economical." },
      { "id": "pol101-q246-o4", "text": "It is highly complex." }
    ],
    "correctOptionId": "pol101-q246-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q247",
    "text": "Government spending on pensions is classified as:",
    "options": [
      { "id": "pol101-q247-o1", "text": "Capital Expenditure" },
      { "id": "pol101-q247-o2", "text": "Current Expenditure" },
      { "id": "pol101-q247-o3", "text": "A Direct Tax" },
      { "id": "pol101-q247-o4", "text": "A Transfer Payment" }
    ],
    "correctOptionId": "pol101-q247-o4",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q248",
    "text": "The primary goal of redistributing income through government policy is to:",
    "options": [
      { "id": "pol101-q248-o1", "text": "Increase income inequality" },
      { "id": "pol101-q248-o2", "text": "Lower income inequality and create a more equitable society" },
      { "id": "pol101-q248-o3", "text": "Ensure everyone earns the same amount" },
      { "id": "pol101-q248-o4", "text": "Eliminate the need for taxes" }
    ],
    "correctOptionId": "pol101-q248-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q249",
    "text": "What is the role of public spending in achieving supply-side improvements?",
    "options": [
      { "id": "pol101-q249-o1", "text": "By directly setting prices for all goods" },
      { "id": "pol101-q249-o2", "text": "By spending on education and training to improve labor productivity" },
      { "id": "pol101-q249-o3", "text": "By reducing aggregate demand" },
      { "id": "pol101-q249-o4", "text": "By focusing solely on defense" }
    ],
    "correctOptionId": "pol101-q249-o2",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  },
  {
    "id": "pol101-q250",
    "text": "The overall impact of government expenditure on the economy includes influencing:",
    "options": [
      { "id": "pol101-q250-o1", "text": "Only the inflation rate" },
      { "id": "pol101-q250-o2", "text": "Only employment levels" },
      { "id": "pol101-q250-o3", "text": "Aggregate demand, employment, inflation, economic growth, and income distribution" },
      { "id": "pol101-q250-o4", "text": "Only the distribution of income" }
    ],
    "correctOptionId": "pol101-q250-o3",
    "topic": "MODULE 5: TAXATION AND GOVERNMENT EXPENDITURE"
  }
]
