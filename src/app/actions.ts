'use server';

import {
  personalizedDuaSuggestions,
  type PersonalizedDuaSuggestionsInput,
} from '@/ai/flows/personalized-dua-suggestions';
import { z } from 'zod';

const situationSchema = z.object({
  situation: z
    .string({
      required_error: 'Please describe your situation.',
    })
    .min(10, 'Please describe your situation in a bit more detail (at least 10 characters).'),
});

type State =
  | {
      duaRecommendations?: string[];
      error?: string;
    }
  | undefined;

export async function getDuaSuggestions(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = situationSchema.safeParse({
    situation: formData.get('situation'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.situation?.[0],
    };
  }

  try {
    const input: PersonalizedDuaSuggestionsInput = {
      situation: validatedFields.data.situation,
    };
    const result = await personalizedDuaSuggestions(input);
    if (!result.duaRecommendations || result.duaRecommendations.length === 0) {
      return { error: 'Could not find any relevant suggestions. Please try rephrasing your situation.' };
    }
    return { duaRecommendations: result.duaRecommendations };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to get suggestions. Please try again later.' };
  }
}
