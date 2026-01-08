'use server';
/**
 * @fileOverview An AI chatbot for Quranic clarification.
 *
 * - quranChat - A function that handles the chatbot conversation.
 * - QuranChatInput - The input type for the quranChat function.
 * - QuranChatOutput - The return type for the quranChat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const QuranChatInputSchema = z.object({
  message: z.string().describe("The user's message or question about the Quran."),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      })
    )
    .describe('The conversation history.'),
});
export type QuranChatInput = z.infer<typeof QuranChatInputSchema>;

const QuranChatOutputSchema = z.object({
  response: z.string().describe("The AI's response."),
});
export type QuranChatOutput = z.infer<typeof QuranChatOutputSchema>;

const quranChatFlow = ai.defineFlow(
  {
    name: 'quranChatFlow',
    inputSchema: QuranChatInputSchema,
    outputSchema: QuranChatOutputSchema,
  },
  async ({ message, history }) => {
    return { response: "This service is coming soon." };
  }
);

export async function quranChat(
  input: QuranChatInput
): Promise<QuranChatOutput> {
  return quranChatFlow(input);
}
