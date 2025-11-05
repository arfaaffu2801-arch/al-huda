'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized Du'a (supplication) recommendations based on the user's current situation or needs.
 *
 * - personalizedDuaSuggestions - A function that takes a user's situation as input and returns relevant Du'a recommendations.
 * - PersonalizedDuaSuggestionsInput - The input type for the personalizedDuaSuggestions function.
 * - PersonalizedDuaSuggestionsOutput - The output type for the personalizedDuaSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedDuaSuggestionsInputSchema = z.object({
  situation: z
    .string()
    .describe(
      'The user’s current situation or need for which they are seeking a Du’a (supplication).'
    ),
});

export type PersonalizedDuaSuggestionsInput = z.infer<
  typeof PersonalizedDuaSuggestionsInputSchema
>;

const PersonalizedDuaSuggestionsOutputSchema = z.object({
  duaRecommendations: z
    .array(z.string())
    .describe('An array of relevant Du’a recommendations for the user’s situation.'),
});

export type PersonalizedDuaSuggestionsOutput = z.infer<
  typeof PersonalizedDuaSuggestionsOutputSchema
>;

export async function personalizedDuaSuggestions(
  input: PersonalizedDuaSuggestionsInput
): Promise<PersonalizedDuaSuggestionsOutput> {
  return personalizedDuaSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedDuaSuggestionsPrompt',
  input: {schema: PersonalizedDuaSuggestionsInputSchema},
  output: {schema: PersonalizedDuaSuggestionsOutputSchema},
  prompt: `You are an AI assistant specialized in providing Islamic Du’a (supplication) recommendations.

  Based on the user’s current situation, suggest relevant Du’as that can provide comfort, guidance, or blessings.

  Situation: {{{situation}}}

  Provide the recommendations in an array of strings.
  `,
});

const personalizedDuaSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedDuaSuggestionsFlow',
    inputSchema: PersonalizedDuaSuggestionsInputSchema,
    outputSchema: PersonalizedDuaSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
