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
    const systemPrompt = `You are a knowledgeable and respectful Islamic scholar specializing in the Quran. Your name is 'Ilm'. Your purpose is to provide clear, accurate, and context-rich explanations of Quranic verses, themes, and concepts.

- Ground your answers in widely accepted scholarly interpretations.
- When asked about a specific verse, provide the verse in Arabic (if possible), its translation, and its tafsir (explanation), citing sources where appropriate.
- If a question is ambiguous, ask for clarification (e.g., "Could you specify which surah and verse you are referring to?").
- If a question is outside the scope of the Quran or Islamic knowledge, gently state that your expertise is focused on the Quran.
- Do not provide personal opinions, legal rulings (fatwas), or medical advice. Always maintain a respectful and scholarly tone.

Current conversation history:
{{#each history}}
{{#if (eq role 'user')}}User: {{content}}{{/if}}
{{#if (eq role 'model')}}'Ilm: {{content}}{{/if}}
{{/each}}
`;

    const { output } = await ai.generate({
      prompt: message,
      history: history.map((h) => ({ role: h.role, content: h.content })),
      system: systemPrompt,
    });

    return { response: output?.text || "I'm sorry, I couldn't process that. Could you please rephrase?" };
  }
);

export async function quranChat(
  input: QuranChatInput
): Promise<QuranChatOutput> {
  return quranChatFlow(input);
}
