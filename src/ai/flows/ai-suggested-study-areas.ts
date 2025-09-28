'use server';
/**
 * @fileOverview This file defines a Genkit flow for the AI Study Tool that analyzes user performance
 * on practice exams and suggests specific topics or areas for improvement.
 *
 * - aiSuggestedStudyAreas - A function that triggers the AI study area suggestion flow.
 * - AiSuggestedStudyAreasInput - The input type for the aiSuggestedStudyAreas function.
 * - AiSuggestedStudyAreasOutput - The return type for the aiSuggestedStudyAreas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSuggestedStudyAreasInputSchema = z.object({
  examName: z.string().describe('The name of the exam the user is preparing for.'),
  userAnswers: z.record(z.string(), z.string()).describe('A record of the user\'s answers for each question.'),
  correctAnswers: z.record(z.string(), z.string()).describe('A record of the correct answers for each question.'),
  topics: z.array(z.string()).describe('The topics covered in the exam.'),
});
export type AiSuggestedStudyAreasInput = z.infer<typeof AiSuggestedStudyAreasInputSchema>;

const AiSuggestedStudyAreasOutputSchema = z.object({
  suggestedAreas: z.array(z.string()).describe('An array of topics the user should focus on.'),
  reasoning: z.string().describe('Explanation of why these topics were recommended'),
});
export type AiSuggestedStudyAreasOutput = z.infer<typeof AiSuggestedStudyAreasOutputSchema>;

export async function aiSuggestedStudyAreas(input: AiSuggestedStudyAreasInput): Promise<AiSuggestedStudyAreasOutput> {
  return aiSuggestedStudyAreasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSuggestedStudyAreasPrompt',
  input: {schema: AiSuggestedStudyAreasInputSchema},
  output: {schema: AiSuggestedStudyAreasOutputSchema},
  prompt: `You are an AI study tool that analyzes a user's performance on a practice exam and suggests areas for improvement.

The exam name is: {{{examName}}}

The user's answers are:
{{#each userAnswers}}
  {{@key}}: {{this}}
{{/each}}

The correct answers are:
{{#each correctAnswers}}
  {{@key}}: {{this}}
{{/each}}

The topics covered in the exam are:
{{#each topics}}
  - {{this}}
{{/each}}

Based on this information, suggest specific topics or areas the user should focus on to improve their score.
Include reasoning for each suggested area.

Format your output as a JSON object with "suggestedAreas" (an array of strings) and "reasoning" (a string).
`,
});

const aiSuggestedStudyAreasFlow = ai.defineFlow(
  {
    name: 'aiSuggestedStudyAreasFlow',
    inputSchema: AiSuggestedStudyAreasInputSchema,
    outputSchema: AiSuggestedStudyAreasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
