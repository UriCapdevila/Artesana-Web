export type ProductCategory = 'notebook' | 'embroidery' | 'kit' | 'accessory';

export interface ProductImage {
  url: string;
  alt: string;
  hint: string;
  isPrimary: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  currency: string;
  category: ProductCategory;
  tags: string[];
  images: ProductImage[];
  stock: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'name';
}

/**
 * Legacy type for backward compatibility during migration.
 * Components still using this will be migrated incrementally.
 */
export interface LegacyProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  imageHint: string;
}
