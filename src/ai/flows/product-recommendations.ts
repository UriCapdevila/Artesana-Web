'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized product recommendations based on a customer's purchase history.
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
  prompt: `You are an expert recommendation system for artisanal goods, specializing in handcrafted notebooks and embroidery. Given a customer's purchase history, you will recommend other products that they might be interested in.

  Available Product Categories:
  - Hand-stitched leather notebooks
  - Fabric-covered journals
  - Floral embroidery kits
  - Finished embroidery hoops for decoration
  - Custom-designed notebooks

  Purchase History:
  {{#each purchaseHistory}}- {{this}}\n{{/each}}

  Based on this history, suggest 3 other specific products they might like. Be creative with the product names.

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
