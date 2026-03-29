/**
 * @deprecated Import products from '@/features/products' instead.
 * This re-export exists for backward compatibility.
 */
import { mockProducts } from '@/features/products/data/mock-products';
import type { Product as NewProduct } from '@/features/products/types/product.types';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  imageHint: string;
};

/**
 * Legacy products array for backward compatibility.
 * Maps new Product type to old format.
 */
export const products: Product[] = mockProducts.map((p, index) => ({
  id: index + 1,
  name: p.name,
  description: p.description,
  price: p.price,
  image: p.images[0]?.url ?? '',
  imageHint: p.images[0]?.hint ?? '',
}));
