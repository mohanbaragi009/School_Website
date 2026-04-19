
'use server';
/**
 * @fileOverview An AI-powered virtual campus guide for Seshadripuram Institute.
 *
 * - getCampusInfo - Returns descriptions and facts about campus facilities.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CampusGuideInputSchema = z.object({
  locationName: z.string().describe('The name of the campus facility or department.'),
});

const CampusGuideOutputSchema = z.object({
  description: z.string().describe('A welcoming and informative description of the location.'),
  highlights: z.array(z.string()).describe('Key features or achievements related to this location.'),
  visitorTips: z.string().describe('Practical advice for visitors or students.'),
});

export type CampusGuideOutput = z.infer<typeof CampusGuideOutputSchema>;

export async function getCampusInfo(locationName: string): Promise<CampusGuideOutput> {
  return campusGuideFlow({ locationName });
}

const prompt = ai.definePrompt({
  name: 'campusGuidePrompt',
  input: {schema: CampusGuideInputSchema},
  output: {schema: CampusGuideOutputSchema},
  prompt: `You are the virtual guide for Seshadripuram Institute Educational Institutions.
  
Location: {{{locationName}}}

Provide an inspiring and accurate description of this part of our campus. 
Seshadripuram Institute is a prestigious institution in Bangalore with a 90-year legacy.

Focus on:
1. Academic excellence.
2. Modern infrastructure.
3. Student-centric environment.

Include 3 key highlights and a useful tip for visitors.`,
});

const campusGuideFlow = ai.defineFlow(
  {
    name: 'campusGuideFlow',
    inputSchema: CampusGuideInputSchema,
    outputSchema: CampusGuideOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
