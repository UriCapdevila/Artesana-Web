'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized jewelry recommendations based on a customer's purchase history.
 *
 * - `getProductRecommendations`: A function that takes a customer's purchase history and returns a list of recommended product names.
 * - `ProductRecommendationsInput`: The input type for the `getProductRecommendations` function, which includes the customer's purchase history.
 * - `ProductRecommendationsOutput`: The output type for the `getProductRecommendations` function, which is a list of product names.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationsInputSchema = z.object({
  purchaseHistory: z
    .array(z.string())
    .describe('A list of product names that the customer has previously purchased.'),
});
export type ProductRecommendationsInput = z.infer<typeof ProductRecommendationsInputSchema>;

const ProductRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('A list of recommended product names based on the purchase history.'),
});
export type ProductRecommendationsOutput = z.infer<typeof ProductRecommendationsOutputSchema>;

export async function getProductRecommendations(
  input: ProductRecommendationsInput
): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const productRecommendationsPrompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are an expert jewelry recommendation system. Given a customer's purchase history, you will recommend other products that they might be interested in.

  Purchase History:
  {{#each purchaseHistory}}- {{this}}\n{{/each}}

  Recommendations:`,
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await productRecommendationsPrompt(input);
    return output!;
  }
);
