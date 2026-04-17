'use server';
/**
 * @fileOverview Provides an AI agent to refine draft announcements or messages for clarity, tone, and conciseness.
 *
 * - aiContentRefinement - A function that takes draft content and returns AI-generated suggestions.
 * - AiContentRefinementInput - The input type for the aiContentRefinement function.
 * - AiContentRefinementOutput - The return type for the aiContentRefinement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiContentRefinementInputSchema = z.object({
  draftContent: z
    .string()
    .describe('The draft announcement or message content to be refined.'),
});
export type AiContentRefinementInput = z.infer<
  typeof AiContentRefinementInputSchema
>;

const AiContentRefinementOutputSchema = z.object({
  clarityImprovements: z
    .string()
    .describe(
      'Suggestions to improve the clarity and readability of the content.'
    ),
  toneAdjustments: z
    .string()
    .describe(
      'Recommendations for adjusting the tone to be professional, welcoming, and appropriate for a school environment.'
    ),
  concisenessEdits: z
    .string()
    .describe(
      'Edits or suggestions to make the content more concise without losing essential information.'
    ),
  overallFeedback: z
    .string()
    .describe('A general summary of the content\u0027s strengths and areas for improvement.'),
});
export type AiContentRefinementOutput = z.infer<
  typeof AiContentRefinementOutputSchema
>;

export async function aiContentRefinement(
  input: AiContentRefinementInput
): Promise<AiContentRefinementOutput> {
  return aiContentRefinementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineContentPrompt',
  input: {schema: AiContentRefinementInputSchema},
  output: {schema: AiContentRefinementOutputSchema},
  prompt: `You are an expert content editor for an educational institution. Your goal is to provide specific and actionable suggestions to improve draft announcements or messages for a school website.

Here is the draft content:

Draft Content: {{{draftContent}}}

Based on the draft content, provide the following:

1.  **Clarity Improvements**: Suggest how to make the message clearer and easier to understand for a general audience, avoiding jargon where possible. Focus on sentence structure, word choice, and flow.
2.  **Tone Adjustments**: Provide advice on adjusting the tone to be professional, welcoming, and appropriate for a school environment. Ensure it conveys the intended emotion effectively.
3.  **Conciseness Edits**: Identify opportunities to shorten the message without losing essential information, making it more impactful and easier to read quickly.
4.  **Overall Feedback**: Offer a general summary of the content's strengths and areas for improvement, and any other relevant advice.

Ensure your suggestions are constructive and easy to implement. Output your response in a JSON format matching the provided schema.`,
});

const aiContentRefinementFlow = ai.defineFlow(
  {
    name: 'aiContentRefinementFlow',
    inputSchema: AiContentRefinementInputSchema,
    outputSchema: AiContentRefinementOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
