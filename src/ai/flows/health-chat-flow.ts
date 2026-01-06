'use server';
/**
 * @fileOverview An AI chatbot for Islamic health and wellness advice.
 *
 * - healthChat - A function that handles the chatbot conversation.
 * - HealthChatInput - The input type for the healthChat function.
 * - HealthChatOutput - The return type for the healthChat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const HealthChatInputSchema = z.object({
  message: z.string().describe('The user\'s message or question.'),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      })
    )
    .describe('The conversation history.'),
});
export type HealthChatInput = z.infer<typeof HealthChatInputSchema>;

const HealthChatOutputSchema = z.object({
  response: z.string().describe('The AI\'s response.'),
});
export type HealthChatOutput = z.infer<typeof HealthChatOutputSchema>;

const healthChatFlow = ai.defineFlow(
  {
    name: 'healthChatFlow',
    inputSchema: HealthChatInputSchema,
    outputSchema: HealthChatOutputSchema,
  },
  async ({ message, history }) => {
    const systemPrompt = `You are a friendly and knowledgeable health and wellness assistant called 'Huda'. Your advice is based on the teachings of the Quran and the Sunnah.

You should provide guidance on physical, spiritual, and mental health from an Islamic perspective. Be supportive, empathetic, and always ground your advice in Islamic principles.

If a question is outside the scope of health, wellness, or Islam, gently guide the user back to these topics or state that you can only provide advice in these areas. Do not provide medical diagnoses or prescribe treatments; instead, always advise consulting a healthcare professional for serious medical concerns.

Current conversation history:
{{#each history}}
{{#if (eq role 'user')}}User: {{content}}{{/if}}
{{#if (eq role 'model')}}Huda: {{content}}{{/if}}
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

export async function healthChat(
  input: HealthChatInput
): Promise<HealthChatOutput> {
  return healthChatFlow(input);
}
