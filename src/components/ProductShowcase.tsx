import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductShowcase({ excludeId }: { excludeId?: number }) {
  let relatedProducts = products;
  
  if (excludeId) {
    relatedProducts = products.filter(p => p.id !== excludeId);
  }
  
  const featuredProducts = relatedProducts.slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      ))}
    </div>
  );
}
