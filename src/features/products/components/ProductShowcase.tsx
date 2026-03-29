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
    <div className="flex flex-wrap justify-center items-stretch gap-8 mx-auto">
      {products.map((product, index) => (
        <div key={product.id} className="flex w-full sm:w-[calc(50%-1rem)] lg:w-[300px]">
          <ProductCard
            product={product}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            listPosition={index}
          />
        </div>
      ))}
    </div>
  );
}
