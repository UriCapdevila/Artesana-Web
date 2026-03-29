import { productService } from '../services/product.service';
import ProductCard from './ProductCard';

interface ProductShowcaseProps {
  excludeId?: string;
}

export default async function ProductShowcase({ excludeId }: ProductShowcaseProps) {
  const products = excludeId
    ? await productService.getRelated(excludeId)
    : (await productService.getAll()).slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          listPosition={index}
        />
      ))}
    </div>
  );
}
