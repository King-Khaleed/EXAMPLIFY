'use server';

import { aiSuggestedStudyAreas, AiSuggestedStudyAreasInput } from '@/ai/flows/ai-suggested-study-areas';

export async function getAiSuggestions(input: AiSuggestedStudyAreasInput) {
  try {
    const output = await aiSuggestedStudyAreas(input);
    return { success: true, data: output };
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    return { success: false, error: 'Failed to get AI suggestions.' };
  }
}
