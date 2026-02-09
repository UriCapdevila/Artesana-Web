import { products } from "@/lib/products";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ProductShowcase({ excludeId }: { excludeId?: number }) {
  let relatedProducts = products;
  
  if (excludeId) {
    relatedProducts = products.filter(p => p.id !== excludeId);
  }
  
  const featuredProducts = relatedProducts.slice(0, 4);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="relative aspect-[4/3] w-full mb-4">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="rounded-md object-cover" 
                  data-ai-hint={product.imageHint}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-auto pt-4">
               <p className="text-xl font-semibold text-primary">€{product.price}</p>
              <Button asChild>
                <Link href={`/products/${product.id}`}>Ver Detalles</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
