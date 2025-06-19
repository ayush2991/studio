'use server';

/**
 * @fileOverview AI Portfolio Assistant flow that analyzes project descriptions and suggests improvements.
 *
 * - analyzePortfolio - A function that analyzes the portfolio and suggests improvements.
 * - AnalyzePortfolioInput - The input type for the analyzePortfolio function.
 * - AnalyzePortfolioOutput - The return type for the analyzePortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePortfolioInputSchema = z.object({
  projectDescriptions: z
    .array(z.string())
    .describe('An array of project descriptions from the portfolio.'),
  targetRoles: z.string().describe('The target roles the ML Engineer is applying for.'),
});
export type AnalyzePortfolioInput = z.infer<typeof AnalyzePortfolioInputSchema>;

const AnalyzePortfolioOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of suggestions to improve the portfolio.'),
});
export type AnalyzePortfolioOutput = z.infer<typeof AnalyzePortfolioOutputSchema>;

export async function analyzePortfolio(input: AnalyzePortfolioInput): Promise<AnalyzePortfolioOutput> {
  return analyzePortfolioFlow(input);
}

const analyzePortfolioPrompt = ai.definePrompt({
  name: 'analyzePortfolioPrompt',
  input: {schema: AnalyzePortfolioInputSchema},
  output: {schema: AnalyzePortfolioOutputSchema},
  prompt: `You are an AI Portfolio Assistant that helps ML Engineers improve their portfolios.

You will analyze the project descriptions and suggest improvements based on the target roles the ML Engineer is applying for.

Use the context of successful ML Engineer portfolios to generate suggestions.

Project Descriptions:
{{#each projectDescriptions}}
- {{{this}}}
{{/each}}

Target Roles: {{{targetRoles}}}

Suggestions (Output as a numbered list):
`, // Ensure the output is formatted as a numbered list
});

const analyzePortfolioFlow = ai.defineFlow(
  {
    name: 'analyzePortfolioFlow',
    inputSchema: AnalyzePortfolioInputSchema,
    outputSchema: AnalyzePortfolioOutputSchema,
  },
  async input => {
    const {output} = await analyzePortfolioPrompt(input);
    return output!;
  }
);
