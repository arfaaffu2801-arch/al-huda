'use server';
/**
 * @fileOverview A flow to generate Azan audio.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import wav from 'wav';

const AzanInputSchema = z.object({
  prayerName: z
    .string()
    .describe('The name of the prayer (Fajr, Dhuhr, Asr, Maghrib, Isha).'),
});
export type AzanInput = z.infer<typeof AzanInputSchema>;

const AzanOutputSchema = z.object({
  audioDataUri: z.string().describe('The Azan audio as a data URI.'),
});
export type AzanOutput = z.infer<typeof AzanOutputSchema>;

const AZAN_TEXT = `Allahu Akbar
Allahu Akbar
Allahu Akbar
Allahu Akbar
Ashhadu an la ilaha illa Allah
Ashhadu an la ilaha illa Allah
Ashhadu anna Muhammadan Rasulu-Allah
Ashhadu anna Muhammadan Rasulu-Allah
Hayya 'ala-s-Salah
Hayya 'ala-s-Salah
Hayya 'ala-l-Falah
Hayya 'ala-l-Falah
Allahu Akbar
Allahu Akbar
La ilaha illa Allah`;

const FAJR_AZAN_TEXT = `Allahu Akbar
Allahu Akbar
Allahu Akbar
Allahu Akbar
Ashhadu an la ilaha illa Allah
Ashhadu an la ilaha illa Allah
Ashhadu anna Muhammadan Rasulu-Allah
Ashhadu anna Muhammadan Rasulu-Allah
Hayya 'ala-s-Salah
Hayya 'ala-s-Salah
Hayya 'ala-l-Falah
Hayya 'ala-l-Falah
As-salatu Khayrun Minan-nawm
As-salatu Khayrun Minan-nawm
Allahu Akbar
Allahu Akbar
La ilaha illa Allah`;

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const generateAzanFlow = ai.defineFlow(
  {
    name: 'generateAzanFlow',
    inputSchema: AzanInputSchema,
    outputSchema: AzanOutputSchema,
  },
  async ({ prayerName }) => {
    const azanText = prayerName === 'Fajr' ? FAJR_AZAN_TEXT : AZAN_TEXT;

    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: azanText,
    });

    if (!media) {
      throw new Error('No media returned from TTS model.');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    const wavBase64 = await toWav(audioBuffer);

    return {
      audioDataUri: `data:audio/wav;base64,${wavBase64}`,
    };
  }
);

export async function generateAzan(input: AzanInput): Promise<AzanOutput> {
  return generateAzanFlow(input);
}
