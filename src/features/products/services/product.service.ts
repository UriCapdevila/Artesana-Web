import type { Product, ProductFilters } from '../types/product.types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? '';

/**
 * Product Service — abstraction layer between UI and data source.
 * Today: mock data. Tomorrow: REST API fetch.
 */
class ProductService {
  async getAll(filters?: ProductFilters): Promise<Product[]> {
    const { mockProducts } = await import('../data/mock-products');
    let result = [...mockProducts];

    if (filters?.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (filters?.minPrice !== undefined) {
      result = result.filter((p) => p.price >= filters.minPrice!);
    }
    if (filters?.maxPrice !== undefined) {
      result = result.filter((p) => p.price <= filters.maxPrice!);
    }
    if (filters?.sortBy) {
      switch (filters.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
        case 'name':
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
    }

    return result;
  }

  async getById(id: string): Promise<Product | null> {
    const products = await this.getAll();
    return products.find((p) => p.id === id) ?? null;
  }

  async getBySlug(slug: string): Promise<Product | null> {
    const products = await this.getAll();
    return products.find((p) => p.slug === slug) ?? null;
  }

  async getRelated(productId: string, limit = 4): Promise<Product[]> {
    const products = await this.getAll();
    const current = products.find((p) => p.id === productId);
    if (!current) return products.slice(0, limit);

    // Prioritize same category, then others
    const sameCategory = products.filter(
      (p) => p.id !== productId && p.category === current.category
    );
    const others = products.filter(
      (p) => p.id !== productId && p.category !== current.category
    );
    return [...sameCategory, ...others].slice(0, limit);
  }
}

export const productService = new ProductService();
